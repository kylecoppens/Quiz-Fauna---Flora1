#!/usr/bin/env node
/**
 * apply-review.mjs
 *
 * Reads the JSON export from image-review.html and updates
 * the image URLs in species_data.js.
 *
 * Usage:
 *   node tools/apply-review.mjs image-review-2026-03-27.json
 *   node tools/apply-review.mjs image-review-2026-03-27.json --dry
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_FILE = path.join(__dirname, '../js/data/species_data.js');
const DRY_RUN = process.argv.includes('--dry');

const reviewFile = process.argv.find(a => a.endsWith('.json'));
if (!reviewFile) {
  console.error('Usage: node tools/apply-review.mjs <review-file.json> [--dry]');
  process.exit(1);
}

const review = JSON.parse(fs.readFileSync(reviewFile, 'utf8'));
const replacements = review.filter(r => r.status === 'replaced' && r.newImage && r.newImage !== r.oldImage);
const additions    = review.filter(r => r.addedImages?.length > 0);
const removals     = review.filter(r => r.removedImages?.length > 0);
const reorders     = review.filter(r => r.orderedImages?.length > 0);

if (replacements.length === 0 && additions.length === 0 && removals.length === 0 && reorders.length === 0) {
  console.log('Geen wijzigingen gevonden in het review bestand.');
  process.exit(0);
}

// Parse species_data.js as text — we edit it with string replacement
let content = fs.readFileSync(DATA_FILE, 'utf8');
let changed = 0;

// ── 1. Replace primary images ──────────────────────────────────────────────
if (replacements.length > 0) {
  console.log(`\n📋 ${replacements.length} foto(s) te vervangen:\n`);
  for (const r of replacements) {
    const escaped = r.oldImage.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escaped, 'g');
    const before = content;
    content = content.replace(regex, r.newImage);
    if (content !== before) {
      console.log(`  ✓ ${r.id} (${r.nameNl || r.scientific})`);
      console.log(`    Oud:   ${r.oldImage.slice(0, 70)}`);
      console.log(`    Nieuw: ${r.newImage.slice(0, 70)}\n`);
      changed++;
    } else {
      console.log(`  ⚠ Niet gevonden: ${r.id} — ${r.oldImage.slice(0, 60)}`);
    }
  }
}

// ── 2. Add extra images to species.images arrays ───────────────────────────
if (additions.length > 0) {
  console.log(`\n➕ ${additions.length} soort(en) extra foto's toevoegen:\n`);

  // Parse the JS to get full data, modify, then serialize back
  // We extract the array literal, parse it, modify it, then write it back.
  const dataMatch = content.match(/^window\.speciesData\s*=\s*(\[[\s\S]*\]);?\s*$/m);
  if (!dataMatch) {
    console.error('❌ Kon species_data array niet parsen voor toevoeging van afbeeldingen.');
  } else {
    // eslint-disable-next-line no-eval
    const data = eval(dataMatch[1]); // safe — local file we control

    for (const r of additions) {
      const species = data.find(s => s.id === r.id);
      if (!species) { console.log(`  ⚠ Soort niet gevonden: ${r.id}`); continue; }

      if (!Array.isArray(species.images)) species.images = [];
      const before = species.images.length;
      for (const url of r.addedImages) {
        if (!species.images.includes(url)) species.images.push(url);
      }
      const added = species.images.length - before;
      if (added > 0) {
        console.log(`  ✓ ${r.id} (${r.nameNl || r.scientific}): +${added} foto${added !== 1 ? "'s" : ''}`);
        changed++;
      }
    }

    // ── Remove images from species.images arrays ─────────────────────────
    if (removals.length > 0) {
      console.log(`\n✕ ${removals.length} soort(en) foto's verwijderen:\n`);
      for (const r of removals) {
        const species = data.find(s => s.id === r.id);
        if (!species) { console.log(`  ⚠ Soort niet gevonden: ${r.id}`); continue; }

        if (!Array.isArray(species.images)) continue;
        const before = species.images.length;
        species.images = species.images.filter(u => !r.removedImages.includes(u));
        const removed = before - species.images.length;
        if (removed > 0) {
          console.log(`  ✓ ${r.id} (${r.nameNl || r.scientific}): -${removed} foto${removed !== 1 ? "'s" : ''}`);
          changed++;
        }
      }
    }

    // ── Apply custom image order ─────────────────────────────────────────
    if (reorders.length > 0) {
      console.log(`\n🔀 ${reorders.length} soort(en) foto-volgorde aanpassen:\n`);
      for (const r of reorders) {
        const species = data.find(s => s.id === r.id);
        if (!species) continue;
        // orderedImages[0] = new primary, rest = new images[]
        const ordered = r.orderedImages.filter(u => !(r.removedImages || []).includes(u));
        if (!ordered.length) continue;
        species.image  = ordered[0];
        species.images = ordered.slice(1);
        console.log(`  ✓ ${r.id} (${r.nameNl}): volgorde aangepast, primair → ${ordered[0].slice(0,60)}...`);
        changed++;
      }
    }

    // Serialize back
    content = `window.speciesData = ${JSON.stringify(data, null, 2)};\n`;
  }
}

if (DRY_RUN) {
  console.log(`\n[Dry run] ${changed} wijzigingen zouden worden doorgevoerd.`);
} else {
  fs.writeFileSync(DATA_FILE, content, 'utf8');
  console.log(`\n✅ ${changed} wijzigingen doorgevoerd in species_data.js`);
}
