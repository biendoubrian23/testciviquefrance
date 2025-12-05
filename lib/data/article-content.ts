// Contenu complet de l'article principal
export const cadreGeneralContent = {
  introduction: {
    title: 'Introduction',
    content: `L'examen civique est un **test officiel** évaluant les connaissances du candidat sur les **valeurs, institutions et la vie en société en France**.

Il s'applique aux étrangers souhaitant obtenir une **carte de séjour pluriannuelle**, une **carte de résident** ou la **naturalisation française**.`,
    note: 'Pour une vision complète du dispositif, consultez aussi l\'article principal :',
    link: {
      text: 'Tout savoir sur l\'examen civique pour la naturalisation',
      href: '/articles/tout-savoir-examen-civique-naturalisation',
    },
  },
  cadreLegal: {
    title: 'Cadre légal',
    content: `L'examen est encadré par le **Code de l'entrée et du séjour des étrangers et du droit d'asile (CESEDA)**, notamment l'article **R.413-12-1**, et par le **décret n° 2025-647 du 15 juillet 2025**.`,
    points: [
      'Les **5 thématiques officielles** de l\'examen',
      'La **forme du test** (QCM de 40 questions)',
      'Le **seuil de réussite** (80 %, soit 32 bonnes réponses)',
      'Les **organismes agréés** chargés de l\'évaluation',
    ],
  },
  titresConcernes: {
    title: 'Les titres concernés',
    items: [
      '**Carte de séjour pluriannuelle**',
      '**Carte de résident**',
      '**Naturalisation française**',
    ],
    note: 'Chaque mention implique le passage du même test civique, mais la note minimale peut être exigée pour justifier une **intégration républicaine suffisante**.',
  },
  structureExamen: {
    title: 'Structure de l\'examen',
    table: [
      { label: 'Nombre de questions', value: '40' },
      { label: 'Langue', value: 'Français' },
      { label: 'Forme', value: 'QCM (1 seule bonne réponse)' },
      { label: 'Seuil de réussite', value: '80 % (32 bonnes réponses)' },
      { label: 'Thématiques', value: '5 thèmes officiels détaillés ci-dessous' },
      { label: 'Source', value: 'CESEDA R. 413-12-1 – Décret n° 2025-647 du 15 juillet 2025' },
    ],
  },
  thematiquesOfficielles: {
    title: 'Les 5 thématiques officielles',
    themes: [
      'Principes et valeurs de la République',
      'Système institutionnel et politique',
      'Droits et devoirs',
      'Histoire, géographie et culture',
      'Vivre dans la société française',
    ],
    link: {
      text: 'Les thématiques officielles de l\'examen civique en détail',
      href: '/articles/thematiques-officielles-detail',
    },
  },
  repartitionQuestions: {
    title: 'Répartition des questions par thématique',
    intro: 'Chaque candidat devra répondre à un nombre équivalent de questions par thématique et notion :',
    themes: [
      {
        title: 'Principes et valeurs de la République',
        total: 11,
        notions: [
          { name: 'Devise et symboles de la République', count: 3 },
          { name: 'Laïcité', count: 2 },
          { name: 'Mises en situation', count: 6 },
        ],
      },
      {
        title: 'Système institutionnel et politique',
        total: 6,
        notions: [
          { name: 'Démocratie et droit de vote', count: 3 },
          { name: 'Organisation de la République française', count: 2 },
          { name: 'Institutions européennes', count: 1 },
        ],
      },
      {
        title: 'Droits et devoirs',
        total: 11,
        notions: [
          { name: 'Droits fondamentaux', count: 2 },
          { name: 'Obligations et devoirs des personnes résidant en France', count: 3 },
          { name: 'Mises en situation', count: 6 },
        ],
      },
      {
        title: 'Histoire, géographie et culture',
        total: 8,
        notions: [
          { name: 'Principales périodes et personnages historiques', count: 3 },
          { name: 'Territoires et géographie', count: 3 },
          { name: 'Patrimoine français', count: 2 },
        ],
      },
      {
        title: 'Vivre dans la société française',
        total: 4,
        notions: [
          { name: 'S\'installer et résider en France', count: 1 },
          { name: 'L\'accès aux soins', count: 1 },
          { name: 'Travailler en France', count: 1 },
          { name: 'Autorité parentale et système éducatif', count: 1 },
        ],
      },
    ],
  },
  modalitesNotation: {
    title: 'Modalités de notation',
    rules: [
      'Une seule **bonne réponse** est proposée par question.',
      'Une **bonne réponse** vaut **1 point**.',
      'Une **mauvaise réponse** ou **l\'absence de réponse** vaut **0 point**.',
    ],
  },
  bienSePreparer: {
    title: 'Bien se préparer',
    content: `L'examen demande à la fois des connaissances théoriques et une bonne compréhension du mode de vie français.

Pour vous entraîner dans les meilleures conditions :`,
    cta: {
      text: 'Découvrez les tests interactifs sur LeTestCivique.fr',
      href: '/dashboard',
    },
  },
  articlesAssocies: {
    title: 'Articles associés',
    articles: [
      {
        text: 'Tout savoir sur l\'examen civique pour la naturalisation',
        href: '/articles/tout-savoir-examen-civique-naturalisation',
      },
      {
        text: 'Les thématiques officielles de l\'examen civique en détail',
        href: '/articles/thematiques-officielles-detail',
      },
    ],
  },
};
