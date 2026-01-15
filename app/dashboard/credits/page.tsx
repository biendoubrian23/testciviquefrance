'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { createClient } from '@/lib/supabase/client';
import { Check, Crown, ChevronDown, Loader2, CheckCircle, Gift } from 'lucide-react';
import { STRIPE_PLANS } from '@/lib/stripe/plans';
import ManageSubscriptionButton from '@/components/dashboard/ManageSubscriptionButton';
import ErrorModal from '@/components/ui/ErrorModal';
import CountdownTimer, { usePromoActive } from '@/components/ui/CountdownTimer';

// Composant FAQ déroulant
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <h4 className="font-semibold text-gray-900 pr-4">{question}</h4>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
            }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-4 px-4' : 'max-h-0'
          }`}
      >
        <p className="text-sm text-gray-600">{answer}</p>
      </div>
    </div>
  );
}

// Type pour le profil étendu avec les nouveaux champs
interface ExtendedProfile {
  id: string;
  email: string;
  prenom?: string;
  nom?: string;
  credits: number;
  is_premium: boolean;
  premium_expires_at?: string;
  all_levels_unlocked?: boolean; // Déblocage universel de tous les niveaux
  no_timer_enabled?: boolean;
  flashcards_2_themes?: boolean;
  flashcards_5_themes?: boolean;
  // Champs Stripe
  stripe_customer_id?: string | null;
  stripe_subscription_id?: string | null;
  stripe_price_id?: string | null;
  subscription_status?: string | null;
  subscription_start_date?: string | null;
  subscription_end_date?: string | null;
  // Pack Examen
  exam_credits?: number | null;
  last_purchase_at?: string | null;
}

export default function OffresPage() {
  const { profile, refreshProfile } = useAuth();
  const [selectedOffer, setSelectedOffer] = useState<string | null>('pack_standard');
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [showMicroservices, setShowMicroservices] = useState(false);
  const [errorModal, setErrorModal] = useState<{ isOpen: boolean; message: string }>({
    isOpen: false,
    message: ''
  });
  const isPromoActive = usePromoActive();

  // Cast du profil pour accéder aux nouveaux champs
  const extendedProfile = profile as ExtendedProfile | null;

  const handleSelectOffer = (offerId: string) => {
    setSelectedOffer(offerId);
  };

  // Fonction pour rediriger vers Stripe pour les achats ponctuels (avec ou sans vérification abonnement)
  const redirectToStripeCheckout = async (planKey: 'examen' | 'flashcards2Themes' | 'flashcards5Themes' | 'noTimer' | 'unlockLevel') => {
    setIsLoading(planKey);
    try {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();

      if (!user || !user.email) {
        setErrorModal({
          isOpen: true,
          message: 'Vous devez être connecté pour effectuer un achat.'
        });
        return;
      }

      // Vérifier si ce produit nécessite un abonnement
      const plan = STRIPE_PLANS[planKey];
      if (plan.requiresSubscription && extendedProfile?.subscription_status !== 'active' && extendedProfile?.subscription_status !== 'trialing') {
        setErrorModal({
          isOpen: true,
          message: 'Cet achat nécessite un abonnement actif (Standard ou Premium). Veuillez d\'abord souscrire à un abonnement.'
        });
        return;
      }

      // ✅ Vérifier la connexion Stripe avant de rediriger
      const response = await fetch('/api/verify-stripe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planKey,
          userEmail: user.email
        })
      });

      const data = await response.json();

      if (!data.success) {
        setErrorModal({
          isOpen: true,
          message: data.error || 'Une erreur est survenue lors de la vérification du service de paiement.'
        });
        return;
      }

      // ✅ Tout est OK, rediriger vers Stripe
      window.location.href = data.checkoutUrl;
    } catch (err) {
      console.error('Erreur redirection Stripe:', err);
      setErrorModal({
        isOpen: true,
        message: 'Une erreur inattendue est survenue. Veuillez réessayer dans quelques instants.'
      });
    } finally {
      setIsLoading(null);
    }
  };



  // Fonction pour les abonnements Stripe (Standard, Premium, Examen)
  const handleStripePurchase = async (planType: 'standard' | 'premium' | 'examen') => {
    setIsLoading(planType);
    try {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();

      if (!user || !user.email) {
        setErrorModal({
          isOpen: true,
          message: 'Vous devez être connecté pour effectuer un achat.'
        });
        return;
      }

      // ✅ Vérifier la connexion Stripe avant de rediriger
      const response = await fetch('/api/verify-stripe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planKey: planType,
          userEmail: user.email
        })
      });

      const data = await response.json();

      if (!data.success) {
        setErrorModal({
          isOpen: true,
          message: data.error || 'Une erreur est survenue lors de la vérification du service de paiement.'
        });
        return;
      }

      // ✅ Tout est OK, rediriger vers Stripe
      window.location.href = data.checkoutUrl;
    } catch (err) {
      console.error('Erreur redirection Stripe:', err);
      setErrorModal({
        isOpen: true,
        message: 'Une erreur inattendue est survenue. Veuillez réessayer dans quelques instants.'
      });
    } finally {
      setIsLoading(null);
    }
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Message de succès */}
      {successMessage && (
        <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-pulse">
          <CheckCircle className="w-5 h-5" />
          {successMessage}
        </div>
      )}

      {/* Bandeau Promo Nouvel An */}
      {isPromoActive && (
        <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 text-white p-4 rounded-lg shadow-lg">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
            <div className="flex items-center gap-2">
              <Gift className="w-6 h-6 animate-bounce" />
              <span className="text-lg font-bold">🎉 OFFRE NOUVEL AN -30%</span>
            </div>
            <div className="bg-white/20 px-3 py-1 rounded-full">
              <CountdownTimer compact className="text-white" />
            </div>
          </div>
        </div>
      )}

      {/* En-tête */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Nos Offres</h1>
        <p className="text-gray-600 text-lg">
          {isPromoActive ? 'Profitez de -30% pour le Nouvel An !' : 'Choisissez la formule adaptée à votre préparation'}
        </p>
      </div>

      {/* Statut actuel + Achats */}
      <div className="bg-gray-50 border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-gray-500 mb-1">Votre statut</p>
            <p className="text-xl font-bold text-gray-900">
              {extendedProfile?.is_premium ? 'Premium' : 'Gratuit'}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm text-gray-500">Niveaux restants</p>
              <p className="text-2xl font-bold text-primary-600">
                {extendedProfile?.is_premium ? '∞' : '0'}/jour
              </p>
            </div>
          </div>
        </div>

        {/* Afficher les achats actifs */}
        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium text-gray-700">Vos achats actifs :</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {/* Afficher l'abonnement Stripe actif */}
            {(extendedProfile?.subscription_status === 'active' || extendedProfile?.subscription_status === 'trialing') && extendedProfile?.stripe_price_id && (
              <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full font-semibold">
                {extendedProfile.stripe_price_id === STRIPE_PLANS.standard.priceId && '👑 Pack Standard (2,99€)'}
                {extendedProfile.stripe_price_id === STRIPE_PLANS.premium.priceId && '⭐ Pack Premium (6,99€)'}
              </span>
            )}
            {/* Afficher les crédits de sessions d'examens blancs disponibles */}
            {extendedProfile?.exam_credits && extendedProfile.exam_credits > 0 && (
              <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-semibold">
                📝 {extendedProfile.exam_credits} session{extendedProfile.exam_credits > 1 ? 's' : ''} d&apos;examen blanc{extendedProfile.exam_credits > 1 ? 's' : ''} disponible{extendedProfile.exam_credits > 1 ? 's' : ''}
              </span>
            )}
            {extendedProfile?.all_levels_unlocked && (
              <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                🔓 Déblocage niveaux activé
              </span>
            )}
            {extendedProfile?.no_timer_enabled && (
              <span className="inline-flex items-center px-3 py-1 bg-amber-100 text-amber-800 text-sm rounded-full">
                ⏱️ Mode sans chrono
              </span>
            )}
            {extendedProfile?.flashcards_5_themes && (
              <span className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full">
                📚 Flashcards 5 thèmes
              </span>
            )}
            {extendedProfile?.flashcards_2_themes && !extendedProfile?.flashcards_5_themes && (
              <span className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-800 text-sm rounded-full">
                📚 Flashcards 2 thèmes
              </span>
            )}
            {!extendedProfile?.is_premium &&
              !extendedProfile?.all_levels_unlocked &&
              !extendedProfile?.no_timer_enabled &&
              !extendedProfile?.flashcards_2_themes && (
                <span className="text-gray-400 text-sm">Aucun achat pour le moment</span>
              )}
          </div>
        </div>
      </div>

      {/* 3 Offres */}
      <div className="grid md:grid-cols-3 gap-6 px-4 sm:px-0 max-w-[85%] sm:max-w-none mx-auto mt-8">

        {/* Pack Standard - 2,99€/semaine - Recommandé */}
        <div
          onClick={() => handleSelectOffer('pack_standard')}
          className={`relative cursor-pointer transition-all duration-200 mt-4 ${selectedOffer === 'pack_standard'
            ? 'ring-2 ring-primary-600 rounded-lg'
            : ''
            }`}
        >
          {/* Badge Recommandé - dépasse au-dessus de la carte */}
          <div className="absolute -top-3 inset-x-0 flex justify-center z-10">
            <span className="px-5 py-1.5 bg-amber-400 text-amber-900 text-sm font-bold shadow-lg rounded-full">
              Recommandé
            </span>
          </div>

          <div className="bg-primary-600 text-white p-6 pt-8 h-full flex flex-col relative rounded-lg">
            {/* Badge -30% */}
            {isPromoActive && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse z-20">
                -30%
              </div>
            )}

            <div className="flex items-center gap-2 mb-2">
              <Crown className="w-5 h-5" />
              <h3 className="text-lg font-bold">Pack Standard</h3>
            </div>
            {isPromoActive && (
              <div className="text-lg text-red-300 line-through">4,49€</div>
            )}
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-bold">2,99€</span>
            </div>
            <p className="text-primary-100 mb-4 text-sm">Sans engagement mensuel</p>

            <ul className="space-y-2 mb-6 flex-grow text-sm">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 flex-shrink-0" />
                <span>Tests thématiques</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 flex-shrink-0" />
                <span>1 session d&apos;examen blanc</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 flex-shrink-0" />
                <span>Cours détaillés</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 flex-shrink-0" />
                <span>Corrigés expliqués</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 flex-shrink-0" />
                <span>Suivi de progression</span>
              </li>
            </ul>

            {extendedProfile?.stripe_price_id === STRIPE_PLANS.standard.priceId && (extendedProfile?.subscription_status === 'active' || extendedProfile?.subscription_status === 'trialing') ? (
              <div className="w-full py-3 bg-white text-primary-600 font-semibold text-center border-2 border-primary-600">
                ✓ Plan actuel
              </div>
            ) : (
              <button
                onClick={(e) => { e.stopPropagation(); handleStripePurchase('standard'); }}
                className="w-full py-3 bg-white text-primary-600 font-semibold hover:bg-gray-50 transition-colors"
              >
                🎁 Essai gratuit à 0€
              </button>
            )}
          </div>
        </div>

        {/* Pack Premium - 6,99€/semaine */}
        <div
          onClick={() => setSelectedOffer('pack_premium')}
          className={`relative cursor-pointer transition-all duration-200 bg-white border-2 rounded-lg ${selectedOffer === 'pack_premium'
            ? 'border-primary-600 ring-2 ring-primary-600'
            : 'border-gray-200'
            } p-6 h-full flex flex-col`}
        >
          {/* Badge -30% */}
          {isPromoActive && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse z-20">
              -30%
            </div>
          )}

          <h3 className="text-lg font-bold text-primary-600 mb-2">Premium</h3>
          {isPromoActive && (
            <div className="text-lg text-red-500 line-through">9,99€</div>
          )}
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-4xl font-bold text-gray-900">6,99€</span>
          </div>
          <p className="text-gray-500 mb-4 text-sm">Sans engagement mensuel</p>

          <ul className="space-y-2 mb-6 flex-grow text-sm">
            <li className="flex items-center gap-2 text-gray-700">
              <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
              <span>Tests illimités</span>
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
              <span>3 sessions d&apos;examen blanc</span>
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
              <span>Statistiques avancées</span>
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
              <span>Révision intelligente</span>
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
              <span>Support prioritaire</span>
            </li>
          </ul>

          {extendedProfile?.stripe_price_id === STRIPE_PLANS.premium.priceId && (extendedProfile?.subscription_status === 'active' || extendedProfile?.subscription_status === 'trialing') ? (
            <div className="w-full py-3 font-semibold text-center border-2 bg-primary-600 text-white border-primary-600">
              ✓ Plan actuel
            </div>
          ) : (
            <button
              onClick={(e) => { e.stopPropagation(); handleStripePurchase('premium'); }}
              className={`w-full py-3 font-semibold transition-colors border-2 ${selectedOffer === 'pack_premium'
                ? 'bg-primary-600 text-white border-primary-600'
                : 'border-primary-600 text-primary-600 hover:bg-primary-50'
                }`}
            >
              🎁 Essai gratuit à 0€
            </button>
          )}
        </div>

        {/* Pack Examen - 2,50€ à l'unité */}
        <div
          onClick={() => setSelectedOffer('pack_examen')}
          className={`relative cursor-pointer transition-all duration-200 bg-white border-2 rounded-lg ${selectedOffer === 'pack_examen'
            ? 'border-primary-600 ring-2 ring-primary-600'
            : 'border-gray-200'
            } p-6 h-full flex flex-col`}
        >
          {/* Badge -30% */}
          {isPromoActive && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg animate-pulse z-20">
              -30%
            </div>
          )}

          <h3 className="text-lg font-bold text-primary-600 mb-2">Pack Examen</h3>
          {isPromoActive && (
            <div className="text-lg text-red-500 line-through">3,59€</div>
          )}
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-4xl font-bold text-gray-900">2,50€</span>
          </div>
          <p className="text-gray-500 mb-4 text-sm">À l&apos;unité • Sans expiration</p>

          <ul className="space-y-2 mb-6 flex-grow text-sm">
            <li className="flex items-center gap-2 text-gray-700">
              <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
              <span>2 sessions d&apos;examen blanc</span>
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
              <span>Conditions réelles d&apos;examen</span>
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
              <span>Corrigés détaillés</span>
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
              <span>Score et analyse</span>
            </li>
          </ul>

          <button
            onClick={(e) => { e.stopPropagation(); handleStripePurchase('examen'); }}
            className={`w-full py-3 font-semibold transition-colors border-2 ${selectedOffer === 'pack_examen'
              ? 'bg-primary-600 text-white border-primary-600'
              : 'border-primary-600 text-primary-600 hover:bg-primary-50'
              }`}
          >
            Sélectionner
          </button>
        </div>
      </div>

      {/* Micro-transactions - Accordéon déroulant */}
      <div className="bg-white border border-gray-200 rounded-lg mx-3 sm:mx-0">
        {/* En-tête cliquable */}
        <button
          onClick={() => setShowMicroservices(!showMicroservices)}
          className="w-full py-5 px-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
        >
          <div>
            <h3 className="text-lg font-bold text-gray-900">Services annexes</h3>
            <p className="text-sm text-gray-500 mt-1">
              Options supplémentaires pour personnaliser votre expérience
            </p>
          </div>
          <ChevronDown
            className={`w-6 h-6 text-gray-500 flex-shrink-0 transition-transform duration-300 ${showMicroservices ? 'rotate-180' : ''
              }`}
          />
        </button>

        {/* Contenu déroulant */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${showMicroservices ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="px-6 pb-6 pt-2">
            {/* 
              ==================== RÈGLES BUSINESS IMPORTANTES ====================
              Ces 4 packs sont LIÉS À UN ABONNEMENT ACTIF :
              - L'utilisateur DOIT avoir un abonnement (Standard ou Premium) pour acheter ces packs
              - Si l'abonnement expire, tous les packs achetés seront DÉSACTIVÉS
              - Les packs ne sont PAS accessibles aux utilisateurs gratuits
              - À l'expiration de l'abonnement : désactiver l'accès aux fonctionnalités des packs
              
              TODO Stripe : 
              - Vérifier is_premium avant d'autoriser l'achat
              - Stocker la date d'achat du pack
              - Désactiver le pack si subscription_end_date < now()
              ======================================================================
            */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 
                PACK 1: Débloquer niveau suivant
                - Lié à l'abonnement : OUI
                - Désactivé si abonnement expiré : OUI
                - Stripe product_id : À configurer
              */}
              {/* Débloquer niveau suivant */}
              <div className="bg-gray-50 border border-gray-200 p-5 rounded-lg hover:border-primary-300 transition-colors">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Débloquer le niveau suivant</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Continuez votre progression sans avoir à recommencer.
                    </p>
                    <p className="text-xs text-gray-400 mt-2">Valable si score entre 2/10 et 7/10</p>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                    <div className="text-2xl font-bold text-gray-900">0,99€</div>
                    {extendedProfile?.all_levels_unlocked ? (
                      <button
                        disabled
                        className="bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium border-2 border-blue-600 cursor-not-allowed flex items-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4" /> Activé
                      </button>
                    ) : (
                      <button
                        onClick={() => redirectToStripeCheckout('unlockLevel')}
                        className="bg-primary-600 text-white px-4 py-2 text-sm font-medium hover:bg-primary-700 transition-colors flex items-center gap-2"
                      >
                        Acheter
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* 
                PACK 2: Mode sans chrono
                - Lié à l'abonnement : OUI
                - Désactivé si abonnement expiré : OUI
                - Stripe product_id : À configurer
              */}
              {/* Mode sans chrono */}
              <div className="bg-gray-50 border border-gray-200 p-5 rounded-lg hover:border-gray-400 transition-colors">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Mode sans chrono</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Répondez à votre rythme, sans pression du temps.
                    </p>
                    <p className="text-xs text-gray-400 mt-2">Par quiz</p>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                    <div className="text-2xl font-bold text-gray-900">0,69€</div>
                    {extendedProfile?.no_timer_enabled ? (
                      <button
                        disabled
                        className="bg-gray-100 text-gray-700 px-4 py-2 text-sm font-medium border-2 border-gray-600 cursor-not-allowed flex items-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4" /> Activé
                      </button>
                    ) : (
                      <button
                        onClick={() => redirectToStripeCheckout('noTimer')}
                        className="bg-gray-800 text-white px-4 py-2 text-sm font-medium hover:bg-gray-900 transition-colors flex items-center gap-2"
                      >
                        Acheter
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Flashcards 2 thèmes - Achat indépendant */}
              <div className="bg-gray-50 border border-gray-200 p-5 rounded-lg hover:border-emerald-300 transition-colors">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Flashcards 2 thèmes</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Les questions les plus probables à l&apos;examen.
                    </p>
                    <p className="text-xs text-gray-400 mt-2">20 fiches de révision</p>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                    <div className="text-2xl font-bold text-gray-900">1,20€</div>
                    {extendedProfile?.flashcards_2_themes ? (
                      <button
                        disabled
                        className="bg-emerald-100 text-emerald-700 px-4 py-2 text-sm font-medium border-2 border-emerald-600 cursor-not-allowed flex items-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4" /> Activé
                      </button>
                    ) : (
                      <button
                        onClick={() => redirectToStripeCheckout('flashcards2Themes')}
                        className="bg-emerald-600 text-white px-4 py-2 text-sm font-medium hover:bg-emerald-700 transition-colors flex items-center gap-2"
                      >
                        Acheter
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Flashcards 5 thèmes - Achat indépendant */}
              <div className="bg-gray-50 border border-gray-200 p-5 rounded-lg hover:border-emerald-300 transition-colors">
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">Flashcards 5 thèmes</h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Toutes les questions clés pour réussir l&apos;examen.
                    </p>
                    <p className="text-xs text-gray-400 mt-2">50 fiches de révision</p>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                    <div className="text-2xl font-bold text-gray-900">1,50€</div>
                    {extendedProfile?.flashcards_5_themes ? (
                      <button
                        disabled
                        className="bg-blue-100 text-blue-700 px-4 py-2 text-sm font-medium border-2 border-blue-600 cursor-not-allowed flex items-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4" /> Activé
                      </button>
                    ) : (
                      <button
                        onClick={() => redirectToStripeCheckout('flashcards5Themes')}
                        className="bg-emerald-600 text-white px-4 py-2 text-sm font-medium hover:bg-emerald-700 transition-colors flex items-center gap-2"
                      >
                        Acheter
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Lien discret pour gérer l'abonnement */}
            {extendedProfile?.is_premium && (
              <div className="mt-6 pt-4 border-t border-gray-100">
                <ManageSubscriptionButton variant="discrete" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Section FAQ */}
      <div className="mt-12 px-3 sm:px-0">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions fréquentes</h2>
        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
          <FAQItem
            question="Comment fonctionne l'abonnement ?"
            answer="L'abonnement est hebdomadaire et se renouvelle automatiquement. Vous pouvez l'annuler à tout moment depuis votre espace membre."
          />
          <FAQItem
            question="Puis-je annuler mon abonnement ?"
            answer="Oui, vous pouvez annuler à tout moment depuis la section 'Gérer mon abonnement'. L'accès reste actif jusqu'à la fin de la période payée."
          />
          <FAQItem
            question="Les achats ponctuels expirent-ils ?"
            answer="Non, les achats ponctuels sont permanents. Les Flashcards restent accessibles à vie, sans nécessiter d'abonnement."
          />
          <FAQItem
            question="Que se passe-t-il si mon abonnement expire ?"
            answer="Si votre abonnement expire, vous perdez l'accès aux fonctionnalités premium, mais vos achats ponctuels restent enregistrés et seront réactivés si vous vous réabonnez."
          />
        </div>
      </div>

      {/* Modal d'erreur */}
      <ErrorModal
        isOpen={errorModal.isOpen}
        onClose={() => setErrorModal({ isOpen: false, message: '' })}
        message={errorModal.message}
      />
    </div>
  );
}
