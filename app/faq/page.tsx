'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ChevronDown } from 'lucide-react';

// Composant FAQ déroulant
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors px-1"
      >
        <h3 className="text-base lg:text-lg font-medium text-gray-900 pr-4">{question}</h3>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-primary-500' : ''
          }`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600 leading-relaxed px-1">{answer}</p>
      </div>
    </div>
  );
}

// Questions FAQ organisées par catégorie
const faqCategories = [
  {
    title: "À propos de l'examen civique",
    questions: [
      {
        question: "Qu'est-ce que l'examen civique français ?",
        answer: "L'examen civique est une épreuve officielle instaurée par le Décret n°2025-647 du 15 juillet 2025. Il s'agit d'un QCM de 40 questions en français, à réaliser en 45 minutes maximum. L'examen évalue vos connaissances sur les valeurs et principes de la République, les institutions françaises et européennes, les droits et devoirs, l'histoire, la géographie, la culture française et la vie en société. Pour réussir, il faut obtenir au moins 80% de bonnes réponses, soit 32 sur 40."
      },
      {
        question: "Qui est concerné par l'examen civique ?",
        answer: "Depuis le Décret n°2025-647, l'examen civique concerne trois catégories de personnes : 1) Les étrangers demandant une première carte de séjour pluriannuelle, 2) Les étrangers demandant une carte de résident (10 ans), 3) Les personnes souhaitant obtenir la nationalité française par naturalisation. Certaines exceptions existent, notamment pour les personnes de plus de 65 ans ou certains statuts particuliers."
      },
      {
        question: "Quand l'examen civique devient-il obligatoire ?",
        answer: "L'obligation d'examen civique entre en vigueur à partir du 1er janvier 2026 pour les demandes de carte de séjour pluriannuelle et de carte de résident. Pour la naturalisation, l'examen civique était déjà requis mais ses modalités ont été redéfinies par l'Arrêté du 10 octobre 2025 publié au Journal officiel le 12 octobre 2025."
      },
      {
        question: "Quelles sont les 5 thématiques officielles de l'examen ?",
        answer: "Selon l'Arrêté du 10 octobre 2025, l'examen couvre 5 thématiques : 1) Principes et valeurs de la République (devise, symboles, laïcité), 2) Système institutionnel et politique français et européen, 3) Droits et devoirs des personnes résidant en France, 4) Histoire, géographie et culture françaises, 5) Vivre dans la société française (démarches administratives, santé, travail, éducation)."
      },
      {
        question: "Comment se déroule l'examen civique ?",
        answer: "L'examen se déroule dans un centre agréé, sur support numérique, entre 8h et 20h. Vous devez présenter un titre de séjour valide (ou passeport/carte d'identité pour les ressortissants UE). Une photo est prise avant l'épreuve. L'examen dure 45 minutes maximum. Les téléphones et appareils électroniques sont interdits. En cas de fraude, vous êtes exclu et interdit de repasser l'examen pendant 2 ans."
      },
      {
        question: "Quel est le lien entre l'examen civique et le titre de séjour ?",
        answer: "Depuis le Décret n°2025-647 du 15 juillet 2025, l'examen civique est une condition d'accès à certains titres de séjour. Pour obtenir une carte de séjour pluriannuelle (après un visa long séjour ou une carte temporaire), ou une carte de résident (10 ans), vous devez réussir cet examen ET justifier d'un niveau de français A2 (B1 pour la carte de résident). Ces conditions s'appliquent à partir du 1er janvier 2026."
      },
    ]
  },
  {
    title: "À propos de Test Civique France",
    questions: [
      {
        question: "Test Civique France est-il une plateforme officielle ?",
        answer: "Non, Test Civique France n'est pas une plateforme officielle du gouvernement. Nous sommes une plateforme privée de préparation qui vous aide à vous entraîner pour l'examen civique. Notre contenu est basé sur le référentiel officiel défini par l'Arrêté du 10 octobre 2025 et régulièrement mis à jour selon les textes en vigueur."
      },
      {
        question: "Puis-je m'entraîner depuis mon téléphone ?",
        answer: "Oui, notre plateforme est entièrement responsive et optimisée pour les appareils mobiles. Vous pouvez réviser vos cours, passer des tests et suivre votre progression depuis votre smartphone ou tablette, où que vous soyez. Attention : l'examen officiel se passe dans un centre agréé, pas sur téléphone."
      },
      {
        question: "Les cours sont-ils vraiment gratuits ?",
        answer: "Oui, l'ensemble de nos cours et fiches de révision couvrant les 5 thématiques officielles sont accessibles gratuitement et sans limite. Seuls les tests d'entraînement et examens blancs (QCM de 40 questions comme l'examen réel) nécessitent des crédits ou un abonnement premium."
      },
      {
        question: "Votre contenu est-il à jour avec les nouvelles réglementations ?",
        answer: "Oui, notre contenu est régulièrement mis à jour pour refléter les dernières réglementations. Nous suivons le référentiel officiel de l'Arrêté du 10 octobre 2025 et intégrons les évolutions législatives comme le Décret n°2025-647 du 15 juillet 2025 qui étend l'examen civique aux demandes de titres de séjour."
      },
    ]
  },
  {
    title: "Préparation et entraînement",
    questions: [
      {
        question: "Comment se préparer efficacement à l'examen civique ?",
        answer: "Pour une préparation efficace : 1) Étudiez les 5 thématiques officielles via nos cours gratuits, 2) Utilisez les fiches de révision pour mémoriser les points clés (symboles, dates, institutions), 3) Passez des tests thématiques pour identifier vos lacunes, 4) Terminez par des examens blancs de 40 questions en conditions réelles (45 min). Visez au moins 85% pour être serein le jour J (le seuil de réussite est 80%)."
      },
      {
        question: "Combien de temps faut-il pour se préparer ?",
        answer: "Le temps de préparation varie selon votre niveau initial et votre connaissance de la France. En général, comptez 2 à 4 semaines de révision régulière (30 minutes à 1 heure par jour). Si vous vivez en France depuis plusieurs années, vous connaissez déjà une partie du contenu. Notre offre 3 semaines Premium est conçue pour une préparation complète."
      },
      {
        question: "Vos examens blancs sont-ils représentatifs de l'examen réel ?",
        answer: "Nos examens blancs respectent le format officiel : 40 questions QCM, une seule bonne réponse par question, 45 minutes maximum, couvrant les 5 thématiques. Nous nous basons sur le référentiel de l'Arrêté du 10 octobre 2025. Nos questions sont rédigées pour être du même niveau de difficulté que l'examen officiel."
      },
      {
        question: "Quels sont les sujets les plus importants à réviser ?",
        answer: "Les thèmes essentiels sont : les valeurs républicaines (liberté, égalité, fraternité, laïcité), les symboles (drapeau, Marianne, hymne, devise), les institutions (Président, Parlement, gouvernement), les dates clés (1789, 1905, 1944, 1958), et les droits/devoirs fondamentaux. La laïcité et l'égalité femmes-hommes sont des sujets récurrents."
      },
    ]
  },
  {
    title: "Titres de séjour et naturalisation",
    questions: [
      {
        question: "Je demande une carte de séjour pluriannuelle, dois-je passer l'examen ?",
        answer: "Oui, à partir du 1er janvier 2026, l'examen civique est obligatoire pour obtenir une première carte de séjour pluriannuelle. Vous devez également justifier d'un niveau de français A2. Cette obligation est définie par le Décret n°2025-647 du 15 juillet 2025 (article R-413-12-1 du CESEDA). Certaines exceptions existent selon votre situation."
      },
      {
        question: "Je demande une carte de résident (10 ans), quelles sont les conditions ?",
        answer: "Pour la carte de résident, vous devez réussir l'examen civique ET justifier d'un niveau de français B1 (plus élevé que pour la carte pluriannuelle). L'examen civique est le même pour tous les types de demandes : 40 questions, 80% de réussite requis. Ces conditions entrent en vigueur le 1er janvier 2026."
      },
      {
        question: "Je souhaite me faire naturaliser, l'examen est-il le même ?",
        answer: "Oui, l'examen civique pour la naturalisation suit le même format (40 questions QCM, 80% requis). Cependant, pour la naturalisation, vous devez également justifier d'un niveau de français B1 à l'oral et à l'écrit, et démontrer votre « assimilation » à la communauté française lors d'un entretien en préfecture. Le contenu de l'examen civique est défini par l'Arrêté du 10 octobre 2025."
      },
      {
        question: "Y a-t-il des personnes exemptées de l'examen civique ?",
        answer: "Oui, certaines catégories peuvent être exemptées : les personnes de plus de 65 ans, certains statuts de séjour particuliers, et potentiellement d'autres situations définies par les textes. Nous vous recommandons de vérifier votre situation auprès de votre préfecture ou sur le site service-public.fr."
      },
    ]
  },
  {
    title: "Compte et paiement",
    questions: [
      {
        question: "Comment créer un compte ?",
        answer: "La création de compte est simple et gratuite. Cliquez sur 'Inscription' en haut de la page, renseignez votre email et créez un mot de passe. Vous aurez immédiatement accès à tous les cours gratuits couvrant les 5 thématiques officielles de l'examen."
      },
      {
        question: "Comment fonctionne le système de crédits ?",
        answer: "Les crédits vous permettent de débloquer des tests et examens blancs à la carte. Vous achetez un pack de crédits (10, 25, 50 ou 100) et vous les utilisez quand vous le souhaitez. Les crédits n'expirent jamais et restent sur votre compte. Exemple : un examen blanc de 40 questions coûte environ 2 crédits."
      },
      {
        question: "Quelle est la différence entre crédits et Premium ?",
        answer: "Avec les crédits, vous payez uniquement ce que vous utilisez, idéal pour quelques tests ponctuels. L'offre Premium vous donne un accès illimité à tous les tests et examens blancs pendant une durée définie (48h, 1 semaine ou 3 semaines), parfait pour une préparation intensive avant votre examen officiel."
      },
      {
        question: "Quels moyens de paiement acceptez-vous ?",
        answer: "Nous acceptons les cartes bancaires (Visa, Mastercard, American Express) et PayPal. Tous les paiements sont sécurisés et vos données bancaires ne sont jamais stockées sur nos serveurs."
      },
    ]
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        {/* Hero Section avec image de fond */}
        <section className="py-12 lg:py-16 relative overflow-hidden">
          {/* Image de fond */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073')",
            }}
          />
          {/* Overlay avec dégradé */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-white/70" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-primary-600 transition-colors">Accueil</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">FAQ</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Questions fréquentes
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Retrouvez ici les réponses aux questions les plus courantes concernant 
              l'examen civique obligatoire depuis le <span className="font-semibold">1er janvier 2026</span> pour 
              les titres de séjour pluriannuels, cartes de résident et la naturalisation.
            </p>
          </div>
        </section>

        {/* Sources officielles */}
        <section className="bg-primary-50 border-y border-primary-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-sm text-primary-800">
              <span className="font-semibold">Sources officielles :</span> Décret n°2025-647 du 15 juillet 2025 • 
              Arrêté du 10 octobre 2025 • Service-public.fr • Article R-413-12-1 du CESEDA
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12 last:mb-0">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b-2 border-primary-500 inline-block">
                  {category.title}
                </h2>
                
                <div className="border-t border-gray-200">
                  {category.questions.map((faq, faqIndex) => (
                    <FAQItem 
                      key={faqIndex}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </div>
            ))}

          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Vous avez d'autres questions ?
            </h2>
            <p className="text-gray-600 mb-8">
              Notre équipe est disponible pour répondre à toutes vos interrogations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                Nous contacter
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium hover:bg-primary-700 transition-all duration-300"
              >
                Créer mon compte gratuit
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
