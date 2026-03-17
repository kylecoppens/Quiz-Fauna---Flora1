
import fs from 'fs';
import path from 'path';
import https from 'https';

const dataDir = '/Users/mac/Downloads/Quiz Fauna & Flora/js/data';
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js') && f !== 'init.js' && f !== 'species_data.js');

let allSpeciesText = [];

// 1. Collect existing data
files.forEach(file => {
    let content = fs.readFileSync(path.join(dataDir, file), 'utf8');
    content = content.replace(/\/\/.*$/gm, ''); // remove single line comments
    const pushRegex = /window\.speciesData\.push\(\s*([\s\S]*?)\s*\);/g;
    let match;
    while ((match = pushRegex.exec(content)) !== null) {
        let items = match[1].trim();
        if (items.startsWith('[') && items.endsWith(']')) {
            items = items.substring(1, items.length - 1).trim();
        }
        if (items) {
            allSpeciesText.push(items);
        }
    }
});

// 2. Identify missing species from Scraper list
const scraperList = [
"Turdus merula", "Erithacus rubecula", "Parus major", "Cyanistes caeruleus", "Passer domesticus", 
"Pica pica", "Corvus corone", "Garrulus glandarius", "Columba palumbus", "Sturnus vulgaris", 
"Vulpes vulpes", "Meles meles", "Sciurus vulgaris", "Erinaceus europaeus", "Capreolus capreolus", 
"Vipera berus", "Natrix natrix", "Anguis fragilis", "Lacerta agilis", "Rana temporaria", 
"Bufo bufo", "Salamandra salamandra", "Quercus robur", "Fagus sylvatica", "Betula pendula", 
"Acer pseudoplatanus", "Fraxinus excelsior", "Corylus avellana", "Taraxacum officinale", 
"Bellis perennis", "Achillea millefolium", "Plantago lanceolata", "Urtica dioica", 
"Amanita muscaria", "Boletus edulis", "Cantharellus cibarius", "Agaricus campestris", 
"Pleurotus ostreatus"
];

// Combine all text into one string to check for existence
const fullText = allSpeciesText.join('\n');

const missingSpecies = scraperList.filter(s => !fullText.includes(s));

console.log('Missing species:', missingSpecies);

// 3. For missing species, we'll keep it simple for now and just add placeholders 
// or I can try to fetch real images if they are few.
// Actually, I'll just write the consolidated file for now and then handle missing ones.

const finalContent = `// species_data.js - Consolidated and Cleaned
window.speciesData = [
${allSpeciesText.join(',\n')}
];
`;

fs.writeFileSync(path.join(dataDir, 'species_data.js'), finalContent);
console.log('Consolidated into species_data.js');
