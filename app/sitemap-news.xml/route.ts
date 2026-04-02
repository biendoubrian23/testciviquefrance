import { allArticles } from '@/lib/data/articles';
import { articleContents } from '@/lib/data/seo-content';

export async function GET() {
  const baseUrl = 'https://www.testciviquefrance.fr';

  // Articles de moins de 2 jours (Google News publie que les articles récents)
  const recentArticles = allArticles.filter((article) => {
    const articleDate = new Date(article.date.split('/').reverse().join('-'));
    const now = new Date();
    const diffTime = now.getTime() - articleDate.getTime();
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays < 2.5; // Articles de max 2-3 jours
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${recentArticles
  .map((article) => {
    const [day, month, year] = article.date.split('/');
    const isoDate = `${year}-${month}-${day}`;
    const fullContent = articleContents[article.slug];
    const keywords = fullContent?.keywords?.join(', ') || 'test civique, France';

    return `  <url>
    <loc>${baseUrl}/articles/${article.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>Le Test Civique</news:name>
        <news:language>fr</news:language>
      </news:publication>
      <news:publication_date>${isoDate}</news:publication_date>
      <news:title>${escapeXml(article.title)}</news:title>
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
