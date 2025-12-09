import Script from 'next/script';

/**
 * Composant pour injecter des données structurées JSON-LD dans une page
 */
export function StructuredData({ data }: { data: Record<string, any> }) {
  return (
    <Script
      id={`structured-data-${data['@type']?.toLowerCase() || 'default'}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      strategy="beforeInteractive"
    />
  );
}

/**
 * Génère des données structurées Organization pour le site
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.testciviquefrance.fr/#organization',
    name: 'Test Civique France',
    url: 'https://www.testciviquefrance.fr',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.testciviquefrance.fr/images/logo.png',
      width: 512,
      height: 512,
    },
    description:
      'Plateforme de préparation au test civique français pour la naturalisation et les titres de séjour.',
    sameAs: [
      'https://www.facebook.com/testciviquefrance',
      'https://twitter.com/testciviquefr',
      'https://www.linkedin.com/company/testciviquefrance',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33-1-XX-XX-XX-XX',
      contactType: 'customer service',
      areaServed: 'FR',
      availableLanguage: ['French'],
    },
  };
}

/**
 * Génère un Breadcrumb JSON-LD
 */
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
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
 * Génère un FAQ JSON-LD
 */
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
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
 * Génère un Article JSON-LD
 */
export function getArticleSchema({
  title,
  description,
  datePublished,
  dateModified,
  authorName,
  imageUrl,
  url,
}: {
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  imageUrl?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: authorName || 'Test Civique France',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Test Civique France',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.testciviquefrance.fr/images/logo.png',
      },
    },
    image: imageUrl || 'https://www.testciviquefrance.fr/images/og-image.jpg',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

/**
 * Génère un WebSite JSON-LD avec SearchAction
 */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.testciviquefrance.fr/#website',
    url: 'https://www.testciviquefrance.fr',
    name: 'Test Civique France',
    description:
      'Préparation complète au test civique français pour la naturalisation et les titres de séjour',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.testciviquefrance.fr/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Génère un Course JSON-LD pour les pages de formation
 */
export function getCourseSchema({
  name,
  description,
  provider = 'Test Civique France',
}: {
  name: string;
  description: string;
  provider?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider,
      sameAs: 'https://www.testciviquefrance.fr',
    },
    inLanguage: 'fr',
    coursePrerequisites: 'Aucun prérequis',
    educationalLevel: 'Débutant à Avancé',
  };
}
