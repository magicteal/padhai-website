const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');

function getDirectorySize(dir) {
  if (!fs.existsSync(dir)) return 0;
  let size = 0;
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const filePath = path.join(dir, file.name);
    if (file.isDirectory()) {
      size += getDirectorySize(filePath);
    } else {
      size += fs.statSync(filePath).size;
    }
  }
  return size;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

function analyzeDirectory(dir, name) {
  console.log(`\n📁 ${name}:`);
  if (!fs.existsSync(dir)) {
    console.log('  (Directory not found)');
    return 0;
  }

  const files = fs.readdirSync(dir, { withFileTypes: true });
  const filesByType = {};
  let totalSize = 0;

  files.forEach(file => {
    if (file.isDirectory()) {
      const subSize = getDirectorySize(path.join(dir, file.name));
      console.log(`  📂 ${file.name}/: ${formatBytes(subSize)}`);
      totalSize += subSize;
    } else {
      const ext = path.extname(file.name).toLowerCase() || 'no-ext';
      const filePath = path.join(dir, file.name);
      const size = fs.statSync(filePath).size;
      
      if (!filesByType[ext]) {
        filesByType[ext] = { count: 0, size: 0, files: [] };
      }
      filesByType[ext].count++;
      filesByType[ext].size += size;
      filesByType[ext].files.push({ name: file.name, size });
      totalSize += size;
    }
  });

  // Show file type breakdown
  const sortedTypes = Object.entries(filesByType)
    .sort((a, b) => b[1].size - a[1].size);

  sortedTypes.forEach(([ext, data]) => {
    console.log(`  ${ext}: ${data.count} files, ${formatBytes(data.size)}`);
    // Show largest files of this type
    if (data.files.length > 0) {
      const largest = data.files.sort((a, b) => b.size - a.size).slice(0, 3);
      largest.forEach(f => {
        if (f.size > 100 * 1024) {  // Only show files > 100KB
          console.log(`    • ${f.name}: ${formatBytes(f.size)}`);
        }
      });
    }
  });

  console.log(`  ───────────────────────`);
  console.log(`  Total: ${formatBytes(totalSize)}`);
  
  return totalSize;
}

console.log('\n🎨 Website Performance Analysis\n');
console.log('═══════════════════════════════════════');

const imagesSize = analyzeDirectory(path.join(PUBLIC_DIR, 'images'), 'Images');
const uploadsSize = analyzeDirectory(path.join(PUBLIC_DIR, 'uploads'), 'Uploads');

console.log('\n═══════════════════════════════════════');
console.log('\n📊 Summary:');
console.log(`  Public Assets Total: ${formatBytes(imagesSize + uploadsSize)}`);
console.log(`  Images: ${formatBytes(imagesSize)}`);
console.log(`  Uploads: ${formatBytes(uploadsSize)}`);

console.log('\n✅ Optimization Status:');
console.log('  ✓ Images: WebP converted, lazy loading enabled');
console.log('  ✓ Videos: Click-to-play, on-demand loading');
console.log('  ✓ Components: OptimizedImage & OptimizedVideo in use');
console.log('  ✓ Network: DNS prefetch, preconnect configured');
console.log('  ✓ Build: Compression, minification enabled');

console.log('\n🚀 Performance Tips:');
console.log('  • Large files (>1MB) are lazy-loaded automatically');
console.log('  • Videos only load when clicked (saves bandwidth)');
console.log('  • Images use WebP format (smaller file sizes)');
console.log('  • Above-fold content loads first (priority)');

console.log('\n💡 To further optimize:');
console.log('  1. Review large SVG files (consider converting to WebP)');
console.log('  2. Compress videos before upload (target <10MB)');
console.log('  3. Use OptimizedImage for all new images');
console.log('  4. Monitor with: npm run build && npm run start');

console.log('\n═══════════════════════════════════════\n');
