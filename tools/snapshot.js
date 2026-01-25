import fs from 'fs';
import path from 'path';

const OUTPUT_FILE = 'project-snapshot.txt';
const IGNORE_DIRS = ['node_modules', '.git', 'dist', 'trash'];
const IGNORE_FILES = ['package-lock.json', OUTPUT_FILE];

const SITUATION_REPORT = `
--- SITUATION ---
1. Project: Reverse-engineering cuecue.art (Source lost).
2. Goal: 100% Exact "Carbon Copy" of the original site logic and layout.
3. Tech Stack: Vite, React 18, Tailwind CSS v4, HashRouter.
4. System: Folder-driven gallery architecture via /public/gallery_assets/ and src/galleryManifest.json.
`;

const DIRECTIVES = `
--- DIRECTIVES ---
1. THUMBNAILS: Must use 'md:scale-125' and 'md:brightness-50' on hover to pop out of frame.
2. ALIGNMENT: Desktop galleries use two-column layout forced by 'md:max-w-2xl'.
3. NAVIGATION: Mobile menu removes the border between the top bar and dropdown when open.
4. DATA LOGIC: Routes and images are generated dynamically from /tools/generate-manifest.js.
5. EXCEPTIONS: 'Installation Performance' uses a manual layout to support interleaved text and video.
6. SORTING: All images must be sorted as alphabetical strings (img1, img10, img2).
7. OPTIMIZATION: RAW, TIFF, and PDF files are converted to WebP via 'npm run convert' to ensure browser compatibility.
`;

function getTree(dir, prefix = '') {
    let results = '';
    const files = fs.readdirSync(dir);
    files.forEach((file, index) => {
        if (IGNORE_DIRS.includes(file)) return;
        const filePath = path.join(dir, file);
        const isLast = index === files.length - 1;
        results += `${prefix}${isLast ? '└── ' : '├── '}${file}\n`;
        if (fs.statSync(filePath).isDirectory()) {
            results += getTree(filePath, prefix + (isLast ? '    ' : '│   '));
        }
    });
    return results;
}

function compile() {
    console.log("📸 Generating project snapshot...");
    let content = `PROJECT SNAPSHOT: ${new Date().toISOString()}\n`;
    content += SITUATION_REPORT + "\n";
    content += DIRECTIVES + "\n";
    content += "--- FOLDER STRUCTURE ---\n";
    content += getTree(process.cwd()) + "\n";

    const walkAndAppend = (dir) => {
        const files = fs.readdirSync(dir);
        files.forEach(file => {
            const fullPath = path.join(dir, file);
            if (IGNORE_DIRS.some(d => fullPath.includes(d))) return;
            if (IGNORE_FILES.includes(file)) return;

            if (fs.statSync(fullPath).isDirectory()) {
                walkAndAppend(fullPath);
            } else if (/\.(js|jsx|css|json|html|config\.js)$/.test(file)) {
                const relativePath = path.relative(process.cwd(), fullPath);
                content += `\n================================================\n`;
                content += `FILE: ${relativePath}\n`;
                content += `================================================\n`;
                content += fs.readFileSync(fullPath, 'utf8') + "\n";
            }
        });
    };

    walkAndAppend(process.cwd());
    fs.writeFileSync(OUTPUT_FILE, content);
    console.log(`✅ Snapshot saved to ${OUTPUT_FILE}`);
}

compile();