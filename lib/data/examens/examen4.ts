// ==================== EXAMEN BLANC #4 ====================
// Répartition officielle :
// 1. Principes et valeurs (11 questions)
// 2. Système institutionnel (6 questions)
// 3. Droits et devoirs (11 questions)
// 4. Histoire/géographie/culture (8 questions)
// 5. Vivre en France (4 questions)
// ==========================================================================

import { ExamenBlanc, Question } from './types';

const EXAM_NUMBER = 4;

// Fonction de hash simple (djb2) pour l'examen 4
function hashAnswer(questionId: number, answerIndex: number): string {
  const str = `exam${EXAM_NUMBER}_q${questionId}_a${answerIndex}_civique2024`;
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i);
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16);
}

const questions: Question[] = [
  // ==================== 1. PRINCIPES ET VALEURS (11 questions) ====================
  
  {
    id: 1,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "Où trouve-t-on généralement la devise de la République française ?",
    options: [
      "Uniquement sur les pièces de monnaie",
      "Sur les frontons des édifices publics et monuments",
      "Seulement à Paris",
      "Dans les livres d'histoire uniquement"
    ],
    correctHash: hashAnswer(1, 1),
    explication: "La devise 'Liberté, Égalité, Fraternité' est gravée sur les frontons des mairies, écoles, palais de justice et autres édifices publics dans toute la France."
  },
  {
    id: 2,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "Que représente Marianne avec son bonnet phrygien ?",
    options: [
      "La royauté",
      "La liberté et la République",
      "La religion",
      "L'armée"
    ],
    correctHash: hashAnswer(2, 1),
    explication: "Marianne coiffée du bonnet phrygien symbolise la liberté et la République française. Le bonnet phrygien était porté par les esclaves affranchis dans l'Antiquité."
  },
  {
    id: 3,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "Dans un hôpital public, peut-on refuser d'être soigné par un médecin pour des raisons religieuses ?",
    options: [
      "Oui, c'est un droit absolu",
      "Non, sauf urgence vitale où le patient ne peut pas choisir",
      "Oui, mais seulement le week-end",
      "Cela dépend de la région"
    ],
    correctHash: hashAnswer(3, 1),
    explication: "Le principe de laïcité et de non-discrimination s'applique. On ne peut généralement pas refuser un soignant pour des raisons religieuses, sauf dans certains cas spécifiques et hors urgence."
  },
  {
    id: 4,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "La loi de 1905 sur la laïcité établit :",
    options: [
      "L'interdiction de toutes les religions",
      "La séparation des Églises et de l'État",
      "Une religion d'État obligatoire",
      "L'interdiction de construire des lieux de culte"
    ],
    correctHash: hashAnswer(4, 1),
    explication: "La loi de 1905 établit la séparation des Églises et de l'État. L'État ne reconnaît, ne salarie ni ne subventionne aucun culte, mais garantit la liberté de conscience."
  },
  {
    id: 5,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité",
    question: "L'égalité entre les femmes et les hommes signifie :",
    options: [
      "Qu'ils doivent faire exactement les mêmes métiers",
      "Qu'ils ont les mêmes droits et devoirs",
      "Que les femmes ont plus de droits",
      "Qu'ils doivent vivre séparément"
    ],
    correctHash: hashAnswer(5, 1),
    explication: "L'égalité entre femmes et hommes signifie qu'ils disposent des mêmes droits politiques, civils, économiques et sociaux, et des mêmes devoirs. C'est un principe constitutionnel."
  },
  {
    id: 6,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité",
    question: "Le handicap peut-il être une raison de discriminer quelqu'un ?",
    options: [
      "Oui, dans certains emplois",
      "Non, c'est strictement interdit par la loi",
      "Oui, si c'est discret",
      "Cela dépend du type de handicap"
    ],
    correctHash: hashAnswer(6, 1),
    explication: "La discrimination fondée sur le handicap est strictement interdite par la loi. Les entreprises et services publics doivent faciliter l'accessibilité et l'égalité des chances."
  },
  {
    id: 7,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Liberté",
    question: "La liberté d'association en France permet de :",
    options: [
      "Créer une association sans autorisation préalable",
      "Créer une association seulement avec accord du gouvernement",
      "Créer une association uniquement à Paris",
      "Interdire toute forme de regroupement"
    ],
    correctHash: hashAnswer(7, 0),
    explication: "La liberté d'association, garantie par la loi de 1901, permet de créer librement une association sans autorisation préalable, par simple déclaration en préfecture."
  },
  {
    id: 8,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Liberté",
    question: "En France, peut-on critiquer le gouvernement ?",
    options: [
      "Non, c'est interdit",
      "Oui, c'est garanti par la liberté d'expression",
      "Oui, mais seulement en privé",
      "Non, sauf pendant les élections"
    ],
    correctHash: hashAnswer(8, 1),
    explication: "La liberté d'expression garantit le droit de critiquer le gouvernement et les politiques publiques. C'est un pilier de la démocratie, tant que cela reste dans le cadre de la loi."
  },
  {
    id: 9,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Fraternité",
    question: "La fraternité implique :",
    options: [
      "D'avoir des frères et sœurs",
      "La solidarité entre tous les membres de la société",
      "De vivre en famille uniquement",
      "D'appartenir à une association"
    ],
    correctHash: hashAnswer(9, 1),
    explication: "La fraternité est un principe qui implique la solidarité, l'entraide et le respect mutuel entre tous les membres de la société, au-delà des différences."
  },
  {
    id: 10,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Fraternité",
    question: "Aider une personne en danger est :",
    options: [
      "Facultatif",
      "Une obligation morale et parfois légale (non-assistance à personne en danger)",
      "Réservé aux professionnels uniquement",
      "Interdit pour éviter les accidents"
    ],
    correctHash: hashAnswer(10, 1),
    explication: "Porter assistance à une personne en danger est une obligation légale en France. Ne pas le faire constitue le délit de non-assistance à personne en danger."
  },
  {
    id: 11,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Lutte contre les discriminations",
    question: "Le racisme est :",
    options: [
      "Une opinion personnelle protégée",
      "Un délit puni par la loi",
      "Autorisé dans le cadre privé",
      "Une tradition culturelle"
    ],
    correctHash: hashAnswer(11, 1),
    explication: "Le racisme est un délit en France. Les actes, propos ou discriminations racistes sont punis par la loi pénale, qu'ils soient commis en public ou en privé."
  },

  // ==================== 2. SYSTÈME INSTITUTIONNEL (6 questions) ====================
  
  {
    id: 12,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Démocratie et droit de vote",
    question: "Pour être élu Président de la République, il faut obtenir :",
    options: [
      "La majorité relative (le plus de voix)",
      "La majorité absolue (plus de 50% des voix)",
      "Au moins 30% des voix",
      "L'accord des députés"
    ],
    correctHash: hashAnswer(12, 1),
    explication: "Pour être élu Président, il faut obtenir la majorité absolue des suffrages exprimés (plus de 50%). Si aucun candidat ne l'obtient au premier tour, un second tour est organisé."
  },
  {
    id: 13,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Démocratie et droit de vote",
    question: "Combien y a-t-il de députés à l'Assemblée nationale ?",
    options: ["348", "577", "920", "100"],
    correctHash: hashAnswer(13, 1),
    explication: "L'Assemblée nationale compte 577 députés élus au suffrage universel direct pour 5 ans. Ils représentent les circonscriptions législatives de France."
  },
  {
    id: 14,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Organisation de la République",
    question: "Qui peut dissoudre l'Assemblée nationale ?",
    options: [
      "Le Premier ministre",
      "Le Président de la République",
      "Les députés eux-mêmes",
      "Le Conseil constitutionnel"
    ],
    correctHash: hashAnswer(14, 1),
    explication: "Le Président de la République peut dissoudre l'Assemblée nationale. Cette décision entraîne de nouvelles élections législatives dans les 60 jours."
  },
  {
    id: 15,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Organisation de la République",
    question: "Le Sénat représente :",
    options: [
      "Les partis politiques",
      "Les collectivités territoriales",
      "Les syndicats",
      "Les entreprises"
    ],
    correctHash: hashAnswer(15, 1),
    explication: "Le Sénat assure la représentation des collectivités territoriales de la République (communes, départements, régions). Il est élu au suffrage universel indirect."
  },
  {
    id: 16,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Collectivités territoriales",
    question: "Quelle collectivité gère les lycées ?",
    options: ["La commune", "Le département", "La région", "L'État"],
    correctHash: hashAnswer(16, 2),
    explication: "Les régions ont la compétence de construction, d'entretien et de fonctionnement des lycées. Les départements gèrent les collèges et les communes les écoles primaires."
  },
  {
    id: 17,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Institutions européennes",
    question: "Le Parlement européen est élu :",
    options: [
      "Par les chefs d'État",
      "Au suffrage universel direct par les citoyens européens",
      "Par les parlements nationaux",
      "Par tirage au sort"
    ],
    correctHash: hashAnswer(17, 1),
    explication: "Le Parlement européen est élu au suffrage universel direct par les citoyens des pays membres de l'UE, tous les 5 ans. Les élections ont lieu simultanément dans tous les pays."
  },

  // ==================== 3. DROITS ET DEVOIRS (11 questions) ====================
  
  {
    id: 18,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "Le secret médical est :",
    options: [
      "Facultatif selon le médecin",
      "Absolu et protégé par la loi",
      "Réservé aux hôpitaux",
      "Limité aux maladies graves"
    ],
    correctHash: hashAnswer(18, 1),
    explication: "Le secret médical est absolu et protégé par la loi. Les professionnels de santé ne peuvent révéler les informations médicales de leurs patients, sauf exceptions légales très limitées."
  },
  {
    id: 19,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "Qu'est-ce que la liberté de conscience ?",
    options: [
      "Faire ce qu'on veut sans limite",
      "Le droit d'avoir ou non des convictions religieuses ou philosophiques",
      "L'obligation de suivre une religion",
      "Le droit de juger les autres"
    ],
    correctHash: hashAnswer(19, 1),
    explication: "La liberté de conscience garantit à chacun le droit d'avoir, de ne pas avoir, de changer ou de manifester ses convictions religieuses, philosophiques ou politiques."
  },
  {
    id: 20,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "En France, la liberté syndicale permet :",
    options: [
      "D'interdire les syndicats",
      "De créer ou d'adhérer librement à un syndicat",
      "D'obliger tout le monde à adhérer à un syndicat",
      "De créer des syndicats uniquement avec autorisation"
    ],
    correctHash: hashAnswer(20, 1),
    explication: "La liberté syndicale garantit le droit de créer, d'adhérer ou de ne pas adhérer à un syndicat. Les syndicats défendent les intérêts professionnels de leurs membres."
  },
  {
    id: 21,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoirs du citoyen",
    question: "Le vote en France est :",
    options: [
      "Obligatoire sous peine d'amende",
      "Un droit et un devoir civique, mais pas obligatoire",
      "Réservé aux propriétaires",
      "Interdit aux jeunes de moins de 25 ans"
    ],
    correctHash: hashAnswer(21, 1),
    explication: "Le vote est un droit et un devoir civique en France, mais il n'est pas obligatoire. L'abstention n'est pas sanctionnée, bien qu'elle soit souvent considérée comme un manquement citoyen."
  },
  {
    id: 22,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoirs du citoyen",
    question: "La Journée Défense et Citoyenneté (JDC) est obligatoire pour :",
    options: [
      "Les garçons uniquement",
      "Tous les jeunes Français, filles et garçons",
      "Les étrangers résidant en France",
      "Personne, elle est facultative"
    ],
    correctHash: hashAnswer(22, 1),
    explication: "La JDC (anciennement JAPD) est obligatoire pour tous les jeunes Français, filles et garçons, généralement entre 16 et 25 ans. Elle est nécessaire pour passer certains examens."
  },
  {
    id: 23,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoirs du citoyen",
    question: "Respecter la loi en France est :",
    options: [
      "Facultatif si on n'est pas d'accord",
      "Une obligation pour tous, citoyens et résidents",
      "Réservé aux Français uniquement",
      "Facultatif pour les touristes"
    ],
    correctHash: hashAnswer(23, 1),
    explication: "Respecter la loi est une obligation pour tous, Français et étrangers résidant en France. 'Nul n'est censé ignorer la loi' : ne pas la connaître ne dispense pas de la respecter."
  },
  {
    id: 24,
    categorie: "Droits et devoirs",
    sousCategorie: "Justice",
    question: "La présomption d'innocence signifie que :",
    options: [
      "Tout accusé est coupable jusqu'à preuve du contraire",
      "Toute personne est présumée innocente jusqu'à ce que sa culpabilité soit établie",
      "Les juges décident sans preuve",
      "On ne peut jamais être jugé"
    ],
    correctHash: hashAnswer(24, 1),
    explication: "La présomption d'innocence est un principe fondamental : toute personne est présumée innocente tant que sa culpabilité n'a pas été légalement établie par un tribunal."
  },
  {
    id: 25,
    categorie: "Droits et devoirs",
    sousCategorie: "Justice",
    question: "Qui juge les crimes les plus graves en France ?",
    options: [
      "Le tribunal de police",
      "La cour d'assises avec jury populaire",
      "Le Président de la République",
      "Le maire"
    ],
    correctHash: hashAnswer(25, 1),
    explication: "Les crimes les plus graves sont jugés par la cour d'assises, composée de magistrats professionnels et d'un jury populaire de citoyens tirés au sort."
  },
  {
    id: 26,
    categorie: "Droits et devoirs",
    sousCategorie: "Défense nationale",
    question: "Que faut-il faire si on déménage ?",
    options: [
      "Rien de particulier",
      "Déclarer son changement d'adresse (impôts, CAF, sécu...)",
      "Demander l'autorisation au maire",
      "Attendre 5 ans"
    ],
    correctHash: hashAnswer(26, 1),
    explication: "Lors d'un déménagement, il est obligatoire de déclarer son changement d'adresse aux administrations : impôts, sécurité sociale, CAF, préfecture (pour la carte grise), etc."
  },
  {
    id: 27,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits sociaux",
    question: "Le RSA (Revenu de Solidarité Active) est :",
    options: [
      "Une aide pour les étudiants",
      "Une aide pour les personnes sans ressources ou avec faibles revenus",
      "Une prime pour les fonctionnaires",
      "Une taxe obligatoire"
    ],
    correctHash: hashAnswer(27, 1),
    explication: "Le RSA est une aide sociale qui garantit un revenu minimum aux personnes sans ressources ou disposant de faibles revenus. Il remplace le RMI depuis 2009."
  },
  {
    id: 28,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits sociaux",
    question: "En France, peut-on licencier une femme enceinte ?",
    options: [
      "Oui, comme tout salarié",
      "Non, sauf exceptions très limitées (faute grave, impossibilité de maintenir le contrat)",
      "Oui, si elle est enceinte de moins de 3 mois",
      "Cela dépend de l'entreprise"
    ],
    correctHash: hashAnswer(28, 1),
    explication: "Les femmes enceintes bénéficient d'une protection renforcée. Le licenciement est interdit pendant la grossesse et le congé maternité, sauf faute grave ou impossibilité de maintenir le contrat."
  },

  // ==================== 4. HISTOIRE, GÉOGRAPHIE, CULTURE (8 questions) ====================
  
  {
    id: 29,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Grandes dates",
    question: "Que célèbre-t-on le 8 mai ?",
    options: [
      "La fin de la Première Guerre mondiale",
      "La victoire des Alliés en 1945 et la fin de la Seconde Guerre mondiale en Europe",
      "La libération de Paris",
      "La fête nationale"
    ],
    correctHash: hashAnswer(29, 1),
    explication: "Le 8 mai commémore la victoire des Alliés sur l'Allemagne nazie et la fin de la Seconde Guerre mondiale en Europe (capitulation allemande le 8 mai 1945)."
  },
  {
    id: 30,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Grandes dates",
    question: "Qu'est-ce que la Déclaration des droits de l'homme et du citoyen ?",
    options: [
      "Un traité international récent",
      "Un texte fondamental de 1789 qui proclame les droits naturels de l'homme",
      "Un discours du Président",
      "Une loi sur l'immigration"
    ],
    correctHash: hashAnswer(30, 1),
    explication: "La Déclaration des droits de l'homme et du citoyen de 1789 est un texte fondamental qui proclame les droits naturels, inaliénables et sacrés de l'homme. Elle inspire encore notre Constitution."
  },
  {
    id: 31,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Grandes dates",
    question: "Qu'est-ce que l'abolition de l'esclavage en France ?",
    options: [
      "Un événement récent",
      "L'interdiction définitive de l'esclavage en 1848",
      "Une mesure temporaire",
      "Une proposition refusée"
    ],
    correctHash: hashAnswer(31, 1),
    explication: "L'esclavage a été définitivement aboli en France le 27 avril 1848 grâce au décret de Victor Schœlcher. Cette date est commémorée en Outre-mer et le 10 mai en métropole."
  },
  {
    id: 32,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Géographie",
    question: "Quel océan borde la France à l'ouest ?",
    options: [
      "L'océan Indien",
      "L'océan Atlantique",
      "L'océan Pacifique",
      "L'océan Arctique"
    ],
    correctHash: hashAnswer(32, 1),
    explication: "L'océan Atlantique borde la France à l'ouest, de la Bretagne jusqu'au Pays basque. La France dispose également d'un littoral méditerranéen au sud-est."
  },
  {
    id: 33,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Géographie",
    question: "Quel est le plus haut sommet de France ?",
    options: ["Le Mont Blanc", "Le Mont Ventoux", "Le Pic du Midi", "La Dune du Pilat"],
    correctHash: hashAnswer(33, 0),
    explication: "Le Mont Blanc, situé dans les Alpes à la frontière franco-italienne, est le plus haut sommet de France et d'Europe occidentale avec 4 808 mètres d'altitude."
  },
  {
    id: 34,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Culture et patrimoine",
    question: "Qui a peint 'La Liberté guidant le peuple' ?",
    options: [
      "Claude Monet",
      "Eugène Delacroix",
      "Pablo Picasso",
      "Auguste Renoir"
    ],
    correctHash: hashAnswer(34, 1),
    explication: "Eugène Delacroix a peint 'La Liberté guidant le peuple' en 1830 pour commémorer les Trois Glorieuses. Ce tableau est exposé au musée du Louvre."
  },
  {
    id: 35,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Culture et patrimoine",
    question: "Quel château royal se trouve près de Paris ?",
    options: [
      "Le château de Chambord",
      "Le château de Versailles",
      "Le château de Chenonceau",
      "Le château d'Amboise"
    ],
    correctHash: hashAnswer(35, 1),
    explication: "Le château de Versailles, ancienne résidence des rois de France (notamment Louis XIV), est situé près de Paris. C'est l'un des monuments les plus visités de France."
  },
  {
    id: 36,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Personnalités",
    question: "Qui était Jean Moulin ?",
    options: [
      "Un roi de France",
      "Un héros de la Résistance française pendant la Seconde Guerre mondiale",
      "Un écrivain célèbre",
      "Un scientifique"
    ],
    correctHash: hashAnswer(36, 1),
    explication: "Jean Moulin (1899-1943) est l'un des principaux héros de la Résistance française. Il a unifié les mouvements de résistance sous l'autorité du général de Gaulle."
  },

  // ==================== 5. VIVRE EN FRANCE (4 questions) ====================
  
  {
    id: 37,
    categorie: "Vivre en France",
    sousCategorie: "Vie quotidienne",
    question: "Pour ouvrir un compte bancaire en France, il faut généralement :",
    options: [
      "Être millionnaire",
      "Présenter une pièce d'identité et un justificatif de domicile",
      "Avoir plus de 30 ans",
      "L'autorisation du maire"
    ],
    correctHash: hashAnswer(37, 1),
    explication: "Pour ouvrir un compte bancaire, il faut présenter une pièce d'identité valide et un justificatif de domicile. Toute personne résidant en France a droit à un compte bancaire."
  },
  {
    id: 38,
    categorie: "Vivre en France",
    sousCategorie: "Vie quotidienne",
    question: "La CAF (Caisse d'Allocations Familiales) verse :",
    options: [
      "Les salaires",
      "Des aides sociales et familiales (allocations logement, familiales...)",
      "Les retraites uniquement",
      "Les amendes"
    ],
    correctHash: hashAnswer(38, 1),
    explication: "La CAF verse diverses aides sociales et familiales : allocations familiales, aides au logement (APL), RSA, prime d'activité, etc., selon la situation de chacun."
  },
  {
    id: 39,
    categorie: "Vivre en France",
    sousCategorie: "Vie citoyenne",
    question: "En France, le tri sélectif des déchets est :",
    options: [
      "Facultatif",
      "Obligatoire et encourage le recyclage",
      "Réservé aux grandes villes",
      "Interdit"
    ],
    correctHash: hashAnswer(39, 1),
    explication: "Le tri sélectif des déchets est obligatoire dans toutes les communes. Il permet de recycler et de réduire les déchets, contribuant ainsi à la protection de l'environnement."
  },
  {
    id: 40,
    categorie: "Vivre en France",
    sousCategorie: "Santé",
    question: "Le médecin traitant en France est :",
    options: [
      "Obligatoire et permet un meilleur suivi médical et remboursement",
      "Interdit",
      "Réservé aux personnes âgées",
      "Uniquement pour les urgences"
    ],
    correctHash: hashAnswer(40, 0),
    explication: "Choisir un médecin traitant est vivement recommandé (quasi-obligatoire) pour bénéficier d'un meilleur suivi médical et du remboursement optimal de la Sécurité sociale."
  }
];

// Fonction pour vérifier une réponse
export function verifyAnswerExam4(questionId: number, userAnswerIndex: number, correctHash: string): boolean {
  return hashAnswer(questionId, userAnswerIndex) === correctHash;
}

// Fonction pour trouver l'index correct à partir du hash
export function findCorrectIndexExam4(questionId: number, correctHash: string): number {
  for (let i = 0; i < 4; i++) {
    if (hashAnswer(questionId, i) === correctHash) {
      return i;
    }
  }
  return 0;
}

export const EXAMEN_4: ExamenBlanc = {
  numero: 4,
  titre: "Examen blanc #4",
  description: "40 questions en conditions réelles d'examen",
  questions,
  dureeMinutes: 45,
  totalQuestions: 40
};
