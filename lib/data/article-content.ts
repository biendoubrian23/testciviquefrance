// Contenu complet de l'article principal
export const cadreGeneralContent = {
  introduction: {
    title: 'Introduction',
    content: `L'examen civique est un **test officiel** évaluant les connaissances du candidat sur les **valeurs, institutions et la vie en société en France**.

Il s'applique aux étrangers souhaitant obtenir une **carte de séjour pluriannuelle**, une **carte de résident** ou la **naturalisation française**.`,
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
    title: 'Sources officielles',
    articles: [
      {
        text: 'Examen civique : programme et thématiques - Service-Public.fr',
        href: 'https://www.service-public.fr/particuliers/vosdroits/F35799',
      },
      {
        text: 'Carte de séjour pluriannuelle : conditions - Service-Public.fr',
        href: 'https://www.service-public.fr/particuliers/vosdroits/F34708',
      },
      {
        text: 'Acquisition de la nationalité française - Service-Public.fr',
        href: 'https://www.service-public.fr/particuliers/vosdroits/F2213',
      },
    ],
  },
};

// Contenu de l'article sur les centres d'examen 2026
export const centresExamen2026Content = {
  introduction: {
    title: 'Liste officielle des centres agréés 2026',
    content: `La **liste officielle des centres d'examen agréés pour le test civique 2026** est désormais disponible. Cette annonce marque une étape importante pour tous les candidats à la naturalisation française, à l'obtention d'une carte de séjour pluriannuelle ou d'une carte de résident.

Dans le cadre de la **nouvelle loi immigration 2024-2025** et du **décret n° 2025-647 du 15 juillet 2025**, l'État français a considérablement renforcé l'organisation du test civique. Ce dernier est désormais un passage obligatoire pour attester de votre **connaissance des valeurs, institutions et du mode de vie en France**.

Pour la première fois, les **dates et lieux d'examen sont accessibles en ligne** sur une plateforme officielle, permettant aux candidats de planifier leur passage du test civique en fonction de leur localisation et de leurs disponibilités. Cette modernisation représente une **avancée majeure** dans la simplification des démarches administratives pour les étrangers résidant en France.

Que vous soyez étudiant en fin de cursus, salarié souhaitant obtenir une carte de résident, ou en cours de procédure de naturalisation, ce guide complet vous accompagne dans toutes les étapes : **de la recherche du centre le plus proche jusqu'à la réussite de votre examen**.`,
  },
  
  nouveautes2026: {
    title: 'Les nouveautés 2026',
    content: `L'année 2026 apporte plusieurs changements majeurs dans l'organisation de l'examen civique :`,
    points: [
      '**Plus de centres disponibles** : Extension du réseau de centres agréés sur tout le territoire français',
      '**Inscription en ligne facilitée** : Plateforme digitale pour réserver votre session d\'examen',
      '**Sessions plus fréquentes** : Multiplication des créneaux disponibles pour réduire les délais d\'attente',
      '**Accessibilité renforcée** : Centres adaptés aux personnes à mobilité réduite',
      '**Support multilingue** : Assistance administrative disponible en plusieurs langues',
    ],
  },

  importanceTest: {
    title: 'Pourquoi le test civique est-il si important ?',
    content: `Depuis l'entrée en vigueur de la **loi immigration de 2024**, le test civique est devenu un **élément incontournable** pour toute personne souhaitant obtenir un titre de séjour stable en France ou accéder à la nationalité française.`,
    points: [
      {
        title: 'Un prérequis légal obligatoire',
        content: 'Le test civique est **exigé par la loi** pour la délivrance de la carte de séjour pluriannuelle, la carte de résident de 10 ans et pour toute demande de naturalisation. Sans cette attestation, votre dossier sera considéré comme incomplet et sera automatiquement rejeté.',
      },
      {
        title: 'Une preuve d\'intégration républicaine',
        content: 'Au-delà de l\'aspect légal, réussir le test civique démontre votre **volonté de vous intégrer** dans la société française et votre **adhésion aux valeurs de la République**. C\'est un signal fort envoyé aux autorités françaises de votre engagement à respecter les principes démocratiques et laïcs du pays.',
      },
      {
        title: 'Un sésame pour votre avenir en France',
        content: 'L\'obtention de votre attestation de réussite au test civique ouvre la voie à de **nombreux droits** : stabilité de séjour, accès facilité au marché du travail, regroupement familial, et à terme, la possibilité de **voter et d\'être élu** en tant que citoyen français. C\'est une étape décisive dans votre parcours d\'installation durable en France.',
      },
    ],
  },

  ouTrouverCentres: {
    title: 'Où trouver la liste complète des centres ?',
    content: `La **liste officielle et actualisée** des centres d'examen est consultable sur le site de la CCI Paris Île-de-France, organisme officiel agréé par l'État français pour l'organisation du test civique.`,
    link: {
      text: 'Consulter la liste officielle des centres agréés 2026',
      href: 'https://francais.cci-paris-idf.fr/candidat',
      description: 'Accédez à la plateforme officielle pour trouver le centre le plus proche de chez vous',
    },
  },

  commentSinscrire: {
    title: 'Comment s\'inscrire à l\'examen civique ?',
    steps: [
      {
        number: '1',
        title: 'Vérifiez votre éligibilité',
        content: 'Le test civique est obligatoire pour les demandes de carte de séjour pluriannuelle, carte de résident et naturalisation française. Niveau A2 minimum en français requis.',
      },
      {
        number: '2',
        title: 'Consultez les centres disponibles',
        content: 'Rendez-vous sur francais.cci-paris-idf.fr/candidat pour voir tous les centres agréés près de chez vous avec leurs disponibilités.',
      },
      {
        number: '3',
        title: 'Réservez votre session',
        content: 'Choisissez la date et l\'horaire qui vous conviennent. Les sessions se déroulent généralement du lundi au samedi avec plusieurs créneaux horaires.',
      },
      {
        number: '4',
        title: 'Préparez vos documents',
        content: 'Pièce d\'identité en cours de validité, convocation imprimée, et tout justificatif demandé par le centre d\'examen.',
      },
      {
        number: '5',
        title: 'Préparez-vous efficacement',
        content: 'Entraînez-vous avec nos 800+ questions officielles pour maximiser vos chances de réussite (seuil 80% requis).',
      },
    ],
  },

  principalesVilles: {
    title: 'Centres d\'examen dans les principales villes',
    content: `Les centres d'examen sont répartis sur l'ensemble du territoire français. Voici les principales zones couvertes :`,
    regions: [
      {
        name: 'Île-de-France',
        villes: ['Paris (75)', 'Nanterre (92)', 'Bobigny (93)', 'Créteil (94)', 'Cergy (95)', 'Évry (91)', 'Versailles (78)', 'Melun (77)'],
        description: 'La région parisienne dispose du plus grand nombre de centres avec des sessions quotidiennes.',
      },
      {
        name: 'Auvergne-Rhône-Alpes',
        villes: ['Lyon (69)', 'Grenoble (38)', 'Saint-Étienne (42)', 'Annecy (74)', 'Chambéry (73)'],
        description: 'Plusieurs centres stratégiquement répartis dans la deuxième région la plus peuplée.',
      },
      {
        name: 'Provence-Alpes-Côte d\'Azur',
        villes: ['Marseille (13)', 'Nice (06)', 'Toulon (83)', 'Avignon (84)', 'Aix-en-Provence (13)'],
        description: 'Réseau dense de centres couvrant tout le sud-est de la France.',
      },
      {
        name: 'Occitanie',
        villes: ['Toulouse (31)', 'Montpellier (34)', 'Nîmes (30)', 'Perpignan (66)'],
        description: 'Centres accessibles dans toutes les grandes agglomérations du sud-ouest.',
      },
      {
        name: 'Nouvelle-Aquitaine',
        villes: ['Bordeaux (33)', 'Limoges (87)', 'Pau (64)', 'Poitiers (86)'],
        description: 'Couverture complète de cette vaste région avec des centres bien répartis.',
      },
      {
        name: 'Grand Est',
        villes: ['Strasbourg (67)', 'Metz (57)', 'Nancy (54)', 'Reims (51)', 'Mulhouse (68)'],
        description: 'Réseau développé dans l\'est de la France près des frontières.',
      },
      {
        name: 'Hauts-de-France',
        villes: ['Lille (59)', 'Amiens (80)', 'Valenciennes (59)', 'Calais (62)'],
        description: 'Centres stratégiques dans le nord, dont certains proches de la Belgique.',
      },
      {
        name: 'Bretagne',
        villes: ['Rennes (35)', 'Brest (29)', 'Nantes (44)', 'Saint-Brieuc (22)'],
        description: 'Maillage territorial garantissant un accès facile dans toute la région.',
      },
      {
        name: 'Normandie',
        villes: ['Rouen (76)', 'Le Havre (76)', 'Caen (14)'],
        description: 'Centres couvrant les deux départements normands principaux.',
      },
      {
        name: 'Outre-mer',
        villes: ['Fort-de-France (972)', 'Pointe-à-Pitre (971)', 'Saint-Denis (974)', 'Cayenne (973)', 'Nouméa (988)'],
        description: 'Les départements et territoires d\'outre-mer sont également équipés de centres agréés.',
      },
    ],
  },

  infosPratiques: {
    title: 'Informations pratiques',
    items: [
      {
        icon: '📅',
        title: 'Fréquence des sessions',
        content: 'Sessions hebdomadaires dans les grandes villes, bimensuelles dans les villes moyennes. Réservez 3-6 semaines à l\'avance.',
      },
      {
        icon: '💰',
        title: 'Tarif de l\'examen',
        content: 'Entre 100€ et 150€ selon les centres. Paiement en ligne sécurisé lors de l\'inscription.',
      },
      {
        icon: '⏱️',
        title: 'Durée de l\'examen',
        content: '1h30 pour répondre aux 40 questions QCM. Arrivée 30 minutes avant le début pour les formalités.',
      },
      {
        icon: '📋',
        title: 'Résultats',
        content: 'Attestation délivrée immédiatement après l\'examen. Résultat officiel sous 48-72h par email et courrier.',
      },
      {
        icon: '🔄',
        title: 'En cas d\'échec',
        content: 'Possibilité de repasser l\'examen sans délai d\'attente minimum. Préparez-vous mieux avec nos tests gratuits.',
      },
      {
        icon: '♿',
        title: 'Accessibilité PMR',
        content: 'Tous les centres sont accessibles aux personnes à mobilité réduite. Temps additionnel disponible sur justificatif.',
      },
    ],
  },

  preparationEfficace: {
    title: 'Comment se préparer efficacement ?',
    content: `Avec un **seuil de réussite à 80%** (32 bonnes réponses sur 40), la préparation est essentielle. Notre plateforme vous offre tous les outils pour maximiser vos chances :`,
    features: [
      {
        title: '800+ questions officielles',
        description: 'Entraînez-vous avec toutes les questions conformes au référentiel officiel 2025-2026',
      },
      {
        title: 'Examens blancs chronométrés',
        description: 'Simulez les conditions réelles de l\'examen pour gérer votre temps efficacement',
      },
      {
        title: 'Correction détaillée',
        description: 'Comprenez vos erreurs avec des explications complètes pour chaque question',
      },
      {
        title: 'Suivi de progression',
        description: 'Visualisez vos points forts et faibles par thématique pour cibler vos révisions',
      },
      {
        title: 'Flashcards interactives',
        description: 'Mémorisez les dates, symboles et valeurs clés avec notre système de répétition espacée',
      },
      {
        title: 'Taux de réussite 95%',
        description: 'Nos utilisateurs préparés obtiennent un taux de réussite exceptionnel dès le premier passage',
      },
    ],
    cta: {
      text: 'Commencer ma préparation gratuite',
      href: '/signup',
    },
  },

  conseilsReussite: {
    title: 'Nos 10 conseils pour réussir',
    tips: [
      '**Inscrivez-vous tôt** : Les créneaux partent vite, surtout dans les grandes villes',
      '**Préparez-vous sérieusement** : 2-4 semaines de préparation régulière sont recommandées',
      '**Maîtrisez les 5 thématiques** : Principes, institutions, droits/devoirs, histoire/culture, vie quotidienne',
      '**Pratiquez les QCM** : Familiarisez-vous avec le format et le type de questions',
      '**Gérez votre temps** : 1h30 pour 40 questions = 2min15 par question maximum',
      '**Arrivez en avance** : 30 minutes avant pour les formalités et vous installer sereinement',
      '**Apportez une pièce d\'identité valide** : Sans elle, vous ne pourrez pas passer l\'examen',
      '**Lisez attentivement chaque question** : Ne vous précipitez pas, les réponses peuvent être subtiles',
      '**Répondez à toutes les questions** : Pas de points négatifs, tentez votre chance même si vous hésitez',
      '**Restez calme et confiant** : Une bonne préparation vous garantit le succès',
    ],
  },

  faq: {
    title: 'Questions fréquentes',
    questions: [
      {
        q: 'Combien de temps à l\'avance dois-je m\'inscrire ?',
        r: '3 à 6 semaines à l\'avance dans les grandes villes, 2 à 3 semaines dans les villes moyennes. Les places sont limitées, ne tardez pas.',
      },
      {
        q: 'Puis-je choisir n\'importe quel centre en France ?',
        r: 'Oui, vous pouvez passer l\'examen dans n\'importe quel centre agréé, quelle que soit votre région de résidence.',
      },
      {
        q: 'Que se passe-t-il si je ne peux pas venir le jour J ?',
        r: 'Contactez le centre rapidement. Certains centres permettent un report sous conditions. Sinon, vous devrez vous réinscrire et payer à nouveau.',
      },
      {
        q: 'L\'attestation de réussite est-elle valable à vie ?',
        r: 'L\'attestation n\'a pas de durée de validité limitée. Conservez-la précieusement pour vos démarches administratives.',
      },
      {
        q: 'Puis-je utiliser des documents pendant l\'examen ?',
        r: 'Non, aucun document n\'est autorisé. L\'examen se déroule sans support, seul un stylo vous sera fourni.',
      },
      {
        q: 'Y a-t-il des aménagements pour les personnes en situation de handicap ?',
        r: 'Oui, temps additionnel, salle adaptée et assistance disponibles sur présentation d\'un justificatif médical.',
      },
    ],
  },

  conclusion: {
    title: 'Ne perdez plus de temps',
    content: `La publication de la **liste officielle des centres agréés 2026** est une excellente nouvelle pour tous les candidats. Avec plus de centres, plus de sessions et une inscription simplifiée, il n'a jamais été aussi facile de passer le test civique.

**N'attendez pas pour réserver votre session** : les places dans les centres les plus demandés partent rapidement. Et surtout, **préparez-vous sérieusement** pour maximiser vos chances de réussite dès le premier passage.`,
    cta: {
      primary: {
        text: 'Voir les centres disponibles',
        href: 'https://francais.cci-paris-idf.fr/candidat',
      },
      secondary: {
        text: 'Commencer ma préparation',
        href: '/signup',
      },
    },
  },

  sources: {
    title: 'Source officielle',
    content: 'Toutes les informations détaillées sur les centres d\'examen, les dates disponibles, les modalités d\'inscription et les tarifs sont consultables sur la plateforme officielle de la CCI Paris Île-de-France, organisme agréé par l\'État français pour l\'organisation du test civique sur l\'ensemble du territoire.',
    mainLink: {
      text: '📋 Consulter la liste complète des centres agréés et réserver votre session d\'examen',
      href: 'https://francais.cci-paris-idf.fr/candidat',
    },
    additionalLinks: [
      {
        text: 'Décret n° 2025-647 du 15 juillet 2025 - Légifrance',
        href: 'https://www.legifrance.gouv.fr',
      },
      {
        text: 'CESEDA Article R.413-12-1 - Service-Public.fr',
        href: 'https://www.service-public.fr',
      },
      {
        text: 'Naturalisation française : conditions - Service-Public.fr',
        href: 'https://www.service-public.fr/particuliers/vosdroits/F2213',
      },
    ],
  },

  seoKeywords: [
    'centres examen civique 2026',
    'où passer test civique',
    'liste centres agréés test civique',
    'centres test civique france',
    'inscription examen civique 2026',
    'centres agréés naturalisation',
    'test civique paris lyon marseille',
    'réserver session test civique',
    'centres examen naturalisation 2026',
    'CCI Paris test civique',
    'calendrier sessions test civique',
    'centres test civique outre-mer',
    'examen civique grande ville',
    'où s\'inscrire test civique',
    'centres accessibles PMR test civique',
  ],
};
