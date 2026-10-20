import { ARTICLES_RECENTS } from '@/contenu/articles';

/**
 * Le plan du site Google Actualités : les articles publiés depuis moins de
 * deux jours et demi (Google Actualités ne retient que les articles récents).
 *
 * Rendu au build : comme le robot éditorial publie par un push, chaque
 * publication reconstruit ce fichier, et l'article du matin y entre aussitôt.
 * Depuis le 20/10/2026, il lit le registre `contenu/articles.ts` (titre,
 * date, mots-clés de l'article) ; la forme du fichier n'a pas changé.
 */
export async function GET() {
  const baseUrl = 'https://www.testciviquefrance.fr';
  const now = Date.now();

  const recentArticles = ARTICLES_RECENTS.filter((article) => {
    const diffDays = (now - new Date(article.publieLe).getTime()) / (1000 * 60 * 60 * 24);
    return diffDays < 2.5;
  });

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
      <news:publication_date>${article.publieLe}</news:publication_date>
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
