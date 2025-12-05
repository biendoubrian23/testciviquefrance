import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles & Ressources Test Civique - Guide Complet Naturalisation France',
  description: 'Tous nos articles sur le test civique français : cadre légal (décret 2025-647, CESEDA R.413-12-1), 5 thématiques officielles, 40 questions QCM, seuil 80%, préparation naturalisation, carte de séjour, carte résident.',
  keywords: [
    'articles test civique', 'guide test civique', 'ressources naturalisation',
    'blog examen civique', 'informations test civique', 'décret 2025-647',
    'CESEDA R.413-12-1', 'cadre légal naturalisation', 'thématiques test civique',
    'questions test civique', 'préparation examen civique', 'réussir test civique',
  ],
  alternates: {
    canonical: 'https://testciviquefrance.com/articles',
  },
  openGraph: {
    title: 'Articles & Ressources - Test Civique France',
    description: 'Guide complet sur le test civique : cadre légal, thématiques officielles, conseils de préparation.',
    url: 'https://testciviquefrance.com/articles',
    type: 'website',
  },
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
