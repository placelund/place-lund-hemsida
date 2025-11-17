const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const imagesDir = path.join(__dirname, '../public/images');

function getFileHash(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  return crypto.createHash('md5').update(fileBuffer).digest('hex');
}

function scanDirectory(dir) {
  const hashMap = {};
  
  function scan(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      if (item.startsWith('.')) continue;
      
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scan(fullPath);
      } else if (item.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) {
        const hash = getFileHash(fullPath);
        const relativePath = path.relative(imagesDir, fullPath);
        
        if (!hashMap[hash]) {
          hashMap[hash] = [];
        }
        hashMap[hash].push(relativePath);
      }
    }
  }
  
  scan(dir);
  return hashMap;
}

console.log('🔍 Scanning for duplicate images...\n');
const hashMap = scanDirectory(imagesDir);

// Filter to only duplicates
const duplicates = Object.entries(hashMap).filter(([hash, files]) => files.length > 1);

if (duplicates.length === 0) {
  console.log('✅ No duplicate images found!');
  process.exit(0);
}

console.log(`Found ${duplicates.length} sets of duplicate images:\n`);

let totalDuplicates = 0;
duplicates.forEach(([hash, files], index) => {
  console.log(`\n📸 Duplicate Set #${index + 1} (${files.length} copies):`);
  files.forEach((file, i) => {
    console.log(`   ${i === 0 ? '🟢' : '🔴'} ${file}`);
  });
  totalDuplicates += files.length - 1;
});

console.log(`\n\n📊 Summary:`);
console.log(`   Total duplicate sets: ${duplicates.length}`);
console.log(`   Total duplicate files: ${totalDuplicates}`);
console.log(`   Files that can be removed: ${totalDuplicates}`);

// Save report
const reportPath = path.join(__dirname, '../duplicate-images-report.json');
fs.writeFileSync(reportPath, JSON.stringify(duplicates, null, 2));
console.log(`\n💾 Full report saved to: duplicate-images-report.json`);
