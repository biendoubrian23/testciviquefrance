import { ExamenBlanc, Question, hashAnswer } from './types';

// =====================================================
// EXAMEN BLANC #3 - 40 QUESTIONS
// Répartition officielle :
// 1. Principes et valeurs (11 questions)
// 2. Système institutionnel (6 questions)
// 3. Droits et devoirs (11 questions)
// 4. Histoire/géographie/culture (8 questions)
// 5. Vivre en France (4 questions)
// =====================================================

const EXAM_NUMBER = 3;

const questions: Question[] = [
  // ==================== 1. PRINCIPES ET VALEURS (11 questions) ====================
  
  {
    id: 1,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "Combien de bandes comporte le drapeau français ?",
    options: ["2 bandes", "3 bandes", "4 bandes", "5 bandes"],
    correctHash: hashAnswer(EXAM_NUMBER, 1, 1),
    explication: "Le drapeau français comporte 3 bandes verticales de couleurs égales : bleu, blanc et rouge. Il est l'emblème national de la République française depuis 1794."
  },
  {
    id: 2,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "Quel est le symbole féminin de la République française ?",
    options: ["Jeanne d'Arc", "Marianne", "La Liberté", "La France"],
    correctHash: hashAnswer(EXAM_NUMBER, 2, 1),
    explication: "Marianne est la figure allégorique de la République française. Son buste est présent dans toutes les mairies de France. Elle symbolise la liberté et la raison."
  },
  {
    id: 3,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "Où figure la devise de la République française ?",
    options: [
      "Uniquement sur les pièces de monnaie",
      "Sur les frontons des bâtiments publics et dans la Constitution",
      "Uniquement dans les écoles",
      "Nulle part officiellement"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 3, 1),
    explication: "La devise « Liberté, Égalité, Fraternité » figure dans l'article 2 de la Constitution de 1958 et est inscrite sur les frontons des édifices publics (mairies, écoles, tribunaux)."
  },
  {
    id: 4,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "Dans un hôpital public, peut-on refuser d'être soigné par un médecin en raison de son sexe ?",
    options: [
      "Oui, c'est un droit du patient",
      "Non, sauf urgence vitale, mais le principe de laïcité et d'égalité s'applique",
      "Oui, toujours",
      "Cela dépend de l'hôpital"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 4, 1),
    explication: "Le principe de laïcité et d'égalité s'applique dans les services publics. Un refus de soin basé sur le sexe du praticien peut être considéré comme discriminatoire, sauf situation d'urgence vitale où le libre choix peut être limité."
  },
  {
    id: 5,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "La loi de 1905 sur la laïcité concerne :",
    options: [
      "L'interdiction des religions",
      "La séparation des Églises et de l'État",
      "L'obligation d'être catholique",
      "La fermeture des églises"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 5, 1),
    explication: "La loi du 9 décembre 1905 consacre la séparation des Églises et de l'État. L'État ne reconnaît ni ne salarie aucun culte, mais garantit le libre exercice des cultes."
  },
  {
    id: 6,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité",
    question: "L'égalité entre les femmes et les hommes signifie :",
    options: [
      "Les femmes et les hommes sont identiques",
      "Les femmes et les hommes ont les mêmes droits et les mêmes obligations",
      "Les femmes ont plus de droits",
      "Les hommes ont plus de droits"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 6, 1),
    explication: "L'égalité entre les femmes et les hommes est un principe constitutionnel. Elle implique les mêmes droits et les mêmes obligations dans tous les domaines (politique, économique, social)."
  },
  {
    id: 7,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "Dans un restaurant, le serveur refuse de servir une personne en raison de son handicap. C'est :",
    options: [
      "Légal, le restaurateur est libre",
      "Illégal, c'est une discrimination",
      "Légal si le restaurant est petit",
      "Cela dépend du handicap"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 7, 1),
    explication: "Refuser de servir une personne en raison de son handicap est une discrimination interdite et punie par la loi (jusqu'à 3 ans de prison et 45 000 € d'amende)."
  },
  {
    id: 8,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "Vous voyez des enfants seuls dans un appartement dont les parents sont absents depuis plusieurs jours. Que faire ?",
    options: [
      "Rien, ce n'est pas votre affaire",
      "Appeler le 119 (enfance en danger) ou la police (17)",
      "Prendre les enfants chez vous",
      "Attendre que les parents reviennent"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 8, 1),
    explication: "En cas de suspicion de maltraitance ou de mise en danger d'enfants, il faut alerter le 119 (numéro d'urgence enfance en danger) ou la police/gendarmerie (17)."
  },
  {
    id: 9,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "Un commerçant affiche 'Interdit aux Roms'. Est-ce légal ?",
    options: [
      "Oui, c'est sa liberté d'entreprise",
      "Non, c'est une discrimination interdite par la loi",
      "Oui, si c'est écrit en petit",
      "Cela dépend de la ville"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 9, 1),
    explication: "Interdire l'accès à un commerce en raison de l'origine est une discrimination interdite et punie par la loi (jusqu'à 3 ans de prison et 45 000 € d'amende)."
  },
  {
    id: 10,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "Votre voisin vous dit qu'il va 'corriger' son enfant violemment. Que devez-vous faire ?",
    options: [
      "Rien, c'est son enfant",
      "Alerter le 119 ou la police, c'est de la maltraitance",
      "Lui donner des conseils d'éducation",
      "Appeler la mairie"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 10, 1),
    explication: "Les violences envers les enfants sont interdites et punies par la loi. Il faut alerter le 119 (enfance en danger) ou la police. La loi interdit les châtiments corporels."
  },
  {
    id: 11,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Fraternité",
    question: "Le principe de fraternité implique :",
    options: [
      "L'obligation d'aimer tout le monde",
      "La solidarité et le respect mutuel entre citoyens",
      "Le don obligatoire aux associations",
      "L'interdiction des conflits"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 11, 1),
    explication: "La fraternité est le troisième pilier de la devise républicaine. Elle implique la solidarité, l'entraide et le respect mutuel entre tous les membres de la société."
  },

  // ==================== 2. SYSTÈME INSTITUTIONNEL (6 questions) ====================
  
  {
    id: 12,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Démocratie et droit de vote",
    question: "Combien y a-t-il de députés à l'Assemblée nationale ?",
    options: ["348", "577", "650", "700"],
    correctHash: hashAnswer(EXAM_NUMBER, 12, 1),
    explication: "L'Assemblée nationale compte 577 députés élus pour 5 ans au suffrage universel direct dans des circonscriptions législatives."
  },
  {
    id: 13,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Démocratie et droit de vote",
    question: "Quel est le mode de scrutin pour élire le Président de la République ?",
    options: [
      "Scrutin proportionnel à un tour",
      "Suffrage universel direct à deux tours",
      "Vote des députés",
      "Tirage au sort"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 13, 1),
    explication: "Le Président de la République est élu au suffrage universel direct à deux tours. Si aucun candidat n'obtient plus de 50% au 1er tour, les deux candidats en tête s'affrontent au 2nd tour."
  },
  {
    id: 14,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Organisation de la République",
    question: "Quel est le rôle du Sénat ?",
    options: [
      "Contrôler le Président",
      "Voter les lois avec l'Assemblée nationale",
      "Juger les criminels",
      "Nommer les ministres"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 14, 1),
    explication: "Le Sénat est la chambre haute du Parlement. Il vote les lois avec l'Assemblée nationale et représente les collectivités territoriales de la République."
  },
  {
    id: 15,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Organisation de la République",
    question: "La Constitution de la Ve République date de :",
    options: ["1789", "1848", "1946", "1958"],
    correctHash: hashAnswer(EXAM_NUMBER, 15, 3),
    explication: "La Constitution actuelle de la France, celle de la Ve République, a été adoptée par référendum le 28 septembre 1958. Elle a été promulguée le 4 octobre 1958."
  },
  {
    id: 16,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Collectivités territoriales",
    question: "Quelle est la plus petite collectivité territoriale en France ?",
    options: ["La région", "Le département", "La commune", "Le canton"],
    correctHash: hashAnswer(EXAM_NUMBER, 16, 2),
    explication: "La commune est la plus petite collectivité territoriale française. Il y a environ 35 000 communes en France, chacune dirigée par un maire."
  },
  {
    id: 17,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Institutions européennes",
    question: "Quel est le Parlement de l'Union européenne ?",
    options: [
      "Le Conseil de l'Europe",
      "Le Parlement européen",
      "La Commission européenne",
      "Le Conseil européen"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 17, 1),
    explication: "Le Parlement européen est l'institution qui représente les citoyens de l'UE. Ses membres sont élus au suffrage universel direct tous les 5 ans."
  },

  // ==================== 3. DROITS ET DEVOIRS (11 questions) ====================
  
  {
    id: 18,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "Le premier article de la Déclaration des droits de l'homme de 1789 affirme :",
    options: [
      "Les hommes naissent et demeurent libres et égaux en droits",
      "La République est laïque",
      "Le vote est obligatoire",
      "La France est indivisible"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 18, 0),
    explication: "L'article 1 de la Déclaration de 1789 énonce : « Les hommes naissent et demeurent libres et égaux en droits. Les distinctions sociales ne peuvent être fondées que sur l'utilité commune. »"
  },
  {
    id: 19,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "La liberté de la presse en France signifie :",
    options: [
      "On peut publier n'importe quoi sans limite",
      "On peut publier librement dans le respect des lois (diffamation, vie privée)",
      "Seul l'État peut publier des journaux",
      "Il faut l'autorisation du gouvernement"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 19, 1),
    explication: "La liberté de la presse est garantie par la loi de 1881. Elle permet de publier librement mais dans le respect des lois : interdiction de diffamation, injure, incitation à la haine, etc."
  },
  {
    id: 20,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoirs du citoyen",
    question: "Le service national universel (SNU) dure :",
    options: [
      "1 journée",
      "2 semaines (séjour de cohésion)",
      "6 mois",
      "1 an"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 20, 1),
    explication: "Le SNU comprend un séjour de cohésion de 2 semaines (obligatoire pour les volontaires) suivi d'une mission d'intérêt général de 84 heures minimum."
  },
  {
    id: 21,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoirs du citoyen",
    question: "Qui doit respecter la loi en France ?",
    options: [
      "Uniquement les citoyens français",
      "Tout le monde sur le territoire français",
      "Uniquement les adultes",
      "Uniquement les hommes"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 21, 1),
    explication: "La loi s'applique à toute personne présente sur le territoire français, qu'elle soit française ou étrangère, majeure ou mineure. Nul n'est au-dessus des lois."
  },
  {
    id: 22,
    categorie: "Droits et devoirs",
    sousCategorie: "Justice",
    question: "En France, la justice est-elle indépendante du pouvoir politique ?",
    options: [
      "Non, le Président contrôle les juges",
      "Oui, c'est un principe fondamental",
      "Cela dépend des affaires",
      "Non, les ministres décident"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 22, 1),
    explication: "L'indépendance de la justice est un principe fondamental. Les juges sont indépendants du pouvoir exécutif et législatif. C'est la séparation des pouvoirs."
  },
  {
    id: 23,
    categorie: "Droits et devoirs",
    sousCategorie: "Justice",
    question: "À partir de quel âge est-on pénalement responsable en France ?",
    options: [
      "Dès la naissance",
      "À partir de 13 ans (responsabilité pénale atténuée)",
      "À partir de 18 ans seulement",
      "À partir de 25 ans"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 23, 1),
    explication: "Un mineur peut être poursuivi pénalement à partir de 13 ans, avec des mesures éducatives prioritaires. La majorité pénale est à 18 ans."
  },
  {
    id: 24,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits sociaux",
    question: "Le SMIC est :",
    options: [
      "Le salaire maximum en France",
      "Le Salaire Minimum Interprofessionnel de Croissance",
      "Une aide sociale",
      "Un impôt"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 24, 1),
    explication: "Le SMIC (Salaire Minimum Interprofessionnel de Croissance) est le salaire horaire minimum légal en France. Il est réévalué régulièrement."
  },
  {
    id: 25,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits sociaux",
    question: "Qui finance la Sécurité sociale ?",
    options: [
      "Uniquement l'État",
      "Les cotisations sociales des salariés et employeurs",
      "Les banques",
      "Les assurances privées"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 25, 1),
    explication: "La Sécurité sociale est financée principalement par les cotisations sociales prélevées sur les salaires (part salariale et part patronale) et par la CSG."
  },
  {
    id: 26,
    categorie: "Droits et devoirs",
    sousCategorie: "Défense nationale",
    question: "Quel est l'âge limite pour participer à la JDC (Journée Défense et Citoyenneté) ?",
    options: ["18 ans", "21 ans", "25 ans", "30 ans"],
    correctHash: hashAnswer(EXAM_NUMBER, 26, 2),
    explication: "La Journée Défense et Citoyenneté doit être effectuée avant 25 ans. Elle est obligatoire pour tous les jeunes Français, filles et garçons."
  },
  {
    id: 27,
    categorie: "Droits et devoirs",
    sousCategorie: "Vie démocratique",
    question: "Qu'est-ce qu'une association loi 1901 ?",
    options: [
      "Une entreprise commerciale",
      "Un groupement de personnes autour d'un projet commun à but non lucratif",
      "Un parti politique",
      "Une administration publique"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 27, 1),
    explication: "Une association loi 1901 est un groupement de personnes volontaires réunies autour d'un projet commun à but non lucratif. La liberté d'association est garantie en France."
  },
  {
    id: 28,
    categorie: "Droits et devoirs",
    sousCategorie: "Vie démocratique",
    question: "Les syndicats en France servent à :",
    options: [
      "Organiser des grèves seulement",
      "Défendre les droits et intérêts des travailleurs",
      "Remplacer les patrons",
      "Gérer les entreprises"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 28, 1),
    explication: "Les syndicats sont des organisations qui défendent les droits et les intérêts professionnels des travailleurs. La liberté syndicale est un droit fondamental."
  },

  // ==================== 4. HISTOIRE/GÉOGRAPHIE/CULTURE (8 questions) ====================
  
  {
    id: 29,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire de France",
    question: "Qui a aboli l'esclavage en France de manière définitive ?",
    options: [
      "Louis XIV en 1685",
      "Victor Schœlcher en 1848",
      "Napoléon en 1802",
      "De Gaulle en 1945"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 29, 1),
    explication: "L'esclavage a été aboli définitivement en France le 27 avril 1848 grâce à Victor Schœlcher. Cette date est commémorée chaque année."
  },
  {
    id: 30,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire de France",
    question: "Qui était Charles de Gaulle ?",
    options: [
      "Un roi de France",
      "Un général, chef de la France libre et fondateur de la Ve République",
      "Un empereur",
      "Un philosophe"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 30, 1),
    explication: "Charles de Gaulle fut chef de la France libre pendant la Seconde Guerre mondiale, puis fondateur de la Ve République en 1958 et son premier président (1959-1969)."
  },
  {
    id: 31,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire de France",
    question: "Le 11 novembre commémore :",
    options: [
      "La Révolution française",
      "L'armistice de 1918 (fin de la Première Guerre mondiale)",
      "La libération de Paris en 1944",
      "La prise de la Bastille"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 31, 1),
    explication: "Le 11 novembre commémore l'armistice de 1918 qui mit fin à la Première Guerre mondiale. C'est un jour férié en France."
  },
  {
    id: 32,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire de France",
    question: "Quand la France a-t-elle aboli la peine de mort ?",
    options: ["1789", "1945", "1981", "2000"],
    correctHash: hashAnswer(EXAM_NUMBER, 32, 2),
    explication: "La peine de mort a été abolie en France le 9 octobre 1981 sous la présidence de François Mitterrand, à l'initiative du ministre Robert Badinter."
  },
  {
    id: 33,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Géographie",
    question: "Quel est le plus long fleuve de France ?",
    options: ["La Seine", "Le Rhône", "La Loire", "La Garonne"],
    correctHash: hashAnswer(EXAM_NUMBER, 33, 2),
    explication: "La Loire est le plus long fleuve de France avec 1 006 km. Elle prend sa source au Mont Gerbier-de-Jonc et se jette dans l'océan Atlantique."
  },
  {
    id: 34,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Géographie",
    question: "Combien de pays partagent une frontière terrestre avec la France métropolitaine ?",
    options: ["5 pays", "6 pays", "8 pays", "10 pays"],
    correctHash: hashAnswer(EXAM_NUMBER, 34, 2),
    explication: "La France métropolitaine partage ses frontières avec 8 pays : Belgique, Luxembourg, Allemagne, Suisse, Italie, Monaco, Espagne et Andorre."
  },
  {
    id: 35,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Géographie",
    question: "Quelle mer borde la France au sud ?",
    options: ["La mer Baltique", "La mer du Nord", "La mer Méditerranée", "La mer Adriatique"],
    correctHash: hashAnswer(EXAM_NUMBER, 35, 2),
    explication: "La mer Méditerranée borde le sud de la France. La France possède également des façades maritimes sur l'océan Atlantique, la Manche et la mer du Nord."
  },
  {
    id: 36,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Culture",
    question: "Quel musée parisien abrite la Joconde ?",
    options: ["Le musée d'Orsay", "Le Louvre", "Le Centre Pompidou", "Le musée Rodin"],
    correctHash: hashAnswer(EXAM_NUMBER, 36, 1),
    explication: "La Joconde (Mona Lisa) de Léonard de Vinci est exposée au musée du Louvre à Paris. C'est le tableau le plus célèbre au monde."
  },

  // ==================== 5. VIVRE EN FRANCE (4 questions) ====================
  
  {
    id: 37,
    categorie: "Vivre en France",
    sousCategorie: "Vie quotidienne",
    question: "Quel numéro appeler en cas d'urgence police/gendarmerie ?",
    options: ["15", "17", "18", "112"],
    correctHash: hashAnswer(EXAM_NUMBER, 37, 1),
    explication: "Le 17 est le numéro de la police et de la gendarmerie. Le 112 est le numéro d'urgence européen qui redirige vers le service approprié."
  },
  {
    id: 38,
    categorie: "Vivre en France",
    sousCategorie: "Vie quotidienne",
    question: "Le 114 est le numéro d'urgence pour :",
    options: [
      "Les personnes sourdes et malentendantes",
      "Les animaux en détresse",
      "Les problèmes électriques",
      "Les fuites d'eau"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 38, 0),
    explication: "Le 114 est le numéro d'urgence par SMS ou fax pour les personnes sourdes, malentendantes ou ayant des difficultés à parler. Il est accessible 24h/24, 7j/7."
  },
  {
    id: 39,
    categorie: "Vivre en France",
    sousCategorie: "Services publics",
    question: "Pour s'inscrire sur les listes électorales, où doit-on se rendre ?",
    options: [
      "À la préfecture uniquement",
      "À la mairie de sa commune ou en ligne sur service-public.fr",
      "Au bureau de poste",
      "À la police"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 39, 1),
    explication: "Pour s'inscrire sur les listes électorales, on peut se rendre à la mairie de sa commune ou s'inscrire en ligne sur service-public.fr."
  },
  {
    id: 40,
    categorie: "Vivre en France",
    sousCategorie: "Logement",
    question: "Un propriétaire peut-il augmenter le loyer comme il veut ?",
    options: [
      "Oui, sans limite",
      "Non, l'augmentation est encadrée par la loi",
      "Oui, sauf pour les étudiants",
      "Non, c'est totalement interdit"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 40, 1),
    explication: "L'augmentation des loyers est encadrée par la loi. Le propriétaire doit respecter l'indice de référence des loyers (IRL) et ne peut pas augmenter le loyer librement."
  },
];

export const EXAMEN_3: ExamenBlanc = {
  numero: 3,
  titre: "Examen blanc #3",
  description: "40 questions en conditions réelles d'examen",
  questions,
  dureeMinutes: 45,
  totalQuestions: 40
};
