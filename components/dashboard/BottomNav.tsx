'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, BookOpen, FileQuestion, Layers } from 'lucide-react';

const navItems = [
  {
    href: '/dashboard',
    label: 'Accueil',
    icon: LayoutDashboard,
  },
  {
    href: '/dashboard/entrainement',
    label: 'Quiz',
    icon: BookOpen,
  },
  {
    href: '/dashboard/examens',
    label: 'Examens',
    icon: FileQuestion,
  },
  {
    href: '/dashboard/flashcards',
    label: 'Flashcards',
    icon: Layers,
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  // Vérifier si le chemin actuel correspond à l'item
  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === '/dashboard';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 safe-area-bottom">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                active
                  ? 'text-primary-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <Icon className={`w-5 h-5 mb-1 ${active ? 'stroke-[2.5]' : ''}`} />
              <span className={`text-xs ${active ? 'font-semibold' : 'font-medium'}`}>
                {item.label}
              </span>
              {active && (
                <div className="absolute bottom-0 w-12 h-0.5 bg-primary-600 rounded-t-full" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
