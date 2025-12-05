'use client';

import { BookOpen, ClipboardCheck, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Cours complets',
    description:
      '8 modules couvrant tous les domaines du test civique, avec des explications claires et des exemples concrets.',
  },
  {
    icon: ClipboardCheck,
    title: 'Examens blancs',
    description:
      "Entraînez-vous dans les conditions réelles avec nos examens blancs de 40 questions basés sur les questions officielles.",
  },
  {
    icon: TrendingUp,
    title: 'Révision intelligente',
    description:
      'Notre algorithme identifie vos lacunes et vous propose des révisions ciblées pour progresser rapidement.',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Tout pour réussir votre test
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Une plateforme complète pour décrocher votre titre de séjour pluriannuel
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const delayClass = index === 0 ? 'delay-200' : index === 1 ? 'delay-300' : 'delay-400';
            return (
              <div key={index} className={`bg-gray-50 p-8 border border-gray-200 animate-fade-in-up ${delayClass} transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary-300 hover:bg-white`}>
                <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
