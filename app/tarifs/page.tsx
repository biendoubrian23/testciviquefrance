'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Check, ArrowRight, ChevronDown } from 'lucide-react';

// Composant FAQ déroulant
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-lg font-medium text-gray-900 pr-4">{question}</h3>
        <ChevronDown 
          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function TarifsPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        {/* Hero Section */}
        <section className="py-8 lg:py-12 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Choisissez votre formule
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-100">
              Des tarifs transparents adaptés à vos besoins de préparation
            </p>
          </div>
        </section>

        {/* 3 Offres principales */}
        <section className="py-8 lg:py-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Gratuit */}
              <div className="bg-white border border-gray-200 p-8 lg:p-10 animate-fade-in-up delay-100 transition-all duration-300 hover:shadow-lg hover:border-emerald-200 flex flex-col">
                <div className="mb-8">
                  <h2 className="text-lg font-medium text-emerald-600 mb-2">Gratuit</h2>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-gray-900">0€</span>
                  </div>
                  <p className="text-gray-500 mt-2">Pour découvrir la plateforme</p>
                </div>
                
                <div className="space-y-4 flex-grow">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Accès à tous les cours</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Questions gratuites</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Fiches de révision</span>
                  </div>
                </div>

                <Link
                  href="/signup"
                  className="mt-8 block w-full py-4 text-center border border-emerald-600 text-emerald-600 font-medium hover:bg-emerald-600 hover:text-white transition-all duration-300"
                >
                  Commencer gratuitement
                </Link>
              </div>

              {/* Pack Crédits - Populaire */}
              <div className="bg-primary-600 text-white p-8 lg:p-10 animate-fade-in-up delay-200 transition-all duration-300 hover:shadow-2xl hover:bg-primary-700 flex flex-col relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary-600 px-4 py-1.5 text-sm font-medium">
                  Recommandé
                </div>
                
                <div className="mb-8">
                  <h2 className="text-lg font-medium text-primary-200 mb-2">Pack Crédits</h2>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold">9,99€</span>
                  </div>
                  <p className="text-primary-200 mt-2">25 crédits • Sans expiration</p>
                </div>
                
                <div className="space-y-4 flex-grow">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-primary-100">Tests thématiques</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-primary-100">Examens blancs complets</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-primary-100">Corrigés détaillés</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-primary-100">Utilisez à votre rythme</span>
                  </div>
                </div>

                <Link
                  href="/signup"
                  className="mt-8 block w-full py-4 text-center bg-white text-primary-600 font-medium hover:bg-primary-50 transition-all duration-300"
                >
                  Acheter des crédits
                </Link>
              </div>

              {/* Premium */}
              <div className="bg-white border border-gray-200 p-8 lg:p-10 animate-fade-in-up delay-300 transition-all duration-300 hover:shadow-lg hover:border-primary-200 flex flex-col">
                <div className="mb-8">
                  <h2 className="text-lg font-medium text-primary-600 mb-2">Premium</h2>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-gray-900">13,99€</span>
                    <span className="text-gray-500">/semaine</span>
                  </div>
                  <p className="text-gray-500 mt-2">Accès illimité pendant 7 jours</p>
                </div>
                
                <div className="space-y-4 flex-grow">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Tests illimités</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Examens blancs illimités</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Statistiques avancées</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Révision intelligente</span>
                  </div>
                </div>

                <Link
                  href="/signup"
                  className="mt-8 block w-full py-4 text-center border border-primary-600 text-primary-600 font-medium hover:bg-primary-600 hover:text-white transition-all duration-300"
                >
                  Démarrer Premium
                </Link>
              </div>

            </div>
          </div>
        </section>

        {/* Autres offres */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Autres options</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Des formules flexibles pour s'adapter à votre préparation
              </p>
            </div>

            {/* Grille des autres offres */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* 2 Examens blancs */}
              <div className="group bg-white p-6 border border-gray-200 hover:border-gray-900 transition-all duration-300">
                <div className="text-sm text-gray-500 mb-3">Offre découverte</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">2 Examens blancs</h3>
                <div className="text-3xl font-bold text-gray-900 mb-4">2,50€</div>
                <p className="text-sm text-gray-600 mb-6">Testez-vous dans les conditions réelles de l'examen</p>
                <Link href="/signup" className="text-sm font-medium text-gray-900 flex items-center gap-2 group-hover:gap-3 transition-all">
                  Choisir <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* 10 crédits */}
              <div className="group bg-white p-6 border border-gray-200 hover:border-gray-900 transition-all duration-300">
                <div className="text-sm text-gray-500 mb-3">Pack léger</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">10 crédits</h3>
                <div className="text-3xl font-bold text-gray-900 mb-4">4,99€</div>
                <p className="text-sm text-gray-600 mb-6">Pour une préparation progressive</p>
                <Link href="/signup" className="text-sm font-medium text-gray-900 flex items-center gap-2 group-hover:gap-3 transition-all">
                  Choisir <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* 50 crédits */}
              <div className="group bg-white p-6 border border-gray-200 hover:border-gray-900 transition-all duration-300">
                <div className="text-sm text-gray-500 mb-3">Pack standard</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">50 crédits</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-gray-900">17,99€</span>
                  <span className="text-sm text-gray-500 line-through">25€</span>
                </div>
                <p className="text-sm text-gray-600 mb-6">Économisez 28% sur ce pack</p>
                <Link href="/signup" className="text-sm font-medium text-gray-900 flex items-center gap-2 group-hover:gap-3 transition-all">
                  Choisir <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* 100 crédits */}
              <div className="group bg-white p-6 border border-gray-200 hover:border-gray-900 transition-all duration-300">
                <div className="text-sm text-gray-500 mb-3">Pack complet</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">100 crédits</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-gray-900">29,99€</span>
                  <span className="text-sm text-gray-500 line-through">50€</span>
                </div>
                <p className="text-sm text-gray-600 mb-6">Meilleur rapport qualité-prix</p>
                <Link href="/signup" className="text-sm font-medium text-gray-900 flex items-center gap-2 group-hover:gap-3 transition-all">
                  Choisir <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

            {/* Offres Premium temporaires */}
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              
              {/* 48h */}
              <div className="group bg-white p-8 border border-gray-200 hover:border-gray-900 transition-all duration-300 flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500 mb-2">Accès illimité</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-1">48 heures</h3>
                  <p className="text-gray-600">Idéal pour une révision intensive de dernière minute</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900">7,99€</div>
                  <Link href="/signup" className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-gray-900 group-hover:gap-3 transition-all">
                    Choisir <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* 3 semaines */}
              <div className="group bg-gray-900 text-white p-8 transition-all duration-300 hover:shadow-xl flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-400 mb-2">Accès illimité</div>
                  <h3 className="text-2xl font-semibold mb-1">3 semaines</h3>
                  <p className="text-gray-400">La préparation complète avant votre examen</p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold">24,99€</div>
                  <Link href="/signup" className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-white group-hover:gap-3 transition-all">
                    Choisir <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Questions fréquentes</h2>
            
            <div className="space-y-0 border-t border-gray-200">
              <FAQItem 
                question="Comment fonctionnent les crédits ?"
                answer="Les crédits vous permettent de débloquer des tests et examens blancs à votre rythme. Une fois achetés, ils n'expirent jamais et restent disponibles sur votre compte."
              />
              <FAQItem 
                question="Quelle est la différence entre crédits et Premium ?"
                answer="Avec les crédits, vous payez uniquement ce que vous utilisez. L'offre Premium vous donne un accès illimité pendant une durée définie, idéal si vous préparez intensivement votre examen."
              />
              <FAQItem 
                question="Les crédits expirent-ils ?"
                answer="Non, vos crédits n'expirent jamais. Vous pouvez les utiliser quand vous le souhaitez, même si vous souscrivez à une offre Premium entre-temps."
              />
              <FAQItem 
                question="Comment puis-je payer ?"
                answer="Nous acceptons les cartes bancaires (Visa, Mastercard) et PayPal. Le paiement est sécurisé et vos données sont protégées."
              />
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Prêt à commencer ?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Créez votre compte et accédez gratuitement à tous les cours
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-all duration-300"
            >
              Créer mon compte
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
