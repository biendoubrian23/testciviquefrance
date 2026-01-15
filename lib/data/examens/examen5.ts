// ==================== EXAMEN BLANC #5 ====================
// Répartition officielle :
// 1. Principes et valeurs (11 questions)
// 2. Système institutionnel (6 questions)
// 3. Droits et devoirs (11 questions)
// 4. Histoire/géographie/culture (8 questions)
// 5. Vivre en France (4 questions)
// ==========================================================================
// VERSION NON ENCODÉE - Questions difficiles niveau examen civique
// ==========================================================================

import { ExamenBlanc, Question, hashAnswer } from './types';

const EXAM_NUMBER = 5;

const questions: Question[] = [
  // ==================== 1. PRINCIPES ET VALEURS (11 questions) ====================
  
  {
    id: 1,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Indivisibilité République",
    question: "Que signifie le principe d'indivisibilité de la République inscrit à l'article 1er de la Constitution ?",
    options: [
      "La souveraineté appartient au peuple dans son ensemble ; aucune région ne peut revendiquer une souveraineté distincte",
      "Le territoire français ne peut jamais être modifié, même en cas de référendum local approuvé",
      "Les citoyens ne peuvent pas être divisés en catégories sociales ou professionnelles distinctes",
      "Le Président de la République ne peut pas être destitué pendant la durée de son mandat"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 1, 0),
    explication: "L'indivisibilité signifie que la souveraineté est une et appartient au peuple dans son ensemble. Aucune partie du territoire ne peut revendiquer une souveraineté propre."
  },
  {
    id: 2,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Sceau République",
    question: "Que représente le sceau de la République française et quand est-il utilisé ?",
    options: [
      "La Liberté assise avec un faisceau de licteur ; il authentifie les actes les plus solennels de la République",
      "Marianne debout portant le drapeau tricolore ; il est apposé sur tous les documents administratifs",
      "Un coq gaulois sur un bouclier ; il est utilisé uniquement pour les actes diplomatiques",
      "Les trois couleurs nationales en rosace ; il certifie les documents judiciaires exclusivement"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 2, 0),
    explication: "Le sceau de la République représente la Liberté assise tenant un faisceau de licteur. Il est utilisé pour sceller les actes les plus solennels (Constitution, traités...)."
  },
  {
    id: 3,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Fête de la Fédération",
    question: "Quel événement le 14 juillet commémore-t-il officiellement depuis la loi de 1880 ?",
    options: [
      "La Fête de la Fédération du 14 juillet 1790, symbole de l'unité nationale autour des valeurs révolutionnaires",
      "La prise de la Bastille du 14 juillet 1789, symbole de la révolte contre l'absolutisme royal",
      "Les deux événements à la fois, associant la révolte populaire et la réconciliation nationale",
      "L'abolition de la royauté le 14 juillet 1792 et la proclamation de la Première République"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 3, 0),
    explication: "Officiellement, c'est la Fête de la Fédération du 14 juillet 1790 qui est commémorée, symbole de réconciliation nationale, même si la prise de la Bastille reste dans les mémoires."
  },
  {
    id: 4,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Loi de 1905",
    question: "Quel article de la loi de 1905 garantit la liberté de conscience et le libre exercice des cultes ?",
    options: [
      "L'article 1er, qui affirme que la République assure la liberté de conscience et garantit le libre exercice des cultes",
      "L'article 9, qui interdit toute discrimination fondée sur les croyances religieuses des citoyens",
      "L'article 5, qui prévoit la neutralité absolue de l'État envers toutes les religions reconnues",
      "L'article 12, qui autorise l'enseignement religieux dans les établissements scolaires publics"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 4, 0),
    explication: "L'article 1er de la loi de 1905 affirme : 'La République assure la liberté de conscience. Elle garantit le libre exercice des cultes.'"
  },
  {
    id: 5,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Aumôneries",
    question: "Des aumôneries peuvent-elles exister dans certains établissements publics malgré la laïcité ?",
    options: [
      "Oui, dans les prisons, hôpitaux, casernes et internats, pour garantir le libre exercice du culte des personnes retenues",
      "Non, la présence de religieux est totalement interdite dans tous les établissements publics français",
      "Oui, mais uniquement pour les religions historiquement présentes en France depuis le Concordat",
      "Non, les personnes souhaitant pratiquer doivent obligatoirement sortir des établissements publics"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 5, 0),
    explication: "Des aumôneries existent dans les prisons, hôpitaux, casernes et internats pour permettre aux personnes qui ne peuvent pas sortir librement de pratiquer leur culte."
  },
  {
    id: 6,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité devant l'impôt",
    question: "Que signifie le principe d'égalité devant les charges publiques affirmé par la Constitution ?",
    options: [
      "Les impôts sont répartis selon les capacités contributives de chacun, proportionnellement aux revenus et au patrimoine",
      "Tous les citoyens doivent payer exactement le même montant d'impôts, quel que soit leur revenu",
      "Seuls les citoyens les plus riches contribuent aux charges publiques pour financer les services",
      "Les charges publiques ne concernent que les entreprises, les particuliers étant exonérés d'impôts"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 6, 0),
    explication: "L'égalité devant les charges publiques signifie que les impôts sont répartis selon les capacités contributives. C'est le principe de progressivité de l'impôt."
  },
  {
    id: 7,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation embauche",
    question: "Un employeur peut-il vous demander votre âge lors d'un entretien d'embauche ?",
    options: [
      "Il peut le demander, mais ne peut pas refuser de vous embaucher en raison de votre âge, ce serait une discrimination",
      "Non, la date de naissance est une donnée personnelle qui ne peut jamais être communiquée à un employeur",
      "Oui, l'employeur peut exiger de connaître votre âge et refuser les candidats trop jeunes ou trop âgés",
      "Non, sauf pour les emplois de la fonction publique soumis à des limites d'âge réglementaires"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 7, 0),
    explication: "L'employeur peut demander l'âge, mais refuser un candidat en raison de son âge constitue une discrimination interdite, sauf exceptions légales (majorité requise, etc.)."
  },
  {
    id: 8,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Parité politique",
    question: "La loi impose-t-elle la parité hommes-femmes dans les candidatures aux élections ?",
    options: [
      "Oui, la loi oblige à présenter autant de femmes que d'hommes pour certains scrutins de liste, sous peine de pénalités financières",
      "Non, la parité est encouragée mais reste un objectif sans contrainte juridique ni sanction",
      "Oui, tous les élus doivent obligatoirement être des femmes pour rattraper le retard historique",
      "Non, la Constitution interdit toute mesure favorisant un sexe au nom de l'égalité stricte"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 8, 0),
    explication: "La loi impose la parité dans les listes de candidats pour les scrutins de liste (municipales, régionales, européennes...). Des pénalités financières sanctionnent le non-respect."
  },
  {
    id: 9,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Défenseur droits saisine",
    question: "Qui peut saisir le Défenseur des droits et cette démarche est-elle gratuite ?",
    options: [
      "Toute personne s'estimant lésée par un service public ou une discrimination peut le saisir gratuitement et directement",
      "Seuls les avocats peuvent saisir le Défenseur des droits pour leurs clients moyennant des frais de dossier",
      "Uniquement les citoyens français majeurs peuvent déposer une réclamation auprès de cette institution",
      "Le Défenseur des droits ne peut être saisi que par le Premier ministre ou le président du Parlement"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 9, 0),
    explication: "Toute personne, française ou étrangère, peut saisir gratuitement et directement le Défenseur des droits si elle s'estime lésée par un service public ou victime de discrimination."
  },
  {
    id: 10,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Consentement mariage",
    question: "Quelle condition est indispensable pour que le mariage civil soit valable en France ?",
    options: [
      "Le consentement libre et éclairé des deux époux, exprimé personnellement devant l'officier d'état civil",
      "L'accord préalable des parents des deux époux, quelle que soit la majorité des futurs mariés",
      "La possession d'un patrimoine minimum permettant de subvenir aux besoins du futur ménage",
      "La célébration d'une cérémonie religieuse préalable reconnue par l'État français"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 10, 0),
    explication: "Le mariage civil nécessite le consentement libre et éclairé des deux époux. Sans ce consentement personnel et non contraint, le mariage peut être annulé."
  },
  {
    id: 11,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Violence morale",
    question: "Les violences psychologiques au sein du couple sont-elles punies par la loi française ?",
    options: [
      "Oui, les violences psychologiques répétées sont un délit puni de 3 ans d'emprisonnement et 45 000 euros d'amende",
      "Non, seules les violences physiques laissant des traces visibles sont sanctionnées pénalement",
      "Oui, mais uniquement si elles sont commises devant des témoins pouvant attester des faits",
      "Non, les violences morales relèvent du civil et ne peuvent donner lieu qu'à des dommages et intérêts"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 11, 0),
    explication: "Les violences psychologiques répétées au sein du couple sont un délit depuis 2010. Elles sont punies de 3 ans d'emprisonnement et 45 000 euros d'amende."
  },

  // ==================== 2. SYSTÈME INSTITUTIONNEL (6 questions) ====================
  
  {
    id: 12,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Dissolution Assemblée",
    question: "Dans quelles conditions le Président de la République peut-il dissoudre l'Assemblée nationale ?",
    options: [
      "À tout moment après consultation du Premier ministre et des présidents des assemblées, mais pas deux fois en un an",
      "Uniquement après un vote de défiance du Parlement contre le Gouvernement en place",
      "Jamais, la dissolution de l'Assemblée nationale est interdite par la Constitution de 1958",
      "Seulement en cas de guerre ou de crise grave menaçant les institutions de la République"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 12, 0),
    explication: "Le Président peut dissoudre l'Assemblée nationale après consultation (non avis conforme) du Premier ministre et des présidents des assemblées. Une nouvelle dissolution est interdite dans l'année suivante."
  },
  {
    id: 13,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Motion de censure",
    question: "Qu'est-ce qu'une motion de censure et quelles sont les conditions de son adoption ?",
    options: [
      "Une procédure permettant à l'Assemblée nationale de renverser le Gouvernement, nécessitant la majorité absolue des députés",
      "Un texte du Sénat critiquant la politique gouvernementale sans conséquence juridique directe",
      "Une sanction du Conseil constitutionnel contre une loi jugée contraire aux droits fondamentaux",
      "Un avertissement du Président de la République au Premier ministre sans effet sur le Gouvernement"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 13, 0),
    explication: "La motion de censure permet à l'Assemblée nationale de renverser le Gouvernement. Elle doit être votée par la majorité absolue des députés."
  },
  {
    id: 14,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Conseil constitutionnel composition",
    question: "Comment sont nommés les membres du Conseil constitutionnel ?",
    options: [
      "Trois par le Président, trois par le président de l'Assemblée, trois par le président du Sénat, pour un mandat de 9 ans",
      "Tous élus par le Parlement réuni en Congrès à la majorité des deux tiers pour un mandat de 7 ans",
      "Nommés par le Premier ministre sur proposition du ministre de la Justice pour un mandat à vie",
      "Désignés par tirage au sort parmi les magistrats de la Cour de cassation pour un mandat de 5 ans"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 14, 0),
    explication: "Le Conseil constitutionnel comprend 9 membres : 3 nommés par le Président, 3 par le président de l'Assemblée, 3 par le président du Sénat, pour 9 ans non renouvelables."
  },
  {
    id: 15,
    categorie: "Système institutionnel et politique",
    sousCategorie: "QPC",
    question: "Qu'est-ce qu'une Question Prioritaire de Constitutionnalité (QPC) ?",
    options: [
      "Le droit pour tout justiciable de contester la conformité d'une loi aux droits et libertés garantis par la Constitution",
      "Une procédure permettant au Parlement de saisir le Conseil constitutionnel avant le vote d'une loi",
      "Un recours du Président de la République contre une décision de justice jugée contraire à la Constitution",
      "Une question posée par les citoyens lors des référendums sur la modification de la Constitution"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 15, 0),
    explication: "La QPC (depuis 2010) permet à tout justiciable, dans un procès, de contester la conformité d'une loi applicable aux droits et libertés garantis par la Constitution."
  },
  {
    id: 16,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Commune maire",
    question: "Comment le maire d'une commune est-il élu et qui le nomme officiellement ?",
    options: [
      "Élu par le conseil municipal parmi ses membres lors de la première réunion suivant les élections municipales",
      "Élu directement par les habitants de la commune au suffrage universel lors d'un scrutin séparé",
      "Nommé par le préfet de département sur proposition du conseil municipal après les élections",
      "Désigné automatiquement comme le candidat ayant obtenu le plus de voix aux élections municipales"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 16, 0),
    explication: "Le maire est élu par le conseil municipal parmi ses membres lors de la première réunion suivant les élections municipales. Il n'est pas élu directement par les habitants."
  },
  {
    id: 17,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Intercommunalité",
    question: "Qu'est-ce qu'une intercommunalité (EPCI) et quel est son rôle ?",
    options: [
      "Un regroupement de communes exerçant des compétences en commun comme les transports, les déchets ou le développement économique",
      "Un service de l'État coordonnant les actions des différentes communes d'un même département",
      "Une association de maires se réunissant pour défendre les intérêts des petites communes rurales",
      "Un tribunal administratif spécialisé dans les litiges entre communes voisines sur le territoire"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 17, 0),
    explication: "Les EPCI (Établissements Publics de Coopération Intercommunale) regroupent des communes pour exercer des compétences en commun (transports, déchets, eau, développement économique...)."
  },

  // ==================== 3. DROITS ET DEVOIRS (11 questions) ====================
  
  {
    id: 18,
    categorie: "Droits et devoirs",
    sousCategorie: "Liberté d'expression limites",
    question: "Quelles sont les limites à la liberté d'expression en France ?",
    options: [
      "La diffamation, l'injure, la provocation à la haine, l'apologie du terrorisme et le négationnisme sont interdits",
      "Aucune limite n'existe, la liberté d'expression est absolue et ne peut jamais être restreinte",
      "Seules les critiques envers le Président de la République et les institutions sont interdites",
      "Les opinions politiques peuvent être exprimées, mais pas les opinions religieuses ou philosophiques"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 18, 0),
    explication: "La liberté d'expression a des limites : diffamation, injure, provocation à la haine raciale ou religieuse, apologie du terrorisme, négationnisme sont punis par la loi."
  },
  {
    id: 19,
    categorie: "Droits et devoirs",
    sousCategorie: "RGPD droits",
    question: "Quels droits le RGPD accorde-t-il aux citoyens concernant leurs données personnelles ?",
    options: [
      "Droit d'accès, de rectification, d'effacement, de portabilité et d'opposition au traitement de leurs données",
      "Uniquement le droit de savoir si une entreprise détient des données, sans pouvoir les modifier",
      "Le droit de vendre ses données personnelles aux entreprises intéressées par ces informations",
      "Aucun droit particulier, les entreprises peuvent utiliser librement toutes les données collectées"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 19, 0),
    explication: "Le RGPD accorde des droits aux citoyens : accès à leurs données, rectification des erreurs, effacement (droit à l'oubli), portabilité et opposition au traitement."
  },
  {
    id: 20,
    categorie: "Droits et devoirs",
    sousCategorie: "Allocation chômage",
    question: "Quelles sont les conditions pour bénéficier de l'allocation chômage (ARE) en France ?",
    options: [
      "Avoir travaillé au moins 6 mois sur les 24 derniers mois, être inscrit à France Travail et chercher activement un emploi",
      "Avoir travaillé au moins 5 ans sans interruption chez le même employeur avant le licenciement",
      "Être français et avoir plus de 25 ans, sans condition de durée de travail préalable",
      "Avoir démissionné de son emploi et déposer une demande auprès de la Sécurité sociale"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 20, 0),
    explication: "Pour l'ARE, il faut avoir travaillé au moins 6 mois sur les 24 derniers mois (ou 36 pour les plus de 53 ans), être inscrit à France Travail et chercher activement un emploi."
  },
  {
    id: 21,
    categorie: "Droits et devoirs",
    sousCategorie: "Droit de grève",
    question: "Le droit de grève est-il garanti en France et quelles sont ses limites ?",
    options: [
      "Oui, c'est un droit constitutionnel, mais il peut être limité pour assurer la continuité des services publics essentiels",
      "Non, le droit de grève a été supprimé par une réforme récente du Code du travail français",
      "Oui, mais uniquement pour les salariés du secteur privé, les fonctionnaires n'y ont pas droit",
      "Non, les grèves sont illégales et les grévistes peuvent être immédiatement licenciés sans préavis"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 21, 0),
    explication: "Le droit de grève est un droit constitutionnel. Il peut être réglementé pour assurer la continuité des services publics essentiels (hôpitaux, transports, etc.)."
  },
  {
    id: 22,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation santé",
    question: "Un médecin peut-il refuser de vous soigner en raison de vos origines ou de votre religion ?",
    options: [
      "Non, c'est interdit ; tout refus de soins discriminatoire est puni par la loi et par le code de déontologie médicale",
      "Oui, le médecin libéral peut choisir ses patients selon ses préférences personnelles sans restriction",
      "Non, sauf s'il s'agit d'un médecin exerçant dans un établissement privé à caractère confessionnel",
      "Oui, mais uniquement si le patient n'est pas couvert par l'assurance maladie obligatoire"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 22, 0),
    explication: "Un médecin ne peut pas refuser de soigner un patient pour des motifs discriminatoires. C'est puni par la loi et contraire au code de déontologie médicale."
  },
  {
    id: 23,
    categorie: "Droits et devoirs",
    sousCategorie: "Délai de rétractation",
    question: "De combien de jours disposez-vous pour vous rétracter après un achat à distance ?",
    options: [
      "14 jours à compter de la réception du bien ou de la conclusion du contrat pour les services, sans justification",
      "7 jours ouvrables uniquement pour les produits défectueux nécessitant un échange ou remboursement",
      "30 jours mais uniquement si le vendeur propose une garantie « satisfait ou remboursé » explicite",
      "Aucun délai, une fois la commande passée, l'acheteur est définitivement engagé contractuellement"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 23, 0),
    explication: "Pour tout achat à distance (internet, téléphone), vous disposez de 14 jours pour vous rétracter sans avoir à justifier votre décision ni payer de pénalités."
  },
  {
    id: 24,
    categorie: "Droits et devoirs",
    sousCategorie: "Secret professionnel",
    question: "Quelles professions sont soumises au secret professionnel par la loi ?",
    options: [
      "Médecins, avocats, notaires, assistants sociaux et autres professions définies par la loi, sous peine de sanctions pénales",
      "Uniquement les agents de l'État dans l'exercice de leurs fonctions publiques administratives",
      "Tous les salariés du secteur privé vis-à-vis de leur employeur et de leurs collègues",
      "Aucune profession n'est légalement tenue au secret, c'est une obligation morale sans sanction"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 24, 0),
    explication: "Le secret professionnel est imposé par la loi à certaines professions (médecins, avocats, notaires, assistants sociaux...). Sa violation est punie pénalement."
  },
  {
    id: 25,
    categorie: "Droits et devoirs",
    sousCategorie: "Pension alimentaire",
    question: "Qu'est-ce qu'une pension alimentaire et qui doit la verser ?",
    options: [
      "Une contribution financière versée pour l'entretien et l'éducation d'un enfant par le parent qui n'en a pas la garde principale",
      "Une aide de l'État versée aux familles monoparentales sans condition de ressources ni de revenus",
      "Un impôt prélevé sur les revenus des parents pour financer les cantines scolaires des écoles publiques",
      "Une allocation familiale versée automatiquement à tous les parents d'enfants mineurs scolarisés"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 25, 0),
    explication: "La pension alimentaire est versée par le parent qui n'a pas la garde principale pour contribuer à l'entretien et l'éducation de l'enfant. Son montant est fixé par le juge."
  },
  {
    id: 26,
    categorie: "Droits et devoirs",
    sousCategorie: "Garde alternée",
    question: "Qu'est-ce que la résidence alternée et comment est-elle organisée ?",
    options: [
      "L'enfant vit alternativement chez chacun de ses parents, selon un rythme décidé par accord ou par le juge aux affaires familiales",
      "L'enfant choisit librement chez lequel de ses parents il souhaite vivre sans intervention du juge",
      "Les parents vivent ensemble dans le même logement mais alternent les responsabilités parentales chaque semaine",
      "L'enfant est placé dans une famille d'accueil neutre pour éviter les conflits entre ses deux parents"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 26, 0),
    explication: "La résidence alternée permet à l'enfant de vivre alternativement chez chacun de ses parents. Le rythme est décidé par accord des parents ou par le juge."
  },
  {
    id: 27,
    categorie: "Droits et devoirs",
    sousCategorie: "Adoption conditions",
    question: "Quelles sont les conditions d'âge pour adopter un enfant en France ?",
    options: [
      "Avoir au moins 26 ans pour une adoption plénière, ou 28 ans pour une adoption simple si l'on est célibataire",
      "Avoir exactement le même âge que l'enfant à adopter, plus ou moins 5 ans de différence",
      "Aucune condition d'âge, toute personne majeure peut adopter un enfant sans restriction",
      "Avoir moins de 50 ans car les adoptions sont interdites aux personnes de plus de 50 ans"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 27, 0),
    explication: "Pour adopter, il faut avoir au moins 26 ans (ou 28 ans si célibataire pour l'adoption simple) et avoir au moins 15 ans de plus que l'enfant adopté."
  },
  {
    id: 28,
    categorie: "Droits et devoirs",
    sousCategorie: "Tutelle majeur",
    question: "Qu'est-ce que la tutelle d'un majeur protégé et quand est-elle mise en place ?",
    options: [
      "Une mesure de protection complète pour une personne incapable de gérer seule ses affaires, décidée par le juge des contentieux de la protection",
      "Un simple conseil donné à une personne âgée pour l'aider dans ses démarches administratives quotidiennes",
      "Une procédure permettant aux enfants majeurs de gérer les biens de leurs parents sans leur accord",
      "Un contrat volontaire signé devant notaire par une personne souhaitant déléguer sa gestion patrimoniale"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 28, 0),
    explication: "La tutelle est une mesure de protection pour une personne qui ne peut pas gérer seule ses affaires. Elle est décidée par le juge et implique une représentation complète."
  },

  // ==================== 4. HISTOIRE, GÉOGRAPHIE ET CULTURE (8 questions) ====================
  
  {
    id: 29,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Serment du Jeu de Paume",
    question: "Que s'est-il passé le 20 juin 1789 lors du Serment du Jeu de Paume ?",
    options: [
      "Les députés du Tiers État ont juré de ne pas se séparer avant d'avoir donné une Constitution à la France",
      "Le roi Louis XVI a abdiqué volontairement en faveur de son fils le Dauphin héritier du trône",
      "Les révolutionnaires ont proclamé la République française et aboli définitivement la monarchie",
      "La Déclaration des droits de l'homme et du citoyen a été officiellement adoptée par l'Assemblée"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 29, 0),
    explication: "Le 20 juin 1789, les députés du Tiers État, réunis dans la salle du Jeu de Paume, ont juré de ne pas se séparer avant d'avoir donné une Constitution à la France."
  },
  {
    id: 30,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Abolition esclavage",
    question: "En quelle année l'esclavage a-t-il été définitivement aboli dans les colonies françaises ?",
    options: [
      "En 1848, par décret de Victor Schœlcher sous la Deuxième République, après une première abolition en 1794",
      "En 1789, dès le début de la Révolution française proclamant la liberté et l'égalité de tous",
      "En 1815, lors du retour de la monarchie après la chute de Napoléon Bonaparte",
      "En 1870, avec la proclamation de la Troisième République et la fin du Second Empire"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 30, 0),
    explication: "L'esclavage a été définitivement aboli en 1848 par Victor Schœlcher. Une première abolition en 1794 avait été annulée par Napoléon en 1802."
  },
  {
    id: 31,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Front populaire",
    question: "Quelles avancées sociales majeures sont associées au Front populaire de 1936 ?",
    options: [
      "Les congés payés (2 semaines), la semaine de 40 heures et les conventions collectives entre patronat et syndicats",
      "La création de la Sécurité sociale, le salaire minimum interprofessionnel et l'assurance chômage",
      "Le droit de vote des femmes, l'abolition de la peine de mort et la légalisation du divorce",
      "La nationalisation des grandes entreprises, la création de l'impôt sur le revenu et l'école laïque"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 31, 0),
    explication: "Le Front populaire (1936) a instauré les congés payés (2 semaines), la semaine de 40 heures et les conventions collectives. Des avancées sociales majeures."
  },
  {
    id: 32,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Mont-Blanc",
    question: "Quel est le plus haut sommet de France et des Alpes et quelle est son altitude ?",
    options: [
      "Le Mont-Blanc culminant à 4 807 mètres, plus haut sommet d'Europe occidentale à la frontière franco-italienne",
      "Le Mont Ventoux culminant à 1 912 mètres, célèbre sommet du Tour de France cycliste",
      "Le Puy de Dôme culminant à 1 465 mètres, volcan emblématique du Massif central français",
      "Le Pic du Midi de Bigorre culminant à 2 877 mètres, observatoire astronomique dans les Pyrénées"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 32, 0),
    explication: "Le Mont-Blanc culmine à 4 807 mètres. C'est le plus haut sommet de France, des Alpes et d'Europe occidentale, situé à la frontière franco-italienne."
  },
  {
    id: 33,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Guyane",
    question: "Quelle particularité géographique distingue la Guyane des autres départements français ?",
    options: [
      "C'est le plus grand département français par sa superficie et le seul situé sur le continent sud-américain",
      "C'est le département le plus peuplé de France d'outre-mer avec plus d'un million d'habitants",
      "C'est le seul territoire français situé dans l'hémisphère sud au-delà de l'équateur terrestre",
      "C'est une île volcanique active avec le seul volcan en éruption du territoire français"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 33, 0),
    explication: "La Guyane est le plus grand département français (environ 84 000 km²) et le seul situé sur le continent américain. Elle abrite le Centre spatial guyanais."
  },
  {
    id: 34,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Victor Hugo",
    question: "Victor Hugo est l'auteur de deux romans majeurs de la littérature française. Lesquels ?",
    options: [
      "Les Misérables et Notre-Dame de Paris, chefs-d'œuvre du romantisme français du XIXe siècle",
      "Madame Bovary et L'Éducation sentimentale, romans réalistes décrivant la société provinciale",
      "Germinal et L'Assommoir, œuvres naturalistes dépeignant la condition ouvrière sous le Second Empire",
      "Le Rouge et le Noir et La Chartreuse de Parme, romans d'analyse psychologique et sociale"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 34, 0),
    explication: "Victor Hugo (1802-1885) a écrit Les Misérables et Notre-Dame de Paris. Poète, romancier et homme politique engagé, il repose au Panthéon."
  },
  {
    id: 35,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Impressionnisme",
    question: "Quel mouvement pictural né en France au XIXe siècle a révolutionné l'art occidental ?",
    options: [
      "L'impressionnisme, avec des peintres comme Monet, Renoir et Degas privilégiant la lumière et l'instant",
      "Le cubisme, avec Picasso et Braque décomposant les formes en figures géométriques abstraites",
      "Le surréalisme, explorant l'inconscient et le rêve avec Dalí et Magritte au XXe siècle",
      "Le fauvisme, caractérisé par l'utilisation de couleurs vives et pures avec Matisse et Derain"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 35, 0),
    explication: "L'impressionnisme est né en France vers 1860-1870. Monet, Renoir, Degas, Pissarro, Sisley ont révolutionné la peinture en privilégiant la lumière et l'instant."
  },
  {
    id: 36,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Gastronomie UNESCO",
    question: "Depuis quand et pourquoi le repas gastronomique des Français est-il inscrit à l'UNESCO ?",
    options: [
      "Depuis 2010, reconnu comme patrimoine culturel immatériel de l'humanité pour ses rituels et sa convivialité",
      "Depuis 1980, inscrit au patrimoine mondial pour la qualité exceptionnelle des produits du terroir",
      "Depuis 2000, célébré pour l'excellence des chefs étoilés français et leur rayonnement international",
      "Depuis 1950, protégé comme patrimoine national français sans reconnaissance internationale officielle"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 36, 0),
    explication: "Le repas gastronomique des Français est inscrit au patrimoine culturel immatériel de l'UNESCO depuis 2010. C'est un art de vivre lié aux célébrations."
  },

  // ==================== 5. VIVRE DANS LA SOCIÉTÉ FRANÇAISE (4 questions) ====================
  
  {
    id: 37,
    categorie: "Vivre dans la société française",
    sousCategorie: "CMU-C ACS",
    question: "Qu'est-ce que la Complémentaire Santé Solidaire (ex-CMU-C) et à qui s'adresse-t-elle ?",
    options: [
      "Une aide permettant aux personnes à faibles revenus de bénéficier d'une complémentaire santé gratuite ou à moindre coût",
      "Une assurance obligatoire pour tous les salariés souscrite par leur employeur auprès d'une mutuelle",
      "Un remboursement supplémentaire de la Sécurité sociale pour les maladies graves et chroniques",
      "Une carte donnant accès gratuit aux hôpitaux publics sans condition de ressources ni de revenus"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 37, 0),
    explication: "La Complémentaire Santé Solidaire permet aux personnes à faibles revenus de bénéficier d'une complémentaire santé gratuite ou à moins d'un euro par jour."
  },
  {
    id: 38,
    categorie: "Vivre dans la société française",
    sousCategorie: "Carte grise",
    question: "Quel document est obligatoire pour pouvoir circuler avec un véhicule en France ?",
    options: [
      "Le certificat d'immatriculation (carte grise), qui doit correspondre au véhicule et être à jour de l'adresse",
      "Un simple justificatif d'assurance suffit, le certificat d'immatriculation étant facultatif",
      "Le permis de conduire du propriétaire du véhicule est le seul document obligatoire à présenter",
      "Aucun document n'est requis si le véhicule a été acheté d'occasion depuis moins d'un an"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 38, 0),
    explication: "Le certificat d'immatriculation (carte grise) est obligatoire pour circuler. Il doit être à jour (adresse, propriétaire) et présenté en cas de contrôle."
  },
  {
    id: 39,
    categorie: "Vivre dans la société française",
    sousCategorie: "SMIC",
    question: "Qu'est-ce que le SMIC et comment son montant est-il déterminé ?",
    options: [
      "Le Salaire Minimum Interprofessionnel de Croissance, réévalué au moins une fois par an par le gouvernement",
      "Un salaire de référence indicatif sans valeur obligatoire pour les employeurs du secteur privé",
      "Le salaire moyen des Français, calculé par l'INSEE chaque année pour les statistiques nationales",
      "Une prime exceptionnelle versée par l'État aux travailleurs les moins bien rémunérés"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 39, 0),
    explication: "Le SMIC (Salaire Minimum Interprofessionnel de Croissance) est le salaire horaire minimum légal. Il est réévalué au moins une fois par an par le gouvernement."
  },
  {
    id: 40,
    categorie: "Vivre dans la société française",
    sousCategorie: "Taxe d'habitation",
    question: "La taxe d'habitation sur les résidences principales existe-t-elle encore en France ?",
    options: [
      "Non, elle a été progressivement supprimée et est totalement abolie pour les résidences principales depuis 2023",
      "Oui, elle reste due par tous les occupants d'un logement au 1er janvier de chaque année",
      "Non, elle a été remplacée par une taxe sur les loyers payée uniquement par les propriétaires bailleurs",
      "Oui, mais uniquement pour les ménages dont les revenus dépassent un certain seuil fiscal"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 40, 0),
    explication: "La taxe d'habitation sur les résidences principales a été supprimée progressivement et est totalement abolie depuis 2023. Elle reste due pour les résidences secondaires."
  }
];

export const EXAMEN_5: ExamenBlanc = {
  numero: 5,
  titre: "Examen blanc #5",
  description: "40 questions en conditions réelles d'examen",
  questions: questions,
  dureeMinutes: 45,
  totalQuestions: 40
};
