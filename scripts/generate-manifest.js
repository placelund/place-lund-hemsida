const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/images');
const outputPath = path.join(__dirname, '../src/data/image-manifest.json');

function scanDirectory(dir, baseDir = dir) {
  const manifest = {};

  function scan(currentDir) {
    const items = fs.readdirSync(currentDir);

    for (const item of items) {
      if (item.startsWith('.')) continue;

      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        scan(fullPath);
      } else if (item.match(/.(jpg|jpeg|png|gif|webp|svg)$/i)) {
        const relativePath = path.relative(baseDir, currentDir);
        const key = relativePath || '.';

        if (!manifest[key]) {
          manifest[key] = [];
        }

        const imagePath = `/images/${relativePath ? relativePath + '/' : ''}${item}`;
        manifest[key].push(imagePath);
      }
    }
  }

  scan(dir);
  return manifest;
}

console.log('🔄 Generating image manifest...\n');
const manifest = scanDirectory(imagesDir);
fs.writeFileSync(outputPath, JSON.stringify(manifest, null, 2));

const totalFolders = Object.keys(manifest).length;
const totalImages = Object.values(manifest).reduce((sum, arr) => sum + arr.length, 0);

console.log('✅ Image manifest generated successfully!');
console.log(`📝 Total folders: ${totalFolders}`);
console.log(`📸 Total images: ${totalImages}`);
console.log('💾 Saved to: src/data/image-manifest.json\n');
