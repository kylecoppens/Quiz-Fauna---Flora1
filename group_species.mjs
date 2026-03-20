import fs from 'fs';
const data = JSON.parse(fs.readFileSync('/tmp/missing_species_info.json', 'utf8'));
const cats = {};
data.forEach(s => {
  if (!s.scientific || s.scientific.trim() === '') return;
  if (s.scientific === 'Parus caeruleus') return; // synonym of Cyanistes caeruleus
  if (!cats[s.category]) cats[s.category] = [];
  cats[s.category].push(s);
});
Object.entries(cats).sort().forEach(([cat, species]) => {
  console.log(`\n${cat}: ${species.length}`);
  species.sort((a,b) => a.scientific.localeCompare(b.scientific)).forEach(s => {
    console.log(`  ${s.scientific} (${s.family}) -> ${s.image}`);
  });
});
