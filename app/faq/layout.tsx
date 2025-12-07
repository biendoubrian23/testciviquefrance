import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ Test Civique France 2025 - Questions Naturalisation, Titre Séjour & Immigration',
  description: 'Toutes les réponses sur le test civique 2025 : 40 QCM, seuil 80%, 5 thématiques. FAQ nouvelle loi immigration, titre de séjour étudiant, naturalisation française, carte de résident.',
  keywords: [
    'FAQ test civique', 'questions fréquentes naturalisation', 'comment passer test civique',
    'combien questions test civique', 'seuil réussite test civique', 'durée test civique',
    'où passer test civique', 'inscription test civique', 'résultats test civique',
    'attestation test civique', 'quand passer test civique', 'difficulté test civique',
    // Nouvelle loi immigration
    'FAQ loi immigration 2024', 'questions nouvelle loi immigration', 'changements immigration',
    // Étudiants
    'FAQ étudiant étranger', 'questions visa étudiant', 'titre séjour après études',
    // Titres de séjour
    'FAQ titre séjour', 'questions carte séjour', 'renouvellement titre séjour',
    'FAQ carte résident', 'questions naturalisation française',
  ],
  alternates: {
    canonical: 'https://www.testciviquefrance.fr/faq',
  },
  openGraph: {
    title: 'FAQ - Test Civique France 2025',
    description: 'Questions fréquentes : test civique, nouvelle loi immigration, titre de séjour, naturalisation.',
    url: 'https://www.testciviquefrance.fr/faq',
    type: 'website',
    siteName: 'Test Civique France',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ Test Civique France 2025',
    description: 'Réponses à toutes vos questions sur le test civique, la loi immigration et les titres de séjour.',
  },
};

// JSON-LD FAQPage pour Google - Enrichi avec questions immigration et étudiants
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
        text: 'Oui, le test civique est obligatoire pour obtenir la naturalisation française, une carte de séjour pluriannuelle ou une carte de résident, conformément au décret 2025-647 et à la nouvelle loi immigration 2024.',
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
    {
      '@type': 'Question',
      name: 'Un étudiant étranger doit-il passer le test civique ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Les étudiants étrangers souhaitant rester en France après leurs études et obtenir un titre de séjour pluriannuel (comme le titre "recherche d\'emploi" ou "salarié") peuvent être amenés à passer le test civique selon la nouvelle loi immigration 2024.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels changements apporte la nouvelle loi immigration 2024 ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La loi immigration 2024 renforce les exigences d\'intégration : test civique obligatoire pour plus de catégories de titres de séjour, niveau B1 de français requis, et conditions plus strictes pour le regroupement familial et la carte de résident.',
      },
    },
    {
      '@type': 'Question',
      name: 'Où passer le test civique officiel ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le test civique officiel se passe dans les centres agréés par l\'Office Français de l\'Immigration et de l\'Intégration (OFII). Préparez-vous d\'abord avec Test Civique France pour maximiser vos chances de réussite.',
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
