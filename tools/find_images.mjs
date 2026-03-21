#!/usr/bin/env node
/**
 * find_images.mjs — Efficiënte foto-zoeker voor Belgische Flora & Fauna
 *
 * Strategie (gebaseerd op API-benchmarks):
 *   1. Wikipedia pageimages  — batch 50/call, ~170ms totaal  (primair)
 *   2. Wikidata SPARQL        — batch VALUES, ~60ms           (fallback 1)
 *   3. iNaturalist API        — 2 calls per soort, ~1.4s     (fallback 2)
 *
 * Gebruik:
 *   node tools/find_images.mjs                  # controleer alle soorten
 *   node tools/find_images.mjs --missing        # alleen soorten zonder werkende URL
 *   node tools/find_images.mjs --fix            # update species_data.js automatisch
 *   node tools/find_images.mjs --species "Viola tricolor"  # 1 soort testen
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SPECIES_FILE = path.join(__dirname, '../js/data/species_data.js');
const USER_AGENT = 'BelgianFaunaFloraQuiz/2.0 (https://github.com/user/quiz; educational)';

// ─── Argument parsing ────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const FLAG_MISSING = args.includes('--missing');
const FLAG_FIX     = args.includes('--fix');
const FLAG_DRY     = args.includes('--dry');
const SINGLE       = args.includes('--species')
  ? args[args.indexOf('--species') + 1]
  : null;

// ─── Helpers ─────────────────────────────────────────────────────────────────

async function fetchJSON(url, headers = {}) {
  const res = await fetch(url, {
    headers: { 'User-Agent': USER_AGENT, ...headers }
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json();
}

/**
 * Check if an image URL is likely valid without downloading it.
 * For Wikimedia Commons thumb URLs we validate the filename via the API
 * instead of fetching the full image — avoids 403s on HEAD requests.
 */
async function urlReachable(url) {
  if (!url) return false;

  // Special:FilePath — always valid if Wikidata returned it
  if (url.includes('Special:FilePath')) return true;

  // iNaturalist S3 URLs — assume valid if they look well-formed
  if (url.includes('inaturalist-open-data.s3')) return true;

  // Wikimedia Commons thumb URL — validate via Commons imageinfo API (no bandwidth)
  const thumbMatch = url.match(/commons\/thumb\/[a-f0-9]\/[a-f0-9]{2}\/([^/]+)\//);
  if (thumbMatch) {
    const filename = decodeURIComponent(thumbMatch[1]);
    try {
      const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(filename)}&prop=imageinfo&iiprop=url&format=json`;
      const data = await fetchJSON(apiUrl);
      const pages = Object.values(data?.query?.pages || {});
      return pages.length > 0 && !pages[0].missing;
    } catch {
      return false;
    }
  }

  // Fallback: simple HEAD request
  try {
    const res = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      signal: AbortSignal.timeout(5000),
      headers: { 'User-Agent': USER_AGENT }
    });
    return res.ok;
  } catch {
    return false;
  }
}

// ─── Strategy 1: Wikipedia pageimages (batch 50) ────────────────────────────
/**
 * Returns { scientificName → thumbUrl } for up to 50 species in ONE API call.
 * Wikipedia articles often redirect from Latin names to common-name pages —
 * the redirects=1 flag resolves this automatically.
 */
async function wikipediaBatch(scientificNames) {
  const CHUNK = 50;
  const results = {};

  for (let i = 0; i < scientificNames.length; i += CHUNK) {
    const chunk = scientificNames.slice(i, i + CHUNK);
    const titles = chunk.map(n => n.replace(/ /g, '_')).join('|');
    const url = `https://en.wikipedia.org/w/api.php?action=query`
      + `&titles=${encodeURIComponent(titles)}`
      + `&redirects=1`
      + `&prop=pageimages`
      + `&pithumbsize=640`
      + `&pilicense=any`
      + `&format=json`;

    try {
      const data = await fetchJSON(url);
      const q = data.query || {};

      // Build redirect map: normalised original → final title
      const redirectMap = {};
      for (const r of (q.redirects || [])) {
        redirectMap[r.from.toLowerCase().replace(/_/g, ' ')] = r.to.toLowerCase().replace(/_/g, ' ');
      }
      // Also handle normalizations (spaces→underscores etc)
      for (const n of (q.normalized || [])) {
        redirectMap[n.from.toLowerCase().replace(/_/g, ' ')] = n.to.toLowerCase().replace(/_/g, ' ');
      }

      // pages keyed by final title
      const byTitle = {};
      for (const page of Object.values(q.pages || {})) {
        if (page.thumbnail?.source) {
          byTitle[page.title.toLowerCase().replace(/_/g, ' ')] = page.thumbnail.source;
        }
      }

      // Map results back to original scientific names
      for (const name of chunk) {
        const key = name.toLowerCase();
        const redirected = redirectMap[key] || key;
        if (byTitle[redirected]) {
          results[name] = byTitle[redirected];
        }
      }
    } catch (err) {
      console.error(`  Wikipedia batch error (chunk ${i}–${i + CHUNK}):`, err.message);
    }

    if (i + CHUNK < scientificNames.length) {
      await new Promise(r => setTimeout(r, 100)); // respectful pause
    }
  }

  return results;
}

// ─── Strategy 2: Wikidata SPARQL (batch VALUES) ──────────────────────────────
/**
 * Wikidata taxon P225 → P18 image property.
 * Returns Special:FilePath URLs, appended with ?width=640.
 * Fastest single call, but lower coverage than Wikipedia.
 */
async function wikidataBatch(scientificNames) {
  const values = scientificNames.map(n => `"${n}"`).join(' ');
  const sparql = `
    SELECT ?name ?image WHERE {
      VALUES ?name { ${values} }
      ?item wdt:P225 ?name .
      ?item wdt:P18 ?image .
    }
  `.trim();

  const url = 'https://query.wikidata.org/sparql?query='
    + encodeURIComponent(sparql)
    + '&format=json';

  try {
    const data = await fetchJSON(url, { Accept: 'application/sparql-results+json' });
    const results = {};
    for (const row of data.results?.bindings || []) {
      const name  = row.name?.value;
      const image = row.image?.value; // Special:FilePath/Filename.jpg
      if (name && image && !results[name]) {
        // Convert Special:FilePath to thumb URL via ?width=640
        const encoded = image.includes('Special:FilePath')
          ? image + '?width=640'
          : image;
        results[name] = encoded;
      }
    }
    return results;
  } catch (err) {
    console.error('  Wikidata SPARQL error:', err.message);
    return {};
  }
}

// ─── Strategy 3: iNaturalist (per soort, fallback) ──────────────────────────
/**
 * Two-step: taxa lookup → CC-licensed observation photo.
 * Slower (~1.4s/species) but great coverage and quality.
 */
async function inatSingle(scientificName) {
  try {
    // Step 1: find taxon ID
    const taxaUrl = `https://api.inaturalist.org/v1/taxa?q=${encodeURIComponent(scientificName)}&rank=species&limit=5`;
    const taxaData = await fetchJSON(taxaUrl);
    const taxon = taxaData.results?.find(r =>
      r.name.toLowerCase() === scientificName.toLowerCase()
    );
    if (!taxon) return null;

    // Step 2: CC-licensed research-grade observation photo
    const obsUrl = `https://api.inaturalist.org/v1/observations`
      + `?taxon_id=${taxon.id}`
      + `&photos=true`
      + `&photo_license=cc-by,cc-by-sa`
      + `&quality_grade=research`
      + `&per_page=1`;
    const obsData = await fetchJSON(obsUrl);
    const photo = obsData.results?.[0]?.photos?.[0];
    if (!photo) return null;

    // Use 'large' size (768-1024px) — replace size token in URL
    return photo.url.replace('/square.', '/large.').replace('/medium.', '/large.');
  } catch (err) {
    console.error(`  iNaturalist error for "${scientificName}":`, err.message);
    return null;
  }
}

// ─── Main finder: tries all strategies ───────────────────────────────────────
async function findImages(scientificNames, verbose = false) {
  const results = {};
  let missing = [...scientificNames];

  console.log(`\n📷 Zoeken naar foto's voor ${scientificNames.length} soorten...\n`);

  // ── Strategy 1: Wikipedia pageimages (batch) ──
  const t1 = Date.now();
  process.stdout.write(`  [1/3] Wikipedia pageimages (batch ${Math.ceil(missing.length / 50)} calls)... `);
  const wikiResults = await wikipediaBatch(missing);
  const wikiFound = Object.keys(wikiResults).length;
  console.log(`✓ ${wikiFound}/${missing.length} gevonden (${Date.now() - t1}ms)`);

  for (const [name, url] of Object.entries(wikiResults)) {
    results[name] = { url, source: 'wikipedia' };
  }
  missing = missing.filter(n => !results[n]);

  if (missing.length === 0) {
    console.log('  Alle soorten gevonden via Wikipedia!\n');
    return results;
  }

  // ── Strategy 2: Wikidata SPARQL (batch) ──
  const t2 = Date.now();
  process.stdout.write(`  [2/3] Wikidata SPARQL (${missing.length} resterende)... `);
  const wdResults = await wikidataBatch(missing);
  const wdFound = Object.keys(wdResults).length;
  console.log(`✓ ${wdFound}/${missing.length} gevonden (${Date.now() - t2}ms)`);

  for (const [name, url] of Object.entries(wdResults)) {
    results[name] = { url, source: 'wikidata' };
  }
  missing = missing.filter(n => !results[n]);

  if (missing.length === 0) {
    console.log('  Alle resterende soorten gevonden via Wikidata!\n');
    return results;
  }

  // ── Strategy 3: iNaturalist (sequential, only for remaining) ──
  const t3 = Date.now();
  console.log(`  [3/3] iNaturalist (${missing.length} soorten, ~${missing.length * 1.5}s)...`);

  for (const name of missing) {
    process.stdout.write(`    ${name}... `);
    const url = await inatSingle(name);
    if (url) {
      console.log('✓');
      results[name] = { url, source: 'inaturalist' };
    } else {
      console.log('✗ niet gevonden');
      results[name] = { url: null, source: null };
    }
    await new Promise(r => setTimeout(r, 500)); // rate limiting
  }

  const inatFound = missing.filter(n => results[n]?.url).length;
  console.log(`  iNaturalist: ${inatFound}/${missing.length} gevonden (${Date.now() - t3}ms)\n`);

  return results;
}

// ─── Load species_data.js ─────────────────────────────────────────────────────
function loadSpeciesData() {
  const content = fs.readFileSync(SPECIES_FILE, 'utf8');
  // Execute the file to get speciesData array
  const match = content.match(/window\.speciesData\s*=\s*(\[[\s\S]*\]);?/);
  if (!match) throw new Error('Cannot find window.speciesData in species_data.js');

  // Use a simple eval in Node context
  const arr = eval(match[1]); // eslint-disable-line no-eval
  return { content, arr };
}

/** Replace image URL for a specific species ID in the file content.
 *  Handles both JS-object style (id: "...") and JSON style ("id": "...") */
function replaceImageUrl(content, speciesId, newUrl) {
  // Try both id formats used in the file
  const searches = [
    `id: "${speciesId}"`,    // JS object literal style (new entries)
    `"id": "${speciesId}"`   // JSON style (original entries)
  ];

  let idIdx = -1;
  for (const search of searches) {
    idIdx = content.indexOf(search);
    if (idIdx !== -1) break;
  }
  if (idIdx === -1) return content;

  // Find end of this species block (next top-level `{` on its own line, or end of array)
  const blockEnd = content.indexOf('\n  {', idIdx + 1);
  const blockSlice = blockEnd === -1
    ? content.slice(idIdx)
    : content.slice(idIdx, blockEnd);

  // Match both image field styles: image: "..." and "image": "..."
  const imgMatch = blockSlice.match(/"?image"?:\s*"([^"]*)"/);
  if (!imgMatch) return content;

  // Escape $ in URL to prevent backreference interpretation in replace()
  const safeNewUrl = newUrl.replace(/\$/g, '$$$$');
  const newBlock = blockSlice.replace(/"?image"?:\s*"[^"]*"/, `${imgMatch[0].split(':')[0]}: "${safeNewUrl}"`);

  return content.slice(0, idIdx) + newBlock + (blockEnd === -1 ? '' : content.slice(blockEnd));
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ─── Validate existing URLs ───────────────────────────────────────────────────
async function checkBrokenUrls(species) {
  console.log(`\n🔍 Controleer ${species.length} bestaande URLs...\n`);
  const CONCURRENCY = 10;
  const broken = [];

  for (let i = 0; i < species.length; i += CONCURRENCY) {
    const chunk = species.slice(i, i + CONCURRENCY);
    const checks = await Promise.all(
      chunk.map(async sp => ({
        sp,
        ok: sp.image ? await urlReachable(sp.image) : false
      }))
    );
    for (const { sp, ok } of checks) {
      if (!ok) broken.push(sp);
    }
    process.stdout.write(`\r  ${Math.min(i + CONCURRENCY, species.length)}/${species.length} gecontroleerd...`);
  }
  console.log(`\n  ${broken.length} gebroken URLs gevonden\n`);
  return broken;
}

// ─── Main ────────────────────────────────────────────────────────────────────
async function main() {
  const { content, arr: allSpecies } = loadSpeciesData();

  // Determine which species to process
  let toProcess = allSpecies;

  if (SINGLE) {
    toProcess = allSpecies.filter(s =>
      s.scientific?.toLowerCase().includes(SINGLE.toLowerCase()) ||
      s.name?.nl?.toLowerCase().includes(SINGLE.toLowerCase())
    );
    if (toProcess.length === 0) {
      console.error(`Soort niet gevonden: "${SINGLE}"`);
      process.exit(1);
    }
    console.log(`Testing: ${toProcess.map(s => s.scientific).join(', ')}`);
  } else if (FLAG_MISSING) {
    // Find species with missing, broken, or placeholder images
    const placeholder = allSpecies.filter(s =>
      !s.image ||
      s.image.includes('/a/ab/') ||
      s.image.includes('placeholder') ||
      s.image.includes('example.com')
    );
    console.log(`${placeholder.length} soorten met placeholder-URLs — controleer ook op gebroken URLs...`);
    const broken = await checkBrokenUrls(allSpecies.filter(s => s.image && !s.image.includes('/a/ab/')));
    toProcess = [...new Set([...placeholder, ...broken])];
    console.log(`Totaal te verwerken: ${toProcess.length} soorten`);
  }

  if (toProcess.length === 0) {
    console.log('Niets te doen — alle soorten hebben werkende foto-URLs.');
    return;
  }

  // Find images
  const names = toProcess.map(s => s.scientific);
  const imageResults = await findImages(names, true);

  // Show results
  console.log('─'.repeat(60));
  console.log(`Resultaten:`);
  console.log('─'.repeat(60));

  let found = 0, notFound = 0;
  const updates = [];

  for (const sp of toProcess) {
    const result = imageResults[sp.scientific];
    if (result?.url) {
      found++;
      const source = result.source.padEnd(12);
      const name = (sp.name?.nl || sp.scientific).padEnd(30);
      console.log(`  ✓ [${source}] ${name} → ${result.url.substring(0, 60)}...`);
      updates.push({ id: sp.id, scientific: sp.scientific, url: result.url, source: result.source });
    } else {
      notFound++;
      console.log(`  ✗ [niet gevonden ] ${sp.name?.nl || sp.scientific} (${sp.scientific})`);
    }
  }

  console.log('─'.repeat(60));
  console.log(`✓ Gevonden: ${found} | ✗ Niet gevonden: ${notFound}`);

  // Apply fixes
  if (FLAG_FIX && updates.length > 0) {
    if (FLAG_DRY) {
      console.log('\n[DRY RUN] Geen wijzigingen opgeslagen.');
      return;
    }
    console.log(`\n📝 ${updates.length} URLs bijwerken in species_data.js...`);
    let newContent = content;
    let successCount = 0;

    for (const { id, scientific, url } of updates) {
      const before = newContent;
      newContent = replaceImageUrl(newContent, id, url);
      if (newContent !== before) {
        successCount++;
      } else {
        console.warn(`  ⚠️  Kon URL niet vervangen voor: ${scientific} (id: ${id})`);
      }
    }

    fs.writeFileSync(SPECIES_FILE, newContent, 'utf8');
    console.log(`✅ ${successCount}/${updates.length} URLs succesvol bijgewerkt in species_data.js`);
  } else if (FLAG_FIX) {
    console.log('\nNiets bij te werken.');
  } else {
    console.log('\nTip: Voeg --fix toe om de URLs automatisch bij te werken.');
  }
}

main().catch(err => {
  console.error('Fout:', err);
  process.exit(1);
});
