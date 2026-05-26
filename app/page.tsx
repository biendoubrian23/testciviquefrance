import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/landing/Hero';
import { 
  getCourseSchema, 
  getFAQSchema 
} from '@/lib/seo/schemas';
import { SEO_CONFIG, FAQ_RICH_SNIPPETS } from '@/lib/seo/constants';

// Lazy load des composants below-the-fold pour améliorer LCP/TBT
const ProgressSection = dynamic(() => import('@/components/landing/ProgressSection'), { ssr: true });
const Features = dynamic(() => import('@/components/landing/Features'), { ssr: true });
const Pricing = dynamic(() => import('@/components/landing/Pricing'), { ssr: true });
const SEOContent = dynamic(() => import('@/components/seo/SEOContent'), { ssr: true });
const RecentArticles = dynamic(() => import('@/components/landing/RecentArticles'), { ssr: true });

export const metadata: Metadata = {
  title: 'Test Civique 2026 - Entraînement Gratuit Examen Civique Naturalisation | Test Civique France',
  description: 'Test civique 2026 : entraînement gratuit à l\'examen civique pour naturalisation française, carte de séjour et titre de séjour 10 ans. 800+ questions QCM officielles, examens blancs illimités. Conforme décret 2025-647. Taux de réussite 95%.',
  keywords: [
    'test civique',
    'test civique 2026',
    'examen civique',
    'test civique gratuit',
    'préparation test civique',
    'test civique naturalisation',
    'naturalisation française',
    'titre de séjour',
    'carte de séjour pluriannuelle',
    'QCM test civique',
    'entraînement test civique',
    'questions test civique',
    'valeurs république française',
    'institutions françaises',
    'droits et devoirs citoyen',
    'histoire de france',
    'loi immigration 2026',
    'conditions naturalisation',
    'comment réussir test civique',
    'où passer le test civique',
  ],
  alternates: {
    canonical: 'https://www.testciviquefrance.fr',
  },
  openGraph: {
    title: 'Test Civique 2026 - Entraînement Gratuit Examen Civique Naturalisation',
    description: 'Test civique 2026 : entraînement gratuit. 800+ questions QCM, examens blancs. Carte de séjour, naturalisation, titre de séjour 10 ans. Taux de réussite 95%.',
    url: 'https://www.testciviquefrance.fr',
    type: 'website',
  },
};

// JSON-LD pour la page d'accueil - ENRICHI
const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.testciviquefrance.fr/#webpage',
  url: 'https://www.testciviquefrance.fr',
  name: 'Test Civique France 2026 - Préparation Examen Naturalisation & Titre de Séjour',
  description: 'Plateforme de préparation au test civique obligatoire pour la naturalisation française, carte de séjour pluriannuelle et titre de séjour étudiant. Conforme nouvelle loi immigration 2026.',
  isPartOf: {
    '@id': 'https://www.testciviquefrance.fr/#website',
  },
  about: {
    '@type': 'Thing',
    name: 'Test civique français 2026',
    description: 'Examen obligatoire de 40 questions QCM pour la naturalisation française, la carte de séjour pluriannuelle et le titre de séjour. Conforme à la nouvelle loi immigration 2026.',
  },
  mainEntity: [
    {
      '@type': 'Course',
      name: 'Préparation Test Civique Français 2026',
      description: 'Formation complète pour réussir le test civique à 80% (32/40). Naturalisation, carte de séjour, titre de séjour étudiant. Conforme nouvelle loi immigration.',
      provider: {
        '@type': 'Organization',
        name: 'Test Civique France',
      },
    },
    {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'SiteNavigationElement',
          position: 1,
          name: 'Connexion',
          description: 'Accéder à votre compte et vos tests',
          url: 'https://www.testciviquefrance.fr/login',
        },
        {
          '@type': 'SiteNavigationElement',
          position: 2,
          name: 'Inscription Gratuit',
          description: 'Créer un compte pour commencer les tests gratuits',
          url: 'https://www.testciviquefrance.fr/signup',
        },
        {
          '@type': 'SiteNavigationElement',
          position: 3,
          name: 'Nos Tarifs',
          description: 'Voir les offres Premium et Pack Examen',
          url: 'https://www.testciviquefrance.fr/tarifs',
        },
        {
          '@type': 'SiteNavigationElement',
          position: 4,
          name: 'Guides & Articles',
          description: 'Toute l\'actualité sur l\'examen civique et la naturalisation',
          url: 'https://www.testciviquefrance.fr/articles',
        },
      ],
    },
  ],
};

// Schémas JSON-LD spécifiques à la page d'accueil (Organisation/WebSite déjà dans layout.tsx)
const courseSchema = getCourseSchema({
  name: 'Préparation Complète au Test Civique Français 2026',
  description: 'Formation complète pour réussir le test civique à 80% (32/40). Plus de 800 questions QCM, cours complets, examens blancs. Préparation pour la naturalisation, carte de séjour pluriannuelle et titre de séjour étudiant.',
  url: 'https://www.testciviquefrance.fr/cours',
  duration: 'P4W',
  level: 'Beginner',
});
const faqSchema = getFAQSchema(FAQ_RICH_SNIPPETS);

// Schémas spécifiques à l'accueil uniquement
const allHomeSchemas = [homeJsonLd, courseSchema, faqSchema];

export default function HomePage() {
  return (
    <>
      {allHomeSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Header />
      <main>
        <Hero />
        <ProgressSection />
        <Features />
        <RecentArticles />
        <Pricing />
        <SEOContent />
      </main>
      <Footer />
    </>
  );
}
