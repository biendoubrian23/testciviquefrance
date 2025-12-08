// =====================================================
// QUESTIONS - SYMBOLES DE LA FRANCE
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

// ==================== NIVEAU 1 : LE DRAPEAU FRANÇAIS ====================
const NIVEAU_1: QuizQuestion[] = [
  {
    id: 3001,
    niveau: 1,
    question: "Quelles sont les trois couleurs du drapeau français ?",
    options: [
      "Bleu, blanc, rouge",
      "Rouge, jaune, bleu",
      "Vert, blanc, rouge",
      "Bleu, jaune, rouge"
    ],
    correctHash: hashAnswer(3001, 0),
    explication: "Le drapeau français est composé de trois bandes verticales : bleu, blanc et rouge. C'est le symbole le plus connu de la France."
  },
  {
    id: 3002,
    niveau: 1,
    question: "Comment appelle-t-on le drapeau français ?",
    options: [
      "Le drapeau tricolore",
      "Le drapeau royal",
      "L'étendard national",
      "La bannière française"
    ],
    correctHash: hashAnswer(3002, 0),
    explication: "Le drapeau français est appelé « drapeau tricolore » ou simplement « le tricolore » car il comporte trois couleurs."
  },
  {
    id: 3003,
    niveau: 1,
    question: "Dans quel sens sont disposées les couleurs du drapeau français ?",
    options: [
      "Verticalement (de gauche à droite : bleu, blanc, rouge)",
      "Horizontalement (de haut en bas)",
      "En diagonale",
      "En cercles concentriques"
    ],
    correctHash: hashAnswer(3003, 0),
    explication: "Les trois couleurs sont disposées en bandes verticales égales, de gauche à droite : bleu, blanc, rouge."
  },
  {
    id: 3004,
    niveau: 1,
    question: "Où peut-on voir le drapeau français flotter ?",
    options: [
      "Sur les bâtiments publics (mairies, écoles, préfectures)",
      "Uniquement sur l'Élysée",
      "Seulement le 14 juillet",
      "Uniquement dans les stades"
    ],
    correctHash: hashAnswer(3004, 0),
    explication: "Le drapeau tricolore flotte sur tous les bâtiments publics : mairies, écoles, préfectures, ministères, etc."
  },
  {
    id: 3005,
    niveau: 1,
    question: "Le drapeau tricolore date de quelle période ?",
    options: [
      "La Révolution française (1789)",
      "Le Moyen Âge",
      "La Renaissance",
      "Le XXe siècle"
    ],
    correctHash: hashAnswer(3005, 0),
    explication: "Le drapeau tricolore est né pendant la Révolution française en 1789. Il associe les couleurs de Paris (bleu et rouge) au blanc royal."
  },
  {
    id: 3006,
    niveau: 1,
    question: "Que symbolise la couleur bleue du drapeau ?",
    options: [
      "La ville de Paris",
      "La mer Méditerranée",
      "Le ciel de France",
      "La paix"
    ],
    correctHash: hashAnswer(3006, 0),
    explication: "Le bleu est l'une des couleurs de la ville de Paris, associée au rouge. Ces couleurs représentent le peuple parisien."
  },
  {
    id: 3007,
    niveau: 1,
    question: "Que symbolise la couleur blanche du drapeau ?",
    options: [
      "La monarchie (le roi)",
      "La neige des montagnes",
      "La pureté du peuple",
      "Les nuages"
    ],
    correctHash: hashAnswer(3007, 0),
    explication: "Le blanc était la couleur traditionnelle de la monarchie française. Il représente le roi dans le drapeau tricolore."
  },
  {
    id: 3008,
    niveau: 1,
    question: "Que symbolise la couleur rouge du drapeau ?",
    options: [
      "La ville de Paris",
      "Le sang des révolutionnaires",
      "L'amour de la patrie",
      "Le vin français"
    ],
    correctHash: hashAnswer(3008, 0),
    explication: "Le rouge est, avec le bleu, l'une des couleurs de la ville de Paris. Il représente le peuple parisien."
  },
  {
    id: 3009,
    niveau: 1,
    question: "Le drapeau tricolore est inscrit dans :",
    options: [
      "La Constitution française",
      "Le Code civil uniquement",
      "Aucun texte officiel",
      "Un décret présidentiel"
    ],
    correctHash: hashAnswer(3009, 0),
    explication: "L'article 2 de la Constitution de 1958 établit que « L'emblème national est le drapeau tricolore, bleu, blanc, rouge »."
  },
  {
    id: 3010,
    niveau: 1,
    question: "Lors des cérémonies officielles, le drapeau est souvent accompagné de :",
    options: [
      "L'hymne national (La Marseillaise)",
      "Une fanfare militaire uniquement",
      "Un discours présidentiel obligatoire",
      "Des feux d'artifice"
    ],
    correctHash: hashAnswer(3010, 0),
    explication: "Le drapeau tricolore et La Marseillaise sont les deux symboles principaux de la République et accompagnent les cérémonies officielles."
  },
];

// ==================== NIVEAU 2 : LA MARSEILLAISE ====================
const NIVEAU_2: QuizQuestion[] = [
  {
    id: 3011,
    niveau: 2,
    question: "Comment s'appelle l'hymne national français ?",
    options: [
      "La Marseillaise",
      "La Parisienne",
      "Le Chant du Départ",
      "La Carmagnole"
    ],
    correctHash: hashAnswer(3011, 0),
    explication: "L'hymne national français s'appelle La Marseillaise. Il est chanté lors des cérémonies officielles et des événements sportifs."
  },
  {
    id: 3012,
    niveau: 2,
    question: "Qui a composé La Marseillaise ?",
    options: [
      "Rouget de Lisle",
      "Victor Hugo",
      "Napoléon Bonaparte",
      "Louis XIV"
    ],
    correctHash: hashAnswer(3012, 0),
    explication: "Claude Joseph Rouget de Lisle a composé La Marseillaise dans la nuit du 25 au 26 avril 1792 à Strasbourg."
  },
  {
    id: 3013,
    niveau: 2,
    question: "En quelle année La Marseillaise a-t-elle été composée ?",
    options: [
      "1792",
      "1789",
      "1804",
      "1848"
    ],
    correctHash: hashAnswer(3013, 0),
    explication: "La Marseillaise a été composée en 1792, pendant la Révolution française, alors que la France entrait en guerre contre l'Autriche."
  },
  {
    id: 3014,
    niveau: 2,
    question: "Pourquoi cet hymne s'appelle-t-il « La Marseillaise » ?",
    options: [
      "Car il a été chanté par des soldats venus de Marseille",
      "Car il a été composé à Marseille",
      "En l'honneur du maire de Marseille",
      "Car c'est un chant provençal"
    ],
    correctHash: hashAnswer(3014, 0),
    explication: "L'hymne doit son nom aux fédérés marseillais qui l'ont chanté en entrant à Paris en juillet 1792, le rendant populaire dans toute la France."
  },
  {
    id: 3015,
    niveau: 2,
    question: "Quel était le nom original de La Marseillaise ?",
    options: [
      "Chant de guerre pour l'Armée du Rhin",
      "Hymne à la liberté",
      "Chant patriotique français",
      "Ode à la République"
    ],
    correctHash: hashAnswer(3015, 0),
    explication: "À l'origine, Rouget de Lisle l'a intitulé « Chant de guerre pour l'Armée du Rhin » car il a été composé pour les soldats partant au front."
  },
  {
    id: 3016,
    niveau: 2,
    question: "Quand La Marseillaise est-elle devenue l'hymne national officiel ?",
    options: [
      "En 1879 sous la IIIe République",
      "En 1792 pendant la Révolution",
      "En 1958 avec la Ve République",
      "En 1804 sous Napoléon"
    ],
    correctHash: hashAnswer(3016, 0),
    explication: "Bien qu'adoptée une première fois en 1795, La Marseillaise est définitivement devenue l'hymne national en 1879 sous la IIIe République."
  },
  {
    id: 3017,
    niveau: 2,
    question: "Quelles sont les premières paroles de La Marseillaise ?",
    options: [
      "Allons enfants de la Patrie",
      "Liberté, Égalité, Fraternité",
      "Vive la France",
      "Gloire à notre pays"
    ],
    correctHash: hashAnswer(3017, 0),
    explication: "Les premières paroles sont « Allons enfants de la Patrie, le jour de gloire est arrivé ! »"
  },
  {
    id: 3018,
    niveau: 2,
    question: "Combien de couplets compte La Marseillaise dans sa version complète ?",
    options: [
      "7 couplets",
      "3 couplets",
      "5 couplets",
      "10 couplets"
    ],
    correctHash: hashAnswer(3018, 0),
    explication: "La Marseillaise compte 7 couplets au total, mais on ne chante généralement que le premier couplet et le refrain."
  },
  {
    id: 3019,
    niveau: 2,
    question: "La Marseillaise est inscrite dans :",
    options: [
      "La Constitution française (article 2)",
      "Le Code pénal",
      "Aucun texte officiel",
      "La Déclaration des droits de l'homme"
    ],
    correctHash: hashAnswer(3019, 0),
    explication: "L'article 2 de la Constitution de 1958 établit que « L'hymne national est La Marseillaise »."
  },
  {
    id: 3020,
    niveau: 2,
    question: "Quand chante-t-on La Marseillaise ?",
    options: [
      "Lors des cérémonies officielles, commémorations et événements sportifs",
      "Uniquement le 14 juillet",
      "Seulement lors des funérailles nationales",
      "Uniquement pendant les élections"
    ],
    correctHash: hashAnswer(3020, 0),
    explication: "La Marseillaise est chantée lors de nombreuses occasions : cérémonies officielles, commémorations (11 novembre, 8 mai), matchs de l'équipe de France, etc."
  },
];

// ==================== NIVEAU 3 : LA DEVISE RÉPUBLICAINE ====================
const NIVEAU_3: QuizQuestion[] = [
  {
    id: 3021,
    niveau: 3,
    question: "Quelle est la devise de la République française ?",
    options: [
      "Liberté, Égalité, Fraternité",
      "Unité, Force, Justice",
      "Paix, Travail, Patrie",
      "Honneur et Patrie"
    ],
    correctHash: hashAnswer(3021, 0),
    explication: "La devise de la République française est « Liberté, Égalité, Fraternité ». Elle figure sur les bâtiments publics et les documents officiels."
  },
  {
    id: 3022,
    niveau: 3,
    question: "Où peut-on lire la devise « Liberté, Égalité, Fraternité » ?",
    options: [
      "Sur les mairies, écoles et bâtiments publics",
      "Uniquement sur les billets de banque",
      "Seulement sur le drapeau",
      "Uniquement à l'Élysée"
    ],
    correctHash: hashAnswer(3022, 0),
    explication: "La devise est inscrite sur les frontons des mairies, écoles, tribunaux et autres bâtiments publics. Elle figure aussi sur les pièces de monnaie."
  },
  {
    id: 3023,
    niveau: 3,
    question: "De quelle époque date la devise républicaine ?",
    options: [
      "La Révolution française (1789)",
      "Le règne de Louis XIV",
      "La Première Guerre mondiale",
      "La Renaissance"
    ],
    correctHash: hashAnswer(3023, 0),
    explication: "La devise « Liberté, Égalité, Fraternité » est née pendant la Révolution française et a été popularisée à partir de 1789."
  },
  {
    id: 3024,
    niveau: 3,
    question: "Que signifie « Liberté » dans la devise ?",
    options: [
      "Le droit de faire ce qui ne nuit pas à autrui",
      "Faire tout ce qu'on veut sans limite",
      "L'absence de toute loi",
      "La liberté de ne pas travailler"
    ],
    correctHash: hashAnswer(3024, 0),
    explication: "La Liberté, selon la Déclaration de 1789, consiste à pouvoir faire tout ce qui ne nuit pas à autrui. Elle est encadrée par la loi."
  },
  {
    id: 3025,
    niveau: 3,
    question: "Que signifie « Égalité » dans la devise ?",
    options: [
      "Tous les citoyens ont les mêmes droits devant la loi",
      "Tout le monde gagne le même salaire",
      "Tout le monde a la même maison",
      "Tous les élèves ont les mêmes notes"
    ],
    correctHash: hashAnswer(3025, 0),
    explication: "L'Égalité signifie que tous les citoyens sont égaux devant la loi, sans distinction d'origine, de race ou de religion."
  },
  {
    id: 3026,
    niveau: 3,
    question: "Que signifie « Fraternité » dans la devise ?",
    options: [
      "La solidarité entre tous les citoyens",
      "L'obligation d'avoir des frères et sœurs",
      "L'amitié avec tous les pays",
      "Le devoir de se marier"
    ],
    correctHash: hashAnswer(3026, 0),
    explication: "La Fraternité représente le lien de solidarité qui unit tous les citoyens français, comme les membres d'une même famille."
  },
  {
    id: 3027,
    niveau: 3,
    question: "La devise est inscrite dans quel texte fondamental ?",
    options: [
      "La Constitution de la Ve République",
      "Le Code civil uniquement",
      "Le traité de Versailles",
      "La charte des Nations Unies"
    ],
    correctHash: hashAnswer(3027, 0),
    explication: "L'article 2 de la Constitution de 1958 établit que « La devise de la République est Liberté, Égalité, Fraternité »."
  },
  {
    id: 3028,
    niveau: 3,
    question: "Sur quel support trouve-t-on la devise française ?",
    options: [
      "Les pièces de monnaie en euros françaises",
      "Les billets de banque uniquement",
      "Les passeports étrangers",
      "Les cartes de crédit"
    ],
    correctHash: hashAnswer(3028, 0),
    explication: "La devise « Liberté, Égalité, Fraternité » figure sur la face nationale des pièces de monnaie françaises en euros."
  },
  {
    id: 3029,
    niveau: 3,
    question: "La devise républicaine exprime les valeurs de :",
    options: [
      "La République française",
      "L'Union européenne",
      "L'ONU",
      "La monarchie constitutionnelle"
    ],
    correctHash: hashAnswer(3029, 0),
    explication: "La devise « Liberté, Égalité, Fraternité » incarne les valeurs fondamentales de la République française depuis la Révolution."
  },
  {
    id: 3030,
    niveau: 3,
    question: "La devise est également présente sur :",
    options: [
      "Les timbres-poste français",
      "Les permis de conduire étrangers",
      "Les cartes d'identité allemandes",
      "Les passeports britanniques"
    ],
    correctHash: hashAnswer(3030, 0),
    explication: "La devise figure sur de nombreux documents et objets officiels français : timbres, pièces de monnaie, frontons des bâtiments publics."
  },
];

// ==================== NIVEAU 4 : MARIANNE ====================
const NIVEAU_4: QuizQuestion[] = [
  {
    id: 3031,
    niveau: 4,
    question: "Qui est Marianne ?",
    options: [
      "Le symbole féminin de la République française",
      "Une reine de France",
      "La femme de Napoléon",
      "Une sainte catholique"
    ],
    correctHash: hashAnswer(3031, 0),
    explication: "Marianne est la figure allégorique de la République française. Elle représente les valeurs de la République : liberté, raison, peuple."
  },
  {
    id: 3032,
    niveau: 4,
    question: "Où trouve-t-on le buste de Marianne ?",
    options: [
      "Dans toutes les mairies de France",
      "Uniquement à l'Élysée",
      "Seulement dans les musées",
      "Dans les églises"
    ],
    correctHash: hashAnswer(3032, 0),
    explication: "Un buste de Marianne est présent dans toutes les mairies de France. C'est un symbole visible de la République."
  },
  {
    id: 3033,
    niveau: 4,
    question: "Quel accessoire Marianne porte-t-elle traditionnellement ?",
    options: [
      "Un bonnet phrygien (bonnet rouge)",
      "Une couronne royale",
      "Un chapeau haut-de-forme",
      "Un béret basque"
    ],
    correctHash: hashAnswer(3033, 0),
    explication: "Marianne porte le bonnet phrygien, un bonnet rouge qui était le symbole de la liberté et des esclaves affranchis dans l'Antiquité."
  },
  {
    id: 3034,
    niveau: 4,
    question: "Que symbolise le bonnet phrygien porté par Marianne ?",
    options: [
      "La liberté",
      "La royauté",
      "La richesse",
      "La guerre"
    ],
    correctHash: hashAnswer(3034, 0),
    explication: "Le bonnet phrygien symbolise la liberté. Dans la Rome antique, il était porté par les esclaves affranchis."
  },
  {
    id: 3035,
    niveau: 4,
    question: "Marianne apparaît sur :",
    options: [
      "Les timbres-poste et les documents officiels",
      "Les billets de 500 euros uniquement",
      "Les passeports étrangers",
      "Les cartes bancaires"
    ],
    correctHash: hashAnswer(3035, 0),
    explication: "Marianne figure sur les timbres-poste, les pièces de monnaie, le logo officiel de la République et de nombreux documents administratifs."
  },
  {
    id: 3036,
    niveau: 4,
    question: "Depuis quand Marianne est-elle le symbole de la République ?",
    options: [
      "Depuis la Révolution française (1789)",
      "Depuis le Moyen Âge",
      "Depuis 1958",
      "Depuis la Première Guerre mondiale"
    ],
    correctHash: hashAnswer(3036, 0),
    explication: "Marianne est apparue comme symbole de la République pendant la Révolution française. Elle représente la liberté et la raison."
  },
  {
    id: 3037,
    niveau: 4,
    question: "Pourquoi le prénom « Marianne » a-t-il été choisi ?",
    options: [
      "C'était un prénom très courant dans le peuple français",
      "C'était le prénom d'une reine",
      "C'est le prénom de la femme de La Fayette",
      "C'est un prénom inventé par Napoléon"
    ],
    correctHash: hashAnswer(3037, 0),
    explication: "Marie et Anne étaient des prénoms très répandus dans le peuple français au XVIIIe siècle. Marianne représente donc le peuple."
  },
  {
    id: 3038,
    niveau: 4,
    question: "Le visage de Marianne est parfois inspiré de :",
    options: [
      "Célébrités françaises (Brigitte Bardot, Catherine Deneuve...)",
      "Uniquement de femmes politiques",
      "Toujours la même personne",
      "Des personnages de fiction"
    ],
    correctHash: hashAnswer(3038, 0),
    explication: "Le buste de Marianne a été inspiré de célébrités françaises : Brigitte Bardot, Catherine Deneuve, Laetitia Casta, etc."
  },
  {
    id: 3039,
    niveau: 4,
    question: "Marianne est aussi représentée sur :",
    options: [
      "Le célèbre tableau « La Liberté guidant le peuple » de Delacroix",
      "La Joconde de Léonard de Vinci",
      "Les fresques de Lascaux",
      "Les tapisseries de Bayeux"
    ],
    correctHash: hashAnswer(3039, 0),
    explication: "Le tableau « La Liberté guidant le peuple » d'Eugène Delacroix (1830) représente une Marianne brandissant le drapeau tricolore."
  },
  {
    id: 3040,
    niveau: 4,
    question: "Quel autre symbole accompagne souvent Marianne ?",
    options: [
      "Le faisceau de licteur",
      "L'aigle impérial",
      "La fleur de lys",
      "Le lion"
    ],
    correctHash: hashAnswer(3040, 0),
    explication: "Le faisceau de licteur (baguettes liées autour d'une hache) est un symbole d'autorité et d'unité qui accompagne souvent Marianne."
  },
];

// ==================== NIVEAU 5 : LE COQ GAULOIS ====================
const NIVEAU_5: QuizQuestion[] = [
  {
    id: 3041,
    niveau: 5,
    question: "Quel animal est un symbole traditionnel de la France ?",
    options: [
      "Le coq gaulois",
      "L'aigle",
      "Le lion",
      "L'ours"
    ],
    correctHash: hashAnswer(3041, 0),
    explication: "Le coq gaulois est un symbole traditionnel de la France. On le retrouve sur les maillots des équipes de France et les grilles de l'Élysée."
  },
  {
    id: 3042,
    niveau: 5,
    question: "Pourquoi le coq est-il associé à la France ?",
    options: [
      "Car « Gallus » signifie à la fois « Gaulois » et « coq » en latin",
      "Car c'est l'animal préféré de Louis XIV",
      "Car la France produit beaucoup de poulets",
      "Car Napoléon l'a choisi"
    ],
    correctHash: hashAnswer(3042, 0),
    explication: "En latin, « Gallus » désigne à la fois le Gaulois et le coq. Ce jeu de mots a fait du coq le symbole de la Gaule puis de la France."
  },
  {
    id: 3043,
    niveau: 5,
    question: "Où peut-on voir le coq gaulois aujourd'hui ?",
    options: [
      "Sur les maillots des équipes de France sportives",
      "Sur le drapeau français",
      "Sur les billets de banque",
      "Sur les cartes d'identité"
    ],
    correctHash: hashAnswer(3043, 0),
    explication: "Le coq gaulois orne les maillots des équipes de France (football, rugby...) et figure sur la grille du Palais de l'Élysée."
  },
  {
    id: 3044,
    niveau: 5,
    question: "Le coq gaulois symbolise :",
    options: [
      "La fierté, le courage et la vigilance",
      "La royauté et le pouvoir",
      "La richesse et l'abondance",
      "La paix et la tranquillité"
    ],
    correctHash: hashAnswer(3044, 0),
    explication: "Le coq symbolise la fierté, le courage (il chante sans crainte) et la vigilance (il annonce le lever du jour)."
  },
  {
    id: 3045,
    niveau: 5,
    question: "Le coq figure sur les grilles de quel palais ?",
    options: [
      "Le Palais de l'Élysée",
      "Le Château de Versailles",
      "Le Palais du Louvre",
      "Le Palais Bourbon"
    ],
    correctHash: hashAnswer(3045, 0),
    explication: "Un coq en or orne les grilles du Palais de l'Élysée, résidence officielle du Président de la République."
  },
];

// ==================== NIVEAU 6 : LE 14 JUILLET ====================
const NIVEAU_6: QuizQuestion[] = [
  {
    id: 3046,
    niveau: 6,
    question: "Quelle est la fête nationale française ?",
    options: [
      "Le 14 juillet",
      "Le 1er mai",
      "Le 11 novembre",
      "Le 8 mai"
    ],
    correctHash: hashAnswer(3046, 0),
    explication: "Le 14 juillet est la fête nationale française. Elle commémore la prise de la Bastille en 1789 et la Fête de la Fédération en 1790."
  },
  {
    id: 3047,
    niveau: 6,
    question: "Que célèbre-t-on le 14 juillet ?",
    options: [
      "La prise de la Bastille et la Fête de la Fédération",
      "La naissance de Napoléon",
      "La fin de la Première Guerre mondiale",
      "La création de l'Union européenne"
    ],
    correctHash: hashAnswer(3047, 0),
    explication: "Le 14 juillet commémore la prise de la Bastille (1789, symbole de la Révolution) et la Fête de la Fédération (1790, unité nationale)."
  },
  {
    id: 3048,
    niveau: 6,
    question: "Quel événement historique s'est passé le 14 juillet 1789 ?",
    options: [
      "La prise de la Bastille",
      "La décapitation de Louis XVI",
      "La bataille de Waterloo",
      "Le couronnement de Napoléon"
    ],
    correctHash: hashAnswer(3048, 0),
    explication: "Le 14 juillet 1789, le peuple de Paris a pris d'assaut la Bastille, une prison royale symbole de l'absolutisme."
  },
  {
    id: 3049,
    niveau: 6,
    question: "Que se passe-t-il traditionnellement le 14 juillet à Paris ?",
    options: [
      "Un défilé militaire sur les Champs-Élysées",
      "Une messe à Notre-Dame",
      "Une course à pied",
      "Un discours du Pape"
    ],
    correctHash: hashAnswer(3049, 0),
    explication: "Chaque 14 juillet, un défilé militaire a lieu sur les Champs-Élysées en présence du Président de la République."
  },
  {
    id: 3050,
    niveau: 6,
    question: "Depuis quand le 14 juillet est-il la fête nationale ?",
    options: [
      "Depuis 1880",
      "Depuis 1789",
      "Depuis 1958",
      "Depuis 1945"
    ],
    correctHash: hashAnswer(3050, 0),
    explication: "Le 14 juillet est devenu officiellement la fête nationale française par une loi votée le 6 juillet 1880."
  },
];

// ==================== NIVEAU 7 : AUTRES SYMBOLES OFFICIELS ====================
const NIVEAU_7: QuizQuestion[] = [
  {
    id: 3051,
    niveau: 7,
    question: "Quel est l'arbre symbole de la République ?",
    options: [
      "Le chêne (arbre de la liberté)",
      "Le sapin",
      "L'olivier",
      "Le platane"
    ],
    correctHash: hashAnswer(3051, 0),
    explication: "Le chêne est considéré comme l'arbre de la liberté. Des arbres de la liberté ont été plantés pendant la Révolution dans toute la France."
  },
  {
    id: 3052,
    niveau: 7,
    question: "Quel est le Grand Sceau de la République ?",
    options: [
      "Un sceau représentant la Liberté assise",
      "Une image du drapeau tricolore",
      "Le portrait du Président",
      "Une carte de France"
    ],
    correctHash: hashAnswer(3052, 0),
    explication: "Le Grand Sceau de France représente la Liberté assise, tenant un gouvernail et un faisceau de licteur. Il sert à sceller les textes constitutionnels."
  },
  {
    id: 3053,
    niveau: 7,
    question: "Quelle fleur était autrefois un symbole de la royauté française ?",
    options: [
      "La fleur de lys",
      "La rose",
      "L'œillet",
      "Le tournesol"
    ],
    correctHash: hashAnswer(3053, 0),
    explication: "La fleur de lys était le symbole de la monarchie française. Elle n'est plus un symbole officiel de la République."
  },
  {
    id: 3054,
    niveau: 7,
    question: "Où se trouve le Grand Sceau de la République ?",
    options: [
      "Au Ministère de la Justice",
      "À l'Élysée",
      "À l'Assemblée nationale",
      "Au Sénat"
    ],
    correctHash: hashAnswer(3054, 0),
    explication: "Le Grand Sceau de France est conservé au Ministère de la Justice. Le Garde des Sceaux (Ministre de la Justice) en est le gardien."
  },
  {
    id: 3055,
    niveau: 7,
    question: "Le faisceau de licteur symbolise :",
    options: [
      "L'unité et la force de la République",
      "La guerre et la conquête",
      "La royauté",
      "La religion"
    ],
    correctHash: hashAnswer(3055, 0),
    explication: "Le faisceau de licteur (baguettes liées) symbolise l'union fait la force. Séparées, les baguettes se cassent ; ensemble, elles résistent."
  },
];

// ==================== NIVEAU 8 : LIEUX SYMBOLIQUES ====================
const NIVEAU_8: QuizQuestion[] = [
  {
    id: 3056,
    niveau: 8,
    question: "Quel monument parisien abrite la tombe du Soldat inconnu ?",
    options: [
      "L'Arc de Triomphe",
      "Le Panthéon",
      "Les Invalides",
      "La tour Eiffel"
    ],
    correctHash: hashAnswer(3056, 0),
    explication: "La tombe du Soldat inconnu se trouve sous l'Arc de Triomphe, avec une flamme éternelle ravivée chaque soir à 18h30."
  },
  {
    id: 3057,
    niveau: 8,
    question: "Où reposent les grands personnages de la France ?",
    options: [
      "Au Panthéon",
      "À Notre-Dame de Paris",
      "Au Louvre",
      "À Versailles"
    ],
    correctHash: hashAnswer(3057, 0),
    explication: "Le Panthéon abrite les sépultures des grandes figures françaises : Victor Hugo, Marie Curie, Jean Moulin, Simone Veil..."
  },
  {
    id: 3058,
    niveau: 8,
    question: "Quel est le palais présidentiel français ?",
    options: [
      "Le Palais de l'Élysée",
      "Le Château de Versailles",
      "Le Palais du Louvre",
      "Le Palais Bourbon"
    ],
    correctHash: hashAnswer(3058, 0),
    explication: "Le Palais de l'Élysée, situé à Paris, est la résidence officielle du Président de la République depuis 1848."
  },
  {
    id: 3059,
    niveau: 8,
    question: "Où siège l'Assemblée nationale ?",
    options: [
      "Au Palais Bourbon",
      "Au Palais du Luxembourg",
      "À l'Élysée",
      "À Matignon"
    ],
    correctHash: hashAnswer(3059, 0),
    explication: "L'Assemblée nationale siège au Palais Bourbon, sur la rive gauche de la Seine à Paris."
  },
  {
    id: 3060,
    niveau: 8,
    question: "Où siège le Sénat ?",
    options: [
      "Au Palais du Luxembourg",
      "Au Palais Bourbon",
      "À l'Élysée",
      "Au Palais de Justice"
    ],
    correctHash: hashAnswer(3060, 0),
    explication: "Le Sénat siège au Palais du Luxembourg, dans le 6e arrondissement de Paris."
  },
];

// ==================== NIVEAU 9 : DATES ET COMMÉMORATIONS ====================
const NIVEAU_9: QuizQuestion[] = [
  {
    id: 3061,
    niveau: 9,
    question: "Que commémore le 11 novembre ?",
    options: [
      "L'armistice de la Première Guerre mondiale (1918)",
      "La fin de la Seconde Guerre mondiale",
      "La prise de la Bastille",
      "La libération de Paris"
    ],
    correctHash: hashAnswer(3061, 0),
    explication: "Le 11 novembre 1918 marque l'armistice qui a mis fin à la Première Guerre mondiale. C'est un jour férié et de commémoration."
  },
  {
    id: 3062,
    niveau: 9,
    question: "Que commémore le 8 mai ?",
    options: [
      "La victoire de 1945 (fin de la Seconde Guerre mondiale en Europe)",
      "Le débarquement en Normandie",
      "La fin de la guerre d'Algérie",
      "La création de l'ONU"
    ],
    correctHash: hashAnswer(3062, 0),
    explication: "Le 8 mai 1945 marque la capitulation de l'Allemagne nazie et la fin de la Seconde Guerre mondiale en Europe."
  },
  {
    id: 3063,
    niveau: 9,
    question: "Quelle journée commémore l'abolition de l'esclavage en France métropolitaine ?",
    options: [
      "Le 10 mai",
      "Le 1er janvier",
      "Le 27 avril",
      "Le 21 juin"
    ],
    correctHash: hashAnswer(3063, 0),
    explication: "Le 10 mai est la Journée nationale des mémoires de la traite, de l'esclavage et de leurs abolitions, instaurée en 2006."
  },
  {
    id: 3064,
    niveau: 9,
    question: "Quelle date est associée à la Déclaration des droits de l'homme ?",
    options: [
      "Le 26 août 1789",
      "Le 14 juillet 1789",
      "Le 4 août 1789",
      "Le 21 septembre 1792"
    ],
    correctHash: hashAnswer(3064, 0),
    explication: "La Déclaration des droits de l'homme et du citoyen a été adoptée le 26 août 1789 par l'Assemblée constituante."
  },
  {
    id: 3065,
    niveau: 9,
    question: "Le drapeau européen (12 étoiles sur fond bleu) flotte aux côtés du drapeau français depuis :",
    options: [
      "L'entrée de la France dans l'Union européenne",
      "La Révolution française",
      "La Première Guerre mondiale",
      "La création de l'ONU"
    ],
    correctHash: hashAnswer(3065, 0),
    explication: "Le drapeau européen accompagne le drapeau français sur les bâtiments officiels depuis que la France fait partie de l'Union européenne."
  },
];

// ==================== NIVEAU 10 : SYNTHÈSE ET APPROFONDISSEMENT ====================
const NIVEAU_10: QuizQuestion[] = [
  {
    id: 3066,
    niveau: 10,
    question: "Quels sont les trois symboles mentionnés dans l'article 2 de la Constitution ?",
    options: [
      "Le drapeau tricolore, La Marseillaise, la devise",
      "Marianne, le coq, le drapeau",
      "Le Panthéon, l'Élysée, Versailles",
      "Le 14 juillet, le 11 novembre, le 8 mai"
    ],
    correctHash: hashAnswer(3066, 0),
    explication: "L'article 2 de la Constitution mentionne : le drapeau tricolore (emblème), La Marseillaise (hymne) et « Liberté, Égalité, Fraternité » (devise)."
  },
  {
    id: 3067,
    niveau: 10,
    question: "Quel symbole représente à la fois le peuple et la République ?",
    options: [
      "Marianne",
      "Le coq gaulois",
      "Le drapeau tricolore",
      "L'Arc de Triomphe"
    ],
    correctHash: hashAnswer(3067, 0),
    explication: "Marianne représente à la fois le peuple français (son prénom était très courant) et les valeurs de la République (liberté, raison)."
  },
  {
    id: 3068,
    niveau: 10,
    question: "L'ensemble des symboles républicains reflète :",
    options: [
      "Les valeurs issues de la Révolution française",
      "L'héritage de la monarchie",
      "L'influence de l'Empire romain",
      "La culture religieuse catholique"
    ],
    correctHash: hashAnswer(3068, 0),
    explication: "Les symboles de la République (drapeau, Marseillaise, devise, Marianne) sont tous issus de la Révolution française de 1789."
  },
  {
    id: 3069,
    niveau: 10,
    question: "Pourquoi les symboles nationaux sont-ils importants ?",
    options: [
      "Ils créent un sentiment d'appartenance et d'unité nationale",
      "Ils permettent de décorer les bâtiments",
      "Ils sont obligatoires selon l'Union européenne",
      "Ils servent uniquement lors des compétitions sportives"
    ],
    correctHash: hashAnswer(3069, 0),
    explication: "Les symboles nationaux renforcent le sentiment d'appartenance à la nation et transmettent les valeurs communes de la République."
  },
  {
    id: 3070,
    niveau: 10,
    question: "Le serment de citoyenneté fait référence à :",
    options: [
      "Le respect des valeurs et symboles de la République",
      "L'obligation de servir dans l'armée",
      "Le paiement des impôts",
      "L'interdiction de voyager à l'étranger"
    ],
    correctHash: hashAnswer(3070, 0),
    explication: "Lors de la naturalisation, le nouveau citoyen s'engage à respecter les valeurs et symboles de la République française."
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

export function getQuestionsSymboles(niveau: number): QuizQuestion[] {
  return ALL_QUESTIONS.filter(q => q.niveau === niveau);
}

export function getAllQuestionsSymboles(): QuizQuestion[] {
  return ALL_QUESTIONS;
}

export default ALL_QUESTIONS;
