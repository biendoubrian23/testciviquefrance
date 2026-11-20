// Remplace l'ancien service worker PWA (retiré le 20/11/2026) chez les visiteurs qui l'ont
// encore : il vide les caches qu'il avait remplis puis se désinscrit. Pas de gestionnaire
// `fetch` : les requêtes vont directement au réseau.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const cles = await caches.keys();
      await Promise.all(cles.map((cle) => caches.delete(cle)));
      await self.registration.unregister();
    })(),
  );
});
