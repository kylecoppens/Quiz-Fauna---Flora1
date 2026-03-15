import os
import re
import urllib.request
import string
import random
from urllib.parse import urlparse

base_path = '/Users/mac/Downloads/Quiz Fauna & Flora'
data_dir = os.path.join(base_path, 'js', 'data')
assets_dir = os.path.join(base_path, 'assets', 'images')

os.makedirs(assets_dir, exist_ok=True)

def process_files():
    files = [f for f in os.listdir(data_dir) if f.endswith('.js') and f != 'init.js']
    
    for file in files:
        file_path = os.path.join(data_dir, file)
        
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            
        # 1. Download images
        image_matches = re.finditer(r'image:\s*"([^"]+)"', content)
        updated_content = content
        
        for match in image_matches:
            url = match.group(1)
            if url.startswith('assets/images/') or not url.startswith('http'):
                continue
                
            parsed = urlparse(url)
            filename = os.path.basename(parsed.path)
            if '.' not in filename:
                filename += '.jpg'
                
            safe_id = ''.join(random.choices(string.ascii_lowercase + string.digits, k=6))
            safe_filename = file.split('.')[0] + '_' + safe_id + '_' + re.sub(r'[^a-zA-Z0-9.\-_]', '_', filename)
            dest_path = os.path.join(assets_dir, safe_filename)
            
            print(f"Downloading {url} -> {dest_path}")
            try:
                # Some sites need a User-Agent
                req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'})
                with urllib.request.urlopen(req) as response, open(dest_path, 'wb') as out_file:
                    out_file.write(response.read())
                updated_content = updated_content.replace(url, f"assets/images/{safe_filename}")
            except Exception as e:
                print(f"Failed to download {url}: {e}")
                
        # 2. Add size and diet fields
        def repl(m):
            whole = m.string
            offset = m.start()
            before = whole[max(0, offset - 150):offset]
            if 'size:' in before:
                return m.group(0)
            injection = '''size: {
            nl: "Variërend",
            en: "Varies",
            fr: "Variable"
        },
        diet: {
            nl: "Divers",
            en: "Diverse",
            fr: "Divers"
        },
        '''
            return injection + m.group(0)
            
        updated_content = re.sub(r'image:\s*"[^"]+"', repl, updated_content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(updated_content)
            
        print(f"Updated {file}")

if __name__ == "__main__":
    process_files()
    print("Done")
