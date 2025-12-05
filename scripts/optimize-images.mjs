import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '..', 'public');

const imagesToConvert = [
  'carousselle1.jpg',
  'carousselle2.jpg',
  'carousselle3.jpg',
  'carousselle4.jpeg',
];

async function optimizeImages() {
  console.log('🖼️  Optimisation des images en cours...\n');

  for (const imageName of imagesToConvert) {
    const inputPath = path.join(publicDir, imageName);
    const outputName = imageName.replace(/\.(jpg|jpeg)$/i, '.webp');
    const outputPath = path.join(publicDir, outputName);

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  Image non trouvée: ${imageName}`);
      continue;
    }

    const inputStats = fs.statSync(inputPath);
    const inputSizeKB = (inputStats.size / 1024).toFixed(2);

    try {
      await sharp(inputPath)
        .resize(1920, 1080, { 
          fit: 'cover',
          withoutEnlargement: true 
        })
        .webp({ 
          quality: 80,
          effort: 6
        })
        .toFile(outputPath);

      const outputStats = fs.statSync(outputPath);
      const outputSizeKB = (outputStats.size / 1024).toFixed(2);
      const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);

      console.log(`✅ ${imageName}`);
      console.log(`   ${inputSizeKB} KB → ${outputSizeKB} KB (${reduction}% de réduction)`);
      console.log(`   → ${outputName}\n`);
    } catch (error) {
      console.error(`❌ Erreur pour ${imageName}:`, error.message);
    }
  }

  console.log('✨ Optimisation terminée !');
}

optimizeImages();
