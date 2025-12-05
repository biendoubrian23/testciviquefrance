import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/landing/Hero';
import ProgressSection from '@/components/landing/ProgressSection';
import Features from '@/components/landing/Features';
import Pricing from '@/components/landing/Pricing';

export const metadata: Metadata = {
  title: 'Test Civique France - Préparation Examen Civique Naturalisation Française 2025',
  description: 'Préparez-vous au test civique obligatoire pour la naturalisation française. 800+ questions officielles QCM, 5 thématiques (valeurs républicaines, institutions, droits et devoirs, histoire, vie en société). Seuil 80% - 32/40. Examens blancs gratuits. Conforme décret 2025-647 CESEDA.',
  keywords: [
    'test civique', 'test civique france', 'examen civique', 'naturalisation française',
    'préparation test civique', 'questions test civique', 'QCM naturalisation',
    'devenir français', 'carte de séjour', 'carte résident', '40 questions test civique',
    '80 pourcent test civique', 'valeurs république', 'institutions françaises',
  ],
  alternates: {
    canonical: 'https://testciviquefrance.com',
  },
  openGraph: {
    title: 'Test Civique France - Réussissez votre examen de naturalisation',
    description: 'Préparation complète au test civique français. 800+ questions, 5 thématiques officielles, examens blancs. Taux de réussite 95%.',
    url: 'https://testciviquefrance.com',
    type: 'website',
  },
};

// JSON-LD pour la page d'accueil
const homeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://testciviquefrance.com/#webpage',
  url: 'https://testciviquefrance.com',
  name: 'Test Civique France - Préparation Examen Civique Naturalisation',
  description: 'Plateforme de préparation au test civique pour la naturalisation française',
  isPartOf: {
    '@id': 'https://testciviquefrance.com/#website',
  },
  about: {
    '@type': 'Thing',
    name: 'Test civique français',
    description: 'Examen obligatoire de 40 questions QCM pour la naturalisation française',
  },
  mainEntity: {
    '@type': 'Course',
    name: 'Préparation Test Civique Français',
    description: 'Formation complète pour réussir le test civique à 80%',
    provider: {
      '@type': 'Organization',
      name: 'Test Civique France',
    },
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', '.hero-description'],
  },
  primaryImageOfPage: {
    '@type': 'ImageObject',
    url: 'https://testciviquefrance.com/og-image.png',
  },
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
