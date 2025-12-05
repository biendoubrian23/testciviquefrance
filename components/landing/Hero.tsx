'use client';

import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

// Images du carrousel avec messages marketing (format WebP optimisé)
const carouselSlides = [
  {
    image: '/carousselle1.webp',
    title: 'Préparation efficace',
    subtitle: 'Des milliers de questions officielles',
  },
  {
    image: '/carousselle2.webp',
    title: 'Prêt pour le jour J',
    subtitle: '95% de taux de réussite',
  },
  {
    image: '/carousselle3.webp',
    title: 'Apprenez à votre rythme',
    subtitle: 'Accessible 24h/24 sur tous vos appareils',
  },
  {
    image: '/carousselle4.webp',
    title: 'Examens blancs réalistes',
    subtitle: 'Conditions identiques au vrai test',
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Défilement automatique
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Colonne gauche - Texte */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in-up">
              Réussissez votre test civique français
            </h1>
            
            {/* Carrousel visible uniquement sur mobile - entre titre et description */}
            <div className="lg:hidden mb-8 animate-fade-in-up delay-100">
              <div className="relative overflow-hidden bg-gray-900 aspect-[4/3]">
                {carouselSlides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-12 left-4 right-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{slide.title}</h3>
                      <p className="text-white/80 text-sm">{slide.subtitle}</p>
                    </div>
                  </div>
                ))}
                <button
                  onClick={goToPrevious}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
                  aria-label="Image précédente"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300"
                  aria-label="Image suivante"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  {carouselSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all duration-300 ${
                        index === currentSlide
                          ? 'w-6 h-1.5 bg-white'
                          : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/70'
                      }`}
                      aria-label={`Aller à l'image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up delay-200 lg:delay-100">
              Préparez-vous efficacement pour obtenir votre titre de séjour 
              pluriannuel ou son renouvellement. Des centaines de questions 
              officielles, des cours complets et des examens blancs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up delay-300 lg:delay-200">
              <Link
                href="/signup"
                className="px-8 py-4 bg-primary-600 text-white font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg inline-flex items-center justify-center gap-2"
              >
                Commencer gratuitement
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/cours"
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
              >
                Voir les cours
              </Link>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start text-sm text-gray-600 animate-fade-in-up delay-400 lg:delay-300">
              <div>
                <div className="text-2xl font-bold text-gray-900">1,600+</div>
                <div>Utilisateurs</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div>Taux de réussite</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div>
                <div className="text-2xl font-bold text-gray-900">800+</div>
                <div>Questions</div>
              </div>
            </div>
          </div>

          {/* Colonne droite - Carrousel d'images (visible uniquement sur desktop) */}
          <div className="relative animate-fade-in-right delay-200 hidden lg:block">
            <div className="relative overflow-hidden bg-gray-900 aspect-[5/5]">
              {/* Images */}
              {carouselSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Texte marketing */}
                  <div className="absolute bottom-16 left-6 right-6 text-white">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">{slide.title}</h3>
                    <p className="text-white/80 text-lg">{slide.subtitle}</p>
                  </div>
                </div>
              ))}

              {/* Boutons de navigation - Liquid Glass Effect */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300 shadow-lg"
                aria-label="Image précédente"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all duration-300 shadow-lg"
                aria-label="Image suivante"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Indicateurs de position */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {carouselSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 ${
                      index === currentSlide
                        ? 'w-8 h-2 bg-white'
                        : 'w-2 h-2 bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Aller à l'image ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary-300 -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-emerald-200 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
