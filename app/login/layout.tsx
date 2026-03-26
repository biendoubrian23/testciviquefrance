import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connexion - Test Civique France',
  robots: { index: false, follow: false },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
