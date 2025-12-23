'use client';

import Script from 'next/script';
import { SEO_CONFIG } from '@/lib/seo/constants';
import { getProductSchema, getSoftwareApplicationSchema, getFAQSchema } from '@/lib/seo/schemas';

/**
 * Schemas JSON-LD pour la page Tarifs
 * Améliore l'affichage dans Google avec prix et notes
 */
export function TarifsSchemas() {
  // Produits/Offres
  const products = [
    {
      name: 'Test Civique France - Gratuit',
      description: 'Accès gratuit aux cours et fiches de révision pour le test civique français',
      price: 0,
      sku: 'tcf-gratuit',
      ratingValue: 4.8,
      reviewCount: 850,
    },
    {
      name: 'Test Civique France - Pack Standard',
      description: 'Pack Standard avec tests thématiques, 1 examen blanc et cours détaillés. Accès 7 jours.',
      price: 2.99,
      sku: 'tcf-standard',
      ratingValue: 4.7,
      reviewCount: 420,
    },
    {
      name: 'Test Civique France - Premium',
      description: 'Pack Premium avec tests illimités, 3 examens blancs, statistiques avancées et support prioritaire. Accès 7 jours.',
      price: 6.99,
      sku: 'tcf-premium',
      ratingValue: 4.9,
      reviewCount: 280,
    },
    {
      name: 'Test Civique France - Découverte',
      description: '2 sessions d\'examen blanc dans les conditions réelles de l\'examen civique',
      price: 2.50,
      sku: 'tcf-decouverte',
      ratingValue: 4.6,
      reviewCount: 150,
    },
  ];

  // FAQ pour rich snippets
  const faqItems = [
    {
      question: 'Comment fonctionne l\'abonnement à la semaine ?',
      answer: 'L\'abonnement vous donne un accès complet pendant 7 jours à partir de la date d\'achat. Vous pouvez utiliser toutes les fonctionnalités incluses dans votre formule sans limitation pendant cette période.',
    },
    {
      question: 'Quelle est la différence entre Pack Standard et Premium ?',
      answer: 'Le Pack Standard (2,99€) inclut les tests thématiques, 1 session d\'examen blanc et les cours. Le Premium (6,99€) offre des tests illimités, 3 sessions d\'examen blanc, des statistiques avancées et un support prioritaire.',
    },
    {
      question: 'Les questions sont-elles conformes à l\'examen officiel ?',
      answer: 'Oui, toutes nos questions sont basées sur le référentiel officiel de l\'examen civique français. Elles couvrent les valeurs de la République, l\'histoire de France, la géographie et les institutions.',
    },
    {
      question: 'Combien coûte le test civique ?',
      answer: 'La préparation sur Test Civique France est gratuite pour les cours. Les packs payants commencent à 2,99€/semaine. L\'examen officiel lui-même coûte environ 50€ dans un centre agréé.',
    },
  ];

  return (
    <>
      {/* Schema SoftwareApplication */}
      <Script
        id="schema-software"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getSoftwareApplicationSchema()),
        }}
        strategy="beforeInteractive"
      />

      {/* Schemas Product pour chaque offre */}
      {products.map((product) => (
        <Script
          key={product.sku}
          id={`schema-product-${product.sku}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getProductSchema(product)),
          }}
          strategy="beforeInteractive"
        />
      ))}

      {/* Schema FAQ */}
      <Script
        id="schema-faq-tarifs"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQSchema(faqItems)),
        }}
        strategy="beforeInteractive"
      />
    </>
  );
}
