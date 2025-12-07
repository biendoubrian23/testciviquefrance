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
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900 pr-4">{question}</span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48 pb-4 px-5' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
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
      <div className="grid sm:grid-cols-2 gap-6">
        <Link 
          href="/faq"
          className="bg-white border border-gray-200 p-5 hover:border-primary-600 transition-all group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-50 flex items-center justify-center">
              <Book className="w-6 h-6 text-primary-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                FAQ complète
              </h3>
              <p className="text-sm text-gray-500">Toutes les questions fréquentes</p>
            </div>
            <ExternalLink className="w-5 h-5 text-gray-400" />
          </div>
        </Link>

        <Link 
          href="/contact"
          className="bg-white border border-gray-200 p-5 hover:border-primary-600 transition-all group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-50 flex items-center justify-center">
              <Mail className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                Nous contacter
              </h3>
              <p className="text-sm text-gray-500">Envoyez-nous un message</p>
            </div>
            <ExternalLink className="w-5 h-5 text-gray-400" />
          </div>
        </Link>
      </div>

      {/* FAQ rapide */}
      <div className="bg-white border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-6 h-6 text-primary-600" />
            <h2 className="text-xl font-bold text-gray-900">Questions fréquentes</h2>
          </div>
        </div>
        <div>
          <FAQItem 
            question="Comment fonctionne la préparation ?"
            answer="Choisissez une catégorie (Valeurs de la République, Histoire, Géographie, Institutions), puis progressez niveau par niveau. Chaque niveau contient 10 questions avec un timer de 30 secondes. Validez un niveau avec 7/10 pour débloquer le suivant."
          />
          <FAQItem 
            question="Quelles sont les différentes offres disponibles ?"
            answer="Nous proposons 3 formules : Pack Standard (2,99€/semaine) avec tests thématiques et 1 examen blanc, Premium (6,99€/semaine) avec accès illimité et 3 examens blancs, et Pack Examen (2,50€) pour 2 examens blancs sans expiration."
          />
          <FAQItem 
            question="Comment se déroule l'examen civique réel ?"
            answer="L'examen civique officiel comporte 12 questions à choix multiples portant sur les valeurs de la République, l'histoire et la géographie de France, et les institutions. Vous devez obtenir au moins 80% de bonnes réponses (soit 10/12 minimum) pour réussir."
          />
          <FAQItem 
            question="Mes examens blancs expirent-ils ?"
            answer="Non ! Si vous achetez le Pack Examen à 2,50€, vos 2 examens blancs restent disponibles sans limite de temps. Vous pouvez les utiliser quand vous le souhaitez."
          />
          <FAQItem 
            question="Comment suivre ma progression ?"
            answer="Accédez à la section Statistiques dans le menu pour voir votre progression par catégorie, votre taux de réussite, le nombre de questions répondues et vos points de gamification."
          />
          <FAQItem 
            question="Puis-je réviser sur mobile ?"
            answer="Absolument ! Notre plateforme est entièrement responsive. Vous pouvez réviser sur smartphone, tablette ou ordinateur, où que vous soyez."
          />
        </div>
      </div>

      {/* Contact direct */}
      <div className="bg-gray-50 border border-gray-200 p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary-50 flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-6 h-6 text-primary-600" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Besoin d&apos;aide supplémentaire ?</h3>
            <p className="text-gray-600 mb-4">
              Notre équipe est disponible du lundi au dimanche, de 9h à 18h pour répondre à vos questions.
            </p>
            <a 
              href="mailto:contact@testciviquefrance.fr"
              className="inline-flex items-center gap-2 text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              contact@testciviquefrance.fr
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
