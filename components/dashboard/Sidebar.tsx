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
  Crown
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
    <aside className="fixed left-0 top-0 h-screen w-64 bg-gray-900 text-white flex flex-col z-50">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Test Civique France"
            width={44}
            height={44}
            className="w-11 h-11 object-contain"
          />
          <div>
            <span className="font-bold text-lg">Test Civique</span>
            <span className="text-primary-400 font-bold text-lg"> France</span>
          </div>
        </Link>
      </div>

      {/* Menu principal */}
      <nav className="flex-1 py-6 overflow-y-auto">
        <ul className="space-y-1 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    active
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Séparateur */}
        <div className="my-6 mx-6 border-t border-gray-800" />

        {/* Menu secondaire */}
        <ul className="space-y-1 px-3">
          {bottomMenuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    active
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium">{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Carte Crédits */}
      <div className="px-4 pb-4">
        <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-primary-100">Vos crédits</span>
            {profile?.is_premium && (
              <span className="flex items-center gap-1 text-xs bg-yellow-400/20 text-yellow-300 px-2 py-0.5 rounded-full">
                <Crown className="w-3 h-3" />
                Premium
              </span>
            )}
          </div>
          <div className="text-3xl font-bold text-white mb-3">
            {profile?.credits ?? 0}
          </div>
          <Link 
            href="/dashboard/credits"
            className="block w-full text-center py-2 bg-white/20 hover:bg-white/30 text-white text-sm font-medium rounded transition-colors"
          >
            Acheter des crédits
          </Link>
        </div>
      </div>

      {/* Profil utilisateur */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-semibold">
            {profile?.prenom?.[0]?.toUpperCase() || profile?.email?.[0]?.toUpperCase() || 'U'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-white truncate">
              {profile?.prenom ? `${profile.prenom} ${profile.nom || ''}`.trim() : 'Utilisateur'}
            </p>
            <p className="text-sm text-gray-400 truncate">
              {profile?.email}
            </p>
          </div>
        </div>
        <button
          onClick={() => signOut()}
          className="flex items-center gap-2 w-full px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span>Déconnexion</span>
        </button>
      </div>
    </aside>
  );
}
