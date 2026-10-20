/**
 * Les rubriques des articles : le filtre de la page `/articles`, l'étiquette
 * de chaque carte et le fil d'Ariane d'un article.
 *
 * Ce fichier ne contient que des données légères : les composants client
 * (la liste filtrable, la colonne des rubriques) l'importent sans tirer avec
 * lui le texte des 150 articles. Les slugs sont ceux de l'ancien site
 * (`?category=` et `categorySlug`), gardés tels quels.
 */

export const RUBRIQUES = ["cadre-legal", "thematiques", "preparation", "conseils", "actualites"] as const;

export type Rubrique = (typeof RUBRIQUES)[number];

/** Le nom affiché d'une rubrique. */
export const NOM_RUBRIQUE: Record<Rubrique, string> = {
  "cadre-legal": "Cadre légal",
  thematiques: "Thématiques officielles",
  preparation: "Préparation",
  conseils: "Conseils pratiques",
  actualites: "Actualités",
};

/** La pastille de couleur d'une rubrique, sur fond clair. */
export const COULEUR_RUBRIQUE: Record<Rubrique, string> = {
  "cadre-legal": "bg-blue-50 text-blue-700 ring-blue-100",
  thematiques: "bg-green-50 text-green-700 ring-green-100",
  preparation: "bg-purple-50 text-purple-700 ring-purple-100",
  conseils: "bg-orange-50 text-orange-700 ring-orange-100",
  actualites: "bg-red-50 text-red-700 ring-red-100",
};

/**
 * Les cinq thématiques officielles de l'examen civique (décret n° 2025-647 du
 * 15 juillet 2025, référentiel de l'examen). Une question d'entraînement
 * (bloc `qcm`) déclare toujours l'une d'elles : `seo:verifier` refuse les
 * autres.
 */
export const THEMATIQUES_OFFICIELLES = [
  "Principes et valeurs de la République",
  "Système institutionnel et politique",
  "Droits et devoirs",
  "Histoire, géographie et culture",
  "Vivre dans la société française",
] as const;

export type ThematiqueOfficielle = (typeof THEMATIQUES_OFFICIELLES)[number];

/** Les signatures possibles. Un article écrit par le robot est signé de l'équipe, jamais d'une personne. */
export const AUTEURS = ["Brian B", "Équipe Le Test Civique"] as const;

export type Auteur = (typeof AUTEURS)[number];

/** La page auteur d'une signature, quand elle existe (`/auteurs/<slug>`). */
export const PAGE_AUTEUR: Partial<Record<Auteur, string>> = {
  "Brian B": "/auteurs/brian-biendou",
};
