# CLAUDE.md — Belgian Fauna & Flora Quiz

## Project overview
A trilingual (NL/EN/FR) web app for learning Belgian species through quizzes and an encyclopedia.
Deployed on Netlify. Vanilla HTML/CSS/JS — no build step, no framework.

## File structure
- `index.html` — single-page app with all screens (home, quiz, encyclopedia, phylogeny)
- `js/data/species_data.js` — ALL species data as `window.speciesData = [...]`
- `js/app.js` — quiz engine, encyclopedia rendering, phylogeny tree, i18n, navigation
- `css/style.css` — all styles
- `Belgium_species_dataset/` — optional per-species image folders
- `assets/images/` — range maps and other assets

## Species data format
Every species entry in `species_data.js` MUST follow this exact structure:
```javascript
{
    id: "unique_id",                    // string, unique
    scientific: "Genus species",        // Latin name
    family: "Familyname",              // taxonomic family
    category: "birds",                  // one of: fauna, birds, insects, flora, fungi, trees, agriculture
    difficulty: "medium",               // one of: easy, medium, hard
    iucn: "LC",                        // one of: LC, NT, VU, EN, CR
    xenoCanto: "https://xeno-canto.org/explore?query=...",  // birds only, optional
    plantGrade: "dicot",               // flora/trees only: "dicot" or "monocot", optional
    name: { nl: "...", en: "...", fr: "..." },
    habitat: { nl: "...", en: "...", fr: "..." },
    rarity: { nl: "...", en: "...", fr: "..." },
    description: { nl: "...", en: "...", fr: "..." },
    size: { nl: "...", en: "...", fr: "..." },
    diet: { nl: "...", en: "...", fr: "..." },
    funfact: { nl: "...", en: "...", fr: "..." },  // optional
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/...",
    images: ["url1", "url2"],           // optional, for quiz image rotation
}
```

## Categories & sub-filters
- `fauna` → sub-tabs: fauna_mammal, fauna_reptile, fauna_amphibian, fauna_fish, fauna_aquatic
- `birds` → sub-tabs: birds_passerine, birds_raptor, birds_water, birds_dove, birds_other
- `flora` → sub-tabs: flora_dicot, flora_monocot
- `trees` → sub-tabs: trees_conifer, trees_deciduous
- `insects`, `fungi`, `agriculture` → no sub-tabs

## Phylogeny tree
The taxonomy tree is in `initPhylo()` in app.js. When adding species with new families,
add the family to the appropriate order/group in `PHYLO_TAXONOMY`.

## Key rules
- ALL text-facing content must be trilingual (nl, en, fr)
- Images use Wikimedia Commons URLs (640px thumbs)
- Never use `sudo` for npm commands
- Commit messages should describe what species/features were added

## Common tasks
- "Add a new species" → add entry to species_data.js, update phylogeny if needed
- "Add a sub-filter" → add button in index.html sub-group, add case in app.js switch
- "Add a difficulty level" → add chip in index.html, add i18n strings in app.js
