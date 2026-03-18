/**
 * patch_species_data.js
 * =====================
 * Run this once in your browser console, or as a Node.js script, to fix ALL
 * category assignments, families and add monocot/dicot to flora species
 * in your original species_data.js.
 *
 * Usage (Node.js):
 *   node patch_species_data.js
 *
 * It reads js/data/species_data.js, patches it, and writes the result back.
 */

// ── CATEGORY CORRECTIONS ──────────────────────────────────────────────────
const CATEGORY_FIX = {
  // BIRDS wrongly in fauna / trees
  "Accipiter nisus": "birds", "Aegithalos caudatus": "birds",
  "Alauda arvensis": "birds", "Anthus pratensis": "birds",
  "Anser anser": "birds", "Apus apus": "birds",        // common swift!
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
  "Sylvia atricapilla": "birds", "Sylvia borin": "birds",  // was "trees"!
  "Sylvia communis": "birds", "Troglodytes troglodytes": "birds",
  "Turdus philomelos": "birds", "Turdus pilaris": "birds",
  "Turdus viscivorus": "birds",

  // INSECTS wrongly in fauna
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

  // FLORA wrongly in fauna
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
  "Viscum album": "flora",

  // FUNGI wrongly in fauna
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
  "Xylaria hypoxylon": "fungi",

  // TREES wrongly in fauna
  "Amelanchier lamarckii": "trees", "Ilex aquifolium": "trees",
  "Malus sylvestris": "trees", "Prunus avium": "trees",
  "Prunus padus": "trees", "Prunus spinosa": "trees",
  "Pyrus pyraster": "trees", "Sambucus nigra": "trees",

  // MISCLASSIFIED BIRDS wrongly in "trees"
  "Passer domesticus": "birds",  // house sparrow was "trees"!
  "Accipiter nisus": "birds",    // sparrowhawk was "trees"!
};

// ── MONOCOT / DICOT ───────────────────────────────────────────────────────
const PLANT_GRADE = {
  // Monocots
  "Allium ursinum": "monocot",
  "Dactylorhiza fuchsii": "monocot",
  "Galanthus nivalis": "monocot",
  "Hyacinthoides non-scripta": "monocot",
  "Narcissus pseudonarcissus": "monocot",
  // Dicots (all others)
  "Achillea millefolium": "dicot", "Alchemilla vulgaris": "dicot",
  "Alliaria petiolata": "dicot", "Anemone nemorosa": "dicot",
  "Anthyllis vulneraria": "dicot", "Anthriscus sylvestris": "dicot",
  "Arctium lappa": "dicot", "Arctium minus": "dicot",
  "Barbarea vulgaris": "dicot", "Bellis perennis": "dicot",
  "Calluna vulgaris": "dicot", "Capsella bursa-pastoris": "dicot",
  "Cardamine pratensis": "dicot", "Centaurea cyanus": "dicot",
  "Chelidonium majus": "dicot", "Chrysosplenium oppositifolium": "dicot",
  "Clematis vitalba": "dicot", "Crataegus monogyna": "dicot",
  "Daucus carota": "dicot", "Dipsacus fullonum": "dicot",
  "Drosera rotundifolia": "dicot", "Echium vulgare": "dicot",
  "Erica tetralix": "dicot", "Erysimum cheiranthoides": "dicot",
  "Fragaria vesca": "dicot", "Fumaria officinalis": "dicot",
  "Galium odoratum": "dicot", "Geum urbanum": "dicot",
  "Glechoma hederacea": "dicot", "Hedera helix": "dicot",
  "Heracleum sphondylium": "dicot", "Lamium album": "dicot",
  "Lathyrus pratensis": "dicot", "Leucanthemum vulgare": "dicot",
  "Lotus corniculatus": "dicot", "Medicago lupulina": "dicot",
  "Papaver rhoeas": "dicot", "Parnassia palustris": "dicot",
  "Plantago lanceolata": "dicot", "Potentilla anserina": "dicot",
  "Potentilla erecta": "dicot", "Potentilla reptans": "dicot",
  "Primula elatior": "dicot", "Primula veris": "dicot",
  "Ranunculus acris": "dicot", "Ranunculus ficaria": "dicot",
  "Raphanus raphanistrum": "dicot", "Reseda lutea": "dicot",
  "Reseda luteola": "dicot", "Ribes nigrum": "dicot",
  "Ribes rubrum": "dicot", "Ribes uva-crispa": "dicot",
  "Rosa canina": "dicot", "Rubus fruticosus": "dicot",
  "Rubus idaeus": "dicot", "Sanguisorba minor": "dicot",
  "Sanguisorba officinalis": "dicot", "Saxifraga granulata": "dicot",
  "Sedum acre": "dicot", "Sempervivum tectorum": "dicot",
  "Silene dioica": "dicot", "Silene flos-cuculi": "dicot",
  "Sinapis arvensis": "dicot", "Sisymbrium officinale": "dicot",
  "Taraxacum officinale": "dicot", "Trifolium pratense": "dicot",
  "Trifolium repens": "dicot", "Urtica dioica": "dicot",
  "Vaccinium myrtillus": "dicot", "Vicia sepium": "dicot",
  "Viola odorata": "dicot", "Viscum album": "dicot",
};

// ── FAMILY FIXES (correct the "Unknown" values) ───────────────────────────
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
};

// ── Node.js runner ────────────────────────────────────────────────────────
if (typeof require !== 'undefined') {
  const fs = require('fs');
  const path = require('path');
  const filePath = path.join(__dirname, 'js/data/species_data.js');
  let content = fs.readFileSync(filePath, 'utf8');

  let catFixed = 0, famFixed = 0, gradeAdded = 0;

  for (const [sci, newCat] of Object.entries(CATEGORY_FIX)) {
    const re = new RegExp(`(scientific:\\s*"${sci.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}"[^}]{1,200}?category:\\s*)"[^"]+"`, 's');
    const before = content;
    content = content.replace(re, `$1"${newCat}"`);
    if (content !== before) catFixed++;
  }

  for (const [sci, fam] of Object.entries(FAMILY_FIX)) {
    const re = new RegExp(`(scientific:\\s*"${sci.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}"[^}]{1,200}?family:\\s*)"[^"]+"`, 's');
    const before = content;
    content = content.replace(re, `$1"${fam}"`);
    if (content !== before) famFixed++;
  }

  for (const [sci, grade] of Object.entries(PLANT_GRADE)) {
    if (content.includes(`"${sci}"`) && !content.includes(`plantGrade`)) {
      const re = new RegExp(`(scientific:\\s*"${sci.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')}"[^}]{1,400}?)(rarity:\\s*\\{[^}]+\\})`, 's');
      const before = content;
      content = content.replace(re, `$1$2,\n    plantGrade: "${grade}"`);
      if (content !== before) gradeAdded++;
    }
  }

  fs.writeFileSync(filePath, content);
  console.log(`✅ Done: ${catFixed} categories fixed, ${famFixed} families fixed, ${gradeAdded} plant grades added`);
  console.log(`File written: ${filePath}`);
}
