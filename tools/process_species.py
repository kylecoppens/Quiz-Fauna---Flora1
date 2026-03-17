
import os
import re
import urllib.request
import json
import urllib.parse
import time

data_dir = '/Users/mac/Downloads/Quiz Fauna & Flora/js/data'
files = [f for f in os.listdir(data_dir) if f.endswith('.js') and f not in ['init.js', 'species_data.js']]

all_species_text = []

# 1. Collect existing data
for file in files:
    with open(os.path.join(data_dir, file), 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = re.sub(r'//.*$', '', content, flags=re.MULTILINE)
    pattern = r'window\.speciesData\.push\(\s*([\s\S]*?)\s*\);'
    matches = re.findall(pattern, content)
    
    for items in matches:
        items = items.strip()
        if items.startswith('[') and items.endswith(']'):
            items = items[1:-1].strip()
        if items:
            all_species_text.append(items)

def clean_item(text):
    text = text.strip()
    if text.endswith(','):
        text = text[:-1].strip()
    return text

cleaned_items = [clean_item(text) for text in all_species_text]

# 2. Fetch missing species
scraper_list = [
"Turdus merula", "Erithacus rubecula", "Parus major", "Cyanistes caeruleus", "Passer domesticus", 
"Pica pica", "Corvus corone", "Garrulus glandarius", "Columba palumbus", "Sturnus vulgaris", 
"Vulpes vulpes", "Meles meles", "Sciurus vulgaris", "Erinaceus europaeus", "Capreolus capreolus", 
"Vipera berus", "Natrix natrix", "Anguis fragilis", "Lacerta agilis", "Rana temporaria", 
"Bufo bufo", "Salamandra salamandra", "Quercus robur", "Fagus sylvatica", "Betula pendula", 
"Acer pseudoplatanus", "Fraxinus excelsior", "Corylus avellana", "Taraxacum officinale", 
"Bellis perennis", "Achillea millefolium", "Plantago lanceolata", "Urtica dioica", 
"Amanita muscaria", "Boletus edulis", "Cantharellus cibarius", "Agaricus campestris", 
"Pleurotus ostreatus"
]

combined_text = "\n".join(cleaned_items)
missing_species = []
for species in scraper_list:
    if species not in combined_text:
        missing_species.append(species)

print(f"Fetching {len(missing_species)} missing species...")

import ssl

context = ssl._create_unverified_context()

fetched_items = []
for species in missing_species:
    print(f"  Requesting {species}...")
    url = "https://en.wikipedia.org/api/rest_v1/page/summary/" + urllib.parse.quote(species)
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'BelgianNatureQuizUpdater/1.0 (contact: user@example.com)'})
        with urllib.request.urlopen(req, context=context) as resp:
            data = json.loads(resp.read().decode())
            extract = data.get("extract", "No description available.").replace('"', "'")
            img_url = data.get("originalimage", {}).get("source", data.get("thumbnail", {}).get("source", ""))
            title = data.get("title", species)
            
            # Rough category assignment
            cat = "fauna"
            if any(x in species for x in ["Quercus", "Fagus", "Betula", "Acer", "Fraxinus", "Corylus"]):
                cat = "trees"
            elif any(x in species for x in ["Taraxacum", "Bellis", "Achillea", "Plantago", "Urtica"]):
                cat = "flora"
            elif any(x in species for x in ["Amanita", "Boletus", "Cantharellus", "Agaricus", "Pleurotus"]):
                cat = "fungi"
            
            # Mapping common names if available from title
            name_nl = title
            name_en = title
            name_fr = title
            
            obj_js = f"""{{
        id: "ext_{species.replace(' ', '_').lower()}",
        scientific: "{species}",
        family: "Unknown",
        category: "{cat}",
        difficulty: "medium",
        name: {{ nl: "{name_nl}", en: "{name_en}", fr: "{name_fr}" }},
        habitat: {{ nl: "België", en: "Belgium", fr: "Belgique" }},
        rarity: {{ nl: "Algemeen", en: "Common", fr: "Commun" }},
        description: {{ nl: "{extract}", en: "{extract}", fr: "{extract}" }},
        size: {{ nl: "---", en: "---", fr: "---" }},
        diet: {{ nl: "---", en: "---", fr: "---" }},
        image: "{img_url}"
    }}"""
            fetched_items.append(obj_js)
    except Exception as e:
        print(f"  Error for {species}: {e}")
    time.sleep(0.3)

# 3. Final Write
final_content = "// species_data.js - Consolidated and Cleaned\n"
final_content += "window.speciesData = [\n"
final_content += ",\n".join(cleaned_items)
if fetched_items:
    final_content += ",\n" + ",\n".join(fetched_items)
final_content += "\n];\n"

with open(os.path.join(data_dir, 'species_data.js'), 'w', encoding='utf-8') as f:
    f.write(final_content)

print(f"Finished. Total species in data: {len(cleaned_items) + len(fetched_items)}")
