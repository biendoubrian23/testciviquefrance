// Configuration des plans Stripe
export const STRIPE_PLANS = {
  standard: {
    name: 'Pack Standard',
    priceId: process.env.NODE_ENV === 'development' 
      ? 'price_1Sc3qxEuT9agNbEUdX0RkLM4' 
      : 'price_1Sc3qxEuT9agNbEUdX0RkLM4', // Remplacer par l'ID production plus tard
    paymentLink: 'https://buy.stripe.com/test_14A8wP1kXgPi5NPgsV0Ny00',
    price: 2.99,
    interval: 'week' as const,
    features: [
      'Tests thématiques',
      '1 examen blanc',
      'Cours détaillés',
      'Corrigés expliqués',
      'Suivi de progression'
    ]
  },
  premium: {
    name: 'Premium',
    priceId: process.env.NODE_ENV === 'development'
      ? 'price_1Sc3rPEuT9agNbEU65mDE4RP'
      : 'price_1Sc3rPEuT9agNbEU65mDE4RP', // Remplacer par l'ID production plus tard
    paymentLink: 'https://buy.stripe.com/test_00waEXfbNfLe6RT1y10Ny01',
    price: 6.99,
    interval: 'week' as const,
    features: [
      'Tests illimités',
      '3 examens blancs',
      'Statistiques avancées',
      'Révision intelligente',
      'Support prioritaire'
    ]
  },
  examen: {
    name: 'Pack Examen',
    priceId: process.env.NODE_ENV === 'development'
      ? 'price_1Sc3rnEuT9agNbEUjrVnwyaq'
      : 'price_1Sc3rnEuT9agNbEUjrVnwyaq', // Remplacer par l'ID production plus tard
    paymentLink: 'https://buy.stripe.com/test_8x24gz4x99mQgst1y10Ny02',
    productId: 'prod_TZCGcvKKQk8sr8',
    price: 2.50,
    interval: 'one_time' as const,
    features: [
      '2 examens blancs complets',
      'Conditions réelles d\'examen',
      'Corrigés détaillés',
      'Score et analyse'
    ]
  },
  flashcards2Themes: {
    name: 'Flashcards 2 thèmes',
    priceId: process.env.NODE_ENV === 'development'
      ? 'price_1Sc6NAEuT9agNbEUYKun4iyc'
      : 'price_1Sc6NAEuT9agNbEUYKun4iyc',
    paymentLink: 'https://buy.stripe.com/test_5kQ28r0gT6aEa4590t0Ny03',
    productId: 'prod_TZEqyMCtaJySf4',
    price: 1.20,
    interval: 'one_time' as const,
    requiresSubscription: true,
    features: [
      'Principes et valeurs',
      'Histoire et géographie',
      'Révision par flashcards',
      'Achat unique'
    ]
  },
  flashcards5Themes: {
    name: 'Flashcards 5 thèmes',
    priceId: process.env.NODE_ENV === 'development'
      ? 'price_1Sc6NeEuT9agNbEUHTTy7vk8'
      : 'price_1Sc6NeEuT9agNbEUHTTy7vk8',
    paymentLink: 'https://buy.stripe.com/test_5kQ5kD5BdaqUb89b8B0Ny04',
    productId: 'prod_TZErV6VPZJuOqE',
    price: 1.50,
    interval: 'one_time' as const,
    requiresSubscription: true,
    features: [
      'Tous les 5 thèmes',
      'Institutions politiques',
      'Droits et devoirs',
      'Vivre en France',
      'Accès complet'
    ]
  }
};

export type PlanType = keyof typeof STRIPE_PLANS;
