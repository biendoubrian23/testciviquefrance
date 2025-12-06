'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { 
  LayoutDashboard, 
  BookOpen, 
  FileQuestion, 
  Trophy, 
  BarChart3, 
  Settings,
  LogOut,
  CreditCard,
  HelpCircle,
  ChevronRight
} from 'lucide-react';

const menuItems = [
  {
    title: 'Tableau de bord',
    icon: LayoutDashboard,
    href: '/dashboard',
  },
  {
    title: 'S\'entraîner',
    icon: BookOpen,
    href: '/dashboard/entrainement',
  },
  {
    title: 'Examens blancs',
    icon: FileQuestion,
    href: '/dashboard/examens',
  },
  {
    title: 'Mes résultats',
    icon: Trophy,
    href: '/dashboard/resultats',
  },
  {
    title: 'Statistiques',
    icon: BarChart3,
    href: '/dashboard/statistiques',
  },
];

const bottomMenuItems = [
  {
    title: 'Crédits',
    icon: CreditCard,
    href: '/dashboard/credits',
  },
  {
    title: 'Aide',
    icon: HelpCircle,
    href: '/dashboard/aide',
  },
  {
    title: 'Paramètres',
    icon: Settings,
    href: '/dashboard/parametres',
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { profile, signOut } = useAuth();

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === '/dashboard';
    }
    return pathname.startsWith(href);
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col z-50">
      {/* Logo */}
      <div className="-mt-6 flex justify-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Test Civique France"
            width={132}
            height={132}
            className="w-32 h-32 object-contain"
          />
        </Link>
      </div>
      {/* Ligne de séparation */}
      <div className="border-b border-gray-100 -mt-4"></div>

      {/* Menu principal */}
      <nav className="flex-1 pt-1 pb-3 overflow-y-auto">
        <div className="px-4 mb-1">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Menu</span>
        </div>
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-3 transition-all duration-150 ${
                    active
                      ? 'bg-primary-50 text-primary-600 border-l-2 border-primary-600 -ml-px'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{item.title}</span>
                  </div>
                  {active && <ChevronRight className="w-4 h-4" />}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Séparateur */}
        <div className="my-6 mx-6 border-t border-gray-100" />

        {/* Menu secondaire */}
        <div className="px-4 mb-2">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Compte</span>
        </div>
        <ul className="space-y-1 px-3">
          {bottomMenuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center justify-between px-4 py-3 transition-all duration-150 ${
                    active
                      ? 'bg-primary-50 text-primary-600 border-l-2 border-primary-600 -ml-px'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{item.title}</span>
                  </div>
                  {active && <ChevronRight className="w-4 h-4" />}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Carte Crédits */}
      <div className="px-4 pb-4">
        <div className="bg-gray-50 border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-500">Vos crédits</span>
            {profile?.is_premium && (
              <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 font-medium">
                Premium
              </span>
            )}
          </div>
          <div className="text-3xl font-bold text-gray-900 mb-3">
            {profile?.credits ?? 0}
          </div>
          <Link 
            href="/dashboard/credits"
            className="block w-full text-center py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium transition-colors"
          >
            Acheter des crédits
          </Link>
        </div>
      </div>

      {/* Profil utilisateur */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-primary-100 flex items-center justify-center text-primary-600 font-semibold">
            {profile?.prenom?.[0]?.toUpperCase() || profile?.email?.[0]?.toUpperCase() || 'U'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-gray-900 truncate">
              {profile?.prenom ? `${profile.prenom} ${profile.nom || ''}`.trim() : 'Utilisateur'}
            </p>
            <p className="text-sm text-gray-500 truncate">
              {profile?.email}
            </p>
          </div>
        </div>
        <button
          onClick={() => signOut()}
          className="flex items-center gap-2 w-full px-4 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Déconnexion</span>
        </button>
      </div>
    </aside>
  );
}
