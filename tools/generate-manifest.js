import fs from 'fs';
import path from 'path';

const assetDir = path.join(process.cwd(), 'public', 'gallery_assets');
const outputFile = path.join(process.cwd(), 'src', 'galleryManifest.json');

function getGalleryData() {
    const manifest = {};
    const categories = ['artist_practice', 'events', 'exhibitions', 'personal_projects', 'static_pages'];

    categories.forEach(cat => {
        const catPath = path.join(assetDir, cat);
        if (!fs.existsSync(catPath)) return;

        const subfolders = fs.readdirSync(catPath);
        subfolders.forEach(sub => {
            const subPath = path.join(catPath, sub);
            if (fs.statSync(subPath).isDirectory()) {
                const images = fs.readdirSync(subPath)
                    .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
                    // Standard string sort (img1, img10, img2) to match live site
                    .sort((a, b) => a.localeCompare(b, undefined, { numeric: false }));
                
                let routeKey;
                if (cat === 'artist_practice') routeKey = `/${sub}`;
                else if (cat === 'static_pages') routeKey = `/${sub}`;
                else routeKey = `/${cat}/${sub}`;
                
                manifest[routeKey] = images.map(img => `/gallery_assets/${cat}/${sub}/${img}`);
            }
        });
    });
    return manifest;
}

const data = getGalleryData();
fs.writeFileSync(outputFile, JSON.stringify(data, null, 2));
console.log("📝 Manifest successfully generated in src/galleryManifest.json!");