'use client';

import Link from 'next/link';
import { Check, TrendingUp, Award, Target } from 'lucide-react';

// Composant barre de progression animée
function ProgressBar({ percentage, color = 'primary' }: { percentage: number; color?: string }) {
  const colorClasses = {
    primary: 'bg-primary-500',
    success: 'bg-emerald-500',
    gold: 'bg-amber-500',
  };

  return (
    <div className="w-full h-2 bg-gray-100 overflow-hidden">
      <div
        className={`h-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.primary} transition-all duration-1000 ease-out`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

// Composant module de progression
function ModuleProgress({ 
  title, 
  percentage, 
  isComplete 
}: { 
  title: string; 
  percentage: number; 
  isComplete: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-5 h-5 flex items-center justify-center flex-shrink-0 ${
        isComplete ? 'bg-emerald-500' : 'bg-gray-200'
      }`}>
        {isComplete && <Check className="w-3 h-3 text-white" />}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-medium text-gray-700 truncate">{title}</span>
          <span className={`text-sm font-semibold ${
            percentage === 100 ? 'text-emerald-600' : 'text-primary-600'
          }`}>
            {percentage}%
          </span>
        </div>
        <ProgressBar 
          percentage={percentage} 
          color={percentage === 100 ? 'success' : 'primary'} 
        />
      </div>
    </div>
  );
}

// Points forts
const highlights = [
  {
    number: '01',
    title: 'Adapté à tous les profils',
    description: 'Débutant ou confirmé, progressez à votre rythme',
  },
  {
    number: '02',
    title: 'Rejoignez 1,600+ apprenants',
    description: 'Une communauté diverse qui réussit ensemble',
  },
  {
    number: '03',
    title: 'Accessible partout',
    description: 'Sur ordinateur, tablette ou téléphone, 24h/24',
  },
];

export default function ProgressSection() {
  // Données de progression simulées (scores élevés)
  const modules = [
    { title: 'Valeurs de la République', percentage: 100, isComplete: true },
    { title: 'Institutions françaises', percentage: 100, isComplete: true },
    { title: 'Droits et devoirs', percentage: 98, isComplete: false },
    { title: 'Histoire de France', percentage: 96, isComplete: false },
  ];

  const globalScore = 98;

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Colonne gauche - Carte flottante de progression */}
          <div className="relative order-2 lg:order-1 animate-fade-in-left delay-200">
            <div className="bg-white border border-gray-200 shadow-xl">
              {/* Header du dashboard */}
              <div className="px-6 py-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Votre progression</h3>
                  <div className="flex items-center gap-1 text-emerald-600">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">+12% cette semaine</span>
                  </div>
                </div>
              </div>

              {/* Score global */}
              <div className="px-6 py-6 bg-gradient-to-r from-primary-50 to-white">
                <div className="flex items-center gap-6">
                  {/* Cercle de progression */}
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#E5E7EB"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="#3B82F6"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${globalScore * 2.51} 251`}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-900">{globalScore}%</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-900 mb-1">
                      Score global
                    </div>
                    <div className="flex items-center gap-2 text-emerald-600">
                      <Award className="w-4 h-4" />
                      <span className="text-sm font-medium">Excellent niveau</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modules de progression */}
              <div className="px-6 py-5 space-y-4">
                {modules.map((module, index) => (
                  <ModuleProgress
                    key={index}
                    title={module.title}
                    percentage={module.percentage}
                    isComplete={module.isComplete}
                  />
                ))}
              </div>

              {/* Footer avec badge */}
              <div className="px-6 py-4 bg-emerald-50 border-t border-emerald-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-500 flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-emerald-800">
                        Pret pour votre titre de sejour
                      </div>
                      <div className="text-xs text-emerald-600">
                        Carte pluriannuelle ou renouvellement
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/signup"
                    className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition-colors">

                    Commencer
                  </Link>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary-100 -z-10"></div>
          </div>

          {/* Colonne droite - Texte et avantages */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 text-sm font-medium mb-6 animate-fade-in-up">
              <TrendingUp className="w-4 h-4" />
              Pour tous les niveaux
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in-up delay-100">
              Peu importe votre niveau ou votre origine
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in-up delay-200">
              Notre plateforme s'adapte à votre rythme d'apprentissage. 
              Suivez votre progression par module et identifiez 
              les domaines à améliorer pour réussir votre test civique.
            </p>

            {/* Points forts */}
            <div className="space-y-6 mb-10 animate-fade-in-up delay-300">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 border-2 border-primary-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 font-bold text-sm">{highlight.number}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="animate-fade-in-up delay-400">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg"
              >
                Créer mon compte gratuit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
