import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { pdfToPng } from 'pdf-to-png-converter';

const assetDir = path.join(process.cwd(), 'public', 'gallery_assets');

// Extensions to look for
const IMAGE_EXTS = ['.tiff', '.tif', '.cr2', '.nef', '.arw', '.dng'];
const PDF_EXTS = ['.pdf'];

async function walkAndConvert(dir) {
    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            await walkAndConvert(fullPath);
        } else {
            const ext = path.extname(file).toLowerCase();
            const fileNameNoExt = path.parse(file).name;

            // HANDLE PDFS (Updated for Windows Compatibility)
            if (PDF_EXTS.includes(ext)) {
                console.log(`⏳ Converting PDF: ${file} ...`);
                try {
                    const pngPages = await pdfToPng(fullPath, {
                        viewportScale: 2.0, // High quality scaling
                    });
                    
                    for (let i = 0; i < pngPages.length; i++) {
                        const pageNum = i + 1;
                        const outputPath = path.join(dir, `${fileNameNoExt}-page${pageNum}.webp`);
                        
                        // pngPages[i].content is the image buffer
                        await sharp(pngPages[i].content)
                            .webp({ quality: 85 })
                            .toFile(outputPath);
                        
                        console.log(`  └─ ✅ Page ${pageNum} -> ${fileNameNoExt}-page${pageNum}.webp`);
                    }
                    fs.unlinkSync(fullPath); // Delete original PDF
                    console.log(`🗑️ Deleted original PDF: ${file}`);
                } catch (err) {
                    console.error(`❌ Failed to convert PDF ${file}:`, err.message);
                }
            } 
            
            // HANDLE RAW/TIFF IMAGES
            else if (IMAGE_EXTS.includes(ext)) {
                const outputPath = path.join(dir, `${fileNameNoExt}.webp`);
                console.log(`⏳ Converting Image: ${file} ...`);
                try {
                    await sharp(fullPath)
                        .webp({ quality: 85 })
                        .toFile(outputPath);

                    console.log(`✅ Success: ${fileNameNoExt}.webp`);
                    fs.unlinkSync(fullPath);
                    console.log(`🗑️ Deleted original: ${file}`);
                } catch (err) {
                    console.error(`❌ Failed to convert image ${file}:`, err.message);
                }
            }
        }
    }
}

async function run() {
    console.log("🚀 Starting Asset Optimization (RAW/TIFF/PDF -> WebP)...");
    if (!fs.existsSync(assetDir)) {
        console.error("❌ Error: gallery_assets folder not found.");
        return;
    }
    await walkAndConvert(assetDir);
    console.log("\n✨ Optimization complete!");
    console.log("⚠️ Reminder: Run 'npm run manifest' to update the site with the new files.");
}

run();