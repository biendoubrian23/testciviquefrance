import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ Test Civique France - Questions Fréquentes Examen Naturalisation 2025 2026',
  description:
    "Réponses aux questions fréquentes sur le test civique obligatoire pour la naturalisation, carte de séjour pluriannuelle et carte de résident. Qui est concerné ? Où passer l'examen ? Format, durée, seuil de réussite. Conforme Décret 2025-647 et Arrêté 10 octobre 2025.",
  keywords: [
    'faq test civique',
    'questions test civique',
    'examen civique faq',
    'qui doit passer le test civique',
    'où passer le test civique',
    'comment se déroule l\'examen civique',
    'suis-je éligible au test civique',
    'examen civique obligatoire 2026',
    'test civique naturalisation',
    'test civique carte de séjour',
    'test civique carte de résident',
    'décret 2025-647',
    'arrêté 10 octobre 2025',
    'questions fréquentes naturalisation',
    'préparation test civique',
  ],
  alternates: {
    canonical: 'https://www.testciviquefrance.fr/faq',
  },
  openGraph: {
    title: 'FAQ Test Civique - Toutes les réponses à vos questions',
    description:
      "Questions fréquentes sur l'examen civique obligatoire 2025-2026 : format, durée, qui est concerné, où passer le test, préparation...",
    url: 'https://www.testciviquefrance.fr/faq',
    type: 'website',
    images: [
      {
        url: 'https://www.testciviquefrance.fr/images/faq-og.jpg',
        width: 1200,
        height: 630,
        alt: 'FAQ Test Civique France',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ Test Civique - Toutes les réponses',
    description:
      "Questions fréquentes sur l'examen civique obligatoire 2025-2026",
    images: ['https://www.testciviquefrance.fr/images/faq-og.jpg'],
  },
};
