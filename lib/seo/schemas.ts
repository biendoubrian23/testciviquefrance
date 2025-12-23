/**
 * Schémas JSON-LD avancés pour un SEO optimal
 * Tous les schémas structurés en un seul fichier modulaire
 */

import { SEO_CONFIG } from './constants';

/**
 * Schéma Organization enrichi avec tous les détails
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${SEO_CONFIG.siteUrl}/#organization`,
    name: SEO_CONFIG.siteName,
    alternateName: 'Test Civique FR',
    url: SEO_CONFIG.siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.logo}`,
      width: SEO_CONFIG.logoWidth,
      height: SEO_CONFIG.logoHeight,
      caption: SEO_CONFIG.siteName,
    },
    image: `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultImage}`,
    description: SEO_CONFIG.defaultDescription,
    foundingDate: '2024',
    founder: {
      '@type': 'Person',
      name: 'Équipe Test Civique France',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Paris',
      addressCountry: 'FR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SEO_CONFIG.phone,
      contactType: 'customer service',
      email: SEO_CONFIG.email,
      areaServed: 'FR',
      availableLanguage: ['French', 'English'],
    },
    sameAs: Object.values(SEO_CONFIG.social),
    knowsAbout: [
      'Test civique français',
      'Naturalisation française',
      'Titre de séjour',
      'Immigration France',
      'Citoyenneté française',
    ],
  };
}

/**
 * Schéma WebSite avec SearchAction pour la sitelinks searchbox
 */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SEO_CONFIG.siteUrl}/#website`,
    url: SEO_CONFIG.siteUrl,
    name: SEO_CONFIG.siteName,
    description: SEO_CONFIG.defaultDescription,
    publisher: {
      '@id': `${SEO_CONFIG.siteUrl}/#organization`,
    },
    inLanguage: 'fr-FR',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SEO_CONFIG.siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Schéma Product/Service pour la page tarifs
 */
export function getProductSchema(product: {
  name: string;
  description: string;
  price: number;
  priceCurrency?: string;
  image?: string;
  sku?: string;
  brand?: string;
  ratingValue?: number;
  reviewCount?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SEO_CONFIG.siteUrl}/tarifs/#${product.sku || 'product'}`,
    name: product.name,
    description: product.description,
    image: product.image || `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultImage}`,
    brand: {
      '@type': 'Brand',
      name: product.brand || SEO_CONFIG.siteName,
    },
    sku: product.sku,
    offers: {
      '@type': 'Offer',
      url: `${SEO_CONFIG.siteUrl}/tarifs`,
      priceCurrency: product.priceCurrency || 'EUR',
      price: product.price,
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      availability: 'https://schema.org/InStock',
      seller: {
        '@id': `${SEO_CONFIG.siteUrl}/#organization`,
      },
    },
    ...(product.ratingValue && product.reviewCount && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: product.ratingValue,
        reviewCount: product.reviewCount,
        bestRating: 5,
        worstRating: 1,
      },
    }),
  };
}

/**
 * Schéma SoftwareApplication pour le service en ligne
 */
export function getSoftwareApplicationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${SEO_CONFIG.siteUrl}/#software`,
    name: SEO_CONFIG.siteName,
    operatingSystem: 'Web',
    applicationCategory: 'EducationalApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
      description: 'Accès gratuit aux cours et fiches de révision',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: 4.8,
      ratingCount: 1250,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      '@id': `${SEO_CONFIG.siteUrl}/#organization`,
    },
  };
}

/**
 * Schéma Course pour les formations
 */
export function getCourseSchema(course: {
  name: string;
  description: string;
  url: string;
  duration?: string;
  level?: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${course.url}/#course`,
    name: course.name,
    description: course.description,
    url: course.url,
    provider: {
      '@id': `${SEO_CONFIG.siteUrl}/#organization`,
    },
    inLanguage: 'fr',
    isAccessibleForFree: true,
    educationalLevel: course.level || 'Débutant à Avancé',
    ...(course.duration && {
      timeRequired: course.duration,
    }),
    ...(course.image && {
      image: course.image,
    }),
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'PT10H',
    },
  };
}

/**
 * Schéma Article enrichi pour le blog
 */
export function getArticleSchema(article: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  image?: string;
  category?: string;
  wordCount?: number;
  readTime?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${article.url}/#article`,
    headline: article.title,
    description: article.description,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Organization',
      name: article.author || SEO_CONFIG.author,
      url: SEO_CONFIG.siteUrl,
    },
    publisher: {
      '@id': `${SEO_CONFIG.siteUrl}/#organization`,
    },
    image: {
      '@type': 'ImageObject',
      url: article.image || `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultImage}`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
    articleSection: article.category || 'Test Civique',
    ...(article.wordCount && { wordCount: article.wordCount }),
    ...(article.readTime && { timeRequired: `PT${article.readTime}M` }),
    inLanguage: 'fr-FR',
  };
}

/**
 * Schéma BreadcrumbList pour la navigation
 */
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Schéma FAQPage pour les pages de FAQ
 */
export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Schéma HowTo pour les guides étape par étape
 */
export function getHowToSchema(howTo: {
  name: string;
  description: string;
  totalTime?: string;
  estimatedCost?: { currency: string; value: number };
  steps: Array<{
    name: string;
    text: string;
    url?: string;
    image?: string;
  }>;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name,
    description: howTo.description,
    ...(howTo.totalTime && { totalTime: howTo.totalTime }),
    ...(howTo.estimatedCost && {
      estimatedCost: {
        '@type': 'MonetaryAmount',
        currency: howTo.estimatedCost.currency,
        value: howTo.estimatedCost.value,
      },
    }),
    step: howTo.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.url && { url: step.url }),
      ...(step.image && { image: step.image }),
    })),
  };
}

/**
 * Schéma Event pour les sessions d'examen
 */
export function getEventSchema(event: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  url: string;
  price?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    ...(event.endDate && { endDate: event.endDate }),
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: event.location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: event.location,
        addressCountry: 'FR',
      },
    },
    organizer: {
      '@id': `${SEO_CONFIG.siteUrl}/#organization`,
    },
    ...(event.price !== undefined && {
      offers: {
        '@type': 'Offer',
        price: event.price,
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: event.url,
      },
    }),
  };
}

/**
 * Schéma VideoObject pour les vidéos de formation
 */
export function getVideoSchema(video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
  contentUrl?: string;
  embedUrl?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.name,
    description: video.description,
    thumbnailUrl: video.thumbnailUrl,
    uploadDate: video.uploadDate,
    duration: video.duration,
    ...(video.contentUrl && { contentUrl: video.contentUrl }),
    ...(video.embedUrl && { embedUrl: video.embedUrl }),
    publisher: {
      '@id': `${SEO_CONFIG.siteUrl}/#organization`,
    },
  };
}
