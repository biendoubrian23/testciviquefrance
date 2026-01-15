// IDs de prix PRODUCTION uniquement
export const ALL_STANDARD_PRICE_IDS = [
  'price_1Sc3AqIUG5GUejFZagJyV8HC', // Standard PRODUCTION
];

export const ALL_PREMIUM_PRICE_IDS = [
  'price_1Sc3BYIUG5GUejFZaWexcxzz', // Premium PRODUCTION
];

// Configuration des plans Stripe - PRODUCTION UNIQUEMENT
export const STRIPE_PLANS = {
  standard: {
    name: 'Pack Standard',
    priceId: 'price_1Sc3AqIUG5GUejFZagJyV8HC', // ID production
    paymentLink: 'https://buy.stripe.com/7sYaEY4lT5ac1Dwfj18Zq00',
    price: 2.99,
    interval: 'week' as const,
    features: [
      'Tests thématiques',
      '1 session d\'examen blanc',
      'Cours détaillés',
      'Corrigés expliqués',
      'Suivi de progression'
    ]
  },
  premium: {
    name: 'Premium',
    priceId: 'price_1Sc3BYIUG5GUejFZaWexcxzz', // ID production
    paymentLink: 'https://buy.stripe.com/00waEY9GddGI5TM7Qz8Zq01',
    price: 6.99,
    interval: 'week' as const,
    features: [
      'Tests illimités',
      "3 sessions d'examen blanc",
      'Statistiques avancées',
      'Révision intelligente',
      'Support prioritaire'
    ]
  },
  examen: {
    name: 'Pack Examen',
    priceId: 'price_1Sc3C6IUG5GUejFZtIHXajUx', // ID production
    paymentLink: 'https://buy.stripe.com/dRmeVef0x324fum8UD8Zq02',
    productId: 'prod_TZCGcvKKQk8sr8',
    price: 2.50,
    interval: 'one_time' as const,
    requiresSubscription: false,
    features: [
      "2 sessions d'examen blanc",
      'Conditions réelles d\'examen',
      'Corrigés détaillés',
      'Score et analyse'
    ]
  },
  flashcards2Themes: {
    name: 'Flashcards 2 thèmes',
    priceId: 'price_1SfM9ZIUG5GUejFZYk1zz8f5', // ID production
    paymentLink: 'https://buy.stripe.com/6oU8wQaKhgSU6XQeeX8Zq04',
    productId: 'prod_TZEqyMCtaJySf4',
    price: 1.20,
    interval: 'one_time' as const,
    requiresSubscription: false,
    features: [
      'Principes et valeurs',
      'Histoire et géographie',
      'Révision par flashcards',
      'Achat unique'
    ]
  },
  flashcards5Themes: {
    name: 'Flashcards 5 thèmes',
    priceId: 'price_1SfM9zIUG5GUejFZ5j0QHiSc', // ID production
    paymentLink: 'https://buy.stripe.com/14A14obOl9qs4PI0o78Zq03',
    productId: 'prod_TZErV6VPZJuOqE',
    price: 1.50,
    interval: 'one_time' as const,
    requiresSubscription: false,
    features: [
      'Tous les 5 thèmes',
      'Institutions politiques',
      'Droits et devoirs',
      'Vivre en France',
      'Accès complet'
    ]
  },
  noTimer: {
    name: 'Mode sans chrono',
    priceId: 'price_1SfM96IUG5GUejFZgBW5798m', // ID production
    paymentLink: 'https://buy.stripe.com/dRm9AUdWt324cia3Aj8Zq06',
    productId: 'prod_TZLl2IH0BChI0e',
    price: 0.69,
    interval: 'one_time' as const,
    requiresSubscription: true,
    features: [
      'Répondez sans pression',
      'Pas de limite de temps',
      'Par quiz',
      'Achat unique'
    ]
  },
  unlockLevel: {
    name: 'Débloquer niveau suivant',
    priceId: 'price_1SfM7tIUG5GUejFZD0fHE3Ih', // ID production
    paymentLink: 'https://buy.stripe.com/cNibJ2cSp0TW1Dw7Qz8Zq05',
    productId: 'prod_TZLkq1450VAwyu',
    price: 0.99,
    interval: 'one_time' as const,
    requiresSubscription: true,
    features: [
      'Continuez votre progression',
      'Sans recommencer',
      'Valable si score 5-7/10',
      'Achat unique'
    ]
  }
};

export type PlanType = keyof typeof STRIPE_PLANS;
