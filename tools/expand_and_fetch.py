
import os
import re
import urllib.request
import json
import urllib.parse
import time
import ssl

context = ssl._create_unverified_context()

DATA_FILE = '/Users/mac/Downloads/Quiz Fauna & Flora/js/data/species_data.js'
IMAGE_DIR = '/Users/mac/Downloads/Quiz Fauna & Flora/assets/images/'
# USER REQUEST: No restriction. Set to very high.
MAX_SIZE_KB = 20000 

NEW_SPECIES = [
    # Mammals
    "Felis silvestris", "Martes martes", "Mustela erminea", "Lutra lutra", 
    "Eptesicus serotinus", "Myotis daubentonii", "Plecotus auritus", 
    "Phoca vitulina", "Halichoerus grypus", "Mustela putorius", 
    "Arvicola amphibius", "Ondatra zibethicus", "Micromys minutus", 
    "Apodemus sylvaticus", "Rattus norvegicus",
    
    # Birds
    "Accipiter nisus", "Falco tinnunculus", "Falco peregrinus", 
    "Egretta garzetta", "Anser anser", "Aythya fuligula", "Fulica atra", 
    "Gallinula chloropus", "Larus argentatus", "Larus ridibundus", 
    "Sterna hirundo", "Streptopelia decaocto", "Cuculus canorus", 
    "Strix aluco", "Athene noctua", "Asio otus", "Apus apus", 
    "Dendrocopos major", "Alauda arvensis", "Delichon urbicum", 
    "Anthus pratensis", "Troglodytes troglodytes", "Prunella modularis", 
    "Luscinia megarhynchos", "Phoenicurus ochruros", "Saxicola rubicola", 
    "Turdus philomelos", "Turdus pilaris", "Turdus viscivorus", 
    "Sylvia atricapilla", "Sylvia borin", "Sylvia communis", 
    "Phylloscopus collybita", "Phylloscopus trochilus", "Regulus regulus", 
    "Regulus ignicapilla", "Muscicapa striata", "Aegithalos caudatus", 
    "Periparus ater", "Lophophanes cristatus", "Poecile palustris", 
    "Sitta europaea", "Certhia brachydactyla", "Corvus monedula", 
    "Corvus frugilegus", "Corvus corax", "Passer montanus", 
    "Chloris chloris", "Carduelis carduelis", "Linaria cannabina", 
    "Pyrrhula pyrrhula", "Coccothraustes coccothraustes", 
    "Emberiza citrinella", "Emberiza schoeniclus", "Gallus gallus", 
    "Pavo cristatus", "Cygnus atratus", "Branta canadensis",
    
    # Insects
    "Papilio machaon", "Vanessa cardui", "Celastrina argiolus", 
    "Pieris rapae", "Anthocharis cardamines", "Polygonia c-album", 
    "Pararge aegeria", "Coenonympha pamphilus", "Maniola jurtina", 
    "Lycaena phlaeas", "Ochlodes sylvanus", "Thymelicus sylvestris", 
    "Bombus lapidarius", "Bombus hortorum", "Vespa crabro", 
    "Polistes dominula", "Adalia bipunctata", "Harmonia axyridis", 
    "Melolontha melolontha", "Geotrupes stercorarius", "Carabus auratus", 
    "Lampyris noctiluca", "Gryllus campestris", "Tettigonia viridissima", 
    "Chorthippus parallelus", "Libellula depressa", "Orthetrum cancellatum", 
    "Aeshna cyanea", "Anax imperator", "Ischnura elegans", 
    "Enallagma cyathigerum", "Pyrrhosoma nymphula", "Calliphora vicina", 
    "Lucilia caesar", "Culex pipiens", "Anopheles plumbeus",
    
    # Plants
    "Carpinus betulus", "Taxus baccata", "Sorbus aucuparia", 
    "Pinus sylvestris", "Alnus glutinosa", "Salix alba", "Salix caprea", 
    "Populus tremula", "Tilia cordata", "Ilex aquifolium", 
    "Sambucus nigra", "Ranunculus acris", "Ranunculus ficaria", 
    "Primula elatior", "Primula veris", "Galanthus nivalis", 
    "Narcissus pseudonarcissus", "Dactylorhiza fuchsii", 
    "Trifolium pratense", "Lathyrus pratensis", "Vicia sepium", 
    "Medicago lupulina", "Lotus corniculatus", "Anthyllis vulneraria", 
    "Chelidonium majus", "Fumaria officinalis", "Capsella bursa-pastoris", 
    "Cardamine pratensis", "Barbarea vulgaris", "Alliaria petiolata", 
    "Sisymbrium officinale", "Erysimum cheiranthoides", "Sinapis arvensis", 
    "Raphanus raphanistrum", "Reseda lutea", "Drosera rotundifolia", 
    "Sedum acre", "Sempervivum tectorum", "Saxifraga granulata", 
    "Chrysosplenium oppositifolium", "Parnassia palustris", "Ribes nigrum", 
    "Ribes rubrum", "Ribes uva-crispa", "Rubus fruticosus", 
    "Rubus idaeus", "Fragaria vesca", "Potentilla erecta", 
    "Potentilla anserina", "Potentilla reptans", "Geum urbanum", 
    "Rosa canina", "Sanguisorba minor", "Sanguisorba officinalis", 
    "Alchemilla vulgaris", "Prunus spinosa", "Prunus avium", 
    "Prunus padus", "Pyrus pyraster", "Malus sylvestris", 
    "Amelanchier lamarckii", "Clematis vitalba", "Viscum album", 
    "Calluna vulgaris", "Erica tetralix", "Vaccinium myrtillus",
    
    # Fungi
    "Marasmius oreades", "Lepista nuda", "Hypholoma fasciculare", 
    "Armillaria mellea", "Coprinus comatus", "Coprinopsis atramentaria", 
    "Panaeolus foenisecii", "Psathyrella candolleana", "Lactarius deliciosus", 
    "Russula emetica", "Russula cyanoxantha", "Russula virescens", 
    "Schizophyllum commune", "Exidia glandulosa", "Calvatia gigantea", 
    "Lycoperdon perlatum", "Phallus impudicus", "Mutinus caninus", 
    "Morchella esculenta", "Gyromitra esculenta", "Helvella crispa", 
    "Tuber melanosporum", "Nectria cinnabarina", "Aleuria aurantia", 
    "Sarcoscypha coccinea", "Peziza badia"
]

if not os.path.exists(IMAGE_DIR):
    os.makedirs(IMAGE_DIR)

def get_file_size(url):
    try:
        req = urllib.request.Request(url, method='HEAD', headers={'User-Agent': 'BelgianNatureQuizUpdater/2.0'})
        with urllib.request.urlopen(req, context=context) as resp:
            return int(resp.getheader('Content-Length', 0))
    except:
        return 0

def download_image(url, filename):
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'BelgianNatureQuizUpdater/2.0'})
        with urllib.request.urlopen(req, context=context) as resp:
            content = resp.read()
            if not content: return False
            with open(os.path.join(IMAGE_DIR, filename), 'wb') as f:
                f.write(content)
        return True
    except Exception as e:
        print(f"    Failed to download {filename}: {e}")
        return False

# 1. Read species data
with open(DATA_FILE, 'r', encoding='utf-8') as f:
    orig_content = f.read()

new_content = orig_content

# 2. Add New Species (Skeleton)
new_objs_text = []
existing_sci = set(re.findall(r'scientific:\s*"([^"]+)"', new_content))

pattern_obj = r'({[\s\S]*?})'

for species in NEW_SPECIES:
    if species in existing_sci: continue
    print(f"Adding new species: {species}")
    
    url = f"https://en.wikipedia.org/api/rest_v1/page/summary/{urllib.parse.quote(species)}"
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'BelgianNatureQuizUpdater/3.0'})
        with urllib.request.urlopen(req, context=context) as resp:
            data = json.loads(resp.read().decode())
            extract = data.get("extract", "No description available.").replace('"', "'")
            title = data.get("title", species)
            
            # Smart category assignment
            cat = "fauna"
            flora_keywords = ["Flora", "Plant", "Tree", "Flower", "Herb", "Vegetable", "Fruit"]
            fungi_keywords = ["Fungus", "Mushroom", "Mycology"]
            if any(k in extract or k in title for k in fungi_keywords): cat = "fungi"
            elif any(k in extract or k in title for k in flora_keywords): cat = "flora"
            
            # Refined category by common families
            if any(x in species for x in ["Quercus", "Fagus", "Betula", "Acer", "Fraxinus", "Corylus", "Carpinus", "Taxus", "Sorbus", "Pinus", "Alnus", "Salix", "Populus", "Tilia"]): cat = "trees"
            elif any(x in species for x in ["Pieris", "Bombus", "Apis", "Vespula", "Vespa", "Lucanus", "Coccinella", "Aglais", "Vanessa", "Papilio"]): cat = "insects"
            elif any(x in species for x in ["Turdus", "Parus", "Cyanistes", "Passer", "Pica", "Corvus", "Erithacus", "Ardea", "Anas", "Falco", "Buteo"]): cat = "birds"

            obj_js = f"""    {{
        id: "gen_{species.replace(' ', '_').lower()}",
        scientific: "{species}",
        family: "Unknown",
        category: "{cat}",
        difficulty: "medium",
        name: {{ nl: "{title}", en: "{title}", fr: "{title}" }},
        habitat: {{ nl: "België", en: "Belgium", fr: "Belgique" }},
        rarity: {{ nl: "Algemeen", en: "Common", fr: "Commun" }},
        description: {{ nl: "{extract}", en: "{extract}", fr: "{extract}" }},
        size: {{ nl: "---", en: "---", fr: "---" }},
        diet: {{ nl: "---", en: "---", fr: "---" }},
        image: "PENDING"
    }}"""
            new_objs_text.append(obj_js)
            time.sleep(0.5)
    except Exception as e:
        print(f"  Failed to fetch data for new species: {species} ({e})")

if new_objs_text:
    new_content = new_content.strip()
    if new_content.endswith('];'):
        new_content = new_content[:-2].strip() + ",\n" + ",\n".join(new_objs_text) + "\n];"
    elif new_content.endswith(']'):
        new_content = new_content[:-1].strip() + ",\n" + ",\n".join(new_objs_text) + "\n];"

# 3. Refresh matches for image processing
matches = re.findall(pattern_obj, new_content)

updated_count = 0
print(f"Processing images for {len(matches)} species entries...")

for obj_str in matches:
    sci_match = re.search(r'scientific:\s*"([^"]+)"', obj_str)
    if not sci_match: continue
    scientific_name = sci_match.group(1)
    
    cat_match = re.search(r'category:\s*"([^"]+)"', obj_str)
    category = cat_match.group(1) if cat_match else "unknown"
    
    filename = f"{scientific_name.replace(' ', '_').lower()}_{category.lower()}.jpg"
    filepath = os.path.join(IMAGE_DIR, filename)

    # USER REQUEST: Don't worry about 150KB. Skip only if file exists and is "healthy" (> 1KB)
    if os.path.exists(filepath) and os.path.getsize(filepath) > 1024:
        # Check if the entry already points to this local file
        if f'image: "assets/images/{filename}"' in obj_str:
            # print(f"  Skipping {scientific_name} - already has local image.")
            continue

    print(f"  Fetching image for {scientific_name}...")
    search_url = f"https://en.wikipedia.org/api/rest_v1/page/summary/{urllib.parse.quote(scientific_name)}"
    
    retries = 3
    success = False
    
    while retries > 0 and not success:
        try:
            req = urllib.request.Request(search_url, headers={'User-Agent': 'BelgianNatureQuizExpansionBot/1.1 (https://github.com/kylecoppens/Quiz-Fauna-Flora; contact: webmaster@example.com)'})
            with urllib.request.urlopen(req, context=context) as resp:
                data = json.loads(resp.read().decode())
                
                img_options = []
                # Prefer original for high quality
                if "originalimage" in data: img_options.append(data["originalimage"]["source"])
                if "thumbnail" in data: img_options.append(data["thumbnail"]["source"])
                
                for img_url in img_options:
                    size = get_file_size(img_url)
                    if size > 0:
                        print(f"    Selected: {img_url} ({size // 1024} KB)")
                        if download_image(img_url, filename):
                            old_img_pattern = r'image:\s*"[^"]+"'
                            new_img_line = f'image: "assets/images/{filename}"'
                            updated_obj = re.sub(old_img_pattern, new_img_line, obj_str)
                            new_content = new_content.replace(obj_str, updated_obj)
                            success = True
                            updated_count += 1
                            break
                
                if not success:
                    print(f"    No image found for {scientific_name}")
                    success = True 
                    
        except urllib.error.HTTPError as e:
            if e.code == 429:
                print(f"    Rate limited! Waiting 30 seconds... ({retries})")
                time.sleep(30)
                retries -= 1
            else:
                print(f"    HTTP Error: {e}")
                success = True
        except Exception as e:
            print(f"    Error: {e}")
            success = True
        
        time.sleep(4.0)

# 4. Write updated data file
with open(DATA_FILE, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"\nFinished! Total species entries: {len(re.findall(pattern_obj, new_content))}")
print(f"New images downloaded: {updated_count}")
