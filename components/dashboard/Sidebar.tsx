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
  ChevronRight,
  X,
  Layers
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
    title: 'Flashcards',
    icon: Layers,
    href: '/dashboard/flashcards',
  },
  {
    title: 'Statistiques',
    icon: BarChart3,
    href: '/dashboard/statistiques',
  },
];

const bottomMenuItems = [
  {
    title: 'Offres',
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

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { profile, signOut } = useAuth();

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === '/dashboard';
    }
    return pathname.startsWith(href);
  };

  // Fermer la sidebar quand on clique sur un lien (mobile)
  const handleLinkClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* Overlay pour mobile - ferme la sidebar quand on clique dessus */}
      {isOpen && onClose && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
          style={{ WebkitTapHighlightColor: 'transparent' }}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 flex flex-col z-50
          transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:!translate-x-0
        `}
      >
        {/* Header mobile avec bouton fermer */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-100">
          <span className="font-semibold text-gray-900">Menu</span>
          <button 
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
            aria-label="Fermer le menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Logo - caché sur mobile car header différent */}
        <div className="hidden lg:flex -mt-6 justify-center">
          <Link href="/" onClick={handleLinkClick}>
            <Image
              src="/logo.png"
              alt="Test Civique France"
              width={132}
              height={132}
              className="w-32 h-32 object-contain"
            />
          </Link>
        </div>
        
        {/* Logo mobile plus petit */}
        <div className="lg:hidden flex justify-center py-3">
          <Link href="/" onClick={handleLinkClick}>
            <Image
              src="/logo.png"
              alt="Test Civique France"
              width={80}
              height={80}
              className="w-20 h-20 object-contain"
            />
          </Link>
        </div>

        {/* Menu principal */}
        <nav className="flex-1 pt-1 pb-3 overflow-y-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
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
                    onClick={handleLinkClick}
                    className={`flex items-center justify-between px-4 py-3 transition-all duration-150 ${
                      active
                        ? 'bg-primary-50 text-primary-600 border-l-2 border-primary-600 -ml-px'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 active:bg-gray-100'
                    }`}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
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
                    onClick={handleLinkClick}
                    className={`flex items-center justify-between px-4 py-3 transition-all duration-150 ${
                      active
                        ? 'bg-primary-50 text-primary-600 border-l-2 border-primary-600 -ml-px'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 active:bg-gray-100'
                    }`}
                    style={{ WebkitTapHighlightColor: 'transparent' }}
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

        {/* Profil utilisateur */}
        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-primary-100 flex items-center justify-center text-primary-600 font-semibold flex-shrink-0">
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
            onClick={() => {
              signOut();
              if (onClose) onClose();
            }}
            className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 active:bg-red-800 transition-colors"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <LogOut className="w-5 h-5" />
            <span>Déconnexion</span>
          </button>
        </div>
      </aside>
    </>
  );
}
