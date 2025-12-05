import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - Test Civique France | Assistance Préparation Naturalisation',
  description: 'Contactez Test Civique France pour toute question sur la préparation au test civique. Support disponible 7j/7. Assistance pour naturalisation française, carte de séjour, carte résident.',
  keywords: [
    'contact test civique france', 'assistance naturalisation', 'aide test civique',
    'support préparation examen', 'question naturalisation', 'email test civique',
  ],
  alternates: {
    canonical: 'https://testciviquefrance.com/contact',
  },
  openGraph: {
    title: 'Contact - Test Civique France',
    description: 'Contactez notre équipe pour toute question sur le test civique.',
    url: 'https://testciviquefrance.com/contact',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
