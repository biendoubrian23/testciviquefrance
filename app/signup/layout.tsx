import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inscription - Test Civique France',
  robots: { index: false, follow: false },
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
