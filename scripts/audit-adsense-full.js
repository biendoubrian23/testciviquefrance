// Audit AdSense complet - détecte tout contenu problématique
const fs = require('fs');
const path = require('path');

const issues = [];
const warnings = [];
const ok = [];

// 1. Vérifier ads.txt
const adsTxt = fs.readFileSync(path.join(__dirname, '../public/ads.txt'), 'utf8').trim();
if (adsTxt.includes('pub-3632266086082682')) {
  ok.push('✅ ads.txt présent et valide');
} else {
  issues.push('❌ ads.txt manquant ou invalide');
}

// 2. Vérifier robots.txt n'interdit pas Googlebot
const robots = fs.readFileSync(path.join(__dirname, '../public/robots.txt'), 'utf8');
if (robots.includes('Disallow: /articles')) {
  issues.push('❌ robots.txt bloque /articles');
} else {
  ok.push('✅ robots.txt autorise /articles');
}

// 3. Pages légales
const legalPages = ['a-propos', 'politique-confidentialite', 'mentions-legales', 'contact', 'cgu'];
legalPages.forEach(p => {
  const pagePath = path.join(__dirname, `../app/${p}/page.tsx`);
  if (fs.existsSync(pagePath)) {
    const content = fs.readFileSync(pagePath, 'utf8');
    if (content.length < 1000) {
      warnings.push(`⚠️  Page /${p} présente mais courte (${content.length} chars)`);
    } else {
      ok.push(`✅ Page /${p} présente (${content.length} chars)`);
    }
  } else {
    issues.push(`❌ Page /${p} manquante`);
  }
});

// 4. Phrases placeholder problématiques
const problematicPhrases = [
  'bientôt disponible',
  'coming soon',
  'lorem ipsum',
  'placeholder',
  'TODO',
  'FIXME',
  'contenu en cours',
];
let placeholderCount = 0;
function scanDir(dir, depth = 0) {
  if (depth > 5) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.next' || entry.name === '.git') continue;
      scanDir(full, depth + 1);
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      const content = fs.readFileSync(full, 'utf8');
      for (const phrase of problematicPhrases) {
        if (content.toLowerCase().includes(phrase.toLowerCase())) {
          // Ignorer les scripts et commentaires légitimes
          if (full.includes('audit-') || full.includes('scripts')) continue;
          const lines = content.split('\n');
          lines.forEach((line, i) => {
            if (line.toLowerCase().includes(phrase.toLowerCase()) && 
                !line.trim().startsWith('//') && 
                !line.trim().startsWith('*')) {
              const rel = path.relative(path.join(__dirname, '..'), full);
              warnings.push(`⚠️  ${rel}:${i + 1} contient "${phrase}"`);
              placeholderCount++;
            }
          });
        }
      }
    }
  }
}
scanDir(path.join(__dirname, '../app'));
scanDir(path.join(__dirname, '../components'));
scanDir(path.join(__dirname, '../lib'));

if (placeholderCount === 0) {
  ok.push('✅ Aucun placeholder "bientôt disponible"/"coming soon"/"lorem ipsum" détecté');
}

// 5. Vérifier que tous les articles publics ont assez de contenu
const indexContent = fs.readFileSync(path.join(__dirname, '../lib/data/seo-content/index.ts'), 'utf8');
const mappedRegex = /['"]([^'"]+)['"]\s*:\s*(\w+Content)/g;
let m;
const contentFiles = fs.readdirSync(path.join(__dirname, '../lib/data/seo-content'))
  .filter(f => f.endsWith('.ts') && f !== 'index.ts');

// Mesurer la taille totale de contenu par article
let minChars = Infinity;
let shortestArticle = '';
let totalArticles = 0;
let shortArticles = [];

contentFiles.forEach(file => {
  const content = fs.readFileSync(path.join(__dirname, '../lib/data/seo-content', file), 'utf8');
  // Matcher les contenus exportés
  const exportRegex = /export const (\w+Content)[^{]*{([^]*?)^};/gm;
  let match;
  while ((match = exportRegex.exec(content)) !== null) {
    totalArticles++;
    const articleBody = match[2];
    // Heuristique: estimer le contenu texte utile (tout le bloc)
    const chars = articleBody.length;
    if (chars < 3000) {
      shortArticles.push(`${match[1]} (${chars} chars) dans ${file}`);
    }
    if (chars < minChars) {
      minChars = chars;
      shortestArticle = `${match[1]} dans ${file}`;
    }
  }
});

ok.push(`✅ ${totalArticles} articles avec contenu mesuré`);
ok.push(`   Article le plus court : ${shortestArticle} (${minChars} chars source)`);
if (shortArticles.length > 0) {
  warnings.push(`⚠️  ${shortArticles.length} articles avec moins de 3000 chars de source (possiblement courts) :`);
  shortArticles.slice(0, 5).forEach(a => warnings.push(`     - ${a}`));
}

// 6. Vérifier le sitemap
const sitemapFile = fs.readFileSync(path.join(__dirname, '../app/sitemap.ts'), 'utf8');
if (sitemapFile.includes('allArticles')) {
  ok.push('✅ sitemap.ts utilise allArticles (synchronisé avec catalogue)');
}

// 7. Compter les articles dans allArticles vs contenu
const seoArticlesContent = fs.readFileSync(path.join(__dirname, '../lib/data/seo-articles.ts'), 'utf8');
const articlesContent = fs.readFileSync(path.join(__dirname, '../lib/data/articles.ts'), 'utf8');
const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
const allSlugs = new Set();
slugRegex.lastIndex = 0;
while ((m = slugRegex.exec(seoArticlesContent)) !== null) allSlugs.add(m[1]);
slugRegex.lastIndex = 0;
while ((m = slugRegex.exec(articlesContent)) !== null) allSlugs.add(m[1]);

mappedRegex.lastIndex = 0;
const mappedSlugs = new Set();
while ((m = mappedRegex.exec(indexContent)) !== null) mappedSlugs.add(m[1]);

const dedicatedRenderers = ['cadre-general-examen-civique', 'centres-agrees-examen-civique-2026', 'tout-savoir-examen-civique-2026'];
const categorySlugs = ['tous', 'cadre-legal', 'thematiques', 'preparation', 'conseils', 'actualites'];

const realArticles = [...allSlugs].filter(s => !categorySlugs.includes(s));
const uncovered = realArticles.filter(s => !mappedSlugs.has(s) && !dedicatedRenderers.includes(s));

if (uncovered.length === 0) {
  ok.push(`✅ 100% des ${realArticles.length} articles publics ont du contenu (riche ou rendu dédié)`);
} else {
  uncovered.forEach(s => issues.push(`❌ Article sans contenu : ${s}`));
}

// 8. Vérifier les redirects
const nextConfig = fs.readFileSync(path.join(__dirname, '../next.config.js'), 'utf8');
if (nextConfig.includes('histoire-france-50-dates-importantes')) {
  ok.push('✅ Redirect 301 en place pour histoire-france-50-dates-importantes');
}
if (nextConfig.includes('laicite-france-definition-principes-loi-1905')) {
  ok.push('✅ Redirect 301 en place pour laicite-france-definition-principes-loi-1905');
}

// 9. Vérifier le notFound() sur page article
const articlePage = fs.readFileSync(path.join(__dirname, '../app/articles/[slug]/page.tsx'), 'utf8');
if (articlePage.includes('notFound()') && articlePage.includes('hasDedicatedRenderer')) {
  ok.push('✅ Garde-fou notFound() en place sur /articles/[slug]');
} else {
  issues.push('❌ Garde-fou notFound() manquant sur /articles/[slug]');
}

// AFFICHAGE FINAL
console.log('\n========================================');
console.log('   AUDIT ADSENSE COMPLIANCE COMPLET');
console.log('========================================\n');

console.log('🟢 OK (' + ok.length + ')');
ok.forEach(m => console.log('  ' + m));

if (warnings.length > 0) {
  console.log('\n🟡 AVERTISSEMENTS (' + warnings.length + ')');
  warnings.forEach(m => console.log('  ' + m));
}

if (issues.length > 0) {
  console.log('\n🔴 PROBLÈMES (' + issues.length + ')');
  issues.forEach(m => console.log('  ' + m));
}

console.log('\n========================================');
console.log(`RÉSULTAT : ${issues.length === 0 ? '✅ SITE CONFORME' : '❌ CORRECTIONS REQUISES'}`);
console.log('========================================\n');
process.exit(issues.length > 0 ? 1 : 0);
