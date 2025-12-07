import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles Test Civique 2025 - Guide Immigration, Naturalisation & Titre de Séjour',
  description: 'Tous nos articles sur le test civique français 2025 : nouvelle loi immigration, guide étudiant étranger, procédure titre de séjour, naturalisation, carte de résident. Décret 2025-647, CESEDA R.413-12-1, 5 thématiques, 40 questions QCM.',
  keywords: [
    // Articles et ressources
    'articles test civique', 'guide test civique', 'ressources naturalisation',
    'blog examen civique', 'informations test civique', 'décret 2025-647',
    'CESEDA R.413-12-1', 'cadre légal naturalisation', 'thématiques test civique',
    'questions test civique', 'préparation examen civique', 'réussir test civique',
    // Nouvelle loi immigration
    'loi immigration 2024 articles', 'nouvelle loi immigration 2025', 'réforme immigration france',
    'changements loi immigration', 'actualités immigration france', 'évolution droit étrangers',
    // Étudiants
    'guide étudiant étranger france', 'visa étudiant france', 'titre séjour étudiant',
    'études supérieures france étranger', 'après études france', 'APS autorisation provisoire séjour',
    'master étranger france', 'doctorat étranger france', 'campus france',
    // Titres de séjour
    'procédure titre séjour', 'renouvellement titre séjour', 'premier titre séjour',
    'titre séjour pluriannuel', 'titre séjour salarié', 'titre séjour vie privée familiale',
    // Naturalisation
    'guide naturalisation', 'procédure naturalisation france', 'délai naturalisation',
    'conditions naturalisation', 'dossier naturalisation', 'entretien préfecture',
  ],
  alternates: {
    canonical: 'https://www.testciviquefrance.fr/articles',
  },
  openGraph: {
    title: 'Articles & Ressources - Test Civique France 2025',
    description: 'Guide complet sur le test civique : nouvelle loi immigration, procédures titre de séjour, conseils étudiants étrangers, préparation naturalisation.',
    url: 'https://www.testciviquefrance.fr/articles',
    type: 'website',
    siteName: 'Test Civique France',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Articles Test Civique - Guide Immigration France 2025',
    description: 'Tous les articles sur le test civique, la loi immigration 2024 et les procédures de titre de séjour.',
  },
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
