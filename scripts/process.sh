#!/bin/bash
cd "/Users/mac/Downloads/Quiz Fauna & Flora"
mkdir -p assets/images

for f in js/data/*.js; do
    if [ "$f" = "js/data/init.js" ]; then continue; fi
    echo "Processing $f"

    # Inject size and diet using awk
    awk '
    /size:/ { found_size = 1 }
    /image: *"/ {
        if (!found_size) {
            print "        size: {"
            print "            nl: \"Variërend\","
            print "            en: \"Varies\","
            print "            fr: \"Variable\""
            print "        },"
            print "        diet: {"
            print "            nl: \"Divers\","
            print "            en: \"Diverse\","
            print "            fr: \"Divers\""
            print "        },"
        }
        print $0
        found_size = 0 # reset for next species just in case
        next
    }
    { print $0 }
    ' "$f" > "$f.tmp" && mv "$f.tmp" "$f"

    # Extract and download images
    grep -o 'image: *"[^"]*"' "$f" | awk -F'"' '{print $2}' | while read -r url; do
        if [[ "$url" != http* ]]; then continue; fi
        
        hash=$(echo -n "$url" | md5)
        filename="${hash}.jpg"
        
        if [ ! -f "assets/images/$filename" ]; then
            echo "Downloading $url to assets/images/$filename"
            curl -s -L -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)" "$url" -o "assets/images/$filename"
        fi
        
        # Escape special characters for sed
        escaped_url=$(echo "$url" | sed 's/[&/\]/\\&/g')
        sed -i '' "s|image: *\"$escaped_url\"|image: \"assets/images/$filename\"|g" "$f"
    done
done
echo "Done processing all files"
