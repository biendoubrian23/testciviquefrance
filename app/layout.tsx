import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/contexts/AuthContext';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import AnnouncementBanner from '@/components/layout/AnnouncementBanner';
import { PostHogProvider } from '@/components/analytics/PostHogProvider';
import CookieBanner from '@/components/consent/CookieBanner';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700'],
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
  metadataBase: new URL('https://www.testciviquefrance.fr'),
  title: {
    default: 'Test Civique 2026 - Entraînement Gratuit Examen Civique | Test Civique France',
    template: '%s | Test Civique France 2026',
  },
  description: 'Test civique 2026 : entraînement gratuit à l\'examen civique pour naturalisation française, carte de séjour et titre de séjour 10 ans. 800+ questions QCM, examens blancs. Taux de réussite 95%.',
  keywords: [
    'test civique',
    'test civique 2026',
    'examen civique',
    'test civique gratuit',
    'préparation test civique',
    'test civique naturalisation',
    'naturalisation française',
    'naturalisation france 2026',
    'titre de séjour',
    'carte de séjour pluriannuelle',
    'carte résident france',
    'QCM test civique',
    'entraînement test civique',
    'examen blanc test civique',
    'questions test civique',
    'valeurs république française',
    'institutions françaises',
    'droits et devoirs citoyen',
    'histoire de france',
    'culture française',
    'loi immigration 2026',
    'conditions naturalisation 2026',
    'titre séjour étudiant',
    'regroupement familial france',
    'comment réussir test civique',
    'où passer le test civique',
    'french citizenship test',
    'civic test france',
  ],
  authors: [
    { name: 'Test Civique France' },
    { name: 'Le Test Civique', url: 'https://www.testciviquefrance.fr' },
  ],
  creator: 'Test Civique France',
  publisher: 'Test Civique France',
  category: 'Education',
  classification: 'Préparation examens civiques, naturalisation française, titre de séjour, immigration France',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.testciviquefrance.fr',
    title: 'Test Civique France 2026 - Préparation Examen Naturalisation & Titre de Séjour',
    description: 'Préparez le test civique 2026 pour la naturalisation, carte de séjour pluriannuelle, titre de séjour étudiant. 800+ questions QCM conformes nouvelle loi immigration. Gratuit.',
    siteName: 'Test Civique France',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Civique France 2026 - Naturalisation & Titre de Séjour',
    description: 'Préparation test civique obligatoire. 800+ questions, examens blancs. Conforme nouvelle loi immigration. Taux réussite 95%.',
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
    canonical: 'https://www.testciviquefrance.fr',
    languages: {
      'fr-FR': 'https://www.testciviquefrance.fr',
    },
  },
  verification: {
    google: 'fkcq-fjlXitjuDI6R7G_hyCPdWM4JHbamdz-63pLXsk',
  },
  other: {
    'geo.region': 'FR',
    'geo.placename': 'France',
    'og:locale:alternate': 'fr_FR',
    'article:author': 'Test Civique France',
    'article:publisher': 'https://www.testciviquefrance.fr',
    'revisit-after': '1 days',
    'rating': 'General',
    'distribution': 'Global',
    'language': 'French',
    'doc-type': 'Web Page',
    'doc-class': 'Published',
    'resource-type': 'document',
    // Meta tags additionnels pour SEO immigration et étudiants
    'subject': 'Test civique France, naturalisation française, titre de séjour, carte de séjour, immigration France, loi immigration 2024, étudiant étranger France',
    'abstract': 'Plateforme de préparation au test civique obligatoire pour la naturalisation française, la carte de séjour pluriannuelle et le titre de séjour. Conforme à la nouvelle loi immigration 2024-2026.',
    'topic': 'Immigration France, Naturalisation, Titre de séjour, Test civique, Examen civique, Carte de séjour pluriannuelle, Étudiant étranger',
    'summary': 'Test Civique France est la plateforme n°1 de préparation au test civique obligatoire. Préparation complète pour naturalisation, carte de séjour pluriannuelle (4 ans, 10 ans), titre de séjour étudiant, regroupement familial.',
  },
};

// JSON-LD Schema pour le SEO structuré - ULTRA OPTIMISÉ
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.testciviquefrance.fr/#website',
      url: 'https://www.testciviquefrance.fr',
      name: 'Test Civique France',
      description: 'Préparation au test civique obligatoire 2026 pour la naturalisation française, carte de séjour pluriannuelle et titre de séjour étudiant. Conforme nouvelle loi immigration.',
      publisher: {
        '@id': 'https://www.testciviquefrance.fr/#organization',
      },
      potentialAction: [
        {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.testciviquefrance.fr/articles?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      ],
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.testciviquefrance.fr/#organization',
      name: 'Test Civique France',
      alternateName: ['Le Test Civique', 'Test Civique FR', 'Examen Civique France', 'Test Naturalisation France'],
      url: 'https://www.testciviquefrance.fr',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://www.testciviquefrance.fr/#logo',
        url: 'https://www.testciviquefrance.fr/logo.png',
        contentUrl: 'https://www.testciviquefrance.fr/logo.png',
        width: 290,
        height: 88,
        caption: 'Test Civique France',
      },
      image: {
        '@id': 'https://www.testciviquefrance.fr/#logo',
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
        email: 'notification@testciviquefrance.fr',
      },
    },
    {
      '@type': 'EducationalOrganization',
      '@id': 'https://www.testciviquefrance.fr/#educationalorg',
      name: 'Test Civique France',
      description: 'Plateforme de préparation au test civique pour la naturalisation française, la carte de séjour pluriannuelle et le titre de séjour étudiant',
      url: 'https://www.testciviquefrance.fr',
      educationalCredentialAwarded: 'Préparation au test civique de naturalisation et titre de séjour',
      teaches: [
        'Valeurs de la République française',
        'Institutions françaises',
        'Droits et devoirs du citoyen',
        'Histoire de France',
        'Géographie de France',
        'Culture française',
        'Vie en société en France',
        'Procédures immigration France',
        'Titre de séjour étudiant',
        'Nouvelle loi immigration 2024',
      ],
    },
    {
      '@type': 'Course',
      '@id': 'https://www.testciviquefrance.fr/#course',
      name: 'Préparation au Test Civique Français 2026',
      description: 'Formation complète pour réussir le test civique obligatoire à 80% (32/40 bonnes réponses) pour la naturalisation française, la carte de séjour pluriannuelle, la carte de résident ou le titre de séjour étudiant. Conforme à la nouvelle loi immigration 2024.',
      provider: {
        '@id': 'https://www.testciviquefrance.fr/#organization',
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
      '@type': 'BreadcrumbList',
      '@id': 'https://www.testciviquefrance.fr/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: 'https://www.testciviquefrance.fr',
        },
      ],
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.testciviquefrance.fr/#navigation',
      name: ['Connexion', 'Inscription', 'Tarifs', 'Articles', 'FAQ'],
      url: [
        'https://www.testciviquefrance.fr/login',
        'https://www.testciviquefrance.fr/signup',
        'https://www.testciviquefrance.fr/tarifs',
        'https://www.testciviquefrance.fr/articles',
        'https://www.testciviquefrance.fr/faq'
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
    <html lang="fr" className={montserrat.variable}>
      <head>
        {/* DNS prefetch — différés car les scripts se chargent après 5s */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Favicons multiples */}
        <link rel="icon" type="image/png" href="/fav.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/fav.png" />
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

        {/* Google AdSense verification */}
        <meta name="google-adsense-account" content="ca-pub-3632266086082682" />

        {/* Google Consent Mode v2 — doit s'exécuter AVANT GTM/AdSense */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                wait_for_update: 1500
              });
              gtag('set', 'ads_data_redaction', true);
              gtag('set', 'url_passthrough', true);
            `,
          }}
        />

        {/* Geo tags */}
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="France" />
        <meta name="ICBM" content="46.227638, 2.213749" />
        {/* JSON-LD Structured Data (Organisation, WebSite, Course, FAQ, etc.) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {/* Google Tag Manager - noscript (fallback) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WFN8446P"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <CookieBanner />
        <AnnouncementBanner />
        <PostHogProvider>
          <AuthProvider>{children}</AuthProvider>
        </PostHogProvider>
        <Analytics />

        {/* AdSense auto-ads — charge après interactivité, respecte Consent Mode v2 */}
        <Script
          id="adsense-auto-ads"
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3632266086082682"
          crossOrigin="anonymous"
        />

        {/* Scripts tiers différés de 5s pour ne pas bloquer LCP/TBT */}
        <Script id="deferred-analytics" strategy="lazyOnload">
          {`
            setTimeout(function() {
              // GTM + Google Ads : respectent Consent Mode v2, chargement inconditionnel autorisé
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WFN8446P');

              var gs=document.createElement('script');gs.async=true;
              gs.src='https://www.googletagmanager.com/gtag/js?id=AW-17797146827';
              document.head.appendChild(gs);
              window.dataLayer=window.dataLayer||[];
              function gtag(){dataLayer.push(arguments);}
              gtag('js',new Date());gtag('config','AW-17797146827');

              // Ahrefs : ne respecte pas Consent Mode v2 → chargement conditionné au consentement analytics
              try {
                var raw = localStorage.getItem('tcf_cookie_consent_v1');
                if (raw) {
                  var prefs = JSON.parse(raw);
                  if (prefs.analytics) {
                    var as=document.createElement('script');as.async=true;
                    as.src='https://analytics.ahrefs.com/analytics.js';
                    as.setAttribute('data-key','hFBKQGItWXZ9na7DwxsrZw');
                    document.head.appendChild(as);
                  }
                }
              } catch(e) {}
            }, 5000);
          `}
        </Script>
      </body>
    </html>
  );
}
