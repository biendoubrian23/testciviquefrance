// Script d'audit: liste les articles SANS contenu complet (= thin content)
const fs = require('fs');
const path = require('path');

const seoArticlesContent = fs.readFileSync(path.join(__dirname, '../lib/data/seo-articles.ts'), 'utf8');
const indexContent = fs.readFileSync(path.join(__dirname, '../lib/data/seo-content/index.ts'), 'utf8');
const articlesContent = fs.readFileSync(path.join(__dirname, '../lib/data/articles.ts'), 'utf8');

// Extraire TOUS les slugs de seo-articles.ts et articles.ts
const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
const allSlugs = new Set();

let m;
while ((m = slugRegex.exec(seoArticlesContent)) !== null) {
  allSlugs.add(m[1]);
}
slugRegex.lastIndex = 0;
while ((m = slugRegex.exec(articlesContent)) !== null) {
  allSlugs.add(m[1]);
}

// Extraire tous les slugs mappés dans index.ts (entrées de la map articleContents)
const mappedRegex = /['"]([^'"]+)['"]\s*:\s*\w+Content/g;
const mappedSlugs = new Set();
while ((m = mappedRegex.exec(indexContent)) !== null) {
  mappedSlugs.add(m[1]);
}

// Articles SANS contenu = thin content
const thinContent = [...allSlugs].filter(slug => !mappedSlugs.has(slug));

console.log(`\n=== AUDIT THIN CONTENT ===`);
console.log(`Total slugs: ${allSlugs.size}`);
console.log(`Slugs avec contenu complet: ${mappedSlugs.size}`);
console.log(`Slugs SANS contenu (thin content): ${thinContent.length}`);
console.log(`\n=== LISTE DES ARTICLES THIN CONTENT ===`);
thinContent.forEach((slug, i) => console.log(`${i + 1}. ${slug}`));
