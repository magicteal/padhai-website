const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '../public');
const BACKUP_DIR = path.join(__dirname, '../.image-backups');

// Create backup directory
if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

// Large images to optimize (>1MB priority)
const largeImages = [
  'images/heroImage.svg',
  'images/problemSection.png',
  'images/whyAI.svg',
  'images/heroImagePotrait.svg',
  'images/screenTime.svg',
  'images/parentTwo.svg',
  'images/parentOne.svg',
  'images/mainLogo.svg',
  'images/mainLogoPurple.svg',
];

async function optimizeImage(relativePath) {
  const inputPath = path.join(PUBLIC_DIR, relativePath);
  const ext = path.extname(relativePath);
  const dir = path.dirname(relativePath);
  const filename = path.basename(relativePath, ext);
  
  // Skip if file doesn't exist
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Skipped (not found): ${relativePath}`);
    return;
  }

  // SVG files - copy as is (or use SVGO if installed)
  if (ext === '.svg') {
    console.log(`ℹ️  Kept SVG: ${relativePath}`);
    return;
  }

  try {
    // Backup original
    const backupPath = path.join(BACKUP_DIR, path.basename(inputPath));
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(inputPath, backupPath);
    }

    // Get image metadata
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`📦 Processing: ${relativePath} (${metadata.width}x${metadata.height}, ${(metadata.size / 1024 / 1024).toFixed(2)}MB)`);

    // Resize if too large (max 1920px width)
    let resized = image;
    if (metadata.width > 1920) {
      resized = image.resize(1920, null, {
        withoutEnlargement: true,
        fit: 'inside',
      });
    }

    // Convert to WebP with quality 80
    const outputPath = path.join(PUBLIC_DIR, dir, `${filename}.webp`);
    await resized
      .webp({ quality: 80, effort: 6 })
      .toFile(outputPath);

    const outputStats = fs.statSync(outputPath);
    const savings = ((1 - outputStats.size / metadata.size) * 100).toFixed(1);
    
    console.log(`✓ Optimized: ${outputPath} (${(outputStats.size / 1024 / 1024).toFixed(2)}MB, saved ${savings}%)`);
    
    // Remove original to save space
    fs.unlinkSync(inputPath);
    
  } catch (err) {
    console.error(`✗ Failed: ${relativePath}`, err.message);
  }
}

async function main() {
  console.log('🎨 Starting image optimization...\n');
  
  for (const imagePath of largeImages) {
    await optimizeImage(imagePath);
  }
  
  console.log('\n✨ Image optimization complete!');
  console.log('💡 Originals backed up to:', BACKUP_DIR);
  
  // Show directory sizes
  const getDirectorySize = (dir) => {
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
  };
  
  const imagesSize = getDirectorySize(path.join(PUBLIC_DIR, 'images'));
  const uploadsSize = getDirectorySize(path.join(PUBLIC_DIR, 'uploads'));
  
  console.log('\n📊 Storage Summary:');
  console.log(`  Images: ${(imagesSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`  Uploads: ${(uploadsSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`  Total: ${((imagesSize + uploadsSize) / 1024 / 1024).toFixed(2)}MB`);
}

main().catch(console.error);
