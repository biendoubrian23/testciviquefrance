import { allArticles } from '@/lib/data/articles';
import { articleContents } from '@/lib/data/seo-content';

export async function GET() {
  const baseUrl = 'https://www.testciviquefrance.fr';

  // Filtre les articles des 48 dernières heures (requis par Google News)
  const now = new Date();
  const fortyEightHoursAgo = new Date(now.getTime() - 48 * 60 * 60 * 1000);

  const recentArticles = allArticles.filter((article) => {
    const [day, month, year] = article.date.split('/');
    const articleDate = new Date(`${year}-${month}-${day}`);
    return articleDate >= fortyEightHoursAgo;
  });

  // Crée le XML du sitemap Google News
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${recentArticles
  .map((article) => {
    const content = articleContents[article.slug];
    const keywords = content?.keywords?.slice(0, 10).join(', ') || '';
    return `
  <url>
    <loc>${baseUrl}/articles/${article.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>Le Test Civique</news:name>
        <news:language>fr</news:language>
      </news:publication>
      <news:publication_date>${article.date.split('/').reverse().join('-')}T08:00:00+02:00</news:publication_date>
      <news:title>${escapeXml(article.title)}</news:title>
${keywords ? `      <news:keywords>${escapeXml(keywords)}</news:keywords>` : ''}
    </news:news>
  </url>
`;
  })
  .join('')}
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
