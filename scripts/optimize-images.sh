#!/bin/bash

# Image Optimization Script for Next.js App
# This script optimizes images for web delivery

set -e

echo "🎨 Starting image optimization..."

PUBLIC_DIR="/home/marsh/MagicTeal/padhai-website/public"
BACKUP_DIR="/home/marsh/MagicTeal/padhai-website/.image-backups"

# Create backup directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Function to optimize with sharp via Node.js
optimize_with_sharp() {
  local input="$1"
  local output="$2"
  local quality="${3:-75}"
  
  node -e "
    const sharp = require('sharp');
    const fs = require('fs');
    const path = require('path');
    
    const input = '$input';
    const output = '$output';
    const quality = $quality;
    
    (async () => {
      try {
        const ext = path.extname(input).toLowerCase();
        
        if (ext === '.svg') {
          // Don't process SVGs with sharp, just copy
          fs.copyFileSync(input, output);
          return;
        }
        
        const image = sharp(input);
        const metadata = await image.metadata();
        
        // Resize if too large
        let resized = image;
        if (metadata.width > 1920) {
          resized = image.resize(1920, null, { withoutEnlargement: true });
        }
        
        // Convert to WebP with quality
        await resized
          .webp({ quality: quality })
          .toFile(output);
          
        console.log('✓ Optimized:', input);
      } catch (err) {
        console.error('✗ Failed:', input, err.message);
        // Copy original if optimization fails
        fs.copyFileSync(input, output);
      }
    })();
  "
}

# Count files to process
total_images=$(find "$PUBLIC_DIR/images" -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) 2>/dev/null | wc -l)

if [ "$total_images" -eq 0 ]; then
  echo "✓ No PNG/JPG images found to optimize"
else
  echo "📦 Found $total_images images to optimize"
  
  # Process PNG and JPG files (convert to WebP)
  find "$PUBLIC_DIR/images" -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) | while read -r file; do
    # Skip if already backed up
    basename=$(basename "$file")
    if [ ! -f "$BACKUP_DIR/$basename" ]; then
      # Backup original
      cp "$file" "$BACKUP_DIR/$basename"
      
      # Convert to WebP
      dir=$(dirname "$file")
      filename=$(basename "$file" | sed 's/\.[^.]*$//')
      webp_file="$dir/${filename}.webp"
      
      optimize_with_sharp "$file" "$webp_file" 75
      
      # Remove original to save space
      rm "$file"
    fi
  done
fi

echo ""
echo "📊 Optimization Summary:"
du -sh "$PUBLIC_DIR/images" 2>/dev/null | awk '{print "  Images folder: " $1}'
du -sh "$PUBLIC_DIR/uploads" 2>/dev/null | awk '{print "  Uploads folder: " $1}' || echo "  Uploads folder: (empty)"

echo ""
echo "✨ Image optimization complete!"
echo "💡 Original images backed up to: $BACKUP_DIR"
