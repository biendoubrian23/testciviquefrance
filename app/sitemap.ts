import { MetadataRoute } from 'next';
import { allArticles } from '@/lib/data/articles';
import { getAllAuthors } from '@/lib/data/authors';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.testciviquefrance.fr';
  const currentDate = new Date().toISOString();

  // Générer les entrées pour tous les articles dynamiquement (incluant les articles SEO + actualités)
  const articleEntries: MetadataRoute.Sitemap = allArticles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: article.date ? new Date(article.date.split('/').reverse().join('-')).toISOString() : currentDate,
    changeFrequency: article.categorySlug === 'actualites' ? ('daily' as const) : ('monthly' as const),
    priority: article.categorySlug === 'actualites' ? 0.9 : (article.featured ? 0.9 : 0.8),
  }));

  // Générer les entrées pour les pages auteurs
  const authorEntries: MetadataRoute.Sitemap = getAllAuthors().map((author) => ({
    url: `${baseUrl}/auteurs/${author.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [
    // Page d'accueil - priorité maximale
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
    },

    // Page principale des articles
    {
      url: `${baseUrl}/articles`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    // Tous les articles (générés dynamiquement)
    ...articleEntries,
    // Pages auteurs
    ...authorEntries,
    // Pages informatives
    {
      url: `${baseUrl}/a-propos`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tarifs`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    // Note : onboarding exclu du sitemap car bloqué par robots.txt
  ];
}
