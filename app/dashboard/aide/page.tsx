'use client';

import Link from 'next/link';
import { 
  HelpCircle,
  MessageCircle,
  Book,
  Mail,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

const faqItems = [
  {
    question: 'Comment fonctionne le système de crédits ?',
    answer: 'Chaque question d\'entraînement coûte 1 crédit. Un examen blanc coûte 2 crédits. Vous recevez 5 crédits gratuits à l\'inscription.',
  },
  {
    question: 'Qu\'est-ce que l\'offre Premium ?',
    answer: 'L\'offre Premium vous donne un accès illimité à toutes les questions et examens blancs pendant 1 semaine, sans consommer de crédits.',
  },
  {
    question: 'Comment se déroule l\'examen civique réel ?',
    answer: 'L\'examen civique comporte 12 questions à choix multiples. Vous devez obtenir au moins 7 bonnes réponses sur 12 pour réussir.',
  },
  {
    question: 'Puis-je annuler mon abonnement Premium ?',
    answer: 'Oui, l\'abonnement Premium est sans engagement. Il n\'est pas renouvelé automatiquement.',
  },
];

export default function AidePage() {
  return (
    <div className="space-y-8 max-w-3xl">
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
        <div className="divide-y divide-gray-100">
          {faqItems.map((item, index) => (
            <details key={index} className="group">
              <summary className="p-5 cursor-pointer list-none flex items-center justify-between hover:bg-gray-50 transition-colors">
                <span className="font-medium text-gray-900">{item.question}</span>
                <ChevronRight className="w-5 h-5 text-gray-400 transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-5 pb-5 text-gray-600">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* Contact direct */}
      <div className="bg-gray-50 border border-gray-200 p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-primary-50 flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-6 h-6 text-primary-600" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Besoin d'aide supplémentaire ?</h3>
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
