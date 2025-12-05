import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ Test Civique France - Questions Fréquentes Examen Naturalisation',
  description: 'Toutes les réponses sur le test civique français : combien de questions (40 QCM), seuil de réussite (80% - 32/40), 5 thématiques officielles, décret 2025-647, préparation, inscription.',
  keywords: [
    'FAQ test civique', 'questions fréquentes naturalisation', 'comment passer test civique',
    'combien questions test civique', 'seuil réussite test civique', 'durée test civique',
    'où passer test civique', 'inscription test civique', 'résultats test civique',
    'attestation test civique', 'quand passer test civique', 'difficulté test civique',
  ],
  alternates: {
    canonical: 'https://testciviquefrance.com/faq',
  },
  openGraph: {
    title: 'FAQ - Test Civique France',
    description: 'Questions fréquentes sur le test civique : 40 questions, 80% de réussite, 5 thématiques.',
    url: 'https://testciviquefrance.com/faq',
    type: 'website',
  },
};

// JSON-LD FAQPage pour Google
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien de questions comporte le test civique ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le test civique comporte 40 questions au format QCM (Questions à Choix Multiples) avec une seule bonne réponse par question.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le seuil de réussite du test civique ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le seuil de réussite est de 80%, soit 32 bonnes réponses sur 40 questions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quelles sont les 5 thématiques du test civique ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '1) Principes et valeurs de la République (11 questions), 2) Système institutionnel et politique (6 questions), 3) Droits et devoirs (11 questions), 4) Histoire, géographie et culture (8 questions), 5) Vivre dans la société française (4 questions).',
      },
    },
    {
      '@type': 'Question',
      name: 'Le test civique est-il obligatoire pour la naturalisation ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, le test civique est obligatoire pour obtenir la naturalisation française, une carte de séjour pluriannuelle ou une carte de résident, conformément au décret 2025-647.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment se préparer au test civique ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Utilisez Test Civique France pour vous préparer avec 800+ questions officielles, des cours sur les 5 thématiques et des examens blancs. Notre taux de réussite est de 95%.',
      },
    },
  ],
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
