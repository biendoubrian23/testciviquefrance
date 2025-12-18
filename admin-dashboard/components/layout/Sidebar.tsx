'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
      { label: 'Activite en temps reel', href: '/activite', icon: Activity },
    ],
  },
  {
    title: 'Utilisateurs',
    items: [
      { label: 'Tous les utilisateurs', href: '/utilisateurs', icon: Users },
      { label: 'Utilisateurs Premium', href: '/utilisateurs/premium', icon: TrendingUp },
      { label: 'Progression', href: '/utilisateurs/progression', icon: BarChart3 },
    ],
  },
  {
    title: 'Apprentissage',
    items: [
      { label: 'Examens blancs', href: '/examens', icon: GraduationCap },
      { label: 'Sessions de quiz', href: '/sessions', icon: FileText },
      { label: 'Classement', href: '/classement', icon: Trophy },
      { label: 'Categories', href: '/categories', icon: BookOpen },
    ],
  },
  {
    title: 'Monetisation',
    items: [
      { label: 'Revenus', href: '/revenus', icon: CreditCard },
      { label: 'Achats Annexes', href: '/achats-annexes', icon: CreditCard },
    ],
  },
  {
    title: 'Configuration',
    items: [
      { label: 'Parametres', href: '/parametres', icon: Settings },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Header */}
      <div className="h-16 flex items-center px-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">TC</span>
          </div>
          <div>
            <h1 className="font-semibold text-text-primary text-sm">Test Civique</h1>
            <p className="text-xs text-text-muted">Administration</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        {sidebarSections.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="px-4 mb-2 text-xs font-semibold text-text-muted uppercase tracking-wider">
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
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="text-sm">{item.label}</span>
                      {item.badge && (
                        <span className="ml-auto badge badge-info text-xs">
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

      {/* Footer */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="text-xs text-text-muted">
          <p>Version 1.0.0</p>
          <p className="mt-1">Derniere mise a jour: {new Date().toLocaleDateString('fr-FR')}</p>
        </div>
      </div>
    </aside>
  );
}
