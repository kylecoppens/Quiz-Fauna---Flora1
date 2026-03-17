import os
import json
import urllib.request
import urllib.parse
import time

species_list = [
"Turdus merula",
"Erithacus rubecula",
"Parus major",
"Cyanistes caeruleus",
"Passer domesticus",
"Pica pica",
"Corvus corone",
"Garrulus glandarius",
"Columba palumbus",
"Sturnus vulgaris",
"Vulpes vulpes",
"Meles meles",
"Sciurus vulgaris",
"Erinaceus europaeus",
"Capreolus capreolus",
"Vipera berus",
"Natrix natrix",
"Anguis fragilis",
"Lacerta agilis",
"Rana temporaria",
"Bufo bufo",
"Salamandra salamandra",
"Quercus robur",
"Fagus sylvatica",
"Betula pendula",
"Acer pseudoplatanus",
"Fraxinus excelsior",
"Corylus avellana",
"Taraxacum officinale",
"Bellis perennis",
"Achillea millefolium",
"Plantago lanceolata",
"Urtica dioica",
"Amanita muscaria",
"Boletus edulis",
"Cantharellus cibarius",
"Agaricus campestris",
"Pleurotus ostreatus"
]

root = "Belgium_species_dataset"
os.makedirs(root, exist_ok=True)


def get_summary(species):

    url = "https://en.wikipedia.org/api/rest_v1/page/summary/" + urllib.parse.quote(species)

    try:
        response = urllib.request.urlopen(url)
        data = json.loads(response.read().decode())
        return data.get("extract", "")
    except:
        return ""


def download_images(species, folder):

    url = (
        "https://en.wikipedia.org/w/api.php?"
        "action=query&prop=images&format=json&titles="
        + urllib.parse.quote(species)
    )

    try:

        response = urllib.request.urlopen(url)
        data = json.loads(response.read().decode())

        pages = data.get("query", {}).get("pages", {})

        for page in pages.values():

            images = page.get("images", [])

            for index, img in enumerate(images):

                if index >= 3:
                    return

                title = img.get("title", "")

                if not title.lower().endswith((".jpg",".jpeg",".png")):
                    continue

                title = title.replace("File:", "")

                img_url = "https://commons.wikimedia.org/wiki/Special:FilePath/" + urllib.parse.quote(title)

                filename = title.replace(" ", "_")
                path = os.path.join(folder, filename)

                try:
                    urllib.request.urlretrieve(img_url, path)
                    print("Downloaded:", filename)
                    time.sleep(1)
                except:
                    pass

    except:
        pass


for species in species_list:

    print("Processing:", species)

    folder = os.path.join(root, species.replace(" ", "_"))
    os.makedirs(folder, exist_ok=True)

    summary = get_summary(species)

    with open(os.path.join(folder, "info.txt"), "w", encoding="utf8") as f:
        f.write("Species: " + species + "\n\n")
        f.write(summary)

    download_images(species, folder)


print("Dataset complete.")