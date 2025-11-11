const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public/images');
const outputFile = path.join(__dirname, '../src/data/image-manifest.json');

function getAllImages(dir, baseDir = dir) {
  let results = {};

  const list = fs.readdirSync(dir);

  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat && stat.isDirectory()) {
      Object.assign(results, getAllImages(filePath, baseDir));
    } else if (/\.(jpg|jpeg|png|gif|webp|avif)$/i.test(file)) {
      const relativePath = path.relative(baseDir, filePath);
      const folder = path.dirname(relativePath);

      if (!results[folder]) {
        results[folder] = [];
      }

      // Convert Windows paths to forward slashes
      const webPath = relativePath.split(path.sep).join('/');
      results[folder].push(`/images/${webPath}`);
    }
  });

  return results;
}

const manifest = getAllImages(publicDir);

// Ensure output directory exists
const outputDir = path.dirname(outputFile);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputFile, JSON.stringify(manifest, null, 2));
console.log(`Image manifest generated: ${outputFile}`);
console.log(`Total folders: ${Object.keys(manifest).length}`);
