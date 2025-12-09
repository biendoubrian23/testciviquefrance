import { ExamenBlanc, Question, hashAnswer } from './types';

// =====================================================
// EXAMEN BLANC #2 - 40 QUESTIONS
// Répartition officielle :
// 1. Principes et valeurs (11 questions)
// 2. Système institutionnel (6 questions)
// 3. Droits et devoirs (11 questions)
// 4. Histoire/géographie/culture (8 questions)
// 5. Vivre en France (4 questions)
// =====================================================

const EXAM_NUMBER = 2;

const questions: Question[] = [
  // ==================== 1. PRINCIPES ET VALEURS (11 questions) ====================
  
  {
    id: 1,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "Quel animal symbolise la France ?",
    options: ["L'aigle", "Le coq", "Le lion", "Le taureau"],
    correctHash: hashAnswer(EXAM_NUMBER, 1, 1),
    explication: "Le coq gaulois est l'un des symboles de la France. Il représente la vigilance et le courage. Il figure notamment sur les maillots des équipes nationales sportives."
  },
  {
    id: 2,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "Marianne est le symbole de :",
    options: ["La monarchie française", "La République française", "L'Empire français", "La région parisienne"],
    correctHash: hashAnswer(EXAM_NUMBER, 2, 1),
    explication: "Marianne est la représentation symbolique de la République française. Son buste figure dans toutes les mairies. Elle porte souvent un bonnet phrygien, symbole de liberté."
  },
  {
    id: 3,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "Quelle est la fête nationale française ?",
    options: ["Le 1er mai", "Le 8 mai", "Le 14 juillet", "Le 11 novembre"],
    correctHash: hashAnswer(EXAM_NUMBER, 3, 2),
    explication: "Le 14 juillet est la fête nationale française. Elle commémore la prise de la Bastille le 14 juillet 1789 et la Fête de la Fédération du 14 juillet 1790."
  },
  {
    id: 4,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "Dans un établissement scolaire public, un enseignant peut-il porter des signes religieux ?",
    options: [
      "Oui, c'est sa liberté",
      "Non, il doit respecter le principe de neutralité",
      "Oui, s'il enseigne la religion",
      "Cela dépend de l'école"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 4, 1),
    explication: "Les enseignants, en tant qu'agents publics, doivent respecter le principe de neutralité et ne peuvent afficher leurs convictions religieuses dans l'exercice de leurs fonctions."
  },
  {
    id: 5,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "La laïcité garantit :",
    options: [
      "L'interdiction des religions",
      "La liberté de culte et la neutralité de l'État",
      "La priorité à la religion catholique",
      "L'athéisme obligatoire"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 5, 1),
    explication: "La laïcité garantit la liberté de conscience, le libre exercice des cultes et la neutralité de l'État vis-à-vis des religions, dans le respect de l'ordre public."
  },
  {
    id: 6,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité",
    question: "Quelle forme de discrimination est interdite en France ?",
    options: [
      "Uniquement la discrimination raciale",
      "Toutes les formes de discrimination",
      "Uniquement la discrimination religieuse",
      "Aucune discrimination n'est interdite"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 6, 1),
    explication: "La loi française interdit toutes les formes de discrimination : origine, sexe, situation de famille, orientation sexuelle, âge, opinions politiques, activités syndicales, religion, apparence physique, handicap, etc."
  },
  {
    id: 7,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "Un commerçant refuse de servir une personne en raison de son origine. Quelle est la sanction ?",
    options: [
      "Simple avertissement",
      "Amende de 50 euros",
      "Jusqu'à 3 ans de prison et 45 000 € d'amende",
      "Aucune sanction, c'est légal"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 7, 2),
    explication: "Refuser un bien ou un service en raison de l'origine est une discrimination punie par le Code pénal : jusqu'à 3 ans de prison et 45 000 € d'amende."
  },
  {
    id: 8,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "En France, une femme mariée doit-elle obtenir l'autorisation de son mari pour travailler ?",
    options: [
      "Oui, toujours",
      "Non, elle a la même liberté que les hommes",
      "Oui, si elle a des enfants",
      "Cela dépend du contrat de mariage"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 8, 1),
    explication: "Depuis 1965, une femme mariée peut exercer une profession sans le consentement de son mari. L'égalité femmes-hommes est un principe constitutionnel."
  },
  {
    id: 9,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "Vous voyez quelqu'un taguer un monument public. Que devez-vous faire ?",
    options: [
      "Rien, ce n'est pas votre problème",
      "Prendre une photo et appeler la police (17)",
      "Aider la personne",
      "Filmer et publier sur les réseaux sociaux"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 9, 1),
    explication: "La dégradation de bien public est un délit. Il convient d'alerter les forces de l'ordre (17 ou 112) et éventuellement de prendre des photos comme preuves."
  },
  {
    id: 10,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "Un collègue fait des remarques sexistes. Que dit la loi ?",
    options: [
      "C'est normal, c'est de l'humour",
      "C'est interdit, c'est du harcèlement",
      "C'est autorisé entre collègues",
      "Cela dépend de l'entreprise"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 10, 1),
    explication: "Les propos sexistes constituent du harcèlement sexuel ou moral, interdit par le Code du travail et le Code pénal. Les sanctions peuvent être sévères."
  },
  {
    id: 11,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Fraternité",
    question: "Que signifie le principe de fraternité ?",
    options: [
      "L'obligation d'être ami avec tout le monde",
      "La solidarité et l'entraide entre tous les citoyens",
      "L'obéissance aux autorités",
      "Le respect des traditions familiales"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 11, 1),
    explication: "La fraternité implique la solidarité et l'entraide entre tous les membres de la société, sans distinction. C'est le troisième pilier de la devise républicaine."
  },

  // ==================== 2. SYSTÈME INSTITUTIONNEL (6 questions) ====================
  
  {
    id: 12,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Démocratie et droit de vote",
    question: "Pour voter en France, il faut :",
    options: [
      "Avoir 18 ans et être inscrit sur les listes électorales",
      "Avoir 21 ans minimum",
      "Avoir un diplôme",
      "Être propriétaire"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 12, 0),
    explication: "Pour voter en France, il faut avoir 18 ans, être de nationalité française, jouir de ses droits civils et politiques, et être inscrit sur les listes électorales."
  },
  {
    id: 13,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Démocratie et droit de vote",
    question: "Les députés sont élus pour :",
    options: ["3 ans", "4 ans", "5 ans", "7 ans"],
    correctHash: hashAnswer(EXAM_NUMBER, 13, 2),
    explication: "Les députés de l'Assemblée nationale sont élus pour 5 ans au suffrage universel direct. Ils peuvent être réélus sans limitation."
  },
  {
    id: 14,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Organisation de la République",
    question: "Qui nomme le Premier ministre ?",
    options: ["Les députés", "Le Président de la République", "Les citoyens par vote", "Le Sénat"],
    correctHash: hashAnswer(EXAM_NUMBER, 14, 1),
    explication: "Le Premier ministre est nommé par le Président de la République. Il est le chef du Gouvernement et dirige l'action de celui-ci."
  },
  {
    id: 15,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Organisation de la République",
    question: "Le Conseil constitutionnel vérifie :",
    options: [
      "Les impôts des citoyens",
      "La conformité des lois à la Constitution",
      "Les diplômes des fonctionnaires",
      "Les budgets des entreprises"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 15, 1),
    explication: "Le Conseil constitutionnel contrôle la conformité des lois à la Constitution. Il veille au respect de celle-ci et juge de la régularité des élections nationales."
  },
  {
    id: 16,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Collectivités territoriales",
    question: "Qui dirige une commune en France ?",
    options: ["Le préfet", "Le maire", "Le député", "Le président du conseil régional"],
    correctHash: hashAnswer(EXAM_NUMBER, 16, 1),
    explication: "Le maire est élu par le conseil municipal et dirige la commune. Il est à la fois agent de l'État et représentant de la collectivité locale."
  },
  {
    id: 17,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Institutions européennes",
    question: "Quelle est la monnaie officielle de la France depuis 2002 ?",
    options: ["Le franc", "L'euro", "Le dollar", "La livre"],
    correctHash: hashAnswer(EXAM_NUMBER, 17, 1),
    explication: "L'euro est la monnaie officielle de la France depuis le 1er janvier 2002, remplaçant le franc français. Elle est utilisée par 20 pays de l'Union européenne."
  },

  // ==================== 3. DROITS ET DEVOIRS (11 questions) ====================
  
  {
    id: 18,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "La liberté d'expression est-elle absolue en France ?",
    options: [
      "Oui, on peut tout dire",
      "Non, elle est limitée par le respect d'autrui et l'ordre public",
      "Oui, sauf pour les politiciens",
      "Non, elle n'existe pas"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 18, 1),
    explication: "La liberté d'expression est un droit fondamental mais elle a des limites : interdiction de l'injure, la diffamation, l'incitation à la haine, l'apologie du terrorisme, etc."
  },
  {
    id: 19,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "En France, le droit de grève est-il autorisé ?",
    options: [
      "Non, c'est interdit",
      "Oui, c'est un droit constitutionnel",
      "Oui, mais seulement pour les fonctionnaires",
      "Non, sauf autorisation du patron"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 19, 1),
    explication: "Le droit de grève est reconnu par le Préambule de la Constitution de 1946. Il s'exerce dans le cadre des lois qui le réglementent, notamment pour les services publics."
  },
  {
    id: 20,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoirs du citoyen",
    question: "Quel est le devoir de tout citoyen français ?",
    options: [
      "Payer ses impôts",
      "Voter obligatoirement",
      "Posséder une voiture",
      "Être diplômé"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 20, 0),
    explication: "Payer ses impôts est un devoir de tout citoyen. Les impôts financent les services publics : éducation, santé, sécurité, infrastructures, etc."
  },
  {
    id: 21,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoirs du citoyen",
    question: "Le service national universel (SNU) concerne :",
    options: [
      "Tous les jeunes de 15 à 17 ans",
      "Uniquement les garçons",
      "Uniquement les militaires",
      "Les personnes de plus de 25 ans"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 21, 0),
    explication: "Le Service National Universel (SNU) s'adresse aux jeunes de 15 à 17 ans, filles et garçons. Il comprend un séjour de cohésion et une mission d'intérêt général."
  },
  {
    id: 22,
    categorie: "Droits et devoirs",
    sousCategorie: "Justice",
    question: "En France, qui peut juger une personne ?",
    options: [
      "La police",
      "Les tribunaux avec des juges",
      "Le maire",
      "Le Président de la République"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 22, 1),
    explication: "Seuls les tribunaux, composés de juges indépendants, peuvent juger une personne. La police enquête et arrête, mais ne juge pas. C'est le principe de séparation des pouvoirs."
  },
  {
    id: 23,
    categorie: "Droits et devoirs",
    sousCategorie: "Justice",
    question: "Que signifie la présomption d'innocence ?",
    options: [
      "Tout suspect est coupable",
      "Toute personne est considérée comme innocente tant que sa culpabilité n'est pas prouvée",
      "Seuls les riches sont innocents",
      "Il n'y a pas de procès"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 23, 1),
    explication: "La présomption d'innocence est un principe fondamental : toute personne accusée d'une infraction est présumée innocente jusqu'à ce que sa culpabilité soit légalement établie."
  },
  {
    id: 24,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits sociaux",
    question: "Le système de sécurité sociale en France garantit :",
    options: [
      "Uniquement les retraites",
      "La santé, la famille, le chômage et la retraite",
      "Uniquement la santé",
      "Rien du tout"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 24, 1),
    explication: "La Sécurité sociale couvre 4 branches : maladie (santé), famille (allocations), accidents du travail, et vieillesse (retraite). Elle est financée par les cotisations sociales."
  },
  {
    id: 25,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits sociaux",
    question: "L'école est-elle obligatoire en France ?",
    options: [
      "Non, c'est facultatif",
      "Oui, de 3 à 16 ans",
      "Oui, mais seulement jusqu'à 14 ans",
      "Oui, jusqu'à 18 ans"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 25, 1),
    explication: "L'instruction est obligatoire de 3 à 16 ans en France. Elle peut être dispensée dans une école publique, privée ou à domicile (avec contrôles)."
  },
  {
    id: 26,
    categorie: "Droits et devoirs",
    sousCategorie: "Défense nationale",
    question: "La Journée Défense et Citoyenneté (JDC) est obligatoire pour :",
    options: [
      "Personne",
      "Tous les jeunes Français entre 16 et 25 ans",
      "Uniquement les militaires",
      "Uniquement les hommes"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 26, 1),
    explication: "La JDC est obligatoire pour tous les jeunes Français, filles et garçons, entre 16 et 25 ans. Elle dure une journée et permet de sensibiliser à la défense et la citoyenneté."
  },
  {
    id: 27,
    categorie: "Droits et devoirs",
    sousCategorie: "Vie démocratique",
    question: "Une pétition citoyenne permet de :",
    options: [
      "Élire le Président",
      "Proposer une loi ou demander un changement",
      "Annuler les impôts",
      "Dissoudre l'Assemblée"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 27, 1),
    explication: "Une pétition permet aux citoyens de se rassembler autour d'une demande collective adressée aux pouvoirs publics. C'est un outil de participation démocratique."
  },
  {
    id: 28,
    categorie: "Droits et devoirs",
    sousCategorie: "Vie démocratique",
    question: "Un citoyen peut-il participer à la vie locale ?",
    options: [
      "Non, c'est réservé aux élus",
      "Oui, par le vote, les associations, les conseils de quartier",
      "Oui, mais seulement s'il est riche",
      "Non, c'est interdit"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 28, 1),
    explication: "Les citoyens peuvent participer à la vie locale de nombreuses façons : vote, conseils de quartier, associations, conseils citoyens, consultations publiques, etc."
  },

  // ==================== 4. HISTOIRE/GÉOGRAPHIE/CULTURE (8 questions) ====================
  
  {
    id: 29,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire de France",
    question: "Quelle révolution a mis fin à la monarchie absolue en France ?",
    options: ["La Révolution de 1789", "La Révolution de 1848", "Mai 1968", "La Commune de Paris"],
    correctHash: hashAnswer(EXAM_NUMBER, 29, 0),
    explication: "La Révolution française de 1789 a mis fin à la monarchie absolue. Elle a abouti à la proclamation de la République et à l'adoption de la Déclaration des droits de l'homme."
  },
  {
    id: 30,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire de France",
    question: "Qui était Napoléon Bonaparte ?",
    options: [
      "Un roi de France",
      "Un empereur et général",
      "Un président de la République",
      "Un philosophe"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 30, 1),
    explication: "Napoléon Bonaparte fut Premier consul puis Empereur des Français de 1804 à 1815. Il a modernisé la France (Code civil, lycées) et mené de nombreuses campagnes militaires en Europe."
  },
  {
    id: 31,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire de France",
    question: "Quelle guerre a duré de 1914 à 1918 ?",
    options: ["La guerre de Cent Ans", "La Première Guerre mondiale", "La Seconde Guerre mondiale", "La guerre d'Algérie"],
    correctHash: hashAnswer(EXAM_NUMBER, 31, 1),
    explication: "La Première Guerre mondiale (1914-1918) a opposé les Alliés (dont la France) aux Empires centraux. Elle fit plus de 1,4 million de morts français."
  },
  {
    id: 32,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire de France",
    question: "Le 8 mai commémore :",
    options: [
      "La prise de la Bastille",
      "La victoire de 1945 et la fin de la Seconde Guerre mondiale en Europe",
      "L'armistice de 1918",
      "La libération de Paris"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 32, 1),
    explication: "Le 8 mai 1945 marque la capitulation de l'Allemagne nazie et la fin de la Seconde Guerre mondiale en Europe. C'est un jour férié en France."
  },
  {
    id: 33,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Géographie",
    question: "Quelle est la capitale de la France ?",
    options: ["Marseille", "Lyon", "Paris", "Lille"],
    correctHash: hashAnswer(EXAM_NUMBER, 33, 2),
    explication: "Paris est la capitale de la France et le chef-lieu de la région Île-de-France. C'est la ville la plus peuplée de France avec environ 2,1 millions d'habitants."
  },
  {
    id: 34,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Géographie",
    question: "La France métropolitaine a combien de régions depuis 2016 ?",
    options: ["13 régions", "18 régions", "22 régions", "27 régions"],
    correctHash: hashAnswer(EXAM_NUMBER, 34, 0),
    explication: "Depuis la réforme territoriale de 2016, la France métropolitaine compte 13 régions (contre 22 auparavant). Il y a également 5 régions d'outre-mer."
  },
  {
    id: 35,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Géographie",
    question: "Quel océan borde la France à l'ouest ?",
    options: ["L'océan Indien", "L'océan Pacifique", "L'océan Atlantique", "L'océan Arctique"],
    correctHash: hashAnswer(EXAM_NUMBER, 35, 2),
    explication: "L'océan Atlantique borde la France à l'ouest. La France possède également des façades sur la mer du Nord, la Manche et la mer Méditerranée."
  },
  {
    id: 36,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Culture",
    question: "Quel monument parisien est le plus visité au monde ?",
    options: ["Le Louvre", "La tour Eiffel", "Notre-Dame", "L'Arc de Triomphe"],
    correctHash: hashAnswer(EXAM_NUMBER, 36, 1),
    explication: "La tour Eiffel est le monument payant le plus visité au monde avec environ 7 millions de visiteurs par an. Elle a été construite pour l'Exposition universelle de 1889."
  },

  // ==================== 5. VIVRE EN FRANCE (4 questions) ====================
  
  {
    id: 37,
    categorie: "Vivre en France",
    sousCategorie: "Vie quotidienne",
    question: "En cas d'urgence médicale, quel numéro appeler ?",
    options: ["15", "17", "18", "112"],
    correctHash: hashAnswer(EXAM_NUMBER, 37, 0),
    explication: "Le 15 est le numéro du SAMU pour les urgences médicales. Le 112 est le numéro d'urgence européen qui redirige vers le service approprié."
  },
  {
    id: 38,
    categorie: "Vivre en France",
    sousCategorie: "Vie quotidienne",
    question: "Pour signaler un incendie, quel numéro appeler ?",
    options: ["15", "17", "18", "114"],
    correctHash: hashAnswer(EXAM_NUMBER, 38, 2),
    explication: "Le 18 est le numéro des pompiers. Ils interviennent pour les incendies, accidents, et également pour certaines urgences médicales."
  },
  {
    id: 39,
    categorie: "Vivre en France",
    sousCategorie: "Services publics",
    question: "La carte Vitale sert à :",
    options: [
      "Voter",
      "Se faire rembourser les soins de santé",
      "Prendre le train",
      "Ouvrir un compte bancaire"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 39, 1),
    explication: "La carte Vitale est la carte d'assuré social. Elle facilite le remboursement des soins de santé par la Sécurité sociale et les mutuelles."
  },
  {
    id: 40,
    categorie: "Vivre en France",
    sousCategorie: "Logement",
    question: "Que doit faire un locataire avant de quitter son logement ?",
    options: [
      "Rien",
      "Donner un préavis au propriétaire (généralement 3 mois pour un logement vide)",
      "Changer les serrures",
      "Vendre l'appartement"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 40, 1),
    explication: "Le locataire doit respecter un délai de préavis : 3 mois pour un logement vide, 1 mois pour un meublé (ou dans certains cas particuliers). Ce préavis doit être notifié au propriétaire par écrit."
  },
];

export const EXAMEN_2: ExamenBlanc = {
  numero: 2,
  titre: "Examen blanc #2",
  description: "40 questions en conditions réelles d'examen",
  questions,
  dureeMinutes: 45,
  totalQuestions: 40
};
