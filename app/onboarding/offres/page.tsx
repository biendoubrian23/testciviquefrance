'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Check, 
  ChevronRight,
  ArrowRight
} from 'lucide-react';

const offers = [
  {
    id: 'pack_credits',
    name: 'Pack Crédits',
    price: 9.99,
    subtitle: '25 crédits • Sans expiration',
    popular: true,
    badge: 'Recommandé',
    features: [
      'Tests thématiques',
      'Examens blancs complets',
      'Corrigés détaillés',
      'Utilisez à votre rythme',
    ],
    isPrimary: true,
    buttonText: 'Acheter des crédits',
  },
  {
    id: 'premium_week',
    name: 'Premium',
    price: 13.99,
    priceUnit: '/semaine',
    subtitle: 'Accès illimité pendant 7 jours',
    popular: false,
    features: [
      'Tests illimités',
      'Examens blancs illimités',
      'Statistiques avancées',
      'Révision intelligente',
    ],
    isPrimary: false,
    buttonText: 'Démarrer Premium',
  },
  {
    id: 'pack_leger',
    name: 'Pack léger',
    subtitle: '10 crédits',
    price: 4.99,
    description: 'Pour une préparation progressive',
    popular: false,
    features: [],
    isPrimary: false,
    buttonText: 'Choisir',
    isCompact: true,
  },
];

export default function OnboardingOffersPage() {
  const router = useRouter();
  const { user } = useAuth();
  const supabase = createClient();
  const [selectedOffer, setSelectedOffer] = useState<string | null>('pack_credits');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSelectOffer = (offerId: string) => {
    setSelectedOffer(offerId);
  };

  // Fonction pour sélectionner une offre et aller au dashboard
  const handleSelectAndGo = async () => {
    if (user) {
      try {
        await supabase
          .from('profiles')
          .update({ has_completed_onboarding: true })
          .eq('id', user.id);
      } catch (error) {
        console.error('Erreur mise à jour profil:', error);
      }
    }
    router.push('/dashboard');
  };

  const handlePurchase = async () => {
    if (!selectedOffer) return;
    
    setIsProcessing(true);
    
    // Marquer l'onboarding comme complété
    if (user) {
      try {
        await supabase
          .from('profiles')
          .update({ has_completed_onboarding: true })
          .eq('id', user.id);
      } catch (error) {
        console.error('Erreur mise à jour profil:', error);
      }
    }
    
    // TODO: Intégrer Stripe ou autre système de paiement
    router.push('/dashboard');
  };

  const handleSkip = async () => {
    if (user) {
      try {
        await supabase
          .from('profiles')
          .update({ has_completed_onboarding: true })
          .eq('id', user.id);
      } catch (error) {
        console.error('Erreur mise à jour profil:', error);
      }
    }
    
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Préparez-vous efficacement
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Accédez à toutes nos ressources pour maximiser vos chances de réussir 
              l&apos;examen civique (80% de bonnes réponses requises).
            </p>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Message de motivation + CTA */}
        <div className="bg-primary-50 border border-primary-200 p-6 mb-8">
          <h3 className="font-bold text-primary-900 mb-2">
            Ne vous découragez pas !
          </h3>
          <p className="text-primary-800 mb-6">
            L&apos;examen civique nécessite 80% de bonnes réponses. Avec notre plateforme de préparation complète, 
            vous pourrez progresser rapidement dans tous les domaines.
          </p>
          <button
            onClick={handlePurchase}
            disabled={!selectedOffer || isProcessing}
            className={`inline-flex items-center gap-2 px-8 py-3 font-semibold transition-all duration-200 ${
              selectedOffer && !isProcessing
                ? 'bg-primary-600 text-white hover:bg-primary-700'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isProcessing ? (
              'Traitement en cours...'
            ) : (
              <>
                Continuer avec cette offre
                <ChevronRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>

        {/* 3 Offres côte à côte */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Pack Crédits - Recommandé (9.99€) */}
          <div 
            onClick={() => handleSelectOffer('pack_credits')}
            className={`relative cursor-pointer transition-all duration-200 ${
              selectedOffer === 'pack_credits' 
                ? 'ring-2 ring-primary-600' 
                : ''
            }`}
          >
            {/* Badge Recommandé */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
              <span className="px-4 py-1 bg-primary-600 text-white text-sm font-medium">
                Recommandé
              </span>
            </div>

            <div className="bg-primary-600 text-white p-6 h-full flex flex-col">
              <h3 className="text-lg font-bold mb-2">Pack Crédits</h3>
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-4xl font-bold">9,99€</span>
              </div>
              <p className="text-primary-100 mb-4 text-sm">25 crédits • Sans expiration</p>
              
              <ul className="space-y-2 mb-6 flex-grow text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span>Tests thématiques</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span>Examens blancs complets</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span>Corrigés détaillés</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span>Utilisez à votre rythme</span>
                </li>
              </ul>

              <button 
                onClick={(e) => { e.stopPropagation(); handleSelectAndGo(); }}
                className="w-full py-2.5 bg-white text-primary-600 font-semibold hover:bg-gray-50 transition-colors text-sm"
              >
                Sélectionner
              </button>
            </div>
          </div>

          {/* Premium (13.99€/semaine) */}
          <div 
            onClick={() => handleSelectOffer('premium_week')}
            className={`relative cursor-pointer transition-all duration-200 bg-white border ${
              selectedOffer === 'premium_week' 
                ? 'border-primary-600 ring-2 ring-primary-600' 
                : 'border-gray-200'
            } p-6 h-full flex flex-col`}
          >
            <h3 className="text-lg font-bold text-primary-600 mb-2">Premium</h3>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-bold text-gray-900">13,99€</span>
              <span className="text-gray-500 text-sm">/semaine</span>
            </div>
            <p className="text-gray-500 mb-4 text-sm">Accès illimité pendant 7 jours</p>
            
            <ul className="space-y-2 mb-6 flex-grow text-sm">
              <li className="flex items-center gap-2 text-gray-700">
                <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
                <span>Tests illimités</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
                <span>Examens blancs illimités</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
                <span>Statistiques avancées</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
                <span>Révision intelligente</span>
              </li>
            </ul>

            <button 
              onClick={(e) => { e.stopPropagation(); handleSelectAndGo(); }}
              className={`w-full py-2.5 font-semibold transition-colors border-2 text-sm ${
                selectedOffer === 'premium_week'
                  ? 'bg-primary-600 text-white border-primary-600'
                  : 'border-primary-600 text-primary-600 hover:bg-primary-50'
              }`}
            >
              Sélectionner
            </button>
          </div>

          {/* Pack Léger (4.99€) */}
          <div 
            onClick={() => handleSelectOffer('pack_leger')}
            className={`relative cursor-pointer transition-all duration-200 bg-white border ${
              selectedOffer === 'pack_leger' 
                ? 'border-primary-600 ring-2 ring-primary-600' 
                : 'border-gray-200'
            } p-6 h-full flex flex-col`}
          >
            <h3 className="text-lg font-bold text-primary-600 mb-2">Pack Léger</h3>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-bold text-gray-900">4,99€</span>
            </div>
            <p className="text-gray-500 mb-4 text-sm">10 crédits • Sans expiration</p>
            
            <ul className="space-y-2 mb-6 flex-grow text-sm">
              <li className="flex items-center gap-2 text-gray-700">
                <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
                <span>Tests thématiques</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
                <span>Examens blancs complets</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
                <span>Corrigés détaillés</span>
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
                <span>Préparation progressive</span>
              </li>
            </ul>

            <button 
              onClick={(e) => { e.stopPropagation(); handleSelectAndGo(); }}
              className={`w-full py-2.5 font-semibold transition-colors border-2 text-sm ${
                selectedOffer === 'pack_leger'
                  ? 'bg-primary-600 text-white border-primary-600'
                  : 'border-primary-600 text-primary-600 hover:bg-primary-50'
              }`}
            >
              Sélectionner
            </button>
          </div>
        </div>

        {/* Passer cette étape */}
        <div className="text-center">
          <button
            onClick={handleSkip}
            className="text-sm text-gray-400 hover:text-gray-500 underline transition-colors"
          >
            Passer pour l&apos;instant
          </button>
        </div>

        {/* Trust badges */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500" />
              Paiement sécurisé
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500" />
              Satisfait ou remboursé 7j
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500" />
              Support disponible 7j/7
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
