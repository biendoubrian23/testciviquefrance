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

/**
 * La page de chaque rubrique (`/articles/rubrique/<rubrique>`) : son titre de
 * résultat (50 caractères au plus, le gabarit ajoute « | Test Civique
 * France »), sa description (50 à 160 caractères) et son introduction, deux
 * ou trois phrases en français facile, au vouvoiement. Pas de chiffre, pas de
 * règle : une page de rubrique présente, les articles prouvent.
 */
export const PAGE_RUBRIQUE: Record<Rubrique, { titreSeo: string; description: string; intro: string }> = {
  "cadre-legal": {
    titreSeo: "Droit des étrangers en France : nos guides",
    description:
      "Titre de séjour, carte de résident, naturalisation, recours, OQTF : nos guides du droit des étrangers en France, sources officielles à l'appui.",
    intro:
      "Cette rubrique explique les règles qui encadrent le séjour et la nationalité en France : titres de séjour, carte de résident, naturalisation, regroupement familial, recours contre un refus. Chaque guide part du texte officiel (CESEDA, Code civil, service-public) et dit à qui la règle s'applique. Pour votre cas personnel, la préfecture, un avocat ou une association agréée reste votre interlocuteur.",
  },
  thematiques: {
    titreSeo: "Thématiques de l'examen civique : réviser",
    description:
      "Valeurs de la République, institutions, histoire, géographie, symboles : les thématiques officielles de l'examen civique, expliquées simplement.",
    intro:
      "L'examen civique porte sur cinq thématiques officielles : les principes et valeurs de la République, le système institutionnel, les droits et devoirs, l'histoire, la géographie et la culture, et la vie dans la société française. Ces articles les expliquent avec des mots simples, des dates et des exemples, pour réviser sans se perdre.",
  },
  preparation: {
    titreSeo: "Préparer l'examen civique : nos conseils",
    description:
      "Inscription, déroulé, questions types, erreurs fréquentes, résultats : tout pour préparer l'examen civique et le réussir sereinement.",
    intro:
      "Vous devez passer l'examen civique ? Ces articles vous accompagnent de l'inscription au résultat : où et comment s'inscrire, ce qu'il faut apporter, comment se déroule l'épreuve, les pièges des questions à choix multiples et la façon de réviser. Vous pouvez aussi vous tester sur un examen blanc gratuit.",
  },
  conseils: {
    titreSeo: "Démarches des étrangers en France : conseils",
    description:
      "ANEF, préfecture, ANTS, impôts, santé, logement, travail : des conseils concrets pour réussir vos démarches d'étranger en France.",
    intro:
      "Les démarches de la vie en France ne s'arrêtent pas au titre de séjour : compte ANEF, rendez-vous en préfecture, permis de conduire, impôts, assurance maladie, logement, travail, études. Cette rubrique rassemble des conseils pratiques, étape par étape, avec les sites officiels où agir et les erreurs à éviter.",
  },
  actualites: {
    titreSeo: "Actualité des étrangers en France",
    description:
      "Lois, décrets, taxes, préfectures, examen civique : l'actualité qui change les démarches des étrangers en France, expliquée et sourcée.",
    intro:
      "Un décret paraît, une taxe change, une préfecture modifie ses rendez-vous : cette rubrique explique ce qui change, pour qui et à partir de quand. Nous distinguons toujours ce qui est en vigueur, ce qui est publié mais pas encore applicable, et ce qui est seulement annoncé, avec le lien vers le texte officiel.",
  },
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
