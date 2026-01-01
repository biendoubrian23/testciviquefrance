'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Gratuit',
    nameColor: 'text-emerald-600',
    price: '0€',
    period: '',
    description: 'Pour découvrir la plateforme',
    features: [
      'Accès à tous les cours',
      'Questions gratuites',
      'Fiches de révision',
    ],
    limitations: [],
    cta: 'Commencer gratuitement',
    ctaLink: '/signup',
    highlighted: false,
    ctaStyle: 'border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white',
  },
  {
    name: 'Pack Standard',
    nameColor: 'text-white',
    price: '2,99€',
    period: '/mois',
    description: 'Accès pendant 1 mois',
    features: [
      'Tests thématiques',
      '1 session d\'examen blanc',
      'Cours détaillés',
      'Corrigés expliqués',
      'Suivi de progression',
    ],
    cta: '🎁 Essai gratuit 2 jours',
    ctaLink: '/signup',
    highlighted: true,
    badge: 'Recommandé',
  },
  {
    name: 'Premium',
    nameColor: 'text-primary-600',
    price: '6,99€',
    period: '/mois',
    description: 'Accès pendant 1 moiss',
    features: [
      'Tests illimités',
      "3 sessions d'examen blanc",
      'Statistiques avancées',
      'Révision intelligente',
      'Support prioritaire',
    ],
    cta: '🎁 Essayer 2 jours gratuits',
    ctaLink: '/signup',
    highlighted: false,
    ctaStyle: 'border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white',
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
                className={`relative animate-fade-in-up ${delayClass} transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col p-8 ${plan.highlighted
                  ? 'bg-primary-600 text-white'
                  : 'bg-white border-2 border-gray-200 hover:border-primary-300'
                  }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary-600 px-4 py-1.5 text-sm font-medium">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-lg font-medium mb-2 ${plan.highlighted ? 'text-primary-200' : plan.nameColor
                    }`}>
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className={plan.highlighted ? 'text-primary-200 ml-1' : 'text-gray-500 ml-1'}>{plan.period}</span>
                    )}
                  </div>
                  <p className={plan.highlighted ? 'text-primary-200' : 'text-gray-500'}>{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-white' : 'text-emerald-500'}`} />
                      <span className={plan.highlighted ? 'text-primary-100' : 'text-gray-700'}>{feature}</span>
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
                  className={`block w-full py-4 text-center font-medium transition-all duration-300 mt-auto ${plan.highlighted
                    ? 'bg-white text-primary-600 hover:bg-primary-50'
                    : plan.ctaStyle || 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                >
                  {plan.cta}
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
