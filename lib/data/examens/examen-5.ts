import { ExamenBlanc, Question, hashAnswer } from './types';

// =====================================================
// EXAMEN BLANC #5 - 40 QUESTIONS
// Répartition officielle :
// 1. Principes et valeurs (11 questions)
// 2. Système institutionnel (6 questions)
// 3. Droits et devoirs (11 questions)
// 4. Histoire/géographie/culture (8 questions)
// 5. Vivre en France (4 questions)
// =====================================================

const EXAM_NUMBER = 5;

const questions: Question[] = [
  // ==================== 1. PRINCIPES ET VALEURS (11 questions) ====================
  
  {
    id: 1,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "Sur les pièces de monnaie françaises en euros figurent :",
    options: [
      "Le portrait du Président",
      "Le symbole RF (République Française)",
      "Le drapeau européen uniquement",
      "Rien de spécifique"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 1, 1),
    explication: "Les pièces françaises en euros portent le symbole RF (République Française), souvent accompagné de Marianne ou d'un arbre. Chaque pays de la zone euro a sa propre face nationale."
  },
  {
    id: 2,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "Le 14 juillet est la fête nationale car il commémore :",
    options: [
      "La fin de la Seconde Guerre mondiale",
      "La prise de la Bastille (1789) et la Fête de la Fédération (1790)",
      "La naissance de Napoléon",
      "L'indépendance de la France"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 2, 1),
    explication: "Le 14 juillet commémore à la fois la prise de la Bastille du 14 juillet 1789 (symbole de la fin de l'absolutisme) et la Fête de la Fédération du 14 juillet 1790 (symbole d'unité)."
  },
  {
    id: 3,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "Combien d'étoiles comporte le drapeau européen ?",
    options: ["10 étoiles", "12 étoiles", "15 étoiles", "27 étoiles"],
    correctHash: hashAnswer(EXAM_NUMBER, 3, 1),
    explication: "Le drapeau européen comporte 12 étoiles dorées disposées en cercle sur fond bleu. Ce nombre ne varie pas selon le nombre de pays membres (il symbolise l'union et l'harmonie)."
  },
  {
    id: 4,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "Un hôpital public peut-il refuser d'admettre un patient en raison de sa religion ?",
    options: [
      "Oui, c'est autorisé",
      "Non, c'est une discrimination interdite",
      "Oui, si l'hôpital est privé",
      "Cela dépend du patient"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 4, 1),
    explication: "Aucun service public ne peut refuser l'accès à un usager en raison de sa religion. C'est une discrimination interdite par la loi et contraire au principe d'égalité."
  },
  {
    id: 5,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "Le principe de laïcité s'applique-t-il dans les entreprises privées ?",
    options: [
      "Oui, de la même manière que dans les services publics",
      "Non, les employés ont une liberté religieuse encadrée par le règlement intérieur",
      "Oui, mais uniquement pour les grandes entreprises",
      "Non, jamais"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 5, 1),
    explication: "Dans le privé, les employés ont une liberté religieuse, mais l'employeur peut l'encadrer par le règlement intérieur pour des raisons objectives (sécurité, hygiène, relations clients)."
  },
  {
    id: 6,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité",
    question: "La discrimination à l'embauche fondée sur l'âge est-elle interdite ?",
    options: [
      "Non, l'employeur choisit librement",
      "Oui, c'est interdit sauf cas légaux",
      "Uniquement pour les personnes de plus de 60 ans",
      "Uniquement dans la fonction publique"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 6, 1),
    explication: "La discrimination à l'embauche fondée sur l'âge est interdite, sauf exceptions légales (ex: contrats aidés réservés aux jeunes). Elle est punie de 3 ans de prison et 45 000 € d'amende."
  },
  {
    id: 7,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "Vous êtes témoin d'une personne qui jette ses déchets sur la voie publique. Que faire ?",
    options: [
      "Rien, c'est courant",
      "Lui rappeler poliment qu'il existe des poubelles et que c'est interdit",
      "Ramasser à sa place",
      "Appeler immédiatement la police"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 7, 1),
    explication: "Jeter des déchets sur la voie publique est interdit et passible d'amende. Un rappel poli du civisme est approprié. En cas de récidive, on peut signaler aux autorités."
  },
  {
    id: 8,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "Un site internet publie des propos racistes. Que peut-on faire ?",
    options: [
      "Rien, c'est légal sur internet",
      "Signaler sur la plateforme Pharos (police) et au site hébergeur",
      "Partager pour montrer l'exemple",
      "Envoyer un message privé à l'auteur"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 8, 1),
    explication: "Les propos racistes sont punis par la loi, même sur internet. On peut les signaler sur la plateforme Pharos (pharos.interieur.gouv.fr) et à l'hébergeur du site."
  },
  {
    id: 9,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "Dans une file d'attente, quelqu'un vous insulte en raison de votre origine. Quelle est la bonne réaction ?",
    options: [
      "Répondre par la violence",
      "Garder son calme, témoigner et porter plainte si nécessaire",
      "Partir sans rien dire",
      "Insulter en retour"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 9, 1),
    explication: "Les injures racistes sont des délits punis par la loi. Il faut garder son calme, demander des témoins et porter plainte au commissariat ou en ligne sur pre-plainte.fr."
  },
  {
    id: 10,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "Votre enfant est victime de harcèlement à l'école. Que faire en premier ?",
    options: [
      "Changer d'école immédiatement",
      "Alerter l'école (professeur, directeur) et le numéro 3020 si nécessaire",
      "Ne rien faire, ça va passer",
      "Aller voir les parents de l'harceleur directement"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 10, 1),
    explication: "En cas de harcèlement scolaire, il faut d'abord alerter l'école (enseignant, directeur). Le 3020 (gratuit) est le numéro national contre le harcèlement scolaire."
  },
  {
    id: 11,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Fraternité",
    question: "Le bénévolat dans une association est :",
    options: [
      "Obligatoire en France",
      "Une forme d'engagement citoyen volontaire",
      "Réservé aux retraités",
      "Payé par l'État"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 11, 1),
    explication: "Le bénévolat est un engagement volontaire et non rémunéré. C'est une forme de fraternité et d'engagement citoyen. Plus de 12 millions de Français sont bénévoles."
  },

  // ==================== 2. SYSTÈME INSTITUTIONNEL (6 questions) ====================
  
  {
    id: 12,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Démocratie et droit de vote",
    question: "Un citoyen français vivant à l'étranger peut-il voter ?",
    options: [
      "Non, jamais",
      "Oui, il peut voter dans les ambassades/consulats ou par procuration",
      "Uniquement s'il rentre en France",
      "Uniquement pour les élections européennes"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 12, 1),
    explication: "Les Français de l'étranger peuvent voter dans les ambassades et consulats, par correspondance (pour certaines élections) ou par procuration. Ils élisent aussi des députés spécifiques."
  },
  {
    id: 13,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Démocratie et droit de vote",
    question: "Qu'est-ce qu'un référendum ?",
    options: [
      "Une élection présidentielle",
      "Un vote des citoyens sur une question précise (oui/non)",
      "Une élection des députés",
      "Un sondage d'opinion"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 13, 1),
    explication: "Un référendum permet aux citoyens de se prononcer directement par oui ou non sur une question importante (loi, constitution, etc.). Le résultat s'impose aux pouvoirs publics."
  },
  {
    id: 14,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Organisation de la République",
    question: "Le Premier ministre est responsable devant :",
    options: [
      "Le Président uniquement",
      "L'Assemblée nationale",
      "Le Sénat",
      "Les citoyens"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 14, 1),
    explication: "Le Premier ministre et son gouvernement sont responsables devant l'Assemblée nationale, qui peut les renverser par une motion de censure."
  },
  {
    id: 15,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Organisation de la République",
    question: "Le Conseil d'État est :",
    options: [
      "Un parti politique",
      "La plus haute juridiction administrative",
      "Un ministère",
      "Une assemblée de maires"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 15, 1),
    explication: "Le Conseil d'État est la plus haute juridiction de l'ordre administratif. Il juge les litiges entre les citoyens et l'administration et conseille le gouvernement."
  },
  {
    id: 16,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Collectivités territoriales",
    question: "Les régions françaises ont compétence notamment pour :",
    options: [
      "La police uniquement",
      "Les lycées, les transports régionaux, le développement économique",
      "L'armée",
      "La justice"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 16, 1),
    explication: "Les régions gèrent les lycées, les transports régionaux (TER), la formation professionnelle et le développement économique. Chaque collectivité a des compétences spécifiques."
  },
  {
    id: 17,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Institutions européennes",
    question: "La Commission européenne a pour rôle principal de :",
    options: [
      "Voter les lois européennes",
      "Proposer des lois et veiller à leur application",
      "Juger les États membres",
      "Élire le Président de l'UE"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 17, 1),
    explication: "La Commission européenne est l'organe exécutif de l'UE. Elle propose des lois, veille à leur application et représente l'UE internationalement."
  },

  // ==================== 3. DROITS ET DEVOIRS (11 questions) ====================
  
  {
    id: 18,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "Le secret de la correspondance est-il protégé en France ?",
    options: [
      "Non, tout peut être lu",
      "Oui, c'est un principe constitutionnel",
      "Uniquement pour les lettres manuscrites",
      "Uniquement pour les riches"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 18, 1),
    explication: "Le secret de la correspondance (lettres, emails, messages) est protégé par la Constitution. Toute violation est un délit, sauf autorisation judiciaire exceptionnelle."
  },
  {
    id: 19,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "La liberté de culte en France signifie :",
    options: [
      "On peut pratiquer la religion de son choix ou aucune",
      "On doit être catholique",
      "Les religions sont interdites",
      "On doit choisir parmi 3 religions autorisées"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 19, 0),
    explication: "La liberté de culte garantit à chacun le droit de pratiquer la religion de son choix, d'en changer ou de n'en avoir aucune, dans le respect de l'ordre public."
  },
  {
    id: 20,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoirs du citoyen",
    question: "Respecter le Code de la route est :",
    options: [
      "Optionnel",
      "Un devoir de chacun pour la sécurité de tous",
      "Uniquement pour les conducteurs professionnels",
      "Uniquement en ville"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 20, 1),
    explication: "Le respect du Code de la route est une obligation pour tous (piétons, cyclistes, automobilistes). C'est un devoir citoyen pour assurer la sécurité de tous."
  },
  {
    id: 21,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoirs du citoyen",
    question: "Porter secours à une personne en danger est :",
    options: [
      "Optionnel",
      "Un devoir légal (non-assistance à personne en danger)",
      "Réservé aux professionnels",
      "Interdit si on n'est pas médecin"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 21, 1),
    explication: "La non-assistance à personne en danger est un délit (jusqu'à 5 ans de prison). Chacun doit porter secours dans la mesure de ses moyens, sans se mettre en danger."
  },
  {
    id: 22,
    categorie: "Droits et devoirs",
    sousCategorie: "Justice",
    question: "En France, peut-on se faire justice soi-même ?",
    options: [
      "Oui, si on a raison",
      "Non, seule la justice peut trancher les conflits",
      "Oui, en cas de légitime défense uniquement",
      "Oui, si la police ne vient pas"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 22, 1),
    explication: "Se faire justice soi-même est interdit (« nul ne peut se faire justice soi-même »). Seuls les tribunaux peuvent trancher les conflits. Exception : la légitime défense strictement encadrée."
  },
  {
    id: 23,
    categorie: "Droits et devoirs",
    sousCategorie: "Justice",
    question: "Un jugement peut-il être contesté ?",
    options: [
      "Non, jamais",
      "Oui, par un appel devant une juridiction supérieure",
      "Uniquement par les riches",
      "Uniquement si on est innocent"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 23, 1),
    explication: "Un jugement peut être contesté en faisant appel devant une juridiction supérieure. C'est le principe du double degré de juridiction qui garantit un procès équitable."
  },
  {
    id: 24,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits sociaux",
    question: "Le droit au logement est-il reconnu en France ?",
    options: [
      "Non, ce n'est pas un droit",
      "Oui, c'est un objectif constitutionnel (DALO)",
      "Uniquement pour les Français",
      "Uniquement pour les propriétaires"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 24, 1),
    explication: "Le droit au logement opposable (DALO) est reconnu depuis 2007. L'État doit aider toute personne qui n'a pas de logement décent à en obtenir un."
  },
  {
    id: 25,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits sociaux",
    question: "Les allocations familiales sont versées :",
    options: [
      "Uniquement aux familles riches",
      "À toutes les familles avec au moins 2 enfants",
      "Uniquement aux familles françaises",
      "Uniquement aux familles nombreuses (4 enfants minimum)"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 25, 1),
    explication: "Les allocations familiales sont versées par la CAF à toutes les familles résidant en France avec au moins 2 enfants à charge de moins de 20 ans, sans condition de nationalité."
  },
  {
    id: 26,
    categorie: "Droits et devoirs",
    sousCategorie: "Défense nationale",
    question: "La Journée Défense et Citoyenneté permet de :",
    options: [
      "S'engager dans l'armée",
      "Découvrir la défense et être recensé (nécessaire pour examens/permis)",
      "Voter",
      "Obtenir la nationalité"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 26, 1),
    explication: "La JDC (ex-JAPD) permet de découvrir la défense nationale et de faire le recensement citoyen. Le certificat est obligatoire pour passer des examens (permis, bac, concours) avant 25 ans."
  },
  {
    id: 27,
    categorie: "Droits et devoirs",
    sousCategorie: "Vie démocratique",
    question: "Les citoyens peuvent-ils demander des comptes aux élus ?",
    options: [
      "Non, les élus font ce qu'ils veulent",
      "Oui, c'est le principe de responsabilité démocratique",
      "Uniquement tous les 10 ans",
      "Uniquement les journalistes"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 27, 1),
    explication: "Les élus doivent rendre des comptes aux citoyens (transparence, réunions publiques). C'est un principe démocratique fondamental. Les citoyens peuvent les sanctionner par le vote."
  },
  {
    id: 28,
    categorie: "Droits et devoirs",
    sousCategorie: "Vie démocratique",
    question: "Un conseiller municipal peut-il cumuler plusieurs mandats ?",
    options: [
      "Oui, sans limite",
      "Non, la loi limite le cumul des mandats",
      "Uniquement s'il est riche",
      "Uniquement les maires"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 28, 1),
    explication: "Depuis 2017, la loi interdit de cumuler une fonction exécutive locale (maire, président de région/département) avec un mandat parlementaire (député, sénateur)."
  },

  // ==================== 4. HISTOIRE/GÉOGRAPHIE/CULTURE (8 questions) ====================
  
  {
    id: 29,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire de France",
    question: "L'armistice du 11 novembre 1918 a mis fin à :",
    options: [
      "La guerre de Cent Ans",
      "La Première Guerre mondiale",
      "La Seconde Guerre mondiale",
      "La guerre d'Algérie"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 29, 1),
    explication: "L'armistice du 11 novembre 1918 a mis fin à la Première Guerre mondiale. Ce jour est férié en France et commémore tous les morts pour la France."
  },
  {
    id: 30,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire de France",
    question: "La Résistance française pendant la Seconde Guerre mondiale était :",
    options: [
      "Un mouvement de collaboration",
      "Un mouvement de combat contre l'occupation nazie",
      "Un parti politique",
      "Une association sportive"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 30, 1),
    explication: "La Résistance française regroupait des hommes et femmes qui ont combattu l'occupation allemande et le régime de Vichy de 1940 à 1944, au péril de leur vie."
  },
  {
    id: 31,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire de France",
    question: "Jean Moulin était :",
    options: [
      "Un roi de France",
      "Un héros de la Résistance, mort sous la torture",
      "Un général allemand",
      "Un président de la République"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 31, 1),
    explication: "Jean Moulin fut un grand résistant qui unifia les mouvements de Résistance. Arrêté par la Gestapo en 1943, il mourut sous la torture sans parler. Il repose au Panthéon."
  },
  {
    id: 32,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire de France",
    question: "La construction européenne a commencé après :",
    options: [
      "La Révolution française",
      "La Seconde Guerre mondiale (1945)",
      "La guerre de Cent Ans",
      "Mai 1968"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 32, 1),
    explication: "La construction européenne a débuté après 1945 pour assurer la paix en Europe. Le traité de Rome (1957) a créé la CEE, ancêtre de l'Union européenne actuelle."
  },
  {
    id: 33,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Géographie",
    question: "Le point culminant de la France métropolitaine est :",
    options: ["Le Mont Blanc", "Le Pic du Midi", "Le Puy de Dôme", "La Pointe du Hoc"],
    correctHash: hashAnswer(EXAM_NUMBER, 33, 0),
    explication: "Le Mont Blanc, situé dans les Alpes à la frontière franco-italienne, est le point culminant de la France et de l'Europe occidentale avec 4 809 mètres d'altitude."
  },
  {
    id: 34,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Géographie",
    question: "La France possède des territoires dans :",
    options: [
      "Uniquement en Europe",
      "Tous les océans du monde (Atlantique, Pacifique, Indien)",
      "Uniquement en Afrique",
      "Aucun territoire hors Europe"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 34, 1),
    explication: "La France possède des territoires d'outre-mer dans tous les océans : Caraïbes (Guadeloupe, Martinique), Pacifique (Polynésie, Nouvelle-Calédonie), Indien (Réunion, Mayotte), Amérique du Sud (Guyane)."
  },
  {
    id: 35,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Géographie",
    question: "Quel fleuve traverse Paris ?",
    options: ["La Loire", "Le Rhône", "La Seine", "La Garonne"],
    correctHash: hashAnswer(EXAM_NUMBER, 35, 2),
    explication: "La Seine traverse Paris d'est en ouest. Elle prend sa source en Bourgogne et se jette dans la Manche au Havre après 777 km."
  },
  {
    id: 36,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Culture",
    question: "Victor Hugo était :",
    options: [
      "Un général",
      "Un écrivain majeur (Les Misérables, Notre-Dame de Paris)",
      "Un peintre",
      "Un musicien"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 36, 1),
    explication: "Victor Hugo (1802-1885) est l'un des plus grands écrivains français. Il a écrit « Les Misérables », « Notre-Dame de Paris », « Les Contemplations ». Il repose au Panthéon."
  },

  // ==================== 5. VIVRE EN FRANCE (4 questions) ====================
  
  {
    id: 37,
    categorie: "Vivre en France",
    sousCategorie: "Vie quotidienne",
    question: "Le 3919 est le numéro pour :",
    options: [
      "Les urgences médicales",
      "Les femmes victimes de violences",
      "Les problèmes de voisinage",
      "La météo"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 37, 1),
    explication: "Le 3919 est le numéro national gratuit et anonyme pour les femmes victimes de violences (conjugales, sexuelles, psychologiques). Il est accessible 24h/24, 7j/7."
  },
  {
    id: 38,
    categorie: "Vivre en France",
    sousCategorie: "Vie quotidienne",
    question: "Pour signaler un danger sur la route (accident, obstacle), quel numéro appeler ?",
    options: ["15", "17 ou 112", "18", "114"],
    correctHash: hashAnswer(EXAM_NUMBER, 38, 1),
    explication: "Pour un danger sur la route ou un accident, il faut appeler le 17 (police/gendarmerie) ou le 112 (numéro d'urgence européen) qui redirigera vers le bon service."
  },
  {
    id: 39,
    categorie: "Vivre en France",
    sousCategorie: "Services publics",
    question: "La CAF (Caisse d'Allocations Familiales) verse :",
    options: [
      "Les salaires",
      "Les aides sociales et familiales (allocations, RSA, APL...)",
      "Les retraites",
      "Les amendes"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 39, 1),
    explication: "La CAF verse les prestations sociales et familiales : allocations familiales, RSA, APL (aide au logement), prime d'activité, complément familial, etc."
  },
  {
    id: 40,
    categorie: "Vivre en France",
    sousCategorie: "Logement",
    question: "Un propriétaire peut-il expulser un locataire sans décision de justice ?",
    options: [
      "Oui, quand il veut",
      "Non, il faut obligatoirement une décision de justice",
      "Oui, s'il le prévient 1 mois avant",
      "Oui, si le loyer n'est pas payé"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 40, 1),
    explication: "Aucune expulsion ne peut avoir lieu sans décision de justice. Le propriétaire doit saisir le tribunal. L'expulsion sans jugement est illégale et constitue un trouble à l'ordre public."
  },
];

export const EXAMEN_5: ExamenBlanc = {
  numero: 5,
  titre: "Examen blanc #5",
  description: "40 questions en conditions réelles d'examen",
  questions,
  dureeMinutes: 45,
  totalQuestions: 40
};
