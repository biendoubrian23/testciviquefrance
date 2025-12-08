import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const ROOT_DIR = process.cwd();
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

// Images à optimiser (nouvelles images du carousel)
const imagesToOptimize = [
  { input: 'imagecarouselle7.webp', output: 'carousselle5.webp' },
  { input: 'imagecarouselle8.webp', output: 'carousselle6.webp' },
  { input: 'imagecarouselle9.jpeg', output: 'carousselle7.webp' },
];

async function optimizeImages() {
  console.log('🖼️  Optimisation des images du carousel...\n');

  for (const img of imagesToOptimize) {
    const inputPath = path.join(ROOT_DIR, img.input);
    const outputPath = path.join(PUBLIC_DIR, img.output);

    if (!fs.existsSync(inputPath)) {
      console.log(`❌ Image non trouvée: ${img.input}`);
      continue;
    }

    // Obtenir les infos de l'image originale
    const originalStats = fs.statSync(inputPath);
    const originalSizeKB = (originalStats.size / 1024).toFixed(2);

    try {
      await sharp(inputPath)
        .resize(1200, 800, { 
          fit: 'cover',
          withoutEnlargement: true 
        })
        .webp({ 
          quality: 80,
          effort: 6 
        })
        .toFile(outputPath);

      const newStats = fs.statSync(outputPath);
      const newSizeKB = (newStats.size / 1024).toFixed(2);
      const reduction = (100 - (newStats.size / originalStats.size) * 100).toFixed(1);

      console.log(`✅ ${img.input} → ${img.output}`);
      console.log(`   Taille: ${originalSizeKB} KB → ${newSizeKB} KB (${reduction}% de réduction)\n`);
    } catch (error) {
      console.log(`❌ Erreur pour ${img.input}:`, error.message);
    }
  }

  console.log('🎉 Optimisation terminée!');
}

optimizeImages();
