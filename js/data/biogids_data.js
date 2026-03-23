/**
 * BioGids: Interactieve biologische kenniskaarten
 * 15 onderwerpen met volledige trilingual content, vergelijkingstabellen, en mini-quizzes
 */

window.bioguideData = [
    // ────────────────────────────────────────────────────────────────────────
    // 1. TAXONOMIE (FOUNDATION)
    // ────────────────────────────────────────────────────────────────────────
    {
        id: "taxonomy_pyramid",
        icon: "🔗",
        color: "#4a90e2",
        hue: 220,
        name: {
            nl: "Taxonomie & Classificatie",
            en: "Taxonomy & Classification",
            fr: "Taxonomie & Classification"
        },
        summary: {
            nl: "De biologische classificatiesysteem: van domein tot soort",
            en: "The biological classification system: from domain to species",
            fr: "Le système de classification biologique: du domaine à l'espèce"
        },
        content: {
            nl: "Taxonomie is het systeem dat biologen gebruiken om alle levende organismen in te delen. Het werkt als een hiërarchische ordeningssysteem, van zeer breed (alles met leven) tot heel specifiek (één soort). Deze piramide werd voor het eerst voorgesteld door Carl Linnaeus in de 18e eeuw. De classificatie helpt wetenschappers de evolutionaire verwantschappen begrijpen en vereenvoudigt de communicatie over levende dingen. Elke stap omlaag in de piramide maakt het dichter en specificker. Bijvoorbeeld: een gewone specht (Dendrocopos major) behoort tot het domein Eukarya, het rijk Animalia, de stam Chordata, de klasse Aves, de orde Piciformes, de familie Picidae, het geslacht Dendrocopos, en de soort major.",
            en: "Taxonomy is the system biologists use to classify all living organisms. It works as a hierarchical ordering system, from very broad (everything living) to extremely specific (one species). This pyramid was first proposed by Carl Linnaeus in the 18th century. The classification helps scientists understand evolutionary relationships and simplifies communication about living things. Each step down in the pyramid becomes tighter and more specific. For example, the great spotted woodpecker (Dendrocopos major) belongs to domain Eukarya, kingdom Animalia, phylum Chordata, class Aves, order Piciformes, family Picidae, genus Dendrocopos, and species major.",
            fr: "La taxonomie est le système utilisé par les biologistes pour classifier tous les organismes vivants. Elle fonctionne comme un système de classement hiérarchique, du très général (tout ce qui est vivant) au très spécifique (une seule espèce). Cette pyramide a été d'abord proposée par Carl Linnaeus au 18e siècle. La classification aide les scientifiques à comprendre les relations évolutives et simplifie la communication sur les êtres vivants. Chaque étape vers le bas devient plus étroite et plus spécifique."
        },
        comparison: [
            { level: "Domein", example: "Eukarya", scope: "Alle organismen met celkernen" },
            { level: "Rijk", example: "Animalia (dieren)", scope: "Alle heterotrofe organismen" },
            { level: "Stam", example: "Chordata", scope: "Dieren met ruggengraat of notochord" },
            { level: "Klasse", example: "Aves (vogels)", scope: "Gevederde, warmbloedige dieren" },
            { level: "Orde", example: "Passeriformes", scope: "Zangvogels" },
            { level: "Familie", example: "Paridae", scope: "Mezen" },
            { level: "Geslacht", example: "Parus", scope: "Grijze mezen" },
            { level: "Soort", example: "P. major", scope: "Koolmees (specifiek)" }
        ],
        relatedSpecies: ["gen_parus_major", "gen_accipiter_nisus", "gen_plantago_major"],
        quiz: [
            {
                question: {
                    nl: "Welke taxonomische rang is het MEEST specifiek?",
                    en: "Which taxonomic rank is MOST specific?",
                    fr: "Quel rang taxonomique est le PLUS spécifique?"
                },
                correct: 2,
                options: [
                    { nl: "Familie", en: "Family", fr: "Famille" },
                    { nl: "Geslacht", en: "Genus", fr: "Genre" },
                    { nl: "Soort", en: "Species", fr: "Espèce" }
                ]
            },
            {
                question: {
                    nl: "Hoeveel verschillende taxonomische rangen zijn er (van domein tot soort)?",
                    en: "How many different taxonomic ranks exist (from domain to species)?",
                    fr: "Combien de rangs taxonomiques différents existent (du domaine à l'espèce)?"
                },
                correct: 1,
                options: [
                    { nl: "4", en: "4", fr: "4" },
                    { nl: "8", en: "8", fr: "8" },
                    { nl: "12", en: "12", fr: "12" }
                ]
            },
            {
                question: {
                    nl: "Wat is het binominale naamstellingsysteem (twee-woordnaam)?",
                    en: "What does binomial nomenclature describe?",
                    fr: "Que décrit la nomenclature binominale?"
                },
                correct: 0,
                options: [
                    { nl: "Geslacht + soort (bijv. Parus major)", en: "Genus + species (e.g. Parus major)", fr: "Genre + espèce (p.ex. Parus major)" },
                    { nl: "Familie + geslacht", en: "Family + genus", fr: "Famille + genre" },
                    { nl: "Domein + rijk", en: "Domain + kingdom", fr: "Domaine + règne" }
                ]
            }
        ]
    },

    // ────────────────────────────────────────────────────────────────────────
    // 2. IUCN RODE LIJST
    // ────────────────────────────────────────────────────────────────────────
    {
        id: "iucn_redlist",
        icon: "🚨",
        color: "#e74c3c",
        hue: 0,
        name: {
            nl: "IUCN Rode Lijst: Bedreigingsstatus",
            en: "IUCN Red List: Conservation Status",
            fr: "Liste Rouge IUCN: Statut de Conservation"
        },
        summary: {
            nl: "Hoe ernstig is een soort bedreigd?",
            en: "How seriously is a species threatened?",
            fr: "Combien une espèce est-elle menacée?"
        },
        content: {
            nl: "De IUCN (International Union for Conservation of Nature) Rode Lijst is een wereldwijde database die de bedreigingsstatus van soorten registreert. Biologen evalueren populatiegrootte, leefgebied, en bedreigingsfactoren om elke soort in te delen. Dit helpt conservatieprogramma's prioriteiten te stellen. Er zijn negen categorieën, van 'Niet Geëvalueerd' tot 'Uitgestorven', maar wij concentreren ons op de vijf meest belangrijke. LC (Least Concern) betekent stabiele populaties. VU (Vulnerable) betekent dat verdwijning waarschijnlijk is zonder bescherming. EN (Endangered) betekent zeer ernstige bedreigingen. CR (Critically Endangered) zijn soorten aan de rand van uitsterving. EX (Extinct) betekent definitief weg. In België hebben veel vogels en insecten VU status vanwege habitatverlies en klimaatverandering.",
            en: "The IUCN (International Union for Conservation of Nature) Red List is a global database that records the conservation status of species. Biologists evaluate population size, habitat, and threat factors to classify each species. This helps conservation programs prioritize efforts. There are nine categories, from 'Not Evaluated' to 'Extinct', but we focus on the five most important. LC (Least Concern) means stable populations. VU (Vulnerable) means extinction is likely without protection. EN (Endangered) means severe threats. CR (Critically Endangered) are species on the brink. EX (Extinct) means gone forever. In Belgium, many birds and insects have VU status due to habitat loss and climate change.",
            fr: "La Liste Rouge IUCN est une base de données mondiale qui enregistre l'état de conservation des espèces. Les biologistes évaluent la taille des populations, l'habitat et les menaces pour classifier chaque espèce. Cela aide les programmes de conservation à établir les priorités. Il y a neuf catégories, de 'Non Évaluée' à 'Éteinte', mais nous nous concentrons sur les cinq plus importantes."
        },
        comparison: [
            { acronym: "LC", status: "Least Concern", nl: "Niet in Gevaar", threat: "Minimaal", color: "groen" },
            { acronym: "NT", status: "Near Threatened", nl: "Bijna Bedreigd", threat: "Laag", color: "geel" },
            { acronym: "VU", status: "Vulnerable", nl: "Kwetsbaar", threat: "Gemiddeld", color: "oranje" },
            { acronym: "EN", status: "Endangered", nl: "Ernstig Bedreigd", threat: "Hoog", color: "rood" },
            { acronym: "CR", status: "Critically Endangered", nl: "Ernstig in Gevaar", threat: "Kritiek", color: "donkerrood" }
        ],
        relatedSpecies: ["gen_accipiter_nisus", "gen_buteo_buteo", "gen_falco_peregrinus"],
        quiz: [
            {
                question: {
                    nl: "Welke IUCN status betekent 'stabiele populatie, geen zorgen'?",
                    en: "Which IUCN status means 'stable population, no concerns'?",
                    fr: "Quel statut IUCN signifie 'population stable, pas de préoccupations'?"
                },
                correct: 0,
                options: [
                    { nl: "LC (Least Concern)", en: "LC (Least Concern)", fr: "LC (Least Concern)" },
                    { nl: "NT (Near Threatened)", en: "NT (Near Threatened)", fr: "NT (Near Threatened)" },
                    { nl: "VU (Vulnerable)", en: "VU (Vulnerable)", fr: "VU (Vulnerable)" }
                ]
            },
            {
                question: {
                    nl: "CR (Critically Endangered) betekent...",
                    en: "CR (Critically Endangered) means...",
                    fr: "CR (En Danger Critique) signifie..."
                },
                correct: 2,
                options: [
                    { nl: "De soort is al uitgestorven", en: "The species is already extinct", fr: "L'espèce est déjà éteinte" },
                    { nl: "De soort has laag aantal bedreigingen", en: "The species has low threats", fr: "L'espèce a peu de menaces" },
                    { nl: "De soort staat op de rand van uitsterving", en: "Species on brink of extinction", fr: "L'espèce au bord de l'extinction" }
                ]
            },
            {
                question: {
                    nl: "Wat is de kleuren-code voor 'Vulnerable' op de IUCN Rode Lijst?",
                    en: "What color represents 'Vulnerable' on the IUCN Red List?",
                    fr: "Quelle couleur représente 'Vulnérable' sur la Liste Rouge IUCN?"
                },
                correct: 1,
                options: [
                    { nl: "Rood", en: "Red", fr: "Rouge" },
                    { nl: "Oranje", en: "Orange", fr: "Orange" },
                    { nl: "Geel", en: "Yellow", fr: "Jaune" }
                ]
            }
        ]
    },

    // ────────────────────────────────────────────────────────────────────────
    // 3. MONOCOTYL VS. DICOTYL
    // ────────────────────────────────────────────────────────────────────────
    {
        id: "monocot_vs_dicot",
        icon: "🌿",
        color: "#27ae60",
        hue: 120,
        name: {
            nl: "Monocotyledonae vs. Dicotyledonae",
            en: "Monocots vs. Dicots",
            fr: "Monocotylédones vs. Dicotylédones"
        },
        summary: {
            nl: "De twee grote groepen zaadplanten en hun verschillen",
            en: "The two major groups of flowering plants and their differences",
            fr: "Les deux principaux groupes de plantes à fleurs et leurs différences"
        },
        content: {
            nl: "Zaadplanten (Spermatophyta) zijn onderverdeeld in twee hoofdgroepen op basis van het aantal zaadbladen (cotylen) dat het embryo heeft. Dit fundamentele verschil bepaalt veel andere kenmerken van de plant. Monocotyledonae ('mono' = één) hebben één zaadblad en zijn typisch grasachtig. Dicotyledonae ('di' = twee) hebben twee zaadbladen en zijn meestal bomen, struiken en kruidachtige bloemen. De twee groepen verschillen in bijna elk aspect: bladeren, bloemen, wortels, en het vaatweefsel-patroon. Dit is niet alleen botanische trivia—het beïnvloedt hoe we planten herkennen, hoe ze groeien, hoe we ze kweken, en zelfs hoe we onkruidbestrijders ontwerpen (veel werken beter op één groep dan de ander).",
            en: "Seed plants (Spermatophyta) are divided into two main groups based on the number of seed leaves (cotyledon) the embryo has. This fundamental difference determines many other plant characteristics. Monocots ('mono' = one) have one seed leaf and are typically grass-like. Dicots ('di' = two) have two seed leaves and are usually trees, shrubs, and herbaceous flowers. The groups differ in almost every aspect: leaves, flowers, roots, and vascular tissue patterns. This is not mere botanical trivia—it affects how we identify plants, how they grow, how we cultivate them, and even how we design herbicides.",
            fr: "Les plantes à graines (Spermatophyta) sont divisées en deux groupes principaux selon le nombre de feuilles séminales (cotylédons) que l'embryon a. Cette différence fondamentale détermine de nombreuses autres caractéristiques de la plante."
        },
        comparison: [
            { feature: "Zaadbladen", monocot: "1 (unilobé)", dicot: "2 (bilobé)" },
            { feature: "Bladnerven", monocot: "Evenwijdig/parallel", dicot: "Netachtig/pinnaat" },
            { feature: "Bloemblaadjes", monocot: "In 3-vouden (3, 6, 9...)", dicot: "In 4-5-vouden (4, 5, 8, 10...)" },
            { feature: "Wortelstelsel", monocot: "Vezelig (bundels)", dicot: "Penwortels met zijwortels" },
            { feature: "Vaatbundels", monocot: "Verspreid in stengel", dicot: "In ring in stengel" },
            { feature: "Voorbeelden", monocot: "Grassen, granen, lelies, orchideeën", dicot: "Bomen, bloemen, groenten" }
        ],
        relatedSpecies: ["gen_plantago_major", "gen_hedera_helix", "gen_silene_flos_cuculi"],
        quiz: [
            {
                question: {
                    nl: "Hoeveel zaadbladen heeft een monocot embryo?",
                    en: "How many seed leaves does a monocot embryo have?",
                    fr: "Combien de feuilles séminales un embryon de monocot a-t-il?"
                },
                correct: 0,
                options: [
                    { nl: "1", en: "1", fr: "1" },
                    { nl: "2", en: "2", fr: "2" },
                    { nl: "3", en: "3", fr: "3" }
                ]
            },
            {
                question: {
                    nl: "Welke blad-nervatuurpatroon hebben dicots?",
                    en: "What leaf vein pattern do dicots have?",
                    fr: "Quel motif de nervures foliaires les dicots ont-ils?"
                },
                correct: 1,
                options: [
                    { nl: "Evenwijdig", en: "Parallel", fr: "Parallèle" },
                    { nl: "Netachtig", en: "Netted/Pinnate", fr: "Réticulé" },
                    { nl: "Spiraal", en: "Spiral", fr: "Spiral" }
                ]
            },
            {
                question: {
                    nl: "Hoeveel bloemblaadjes hebben monocots meestal?",
                    en: "How many petals do monocots typically have?",
                    fr: "Combien de pétales les monocots ont-ils généralement?"
                },
                correct: 0,
                options: [
                    { nl: "In 3-vouden (3, 6, 9...)", en: "In 3-multiples (3, 6, 9...)", fr: "En multiples de 3 (3, 6, 9...)" },
                    { nl: "In 4-5-vouden", en: "In 4-5-multiples", fr: "En multiples de 4-5" },
                    { nl: "Geen specifiek patroon", en: "No specific pattern", fr: "Pas de motif spécifique" }
                ]
            }
        ]
    },

    // ────────────────────────────────────────────────────────────────────────
    // 4. ANATOMIE & MORFOLOGIE
    // ────────────────────────────────────────────────────────────────────────
    {
        id: "anatomy_morphology",
        icon: "🔬",
        color: "#8e44ad",
        hue: 280,
        name: {
            nl: "Anatomie & Morfologie: Lichaamsstructuren",
            en: "Anatomy & Morphology: Body Structures",
            fr: "Anatomie & Morphologie: Structures Corporelles"
        },
        summary: {
            nl: "Hoe dieren en planten inwendig en uitwendig gebouwd zijn",
            en: "How animals and plants are built internally and externally",
            fr: "Comment les animaux et les plantes sont construits intérieurement et extérieurement"
        },
        content: {
            nl: "Morfologie is de studie van de externe vorm en structuur; anatomie is de studie van de inwendige structuur. Voor dieren omvat anatomie botten, spieren, organen, bloedvaten, en zenuwstelsels. Voor vogels zijn speciale aanpassingen belangrijk: holle botten, sterke vleugelspieren, efficiënte longen voor vlucht. Insecten hebben een heel ander systeem: geen ruggengraat, maar een chitine-exoskelet, zes poten, en drie lichaamsdelen (kop, borst, achterlijf). Voor planten gaat het om blad-, bloem-, en wortelsstructuur. Bladeren hebben een opperhuid (epidermis), groen weefsel (mesofyl), en transportkanalen (xyleem/floëem). Bloemen hebben kelkbladen, bloemblaadjes, meeldraden (mannelijk), en stampers (vrouwelijk). Wortels kunnen diep en dun (penwortel) of oppervlakkig en vertakt (vezelwortel) zijn. Paddenstoelen hebben geen traditionele anatomie als planten—ze bestaan uit draden (hyphen) die zich samenballen tot vruchtlichamen.",
            en: "Morphology is the study of external form and structure; anatomy is the study of internal structure. For animals, anatomy includes bones, muscles, organs, blood vessels, and nervous systems. For birds, special adaptations matter: hollow bones, strong flight muscles, efficient lungs for flight. Insects have a completely different system: no backbone, but chitinous exoskeleton, six legs, and three body parts (head, thorax, abdomen). For plants, it's about leaf, flower, and root structure. Leaves have epidermis, green tissue (mesophyll), and transport channels (xylem/phloem). Flowers have sepals, petals, stamens (male), and pistils (female). Roots can be deep and thin (taproot) or shallow and branched (fibrous root). Fungi lack traditional anatomy like plants—they're made of threads (hyphae) bundled into fruiting bodies.",
            fr: "La morphologie est l'étude de la forme et de la structure externes; l'anatomie est l'étude de la structure interne."
        },
        comparison: [
            { group: "Oiseaux", external: "Plumes, bec, ailes, pattes", internal: "Os creux, muscles de vol, coeur 4 chambres" },
            { group: "Insectes", external: "Exosquelette, 6 pattes, 3 segments", internal: "Tube digestif, cœur linéaire, ganglions nerveux" },
            { group: "Plantes", external: "Feuilles, tiges, racines, fleurs", internal: "Xylème/phloème, mésophylle, stomates" },
            { group: "Champignons", external: "Chapeau, lamelles/pores, pied", internal: "Hyphes, parois de chitine" }
        ],
        relatedSpecies: ["gen_parus_major", "apis_mellifera", "gen_plantago_major"],
        quiz: [
            {
                question: {
                    nl: "Welk weefsel voert water en mineralen van wortels naar bladeren in planten?",
                    en: "Which plant tissue transports water and minerals from roots to leaves?",
                    fr: "Quel tissu végétal transporte l'eau et les minéraux des racines aux feuilles?"
                },
                correct: 0,
                options: [
                    { nl: "Xyleem", en: "Xylem", fr: "Xylème" },
                    { nl: "Floëem", en: "Phloem", fr: "Phloème" },
                    { nl: "Epidermis", en: "Epidermis", fr: "Épiderme" }
                ]
            },
            {
                question: {
                    nl: "Hoeveel poten hebben insecten?",
                    en: "How many legs do insects have?",
                    fr: "Combien de pattes les insectes ont-ils?"
                },
                correct: 0,
                options: [
                    { nl: "6", en: "6", fr: "6" },
                    { nl: "8", en: "8", fr: "8" },
                    { nl: "10", en: "10", fr: "10" }
                ]
            },
            {
                question: {
                    nl: "Wat is de voornaamste functie van vogelplumage?",
                    en: "What is a bird's primary feather function?",
                    fr: "Quelle est la fonction principale des plumes d'oiseau?"
                },
                correct: 1,
                options: [
                    { nl: "Voeding opnemen", en: "Food intake", fr: "Prise de nourriture" },
                    { nl: "Vlucht & isolatie", en: "Flight & insulation", fr: "Vol & isolation" },
                    { nl: "Voortplanting", en: "Reproduction", fr: "Reproduction" }
                ]
            }
        ]
    },

    // ────────────────────────────────────────────────────────────────────────
    // 5. FOTOSYNTHESE
    // ────────────────────────────────────────────────────────────────────────
    {
        id: "photosynthesis",
        icon: "☀️",
        color: "#f39c12",
        hue: 40,
        name: {
            nl: "Fotosynthese: Hoe Planten Energie Maken",
            en: "Photosynthesis: How Plants Make Energy",
            fr: "Photosynthèse: Comment les Plantes Produisent de l'Énergie"
        },
        summary: {
            nl: "Licht + water + CO₂ = suiker + zuurstof",
            en: "Light + water + CO₂ = sugar + oxygen",
            fr: "Lumière + eau + CO₂ = sucre + oxygène"
        },
        content: {
            nl: "Fotosynthese is het proces waarbij planten zonlicht omzetten in chemische energie (suiker) om mee te groeien. Dit is waarschijnlijk het belangrijkste biochemische proces op Aarde—het voorziet bijna alles van zuurstof en voedsel. Het vindt plaats in groene cellen, vooral in bladeren, in speciale organellen genaamd chloroplasten. De basisformule is eenvoudig: 6CO₂ + 6H₂O + zonlicht = C₆H₁₂O₆ (glucose) + 6O₂. Dit gebeurt in twee fasen. De lichtafhankelijke reacties gebruiken zonnenergie om water op te breken en zuurstof vrij te stellen. Dit gebeurt in de dag, en daarom zien we zuurstofbellen in onderwater-waterplanten in het zonlicht. De lichtafhankelijke reacties produceren ook ATP en NADPH—energiemoleculen. Deze energie wordt vervolgens gebruikt in de lichtafhankelijke reacties (ook genaamd Calvin-cyclus) om CO₂ om te zetten in glucose. Dit kan ook 's nachts gebeuren—vandaar de naam. In België en veel andere plaatsen zorgt fotosynthese van bossen, weiden, en waterplanten voor schoon water, schone lucht, en voedsel.",
            en: "Photosynthesis is the process where plants convert sunlight into chemical energy (sugar) to grow. This is probably Earth's most important biochemical process—it supplies almost everything with oxygen and food. It occurs in green cells, especially in leaves, in special organelles called chloroplasts. The basic formula is simple: 6CO₂ + 6H₂O + sunlight = C₆H₁₂O₆ (glucose) + 6O₂. This happens in two stages. Light-dependent reactions use sun energy to break water and release oxygen. This happens during the day, which is why we see oxygen bubbles in underwater plants in sunlight. Light-dependent reactions also produce ATP and NADPH—energy molecules. This energy is then used in light-independent reactions (also called Calvin cycle) to convert CO₂ into glucose. This can happen at night too—hence the name. In Belgium and many places, photosynthesis from forests, meadows, and aquatic plants provides clean water, clean air, and food.",
            fr: "La photosynthèse est le processus où les plantes convertissent la lumière du soleil en énergie chimique (sucre) pour croître."
        },
        comparison: [
            { stage: "Lichtafhankelijke reacties", location: "Thylakoid membranen", input: "Licht + H₂O", output: "O₂ + ATP + NADPH" },
            { stage: "Lichtafhankelijke reacties (Calvin-cyclus)", location: "Stroma", input: "CO₂ + ATP + NADPH", output: "Glucose (C₆H₁₂O₆)" }
        ],
        relatedSpecies: ["gen_hedera_helix", "gen_plantago_major"],
        quiz: [
            {
                question: {
                    nl: "Waar in een plantencel vindt fotosynthese plaats?",
                    en: "Where in a plant cell does photosynthesis occur?",
                    fr: "Où dans une cellule végétale la photosynthèse se produit-elle?"
                },
                correct: 1,
                options: [
                    { nl: "In de mitochondriën", en: "In the mitochondria", fr: "Dans les mitochondries" },
                    { nl: "In de chloroplasten", en: "In the chloroplasts", fr: "Dans les chloroplastes" },
                    { nl: "In de kern", en: "In the nucleus", fr: "Dans le noyau" }
                ]
            },
            {
                question: {
                    nl: "Wat is het eindproduct van fotosynthese (behalve zuurstof)?",
                    en: "What is the final product of photosynthesis (besides oxygen)?",
                    fr: "Quel est le produit final de la photosynthèse (en plus de l'oxygène)?"
                },
                correct: 0,
                options: [
                    { nl: "Glucose (suiker)", en: "Glucose (sugar)", fr: "Glucose (sucre)" },
                    { nl: "Zetmeel", en: "Starch", fr: "Amidon" },
                    { nl: "Cellulose", en: "Cellulose", fr: "Cellulose" }
                ]
            },
            {
                question: {
                    nl: "Waarom zijn planten GROEN?",
                    en: "Why are plants GREEN?",
                    fr: "Pourquoi les plantes sont-elles VERTES?"
                },
                correct: 1,
                options: [
                    { nl: "Ze absorberen groen licht beter", en: "They absorb green light better", fr: "Elles absorbent mieux la lumière verte" },
                    { nl: "Ze bevatten chlorofyl, dat groen licht reflecteert", en: "They contain chlorophyll that reflects green light", fr: "Elles contiennent de la chlorophylle qui réfléchit la lumière verte" },
                    { nl: "Groen beschermt tegen UV-straling", en: "Green protects against UV radiation", fr: "Le vert protège contre les radiations UV" }
                ]
            }
        ]
    },

    // ────────────────────────────────────────────────────────────────────────
    // 6. BESTUIVING
    // ────────────────────────────────────────────────────────────────────────
    {
        id: "pollination",
        icon: "🐝",
        color: "#e8b71d",
        hue: 50,
        name: {
            nl: "Bestuiving: Hoe Planten Zich Voortplanten",
            en: "Pollination: How Plants Reproduce",
            fr: "Pollinisation: Comment les Plantes se Reproduisent"
        },
        summary: {
            nl: "Insecten, vogels, en wind brengen stuifmeel van bloem naar bloem",
            en: "Insects, birds, and wind carry pollen from flower to flower",
            fr: "Les insectes, oiseaux et vent transportent le pollen de fleur en fleur"
        },
        content: {
            nl: "Bestuiving is het overbrengen van stuifmeel (pollen) van de meeldraden (mannelijke delen) naar de stempel (vrouwelijke deel) van bloemen. Zonder bestuiving geven de meeste bloemen geen zaden. Er zijn drie hoofdmethoden: insectenbestuiving (biofilie), windbestuiving (anemofilie), en waterbestuiving (hydrofilie, zeldzaam). Bij insectenbestuiving hebben bloemen vaak felle kleuren, nectarproductie, en aangename geuren om dieren aan te trekken. Bijen, vlinders, kevers, en andere insecten voeden zich met nectar en pollen en vervoeren per ongeluk stuifmeel naar de volgende bloem. Bij windbestuiving produceren planten veel stuifmeel en hebben ze meestal kleine, onopvallende bloemen (denk aan grassen). Windbestuiving is minder betrouwbaar dan insectenbestuiving, dus veel stuifmeel gaat verloren. Dit is waarom grassoorten zoveel stuifmeel produceren en waarom hooikoorts vooral in de lente optreedt als grassen stuiven. In België zijn bijen (vooral honingbijen en wilde bijen) van enorm belang. Een derde van ons voedsel hangt af van insectenbestuiving. Helaas nemen bienpopulaties af vanwege pesticiden, habitatverlies, en ziektes.",
            en: "Pollination is the transfer of pollen (dusty powder) from stamens (male parts) to the stigma (female part) of flowers. Without pollination, most flowers produce no seeds. There are three main methods: insect pollination (biophily), wind pollination (anemophily), and water pollination (hydrophily, rare). In insect pollination, flowers often have bright colors, produce nectar, and have pleasant scents to attract animals. Bees, butterflies, beetles, and other insects feed on nectar and pollen and accidentally carry pollen to the next flower. In wind pollination, plants produce lots of pollen and usually have small, inconspicuous flowers (think of grasses). Wind pollination is less reliable than insect pollination, so much pollen is wasted. This is why grass species produce so much pollen and why hay fever mainly occurs in spring when grasses pollinate. In Belgium, bees (especially honeybees and wild bees) are extremely important. A third of our food depends on insect pollination. Unfortunately, bee populations are declining due to pesticides, habitat loss, and diseases.",
            fr: "La pollinisation est le transfert du pollen de fleur en fleur."
        },
        comparison: [
            { method: "Insectenbestuiving", vector: "Bijen, vlinders, kevers", flower: "Kleurrijk, geurend, nectar", advantages: "Efficiënt, gericht stuifmeel" },
            { method: "Windbestuiving", vector: "Wind", flower: "Klein, onopvallend", advantages: "Niet afhankelijk van dieren, maar veel verspilling" },
            { method: "Waterbestuiving", vector: "Water", flower: "Zeer gereduceerd", advantages: "Voor enkele waterplanten" }
        ],
        relatedSpecies: ["gen_plantago_major", "gen_hedera_helix", "apis_mellifera"],
        quiz: [
            {
                question: {
                    nl: "Welk deel van de bloem is VROUWELIJK en ontvangt stuifmeel?",
                    en: "Which part of the flower is FEMALE and receives pollen?",
                    fr: "Quelle partie de la fleur est FEMELLE et reçoit le pollen?"
                },
                correct: 2,
                options: [
                    { nl: "Meeldraden", en: "Stamens", fr: "Étamines" },
                    { nl: "Bloemblaadjes", en: "Petals", fr: "Pétales" },
                    { nl: "Stempel", en: "Stigma", fr: "Stigmate" }
                ]
            },
            {
                question: {
                    nl: "Hoeveel van het menselijk voedsel hangt af van insectenbestuiving?",
                    en: "What fraction of human food depends on insect pollination?",
                    fr: "Quelle fraction de la nourriture humaine dépend de la pollinisation par les insectes?"
                },
                correct: 1,
                options: [
                    { nl: "1/10", en: "1/10", fr: "1/10" },
                    { nl: "1/3", en: "1/3", fr: "1/3" },
                    { nl: "1/2", en: "1/2", fr: "1/2" }
                ]
            },
            {
                question: {
                    nl: "Waarom hebben windbestuivende bloemen meestal WEINIG kleur?",
                    en: "Why do wind-pollinated flowers usually have LITTLE color?",
                    fr: "Pourquoi les fleurs pollinisées par le vent ont-elles généralement PEU de couleur?"
                },
                correct: 0,
                options: [
                    { nl: "Ze hoeven dieren niet aan te trekken, wind doet het werk", en: "They don't need to attract animals; wind does the work", fr: "Elles n'ont pas besoin d'attirer les animaux; le vent fait le travail" },
                    { nl: "Kleur is een gift voor wind", en: "Color is a waste of energy", fr: "La couleur est une perte d'énergie" },
                    { nl: "Wind beschadigt gekleurde bloemen", en: "Wind damages colored flowers", fr: "Le vent endommage les fleurs colorées" }
                ]
            }
        ]
    },

    // ────────────────────────────────────────────────────────────────────────
    // 7. VOORTPLANTING BIJ PLANTEN
    // ────────────────────────────────────────────────────────────────────────
    {
        id: "plant_reproduction",
        icon: "🌱",
        color: "#16a085",
        hue: 165,
        name: {
            nl: "Voortplanting bij Planten: Zaad tot Plant",
            en: "Plant Reproduction: From Seed to Plant",
            fr: "Reproduction Végétale: De la Graine à la Plante"
        },
        summary: {
            nl: "Zaadplanten vs. sporen-producerende planten",
            en: "Seed plants vs. spore-producing plants",
            fr: "Plantes à graines vs. plantes productrices de spores"
        },
        content: {
            nl: "Planten voortplanten zich op verschillende manieren. De meeste modern planten in België zijn zaadplanten (Spermatophyta), die zich voortplanten via zaden. Dit zijn twee groepen: Gimnosperma (naaktza digen, zoals dennen) en Angiospermen (bedekte zaadigen, bloeiende planten). Bij zaadplanten gebeurt bevruchting BINNENIN de plant, dus zaden kunnen in droge omgevingen groeien. Andere planten gebruiken sporen in plaats van zaden—denk aan varens en mossen. Sporen zijn tiny, licht, en kunnen ver verspreid worden door wind of water. Echter, sporen hebben geen voedingsreserves, dus ze moeten onmiddellijk in een vochtig milieu kiemen. Sommige planten kunnen ook vegetatief voortplanten (aseksueel)—denk aan aardappelen via knollen, aardbeien via uitlopers, of uit stukken wortel. Dit is sneller dan zaadproductie en kan gebeuren in één seizoen. In België gebruikt tuinderij vaak vegetatieve vermeerdering voor efficiëntie.",
            en: "Plants reproduce in different ways. Most modern plants in Belgium are seed plants (Spermatophyta), reproducing via seeds. These are two groups: Gymnosperms (naked seeds, like pines) and Angiosperms (covered seeds, flowering plants). In seed plants, fertilization occurs INSIDE the plant, so seeds can grow in dry environments. Other plants use spores instead of seeds—think of ferns and mosses. Spores are tiny, light, and can spread far by wind or water. However, spores have no food reserves, so they must immediately germinate in a moist environment. Some plants can also reproduce vegetatively (asexually)—think of potatoes via tubers, strawberries via runners, or from root pieces. This is faster than seed production and can happen in one season. In Belgium, horticulture often uses vegetative propagation for efficiency.",
            fr: "Les plantes se reproduisent de différentes manières."
        },
        comparison: [
            { type: "Zaadplanten", method: "Sexueel (bestuiving)", transport: "Wind, dieren, water", advantages: "Genetische variatie, langafstandsverspreiding" },
            { type: "Sporen-planten", method: "Sporen (aseksueel)", transport: "Wind, water", advantages: "Snel, veel sporen" },
            { type: "Vegetatieve voortplanting", method: "Uitlopers, knollen, fragmentatie", transport: "Lokaal", advantages: "Identieke klonen, zeer snel" }
        ],
        relatedSpecies: ["gen_plantago_major", "gen_silene_flos_cuculi"],
        quiz: [
            {
                question: {
                    nl: "Wat is het voornaamste voordeel van zaadvoortplanting boven sporenvoortplanting?",
                    en: "What is the main advantage of seed reproduction over spore reproduction?",
                    fr: "Quel est le principal avantage de la reproduction par graines par rapport aux spores?"
                },
                correct: 1,
                options: [
                    { nl: "Meer sporen worden geproduceerd", en: "More are produced", fr: "Plus sont produits" },
                    { nl: "Zaden hebben voedingsreserves en kunnen in droge omgevingen groeien", en: "Seeds have food reserves and survive dry environments", fr: "Les graines ont des réserves alimentaires et survivent aux environnements secs" },
                    { nl: "Zaden verspreiden sneller", en: "Seeds spread faster", fr: "Les graines se propagent plus rapidement" }
                ]
            },
            {
                question: {
                    nl: "Wat is vegetatieve voortplanting?",
                    en: "What is vegetative reproduction?",
                    fr: "Qu'est-ce que la reproduction végétative?"
                },
                correct: 0,
                options: [
                    { nl: "Aseksuele voortplanting via uitlopers, knollen, etc.", en: "Asexual reproduction via runners, tubers, etc.", fr: "Reproduction asexuelle via les coureurs, les tubercules, etc." },
                    { nl: "Voortplanting via zaden", en: "Reproduction via seeds", fr: "Reproduction via les graines" },
                    { nl: "Voortplanting via bestuiving", en: "Reproduction via pollination", fr: "Reproduction via la pollinisation" }
                ]
            },
            {
                question: {
                    nl: "Waarom moeten sporen onmiddellijk in vochtige omgeving kiemen?",
                    en: "Why must spores germinate immediately in moisture?",
                    fr: "Pourquoi les spores doivent-elles germer immédiatement dans l'humidité?"
                },
                correct: 2,
                options: [
                    { nl: "Sporen zijn giftig in droge omgevingen", en: "Spores are toxic in dry conditions", fr: "Les spores sont toxiques en conditions sèches" },
                    { nl: "Vochtigheid helpt ze voort te bewegen", en: "Moisture helps them move", fr: "L'humidité les aide à se déplacer" },
                    { nl: "Sporen hebben geen voedingsreserves zoals zaden", en: "Spores have no food reserves like seeds", fr: "Les spores n'ont pas de réserves alimentaires comme les graines" }
                ]
            }
        ]
    },

    // ────────────────────────────────────────────────────────────────────────
    // 8. VOGELHERKENNING TIPS
    // ────────────────────────────────────────────────────────────────────────
    {
        id: "bird_identification",
        icon: "🐦",
        color: "#3498db",
        hue: 210,
        name: {
            nl: "Vogelherkenning: Tips & Trucs",
            en: "Bird Identification: Tips & Tricks",
            fr: "Identification des Oiseaux: Astuces & Conseils"
        },
        summary: {
            nl: "Hoe onderscheid je vogels in het veld?",
            en: "How do you tell birds apart in the field?",
            fr: "Comment distinguez-vous les oiseaux sur le terrain?"
        },
        content: {
            nl: "Vogelwaarneming is een fascinerend hobby. De sleutel tot vogelherkenning is het observeren van details. Hier zijn de belangrijkste punten:\n\n1. **GROOTTE EN VORM**: Grootte is moeilijk in het veld, dus vergelij altijd met bekende soorten. Is het vogeltje vogelgrootte, tortelduif-grootte, of ganzengrootte? De vorm van de silhouet geeft veel weg—lange hals vs. compacte lijf, rechtopstaande houding vs. horizontaal vliegend.\n\n2. **KLEUR & TEKENING**: Bestudeer de hoofdkleur. Is het vogelgrijs, bruin, wit, of kleurig? Waar zijn de markeringen—op de vleugel, staart, kop? Een witte wenkbrauwstreep kan een soort van een ander onderscheiden.\n\n3. **SNAVEL**: De snabel vorm vertelt wat een vogel eet. Lange, dunne snavels voor insecten (spechten, zangvogels). Sterke, kegelvormige snavels voor zaden (finken, mezen). Gebogen snavels voor nectar (kolibries, lijsters). Haaksnavel voor roofvogels (roofvogels).\n\n4. **HABITAT & GEDRAG**: Waar zie je de vogel? In een bos, rietland, open veld? Wat doet het—voedsel zoeken in bladeren, op grond, in lucht? Vogels hebben voorkeuren.\n\n5. **GELUID & ZANG**: Vogels communiceren via geluid. Leer de roepen en zangen van veel voorkomende vogels. Dit is ongelooflijk handig—vogels die je niet ziet, kun je horen.\n\n6. **SEIZOEN & TREKGEDRAG**: Sommige vogels zijn permanent aanwezig (zaadzangvogels, koolmezen), anderen zijn trekvogels (kraanvogels, zwaluwen). Dit helpt bij herkenning.\n\n7. **VLUCHTPATROON**: Hoe vliegt de vogel? Rechtlijnig en snel (duiven), golvend (finken), zwaaiend (reigers)? Dit kan helpen onderscheid te maken.",
            en: "Birdwatching is a fascinating hobby. The key to bird identification is observing details. Here are the main points:\n\n1. **SIZE & SHAPE**: Size is hard in the field, so always compare with known species. Is the bird sparrow-sized, pigeon-sized, or goose-sized? The silhouette tells much—long neck vs. compact body, upright posture vs. horizontal flying.\n\n2. **COLOR & MARKINGS**: Study the main color. Is the bird gray, brown, white, or colorful? Where are the markings—on wing, tail, head? A white eyebrow stripe can distinguish one species from another.\n\n3. **BEAK**: Beak shape reveals what a bird eats. Long, thin beaks for insects (woodpeckers, songbirds). Strong, conical beaks for seeds (finches, tits). Curved beaks for nectar (hummingbirds, thrushes). Hooked beaks for raptors.\n\n4. **HABITAT & BEHAVIOR**: Where do you see the bird? In a forest, reed bed, open field? What is it doing—foraging in leaves, on ground, in air? Birds have preferences.\n\n5. **SOUND & SONG**: Birds communicate through sound. Learn the calls and songs of common birds. This is incredibly useful—birds you can't see, you can hear.\n\n6. **SEASON & MIGRATION**: Some birds are permanent residents (sparrows, tits), others are migrants (cranes, swallows). This helps with identification.\n\n7. **FLIGHT PATTERN**: How does the bird fly? Straight and fast (pigeons), wavy (finches), undulating (herons)? This can help distinguish species.",
            fr: "L'observation des oiseaux est un loisir fascinant."
        },
        comparison: [
            { feature: "Snabel", type: "Insecten", example: "Spechten, zangvogels", form: "Lang, dun, scherp" },
            { feature: "Snabel", type: "Zaden", example: "Finken, mezen", form: "Sterk, kegelvormig" },
            { feature: "Snabel", type: "Nectar", example: "Iepen", form: "Gebogen" },
            { feature: "Snabel", type: "Prooi", example: "Roofvogels", form: "Haak, sterk" }
        ],
        relatedSpecies: ["gen_parus_major", "gen_accipiter_nisus", "gen_poecile_palustris"],
        quiz: [
            {
                question: {
                    nl: "Welke snabelvorm hebben vogels die op zaden eten?",
                    en: "What beak shape do seed-eating birds have?",
                    fr: "Quelle forme de bec ont les oiseaux qui mangent des graines?"
                },
                correct: 1,
                options: [
                    { nl: "Lang en dun", en: "Long and thin", fr: "Long et fin" },
                    { nl: "Sterk en kegelvormig", en: "Strong and conical", fr: "Fort et conique" },
                    { nl: "Gebogen en lang", en: "Curved and long", fr: "Courbé et long" }
                ]
            },
            {
                question: {
                    nl: "Waarom is het geluid/zang van vogels nuttig voor herkenning?",
                    en: "Why is bird sound/song useful for identification?",
                    fr: "Pourquoi le son/chant des oiseaux est-il utile pour l'identification?"
                },
                correct: 0,
                options: [
                    { nl: "Je kunt vogels horen die je niet ziet", en: "You can hear birds you can't see", fr: "Vous pouvez entendre des oiseaux que vous ne pouvez pas voir" },
                    { nl: "Geluid verandert de kleur", en: "Sound changes color", fr: "Le son change la couleur" },
                    { nl: "Alle vogels van een habitat hebben hetzelfde geluid", en: "All birds in habitat sound same", fr: "Tous les oiseaux d'un habitat ont le même son" }
                ]
            },
            {
                question: {
                    nl: "Hoe helps seizoen bij vogelherkenning?",
                    en: "How does season help with bird ID?",
                    fr: "Comment la saison aide-t-elle à identifier les oiseaux?"
                },
                correct: 2,
                options: [
                    { nl: "Vogels veranderen van kleur elk seizoen", en: "Birds change color each season", fr: "Les oiseaux changent de couleur chaque saison" },
                    { nl: "Seizoen beïnvloedt vogelgrootte", en: "Season affects bird size", fr: "La saison affecte la taille de l'oiseau" },
                    { nl: "Sommige vogels zijn winter-, zomer-, of trekvogels—je weet wat verwacht wordt", en: "Some birds are year-round, summer, or migrants—you know what to expect", fr: "Certains oiseaux sont permanents, d'été ou migrateurs—vous savez ce qu'il faut attendre" }
                ]
            }
        ]
    },

    // ────────────────────────────────────────────────────────────────────────
    // 9. HABITATTYPEN
    // ────────────────────────────────────────────────────────────────────────
    {
        id: "habitat_types",
        icon: "🏞️",
        color: "#2ecc71",
        hue: 140,
        name: {
            nl: "Habitattypen in België",
            en: "Habitat Types in Belgium",
            fr: "Types d'Habitats en Belgique"
        },
        summary: {
            nl: "Waar leven dieren en planten in ons land?",
            en: "Where do animals and plants live in our country?",
            fr: "Où vivent les animaux et les plantes dans notre pays?"
        },
        content: {
            nl: "Een habitat is de fysieke omgeving waarin een soort leeft. Belgium heeft diverse habitattypes, elk met zijn eigen karakteristieke soorten. BOSSEN: Deze beslaan ongeveer 23% van België. Loof bossen (eiken, beuken) hebben veel vogels en zoogdieren. Naaldbossen (dennen) hebben minder diversiteit maar gasten als roekeloos. WEIDEN EN GRASLANDEN: Belangrijke habitat voor grazers (koeien, schapen) en vele vogelsoorten. Natuurlijke graslanden (heide) zijn veel zeldzamer dan vroeger, maar nog steeds belangrijk. MOERASSEN EN WETLANDS: Deze natte gebieden zijn vogelparadijzen—rietmussen, waterhoenen, heidevogels broeden hier. Ze zuiveren ook water. STEDELIJKE HABITATS: Parken, tuinen, en onkruidgebieden steunen meer vogels dan mensen denken—mezen, spreeuwen, merels. WATERBIOTOPEN: Rivieren, vijvers, kanalen. Zoetwatervissen, libellen, watervogels. HEIDES EN DUINEN: Vroeger veel in België, nu zeldzaam. Belangrijke habitats voor insecten en bijzondere planten. AGRARISCH LAND: Akkers en landbouwgebieden. Meer chemicaliën betekenen minder insecten, dus minder voedsel voor vogels. Dit is een prioritaire conservatie-area. Elk habitattype heeft soorten die ervan afhankelijk zijn. Habitatverlies is een van de grootste bedreigingen voor biodiversiteit.",
            en: "A habitat is the physical environment in which a species lives. Belgium has diverse habitat types, each with its own characteristic species. FORESTS: These cover about 23% of Belgium. Deciduous forests (oak, beech) have many birds and mammals. Coniferous forests (pine) have less diversity. MEADOWS AND GRASSLANDS: Important habitat for grazers (cattle, sheep) and many bird species. Natural grasslands (heathland) are much rarer than before, but still important. MARSHES AND WETLANDS: These wet areas are bird paradises—reed warblers, coots, marsh birds breed here. They also purify water. URBAN HABITATS: Parks, gardens, and wastelands support more birds than people think—tits, starlings, blackbirds. WATER BIOTOPES: Rivers, ponds, canals. Freshwater fish, dragonflies, waterfowl. HEATHS AND DUNES: Once common in Belgium, now rare. Important habitats for insects and special plants. AGRICULTURAL LAND: Crops and farmland. More chemicals mean fewer insects, thus less food for birds. This is a priority conservation area. Each habitat type has species that depend on it. Habitat loss is one of the greatest threats to biodiversity.",
            fr: "Un habitat est l'environnement physique dans lequel vit une espèce."
        },
        comparison: [
            { habitat: "Bossen", characteristic: "Dicht loofwerk, beschaduwing", species: "Merels, lijsters, eksters, vossen" },
            { habitat: "Weiden", characteristic: "Open, gras, gegraas", species: "Graspiepers, kieviten, patrijzen" },
            { habitat: "Moerassen", characteristic: "Nat, rietland, waterplanten", species: "Rietmussen, waterhoenen, libellen" },
            { habitat: "Stedelijk", characteristic: "Gebouwen, parken, tuinen", species: "Mezen, spreeuwen, merels" },
            { habitat: "Water", characteristic: "Rivieren, kanalen, vijvers", species: "Eenden, aalscholvers, vissen" }
        ],
        relatedSpecies: ["gen_parus_major", "gen_turdus_merula"],
        quiz: [
            {
                question: {
                    nl: "Welk habitattype dekt ongeveer 23% van België?",
                    en: "Which habitat type covers about 23% of Belgium?",
                    fr: "Quel type d'habitat couvre environ 23% de la Belgique?"
                },
                correct: 0,
                options: [
                    { nl: "Bossen", en: "Forests", fr: "Forêts" },
                    { nl: "Weiden", en: "Grasslands", fr: "Prairies" },
                    { nl: "Moerassen", en: "Marshes", fr: "Marais" }
                ]
            },
            {
                question: {
                    nl: "Waarom zijn moerassen en wetlands vogelparadijzen?",
                    en: "Why are marshes and wetlands bird paradises?",
                    fr: "Pourquoi les marais et les zones humides sont-ils des paradis des oiseaux?"
                },
                correct: 0,
                options: [
                    { nl: "Veel voedsel (insecten, vis), nesting-habitats", en: "Lots of food (insects, fish), nesting habitats", fr: "Beaucoup de nourriture (insectes, poisson), habitats de nidification" },
                    { nl: "Warme temperaturen", en: "Warm temperatures", fr: "Températures chaudes" },
                    { nl: "Veel lichaam- water voor vogels", en: "Lots of drinking water", fr: "Beaucoup d'eau potable" }
                ]
            },
            {
                question: {
                    nl: "Wat is de grootste bedreiging voor habitats in België?",
                    en: "What is the biggest threat to habitats in Belgium?",
                    fr: "Quelle est la plus grande menace pour les habitats en Belgique?"
                },
                correct: 1,
                options: [
                    { nl: "Klimaatverandering alleen", en: "Climate change alone", fr: "Changement climatique seul" },
                    { nl: "Habitatverlies (verstedelijking, landbouw)", en: "Habitat loss (urbanization, agriculture)", fr: "Perte d'habitat (urbanisation, agriculture)" },
                    { nl: "Vogelmeters", en: "Bird traps", fr: "Pièges à oiseaux" }
                ]
            }
        ]
    },

    // ────────────────────────────────────────────────────────────────────────
    // 10. ECOSYSTEMEN & VOEDSELKETENS
    // ────────────────────────────────────────────────────────────────────────
    {
        id: "ecosystems_foodchains",
        icon: "🔗",
        color: "#27ae60",
        hue: 120,
        name: {
            nl: "Ecosystemen & Voedselketens",
            en: "Ecosystems & Food Chains",
            fr: "Écosystèmes & Chaînes Alimentaires"
        },
        summary: {
            nl: "Hoe voeding en energie stromen door de natuur",
            en: "How food and energy flow through nature",
            fr: "Comment la nourriture et l'énergie circulent dans la nature"
        },
        content: {
            nl: "Een ecosysteem is een gemeenschap van levende organismen (biotische factor) en de niet-levende omgeving (abiotische factoren) waarin ze samenwerken. Alles in een ecosysteem is verbonden via voedselketens. Een voedselketen begint met producenten (planten) die zonlicht omzetten in voedsel via fotosynthese. Dan hebben we primaire consumenten (herbivoren) die planten eten. Secundaire consumenten (carnivoren) eten dan de herbivoren. Tertiaire consumenten eten de carnivoren. Ten slotte breken afbrekers (bacteriën, schimmels) alle dode materie af en geven voeding terug aan de grond, zodat planten opnieuw kunnen groeien. In een Belgisch akker-ecosysteem: Graan (producent) → Muizen (herbivoor) → Buizerd (roofdier) → Arend (toppredator). Energie gaat verloren bij elk trofisch niveau—slechts ongeveer 10% van de energie gaat van één niveau naar het volgende. Dit is waarom voedselketens niet oneindig lang zijn. Als je de buizerd uit deze keten verwijdert, zouden muizen exploderen in aantal en het graan opeten, dus alles is in evenwicht. Dit evenwicht is breekbaar—vervuiling, klimaatverandering, invasieve soorten kunnen alles verstoren.",
            en: "An ecosystem is a community of living organisms (biotic factors) and the non-living environment (abiotic factors) in which they interact. Everything in an ecosystem is connected via food chains. A food chain begins with producers (plants) that convert sunlight into food via photosynthesis. Then we have primary consumers (herbivores) that eat plants. Secondary consumers (carnivores) eat the herbivores. Tertiary consumers eat the carnivores. Finally, decomposers (bacteria, fungi) break down all dead matter and return nutrients to soil, so plants can grow again. In a Belgian crop ecosystem: Grain (producer) → Mice (herbivore) → Buzzard (predator) → Eagle (apex predator). Energy is lost at each trophic level—only about 10% of energy passes from one level to the next. This is why food chains are not infinitely long. If you remove the buzzard from this chain, mice would explode in numbers and eat the grain, so everything is in balance. This balance is fragile—pollution, climate change, invasive species can disrupt everything.",
            fr: "Un écosystème est une communauté d'organismes vivants et l'environnement non vivant."
        },
        comparison: [
            { level: "Producent", role: "Maken voedsel via fotosynthese", example: "Planten, algen", energy: "100%" },
            { level: "Primaire Consument", role: "Eten planten", example: "Herbivoren (rups, muis)", energy: "~10%" },
            { level: "Secundaire Consument", role: "Eten herbivoren", example: "Kleine roofvogels, katten", energy: "~1%" },
            { level: "Tertaire Consument", role: "Eten secundaire consumenten", example: "Arenden, wolven", energy: "~0,1%" },
            { level: "Afbreker", role: "Breken dood materiaal af", example: "Bacteriën, schimmels, insecten", energy: "Circuleren nutriënten" }
        ],
        relatedSpecies: ["gen_parus_major", "gen_buteo_buteo"],
        quiz: [
            {
                question: {
                    nl: "Wie zijn de PRODUCENTEN in een voedselketen?",
                    en: "Who are the PRODUCERS in a food chain?",
                    fr: "Qui sont les PRODUCTEURS dans une chaîne alimentaire?"
                },
                correct: 1,
                options: [
                    { nl: "Herbivoren", en: "Herbivores", fr: "Herbivores" },
                    { nl: "Planten", en: "Plants", fr: "Plantes" },
                    { nl: "Roofvogels", en: "Predators", fr: "Prédateurs" }
                ]
            },
            {
                question: {
                    nl: "Hoeveel energie gaat van één trofisch niveau naar het volgende (gemiddeld)?",
                    en: "How much energy goes from one trophic level to next (average)?",
                    fr: "Combien d'énergie passe d'un niveau trophique au suivant (en moyenne)?"
                },
                correct: 0,
                options: [
                    { nl: "~10%", en: "~10%", fr: "~10%" },
                    { nl: "~50%", en: "~50%", fr: "~50%" },
                    { nl: "~90%", en: "~90%", fr: "~90%" }
                ]
            },
            {
                question: {
                    nl: "Wat gebeurt er met dode organismen in een ecosysteem?",
                    en: "What happens to dead organisms in an ecosystem?",
                    fr: "Qu'advient-il des organismes morts dans un écosystème?"
                },
                correct: 1,
                options: [
                    { nl: "Ze verdwijnen voorgoed", en: "They disappear forever", fr: "Ils disparaissent à jamais" },
                    { nl: "Afbrekers breken ze af en geven voeding terug aan de grond", en: "Decomposers break them down and return nutrients to soil", fr: "Les décomposeurs les décomposent et rendent les nutriments au sol" },
                    { nl: "Ze worden direct gegeten door secondaire consumenten", en: "They're eaten by secondary consumers", fr: "Ils sont directement mangés par les consommateurs secondaires" }
                ]
            }
        ]
    },

    // ────────────────────────────────────────────────────────────────────────
    // 11. SYMBIOSE
    // ────────────────────────────────────────────────────────────────────────
    {
        id: "symbiosis",
        icon: "🤝",
        color: "#9b59b6",
        hue: 270,
        name: {
            nl: "Symbiose: Samenleving in de Natuur",
            en: "Symbiosis: Living Together in Nature",
            fr: "Symbiose: Vivre Ensemble dans la Nature"
        },
        summary: {
            nl: "Mutualisme, parasitisme, commensalisme",
            en: "Mutualism, parasitism, commensalism",
            fr: "Mutualisme, parasitisme, commensalisme"
        },
        content: {
            nl: "Symbiose is een nauwe interactie tussen twee verschillende soorten. Er zijn drie type: MUTUALISME (beiden profiteren), PARASITISME (één profiteert, ander lijdt), en COMMENSALISME (één profiteert, ander lijdt niet). Mutualisme: Bloemen en bestuivers—de plant geeft nectar, de bij bestuift. Mycorrhiza—schimmels voeren water en nutriënten naar plantenwortels, plant geeft glucose. Remiezen en schedelharten—vis eet parasieten van de ander, beide schoon. Parasitisme: Een teek op een vogel zuigt bloed. Een parasitaire wasp legt eieren in een rups—de wasp-larven eten de rups van binnenuit. De lintworm leeft in darmen van zoogdieren. Commensalisme: Broedvogels nesten in uitgeholde boomgaten van spechten. Remora-vissen kleven aan haaien zonder voordeel/nadeel voor haai. In België: Veel soorten planten kunnen niet overleven zonder mycorrhiza-schimmels. Bestuivers en planten zijn gekoppeld. Parasitaire insecten controleren plagensoorten. Alles is verbonden—verstoor symbiose en ecosystemen breken in elkaar.",
            en: "Symbiosis is a close interaction between two different species. There are three types: MUTUALISM (both benefit), PARASITISM (one benefits, other suffers), and COMMENSALISM (one benefits, other unaffected). Mutualism: Flowers and pollinators—plant gives nectar, bee pollinates. Mycorrhiza—fungi feed water and nutrients to plant roots, plant gives glucose. Remora fish and sharks—fish eats parasites of shark, both clean. Parasitism: A tick on a bird sucks blood. A parasitoid wasp lays eggs in a caterpillar—wasp larvae eat the caterpillar from inside. Tapeworm lives in mammal intestines. Commensalism: Nesting birds nest in tree cavities drilled by woodpeckers. Remora fish stick to sharks without benefit/harm to shark. In Belgium: Many plant species cannot survive without mycorrhiza fungi. Pollinators and plants are coupled. Parasitoid insects control pest species. Everything is connected—disrupt symbiosis and ecosystems break.",
            fr: "La symbiose est une interaction étroite entre deux espèces différentes."
        },
        comparison: [
            { type: "Mutualisme", organisme1: "Plante", organisme2: "Schimmel (mycorrhiza)", benefit1: "Water, nutriënten", benefit2: "Glucose", outcome: "Beide profiteren" },
            { type: "Parasitisme", organisme1: "Teek", organisme2: "Vogel", benefit1: "Bloed", benefit2: "Schade", outcome: "Parasiet profiteert" },
            { type: "Commensalisme", organisme1: "Specht", organisme2: "Andere vogels", benefit1: "Nesting-plek maken", benefit2: "Nestkaviteit gebruiken", outcome: "Specht profiteert niet/nauwelijks" }
        ],
        relatedSpecies: ["gen_hedera_helix", "gen_parus_major"],
        quiz: [
            {
                question: {
                    nl: "Wat is MUTUALISME?",
                    en: "What is MUTUALISM?",
                    fr: "Qu'est-ce que le MUTUALISME?"
                },
                correct: 1,
                options: [
                    { nl: "Slechts één soort profiteert", en: "Only one species benefits", fr: "Seule une espèce profite" },
                    { nl: "Beide soorten profiteren", en: "Both species benefit", fr: "Les deux espèces en profitent" },
                    { nl: "Geen soort profiteert", en: "No species benefits", fr: "Aucune espèce ne profite" }
                ]
            },
            {
                question: {
                    nl: "Wat is het voordeel van mycorrhiza-schimmels voor planten?",
                    en: "What's the benefit of mycorrhiza fungi to plants?",
                    fr: "Quel est le bénéfice des champignons mycorhiziens pour les plantes?"
                },
                correct: 0,
                options: [
                    { nl: "Water en nutriënten opname", en: "Water and nutrient uptake", fr: "Prise d'eau et de nutriments" },
                    { nl: "Bescherming tegen zon", en: "Protection from sun", fr: "Protection contre le soleil" },
                    { nl: "Herbivore afschrikking", en: "Herbivore repulsion", fr: "Répulsion des herbivores" }
                ]
            },
            {
                question: {
                    nl: "Wat is PARASITISME?",
                    en: "What is PARASITISM?",
                    fr: "Qu'est-ce que le PARASITISME?"
                },
                correct: 2,
                options: [
                    { nl: "Beiden profiteren", en: "Both benefit", fr: "Les deux en profitent" },
                    { nl: "Niemand profiteert", en: "Nobody benefits", fr: "Personne ne profite" },
                    { nl: "Parasiet profiteert, gastheer lijdt", en: "Parasite benefits, host suffers", fr: "Le parasite profite, l'hôte souffre" }
                ]
            }
        ]
    },

    // ────────────────────────────────────────────────────────────────────────
    // 12. SEIZOENEN & FENOLOGIE
    // ────────────────────────────────────────────────────────────────────────
    {
        id: "seasons_phenology",
        icon: "🍂",
        color: "#e67e22",
        hue: 30,
        name: {
            nl: "Seizoenen & Fenologie: Seizoenspatronen",
            en: "Seasons & Phenology: Seasonal Patterns",
            fr: "Saisons & Phénologie: Motifs Saisonniers"
        },
        summary: {
            nl: "Hoe natuur door het jaar heen verandert",
            en: "How nature changes throughout the year",
            fr: "Comment la nature change tout au long de l'année"
        },
        content: {
            nl: "Fenologie is de studie van seizoensgebeurtenissen in planten en dieren. Dit is kritiek voor het begrijpen van biogeografie en klimaatverandering. LENTE (maart-mei): Planten ontkiemen, vogels keren terug van trekroutes, insecten wakker uit winterslaap. Bloeiperiodes beginnen. ZOMER (juni-augustus): Vogelbroedseizoen, insectenexplosie, maximum biomassa. Veel dieren zijn nu voortplantingsactief. HERFST (september-november): Herfstkleuren als bladeren stoppen chlorofylproductie. Trekvogels vertrekken naar wintergronden. Zaden en vruchten rijpen voor vogelvoeding. WINTER (december-februari): Veel planten dood of slapend. Veel dieren gaan in winterslaap (huttens, egel) of migreren. Vogels die achterblijven leven van zaad-voederstalletjes en vet. In België verandert het klimaat sneller dan gemiddeld—eerste bladeren verschijnen nu 2-3 weken eerder dan in de jaren 1990. Dit beïnvloedt voedselketens—bijvoertel, insecten zijn eerder actief, dus vogels moeten eerder broeden. Dit 'mismatch' kan catastrofaal zijn als nesting vogels ankomen voor insecten klaar zijn. TREKVOGELS: Veel Belgische vogels zijn migranten. Zwaluwen broeden in lente/zomer, vliegen dan naar Afrika voor winter. Ze navigeren via sterren, magnetisch veld, zonpositie, en landmarkenen.",
            en: "Phenology is the study of seasonal events in plants and animals. This is critical for understanding biogeography and climate change. SPRING (March-May): Plants germinate, birds return from migration routes, insects wake from hibernation. Blooming begins. SUMMER (June-August): Bird breeding season, insect explosion, maximum biomass. Many animals are now reproductive. AUTUMN (September-November): Fall colors as leaves stop chlorophyll production. Migratory birds depart to winter grounds. Seeds and fruits ripen for bird food. WINTER (December-February): Many plants dead or dormant. Many animals hibernate (hedgehogs) or migrate. Birds that stay live from bird feeders and fat. In Belgium, climate changes faster than average—first leaves now appear 2-3 weeks earlier than in the 1990s. This affects food chains—if insects are active early, birds must breed early too. This 'mismatch' can be catastrophic if nesting birds arrive before insects are ready. MIGRATORY BIRDS: Many Belgian birds are migrants. Swallows breed in spring/summer, then fly to Africa for winter. They navigate via stars, magnetic field, sun position, and landmarks.",
            fr: "La phénologie est l'étude des événements saisonniers chez les plantes et les animaux."
        },
        comparison: [
            { season: "Lente", months: "Maart-Mei", plant_events: "Ontluiken, bloemen", animal_events: "Vogels keren terug, insecten wakker" },
            { season: "Zomer", months: "Juni-Augustus", plant_events: "Volle groei, vruchtvorming", animal_events: "Broedseizoen, insecten actief" },
            { season: "Herfst", months: "September-November", plant_events: "Bladkleuren, zaaddisseminatie", animal_events: "Trekvogels vertrekken" },
            { season: "Winter", months: "December-Februari", plant_events: "Winterslaap, kale takken", animal_events: "Migratie, winterslaap, honger" }
        ],
        relatedSpecies: ["gen_accipiter_nisus", "gen_parus_major"],
        quiz: [
            {
                question: {
                    nl: "Wat is FENOLOGIE?",
                    en: "What is PHENOLOGY?",
                    fr: "Qu'est-ce que la PHÉNOLOGIE?"
                },
                correct: 0,
                options: [
                    { nl: "Studie van seizoensgebeurtenissen in natuur", en: "Study of seasonal events in nature", fr: "Étude des événements saisonniers dans la nature" },
                    { nl: "Studie van fossiele vogels", en: "Study of fossil birds", fr: "Étude des oiseaux fossiles" },
                    { nl: "Studie van wolkentypen", en: "Study of cloud types", fr: "Étude des types de nuages" }
                ]
            },
            {
                question: {
                    nl: "Hoeveel weken EERDER verschijnen eerste bladeren nu vs. jaren '90s in België (ongeveer)?",
                    en: "How many weeks EARLIER do first leaves appear now vs. 1990s in Belgium (approx)?",
                    fr: "Combien de semaines PLUS TÔT les premières feuilles apparaissent-elles maintenant par rapport aux années 1990 en Belgique (env.)?"
                },
                correct: 1,
                options: [
                    { nl: "0-1 week", en: "0-1 week", fr: "0-1 semaine" },
                    { nl: "2-3 weken", en: "2-3 weeks", fr: "2-3 semaines" },
                    { nl: "4-5 weken", en: "4-5 weeks", fr: "4-5 semaines" }
                ]
            },
            {
                question: {
                    nl: "Wat kan gebeuren als insecten VER VOOR vogel-broedseizoen actief worden?",
                    en: "What can happen if insects become active FAR BEFORE bird breeding season?",
                    fr: "Que peut-il se passer si les insectes deviennent actifs bien AVANT la saison de reproduction des oiseaux?"
                },
                correct: 2,
                options: [
                    { nl: "Vogels hebben meer voedsel", en: "Birds have more food", fr: "Les oiseaux ont plus de nourriture" },
                    { nl: "Insecten groeien groter", en: "Insects grow larger", fr: "Les insectes grandissent" },
                    { nl: "'Mismatch'—vogels arriveren als insecten al weg zijn, jongen hongerig", en: "'Mismatch'—birds arrive when insects are gone, chicks starve", fr: "'Décalage'—les oiseaux arrivent quand les insectes ont disparu, les jeunes meurent de faim" }
                ]
            }
        ]
    },

    // ────────────────────────────────────────────────────────────────────────
    // 13. EVOLUTIE & AANPASSING
    // ────────────────────────────────────────────────────────────────────────
    {
        id: "evolution_adaptation",
        icon: "🔄",
        color: "#c0392b",
        hue: 10,
        name: {
            nl: "Evolutie & Aanpassing: Verandering Over Tijd",
            en: "Evolution & Adaptation: Change Over Time",
            fr: "Évolution & Adaptation: Changement au Fil du Temps"
        },
        summary: {
            nl: "Hoe soorten zich aanpassen aan hun omgeving",
            en: "How species adapt to their environment",
            fr: "Comment les espèces s'adaptent à leur environnement"
        },
        content: {
            nl: "Evolutie is de verandering van soorten over zeer lange tijd. Natuurlijke selectie (door Charles Darwin voorgesteld) is het mechanisme: individuën met voordelige kenmerken overleven beter en voortplanten meer, dus die kenmerken worden gemeenschappelijker in de populatie. Dit leidt tot aanpassingen. AANPASSING is een eigenschap die een organisme helpt overleven in zijn habitat. Vormen van aanpassingen: STRUCTUREEL (lichaamsdelen)—vogelvleugels voor vlucht, viscorrels voor zwemmen, camouflage-kleuren. GEDRAGSMATIG—vogelzang voor attractie van partners, migratie naar andere habitats, groepsvorming voor bescherming. FYSIOLOGISCH—een beer kan dood-achtig lijken (torporvlieging) om energie te sparen. Voorbeelden in België: MIMICRY—vlinders die vogeluitwerpsels imiteren om niet gegeten te worden. CO-EVOLUTIE—bloemen en bestuivers evolueren samen. Bloem krijgt vorm van bij-snuit, bij krijgt snuit die past in bloem. INVASIEVE SOORTEN—nieuwkomers hebben voordelen in nieuwe omgevingen (geen natuurlijke vijanden) dus ze groeien snel. Voorbeeld: Watertorren uit Amerika hebben veel schade aan Belgische waterplanten. Evolutie duurt miljoenen jaren, maar we zien kleine veranderingen in korte tijd. Bacteriën ontwikkelen antibiotica-resistentie in jaren.",
            en: "Evolution is the change of species over very long time. Natural selection (proposed by Charles Darwin) is the mechanism: individuals with beneficial traits survive better and reproduce more, so those traits become more common in the population. This leads to adaptations. ADAPTATION is a trait that helps an organism survive in its habitat. Forms of adaptations: STRUCTURAL (body parts)—bird wings for flight, fish fins for swimming, camouflage colors. BEHAVIORAL—bird song for attracting mates, migration to other habitats, herding for protection. PHYSIOLOGICAL—a bear can appear dead (torpor) to save energy. Examples in Belgium: MIMICRY—butterflies that imitate bird droppings to avoid being eaten. CO-EVOLUTION—flowers and pollinators evolve together. Flower gets shape of bee snout, bee gets snout that fits in flower. INVASIVE SPECIES—newcomers have advantages in new environments (no natural enemies) so they grow fast. Example: Water beetles from America have caused damage to Belgian aquatic plants. Evolution takes millions of years, but we see small changes in short time. Bacteria develop antibiotic resistance in years.",
            fr: "L'évolution est le changement des espèces sur une très longue période."
        },
        comparison: [
            { type: "Structureel", example: "Vogelvleugels, visvin, klauw", benefit: "Beweging, locomotie" },
            { type: "Gedragsmatig", example: "Migratie, paaringsrituelen, schuilplaatsen", benefit: "Voortplanting, overleven" },
            { type: "Fysiologisch", example: "Winterpelz, zuurstofbuffers, gifige huid", benefit: "Energiebesparing, verdediging" },
            { type: "Communicatie", example: "Geluiden, kleuren, geur", benefit: "Samenwerking, waarschuwing" }
        ],
        relatedSpecies: ["gen_parus_major", "gen_accipiter_nisus"],
        quiz: [
            {
                question: {
                    nl: "Wat is NATUURLIJKE SELECTIE?",
                    en: "What is NATURAL SELECTION?",
                    fr: "Qu'est-ce que la SÉLECTION NATURELLE?"
                },
                correct: 1,
                options: [
                    { nl: "Mensen kiezen welke dieren mooi vinden", en: "Humans choose which animals are beautiful", fr: "Les humains choisissent quels animaux sont beaux" },
                    { nl: "Individuen met voordelige kenmerken overleven beter, voortplanten meer", en: "Individuals with beneficial traits survive better, reproduce more", fr: "Les individus ayant des traits avantageux survivent mieux, se reproduisent davantage" },
                    { nl: "Willekeurige mutaties in genen", en: "Random mutations in genes", fr: "Mutations aléatoires dans les gènes" }
                ]
            },
            {
                question: {
                    nl: "Wat is MIMICRY in de natuur?",
                    en: "What is MIMICRY in nature?",
                    fr: "Qu'est-ce que le MIMÉTISME dans la nature?"
                },
                correct: 0,
                options: [
                    { nl: "Een organisme imiteert een ander voor bescherming/voordeel", en: "One organism imitates another for protection/advantage", fr: "Un organisme en imite un autre pour la protection" },
                    { nl: "Deux soorten die net hetzelfde eten", en: "Two species eating exactly the same", fr: "Deux espèces mangeant exactement la même chose" },
                    { nl: "Planten die net als dieren groeien", en: "Plants growing like animals", fr: "Les plantes qui poussent comme des animaux" }
                ]
            },
            {
                question: {
                    nl: "Waarom groeien invasieve soorten snel in nieuwe omgevingen?",
                    en: "Why do invasive species grow fast in new environments?",
                    fr: "Pourquoi les espèces envahissantes se propagent-elles rapidement dans les nouveaux environnements?"
                },
                correct: 1,
                options: [
                    { nl: "Ze zijn groter dan inheemse soorten", en: "They are larger than native species", fr: "Elles sont plus grandes que les espèces indigènes" },
                    { nl: "Geen natuurlijke vijanden, geen competitie, veel voedsel", en: "No natural enemies, no competition, lots of food", fr: "Pas d'ennemis naturels, pas de concurrence, beaucoup de nourriture" },
                    { nl: "Ze hebben hogere lichaamsteperatuur", en: "They have higher body temperature", fr: "Elles ont une température corporelle plus élevée" }
                ]
            }
        ]
    },

    // ────────────────────────────────────────────────────────────────────────
    // 14. BIODIVERSITEIT IN BELGIË
    // ────────────────────────────────────────────────────────────────────────
    {
        id: "biodiversity_belgium",
        icon: "🌍",
        color: "#16a085",
        hue: 170,
        name: {
            nl: "Biodiversiteit in België: Bedreigingen & Bescherming",
            en: "Biodiversity in Belgium: Threats & Protection",
            fr: "Biodiversité en Belgique: Menaces & Protection"
        },
        summary: {
            nl: "Hoeveel soorten hebben we en wat bedreigt ze?",
            en: "How many species do we have and what threatens them?",
            fr: "Combien d'espèces avons-nous et qu'est-ce qui les menace?"
        },
        content: {
            nl: "België is klein maar heeft bemerkenswaardig veel biodiversiteit—meer dan 50.000 soorten van dieren, planten, schimmels, en micro-organismen zijn gegregistreerd. BEDREIGINGEN: 1) HABITATVERLIES—de grootste. Bebouwing, landbouw, verstedelijking vernietigen natuurgebieden. 2) VERVUILING—pesticides doden insecten, stikstofneerslaag vervuilt water. 3) KLIMAATVERANDERING—warme winters, droge zomers, verandering van bloei-timing. 4) INVASIEVE SOORTEN—voormalige aquarium-vissen, graskatten, watertorren. 5) OVERBENUTTING—jacht, visvangst, illegale handelaren in diersoorten. BESCHERMINGSMAATREGELEN: 1) Natura 2000—een Europees netwerk van beschermde natuur-gebieden, waarvan 13% van België. 2) Wettelijke bescherming—bepaalde soorten zijn wettelijk beschermd, jacht/visvangst verboden. 3) Broedprogramma's—zeldzame vogels/reptielen gefokt in gevangenschap om terug uit te zetten. 4) Habitatteristel—moerasbossen hersteld, wetlandnen aangelegd. 5) Milieubeleid—fosfaatverboden in wasmiddelen, biocidenregulering. In België is het aantal vogelsoorten stabiel gebleven, maar populaties zijn gedaald. Insecten zijn dramatisch afgenomen (30-75% in sommige gebieden). Dit zogenaamde \"insectmageddon\" heeft ernstige gevolgen voor voedselketens.",
            en: "Belgium is small but has remarkable biodiversity—more than 50,000 species of animals, plants, fungi, and microorganisms are recorded. THREATS: 1) HABITAT LOSS—the biggest. Building, agriculture, urbanization destroy natural areas. 2) POLLUTION—pesticides kill insects, nitrogen deposition pollutes water. 3) CLIMATE CHANGE—warm winters, dry summers, change in bloom timing. 4) INVASIVE SPECIES—former aquarium fish, raccoons, water beetles. 5) OVEREXPLOITATION—hunting, fishing, illegal wildlife trade. PROTECTION MEASURES: 1) Natura 2000—a European network of protected nature areas, 13% of Belgium. 2) Legal protection—certain species legally protected, hunting/fishing forbidden. 3) Breeding programs—rare birds/reptiles bred in captivity to reintroduce. 4) Habitat restoration—wetland forests restored, wetlands created. 5) Environmental policy—phosphate bans in detergents, pesticide regulation. In Belgium, the number of bird species has remained stable, but populations have declined. Insects have dramatically declined (30-75% in some areas). This so-called 'insectmageddon' has serious consequences for food chains.",
            fr: "La Belgique est petite mais a une biodiversité remarquable."
        },
        comparison: [
            { threat: "Habitatverlies", cause: "Bebouwing, landbouw", impact: "Soorten verliezen hun thuis" },
            { threat: "Vervuiling", cause: "Pesticides, stikstof", impact: "Insecten sterven, water vervuild" },
            { threat: "Klimaatverandering", cause: "CO₂ emissies", impact: "Mismatch bloei/insecten/vogels" },
            { threat: "Invasieve soorten", cause: "Import, ontsnapping", impact: "Inheemse soorten verdrongen" }
        ],
        relatedSpecies: ["gen_parus_major", "gen_plantago_major"],
        quiz: [
            {
                question: {
                    nl: "Hoeveel soorten zijn in België geregistreerd?",
                    en: "How many species are recorded in Belgium?",
                    fr: "Combien d'espèces sont enregistrées en Belgique?"
                },
                correct: 1,
                options: [
                    { nl: "~10.000", en: "~10,000", fr: "~10 000" },
                    { nl: "~50.000", en: "~50,000", fr: "~50 000" },
                    { nl: "~100.000", en: "~100,000", fr: "~100 000" }
                ]
            },
            {
                question: {
                    nl: "Wat is de GROOTSTE bedreiging voor biodiversiteit in België?",
                    en: "What is the BIGGEST threat to biodiversity in Belgium?",
                    fr: "Quelle est la PLUS GRANDE menace pour la biodiversité en Belgique?"
                },
                correct: 0,
                options: [
                    { nl: "Habitatverlies", en: "Habitat loss", fr: "Perte d'habitat" },
                    { nl: "Invasieve soorten", en: "Invasive species", fr: "Espèces envahissantes" },
                    { nl: "Jacht", en: "Hunting", fr: "La chasse" }
                ]
            },
            {
                question: {
                    nl: "Wat is INSECTMAGEDDON?",
                    en: "What is INSECTMAGEDDON?",
                    fr: "Qu'est-ce que l'INSECTMAGEDDON?"
                },
                correct: 1,
                options: [
                    { nl: "Een film over insecten", en: "A movie about insects", fr: "Un film sur les insectes" },
                    { nl: "De dramatische afname van insectpopulaties (30-75% in sommige gebieden)", en: "Dramatic decline of insect populations (30-75% in some areas)", fr: "Déclin dramatique des populations d'insectes (30-75% dans certaines zones)" },
                    { nl: "Een invasieve insectensoort", en: "An invasive insect species", fr: "Une espèce d'insecte envahissante" }
                ]
            }
        ]
    },

    // ────────────────────────────────────────────────────────────────────────
    // 15. PADDENSTOELEN ≠ PLANTEN
    // ────────────────────────────────────────────────────────────────────────
    {
        id: "fungi_kingdom",
        icon: "🍄",
        color: "#8b6f47",
        hue: 35,
        name: {
            nl: "Schimmels: Het Vergeten Rijk",
            en: "Fungi: The Forgotten Kingdom",
            fr: "Champignons: Le Royaume Oublié"
        },
        summary: {
            nl: "Waarom zijn paddenstoelen niet planten",
            en: "Why fungi are not plants",
            fr: "Pourquoi les champignons ne sont pas des plantes"
        },
        content: {
            nl: "Paddenstoelen (of schimmels) worden vaak als planten beschouwd, maar ze zijn een volledig ander rijk—bijna dichter bij dieren dan planten. Dit is waarom: CELWANDEN: Planten hebben celwanden van CELLULOSE. Schimmels hebben celwanden van CHITINE (het materiaal van insectenschalen). VOEDING: Planten maken hun eigen voedsel via fotosynthese. Schimmels hebben geen chlorofyl, dus ze kunnen niet fotosynthesen. In plaats daarvan absorbeert ze voedsel uit hun omgeving door enzymes uit te scheiden die dood materiaal afbreken. Dit maakt ze HETEROTROFEN (zoals dieren), niet AUTOTROFEN (zoals planten). GROEIWIJS: Planten groeien van zaad naar plant. Schimmels groeien van sporen in een netwerk van dunne draden genaamd HYPHEN. Dit netwerk heet MYCELIUM. Hypen zijn meestal onzichtbaar voor het menselijk oog—wat we zien (de paddestoel) is eigenlijk het vruchtlichaam voor sporeverstrooiing. ECOLOGISCHE ROL: Dit is waar het interessant wordt. Schimmels zijn AFBREKERS—ze breken dood organisch materiaal (dode bladeren, dode dieren) af en zetten het om in nutriënten die teruggaan naar de grond. Dit is ESSENTIEEL voor alle ecosystemen. Zonder schimmels, zou de natuur volstaan met dode organismen. SOORTEN: Er zijn ongeveer 150.000 beschreven schimmelsoorten (meer onbeschreven). In België hebben we paddestoenles (voedsel voor ons), schimmels in hout (afbraak), mycorrhiza-schimmels (werken samen met plantenwortels), gisten (gebruikt in bier/brood), en slechte schimmels (ziekten van oogsten).",
            en: "Fungi (or fungi) are often considered plants, but they are an entirely different kingdom—actually closer to animals than plants. Here's why: CELL WALLS: Plants have cell walls of CELLULOSE. Fungi have cell walls of CHITIN (the material of insect shells). NUTRITION: Plants make their own food via photosynthesis. Fungi have no chlorophyll, so they can't photosynthesize. Instead, they absorb food from their environment by secreting enzymes that break down dead material. This makes them HETEROTROPHS (like animals), not AUTOTROPHS (like plants). GROWTH: Plants grow from seed to plant. Fungi grow from spores into a network of thin threads called HYPHAE. This network is called MYCELIUM. Hyphae are usually invisible to the human eye—what we see (the mushroom) is actually the fruiting body for spore dispersal. ECOLOGICAL ROLE: This is where it gets interesting. Fungi are DECOMPOSERS—they break down dead organic material (dead leaves, dead animals) and convert it to nutrients that return to soil. This is ESSENTIAL for all ecosystems. Without fungi, nature would be suffocated by dead organisms. SPECIES: There are about 150,000 described fungal species (more undescribed). In Belgium we have mushrooms (food for us), wood fungi (decomposition), mycorrhiza fungi (work with plant roots), yeasts (used in beer/bread), and bad fungi (crop diseases).",
            fr: "Les champignons (ou fungi) sont souvent considérés comme des plantes, mais c'est un règne entièrement différent."
        },
        comparison: [
            { feature: "Celwand", plant: "Cellulose", fungi: "Chitine" },
            { feature: "Voeding", plant: "Autotroph (eigen voedsel via fotosynthese)", fungi: "Heterotroph (absorberen extern voedsel)" },
            { feature: "Groeiwijs", plant: "Zaad → plant", fungi: "Spore → hyphen-netwerk (mycelium)" },
            { feature: "Rol", plant: "Producent (energie uit zon)", fungi: "Afbreker (energierecyclage)" },
            { feature: "Chlorofyl", plant: "Ja (groen)", fungi: "Nee" }
        ],
        relatedSpecies: ["fungi_example_species"],
        quiz: [
            {
                question: {
                    nl: "Wat is het materiaal van schimmelscelwanden?",
                    en: "What is the material of fungal cell walls?",
                    fr: "Quel est le matériau des parois cellulaires des champignons?"
                },
                correct: 0,
                options: [
                    { nl: "Chitine", en: "Chitin", fr: "Chitine" },
                    { nl: "Cellulose", en: "Cellulose", fr: "Cellulose" },
                    { nl: "Keratine", en: "Keratin", fr: "Kératine" }
                ]
            },
            {
                question: {
                    nl: "Kunnen schimmels FOTOSYNTHESE doen?",
                    en: "Can fungi perform PHOTOSYNTHESIS?",
                    fr: "Les champignons peuvent-ils faire la PHOTOSYNTHÈSE?"
                },
                correct: 1,
                options: [
                    { nl: "Ja, zij hebben chlorofyl", en: "Yes, they have chlorophyll", fr: "Oui, ils ont de la chlorophylle" },
                    { nl: "Nee, zij hebben geen chlorofyl en absorberen voedsel", en: "No, they lack chlorophyll and absorb food", fr: "Non, ils manquent de chlorophylle et absorbent la nourriture" },
                    { nl: "Slechts sommige schimmels kunnen", en: "Only some fungi can", fr: "Seul certains champignons peuvent" }
                ]
            },
            {
                question: {
                    nl: "Wat is de ecologische rol van schimmels (afbrekers)?",
                    en: "What is the ecological role of fungi (decomposers)?",
                    fr: "Quel est le rôle écologique des champignons (décomposeurs)?"
                },
                correct: 1,
                options: [
                    { nl: "Maken eten en zuurstof voor planten", en: "Make food and oxygen for plants", fr: "Produire de la nourriture et de l'oxygène pour les plantes" },
                    { nl: "Breken dood materiaal af, recyclen nutriënten terug naar grond", en: "Break down dead material, recycle nutrients back to soil", fr: "Décomposer la matière morte, recycler les nutriments vers le sol" },
                    { nl: "Verdrijven insecten uit bomen", en: "Drive insects from trees", fr: "Chasser les insectes des arbres" }
                ]
            }
        ]
    }
];
