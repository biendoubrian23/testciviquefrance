import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tarifs - Test Civique France | Préparation Examen Naturalisation Gratuit',
  description: 'Tarifs Test Civique France : préparation gratuite et premium au test civique. Accès aux 800+ questions QCM, examens blancs, cours complets sur les 5 thématiques officielles.',
  keywords: [
    'prix test civique france', 'tarifs préparation naturalisation', 'coût test civique',
    'formation gratuite naturalisation', 'abonnement test civique', 'offre premium test civique',
    'préparation pas cher naturalisation', 'test civique gratuit',
  ],
  alternates: {
    canonical: 'https://testciviquefrance.com/tarifs',
  },
  openGraph: {
    title: 'Tarifs - Test Civique France',
    description: 'Découvrez nos offres : préparation gratuite et premium au test civique français.',
    url: 'https://testciviquefrance.com/tarifs',
    type: 'website',
  },
};

export default function TarifsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
