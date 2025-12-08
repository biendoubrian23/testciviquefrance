/**
 * Cache statique des catégories
 * Les catégories ne changent jamais, donc on les stocke en dur
 * Cela évite ~6 requêtes DB par session utilisateur
 */

export interface Category {
  id: string;
  nom: string;
  description: string;
  icon: string;
  color: string;
  ordre: number;
}

// Catégories officielles du test civique français (synchronisées avec la DB)
export const CATEGORIES: Category[] = [
  {
    id: 'f4ade348-dbe7-4fc3-bd11-02889a31b9fd',
    nom: 'Principes et valeurs de la République',
    description: 'Devise, symboles de la République et laïcité',
    icon: '⚖️',
    color: 'blue',
    ordre: 1,
  },
  {
    id: '5a452914-91fc-4e4d-aa3f-5318eb95fb0a',
    nom: 'Vivre dans la société française',
    description: 'S\'installer en France, accès aux soins, travail, autorité parentale et système éducatif',
    icon: '🏠',
    color: 'red',
    ordre: 2,
  },
  {
    id: '98ce105f-bfc6-425c-a1d9-b841ddae4016',
    nom: 'Histoire, géographie et culture',
    description: 'Les grandes dates, événements historiques, territoires et patrimoine français',
    icon: '📚',
    color: 'purple',
    ordre: 3,
  },
  {
    id: '1631db93-aa8a-451b-ab61-9f5c30c0248f',
    nom: 'Système institutionnel et politique',
    description: 'Démocratie, droit de vote, organisation de la République et Union européenne',
    icon: '🏛️',
    color: 'sky',
    ordre: 4,
  },
  {
    id: '664907da-cad7-47e1-ade1-d7f4044c83db',
    nom: 'Droits et devoirs',
    description: 'Droits fondamentaux et obligations citoyennes',
    icon: '📜',
    color: 'amber',
    ordre: 5,
  },
  {
    id: '85fffbbc-168f-4aa9-9e0d-361a758afff3',
    nom: 'Symboles de la France',
    description: 'Drapeau, hymne national, devise et emblèmes',
    icon: '🇫🇷',
    color: 'emerald',
    ordre: 6,
  },
] as const;

// IDs exportés pour faciliter l'accès
export const CATEGORIE_PRINCIPES_VALEURS_ID = 'f4ade348-dbe7-4fc3-bd11-02889a31b9fd';
export const CATEGORIE_VIVRE_SOCIETE_ID = '5a452914-91fc-4e4d-aa3f-5318eb95fb0a';
export const CATEGORIE_HISTOIRE_GEO_CULTURE_ID = '98ce105f-bfc6-425c-a1d9-b841ddae4016';
export const CATEGORIE_INSTITUTIONS_ID = '1631db93-aa8a-451b-ab61-9f5c30c0248f';
export const CATEGORIE_DROITS_DEVOIRS_ID = '664907da-cad7-47e1-ade1-d7f4044c83db';
export const CATEGORIE_SYMBOLES_ID = '85fffbbc-168f-4aa9-9e0d-361a758afff3';

// Map pour accès rapide par ID - O(1)
export const CATEGORIES_MAP = new Map<string, Category>(
  CATEGORIES.map(c => [c.id, c])
);

/**
 * Obtenir une catégorie par son ID
 */
export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES_MAP.get(id);
}

/**
 * Obtenir le nom d'une catégorie par son ID
 */
export function getCategoryName(id: string): string {
  return CATEGORIES_MAP.get(id)?.nom || 'Catégorie inconnue';
}

/**
 * Obtenir l'icône d'une catégorie par son ID
 */
export function getCategoryIcon(id: string): string {
  return CATEGORIES_MAP.get(id)?.icon || '📝';
}

/**
 * Obtenir la couleur d'une catégorie par son ID
 */
export function getCategoryColor(id: string): string {
  return CATEGORIES_MAP.get(id)?.color || 'gray';
}

/**
 * Obtenir toutes les catégories triées par ordre
 */
export function getAllCategories(): Category[] {
  return [...CATEGORIES].sort((a, b) => a.ordre - b.ordre);
}

/**
 * Vérifier si un ID de catégorie est valide
 */
export function isValidCategoryId(id: string): boolean {
  return CATEGORIES_MAP.has(id);
}
