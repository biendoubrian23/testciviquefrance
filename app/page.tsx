import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/landing/Hero';
import ProgressSection from '@/components/landing/ProgressSection';
import Features from '@/components/landing/Features';
import Pricing from '@/components/landing/Pricing';

export const metadata: Metadata = {
  title: 'Test Civique France 2025 2026 - Préparation Examen Naturalisation & Titre de Séjour | Où passer le test civique',
  description: 'Préparez le test civique obligatoire 2025-2026 pour la naturalisation française. Où passer le test civique ? Suis-je éligible ? 800+ questions QCM officielles. Test civique janvier février mars 2025 2026. Gratuit. Taux réussite 95%.',
  keywords: [
    // Principaux
    'test civique', 'test civique france', 'test civique 2025', 'test civique 2026', 'examen civique',
    // Par mois 2025
    'test civique janvier 2025', 'test civique février 2025', 'test civique mars 2025',
    'test civique avril 2025', 'test civique mai 2025', 'test civique juin 2025',
    'test civique septembre 2025', 'test civique octobre 2025', 'test civique novembre 2025', 'test civique décembre 2025',
    // Par mois 2026
    'test civique janvier 2026', 'test civique février 2026', 'test civique mars 2026',
    'test civique avril 2026', 'test civique mai 2026', 'test civique juin 2026',
    // Questions utilisateurs
    'où passer le test civique', 'où passer mon test civique', 'suis-je éligible au test civique',
    'comment s\'inscrire au test civique', 'combien coûte le test civique', 'le test civique est-il difficile',
    'quand passer le test civique', 'que faire si on rate le test civique',
    // Naturalisation et titres
    'naturalisation française', 'préparation test civique', 'questions test civique', 'QCM naturalisation',
    'devenir français', 'carte de séjour', 'titre de séjour étudiant', 'nouvelle loi immigration 2024',
    'loi immigration 2025', 'renouvellement titre séjour', 'regroupement familial',
    // Villes
    'test civique paris', 'test civique lyon', 'test civique marseille', 'test civique toulouse',
  ],
  alternates: {
    canonical: 'https://www.testciviquefrance.fr',
  },
  openGraph: {
    title: 'Test Civique France 2025 2026 - Réussissez votre examen de naturalisation',
    description: 'Où passer le test civique ? Préparation complète au test civique français. 800+ questions, examens blancs. Test civique janvier février mars 2025 2026. Taux de réussite 95%.',
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
  name: 'Test Civique France 2025 - Préparation Examen Naturalisation & Titre de Séjour',
  description: 'Plateforme de préparation au test civique obligatoire pour la naturalisation française, carte de séjour pluriannuelle et titre de séjour étudiant. Conforme nouvelle loi immigration 2024.',
  isPartOf: {
    '@id': 'https://www.testciviquefrance.fr/#website',
  },
  about: {
    '@type': 'Thing',
    name: 'Test civique français 2025',
    description: 'Examen obligatoire de 40 questions QCM pour la naturalisation française, la carte de séjour pluriannuelle et le titre de séjour. Conforme à la nouvelle loi immigration.',
  },
  mainEntity: [
    {
      '@type': 'Course',
      name: 'Préparation Test Civique Français 2025',
      description: 'Formation complète pour réussir le test civique à 80% (32/40). Naturalisation, carte de séjour, titre de séjour étudiant.',
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

import SEOContent from '@/components/seo/SEOContent';

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <ProgressSection />
        <Features />
        <Pricing />
        <SEOContent />
      </main>
      <Footer />
    </>
  );
}
