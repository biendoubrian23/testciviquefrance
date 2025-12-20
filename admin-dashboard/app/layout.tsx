import type { Metadata } from 'next';
import { Sidebar } from '@/components/layout';
import './globals.css';

export const metadata: Metadata = {
  title: 'Test Civique France - Administration',
  description: 'Dashboard administrateur pour Test Civique France',
  icons: {
    icon: '/favicon.svg',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-background-light">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 lg:ml-64 min-w-0">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
