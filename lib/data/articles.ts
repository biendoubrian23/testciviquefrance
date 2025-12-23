export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  categorySlug: string;
  author: string;
  date: string;
  readTime: number;
  views: number;
  image: string;
  featured: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  count: number;
  color: string;
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Tous les articles',
    slug: 'tous',
    icon: '',
    count: 1,
    color: 'primary',
  },
  {
    id: '2',
    name: 'Cadre légal',
    slug: 'cadre-legal',
    icon: '',
    count: 1,
    color: 'blue',
  },
  {
    id: '3',
    name: 'Thématiques officielles',
    slug: 'thematiques',
    icon: '',
    count: 0,
    color: 'green',
  },
  {
    id: '4',
    name: 'Préparation',
    slug: 'preparation',
    icon: '',
    count: 0,
    color: 'purple',
  },
  {
    id: '5',
    name: 'Conseils pratiques',
    slug: 'conseils',
    icon: '',
    count: 1,
    color: 'orange',
  },
];

export const articles: Article[] = [
  {
    id: '2',
    slug: 'centres-agrees-examen-civique-2026',
    title: 'Liste officielle des centres agréés pour l\'examen civique 2026 : où passer votre test de naturalisation',
    excerpt: 'Découvrez la liste complète des centres d\'examen agréés pour le test civique 2026 en France. Inscription, horaires, localisation : tout ce qu\'il faut savoir pour réserver votre session d\'examen.',
    content: '',
    category: 'Conseils pratiques',
    categorySlug: 'conseils',
    author: 'Équipe Le Test Civique',
    date: '09/12/2025',
    readTime: 10,
    views: 0,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070',
    featured: true,
  },
  {
    id: '1',
    slug: 'cadre-general-examen-civique',
    title: 'Cadre général de l\'examen civique : programme et thématiques officielles',
    excerpt: 'Découvrez le cadre légal, la structure de l\'examen et les 5 thématiques officielles pour bien vous préparer au test civique.',
    content: '',
    category: 'Cadre légal',
    categorySlug: 'cadre-legal',
    author: 'Équipe Le Test Civique',
    date: '01/11/2025',
    readTime: 8,
    views: 1250,
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070',
    featured: true,
  },
  {
    id: '3',
    slug: 'tout-savoir-examen-civique-2026',
    title: 'Tout savoir sur l’examen civique 2026 : Guide complet et nouveautés',
    excerpt: 'Le guide ultime pour comprendre la réforme 2026 : nouveau décret, niveau B2, format QCM, et conseils de préparation pour réussir du premier coup.',
    content: '',
    category: 'Cadre légal',
    categorySlug: 'cadre-legal',
    author: 'Équipe Le Test Civique',
    date: '17/12/2025',
    readTime: 12,
    views: 0,
    image: 'https://images.unsplash.com/photo-1471623320832-752e8bbf8413?q=80&w=2055',
    featured: true,
  },
];

// Import des articles SEO
import { seoArticles } from './seo-articles';

// Fusionner tous les articles
export const allArticles: Article[] = [...articles, ...seoArticles];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return allArticles.find((article) => article.slug === slug);
};

export const getArticlesByCategory = (categorySlug: string): Article[] => {
  if (categorySlug === 'tous') return allArticles;
  return allArticles.filter((article) => article.categorySlug === categorySlug);
};

export const getFeaturedArticles = (): Article[] => {
  return allArticles.filter((article) => article.featured);
};

export const getPopularArticles = (limit: number = 3): Article[] => {
  return [...allArticles].sort((a, b) => b.views - a.views).slice(0, limit);
};

/**
 * Récupère les articles liés (même catégorie ou featured)
 */
export const getRelatedArticles = (currentSlug: string, limit: number = 3): Article[] => {
  const current = getArticleBySlug(currentSlug);
  if (!current) return getPopularArticles(limit);
  
  // Articles de la même catégorie d'abord
  const sameCategory = allArticles.filter(
    (a) => a.categorySlug === current.categorySlug && a.slug !== currentSlug
  );
  
  // Compléter avec d'autres articles si nécessaire
  const others = allArticles.filter(
    (a) => a.categorySlug !== current.categorySlug && a.slug !== currentSlug
  );
  
  return [...sameCategory, ...others].slice(0, limit);
};
