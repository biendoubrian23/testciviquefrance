import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'À Propos - Test Civique France | Préparation Examen Naturalisation',
  description: 'Découvrez Test Civique France : plateforme de préparation au test civique pour la naturalisation française. 1600+ candidats préparés, 95% de réussite, conforme décret 2025-647.',
  keywords: [
    'à propos test civique france', 'qui sommes nous', 'plateforme test civique',
    'préparation naturalisation', 'équipe test civique', 'taux réussite test civique',
    'formation test civique', 'cours naturalisation française',
  ],
  alternates: {
    canonical: 'https://testciviquefrance.com/a-propos',
  },
  openGraph: {
    title: 'À Propos - Test Civique France',
    description: 'Plateforme de référence pour la préparation au test civique. 95% de taux de réussite.',
    url: 'https://testciviquefrance.com/a-propos',
    type: 'website',
  },
};

export default function AProposLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
