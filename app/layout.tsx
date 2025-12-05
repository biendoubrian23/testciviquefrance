import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/contexts/AuthContext';
import Script from 'next/script';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2563EB' },
    { media: '(prefers-color-scheme: dark)', color: '#1D4ED8' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://testciviquefrance.com'),
  title: {
    default: 'Test Civique France - Préparation Examen Civique Naturalisation Française 2025',
    template: '%s | Test Civique France - Examen Civique Naturalisation',
  },
  description: 'Préparez-vous au test civique obligatoire pour la naturalisation française. 800+ questions officielles QCM, 5 thématiques, examens blancs corrigés. Seuil 80% (32/40). Conforme décret 2025-647. Taux de réussite 95%.',
  keywords: [
    // Mots-clés principaux
    'test civique',
    'test civique france',
    'test civique français',
    'examen civique',
    'examen civique france',
    'examen civique français',
    'test civique naturalisation',
    'examen civique naturalisation',
    
    // Naturalisation
    'naturalisation française',
    'naturalisation france',
    'devenir français',
    'devenir citoyen français',
    'obtenir nationalité française',
    'demande naturalisation',
    'dossier naturalisation',
    'nationalité française',
    
    // Carte de séjour
    'carte de séjour pluriannuelle',
    'carte de résident',
    'carte résident france',
    'titre de séjour',
    'renouvellement carte séjour',
    
    // Questions et préparation
    'questions test civique',
    'questions examen civique',
    'QCM test civique',
    'QCM naturalisation',
    'révision test civique',
    'préparation test civique',
    'préparation examen civique',
    'entraînement test civique',
    's\'entraîner test civique',
    'exercices test civique',
    
    // Thématiques officielles
    'valeurs république française',
    'principes républicains',
    'symboles république france',
    'institutions françaises',
    'système politique français',
    'droits et devoirs citoyen',
    'histoire de france',
    'géographie france',
    'culture française',
    'vie en société france',
    'laïcité france',
    'devise française',
    'Marianne symbole',
    'drapeau français',
    'hymne national france',
    'Marseillaise',
    
    // Aspects pratiques
    '40 questions test civique',
    '80 pourcent test civique',
    '32 bonnes réponses',
    'seuil réussite test civique',
    'décret 2025-647',
    'CESEDA',
    'article R.413-12-1',
    
    // Examens blancs
    'examen blanc test civique',
    'simulation test civique',
    'test blanc naturalisation',
    'entrainement gratuit test civique',
    
    // Variantes orthographiques et recherches
    'teste civique',
    'tester civique',
    'test civic france',
    'civic test france',
    'french citizenship test',
    'france citizenship exam',
    'integration test france',
    
    // Longue traîne
    'comment réussir test civique',
    'comment préparer test civique',
    'comment passer test civique',
    'où passer test civique',
    'quand passer test civique',
    'prix test civique',
    'durée test civique',
    'difficulté test civique',
    'taux réussite test civique',
    'résultats test civique',
    'attestation test civique',
    'certificat test civique',
  ],
  authors: [
    { name: 'Test Civique France' },
    { name: 'Le Test Civique', url: 'https://testciviquefrance.com' },
  ],
  creator: 'Test Civique France',
  publisher: 'Test Civique France',
  category: 'Education',
  classification: 'Préparation examens civiques et naturalisation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://testciviquefrance.com',
    title: 'Test Civique France - Préparation Examen Civique Naturalisation 2025',
    description: 'Préparez-vous au test civique obligatoire pour la naturalisation française. 800+ questions officielles, 5 thématiques, examens blancs. Conforme décret 2025-647.',
    siteName: 'Test Civique France',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Test Civique France - Préparation Examen Naturalisation',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Civique France - Préparation Examen Civique Naturalisation',
    description: 'Préparez-vous au test civique français. 800+ questions, examens blancs, taux de réussite 95%.',
    images: ['/twitter-image.png'],
    creator: '@testciviquefr',
    site: '@testciviquefr',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://testciviquefrance.com',
    languages: {
      'fr-FR': 'https://testciviquefrance.com',
    },
  },
  verification: {
    google: 'votre-code-verification-google',
    yandex: 'votre-code-yandex',
    other: {
      'msvalidate.01': 'votre-code-bing',
    },
  },
  other: {
    'geo.region': 'FR',
    'geo.placename': 'France',
    'og:locale:alternate': 'fr_FR',
    'article:author': 'Test Civique France',
    'article:publisher': 'https://testciviquefrance.com',
    'revisit-after': '3 days',
    'rating': 'General',
    'distribution': 'Global',
    'language': 'French',
    'doc-type': 'Web Page',
    'doc-class': 'Published',
    'resource-type': 'document',
  },
};

// JSON-LD Schema pour le SEO structuré
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://testciviquefrance.com/#website',
      url: 'https://testciviquefrance.com',
      name: 'Test Civique France',
      description: 'Préparation au test civique pour la naturalisation française',
      publisher: {
        '@id': 'https://testciviquefrance.com/#organization',
      },
      potentialAction: [
        {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://testciviquefrance.com/articles?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      ],
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'Organization',
      '@id': 'https://testciviquefrance.com/#organization',
      name: 'Test Civique France',
      alternateName: ['Le Test Civique', 'Test Civique FR', 'Examen Civique France'],
      url: 'https://testciviquefrance.com',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://testciviquefrance.com/#logo',
        url: 'https://testciviquefrance.com/logo.png',
        contentUrl: 'https://testciviquefrance.com/logo.png',
        width: 290,
        height: 88,
        caption: 'Test Civique France',
      },
      image: {
        '@id': 'https://testciviquefrance.com/#logo',
      },
      sameAs: [
        'https://www.facebook.com/testciviquefrance',
        'https://twitter.com/testciviquefr',
        'https://www.linkedin.com/company/testciviquefrance',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['French', 'English'],
        email: 'contact@testciviquefrance.com',
      },
    },
    {
      '@type': 'EducationalOrganization',
      '@id': 'https://testciviquefrance.com/#educationalorg',
      name: 'Test Civique France',
      description: 'Plateforme de préparation au test civique pour la naturalisation française',
      url: 'https://testciviquefrance.com',
      educationalCredentialAwarded: 'Préparation au test civique de naturalisation',
      teaches: [
        'Valeurs de la République française',
        'Institutions françaises',
        'Droits et devoirs du citoyen',
        'Histoire de France',
        'Géographie de France',
        'Culture française',
        'Vie en société en France',
      ],
    },
    {
      '@type': 'Course',
      '@id': 'https://testciviquefrance.com/#course',
      name: 'Préparation au Test Civique Français',
      description: 'Formation complète pour réussir le test civique obligatoire à 80% (32/40 bonnes réponses) pour la naturalisation française, la carte de séjour pluriannuelle ou la carte de résident.',
      provider: {
        '@id': 'https://testciviquefrance.com/#organization',
      },
      educationalLevel: 'Tous niveaux',
      inLanguage: 'fr-FR',
      teaches: [
        'Principes et valeurs de la République (11 questions)',
        'Système institutionnel et politique (6 questions)',
        'Droits et devoirs (11 questions)',
        'Histoire, géographie et culture (8 questions)',
        'Vivre dans la société française (4 questions)',
      ],
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'online',
        courseWorkload: 'PT10H',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '1250',
        bestRating: '5',
        worstRating: '1',
      },
      offers: {
        '@type': 'Offer',
        category: 'Préparation examen',
        availability: 'https://schema.org/InStock',
        price: '0',
        priceCurrency: 'EUR',
        validFrom: '2025-01-01',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://testciviquefrance.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qu\'est-ce que le test civique français ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le test civique est un examen officiel obligatoire pour obtenir la naturalisation française, une carte de séjour pluriannuelle ou une carte de résident. Il comprend 40 questions QCM sur 5 thématiques officielles avec un seuil de réussite de 80% (32 bonnes réponses).',
          },
        },
        {
          '@type': 'Question',
          name: 'Combien de questions comporte le test civique ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le test civique comporte 40 questions au format QCM (Questions à Choix Multiples) avec une seule bonne réponse par question. Les questions sont réparties sur 5 thématiques officielles.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quel est le seuil de réussite du test civique ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le seuil de réussite du test civique est de 80%, soit 32 bonnes réponses sur 40 questions. Une bonne réponse vaut 1 point, une mauvaise réponse ou une absence de réponse vaut 0 point.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quelles sont les 5 thématiques du test civique ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Les 5 thématiques officielles sont : 1) Principes et valeurs de la République (11 questions), 2) Système institutionnel et politique (6 questions), 3) Droits et devoirs (11 questions), 4) Histoire, géographie et culture (8 questions), 5) Vivre dans la société française (4 questions).',
          },
        },
        {
          '@type': 'Question',
          name: 'Comment se préparer au test civique ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pour se préparer au test civique, utilisez Test Civique France : 800+ questions officielles, cours sur les 5 thématiques, examens blancs corrigés. Notre plateforme offre un taux de réussite de 95% grâce à un entraînement complet et personnalisé.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://testciviquefrance.com/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: 'https://testciviquefrance.com',
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Préconnexions pour performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicons multiples */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Meta tags supplémentaires pour SEO */}
        <meta name="application-name" content="Test Civique France" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Test Civique" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Dublin Core Metadata */}
        <meta name="DC.title" content="Test Civique France - Préparation Examen Naturalisation" />
        <meta name="DC.creator" content="Test Civique France" />
        <meta name="DC.subject" content="Test civique, naturalisation française, examen civique, QCM" />
        <meta name="DC.description" content="Préparation complète au test civique pour la naturalisation française" />
        <meta name="DC.publisher" content="Test Civique France" />
        <meta name="DC.language" content="fr" />
        <meta name="DC.coverage" content="France" />
        <meta name="DC.rights" content="Copyright Test Civique France" />
        
        {/* Geo tags */}
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="France" />
        <meta name="ICBM" content="46.227638, 2.213749" />
      </head>
      <body className="antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
