/**
 * Système de brouillon des articles SEO.
 *
 * Chaque article peut porter un champ `publishedAt` (ISO 8601) hardcodé.
 * Tant que cette date n'est pas atteinte, l'article est considéré comme un brouillon :
 *  - le route handler renvoie 404
 *  - le sitemap l'exclut
 *  - les listings (page articles, RecentArticles, RelatedArticles) l'excluent
 *
 * Pour publier un brouillon : retirer (ou mettre dans le passé) le champ `publishedAt`
 * dans son fichier TS, commit et push. Le ping IndexNow se déclenche automatiquement
 * via `postbuild` (scripts/ping-indexnow.mjs).
 */

import { articleContents } from './seo-content';

/**
 * Retourne true si l'article est publié (ou si aucune date de publication n'est définie).
 */
export function isArticlePublished(slug: string, now: number = Date.now()): boolean {
  const content = articleContents[slug];
  // Pas de contenu SEO complet → on retombe sur le comportement par défaut (publié).
  if (!content) return true;
  // Pas de publishedAt → publié immédiatement.
  if (!content.publishedAt) return true;
  const publishTimestamp = new Date(content.publishedAt).getTime();
  if (Number.isNaN(publishTimestamp)) return true;
  return publishTimestamp <= now;
}

/**
 * Liste des articles encore en brouillon (publishedAt dans le futur), triés par date.
 * Utile pour vérifier rapidement quels articles attendent d'être publiés.
 */
export function getScheduledArticleSlugs(now: number = Date.now()): Array<{ slug: string; publishedAt: string }> {
  return Object.entries(articleContents)
    .filter(([, content]) => {
      if (!content.publishedAt) return false;
      const ts = new Date(content.publishedAt).getTime();
      return !Number.isNaN(ts) && ts > now;
    })
    .map(([slug, content]) => ({ slug, publishedAt: content.publishedAt as string }))
    .sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime());
}
