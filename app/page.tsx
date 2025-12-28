import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/landing/Hero';
import ProgressSection from '@/components/landing/ProgressSection';
import Features from '@/components/landing/Features';
import Pricing from '@/components/landing/Pricing';
import SEOContent from '@/components/seo/SEOContent';
import { 
  getOrganizationSchema, 
  getWebSiteSchema, 
  getCourseSchema, 
  getFAQSchema 
} from '@/lib/seo/schemas';
import { SEO_CONFIG, FAQ_RICH_SNIPPETS } from '@/lib/seo/constants';

export const metadata: Metadata = {
  title: 'Test Civique 2026 - Préparation Gratuite Examen Naturalisation | Test Civique France',
  description: 'Test civique 2026 : préparation gratuite à l\'examen civique pour naturalisation française. Comment passer le test civique ? 800+ questions QCM officielles. Nouvelle loi immigration. Taux réussite 95%.',
  keywords: [
    // PRIORITAIRES - 2026
    'test civique', 'test civique 2026', 'test civique france', 'examen civique 2026',
    'préparation test civique', 'test civique gratuit', 'nouvelle loi immigration 2026',
    // Par mois 2026 - PRIORITAIRES
    'test civique janvier 2026', 'test civique février 2026', 'test civique mars 2026',
    'test civique avril 2026', 'test civique mai 2026', 'test civique juin 2026',
    'test civique juillet 2026', 'test civique août 2026', 'test civique septembre 2026',
    'test civique octobre 2026', 'test civique novembre 2026', 'test civique décembre 2026',
    // Questions utilisateurs - très important pour SEO
    'comment passer le test civique', 'où passer le test civique', 'où passer mon test civique',
    'suis-je éligible au test civique', 'qui doit passer le test civique',
    'comment s\'inscrire au test civique', 'combien coûte le test civique', 'le test civique est-il difficile',
    'quand passer le test civique', 'que faire si on rate le test civique',
    // Naturalisation et titres
    'naturalisation française 2026', 'préparation naturalisation', 'questions test civique', 'QCM naturalisation',
    'devenir français', 'carte de séjour', 'titre de séjour étudiant', 'nouvelle loi immigration',
    'loi immigration 2026', 'renouvellement titre séjour', 'regroupement familial',
    // Villes
    'test civique paris', 'test civique lyon', 'test civique marseille', 'test civique toulouse',
  ],
  alternates: {
    canonical: 'https://www.testciviquefrance.fr',
  },
  openGraph: {
    title: 'Test Civique 2026 - Préparation Gratuite | Réussissez votre examen',
    description: 'Comment passer le test civique 2026 ? Préparation gratuite. 800+ questions QCM, examens blancs. Nouvelle loi immigration. Taux de réussite 95%.',
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

// Schémas JSON-LD additionnels pour la page d'accueil
const organizationSchema = getOrganizationSchema();
const websiteSchema = getWebSiteSchema();
const courseSchema = getCourseSchema({
  name: 'Préparation Complète au Test Civique Français 2025',
  description: 'Formation complète pour réussir le test civique à 80% (32/40). Plus de 800 questions QCM, cours complets, examens blancs. Préparation pour la naturalisation, carte de séjour pluriannuelle et titre de séjour étudiant.',
  url: 'https://www.testciviquefrance.fr/cours',
  duration: 'P4W',
  level: 'Beginner',
});
const faqSchema = getFAQSchema(FAQ_RICH_SNIPPETS);

// Combiner tous les schémas
const allHomeSchemas = [homeJsonLd, organizationSchema, websiteSchema, courseSchema, faqSchema];

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
        <Pricing />
        <SEOContent />
      </main>
      <Footer />
    </>
  );
}
