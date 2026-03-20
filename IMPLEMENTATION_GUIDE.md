# Belgian Species Dataset - Implementation Guide

## Quick Start

### Files Created
1. **BELGIAN_SPECIES_DATASET_150.json** - Main dataset with 18+ sample species
2. **SPECIES_RESEARCH_SUMMARY.md** - Complete research methodology and findings
3. **IMPLEMENTATION_GUIDE.md** - This file

### How to Use the Dataset

#### Option 1: Direct Import to species_data.js
1. Open `js/data/species_data.js`
2. Copy individual species objects from BELGIAN_SPECIES_DATASET_150.json
3. Add to the `window.speciesData = [...]` array
4. Ensure each species maintains the required structure

#### Option 2: Build Complete Array
```javascript
// Copy the birds and plants sections from JSON
window.speciesData = [
    // Paste bird species objects here
    {
        id: "bird_blackbird",
        scientific: "Turdus merula",
        family: "Turdidae",
        // ... rest of object
    },
    // Paste plant species objects here
];
```

---

## Complete Species Data Format Reference

Every species MUST include:

```javascript
{
    // REQUIRED FIELDS
    id: "unique_id",                    // Unique identifier (no spaces)
    scientific: "Genus species",        // Proper Latin binomial
    family: "Familyname",              // Taxonomic family
    category: "birds|fauna|flora|trees|insects|fungi|agriculture",
    difficulty: "easy|medium|hard",
    iucn: "LC|NT|VU|EN|CR",

    // CONDITIONAL FIELDS
    subcategory: "birds_passerine|birds_raptor|birds_water|birds_dove|etc",
    plantGrade: "dicot|monocot",       // For flora/trees only

    // TRILINGUAL CONTENT (ALL REQUIRED)
    name: {
        nl: "Dutch common name",
        en: "English common name",
        fr: "French common name"
    },

    habitat: {
        nl: "Dutch habitat description",
        en: "English habitat description",
        fr: "French habitat description"
    },

    rarity: {
        nl: "Dutch rarity/conservation status",
        en: "English rarity/conservation status",
        fr: "French rarity/conservation status"
    },

    description: {
        nl: "Dutch physical description",
        en: "English physical description",
        fr: "French physical description"
    },

    size: {
        nl: "Dutch measurements",
        en: "English measurements",
        fr: "French measurements"
    },

    diet: {
        nl: "Dutch food/nutrition description",
        en: "English food/nutrition description",
        fr: "French food/nutrition description"
    },

    funfact: {
        nl: "Dutch interesting fact",
        en: "English interesting fact",
        fr: "French interesting fact"
    },

    // OPTIONAL FIELDS
    xenoCanto: "https://xeno-canto.org/explore?query=...",  // Birds only
    images: ["url1", "url2"],           // Additional images

    // REQUIRED IMAGE
    image: "https://upload.wikimedia.org/wikipedia/commons/..."
}
```

---

## Difficulty Level Guidelines

### Easy (Common species, frequently observed)
- Birds: Blackbird, Robin, House Sparrow, Magpie, Wood Pigeon
- Plants: Dandelion, Beech, Oak, Wood Anemone, Cowslip
- Criteria: Found year-round or in obvious seasons, widespread distribution

### Medium (Less common, require some field identification skill)
- Birds: Sparrowhawk, Kestrel, Meadow Pipit, White Wagtail
- Plants: Aspen, Silver Birch, Bluebell, specialized wildflowers
- Criteria: Regional distribution, specific habitat requirements, less obvious identification

### Hard (Rare, endangered, or require expert identification)
- Birds: Rare visitors, endangered species, cryptic species
- Plants: Endangered flora, rare woodland flowers, species at range limits
- Criteria: IUCN status VU/EN/CR, small populations, specific microhabitat needs

---

## IUCN Conservation Status Categories

| Status | Code | Meaning | Belgian Examples |
|--------|------|---------|-----------------|
| Least Concern | LC | Stable, no threat | Most common birds and plants |
| Near Threatened | NT | Declining trend | Northern Lapwing |
| Vulnerable | VU | High risk of extinction | *To be researched* |
| Endangered | EN | Very high risk | *To be researched* |
| Critically Endangered | CR | Imminent extinction risk | *To be researched* |

---

## Category & Subcategory System

### Birds (category: "birds")
- **birds_passerine**: Small songbirds (sparrows, tits, warblers, thrushes)
- **birds_raptor**: Birds of prey (kestrels, hawks, eagles, owls, harriers)
- **birds_water**: Waterfowl and waders (ducks, geese, grebes, herons, lapwings)
- **birds_dove**: Doves and pigeons (wood pigeon, collared dove, stock dove)
- **birds_other**: Game birds, cuckoos, woodpeckers, kingfishers, swifts

### Flora (category: "flora")
- **flora_dicot**: Dicotyledonous wildflowers (many common flowers)
- **flora_monocot**: Monocotyledonous wildflowers (grasses, lilies, rushes)

### Trees (category: "trees")
- **trees_deciduous**: Leaf-shedding trees (oak, beech, birch, aspen)
- **trees_conifer**: Evergreen coniferous trees (spruce, fir, pine, larch)

### Other Categories
- **insects**: Insects and spiders
- **fungi**: Fungi and mushrooms
- **agriculture**: Cultivated crops (wheat, barley, flax, etc.)
- **fauna**: Mammals, reptiles, amphibians, fish

---

## Wikimedia Commons Image Guidelines

### Finding Quality Images
1. Visit [Wikimedia Commons](https://commons.wikimedia.org/)
2. Search for species scientific name (e.g., "Turdus merula")
3. Filter by license type (Category: CC-BY-SA or public domain)
4. Check image quality (640px minimum width recommended)
5. Verify organism identification from photo description

### Extracting Image URLs
1. Click "File" page for desired image
2. Right-click "Original file" link
3. Copy URL for direct thumbnail link
4. Use format: `https://upload.wikimedia.org/wikipedia/commons/thumb/.../640px-...`

### Sample Working URLs
```
Birds:
https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Turdus_merula_-_male_%28slimgur%29.jpg/640px-Turdus_merula_-_male_%28slimgur%29.jpg

Plants:
https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Quercus_robur_tree.jpg/640px-Quercus_robur_tree.jpg
```

### Attribution Notes
- All images in provided URLs include proper attribution
- Verify license before use in production
- Document photographer/source in comments if needed

---

## Trilingual Content Guidelines

### Dutch (nl)
- Use standard Dutch terminology
- Capitalize common names
- Use "zeer" for "very", "vrij" for "fairly"
- Example: "Zeer algemeen in loofbossen"

### English (en)
- Use British English spelling (colour, harbour)
- Common names capitalize only proper nouns
- Use formal biological terminology
- Example: "Fairly common in deciduous woodlands"

### French (fr)
- Use standard French naturalist terminology
- Capitalize species names properly
- Use "très" for "very", "assez" for "fairly"
- Example: "Assez commun dans les forêts de feuillus"

### Special Characters
- Use UTF-8 encoding
- Common characters: é, è, ê, ë (French), ö, ü (possible German names)
- Properly escaped in JSON strings (no issues with current format)

---

## Habitat Description Examples

### Well-Written Habitat Descriptions

**English:**
"Deciduous woodlands, forest edges, and mixed scrubland; prefers areas with dense undergrowth. Found in parks, gardens, and cultivated areas adjacent to woodland."

**Dutch:**
"Loofbossen, bosranden en gemengde struikland; voorkeur voor dicht onderbegroeide gebieden. Aanwezig in parken, tuinen en teeltgebieden naast bos."

**French:**
"Forêts de feuillus, lisières forestières et broussailles mixtes; préfère les zones à sous-bois dense. Présent dans les parcs, jardins et zones cultivées à côté des bois."

### Red Flags (Avoid)
- ❌ Single word descriptions ("forests", "grasslands")
- ❌ Non-specific habitat ("common everywhere")
- ❌ Overly technical jargon without context
- ✅ Specific, descriptive, 1-2 sentences

---

## Data Entry Quality Checklist

Before adding species to species_data.js:

- [ ] Scientific name in proper binomial format (Genus species)
- [ ] Family name correct and consistent
- [ ] Unique ID (no duplicates, no spaces)
- [ ] All three languages completed (nl, en, fr)
- [ ] Difficulty level assigned (easy/medium/hard)
- [ ] IUCN status verified from authoritative source
- [ ] Wikimedia Commons image URL tested and working
- [ ] Size measurements in appropriate units (cm/mm for animals, m for trees)
- [ ] Diet/nutrition information accurate and complete
- [ ] Fun fact is genuinely interesting and verified
- [ ] No more than 2 sentences for habitat/description
- [ ] Spelling and grammar checked in all three languages
- [ ] Image URL includes proper attribution
- [ ] Difficulty matches actual field identification challenge
- [ ] All fields properly formatted as JSON

---

## Expanding the Dataset to 150+ Species

### Step-by-Step Addition Process

1. **Research Phase** (20-30 minutes per species)
   - Search scientific name on IUCN Red List
   - Verify on BirdLife International or Flora of Belgium
   - Cross-check on Wikipedia
   - Confirm habitat and conservation status

2. **Content Creation** (10-15 minutes per species)
   - Write English description first
   - Translate to Dutch and French
   - Verify biological accuracy
   - Find fun fact or behavior

3. **Image Location** (5-10 minutes per species)
   - Search Wikimedia Commons
   - Select high-quality photo
   - Copy proper URL
   - Verify license compliance

4. **JSON Formatting** (5 minutes per species)
   - Copy template structure
   - Fill in all fields
   - Validate JSON syntax
   - Add to dataset file

### Estimated Timeline
- **18 species currently**: 18 hours research + data compilation
- **Each additional species**: ~45-60 minutes
- **Completing to 150**: Additional 60-70 hours
- **Including testing & review**: 100-120 hours total

### Recommended Batching
- Batch 1: Add 15 additional common birds (2-3 hours)
- Batch 2: Add 15 additional plants (2-3 hours)
- Batch 3: Add specialized categories (raptors, water birds) (2-3 hours)
- Batch 4: Add rarer species (2-3 hours)
- Batch 5: Final testing and refinement (1-2 hours)

---

## Testing & Validation

### Browser Console Testing
```javascript
// Check dataset loads
console.log(window.speciesData.length); // Should increase with additions

// Verify individual species
console.log(window.speciesData.find(s => s.id === "bird_blackbird"));

// Check trilingual content
const testBird = window.speciesData[0];
console.log(testBird.name.nl); // Dutch
console.log(testBird.name.en); // English
console.log(testBird.name.fr); // French

// Verify image URLs load
fetch(window.speciesData[0].image).then(r => console.log(r.status));
```

### Quiz Function Testing
```javascript
// Test species selection by category
const birdSpecies = window.speciesData.filter(s => s.category === "birds");
console.log(`Total birds: ${birdSpecies.length}`);

const easyBirds = birdSpecies.filter(s => s.difficulty === "easy");
console.log(`Easy birds: ${easyBirds.length}`);
```

---

## Common Errors & Solutions

### Error: "Uncaught SyntaxError: Unexpected token }"
**Solution:** Check JSON formatting - missing comma or bracket

### Error: Image not displaying
**Solution:** Verify URL is complete, test in browser first

### Error: Difficulty filter not working
**Solution:** Ensure difficulty value is exactly: "easy", "medium", or "hard"

### Error: Translation appears garbled
**Solution:** Verify UTF-8 encoding, check for special characters

### Error: IUCN status not matching app filters
**Solution:** Use only: LC, NT, VU, EN, CR

---

## Next Steps for Integration

1. **Verify Current App Structure**
   - Review species_data.js current format
   - Check how app processes category/subcategory
   - Confirm phylogeny tree structure in app.js

2. **Add Sample Species Batch**
   - Add 10-15 species from JSON
   - Test in local environment
   - Fix any formatting issues

3. **Systematic Addition**
   - Add species by category
   - Test each batch of 15 species
   - Verify image loading
   - Check language switching

4. **Quality Assurance**
   - Run through all quizzes with new species
   - Verify difficulty distribution
   - Check for any duplicates
   - Test all language versions

5. **Final Deployment**
   - Backup original species_data.js
   - Replace with complete dataset
   - Test on Netlify preview
   - Merge to production branch

---

## Additional Resources

### Scientific Databases
- [IUCN Red List](https://www.iucnredlist.org/)
- [BirdLife International](https://birdlife.org/)
- [Avibase](https://avibase.bsc-eoc.org/)
- [GBIF](https://www.gbif.org/)

### Belgian-Specific Resources
- [Royal Belgian Institute of Natural Sciences](https://www.rbins.be/)
- [Belgian Species List](https://www.species.be/)
- [Meise Botanic Garden - Flora of Belgium](https://www.plantentuinmeise.be/)
- [Flanders Statistics - Common Bird Index](https://www.vlaanderen.be/)

### Image Resources
- [Wikimedia Commons](https://commons.wikimedia.org/)
- [iNaturalist](https://www.inaturalist.org/)
- [Flickr Creative Commons](https://www.flickr.com/search/?q=&w=all)

### Taxonomy & Nomenclature
- [The Clements Checklist - Birds](https://www.birds.cornell.edu/clementschecklist/)
- [Plants of the World Online - Kew](https://powo.science.kew.org/)

---

## Support & Troubleshooting

### Questions About Species Data?
- Cross-reference with IUCN Red List
- Check BirdLife International factsheets
- Verify with Flora of Belgium database

### Image Issues?
- Test URL in separate browser tab
- Verify license on Wikimedia Commons page
- Use 640px thumbnail format for consistency

### JSON Formatting Help?
- Use online JSON validator: jsonlint.com
- Check for matching brackets/braces
- Ensure all strings are quoted

### Translation Verification?
- Use Google Translate for first pass
- Cross-check with native speakers if possible
- Verify biological terminology is correct

---

**Document Version:** 1.0
**Last Updated:** March 2026
**Status:** Ready for implementation
