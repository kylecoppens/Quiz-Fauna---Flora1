import fs from 'fs';
import path from 'path';

const DATA_FILE = 'js/data/species_data.js';
const IMAGE_DIR = 'assets/images';

// Read current data
let content = fs.readFileSync(DATA_FILE, 'utf8');

// Fix missing closing bracket
if (!content.trimEnd().endsWith('];')) {
  content = content.trimEnd() + '\n];';
  console.log('Fixed: added missing ]; at end of file');
}

// Build image lookup: scientific_name -> image path
const images = fs.readdirSync(IMAGE_DIR);
const imageMap = new Map(); // scientific name -> { main: path, range: path }

for (const img of images) {
  if (!img.endsWith('.jpg') && !img.endsWith('.png')) continue;
  // Skip hash-named files and common-name files
  if (/^[0-9a-f]{20,}/.test(img)) continue;
  if (/^[A-Z].*-/.test(img)) continue; // Common English names like "Red-fox-fauna"
  if (img.startsWith('home_') || img.startsWith('juncala')) continue;

  const base = img.replace(/\.(jpg|png)$/, '');
  const isRange = base.endsWith('_range');

  let parts;
  if (isRange) {
    parts = base.replace('_range', '').split('_');
  } else {
    // Remove category suffix (last part)
    parts = base.split('_');
    parts.pop(); // remove category
  }

  const sciName = parts.map((p, i) => i === 0 ? p.charAt(0).toUpperCase() + p.slice(1) : p).join(' ');

  if (!imageMap.has(sciName)) {
    imageMap.set(sciName, { main: null, range: null });
  }

  if (isRange) {
    imageMap.get(sciName).range = `assets/images/${img}`;
  } else {
    imageMap.get(sciName).main = `assets/images/${img}`;
  }
}

console.log(`Found ${imageMap.size} species with local images`);

// Category fixes from patch_species_data.js
const CATEGORY_FIX = {
  "Accipiter nisus": "birds", "Aegithalos caudatus": "birds",
  "Alauda arvensis": "birds", "Anthus pratensis": "birds",
  "Anser anser": "birds", "Apus apus": "birds",
  "Asio otus": "birds", "Athene noctua": "birds",
  "Branta canadensis": "birds", "Carduelis carduelis": "birds",
  "Certhia brachydactyla": "birds", "Chloris chloris": "birds",
  "Coccothraustes coccothraustes": "birds", "Corvus corone": "birds",
  "Corvus frugilegus": "birds", "Corvus monedula": "birds",
  "Cuculus canorus": "birds", "Cygnus atratus": "birds",
  "Cygnus olor": "birds", "Delichon urbicum": "birds",
  "Dendrocopos major": "birds", "Egretta garzetta": "birds",
  "Emberiza citrinella": "birds", "Emberiza schoeniclus": "birds",
  "Falco peregrinus": "birds", "Fulica atra": "birds",
  "Gallus gallus": "birds", "Gallinula chloropus": "birds",
  "Larus argentatus": "birds", "Larus ridibundus": "birds",
  "Linaria cannabina": "birds", "Lophophanes cristatus": "birds",
  "Luscinia megarhynchos": "birds", "Muscicapa striata": "birds",
  "Passer montanus": "birds", "Pavo cristatus": "birds",
  "Periparus ater": "birds", "Phoenicurus ochruros": "birds",
  "Phylloscopus collybita": "birds", "Phylloscopus trochilus": "birds",
  "Poecile palustris": "birds", "Prunella modularis": "birds",
  "Pyrrhula pyrrhula": "birds", "Regulus ignicapilla": "birds",
  "Regulus regulus": "birds", "Saxicola rubicola": "birds",
  "Sitta europaea": "birds", "Sterna hirundo": "birds",
  "Streptopelia decaocto": "birds", "Strix aluco": "birds",
  "Sylvia atricapilla": "birds", "Sylvia borin": "birds",
  "Sylvia communis": "birds", "Troglodytes troglodytes": "birds",
  "Turdus philomelos": "birds", "Turdus pilaris": "birds",
  "Turdus viscivorus": "birds", "Passer domesticus": "birds",

  "Adalia bipunctata": "insects", "Aeshna cyanea": "insects",
  "Anax imperator": "insects", "Anthocharis cardamines": "insects",
  "Calliphora vicina": "insects", "Carabus auratus": "insects",
  "Celastrina argiolus": "insects", "Chorthippus parallelus": "insects",
  "Coenonympha pamphilus": "insects", "Culex pipiens": "insects",
  "Anopheles plumbeus": "insects", "Enallagma cyathigerum": "insects",
  "Geotrupes stercorarius": "insects", "Gryllus campestris": "insects",
  "Harmonia axyridis": "insects", "Ischnura elegans": "insects",
  "Lampyris noctiluca": "insects", "Libellula depressa": "insects",
  "Lucilia caesar": "insects", "Lycaena phlaeas": "insects",
  "Maniola jurtina": "insects", "Melolontha melolontha": "insects",
  "Ochlodes sylvanus": "insects", "Orthetrum cancellatum": "insects",
  "Panorpa communis": "insects", "Papilio machaon": "insects",
  "Pararge aegeria": "insects", "Pieris rapae": "insects",
  "Polistes dominula": "insects", "Polygonia c-album": "insects",
  "Pyrrhosoma nymphula": "insects", "Saturnia pavonia": "insects",
  "Sympetrum striolatum": "insects", "Tettigonia viridissima": "insects",
  "Thymelicus sylvestris": "insects", "Vanessa cardui": "insects",
  "Deilephila elpenor": "insects", "Cetonia aurata": "insects",
  "Musca domestica": "insects", "Urocerus gigas": "insects",

  "Alchemilla vulgaris": "flora", "Alliaria petiolata": "flora",
  "Anthyllis vulneraria": "flora", "Barbarea vulgaris": "flora",
  "Calluna vulgaris": "flora", "Capsella bursa-pastoris": "flora",
  "Cardamine pratensis": "flora", "Chelidonium majus": "flora",
  "Chrysosplenium oppositifolium": "flora", "Clematis vitalba": "flora",
  "Crataegus monogyna": "flora", "Dactylorhiza fuchsii": "flora",
  "Drosera rotundifolia": "flora", "Erica tetralix": "flora",
  "Erysimum cheiranthoides": "flora", "Fragaria vesca": "flora",
  "Fumaria officinalis": "flora", "Galanthus nivalis": "flora",
  "Geum urbanum": "flora", "Hedera helix": "flora",
  "Lathyrus pratensis": "flora", "Lotus corniculatus": "flora",
  "Medicago lupulina": "flora", "Narcissus pseudonarcissus": "flora",
  "Parnassia palustris": "flora", "Plantago lanceolata": "flora",
  "Potentilla anserina": "flora", "Potentilla erecta": "flora",
  "Potentilla reptans": "flora", "Primula elatior": "flora",
  "Ranunculus ficaria": "flora", "Raphanus raphanistrum": "flora",
  "Ribes nigrum": "flora", "Ribes rubrum": "flora",
  "Ribes uva-crispa": "flora", "Rosa canina": "flora",
  "Rubus fruticosus": "flora", "Rubus idaeus": "flora",
  "Sanguisorba minor": "flora", "Sanguisorba officinalis": "flora",
  "Saxifraga granulata": "flora", "Sedum acre": "flora",
  "Sempervivum tectorum": "flora", "Sinapis arvensis": "flora",
  "Sisymbrium officinale": "flora", "Trifolium pratense": "flora",
  "Vaccinium myrtillus": "flora", "Vicia sepium": "flora",
  "Viscum album": "flora", "Dipsacus fullonum": "flora",
  "Echium vulgare": "flora", "Reseda luteola": "flora",
  "Silene flos-cuculi": "flora",

  "Aleuria aurantia": "fungi", "Calvatia gigantea": "fungi",
  "Coprinopsis atramentaria": "fungi", "Exidia glandulosa": "fungi",
  "Fomes fomentarius": "fungi", "Fomitopsis betulina": "fungi",
  "Gyromitra esculenta": "fungi", "Helvella crispa": "fungi",
  "Hypholoma fasciculare": "fungi", "Lactarius deliciosus": "fungi",
  "Lepista nuda": "fungi", "Marasmius oreades": "fungi",
  "Morchella esculenta": "fungi", "Nectria cinnabarina": "fungi",
  "Panaeolus foenisecii": "fungi", "Peziza badia": "fungi",
  "Phallus impudicus": "fungi", "Psathyrella candolleana": "fungi",
  "Russula cyanoxantha": "fungi", "Russula emetica": "fungi",
  "Russula virescens": "fungi", "Schizophyllum commune": "fungi",
  "Tuber melanosporum": "fungi", "Xanthoria parietina": "fungi",
  "Xylaria hypoxylon": "fungi", "Mutinus caninus": "fungi",
  "Scleroderma citrinum": "fungi", "Leccinum versipelle": "fungi",

  "Amelanchier lamarckii": "trees", "Ilex aquifolium": "trees",
  "Malus sylvestris": "trees", "Prunus avium": "trees",
  "Prunus padus": "trees", "Prunus spinosa": "trees",
  "Pyrus pyraster": "trees", "Sambucus nigra": "trees",
  "Salix caprea": "trees", "Tilia tomentosa": "trees",
};

const FAMILY_FIX = {
  "Accipiter nisus":"Accipitridae","Aegithalos caudatus":"Aegithalidae",
  "Aeshna cyanea":"Aeshnidae","Aeshna juncea":"Aeshnidae",
  "Aglais io":"Nymphalidae","Alauda arvensis":"Alaudidae",
  "Alchemilla vulgaris":"Rosaceae","Alliaria petiolata":"Brassicaceae",
  "Amanita muscaria":"Amanitaceae","Anas platyrhynchos":"Anatidae",
  "Anax imperator":"Aeshnidae","Anemone nemorosa":"Ranunculaceae",
  "Anguis fragilis":"Anguidae","Anopheles plumbeus":"Culicidae",
  "Anser anser":"Anatidae","Anthocharis cardamines":"Pieridae",
  "Anthus pratensis":"Motacillidae","Anthyllis vulneraria":"Fabaceae",
  "Apodemus sylvaticus":"Muridae","Apus apus":"Apodidae",
  "Ardea cinerea":"Ardeidae","Armillaria mellea":"Physalacriaceae",
  "Arvicola amphibius":"Cricetidae","Asio otus":"Strigidae",
  "Athene noctua":"Strigidae","Auricularia auricula-judae":"Auriculariaceae",
  "Aythya fuligula":"Anatidae","Barbarea vulgaris":"Brassicaceae",
  "Bellis perennis":"Asteraceae","Beta vulgaris subsp. vulgaris":"Amaranthaceae",
  "Betula pendula":"Betulaceae","Boletus edulis":"Boletaceae",
  "Bombus hortorum":"Apidae","Bombus lapidarius":"Apidae",
  "Bombus pascuorum":"Apidae","Bombus terrestris":"Apidae",
  "Branta canadensis":"Anatidae","Bufo bufo":"Bufonidae",
  "Buteo buteo":"Accipitridae","Calliphora vicina":"Calliphoridae",
  "Calluna vulgaris":"Ericaceae","Calvatia gigantea":"Agaricaceae",
  "Cantharellus cibarius":"Cantharellaceae","Capsella bursa-pastoris":"Brassicaceae",
  "Capreolus capreolus":"Cervidae","Carabus auratus":"Carabidae",
  "Cardamine pratensis":"Brassicaceae","Carduelis carduelis":"Fringillidae",
  "Carpinus betulus":"Betulaceae","Castor fiber":"Castoridae",
  "Castanea sativa":"Fagaceae","Celastrina argiolus":"Lycaenidae",
  "Centaurea cyanus":"Asteraceae","Certhia brachydactyla":"Certhiidae",
  "Chelidonium majus":"Papaveraceae","Chloris chloris":"Fringillidae",
  "Chorthippus parallelus":"Acrididae","Coccinella septempunctata":"Coccinellidae",
  "Coccothraustes coccothraustes":"Fringillidae","Coenonympha pamphilus":"Nymphalidae",
  "Coprinopsis atramentaria":"Psathyrellaceae","Coprinus comatus":"Agaricaceae",
  "Corvus corone":"Corvidae","Corvus corax":"Corvidae",
  "Corvus frugilegus":"Corvidae","Corvus monedula":"Corvidae",
  "Corylus avellana":"Betulaceae","Crataegus monogyna":"Rosaceae",
  "Cuculus canorus":"Cuculidae","Culex pipiens":"Culicidae",
  "Cyanistes caeruleus":"Paridae","Cygnus atratus":"Anatidae",
  "Cygnus olor":"Anatidae","Dactylorhiza fuchsii":"Orchidaceae",
  "Daldinia concentrica":"Hypoxylaceae","Daucus carota":"Apiaceae",
  "Delichon urbicum":"Hirundinidae","Dendrocopos major":"Picidae",
  "Dipsacus fullonum":"Caprifoliaceae","Drosera rotundifolia":"Droseraceae",
  "Echium vulgare":"Boraginaceae","Egretta garzetta":"Ardeidae",
  "Emberiza citrinella":"Emberizidae","Emberiza schoeniclus":"Emberizidae",
  "Enallagma cyathigerum":"Coenagrionidae","Episyrphus balteatus":"Syrphidae",
  "Eptesicus serotinus":"Vespertilionidae","Erica tetralix":"Ericaceae",
  "Erinaceus europaeus":"Erinaceidae","Erithacus rubecula":"Muscicapidae",
  "Erysimum cheiranthoides":"Brassicaceae","Exidia glandulosa":"Auriculariaceae",
  "Fagus sylvatica":"Fagaceae","Falco peregrinus":"Falconidae",
  "Falco tinnunculus":"Falconidae","Felis silvestris":"Felidae",
  "Fistulina hepatica":"Fistulinaceae","Flammulina velutipes":"Physalacriaceae",
  "Fomes fomentarius":"Polyporaceae","Fomitopsis betulina":"Fomitopsidaceae",
  "Forficula auricularia":"Forficulidae","Formica rufa":"Formicidae",
  "Fragaria vesca":"Rosaceae","Fraxinus excelsior":"Oleaceae",
  "Fringilla coelebs":"Fringillidae","Fulica atra":"Rallidae",
  "Fumaria officinalis":"Papaveraceae","Galanthus nivalis":"Amaryllidaceae",
  "Galium odoratum":"Rubiaceae","Gallinula chloropus":"Rallidae",
  "Gallus gallus":"Phasianidae","Garrulus glandarius":"Corvidae",
  "Geotrupes stercorarius":"Geotrupidae","Geum urbanum":"Rosaceae",
  "Glechoma hederacea":"Lamiaceae","Gonepteryx rhamni":"Pieridae",
  "Gryllus campestris":"Gryllidae","Gyromitra esculenta":"Discinaceae",
  "Halichoerus grypus":"Phocidae","Harmonia axyridis":"Coccinellidae",
  "Hedera helix":"Araliaceae","Helvella crispa":"Helvellaceae",
  "Heracleum sphondylium":"Apiaceae","Hirundo rustica":"Hirundinidae",
  "Humulus lupulus":"Cannabaceae","Hyacinthoides non-scripta":"Asparagaceae",
  "Hypholoma fasciculare":"Hymenogastraceae","Ilex aquifolium":"Aquifoliaceae",
  "Ischnura elegans":"Coenagrionidae","Laccaria amethystina":"Hydnangiaceae",
  "Lacerta agilis":"Lacertidae","Lactarius deliciosus":"Russulaceae",
  "Lamium album":"Lamiaceae","Lampyris noctiluca":"Lampyridae",
  "Larix decidua":"Pinaceae","Larus argentatus":"Laridae",
  "Larus ridibundus":"Laridae","Lathyrus pratensis":"Fabaceae",
  "Leccinum scabrum":"Boletaceae","Leccinum versipelle":"Boletaceae",
  "Lepista nuda":"Tricholomataceae","Lepus europaeus":"Leporidae",
  "Leucanthemum vulgare":"Asteraceae","Libellula depressa":"Libellulidae",
  "Linaria cannabina":"Fringillidae","Lissotriton helveticus":"Salamandridae",
  "Lophophanes cristatus":"Paridae","Lotus corniculatus":"Fabaceae",
  "Lucanus cervus":"Lucanidae","Lucilia caesar":"Calliphoridae",
  "Luscinia megarhynchos":"Muscicapidae","Lutra lutra":"Mustelidae",
  "Lycaena phlaeas":"Lycaenidae","Lycoperdon perlatum":"Agaricaceae",
  "Macroglossum stellatarum":"Sphingidae","Macrolepiota procera":"Agaricaceae",
  "Malus sylvestris":"Rosaceae","Maniola jurtina":"Nymphalidae",
  "Marasmius oreades":"Marasmiaceae","Martes foina":"Mustelidae",
  "Martes martes":"Mustelidae","Medicago lupulina":"Fabaceae",
  "Meles meles":"Mustelidae","Melolontha melolontha":"Scarabaeidae",
  "Micromys minutus":"Muridae","Morchella esculenta":"Morchellaceae",
  "Motacilla alba":"Motacillidae","Musca domestica":"Muscidae",
  "Muscicapa striata":"Muscicapidae","Mustela erminea":"Mustelidae",
  "Mustela nivalis":"Mustelidae","Mustela putorius":"Mustelidae",
  "Myotis daubentonii":"Vespertilionidae","Narcissus pseudonarcissus":"Amaryllidaceae",
  "Natrix natrix":"Colubridae","Nectria cinnabarina":"Nectriaceae",
  "Ochlodes sylvanus":"Hesperiidae","Ondatra zibethicus":"Cricetidae",
  "Orthetrum cancellatum":"Libellulidae","Oryctolagus cuniculus":"Leporidae",
  "Palomena prasina":"Pentatomidae","Panaeolus foenisecii":"Bolbitiaceae",
  "Panorpa communis":"Panorpidae","Papaver rhoeas":"Papaveraceae",
  "Papilio machaon":"Papilionidae","Pararge aegeria":"Nymphalidae",
  "Parnassia palustris":"Celastraceae","Parus major":"Paridae",
  "Passer domesticus":"Passeridae","Passer montanus":"Passeridae",
  "Pavo cristatus":"Phasianidae","Periparus ater":"Paridae",
  "Peziza badia":"Pezizaceae","Phallus impudicus":"Phallaceae",
  "Phoca vitulina":"Phocidae","Phocoena phocoena":"Phocoenidae",
  "Phoenicurus ochruros":"Muscicapidae","Phylloscopus collybita":"Phylloscopidae",
  "Phylloscopus trochilus":"Phylloscopidae","Pica pica":"Corvidae",
  "Picea abies":"Pinaceae","Picus viridis":"Picidae",
  "Pieris brassicae":"Pieridae","Pieris rapae":"Pieridae",
  "Pinus sylvestris":"Pinaceae","Plantago lanceolata":"Plantaginaceae",
  "Plecotus auritus":"Vespertilionidae","Pleurotus ostreatus":"Pleurotaceae",
  "Poecile palustris":"Paridae","Polistes dominula":"Vespidae",
  "Polygonia c-album":"Nymphalidae","Polyommatus icarus":"Lycaenidae",
  "Populus tremula":"Salicaceae","Potentilla anserina":"Rosaceae",
  "Potentilla erecta":"Rosaceae","Potentilla reptans":"Rosaceae",
  "Primula elatior":"Primulaceae","Primula veris":"Primulaceae",
  "Prunella modularis":"Prunellidae","Prunus avium":"Rosaceae",
  "Prunus padus":"Rosaceae","Prunus spinosa":"Rosaceae",
  "Psathyrella candolleana":"Psathyrellaceae","Pyrrhocoris apterus":"Pyrrhocoridae",
  "Pyrrhosoma nymphula":"Coenagrionidae","Pyrrhula pyrrhula":"Fringillidae",
  "Pyrus pyraster":"Rosaceae","Quercus robur":"Fagaceae",
  "Rana temporaria":"Ranidae","Ranunculus acris":"Ranunculaceae",
  "Ranunculus ficaria":"Ranunculaceae","Raphanus raphanistrum":"Brassicaceae",
  "Rattus norvegicus":"Muridae","Regulus ignicapilla":"Regulidae",
  "Regulus regulus":"Regulidae","Reseda lutea":"Resedaceae",
  "Reseda luteola":"Resedaceae","Ribes nigrum":"Grossulariaceae",
  "Ribes rubrum":"Grossulariaceae","Ribes uva-crispa":"Grossulariaceae",
  "Rosa canina":"Rosaceae","Rubus fruticosus":"Rosaceae",
  "Rubus idaeus":"Rosaceae","Russula cyanoxantha":"Russulaceae",
  "Russula emetica":"Russulaceae","Russula virescens":"Russulaceae",
  "Salamandra salamandra":"Salamandridae","Salix alba":"Salicaceae",
  "Salix caprea":"Salicaceae","Sambucus nigra":"Adoxaceae",
  "Sanguisorba minor":"Rosaceae","Sanguisorba officinalis":"Rosaceae",
  "Sarcoscypha coccinea":"Sarcoscyphaceae","Saturnia pavonia":"Saturniidae",
  "Saxicola rubicola":"Muscicapidae","Saxifraga granulata":"Saxifragaceae",
  "Schizophyllum commune":"Schizophyllaceae","Sciurus vulgaris":"Sciuridae",
  "Scleroderma citrinum":"Sclerodermataceae","Sedum acre":"Crassulaceae",
  "Sempervivum tectorum":"Crassulaceae","Silene dioica":"Caryophyllaceae",
  "Silene flos-cuculi":"Caryophyllaceae","Sinapis arvensis":"Brassicaceae",
  "Sisymbrium officinale":"Brassicaceae","Sitta europaea":"Sittidae",
  "Solanum tuberosum":"Solanaceae","Sorbus aucuparia":"Rosaceae",
  "Sterna hirundo":"Laridae","Streptopelia decaocto":"Columbidae",
  "Strix aluco":"Strigidae","Sturnus vulgaris":"Sturnidae",
  "Sus scrofa":"Suidae","Sylvia atricapilla":"Sylviidae",
  "Sylvia borin":"Sylviidae","Sylvia communis":"Sylviidae",
  "Sympetrum striolatum":"Libellulidae","Talpa europaea":"Talpidae",
  "Taraxacum officinale":"Asteraceae","Taxus baccata":"Taxaceae",
  "Tettigonia viridissima":"Tettigoniidae","Thymelicus sylvestris":"Hesperiidae",
  "Tilia cordata":"Malvaceae","Tilia tomentosa":"Malvaceae",
  "Trametes versicolor":"Polyporaceae","Tremella mesenterica":"Tremellaceae",
  "Trifolium pratense":"Fabaceae","Trifolium repens":"Fabaceae",
  "Troglodytes troglodytes":"Troglodytidae","Tuber melanosporum":"Tuberaceae",
  "Turdus merula":"Turdidae","Turdus philomelos":"Turdidae",
  "Turdus pilaris":"Turdidae","Turdus viscivorus":"Turdidae",
  "Ulmus procera":"Ulmaceae","Urocerus gigas":"Siricidae",
  "Urtica dioica":"Urticaceae","Vaccinium myrtillus":"Ericaceae",
  "Vanessa atalanta":"Nymphalidae","Vanessa cardui":"Nymphalidae",
  "Vespa crabro":"Vespidae","Vespula vulgaris":"Vespidae",
  "Vicia sepium":"Fabaceae","Viola odorata":"Violaceae",
  "Vipera berus":"Viperidae","Viscum album":"Santalaceae",
  "Vulpes vulpes":"Canidae","Xanthoria parietina":"Teloschistaceae",
  "Xylaria hypoxylon":"Xylariaceae","Xylaria polymorpha":"Xylariaceae",
  "Xylocopa violacea":"Apidae",
  "Deilephila elpenor":"Sphingidae","Cetonia aurata":"Scarabaeidae",
  "Musca domestica":"Muscidae","Mutinus caninus":"Phallaceae",
  "Amelanchier lamarckii":"Rosaceae","Leccinum versipelle":"Boletaceae",
};

// Step 1: Fix image paths in existing entries to use local images
let fixedImages = 0;
for (const [sciName, imgData] of imageMap) {
  if (!imgData.main) continue;

  // Find the image line for this species and replace it
  const escapedSci = sciName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`(scientific:\\s*"${escapedSci}"[\\s\\S]*?)(image:\\s*)"[^"]+"`, '');
  const before = content;
  content = content.replace(re, `$1$2"${imgData.main}"`);
  if (content !== before) fixedImages++;
}
console.log(`Fixed ${fixedImages} image paths to local`);

// Step 2: Fix categories
let fixedCats = 0;
for (const [sci, newCat] of Object.entries(CATEGORY_FIX)) {
  const escapedSci = sci.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`(scientific:\\s*"${escapedSci}"[\\s\\S]*?category:\\s*)"[^"]+"`, '');
  const before = content;
  content = content.replace(re, `$1"${newCat}"`);
  if (content !== before) fixedCats++;
}
console.log(`Fixed ${fixedCats} categories`);

// Step 3: Fix families
let fixedFams = 0;
for (const [sci, fam] of Object.entries(FAMILY_FIX)) {
  const escapedSci = sci.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp(`(scientific:\\s*"${escapedSci}"[\\s\\S]*?family:\\s*)"[^"]+"`, '');
  const before = content;
  content = content.replace(re, `$1"${fam}"`);
  if (content !== before) fixedFams++;
}
console.log(`Fixed ${fixedFams} families`);

// Write fixed content
fs.writeFileSync(DATA_FILE, content);

// Get existing scientific names
const existingNames = new Set([...content.matchAll(/scientific:\s*"([^"]+)"/g)].map(m => m[1]));
console.log(`\nExisting species: ${existingNames.size}`);

// Find missing species that have images
const missing = [];
for (const [sciName, imgData] of imageMap) {
  if (!existingNames.has(sciName) && imgData.main) {
    // Determine correct category
    const cat = CATEGORY_FIX[sciName] || 'fauna';
    const fam = FAMILY_FIX[sciName] || 'Unknown';
    missing.push({ scientific: sciName, image: imgData.main, category: cat, family: fam });
  }
}

console.log(`Missing species with images: ${missing.length}`);
missing.sort((a, b) => a.scientific.localeCompare(b.scientific));
for (const m of missing) {
  console.log(`  ${m.scientific} (${m.category}) -> ${m.image}`);
}

// Write missing species list for reference
fs.writeFileSync('/tmp/missing_species_info.json', JSON.stringify(missing, null, 2));
