'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  LayoutDashboard,
  Users,
  FileText,
  GraduationCap,
  CreditCard,
  BookOpen,
  Trophy,
  BarChart3,
  Settings,
  TrendingUp,
  Activity,
  Menu,
  X,
} from 'lucide-react';

interface SidebarItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

const sidebarSections: SidebarSection[] = [
  {
    title: 'Tableau de bord',
    items: [
      { label: 'Vue d\'ensemble', href: '/', icon: LayoutDashboard },
      { label: 'Activité', href: '/activite', icon: Activity },
    ],
  },
  {
    title: 'Utilisateurs',
    items: [
      { label: 'Utilisateurs', href: '/utilisateurs', icon: Users },
      { label: 'Premium', href: '/utilisateurs/premium', icon: TrendingUp },
      { label: 'Progression', href: '/utilisateurs/progression', icon: BarChart3 },
    ],
  },
  {
    title: 'Apprentissage',
    items: [
      { label: 'Examens', href: '/examens', icon: GraduationCap },
      { label: 'Sessions', href: '/sessions', icon: FileText },
      { label: 'Classement', href: '/classement', icon: Trophy },
      { label: 'Catégories', href: '/categories', icon: BookOpen },
    ],
  },
  {
    title: 'Monétisation',
    items: [
      { label: 'Revenus', href: '/revenus', icon: CreditCard },
      { label: 'Achats', href: '/achats-annexes', icon: CreditCard },
    ],
  },
  {
    title: 'Config',
    items: [
      { label: 'Paramètres', href: '/parametres', icon: Settings },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Marquer comme monté après l'hydratation
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Fermer le menu quand on navigue
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Empêcher le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="sidebar-container">
      {/* Bouton burger mobile - rendu CSS caché par défaut, visible après mount */}
      <button
        onClick={() => setIsOpen(true)}
        className={`lg:hidden fixed top-4 left-4 z-50 p-2 bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors ${isMounted ? 'block' : 'hidden'}`}
        aria-label="Ouvrir le menu"
        suppressHydrationWarning
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      {/* Overlay mobile */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isMounted && isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
        suppressHydrationWarning
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col z-50
          transform transition-transform duration-300 ease-in-out
          lg:translate-x-0
          ${isMounted && isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
        suppressHydrationWarning
      >
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-sidebar-border">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">TC</span>
            </div>
            <div className="min-w-0">
              <h1 className="font-semibold text-text-primary text-sm truncate">Test Civique</h1>
              <p className="text-xs text-text-muted">Admin</p>
            </div>
          </div>
          {/* Bouton fermer mobile */}
          <button
            onClick={() => setIsOpen(false)}
            className={`lg:hidden p-2 hover:bg-gray-100 transition-colors ${isMounted ? 'block' : 'hidden'}`}
            aria-label="Fermer le menu"
            suppressHydrationWarning
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-3">
          {sidebarSections.map((section) => (
            <div key={section.title} className="mb-4">
              <h3 className="px-4 mb-1 text-xs font-semibold text-text-muted uppercase tracking-wider">
                {section.title}
              </h3>
              <ul>
                {section.items.map((item) => {
                  const isActive = pathname === item.href || 
                    (item.href !== '/' && pathname.startsWith(item.href));
                  const Icon = item.icon;
                  
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`sidebar-item ${isActive ? 'active' : ''}`}
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="w-5 h-5 flex-shrink-0" />
                        <span className="text-sm truncate">{item.label}</span>
                        {item.badge && (
                          <span className="ml-auto badge badge-info text-xs flex-shrink-0">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Footer - caché sur mobile */}
        <div className="hidden lg:block p-4 border-t border-sidebar-border">
          <div className="text-xs text-text-muted">
            <p>Version 1.0.0</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
