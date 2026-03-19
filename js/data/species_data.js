// species_data.js - Corrected & Cleaned
// Changelog vs original:
// - Fixed category assignments (sparrowhawk was "trees", squirrel was "fungi", moorhen was "fungi", etc.)
// - Fixed copy-paste description errors (wood anemone had nettle text, buzzard had mushroom text, etc.)
// - Added proper Dutch/French translations for "gen_" species that had English-only names
// - Added "images" array to key species for multi-photo quiz switching
// - Fixed missing/placeholder data (Boletus edulis, Meles meles habitat, Castor fiber size/diet)
// - Added funfact field to featured species for Species of the Day

window.speciesData = [
{
    id: "gen_accipiter_nisus",
    scientific: "Accipiter nisus",
    family: "Accipitridae",
    // FIXED: was "trees", is a bird
    category: "birds",
    difficulty: "medium",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Accipiter+nisus",
    name: { nl: "Sperwer", en: "Eurasian Sparrowhawk", fr: "Épervier d'Europe" },
    habitat: { nl: "Bossen, parken, tuinen", en: "Forests, parks, gardens", fr: "Forêts, parcs, jardins" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "De sperwer is een kleine roofvogel die gespecialiseerd is in het jagen op andere vogels. Het mannetje heeft blauwe bovendeeltjes met oranje gestreepte onderkant; vrouwtjes zijn bruin met bruine streping. Het vrouwtje is tot 25% groter dan het mannetje — een van de grootste geslachtsverschillen bij roofvogels.",
        en: "The Eurasian sparrowhawk is a small bird of prey specialising in catching woodland birds. The male has bluish-grey upperparts with orange-barred underparts; females are brown above with brown barring. The female is up to 25% larger than the male — one of the greatest size differences in any bird species.",
        fr: "L'épervier d'Europe est un petit rapace spécialisé dans la chasse aux oiseaux forestiers. Le mâle a des parties supérieures gris bleuté avec des parties inférieures barrées d'orange; les femelles sont brunes avec des barres brunes."
    },
    size: { nl: "28–38 cm", en: "28–38 cm", fr: "28–38 cm" },
    diet: { nl: "Kleine vogels", en: "Small birds", fr: "Petits oiseaux" },
    funfact: { nl: "Het vrouwtje kan vogels tot 500 g doden — groter dan zichzelf!", en: "The female can kill birds weighing up to 500 g — bigger than itself!", fr: "La femelle peut tuer des oiseaux pesant jusqu'à 500 g, plus lourd qu'elle !" },
    image: "assets/images/accipiter_nisus_fauna.jpg",
    images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Eurasian_Sparrowhawk_by_Steve_Ward.jpg/640px-Eurasian_Sparrowhawk_by_Steve_Ward.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Eurasian_Sparrowhawk_female.jpg/640px-Eurasian_Sparrowhawk_female.jpg"
    ]
},
{
    id: "ext_acer_pseudoplatanus",
    scientific: "Acer pseudoplatanus",
    family: "Sapindaceae",
    category: "trees",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Gewone esdoorn", en: "Sycamore Maple", fr: "Érable sycomore" },
    habitat: { nl: "Bossen, parken, wegbermen", en: "Forests, parks, roadsides", fr: "Forêts, parcs, bords de routes" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "Een grote loofboom van Midden-Europa en West-Azië. Verdraagt wind en kustblootstelling goed. Zijn gevleugelde vruchten ('helikopters') draaien in de wind.",
        en: "A large deciduous tree native to Central Europe and Western Asia. It is tolerant of wind and coastal exposure. Its winged fruits ('helicopters') spin as they fall.",
        fr: "Un grand arbre à feuilles caduques originaire d'Europe centrale et d'Asie occidentale. Il est tolérant au vent et à l'exposition côtière."
    },
    size: { nl: "Tot 35 m", en: "Up to 35 m", fr: "Jusqu'à 35 m" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/acer_pseudoplatanus_trees.jpg"
},
{
    id: "i22",
    scientific: "Acherontia atropos",
    family: "Sphingidae",
    category: "insects",
    difficulty: "hard",
    iucn: "LC",
    name: { nl: "Doodshoofdvlinder", en: "Death's-head Hawkmoth", fr: "Sphinx tête de mort" },
    habitat: { nl: "Open gebieden met aardappelvelden", en: "Open areas with potato fields", fr: "Zones ouvertes avec champs de pommes de terre" },
    rarity: { nl: "Zeldzaam (migrant)", en: "Rare (migrant)", fr: "Rare (migrateur)" },
    description: {
        nl: "Grote nachtvlinder met een schedeltekening op het borststuk. Beroemd geworden door de horrorfilm 'The Silence of the Lambs'.",
        en: "Large moth with a skull pattern on the thorax. Made famous by the horror film 'The Silence of the Lambs'. It can squeak when disturbed.",
        fr: "Grand papillon de nuit avec un dessin de crâne sur le thorax. Rendu célèbre par le film 'Le Silence des agneaux'."
    },
    size: { nl: "8–12 cm spanwijdte", en: "8–12 cm wingspan", fr: "8–12 cm d'envergure" },
    diet: { nl: "Honing, boomsappen", en: "Honey, tree sap", fr: "Miel, sève" },
    funfact: { nl: "Deze vlinder kan bijenkorfven binnendringen om honing te stelen!", en: "This moth can invade beehives to steal honey!", fr: "Ce sphinx peut envahir les ruches pour voler du miel !" },
    image: "assets/images/acherontia_atropos_insects.jpg",
    images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Acherontia_atropos.jpg/640px-Acherontia_atropos.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Death%27s_Head_Hawk_Moth_%28Acherontia_atropos%29.jpg/640px-Death%27s_Head_Hawk_Moth_%28Acherontia_atropos%29.jpg"
    ]
},
{
    id: "fl9",
    scientific: "Achillea millefolium",
    family: "Asteraceae",
    category: "flora",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Duizendblad", en: "Yarrow", fr: "Achillée millefeuille" },
    habitat: { nl: "Wegbermen, graslanden", en: "Roadsides, grasslands", fr: "Bords de routes, prairies" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    plantGrade: "dicot",
    description: {
        nl: "Heeft fijn verdeelde bladeren en witte tot roze bloemschermen. De wetenschappelijke naam verwijst naar de held Achilles, die het gebruikt zou hebben om wonden te behandelen.",
        en: "Has finely divided leaves and white to pink flower clusters. The scientific name references the hero Achilles, who allegedly used it to treat wounds.",
        fr: "A des feuilles finement divisées et des ombelles de fleurs blanches à roses. Le nom scientifique fait référence au héros Achille."
    },
    size: { nl: "20–80 cm", en: "20–80 cm", fr: "20–80 cm" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/achillea_millefolium_flora.jpg"
},
{
    id: "gen_adalia_bipunctata",
    scientific: "Adalia bipunctata",
    family: "Coccinellidae",
    // FIXED: was "fauna", is an insect
    category: "insects",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Tweestippelig lieveheersbeestje", en: "Two-spot Ladybird", fr: "Coccinelle à deux points" },
    habitat: { nl: "Tuinen, parken, loofbossen", en: "Gardens, parks, deciduous forests", fr: "Jardins, parcs, forêts de feuillus" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "Een roofkever van de familie Coccinellidae. Herkenbaar aan de twee zwarte stippen op de rode dekschilden. Eet veel bladluizen en is daarmee nuttig in tuinen.",
        en: "A carnivorous beetle of the family Coccinellidae. Recognizable by its two black spots on red wing cases. Eats large numbers of aphids, making it useful in gardens.",
        fr: "Un coléoptère carnivore de la famille des Coccinellidae. Reconnaissable à ses deux points noirs sur les élytres rouges."
    },
    size: { nl: "3.5–5.5 mm", en: "3.5–5.5 mm", fr: "3.5–5.5 mm" },
    diet: { nl: "Bladluizen", en: "Aphids", fr: "Pucerons" },
    image: "assets/images/adalia_bipunctata_fauna.jpg"
},
{
    id: "gen_aegithalos_caudatus",
    scientific: "Aegithalos caudatus",
    family: "Aegithalidae",
    category: "birds",
    difficulty: "medium",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Aegithalos+caudatus",
    name: { nl: "Staartmees", en: "Long-tailed Tit", fr: "Mésange à longue queue" },
    habitat: { nl: "Loofbossen, heidevelden, parken", en: "Deciduous woodlands, heathland, parks", fr: "Forêts de feuillus, landes, parcs" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "Een kleine, sociale vogel met een opvallend lange staart. Leeft buiten het broedseizoen in gezellige familiegroepen van 6 tot 17 vogels.",
        en: "A small, social bird with a notably long tail. Lives outside breeding season in compact family flocks of 6–17 individuals.",
        fr: "Un petit oiseau social avec une queue remarquablement longue. Vit hors saison de reproduction en groupes familiaux de 6 à 17 individus."
    },
    size: { nl: "13–15 cm (waarvan 7–9 cm staart)", en: "13–15 cm (of which 7–9 cm tail)", fr: "13–15 cm (dont 7–9 cm de queue)" },
    diet: { nl: "Insecten, spinnen", en: "Insects, spiders", fr: "Insectes, araignées" },
    image: "assets/images/aegithalos_caudatus_fauna.jpg"
},
{
    id: "t10",
    scientific: "Aesculus hippocastanum",
    family: "Sapindaceae",
    category: "trees",
    difficulty: "easy",
    iucn: "NT",
    name: { nl: "Witte Paardenkastanje", en: "Horse Chestnut", fr: "Marronnier d'Inde" },
    habitat: { nl: "Parken, lanen, tuinen", en: "Parks, avenues, gardens", fr: "Parcs, avenues, jardins" },
    rarity: { nl: "Algemeen (aangeplant)", en: "Common (planted)", fr: "Commun (planté)" },
    description: {
        nl: "Een imposante boom die vooral in parken en langs lanen is aangeplant. Hij bloeit in de voorzomer met rechtopstaande witte 'kaarsen'. In de herfst vallen de grote, groene stekelige bolsters met glanzende bruine kastanjes. Deze zijn niet eetbaar voor mensen, maar kinderen gebruiken ze om 'knikkeren' mee te spelen.",
        en: "An imposing tree mostly planted in parks and along avenues. It blooms in early summer with upright white 'candles'. In autumn, large green prickly husks fall containing shiny brown chestnuts. These are not edible for humans but children use them to play conkers.",
        fr: "Un arbre imposant principalement planté dans les parcs. Il fleurit au début de l'été avec des chandelles blanches dressées. En automne tombent les grandes bogues vertes contenant les marrons."
    },
    size: { nl: "Tot 30 m", en: "Up to 30 m", fr: "Jusqu'à 30 m" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/aesculus_hippocastanum_trees.jpg"
},
{
    id: "gen_aeshna_cyanea",
    scientific: "Aeshna cyanea",
    family: "Aeshnidae",
    category: "insects",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Blauwe glazenmaker", en: "Southern Hawker", fr: "Aeschne bleue" },
    habitat: { nl: "Vijvers, poelen, tuinen", en: "Ponds, pools, gardens", fr: "Étangs, mares, jardins" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "Een grote, snelle libel met blauw-groene vlekken op het achterlijf. Een van de meest nieuwsgierige libellen — komt regelmatig op mensen af.",
        en: "A large, fast hawker dragonfly with blue-green spots on the abdomen. One of the most inquisitive dragonflies, regularly approaching people.",
        fr: "Une grande libellule vive avec des taches bleu-vert sur l'abdomen. L'une des libellules les plus curieuses, s'approchant régulièrement des gens."
    },
    size: { nl: "6.7–7.6 cm", en: "6.7–7.6 cm", fr: "6.7–7.6 cm" },
    diet: { nl: "Insecten", en: "Insects", fr: "Insectes" },
    image: "assets/images/aeshna_cyanea_fauna.jpg"
},
{
    id: "i16",
    scientific: "Aeshna juncea",
    family: "Aeshnidae",
    category: "insects",
    difficulty: "hard",
    iucn: "LC",
    name: { nl: "Venglazenmaker", en: "Common Hawker", fr: "Aeschne des joncs" },
    habitat: { nl: "Vennen, hoogvenen", en: "Moorland pools, bogs", fr: "Étangs de landes, tourbières" },
    rarity: { nl: "Vrij algemeen", en: "Fairly Common", fr: "Assez commun" },
    description: {
        nl: "Een grote, snelle libel met mozaïekvlekjes op het achterlijf.",
        en: "A large, fast dragonfly with mosaic spots on the abdomen.",
        fr: "Une libellule grande et rapide avec des taches en mosaïque sur l'abdomen."
    },
    size: { nl: "7–8 cm", en: "7–8 cm", fr: "7–8 cm" },
    diet: { nl: "Insecten", en: "Insects", fr: "Insectes" },
    image: "assets/images/aeshna_juncea_insects.jpg"
},
{
    id: "ext_agaricus_campestris",
    scientific: "Agaricus campestris",
    family: "Agaricaceae",
    category: "fungi",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Gewone champignon", en: "Field Mushroom", fr: "Rosé des prés" },
    habitat: { nl: "Graslanden, weiden", en: "Grasslands, meadows", fr: "Prairies, pâturages" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "Een veelgegeten plaatjeszwam die nauw verwant is aan de gekweekte champignon. Bekend als veldchampignon of weidechampignon.",
        en: "A widely eaten gilled mushroom closely related to the cultivated button mushroom. Known as the field mushroom or meadow mushroom.",
        fr: "Un champignon lamellé très consommé, étroitement apparenté au champignon de Paris cultivé."
    },
    size: { nl: "Hoed 5–10 cm", en: "Cap 5–10 cm", fr: "Chapeau 5–10 cm" },
    diet: { nl: "Saprofyt", en: "Saprophyte", fr: "Saprophyte" },
    image: "assets/images/agaricus_campestris_fungi.jpg"
},
{
    id: "i7",
    scientific: "Aglais io",
    family: "Nymphalidae",
    category: "insects",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Dagpauwoog", en: "Peacock Butterfly", fr: "Paon-du-jour" },
    habitat: { nl: "Tuinen, bosranden", en: "Gardens, forest edges", fr: "Jardins, lisières de forêts" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Heeft vier opvallende 'ogen' op de vleugels om vijanden af te schrikken. Bij gevaar klapt hij de vleugels open en produceert een sissend geluid.",
        en: "Has four striking 'eyes' on the wings to deter predators. When threatened, it flashes its wings open and produces a hissing sound.",
        fr: "Possède quatre 'yeux' frappants sur les ailes pour effrayer les prédateurs."
    },
    size: { nl: "5–6 cm spanwijdte", en: "5–6 cm wingspan", fr: "5–6 cm d'envergure" },
    diet: { nl: "Nectar; rupsen eten brandnetels", en: "Nectar; caterpillars eat nettles", fr: "Nectar; les chenilles mangent des orties" },
    funfact: { nl: "De oogvlekken lijken op de ogen van een uil om vijanden te verschrikken!", en: "The eyespots mimic owl eyes to frighten away predators!", fr: "Les taches oculaires imitent des yeux de hibou pour effrayer les prédateurs !" },
    image: "assets/images/aglais_io_insects.jpg",
    images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Aglais_io_top.jpg/640px-Aglais_io_top.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Aglais_io_European_Peacock_Butterfly_underside.jpg/640px-Aglais_io_European_Peacock_Butterfly_underside.jpg"
    ]
},
{
    id: "gen_alauda_arvensis",
    scientific: "Alauda arvensis",
    family: "Alaudidae",
    category: "birds",
    difficulty: "medium",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Alauda+arvensis",
    name: { nl: "Veldleeuwerik", en: "Eurasian Skylark", fr: "Alouette des champs" },
    habitat: { nl: "Open akkerland, weiden, heidevelden", en: "Open farmland, meadows, heathlands", fr: "Terres agricoles ouvertes, prairies, landes" },
    rarity: { nl: "Algemeen (maar afnemend)", en: "Common (but declining)", fr: "Commun (mais en déclin)" },
    description: {
        nl: "Een zangvogel van open agrarische gebieden. Bekend om het indrukwekkende gezang van het mannetje, dat tot 100 meter hoogte kan stijgen terwijl het zingt.",
        en: "A passerine of open farmland and heath, famous for the male's song delivered in hovering flight at heights of 50–100 metres.",
        fr: "Un passereau des zones agricoles ouvertes, célèbre pour le chant du mâle délivré en vol stationnaire à 50–100 mètres de hauteur."
    },
    size: { nl: "16–18 cm", en: "16–18 cm", fr: "16–18 cm" },
    diet: { nl: "Zaden, insecten", en: "Seeds, insects", fr: "Graines, insectes" },
    image: "assets/images/alauda_arvensis_fauna.jpg"
},
{
    id: "b8",
    scientific: "Alcedo atthis",
    family: "Alcedinidae",
    category: "birds",
    difficulty: "hard",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Alcedo+atthis",
    name: { nl: "IJsvogel", en: "Common Kingfisher", fr: "Martin-pêcheur d'Europe" },
    habitat: { nl: "Schone rivieren en meren", en: "Clean rivers and lakes", fr: "Rivières et lacs propres" },
    rarity: { nl: "Vrij zeldzaam", en: "Fairly Rare", fr: "Assez rare" },
    description: {
        nl: "De ijsvogel is een van de meest kleurrijke vogels van België. Hij is herkenbaar aan zijn metaalblauwe rug en oranje buik. Hij duikt razendsnel vanuit een tak in het water voor kleine vissen.",
        en: "The kingfisher is one of Belgium's most colourful birds. Recognizable by its metallic blue back and orange belly. It dives at high speed from a perch to catch small fish.",
        fr: "Le martin-pêcheur est l'un des oiseaux les plus colorés de Belgique. Il est reconnaissable à son dos bleu métallique et son ventre orange."
    },
    size: { nl: "16–17 cm", en: "16–17 cm", fr: "16–17 cm" },
    diet: { nl: "Kleine vissen, waterinsecten", en: "Small fish, aquatic insects", fr: "Petits poissons, insectes aquatiques" },
    funfact: { nl: "De ijsvogel kan tot 7 meter per seconde duiken om een vis te vangen!", en: "The kingfisher dives at up to 40 km/h to catch a fish!", fr: "Le martin-pêcheur plonge à jusqu'à 40 km/h pour attraper un poisson !" },
    image: "assets/images/alcedo_atthis_birds.jpg",
    images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Alcedo_atthis_-_Riserve_naturali_della_Lombardia.jpg/640px-Alcedo_atthis_-_Riserve_naturali_della_Lombardia.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Alcedo_atthis_2_(Bohuš_Číčel).jpg/640px-Alcedo_atthis_2_(Bohuš_Číčel).jpg"
    ]
},
{
    id: "gen_alchemilla_vulgaris",
    scientific: "Alchemilla vulgaris",
    family: "Rosaceae",
    // FIXED: was "fauna", is a plant
    category: "flora",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Gewone vrouwenmantel", en: "Lady's Mantle", fr: "Alchémille commune" },
    habitat: { nl: "Graslanden, bosranden, tuinen", en: "Grasslands, forest edges, gardens", fr: "Prairies, lisières de forêts, jardins" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    plantGrade: "dicot",
    description: {
        nl: "Een vaste plant met gelobde bladeren die waterdruppels als parels vasthouden. Door alchemisten werd het druppelwater als magisch beschouwd.",
        en: "A perennial plant with lobed leaves that collect sparkling water droplets like pearls. Alchemists considered these droplets to be magical.",
        fr: "Plante vivace aux feuilles lobées qui retiennent des gouttelettes d'eau scintillantes."
    },
    size: { nl: "15–45 cm", en: "15–45 cm", fr: "15–45 cm" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/alchemilla_vulgaris_fauna.jpg"
},
{
    id: "gen_aleuria_aurantia",
    scientific: "Aleuria aurantia",
    family: "Pyronemataceae",
    // FIXED: was "fauna", is a fungus
    category: "fungi",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Oranje bekerzwam", en: "Orange Peel Fungus", fr: "Pézize orange" },
    habitat: { nl: "Blote grond, paden, tuinen", en: "Bare ground, paths, gardens", fr: "Sol nu, chemins, jardins" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "Een helderoranje, schaalvormige zwam. De opvallende oranje kleur lijkt op een schil van een sinaasappel — vandaar de naam.",
        en: "A bright orange, cup-shaped ascomycete fungus. The vivid orange color resembles orange peel scattered on the ground, giving it its common name.",
        fr: "Un champignon ascomycète en forme de coupe d'un orange vif, ressemblant à des peaux d'orange."
    },
    size: { nl: "2–10 cm breed", en: "2–10 cm wide", fr: "2–10 cm de large" },
    diet: { nl: "Saprofyt", en: "Saprophyte", fr: "Saprophyte" },
    image: "assets/images/aleuria_aurantia_fauna.jpg"
},
{
    id: "gen_alliaria_petiolata",
    scientific: "Alliaria petiolata",
    family: "Brassicaceae",
    category: "flora",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Look-zonder-look", en: "Garlic Mustard", fr: "Alliaire officinale" },
    habitat: { nl: "Bosranden, heggen, vochtige schaduwrijke plekken", en: "Forest edges, hedges, moist shaded spots", fr: "Lisières de forêts, haies, endroits ombragés" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "Een tweejarige plant met knoflookgeur wanneer de bladeren worden gekneusd. Inheems in Europa, maar in Noord-Amerika een hardnekkige invasieve soort.",
        en: "A biennial plant with a garlic scent when its leaves are crushed. Native to Europe, it has become a persistent invasive in North America.",
        fr: "Plante bisannuelle à odeur d'ail lorsque les feuilles sont froissées. Originaire d'Europe, elle est devenue envahissante en Amérique du Nord."
    },
    size: { nl: "20–100 cm", en: "20–100 cm", fr: "20–100 cm" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/alliaria_petiolata_fauna.jpg"
},
{
    id: "fl16",
    scientific: "Allium ursinum",
    family: "Amaryllidaceae",
    category: "flora",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Daslook", en: "Wild Garlic", fr: "Ail des ours" },
    habitat: { nl: "Vochtige loofbossen", en: "Moist deciduous forests", fr: "Forêts de feuillus humides" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    plantGrade: "monocot",
    description: {
        nl: "Bedekt in het voorjaar de bosbodem met een wit bloementapijt. Ruikt sterk naar knoflook. De bladeren lijken op die van het giftige lelietje-van-dalen, wees voorzichtig!",
        en: "Covers the forest floor in spring with a white flower carpet. Smells strongly of garlic. Its leaves resemble those of the poisonous lily of the valley — beware!",
        fr: "Couvre le sol forestier au printemps d'un tapis de fleurs blanches. Sent fortement l'ail. Ses feuilles ressemblent à celles du muguet vénéneux — attention !"
    },
    size: { nl: "20–40 cm", en: "20–40 cm", fr: "20–40 cm" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    funfact: { nl: "Het Zoniënwoud bij Brussel heeft prachtige daslookbloeiers in april!", en: "The Sonian Forest near Brussels has stunning wild garlic carpets in April!", fr: "La forêt de Soignes près de Bruxelles a de magnifiques tapis d'ail des ours en avril !" },
    image: "assets/images/allium_ursinum_flora.jpg"
},
{
    id: "t17",
    scientific: "Alnus glutinosa",
    family: "Betulaceae",
    category: "trees",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Zwarte els", en: "Common Alder", fr: "Aulne glutineux" },
    habitat: { nl: "Langs waterkanten, moerasbossen", en: "Along water edges, swamp forests", fr: "Le long des berges, forêts marécageuses" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Kan goed tegen 'natte voeten'. Herkenbaar aan de kleine 'propjes' (vruchtkegels). De els heeft een symbiose met stikstofiixerende bacteriën in zijn wortels.",
        en: "Handles 'wet feet' well. Recognizable by the small 'cones' (fruit catkins). The alder has a symbiosis with nitrogen-fixing bacteria in its roots.",
        fr: "Supporte bien les pieds dans l'eau. Reconnaissable à ses petits strobiles. L'aulne a une symbiose avec des bactéries fixatrices d'azote dans ses racines."
    },
    size: { nl: "Tot 25 m", en: "Up to 25 m", fr: "Jusqu'à 25 m" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/alnus_glutinosa_trees.jpg"
},
{
    id: "f1",
    scientific: "Amanita muscaria",
    family: "Amanitaceae",
    category: "fungi",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Vliegenzwam", en: "Fly Agaric", fr: "Amanite tue-mouches" },
    habitat: { nl: "Bij berken, eiken, dennen", en: "With birches, oaks, pines", fr: "Près des bouleaux, chênes, pins" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "De bekendste paddenstoel: rood met witte stippen. Hij is erg giftig en komt vaak voor in de herfst onder berken of eiken. De witte stippen zijn resten van de sluier.",
        en: "The most famous mushroom: red with white spots. It is very poisonous and appears in autumn under birches or oaks. The white spots are remnants of the veil.",
        fr: "Le champignon le plus célèbre: rouge avec des points blancs. Il est très toxique et apparaît en automne sous les bouleaux ou les chênes."
    },
    size: { nl: "8–20 cm breed", en: "8–20 cm wide", fr: "8–20 cm de large" },
    diet: { nl: "Symbiose met boomwortels", en: "Symbiosis with tree roots", fr: "Symbiose avec les racines des arbres" },
    funfact: { nl: "De witte stippen op de hoed zijn resten van de eierschaal waaruit de paddenstoel groeide!", en: "The white spots are remnants of the egg-like veil the mushroom grew inside!", fr: "Les points blancs sont des restes du voile universel dans lequel le champignon s'est développé !" },
    image: "assets/images/amanita_muscaria_fungi.jpg",
    images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Amanita_muscaria_3_vliegenzwammen_op_rij.jpg/640px-Amanita_muscaria_3_vliegenzwammen_op_rij.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Amanita_muscaria_LC0119.jpg/640px-Amanita_muscaria_LC0119.jpg"
    ]
},
{
    id: "b2",
    scientific: "Anas platyrhynchos",
    family: "Anatidae",
    category: "birds",
    difficulty: "easy",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Anas+platyrhynchos",
    name: { nl: "Wilde Eend", en: "Mallard", fr: "Canard colvert" },
    habitat: { nl: "Sloten, meren, vijvers", en: "Ditches, lakes, ponds", fr: "Fossés, lacs, étangs" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "De meest algemene eend in België. Het mannetje heeft een glanzende groene kop en een witte halsband. Het vrouwtje is bruin gespikkeld. De tamme eend stamt van deze soort af.",
        en: "The most common duck in Belgium. The male has a glossy green head and white neck ring. The female is mottled brown. The domestic duck descends from this species.",
        fr: "Le canard le plus commun de Belgique. Le mâle a une tête verte brillante et un collier blanc. Le canard domestique est issu de cette espèce."
    },
    size: { nl: "50–65 cm", en: "50–65 cm", fr: "50–65 cm" },
    diet: { nl: "Planten, insecten, kleine vissen", en: "Plants, insects, small fish", fr: "Plantes, insectes, petits poissons" },
    image: "assets/images/anas_platyrhynchos_birds.jpg"
},
{
    id: "p2",
    scientific: "Anemone nemorosa",
    family: "Ranunculaceae",
    category: "flora",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Bosanemoon", en: "Wood Anemone", fr: "Anémone des bois" },
    habitat: { nl: "Vochtige loofbossen", en: "Moist deciduous forests", fr: "Forêts de feuillus humides" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    plantGrade: "dicot",
    // FIXED: original had stinging nettle description!
    description: {
        nl: "Een van de eerste lentebloemen van het bosbodem. Vormt in vroege lente witte tapijten voor de bomen hun bladeren hebben. De bloemen sluiten 's nachts en bij slecht weer.",
        en: "One of the first spring flowers of the forest floor. Forms white carpets in early spring before trees leaf out. The flowers close at night and in bad weather.",
        fr: "L'une des premières fleurs printanières du sol forestier. Forme des tapis blancs au début du printemps avant que les arbres ne verdissent."
    },
    size: { nl: "5–30 cm", en: "5–30 cm", fr: "5–30 cm" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/anemone_nemorosa_flora.jpg"
},
{
    id: "ext_anguis_fragilis",
    scientific: "Anguis fragilis",
    family: "Anguidae",
    category: "fauna",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Hazelworm", en: "Common Slow Worm", fr: "Orvet fragile" },
    habitat: { nl: "Tuinen, bosranden, heidevelden", en: "Gardens, forest edges, heathland", fr: "Jardins, lisières de forêts, landes" },
    rarity: { nl: "Vrij algemeen", en: "Fairly Common", fr: "Assez commun" },
    description: {
        nl: "Geen slang maar een pootloze hagedis! Het hazelworm kan zijn staart afwerpen als afleiding voor roofdieren. De ogen hebben beweegbare oogleden — iets wat echte slangen niet hebben.",
        en: "Not a snake but a legless lizard! The slow worm can shed its tail as a distraction for predators. Its eyes have movable eyelids — something real snakes lack.",
        fr: "Ce n'est pas un serpent mais un lézard sans pattes ! L'orvet peut perdre sa queue pour distraire un prédateur. Ses yeux ont des paupières mobiles."
    },
    size: { nl: "30–50 cm", en: "30–50 cm", fr: "30–50 cm" },
    diet: { nl: "Slakken, wormen, insecten", en: "Slugs, worms, insects", fr: "Limaces, vers, insectes" },
    image: "assets/images/anguis_fragilis_fauna.jpg"
},
{
    id: "gen_anser_anser",
    scientific: "Anser anser",
    family: "Anatidae",
    category: "birds",
    difficulty: "medium",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Anser+anser",
    name: { nl: "Grauwe gans", en: "Greylag Goose", fr: "Oie cendrée" },
    habitat: { nl: "Meren, moerassen, rivierdelta's", en: "Lakes, marshes, river deltas", fr: "Lacs, marais, deltas fluviaux" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "Een grote gans met grijs gestreept verenkleed, een oranje snavel en roze poten. De stamvader van de meeste rassen tamme ganzen. Gedomesticeerd al meer dan 3.300 jaar geleden.",
        en: "A large goose with mottled grey plumage, an orange beak and pink legs. The ancestor of most domestic goose breeds, domesticated at least 3,300 years ago.",
        fr: "Une grande oie au plumage gris barré, bec orange et pattes roses. Ancêtre de la plupart des races d'oies domestiques, domestiquée il y a au moins 3 300 ans."
    },
    size: { nl: "74–91 cm", en: "74–91 cm", fr: "74–91 cm" },
    diet: { nl: "Grassen, waterplanten", en: "Grasses, aquatic plants", fr: "Graminées, plantes aquatiques" },
    image: "assets/images/anser_anser_fauna.jpg"
},
{
    id: "gen_anthocharis_cardamines",
    scientific: "Anthocharis cardamines",
    family: "Pieridae",
    category: "insects",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Oranjetipje", en: "Orange Tip", fr: "Aurore" },
    habitat: { nl: "Heggen, bosranden, natte weiden", en: "Hedges, forest edges, wet meadows", fr: "Haies, lisières, prairies humides" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "Het mannetje heeft kenmerkende oranje vleugelpunten. Het vrouwtje mist de oranje kleur en kan verward worden met andere witjes. Een van de eerste vlinders van het voorjaar.",
        en: "Males have distinctive orange wing tips. Females lack the orange and can be confused with other whites. One of the first butterflies of spring.",
        fr: "Les mâles ont des pointes d'ailes orange distinctives. Les femelles manquent d'orange et peuvent être confondues avec d'autres piérides."
    },
    size: { nl: "4–5 cm spanwijdte", en: "4–5 cm wingspan", fr: "4–5 cm d'envergure" },
    diet: { nl: "Nectar van look-zonder-look e.a.", en: "Nectar from garlic mustard etc.", fr: "Nectar de l'alliaire et autres" },
    image: "assets/images/anthocharis_cardamines_fauna.jpg"
},
{
    id: "fl24",
    scientific: "Anthriscus sylvestris",
    family: "Apiaceae",
    category: "flora",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Fluitenkruid", en: "Cow Parsley", fr: "Cerfeuil sauvage" },
    habitat: { nl: "Wegbermen, dijken", en: "Roadsides, dykes", fr: "Bords de routes, digues" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    plantGrade: "dicot",
    description: {
        nl: "Vormt in het voorjaar grote witte wolken langs de wegen. De holle stelen werden vroeger als fluitje gebruikt door kinderen.",
        en: "Forms large white clouds along roads in spring. The hollow stems were once used as whistles by children.",
        fr: "Forme de grands nuages blancs le long des routes au printemps. Les tiges creuses étaient autrefois utilisées comme sifflets par les enfants."
    },
    size: { nl: "60–150 cm", en: "60–150 cm", fr: "60–150 cm" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/anthriscus_sylvestris_flora.jpg"
},
{
    id: "i20",
    scientific: "Apis mellifera",
    family: "Apidae",
    category: "insects",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Honingbij", en: "Honey Bee", fr: "Abeille domestique" },
    habitat: { nl: "Bloemrijke gebieden, bijenkorven", en: "Flowery areas, beehives", fr: "Zones fleuries, ruches" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Belangrijke bestuiver die honing produceert. Leeft in kolonies van 20.000 tot 80.000 bijen. Ze communiceren via de 'bijendans' om de weg naar voedsel aan te geven.",
        en: "Important pollinator that produces honey. Lives in colonies of 20,000–80,000 bees. They communicate via the 'waggle dance' to indicate the direction to food.",
        fr: "Important pollinisateur qui produit du miel. Vit en colonies de 20 000 à 80 000 abeilles, communiquant via la 'danse frétillante'."
    },
    size: { nl: "11–15 mm", en: "11–15 mm", fr: "11–15 mm" },
    diet: { nl: "Nectar, stuifmeel", en: "Nectar, pollen", fr: "Nectar, pollen" },
    funfact: { nl: "Een bij bezoekt 1.500 bloemen om één theelepel honing te maken!", en: "A bee visits 1,500 flowers to make one teaspoon of honey!", fr: "Une abeille visite 1 500 fleurs pour produire une cuillère à café de miel !" },
    image: "assets/images/apis_mellifera_insects.jpg"
},
{
    id: "b7",
    scientific: "Ardea cinerea",
    family: "Ardeidae",
    category: "birds",
    difficulty: "easy",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Ardea+cinerea",
    name: { nl: "Blauwe Reiger", en: "Grey Heron", fr: "Héron cendré" },
    habitat: { nl: "Langs waterkanten, weilanden", en: "Along water edges, meadows", fr: "Le long des berges, prairies" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "Een grote vogel die vaak roerloos langs de waterkant staat te wachten op een vis. Ondanks zijn grote formaat (tot 98 cm) kan hij uitstekend vliegen.",
        en: "A large bird that often stands motionless at the water's edge waiting for a fish. Despite its large size (up to 98 cm), it is an excellent flier.",
        fr: "Un grand oiseau qui se tient souvent immobile au bord de l'eau en attendant un poisson."
    },
    size: { nl: "90–98 cm", en: "90–98 cm", fr: "90–98 cm" },
    diet: { nl: "Vis, amfibieën, kleine zoogdieren", en: "Fish, amphibians, small mammals", fr: "Poissons, amphibiens, petits mammifères" },
    image: "assets/images/ardea_cinerea_birds.jpg"
},
{
    id: "fu18",
    scientific: "Armillaria mellea",
    family: "Physalacriaceae",
    category: "fungi",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Echte honingzwam", en: "Honey Fungus", fr: "Armillaire couleur de miel" },
    habitat: { nl: "Op levend of dood hout van loof- en naaldbomen", en: "On living or dead wood of deciduous and coniferous trees", fr: "Sur le bois vivant ou mort de feuillus et de conifères" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Groeit in trossen en is een gevreesde parasiet voor bomen. De hoed is honinggeel. De myceliumdraden kunnen honderden meters lang worden.",
        en: "Grows in clusters and is a dreaded parasite for trees. The cap is honey-yellow. Its mycelial threads can extend for hundreds of metres.",
        fr: "Pousse en touffes et est un parasite redouté pour les arbres. Le chapeau est jaune miel."
    },
    size: { nl: "Hoed 3–15 cm breed", en: "Cap 3–15 cm wide", fr: "Chapeau 3–15 cm de large" },
    diet: { nl: "Parasiet/Saprofyt", en: "Parasite/Saprophyte", fr: "Parasite/Saprophyte" },
    image: "assets/images/armillaria_mellea_fungi.jpg"
},
{
    id: "fu21",
    scientific: "Auricularia auricula-judae",
    family: "Auriculariaceae",
    category: "fungi",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Judasoor", en: "Jelly Ear", fr: "Oreille de Judas" },
    habitat: { nl: "Op dode vlierbomen", en: "On dead elder trees", fr: "Sur le sureau mort" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "Een rubberachtige paddenstoel die op een menselijk oor lijkt. De naam verwijst naar Judas Iskariot, die volgens de legende zich ophing aan een vlierenboom.",
        en: "A rubbery mushroom that resembles a human ear. Named after Judas Iscariot, who according to legend hanged himself from an elder tree.",
        fr: "Un champignon caoutchouteux qui ressemble à une oreille humaine. Nommé d'après Judas Iscariote, qui selon la légende se pendit à un sureau."
    },
    size: { nl: "2–10 cm", en: "2–10 cm", fr: "2–10 cm" },
    diet: { nl: "Saprofyt", en: "Saprophyte", fr: "Saprophyte" },
    image: "assets/images/auricularia_auricula-judae_fungi.jpg"
},
{
    id: "gen_aythya_fuligula",
    scientific: "Aythya fuligula",
    family: "Anatidae",
    category: "birds",
    difficulty: "medium",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Aythya+fuligula",
    name: { nl: "Kuifeend", en: "Tufted Duck", fr: "Fuligule morillon" },
    habitat: { nl: "Meren, grote vijvers, kanalen", en: "Lakes, large ponds, canals", fr: "Lacs, grands étangs, canaux" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "Een kleine duikeend met een bevolking van bijna een miljoen vogels in Noord-Eurazië. Het mannetje heeft een opvallende kuif en zwart-wit verenkleed.",
        en: "A small diving duck with a population of nearly one million birds in northern Eurasia. The male has a distinctive drooping crest and black-and-white plumage.",
        fr: "Un petit canard plongeur avec une population de près d'un million d'oiseaux en Eurasie du Nord. Le mâle a une huppe pendante distinctive."
    },
    size: { nl: "40–47 cm", en: "40–47 cm", fr: "40–47 cm" },
    diet: { nl: "Waterinsecten, weekdieren, planten", en: "Water insects, molluscs, plants", fr: "Insectes aquatiques, mollusques, plantes" },
    rangeMap: "assets/images/aythya_fuligula_range.jpg",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Tufted_Duck.jpg/640px-Tufted_Duck.jpg"
},
{
    id: "fl10_bellis",
    scientific: "Bellis perennis",
    family: "Asteraceae",
    category: "flora",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Madeliefje", en: "Daisy", fr: "Pâquerette" },
    habitat: { nl: "Graslanden, gazons, tuinen", en: "Grasslands, lawns, gardens", fr: "Prairies, pelouses, jardins" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    plantGrade: "dicot",
    // FIXED: original had poppy description for daisy!
    description: {
        nl: "Een van de meest bekende bloemen van onze gazons en graslanden. Het madeliefje bloeit bijna het hele jaar door. De witte bloemblaadjes kunnen roze worden aan de randen.",
        en: "One of the most familiar flowers of our lawns and grasslands. The daisy blooms almost year-round. The white petals can become pink-tinged at the edges.",
        fr: "L'une des fleurs les plus connues de nos pelouses. La pâquerette fleurit presque toute l'année. Les pétales blancs peuvent prendre une teinte rosée sur les bords."
    },
    size: { nl: "2–15 cm", en: "2–15 cm", fr: "2–15 cm" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/bellis_perennis_flora.jpg"
},
{
    id: "a1",
    scientific: "Beta vulgaris subsp. vulgaris",
    family: "Amaranthaceae",
    category: "agriculture",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Suikerbiet", en: "Sugar Beet", fr: "Betterave sucrière" },
    habitat: { nl: "Akkerland", en: "Farmland", fr: "Terres agricoles" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Een gewas dat op grote schaal wordt gekweekt in België voor de productie van suiker. De wortel bevat een hoog gehalte aan sacharose. België is een van de grootste suikerbietenproducenten van Europa.",
        en: "A crop widely grown in Belgium for the production of sugar. The root contains a high content of sucrose. Belgium is one of Europe's largest sugar beet producers.",
        fr: "Une culture largement pratiquée en Belgique pour la production de sucre. La racine contient une teneur élevée en saccharose."
    },
    size: { nl: "30–60 cm boven de grond", en: "30–60 cm above ground", fr: "30–60 cm au-dessus du sol" },
    diet: { nl: "Zonlicht, water, mineralen", en: "Sunlight, water, minerals", fr: "Lumière, eau, minéraux" },
    image: "assets/images/beta_vulgaris_subsp._vulgaris_agriculture.jpg"
},
{
    id: "t3",
    scientific: "Betula pendula",
    family: "Betulaceae",
    category: "trees",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Ruwe berk", en: "Silver Birch", fr: "Bouleau verruqueux" },
    habitat: { nl: "Heide, open bossen, arme gronden", en: "Heathland, open forests, poor soils", fr: "Landes, forêts ouvertes, sols pauvres" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    // FIXED: original had honeybee description for a birch tree!
    description: {
        nl: "Een pioniersboom die als een van de eerste op open plekken verschijnt. Onmiddellijk herkenbaar aan zijn zilverwitte, afbladderende schors en hangende takken. In de vroege lente produceren ze enorme hoeveelheden stuifmeel via hangende katjes.",
        en: "A pioneer tree that is one of the first to appear in clearings or on poor soil. Immediately recognizable by its silvery-white, peeling bark and pendulous branches. In early spring, huge amounts of pollen are produced via hanging catkins.",
        fr: "Un arbre pionnier. Immédiatement reconnaissable à son écorce blanc argenté qui s'exfolie et à ses branches pendantes."
    },
    size: { nl: "Tot 30 m", en: "Up to 30 m", fr: "Jusqu'à 30 m" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/betula_pendula_trees.jpg"
},
{
    id: "f2",
    scientific: "Boletus edulis",
    family: "Boletaceae",
    category: "fungi",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Eekhoorntjesbrood", en: "Penny Bun", fr: "Cèpe de Bordeaux" },
    // FIXED: missing rarity, size, description in NL/EN
    habitat: { nl: "Loof- en naaldbossen, bij eiken en dennen", en: "Deciduous and coniferous forests, near oaks and pines", fr: "Forêts de feuillus et de conifères, près des chênes et pins" },
    rarity: { nl: "Vrij algemeen", en: "Fairly Common", fr: "Assez commun" },
    description: {
        nl: "Een van de meest begeerde eetbare paddenstoelen. De bruine, broodachtige hoed en het witte tot bruine buisvlees zijn kenmerkend. Gedroogd erg aromatisch.",
        en: "One of the most prized edible mushrooms. The brown bread-like cap and white-to-brown pore surface are characteristic. Intensely aromatic when dried.",
        fr: "L'un des champignons comestibles les plus prisés. Le chapeau brun ressemblant à un pain et les pores blancs à bruns sont caractéristiques."
    },
    size: { nl: "Hoed 7–30 cm breed", en: "Cap 7–30 cm wide", fr: "Chapeau 7–30 cm de large" },
    diet: { nl: "Symbiose met boomwortels (mycorrhiza)", en: "Symbiosis with tree roots (mycorrhiza)", fr: "Symbiose avec les racines des arbres (mycorhize)" },
    image: "assets/images/boletus_edulis_fungi.jpg",
    images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Boletus_edulis_IT.jpg/640px-Boletus_edulis_IT.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Boletus_edulis_2.JPG/640px-Boletus_edulis_2.JPG"
    ]
},
{
    id: "i11",
    scientific: "Bombus pascuorum",
    family: "Apidae",
    category: "insects",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Akkerhommel", en: "Common Carder Bee", fr: "Bourdon des champs" },
    habitat: { nl: "Tuinen, graslanden, bosranden", en: "Gardens, grasslands, forest edges", fr: "Jardins, prairies, lisières de forêts" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Heeft een opvallend mosgroene tot bruine borst. Maakt nesten in holtes of holen in de grond.",
        en: "Has a striking moss-green to brown thorax. Makes nests in cavities or holes in the ground.",
        fr: "Possède un thorax allant du vert mousse au brun. Fait des nids dans des cavités ou des trous dans le sol."
    },
    size: { nl: "1.5–1.8 cm", en: "1.5–1.8 cm", fr: "1.5–1.8 cm" },
    diet: { nl: "Nectar, stuifmeel", en: "Nectar, pollen", fr: "Nectar, pollen" },
    image: "assets/images/bombus_pascuorum_insects.jpg"
},
{
    id: "i12",
    scientific: "Bombus terrestris",
    family: "Apidae",
    category: "insects",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Aardhommel", en: "Buff-tailed Bumblebee", fr: "Bourdon terrestre" },
    habitat: { nl: "Bijna overal: tuinen, parken, heide", en: "Almost everywhere: gardens, parks, heath", fr: "Presque partout : jardins, parcs, landes" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Grote, harige hommel met een witte staartpunt en twee gele banden. Nest ondergronds, vaak in verlaten mollengangen. Een van de belangrijkste bestuivers van België.",
        en: "Large, hairy bumblebee with a white tail tip and two yellow bands. Nests underground, often in abandoned mole tunnels. One of Belgium's most important pollinators.",
        fr: "Gros bourdon poilu avec le bout de la queue blanc et deux bandes jaunes. Niche sous terre, souvent dans des galeries de taupes abandonnées."
    },
    size: { nl: "2–2.5 cm", en: "2–2.5 cm", fr: "2–2.5 cm" },
    diet: { nl: "Nectar, stuifmeel", en: "Nectar, pollen", fr: "Nectar, pollen" },
    image: "assets/images/bombus_terrestris_insects.jpg"
},
{
    id: "ext_bufo_bufo",
    scientific: "Bufo bufo",
    family: "Bufonidae",
    category: "fauna",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Gewone pad", en: "Common Toad", fr: "Crapaud commun" },
    habitat: { nl: "Tuinen, bossen, vijvers", en: "Gardens, forests, ponds", fr: "Jardins, forêts, étangs" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "Een kortpootige, wartige amfibie die 's nachts actief is. Beweegt langzaam te voet maar kan korte sprongen maken. Heeft geelbruine ogen met horizontale pupillen.",
        en: "A short-legged, warty amphibian active at dusk and night. Moves with a slow walk or by short jumps. Has golden-brown eyes with horizontal pupils.",
        fr: "Un amphibien trapu et verruqueux actif au crépuscule et la nuit. Se déplace lentement ou par petits sauts."
    },
    size: { nl: "6–15 cm", en: "6–15 cm", fr: "6–15 cm" },
    diet: { nl: "Slakken, wormen, insecten", en: "Slugs, worms, insects", fr: "Limaces, vers, insectes" },
    image: "assets/images/bufo_bufo_fauna.jpg"
},
{
    id: "b20",
    scientific: "Buteo buteo",
    family: "Accipitridae",
    category: "birds",
    difficulty: "medium",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Buteo+buteo",
    name: { nl: "Buizerd", en: "Common Buzzard", fr: "Buse variable" },
    habitat: { nl: "Bossen met open velden, heide", en: "Forests with open fields, heathland", fr: "Forêts avec champs ouverts, landes" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    // FIXED: original had fly agaric mushroom description for a bird!
    description: {
        nl: "Een middelgrote roofvogel met een zeer variabel verenkleed — van bijna wit tot donkerbruin. Zweeft graag in spiralen boven open terrein. Zijn klaaglijke miauwen-achtige roep is onmiskenbaar.",
        en: "A medium-sized bird of prey with very variable plumage — from almost white to dark brown. Loves to soar in spirals over open terrain. Its mewing call is unmistakeable.",
        fr: "Un rapace de taille moyenne au plumage très variable. Aime planer en spirales au-dessus des terrains ouverts. Son cri plaintif ressemblant à un miaulement est caractéristique."
    },
    size: { nl: "50–57 cm", en: "50–57 cm", fr: "50–57 cm" },
    diet: { nl: "Muizen, konijnen, wormen, aas", en: "Mice, rabbits, worms, carrion", fr: "Souris, lapins, vers, charogne" },
    image: "assets/images/buteo_buteo_birds.jpg",
    images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Buteo_buteo_-_01.jpg/640px-Buteo_buteo_-_01.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Buteo_buteo_in_flight.jpg/640px-Buteo_buteo_in_flight.jpg"
    ]
},
{
    id: "fu10",
    scientific: "Cantharellus cibarius",
    family: "Cantharellaceae",
    category: "fungi",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Cantharel (Dooierzwam)", en: "Chanterelle", fr: "Chanterelle" },
    habitat: { nl: "Loof- en naaldbossen", en: "Deciduous and coniferous forests", fr: "Forêts de feuillus et de conifères" },
    rarity: { nl: "Vrij algemeen", en: "Fairly Common", fr: "Assez commun" },
    description: {
        nl: "De cantharel is geliefd om zijn fruitige geur (lijkend op abrikozen) en eidooiergele kleur. In plaats van echte plaatjes heeft hij ribbels die doorlopen op de steel. Een uitstekende eetbare paddenstoel.",
        en: "The chanterelle is loved for its fruity scent (resembling apricots) and egg-yolk yellow color. Instead of true gills, it has forking ridges running down the stem. An excellent edible mushroom.",
        fr: "La chanterelle est appréciée pour son odeur fruitée et sa couleur jaune d'œuf. Au lieu de vraies lamelles, elle possède des plis fourchus. Excellent champignon comestible."
    },
    size: { nl: "Hoed 3–12 cm breed", en: "Cap 3–12 cm wide", fr: "Chapeau 3–12 cm de large" },
    diet: { nl: "Symbiose met boomwortels", en: "Symbiosis with tree roots", fr: "Symbiose avec les racines des arbres" },
    funfact: { nl: "De cantharel ruikt naar abrikozen en is een van de lekkerste paddenstoelen ter wereld!", en: "The chanterelle smells of apricots and is one of the world's most delicious mushrooms!", fr: "La chanterelle sent l'abricot et est l'un des champignons les plus délicieux du monde !" },
    image: "assets/images/cantharellus_cibarius_fungi.jpg",
    images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Cantharellus_cibarius_2009_G1.jpg/640px-Cantharellus_cibarius_2009_G1.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Kantarellen.jpg/640px-Kantarellen.jpg"
    ]
},
{
    id: "m2",
    scientific: "Capreolus capreolus",
    family: "Cervidae",
    category: "fauna",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Ree", en: "Roe Deer", fr: "Chevreuil européen" },
    habitat: { nl: "Bossen met aangrenzende velden", en: "Forests with adjacent fields", fr: "Forêts avec champs adjacents" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "De ree is ons kleinste hertje. Ze zijn schuw en laten zich vooral zien in de schemering wanneer ze gaan grazen aan de bosrand.",
        en: "The roe deer is our smallest deer. They are shy and mostly appear at dusk when they go to graze at the forest edge.",
        fr: "Le chevreuil est notre plus petit cerf. Ils sont timides et se montrent surtout au crépuscule pour brouter à la lisière."
    },
    size: { nl: "95–135 cm", en: "95–135 cm", fr: "95–135 cm" },
    diet: { nl: "Kruiden, grassen, bladeren, knoppen", en: "Herbs, grasses, leaves, buds", fr: "Herbes, graminées, feuilles, bourgeons" },
    image: "assets/images/capreolus_capreolus_fauna.jpg"
},
{
    id: "fl11",
    scientific: "Centaurea cyanus",
    family: "Asteraceae",
    category: "flora",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Korenbloem", en: "Cornflower", fr: "Bleuet des champs" },
    habitat: { nl: "Akkers, bermen", en: "Fields, roadsides", fr: "Champs, bords de routes" },
    rarity: { nl: "Vrij algemeen", en: "Fairly Common", fr: "Assez commun" },
    plantGrade: "dicot",
    description: {
        nl: "Een prachtige hemelblauwe bloem die vroeger veel op graanakkers groeide maar nu zeldzamer is geworden door pesticidengebruik.",
        en: "A beautiful sky-blue flower that used to grow abundantly in grain fields but has become rarer due to pesticide use.",
        fr: "Une magnifique fleur bleu ciel qui poussait autrefois en abondance dans les champs de céréales mais est devenue plus rare en raison des pesticides."
    },
    size: { nl: "30–60 cm", en: "30–60 cm", fr: "30–60 cm" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/centaurea_cyanus_flora.jpg"
},
{
    id: "b5",
    scientific: "Columba palumbus",
    family: "Columbidae",
    category: "birds",
    difficulty: "easy",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Columba+palumbus",
    name: { nl: "Houtduif", en: "Common Wood Pigeon", fr: "Pigeon ramier" },
    habitat: { nl: "Bossen, landbouwgebieden, tuinen", en: "Forests, agricultural areas, gardens", fr: "Forêts, zones agricoles, jardins" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "De grootste duif in België. Herkenbaar aan de witte vlekken in de nek en op de vleugels tijdens de vlucht. Zijn roep klinkt als 'roo-roo-roo'.",
        en: "The largest pigeon in Belgium. Recognizable by the white patches on the neck and on the wings during flight. Its call sounds like 'roo-roo-roo'.",
        fr: "Le plus grand pigeon de Belgique. Reconnaissable aux taches blanches sur le cou et les ailes en vol."
    },
    size: { nl: "40–42 cm", en: "40–42 cm", fr: "40–42 cm" },
    diet: { nl: "Zaden, bladeren, knoppen", en: "Seeds, leaves, buds", fr: "Graines, feuilles, bourgeons" },
    image: "assets/images/columba_palumbus_birds.jpg"
},
{
    id: "fu11",
    scientific: "Coprinus comatus",
    family: "Agaricaceae",
    category: "fungi",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Geschubde inktzwam", en: "Shaggy Ink Cap", fr: "Coprin chevelu" },
    habitat: { nl: "Graslanden, parken, wegbermen", en: "Grasslands, parks, roadsides", fr: "Prairies, parcs, bords de routes" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Een witte, cilindervormige paddenstoel die later in inktzwart vervloeit door autodigestie. Eetbaar wanneer jong en wit, maar verdwijnt binnen uren.",
        en: "A white, cylindrical mushroom that later dissolves into ink-black liquid through autodigestion. Edible when young and white, but disappears within hours.",
        fr: "Un champignon blanc cylindrique qui se dissout ensuite en liquide noir par autodigestion."
    },
    size: { nl: "5–15 cm hoog", en: "5–15 cm high", fr: "5–15 cm de haut" },
    diet: { nl: "Saprofyt", en: "Saprophyte", fr: "Saprophyte" },
    image: "assets/images/coprinus_comatus_fungi.jpg"
},
{
    id: "b16",
    scientific: "Cyanistes caeruleus",
    family: "Paridae",
    category: "birds",
    difficulty: "easy",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Cyanistes+caeruleus",
    name: { nl: "Pimpelmees", en: "Eurasian Blue Tit", fr: "Mésange bleue" },
    habitat: { nl: "Bossen, tuinen met veel bomen", en: "Forests, gardens with many trees", fr: "Forêts, jardins arborés" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Kleiner dan de koolmees met een opvallend blauw kapje op de kop. Nestelt graag in nestkastjes. Kan bij vetbollen 'omgekeerd' hangen.",
        en: "Smaller than the great tit with a striking blue cap. Happily nests in nest boxes. Can hang upside down at fat feeders.",
        fr: "Plus petite que la mésange charbonnière avec une calotte bleue frappante. Niche volontiers dans les nichoirs."
    },
    size: { nl: "11–12 cm", en: "11–12 cm", fr: "11–12 cm" },
    diet: { nl: "Insecten, zaden", en: "Insects, seeds", fr: "Insectes, graines" },
    image: "assets/images/cyanistes_caeruleus_birds.jpg"
},
{
    id: "fu14",
    scientific: "Daldinia concentrica",
    family: "Hypoxylaceae",
    category: "fungi",
    difficulty: "hard",
    iucn: "LC",
    name: { nl: "Kooltje-vuur", en: "King Alfred's Cakes", fr: "Daldinie concentrique" },
    habitat: { nl: "Dood essenhout", en: "Dead ash wood", fr: "Bois de frêne mort" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "Lijkt op een brok houtskool. Binnenin zitten concentrische ringen, zoals jaarringen van een boom. Vroeger gebruikt om vuur aan te houden.",
        en: "Resembles a lump of charcoal. Contains concentric rings inside, like tree rings. Was historically used to keep fire smouldering.",
        fr: "Ressemble à un morceau de charbon. Contient des anneaux concentriques à l'intérieur. Historiquement utilisé pour conserver le feu."
    },
    size: { nl: "2–5 cm breed", en: "2–5 cm wide", fr: "2–5 cm de large" },
    diet: { nl: "Saprofyt", en: "Saprophyte", fr: "Saprophyte" },
    image: "assets/images/daldinia_concentrica_fungi.jpg"
},
{
    id: "fl22",
    scientific: "Daucus carota",
    family: "Apiaceae",
    category: "flora",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Wilde peen", en: "Wild Carrot", fr: "Carotte sauvage" },
    habitat: { nl: "Graslanden, bermen", en: "Grasslands, roadsides", fr: "Prairies, bords de routes" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    plantGrade: "dicot",
    description: {
        nl: "De voorouder van onze wortel. Heeft witte schermen met vaak één donkerrood bloempje in het midden om insecten aan te trekken.",
        en: "The ancestor of our carrot. Has white umbels often with one dark red flower in the center to attract insects.",
        fr: "L'ancêtre de notre carotte. A des ombelles blanches avec souvent une petite fleur rouge foncé au centre pour attirer les insectes."
    },
    size: { nl: "30–90 cm", en: "30–90 cm", fr: "30–90 cm" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/daucus_carota_flora.jpg"
},
{
    id: "b1",
    scientific: "Erithacus rubecula",
    family: "Muscicapidae",
    category: "birds",
    difficulty: "easy",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Erithacus+rubecula",
    name: { nl: "Roodborst", en: "European Robin", fr: "Rouge-gorge familier" },
    habitat: { nl: "Tuinen, bossen, parken", en: "Gardens, forests, parks", fr: "Jardins, forêts, parcs" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Het roodborstje is een van de meest geliefde vogels in België. Het is herkenbaar aan zijn oranje-rode borst en gezicht. Ze zijn vaak erg tam en nieuwsgierig naar tuiniers.",
        en: "The European Robin is one of Belgium's most beloved birds. Recognizable by its orange-red breast and face. They are often quite tame and curious towards gardeners.",
        fr: "Le rouge-gorge est l'un des oiseaux les plus appréciés de Belgique. Reconnaissable à sa poitrine et sa face rouge orangé."
    },
    size: { nl: "12–14 cm", en: "12–14 cm", fr: "12–14 cm" },
    diet: { nl: "Insecten, zaden, bessen", en: "Insects, seeds, berries", fr: "Insectes, graines, baies" },
    funfact: { nl: "Het roodborstje is één van de enige vogels die 's nachts zingt in steden, aangetrokken door kunstlicht!", en: "The robin is one of the few birds that sings at night in cities, attracted by artificial light!", fr: "Le rouge-gorge est l'un des rares oiseaux à chanter la nuit en ville, attiré par la lumière artificielle !" },
    image: "assets/images/erithacus_rubecula_birds.jpg",
    images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Erithacus_rubecula_with_cocked_head.jpg/640px-Erithacus_rubecula_with_cocked_head.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/EuropeanRobin.jpg/640px-EuropeanRobin.jpg"
    ]
},
{
    id: "t2",
    scientific: "Fagus sylvatica",
    family: "Fagaceae",
    category: "trees",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Gewone beuk", en: "Common Beech", fr: "Hêtre européen" },
    habitat: { nl: "Vochtige, kalkrijke bossen", en: "Moist, calcareous forests", fr: "Forêts humides et calcaires" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    // FIXED: original had birch description for beech!
    description: {
        nl: "De beuk is een van de meest indrukwekkende bomen van onze bossen. Hij heeft gladde, grijze schors, ovaalvormige bladeren en produceer beukennootjes (mast) in de herfst. Beukenbossen hebben vaak een dicht bladerdak zodat er weinig licht op de bosbodem valt.",
        en: "The beech is one of the most impressive trees of our forests. It has smooth grey bark, oval leaves and produces beechnuts (mast) in autumn. Beech forests often have a dense canopy with little light reaching the forest floor.",
        fr: "Le hêtre est l'un des arbres les plus impressionnants de nos forêts. Il a une écorce grise lisse, des feuilles ovales et produit des faînes en automne."
    },
    size: { nl: "Tot 40 m", en: "Up to 40 m", fr: "Jusqu'à 40 m" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    funfact: { nl: "Het Hallerbos bij Brussel staat beroemd om zijn prachtige paarse tapijt van wilde hyacinten elke lente!", en: "The Hallerbos near Brussels is famous for its stunning purple carpet of bluebells every spring!", fr: "Le Hallerbos près de Bruxelles est célèbre pour son magnifique tapis violet de jacinthes des bois chaque printemps !" },
    image: "assets/images/fagus_sylvatica_trees.jpg"
},
{
    id: "b19",
    scientific: "Falco tinnunculus",
    family: "Falconidae",
    category: "birds",
    difficulty: "medium",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Falco+tinnunculus",
    name: { nl: "Torenvalk", en: "Common Kestrel", fr: "Faucon crécerelle" },
    habitat: { nl: "Graslanden, bermen, steden", en: "Grasslands, roadsides, cities", fr: "Prairies, talus, villes" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "Bekend om het 'bidden': stilhangen in de lucht terwijl ze naar prooi zoeken op de grond. Het mannetje heeft een grijze kop, het vrouwtje is bruin.",
        en: "Famous for 'hovering': hanging still in the air while searching for prey on the ground. The male has a grey head; the female is brown.",
        fr: "Célèbre pour son vol de 'Saint-Esprit': rester immobile dans l'air en cherchant une proie au sol."
    },
    size: { nl: "32–35 cm", en: "32–35 cm", fr: "32–35 cm" },
    diet: { nl: "Muizen, grote insecten", en: "Mice, large insects", fr: "Souris, gros insectes" },
    image: "assets/images/falco_tinnunculus_birds.jpg"
},
{
    id: "fu12",
    scientific: "Fistulina hepatica",
    family: "Fistulinaceae",
    category: "fungi",
    difficulty: "hard",
    iucn: "LC",
    name: { nl: "Biefstukzwam", en: "Beefsteak Fungus", fr: "Fistuline hépatique" },
    habitat: { nl: "Op levend of dood eikenhout", en: "On living or dead oak wood", fr: "Sur bois de chêne vivant ou mort" },
    rarity: { nl: "Vrij algemeen", en: "Fairly Common", fr: "Assez commun" },
    description: {
        nl: "Lijkt op een stuk rauw vlees en scheidt een bloederig sap af bij aansnijden. Eetbaar wanneer jong. Parasiteert op eiken maar maakt het hout waardevol (bruin eikenkleur).",
        en: "Resembles a piece of raw meat and secretes a bloody sap when cut. Edible when young. Parasitizes oaks but makes the wood valuable (brown oak colour).",
        fr: "Ressemble à un morceau de viande crue et sécrète un suc sanglant. Comestible quand jeune."
    },
    size: { nl: "10–25 cm breed", en: "10–25 cm wide", fr: "10–25 cm de large" },
    diet: { nl: "Parasiet/Saprofyt", en: "Parasite/Saprophyte", fr: "Parasite/Saprophyte" },
    image: "assets/images/fistulina_hepatica_fungi.jpg"
},
{
    id: "i15",
    scientific: "Forficula auricularia",
    family: "Forficulidae",
    category: "insects",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Gewone oorwurm", en: "European Earwig", fr: "Perce-oreille" },
    habitat: { nl: "Donkere, vochtige plekken", en: "Dark, moist places", fr: "Endroits sombres et humides" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Heeft een soort 'tangen' aan het achterlijf. Ze kruipen niet echt in oren! De vrouwtjes bewaken actief hun eieren — zeldzaam bij insecten.",
        en: "Has a kind of 'pincers' at the abdomen. They don't actually crawl into ears! Females actively guard their eggs — rare among insects.",
        fr: "Possède des pinces à l'abdomen. Ils n'entrent pas vraiment dans les oreilles ! Les femelles gardent activement leurs œufs — rare chez les insectes."
    },
    size: { nl: "1.2–1.5 cm", en: "1.2–1.5 cm", fr: "1.2–1.5 cm" },
    diet: { nl: "Planten, dode insecten", en: "Plants, dead insects", fr: "Plantes, insectes morts" },
    image: "assets/images/forficula_auricularia_insects.jpg"
},
{
    id: "t11",
    scientific: "Fraxinus excelsior",
    family: "Oleaceae",
    category: "trees",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Gewone es", en: "European Ash", fr: "Frêne élevé" },
    habitat: { nl: "Vochtige bossen, wegbermen", en: "Moist forests, roadsides", fr: "Forêts humides, bords de routes" },
    rarity: { nl: "Algemeen (maar bedreigd door essentaksterfte)", en: "Common (but threatened by ash dieback)", fr: "Commun (mais menacé par la chalarose)" },
    description: {
        nl: "Heeft samengestelde bladeren en dikke zwartfluwelen knoppen in de winter. Ernstig bedreigd door de essentaksterfte (Hymenoscyphus fraxineus), een schimmelziekte.",
        en: "Has compound leaves and thick black velvet buds in winter. Seriously threatened by ash dieback (Hymenoscyphus fraxineus), a fungal disease.",
        fr: "A des feuilles composées et des bourgeons veloutés noirs en hiver. Sérieusement menacé par la chalarose (Hymenoscyphus fraxineus)."
    },
    size: { nl: "Tot 40 m", en: "Up to 40 m", fr: "Jusqu'à 40 m" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/fraxinus_excelsior_trees.jpg"
},
{
    id: "b6",
    scientific: "Fringilla coelebs",
    family: "Fringillidae",
    category: "birds",
    difficulty: "easy",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Fringilla+coelebs",
    name: { nl: "Vink", en: "Common Chaffinch", fr: "Pinson des arbres" },
    habitat: { nl: "Bossen, parken en tuinen", en: "Woods, parks and gardens", fr: "Bois, parcs et jardins" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Een van de meest voorkomende zangvogels. Het mannetje heeft een blauwgrijze kruin en een roodbruine borst. Het vrouwtje is bruiner.",
        en: "One of the most common songbirds. The male has a blue-grey crown and a reddish-brown breast. The female is browner.",
        fr: "L'un des passereaux les plus communs. Le mâle a une calotte bleu-gris et une poitrine brun roussâtre."
    },
    size: { nl: "14–16 cm", en: "14–16 cm", fr: "14–16 cm" },
    diet: { nl: "Zaden, insecten (voor jongen)", en: "Seeds, insects (for chicks)", fr: "Graines, insectes (pour les petits)" },
    image: "assets/images/fringilla_coelebs_birds.jpg"
},
{
    id: "b22",
    scientific: "Garrulus glandarius",
    family: "Corvidae",
    category: "birds",
    difficulty: "medium",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Garrulus+glandarius",
    name: { nl: "Gaai", en: "Eurasian Jay", fr: "Geai des chênes" },
    habitat: { nl: "Bossen, grote tuinen", en: "Forests, large gardens", fr: "Forêts, grands jardins" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "Kleurrijke vogel met opvallende blauwe vleugelveren en een luide roep. Begraaft eikels als wintervoorraad. Vergeet een deel ervan, waardoor hij onbewust eiken helpt verspreiden.",
        en: "Colourful bird with striking blue wing feathers and a loud call. Buries acorns as winter store. Forgets some of them, inadvertently helping to spread oak trees.",
        fr: "Oiseau coloré avec des plumes alaires bleues frappantes et un cri fort. Enterre des glands en réserve, contribuant involontairement à la dispersion des chênes."
    },
    size: { nl: "32–35 cm", en: "32–35 cm", fr: "32–35 cm" },
    diet: { nl: "Alleseter, eikels", en: "Omnivore, acorns", fr: "Omnivore, glands" },
    image: "assets/images/garrulus_glandarius_birds.jpg"
},
{
    id: "fl14",
    scientific: "Galium odoratum",
    family: "Rubiaceae",
    category: "flora",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Lievevrouwebedstro", en: "Sweet Woodruff", fr: "Gaillet odorant" },
    habitat: { nl: "Schaduwrijke beukenbossen", en: "Shady beech forests", fr: "Hêtraies ombragées" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    plantGrade: "dicot",
    description: {
        nl: "Heeft kransen van bladeren en kleine witte sterbloemetjes. Ruikt heerlijk naar cumarine (vanille/hooi). Wordt gebruikt voor Maibowle, een traditionele Belgische/Duitse lentedrank.",
        en: "Has whorls of leaves and small white star flowers. Smells wonderfully of coumarin (vanilla/hay). Used for Maibowle, a traditional Belgian/German spring drink.",
        fr: "A des verticilles de feuilles et de petites fleurs blanches en étoile. Sent merveilleusement la coumarine. Utilisé pour le vin de mai."
    },
    size: { nl: "15–30 cm", en: "15–30 cm", fr: "15–30 cm" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/galium_odoratum_flora.jpg"
},
{
    id: "gen_gallinula_chloropus",
    scientific: "Gallinula chloropus",
    family: "Rallidae",
    // FIXED: was "fungi", is a bird!
    category: "birds",
    difficulty: "medium",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Gallinula+chloropus",
    name: { nl: "Waterhoen", en: "Common Moorhen", fr: "Gallinule poule-d'eau" },
    habitat: { nl: "Vijvers, sloten, moerasgebieden", en: "Ponds, ditches, marshes", fr: "Étangs, fossés, marais" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "Een zwarte vogel met een opvallende rode en gele snavel. Leeft bij moerassen, vijvers en sloten. Knikt met de kop tijdens het zwemmen.",
        en: "A dark bird with a striking red and yellow bill. Lives around marshes, ponds and ditches. Bobs its head while swimming.",
        fr: "Un oiseau sombre avec un bec rouge et jaune frappant. Vit près des marais, étangs et fossés. Hoche la tête en nageant."
    },
    size: { nl: "30–38 cm", en: "30–38 cm", fr: "30–38 cm" },
    diet: { nl: "Waterplanten, insecten, wormen", en: "Water plants, insects, worms", fr: "Plantes aquatiques, insectes, vers" },
    image: "assets/images/gallinula_chloropus_fauna.jpg"
},
{
    id: "fl12",
    scientific: "Glechoma hederacea",
    family: "Lamiaceae",
    category: "flora",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Hondsdraf", en: "Ground Ivy", fr: "Lierre terrestre" },
    habitat: { nl: "Bossen, hegvoeten, gazons", en: "Woods, hedge bottoms, lawns", fr: "Bois, bas de haies, pelouses" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    plantGrade: "dicot",
    description: {
        nl: "Kruipende plant met nier- tot hartvormige blaadjes en paars-blauwe bloemen. Vroeger gebruikt als hopvervanger bij het brouwen van bier.",
        en: "Creeping plant with kidney- to heart-shaped leaves and purple-blue flowers. Was formerly used as a hop substitute in beer brewing.",
        fr: "Plante rampante aux feuilles en forme de rein ou de cœur et fleurs bleu-violet. Autrefois utilisé comme substitut du houblon dans la fabrication de la bière."
    },
    size: { nl: "10–20 cm", en: "10–20 cm", fr: "10–20 cm" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/glechoma_hederacea_flora.jpg"
},
{
    id: "i8",
    scientific: "Gonepteryx rhamni",
    family: "Pieridae",
    category: "insects",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Citroenvlinder", en: "Brimstone Butterfly", fr: "Citron" },
    habitat: { nl: "Bosranden, tuinen met hagen", en: "Forest edges, gardens with hedges", fr: "Lisières de forêts, jardins avec haies" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Een van de eerste vlinders in het voorjaar. De vleugels lijken op bladeren — perfecte camouflage. Het mannetje is citroenachtig geel, het vrouwtje geelgroen.",
        en: "One of the first butterflies in spring. The wings resemble leaves — perfect camouflage. The male is lemon yellow, the female is yellowish-green.",
        fr: "L'un des premiers papillons au printemps. Les ailes ressemblent à des feuilles. Le mâle est jaune citron, la femelle est jaune-vert."
    },
    size: { nl: "5–6 cm spanwijdte", en: "5–6 cm wingspan", fr: "5–6 cm d'envergure" },
    diet: { nl: "Nectar", en: "Nectar", fr: "Nectar" },
    image: "assets/images/gonepteryx_rhamni_insects.jpg"
},
{
    id: "fl28",
    scientific: "Heracleum sphondylium",
    family: "Apiaceae",
    category: "flora",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Gewone berenklauw", en: "Hogweed", fr: "Berce commune" },
    habitat: { nl: "Graslanden, bosranden, bermen", en: "Grasslands, forest edges, roadsides", fr: "Prairies, lisières de forêts, bords de routes" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    plantGrade: "dicot",
    description: {
        nl: "Grote plant met witte bloemschermen. Kan bij aanraking in combinatie met zonlicht huidirritatie veroorzaken. Niet te verwarren met de gevaarlijkere reuzenberenklauw.",
        en: "Large plant with white flower umbels. Can cause skin irritation when touched in combination with sunlight. Not to be confused with the more dangerous giant hogweed.",
        fr: "Grande plante à ombelles blanches. Peut provoquer des irritations cutanées au contact combiné au soleil. À ne pas confondre avec la berce du Caucase, plus dangereuse."
    },
    size: { nl: "1–2 m", en: "1–2 m", fr: "1–2 m" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/heracleum_sphondylium_flora.jpg"
},
{
    id: "b24",
    scientific: "Hirundo rustica",
    family: "Hirundinidae",
    category: "birds",
    difficulty: "easy",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Hirundo+rustica",
    name: { nl: "Boerenzwaluw", en: "Barn Swallow", fr: "Hirondelle de cheminée" },
    habitat: { nl: "Open boerenland, nabij gebouwen", en: "Open farmland, near buildings", fr: "Terres agricoles ouvertes, près des bâtiments" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "Bekend om hun diep gevorkte staart en vlugge vlucht. Ze migreren vanuit sub-Sahara Afrika en zijn een teken van de lente. Nestelen in boerenschuren.",
        en: "Known for their deeply forked tail and swift flight. They migrate from sub-Saharan Africa and signal the arrival of spring. They nest in farm buildings.",
        fr: "Connu pour sa queue profondément fourchue et son vol rapide. Migre d'Afrique subsaharienne, signe du printemps."
    },
    size: { nl: "17–19 cm", en: "17–19 cm", fr: "17–19 cm" },
    diet: { nl: "Vliegende insecten", en: "Flying insects", fr: "Insectes volants" },
    image: "assets/images/hirundo_rustica_birds.jpg"
},
{
    id: "a7",
    scientific: "Humulus lupulus",
    family: "Cannabaceae",
    category: "agriculture",
    difficulty: "hard",
    iucn: "LC",
    name: { nl: "Hop", en: "Hop", fr: "Houblon" },
    habitat: { nl: "Hopvelden (vooral regio Poperinge)", en: "Hop gardens (especially Poperinge region)", fr: "Houblonnières (surtout région de Poperinge)" },
    rarity: { nl: "Plaatselijk algemeen", en: "Locally common", fr: "Localement commun" },
    description: {
        nl: "Hop is onafscheidelijk verbonden met de Belgische biercultuur. Het is een klimplant die aan hoge haken in speciale hopvelden wordt gekweekt. De vrouwelijke bloembellen bevatten lupuline, die bier zijn bitterheid geeft.",
        en: "Hops are inseparably linked to Belgian beer culture. A climbing plant grown on high poles in hop gardens. The female flower cones contain lupulin, which gives beer its characteristic bitterness.",
        fr: "Le houblon est indissociable de la culture brassicole belge. Plante grimpante cultivée sur de hautes perches. Les cônes femelles contiennent de la lupuline."
    },
    size: { nl: "Klimmer tot 6 m", en: "Climber up to 6 m", fr: "Grimpant jusqu'à 6 m" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/humulus_lupulus_agriculture.jpg"
},
{
    id: "fl5",
    scientific: "Hyacinthoides non-scripta",
    family: "Asparagaceae",
    category: "flora",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Wilde hyacint", en: "Common Bluebell", fr: "Jacinthe des bois" },
    habitat: { nl: "Oude loofbossen, bosranden", en: "Ancient deciduous forests, forest edges", fr: "Vieilles forêts de feuillus, lisières" },
    rarity: { nl: "Vrij algemeen", en: "Fairly Common", fr: "Assez commun" },
    plantGrade: "monocot",
    description: {
        nl: "Vormt in het voorjaar prachtige blauwe tapijten in oude bossen. Het beroemde Hallerbos bij Brussel staat bekend om zijn wilde hyacintbloesel in april-mei.",
        en: "Forms beautiful blue carpets in old forests in spring. The famous Hallerbos near Brussels is renowned for its bluebell bloom in April–May.",
        fr: "Forme de magnifiques tapis bleus dans les vieilles forêts au printemps. Le célèbre Hallerbos près de Bruxelles est renommé pour sa floraison en avril–mai."
    },
    size: { nl: "20–50 cm", en: "20–50 cm", fr: "20–50 cm" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    funfact: { nl: "Het Hallerbos trekt elk jaar tienduizenden bezoekers voor het blauwe tapijt van wilde hyacinten!", en: "The Hallerbos attracts tens of thousands of visitors every year for the blue carpet of bluebells!", fr: "Le Hallerbos attire des dizaines de milliers de visiteurs chaque année pour son tapis bleu de jacinthes !" },
    image: "assets/images/hyacinthoides_non-scripta_flora.jpg",
    images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hallerbos_in_bloom_2013.jpg/640px-Hallerbos_in_bloom_2013.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Hyacinthoides_non-scripta_%28Hallerbos%29.jpg/640px-Hyacinthoides_non-scripta_%28Hallerbos%29.jpg"
    ]
},
{
    id: "i22_luc",
    scientific: "Lucanus cervus",
    family: "Lucanidae",
    category: "insects",
    difficulty: "hard",
    iucn: "NT",
    name: { nl: "Vliegend hert", en: "Stag Beetle", fr: "Lucane cerf-volant" },
    habitat: { nl: "Oude eikenbossen", en: "Old oak forests", fr: "Vieilles chênaies" },
    rarity: { nl: "Zeldzaam", en: "Rare", fr: "Rare" },
    description: {
        nl: "De grootste kever van België. De mannetjes hebben enorme kaken die lijken op hertengewei. Ze gebruiken die voor gevechten om vrouwtjes. De larven leven 3–7 jaar in rottend eikenhout.",
        en: "The largest beetle in Belgium. Males have enormous jaws resembling stag antlers, used in fights over females. Larvae live 3–7 years in rotting oak wood.",
        fr: "Le plus grand coléoptère de Belgique. Les mâles ont d'énormes mandibules ressemblant à des bois de cerf, utilisées dans des combats pour les femelles."
    },
    size: { nl: "5–8 cm", en: "5–8 cm", fr: "5–8 cm" },
    diet: { nl: "Sap van bomen (volwassenen); hout (larven)", en: "Tree sap (adults); wood (larvae)", fr: "Sève des arbres (adultes); bois (larves)" },
    funfact: { nl: "Het vliegend hert is met uitsterven bedreigd en wordt beschermd door Europese wetgeving.", en: "The stag beetle is threatened with extinction and protected under European law.", fr: "Le lucane cerf-volant est menacé d'extinction et protégé par la législation européenne." },
    image: "assets/images/lucanus_cervus_insects.jpg",
    images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Lucanus_cervus_male_top_down.jpg/640px-Lucanus_cervus_male_top_down.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/LucanuscervusFemale.jpg/640px-LucanuscervusFemale.jpg"
    ]
},
{
    id: "i23",
    scientific: "Macroglossum stellatarum",
    family: "Sphingidae",
    category: "insects",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Kolibrievlinder", en: "Hummingbird Hawkmoth", fr: "Moro-sphinx" },
    habitat: { nl: "Tuinen, bosranden", en: "Gardens, forest edges", fr: "Jardins, lisières de forêts" },
    rarity: { nl: "Vrij algemeen", en: "Fairly Common", fr: "Assez commun" },
    description: {
        nl: "Vliegt overdag en zweeft voor bloemen terwijl hij nectar drinkt, net als een kolibrie. Zo snel dat zijn vleugels onzichtbaar zijn.",
        en: "Flies during the day and hovers in front of flowers while drinking nectar, just like a hummingbird. Wings beat so fast they are invisible.",
        fr: "Vole de jour et plane devant les fleurs en buvant du nectar, tout comme un colibri."
    },
    size: { nl: "4–5 cm spanwijdte", en: "4–5 cm wingspan", fr: "4–5 cm d'envergure" },
    diet: { nl: "Nectar", en: "Nectar", fr: "Nectar" },
    image: "assets/images/macroglossum_stellatarum_insects.jpg"
},
{
    id: "m3",
    scientific: "Meles meles",
    family: "Mustelidae",
    category: "fauna",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Das", en: "European Badger", fr: "Blaireau européen" },
    // FIXED: habitat field had French description text instead of habitat
    habitat: { nl: "Bossen, bosranden, graslanden", en: "Forests, forest edges, grasslands", fr: "Forêts, lisières de forêts, prairies" },
    rarity: { nl: "Vrij algemeen", en: "Fairly Common", fr: "Assez commun" },
    description: {
        nl: "De das is een stevig gebouwde carnivoor met een karakteristiek zwart-wit gestreepte kop. Graaft uitgebreide gangen (burchten). Omnivoor: eet van alles, van regenwormen tot fruit.",
        en: "The badger is a solidly built carnivore with a characteristic black-and-white striped head. Digs extensive burrow systems (setts). Omnivorous: eats everything from earthworms to fruit.",
        fr: "Le blaireau est un carnivore solidement bâti avec une tête rayée de noir et blanc. Creuse d'énormes réseaux de galeries (terriers)."
    },
    size: { nl: "60–90 cm", en: "60–90 cm", fr: "60–90 cm" },
    diet: { nl: "Regenwormen, insecten, fruit, kleine zoogdieren", en: "Earthworms, insects, fruit, small mammals", fr: "Vers de terre, insectes, fruits, petits mammifères" },
    image: "assets/images/meles_meles_fauna.jpg"
},
{
    id: "m8",
    scientific: "Lepus europaeus",
    family: "Leporidae",
    category: "fauna",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Haas", en: "European Hare", fr: "Lièvre d'Europe" },
    habitat: { nl: "Open velden, akkers", en: "Open fields, farmland", fr: "Champs ouverts, terres agricoles" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "Groter dan een konijn met erg lange oren met zwarte punten. Kan tot 70 km/u rennen. In tegenstelling tot konijnen leven hazen op het oppervlak (niet in holen).",
        en: "Larger than a rabbit with very long black-tipped ears. Can run at up to 70 km/h. Unlike rabbits, hares live on the surface rather than in burrows.",
        fr: "Plus grand qu'un lapin avec de très longues oreilles à pointes noires. Peut courir à 70 km/h. Contrairement aux lapins, les lièvres vivent en surface."
    },
    size: { nl: "50–70 cm", en: "50–70 cm", fr: "50–70 cm" },
    diet: { nl: "Grassen, kruiden, schors", en: "Grasses, herbs, bark", fr: "Graminées, herbes, écorce" },
    image: "assets/images/lepus_europaeus_fauna.jpg"
},
{
    id: "fl18",
    scientific: "Leucanthemum vulgare",
    family: "Asteraceae",
    category: "flora",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Gewone margriet", en: "Oxeye Daisy", fr: "Marguerite commune" },
    habitat: { nl: "Graslanden, bermen", en: "Grasslands, roadsides", fr: "Prairies, bords de routes" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    plantGrade: "dicot",
    description: {
        nl: "Grote witte bloem met een geel hart, groter dan het madeliefje. Bloeit van mei tot september. Populair bij vlinders en bijen.",
        en: "Large white flower with a yellow heart, larger than the daisy. Blooms from May to September. Popular with butterflies and bees.",
        fr: "Grande fleur blanche au cœur jaune, plus grande que la pâquerette. Fleurit de mai à septembre."
    },
    size: { nl: "30–60 cm", en: "30–60 cm", fr: "30–60 cm" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/leucanthemum_vulgare_flora.jpg"
},
{
    id: "fu22",
    scientific: "Laccaria amethystina",
    family: "Hydnangiaceae",
    category: "fungi",
    difficulty: "hard",
    iucn: "LC",
    name: { nl: "Amethistzwam", en: "Amethyst Deceiver", fr: "Laccaire améthyste" },
    habitat: { nl: "Loof- en naaldbossen", en: "Deciduous and coniferous forests", fr: "Forêts de feuillus et de conifères" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "Heeft een prachtige, diep paarse kleur die bij droogte bleek wordt. Eetbaar maar kan arseen ophopen uit de bodem — met mate eten.",
        en: "Has a beautiful, deep purple color that turns pale when dry. Edible but can accumulate arsenic from the soil — eat in moderation.",
        fr: "Possède une belle couleur violet profond qui pâlit en séchant. Comestible mais peut accumuler de l'arsenic du sol."
    },
    size: { nl: "2–6 cm", en: "2–6 cm", fr: "2–6 cm" },
    diet: { nl: "Mycorrhiza", en: "Mycorrhiza", fr: "Mycorhize" },
    image: "assets/images/laccaria_amethystina_fungi.jpg"
},
{
    id: "fu23",
    scientific: "Leccinum scabrum",
    family: "Boletaceae",
    category: "fungi",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Gewone berkenboleet", en: "Birch Bolete", fr: "Bolet rude" },
    habitat: { nl: "Bij berken", en: "With birches", fr: "Avec les bouleaux" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Eetbare boleet met een steel vol bruin-zwarte schubjes. Leeft altijd in symbiose met berken.",
        en: "Edible bolete with a stem full of brown-black scales. Always lives in symbiosis with birches.",
        fr: "Bolet comestible avec un pied couvert de petites mèches brun-noir. Vit toujours en symbiose avec les bouleaux."
    },
    size: { nl: "8–15 cm", en: "8–15 cm", fr: "8–15 cm" },
    diet: { nl: "Mycorrhiza", en: "Mycorrhiza", fr: "Mycorhize" },
    image: "assets/images/leccinum_scabrum_fungi.jpg"
},
{
    id: "fu13",
    scientific: "Lycoperdon perlatum",
    family: "Agaricaceae",
    category: "fungi",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Parelbovist", en: "Common Puffball", fr: "Vesse-de-loup perlée" },
    habitat: { nl: "Loof- en naaldbossen", en: "Deciduous and coniferous forests", fr: "Forêts de feuillus et de conifères" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Peervormig met kleine stekeltjes. Bij rijpheid ontsnappen de sporen door een gaatje bovenin. Als je op een rijpe bovist drukt, vormt er een rookpluim van sporen.",
        en: "Pear-shaped with small prickles. When mature, spores escape through a hole at the top. If you press a ripe puffball, a cloud of spores puffs out.",
        fr: "En forme de poire avec de petites épines. À maturité, les spores s'échappent par un trou au sommet."
    },
    size: { nl: "3–8 cm hoog", en: "3–8 cm high", fr: "3–8 cm de haut" },
    diet: { nl: "Saprofyt", en: "Saprophyte", fr: "Saprophyte" },
    image: "assets/images/lycoperdon_perlatum_fungi.jpg"
},
{
    id: "fu17",
    scientific: "Macrolepiota procera",
    family: "Agaricaceae",
    category: "fungi",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Grote parasolzwam", en: "Parasol Mushroom", fr: "Lépiote élevée" },
    habitat: { nl: "Graslanden, bosranden", en: "Grasslands, forest edges", fr: "Prairies, lisières de forêts" },
    rarity: { nl: "Vrij algemeen", en: "Fairly Common", fr: "Assez commun" },
    description: {
        nl: "Een zeer grote paddenstoel met een beweegbare ring om de steel. Eetbaar wanneer jong. Lijkt op de gevaarlijke Amanita soorten — ken de verschillen!",
        en: "A very large mushroom with a movable ring around the stem. Edible when young. Resembles dangerous Amanita species — know the differences!",
        fr: "Un très grand champignon avec un anneau mobile. Comestible quand jeune. Ressemble aux dangereuses amanites — connaître les différences !"
    },
    size: { nl: "Hoed 15–30 cm breed", en: "Cap 15–30 cm wide", fr: "Chapeau 15–30 cm de large" },
    diet: { nl: "Saprofyt", en: "Saprophyte", fr: "Saprophyte" },
    image: "assets/images/macrolepiota_procera_fungi.jpg"
},
{
    id: "m10",
    scientific: "Martes foina",
    family: "Mustelidae",
    category: "fauna",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Steenmarter", en: "Beech Marten", fr: "Fouine" },
    habitat: { nl: "Nabij woningen, schuren, bossen", en: "Near houses, barns, forests", fr: "Près des maisons, granges, forêts" },
    rarity: { nl: "Vrij algemeen", en: "Fairly Common", fr: "Assez commun" },
    description: {
        nl: "Een behendige klimmer die soms in spouwmuren of onder motorkappen van auto's kruipt, wat schade kan veroorzaken. Heeft een witte keelvlek (onderscheid van boommarter die oranje/geel heeft).",
        en: "An agile climber who sometimes crawls into cavity walls or under car hoods, causing damage. Has a white throat patch (distinguishing it from the pine marten which has orange/yellow).",
        fr: "Un grimpeur agile qui se glisse parfois sous les capots des voitures, causant des dégâts. A une tache gorge blanche."
    },
    size: { nl: "40–50 cm", en: "40–50 cm", fr: "40–50 cm" },
    diet: { nl: "Kleine dieren, eieren, vruchten", en: "Small animals, eggs, fruits", fr: "Petits animaux, œufs, fruits" },
    image: "assets/images/martes_foina_fauna.jpg"
},
{
    id: "b25",
    scientific: "Motacilla alba",
    family: "Motacillidae",
    category: "birds",
    difficulty: "easy",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Motacilla+alba",
    name: { nl: "Witte kwikstaart", en: "White Wagtail", fr: "Bergeronnette grise" },
    habitat: { nl: "Open gebieden, erven, waterkanten", en: "Open areas, yards, waterways", fr: "Zones ouvertes, cours, bords d'eau" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Een zwart-wit vogeltje dat constant met zijn lange staart op en neer wipt — vandaar de naam. Loopt erg snel op de grond.",
        en: "A black and white bird that constantly wags its long tail up and down — hence the name. Walks very quickly along the ground.",
        fr: "Un petit oiseau noir et blanc qui hoche constamment sa longue queue de haut en bas. Marche très rapidement au sol."
    },
    size: { nl: "18 cm", en: "18 cm", fr: "18 cm" },
    diet: { nl: "Insecten", en: "Insects", fr: "Insectes" },
    image: "assets/images/motacilla_alba_birds.jpg"
},
{
    id: "m16",
    scientific: "Mustela nivalis",
    family: "Mustelidae",
    category: "fauna",
    difficulty: "hard",
    iucn: "LC",
    name: { nl: "Wezel", en: "Least Weasel", fr: "Belette d'Europe" },
    habitat: { nl: "Open velden, houtwallen", en: "Open fields, hedgerows", fr: "Champs ouverts, haies" },
    rarity: { nl: "Vrij algemeen", en: "Fairly Common", fr: "Assez commun" },
    description: {
        nl: "Het kleinste roofzoogdier ter wereld. Erg vlug en dapper — kan prooien veel groter dan zichzelf aanvallen. Bruin met witte buikzijde.",
        en: "The world's smallest carnivore. Very swift and bold — can tackle prey much larger than itself. Brown above with a white underside.",
        fr: "Le plus petit carnivore au monde. Très rapide et courageux — peut s'attaquer à des proies bien plus grandes que lui."
    },
    size: { nl: "15–20 cm", en: "15–20 cm", fr: "15–20 cm" },
    diet: { nl: "Muizen, woelmuizen", en: "Mice, voles", fr: "Souris, campagnols" },
    image: "assets/images/mustela_nivalis_fauna.jpg"
},
{
    id: "m9",
    scientific: "Oryctolagus cuniculus",
    family: "Leporidae",
    category: "fauna",
    difficulty: "easy",
    iucn: "NT",
    name: { nl: "Konijn", en: "European Rabbit", fr: "Lapin de garenne" },
    habitat: { nl: "Duinen, bosranden, parken", en: "Dunes, forest edges, parks", fr: "Dunes, lisières, parcs" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Leeft in kolonies in uitgebreide gangenstelsels (konijnenholen) onder de grond. Oren korter dan de haas en zonder zwarte punten.",
        en: "Lives in colonies in extensive underground tunnel systems (rabbit warrens). Ears shorter than the hare and without black tips.",
        fr: "Vit en colonies dans de vastes réseaux de galeries souterraines. Oreilles plus courtes que le lièvre et sans pointes noires."
    },
    size: { nl: "35–50 cm", en: "35–50 cm", fr: "35–50 cm" },
    diet: { nl: "Grassen, wortels, planten", en: "Grasses, roots, plants", fr: "Graminées, racines, plantes" },
    image: "assets/images/oryctolagus_cuniculus_fauna.jpg"
},
{
    id: "i14",
    scientific: "Palomena prasina",
    family: "Pentatomidae",
    category: "insects",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Groene stinkwants", en: "Common Green Shieldbug", fr: "Punaise verte" },
    habitat: { nl: "Struiken en loofbomen", en: "Shrubs and deciduous trees", fr: "Arbustes et feuillus" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "Schildvormig insect dat in de herfst bruin kleurt als camouflage in dood blad. Scheidt een stinkende vloeistof af bij gevaar.",
        en: "Shield-shaped insect that turns brown in autumn for camouflage in dead leaves. Secretes a stinky liquid when threatened.",
        fr: "Insecte en forme de bouclier qui devient brun en automne pour se camoufler dans les feuilles mortes."
    },
    size: { nl: "1.2–1.4 cm", en: "1.2–1.4 cm", fr: "1.2–1.4 cm" },
    diet: { nl: "Plantensappen", en: "Plant juices", fr: "Sucs végétaux" },
    image: "assets/images/palomena_prasina_insects.jpg"
},
{
    id: "fl3",
    scientific: "Papaver rhoeas",
    family: "Papaveraceae",
    category: "flora",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Grote klaproos", en: "Common Poppy", fr: "Coquelicot" },
    habitat: { nl: "Akkerranden, bermen", en: "Field edges, roadsides", fr: "Bords de champs, talus" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    plantGrade: "dicot",
    description: {
        nl: "Bekend om zijn felrode bloemen en als symbool van herdenking voor de Eerste Wereldoorlog. De zaden kunnen tientallen jaren in de bodem overleven.",
        en: "Known for its bright red flowers and as a symbol of remembrance for World War I. The seeds can survive for decades in the soil.",
        fr: "Connu pour ses fleurs rouge vif et comme symbole de commémoration de la Première Guerre mondiale. Les graines peuvent survivre des décennies dans le sol."
    },
    size: { nl: "30–60 cm", en: "30–60 cm", fr: "30–60 cm" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/papaver_rhoeas_flora.jpg"
},
{
    id: "b3",
    scientific: "Parus major",
    family: "Paridae",
    category: "birds",
    difficulty: "easy",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Parus+major",
    name: { nl: "Koolmees", en: "Great Tit", fr: "Mésange charbonnière" },
    habitat: { nl: "Bossen, tuinen, boomgaarden", en: "Forests, gardens, orchards", fr: "Forêts, jardins, vergers" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Een kleurrijke vogel met een zwarte kop, witte wanglapjes en een gele borst met een zwarte 'stropdas'. Ze eten vaak op voedertafels.",
        en: "A colourful bird with a black head, white cheek patches, and a yellow breast with a black 'tie'. They often feed at bird tables.",
        fr: "Un oiseau coloré avec une tête noire, des joues blanches et une poitrine jaune barrée d'une cravate noire."
    },
    size: { nl: "14 cm", en: "14 cm", fr: "14 cm" },
    diet: { nl: "Insecten, zaden, noten", en: "Insects, seeds, nuts", fr: "Insectes, graines, noix" },
    image: "assets/images/parus_major_birds.jpg"
},
{
    id: "ext_passer_domesticus",
    scientific: "Passer domesticus",
    family: "Passeridae",
    // FIXED: was "trees", is a bird
    category: "birds",
    difficulty: "easy",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Passer+domesticus",
    name: { nl: "Huismus", en: "House Sparrow", fr: "Moineau domestique" },
    habitat: { nl: "Steden, dorpen, nabij mensen", en: "Cities, villages, near humans", fr: "Villes, villages, près des humains" },
    rarity: { nl: "Zeer algemeen (maar afnemend)", en: "Very Common (but declining)", fr: "Très commun (mais en déclin)" },
    description: {
        nl: "Een van de meest verspreide vogels ter wereld door menselijke introductie. Leeft altijd in de buurt van mensen. De populatie neemt af in Europa door gebrek aan insecten.",
        en: "One of the world's most widespread birds through human introduction. Always lives near humans. Population declining in Europe due to lack of insects.",
        fr: "L'un des oiseaux les plus répandus au monde grâce aux introductions humaines. Vit toujours près des humains."
    },
    size: { nl: "14–16 cm", en: "14–16 cm", fr: "14–16 cm" },
    diet: { nl: "Zaden, insecten (voor jongen)", en: "Seeds, insects (for chicks)", fr: "Graines, insectes (pour les petits)" },
    image: "assets/images/passer_domesticus_fauna.jpg"
},
{
    id: "b4",
    scientific: "Pica pica",
    family: "Corvidae",
    category: "birds",
    difficulty: "easy",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Pica+pica",
    name: { nl: "Ekster", en: "Eurasian Magpie", fr: "Pie bavarde" },
    habitat: { nl: "Open landschap, parken, steden", en: "Open landscape, parks, cities", fr: "Paysages ouverts, parcs, villes" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Een opvallende zwart-witte vogel met een erg lange staart. In de zon hebben hun zwarte veren een blauwe of groene metaalglans. Een van de slimste vogels.",
        en: "A striking black-and-white bird with a very long tail. In the sun, their black feathers have a blue or green metallic sheen. One of the most intelligent birds.",
        fr: "Un oiseau noir et blanc frappant avec une très longue queue. Au soleil, les plumes noires ont un éclat métallique. L'un des oiseaux les plus intelligents."
    },
    size: { nl: "40–50 cm", en: "40–50 cm", fr: "40–50 cm" },
    diet: { nl: "Omnivoor (insecten, eieren, afval)", en: "Omnivorous (insects, eggs, scraps)", fr: "Omnivore (insectes, œufs, déchets)" },
    funfact: { nl: "De ekster is een van de weinige dieren die zichzelf kan herkennen in een spiegel!", en: "The magpie is one of the very few animals that can recognise itself in a mirror!", fr: "La pie est l'un des très rares animaux capables de se reconnaître dans un miroir !" },
    image: "assets/images/pica_pica_birds.jpg"
},
{
    id: "t19",
    scientific: "Picea abies",
    family: "Pinaceae",
    category: "trees",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Fijnspar", en: "Norway Spruce", fr: "Épicéa commun" },
    habitat: { nl: "Productiebossen, parken", en: "Production forests, parks", fr: "Forêts de production, parcs" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "De klassieke kerstboom met hangende kegels. Veel geplant in Belgische productiebossen, maar kwetsbaar voor droogte en borkenkever.",
        en: "The classic Christmas tree with hanging cones. Widely planted in Belgian production forests, but vulnerable to drought and bark beetles.",
        fr: "Le sapin de Noël classique avec des cônes pendants. Largement planté en forêts de production belges, mais vulnérable à la sécheresse."
    },
    size: { nl: "Tot 40 m", en: "Up to 40 m", fr: "Jusqu'à 40 m" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/picea_abies_trees.jpg"
},
{
    id: "b23",
    scientific: "Picus viridis",
    family: "Picidae",
    category: "birds",
    difficulty: "medium",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Picus+viridis",
    name: { nl: "Groene specht", en: "European Green Woodpecker", fr: "Pic vert" },
    habitat: { nl: "Parken, bosranden", en: "Parks, forest edges", fr: "Parcs, lisières de forêts" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "Een groene specht die veel op de grond leeft om mieren te eten. Heeft een lachende 'wieuw-wieuw' roep die klinkt als een demonisch lachen.",
        en: "A green woodpecker that spends much time on the ground eating ants. Has a laughing 'yaffle' call that sounds like demonic laughter.",
        fr: "Un pic vert qui passe beaucoup de temps au sol pour manger des fourmis. Possède un cri ressemblant à un rire."
    },
    size: { nl: "30–33 cm", en: "30–33 cm", fr: "30–33 cm" },
    diet: { nl: "Mieren", en: "Ants", fr: "Fourmis" },
    image: "assets/images/picus_viridis_birds.jpg"
},
{
    id: "i9",
    scientific: "Pieris brassicae",
    family: "Pieridae",
    category: "insects",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Groot koolwitje", en: "Large White", fr: "Grand papillon blanc" },
    habitat: { nl: "Landbouwgrond, tuinen", en: "Farmland, gardens", fr: "Terres agricoles, jardins" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Grote witte vlinder met zwarte punten aan de vleugels. De rupsen zijn beruchte koolplagen maar zijn ook een voedselbron voor vogels.",
        en: "Large white butterfly with black tips on the wings. The caterpillars are notorious cabbage pests but also a food source for birds.",
        fr: "Grand papillon blanc avec des pointes noires sur les ailes. Les chenilles sont de redoutables ravageurs des choux."
    },
    size: { nl: "5–6 cm spanwijdte", en: "5–6 cm wingspan", fr: "5–6 cm d'envergure" },
    diet: { nl: "Nectar; rupsen eten kool", en: "Nectar; caterpillars eat cabbage", fr: "Nectar; les chenilles mangent du chou" },
    image: "assets/images/pieris_brassicae_insects.jpg"
},
{
    id: "i10",
    scientific: "Polyommatus icarus",
    family: "Lycaenidae",
    category: "insects",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Icarusblauwtje", en: "Common Blue", fr: "Azuré de la bugrane" },
    habitat: { nl: "Bloemrijke graslanden", en: "Flowery grasslands", fr: "Prairies fleuries" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "Het mannetje is prachtig hemelblauw, het vrouwtje is bruin met oranje vlekjes. Klein vlindertje dat graag op klavervelden vliegt.",
        en: "The male is beautiful sky blue, the female is brown with orange spots. A small butterfly that favours clover fields.",
        fr: "Le mâle est d'un magnifique bleu ciel, la femelle est brune avec des taches orange."
    },
    size: { nl: "2.5–3 cm spanwijdte", en: "2.5–3 cm wingspan", fr: "2.5–3 cm d'envergure" },
    diet: { nl: "Nectar", en: "Nectar", fr: "Nectar" },
    image: "assets/images/polyommatus_icarus_insects.jpg"
},
{
    id: "i27",
    scientific: "Pyrrhocoris apterus",
    family: "Pyrrhocoridae",
    category: "insects",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Vuurwants", en: "Firebug", fr: "Gendarme" },
    habitat: { nl: "Onder lindebomen, zonnige plekken", en: "Under lime trees, sunny spots", fr: "Sous les tilleuls, endroits ensoleillés" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Rode wants met zwarte stippen. Vaak in grote groepen te zien rondom lindebomen. Vliegt bijna nooit ondanks zijn vleugels.",
        en: "Red bug with black dots. Often seen in large groups around lime trees. Rarely flies despite having wings.",
        fr: "Punaise rouge avec des points noirs. Souvent vu en grands groupes autour des tilleuls. Vole rarement malgré ses ailes."
    },
    size: { nl: "9–12 mm", en: "9–12 mm", fr: "9–12 mm" },
    diet: { nl: "Plantensappen, zaden", en: "Plant juices, seeds", fr: "Sucs végétaux, graines" },
    image: "assets/images/pyrrhocoris_apterus_insects.jpg"
},
{
    id: "t1",
    scientific: "Quercus robur",
    family: "Fagaceae",
    category: "trees",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Zomereik", en: "Pedunculate Oak", fr: "Chêne pédonculé" },
    habitat: { nl: "Bossen, parken, heide", en: "Forests, parks, heathland", fr: "Forêts, parcs, landes" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Een machtige boom die honderden jaren oud kan worden. Herkenbaar aan zijn gelobde bladeren en de eikels die in de herfst aan de boom hangen. Een eik herbergt meer dan 280 insectensoorten!",
        en: "A mighty tree that can live for hundreds of years. Recognizable by its lobed leaves and acorns in autumn. A single oak can support over 280 insect species!",
        fr: "Un arbre puissant qui peut vivre des centaines d'années. Reconnaissable à ses feuilles lobées et ses glands. Un seul chêne peut abriter plus de 280 espèces d'insectes !"
    },
    size: { nl: "Tot 40 m hoog", en: "Up to 40 m tall", fr: "Jusqu'à 40 m de haut" },
    diet: { nl: "Zonlicht, water, mineralen", en: "Sunlight, water, minerals", fr: "Lumière, eau, minéraux" },
    funfact: { nl: "Een zomereik kan meer dan 1.000 jaar oud worden en biedt een thuis voor honderden diersoorten!", en: "A pedunculate oak can live more than 1,000 years and provides a home for hundreds of animal species!", fr: "Un chêne pédonculé peut vivre plus de 1 000 ans et abrite des centaines d'espèces animales !" },
    image: "assets/images/quercus_robur_trees.jpg",
    images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Quercus_robur_-_summer.jpg/640px-Quercus_robur_-_summer.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Quercus_robur_acorn_and_leaves.jpg/640px-Quercus_robur_acorn_and_leaves.jpg"
    ]
},
{
    id: "fl6",
    scientific: "Ranunculus acris",
    family: "Ranunculaceae",
    category: "flora",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Scherpe boterbloem", en: "Meadow Buttercup", fr: "Renoncule âcre" },
    habitat: { nl: "Vochtige graslanden", en: "Moist grasslands", fr: "Prairies humides" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    plantGrade: "dicot",
    description: {
        nl: "Een glanzende gele bloem die vaak in grote groepen in de wei staat. De bloemblaadjes reflecteren licht als een spiegel — kinderen houden ze al eeuwen voor kin om de 'botercup test' te doen.",
        en: "A shiny yellow flower often standing in large groups in the meadow. The petals reflect light like a mirror — children have held them under chins for centuries for the 'butter test'.",
        fr: "Une fleur jaune brillante se trouvant souvent en grands groupes dans la prairie. Les pétales réfléchissent la lumière comme un miroir."
    },
    size: { nl: "30–100 cm", en: "30–100 cm", fr: "30–100 cm" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/ranunculus_acris_flora.jpg"
},
{
    id: "fl26",
    scientific: "Reseda lutea",
    family: "Resedaceae",
    category: "flora",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Wilde reseda", en: "Wild Mignonette", fr: "Réséda sauvage" },
    habitat: { nl: "Droge, kalkrijke grond, bermen", en: "Dry, calcareous soil, roadsides", fr: "Sols secs et calcaires, bords de routes" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    plantGrade: "dicot",
    description: {
        nl: "Heeft geelgroene bloemen in lange trossen. Vaak te vinden op ruderale, droge plaatsen.",
        en: "Has yellowish-green flowers in long clusters. Often found in ruderal, dry places.",
        fr: "Possède des fleurs jaune-vert en longues grappes. Souvent trouvé dans les lieux rudéraux et secs."
    },
    size: { nl: "30–80 cm", en: "30–80 cm", fr: "30–80 cm" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/reseda_lutea_flora.jpg"
},
{
    id: "fu20",
    scientific: "Sarcoscypha coccinea",
    family: "Sarcoscyphaceae",
    category: "fungi",
    difficulty: "hard",
    iucn: "LC",
    name: { nl: "Krulhaarkelkzwam", en: "Scarlet Elf Cup", fr: "Pézize écarlate" },
    habitat: { nl: "Op dood hout in vochtige bossen", en: "On dead wood in moist forests", fr: "Sur le bois mort dans les forêts humides" },
    rarity: { nl: "Vrij algemeen", en: "Fairly Common", fr: "Assez commun" },
    description: {
        nl: "Een bekervormige paddenstoel met een schitterende scharlakenrode binnenkant. Verschijnt in de winter/vroege lente als een van de eerste paddenstoelen van het jaar.",
        en: "A cup-shaped mushroom with a brilliant scarlet interior. Appears in winter/early spring as one of the first mushrooms of the year.",
        fr: "Un champignon en forme de coupe avec un intérieur d'un rouge écarlate brillant. Apparaît en hiver/début du printemps."
    },
    size: { nl: "1–5 cm breed", en: "1–5 cm wide", fr: "1–5 cm de large" },
    diet: { nl: "Saprofyt", en: "Saprophyte", fr: "Saprophyte" },
    image: "assets/images/sarcoscypha_coccinea_fungi.jpg"
},
{
    id: "f11",
    scientific: "Sciurus vulgaris",
    family: "Sciuridae",
    // FIXED: was "fungi", is a mammal!
    category: "fauna",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Rode eekhoorn", en: "Eurasian Red Squirrel", fr: "Écureuil roux" },
    habitat: { nl: "Bossen en tuinen met bomen", en: "Forests and gardens with trees", fr: "Forêts et jardins avec des arbres" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "De rode eekhoorn is een acrobatisch knaagdier dat perfect is aangepast aan het leven in de bomen. Ze leggen in de herfst wintervoorraden aan van noten en zaden. Omdat ze niet al hun verstopplekken terugvinden, helpen ze onbedoeld bij de verspreiding van boomsoorten.",
        en: "The red squirrel is an acrobatic rodent perfectly adapted to life in the trees. In autumn they bury winter stores of nuts and seeds. Because they don't find all their hiding places, they unintentionally help spread tree species.",
        fr: "L'écureuil roux est un rongeur acrobatique. En automne, il constitue des réserves hivernales de noix et graines. Comme il ne retrouve pas toutes ses cachettes, il aide involontairement à la dispersion des arbres."
    },
    size: { nl: "18–25 cm (+ 15–20 cm staart)", en: "18–25 cm (+ 15–20 cm tail)", fr: "18–25 cm (+ 15–20 cm de queue)" },
    diet: { nl: "Noten, zaden, bessen, schors", en: "Nuts, seeds, berries, bark", fr: "Noix, graines, baies, écorce" },
    funfact: { nl: "Een eekhoorn begraaft duizenden noten per jaar en vindt er maar 70-80% van terug — de rest groeit uit tot nieuwe bomen!", en: "A squirrel buries thousands of nuts per year and only finds 70–80% of them — the rest grow into new trees!", fr: "Un écureuil enterre des milliers de noix par an et n'en retrouve que 70–80% — les autres deviennent de nouveaux arbres !" },
    image: "assets/images/sciurus_vulgaris_fauna.jpg",
    images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Eekhoorntje.jpg/640px-Eekhoorntje.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Sciurus_vulgaris_red_squirrel_in_autumn_tree.jpg/640px-Sciurus_vulgaris_red_squirrel_in_autumn_tree.jpg"
    ]
},
{
    id: "fl15",
    scientific: "Silene dioica",
    family: "Caryophyllaceae",
    category: "flora",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Dagkoekoeksbloem", en: "Red Campion", fr: "Compagnon rouge" },
    habitat: { nl: "Bosranden, wegbermen", en: "Forest edges, roadsides", fr: "Lisières de forêts, bords de routes" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    plantGrade: "dicot",
    description: {
        nl: "Heeft felroze bloemen die overdag openstaan — in tegenstelling tot de nacht-koekoeksbloem. Tweeslachtig: mannelijke en vrouwelijke planten afzonderlijk.",
        en: "Has bright pink flowers that are open during the day — unlike the night-flowering campion. Dioecious: male and female plants are separate.",
        fr: "A des fleurs rose vif ouvertes le jour. Dioïque: plantes mâles et femelles séparées."
    },
    size: { nl: "30–90 cm", en: "30–90 cm", fr: "30–90 cm" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/silene_dioica_flora.jpg"
},
{
    id: "a2",
    scientific: "Solanum tuberosum",
    family: "Solanaceae",
    category: "agriculture",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Aardappel", en: "Potato", fr: "Pomme de terre" },
    habitat: { nl: "Akkerland", en: "Arable land", fr: "Terres arables" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "België staat wereldwijd bekend om zijn aardappelcultuur en frietjes. De aardappelplant vormt ondergrondse knollen. Het loof is giftig. Er zijn honderden rassen, elk met eigen smaak en textuur.",
        en: "Belgium is world-renowned for its potato culture and fries. The potato plant forms underground tubers. The foliage is poisonous. There are hundreds of varieties, each with their own flavour.",
        fr: "La Belgique est mondialement connue pour sa culture de la pomme de terre et les frites. Le feuillage est toxique."
    },
    size: { nl: "30–90 cm", en: "30–90 cm", fr: "30–90 cm" },
    diet: { nl: "Zonlicht, water, mineralen", en: "Sunlight, water, minerals", fr: "Lumière, eau, minéraux" },
    funfact: { nl: "België produceert meer dan 5 miljoen ton aardappelen per jaar en exporteert de meeste frietjes ter wereld!", en: "Belgium produces over 5 million tonnes of potatoes per year and exports the most fries in the world!", fr: "La Belgique produit plus de 5 millions de tonnes de pommes de terre par an et exporte le plus de frites au monde !" },
    image: "assets/images/solanum_tuberosum_agriculture.jpg"
},
{
    id: "t20",
    scientific: "Sorbus aucuparia",
    family: "Rosaceae",
    category: "trees",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Gewone lijsterbes", en: "Rowan", fr: "Sorbier des oiseleurs" },
    habitat: { nl: "Bossen, bosranden, tuinen", en: "Forests, forest edges, gardens", fr: "Forêts, lisières, jardins" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    // FIXED: original had roe deer description for a rowan tree!
    description: {
        nl: "Een sierlijke kleine boom met samengestelde bladeren. Bekend om zijn knalrode bessentrossen in de herfst die erg geliefd zijn bij lijsters en andere vogels.",
        en: "An elegant small tree with compound leaves. Famous for its bright red berry clusters in autumn, which are popular with thrushes and other birds.",
        fr: "Un élégant petit arbre aux feuilles composées. Célèbre pour ses grappes de baies rouge vif en automne, appréciées des grives et autres oiseaux."
    },
    size: { nl: "Tot 15 m", en: "Up to 15 m", fr: "Jusqu'à 15 m" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/sorbus_aucuparia_trees.jpg"
},
{
    id: "b18",
    scientific: "Sturnus vulgaris",
    family: "Sturnidae",
    category: "birds",
    difficulty: "easy",
    iucn: "NT",
    xenoCanto: "https://xeno-canto.org/explore?query=Sturnus+vulgaris",
    name: { nl: "Spreeuw", en: "Common Starling", fr: "Étourneau sansonnet" },
    habitat: { nl: "Open gebieden, steden, parken", en: "Open areas, cities, parks", fr: "Zones ouvertes, villes, parcs" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "In de herfst vormen ze indrukwekkende zwermen (murailles). Het verenkleed heeft een prachtige paars-groene glans met witte stipjes in de winter.",
        en: "In autumn, they form impressive swarms (murmurations). The plumage has a beautiful purple-green sheen with white spots in winter.",
        fr: "En automne, ils forment des murmurations impressionnantes. Le plumage a un reflet violet-vert avec des taches blanches en hiver."
    },
    size: { nl: "20–22 cm", en: "20–22 cm", fr: "20–22 cm" },
    diet: { nl: "Insecten, vruchten", en: "Insects, fruits", fr: "Insectes, fruits" },
    funfact: { nl: "Een murmuratie van spreeuwen kan uit meer dan een miljoen vogels bestaan en is een van de meest spectaculaire verschijnselen in de natuur!", en: "A starling murmuration can contain over a million birds and is one of nature's most spectacular phenomena!", fr: "Une murmuration d'étourneaux peut contenir plus d'un million d'oiseaux !" },
    image: "assets/images/sturnus_vulgaris_birds.jpg"
},
{
    id: "f6",
    scientific: "Sus scrofa",
    family: "Suidae",
    category: "fauna",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Wild Zwijn", en: "Wild Boar", fr: "Sanglier" },
    habitat: { nl: "Bossen en struwelen", en: "Forests and shrublands", fr: "Forêts et broussailles" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "Wild zwijnen zijn de voorouders van onze tamme varkens. Ze zijn krachtige dieren met een dikke vacht en opvallende hoektanden. Ze staan bekend om het 'omwroeten' van de bosbodem op zoek naar eikels, wortels en insectenlarven.",
        en: "Wild boars are the ancestors of our domestic pigs. They are powerful animals with a bristly coat and prominent tusks. Known for rooting up the forest floor in search of acorns, roots, and insect larvae.",
        fr: "Les sangliers sont les ancêtres de nos porcs domestiques. Connus pour fouiller le sol de la forêt à la recherche de glands, racines et larves d'insectes."
    },
    size: { nl: "100–180 cm", en: "100–180 cm", fr: "100–180 cm" },
    diet: { nl: "Wortels, eikels, insecten, aas", en: "Roots, acorns, insects, carrion", fr: "Racines, glands, insectes, charogne" },
    image: "assets/images/sus_scrofa_fauna.jpg"
},
{
    id: "fl4",
    scientific: "Taraxacum officinale",
    family: "Asteraceae",
    category: "flora",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Paardenbloem", en: "Dandelion", fr: "Pissenlit" },
    habitat: { nl: "Graslanden, tuinen", en: "Grasslands, gardens", fr: "Prairies, jardins" },
    rarity: { nl: "Overal algemeen", en: "Ubiquitous", fr: "Omniprésent" },
    plantGrade: "dicot",
    description: {
        nl: "De felgele bloem verandert in een pluizenbol waarbij zaden door de wind worden verspreid. Elke plant kan duizenden zaden produceren. Volledig eetbaar.",
        en: "The bright yellow flower turns into a puffball where seeds are dispersed by wind. Each plant can produce thousands of seeds. Fully edible.",
        fr: "La fleur jaune vif se transforme en boule de duvet dont les graines sont dispersées par le vent. Entièrement comestible."
    },
    size: { nl: "5–30 cm", en: "5–30 cm", fr: "5–30 cm" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/taraxacum_officinale_flora.jpg"
},
{
    id: "fu6",
    scientific: "Trametes versicolor",
    family: "Polyporaceae",
    category: "fungi",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Gewoon elfenbankje", en: "Turkey Tail", fr: "Tramète versicolore" },
    habitat: { nl: "Dood hout van loofbomen", en: "Dead wood of deciduous trees", fr: "Bois mort de feuillus" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Misschien wel de meest voorkomende paddenstoel in de Belgische bossen. Groeit het hele jaar door op dode stammen en takken. Heeft waaiervormige zones van verschillende kleuren. Leerachtig en niet eetbaar maar cruciaal voor het afbreken van dood hout.",
        en: "Probably the most common mushroom in Belgian forests. Grows year-round on dead trunks and branches. Has fan-shaped zones of different colours. Leathery and inedible but crucial for breaking down dead wood.",
        fr: "Probablement le champignon le plus commun des forêts belges. Pousse toute l'année sur le bois mort."
    },
    size: { nl: "3–10 cm breed", en: "3–10 cm wide", fr: "3–10 cm de large" },
    diet: { nl: "Saprofyt", en: "Saprophyte", fr: "Saprophyte" },
    image: "assets/images/trametes_versicolor_fungi.jpg"
},
{
    id: "fu28",
    scientific: "Tremella mesenterica",
    family: "Tremellaceae",
    category: "fungi",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Gele trilzwam", en: "Witch's Butter", fr: "Trémelle mésentérique" },
    habitat: { nl: "Op dood loofhout in bossen", en: "On dead deciduous wood in forests", fr: "Sur le bois mort de feuillus en forêt" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    // FIXED: original had butterfly description for this fungus!
    description: {
        nl: "Een gelatineuze, helder gele trilzwam die op dood loofhout groeit. Wordt harder en oranjegeel als het droogt, en zwelt weer op bij regen.",
        en: "A gelatinous, bright yellow jelly fungus growing on dead deciduous wood. It hardens and turns orange-yellow when dry, and swells back up in rain.",
        fr: "Un champignon gélatineux d'un jaune vif poussant sur le bois mort. Il durcit et vire à l'orange-jaune en séchant, se regonflant à la pluie."
    },
    size: { nl: "2–10 cm breed", en: "2–10 cm wide", fr: "2–10 cm de large" },
    diet: { nl: "Parasiet op andere schimmels", en: "Parasite on other fungi", fr: "Parasite d'autres champignons" },
    image: "assets/images/tremella_mesenterica_fungi.jpg"
},
{
    id: "fl10_trifolium",
    scientific: "Trifolium repens",
    family: "Fabaceae",
    category: "flora",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Witte klaver", en: "White Clover", fr: "Trèfle blanc" },
    habitat: { nl: "Graslanden, gazons", en: "Grasslands, lawns", fr: "Prairies, pelouses" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    plantGrade: "dicot",
    description: {
        nl: "Bekend om zijn drietallige bladeren (soms vier — dan brengt het geluk!). Heel belangrijk voor honingbijen en hommels als nectarbron.",
        en: "Known for its trifoliate leaves (sometimes four — which brings good luck!). Very important for honeybees and bumblebees as a nectar source.",
        fr: "Connu pour ses feuilles à trois folioles (parfois quatre — porte-bonheur !). Très important pour les abeilles comme source de nectar."
    },
    size: { nl: "5–20 cm", en: "5–20 cm", fr: "5–20 cm" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/trifolium_repens_flora.jpg"
},
{
    id: "b17",
    scientific: "Turdus merula",
    family: "Turdidae",
    category: "birds",
    difficulty: "easy",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Turdus+merula",
    name: { nl: "Merel", en: "Common Blackbird", fr: "Merle noir" },
    habitat: { nl: "Tuinen, parken, open bossen", en: "Gardens, parks, open forests", fr: "Jardins, parcs, forêts ouvertes" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Het mannetje is diepzwart met een felle oranje snavel. Bekend om hun prachtige zang vanaf daken en bomen, vooral bij zonsopkomst en zonsondergang.",
        en: "The male is deep black with a bright orange beak. Famous for their beautiful singing from rooftops and trees, especially at sunrise and sunset.",
        fr: "Le mâle est d'un noir profond avec un bec orange vif. Célèbre pour ses beaux chants depuis les toits, surtout à l'aube et au crépuscule."
    },
    size: { nl: "24–25 cm", en: "24–25 cm", fr: "24–25 cm" },
    diet: { nl: "Wormen, insecten, bessen", en: "Worms, insects, berries", fr: "Vers, insectes, baies" },
    image: "assets/images/turdus_merula_birds.jpg"
},
{
    id: "t12",
    scientific: "Ulmus procera",
    family: "Ulmaceae",
    category: "trees",
    difficulty: "hard",
    iucn: "EN",
    name: { nl: "Iep", en: "English Elm", fr: "Orme champêtre" },
    habitat: { nl: "Langs rivieren, in parken, houtwallen", en: "Along rivers, in parks, hedgerows", fr: "Le long des rivières, dans les parcs" },
    rarity: { nl: "Zeldzamer door iepziekte", en: "Rarer due to Dutch elm disease", fr: "Devenu rare à cause de la graphiose" },
    description: {
        nl: "De bladeren zijn asymmetrisch aan de bladvoet. Ernstig bedreigd door de iepziekte (veroorzaakt door een schimmel, overgebracht door de iepspintkever).",
        en: "The leaves are asymmetrical at the leaf base. Seriously threatened by Dutch elm disease (caused by a fungus transmitted by the elm bark beetle).",
        fr: "Les feuilles sont asymétriques à leur base. Sérieusement menacé par la graphiose transmise par un scolyte."
    },
    size: { nl: "Tot 30 m", en: "Up to 30 m", fr: "Jusqu'à 30 m" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/ulmus_procera_trees.jpg"
},
{
    id: "fl17",
    scientific: "Urtica dioica",
    family: "Urticaceae",
    category: "flora",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Grote brandnetel", en: "Common Nettle", fr: "Grande ortie" },
    habitat: { nl: "Stikstofrijke grond, ruigtes", en: "Nitrogen-rich soil, waste ground", fr: "Sols riches en azote, friches" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    plantGrade: "dicot",
    description: {
        nl: "Bekend om zijn brandharen. Maar de brandnetel is een van de belangrijkste planten voor onze biodiversiteit — de rupsen van dagpauwoog en kleine vos leven uitsluitend hierop. Jong loof is eetbaar als spinazie of soep.",
        en: "Known for its stinging hairs. But the nettle is one of the most important plants for biodiversity — caterpillars of the peacock butterfly and small tortoiseshell feed exclusively on it. Young leaves are edible as spinach or soup.",
        fr: "Connu pour ses poils urticants. Mais l'ortie est l'une des plantes les plus importantes pour la biodiversité. Les jeunes feuilles sont comestibles en soupe."
    },
    size: { nl: "30–150 cm", en: "30–150 cm", fr: "30–150 cm" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/urtica_dioica_flora.jpg"
},
{
    id: "i6_vanessa",
    scientific: "Vanessa atalanta",
    family: "Nymphalidae",
    category: "insects",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Atalanta", en: "Red Admiral", fr: "Vulcain" },
    habitat: { nl: "Tuinen, bosranden, parken", en: "Gardens, forest edges, parks", fr: "Jardins, lisières de forêts, parcs" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    // FIXED: original had bluebell flower description for this butterfly!
    description: {
        nl: "Een opvallende zwarte vlinder met rode banden en witte vlekken op de vleugelpunten. Migreert deels vanuit Zuid-Europa maar overwintert ook in België. De rups leeft op brandnetels.",
        en: "A striking black butterfly with red bands and white spots on the wing tips. Partly migrates from southern Europe but also overwinters in Belgium. The caterpillar lives on nettles.",
        fr: "Un papillon noir frappant avec des bandes rouges et des taches blanches sur les ailes. Migre partiellement du sud de l'Europe mais hiverne aussi en Belgique."
    },
    size: { nl: "5–6 cm spanwijdte", en: "5–6 cm wingspan", fr: "5–6 cm d'envergure" },
    diet: { nl: "Nectar, rottend fruit", en: "Nectar, rotting fruit", fr: "Nectar, fruits pourrissants" },
    funfact: { nl: "De atalanta was de eerste vlinder die op de Mount Everest werd waargenomen!", en: "The Red Admiral was the first butterfly ever recorded on Mount Everest!", fr: "Le Vulcain est le premier papillon jamais observé sur l'Everest !" },
    image: "assets/images/vanessa_atalanta_insects.jpg",
    images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Vanessa_atalanta_Sottomarina.jpg/640px-Vanessa_atalanta_Sottomarina.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Vanessa_atalanta_underside.JPG/640px-Vanessa_atalanta_underside.JPG"
    ]
},
{
    id: "i4_vespa",
    scientific: "Vespa crabro",
    family: "Vespidae",
    category: "insects",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Hoornaar", en: "European Hornet", fr: "Frelon européen" },
    habitat: { nl: "Bossen, oude bomen, schuren", en: "Forests, old trees, barns", fr: "Forêts, vieux arbres, granges" },
    rarity: { nl: "Vrij algemeen", en: "Fairly Common", fr: "Assez commun" },
    // FIXED: original had daisy description for a hornet!
    description: {
        nl: "De grootste wesp van Europa. Minder agressief dan de gewone wesp en steekt alleen als hij wordt aangevallen. Nuttig insect dat andere insecten vangt voor zijn larven.",
        en: "The largest wasp in Europe. Less aggressive than the common wasp and stings only when attacked. A beneficial insect that catches other insects for its larvae.",
        fr: "La plus grande guêpe d'Europe. Moins agressive que la guêpe commune. Un insecte bénéfique qui capture d'autres insectes pour ses larves."
    },
    size: { nl: "18–35 mm", en: "18–35 mm", fr: "18–35 mm" },
    diet: { nl: "Insecten, nectar, sappen", en: "Insects, nectar, sap", fr: "Insectes, nectar, sève" },
    funfact: { nl: "De hoornaar is beschermd in België en Duitsland — het is verboden zijn nest te vernietigen!", en: "The European hornet is protected in Belgium and Germany — it is illegal to destroy its nest!", fr: "Le frelon européen est protégé en Belgique et en Allemagne — il est illégal de détruire son nid !" },
    image: "assets/images/vespa_crabro_insects.jpg"
},
{
    id: "i19",
    scientific: "Vespula vulgaris",
    family: "Vespidae",
    category: "insects",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Gewone wesp", en: "Common Wasp", fr: "Guêpe commune" },
    habitat: { nl: "Diverse habitats, nabij mensen", en: "Diverse habitats, near humans", fr: "Habitats divers, près de l'homme" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Geel-zwart gestreept insect met een pijnlijke steek. Nuttig als roofinsect dat rupsen en vliegen vangt. In de herfst worden ze vervelender vanwege zoekgedrag naar suikers.",
        en: "Yellow-black striped insect with a painful sting. Beneficial as a predatory insect catching caterpillars and flies. In autumn they become more troublesome while seeking sugars.",
        fr: "Insecte rayé jaune et noir. Utile comme insecte prédateur. En automne, devient plus gênant en cherchant des sucres."
    },
    size: { nl: "12–17 mm", en: "12–17 mm", fr: "12–17 mm" },
    diet: { nl: "Suikers, insecten", en: "Sugars, insects", fr: "Sucres, insectes" },
    image: "assets/images/vespula_vulgaris_insects.jpg"
},
{
    id: "fl8",
    scientific: "Viola odorata",
    family: "Violaceae",
    category: "flora",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Maarts viooltje", en: "Sweet Violet", fr: "Violette odorante" },
    habitat: { nl: "Lichte loofbossen, tuinen, hagen", en: "Light deciduous forests, gardens, hedges", fr: "Forêts de feuillus claires, jardins, haies" },
    rarity: { nl: "Vrij algemeen", en: "Fairly Common", fr: "Assez commun" },
    plantGrade: "dicot",
    description: {
        nl: "Een van de vroegst bloeiende planten met een heerlijke geur. De violette kleur van de bloemblaadjes gaf de naam aan de kleur 'violet'.",
        en: "One of the earliest flowering plants with a wonderful scent. The colour of the petals gave the name to the colour 'violet'.",
        fr: "L'une des premières plantes à fleurir avec un parfum merveilleux. La couleur des pétales a donné son nom à la couleur 'violet'."
    },
    size: { nl: "5–15 cm", en: "5–15 cm", fr: "5–15 cm" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/viola_odorata_flora.jpg"
},
{
    id: "f1_vulpes",
    scientific: "Vulpes vulpes",
    family: "Canidae",
    category: "fauna",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Gewone vos", en: "Red Fox", fr: "Renard roux" },
    habitat: { nl: "Bossen, velden, stedelijke gebieden", en: "Forests, fields, urban areas", fr: "Forêts, champs, zones urbaines" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "De vos is een slim en aanpasbaar roofdier. Herkenbaar aan zijn rode vacht en witte staartpunt. Komt zowel voor in het bos als in de stad.",
        en: "The fox is a clever and adaptable predator. Recognizable by its red fur and white tail tip. Occurs both in the forest and in the city.",
        fr: "Le renard est un prédateur rusé et adaptable. Reconnaissable à sa robe rousse et au bout blanc de sa queue."
    },
    size: { nl: "60–90 cm", en: "60–90 cm", fr: "60–90 cm" },
    diet: { nl: "Kleine zoogdieren, vogels, vruchten", en: "Small mammals, birds, fruits", fr: "Petits mammifères, oiseaux, fruits" },
    image: "assets/images/vulpes_vulpes_fauna.jpg",
    images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Vulpes_vulpes_-_British_Wildlife_Centre-3.jpg/640px-Vulpes_vulpes_-_British_Wildlife_Centre-3.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat_November_2010-1a.jpg/640px-Cat_November_2010-1a.jpg"
    ]
},
{
    id: "fu19",
    scientific: "Xylaria polymorpha",
    family: "Xylariaceae",
    category: "fungi",
    difficulty: "hard",
    iucn: "LC",
    name: { nl: "Houtknotszwam", en: "Dead Man's Fingers", fr: "Xylaire polymorphe" },
    habitat: { nl: "Op stronken van loofbomen", en: "On stumps of deciduous trees", fr: "Sur les souches de feuillus" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "Lijkt op donkere, gezwollen vingers die uit het hout komen. De naam zegt het al: de 'dode mansvingertjes' zijn moeilijk te vergeten eenmaal gezien.",
        en: "Resembles dark, swollen fingers emerging from the wood. The name says it all: 'dead man's fingers' are hard to forget once seen.",
        fr: "Ressemble à des doigts sombres et enflés émergeant du bois. Les 'doigts de mort' sont difficiles à oublier une fois vus."
    },
    size: { nl: "3–10 cm hoog", en: "3–10 cm high", fr: "3–10 cm de haut" },
    diet: { nl: "Saprofyt", en: "Saprophyte", fr: "Saprophyte" },
    image: "assets/images/xylaria_polymorpha_fungi.jpg"
},
{
    id: "i29",
    scientific: "Xylocopa violacea",
    family: "Apidae",
    category: "insects",
    difficulty: "hard",
    iucn: "LC",
    name: { nl: "Blauwzwarte houtbij", en: "Violet Carpenter Bee", fr: "Xylocope violet" },
    habitat: { nl: "Zonnige bosranden, tuinen", en: "Sunny forest edges, gardens", fr: "Lisières de forêts ensoleillées, jardins" },
    rarity: { nl: "Vrij algemeen", en: "Fairly Common", fr: "Assez commun" },
    description: {
        nl: "Een zeer grote, glimmend zwarte bij met blauwe gloed op de vleugels. Bohrt gaten in dood hout om haar nesten te maken. Indrukwekkend maar onschadelijk.",
        en: "A very large, shiny black bee with a blue sheen on the wings. Bores holes in dead wood to make its nests. Impressive but harmless.",
        fr: "Une très grosse abeille noire brillante avec un reflet bleu sur les ailes. Fore des trous dans le bois mort pour faire ses nids."
    },
    size: { nl: "2–3 cm", en: "2–3 cm", fr: "2–3 cm" },
    diet: { nl: "Nectar, stuifmeel", en: "Nectar, pollen", fr: "Nectar, pollen" },
    image: "assets/images/xylocopa_violacea_insects.jpg"
},
// ============================================================
// Additional key species from the original dataset retained
// ============================================================
{
    id: "f7",
    scientific: "Castor fiber",
    family: "Castoridae",
    category: "fauna",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Europese bever", en: "Eurasian Beaver", fr: "Castor d'Europe" },
    habitat: { nl: "Rivieren, beken en meren", en: "Rivers, streams and lakes", fr: "Rivières, ruisseaux et lacs" },
    rarity: { nl: "Vrij algemeen", en: "Fairly Common", fr: "Assez commun" },
    description: {
        nl: "De bever is het grootste knaagdier van Europa. Nadat hij bijna was uitgestorven, is hij nu weer terug in België. Bevers zijn 'ecosysteem-ingenieurs': door dammen te bouwen creëren ze nieuwe leefgebieden voor vele andere soorten.",
        en: "The beaver is Europe's largest rodent. After nearly becoming extinct, it has returned to Belgium. Beavers are 'ecosystem engineers': by building dams they create new habitats for many other species.",
        fr: "Le castor est le plus grand rongeur d'Europe. Après avoir failli s'éteindre, il est revenu en Belgique. Les castors sont des 'ingénieurs de l'écosystème'."
    },
    // FIXED: was placeholder "Variërend"/"Divers"
    size: { nl: "80–100 cm (+ 25–35 cm staart)", en: "80–100 cm (+ 25–35 cm tail)", fr: "80–100 cm (+ 25–35 cm de queue)" },
    diet: { nl: "Boomschors, waterplanten, riet", en: "Tree bark, aquatic plants, reeds", fr: "Écorce d'arbres, plantes aquatiques, roseaux" },
    funfact: { nl: "Een beverdam kan tot 100 meter lang worden en houdt volledig een beek op!", en: "A beaver dam can be up to 100 metres long and completely holds back a stream!", fr: "Un barrage de castor peut atteindre 100 mètres de long et retenir entièrement un ruisseau !" },
    image: "assets/images/castor_fiber_fauna.jpg"
},
{
    id: "f8",
    scientific: "Erinaceus europaeus",
    family: "Erinaceidae",
    category: "fauna",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Egel", en: "European Hedgehog", fr: "Hérisson d'Europe" },
    habitat: { nl: "Tuinen, parken, bosranden", en: "Gardens, parks, forest edges", fr: "Jardins, parcs, lisières de forêts" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "De egel is een onmisbare gast in onze tuinen. Dit nachtactieve zoogdier is bedekt met ongeveer 6.000 stekels. Bij gevaar rolt hij zich op tot een stekelige bal. Eet grote hoeveelheden slakken en insecten.",
        en: "The hedgehog is an essential guest in our gardens. This nocturnal mammal is covered with about 6,000 spines. When threatened it rolls into a prickly ball. Eats large quantities of slugs and insects.",
        fr: "Le hérisson est un invité indispensable dans nos jardins. Ce mammifère nocturne est couvert d'environ 6 000 piquants."
    },
    size: { nl: "20–30 cm", en: "20–30 cm", fr: "20–30 cm" },
    diet: { nl: "Slakken, kevers, wormen, rupsen", en: "Slugs, beetles, worms, caterpillars", fr: "Limaces, coléoptères, vers, chenilles" },
    funfact: { nl: "Een egel kan tot 40 km per nacht lopen op zoek naar voedsel!", en: "A hedgehog can travel up to 40 km in a single night searching for food!", fr: "Un hérisson peut parcourir jusqu'à 40 km en une seule nuit à la recherche de nourriture !" },
    image: "assets/images/erinaceus_europaeus_fauna.jpg",
    images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/24701-nature-natural-beauty.jpg/640px-24701-nature-natural-beauty.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Erinaceus_europaeus_LC0119.jpg/640px-Erinaceus_europaeus_LC0119.jpg"
    ]
},
{
    id: "i13",
    scientific: "Episyrphus balteatus",
    family: "Syrphidae",
    category: "insects",
    difficulty: "hard",
    iucn: "LC",
    name: { nl: "Snorzweefvlieg", en: "Marmalade Hoverfly", fr: "Syrphe ceinturé" },
    habitat: { nl: "Overal waar bloemen zijn", en: "Everywhere there are flowers", fr: "Partout où il y a des fleurs" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Lijkt op een wesp maar is een vlieg die perfect stil in de lucht kan zweven. Een van onze beste vliegende bestuivers. Migr. t in grote aantallen door België.",
        en: "Looks like a wasp but is a fly that can hover perfectly still in the air. One of our best flying pollinators. Migrates in large numbers through Belgium.",
        fr: "Ressemble à une guêpe mais est une mouche qui peut rester parfaitement immobile dans l'air."
    },
    size: { nl: "0.8–1.2 cm", en: "0.8–1.2 cm", fr: "0.8–1.2 cm" },
    diet: { nl: "Nectar, stuifmeel", en: "Nectar, pollen", fr: "Nectar, pollen" },
    image: "assets/images/episyrphus_balteatus_insects.jpg"
},
{
    id: "i6_coc",
    scientific: "Coccinella septempunctata",
    family: "Coccinellidae",
    category: "insects",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Zevenstippelig lieveheersbeestje", en: "Seven-spot Ladybird", fr: "Coccinelle à sept points" },
    habitat: { nl: "Tuinen, landbouwgrond", en: "Gardens, farmland", fr: "Jardins, terres agricoles" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Bekend kevertje met zeven zwarte stippen op de rode dekschilden. Eet bladluizen. De heldere kleuren zijn een waarschuwing — ze smaken bitter voor roofvogels.",
        en: "Well-known beetle with seven black spots on the red wing cases. Eats aphids. The bright colours are a warning — they taste bitter to predators.",
        fr: "Petit scarabée bien connu avec sept points noirs sur les élytres rouges. Mange des pucerons. Les couleurs vives avertissent les prédateurs."
    },
    size: { nl: "5–8 mm", en: "5–8 mm", fr: "5–8 mm" },
    diet: { nl: "Bladluizen", en: "Aphids", fr: "Pucerons" },
    image: "assets/images/coccinella_septempunctata_insects.jpg"
},
{
    id: "gen_corvus_corax",
    scientific: "Corvus corax",
    family: "Corvidae",
    category: "birds",
    difficulty: "medium",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Corvus+corax",
    name: { nl: "Raaf", en: "Common Raven", fr: "Grand corbeau" },
    habitat: { nl: "Bergachtige gebieden, Ardennen", en: "Mountainous areas, Ardennes", fr: "Zones montagneuses, Ardennes" },
    rarity: { nl: "Zeldzaam in België (Ardennen)", en: "Rare in Belgium (Ardennes)", fr: "Rare en Belgique (Ardennes)" },
    description: {
        nl: "De grootste zangvogel ter wereld. Geheel zwart met een diep, krassend geluid. Erg intelligent — kan eenvoudige problemen oplossen.",
        en: "The largest passerine in the world. All black with a deep, croaking call. Highly intelligent — can solve simple problems.",
        fr: "Le plus grand passereau du monde. Entièrement noir avec un cri grave. Très intelligent — peut résoudre des problèmes simples."
    },
    size: { nl: "56–69 cm", en: "56–69 cm", fr: "56–69 cm" },
    diet: { nl: "Aas, kleine dieren, afval", en: "Carrion, small animals, scraps", fr: "Charogne, petits animaux, déchets" },
    image: "assets/images/corvus_corax_birds.jpg"
},
{
    id: "t13",
    scientific: "Corylus avellana",
    family: "Betulaceae",
    category: "trees",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Hazelaar", en: "Common Hazel", fr: "Noisetier commun" },
    habitat: { nl: "Bosranden, hagen", en: "Forest edges, hedges", fr: "Lisières de forêts, haies" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Bekend om de hazelnoten en de katjes die als een van de eerste in het vroege voorjaar bloeien. Een van de vroegste stuifmeelproducenten voor bijen.",
        en: "Known for the hazelnuts and the catkins that are among the first to bloom in early spring. One of the earliest pollen sources for bees.",
        fr: "Connu pour les noisettes et les chatons qui fleurissent parmi les premiers au début du printemps."
    },
    size: { nl: "3–6 m (vaak als struik)", en: "3–6 m (often shrubby)", fr: "3–6 m (souvent arbustif)" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/corylus_avellana_trees.jpg"
},
{
    id: "t15",
    scientific: "Castanea sativa",
    family: "Fagaceae",
    category: "trees",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Tamme kastanje", en: "Sweet Chestnut", fr: "Châtaignier commun" },
    habitat: { nl: "Lichte bossen, parken", en: "Light forests, parks", fr: "Forêts claires, parcs" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    description: {
        nl: "Produceert de bekende eetbare kastanjes in zeer stekelige bolsters. De bladeren zijn lang en getand. Kan zeer oud worden — enkele eeuwen!",
        en: "Produces the well-known edible chestnuts in very prickly husks. The leaves are long and toothed. Can live for many centuries.",
        fr: "Produit les célèbres châtaignes comestibles dans des bogues très épineuses. Peut vivre plusieurs siècles."
    },
    size: { nl: "Tot 30 m", en: "Up to 30 m", fr: "Jusqu'à 30 m" },
    diet: { nl: "Zonlicht, water", en: "Sunlight, water", fr: "Lumière, eau" },
    image: "assets/images/castanea_sativa_trees.jpg"
},
{
    id: "gen_cuculus_canorus",
    scientific: "Cuculus canorus",
    family: "Cuculidae",
    category: "birds",
    difficulty: "medium",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Cuculus+canorus",
    name: { nl: "Koekoek", en: "Common Cuckoo", fr: "Coucou gris" },
    habitat: { nl: "Open bossen, heidevelden, rivieroevers", en: "Open woodland, heathland, river banks", fr: "Forêts ouvertes, landes, berges" },
    rarity: { nl: "Vrij algemeen (maar afnemend)", en: "Fairly Common (but declining)", fr: "Assez commun (mais en déclin)" },
    description: {
        nl: "Bekend om zijn 'koe-koek' roep en zijn parasitair nestgedrag: het legt eieren in de nesten van andere vogelsoorten. De koekoeksjongen gooien de andere eieren uit het nest.",
        en: "Famous for its 'cuckoo' call and its brood parasitism: it lays eggs in the nests of other bird species. The cuckoo chick ejects the other eggs from the nest.",
        fr: "Célèbre pour son cri 'cou-cou' et son parasitisme de couvée: il pond ses œufs dans les nids d'autres espèces."
    },
    size: { nl: "32–34 cm", en: "32–34 cm", fr: "32–34 cm" },
    diet: { nl: "Insecten, rupsen (ook harige)", en: "Insects, caterpillars (including hairy ones)", fr: "Insectes, chenilles (y compris poilues)" },
    funfact: { nl: "Een koekoeksjong produceert een smeekgeluid dat klinkt als een heel nest hongerige kuikens — de pleegouder voedt hem non-stop!", en: "A cuckoo chick produces begging calls that sound like a whole nest of hungry chicks — the foster parent feeds it non-stop!", fr: "Un coucou produit des cris qui ressemblent à tout un nid de poussins affamés !" },
    image: "assets/images/cuculus_canorus_fauna.jpg"
},
{
    id: "m17",
    scientific: "Talpa europaea",
    family: "Talpidae",
    category: "fauna",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Mol", en: "European Mole", fr: "Taupe d'Europe" },
    habitat: { nl: "Ondergronds in graslanden, tuinen", en: "Underground in grasslands, gardens", fr: "Souterrain dans les prairies, jardins" },
    rarity: { nl: "Zeer algemeen", en: "Very Common", fr: "Très commun" },
    description: {
        nl: "Leeft bijna uitsluitend onder de grond. Graaft gangen en de bekende mollenhopen. Heeft kleine oogjes die nauwelijks functioneren maar enorm grote poten voor het graven.",
        en: "Lives almost exclusively underground. Digs tunnels and the well-known molehills. Has tiny barely functional eyes but enormous forepaws for digging.",
        fr: "Vit presque exclusivement sous terre. Creuse des galeries et des taupinières. A de tout petits yeux et d'énormes pattes avant pour creuser."
    },
    size: { nl: "12–16 cm", en: "12–16 cm", fr: "12–16 cm" },
    diet: { nl: "Regenwormen, insectenlarven", en: "Earthworms, insect larvae", fr: "Vers de terre, larves d'insectes" },
    image: "assets/images/talpa_europaea_fauna.jpg"
},
{
    id: "gen_falco_peregrinus",
    scientific: "Falco peregrinus",
    family: "Falconidae",
    category: "birds",
    difficulty: "medium",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Falco+peregrinus",
    name: { nl: "Slechtvalk", en: "Peregrine Falcon", fr: "Faucon pèlerin" },
    habitat: { nl: "Steden (op torens), kliffen", en: "Cities (on towers), cliffs", fr: "Villes (sur clochers), falaises" },
    rarity: { nl: "Vrij zeldzaam maar herstellend", en: "Fairly Rare but recovering", fr: "Assez rare mais en récupération" },
    description: {
        nl: "Het snelste dier ter wereld in duikvlucht — meer dan 320 km/u. Heeft een sterke comeback gemaakt in Belgische steden waar het op kerkklokken en torens broedt.",
        en: "The world's fastest animal in a dive — over 320 km/h. Has made a strong comeback in Belgian cities, where it breeds on church towers and tall buildings.",
        fr: "L'animal le plus rapide du monde en piqué — plus de 320 km/h. A fait un fort retour dans les villes belges, nichant sur les clochers."
    },
    size: { nl: "36–48 cm", en: "36–48 cm", fr: "36–48 cm" },
    diet: { nl: "Vogels (vooral duiven)", en: "Birds (especially pigeons)", fr: "Oiseaux (surtout pigeons)" },
    funfact: { nl: "De slechtvalk duikt sneller dan 300 km/u — sneller dan een Formule 1-auto!", en: "The peregrine dives faster than 300 km/h — faster than a Formula 1 car!", fr: "Le faucon pèlerin plonge à plus de 300 km/h — plus vite qu'une voiture de F1 !" },
    image: "assets/images/falco_peregrinus_birds.jpg"
},
    // ═══════════════════════════════════════════════════════════════
    // NEW SPECIES — added batch 2
    // ═══════════════════════════════════════════════════════════════

    // ── TREES (Naaldbomen) ─────────────────────────────────────────
    {
        id: "t_pinus_sylvestris",
        scientific: "Pinus sylvestris",
        family: "Pinaceae",
        category: "trees",
        difficulty: "easy",
    iucn: "LC",
        plantGrade: "dicot",
        name: { nl: "Grove den", en: "Scots Pine", fr: "Pin sylvestre" },
        image: "assets/images/pinus_sylvestris_trees.jpg",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Pinus_sylvestris_Lozere.jpg/640px-Pinus_sylvestris_Lozere.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Pinus_sylvestris_bark.jpg/640px-Pinus_sylvestris_bark.jpg"
        ],
        rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
        habitat: { nl: "Heidevelden, zandbodems, dennenbossen", en: "Heathlands, sandy soils, conifer forests", fr: "Landes, sols sableux, forêts de conifères" },
        size: { nl: "20–40 m", en: "20–40 m", fr: "20–40 m" },
        diet: { nl: "Fotosyntheserend", en: "Photosynthetic", fr: "Photosynthétique" },
        description: {
            nl: "De grove den is de enige inheemse pijnboom in België. Zijn oranje-rode schors in de kroon is een goed herkenningskenmerk. De kenmerkende blauwgroene naalden staan in paren.",
            en: "The Scots pine is the only native pine in Belgium. Its orange-red bark in the upper crown is distinctive. The blue-green needles grow in pairs.",
            fr: "Le pin sylvestre est le seul pin indigène en Belgique. Son écorce rouge-orangé dans la couronne supérieure est caractéristique."
        },
        funfact: "De grove den is de inheemse pijnboom met het grootste verspreidingsgebied ter wereld — van Schotland tot Siberië.",
        plantType: "conifer",
    },
    {
        id: "t_larix_decidua",
        scientific: "Larix decidua",
        family: "Pinaceae",
        category: "trees",
        difficulty: "medium",
    iucn: "LC",
        plantGrade: "dicot",
        name: { nl: "Europese lork", en: "European Larch", fr: "Mélèze d'Europe" },
        image: "assets/images/larix_decidua_trees.jpg",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Larix_decidua_2.jpg/640px-Larix_decidua_2.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Larix_decidua_autumn.jpg/640px-Larix_decidua_autumn.jpg"
        ],
        rarity: { nl: "Vrij algemeen (aangeplant)", en: "Fairly common (planted)", fr: "Assez commun (planté)" },
        habitat: { nl: "Bergbossen, aangeplant in Ardennen", en: "Mountain forests, planted in Ardennes", fr: "Forêts montagnardes, planté dans les Ardennes" },
        size: { nl: "20–45 m", en: "20–45 m", fr: "20–45 m" },
        diet: { nl: "Fotosyntheserend", en: "Photosynthetic", fr: "Photosynthétique" },
        description: {
            nl: "De Europese lork is de enige inheemse naaldboom in Europa die zijn naalden afwerpt in de winter. In de herfst kleuren de naalden prachtig goudgeel.",
            en: "The European larch is the only native conifer in Europe that sheds its needles in winter. In autumn they turn a stunning golden yellow.",
            fr: "Le mélèze est le seul conifère européen indigène qui perd ses aiguilles en hiver. En automne, elles deviennent dorées."
        },
        funfact: "De Europese lork verliest zijn naalden in de winter, in tegenstelling tot de meeste naaldbomen. Dit maakt hem uniek in Europa.",
        plantType: "conifer",
    },
    {
        id: "t_taxus_baccata",
        scientific: "Taxus baccata",
        family: "Taxaceae",
        category: "trees",
        difficulty: "hard",
    iucn: "LC",
        plantGrade: "dicot",
        name: { nl: "Taxus", en: "Common Yew", fr: "If commun" },
        image: "assets/images/taxus_baccata_trees.jpg",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Taxus_baccata_foliage.jpg/640px-Taxus_baccata_foliage.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Taxus_baccata_berries.jpg/640px-Taxus_baccata_berries.jpg"
        ],
        rarity: { nl: "Vrij zeldzaam", en: "Fairly rare", fr: "Assez rare" },
        habitat: { nl: "Schaduwrijke loofbossen, kalkrijke gronden", en: "Shady broadleaf forests, calcareous soils", fr: "Forêts feuillues ombragées, sols calcaires" },
        size: { nl: "5–20 m", en: "5–20 m", fr: "5–20 m" },
        diet: { nl: "Fotosyntheserend", en: "Photosynthetic", fr: "Photosynthétique" },
        description: {
            nl: "De taxus is een van de langstlevende bomen van Europa. Bijna alle delen zijn zwaar giftig door taxine-alkaloïden, behalve het rode vruchtvlees.",
            en: "The yew is one of Europe's longest-lived trees. Almost all parts contain deadly taxine alkaloids — only the red berry flesh is non-toxic.",
            fr: "L'if est l'un des arbres les plus longévifs d'Europe. Presque toutes ses parties sont mortellement toxiques."
        },
        funfact: "De taxus kan meer dan 5.000 jaar oud worden. De beroemde 'Fortingall Yew' in Schotland is mogelijk 5.000 jaar oud.",
        plantType: "conifer",
    },
    // ── TREES (Loofbomen) ──────────────────────────────────────────
    {
        id: "t_tilia_cordata",
        scientific: "Tilia cordata",
        family: "Malvaceae",
        category: "trees",
        difficulty: "medium",
    iucn: "LC",
        plantGrade: "dicot",
        name: { nl: "Winterlinde", en: "Small-leaved Lime", fr: "Tilleul à petites feuilles" },
        image: "assets/images/tilia_cordata_trees.jpg",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Tilia_cordata_003.jpg/640px-Tilia_cordata_003.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Tilia_cordata_flowers.jpg/640px-Tilia_cordata_flowers.jpg"
        ],
        rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
        habitat: { nl: "Loofbossen, lanen, parken, steden", en: "Broadleaf forests, avenues, parks, cities", fr: "Forêts feuillues, allées, parcs, villes" },
        size: { nl: "15–30 m", en: "15–30 m", fr: "15–30 m" },
        diet: { nl: "Fotosyntheserend", en: "Photosynthetic", fr: "Photosynthétique" },
        description: {
            nl: "De winterlinde wordt vaak als dorpslinde geplant vanwege zijn schaduw en geur. De bloemen zijn een cruciale honingbron voor bijen in juni-juli.",
            en: "The small-leaved lime is often planted as a village tree for its shade and scent. Its flowers are a critical honey source for bees in June-July.",
            fr: "Le tilleul à petites feuilles est souvent planté comme arbre de village. Ses fleurs sont une source de miel importante pour les abeilles."
        },
        funfact: "De winterlinde is de nationale boom van Tsjechië. Lindebloesemthee staat bekend als kalmerend middel en wordt al eeuwen gemaakt.",
        plantType: "deciduous",
    },
    {
        id: "t_carpinus_betulus",
        scientific: "Carpinus betulus",
        family: "Betulaceae",
        category: "trees",
        difficulty: "medium",
    iucn: "LC",
        plantGrade: "dicot",
        name: { nl: "Haagbeuk", en: "Common Hornbeam", fr: "Charme commun" },
        image: "assets/images/carpinus_betulus_trees.jpg",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Carpinus_betulus3.jpg/640px-Carpinus_betulus3.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Carpinus_betulus_catkins.jpg/640px-Carpinus_betulus_catkins.jpg"
        ],
        rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
        habitat: { nl: "Loofbossen, hagen, parken", en: "Broadleaf forests, hedges, parks", fr: "Forêts feuillues, haies, parcs" },
        size: { nl: "10–25 m", en: "10–25 m", fr: "10–25 m" },
        diet: { nl: "Fotosyntheserend", en: "Photosynthetic", fr: "Photosynthétique" },
        description: {
            nl: "De haagbeuk heeft het hardste hout van alle inheemse Europese bomen. De stam heeft een karakteristiek gespierd uiterlijk. Valt ook op door het vasthouden van dode bladeren.",
            en: "The hornbeam has the hardest wood of all native European trees. The trunk has a characteristically muscular appearance. Dead leaves often cling through winter.",
            fr: "Le charme a le bois le plus dur de tous les arbres indigènes européens. Le tronc a un aspect musclé caractéristique."
        },
        funfact: "Het hout van de haagbeuk is zo hard dat het vroeger werd gebruikt voor tandwielen in molens en om pianotoetsen te maken.",
        plantType: "deciduous",
    },
    {
        id: "t_salix_alba",
        scientific: "Salix alba",
        family: "Salicaceae",
        category: "trees",
        difficulty: "medium",
    iucn: "LC",
        plantGrade: "dicot",
        name: { nl: "Schietwilg", en: "White Willow", fr: "Saule blanc" },
        image: "assets/images/salix_alba_trees.jpg",
        rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
        habitat: { nl: "Rivieroevers, natte graslanden, polders", en: "Riverbanks, wet meadows, polders", fr: "Berges, prairies humides, polders" },
        size: { nl: "10–25 m", en: "10–25 m", fr: "10–25 m" },
        diet: { nl: "Fotosyntheserend", en: "Photosynthetic", fr: "Photosynthétique" },
        description: {
            nl: "De schietwilg staat graag op natte plaatsen langs oevers. De zilverwitte onderkant van de bladeren geeft de boom zijn naam. Katjes verschijnen vroeg in het voorjaar.",
            en: "The white willow prefers wet sites along waterways. The silvery-white undersides of its leaves give it its name. Catkins appear early in spring.",
            fr: "Le saule blanc pousse près des cours d'eau. Le dessous argenté de ses feuilles lui donne son nom. Les chatons apparaissent tôt au printemps."
        },
        funfact: "De schors van de schietwilg bevat salicine — de voorloper van aspirine. Al eeuwen werd wilgenschors gebruikt als pijnstiller en koortsverlagend middel.",
        plantType: "deciduous",
    },
    {
        id: "t_populus_tremula",
        scientific: "Populus tremula",
        family: "Salicaceae",
        category: "trees",
        difficulty: "medium",
    iucn: "LC",
        plantGrade: "dicot",
        name: { nl: "Ratelpopulier", en: "European Aspen", fr: "Tremble commun" },
        image: "assets/images/populus_tremula_trees.jpg",
        rarity: { nl: "Vrij algemeen", en: "Fairly common", fr: "Assez commun" },
        habitat: { nl: "Bosranden, kapvlakten, natte gronden", en: "Forest edges, clearings, damp soils", fr: "Lisières, clairières, sols humides" },
        size: { nl: "15–25 m", en: "15–25 m", fr: "15–25 m" },
        diet: { nl: "Fotosyntheserend", en: "Photosynthetic", fr: "Photosynthétique" },
        description: {
            nl: "De ratelpopulier dankt zijn naam aan de platte bladstelen waardoor de bladeren bij de minste wind beginnen te trillen en ritselen. Een pioniersboom op open plaatsen.",
            en: "The aspen owes its name to its flattened leaf stalks that cause the leaves to tremble in the slightest breeze. A pioneer species in open habitats.",
            fr: "Le tremble doit son nom aux pétioles aplatis qui font frémir ses feuilles au moindre vent. Un arbre pionnier des espaces ouverts."
        },
        funfact: "Ratelpopulieren vermenigvuldigen zich voornamelijk via wortelscheuten. Sommige kolonies bestaan uit duizenden genetisch identieke bomen — één enkel organisme.",
        plantType: "deciduous",
    },
    {
        id: "t_prunus_avium",
        scientific: "Prunus avium",
        family: "Rosaceae",
        category: "trees",
        difficulty: "easy",
    iucn: "LC",
        plantGrade: "dicot",
        name: { nl: "Zoete kers", en: "Wild Cherry", fr: "Merisier" },
        image: "assets/images/prunus_avium_fauna.jpg",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Prunus_avium_Prague_2016_1.jpg/640px-Prunus_avium_Prague_2016_1.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Prunus_avium_flowers.jpg/640px-Prunus_avium_flowers.jpg"
        ],
        rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
        habitat: { nl: "Loofbossen, bosranden, bermen", en: "Broadleaf forests, forest edges, roadsides", fr: "Forêts feuillues, lisières, bords de route" },
        size: { nl: "15–25 m", en: "15–25 m", fr: "15–25 m" },
        diet: { nl: "Fotosyntheserend", en: "Photosynthetic", fr: "Photosynthétique" },
        description: {
            nl: "De zoete kers tovert in april de bossen wit met zijn grote witte bloesems. In de zomer leveren de kleine zwarte kersen voedsel voor vogels en zoogdieren.",
            en: "Wild cherry transforms woodland white in April with its large white blossom. In summer, the small black cherries feed birds and mammals.",
            fr: "Le merisier transforme les bois en avril avec sa grande floraison blanche. En été, les cerises noires nourrissent oiseaux et mammifères."
        },
        funfact: "Het rode kersenachtige hout is een van de meest gewaardeerde houtsoorten voor meubels. Alle gekweekte kersen stammen af van de zoete kers.",
        plantType: "deciduous",
    },

    // ── FLORA (Wilde planten) ──────────────────────────────────────
    {
        id: "fl_primula_veris",
        scientific: "Primula veris",
        family: "Primulaceae",
        category: "flora",
        difficulty: "medium",
    iucn: "LC",
        plantGrade: "dicot",
        name: { nl: "Gulden sleutelbloem", en: "Cowslip", fr: "Coucou" },
        image: "assets/images/primula_veris_flora.jpg",
        rarity: { nl: "Vrij algemeen", en: "Fairly common", fr: "Assez commun" },
        habitat: { nl: "Graslanden, bermen, kalkrijke bodems", en: "Grasslands, verges, calcareous soils", fr: "Prairies, talus, sols calcaires" },
        size: { nl: "10–30 cm", en: "10–30 cm", fr: "10–30 cm" },
        diet: { nl: "Fotosyntheserend", en: "Photosynthetic", fr: "Photosynthétique" },
        description: {
            nl: "De gulden sleutelbloem is een van de eerste lentebloemen. De gele klokvormige bloemen hangen in een eenzijdige tros. Sterk geurend. Kenmerkend voor soortenrijke graslanden.",
            en: "Cowslip is one of the first spring flowers, with fragrant yellow nodding bells. Characteristic of species-rich grasslands and calcareous soils.",
            fr: "La primevère officinale est l'une des premières fleurs printanières, avec ses cloches jaunes parfumées."
        },
        funfact: "De gulden sleutelbloem was vroeger zo gewoon dat kinderen ermee speelden. Door intensieve landbouw is hij zeldzamer geworden in Vlaanderen.",
        plantType: "deciduous",
    },
    {
        id: "fl_convallaria_majalis",
        scientific: "Convallaria majalis",
        family: "Asparagaceae",
        category: "flora",
        difficulty: "easy",
    iucn: "LC",
        plantGrade: "monocot",
        name: { nl: "Lelietje-van-dalen", en: "Lily of the Valley", fr: "Muguet de mai" },
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Convallaria_majalis_Maipo.jpg/640px-Convallaria_majalis_Maipo.jpg",
        rarity: { nl: "Vrij algemeen", en: "Fairly common", fr: "Assez commun" },
        habitat: { nl: "Loofbossen, bosranden, schaduwrijke plekken", en: "Broadleaf forests, forest edges, shaded spots", fr: "Forêts feuillues, lisières, endroits ombragés" },
        size: { nl: "15–30 cm", en: "15–30 cm", fr: "15–30 cm" },
        diet: { nl: "Fotosyntheserend", en: "Photosynthetic", fr: "Photosynthétique" },
        description: {
            nl: "Lelietje-van-dalen vormt dichte tapijten in schaduwrijke bossen. De witte belletjes zijn sterk geurend. De rode bessen in de zomer zijn giftig.",
            en: "Lily of the valley forms dense carpets in shady forests. The white bells are strongly fragrant. The red autumn berries are toxic.",
            fr: "Le muguet forme des tapis dans les forêts ombragées. Les cloches blanches sont très parfumées. Les baies rouges sont toxiques."
        },
        funfact: "Lelietje-van-dalen is het nationale symbool van Frankrijk op 1 mei. De geur wordt gebruikt in vele beroemde parfums, maar de hele plant is zwaar giftig.",
        plantType: "deciduous",
    },
    {
        id: "fl_digitalis_purpurea",
        scientific: "Digitalis purpurea",
        family: "Plantaginaceae",
        category: "flora",
        difficulty: "easy",
    iucn: "LC",
        plantGrade: "dicot",
        name: { nl: "Vingerhoedskruid", en: "Foxglove", fr: "Digitale pourpre" },
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Digitalis_purpurea_Trinquetaille.jpg/640px-Digitalis_purpurea_Trinquetaille.jpg",
        rarity: { nl: "Vrij algemeen", en: "Fairly common", fr: "Assez commun" },
        habitat: { nl: "Kapvlaktes, bosranden, zure heidegrond", en: "Clearings, forest edges, acidic heaths", fr: "Clairières, lisières, landes acides" },
        size: { nl: "50–180 cm", en: "50–180 cm", fr: "50–180 cm" },
        diet: { nl: "Fotosyntheserend", en: "Photosynthetic", fr: "Photosynthétique" },
        description: {
            nl: "Het vingerhoedskruid is een opvallende plant met paarse klokvormige bloemen vol donkere stippen. Een tweejaarlijkse plant die vaak in grote groepen groeit op kapvlaktes.",
            en: "Foxglove is a striking plant with purple bell-shaped flowers spotted inside. A biennial often growing in large groups on forest clearings.",
            fr: "La digitale pourpre est une plante spectaculaire aux fleurs campanulées pourpres tachetées."
        },
        funfact: "Vingerhoedskruid bevat digitalis, een stof die het hart vertraagt. Dit wordt tot op vandaag levensreddend gebruikt bij hartfalen — een van de oudste geneesmiddelen.",
        plantType: "deciduous",
    },
    {
        id: "fl_lythrum_salicaria",
        scientific: "Lythrum salicaria",
        family: "Lythraceae",
        category: "flora",
        difficulty: "easy",
    iucn: "LC",
        plantGrade: "dicot",
        name: { nl: "Grote kattenstaart", en: "Purple Loosestrife", fr: "Salicaire commune" },
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Lythrum_salicaria_-_purple_loosestrife.jpg/640px-Lythrum_salicaria_-_purple_loosestrife.jpg",
        rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
        habitat: { nl: "Oevers, moerassen, natte graslanden", en: "Riverbanks, marshes, wet meadows", fr: "Berges, marais, prairies humides" },
        size: { nl: "60–120 cm", en: "60–120 cm", fr: "60–120 cm" },
        diet: { nl: "Fotosyntheserend", en: "Photosynthetic", fr: "Photosynthétique" },
        description: {
            nl: "De grote kattenstaart kleurt in de zomer de oevers en moerassen paars-rood. De aren zijn dicht bedekt met kleine paarse bloemen. Een populaire honingplant voor bijen en vlinders.",
            en: "Purple loosestrife colours riverbanks and marshes deep purple-red in summer. Dense spikes are covered in small purple flowers, popular with bees and butterflies.",
            fr: "La salicaire colore les berges et les marais en rouge-violet en été."
        },
        funfact: "De grote kattenstaart heeft drie verschillende bloemvormen — elk met meeldraden en stijlen van andere lengte. Succesvolle bevruchting vereist bezoek van dezelfde bloemvorm.",
        plantType: "deciduous",
    },
    {
        id: "fl_hypericum_perforatum",
        scientific: "Hypericum perforatum",
        family: "Hypericaceae",
        category: "flora",
        difficulty: "medium",
    iucn: "LC",
        plantGrade: "dicot",
        name: { nl: "Sint-janskruid", en: "Common St John's Wort", fr: "Millepertuis perforé" },
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Hypericum_perforatum_a.jpg/640px-Hypericum_perforatum_a.jpg",
        rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
        habitat: { nl: "Bermen, droge graslanden, bosranden", en: "Verges, dry grasslands, forest edges", fr: "Talus, pelouses sèches, lisières" },
        size: { nl: "30–90 cm", en: "30–90 cm", fr: "30–90 cm" },
        diet: { nl: "Fotosyntheserend", en: "Photosynthetic", fr: "Photosynthétique" },
        description: {
            nl: "Het sint-janskruid heeft gele bloemen met zwarte stipjes op de kelkbladen. Als je een blaadje tegen het licht houdt zie je doorzichtige stipjes — olieklieren.",
            en: "St John's wort has yellow flowers with black dots on the sepals. Holding a leaf to the light reveals transparent oil glands, giving the 'perforated' appearance.",
            fr: "Le millepertuis a des fleurs jaunes avec des points noirs sur les sépales. Ses feuilles semblent perforées quand on les observe en transparence."
        },
        funfact: "Sint-janskruid is een bekend antidepressivum dat in meer dan 30 klinische studies effectiever bleek dan placebo bij milde depressies.",
        plantType: "deciduous",
    },
    {
        id: "fl_epilobium_angustifolium",
        scientific: "Epilobium angustifolium",
        family: "Onagraceae",
        category: "flora",
        difficulty: "easy",
    iucn: "LC",
        plantGrade: "dicot",
        name: { nl: "Wilgenroosje", en: "Rosebay Willowherb", fr: "Épilobe en épi" },
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/20140714Epilobium_angustifolium1.jpg/640px-20140714Epilobium_angustifolium1.jpg",
        rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
        habitat: { nl: "Kapvlaktes, brandplekken, spoorwegbermen", en: "Clearings, burnt ground, railway embankments", fr: "Clairières, terrains brûlés, talus ferroviaires" },
        size: { nl: "50–150 cm", en: "50–150 cm", fr: "50–150 cm" },
        diet: { nl: "Fotosyntheserend", en: "Photosynthetic", fr: "Photosynthétique" },
        description: {
            nl: "Het wilgenroosje is een pioniersoort die snel kapvlaktes en brandplekken koloniseert. De roze bloemenaren zijn opvallend aanwezig in de zomer.",
            en: "Rosebay willowherb is a pioneer species rapidly colonising clearings and burnt ground. Its pink flower spikes are conspicuous throughout summer.",
            fr: "L'épilobe en épi est une plante pionnière colonisant rapidement les clairières et terrains brûlés."
        },
        funfact: "Na de Tweede Wereldoorlog kleurde het wilgenroosje de gebombardeerde puinvelden van Londen roze. De Britten noemden het 'bombweed'.",
        plantType: "deciduous",
    },
    {
        id: "fl_geranium_robertianum",
        scientific: "Geranium robertianum",
        family: "Geraniaceae",
        category: "flora",
        difficulty: "easy",
    iucn: "LC",
        plantGrade: "dicot",
        name: { nl: "Robertskruid", en: "Herb Robert", fr: "Herbe à Robert" },
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Geranium_robertianum_sl3.jpg/640px-Geranium_robertianum_sl3.jpg",
        rarity: { nl: "Zeer algemeen", en: "Very common", fr: "Très commun" },
        habitat: { nl: "Bosranden, muren, ruigtes, schaduwrijke plekken", en: "Forest edges, walls, wasteland, shaded spots", fr: "Lisières, murs, friches, endroits ombragés" },
        size: { nl: "10–45 cm", en: "10–45 cm", fr: "10–45 cm" },
        diet: { nl: "Fotosyntheserend", en: "Photosynthetic", fr: "Photosynthétique" },
        description: {
            nl: "Robertskruid heeft kleine roze bloemen en sterk verdeelde bladeren die bij aanraking een sterke geur afgeven. De stengels worden rood bij stress of in de herfst.",
            en: "Herb Robert has small pink flowers and finely divided leaves that release a strong scent when touched. Stems turn red under stress or in autumn.",
            fr: "L'herbe à Robert a de petites fleurs roses et des feuilles finement découpées qui dégagent une odeur forte au toucher."
        },
        funfact: "Robertskruid ruikt sterk naar oude kaas door uitgescheiden vluchtige verbindingen. De felle rode stengels in de herfst zijn een ander kenmerk.",
        plantType: "deciduous",
    },
    {
        id: "fl_lamium_album",
        scientific: "Lamium album",
        family: "Lamiaceae",
        category: "flora",
        difficulty: "easy",
    iucn: "LC",
        plantGrade: "dicot",
        name: { nl: "Witte dovenetel", en: "White Dead-nettle", fr: "Lamier blanc" },
        image: "assets/images/lamium_album_flora.jpg",
        rarity: { nl: "Zeer algemeen", en: "Very common", fr: "Très commun" },
        habitat: { nl: "Wegbermen, tuinen, ruigtes, bosranden", en: "Roadsides, gardens, wasteland, forest edges", fr: "Bords de route, jardins, friches, lisières" },
        size: { nl: "20–60 cm", en: "20–60 cm", fr: "20–60 cm" },
        diet: { nl: "Fotosyntheserend", en: "Photosynthetic", fr: "Photosynthétique" },
        description: {
            nl: "De witte dovenetel lijkt sterk op brandnetel maar prikt absoluut niet. De witte bloemen verschijnen van april tot december en zijn een belangrijke voedselplant voor hommels.",
            en: "White dead-nettle strongly resembles stinging nettle but does not sting. White flowers appear April-December and are important for bumblebees.",
            fr: "Le lamier blanc ressemble à l'ortie mais ne pique pas. Ses fleurs blanches, d'avril à décembre, sont importantes pour les bourdons."
        },
        funfact: "Als kind kun je de nectar van de witte dovenetel uitzuigen — de bloemen zijn vol nectar. Het is een van de beste nectarplanten voor hommels.",
        plantType: "deciduous",
    },

    // ── FAUNA (Zoogdieren) ─────────────────────────────────────────
    {
        id: "m_micromys_minutus",
        scientific: "Micromys minutus",
        family: "Muridae",
        category: "fauna",
        difficulty: "hard",
    iucn: "LC",
        name: { nl: "Dwergmuis", en: "Harvest Mouse", fr: "Rat des moissons" },
        image: "assets/images/micromys_minutus_fauna.jpg",
        rarity: { nl: "Vrij zeldzaam", en: "Fairly rare", fr: "Assez rare" },
        habitat: { nl: "Graanvelden, rietmoerassen, hoge grassen", en: "Cornfields, reedbeds, tall grasslands", fr: "Champs de céréales, roselières, hautes herbes" },
        size: { nl: "5–7 cm", en: "5–7 cm", fr: "5–7 cm" },
        diet: { nl: "Zaden, insecten, bessen", en: "Seeds, insects, berries", fr: "Graines, insectes, baies" },
        description: {
            nl: "De dwergmuis is het kleinste knaagdier van Europa — een volwassen dier weegt nauwelijks 5 gram. Hij bouwt een bolrond nest hoog tussen de grassen, gevlochten rond stengels.",
            en: "The harvest mouse is Europe's smallest rodent — an adult weighs barely 5 grams. It builds a round nest woven high in grass stems.",
            fr: "Le rat des moissons est le plus petit rongeur d'Europe, pesant à peine 5 grammes. Il tisse un nid sphérique entre les tiges."
        },
        funfact: "De dwergmuis gebruikt zijn grijpstaart als vijfde ledemaat bij het klimmen. De staart kan een tak omsluiten en het dier dragen.",
    },
    {
        id: "m_mustela_erminea",
        scientific: "Mustela erminea",
        family: "Mustelidae",
        category: "fauna",
        difficulty: "hard",
    iucn: "LC",
        name: { nl: "Hermelijn", en: "Stoat", fr: "Hermine" },
        image: "assets/images/mustela_erminea_fauna.jpg",
        rarity: { nl: "Vrij zeldzaam", en: "Fairly rare", fr: "Assez rare" },
        habitat: { nl: "Bossen, heggen, akkers, wegbermen", en: "Forests, hedgerows, farmland, roadsides", fr: "Forêts, haies, zones agricoles, bords de route" },
        size: { nl: "19–31 cm", en: "19–31 cm", fr: "19–31 cm" },
        diet: { nl: "Konijnen, muizen, vogels", en: "Rabbits, mice, birds", fr: "Lapins, souris, oiseaux" },
        description: {
            nl: "Het hermelijn is een klein maar agressief roofdier dat prooi veel groter dan zichzelf aanvalt. In de winter wordt zijn vacht spierwit, behalve de zwarte staartpunt.",
            en: "The stoat is a small but ferocious predator attacking prey far larger than itself. In winter, the coat turns snow-white except for the black tail-tip.",
            fr: "L'hermine est un petit prédateur féroce attaquant des proies bien plus grandes. En hiver, son pelage devient blanc comme neige, sauf le bout de la queue."
        },
        funfact: "In de winter wordt de witte vacht van het hermelijn 'ermine' genoemd — het symbool van koninklijke macht. De zwarte staartpunt is ook in wintervacht altijd aanwezig.",
    },

    // ── BIRDS (Vogels) ─────────────────────────────────────────────
    {
        id: "b_cygnus_olor",
        scientific: "Cygnus olor",
        family: "Anatidae",
        category: "birds",
        difficulty: "easy",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Cygnus+olor",
        name: { nl: "Knobbelzwaan", en: "Mute Swan", fr: "Cygne tuberculé" },
        image: "assets/images/cygnus_olor_fauna.jpg",
        images: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Cygnus_olor_on_water.jpg/640px-Cygnus_olor_on_water.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Cygnus_olor_in_flight.jpg/640px-Cygnus_olor_in_flight.jpg"
        ],
        rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
        habitat: { nl: "Meren, vijvers, kanalen, rivieren", en: "Lakes, ponds, canals, rivers", fr: "Lacs, étangs, canaux, rivières" },
        size: { nl: "125–170 cm", en: "125–170 cm", fr: "125–170 cm" },
        diet: { nl: "Waterplanten, wieren, kleine dieren", en: "Aquatic plants, algae, small animals", fr: "Plantes aquatiques, algues, petits animaux" },
        description: {
            nl: "De knobbelzwaan is de grootste watervogelsoort in België. Herkenbaar aan de oranje snavel met zwarte knobbel aan de basis. Mannetjes bewaken hun territorium agressief.",
            en: "The mute swan is Belgium's largest waterfowl. Recognisable by its orange bill with a black knob at the base. Males defend territories aggressively.",
            fr: "Le cygne tuberculé est le plus grand oiseau aquatique de Belgique, reconnaissable à son bec orange avec un tubercule noir."
        },
        funfact: "Ondanks de naam 'stomme zwaan' is de knobbelzwaan niet echt stom — hij sist, grommelt en blaast. De vleugels maken een luid suizend geluid tijdens de vlucht.",
    },
    {
        id: "b_larus_argentatus",
        scientific: "Larus argentatus",
        family: "Laridae",
        category: "birds",
        difficulty: "medium",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Larus+argentatus",
        name: { nl: "Zilvermeeuw", en: "Herring Gull", fr: "Goéland argenté" },
        image: "assets/images/larus_argentatus_fauna.jpg",
        rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
        habitat: { nl: "Kust, rivieren, steden, vuilnisbelten", en: "Coast, rivers, cities, landfills", fr: "Côte, rivières, villes, décharges" },
        size: { nl: "55–65 cm", en: "55–65 cm", fr: "55–65 cm" },
        diet: { nl: "Vis, afval, kleine dieren, eieren", en: "Fish, refuse, small animals, eggs", fr: "Poissons, déchets, petits animaux, oeufs" },
        description: {
            nl: "De zilvermeeuw heeft een wit lichaam, grijze vleugels met zwarte vleugeltippen en een gele snavel met een rode vlek. De roep is het klassieke meeuwengeluid.",
            en: "The herring gull has a white body, grey wings with black wingtips and a yellow bill with a red spot. Its call is the classic gull cry.",
            fr: "Le goéland argenté a un corps blanc, des ailes grises avec des pointes noires et un bec jaune avec une tache rouge."
        },
        funfact: "De zilvermeeuw is een van de slimste vogels. Ze laten schelpen vallen op harde ondergronden om ze te kraken en leren dit gedrag van elkaar.",
    },
    {
        id: "b_emberiza_citrinella",
        scientific: "Emberiza citrinella",
        family: "Emberizidae",
        category: "birds",
        difficulty: "medium",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Emberiza+citrinella",
        name: { nl: "Geelgors", en: "Yellowhammer", fr: "Bruant jaune" },
        image: "assets/images/emberiza_citrinella_fauna.jpg",
        rarity: { nl: "Vrij algemeen", en: "Fairly common", fr: "Assez commun" },
        habitat: { nl: "Landbouwgebied, heggen, bermen", en: "Farmland, hedgerows, verges", fr: "Zone agricole, haies, talus" },
        size: { nl: "16–17 cm", en: "16–17 cm", fr: "16–17 cm" },
        diet: { nl: "Zaden, insecten", en: "Seeds, insects", fr: "Graines, insectes" },
        description: {
            nl: "Het mannetje geelgors heeft een opvallend geel hoofd en gele borst. De zang klinkt als 'een beetje brood zonder kaas'. Een typische vogel van open landbouwgebied.",
            en: "The male yellowhammer has a strikingly yellow head and breast. Its song sounds like 'a little bit of bread and no cheese'. A typical farmland bird.",
            fr: "Le bruant jaune mâle a une tête et une poitrine jaunes frappantes. Son chant typique des zones agricoles ouvertes."
        },
        funfact: "Het zangpatroon van de geelgors inspireerde naar verluidt Beethoven bij het schrijven van het openingsmotief van zijn Vijfde Symfonie.",
    },
    {
        id: "b_streptopelia_decaocto",
        scientific: "Streptopelia decaocto",
        family: "Columbidae",
        category: "birds",
        difficulty: "easy",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Streptopelia+decaocto",
        name: { nl: "Turkse tortel", en: "Eurasian Collared Dove", fr: "Tourterelle turque" },
        image: "assets/images/streptopelia_decaocto_fauna.jpg",
        rarity: { nl: "Zeer algemeen", en: "Very common", fr: "Très commun" },
        habitat: { nl: "Tuinen, parken, stedelijk gebied", en: "Gardens, parks, urban areas", fr: "Jardins, parcs, zones urbaines" },
        size: { nl: "31–33 cm", en: "31–33 cm", fr: "31–33 cm" },
        diet: { nl: "Zaden, graan, bessen", en: "Seeds, grain, berries", fr: "Graines, céréales, baies" },
        description: {
            nl: "De Turkse tortel is lichtbeige met een dun zwart halsbandstreepje. De driedelige roep 'ku-koe-ku' is een vertrouwd geluid in tuinen en dorpen.",
            en: "The collared dove is buff-pink with a thin black half-collar. Its three-note 'coo-COO-coo' call is a familiar sound in gardens and villages.",
            fr: "La tourterelle turque est beige rosé avec un fin demi-collier noir. Son roucoulement en trois temps est familier dans les jardins."
        },
        funfact: "De Turkse tortel bereikte België pas in 1952 en verspreidde zich sindsdien razendsnel over heel Europa — een van de snelste kolonisaties in de vogelwereld ooit.",
    },

    // ── INSECTS (Insecten) ────────────────────────────────────────
    {
        id: "i_formica_rufa",
        scientific: "Formica rufa",
        family: "Formicidae",
        category: "insects",
        difficulty: "medium",
    iucn: "LC",
        name: { nl: "Rode bosmier", en: "Red Wood Ant", fr: "Fourmi des bois" },
        image: "assets/images/formica_rufa_insects.jpg",
        rarity: { nl: "Vrij algemeen", en: "Fairly common", fr: "Assez commun" },
        habitat: { nl: "Dennenbossen, gemengde bossen, zandige bodems", en: "Pine forests, mixed forests, sandy soils", fr: "Pinèdes, forêts mixtes, sols sableux" },
        size: { nl: "4–9 mm", en: "4–9 mm", fr: "4–9 mm" },
        diet: { nl: "Insecten, honingdauw, zaden", en: "Insects, honeydew, seeds", fr: "Insectes, miellat, graines" },
        description: {
            nl: "De rode bosmier bouwt imposante mierenhopen van naalden en takjes, soms meer dan een meter hoog. Een kolonie kan meer dan een miljoen individuen tellen.",
            en: "The red wood ant builds impressive mounds of pine needles and twigs, sometimes over a metre tall. A colony can contain more than a million individuals.",
            fr: "La fourmi des bois construit d'imposantes fourmilières de brindilles et aiguilles, parfois de plus d'un mètre de haut."
        },
        funfact: "Rode bosmieren verwijderen jaarlijks tientallen tonnen insecten en beschermen zo het bos. Ze zijn wettelijk beschermd in België.",
    },
    {
        id: "i_limenitis_camilla",
        scientific: "Limenitis camilla",
        family: "Nymphalidae",
        category: "insects",
        difficulty: "hard",
    iucn: "LC",
        name: { nl: "Kleine ijsvogelvlinder", en: "White Admiral", fr: "Petit sylvain" },
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/White_Admiral_Butterfly_%28Limenitis_camilla%29_%283%29.jpg/640px-White_Admiral_Butterfly_%28Limenitis_camilla%29_%283%29.jpg",
        rarity: { nl: "Vrij zeldzaam", en: "Fairly rare", fr: "Assez rare" },
        habitat: { nl: "Loofbossen, bosranden met kamperfoelie", en: "Broadleaf forests, woodland edges with honeysuckle", fr: "Forêts feuillues, lisières avec chèvrefeuille" },
        size: { nl: "52–64 mm", en: "52–64 mm", fr: "52–64 mm" },
        diet: { nl: "Nectar, braambes", en: "Nectar, bramble", fr: "Nectar, ronces" },
        description: {
            nl: "De kleine ijsvogelvlinder heeft een sierlijk vliegpatroon — afwisselend zweven en vleugelkloppen. Boven zwart met witte band, onder oranje-bruin met patroon.",
            en: "The white admiral has an elegant flight pattern — alternating glides and wingbeats. Above blackish with a white band; below orange-brown with a pattern.",
            fr: "Le petit sylvain a un vol élégant, alternant planés et battements. Dessus noir avec bande blanche; dessous brun-orangé avec un motif."
        },
        funfact: "De rups overwintert in een opgerold kamperfoeliblad. De vlinder zweeft zo sierlijk dat hij zelden landt — hij is moeilijk te fotograferen.",
    },

    // ── FUNGI (Paddenstoelen) ────────────────────────────────────
    {
        id: "fu_pleurotus_ostreatus",
        scientific: "Pleurotus ostreatus",
        family: "Pleurotaceae",
        category: "fungi",
        difficulty: "easy",
        name: { nl: "Oesterzwam", en: "Oyster Mushroom", fr: "Pleurote en huître" },
        image: "assets/images/pleurotus_ostreatus_fungi.jpg",
        rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
        habitat: { nl: "Dode loofbomen, beukenstronken, herfst/winter", en: "Dead broadleaf trees, beech stumps, autumn/winter", fr: "Troncs d'arbres morts, souches de hêtre, automne/hiver" },
        size: { nl: "5–25 cm", en: "5–25 cm", fr: "5–25 cm" },
        diet: { nl: "Houtafbraak (saprotrofisch)", en: "Wood decay (saprotrophic)", fr: "Décomposition du bois (saprophtye)" },
        description: {
            nl: "De oesterzwam groeit in overlappende trossen op dode loofbomen. De hoed is oestervormig, grijs tot blauwig. Een van de populairste eetbare paddenstoelen.",
            en: "Oyster mushroom grows in overlapping clusters on dead broadleaf trees. The cap is oyster-shaped, grey to bluish. One of the most popular edible fungi.",
            fr: "Le pleurote pousse en touffes sur les troncs morts. Le chapeau est en forme d'huître, gris à bleuté."
        },
        funfact: "De oesterzwam is carnivoor — hij verdooft en verteert kleine aaltjes met giftige druppels. Toch is hij eetbaar en wordt hij wereldwijd gekweekt.",
    },
    {
        id: "fu_flammulina_velutipes",
        scientific: "Flammulina velutipes",
        family: "Physalacriaceae",
        category: "fungi",
        difficulty: "medium",
    iucn: "LC",
        name: { nl: "Fluweelepoot", en: "Velvet Shank", fr: "Collybie à pied velouté" },
        image: "assets/images/flammulina_velutipes_fungi.jpg",
        rarity: { nl: "Vrij algemeen", en: "Fairly common", fr: "Assez commun" },
        habitat: { nl: "Dode stronken van loofbomen, wintermaanden", en: "Dead broadleaf stumps and logs, winter months", fr: "Souches de feuillus morts, mois d'hiver" },
        size: { nl: "2–10 cm", en: "2–10 cm", fr: "2–10 cm" },
        diet: { nl: "Houtafbraak (saprotrofisch)", en: "Wood decay (saprotrophic)", fr: "Décomposition du bois" },
        description: {
            nl: "De fluweelepoot groeit midden in de winter, zelfs bij vorst. De oranjegele hoed en de donkere, fluweelachtige steel zijn kenmerkend. Groeit in trossen.",
            en: "Velvet shank grows in midwinter, even in frost. The orange-yellow cap and dark velvety stem are characteristic. Grows in clusters.",
            fr: "La collybie à pied velouté pousse en plein hiver, même par gel. Le chapeau jaune-orangé et le pied velouté sombre sont caractéristiques."
        },
        funfact: "In Japan wordt de fluweelepoot gekweekt als enoki — een van de populairste paddenstoelen in de Aziatische keuken, maar haast niet herkenbaar als dezelfde soort.",
    },
    {
        id: "fu_morchella_esculenta",
        scientific: "Morchella esculenta",
        family: "Morchellaceae",
        category: "fungi",
        difficulty: "hard",
    iucn: "LC",
        name: { nl: "Gewone morielje", en: "Common Morel", fr: "Morille comestible" },
        image: "assets/images/morchella_esculenta_fauna.jpg",
        rarity: { nl: "Zeldzaam", en: "Rare", fr: "Rare" },
        habitat: { nl: "Loofbossen, tuinen, wegbermen — vroege lente", en: "Broadleaf forests, gardens, verges — early spring", fr: "Forêts feuillues, jardins, talus — début de printemps" },
        size: { nl: "5–15 cm", en: "5–15 cm", fr: "5–15 cm" },
        diet: { nl: "Houtafbraak / symbiotisch", en: "Wood decay / symbiotic", fr: "Décomposition / symbiose" },
        description: {
            nl: "De gewone morielje heeft een kenmerkende honingraatstructuur op de hoed. Verschijnt vroeg in de lente — soms al in maart. Rauw is ze giftig, maar na koken uitstekend eetbaar.",
            en: "The common morel has a distinctive honeycomb-patterned cap. Appears early spring — sometimes March. Raw it is mildly toxic, but excellent after cooking.",
            fr: "La morille comestible a un chapeau en nid-d'abeille caractéristique. Elle apparaît tôt au printemps et est excellente après cuisson."
        },
        funfact: "De morielje is een van de meest gezochte paddenstoelen ter wereld. Ze mag NOOIT rauw worden gegeten — dat kan ernstige vergiftiging veroorzaken.",
    },
,
  {
    id: "t_quercus_petraea",
    scientific: "Quercus petraea",
    family: "Fagaceae",
    category: "trees",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Wintereik", en: "Sessile oak", fr: "Chêne sessile" },
    plantGrade: "dicot",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Quercus_petraea_-_Laub_01.jpg/640px-Quercus_petraea_-_Laub_01.jpg",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Quercus_petraea_-_Laub_01.jpg/640px-Quercus_petraea_-_Laub_01.jpg"],
    description: { nl: "De wintereik is na de zomereik de meest voorkomende eik in België, typisch op zure arme bodems in de Ardennen. Bladeren zitten direct op de tak (sessiel). Vormt de basis van rijke eikenbossen.", en: "The sessile oak is Belgium's second most common oak, typical on acid soils in the Ardennes. Leaves sit directly on the twig (sessile). Forms the basis of rich oak woodland.", fr: "Le chêne sessile est le deuxième chêne le plus commun en Belgique, typique des sols acides en Ardenne. Feuilles sessiles. Forme la base de riches chênaies." },
    habitat: { nl: "Zure bodems, heuvels, Ardennen", en: "Acid soils, hills, Ardennes", fr: "Sols acides, collines, Ardenne" },
    size: { nl: "20–40 m hoog", en: "20–40 m tall", fr: "20–40 m de hauteur" },
    diet: { nl: "Fotosynthese", en: "Photosynthesis", fr: "Photosynthèse" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    funfact: "De wintereik kan 1000 jaar oud worden en herbergt meer dan 500 insectensoorten — meer dan welke andere Europese boom."
  },
  
  
  
  {
    id: "b_phoenicurus_ochruros",
    scientific: "Phoenicurus ochruros",
    family: "Muscicapidae",
    category: "birds",
    difficulty: "medium",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Phoenicurus+ochruros",
    name: { nl: "Zwarte roodstaart", en: "Black redstart", fr: "Rougequeue noir" },
    image: "assets/images/phoenicurus_ochruros_fauna.jpg",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Phoenicurus_ochruros_male.jpg/640px-Phoenicurus_ochruros_male.jpg"],
    description: { nl: "De zwarte roodstaart is herkenbaar aan zijn oranje-roodachtige staart die voortdurend trilt. Het mannetje is donkergrijs-zwart, het vrouwtje bruiner. Nestelt in steden, industriegebieden en rotswanden. Zingt al vroeg in de ochtend.", en: "The black redstart is recognised by its constantly quivering orange-red tail. Males are dark grey-black, females browner. Nests in towns, industrial sites and rocky faces. Sings very early.", fr: "Le rougequeue noir se reconnaît à sa queue orange-rouge qui tremble constamment. Mâle gris-noir foncé, femelle plus brunâtre. Niche en villes, sites industriels et falaises." },
    habitat: { nl: "Steden, industriegebieden, rotswanden", en: "Towns, industrial sites, rocky faces", fr: "Villes, sites industriels, falaises rocheuses" },
    size: { nl: "13–15 cm, 11–20 g", en: "13–15 cm, 11–20 g", fr: "13–15 cm, 11–20 g" },
    diet: { nl: "Insecten, spinnen, kleine vruchten", en: "Insects, spiders, small berries", fr: "Insectes, araignées, petits fruits" },
    rarity: { nl: "Vrij algemeen", en: "Fairly common", fr: "Assez commun" },
    funfact: "De zwarte roodstaart is een van de eerste vogels die zingt voor zonsopgang — zijn metallisch gekraak en geknars is uniek onder Europese zangvogels."
  },
  
  
  
  
  
  
  
  
  
  
  {
    id: "m_eptesicus_serotinus",
    scientific: "Eptesicus serotinus",
    family: "Vespertilionidae",
    category: "fauna",
    difficulty: "hard",
    iucn: "NT",
    name: { nl: "Gewone grootoorvleermuis", en: "Serotine bat", fr: "Grande sérotine" },
    image: "assets/images/eptesicus_serotinus_fauna.jpg",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Eptesicus_serotinus_01.jpg/640px-Eptesicus_serotinus_01.jpg"],
    description: { nl: "De grootoorvleermuis is een van de grootste vleermuizen van België. Donkerbruine vacht met lichtere buik. Vliegt laag over graslanden en parken op zoek naar grote kevers en nachtvlinders. Nestelt in dakruimten van gebouwen.", en: "The serotine is one of Belgium's largest bats. Dark brown fur with lighter belly. Flies low over grassland and parks hunting large beetles and moths. Roosts in building roof spaces.", fr: "La grande sérotine est l'une des plus grandes chauves-souris de Belgique. Pelage brun foncé, ventre plus clair. Vole bas sur prairies et parcs, chasse gros coléoptères et papillons de nuit." },
    habitat: { nl: "Gebouwen, tuinen, parken, graslanden", en: "Buildings, gardens, parks, grassland", fr: "Bâtiments, jardins, parcs, prairies" },
    size: { nl: "Vleugelspanwijdte 33–38 cm, 15–35 g", en: "Wingspan 33–38 cm, 15–35 g", fr: "Envergure 33–38 cm, 15–35 g" },
    diet: { nl: "Grote insecten (kevers, nachtvlinders)", en: "Large insects (beetles, moths)", fr: "Grands insectes (coléoptères, papillons de nuit)" },
    rarity: { nl: "Vrij algemeen maar kwetsbaar", en: "Fairly common but vulnerable", fr: "Assez commun mais vulnérable" },
    funfact: "De grootoorvleermuis gebruikt echolocatie op zo hoge frequentie (20-60 kHz) dat het voor mensen volledig onhoorbaar is, maar hij kan insecten detecteren op 5 meter afstand."
  }
,
  {
    id: "f_natrix_natrix",
    scientific: "Natrix natrix",
    family: "Colubridae",
    category: "fauna",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Ringslang", en: "Grass snake", fr: "Couleuvre à collier" },
    image: "assets/images/natrix_natrix_fauna.jpg",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Natrix_natrix_01.jpg/640px-Natrix_natrix_01.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Natrix_natrix_collaris_LC0079.jpg/640px-Natrix_natrix_collaris_LC0079.jpg"],
    description: {
      nl: "De ringslang is de meest voorkomende slang van België. Herkenbaar aan de gele-witte halfmaan vlekken achter de kop. Volledig onschadelijk voor mensen. Leeft dicht bij water en eet voornamelijk kikkers en salamanders.",
      en: "The grass snake is Belgium's most common snake. Recognisable by the yellow-white collar markings behind the head. Completely harmless to humans. Lives near water, eating mainly frogs and salamanders.",
      fr: "La couleuvre à collier est le serpent le plus commun de Belgique. Reconnaissable à son collier jaune-blanc. Totalement inoffensive pour l'humain. Vit près de l'eau."
    },
    habitat: { nl: "Wateroevers, moerassen, natte graslanden", en: "Waterside, marshes, wet meadows", fr: "Berges, marais, prairies humides" },
    size: { nl: "70–150 cm", en: "70–150 cm", fr: "70–150 cm" },
    diet: { nl: "Kikkers, salamanders, kleine vissen", en: "Frogs, salamanders, small fish", fr: "Grenouilles, salamandres, petits poissons" },
    rarity: { nl: "Vrij algemeen", en: "Fairly common", fr: "Assez commun" },
    funfact: "Als de ringslang in gevaar is doet hij alsof hij dood is — hij rolt om, hangt zijn tong uit de bek en stoot een stinkende vloeistof uit. Zeer overtuigend!"
  },
  {
    id: "f_vipera_berus",
    scientific: "Vipera berus",
    family: "Viperidae",
    category: "fauna",
    difficulty: "hard",
    iucn: "LC",
    name: { nl: "Adder", en: "Common adder", fr: "Vipère péliade" },
    image: "assets/images/vipera_berus_fauna.jpg",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Vipera_berus_LC0119.jpg/640px-Vipera_berus_LC0119.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Vipera_berus_berus_male.jpg/640px-Vipera_berus_berus_male.jpg"],
    description: {
      nl: "De adder is de enige giftige slang van België en de meest noordelijk levende gifslang ter wereld. Herkenbaar aan het zigzagpatroon op de rug. De beet is zelden dodelijk maar vereist medische aandacht. Sterk bedreigd in België.",
      en: "The adder is Belgium's only venomous snake and the world's most northerly viper. Recognisable by the zigzag dorsal pattern. Bites are rarely fatal but require medical attention. Severely threatened in Belgium.",
      fr: "La vipère est le seul serpent venimeux de Belgique et la vipère la plus nordique du monde. Reconnaissable au dessin en zigzag dorsal. Fortement menacée en Belgique."
    },
    habitat: { nl: "Heidegronden, zonnige bosranden, hoogveen", en: "Heathland, sunny woodland edges, bogs", fr: "Landes, lisières ensoleillées, tourbières" },
    size: { nl: "50–85 cm", en: "50–85 cm", fr: "50–85 cm" },
    diet: { nl: "Muizen, hagedissen, kikkers, vogelnestjes", en: "Mice, lizards, frogs, bird nestlings", fr: "Souris, lézards, grenouilles, oisillons" },
    rarity: { nl: "Zeldzaam en sterk bedreigd", en: "Rare and severely threatened", fr: "Rare et fortement menacée" },
    funfact: "De adder is koudbloedig en heeft de zon nodig om actief te worden — je vindt hem 's ochtends vroeg liggend in de zon op een heideplek te zonnen."
  },
  {
    id: "f_lacerta_agilis",
    scientific: "Lacerta agilis",
    family: "Lacertidae",
    category: "fauna",
    difficulty: "hard",
    iucn: "LC",
    name: { nl: "Zandhagedis", en: "Sand lizard", fr: "Lézard des souches" },
    image: "assets/images/lacerta_agilis_fauna.jpg",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Lacerta_agilis_%28male%29.jpg/640px-Lacerta_agilis_%28male%29.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Lacerta_agilis_female_dsc00890.jpg/640px-Lacerta_agilis_female_dsc00890.jpg"],
    description: {
      nl: "De zandhagedis is de meest kleurrijke hagedis van België. Het mannetje heeft in de broedtijd felgroene flanken. Leeft op zonnige, droge plaatsen met open zand. Streng beschermd, zeldzaam en achteruitgaand.",
      en: "The sand lizard is Belgium's most colourful lizard. Males have bright green flanks during breeding season. Lives on sunny, dry sites with open sand. Strictly protected, rare and declining.",
      fr: "Le lézard des souches est le lézard le plus coloré de Belgique. Les mâles ont des flancs vert vif en période de reproduction. Strictement protégé, rare et en déclin."
    },
    habitat: { nl: "Zonnige heide, stuifzanden, droge bosranden", en: "Sunny heathland, dunes, dry woodland edges", fr: "Landes ensoleillées, dunes, lisières sèches" },
    size: { nl: "15–20 cm", en: "15–20 cm", fr: "15–20 cm" },
    diet: { nl: "Insecten, spinnen, kleine ongewervelden", en: "Insects, spiders, small invertebrates", fr: "Insectes, araignées, petits invertébrés" },
    rarity: { nl: "Zeldzaam en beschermd", en: "Rare and protected", fr: "Rare et protégée" },
    funfact: "Als de zandhagedis gepakt wordt kan hij zijn staart afwerpen — de staart blijft spartelen om de aandacht van de vijand af te leiden. Een nieuwe staart groeit terug."
  },
  {
    id: "f_salamandra_salamandra",
    scientific: "Salamandra salamandra",
    family: "Salamandridae",
    category: "fauna",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Vuursalamander", en: "Fire salamander", fr: "Salamandre tachetée" },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Salamandra_salamandra_nb.jpg/640px-Salamandra_salamandra_nb.jpg",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Salamandra_salamandra_nb.jpg/640px-Salamandra_salamandra_nb.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Salamandra_salamandra_in_rain.jpg/640px-Salamandra_salamandra_in_rain.jpg"],
    description: {
      nl: "De vuursalamander is een van de mooiste amfibieën van de Ardennen. Zwart met felgele vlekken — de kleuren waarschuwen roofdieren voor zijn giftige huidafscheiding. Actief bij regen, nacht of schemering in vochtige loofbossen.",
      en: "The fire salamander is one of the Ardennes most beautiful amphibians. Black with bright yellow spots — warning colours signal toxic skin secretions to predators. Active in rain, night or dusk in damp deciduous woodland.",
      fr: "La salamandre tachetée est un des plus beaux amphibiens des Ardennes. Noir à taches jaunes vives — couleurs aposématiques signalant sa toxicité. Active sous la pluie ou la nuit."
    },
    habitat: { nl: "Vochtige loofbossen met beken, Ardennen", en: "Damp deciduous woodland with streams, Ardennes", fr: "Forêts de feuillus humides avec ruisseaux, Ardenne" },
    size: { nl: "15–25 cm", en: "15–25 cm", fr: "15–25 cm" },
    diet: { nl: "Regenwormen, slakken, insecten", en: "Earthworms, slugs, insects", fr: "Vers de terre, limaces, insectes" },
    rarity: { nl: "Vrij zeldzaam, beschermd", en: "Fairly rare, protected", fr: "Assez rare, protégée" },
    funfact: "Vuursalamanders baren levende larven — ze zetten geen eieren af op land maar brengen volledig ontwikkelde waterlarven ter wereld in een beek."
  },
  {
    id: "f_rana_temporaria",
    scientific: "Rana temporaria",
    family: "Ranidae",
    category: "fauna",
    difficulty: "easy",
    iucn: "LC",
    name: { nl: "Bruine kikker", en: "Common frog", fr: "Grenouille rousse" },
    image: "assets/images/rana_temporaria_fauna.jpg",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Rana_temporaria_LC0073.jpg/640px-Rana_temporaria_LC0073.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Rana_temporaria_mating.jpg/640px-Rana_temporaria_mating.jpg"],
    description: {
      nl: "De bruine kikker is de meest algemene kikkersoort van België. Bruin tot roodbruin van kleur met een donker masker achter het oog. Trekt elk voorjaar massaal naar vijvers en poelen om te paaien. Het gekwaak is in maart en april overal te horen.",
      en: "The common frog is Belgium's most widespread frog. Brown to reddish-brown with a dark mask behind the eye. Migrates en masse to ponds each spring to spawn. The croaking is heard everywhere in March and April.",
      fr: "La grenouille rousse est le batracien le plus répandu de Belgique. Brun à brun-roux avec un masque sombre derrière l'œil. Migration printanière massive vers les mares pour se reproduire."
    },
    habitat: { nl: "Tuinen, parken, bossen, graslanden — altijd nabij water", en: "Gardens, parks, woodland, grassland — always near water", fr: "Jardins, parcs, forêts, prairies — toujours près de l'eau" },
    size: { nl: "6–9 cm", en: "6–9 cm", fr: "6–9 cm" },
    diet: { nl: "Insecten, slakken, wormen, spinnen", en: "Insects, slugs, worms, spiders", fr: "Insectes, limaces, vers, araignées" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    funfact: "Een bruine kikker kan overwinteren onder water — zijn huid absorbeert genoeg zuurstof om de winter door te komen zonder adem te halen via zijn longen."
  },
  {
    id: "b_corvus_corone",
    scientific: "Corvus corone",
    family: "Corvidae",
    category: "birds",
    difficulty: "easy",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Corvus+corone",
    name: { nl: "Zwarte kraai", en: "Carrion crow", fr: "Corneille noire" },
    image: "assets/images/corvus_corone_fauna.jpg",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Corvus_corone_Luc_Viatour.jpg/640px-Corvus_corone_Luc_Viatour.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Corvus_corone_1_%28Marek_Szczepanek%29.jpg/640px-Corvus_corone_1_%28Marek_Szczepanek%29.jpg"],
    description: {
      nl: "De zwarte kraai is een van de meest intelligente vogels ter wereld. Volledig gitzwart, groter dan een spreeuw en kleiner dan een raaf. Leeft overal — van stadscentrum tot boerenland. Geeft geen krimp voor mensen.",
      en: "The carrion crow is one of the world's most intelligent birds. All jet-black, larger than a starling and smaller than a raven. Lives everywhere from city centres to farmland. Fearless around humans.",
      fr: "La corneille noire est l'un des oiseaux les plus intelligents au monde. Entièrement noir, plus grand qu'un étourneau et plus petit qu'un corbeau. Vit partout, de la ville aux champs."
    },
    habitat: { nl: "Overal: steden, akkers, bossen, parken", en: "Everywhere: cities, farmland, woodland, parks", fr: "Partout: villes, champs, forêts, parcs" },
    size: { nl: "45–49 cm, 370–650 g", en: "45–49 cm, 370–650 g", fr: "45–49 cm, 370–650 g" },
    diet: { nl: "Alleseter: aas, insecten, eieren, afval, zaden", en: "Omnivore: carrion, insects, eggs, waste, seeds", fr: "Omnivore: charognes, insectes, œufs, déchets, graines" },
    rarity: { nl: "Zeer algemeen", en: "Very common", fr: "Très commun" },
    funfact: "Kraaien herkennen mensengezichten en onthouden wie hen ooit lastigviel — soms jarenlang. Ze leren het ook aan hun nakomelingen."
  },
  {
    id: "b_apus_apus",
    scientific: "Apus apus",
    family: "Apodidae",
    category: "birds",
    difficulty: "medium",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Apus+apus",
    name: { nl: "Gierzwaluw", en: "Common swift", fr: "Martinet noir" },
    image: "assets/images/apus_apus_fauna.jpg",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Apus_apus_01.jpg/640px-Apus_apus_01.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Apus_apus_flock.jpg/640px-Apus_apus_flock.jpg"],
    description: {
      nl: "De gierzwaluw brengt zijn hele leven vliegend door — hij eet, slaapt en paart in de lucht. Herkenbaar aan de sikkelachtige vleugels en het kenmerkende schril gillen 's avonds boven steden. Aanwezig van mei tot augustus.",
      en: "The common swift spends its entire life airborne — eating, sleeping and mating in flight. Recognisable by sickle-shaped wings and characteristic shrill screaming at dusk above towns. Present May to August.",
      fr: "Le martinet noir passe toute sa vie en vol — mangeant, dormant et s'accouplant dans les airs. Reconnaissable à ses ailes en faucille et ses cris stridents le soir. Présent de mai à août."
    },
    habitat: { nl: "Steden (nestelt in gebouwen), jaagt hoog in de lucht", en: "Towns (nests in buildings), hunts high in the air", fr: "Villes (niche dans bâtiments), chasse en altitude" },
    size: { nl: "16–17 cm, 36–50 g", en: "16–17 cm, 36–50 g", fr: "16–17 cm, 36–50 g" },
    diet: { nl: "Vliegende insecten en spinnen", en: "Flying insects and spiders", fr: "Insectes et araignées en vol" },
    rarity: { nl: "Vrij algemeen maar achteruitgaand", en: "Fairly common but declining", fr: "Assez commun mais en déclin" },
    funfact: "De gierzwaluw legt meer dan 200.000 km per jaar af en kan 10 maanden zonder te landen vliegen — het absolute wereldrecord."
  },
  {
    id: "b_turdus_philomelos",
    scientific: "Turdus philomelos",
    family: "Turdidae",
    category: "birds",
    difficulty: "medium",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Turdus+philomelos",
    name: { nl: "Zanglijster", en: "Song thrush", fr: "Grive musicienne" },
    image: "assets/images/turdus_philomelos_birds.jpg",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Song_thrush_2.jpg/640px-Song_thrush_2.jpg"],
    description: {
      nl: "De zanglijster is kleiner dan de merel, met een bruine rug en gevlekte borst. Beroemd om zijn herhaald en gevarieerd gezang waarbij elke zin twee à vier keer wordt herhaald. Slaat slakkenhuizen open op een steen.",
      en: "The song thrush is smaller than the blackbird, with a brown back and spotted breast. Famous for its repeated and varied song where each phrase is sung two to four times. Smashes snail shells on a stone anvil.",
      fr: "La grive musicienne est plus petite que le merle, dos brun, poitrine tachetée. Célèbre pour son chant répété et varié, chaque phrase répétée deux à quatre fois. Casse les coquilles d'escargots sur une pierre."
    },
    habitat: { nl: "Bossen, tuinen, parken, heggen", en: "Woodland, gardens, parks, hedgerows", fr: "Forêts, jardins, parcs, haies" },
    size: { nl: "20–22 cm, 65–100 g", en: "20–22 cm, 65–100 g", fr: "20–22 cm, 65–100 g" },
    diet: { nl: "Slakken, wormen, bessen, insecten", en: "Snails, earthworms, berries, insects", fr: "Escargots, vers de terre, baies, insectes" },
    rarity: { nl: "Vrij algemeen", en: "Fairly common", fr: "Assez commun" },
    funfact: "Elke zanglijster heeft een vaste aanbeeldsteen die hij jaar na jaar gebruikt om slakkenhuizen op kapot te slaan — je vindt ze terug als de steen vol scherven ligt."
  },
  {
    id: "b_dendrocopos_major",
    scientific: "Dendrocopos major",
    family: "Picidae",
    category: "birds",
    difficulty: "easy",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Dendrocopos+major",
    name: { nl: "Grote bonte specht", en: "Great spotted woodpecker", fr: "Pic épeiche" },
    image: "assets/images/dendrocopos_major_fauna.jpg",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Dendrocopos_major_-_01.jpg/640px-Dendrocopos_major_-_01.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Dendrocopos_major_male_2.jpg/640px-Dendrocopos_major_male_2.jpg"],
    description: {
      nl: "De grote bonte specht is de meest voorkomende specht van België. Zwart-wit met een felrode onderstuit. Mannetjes hebben ook een rode nekband. Trommelt luid op dode takken en hakt holen in bomen voor zijn nest.",
      en: "The great spotted woodpecker is Belgium's most common woodpecker. Black and white with a bright red undertail. Males also have a red nape patch. Drums loudly on dead branches and excavates holes in trees.",
      fr: "Le pic épeiche est le pic le plus commun de Belgique. Noir et blanc, sous-caudal rouge vif. Les mâles ont aussi une nuque rouge. Tambourine bruyamment sur les branches mortes."
    },
    habitat: { nl: "Loofbossen, naaldbossen, parken, grote tuinen", en: "Deciduous and coniferous woodland, parks, large gardens", fr: "Forêts de feuillus et conifères, parcs, grands jardins" },
    size: { nl: "22–23 cm, 70–90 g", en: "22–23 cm, 70–90 g", fr: "22–23 cm, 70–90 g" },
    diet: { nl: "Insectenlarven, noten, zaden, jonge vogels", en: "Insect larvae, nuts, seeds, nestlings", fr: "Larves d'insectes, noix, graines, oisillons" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    funfact: "De tong van een specht is zo lang dat die om zijn hele schedel gewikkeld zit als hij hem niet gebruikt — een unieke anatomische aanpassing."
  },
  {
    id: "b_sitta_europaea",
    scientific: "Sitta europaea",
    family: "Sittidae",
    category: "birds",
    difficulty: "medium",
    iucn: "LC",
    xenoCanto: "https://xeno-canto.org/explore?query=Sitta+europaea",
    name: { nl: "Boomklever", en: "Eurasian nuthatch", fr: "Sittelle torchepot" },
    image: "assets/images/sitta_europaea_fauna.jpg",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Sitta-europaea-004.jpg/640px-Sitta-europaea-004.jpg"],
    description: {
      nl: "De boomklever is de enige Europese vogel die ook kopje-onder langs boomstammen naar beneden loopt. Blauwgrijs bovenlichaam, zwart oogstreepje, oranje-roestbruine flanken. Plakt zijn nestingang dicht met modder tot precies de juiste grootte.",
      en: "The nuthatch is Europe's only bird that regularly walks headfirst down tree trunks. Blue-grey upperparts, black eye-stripe, orange-buff flanks. Plasters nest entrance with mud to the perfect size.",
      fr: "La sittelle est le seul oiseau européen qui descend régulièrement les troncs la tête en bas. Dos bleu-gris, trait oculaire noir, flancs orange-roux. Colmate l'entrée du nid avec de la boue."
    },
    habitat: { nl: "Loofbossen met oude bomen, parken, tuinen", en: "Deciduous woodland with old trees, parks, gardens", fr: "Forêts de feuillus avec vieux arbres, parcs, jardins" },
    size: { nl: "14 cm, 20–25 g", en: "14 cm, 20–25 g", fr: "14 cm, 20–25 g" },
    diet: { nl: "Insecten, noten, zaden, bessen", en: "Insects, nuts, seeds, berries", fr: "Insectes, noix, graines, baies" },
    rarity: { nl: "Vrij algemeen", en: "Fairly common", fr: "Assez commun" },
    funfact: "De boomklever hakt noten in een barst in de boomschors en slaat ze open met krachtige snavelstoten — hij heeft een eigen 'notenkraker' in zijn territorium."
  },
  
  
  
  {
    id: "fl_cardamine_pratensis",
    scientific: "Cardamine pratensis",
    family: "Brassicaceae",
    category: "flora",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Pinksterbloem", en: "Cuckooflower", fr: "Cardamine des prés" },
    plantGrade: "dicot",
    image: "assets/images/cardamine_pratensis_fauna.jpg",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Cardamine_pratensis.jpg/640px-Cardamine_pratensis.jpg"],
    description: {
      nl: "De pinksterbloem kleurt natte weiden lila-roze in april en mei. Slanke plant met geveerde bladeren en vier paarse tot witte bloemblaadjes. Waardplant voor de vlinder oranjetipje. Bloeit rond Pinksteren, vandaar de naam.",
      en: "The cuckooflower turns wet meadows lilac-pink in April and May. Slender plant with pinnate leaves and four purple to white petals. Host plant for the orange-tip butterfly. Blooms around Whitsun, hence the name.",
      fr: "La cardamine des prés colore les prairies humides en lilas-rose en avril-mai. Plante svelte aux feuilles pennées. Plante-hôte de l'Aurore. Fleurit autour de la Pentecôte."
    },
    habitat: { nl: "Natte graslanden, slootkanten, beekoevers", en: "Wet meadows, ditch-sides, streambanks", fr: "Prairies humides, fossés, berges de ruisseaux" },
    size: { nl: "20–60 cm hoog", en: "20–60 cm tall", fr: "20–60 cm de hauteur" },
    diet: { nl: "Fotosynthese", en: "Photosynthesis", fr: "Photosynthèse" },
    rarity: { nl: "Vrij algemeen", en: "Fairly common", fr: "Assez commun" },
    funfact: "De oranjetipje (Anthocharis cardamines) legt zijn eitjes uitsluitend op pinksterbloem en andere kruisbloemigen — zonder deze plant kan de vlinder niet overleven."
  },
  
  {
    id: "fu_russula_cyanoxantha",
    scientific: "Russula cyanoxantha",
    family: "Russulaceae",
    category: "fungi",
    difficulty: "hard",
    iucn: "LC",
    name: { nl: "Regenboogrussula", en: "Charcoal burner", fr: "Russule charbonnière" },
    image: "assets/images/russula_cyanoxantha_fauna.jpg",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Russula_cyanoxantha_LC0083.jpg/640px-Russula_cyanoxantha_LC0083.jpg"],
    description: {
      nl: "De regenboogrussula is een van de meest voorkomende en eetbare russulazwammen. Hoed veelkleurig — paars, groen, violet — vandaar de naam. Witte kieuwen die opmerkelijk soepel zijn en niet afbreken. Groeit in loofbossen.",
      en: "The charcoal burner is one of the most common and edible Russula species. Cap multicoloured — purple, green, violet — hence the name. White gills that are notably flexible and do not crumble. Grows in deciduous woodland.",
      fr: "La russule charbonnière est l'une des russules les plus communes et comestibles. Chapeau multicolore — violet, vert, violet. Lames blanches flexibles, non friables. Pousse en forêts de feuillus."
    },
    habitat: { nl: "Loofbossen (eik, beuk, haagbeuk)", en: "Deciduous woodland (oak, beech, hornbeam)", fr: "Forêts de feuillus (chêne, hêtre, charme)" },
    size: { nl: "Hoed 6–15 cm breed", en: "Cap 6–15 cm wide", fr: "Chapeau 6–15 cm de large" },
    diet: { nl: "Mycorrhiza", en: "Mycorrhizal", fr: "Mycorhizien" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    funfact: "De kieuwen van de regenboogrussula zijn de enige bij russulazwammen die zacht en buigzaam zijn — je kunt ze heen en weer buigen zonder ze te breken, een uniek kenmerk."
  },
  {
    id: "fu_hypholoma_fasciculare",
    scientific: "Hypholoma fasciculare",
    family: "Hymenogastraceae",
    category: "fungi",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Zwavelkopje", en: "Sulphur tuft", fr: "Hypholome en touffes" },
    image: "assets/images/hypholoma_fasciculare_fauna.jpg",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Hypholoma_fasciculare_LC0014.jpg/640px-Hypholoma_fasciculare_LC0014.jpg"],
    description: {
      nl: "Het zwavelkopje groeit het hele jaar door in grote trossen op dood loofhout. Felgele tot okerkleurige hoed met groenachtige kieuwen op rijpere exemplaren. Giftig — bitter van smaak. Een van de meest voorkomende paddenstoelen van Europa.",
      en: "Sulphur tuft grows year-round in large clusters on dead deciduous wood. Bright yellow to ochre cap with greenish gills on mature specimens. Poisonous — bitter tasting. One of Europe's most common fungi.",
      fr: "L'hypholome en touffes pousse toute l'année en grosses touffes sur bois mort de feuillus. Chapeau jaune vif à ochracé, lames verdâtres à maturité. Vénéneux — goût amer."
    },
    habitat: { nl: "Dood loofhout (eik, beuk, els)", en: "Dead deciduous wood (oak, beech, alder)", fr: "Bois mort de feuillus (chêne, hêtre, aulne)" },
    size: { nl: "Hoed 2–7 cm breed", en: "Cap 2–7 cm wide", fr: "Chapeau 2–7 cm de large" },
    diet: { nl: "Saprotroof", en: "Saprotrophic", fr: "Saprotrophe" },
    rarity: { nl: "Zeer algemeen", en: "Very common", fr: "Très commun" },
    funfact: "Zwavelkopjes worden vaak verward met eetbare honingzwammen (Armillaria) — een gevaarlijke vergissing. Proef altijd: de bittere smaak van het zwavelkopje is onmiskenbaar."
  },
  {
    id: "i_papilio_machaon",
    scientific: "Papilio machaon",
    family: "Papilionidae",
    category: "insects",
    difficulty: "hard",
    iucn: "NT",
    name: { nl: "Koninginnepage", en: "Swallowtail butterfly", fr: "Machaon" },
    image: "assets/images/papilio_machaon_insects.jpg",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Papilio_machaon_04.jpg/640px-Papilio_machaon_04.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Papilio_machaon_caterpillar.jpg/640px-Papilio_machaon_caterpillar.jpg"],
    description: {
      nl: "De koninginnepage is de grootste dagvlinder van België. Geel met zwarte aders en opvallende staartaanhangsels. De felgekleurde rups eet schermbloemigen. Steeds zeldzamer in België door habitatverlies.",
      en: "The swallowtail is Belgium's largest day butterfly. Yellow with black veins and striking tail extensions. The brightly coloured caterpillar feeds on umbellifers. Increasingly rare in Belgium due to habitat loss.",
      fr: "Le machaon est le plus grand papillon de jour de Belgique. Jaune à nervures noires et queues frappantes. La chenille colorée mange des ombellifères. De plus en plus rare en Belgique."
    },
    habitat: { nl: "Bloemrijke graslanden, duinen, tuinen, moerassen", en: "Flower-rich grassland, dunes, gardens, marshes", fr: "Prairies fleuries, dunes, jardins, marais" },
    size: { nl: "Vleugelspanwijdte 70–80 mm", en: "Wingspan 70–80 mm", fr: "Envergure 70–80 mm" },
    diet: { nl: "Schermbloemigen (rups), nectar (vlinder)", en: "Umbellifers (caterpillar), nectar (adult)", fr: "Ombellifères (chenille), nectar (adulte)" },
    rarity: { nl: "Zeldzaam en achteruitgaand", en: "Rare and declining", fr: "Rare et en déclin" },
    funfact: "De rups van de koninginnepage kan een oranje geurorgaan (osmeterium) uitsteken dat naar rot ruikt om vijanden af te schrikken — een meesterlijke verdedigingsstrategie."
  },
  {
    id: "i_vanessa_cardui",
    scientific: "Vanessa cardui",
    family: "Nymphalidae",
    category: "insects",
    difficulty: "medium",
    iucn: "LC",
    name: { nl: "Distelvlinder", en: "Painted lady", fr: "Belle-dame" },
    image: "assets/images/vanessa_cardui_insects.jpg",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Vanessa_cardui_Luc_Viatour.jpg/640px-Vanessa_cardui_Luc_Viatour.jpg"],
    description: {
      nl: "De distelvlinder is roestoranje met zwarte en witte tekening. Een van de meest verspreide vlinders ter wereld — van Afrika tot de Arctis. Trekt elk jaar van Sub-Sahara Afrika naar Noord-Europa, een reis van meer dan 12.000 km.",
      en: "The painted lady is rusty-orange with black and white markings. One of the world's most widespread butterflies — from Africa to the Arctic. Migrates annually from Sub-Saharan Africa to Northern Europe, a journey of over 12,000 km.",
      fr: "La belle-dame est orange rouillé à taches noires et blanches. Un des papillons les plus répandus au monde. Migre annuellement de l'Afrique sub-saharienne vers l'Europe du Nord."
    },
    habitat: { nl: "Open terrein: akkers, heidevelden, tuinen, bloemrijke bermen", en: "Open areas: farmland, heathland, gardens, flower-rich verges", fr: "Espaces ouverts: champs, landes, jardins, bords de routes fleuris" },
    size: { nl: "Vleugelspanwijdte 50–60 mm", en: "Wingspan 50–60 mm", fr: "Envergure 50–60 mm" },
    diet: { nl: "Distels (rups), nectar van veel soorten (vlinder)", en: "Thistles (caterpillar), nectar of many species (adult)", fr: "Chardons (chenille), nectar de nombreuses espèces (adulte)" },
    rarity: { nl: "Trekvlinder, wisselend talrijk", en: "Migratory, variable abundance", fr: "Migrateur, abondance variable" },
    funfact: "De trek van de distelvlinder van West-Afrika naar IJsland en terug — meer dan 12.000 km — is de langste bekende vlindertrek ter wereld, verdeeld over meerdere generaties."
  },
  
  
 
  ,{
    id: "a_cichorium_intybus", scientific: "Cichorium intybus",
    family: "Asteraceae", category: "agriculture", difficulty: "medium",
    iucn: "LC",
    plantGrade: "dicot",
    iucn: "LC",
    name: { nl: "Cichorei", en: "Chicory", fr: "Chicorée sauvage" },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Cichorium_intybus_003.JPG/640px-Cichorium_intybus_003.JPG",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Cichorium_intybus_003.JPG/640px-Cichorium_intybus_003.JPG"],
    description: { nl: "Cichorei is een inheemse plant die in België al eeuwenlang als landbouwgewas geteeld wordt. De wortels worden geroosterd als koffievervanger of toevoeging. Wilde cichorei heeft fraaie blauwe bloemen en groeit langs wegranden.", en: "Chicory is a native plant cultivated in Belgium for centuries. Its roots are roasted as a coffee substitute. Wild chicory has beautiful blue flowers and grows along roadsides.", fr: "La chicorée est une plante indigène cultivée en Belgique depuis des siècles. Ses racines sont torréfiées en succédané de café. La chicorée sauvage a de belles fleurs bleues." },
    habitat: { nl: "Akkers, wegranden, kalkgraslanden", en: "Fields, roadsides, chalk grassland", fr: "Champs, bords de routes, prairies calcaires" },
    size: { nl: "30–120 cm hoog", en: "30–120 cm tall", fr: "30–120 cm de hauteur" },
    diet: { nl: "Fotosynthese", en: "Photosynthesis", fr: "Photosynthèse" },
    rarity: { nl: "Algemeen", en: "Common", fr: "Commun" },
    funfact: "België is 's werelds grootste producent van cichorei-inuline. De Belgische cichoreiwortel levert een prebiotische vezel die in duizenden voedingsproducten wereldwijd verwerkt wordt."
  },{
    id: "a_cichorium_endivia", scientific: "Cichorium endivia",
    family: "Asteraceae", category: "agriculture", difficulty: "medium",
    iucn: "LC",
    plantGrade: "dicot",
    iucn: "LC",
    name: { nl: "Witlof (Brussels loof)", en: "Belgian endive", fr: "Endive (chicon belge)" },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Endives_chicons.jpg/640px-Endives_chicons.jpg",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Endives_chicons.jpg/640px-Endives_chicons.jpg"],
    description: { nl: "Witlof is een Belgische uitvinding uit de 19e eeuw. Door de cichoreiwortel in het donker te laten groeien ontstaat de witte, licht bittere krop. België is de geboorteplaats van dit groente en produceert er jaarlijks honderden tonnen van.", en: "Belgian endive is a 19th-century Belgian invention. By forcing chicory roots in the dark, the white, mildly bitter head develops. Belgium is the birthplace of this vegetable and produces hundreds of tonnes annually.", fr: "L'endive est une invention belge du XIXe siècle. En forçant les racines de chicorée dans l'obscurité, on obtient le chicon blanc, légèrement amer. La Belgique est le berceau de ce légume." },
    habitat: { nl: "Akkers (cultivar)", en: "Agricultural fields (cultivar)", fr: "Champs agricoles (cultivar)" },
    size: { nl: "15–20 cm (krop)", en: "15–20 cm (head)", fr: "15–20 cm (chicon)" },
    diet: { nl: "Fotosynthese", en: "Photosynthesis", fr: "Photosynthèse" },
    rarity: { nl: "Gecultiveerd, algemeen", en: "Cultivated, common", fr: "Cultivé, commun" },
    funfact: "Witlof werd per ongeluk ontdekt door een boer die cichoreiwortel in zijn kelder liet vergeten — hij vond weken later witte blaadjes die uitgegroeid waren tot een heerlijke groente."
  },{
    id: "a_linum_usitatissimum", scientific: "Linum usitatissimum",
    family: "Linaceae", category: "agriculture", difficulty: "hard",
    iucn: "LC",
    plantGrade: "dicot",
    iucn: "LC",
    name: { nl: "Vlas", en: "Flax / Linseed", fr: "Lin cultivé" },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Linum_usitatissimum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-088.jpg/640px-Linum_usitatissimum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-088.jpg",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Linum_usitatissimum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-088.jpg/640px-Linum_usitatissimum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-088.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Linum_usitatissimum_field.jpg/640px-Linum_usitatissimum_field.jpg"
    ],
    description: { nl: "Vlas is een van de oudste landbouwgewassen ter wereld en de historische basis van de Vlaamse textielindustrie. De blauwe bloemen kleuren de akkers in juni. De vlasvezels worden gebruikt voor linnen, vlasseeds voor lijnolie en voeding.", en: "Flax is one of the oldest crops in the world and the historical basis of Flemish textile industry. Blue flowers colour the fields in June. Flax fibres make linen; seeds yield linseed oil and food.", fr: "Le lin est l'une des plus anciennes plantes cultivées et la base historique de l'industrie textile flamande. Les fleurs bleues colorent les champs en juin. Les fibres font du lin; les graines de l'huile." },
    habitat: { nl: "Akkers, vooral in West-Vlaanderen", en: "Fields, especially in West Flanders", fr: "Champs, surtout en Flandre occidentale" },
    size: { nl: "30–90 cm hoog", en: "30–90 cm tall", fr: "30–90 cm de hauteur" },
    diet: { nl: "Fotosynthese", en: "Photosynthesis", fr: "Photosynthèse" },
    rarity: { nl: "Gecultiveerd", en: "Cultivated", fr: "Cultivé" },
    funfact: "Vlaams linnen was eeuwenlang de meest gewaardeerde stof in Europa — Vlaamse vlasweefsels werden zelfs naar het hof van de Egyptische farao's en de Chinese keizer geëxporteerd."
  },{
    id: "a_triticum_aestivum", scientific: "Triticum aestivum",
    family: "Poaceae", category: "agriculture", difficulty: "medium",
    iucn: "LC",
    plantGrade: "monocot",
    iucn: "LC",
    name: { nl: "Broodtarwe", en: "Common wheat", fr: "Blé tendre" },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Wheat_field_in_Bia%C5%82ka.jpg/640px-Wheat_field_in_Bia%C5%82ka.jpg",
    images: ["https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Wheat_field_in_Bia%C5%82ka.jpg/640px-Wheat_field_in_Bia%C5%82ka.jpg"],
    description: { nl: "Broodtarwe is het meest verbouwde gewas in België. De gouden aren kleuren de velden in juli. Het graan wordt gebruikt voor brood, pasta, bier en talloze andere producten. België produceert ruim 1,5 miljoen ton per jaar.", en: "Common wheat is Belgium's most widely grown crop. Golden ears colour the fields in July. Used for bread, pasta, beer and countless other products. Belgium produces over 1.5 million tonnes per year.", fr: "Le blé tendre est la culture la plus répandue en Belgique. Les épis dorés colorent les champs en juillet. Utilisé pour le pain, les pâtes, la bière. La Belgique produit plus de 1,5 million de tonnes par an." },
    habitat: { nl: "Akkers, landbouwgrond", en: "Arable fields, farmland", fr: "Champs arables, terres agricoles" },
    size: { nl: "60–120 cm hoog", en: "60–120 cm tall", fr: "60–120 cm de hauteur" },
    diet: { nl: "Fotosynthese", en: "Photosynthesis", fr: "Photosynthèse" },
    rarity: { nl: "Gecultiveerd, zeer algemeen", en: "Cultivated, very common", fr: "Cultivé, très commun" },
    funfact: "Tarwe is het resultaat van duizenden jaren van selectie door mensen — het heeft geen wilde voorouder meer en kan niet overleven zonder menselijke hulp bij de zaadverspreiding."
  }
];