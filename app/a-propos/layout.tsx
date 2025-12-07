import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À Propos - Test Civique France 2025 | Préparation Naturalisation & Titre de Séjour',
  description: 'Découvrez Test Civique France : plateforme de préparation au test civique 2025. Conforme nouvelle loi immigration, aide étudiants étrangers, naturalisation, titre de séjour. 95% de réussite, décret 2025-647.',
  keywords: [
    'à propos test civique france', 'qui sommes nous', 'plateforme test civique',
    'préparation naturalisation', 'équipe test civique', 'taux réussite test civique',
    'formation test civique', 'cours naturalisation française',
    // Nouvelle loi immigration
    'loi immigration 2024', 'nouvelle loi immigration', 'réforme immigration france',
    // Étudiants
    'préparation étudiant étranger', 'aide étudiant étranger', 'accompagnement étudiant',
    // Titres de séjour
    'préparation titre séjour', 'aide carte séjour', 'accompagnement naturalisation',
  ],
  alternates: {
    canonical: 'https://www.testciviquefrance.fr/a-propos',
  },
  openGraph: {
    title: 'À Propos - Test Civique France 2025',
    description: 'Plateforme de référence pour la préparation au test civique. 95% de taux de réussite. Conforme nouvelle loi immigration.',
    url: 'https://www.testciviquefrance.fr/a-propos',
    type: 'website',
    siteName: 'Test Civique France',
  },
};

export default function AProposLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
