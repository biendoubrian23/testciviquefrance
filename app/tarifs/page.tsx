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

              {/* Pack Standard - Recommandé */}
              <div className="bg-primary-600 text-white p-8 lg:p-10 animate-fade-in-up delay-200 transition-all duration-300 hover:shadow-2xl hover:bg-primary-700 flex flex-col relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-primary-600 px-4 py-1.5 text-sm font-medium">
                  Recommandé
                </div>
                
                <div className="mb-8">
                  <h2 className="text-lg font-medium text-primary-200 mb-2">Pack Standard</h2>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold">3,99€</span>
                    <span className="text-primary-200">/semaine</span>
                  </div>
                  <p className="text-primary-200 mt-2">Accès pendant 7 jours</p>
                </div>
                
                <div className="space-y-4 flex-grow">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-primary-100">Tests thématiques</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-primary-100">1 examen blanc</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-primary-100">Cours détaillés</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-primary-100">Corrigés expliqués</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                    <span className="text-primary-100">Suivi de progression</span>
                  </div>
                </div>

                <Link
                  href="/signup"
                  className="mt-8 block w-full py-4 text-center bg-white text-primary-600 font-medium hover:bg-primary-50 transition-all duration-300"
                >
                  Sélectionner
                </Link>
              </div>

              {/* Premium */}
              <div className="bg-white border border-gray-200 p-8 lg:p-10 animate-fade-in-up delay-300 transition-all duration-300 hover:shadow-lg hover:border-primary-200 flex flex-col">
                <div className="mb-8">
                  <h2 className="text-lg font-medium text-primary-600 mb-2">Premium</h2>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-gray-900">7,99€</span>
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
                    <span className="text-gray-700">3 examens blancs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Statistiques avancées</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Révision intelligente</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Support prioritaire</span>
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

        {/* Offre découverte - 2 Examens blancs */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Envie de tester avant de vous engager ?</h2>
              <p className="text-gray-600 max-w-xl mx-auto">
                Essayez notre plateforme avec 2 examens blancs complets dans les conditions réelles de l&apos;examen civique.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="group bg-white p-8 border-2 border-primary-200 hover:border-primary-600 transition-all duration-300 hover:shadow-lg text-center">
                <div className="text-sm text-primary-600 font-medium mb-3">Offre découverte</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">2 Examens blancs</h3>
                <div className="text-5xl font-bold text-gray-900 mb-4">2,50€</div>
                <p className="text-gray-600 mb-6">Testez-vous dans les conditions réelles</p>
                <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-medium hover:bg-primary-700 transition-all group-hover:gap-3">
                  Essayer maintenant <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Questions fréquentes</h2>
            
            <div className="space-y-0 border-t border-gray-200">
              <FAQItem 
                question="Comment fonctionne l'abonnement à la semaine ?"
                answer="L'abonnement vous donne un accès complet pendant 7 jours à partir de la date d'achat. Vous pouvez utiliser toutes les fonctionnalités incluses dans votre formule sans limitation pendant cette période."
              />
              <FAQItem 
                question="Quelle est la différence entre Pack Standard et Premium ?"
                answer="Le Pack Standard (3,99€) inclut les tests thématiques, 1 examen blanc et les cours. Le Premium (7,99€) offre des tests illimités, 3 examens blancs, des statistiques avancées et un support prioritaire."
              />
              <FAQItem 
                question="Les questions sont-elles conformes à l'examen officiel ?"
                answer="Oui, toutes nos questions sont basées sur le référentiel officiel de l'examen civique français. Elles couvrent les valeurs de la République, l'histoire de France, la géographie et les institutions."
              />
              <FAQItem 
                question="Puis-je réviser sur mobile ?"
                answer="Absolument ! Notre plateforme est entièrement responsive et fonctionne parfaitement sur smartphone, tablette et ordinateur. Révisez où vous voulez, quand vous voulez."
              />
              <FAQItem 
                question="Que se passe-t-il si je n'ai pas réussi en une semaine ?"
                answer="Pas de panique ! Vous pouvez renouveler votre abonnement à tout moment. De plus, les cours et fiches de révision restent accessibles gratuitement même après expiration de votre formule."
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
