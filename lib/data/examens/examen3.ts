// ==================== EXAMEN BLANC #3 ====================
// Répartition officielle :
// 1. Principes et valeurs (11 questions)
// 2. Système institutionnel (6 questions)
// 3. Droits et devoirs (11 questions)
// 4. Histoire/géographie/culture (8 questions)
// 5. Vivre en France (4 questions)
// ==========================================================================

import { ExamenBlanc, Question } from './types';

const EXAM_NUMBER = 3;

// Fonction de hash simple (djb2) pour l'examen 3
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
    question: "Quelle fleur est traditionnellement associée à la République française ?",
    options: ["La rose", "Le lys", "L'iris", "La tulipe"],
    correctHash: hashAnswer(1, 2),
    explication: "L'iris est traditionnellement associé à la République française. Il a remplacé le lys royal après la Révolution française et figure sur de nombreux monuments."
  },
  {
    id: 2,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "Combien de bandes a le drapeau français ?",
    options: ["Deux", "Trois", "Quatre", "Cinq"],
    correctHash: hashAnswer(2, 1),
    explication: "Le drapeau français, appelé drapeau tricolore, comporte trois bandes verticales de couleurs égales : bleu, blanc et rouge."
  },
  {
    id: 3,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "À l'école publique en France, les enseignants peuvent-ils porter des signes religieux ostensibles ?",
    options: [
      "Oui, c'est un droit",
      "Non, c'est interdit par la loi de laïcité",
      "Oui, mais seulement en maternelle",
      "Cela dépend de la région"
    ],
    correctHash: hashAnswer(3, 1),
    explication: "Les agents du service public, dont les enseignants, sont tenus à une stricte neutralité religieuse. Ils ne peuvent pas porter de signes religieux ostensibles."
  },
  {
    id: 4,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "La laïcité garantit :",
    options: [
      "L'interdiction de toutes les religions",
      "La liberté de conscience et de culte pour tous",
      "La prédominance d'une seule religion",
      "L'obligation d'être athée"
    ],
    correctHash: hashAnswer(4, 1),
    explication: "La laïcité garantit la liberté de conscience et de culte pour tous les citoyens. Elle assure la neutralité de l'État vis-à-vis des religions tout en protégeant la liberté religieuse de chacun."
  },
  {
    id: 5,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité",
    question: "Qu'est-ce que la parité en politique ?",
    options: [
      "L'égal accès des hommes et des femmes aux mandats électoraux",
      "L'égalité des revenus entre tous les citoyens",
      "Le partage égal du temps de parole",
      "La rotation obligatoire des élus"
    ],
    correctHash: hashAnswer(5, 0),
    explication: "La parité désigne l'égal accès des hommes et des femmes aux mandats électoraux et fonctions électives. Des lois imposent désormais des quotas pour favoriser l'égalité."
  },
  {
    id: 6,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité",
    question: "En France, la discrimination à l'embauche est :",
    options: [
      "Autorisée dans certains cas",
      "Strictement interdite et punie par la loi",
      "Tolérée pour les petites entreprises",
      "Permise avec l'accord du candidat"
    ],
    correctHash: hashAnswer(6, 1),
    explication: "Toute discrimination à l'embauche est strictement interdite et constitue un délit pénal. Elle peut être fondée sur l'origine, le sexe, l'âge, l'orientation sexuelle, etc."
  },
  {
    id: 7,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Liberté",
    question: "La liberté de la presse en France signifie que :",
    options: [
      "Les journalistes peuvent écrire ce qu'ils veulent sans aucune limite",
      "Les médias sont libres mais doivent respecter les lois (diffamation, vie privée...)",
      "Seul l'État peut publier des journaux",
      "La presse est entièrement contrôlée par le gouvernement"
    ],
    correctHash: hashAnswer(7, 1),
    explication: "La liberté de la presse est garantie mais encadrée par la loi. Les journalistes doivent respecter la vie privée, ne pas diffamer, ni inciter à la haine."
  },
  {
    id: 8,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Liberté",
    question: "Peut-on manifester librement en France ?",
    options: [
      "Oui, sans aucune formalité",
      "Oui, mais il faut déclarer la manifestation à la préfecture",
      "Non, c'est interdit",
      "Oui, mais seulement le dimanche"
    ],
    correctHash: hashAnswer(8, 1),
    explication: "Le droit de manifestation est garanti en France, mais toute manifestation sur la voie publique doit être déclarée à l'avance auprès de la préfecture ou de la mairie."
  },
  {
    id: 9,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Fraternité",
    question: "Le Secours populaire, la Croix-Rouge, les Restos du Cœur sont des exemples de :",
    options: [
      "Services publics obligatoires",
      "Associations qui incarnent la fraternité et la solidarité",
      "Entreprises commerciales",
      "Partis politiques"
    ],
    correctHash: hashAnswer(9, 1),
    explication: "Ces associations caritatives incarnent les valeurs de fraternité et de solidarité en venant en aide aux personnes en difficulté (pauvreté, exclusion, etc.)."
  },
  {
    id: 10,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Fraternité",
    question: "Que signifie être solidaire ?",
    options: [
      "Vivre seul et indépendant",
      "Aider les autres et se sentir responsable du bien commun",
      "Obéir aux autorités",
      "Payer ses impôts uniquement"
    ],
    correctHash: hashAnswer(10, 1),
    explication: "La solidarité implique d'aider les autres, de se sentir responsable du bien-être collectif et de contribuer au bien commun. C'est un pilier de la fraternité."
  },
  {
    id: 11,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Lutte contre les discriminations",
    question: "En France, l'homophobie est :",
    options: [
      "Tolérée si elle reste discrète",
      "Punie par la loi comme toute discrimination",
      "Autorisée dans le cadre privé",
      "Une opinion personnelle protégée"
    ],
    correctHash: hashAnswer(11, 1),
    explication: "L'homophobie est une discrimination fondée sur l'orientation sexuelle. Elle est strictement interdite et punie par la loi française, comme toute forme de discrimination."
  },

  // ==================== 2. SYSTÈME INSTITUTIONNEL (6 questions) ====================
  
  {
    id: 12,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Démocratie et droit de vote",
    question: "Quel est le mode de scrutin pour élire le Président de la République ?",
    options: [
      "Scrutin proportionnel",
      "Suffrage universel direct à deux tours",
      "Élection par les députés",
      "Tirage au sort"
    ],
    correctHash: hashAnswer(12, 1),
    explication: "Le Président de la République est élu au suffrage universel direct à deux tours. Si aucun candidat n'obtient la majorité absolue au premier tour, un second tour est organisé."
  },
  {
    id: 13,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Démocratie et droit de vote",
    question: "Les sénateurs sont élus par :",
    options: [
      "Les citoyens directement",
      "Les grands électeurs (élus locaux principalement)",
      "Le Président de la République",
      "Les députés"
    ],
    correctHash: hashAnswer(13, 1),
    explication: "Les sénateurs sont élus au suffrage universel indirect par des grands électeurs, principalement composés d'élus locaux (maires, conseillers municipaux, départementaux et régionaux)."
  },
  {
    id: 14,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Organisation de la République",
    question: "Combien y a-t-il de régions en France métropolitaine ?",
    options: ["10", "12", "13", "22"],
    correctHash: hashAnswer(14, 2),
    explication: "Depuis la réforme territoriale de 2016, la France métropolitaine compte 13 régions. Avec les 5 régions d'outre-mer, la France compte 18 régions au total."
  },
  {
    id: 15,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Organisation de la République",
    question: "Qui représente l'État dans le département ?",
    options: ["Le maire", "Le député", "Le préfet", "Le président du conseil départemental"],
    correctHash: hashAnswer(15, 2),
    explication: "Le préfet est le représentant de l'État dans le département. Il est nommé par le Président de la République et dirige les services de l'État au niveau local."
  },
  {
    id: 16,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Collectivités territoriales",
    question: "Quelle collectivité gère les collèges ?",
    options: ["La commune", "Le département", "La région", "L'État"],
    correctHash: hashAnswer(16, 1),
    explication: "Les départements ont la responsabilité de la construction, de l'entretien et du fonctionnement des collèges. Les régions gèrent les lycées et les communes les écoles."
  },
  {
    id: 17,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Institutions européennes",
    question: "Depuis quand la France est-elle membre de l'Union européenne ?",
    options: ["1945", "1957", "1992", "2002"],
    correctHash: hashAnswer(17, 1),
    explication: "La France est membre fondateur de l'Union européenne depuis le traité de Rome en 1957, qui a créé la Communauté économique européenne (CEE)."
  },

  // ==================== 3. DROITS ET DEVOIRS (11 questions) ====================
  
  {
    id: 18,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "Le droit de grève en France est :",
    options: [
      "Interdit dans tous les cas",
      "Garanti par la Constitution",
      "Autorisé seulement dans le privé",
      "Réservé aux fonctionnaires"
    ],
    correctHash: hashAnswer(18, 1),
    explication: "Le droit de grève est garanti par la Constitution française depuis 1946. Il permet aux salariés de cesser le travail pour défendre leurs revendications professionnelles."
  },
  {
    id: 19,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "En France, la propriété privée est :",
    options: [
      "Interdite",
      "Un droit protégé par la loi",
      "Réservée aux citoyens français uniquement",
      "Limitée à 10 ans"
    ],
    correctHash: hashAnswer(19, 1),
    explication: "Le droit de propriété est un droit fondamental protégé par la Déclaration des droits de l'homme et du citoyen de 1789. Il est inviolable et sacré."
  },
  {
    id: 20,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "La liberté de réunion signifie que :",
    options: [
      "On ne peut jamais se réunir",
      "On peut se réunir librement pour des motifs pacifiques",
      "Il faut une autorisation pour toute réunion",
      "On ne peut se réunir que dans des lieux publics"
    ],
    correctHash: hashAnswer(20, 1),
    explication: "La liberté de réunion permet aux citoyens de se rassembler pacifiquement. Les réunions privées sont libres, les réunions publiques peuvent nécessiter une déclaration."
  },
  {
    id: 21,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoirs du citoyen",
    question: "Pourquoi paie-t-on des impôts en France ?",
    options: [
      "Pour enrichir l'État",
      "Pour financer les services publics et la solidarité nationale",
      "C'est une punition",
      "Pour payer les salaires des politiciens uniquement"
    ],
    correctHash: hashAnswer(21, 1),
    explication: "Les impôts financent les services publics (éducation, santé, sécurité...), les infrastructures et la solidarité nationale (aides sociales, retraites...). C'est un devoir citoyen."
  },
  {
    id: 22,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoirs du citoyen",
    question: "À partir de quel âge peut-on voter en France ?",
    options: ["16 ans", "18 ans", "21 ans", "25 ans"],
    correctHash: hashAnswer(22, 1),
    explication: "En France, le droit de vote est accordé à partir de 18 ans. C'est l'âge de la majorité civile et politique, établi depuis 1974."
  },
  {
    id: 23,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoirs du citoyen",
    question: "Le service civique est :",
    options: [
      "Obligatoire pour tous",
      "Un engagement volontaire au service de l'intérêt général",
      "Réservé aux militaires",
      "Une punition judiciaire"
    ],
    correctHash: hashAnswer(23, 1),
    explication: "Le service civique est un engagement volontaire de 6 à 12 mois au service de l'intérêt général, ouvert aux jeunes de 16 à 25 ans (30 ans pour les handicapés)."
  },
  {
    id: 24,
    categorie: "Droits et devoirs",
    sousCategorie: "Justice",
    question: "En France, la justice est :",
    options: [
      "Rendue au nom du Président",
      "Rendue au nom du peuple français",
      "Rendue au nom de l'Église",
      "Rendue au nom des juges"
    ],
    correctHash: hashAnswer(24, 1),
    explication: "La justice est rendue au nom du peuple français. Cette formule figure sur tous les jugements et décisions de justice, rappelant que le pouvoir judiciaire émane du peuple."
  },
  {
    id: 25,
    categorie: "Droits et devoirs",
    sousCategorie: "Justice",
    question: "Quel est le rôle d'un avocat ?",
    options: [
      "Juger les accusés",
      "Défendre et conseiller son client",
      "Arrêter les criminels",
      "Décider de la peine"
    ],
    correctHash: hashAnswer(25, 1),
    explication: "L'avocat défend et conseille son client dans ses démarches juridiques. Il assure la défense de ses droits devant la justice et peut le représenter au tribunal."
  },
  {
    id: 26,
    categorie: "Droits et devoirs",
    sousCategorie: "Défense nationale",
    question: "Le service militaire en France est :",
    options: [
      "Obligatoire pour tous",
      "Suspendu depuis 1997, remplacé par une Journée Défense et Citoyenneté",
      "Réservé aux volontaires étrangers",
      "Obligatoire jusqu'à 30 ans"
    ],
    correctHash: hashAnswer(26, 1),
    explication: "Le service militaire obligatoire a été suspendu en 1997. Il est remplacé par la Journée Défense et Citoyenneté (JDC), obligatoire pour tous les jeunes Français."
  },
  {
    id: 27,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits sociaux",
    question: "La Sécurité sociale en France garantit :",
    options: [
      "Uniquement les retraites",
      "La protection contre les risques sociaux (maladie, vieillesse, famille...)",
      "Seulement l'assurance chômage",
      "Les revenus des entreprises"
    ],
    correctHash: hashAnswer(27, 1),
    explication: "La Sécurité sociale protège contre les risques sociaux : maladie, maternité, invalidité, vieillesse, décès, accidents du travail et maladies professionnelles. Elle comprend aussi les prestations familiales."
  },
  {
    id: 28,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits sociaux",
    question: "En France, l'école est obligatoire :",
    options: [
      "De 3 à 16 ans",
      "De 6 à 14 ans",
      "De 3 à 18 ans",
      "Seulement jusqu'à 12 ans"
    ],
    correctHash: hashAnswer(28, 0),
    explication: "L'instruction est obligatoire en France de 3 à 16 ans depuis 2019. Elle peut être dispensée à l'école publique, privée ou dans la famille (instruction en famille)."
  },

  // ==================== 4. HISTOIRE, GÉOGRAPHIE, CULTURE (8 questions) ====================
  
  {
    id: 29,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Grandes dates",
    question: "Que commémore-t-on le 14 juillet ?",
    options: [
      "La fin de la Seconde Guerre mondiale",
      "La prise de la Bastille en 1789",
      "La signature du traité de Versailles",
      "La libération de Paris"
    ],
    correctHash: hashAnswer(29, 1),
    explication: "Le 14 juillet commémore la prise de la Bastille le 14 juillet 1789, événement symbolique du début de la Révolution française. C'est la fête nationale."
  },
  {
    id: 30,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Grandes dates",
    question: "Quel événement marque le début de la Ve République ?",
    options: [
      "La Révolution française",
      "L'élection du général de Gaulle et la Constitution de 1958",
      "La fin de la Première Guerre mondiale",
      "Le traité de Rome"
    ],
    correctHash: hashAnswer(30, 1),
    explication: "La Ve République débute en 1958 avec l'élection du général de Gaulle et l'adoption d'une nouvelle Constitution, qui renforce les pouvoirs du Président."
  },
  {
    id: 31,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Grandes dates",
    question: "Quand les femmes ont-elles obtenu le droit de vote en France ?",
    options: ["1789", "1848", "1944", "1974"],
    correctHash: hashAnswer(31, 2),
    explication: "Les femmes ont obtenu le droit de vote en France en 1944, grâce à une ordonnance du général de Gaulle. Elles ont voté pour la première fois en 1945."
  },
  {
    id: 32,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Géographie",
    question: "Quelle est la plus grande ville de France ?",
    options: ["Marseille", "Lyon", "Paris", "Toulouse"],
    correctHash: hashAnswer(32, 2),
    explication: "Paris est la capitale et la plus grande ville de France avec plus de 2 millions d'habitants (12 millions dans l'agglomération)."
  },
  {
    id: 33,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Géographie",
    question: "Combien de pays partagent une frontière terrestre avec la France métropolitaine ?",
    options: ["4", "6", "8", "10"],
    correctHash: hashAnswer(33, 2),
    explication: "La France métropolitaine partage ses frontières avec 8 pays : Espagne, Italie, Suisse, Allemagne, Luxembourg, Belgique, Monaco et Andorre."
  },
  {
    id: 34,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Culture et patrimoine",
    question: "Quel monument est le symbole de Paris ?",
    options: ["Le Louvre", "Notre-Dame", "La tour Eiffel", "L'Arc de Triomphe"],
    correctHash: hashAnswer(34, 2),
    explication: "La tour Eiffel est le monument le plus emblématique de Paris. Construite par Gustave Eiffel pour l'Exposition universelle de 1889, elle mesure 330 mètres."
  },
  {
    id: 35,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Culture et patrimoine",
    question: "Quel musée parisien est le plus visité au monde ?",
    options: ["Le musée d'Orsay", "Le Centre Pompidou", "Le musée du Louvre", "Le musée Rodin"],
    correctHash: hashAnswer(35, 2),
    explication: "Le musée du Louvre est le musée le plus visité au monde avec près de 10 millions de visiteurs par an. Il abrite notamment La Joconde de Léonard de Vinci."
  },
  {
    id: 36,
    categorie: "Histoire, géographie et culture de la France",
    sousCategorie: "Personnalités",
    question: "Qui était Victor Hugo ?",
    options: [
      "Un peintre impressionniste",
      "Un écrivain et poète français majeur",
      "Un général de la Révolution",
      "Un scientifique"
    ],
    correctHash: hashAnswer(36, 1),
    explication: "Victor Hugo (1802-1885) est l'un des plus grands écrivains français. Il est l'auteur des Misérables, de Notre-Dame de Paris et de nombreux poèmes engagés."
  },

  // ==================== 5. VIVRE EN FRANCE (4 questions) ====================
  
  {
    id: 37,
    categorie: "Vivre en France",
    sousCategorie: "Vie quotidienne",
    question: "Le numéro d'urgence européen est le :",
    options: ["15", "17", "18", "112"],
    correctHash: hashAnswer(37, 3),
    explication: "Le 112 est le numéro d'urgence européen gratuit, accessible dans tous les pays de l'Union européenne. En France, il existe aussi le 15 (SAMU), 17 (police) et 18 (pompiers)."
  },
  {
    id: 38,
    categorie: "Vivre en France",
    sousCategorie: "Vie quotidienne",
    question: "Pour louer un logement en France, on demande généralement :",
    options: [
      "Uniquement de l'argent",
      "Un dossier avec justificatifs de revenus et d'identité",
      "Rien du tout",
      "Une autorisation du maire"
    ],
    correctHash: hashAnswer(38, 1),
    explication: "Pour louer un logement, il faut constituer un dossier comprenant pièce d'identité, justificatifs de revenus, garanties... Le propriétaire vérifie la solvabilité du locataire."
  },
  {
    id: 39,
    categorie: "Vivre en France",
    sousCategorie: "Vie citoyenne",
    question: "Dans un immeuble, les décisions collectives sont prises :",
    options: [
      "Par le propriétaire uniquement",
      "En assemblée générale des copropriétaires",
      "Par le maire",
      "Par la police"
    ],
    correctHash: hashAnswer(39, 1),
    explication: "Dans une copropriété, les décisions importantes (travaux, charges...) sont prises en assemblée générale où tous les copropriétaires peuvent voter."
  },
  {
    id: 40,
    categorie: "Vivre en France",
    sousCategorie: "Santé",
    question: "Pour consulter un médecin en France, il faut :",
    options: [
      "Être riche obligatoirement",
      "Avoir une carte Vitale ou être affilié à la Sécurité sociale",
      "Avoir plus de 40 ans",
      "Obtenir l'autorisation de la mairie"
    ],
    correctHash: hashAnswer(40, 1),
    explication: "Pour bénéficier du remboursement des soins, il faut être affilié à la Sécurité sociale et disposer d'une carte Vitale. Les personnes sans ressources peuvent bénéficier de l'aide médicale d'État."
  }
];

// Fonction pour vérifier une réponse
export function verifyAnswerExam3(questionId: number, userAnswerIndex: number, correctHash: string): boolean {
  return hashAnswer(questionId, userAnswerIndex) === correctHash;
}

// Fonction pour trouver l'index correct à partir du hash
export function findCorrectIndexExam3(questionId: number, correctHash: string): number {
  for (let i = 0; i < 4; i++) {
    if (hashAnswer(questionId, i) === correctHash) {
      return i;
    }
  }
  return 0;
}

export const EXAMEN_3: ExamenBlanc = {
  numero: 3,
  titre: "Examen blanc #3",
  description: "40 questions en conditions réelles d'examen",
  questions,
  dureeMinutes: 45,
  totalQuestions: 40
};
