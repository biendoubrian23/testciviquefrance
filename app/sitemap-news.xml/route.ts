import { ARTICLES_RECENTS } from '@/contenu/articles';
import { instantDePublication, recentPourActualites } from '@/lib/article';

/**
 * Le plan du site Google Actualités : les articles publiés depuis moins de
 * 48 heures, comme le demande Google (« Only include recent URLs for articles
 * that were created in the last two days », relu le 20/10/2026), 1 000 au plus.
 * La règle vit dans `lib/article.ts` (`recentPourActualites`), lue aussi par
 * le banc.
 *
 * Régénéré toutes les heures (`revalidate`) : rendu une seule fois au build,
 * il garderait un article plus de 48 heures les jours sans publication. Un
 * article publié par le robot y entre au build de son push.
 */
export const revalidate = 3600;

export async function GET() {
  const baseUrl = 'https://www.testciviquefrance.fr';
  const now = Date.now();

  const recentArticles = ARTICLES_RECENTS.filter((article) => recentPourActualites(article, now)).slice(0, 1000);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${recentArticles
  .map((article) => {
    const keywords = [article.theme, ...(article.motsCles ?? [])].join(', ') || 'test civique, France';
    return `  <url>
    <loc>${baseUrl}/articles/${article.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>Le Test Civique</news:name>
        <news:language>fr</news:language>
      </news:publication>
      <news:publication_date>${instantDePublication(article)}</news:publication_date>
      <news:title>${escapeXml(article.titre)}</news:title>
      <news:keywords>${escapeXml(keywords)}</news:keywords>
    </news:news>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
