'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, BookOpen, FileQuestion, CreditCard } from 'lucide-react';

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
    href: '/dashboard/credits',
    label: 'Offres',
    icon: CreditCard,
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
    <nav
      className="lg:hidden bottom-nav-fixed fixed bottom-0 left-0 right-0"
      style={{
        zIndex: 9999,
        backgroundColor: 'rgba(255, 255, 255, 0.55)',
        WebkitBackdropFilter: 'blur(24px)',
        backdropFilter: 'blur(24px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.6)',
        boxShadow: '0 -4px 24px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.9)',
      }}
    >
      <div className="flex justify-around items-center h-16 px-2 gap-1">
        {navItems.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex flex-col items-center justify-center flex-1 h-12 rounded-2xl transition-all duration-200 active:scale-95 ${
                active
                  ? 'glass-nav-active text-primary-700'
                  : 'text-gray-600 hover:bg-white/40'
              }`}
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <Icon className={`w-5 h-5 mb-0.5 ${active ? 'stroke-[2.5]' : ''}`} />
              <span className={`text-[11px] ${active ? 'font-semibold' : 'font-medium'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
