'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Sidebar from '@/components/dashboard/Sidebar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import BottomNav from '@/components/dashboard/BottomNav';
import { Loader2, RefreshCw, WifiOff } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoading, user, authError, retryAuth } = useAuth();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);

  // Rediriger vers login si pas d'utilisateur après le chargement
  useEffect(() => {
    if (!isLoading && !user && !authError) {
      router.push('/login');
    }
  }, [isLoading, user, authError, router]);

  // Fermer la sidebar quand on redimensionne vers desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Empêcher le scroll du body quand la sidebar est ouverte sur mobile
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  // Handler pour retry
  const handleRetry = async () => {
    setIsRetrying(true);
    await retryAuth();
    setIsRetrying(false);
  };

  // 🔴 Écran d'erreur avec bouton Retry
  if (authError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md px-4">
          <WifiOff className="w-12 h-12 text-orange-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Problème de connexion
          </h2>
          <p className="text-gray-600 mb-6">
            {authError}
          </p>
          <button
            onClick={handleRetry}
            disabled={isRetrying}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition disabled:opacity-50"
          >
            {isRetrying ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Reconnexion...
              </>
            ) : (
              <>
                <RefreshCw className="w-5 h-5" />
                Réessayer
              </>
            )}
          </button>
          <p className="text-sm text-gray-500 mt-4">
            <a href="/login" className="text-primary-600 hover:underline">
              Retour à la page de connexion
            </a>
          </p>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-10 h-10 animate-spin text-primary-600 mx-auto mb-4" />
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  // Afficher le loader pendant la redirection
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-10 h-10 animate-spin text-primary-600 mx-auto mb-4" />
          <p className="text-gray-600">Redirection...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar - contrôlée par état sur mobile */}
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      
      {/* Contenu principal */}
      <div className="lg:ml-64 min-h-screen flex flex-col">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)} />
        <main className="flex-1 p-1 sm:p-6 pb-20 lg:pb-6">
          {children}
        </main>
      </div>

      {/* Navigation mobile en bas */}
      <BottomNav />
    </div>
  );
}
