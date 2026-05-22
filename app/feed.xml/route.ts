import { NextResponse } from 'next/server';
import { allArticles } from '@/lib/data/articles';
import { SEO_CONFIG } from '@/lib/seo/constants';

/**
 * Génère un flux RSS optimisé pour Google News
 * Inclut le namespace Google News pour la soumission Publisher Center
 */
export async function GET() {
  const baseUrl = SEO_CONFIG.siteUrl;
  const currentDate = new Date().toUTCString();

  // Trier les articles par date (plus récents en premier) — utilise allArticles (SEO inclus)
  const sortedArticles = [...allArticles].sort((a, b) => {
    const dateA = a.date.split('/').reverse().join('-');
    const dateB = b.date.split('/').reverse().join('-');
    return new Date(dateB).getTime() - new Date(dateA).getTime();
  });

  const rssItems = sortedArticles
    .map((article) => {
      // Convertir DD/MM/YYYY en format RSS (RFC 822) et ISO 8601
      const dateParts = article.date.split('/');
      const dateObj = new Date(
        parseInt(dateParts[2]),
        parseInt(dateParts[1]) - 1,
        parseInt(dateParts[0]),
        8, 0, 0
      );
      const pubDate = dateObj.toUTCString();
      const isoDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}T08:00:00+02:00`;

      return `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${baseUrl}/articles/${article.slug}</link>
      <guid isPermaLink="true">${baseUrl}/articles/${article.slug}</guid>
      <description><![CDATA[${article.excerpt}]]></description>
      <pubDate>${pubDate}</pubDate>
      <author>notification@testciviquefrance.fr (${article.author})</author>
      <category><![CDATA[${article.category}]]></category>
      ${article.image ? `<enclosure url="${article.image}" type="image/jpeg" />` : ''}
      <news:news>
        <news:publication>
          <news:name>Test Civique France</news:name>
          <news:language>fr</news:language>
        </news:publication>
        <news:publication_date>${isoDate}</news:publication_date>
        <news:title><![CDATA[${article.title}]]></news:title>
      </news:news>
    </item>`;
    })
    .join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  <channel>
    <title>Test Civique France - Actualités Naturalisation</title>
    <link>${baseUrl}</link>
    <description>Actualités sur le test civique, la naturalisation française et les titres de séjour. Informations officielles, décrets, statistiques et guides pratiques.</description>
    <language>fr</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <pubDate>${currentDate}</pubDate>
    <ttl>60</ttl>
    <managingEditor>notification@testciviquefrance.fr (Brian B)</managingEditor>
    <webMaster>notification@testciviquefrance.fr (Brian B)</webMaster>
    <copyright>Copyright ${new Date().getFullYear()} Test Civique France</copyright>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}${SEO_CONFIG.logo}</url>
      <title>Test Civique France</title>
      <link>${baseUrl}</link>
    </image>
    ${rssItems}
  </channel>
</rss>`;

  return new NextResponse(rssFeed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
