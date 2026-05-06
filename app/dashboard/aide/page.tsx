'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  HelpCircle,
  MessageCircle,
  Book,
  Mail,
  ChevronDown,
  ExternalLink
} from 'lucide-react';

// Composant FAQ déroulant
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/40 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-5 flex items-center justify-between text-left hover:bg-white/30 transition-all duration-200"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        <span className="font-medium text-gray-900 pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-4 px-5' : 'max-h-0'
        }`}
      >
        <p className="text-gray-700">{answer}</p>
      </div>
    </div>
  );
}

export default function AidePage() {
  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      {/* En-tête */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Aide</h1>
        <p className="text-gray-600 text-lg">
          Trouvez des réponses à vos questions ou contactez-nous
        </p>
      </div>

      {/* Cartes d'aide rapide */}
      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        <Link
          href="/faq"
          className="glass-card p-5 transition-all duration-200 active:scale-[0.98] hover:bg-white/40 group"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-100/70 flex items-center justify-center border border-white/60 flex-shrink-0">
              <Book className="w-6 h-6 text-primary-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                FAQ complète
              </h3>
              <p className="text-sm text-gray-600">Toutes les questions fréquentes</p>
            </div>
            <ExternalLink className="w-5 h-5 text-gray-500 flex-shrink-0" />
          </div>
        </Link>

        <Link
          href="/contact"
          className="glass-card p-5 transition-all duration-200 active:scale-[0.98] hover:bg-white/40 group"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100/70 flex items-center justify-center border border-white/60 flex-shrink-0">
              <Mail className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                Nous contacter
              </h3>
              <p className="text-sm text-gray-600">Envoyez-nous un message</p>
            </div>
            <ExternalLink className="w-5 h-5 text-gray-500 flex-shrink-0" />
          </div>
        </Link>
      </div>

      {/* FAQ rapide */}
      <div className="glass-card overflow-hidden">
        <div className="p-5 sm:p-6 border-b border-white/40">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-primary-600" />
            <h2 className="text-xl font-bold text-gray-900">Questions fréquentes</h2>
          </div>
        </div>
        <div>
          <FAQItem 
            question="Comment fonctionne la préparation ?"
            answer="Choisissez une catégorie (Valeurs de la République, Histoire, Géographie, Institutions), puis progressez niveau par niveau. Chaque niveau contient 10 questions avec un timer de 30 secondes. Validez un niveau avec 8/10 pour débloquer le suivant."
          />
          <FAQItem 
            question="Quelles sont les différentes offres disponibles ?"
            answer="Nous proposons 3 offres : Pack Standard à 2,99€/semaine (1 session d&apos;examen blanc + tests thématiques + cours), Pack Premium à 6,99€/semaine (3 sessions d&apos;examen blanc + tests illimités + statistiques avancées + révision intelligente), et Pack Examen à 2,50€ l&apos;unité (2 sessions d&apos;examen blanc sans expiration, sans tests thématiques). Les cours restent gratuits pour tous."
          />
          <FAQItem 
            question="Comment fonctionnent les examens blancs inclus dans les abonnements ?"
            answer="Le Pack Standard inclut 1 examen blanc par semaine d'abonnement actif. Le Pack Premium inclut 3 examens blancs par semaine. Ces examens se renouvellent chaque semaine. Si vous n'utilisez pas vos examens, ils ne s'accumulent pas. C'est pourquoi le Pack Examen (achat unique) peut être intéressant si vous voulez garder des examens pour plus tard."
          />
          <FAQItem 
            question="Le Pack Examen expire-t-il ?"
            answer="Non, le Pack Examen est sans expiration. Vous achetez 2 examens blancs pour 2,50€ et vous pouvez les utiliser quand vous voulez, même des mois plus tard. C'est idéal si vous voulez vous tester ponctuellement ou garder des examens pour réviser avant votre examen officiel. Attention : ce pack ne donne pas accès aux tests thématiques."
          />
          <FAQItem 
            question="Puis-je annuler mon abonnement ?"
            answer="Oui, vous pouvez annuler votre abonnement à tout moment depuis la section 'Mon abonnement'. L'annulation prend effet immédiatement et aucun renouvellement ne sera effectué. Vous gardez l'accès à votre abonnement jusqu'à la fin de la période déjà payée."
          />
          <FAQItem 
            question="Que se passe-t-il si j'épuise mes examens blancs ?"
            answer="Si vous avez utilisé tous vos examens blancs (1 pour Standard, 3 pour Premium) de la semaine en cours, vous pouvez soit attendre le renouvellement hebdomadaire, soit acheter le Pack Examen (2,50€ pour 2 examens supplémentaires), soit passer au Pack Premium si vous êtes en Standard. Le Pack Examen est cumulable avec tous les abonnements."
          />
          <FAQItem 
            question="Les abonnements se renouvellent-ils automatiquement ?"
            answer="Oui, les abonnements Standard et Premium se renouvellent automatiquement chaque semaine. Vous serez facturé le même montant (2,99€ ou 6,99€) jusqu'à l'annulation. Vous pouvez annuler à tout moment sans frais depuis votre espace client. Le Pack Examen est un achat unique qui ne se renouvelle pas."
          />
          <FAQItem 
            question="Comment se déroule l'examen civique réel ?"
            answer="L'examen civique officiel comporte 40 questions QCM en 45 minutes. Il couvre 5 thématiques : principes et valeurs de la République, institutions, droits et devoirs, histoire/géographie/culture, et vie en France. Vous devez obtenir au moins 80% de bonnes réponses (32/40) pour réussir."
          />
          <FAQItem 
            question="Comment suivre ma progression ?"
            answer="Accédez au Tableau de bord pour voir vos statistiques : questions répondues, taux de réussite, temps d'étude, série de jours consécutifs. La section 'Progression par thème' affiche votre avancement dans chaque catégorie. L'activité récente montre vos dernières sessions et examens blancs."
          />
          <FAQItem 
            question="Puis-je réviser sur mobile ?"
            answer="Absolument ! Notre plateforme est entièrement responsive. Vous pouvez réviser sur smartphone, tablette ou ordinateur, où que vous soyez. L'interface s'adapte automatiquement à la taille de votre écran."
          />
          <FAQItem 
            question="Quels moyens de paiement acceptez-vous ?"
            answer="Nous acceptons toutes les cartes bancaires (Visa, Mastercard, American Express) via notre partenaire de paiement sécurisé Stripe. Tous les paiements sont cryptés et vos données bancaires ne sont jamais stockées sur nos serveurs. Les paiements sont instantanés et vous recevez un reçu par email."
          />
        </div>
      </div>

      {/* Contact direct */}
      <div className="glass-subcard p-5 sm:p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary-100/70 flex items-center justify-center flex-shrink-0 border border-white/60">
            <MessageCircle className="w-6 h-6 text-primary-600" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Besoin d&apos;aide supplémentaire ?</h3>
            <p className="text-gray-700 mb-4">
              Notre équipe est disponible du lundi au dimanche, de 9h à 18h pour répondre à vos questions.
            </p>
            <a
              href="mailto:notification@testciviquefrance.fr"
              className="inline-flex items-center gap-2 text-primary-700 font-medium hover:text-primary-800 transition-all duration-200 active:scale-95"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <Mail className="w-5 h-5" />
              notification@testciviquefrance.fr
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
