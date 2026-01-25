# Cue Portfolio Reconstruction

This project is a high-fidelity reconstruction of the cuecue.art portfolio. It uses a folder-driven architecture to dynamically generate galleries while maintaining specific layout overrides for complex projects.

## 🚀 Initial Setup

To keep the repository lightweight, the high-resolution images are compressed.

1. Locate the gallery_assets.rar file.
2. Extract the contents directly into the /public folder.
3. Ensure the resulting path is: /public/gallery_assets/[categories]/[gallery_folders]/...

## 📁 Folder Architecture

The site logic is dictated by the structure of the public/gallery_assets/ directory:

- artist_practice/: Standard galleries (BW Film, Color Film, etc.).
- events/: Commercial event galleries.
- exhibitions/: Exhibition-specific galleries.
- personal_projects/: Standalone personal series.
- static_pages/: Images for pages with custom layouts (like Installation Performance).

## 📋 The Manifest System

Since React runs in the browser, it cannot scan folders in real-time. We use a manifest system to bridge the gap.

Every time you add, move, or rename an image or folder in gallery_assets, you must update the manifest by running: npm run manifest

This script (located in /tools/generate-manifest.js) generates src/galleryManifest.json, which the app uses to build all routes and thumbnails automatically.

## 🖼️ How to Add a New Standard Gallery

1. CREATE THE FOLDER: Go to public/gallery_assets/ and choose a category (e.g., events). Create a new folder using underscores for spaces (e.g., my_new_shoot).
2. ADD IMAGES: Drop your images inside. The first image alphabetically will be used as the cover thumbnail.
3. UPDATE MANIFEST: Run 'npm run manifest' in your terminal.
4. ADD DATE (Optional): If the gallery needs a date, open src/App.jsx, find the GALLERY_DATES object, and add the path and date (e.g., "/events/my_new_shoot": "01-25-26").

## 🛠️ Managing Exceptions

While most galleries are generated dynamically, some require custom interleaved text, video, or specific groupings.

Current Exceptions:
- Installation Performance: Uses src/pages/InstallationPerformance.jsx because it contains unique project descriptions and multiple YouTube embeds.

How to add a new Exception:
1. Create your new page component in src/pages/.
2. Create a corresponding folder in public/gallery_assets/static_pages/ and add your images.
3. In src/App.jsx, add your manual Route before the dynamic map.
4. Inside the dynamic .map() loop in App.jsx, add an if-statement to skip your route so it doesn't generate a standard gallery: if (path === "/your_new_route") return null;

## ⌨️ Available Commands

- npm run dev: Start the development server.
- npm run manifest: Re-scan folders and update the image database.
- npm run audit: Check for images in folders that aren't being displayed.
- npm run snapshot: Compile all code and structural logic into a single text file.
- npm run build: Build the project for production.

## ⚖️ Image Sorting

The system is configured to sort images as alphabetical strings (e.g., img1, img10, img11, img2) rather than purely numerically. This ensures the site matches the specific ordering of the original production build.

## ⚡ Optimizing Assets (Optional)

If you add high-resolution files (TIFF, RAW) or Documents (PDF) to your folders, they won't load in the browser.

1. Drop your `.tiff`, RAW, or `.pdf` files into any folder in `gallery_assets`.
2. Run: `npm run convert`
3. Run: `npm run manifest`

- **RAW/TIFF**: Converted to high-quality `.webp`.
- **PDF**: Every page in the PDF is extracted and converted into an individual `.webp` image (e.g., `document-page1.webp`).
- **Cleanup**: The original heavy files are deleted automatically after conversion.