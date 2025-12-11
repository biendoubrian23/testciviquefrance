// ==================== EXAMEN BLANC #1 ====================
// Répartition officielle :
// 1. Principes et valeurs (11 questions)
// 2. Système institutionnel (6 questions)
// 3. Droits et devoirs (11 questions)
// 4. Histoire/géographie/culture (8 questions)
// 5. Vivre en France (4 questions)
// ==========================================================================

import { ExamenBlanc, Question } from './types';

const EXAM_NUMBER = 1;

// Fonction de hash simple (djb2) pour l'examen 1
function hashAnswer(questionId: number, answerIndex: number): string {
  const str = `q${questionId}_a${answerIndex}_civique2024`;
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
    options: ["Unité, Force, Progrès", "Liberté, Égalité, Fraternité", "Travail, Famille, Patrie", "Honneur, Patrie, Devoir"],
    correctHash: hashAnswer(1, 1),
    explication: "La devise de la République française est « Liberté, Égalité, Fraternité ». Elle figure dans l'article 2 de la Constitution de 1958 et est inscrite sur les frontons des bâtiments publics."
  },
  {
    id: 2,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "Quelles sont les couleurs du drapeau français, de gauche à droite ?",
    options: ["Rouge, blanc, bleu", "Bleu, rouge, blanc", "Bleu, blanc, rouge", "Blanc, bleu, rouge"],
    correctHash: hashAnswer(2, 2),
    explication: "Le drapeau français est composé de trois bandes verticales : bleu (côté mât), blanc (centre) et rouge (côté flottant). Il est le symbole de la République depuis 1794."
  },
  {
    id: 3,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "Quel est l'hymne national français ?",
    options: ["Le Chant du Départ", "La Marseillaise", "L'Internationale", "La Parisienne"],
    correctHash: hashAnswer(3, 1),
    explication: "La Marseillaise est l'hymne national français depuis 1795. Composée par Rouget de Lisle en 1792, elle a été écrite à Strasbourg pour l'armée du Rhin."
  },
  {
    id: 4,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "Que signifie la laïcité en France ?",
    options: [
      "L'interdiction de toutes les religions",
      "La séparation des Églises et de l'État et la liberté de croire ou de ne pas croire",
      "L'obligation d'être athée",
      "La religion d'État"
    ],
    correctHash: hashAnswer(4, 1),
    explication: "La laïcité garantit la liberté de conscience et la neutralité de l'État vis-à-vis des religions. Chacun est libre de croire ou de ne pas croire, dans le respect de l'ordre public."
  },
  {
    id: 5,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "En quelle année a été votée la loi de séparation des Églises et de l'État ?",
    options: ["1789", "1848", "1905", "1958"],
    correctHash: hashAnswer(5, 2),
    explication: "La loi de séparation des Églises et de l'État a été votée le 9 décembre 1905. Elle établit la neutralité de l'État et garantit la liberté religieuse."
  },
  {
    id: 6,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "Un employeur refuse d'embaucher une personne en raison de son origine. Que dit la loi ?",
    options: [
      "C'est légal, l'employeur est libre de choisir",
      "C'est interdit, c'est une discrimination punie par la loi",
      "C'est légal si c'est une petite entreprise",
      "Cela dépend du poste"
    ],
    correctHash: hashAnswer(6, 1),
    explication: "La discrimination à l'embauche fondée sur l'origine est interdite par le Code du travail et le Code pénal. Elle est passible de sanctions pénales (3 ans de prison et 45 000 € d'amende)."
  },
  {
    id: 7,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "Un agent de la fonction publique peut-il afficher ses opinions religieuses dans l'exercice de ses fonctions ?",
    options: [
      "Oui, c'est sa liberté individuelle",
      "Non, il doit respecter le principe de neutralité",
      "Oui, si ses collègues sont d'accord",
      "Cela dépend de la religion"
    ],
    correctHash: hashAnswer(7, 1),
    explication: "Les agents publics doivent respecter le principe de neutralité et ne peuvent manifester leurs convictions religieuses dans l'exercice de leurs fonctions."
  },
  {
    id: 8,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "Vous êtes témoin d'une agression raciste dans la rue. Que devez-vous faire ?",
    options: [
      "Rien, ce n'est pas votre affaire",
      "Filmer et publier sur les réseaux sociaux",
      "Alerter les secours (17 ou 112) et porter assistance si possible sans vous mettre en danger",
      "Intervenir physiquement dans tous les cas"
    ],
    correctHash: hashAnswer(8, 2),
    explication: "Face à une agression, il faut alerter les secours (17 pour la police, 112 numéro européen d'urgence) et porter assistance dans la mesure du possible, sans se mettre en danger."
  },
  {
    id: 9,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "Un élève peut-il porter un signe religieux ostensible dans une école publique ?",
    options: [
      "Oui, c'est sa liberté",
      "Non, c'est interdit par la loi de 2004",
      "Oui, si les parents l'autorisent",
      "Cela dépend de l'établissement"
    ],
    correctHash: hashAnswer(9, 1),
    explication: "La loi du 15 mars 2004 interdit le port de signes religieux ostensibles dans les écoles, collèges et lycées publics. Les signes discrets sont autorisés."
  },
  {
    id: 10,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "Un bailleur refuse de louer un appartement à une famille en raison de sa religion. Est-ce légal ?",
    options: [
      "Oui, le propriétaire est libre de choisir son locataire",
      "Non, c'est une discrimination interdite par la loi",
      "Oui, si le logement est petit",
      "Cela dépend de la région"
    ],
    correctHash: hashAnswer(10, 1),
    explication: "La discrimination dans le logement fondée sur la religion est interdite. Le bailleur encourt des sanctions pénales pouvant aller jusqu'à 3 ans de prison et 45 000 € d'amende."
  },
  {
    id: 11,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "Qu'est-ce que l'égalité femmes-hommes implique en France ?",
    options: [
      "Les femmes ont moins de droits que les hommes",
      "Les femmes et les hommes ont les mêmes droits et les mêmes devoirs",
      "Les hommes décident pour les femmes",
      "L'égalité n'existe que dans le travail"
    ],
    correctHash: hashAnswer(11, 1),
    explication: "L'égalité entre les femmes et les hommes est un principe constitutionnel. Elle s'applique dans tous les domaines : travail, famille, vie publique, etc."
  },

  // ==================== 2. SYSTÈME INSTITUTIONNEL (6 questions) ====================
  
  {
    id: 12,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Démocratie et droit de vote",
    question: "En France, la souveraineté appartient à :",
    options: ["Au Gouvernement", "Au Parlement", "Au Président de la République", "Au peuple"],
    correctHash: hashAnswer(12, 3),
    explication: "Selon l'article 3 de la Constitution : « La souveraineté nationale appartient au peuple qui l'exerce par ses représentants et par la voie du référendum. »"
  },
  {
    id: 13,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Démocratie et droit de vote",
    question: "À quel âge peut-on voter en France ?",
    options: ["16 ans", "18 ans", "21 ans", "25 ans"],
    correctHash: hashAnswer(13, 1),
    explication: "En France, le droit de vote est accordé à tous les citoyens français âgés de 18 ans ou plus, jouissant de leurs droits civils et politiques."
  },
  {
    id: 14,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Démocratie et droit de vote",
    question: "Le vote en France est-il obligatoire ?",
    options: [
      "Oui, on risque une amende si on ne vote pas",
      "Non, le vote est un droit et un devoir civique, mais il n'est pas obligatoire",
      "Oui, sauf pour les personnes âgées",
      "Non, sauf pour les élections présidentielles"
    ],
    correctHash: hashAnswer(14, 1),
    explication: "En France, le vote n'est pas obligatoire (contrairement à la Belgique ou au Luxembourg). C'est un droit fondamental et un devoir civique, mais l'abstention n'est pas sanctionnée."
  },
  {
    id: 15,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Organisation de la République",
    question: "Qui est le chef de l'État en France ?",
    options: ["Le Premier ministre", "Le Président de l'Assemblée nationale", "Le Président de la République", "Le Président du Sénat"],
    correctHash: hashAnswer(15, 2),
    explication: "Le Président de la République est le chef de l'État. Il est élu au suffrage universel direct pour 5 ans et veille au respect de la Constitution."
  },
  {
    id: 16,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Organisation de la République",
    question: "Le Parlement français est composé de :",
    options: [
      "L'Assemblée nationale uniquement",
      "Le Sénat uniquement",
      "L'Assemblée nationale et le Sénat",
      "Le Conseil constitutionnel et le Conseil d'État"
    ],
    correctHash: hashAnswer(16, 2),
    explication: "Le Parlement français est bicaméral : il comprend l'Assemblée nationale (577 députés élus au suffrage direct) et le Sénat (348 sénateurs élus au suffrage indirect)."
  },
  {
    id: 17,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Institutions européennes",
    question: "La France est membre fondateur de l'Union européenne. En quelle année a été signé le traité de Rome ?",
    options: ["1945", "1957", "1992", "2002"],
    correctHash: hashAnswer(17, 1),
    explication: "Le traité de Rome a été signé le 25 mars 1957 par 6 pays fondateurs : France, Allemagne, Italie, Belgique, Pays-Bas et Luxembourg."
  },

  // ==================== 3. DROITS ET DEVOIRS (11 questions) ====================
  
  {
    id: 18,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "La Déclaration des droits de l'homme et du citoyen date de :",
    options: ["1789", "1848", "1905", "1958"],
    correctHash: hashAnswer(18, 0),
    explication: "La Déclaration des droits de l'homme et du citoyen a été adoptée le 26 août 1789. Elle fait partie du bloc de constitutionnalité et garantit les droits fondamentaux."
  },
  {
    id: 19,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "Quel droit n'est PAS garanti par la Constitution française ?",
    options: [
      "La liberté d'expression",
      "Le droit de propriété",
      "Le droit au travail garanti par l'État",
      "La liberté de conscience"
    ],
    correctHash: hashAnswer(19, 2),
    explication: "Le droit au travail est mentionné dans le préambule de 1946, mais il ne s'agit pas d'une garantie d'emploi par l'État. L'État doit favoriser l'accès à l'emploi, mais ne peut garantir un emploi à chacun."
  },
  {
    id: 20,
    categorie: "Droits et devoirs",
    sousCategorie: "Obligations et devoirs",
    question: "Quelle est la principale obligation fiscale des résidents en France ?",
    options: [
      "Payer uniquement la TVA",
      "Déclarer ses revenus et payer ses impôts",
      "Payer seulement s'ils sont propriétaires",
      "Les étrangers ne paient pas d'impôts"
    ],
    correctHash: hashAnswer(20, 1),
    explication: "Toute personne résidant en France doit déclarer ses revenus et payer les impôts correspondants. C'est une obligation légale qui contribue au financement des services publics."
  },
  {
    id: 21,
    categorie: "Droits et devoirs",
    sousCategorie: "Obligations et devoirs",
    question: "Le respect des lois de la République est-il obligatoire pour tous ?",
    options: [
      "Non, seulement pour les citoyens français",
      "Oui, pour toute personne se trouvant sur le territoire français",
      "Non, les touristes en sont exemptés",
      "Oui, mais seulement les lois pénales"
    ],
    correctHash: hashAnswer(21, 1),
    explication: "Toute personne sur le territoire français, quelle que soit sa nationalité, doit respecter les lois de la République. Nul n'est censé ignorer la loi."
  },
  {
    id: 22,
    categorie: "Droits et devoirs",
    sousCategorie: "Obligations et devoirs",
    question: "La scolarité est obligatoire en France pour les enfants de :",
    options: ["3 à 14 ans", "3 à 16 ans", "6 à 16 ans", "6 à 18 ans"],
    correctHash: hashAnswer(22, 1),
    explication: "Depuis 2019, l'instruction est obligatoire de 3 à 16 ans. La formation est ensuite obligatoire jusqu'à 18 ans (école, apprentissage, insertion...)."
  },
  {
    id: 23,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation",
    question: "Vous recevez un avis d'imposition. Quelle est votre obligation ?",
    options: [
      "Vous pouvez l'ignorer si vous estimez payer trop",
      "Vous devez payer dans les délais indiqués",
      "Vous pouvez payer quand vous voulez",
      "Seuls les propriétaires doivent payer"
    ],
    correctHash: hashAnswer(23, 1),
    explication: "Le paiement des impôts dans les délais est une obligation légale. En cas de difficultés, il faut contacter l'administration fiscale pour demander un délai ou un étalement."
  },
  {
    id: 24,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation",
    question: "Votre voisin fait du bruit excessif la nuit. Que pouvez-vous faire ?",
    options: [
      "Rien, c'est son droit",
      "Appeler la police et/ou faire constater le trouble par un huissier",
      "Vous venger en faisant aussi du bruit",
      "Déménager"
    ],
    correctHash: hashAnswer(24, 1),
    explication: "Le tapage nocturne est une infraction. Vous pouvez appeler la police (17), faire constater le trouble par un huissier, ou engager une médiation."
  },
  {
    id: 25,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation",
    question: "Vous êtes convoqué pour une journée de jury d'assises. Est-ce obligatoire ?",
    options: [
      "Non, c'est une invitation",
      "Oui, sauf motif légitime, c'est un devoir civique",
      "Non, si vous travaillez",
      "Oui, mais seulement pour les fonctionnaires"
    ],
    correctHash: hashAnswer(25, 1),
    explication: "Être juré d'assises est un devoir civique obligatoire. Refuser sans motif légitime est passible d'une amende."
  },
  {
    id: 26,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation",
    question: "Un commerçant refuse de vous servir en raison de votre origine. Que faire ?",
    options: [
      "Rien, c'est son choix commercial",
      "Porter plainte pour discrimination",
      "L'accepter et aller ailleurs",
      "Cela n'est pas punissable"
    ],
    correctHash: hashAnswer(26, 1),
    explication: "Le refus de vente discriminatoire est un délit puni par la loi. Vous pouvez porter plainte auprès de la police, de la gendarmerie ou du procureur de la République."
  },
  {
    id: 27,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation",
    question: "Vous trouvez un portefeuille contenant de l'argent et des papiers d'identité. Que devez-vous faire ?",
    options: [
      "Garder l'argent et jeter le reste",
      "Le rapporter à la police ou à la mairie",
      "Le garder en attendant qu'on vous contacte",
      "Le jeter pour ne pas avoir de problèmes"
    ],
    correctHash: hashAnswer(27, 1),
    explication: "Vous devez rapporter l'objet trouvé au commissariat, à la gendarmerie ou à la mairie. Garder un objet trouvé sans chercher à le restituer peut constituer un abus de confiance."
  },
  {
    id: 28,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation",
    question: "Votre employeur vous demande de travailler le dimanche. Est-ce légal ?",
    options: [
      "Non, jamais",
      "Oui, dans certains secteurs et avec des compensations prévues par la loi",
      "Oui, sans aucune compensation",
      "Seulement avec votre accord écrit, sans exception"
    ],
    correctHash: hashAnswer(28, 1),
    explication: "Le travail le dimanche est encadré par la loi. Il est autorisé dans certains secteurs (commerce alimentaire, hôtellerie, santé...) et doit donner lieu à des compensations."
  },

  // ==================== 4. HISTOIRE, GÉOGRAPHIE ET CULTURE (8 questions) ====================
  
  {
    id: 29,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire",
    question: "Quel événement marque le début de la Révolution française ?",
    options: [
      "La mort de Louis XIV",
      "La prise de la Bastille le 14 juillet 1789",
      "Le sacre de Napoléon",
      "La bataille de Waterloo"
    ],
    correctHash: hashAnswer(29, 1),
    explication: "La prise de la Bastille le 14 juillet 1789 est le symbole du début de la Révolution française. Cette date est devenue la fête nationale française depuis 1880."
  },
  {
    id: 30,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire",
    question: "Qui était le général qui a libéré la France pendant la Seconde Guerre mondiale et fondé la Ve République ?",
    options: ["Maréchal Pétain", "Jean Moulin", "Charles de Gaulle", "Georges Clemenceau"],
    correctHash: hashAnswer(30, 2),
    explication: "Le général Charles de Gaulle a dirigé la France libre pendant la Seconde Guerre mondiale et a fondé la Ve République en 1958. Il en a été le premier président (1959-1969)."
  },
  {
    id: 31,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire",
    question: "Quand a été abolie définitivement l'esclavage en France ?",
    options: ["1789", "1848", "1905", "1945"],
    correctHash: hashAnswer(31, 1),
    explication: "L'abolition définitive de l'esclavage en France a été proclamée le 27 avril 1848 par le décret de Victor Schœlcher."
  },
  {
    id: 32,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Géographie",
    question: "Combien la France compte-t-elle de régions métropolitaines ?",
    options: ["12", "13", "18", "22"],
    correctHash: hashAnswer(32, 1),
    explication: "Depuis 2016, la France métropolitaine compte 13 régions (contre 22 auparavant). En comptant les régions d'outre-mer, la France compte 18 régions au total."
  },
  {
    id: 33,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Géographie",
    question: "Quel est le plus long fleuve de France ?",
    options: ["La Seine", "Le Rhône", "La Loire", "La Garonne"],
    correctHash: hashAnswer(33, 2),
    explication: "La Loire est le plus long fleuve de France avec 1 012 km. Elle prend sa source au Mont Gerbier-de-Jonc en Ardèche et se jette dans l'océan Atlantique à Saint-Nazaire."
  },
  {
    id: 34,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Géographie",
    question: "Lequel de ces territoires n'est PAS un département ou une région d'outre-mer ?",
    options: ["La Guadeloupe", "Monaco", "La Réunion", "La Martinique"],
    correctHash: hashAnswer(34, 1),
    explication: "Monaco est une principauté indépendante, ce n'est pas un territoire français. La Guadeloupe, la Martinique et La Réunion sont des départements et régions d'outre-mer (DROM)."
  },
  {
    id: 35,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Patrimoine",
    question: "Quel monument parisien a été construit pour l'Exposition universelle de 1889 ?",
    options: ["L'Arc de Triomphe", "La Tour Eiffel", "Le Sacré-Cœur", "Le Panthéon"],
    correctHash: hashAnswer(35, 1),
    explication: "La Tour Eiffel a été construite par Gustave Eiffel pour l'Exposition universelle de 1889, centenaire de la Révolution française."
  },
  {
    id: 36,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Patrimoine",
    question: "Où sont enterrés les grands personnages de l'histoire de France ?",
    options: ["Au Louvre", "Au Panthéon", "À Versailles", "À Notre-Dame"],
    correctHash: hashAnswer(36, 1),
    explication: "Le Panthéon, à Paris, accueille les sépultures de personnalités ayant marqué l'histoire de France (Victor Hugo, Marie Curie, Jean Moulin, Simone Veil...)."
  },

  // ==================== 5. VIVRE DANS LA SOCIÉTÉ FRANÇAISE (4 questions) ====================
  
  {
    id: 37,
    categorie: "Vivre dans la société française",
    sousCategorie: "S'installer en France",
    question: "Quel document est obligatoire pour un étranger non-européen souhaitant résider en France plus de 3 mois ?",
    options: ["Un visa seulement", "Un titre de séjour ou visa long séjour", "Une carte d'identité de son pays", "Aucun document"],
    correctHash: hashAnswer(37, 1),
    explication: "Pour séjourner en France plus de 3 mois, un étranger non-européen doit posséder un titre de séjour ou un visa long séjour valant titre de séjour (VLS-TS)."
  },
  {
    id: 38,
    categorie: "Vivre dans la société française",
    sousCategorie: "Accès aux soins",
    question: "Quel numéro appeler en cas d'urgence médicale en France ?",
    options: ["17", "15 (SAMU)", "18", "114"],
    correctHash: hashAnswer(38, 1),
    explication: "Le 15 est le numéro du SAMU (Service d'Aide Médicale Urgente). Le 17 est la police, le 18 les pompiers, le 112 le numéro européen d'urgence."
  },
  {
    id: 39,
    categorie: "Vivre dans la société française",
    sousCategorie: "Travailler en France",
    question: "Quelle est la durée légale du travail en France pour un salarié à temps plein ?",
    options: ["32 heures par semaine", "35 heures par semaine", "39 heures par semaine", "40 heures par semaine"],
    correctHash: hashAnswer(39, 1),
    explication: "La durée légale du travail en France est de 35 heures par semaine depuis 2000 (lois Aubry). Les heures au-delà sont des heures supplémentaires majorées."
  },
  {
    id: 40,
    categorie: "Vivre dans la société française",
    sousCategorie: "Éducation",
    question: "L'école publique en France est :",
    options: [
      "Payante et facultative",
      "Gratuite, laïque et obligatoire de 3 à 16 ans",
      "Réservée aux citoyens français",
      "Gérée par les religions"
    ],
    correctHash: hashAnswer(40, 1),
    explication: "L'école publique française est gratuite, laïque et obligatoire. L'instruction est obligatoire de 3 à 16 ans pour tous les enfants résidant en France, quelle que soit leur nationalité."
  }
];

// Fonction pour vérifier une réponse
export function verifyAnswerExam1(questionId: number, userAnswerIndex: number, correctHash: string): boolean {
  return hashAnswer(questionId, userAnswerIndex) === correctHash;
}

// Fonction pour trouver l'index correct à partir du hash
export function findCorrectIndexExam1(questionId: number, correctHash: string): number {
  for (let i = 0; i < 4; i++) {
    if (hashAnswer(questionId, i) === correctHash) {
      return i;
    }
  }
  return 0;
}

export const EXAMEN_1: ExamenBlanc = {
  numero: 1,
  titre: "Examen blanc #1",
  description: "40 questions en conditions réelles d'examen",
  questions,
  dureeMinutes: 45,
  totalQuestions: 40
};
