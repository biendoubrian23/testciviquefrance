'use client';

import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { createClient } from '@/lib/supabase/client';
import { Check, Crown, ChevronDown, Loader2, CheckCircle } from 'lucide-react';

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
          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40 pb-4 px-4' : 'max-h-0'
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
}

export default function OffresPage() {
  const { profile, refreshProfile } = useAuth();
  const [selectedOffer, setSelectedOffer] = useState<string | null>('pack_standard');
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Cast du profil pour accéder aux nouveaux champs
  const extendedProfile = profile as ExtendedProfile | null;

  const handleSelectOffer = (offerId: string) => {
    setSelectedOffer(offerId);
  };

  // Fonction pour activer un achat (simulation - plus tard Stripe)
  const activatePurchase = async (productType: string) => {
    setIsLoading(productType);
    setSuccessMessage(null);
    
    try {
      const supabase = createClient();
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        alert('Vous devez être connecté pour effectuer un achat');
        return;
      }

      // Appeler la fonction SQL pour activer l'achat
      const { data, error } = await supabase.rpc('activate_purchase', {
        p_user_id: user.id,
        p_product_type: productType,
        p_stripe_payment_id: null // Pour le moment, pas de Stripe
      });

      if (error) {
        console.error('Erreur activation achat:', error);
        alert('Erreur lors de l\'activation: ' + error.message);
        return;
      }

      if (data) {
        // Rafraîchir le profil pour voir les changements
        if (refreshProfile) {
          await refreshProfile();
        }
        
        // Message de succès
        const messages: Record<string, string> = {
          'unlock_level': '🎉 Tous les niveaux sont maintenant débloqués !',
          'no_timer': '⏱️ Mode sans chrono activé !',
          'flashcards_2': '📚 Flashcards 2 thèmes débloquées !',
          'flashcards_5': '📚 Flashcards 5 thèmes débloquées !',
          'pack_standard': '🌟 Pack Standard activé pour 7 jours !',
          'pack_premium': '👑 Pack Premium activé pour 7 jours !',
          'pack_examen': '📝 2 examens blancs ajoutés !'
        };
        
        setSuccessMessage(messages[productType] || 'Achat activé !');
        setTimeout(() => setSuccessMessage(null), 3000);
      }
    } catch (err) {
      console.error('Erreur:', err);
      alert('Une erreur est survenue');
    } finally {
      setIsLoading(null);
    }
  };

  const handlePurchase = (offerType?: string) => {
    const offer = offerType || selectedOffer;
    if (offer) {
      activatePurchase(offer);
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

      {/* En-tête */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Nos Offres</h1>
        <p className="text-gray-600 text-lg">
          Choisissez la formule adaptée à votre préparation
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
                {extendedProfile?.is_premium ? '∞' : '3'}/jour
              </p>
            </div>
          </div>
        </div>
        
        {/* Afficher les achats actifs */}
        <div className="border-t border-gray-200 pt-4 mt-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Vos achats actifs :</p>
          <div className="flex flex-wrap gap-2">
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
            {!extendedProfile?.all_levels_unlocked && 
             !extendedProfile?.no_timer_enabled && 
             !extendedProfile?.flashcards_2_themes && (
              <span className="text-gray-400 text-sm">Aucun achat pour le moment</span>
            )}
          </div>
        </div>
      </div>

      {/* 3 Offres */}
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Pack Standard - 2,99€/semaine - Recommandé */}
        <div 
          onClick={() => handleSelectOffer('pack_standard')}
          className={`relative cursor-pointer transition-all duration-200 ${
            selectedOffer === 'pack_standard' 
              ? 'ring-2 ring-primary-600' 
              : ''
          }`}
        >
          {/* Badge Recommandé - couleur contrastante */}
          <div className="absolute -top-3 inset-x-0 flex justify-center z-10">
            <span className="px-4 py-1 bg-amber-400 text-amber-900 text-sm font-bold shadow-sm">
              Recommandé
            </span>
          </div>

          <div className="bg-primary-600 text-white p-6 pt-8 h-full flex flex-col">
            <div className="flex items-center gap-2 mb-2">
              <Crown className="w-5 h-5" />
              <h3 className="text-lg font-bold">Pack Standard</h3>
            </div>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-4xl font-bold">2,99€</span>
              <span className="text-primary-200 text-sm">/semaine</span>
            </div>
            <p className="text-primary-100 mb-4 text-sm">Accès pendant 7 jours</p>
            
            <ul className="space-y-2 mb-6 flex-grow text-sm">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 flex-shrink-0" />
                <span>Tests thématiques</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 flex-shrink-0" />
                <span>1 examen blanc</span>
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

            <button 
              onClick={(e) => { e.stopPropagation(); handlePurchase(); }}
              className="w-full py-3 bg-white text-primary-600 font-semibold hover:bg-gray-50 transition-colors"
            >
              Sélectionner
            </button>
          </div>
        </div>

        {/* Pack Premium - 6,99€/semaine */}
        <div 
          onClick={() => handleSelectOffer('pack_premium')}
          className={`relative cursor-pointer transition-all duration-200 bg-white border-2 ${
            selectedOffer === 'pack_premium' 
              ? 'border-primary-600 ring-2 ring-primary-600' 
              : 'border-gray-200'
          } p-6 h-full flex flex-col`}
        >
          <h3 className="text-lg font-bold text-primary-600 mb-2">Premium</h3>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-4xl font-bold text-gray-900">6,99€</span>
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
              <span>3 examens blancs</span>
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

          <button 
            onClick={(e) => { e.stopPropagation(); handlePurchase(); }}
            className={`w-full py-3 font-semibold transition-colors border-2 ${
              selectedOffer === 'pack_premium'
                ? 'bg-primary-600 text-white border-primary-600'
                : 'border-primary-600 text-primary-600 hover:bg-primary-50'
            }`}
          >
            Sélectionner
          </button>
        </div>

        {/* Pack Examen - 2,50€ à l'unité */}
        <div 
          onClick={() => handleSelectOffer('pack_examen')}
          className={`relative cursor-pointer transition-all duration-200 bg-white border-2 ${
            selectedOffer === 'pack_examen' 
              ? 'border-primary-600 ring-2 ring-primary-600' 
              : 'border-gray-200'
          } p-6 h-full flex flex-col`}
        >
          <h3 className="text-lg font-bold text-primary-600 mb-2">Pack Examen</h3>
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-4xl font-bold text-gray-900">2,50€</span>
          </div>
          <p className="text-gray-500 mb-4 text-sm">À l&apos;unité • Sans expiration</p>
          
          <ul className="space-y-2 mb-6 flex-grow text-sm">
            <li className="flex items-center gap-2 text-gray-700">
              <Check className="w-4 h-4 text-primary-600 flex-shrink-0" />
              <span>2 examens blancs complets</span>
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
            onClick={(e) => { e.stopPropagation(); handlePurchase(); }}
            className={`w-full py-3 font-semibold transition-colors border-2 ${
              selectedOffer === 'pack_examen'
                ? 'bg-primary-600 text-white border-primary-600'
                : 'border-primary-600 text-primary-600 hover:bg-primary-50'
            }`}
          >
            Sélectionner
          </button>
        </div>
      </div>

      {/* Micro-transactions en grille 2x2 */}
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
        <div className="bg-white border border-gray-200 p-5 hover:border-primary-300 transition-colors">
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">Débloquer le niveau suivant</h3>
              <p className="text-sm text-gray-500 mt-1">
                Continuez votre progression sans avoir à recommencer.
              </p>
              <p className="text-xs text-gray-400 mt-2">Valable si score entre 5/10 et 7/10</p>
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <div className="text-2xl font-bold text-gray-900">0,99€</div>
              <button
                onClick={() => handlePurchase('unlock_level')}
                disabled={isLoading === 'unlock_level' || extendedProfile?.all_levels_unlocked}
                className="bg-primary-600 text-white px-4 py-2 text-sm font-medium hover:bg-primary-700 transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                {isLoading === 'unlock_level' ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Activation...</>
                ) : extendedProfile?.all_levels_unlocked ? (
                  <><CheckCircle className="w-4 h-4" /> Activé</>
                ) : 'Acheter'}
              </button>
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
        <div className="bg-white border border-gray-200 p-5 hover:border-gray-400 transition-colors">
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">Mode sans chrono</h3>
              <p className="text-sm text-gray-500 mt-1">
                Répondez à votre rythme, sans pression du temps.
              </p>
              <p className="text-xs text-gray-400 mt-2">Par quiz</p>
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <div className="text-2xl font-bold text-gray-900">0,69€</div>
              <button
                onClick={() => handlePurchase('no_timer')}
                disabled={isLoading === 'no_timer' || extendedProfile?.no_timer_enabled}
                className="bg-gray-800 text-white px-4 py-2 text-sm font-medium hover:bg-gray-900 transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                {isLoading === 'no_timer' ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Activation...</>
                ) : extendedProfile?.no_timer_enabled ? (
                  <><CheckCircle className="w-4 h-4" /> Activé</>
                ) : 'Acheter'}
              </button>
            </div>
          </div>
        </div>

        {/* 
          PACK 3: Flashcards 2 thèmes
          - Lié à l'abonnement : OUI
          - Désactivé si abonnement expiré : OUI
          - Stripe product_id : À configurer
        */}
        {/* Flashcards 2 thèmes */}
        <div className="bg-white border border-gray-200 p-5 hover:border-emerald-300 transition-colors">
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">Flashcards 2 thèmes</h3>
              <p className="text-sm text-gray-500 mt-1">
                Les questions les plus probables à l&apos;examen.
              </p>
              <p className="text-xs text-gray-400 mt-2">20 fiches de révision</p>
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <div className="text-2xl font-bold text-gray-900">1,20€</div>
              <button
                onClick={() => handlePurchase('flashcards_2')}
                disabled={isLoading === 'flashcards_2' || extendedProfile?.flashcards_2_themes}
                className="bg-emerald-600 text-white px-4 py-2 text-sm font-medium hover:bg-emerald-700 transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                {isLoading === 'flashcards_2' ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Activation...</>
                ) : extendedProfile?.flashcards_2_themes ? (
                  <><CheckCircle className="w-4 h-4" /> Activé</>
                ) : 'Acheter'}
              </button>
            </div>
          </div>
        </div>

        {/* 
          PACK 4: Flashcards 5 thèmes
          - Lié à l'abonnement : OUI
          - Désactivé si abonnement expiré : OUI
          - Stripe product_id : À configurer
        */}
        {/* Flashcards 5 thèmes */}
        <div className="bg-white border border-gray-200 p-5 hover:border-emerald-300 transition-colors">
          <div className="flex flex-col h-full">
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">Flashcards 5 thèmes</h3>
              <p className="text-sm text-gray-500 mt-1">
                Toutes les questions clés pour réussir l&apos;examen.
              </p>
              <p className="text-xs text-gray-400 mt-2">50 fiches de révision</p>
            </div>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <div className="text-2xl font-bold text-gray-900">1,50€</div>
              <button
                onClick={() => handlePurchase('flashcards_5')}
                disabled={isLoading === 'flashcards_5' || extendedProfile?.flashcards_5_themes}
                className="bg-emerald-600 text-white px-4 py-2 text-sm font-medium hover:bg-emerald-700 transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                {isLoading === 'flashcards_5' ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Activation...</>
                ) : extendedProfile?.flashcards_5_themes ? (
                  <><CheckCircle className="w-4 h-4" /> Activé</>
                ) : 'Acheter'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ rapide - déroulante */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Questions fréquentes</h3>
        <div className="border border-gray-200">
          <FAQItem 
            question="Quelle est la différence entre Pack Standard et Premium ?"
            answer="Le Pack Standard (2,99€) inclut les tests thématiques et 1 examen blanc. Le Premium (6,99€) offre des tests illimités, 3 examens blancs, des statistiques avancées et un support prioritaire."
          />
          <FAQItem 
            question="Le Pack Examen expire-t-il ?"
            answer="Non, le Pack Examen à 2,50€ n'expire jamais. Vos 2 examens blancs restent disponibles jusqu'à ce que vous les utilisiez."
          />
          <FAQItem 
            question="Quels moyens de paiement acceptez-vous ?"
            answer="Nous acceptons les cartes bancaires (Visa, Mastercard, Amex) via notre partenaire de paiement sécurisé Stripe."
          />
        </div>
      </div>
    </div>
  );
}
