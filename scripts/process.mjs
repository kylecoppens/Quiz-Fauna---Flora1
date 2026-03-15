import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const basePath = '/Users/mac/Downloads/Quiz Fauna & Flora';
const dataDir = path.join(basePath, 'js', 'data');
const assetsDir = path.join(basePath, 'assets', 'images');

if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
}

async function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const protocol = url.startsWith('https') ? https : http;

        protocol.get(url, (response) => {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                // follow redirect
                const rUrl = response.headers.location;
                const rProto = rUrl.startsWith('https') ? https : http;
                rProto.get(rUrl, (res) => {
                    res.pipe(file);
                    file.on('finish', () => { file.close(resolve); });
                }).on('error', reject);
            } else {
                response.pipe(file);
                file.on('finish', () => { file.close(resolve); });
            }
        }).on('error', (err) => {
            fs.unlink(dest, () => { });
            reject(err);
        });
    });
}

async function processFiles() {
    const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js') && f !== 'init.js');
    for (const file of files) {
        const filePath = path.join(dataDir, file);
        let content = fs.readFileSync(filePath, 'utf-8');
        let updatedContent = content;

        // 1. Download images and replace URLs
        const imageRegex = /image:\s*"([^"]*)"/g;
        const matches = [...content.matchAll(imageRegex)];

        for (const match of matches) {
            const fullMatch = match[0];
            let url = match[1];

            // If already a local file, skip
            if (url.startsWith('assets/images/') || !url.startsWith('http')) continue;

            const urlObj = new URL(url);
            let filename = path.basename(urlObj.pathname);
            if (!filename.includes('.')) filename += '.jpg';

            // Clean up filename
            const safeFilename = path.parse(file).name + '_' + Math.random().toString(36).substring(2, 8) + '_' + filename.replace(/[^a-zA-Z0-9.\-_]/g, '_');
            const destPath = path.join(assetsDir, safeFilename);

            console.log(`Downloading ${url} -> ${destPath}`);
            try {
                await downloadImage(url, destPath);
                // Replace this specific URL globally in the file content 
                // Using regex replace for exactly this URL string.
                updatedContent = updatedContent.replace(url, `assets/images/${safeFilename}`);
            } catch (e) {
                console.error(`Failed to download ${url}: ${e.message}`);
            }
        }

        // 2. Add size and diet fields if not present.
        updatedContent = updatedContent.replace(/image:\s*"[^"]+"/g, (match, offset, whole) => {
            const before = whole.substring(Math.max(0, offset - 150), offset);
            if (before.includes('size:')) return match;

            const injection = `size: {
            nl: "Variërend",
            en: "Varies",
            fr: "Variable"
        },
        diet: {
            nl: "Divers",
            en: "Diverse",
            fr: "Divers"
        },
        `;
            return injection + match;
        });

        fs.writeFileSync(filePath, updatedContent);
        console.log(`Updated ${file}`);
    }
}

processFiles().then(() => console.log('All files processed.')).catch(console.error);
