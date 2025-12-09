import Link from 'next/link';
import { ArrowRight, BookOpen, FileText, CreditCard, HelpCircle } from 'lucide-react';

interface RelatedLink {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

interface InternalLinksProps {
  currentPage: string;
  maxLinks?: number;
  className?: string;
}

/**
 * Composant de maillage interne intelligent
 * Affiche des liens contextuels pertinents selon la page actuelle
 */
export default function InternalLinks({ currentPage, maxLinks = 3, className = '' }: InternalLinksProps) {
  // Définition de tous les liens disponibles
  const allLinks: Record<string, RelatedLink[]> = {
    home: [
      {
        title: 'FAQ - Questions fréquentes',
        description: 'Toutes les réponses sur l\'examen civique',
        href: '/faq',
        icon: <HelpCircle className="w-5 h-5" />,
      },
      {
        title: 'Nos tarifs',
        description: 'Choisissez la formule adaptée à vos besoins',
        href: '/tarifs',
        icon: <CreditCard className="w-5 h-5" />,
      },
      {
        title: 'À propos',
        description: 'Découvrez Test Civique France',
        href: '/a-propos',
        icon: <FileText className="w-5 h-5" />,
      },
    ],
    faq: [
      {
        title: 'Commencer la préparation',
        description: 'Accédez aux cours et tests gratuits',
        href: '/signup',
        icon: <BookOpen className="w-5 h-5" />,
      },
      {
        title: 'Nos tarifs',
        description: 'Découvrez nos offres d\'abonnement',
        href: '/tarifs',
        icon: <CreditCard className="w-5 h-5" />,
      },
      {
        title: 'À propos',
        description: 'Notre mission et nos valeurs',
        href: '/a-propos',
        icon: <FileText className="w-5 h-5" />,
      },
    ],
    tarifs: [
      {
        title: 'FAQ - Questions fréquentes',
        description: 'Tout savoir sur l\'examen civique',
        href: '/faq',
        icon: <HelpCircle className="w-5 h-5" />,
      },
      {
        title: 'Créer un compte gratuit',
        description: 'Commencez votre préparation maintenant',
        href: '/signup',
        icon: <BookOpen className="w-5 h-5" />,
      },
      {
        title: 'Nous contacter',
        description: 'Une question ? Contactez-nous',
        href: '/contact',
        icon: <FileText className="w-5 h-5" />,
      },
    ],
    'a-propos': [
      {
        title: 'FAQ - Questions fréquentes',
        description: 'Réponses à vos questions',
        href: '/faq',
        icon: <HelpCircle className="w-5 h-5" />,
      },
      {
        title: 'Nos tarifs',
        description: 'Offres et abonnements',
        href: '/tarifs',
        icon: <CreditCard className="w-5 h-5" />,
      },
      {
        title: 'Commencer maintenant',
        description: 'Créez votre compte gratuit',
        href: '/signup',
        icon: <BookOpen className="w-5 h-5" />,
      },
    ],
    contact: [
      {
        title: 'FAQ - Questions fréquentes',
        description: 'Trouvez rapidement des réponses',
        href: '/faq',
        icon: <HelpCircle className="w-5 h-5" />,
      },
      {
        title: 'À propos',
        description: 'Découvrez notre équipe',
        href: '/a-propos',
        icon: <FileText className="w-5 h-5" />,
      },
      {
        title: 'Créer un compte',
        description: 'Commencez votre préparation',
        href: '/signup',
        icon: <BookOpen className="w-5 h-5" />,
      },
    ],
  };

  const links = allLinks[currentPage]?.slice(0, maxLinks) || [];

  if (links.length === 0) return null;

  return (
    <section className={`bg-gray-50 py-12 lg:py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Découvrez aussi
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-primary-500"
              aria-label={`En savoir plus sur ${link.title}`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 text-primary-600 group-hover:text-primary-700 transition-colors">
                  {link.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors mb-2">
                    {link.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {link.description}
                  </p>
                  <div className="flex items-center text-primary-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
