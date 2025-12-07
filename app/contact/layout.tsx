import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Test Civique France 2025 | Assistance Naturalisation & Immigration',
  description: 'Contactez Test Civique France pour toute question sur la préparation au test civique 2025. Support 7j/7. Aide naturalisation, titre de séjour, étudiants étrangers, nouvelle loi immigration.',
  keywords: [
    'contact test civique france', 'assistance naturalisation', 'aide test civique',
    'support préparation examen', 'question naturalisation', 'email test civique',
    // Immigration et étudiants
    'aide étudiant étranger', 'question titre séjour', 'aide immigration france',
    'contact préfecture', 'aide dossier naturalisation', 'question loi immigration',
  ],
  alternates: {
    canonical: 'https://www.testciviquefrance.fr/contact',
  },
  openGraph: {
    title: 'Contact - Test Civique France 2025',
    description: 'Contactez notre équipe pour toute question sur le test civique, la naturalisation et les titres de séjour.',
    url: 'https://www.testciviquefrance.fr/contact',
    type: 'website',
    siteName: 'Test Civique France',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
