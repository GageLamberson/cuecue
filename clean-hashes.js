import fs from 'fs';
import path from 'path';

const assetDir = path.join(process.cwd(), 'public', 'gallery_assets');

// Regex: matches a dot followed by exactly 20 hex characters at the end of a string
const HASH_REGEX = /\.[a-f0-9]{20}$/i;

function processDirectory(dir) {
    const items = fs.readdirSync(dir);

    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else {
            const ext = path.extname(item); // e.g., .jpg
            const nameOnly = path.basename(item, ext); // e.g., Image.ca889867...

            // Check if name contains the 20-char hash pattern
            if (HASH_REGEX.test(nameOnly)) {
                const cleanedNameOnly = nameOnly.replace(HASH_REGEX, '');
                let finalName = cleanedNameOnly + ext;
                let finalPath = path.join(dir, finalName);

                // Collision Logic: Ensure we don't overwrite existing files
                if (fs.existsSync(finalPath) && finalPath !== fullPath) {
                    let counter = 1;
                    while (fs.existsSync(path.join(dir, `${cleanedNameOnly}_${counter}${ext}`))) {
                        counter++;
                    }
                    finalName = `${cleanedNameOnly}_${counter}${ext}`;
                    finalPath = path.join(dir, finalName);
                }

                // Only rename if the name actually changed
                if (item !== finalName) {
                    fs.renameSync(fullPath, finalPath);
                    console.log(`✨ Cleaned: ${item} -> ${finalName}`);
                }
            }
        }
    }
}

function run() {
    console.log("🧹 Starting Filename Hash Cleanup...");
    if (!fs.existsSync(assetDir)) {
        console.error("❌ Error: public/gallery_assets not found.");
        return;
    }

    try {
        processDirectory(assetDir);
        console.log("\n✅ Cleanup finished!");
        console.log("⚠️  IMPORTANT: Run 'npm run manifest' now to sync these new filenames with the website.");
    } catch (err) {
        console.error("❌ Error during processing:", err.message);
    }
}

run();