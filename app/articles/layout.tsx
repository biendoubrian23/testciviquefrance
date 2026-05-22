import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Articles Test Civique 2026 - Guide Immigration, Naturalisation, Titre de Séjour & Prix',
  description: 'Tous nos articles sur le test civique français 2026 : prix du test civique (90€), tarifs titre de séjour, naturalisation, renouvellement ANEF, recours OQTF, guide étudiant étranger. Décret 2025-647, CESEDA R.413-12-1, 40 questions QCM.',
  keywords: [
    // Articles et ressources
    'articles test civique', 'guide test civique', 'ressources naturalisation',
    'blog examen civique', 'informations test civique', 'décret 2025-647',
    'CESEDA R.413-12-1', 'cadre légal naturalisation', 'thématiques test civique',
    'questions test civique', 'préparation examen civique', 'réussir test civique',
    // Nouvelle loi immigration
    'loi immigration 2026 articles', 'nouvelle loi immigration 2026', 'réforme immigration france',
    'changements loi immigration', 'actualités immigration france', 'évolution droit étrangers',
    'prix test civique', 'cout test civique 90 euros', 'tarif titre de sejour 2026',
    'prix titre de sejour etudiant', 'prix titre de sejour salarie', 'combien coute le test civique',
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
    title: 'Articles & Ressources - Test Civique France 2026',
    description: 'Guide complet sur le test civique 2026 : prix 90€, tarifs titres de séjour, naturalisation, renouvellement ANEF, recours OQTF, conseils étudiants étrangers.',
    url: 'https://www.testciviquefrance.fr/articles',
    type: 'website',
    siteName: 'Test Civique France',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Articles Test Civique - Guide Immigration France 2026',
    description: 'Tous les articles sur le test civique 2026, prix 90€, tarifs titres de séjour, naturalisation et recours OQTF.',
  },
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
