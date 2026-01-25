import fs from 'fs';
import path from 'path';

const assetDir = path.join(process.cwd(), 'public', 'gallery_assets');
const manifestFile = path.join(process.cwd(), 'src', 'galleryManifest.json');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });

  return arrayOfFiles;
}

function audit() {
    if (!fs.existsSync(manifestFile)) {
        console.error("❌ Run 'npm run manifest' first.");
        return;
    }

    const manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8'));
    const manifestImages = new Set(Object.values(manifest).flat());
    
    const physicalFiles = getAllFiles(assetDir).map(p => {
        // Convert OS path to browser-style path
        return p.split('public')[1].replace(/\\/g, '/');
    });

    const untracked = physicalFiles.filter(f => !manifestImages.has(f));

    console.log("========================================");
    console.log("       ASSET AUDIT (gallery_assets)     ");
    console.log("========================================");
    console.log(`Images found in folders:  ${physicalFiles.length}`);
    console.log(`Images in manifest:      ${manifestImages.size}`);
    
    if (untracked.length > 0) {
        console.log(`\n⚠️  The following files are in your folders but NOT being shown:`);
        untracked.forEach(f => console.log(` - ${f}`));
        console.log("\n(Check if these have the wrong file extension or are in an unknown category folder)");
    } else {
        console.log("\n✅ Perfect! Your folder structure is 100% in sync with the manifest.");
    }
    console.log("========================================\n");
}

audit();