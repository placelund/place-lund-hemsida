const fs = require('fs');
const path = require('path');

const reportPath = path.join(__dirname, '../duplicate-images-report.json');
const imagesDir = path.join(__dirname, '../public/images');

if (!fs.existsSync(reportPath)) {
  console.log('❌ No duplicate report found. Run find-duplicates.js first!');
  process.exit(1);
}

const duplicates = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));

console.log('🗑️  Removing duplicate images...\n');

let removed = 0;
duplicates.forEach(([hash, files]) => {
  // Keep first file, remove the rest
  const filesToRemove = files.slice(1);
  
  filesToRemove.forEach(file => {
    const fullPath = path.join(imagesDir, file);
    try {
      fs.unlinkSync(fullPath);
      console.log(`✅ Removed: ${file}`);
      removed++;
    } catch (error) {
      console.log(`❌ Failed to remove: ${file} - ${error.message}`);
    }
  });
});

console.log(`\n📊 Summary:`);
console.log(`   Total files removed: ${removed}`);
console.log(`\n✅ Cleanup complete!`);
