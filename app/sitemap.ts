import { MetadataRoute } from 'next';
import { ARTICLES_RECENTS } from '@/contenu/articles';
import { getAllAuthors } from '@/lib/data/authors';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.testciviquefrance.fr';
  const currentDate = new Date().toISOString();

  // Tous les articles du registre (contenu/articles.ts), avec la date de leur dernière retouche réelle.
  const articleEntries: MetadataRoute.Sitemap = ARTICLES_RECENTS.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(`${article.modifieLe}T08:00:00+02:00`).toISOString(),
    changeFrequency: article.rubrique === 'actualites' ? ('daily' as const) : ('monthly' as const),
    priority: 0.9,
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
    {
      url: `${baseUrl}/cours`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/eligibilite-examen-civique`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Pages légales : indexées pour transparence et conformité AdSense
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/politique-confidentialite`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cgu`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/cgv`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    // Note : onboarding exclu du sitemap car bloqué par robots.txt
  ];
}
