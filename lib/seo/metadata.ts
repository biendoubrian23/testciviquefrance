/**
 * Helpers pour générer des métadonnées SEO optimisées
 */

import { Metadata } from 'next';
import { SEO_CONFIG } from './constants';

export interface PageSEOParams {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

/**
 * Génère des métadonnées complètes pour une page
 */
export function generatePageMetadata({
  title,
  description,
  path,
  image,
  keywords = [],
  noIndex = false,
  article,
}: PageSEOParams): Metadata {
  const url = `${SEO_CONFIG.siteUrl}${path}`;
  const imageUrl = image
    ? image.startsWith('http')
      ? image
      : `${SEO_CONFIG.siteUrl}${image}`
    : `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultImage}`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: SEO_CONFIG.author }],
    creator: SEO_CONFIG.siteName,
    publisher: SEO_CONFIG.siteName,
    alternates: {
      canonical: url,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, 'max-image-preview': 'large' as const, 'max-snippet': -1 },
    openGraph: {
      type: article ? 'article' : 'website',
      locale: SEO_CONFIG.locale,
      url,
      title,
      description,
      siteName: SEO_CONFIG.siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(article && {
        article: {
          publishedTime: article.publishedTime,
          modifiedTime: article.modifiedTime || article.publishedTime,
          authors: [article.author || SEO_CONFIG.author],
          section: article.section,
          tags: article.tags,
        },
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: SEO_CONFIG.twitterHandle,
      creator: SEO_CONFIG.twitterHandle,
      images: [imageUrl],
    },
  };
}

/**
 * Génère les métadonnées pour la page d'accueil
 */
export function getHomeMetadata(): Metadata {
  return generatePageMetadata({
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    path: '',
    keywords: [
      'test civique',
      'test civique france',
      'examen civique',
      'naturalisation française',
      'titre de séjour',
      'carte de séjour',
      'préparation test civique',
      'QCM naturalisation',
    ],
  });
}

/**
 * Génère les métadonnées pour un article
 */
export function getArticleMetadata(article: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author?: string;
  category?: string;
  image?: string;
  keywords?: string[];
}): Metadata {
  // Convertir la date DD/MM/YYYY en ISO
  const dateParts = article.date.split('/');
  const isoDate = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;

  return generatePageMetadata({
    title: `${article.title} | Test Civique France`,
    description: article.excerpt,
    path: `/articles/${article.slug}`,
    image: article.image,
    keywords: [
      ...(article.keywords || []),
      'test civique',
      'examen civique',
      'naturalisation française',
      article.category || '',
    ].filter(Boolean),
    article: {
      publishedTime: isoDate,
      author: article.author || SEO_CONFIG.author,
      section: article.category,
      tags: article.keywords,
    },
  });
}

/**
 * Génère les métadonnées pour la page tarifs
 */
export function getPricingMetadata(): Metadata {
  return generatePageMetadata({
    title: 'Tarifs - Préparation Test Civique France | Gratuit ou Premium',
    description:
      "Découvrez nos offres de préparation au test civique : cours gratuits, pack standard à 9.99€ ou premium à 19.99€. Examens blancs illimités, taux de réussite 95%.",
    path: '/tarifs',
    keywords: [
      'tarif test civique',
      'prix préparation naturalisation',
      'formation test civique prix',
      'cours civique gratuit',
      'examen blanc naturalisation',
    ],
  });
}

/**
 * Génère les métadonnées pour la page FAQ
 */
export function getFAQMetadata(): Metadata {
  return generatePageMetadata({
    title: 'FAQ Test Civique France - Questions Fréquentes Examen Naturalisation',
    description:
      "Trouvez toutes les réponses à vos questions sur le test civique français : déroulement de l'examen, conditions, préparation, centres agréés et plus encore.",
    path: '/faq',
    keywords: [
      'FAQ test civique',
      'questions test civique',
      'comment passer test civique',
      'où passer test civique',
      'conditions test civique',
    ],
  });
}

/**
 * Génère les métadonnées pour la page cours
 */
export function getCoursMetadata(cours?: {
  title: string;
  description: string;
  slug: string;
}): Metadata {
  if (cours) {
    return generatePageMetadata({
      title: `${cours.title} | Cours Test Civique France`,
      description: cours.description,
      path: `/cours/${cours.slug}`,
      keywords: [
        cours.title.toLowerCase(),
        'cours test civique',
        'formation civique',
        'préparation naturalisation',
      ],
    });
  }

  return generatePageMetadata({
    title: 'Cours Test Civique France - Fiches de Révision Gratuites',
    description:
      'Accédez gratuitement à tous nos cours et fiches de révision pour le test civique : valeurs de la République, institutions, histoire, géographie et vie en société.',
    path: '/cours',
    keywords: [
      'cours test civique',
      'fiches révision naturalisation',
      'formation citoyenneté',
      'cours gratuit civique',
    ],
  });
}
