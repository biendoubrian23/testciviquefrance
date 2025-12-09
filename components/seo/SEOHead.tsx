import { Metadata } from 'next';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  noindex?: boolean;
}

/**
 * Génère des métadonnées SEO complètes pour Next.js App Router
 * Inclut : title, description, keywords, Open Graph, Twitter Cards, canonical
 */
export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  canonical,
  ogType = 'website',
  ogImage = '/images/og-image.jpg',
  noindex = false,
}: SEOHeadProps): Metadata {
  const baseUrl = 'https://www.testciviquefrance.fr';
  const fullCanonical = canonical || baseUrl;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    alternates: {
      canonical: fullCanonical,
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
    openGraph: {
      title,
      description,
      url: fullCanonical,
      siteName: 'Test Civique France',
      locale: 'fr_FR',
      type: ogType,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@testciviquefr',
      site: '@testciviquefr',
    },
  };
}
