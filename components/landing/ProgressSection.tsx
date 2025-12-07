'use client';

import Link from 'next/link';
import Image from 'next/image';
import { TrendingUp } from 'lucide-react';

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
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Colonne gauche - Image de progression */}
          <div className="relative order-2 lg:order-1 animate-fade-in-left delay-200 overflow-visible">
            <Image
              src="/images/section2.png"
              alt="Tableau de bord de progression - Score global 98% avec suivi des modules"
              width={1000}
              height={900}
              className="w-full h-auto scale-[1.40] lg:scale-[1.75] mt-14 lg:mt-0"
              priority
            />
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
