/**
 * Script ping IndexNow — exécuté automatiquement après chaque build (postbuild)
 * Notifie Bing, Yandex, api.indexnow.org de toutes les nouvelles URLs
 */

const INDEXNOW_KEY = '70856d61c94c4fbb84426195ce988ff5';
const BASE_URL = 'https://www.testciviquefrance.fr';

// Import dynamique des articles compilés depuis le build
// On génère la liste d'URLs statiques directement ici pour éviter d'importer TypeScript
const STATIC_URLS = [
  BASE_URL,
  `${BASE_URL}/articles`,
  `${BASE_URL}/tarifs`,
  `${BASE_URL}/faq`,
  `${BASE_URL}/a-propos`,
  `${BASE_URL}/contact`,
  `${BASE_URL}/mentions-legales`,
  `${BASE_URL}/cgu`,
  `${BASE_URL}/politique-confidentialite`,
];

// Récupère toutes les URLs depuis le sitemap généré
async function getUrlsFromSitemap() {
  try {
    const response = await fetch(`${BASE_URL}/sitemap.xml`);
    if (!response.ok) throw new Error(`Sitemap fetch failed: ${response.status}`);
    const xml = await response.text();
    const matches = xml.matchAll(/<loc>(.*?)<\/loc>/g);
    return [...matches].map(m => m[1]).filter(url => url.startsWith(BASE_URL));
  } catch {
    console.warn('⚠️  Impossible de récupérer le sitemap, utilisation des URLs statiques');
    return STATIC_URLS;
  }
}

async function pingIndexNow(urls) {
  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
  ];

  const payload = {
    host: 'www.testciviquefrance.fr',
    key: INDEXNOW_KEY,
    keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls.slice(0, 10000),
  };

  for (const endpoint of endpoints) {
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(payload),
      });
      console.log(`✅ IndexNow ${endpoint} → HTTP ${res.status}`);
    } catch (err) {
      console.warn(`⚠️  IndexNow ${endpoint} → erreur: ${err.message}`);
    }
  }
}

async function main() {
  console.log('🚀 Ping IndexNow post-build...');
  const urls = await getUrlsFromSitemap();
  console.log(`📋 ${urls.length} URLs à soumettre`);
  await pingIndexNow(urls);
  console.log('✅ IndexNow ping terminé');
}

main().catch(err => {
  // Ne pas faire échouer le build si IndexNow est indisponible
  console.warn('⚠️  IndexNow ping échoué (non bloquant):', err.message);
  process.exit(0);
});
