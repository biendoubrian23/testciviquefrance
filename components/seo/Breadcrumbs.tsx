import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Composant Breadcrumbs avec schema JSON-LD pour le SEO
 * Améliore la navigation et le référencement
 */
export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  // Schema BreadcrumbList pour Google
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://www.testciviquefrance.fr',
      },
      ...items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.label,
        ...(item.href && { item: `https://www.testciviquefrance.fr${item.href}` }),
      })),
    ],
  };

  return (
    <>
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb visuel */}
      <nav 
        aria-label="Fil d'Ariane" 
        className={`flex items-center gap-2 text-sm ${className}`}
      >
        {/* Accueil */}
        <Link 
          href="/" 
          className="flex items-center gap-1 text-gray-500 hover:text-primary-600 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span className="sr-only md:not-sr-only">Accueil</span>
        </Link>

        {/* Items */}
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <ChevronRight className="w-4 h-4 text-gray-400" />
            {item.href && index !== items.length - 1 ? (
              <Link 
                href={item.href}
                className="text-gray-500 hover:text-primary-600 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </nav>
    </>
  );
}

/**
 * Génère les items de breadcrumb pour une page article
 */
export function getArticleBreadcrumbs(category: string, title: string): BreadcrumbItem[] {
  return [
    { label: 'Articles', href: '/articles' },
    { label: category, href: `/articles?category=${encodeURIComponent(category)}` },
    { label: title },
  ];
}

/**
 * Génère les items de breadcrumb pour une page cours
 */
export function getCoursBreadcrumbs(categorie?: string, titre?: string): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [{ label: 'Cours', href: '/cours' }];
  if (categorie) {
    items.push({ label: categorie, href: `/cours/${encodeURIComponent(categorie)}` });
  }
  if (titre) {
    items.push({ label: titre });
  }
  return items;
}

/**
 * Génère les items de breadcrumb pour le dashboard
 */
export function getDashboardBreadcrumbs(section?: string): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [{ label: 'Tableau de bord', href: '/dashboard' }];
  if (section) {
    items.push({ label: section });
  }
  return items;
}
