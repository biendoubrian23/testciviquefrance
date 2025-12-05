'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Gratuit',
    price: '0€',
    period: '',
    description: 'Pour découvrir la plateforme',
    features: [
      'Tous les cours gratuits',
      'Questions gratuites',
      'Accès aux résumés',
    ],
    limitations: [
      'Pas de mini-test',
      'Pas de test thématique',
      'Pas d\'examen blanc',
    ],
    cta: 'Commencer',
    ctaLink: '/signup',
    highlighted: false,
  },
  {
    name: 'Pack Crédits',
    price: '9,99€',
    period: '25 crédits',
    description: 'Le plus populaire',
    features: [
      'Tests thématiques illimités',
      '3 examens blancs',
      'Révision intelligente',
      'Corrigés détaillés',
      'Statistiques de progression',
    ],
    cta: 'Acheter',
    ctaLink: '/signup',
    highlighted: true,
    badge: 'POPULAIRE',
  },
  {
    name: 'Premium',
    price: '13,99€',
    period: '/ semaine',
    description: 'Accès illimité',
    features: [
      'Tests illimités',
      'Examens blancs illimités',
      'Corrigés détaillés',
      'Statistiques avancées',
      'Support prioritaire',
    ],
    cta: 'Choisir Premium',
    ctaLink: '/signup',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Choisissez votre formule
          </h2>
          <p className="text-lg text-gray-600 animate-fade-in-up delay-100">
            Commencez gratuitement, payez seulement ce dont vous avez besoin
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const delayClass = index === 0 ? 'delay-200' : index === 1 ? 'delay-300' : 'delay-400';
            return (
            <div
              key={index}
              className={`bg-white p-8 relative animate-fade-in-up ${delayClass} transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col ${
                plan.highlighted
                  ? 'border-2 border-primary-500 shadow-lg'
                  : 'border-2 border-gray-200 hover:border-primary-300'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-500 text-white px-4 py-1 text-sm font-medium">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
                {plan.limitations?.map((limitation, limitationIndex) => (
                  <li
                    key={`limit-${limitationIndex}`}
                    className="flex items-start gap-3 text-gray-400"
                  >
                    <span className="w-5 h-5 flex-shrink-0 text-center">×</span>
                    <span>{limitation}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaLink}
                className={`block w-full py-3 text-center font-medium transition-colors mt-auto ${
                  plan.highlighted
                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                    : 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          );})}
        </div>

        {/* Autres packs de crédits */}
        <div className="mt-12 text-center animate-fade-in-up delay-500">
          <p className="text-gray-600 mb-6">Autres packs de crédits disponibles</p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-white border border-gray-200">
              <span className="font-semibold text-gray-900">10 crédits</span>
              <span className="text-gray-600 ml-2">→ 4,99€</span>
            </div>
            <div className="px-6 py-3 bg-white border border-gray-200">
              <span className="font-semibold text-gray-900">50 crédits</span>
              <span className="text-gray-600 ml-2">→ 17,99€</span>
            </div>
            <div className="px-6 py-3 bg-white border border-gray-200">
              <span className="font-semibold text-gray-900">100 crédits</span>
              <span className="text-gray-600 ml-2">→ 29,99€</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
