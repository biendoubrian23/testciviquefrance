import { MetadataRoute } from 'next';
import { articles } from '@/lib/data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.testciviquefrance.fr';
  const currentDate = new Date().toISOString();

  // Générer les entrées pour tous les articles dynamiquement
  const articleEntries: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: article.date ? new Date(article.date.split('/').reverse().join('-')).toISOString() : currentDate,
    changeFrequency: 'monthly' as const,
    priority: article.featured ? 0.9 : 0.8,
  }));

  return [
    // Page d'accueil - priorité maximale
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    // Pages d'authentification
    {
      url: `${baseUrl}/login`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/signup`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
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
    // Onboarding (accessibles sans login)
    {
      url: `${baseUrl}/onboarding/quiz`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/onboarding/offres`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.75,
    },
  ];
}
