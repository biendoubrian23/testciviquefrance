import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connexion - Administration',
  description: 'Connexion au dashboard administrateur',
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
