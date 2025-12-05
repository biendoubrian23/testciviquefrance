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
    count: 0,
    color: 'orange',
  },
];

export const articles: Article[] = [
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
    image: '/images/blog/examen-civique.jpg',
    featured: true,
  },
];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((article) => article.slug === slug);
};

export const getArticlesByCategory = (categorySlug: string): Article[] => {
  if (categorySlug === 'tous') return articles;
  return articles.filter((article) => article.categorySlug === categorySlug);
};

export const getFeaturedArticles = (): Article[] => {
  return articles.filter((article) => article.featured);
};

export const getPopularArticles = (limit: number = 3): Article[] => {
  return [...articles].sort((a, b) => b.views - a.views).slice(0, limit);
};
