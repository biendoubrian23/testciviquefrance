import { Metadata } from 'next';
import { TarifsSchemas } from './TarifsSchemas';

export const metadata: Metadata = {
  title: 'Tarifs - Test Civique France 2025 | Préparation Gratuite Naturalisation & Titre Séjour',
  description: 'Tarifs Test Civique France 2025 : préparation gratuite et premium. 800+ questions QCM, examens blancs, cours complets. Conforme nouvelle loi immigration. Idéal étudiants et demandeurs titre de séjour.',
  keywords: [
    'prix test civique france', 'tarifs préparation naturalisation', 'coût test civique',
    'formation gratuite naturalisation', 'abonnement test civique', 'offre premium test civique',
    'préparation pas cher naturalisation', 'test civique gratuit',
    // Étudiants et immigration
    'tarif étudiant', 'offre étudiant étranger', 'préparation abordable immigration',
    'formation titre séjour', 'cours naturalisation prix', 'abonnement étudiant',
  ],
  alternates: {
    canonical: 'https://www.testciviquefrance.fr/tarifs',
  },
  openGraph: {
    title: 'Tarifs - Test Civique France 2025',
    description: 'Préparation gratuite et premium au test civique. Idéal pour étudiants et demandeurs de titre de séjour.',
    url: 'https://www.testciviquefrance.fr/tarifs',
    type: 'website',
    siteName: 'Test Civique France',
    images: [
      {
        url: 'https://www.testciviquefrance.fr/images/og-tarifs.jpg',
        width: 1200,
        height: 630,
        alt: 'Tarifs Test Civique France - Préparation naturalisation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarifs - Test Civique France 2025',
    description: 'Préparation gratuite et premium au test civique français.',
    images: ['https://www.testciviquefrance.fr/images/og-tarifs.jpg'],
  },
};

export default function TarifsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Schémas JSON-LD pour les produits/offres */}
      <TarifsSchemas />
      {children}
    </>
  );
}
