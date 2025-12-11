// ==================== EXAMEN BLANC #5 ====================
// Répartition officielle :
// 1. Principes et valeurs (11 questions)
// 2. Système institutionnel (6 questions)
// 3. Droits et devoirs (11 questions)
// 4. Histoire/géographie/culture (8 questions)
// 5. Vivre en France (4 questions)
// ==========================================================================

import { ExamenBlanc, Question } from './types';

const EXAM_NUMBER = 5;

// Fonction de hash simple (djb2) pour l'examen 5
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
    question: "Quelle est la devise de la République française ?",
    options: ["Travail, Famille, Patrie", "Liberté, Égalité, Fraternité", "Force et Honneur", "Union et Justice"],
    correctHash: hashAnswer(1, 1),
    explication: "La devise de la République française est 'Liberté, Égalité, Fraternité'. Elle est inscrite sur les monuments publics et apparaît sur les pièces de monnaie."
  },
  {
    id: 2,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "Quelle est la fête nationale française ?",
    options: ["Le 1er mai", "Le 14 juillet", "Le 11 novembre", "Le 8 mai"],
    correctHash: hashAnswer(2, 1),
    explication: "La fête nationale française est le 14 juillet, qui commémore la prise de la Bastille en 1789 et la Fête de la Fédération de 1790."
  },
  {
    id: 3,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "Qu'est-ce que la laïcité en France ?",
    options: [
      "L'interdiction de toutes les religions",
      "La séparation de l'État et des religions",
      "L'obligation d'être catholique",
      "La priorité donnée à une religion"
    ],
    correctHash: hashAnswer(3, 1),
    explication: "La laïcité est un principe fondamental de la République française qui établit la séparation de l'État et des religions. Chacun est libre de croire ou de ne pas croire."
  },
  {
    id: 4,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "Dans les écoles publiques, les élèves peuvent-ils porter des signes religieux discrets ?",
    options: [
      "Oui, les signes discrets sont autorisés",
      "Non, aucun signe religieux n'est autorisé",
      "Oui, mais seulement pour certaines religions",
      "Cela dépend de chaque école"
    ],
    correctHash: hashAnswer(4, 0),
    explication: "La loi de 2004 interdit le port de signes religieux ostensibles (voile, kippa, grande croix) dans les écoles publiques, mais autorise les signes discrets (petite croix, main de Fatma)."
  },
  {
    id: 5,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité",
    question: "En France, les femmes et les hommes sont-ils égaux devant la loi ?",
    options: [
      "Non, les hommes ont plus de droits",
      "Oui, ils ont les mêmes droits",
      "Non, les femmes ont plus de droits",
      "Cela dépend des situations"
    ],
    correctHash: hashAnswer(5, 1),
    explication: "L'égalité entre les femmes et les hommes est un principe constitutionnel. La loi garantit l'égalité des droits et interdit toute discrimination fondée sur le sexe."
  },
  {
    id: 6,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité",
    question: "Quel principe permet à tous les enfants d'aller à l'école gratuite ?",
    options: [
      "La liberté d'enseignement",
      "L'égalité d'accès à l'éducation",
      "La laïcité scolaire",
      "L'obligation scolaire"
    ],
    correctHash: hashAnswer(6, 1),
    explication: "Le principe d'égalité d'accès à l'éducation garantit que tous les enfants peuvent aller à l'école publique gratuitement, sans discrimination."
  },
  {
    id: 7,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Fraternité",
    question: "Que signifie le principe de fraternité ?",
    options: [
      "L'obligation d'avoir des frères et sœurs",
      "La solidarité entre tous les citoyens",
      "Le respect des traditions familiales",
      "L'aide uniquement à sa famille"
    ],
    correctHash: hashAnswer(7, 1),
    explication: "La fraternité est le principe de solidarité et d'entraide entre tous les citoyens. Elle implique le respect d'autrui et la cohésion sociale."
  },
  {
    id: 8,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Liberté",
    question: "Quelle liberté permet à chacun de pratiquer ou non une religion ?",
    options: [
      "La liberté d'association",
      "La liberté de culte",
      "La liberté de réunion",
      "La liberté d'expression"
    ],
    correctHash: hashAnswer(8, 1),
    explication: "La liberté de culte permet à chaque personne de pratiquer la religion de son choix ou de ne pratiquer aucune religion. C'est un droit fondamental."
  },
  {
    id: 9,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Liberté",
    question: "En France, peut-on exprimer librement ses opinions ?",
    options: [
      "Oui, sans aucune limite",
      "Oui, sauf si cela porte atteinte à autrui",
      "Non, c'est interdit",
      "Seulement avec une autorisation"
    ],
    correctHash: hashAnswer(9, 1),
    explication: "La liberté d'expression permet à chacun d'exprimer ses opinions, mais elle a des limites : on ne peut pas tenir des propos racistes, diffamatoires ou appelant à la haine."
  },
  {
    id: 10,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Symboles",
    question: "Quelles sont les couleurs du drapeau français ?",
    options: [
      "Rouge, blanc, vert",
      "Bleu, blanc, rouge",
      "Bleu, jaune, rouge",
      "Bleu, blanc, noir"
    ],
    correctHash: hashAnswer(10, 1),
    explication: "Le drapeau français est composé de trois bandes verticales : bleu (à gauche), blanc (au centre) et rouge (à droite)."
  },
  {
    id: 11,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Symboles",
    question: "Quel est l'hymne national français ?",
    options: [
      "Le Chant des Partisans",
      "La Marseillaise",
      "La Strasbourgeoise",
      "Douce France"
    ],
    correctHash: hashAnswer(11, 1),
    explication: "La Marseillaise est l'hymne national de la France depuis 1795. Elle a été écrite par Rouget de Lisle en 1792."
  },

  // ==================== 2. SYSTÈME INSTITUTIONNEL (6 questions) ====================
  
  {
    id: 12,
    categorie: "Organisation et fonctionnement des institutions",
    sousCategorie: "Président de la République",
    question: "Combien d'années dure le mandat du Président de la République ?",
    options: ["4 ans", "5 ans", "7 ans", "10 ans"],
    correctHash: hashAnswer(12, 1),
    explication: "Le mandat du Président de la République française dure 5 ans (quinquennat). Cette durée a été fixée en 2000, remplaçant le septennat de 7 ans."
  },
  {
    id: 13,
    categorie: "Organisation et fonctionnement des institutions",
    sousCategorie: "Président de la République",
    question: "Qui élit le Président de la République en France ?",
    options: [
      "Les députés",
      "Les citoyens français",
      "Le Premier ministre",
      "Le Sénat"
    ],
    correctHash: hashAnswer(13, 1),
    explication: "Le Président de la République est élu au suffrage universel direct par tous les citoyens français majeurs, au scrutin majoritaire à deux tours."
  },
  {
    id: 14,
    categorie: "Organisation et fonctionnement des institutions",
    sousCategorie: "Assemblée nationale",
    question: "Comment appelle-t-on les membres de l'Assemblée nationale ?",
    options: ["Les ministres", "Les députés", "Les sénateurs", "Les conseillers"],
    correctHash: hashAnswer(14, 1),
    explication: "Les membres de l'Assemblée nationale sont appelés les députés. Ils sont élus pour 5 ans au suffrage universel direct."
  },
  {
    id: 15,
    categorie: "Organisation et fonctionnement des institutions",
    sousCategorie: "Gouvernement",
    question: "Qui nomme le Premier ministre ?",
    options: [
      "Les députés",
      "Le Président de la République",
      "Les citoyens",
      "Le Sénat"
    ],
    correctHash: hashAnswer(15, 1),
    explication: "Le Premier ministre est nommé par le Président de la République. Il dirige l'action du gouvernement et est responsable devant l'Assemblée nationale."
  },
  {
    id: 16,
    categorie: "Organisation et fonctionnement des institutions",
    sousCategorie: "Sénat",
    question: "Qui élit les sénateurs ?",
    options: [
      "Tous les citoyens français",
      "Les grands électeurs",
      "Le Président de la République",
      "Les députés"
    ],
    correctHash: hashAnswer(16, 1),
    explication: "Les sénateurs sont élus au suffrage universel indirect par des grands électeurs (élus locaux : maires, conseillers départementaux et régionaux, députés)."
  },
  {
    id: 17,
    categorie: "Organisation et fonctionnement des institutions",
    sousCategorie: "Constitution",
    question: "Quelle est la Constitution actuelle de la France ?",
    options: [
      "La Constitution de la IVe République",
      "La Constitution de la Ve République",
      "La Constitution de la IIIe République",
      "La Constitution de l'Empire"
    ],
    correctHash: hashAnswer(17, 1),
    explication: "La France vit sous la Constitution de la Ve République, adoptée en 1958. Elle définit l'organisation et le fonctionnement des institutions françaises."
  },

  // ==================== 3. DROITS ET DEVOIRS (11 questions) ====================
  
  {
    id: 18,
    categorie: "Droits et devoirs du citoyen français",
    sousCategorie: "Droits civiques",
    question: "À partir de quel âge peut-on voter en France ?",
    options: ["16 ans", "18 ans", "21 ans", "25 ans"],
    correctHash: hashAnswer(18, 1),
    explication: "En France, le droit de vote est accordé à tous les citoyens français à partir de 18 ans. L'âge de la majorité civile et électorale est de 18 ans."
  },
  {
    id: 19,
    categorie: "Droits et devoirs du citoyen français",
    sousCategorie: "Droits civiques",
    question: "Le vote est-il obligatoire en France ?",
    options: [
      "Oui, c'est obligatoire",
      "Non, c'est un droit mais pas une obligation",
      "Oui, sauf pour les personnes âgées",
      "Oui, mais seulement pour les élections présidentielles"
    ],
    correctHash: hashAnswer(19, 1),
    explication: "En France, le vote est un droit mais pas une obligation. Chaque citoyen est libre de voter ou non, c'est un choix personnel."
  },
  {
    id: 20,
    categorie: "Droits et devoirs du citoyen français",
    sousCategorie: "Devoirs",
    question: "Quel est le devoir de tous les citoyens envers les enfants ?",
    options: [
      "Les inscrire à l'école",
      "Leur enseigner une religion",
      "Leur apprendre un métier",
      "Les envoyer à l'étranger"
    ],
    correctHash: hashAnswer(20, 0),
    explication: "L'instruction est obligatoire en France pour tous les enfants de 3 à 16 ans. Les parents ont le devoir d'inscrire leurs enfants à l'école ou de leur assurer une instruction."
  },
  {
    id: 21,
    categorie: "Droits et devoirs du citoyen français",
    sousCategorie: "Devoirs",
    question: "Doit-on payer ses impôts en France ?",
    options: [
      "Non, c'est facultatif",
      "Oui, c'est obligatoire",
      "Seulement si on est riche",
      "Seulement après 30 ans"
    ],
    correctHash: hashAnswer(21, 1),
    explication: "Payer ses impôts est un devoir civique obligatoire. Les impôts financent les services publics (écoles, hôpitaux, routes, etc.) dont bénéficient tous les citoyens."
  },
  {
    id: 22,
    categorie: "Droits et devoirs du citoyen français",
    sousCategorie: "Devoirs",
    question: "Est-il obligatoire de respecter les lois de la République ?",
    options: [
      "Non, c'est un choix personnel",
      "Oui, pour tous",
      "Seulement pour les Français de naissance",
      "Seulement pour les adultes"
    ],
    correctHash: hashAnswer(22, 1),
    explication: "Le respect des lois est une obligation pour tous ceux qui vivent en France, citoyens français ou étrangers. Nul n'est censé ignorer la loi."
  },
  {
    id: 23,
    categorie: "Droits et devoirs du citoyen français",
    sousCategorie: "Droits sociaux",
    question: "Tous les enfants ont-ils le droit d'aller à l'école en France ?",
    options: [
      "Non, seulement les enfants français",
      "Oui, tous les enfants",
      "Seulement les enfants des parents riches",
      "Seulement les garçons"
    ],
    correctHash: hashAnswer(23, 1),
    explication: "En France, tous les enfants ont le droit d'aller à l'école, quelle que soit leur nationalité ou leur situation. L'éducation est gratuite et obligatoire de 3 à 16 ans."
  },
  {
    id: 24,
    categorie: "Droits et devoirs du citoyen français",
    sousCategorie: "Droits sociaux",
    question: "Quel système protège les personnes en cas de maladie ?",
    options: [
      "La police",
      "La Sécurité sociale",
      "L'armée",
      "Les pompiers"
    ],
    correctHash: hashAnswer(24, 1),
    explication: "La Sécurité sociale est un système de protection sociale qui rembourse une partie des frais médicaux et garantit des revenus en cas de maladie, d'accident ou de chômage."
  },
  {
    id: 25,
    categorie: "Droits et devoirs du citoyen français",
    sousCategorie: "Libertés",
    question: "Peut-on se réunir librement en France ?",
    options: [
      "Non, c'est interdit",
      "Oui, dans le respect de l'ordre public",
      "Seulement avec une autorisation du préfet",
      "Seulement dans des lieux privés"
    ],
    correctHash: hashAnswer(25, 1),
    explication: "La liberté de réunion est garantie en France. On peut se réunir librement, mais les manifestations sur la voie publique doivent être déclarées à la préfecture."
  },
  {
    id: 26,
    categorie: "Droits et devoirs du citoyen français",
    sousCategorie: "Libertés",
    question: "Peut-on créer une association en France ?",
    options: [
      "Non, c'est interdit",
      "Oui, librement",
      "Seulement avec l'autorisation de la mairie",
      "Seulement si on a plus de 30 ans"
    ],
    correctHash: hashAnswer(26, 1),
    explication: "La liberté d'association est garantie par la loi de 1901. Toute personne peut créer une association librement, à but non lucratif, par simple déclaration à la préfecture."
  },
  {
    id: 27,
    categorie: "Droits et devoirs du citoyen français",
    sousCategorie: "Droits civiques",
    question: "Les femmes ont-elles le droit de vote en France ?",
    options: [
      "Non, elles ne peuvent pas voter",
      "Oui, depuis 1944",
      "Seulement si elles sont mariées",
      "Seulement après 25 ans"
    ],
    correctHash: hashAnswer(27, 1),
    explication: "Les femmes françaises ont obtenu le droit de vote en 1944. Elles ont voté pour la première fois aux élections municipales d'avril 1945."
  },
  {
    id: 28,
    categorie: "Droits et devoirs du citoyen français",
    sousCategorie: "Devoirs",
    question: "En cas d'incendie ou d'accident, quel numéro d'urgence doit-on appeler ?",
    options: ["15", "17", "18", "112"],
    correctHash: hashAnswer(28, 2),
    explication: "Le 18 est le numéro des pompiers à appeler en cas d'incendie ou d'accident. Le 112 est le numéro d'urgence européen qui fonctionne également."
  },

  // ==================== 4. HISTOIRE/GÉOGRAPHIE/CULTURE (8 questions) ====================
  
  {
    id: 29,
    categorie: "Principaux repères historiques, géographiques et culturels",
    sousCategorie: "Histoire",
    question: "En quelle année a eu lieu la Révolution française ?",
    options: ["1789", "1792", "1804", "1815"],
    correctHash: hashAnswer(29, 0),
    explication: "La Révolution française a commencé en 1789 avec la prise de la Bastille le 14 juillet. C'est un événement fondateur de la République française."
  },
  {
    id: 30,
    categorie: "Principaux repères historiques, géographiques et culturels",
    sousCategorie: "Histoire",
    question: "Quel événement est commémoré le 8 mai en France ?",
    options: [
      "La fin de la Première Guerre mondiale",
      "La fin de la Seconde Guerre mondiale en Europe",
      "La prise de la Bastille",
      "L'armistice de 1918"
    ],
    correctHash: hashAnswer(30, 1),
    explication: "Le 8 mai commémore la victoire des Alliés et la fin de la Seconde Guerre mondiale en Europe (8 mai 1945). C'est un jour férié en France."
  },
  {
    id: 31,
    categorie: "Principaux repères historiques, géographiques et culturels",
    sousCategorie: "Histoire",
    question: "Quel événement est commémoré le 11 novembre ?",
    options: [
      "La Révolution française",
      "L'armistice de la Première Guerre mondiale",
      "La fin de la Seconde Guerre mondiale",
      "La fête nationale"
    ],
    correctHash: hashAnswer(31, 1),
    explication: "Le 11 novembre commémore l'armistice de 1918 qui a mis fin à la Première Guerre mondiale. C'est un jour férié national en France."
  },
  {
    id: 32,
    categorie: "Principaux repères historiques, géographiques et culturels",
    sousCategorie: "Géographie",
    question: "Quelle est la capitale de la France ?",
    options: ["Lyon", "Marseille", "Paris", "Bordeaux"],
    correctHash: hashAnswer(32, 2),
    explication: "Paris est la capitale de la France. C'est le siège des institutions nationales et la ville la plus peuplée de France."
  },
  {
    id: 33,
    categorie: "Principaux repères historiques, géographiques et culturels",
    sousCategorie: "Géographie",
    question: "Combien de régions compte la France métropolitaine ?",
    options: ["10", "13", "18", "22"],
    correctHash: hashAnswer(33, 1),
    explication: "Depuis la réforme de 2016, la France métropolitaine compte 13 régions (plus 5 régions d'outre-mer). Les régions ont été regroupées pour gagner en efficacité."
  },
  {
    id: 34,
    categorie: "Principaux repères historiques, géographiques et culturels",
    sousCategorie: "Géographie",
    question: "Quel océan borde la côte ouest de la France ?",
    options: [
      "L'océan Indien",
      "L'océan Atlantique",
      "L'océan Pacifique",
      "L'océan Arctique"
    ],
    correctHash: hashAnswer(34, 1),
    explication: "L'océan Atlantique borde la côte ouest de la France. La France est également bordée par la mer Méditerranée au sud."
  },
  {
    id: 35,
    categorie: "Principaux repères historiques, géographiques et culturels",
    sousCategorie: "Culture",
    question: "Quelle langue est parlée officiellement en France ?",
    options: ["L'anglais", "Le français", "L'allemand", "L'espagnol"],
    correctHash: hashAnswer(35, 1),
    explication: "Le français est la langue officielle de la République française. C'est la langue de l'enseignement, du travail, des échanges et des services publics."
  },
  {
    id: 36,
    categorie: "Principaux repères historiques, géographiques et culturels",
    sousCategorie: "Culture",
    question: "Quel monument célèbre se trouve à Paris ?",
    options: [
      "La Statue de la Liberté",
      "La Tour Eiffel",
      "Big Ben",
      "Le Colisée"
    ],
    correctHash: hashAnswer(36, 1),
    explication: "La Tour Eiffel est le monument le plus célèbre de Paris. Construite en 1889 pour l'Exposition universelle, elle est devenue le symbole de la France."
  },

  // ==================== 5. VIVRE EN FRANCE (4 questions) ====================
  
  {
    id: 37,
    categorie: "Vivre en France",
    sousCategorie: "Vie quotidienne",
    question: "Quel document doit-on présenter pour prouver son identité en France ?",
    options: [
      "Un passeport ou une carte d'identité",
      "Un permis de conduire seulement",
      "Une facture d'électricité",
      "Un acte de naissance"
    ],
    correctHash: hashAnswer(37, 0),
    explication: "Pour prouver son identité, on doit présenter une carte nationale d'identité ou un passeport. Le permis de conduire peut être accepté dans certains cas mais n'est pas un document d'identité officiel."
  },
  {
    id: 38,
    categorie: "Vivre en France",
    sousCategorie: "Vie quotidienne",
    question: "Que doit-on faire quand on déménage en France ?",
    options: [
      "Rien de particulier",
      "Déclarer son changement d'adresse",
      "Demander une nouvelle carte d'identité",
      "Quitter son ancien logement sans prévenir"
    ],
    correctHash: hashAnswer(38, 1),
    explication: "Lors d'un déménagement, il faut déclarer son changement d'adresse aux différentes administrations (impôts, sécurité sociale, banque, etc.) et mettre à jour ses papiers."
  },
  {
    id: 39,
    categorie: "Vivre en France",
    sousCategorie: "Services publics",
    question: "Où peut-on faire des démarches administratives en France ?",
    options: [
      "À la boulangerie",
      "À la mairie",
      "Au supermarché",
      "À la pharmacie"
    ],
    correctHash: hashAnswer(39, 1),
    explication: "La mairie est le lieu où l'on peut effectuer de nombreuses démarches administratives : demande de carte d'identité, inscription sur les listes électorales, actes d'état civil, etc."
  },
  {
    id: 40,
    categorie: "Vivre en France",
    sousCategorie: "Santé",
    question: "Comment fonctionne le système de santé en France ?",
    options: [
      "Tout est gratuit sans condition",
      "La Sécurité sociale rembourse une partie des soins",
      "Il faut tout payer soi-même",
      "Seuls les riches ont accès aux soins"
    ],
    correctHash: hashAnswer(40, 1),
    explication: "En France, la Sécurité sociale rembourse une partie des frais médicaux. Une mutuelle complémentaire peut couvrir le reste. L'accès aux soins est garanti pour tous."
  }
];

// Fonction pour vérifier une réponse
export function verifyAnswerExam5(questionId: number, userAnswerIndex: number, correctHash: string): boolean {
  return hashAnswer(questionId, userAnswerIndex) === correctHash;
}

// Fonction pour trouver l'index correct à partir du hash
export function findCorrectIndexExam5(questionId: number, correctHash: string): number {
  for (let i = 0; i < 4; i++) {
    if (hashAnswer(questionId, i) === correctHash) {
      return i;
    }
  }
  return 0;
}

export const EXAMEN_5: ExamenBlanc = {
  numero: 5,
  titre: "Examen blanc #5",
  description: "40 questions en conditions réelles d'examen",
  questions,
  dureeMinutes: 45,
  totalQuestions: 40
};
