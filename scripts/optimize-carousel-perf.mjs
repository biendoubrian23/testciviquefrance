// Script d'optimisation des images du carrousel pour performance Lighthouse
// Redimensionne les images à 900x600 et compresse en WebP qualité 75%

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.join(__dirname, '..', 'public');

// Images du carrousel à optimiser
const images = [
  'carousselle1.webp',
  'carousselle2.webp',
  'carousselle3.webp',
  'carousselle4.webp',
  'carousselle7.webp',
];

// Dimensions optimales pour le carrousel mobile (665x499 affiché)
const TARGET_WIDTH = 700;
const TARGET_HEIGHT = 525;
const QUALITY = 80;

async function optimizeImages() {
  console.log('🚀 Début de l\'optimisation des images du carrousel...\n');
  
  for (const imageName of images) {
    const inputPath = path.join(publicDir, imageName);
    // Créer une version optimisée avec suffixe _opt
    const outputPath = path.join(publicDir, imageName.replace('.webp', '_opt.webp'));
    
    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️ Image non trouvée: ${imageName}`);
      continue;
    }
    
    try {
      // Obtenir les métadonnées de l'image originale
      const metadata = await sharp(inputPath).metadata();
      const originalSize = fs.statSync(inputPath).size;
      console.log(`📷 ${imageName}: ${metadata.width}x${metadata.height} (${(originalSize / 1024).toFixed(1)} KiB)`);
      
      // Optimiser l'image
      await sharp(inputPath)
        .resize(TARGET_WIDTH, TARGET_HEIGHT, {
          fit: 'cover',
          position: 'center'
        })
        .webp({ quality: QUALITY })
        .toFile(outputPath);
      
      const newSize = fs.statSync(outputPath).size;
      const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
      
      console.log(`   ✅ Créé: ${imageName.replace('.webp', '_opt.webp')} → ${(newSize / 1024).toFixed(1)} KiB (-${savings}%)`);
      
    } catch (error) {
      console.error(`   ❌ Erreur: ${error.message}`);
    }
  }
  
  console.log('\n✨ Optimisation terminée!');
  console.log('📋 Pour appliquer: Arrêtez le serveur, supprimez les anciens fichiers,');
  console.log('   et renommez les fichiers _opt.webp en .webp');
}

optimizeImages();
