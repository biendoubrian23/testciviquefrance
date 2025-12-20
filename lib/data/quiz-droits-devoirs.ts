// =====================================================
// QUESTIONS - DROITS ET DEVOIRS
// Niveaux 1-4: 10 questions, Niveaux 5-10: 5 questions
// Version hashée côté client
// =====================================================

// Fonction de hash simple (djb2) - identique aux autres quiz
function hashAnswer(questionId: number, answerIndex: number): string {
  const str = `q${questionId}_a${answerIndex}_civique2024`;
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16);
}

export interface QuizQuestion {
  id: number;
  niveau: number;
  question: string;
  options: string[];
  correctHash: string;
  explication: string;
}

// ==================== NIVEAU 1 : LES DROITS FONDAMENTAUX AVANCÉS ====================
const NIVEAU_1: QuizQuestion[] = [
  {
    id: 2001,
    niveau: 1,
    question: "Quels sont les textes qui composent le bloc de constitutionnalité en matière de droits fondamentaux ?",
    options: [
      "La DDHC de 1789, le Préambule de 1946, la Constitution de 1958 et la Charte de l'environnement",
      "Uniquement la Déclaration des droits de l'homme de 1789",
      "Le Code civil et le Code pénal",
      "Les traités européens uniquement"
    ],
    correctHash: hashAnswer(2001, 0),
    explication: "Le bloc de constitutionnalité comprend la Déclaration de 1789 (droits civils et politiques), le Préambule de 1946 (droits économiques et sociaux), la Constitution de 1958 et la Charte de l'environnement de 2004."
  },
  {
    id: 2002,
    niveau: 1,
    question: "Qu'est-ce que la Question Prioritaire de Constitutionnalité (QPC) ?",
    options: [
      "Un moyen pour tout justiciable de contester la constitutionnalité d'une loi devant le Conseil constitutionnel",
      "Une question posée au Président de la République",
      "Un référendum constitutionnel",
      "Une procédure réservée aux députés"
    ],
    correctHash: hashAnswer(2002, 0),
    explication: "La QPC, créée en 2008, permet à tout citoyen de saisir indirectement le Conseil constitutionnel, via une juridiction, pour contester une loi qui porterait atteinte aux droits et libertés garantis par la Constitution."
  },
  {
    id: 2003,
    niveau: 1,
    question: "Quels sont les critères de discrimination interdits par la loi française ?",
    options: [
      "Plus de 25 critères : origine, sexe, âge, handicap, religion, orientation sexuelle, apparence physique, etc.",
      "Seulement le sexe et l'origine",
      "Uniquement 5 critères principaux",
      "Cela dépend des secteurs d'activité"
    ],
    correctHash: hashAnswer(2003, 0),
    explication: "L'article 225-1 du Code pénal liste plus de 25 critères de discrimination interdits, incluant l'origine, le sexe, la situation de famille, la grossesse, l'apparence physique, le patronyme, le lieu de résidence, l'état de santé, le handicap, les opinions politiques, etc."
  },
  {
    id: 2004,
    niveau: 1,
    question: "Quel principe juridique empêche de punir une personne pour un acte qui n'était pas interdit au moment des faits ?",
    options: [
      "Le principe de non-rétroactivité de la loi pénale",
      "La présomption d'innocence",
      "Le droit au silence",
      "L'habeas corpus"
    ],
    correctHash: hashAnswer(2004, 0),
    explication: "Le principe de non-rétroactivité de la loi pénale, issu de l'article 8 de la DDHC, interdit de condamner une personne pour un acte qui n'était pas légalement interdit au moment où elle l'a commis."
  },
  {
    id: 2005,
    niveau: 1,
    question: "Qui est le Défenseur des droits et quelle est sa fonction principale ?",
    options: [
      "Une autorité indépendante qui protège les droits des citoyens face à l'administration et lutte contre les discriminations",
      "Le ministre de la Justice",
      "Un avocat commis d'office",
      "Le Président du Conseil constitutionnel"
    ],
    correctHash: hashAnswer(2005, 0),
    explication: "Le Défenseur des droits est une autorité constitutionnelle indépendante créée en 2011. Il peut être saisi par tout citoyen qui s'estime lésé par une administration ou victime de discrimination."
  },
  {
    id: 2006,
    niveau: 1,
    question: "Qu'est-ce que l'obligation de non-assistance à personne en danger prévue par le Code pénal ?",
    options: [
      "Un délit puni de 5 ans de prison et 75 000 € d'amende pour celui qui n'aide pas une personne en péril",
      "Un simple conseil moral sans conséquence légale",
      "Un devoir applicable uniquement aux professionnels de santé",
      "Une règle sans sanction pénale"
    ],
    correctHash: hashAnswer(2006, 0),
    explication: "L'article 223-6 du Code pénal punit la non-assistance à personne en péril de 5 ans d'emprisonnement et 75 000 € d'amende. C'est un devoir citoyen de porter assistance ou d'alerter les secours."
  },
  {
    id: 2007,
    niveau: 1,
    question: "Qu'est-ce que la Charte de l'environnement de 2004 a introduit dans le droit français ?",
    options: [
      "Le droit de vivre dans un environnement sain et le devoir de préserver l'environnement",
      "L'interdiction des véhicules polluants",
      "La création du ministère de l'Écologie",
      "Le recyclage obligatoire"
    ],
    correctHash: hashAnswer(2007, 0),
    explication: "La Charte de l'environnement, à valeur constitutionnelle depuis 2005, consacre le droit à un environnement équilibré et le principe de précaution. Elle crée aussi un devoir pour chacun de participer à la préservation de l'environnement."
  },
  {
    id: 2008,
    niveau: 1,
    question: "Quelle est la durée maximale de la garde à vue en droit commun ?",
    options: [
      "24 heures, renouvelable une fois (48 heures maximum)",
      "72 heures sans renouvellement",
      "12 heures maximum",
      "1 semaine"
    ],
    correctHash: hashAnswer(2008, 0),
    explication: "En droit commun, la garde à vue dure 24 heures, renouvelable une fois sur autorisation du procureur (48h au total). Elle peut être prolongée à 96h ou 144h pour des infractions spécifiques (terrorisme, criminalité organisée)."
  },
  {
    id: 2009,
    niveau: 1,
    question: "Qu'est-ce que le principe d'égal accès aux emplois publics garanti par l'article 6 de la DDHC ?",
    options: [
      "Le droit pour tout citoyen de postuler aux emplois publics sans autre distinction que ses capacités et talents",
      "L'obligation d'embaucher 50% d'hommes et 50% de femmes",
      "Le recrutement réservé aux personnes diplômées",
      "L'accès automatique aux emplois publics"
    ],
    correctHash: hashAnswer(2009, 0),
    explication: "L'article 6 de la DDHC garantit que tous les citoyens sont également admissibles aux dignités, places et emplois publics, selon leurs capacités et sans autre distinction que leurs vertus et talents. C'est le fondement du concours administratif."
  },
  {
    id: 2010,
    niveau: 1,
    question: "Quel texte a instauré la contribution aux charges publiques selon les capacités de chacun ?",
    options: [
      "L'article 13 de la Déclaration des droits de l'homme de 1789",
      "Le Code général des impôts de 1950",
      "La Constitution de 1958",
      "Le traité de Maastricht"
    ],
    correctHash: hashAnswer(2010, 0),
    explication: "L'article 13 de la DDHC de 1789 établit que « la contribution commune doit être également répartie entre tous les citoyens, en raison de leurs facultés ». C'est le fondement de l'impôt progressif et de la solidarité nationale."
  },
];

// ==================== NIVEAU 2 : LES DEVOIRS DU CITOYEN ====================
const NIVEAU_2: QuizQuestion[] = [
  {
    id: 2011,
    niveau: 2,
    question: "Quel est le premier devoir du citoyen français ?",
    options: [
      "Respecter les lois de la République",
      "Payer le plus d'impôts possible",
      "Voter à toutes les élections",
      "Servir dans l'armée"
    ],
    correctHash: hashAnswer(2011, 0),
    explication: "Le respect des lois est le premier devoir de tout citoyen. « Nul n'est censé ignorer la loi » : chacun doit connaître et respecter les règles de la société."
  },
  {
    id: 2012,
    niveau: 2,
    question: "Les citoyens ont-ils le devoir de payer des impôts ?",
    options: [
      "Oui, selon leurs capacités financières",
      "Non, les impôts sont facultatifs",
      "Seulement les personnes très riches",
      "Non, l'État n'a pas besoin d'argent"
    ],
    correctHash: hashAnswer(2012, 0),
    explication: "L'article 13 de la Déclaration de 1789 prévoit que chacun contribue aux dépenses publiques selon ses capacités. C'est le principe de l'impôt progressif."
  },
  {
    id: 2013,
    niveau: 2,
    question: "La Journée Défense et Citoyenneté (JDC) est-elle obligatoire ?",
    options: [
      "Oui, pour tous les jeunes Français de 16 à 25 ans",
      "Non, c'est facultatif",
      "Seulement pour les garçons",
      "Seulement pour ceux qui veulent entrer dans l'armée"
    ],
    correctHash: hashAnswer(2013, 0),
    explication: "La JDC (ex-JAPD) est obligatoire pour tous les jeunes Français. Elle est nécessaire pour passer des examens (permis de conduire, bac, concours...)."
  },
  {
    id: 2014,
    niveau: 2,
    question: "Qu'est-ce que le devoir de solidarité ?",
    options: [
      "Aider les personnes en difficulté et contribuer à la protection sociale",
      "Donner tout son argent aux pauvres",
      "Ne s'occuper que de sa famille",
      "Ignorer les problèmes des autres"
    ],
    correctHash: hashAnswer(2014, 0),
    explication: "Le devoir de solidarité signifie participer à l'entraide collective : cotisations sociales, aide aux personnes vulnérables, engagement citoyen."
  },
  {
    id: 2015,
    niveau: 2,
    question: "Le respect de l'environnement est-il un devoir citoyen ?",
    options: [
      "Oui, depuis la Charte de l'environnement de 2004",
      "Non, ce n'est pas une obligation légale",
      "Seulement pour les entreprises",
      "Seulement dans les parcs nationaux"
    ],
    correctHash: hashAnswer(2015, 0),
    explication: "La Charte de l'environnement de 2004 a valeur constitutionnelle. Elle affirme que « Toute personne a le devoir de prendre part à la préservation de l'environnement »."
  },
  {
    id: 2016,
    niveau: 2,
    question: "Les parents ont-ils des devoirs envers leurs enfants ?",
    options: [
      "Oui, ils doivent les protéger, les éduquer et les entretenir",
      "Non, les enfants doivent se débrouiller seuls",
      "Seulement jusqu'à 10 ans",
      "Seulement s'ils en ont les moyens"
    ],
    correctHash: hashAnswer(2016, 0),
    explication: "L'autorité parentale implique des devoirs : protection, éducation, entretien (nourriture, logement, santé). Ces devoirs durent jusqu'à la majorité de l'enfant."
  },
  {
    id: 2017,
    niveau: 2,
    question: "Le devoir de défense de la Nation concerne :",
    options: [
      "Tous les citoyens français",
      "Uniquement les militaires de carrière",
      "Seulement les hommes",
      "Personne depuis la fin du service militaire"
    ],
    correctHash: hashAnswer(2017, 0),
    explication: "L'article L111-1 du Code du service national stipule que « la défense de la Nation est un devoir pour tous les citoyens ». La JDC en est une manifestation."
  },
  {
    id: 2018,
    niveau: 2,
    question: "Le devoir de mémoire consiste à :",
    options: [
      "Se souvenir des événements historiques et honorer ceux qui ont défendu la France",
      "Apprendre par cœur tous les noms des rois de France",
      "Oublier les guerres pour vivre en paix",
      "Ne pas parler du passé"
    ],
    correctHash: hashAnswer(2018, 0),
    explication: "Le devoir de mémoire consiste à se souvenir des sacrifices passés (guerres, résistance, déportation) pour que ces tragédies ne se reproduisent pas."
  },
  {
    id: 2019,
    niveau: 2,
    question: "Est-il obligatoire de porter assistance à une personne en danger ?",
    options: [
      "Oui, c'est une obligation légale",
      "Non, c'est un choix personnel",
      "Seulement si on est médecin",
      "Seulement si on connaît la personne"
    ],
    correctHash: hashAnswer(2019, 0),
    explication: "L'article 223-6 du Code pénal punit la non-assistance à personne en danger. Chacun a le devoir de porter secours ou d'appeler les secours."
  },
  {
    id: 2020,
    niveau: 2,
    question: "Le respect des autres citoyens est :",
    options: [
      "Un devoir fondamental de la vie en société",
      "Facultatif si on n'aime pas quelqu'un",
      "Réservé aux personnes polies",
      "Obligatoire seulement avec les personnes âgées"
    ],
    correctHash: hashAnswer(2020, 0),
    explication: "Le respect mutuel est essentiel à la vie en société. Il implique de respecter les droits, les opinions et la dignité de chacun, même en cas de désaccord."
  },
];

// ==================== NIVEAU 3 : ÉGALITÉ ET NON-DISCRIMINATION ====================
const NIVEAU_3: QuizQuestion[] = [
  {
    id: 2021,
    niveau: 3,
    question: "La discrimination est :",
    options: [
      "Interdite par la loi française",
      "Autorisée dans certains cas",
      "Légale dans le secteur privé",
      "Tolérée pour les petites entreprises"
    ],
    correctHash: hashAnswer(2021, 0),
    explication: "La discrimination est interdite par la loi. On ne peut pas traiter différemment une personne en raison de son origine, sexe, religion, handicap, orientation sexuelle, etc."
  },
  {
    id: 2022,
    niveau: 3,
    question: "L'égalité entre les femmes et les hommes est :",
    options: [
      "Un principe constitutionnel",
      "Un simple objectif politique",
      "Appliquée seulement au travail",
      "Limitée au droit de vote"
    ],
    correctHash: hashAnswer(2022, 0),
    explication: "L'égalité entre les femmes et les hommes est inscrite dans la Constitution. La loi favorise l'égal accès aux mandats électoraux et fonctions électives."
  },
  {
    id: 2023,
    niveau: 3,
    question: "Combien de critères de discrimination sont interdits par la loi française ?",
    options: [
      "Plus de 20 critères",
      "5 critères",
      "10 critères",
      "2 critères (sexe et origine)"
    ],
    correctHash: hashAnswer(2023, 0),
    explication: "La loi interdit plus de 20 critères de discrimination : origine, sexe, âge, handicap, orientation sexuelle, religion, opinions politiques, apparence physique, etc."
  },
  {
    id: 2024,
    niveau: 3,
    question: "Le Défenseur des droits peut :",
    options: [
      "Aider les victimes de discrimination à faire valoir leurs droits",
      "Condamner les discriminateurs à la prison",
      "Voter des lois contre la discrimination",
      "Licencier les employeurs discriminants"
    ],
    correctHash: hashAnswer(2024, 0),
    explication: "Le Défenseur des droits est une autorité indépendante qui aide les victimes de discrimination, mène des enquêtes et peut formuler des recommandations."
  },
  {
    id: 2025,
    niveau: 3,
    question: "L'accès à l'emploi doit se faire :",
    options: [
      "Sans discrimination, sur la base des compétences",
      "En priorité pour les hommes",
      "Selon l'origine géographique",
      "En fonction de l'apparence physique"
    ],
    correctHash: hashAnswer(2025, 0),
    explication: "L'embauche doit se baser uniquement sur les compétences professionnelles. Toute discrimination à l'embauche est punie par la loi (jusqu'à 3 ans de prison et 45 000 € d'amende)."
  },
  {
    id: 2026,
    niveau: 3,
    question: "Une personne handicapée a-t-elle les mêmes droits que les autres ?",
    options: [
      "Oui, et la société doit garantir l'accessibilité",
      "Non, elle a des droits réduits",
      "Seulement si son handicap est léger",
      "Seulement dans les établissements spécialisés"
    ],
    correctHash: hashAnswer(2026, 0),
    explication: "Les personnes handicapées ont les mêmes droits que tous. La loi de 2005 impose l'accessibilité des bâtiments, transports et services publics."
  },
  {
    id: 2027,
    niveau: 3,
    question: "Le racisme et l'antisémitisme sont :",
    options: [
      "Des délits punis par la loi",
      "Autorisés dans le cadre privé",
      "Tolérés s'ils ne sont pas violents",
      "Légaux si exprimés sur internet"
    ],
    correctHash: hashAnswer(2027, 0),
    explication: "Le racisme et l'antisémitisme sont des délits. Les propos racistes, les injures et les actes racistes sont punis par la loi (amendes, prison)."
  },
  {
    id: 2028,
    niveau: 3,
    question: "L'homophobie (discrimination envers les homosexuels) est :",
    options: [
      "Interdite et punie par la loi",
      "Tolérée dans certains milieux",
      "Légale en France",
      "Punie seulement si violente"
    ],
    correctHash: hashAnswer(2028, 0),
    explication: "L'homophobie est interdite. Les discriminations, injures et violences liées à l'orientation sexuelle sont punies par la loi."
  },
  {
    id: 2029,
    niveau: 3,
    question: "À travail égal, salaire égal signifie que :",
    options: [
      "Hommes et femmes doivent recevoir le même salaire pour le même travail",
      "Tout le monde gagne le même salaire",
      "Les femmes peuvent gagner moins",
      "Le salaire dépend de l'ancienneté uniquement"
    ],
    correctHash: hashAnswer(2029, 0),
    explication: "Le principe « à travail égal, salaire égal » interdit les écarts de rémunération entre hommes et femmes pour un travail de valeur égale."
  },
  {
    id: 2030,
    niveau: 3,
    question: "La liberté de conscience garantit le droit de :",
    options: [
      "Croire ou ne pas croire, changer de religion ou n'en avoir aucune",
      "Imposer sa religion aux autres",
      "Critiquer toutes les religions sauf la sienne",
      "Pratiquer sa religion au travail sans limite"
    ],
    correctHash: hashAnswer(2030, 0),
    explication: "La liberté de conscience permet à chacun de croire ou non, de changer de religion, d'être athée ou agnostique. C'est un droit fondamental protégé par la laïcité."
  },
];

// ==================== NIVEAU 4 : DROITS SOCIAUX ====================
const NIVEAU_4: QuizQuestion[] = [
  {
    id: 2031,
    niveau: 4,
    question: "La Sécurité sociale garantit :",
    options: [
      "La protection contre les risques maladie, vieillesse, famille, accidents",
      "Un emploi à tous les Français",
      "Le remboursement intégral de tous les soins",
      "Une retraite identique pour tous"
    ],
    correctHash: hashAnswer(2031, 0),
    explication: "La Sécurité sociale, créée en 1945, protège contre les risques de la vie : maladie, maternité, vieillesse, accidents du travail, charges familiales."
  },
  {
    id: 2032,
    niveau: 4,
    question: "Qu'est-ce que le SMIC ?",
    options: [
      "Le salaire minimum légal en France",
      "Un impôt sur les hauts revenus",
      "Une aide pour les chômeurs",
      "Le salaire maximum autorisé"
    ],
    correctHash: hashAnswer(2032, 0),
    explication: "Le SMIC (Salaire Minimum Interprofessionnel de Croissance) est le salaire horaire minimum légal. Aucun salarié ne peut être payé en dessous."
  },
  {
    id: 2033,
    niveau: 4,
    question: "Les congés payés sont-ils un droit en France ?",
    options: [
      "Oui, minimum 5 semaines par an pour tous les salariés",
      "Non, c'est un privilège accordé par l'employeur",
      "Seulement pour les fonctionnaires",
      "Seulement après 10 ans d'ancienneté"
    ],
    correctHash: hashAnswer(2033, 0),
    explication: "Les congés payés sont un droit pour tous les salariés depuis 1936. Aujourd'hui, le minimum légal est de 5 semaines par an (30 jours ouvrables)."
  },
  {
    id: 2034,
    niveau: 4,
    question: "Le droit de grève est :",
    options: [
      "Reconnu par la Constitution",
      "Interdit en France",
      "Réservé aux syndicats",
      "Autorisé seulement dans le secteur privé"
    ],
    correctHash: hashAnswer(2034, 0),
    explication: "Le droit de grève est reconnu par le préambule de la Constitution de 1946. Il s'exerce dans le cadre des lois qui le réglementent."
  },
  {
    id: 2035,
    niveau: 4,
    question: "La durée légale du travail en France est de :",
    options: [
      "35 heures par semaine",
      "40 heures par semaine",
      "39 heures par semaine",
      "32 heures par semaine"
    ],
    correctHash: hashAnswer(2035, 0),
    explication: "La durée légale du travail est de 35 heures par semaine depuis 2000. Au-delà, les heures sont considérées comme des heures supplémentaires."
  },
  {
    id: 2036,
    niveau: 4,
    question: "L'assurance chômage permet de :",
    options: [
      "Recevoir une allocation pendant la recherche d'emploi",
      "Travailler moins d'heures",
      "Ne plus jamais travailler",
      "Choisir son prochain emploi sans limite de temps"
    ],
    correctHash: hashAnswer(2036, 0),
    explication: "L'assurance chômage verse une allocation aux personnes ayant perdu leur emploi, sous conditions. Elle est financée par les cotisations des salariés et employeurs."
  },
  {
    id: 2037,
    niveau: 4,
    question: "Le RSA (Revenu de Solidarité Active) est :",
    options: [
      "Une aide financière pour les personnes sans ressources",
      "Un impôt sur les revenus",
      "Une prime pour les salariés",
      "Une allocation réservée aux retraités"
    ],
    correctHash: hashAnswer(2037, 0),
    explication: "Le RSA est une allocation versée aux personnes de plus de 25 ans (ou moins avec enfant) sans ressources ou avec de faibles revenus."
  },
  {
    id: 2038,
    niveau: 4,
    question: "Les allocations familiales sont versées :",
    options: [
      "Aux familles ayant au moins 2 enfants",
      "À toutes les familles sans condition",
      "Seulement aux familles nombreuses (5 enfants et plus)",
      "Uniquement aux familles monoparentales"
    ],
    correctHash: hashAnswer(2038, 0),
    explication: "Les allocations familiales sont versées automatiquement aux familles ayant au moins 2 enfants de moins de 20 ans à charge. Le montant varie selon les revenus."
  },
  {
    id: 2039,
    niveau: 4,
    question: "Le droit au logement est-il reconnu en France ?",
    options: [
      "Oui, c'est un droit fondamental",
      "Non, le logement est une affaire privée",
      "Seulement pour les propriétaires",
      "Seulement dans les grandes villes"
    ],
    correctHash: hashAnswer(2039, 0),
    explication: "Le droit au logement est reconnu comme un droit fondamental. La loi DALO (2007) permet aux personnes mal logées de faire valoir ce droit devant les tribunaux."
  },
  {
    id: 2040,
    niveau: 4,
    question: "La retraite par répartition signifie que :",
    options: [
      "Les actifs d'aujourd'hui paient les retraites d'aujourd'hui",
      "Chacun épargne pour sa propre retraite",
      "L'État verse une retraite identique à tous",
      "Les retraités travaillent à temps partiel"
    ],
    correctHash: hashAnswer(2040, 0),
    explication: "Le système de retraite par répartition repose sur la solidarité : les cotisations des actifs financent immédiatement les pensions des retraités actuels."
  },
];

// ==================== NIVEAU 5 : DROITS DE LA FAMILLE ====================
const NIVEAU_5: QuizQuestion[] = [
  {
    id: 2041,
    niveau: 5,
    question: "À partir de quel âge peut-on se marier en France ?",
    options: [
      "18 ans",
      "16 ans",
      "21 ans",
      "15 ans"
    ],
    correctHash: hashAnswer(2041, 0),
    explication: "L'âge minimum du mariage est de 18 ans pour les deux sexes. Avant 2006, les filles pouvaient se marier à 15 ans."
  },
  {
    id: 2042,
    niveau: 5,
    question: "Le mariage forcé est :",
    options: [
      "Interdit et puni par la loi",
      "Autorisé avec l'accord des parents",
      "Toléré pour les mariages religieux",
      "Légal si les époux sont majeurs"
    ],
    correctHash: hashAnswer(2042, 0),
    explication: "Le mariage forcé est un délit puni de 3 ans de prison et 45 000 € d'amende. Le consentement libre des deux époux est obligatoire."
  },
  {
    id: 2043,
    niveau: 5,
    question: "Le mariage entre personnes du même sexe est légal en France depuis :",
    options: [
      "2013",
      "2000",
      "2020",
      "1999"
    ],
    correctHash: hashAnswer(2043, 0),
    explication: "Le mariage pour tous a été légalisé par la loi du 17 mai 2013. Les couples de même sexe ont les mêmes droits que les couples hétérosexuels."
  },
  {
    id: 2044,
    niveau: 5,
    question: "L'autorité parentale appartient à :",
    options: [
      "Les deux parents conjointement",
      "Le père uniquement",
      "La mère uniquement",
      "L'État"
    ],
    correctHash: hashAnswer(2044, 0),
    explication: "L'autorité parentale est exercée conjointement par les deux parents, qu'ils soient mariés ou non, ensemble ou séparés."
  },
  {
    id: 2045,
    niveau: 5,
    question: "La polygamie (avoir plusieurs époux/épouses) est :",
    options: [
      "Interdite en France",
      "Autorisée pour les étrangers",
      "Tolérée si discrète",
      "Légale sous conditions"
    ],
    correctHash: hashAnswer(2045, 0),
    explication: "La polygamie est interdite en France. Le Code civil impose la monogamie. Un nouveau mariage n'est possible qu'après dissolution du précédent."
  },
];

// ==================== NIVEAU 6 : DROITS DES ENFANTS ====================
const NIVEAU_6: QuizQuestion[] = [
  {
    id: 2046,
    niveau: 6,
    question: "Les violences physiques sur les enfants sont :",
    options: [
      "Interdites, y compris les châtiments corporels",
      "Autorisées à des fins éducatives",
      "Tolérées si elles sont légères",
      "Légales pour les parents"
    ],
    correctHash: hashAnswer(2046, 0),
    explication: "Depuis 2019, la loi interdit les « violences éducatives ordinaires ». Les châtiments corporels, gifles et fessées sont interdits."
  },
  {
    id: 2047,
    niveau: 6,
    question: "L'instruction des enfants est obligatoire de :",
    options: [
      "3 à 16 ans",
      "6 à 16 ans",
      "3 à 18 ans",
      "6 à 14 ans"
    ],
    correctHash: hashAnswer(2047, 0),
    explication: "L'instruction est obligatoire de 3 à 16 ans depuis 2019 (avant c'était 6 ans). Elle peut se faire à l'école ou à la maison (instruction en famille)."
  },
  {
    id: 2048,
    niveau: 6,
    question: "Le travail des enfants de moins de 16 ans est :",
    options: [
      "Interdit sauf exceptions encadrées",
      "Autorisé avec l'accord des parents",
      "Légal pendant les vacances",
      "Toléré pour les travaux légers"
    ],
    correctHash: hashAnswer(2048, 0),
    explication: "Le travail des moins de 16 ans est en principe interdit. Des exceptions existent pour les spectacles, la mode ou les jobs d'été à partir de 14 ans."
  },
  {
    id: 2049,
    niveau: 6,
    question: "Un enfant peut-il être entendu par un juge lors d'un divorce ?",
    options: [
      "Oui, s'il en fait la demande et s'il est capable de discernement",
      "Non, jamais avant 18 ans",
      "Seulement à partir de 16 ans",
      "Non, seuls les parents s'expriment"
    ],
    correctHash: hashAnswer(2049, 0),
    explication: "Tout enfant capable de discernement peut demander à être entendu par le juge aux affaires familiales. Le juge peut aussi l'entendre d'office."
  },
  {
    id: 2050,
    niveau: 6,
    question: "Le Défenseur des enfants est :",
    options: [
      "Un adjoint du Défenseur des droits chargé de protéger les droits des enfants",
      "Un policier spécialisé",
      "Un juge pour mineurs",
      "Un éducateur de l'Aide Sociale à l'Enfance"
    ],
    correctHash: hashAnswer(2050, 0),
    explication: "Le Défenseur des enfants est l'un des adjoints du Défenseur des droits. Il défend et promeut les droits de l'enfant et peut être saisi par tout mineur."
  },
];

// ==================== NIVEAU 7 : JUSTICE ET DROITS ====================
const NIVEAU_7: QuizQuestion[] = [
  {
    id: 2051,
    niveau: 7,
    question: "Toute personne accusée a droit à :",
    options: [
      "Un avocat et un procès équitable",
      "Être condamnée rapidement",
      "Se défendre seule obligatoirement",
      "Un jugement secret"
    ],
    correctHash: hashAnswer(2051, 0),
    explication: "Les droits de la défense sont fondamentaux : droit à un avocat, présomption d'innocence, procès public et équitable, possibilité de faire appel."
  },
  {
    id: 2052,
    niveau: 7,
    question: "La garde à vue peut durer au maximum :",
    options: [
      "48 heures, prolongeable dans certains cas",
      "24 heures maximum",
      "1 semaine",
      "Aussi longtemps que nécessaire"
    ],
    correctHash: hashAnswer(2052, 0),
    explication: "La garde à vue dure 24 heures, renouvelable une fois (48h). Elle peut être prolongée à 96h ou 144h pour certaines infractions (terrorisme, criminalité organisée)."
  },
  {
    id: 2053,
    niveau: 7,
    question: "L'aide juridictionnelle permet aux personnes aux faibles revenus de :",
    options: [
      "Bénéficier d'un avocat gratuit ou à tarif réduit",
      "Éviter d'être jugées",
      "Choisir leur juge",
      "Ne pas payer d'amendes"
    ],
    correctHash: hashAnswer(2053, 0),
    explication: "L'aide juridictionnelle permet aux personnes aux ressources modestes de bénéficier d'une prise en charge totale ou partielle des frais de justice et d'avocat."
  },
  {
    id: 2054,
    niveau: 7,
    question: "Le droit de faire appel signifie :",
    options: [
      "Demander un nouveau jugement par une juridiction supérieure",
      "Appeler son avocat pendant le procès",
      "Refuser d'être jugé",
      "Changer de tribunal"
    ],
    correctHash: hashAnswer(2054, 0),
    explication: "Le droit d'appel permet de contester une décision de justice devant une juridiction supérieure (cour d'appel). C'est un droit fondamental du justiciable."
  },
  {
    id: 2055,
    niveau: 7,
    question: "Nul ne peut être puni pour un acte qui n'était pas interdit au moment où il a été commis. Ce principe s'appelle :",
    options: [
      "La non-rétroactivité de la loi pénale",
      "La présomption d'innocence",
      "Le droit au silence",
      "L'immunité judiciaire"
    ],
    correctHash: hashAnswer(2055, 0),
    explication: "Le principe de non-rétroactivité de la loi pénale signifie qu'on ne peut être condamné que pour une infraction définie par la loi au moment des faits."
  },
];

// ==================== NIVEAU 8 : LIBERTÉS PUBLIQUES ====================
const NIVEAU_8: QuizQuestion[] = [
  {
    id: 2056,
    niveau: 8,
    question: "La liberté de réunion permet :",
    options: [
      "De se rassembler pacifiquement sans autorisation préalable",
      "De manifester sans prévenir les autorités",
      "De bloquer les routes librement",
      "De se réunir uniquement en intérieur"
    ],
    correctHash: hashAnswer(2056, 0),
    explication: "La liberté de réunion est garantie. Les manifestations sur la voie publique nécessitent une déclaration préalable à la préfecture (pas une autorisation)."
  },
  {
    id: 2057,
    niveau: 8,
    question: "La liberté d'association permet :",
    options: [
      "De créer librement une association sans autorisation",
      "De créer une association seulement avec l'accord du préfet",
      "De créer une association commerciale",
      "De s'associer uniquement entre Français"
    ],
    correctHash: hashAnswer(2057, 0),
    explication: "La loi de 1901 garantit la liberté d'association. Toute personne peut créer une association sans autorisation préalable, par simple déclaration."
  },
  {
    id: 2058,
    niveau: 8,
    question: "La liberté syndicale garantit :",
    options: [
      "Le droit de créer un syndicat et d'y adhérer librement",
      "L'obligation d'adhérer à un syndicat",
      "Le droit de grève illimité",
      "Le monopole d'un seul syndicat"
    ],
    correctHash: hashAnswer(2058, 0),
    explication: "La liberté syndicale permet à tout travailleur de créer un syndicat ou d'adhérer au syndicat de son choix. Nul ne peut être contraint d'adhérer."
  },
  {
    id: 2059,
    niveau: 8,
    question: "Le secret des correspondances protège :",
    options: [
      "Les lettres, emails et communications privées",
      "Uniquement les lettres papier",
      "Seulement les communications des entreprises",
      "Les messages publiés sur les réseaux sociaux"
    ],
    correctHash: hashAnswer(2059, 0),
    explication: "Le secret des correspondances protège toutes les communications privées : lettres, emails, SMS, appels téléphoniques. Leur interception est strictement encadrée."
  },
  {
    id: 2060,
    niveau: 8,
    question: "L'inviolabilité du domicile signifie que :",
    options: [
      "La police ne peut entrer chez vous sans autorisation judiciaire sauf exceptions",
      "Personne ne peut jamais entrer chez vous",
      "Vous pouvez refuser tous les visiteurs",
      "Votre propriétaire ne peut pas entrer"
    ],
    correctHash: hashAnswer(2060, 0),
    explication: "L'inviolabilité du domicile protège contre les intrusions. La police a besoin d'une autorisation judiciaire pour perquisitionner, sauf flagrant délit."
  },
];

// ==================== NIVEAU 9 : CITOYENNETÉ EUROPÉENNE ====================
const NIVEAU_9: QuizQuestion[] = [
  {
    id: 2061,
    niveau: 9,
    question: "Un citoyen français est automatiquement :",
    options: [
      "Citoyen de l'Union européenne",
      "Citoyen du monde",
      "Citoyen de l'ONU",
      "Citoyen de l'OTAN"
    ],
    correctHash: hashAnswer(2061, 0),
    explication: "Tout citoyen d'un État membre de l'UE est automatiquement citoyen européen. Cette citoyenneté s'ajoute à la citoyenneté nationale."
  },
  {
    id: 2062,
    niveau: 9,
    question: "Un citoyen européen peut vivre et travailler :",
    options: [
      "Dans n'importe quel pays de l'Union européenne",
      "Uniquement dans son pays d'origine",
      "Dans 5 pays maximum",
      "Seulement avec un visa de travail"
    ],
    correctHash: hashAnswer(2062, 0),
    explication: "La libre circulation est un droit fondamental de l'UE. Tout citoyen européen peut vivre, travailler et étudier dans n'importe quel État membre."
  },
  {
    id: 2063,
    niveau: 9,
    question: "La Charte des droits fondamentaux de l'UE garantit :",
    options: [
      "Les droits civils, politiques, économiques et sociaux des citoyens européens",
      "Uniquement le droit de vote européen",
      "Le droit à une monnaie unique",
      "Le droit de voyager sans passeport"
    ],
    correctHash: hashAnswer(2063, 0),
    explication: "La Charte des droits fondamentaux (2000) rassemble les droits civiques, politiques, économiques et sociaux des citoyens européens. Elle a valeur juridique contraignante."
  },
  {
    id: 2064,
    niveau: 9,
    question: "Le droit de pétition au Parlement européen permet de :",
    options: [
      "Soumettre une plainte ou une demande sur un sujet relevant de l'UE",
      "Voter les lois européennes",
      "Devenir député européen",
      "Demander la sortie de l'UE"
    ],
    correctHash: hashAnswer(2064, 0),
    explication: "Tout citoyen européen peut adresser une pétition au Parlement européen sur un sujet relevant des compétences de l'UE et le concernant directement."
  },
  {
    id: 2065,
    niveau: 9,
    question: "Un citoyen européen en difficulté dans un pays hors UE peut demander l'aide :",
    options: [
      "De l'ambassade de n'importe quel État membre de l'UE",
      "Uniquement de son ambassade nationale",
      "Du consulat américain",
      "De la police locale"
    ],
    correctHash: hashAnswer(2065, 0),
    explication: "Un citoyen européen peut demander la protection consulaire de n'importe quel État membre si son pays n'a pas de représentation sur place."
  },
];

// ==================== NIVEAU 10 : CAS PRATIQUES ET APPROFONDISSEMENT ====================
const NIVEAU_10: QuizQuestion[] = [
  {
    id: 2066,
    niveau: 10,
    question: "Que faire si vous êtes victime de discrimination ?",
    options: [
      "Saisir le Défenseur des droits, porter plainte ou contacter une association",
      "Ne rien faire car c'est inutile",
      "Démissionner si c'est au travail",
      "Attendre que la situation s'améliore"
    ],
    correctHash: hashAnswer(2066, 0),
    explication: "En cas de discrimination, vous pouvez : saisir le Défenseur des droits (gratuit), porter plainte, contacter les syndicats, ou des associations spécialisées."
  },
  {
    id: 2067,
    niveau: 10,
    question: "Le principe de laïcité dans les services publics impose :",
    options: [
      "La neutralité des agents publics et l'égalité de traitement des usagers",
      "L'interdiction de toute religion",
      "L'affichage de symboles religieux",
      "La préférence pour une religion"
    ],
    correctHash: hashAnswer(2067, 0),
    explication: "La laïcité impose aux agents publics une stricte neutralité religieuse. Les usagers sont traités également quelle que soit leur religion ou absence de religion."
  },
  {
    id: 2068,
    niveau: 10,
    question: "Le harcèlement moral au travail est :",
    options: [
      "Un délit puni de 2 ans de prison et 30 000 € d'amende",
      "Une faute légère sans conséquence",
      "Autorisé s'il vient d'un supérieur",
      "Illégal seulement s'il y a violence physique"
    ],
    correctHash: hashAnswer(2068, 0),
    explication: "Le harcèlement moral est un délit : agissements répétés dégradant les conditions de travail et portant atteinte à la dignité, la santé ou l'avenir professionnel."
  },
  {
    id: 2069,
    niveau: 10,
    question: "Le droit à l'oubli sur internet permet de :",
    options: [
      "Demander le déréférencement de données personnelles obsolètes",
      "Effacer tout ce qui vous concerne sur internet",
      "Supprimer les articles de presse vous concernant",
      "Interdire toute mention de votre nom en ligne"
    ],
    correctHash: hashAnswer(2069, 0),
    explication: "Le droit à l'oubli (RGPD) permet de demander aux moteurs de recherche le déréférencement d'informations personnelles obsolètes ou inadéquates."
  },
  {
    id: 2070,
    niveau: 10,
    question: "La CNIL (Commission Nationale de l'Informatique et des Libertés) protège :",
    options: [
      "Les données personnelles des citoyens",
      "Les brevets et inventions",
      "Les droits d'auteur",
      "La liberté de la presse"
    ],
    correctHash: hashAnswer(2070, 0),
    explication: "La CNIL est l'autorité indépendante qui veille à la protection des données personnelles. Elle peut sanctionner les entreprises qui ne respectent pas le RGPD."
  },
];

// ==================== EXPORT ====================
const ALL_QUESTIONS: QuizQuestion[] = [
  ...NIVEAU_1,
  ...NIVEAU_2,
  ...NIVEAU_3,
  ...NIVEAU_4,
  ...NIVEAU_5,
  ...NIVEAU_6,
  ...NIVEAU_7,
  ...NIVEAU_8,
  ...NIVEAU_9,
  ...NIVEAU_10,
];

export function getQuestionsDroitsDevoirs(niveau: number): QuizQuestion[] {
  return ALL_QUESTIONS.filter(q => q.niveau === niveau);
}

export function getAllQuestionsDroitsDevoirs(): QuizQuestion[] {
  return ALL_QUESTIONS;
}

export default ALL_QUESTIONS;
