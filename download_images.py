import hashlib
import urllib.request
import os

# Updated User-Agent to match typical browser and prevent 403s
HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Referer': 'https://commons.wikimedia.org/'
}

def get_wikimedia_url(filename):
    # Standard Wikimedia Commons URL structure based on MD5 of filename
    filename = filename.replace(' ', '_')
    md5 = hashlib.md5(filename.encode('utf-8')).hexdigest()
    return f"https://upload.wikimedia.org/wikipedia/commons/{md5[0]}/{md5[0:2]}/{filename}"

def download_image(filename, target_path):
    url = get_wikimedia_url(filename)
    print(f"Downloading: {url} -> {target_path}")
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req) as response:
            with open(target_path, 'wb') as f:
                f.write(response.read())
        
        # Check size
        size = os.path.getsize(target_path)
        if size < 1000:
            print(f"Warning: File too small ({size}B). Likely an error page.")
            return False
        return True
    except Exception as e:
        print(f"Failed to download {filename}: {e}")
        return False

# List of canonical filenames discovered or known
downloads = [
    ("Common_kingfisher_(front).jpg", "assets/images/common-kingfisher-birds.jpg"),
    ("A_red_squirrel.jpg", "assets/images/red-squirrel-fauna.jpg"),
    ("Giant_stag_beetle.jpg", "assets/images/stag-beetle-insects.jpg"),
    ("Barn-Swallow.jpg", "assets/images/barn-swallow-birds.jpg"),
    ("White_wagtail_(Motacilla_alba_alba).jpg", "assets/images/white-wagtail-birds.jpg"),
    ("Blue_Tit_(12416609855).jpg", "assets/images/blue-tit-birds.jpg"),
    ("Common_buzzard_in_flight.jpg", "assets/images/common-buzzard-birds.jpg"),
    ("Common_Wood_Pigeon_facing_right.jpg", "assets/images/common-wood-pigeon-birds.jpg"),
    ("Common_sparrow_May_2009.jpg", "assets/images/house-sparrow-birds.jpg"),
    ("European_Goldfinch_-_Flickr_-_gbsngrhm.jpg", "assets/images/european-goldfinch-birds.jpg"),
    ("Bank_Vole.jpg", "assets/images/bank-vole-fauna.jpg"),
    ("Watervleermuis_-_Daubenton's_bat_-_Myotis_dabentonii.jpg", "assets/images/daubentons-bat-fauna.jpg"),
    ("Common_Toad.jpg", "assets/images/common-toad-fauna.jpg"),
    ("Common_frog.jpg", "assets/images/common-frog-fauna.jpg"),
    ("Grass_snake_(Natrix_natrix)_2.jpg", "assets/images/grass-snake-fauna.jpg"),
    ("Fly_Agaric_closeup.jpg", "assets/images/fly-agaric-fungi.jpg"),
    ("Apis_mellifera_aka_honey_bee.jpg", "assets/images/honey-bee-insects.jpg"),
    ("Hedgehog_29.jpg", "assets/images/european-hedgehog-fauna.jpg"),
    ("Red_Fox_(4).jpg", "assets/images/red-fox-fauna.jpg"),
    ("Badger-badger.jpg", "assets/images/european-badger-fauna.jpg"),
    ("Brown_Rat_(Rattus_norvegicus).jpg", "assets/images/brown-rat-fauna.jpg"),
    ("House_mouse_(Mus_musculus)_2766.jpg", "assets/images/house-mouse-fauna.jpg"),
    ("Bever_-_Eurasian_beaver_-_Castor_fiber_5.jpg", "assets/images/eurasian-beaver-fauna.jpg"),
    ("European_Polecat_(Mustela_putorius)-8.jpg", "assets/images/european-polecat-fauna.jpg"),
    ("Wild_Boar_frontal.jpg", "assets/images/wild-boar-fauna.jpg"),
    ("Bluebells_(9059001727).jpg", "assets/images/bluebell-flora.jpg"),
    ("Snowdrop_(Unsplash).jpg", "assets/images/snowdrop-flora.jpg"),
    ("Wild_garlic_flowers.jpg", "assets/images/wild-garlic-flora.jpg"),
    ("Anemone_nemorosa_(06).jpg", "assets/images/wood-anemone-flora.jpg"),
    ("Lesser_celandine_im.JPG", "assets/images/lesser-celandine-flora.jpg")
]

if __name__ == "__main__":
    if not os.path.exists("assets/images"):
        os.makedirs("assets/images")
    
    for filename, target in downloads:
        download_image(filename, target)
