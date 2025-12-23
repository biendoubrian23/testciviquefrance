import { NextResponse } from 'next/server';
import { articles } from '@/lib/data/articles';
import { SEO_CONFIG } from '@/lib/seo/constants';

/**
 * Génère un flux RSS pour les articles du blog
 * Améliore le SEO en permettant l'indexation par les agrégateurs et Google News
 */
export async function GET() {
  const baseUrl = SEO_CONFIG.siteUrl;
  const currentDate = new Date().toUTCString();

  // Trier les articles par date (plus récents en premier)
  const sortedArticles = [...articles].sort((a, b) => {
    const dateA = a.date.split('/').reverse().join('-');
    const dateB = b.date.split('/').reverse().join('-');
    return new Date(dateB).getTime() - new Date(dateA).getTime();
  });

  const rssItems = sortedArticles
    .map((article) => {
      // Convertir DD/MM/YYYY en format RSS (RFC 822)
      const dateParts = article.date.split('/');
      const pubDate = new Date(
        parseInt(dateParts[2]),
        parseInt(dateParts[1]) - 1,
        parseInt(dateParts[0])
      ).toUTCString();

      return `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <link>${baseUrl}/articles/${article.slug}</link>
      <guid isPermaLink="true">${baseUrl}/articles/${article.slug}</guid>
      <description><![CDATA[${article.excerpt}]]></description>
      <pubDate>${pubDate}</pubDate>
      <author>${SEO_CONFIG.email} (${article.author})</author>
      <category><![CDATA[${article.category}]]></category>
      ${article.image ? `<enclosure url="${article.image}" type="image/jpeg" />` : ''}
    </item>`;
    })
    .join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${SEO_CONFIG.siteName} - Blog</title>
    <link>${baseUrl}</link>
    <description>${SEO_CONFIG.defaultDescription}</description>
    <language>fr-FR</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <pubDate>${currentDate}</pubDate>
    <ttl>60</ttl>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}${SEO_CONFIG.logo}</url>
      <title>${SEO_CONFIG.siteName}</title>
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
