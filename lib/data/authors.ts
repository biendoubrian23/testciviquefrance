/**
 * Système d'auteurs pour Google Publisher Center
 * Chaque auteur a une page dédiée pour la crédibilité Google News
 */

export interface Author {
  slug: string;
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  image?: string;
  linkedin?: string;
  twitter?: string;
}

export const authors: Author[] = [
  {
    slug: 'brian-biendou',
    name: 'Brian BIENDOU',
    role: 'Fondateur & Rédacteur en chef',
    bio: 'Fondateur de Test Civique France, Brian BIENDOU accompagne depuis 2024 les candidats à la naturalisation française et au renouvellement de titre de séjour. Passionné par les questions d\'intégration et de citoyenneté, il s\'appuie sur les sources officielles (service-public.fr, Legifrance, préfectures) pour produire des contenus fiables et à jour sur le test civique obligatoire instauré en janvier 2026.',
    expertise: [
      'Test civique et naturalisation française',
      'Titres de séjour et démarches administratives',
      'Droit des étrangers en France',
      'Réforme 2026 du décret 2025-647',
      'Procédures ANEF et préfectures',
    ],
    image: undefined,
  },
];

/**
 * Récupère un auteur par son slug
 */
export function getAuthorBySlug(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

/**
 * Récupère l'auteur par défaut (Brian BIENDOU)
 */
export function getDefaultAuthor(): Author {
  return authors[0];
}

/**
 * Récupère tous les auteurs
 */
export function getAllAuthors(): Author[] {
  return authors;
}
