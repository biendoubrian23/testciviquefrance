import { ExamenBlanc, Question, hashAnswer } from './types';

// =====================================================
// EXAMEN BLANC #4 - 40 QUESTIONS
// Répartition officielle :
// 1. Principes et valeurs (11 questions)
// 2. Système institutionnel (6 questions)
// 3. Droits et devoirs (11 questions)
// 4. Histoire/géographie/culture (8 questions)
// 5. Vivre en France (4 questions)
// =====================================================

const EXAM_NUMBER = 4;

const questions: Question[] = [
  // ==================== 1. PRINCIPES ET VALEURS (11 questions) ====================
  
  {
    id: 1,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "Quand le drapeau français a-t-il été adopté officiellement ?",
    options: ["1789", "1794", "1848", "1958"],
    correctHash: hashAnswer(EXAM_NUMBER, 1, 1),
    explication: "Le drapeau tricolore bleu-blanc-rouge a été adopté officiellement en 1794 pendant la Révolution française. Il est devenu l'emblème national de la République."
  },
  {
    id: 2,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "Qui a composé La Marseillaise ?",
    options: ["Victor Hugo", "Rouget de Lisle", "Napoléon Bonaparte", "Jean-Jacques Rousseau"],
    correctHash: hashAnswer(EXAM_NUMBER, 2, 1),
    explication: "La Marseillaise a été composée par Rouget de Lisle en 1792 à Strasbourg. Elle est devenue l'hymne national français en 1795."
  },
  {
    id: 3,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise et symboles",
    question: "Le bonnet phrygien porté par Marianne symbolise :",
    options: ["La royauté", "La liberté", "La guerre", "La religion"],
    correctHash: hashAnswer(EXAM_NUMBER, 3, 1),
    explication: "Le bonnet phrygien, souvent porté par Marianne, est un ancien symbole de liberté hérité de l'Antiquité romaine, porté par les esclaves affranchis."
  },
  {
    id: 4,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "Dans une école publique, peut-on organiser une cérémonie religieuse pendant les heures de classe ?",
    options: [
      "Oui, si tous les élèves sont d'accord",
      "Non, l'école publique est laïque",
      "Oui, une fois par an",
      "Cela dépend de la région"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 4, 1),
    explication: "L'école publique est un espace laïque. Aucune cérémonie religieuse ne peut y être organisée. L'enseignement doit être neutre sur le plan religieux."
  },
  {
    id: 5,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "Un élu local peut-il participer à une cérémonie religieuse en tant que représentant de la République ?",
    options: [
      "Non, jamais",
      "Oui, à titre personnel mais pas en tant que représentant officiel",
      "Oui, toujours",
      "Uniquement à Noël"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 5, 1),
    explication: "Un élu peut assister à des cérémonies religieuses à titre personnel, mais en tant que représentant de l'État laïque, il ne peut pas y participer officiellement."
  },
  {
    id: 6,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité",
    question: "En France, un homme et une femme qui font le même travail doivent-ils avoir le même salaire ?",
    options: [
      "Non, l'employeur décide librement",
      "Oui, c'est un principe d'égalité inscrit dans la loi",
      "Seulement dans la fonction publique",
      "Seulement pour les cadres"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 6, 1),
    explication: "L'égalité salariale entre les femmes et les hommes est un principe légal. À travail égal, salaire égal. Les discriminations salariales sont punies par la loi."
  },
  {
    id: 7,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "Dans les transports en commun, vous voyez une personne âgée debout. Que faire ?",
    options: [
      "Rien, ce n'est pas votre problème",
      "Lui proposer votre place (civisme)",
      "Changer de wagon",
      "Prévenir le contrôleur"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 7, 1),
    explication: "Proposer sa place à une personne âgée, une femme enceinte ou une personne handicapée est un acte de civisme et de solidarité, valeurs de la fraternité républicaine."
  },
  {
    id: 8,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "Votre voisin écoute de la musique très forte à 3h du matin. Que faire en premier ?",
    options: [
      "Casser sa porte",
      "Lui parler calmement pour trouver une solution",
      "Appeler immédiatement la police",
      "Mettre aussi de la musique forte"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 8, 1),
    explication: "En cas de nuisance sonore, le dialogue est toujours préférable en premier lieu. Si cela ne fonctionne pas, on peut contacter la police pour tapage nocturne."
  },
  {
    id: 9,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "Vous trouvez un portefeuille avec de l'argent dans la rue. Que devez-vous faire ?",
    options: [
      "Le garder",
      "Le remettre au commissariat ou à la mairie",
      "Prendre l'argent et jeter le portefeuille",
      "Le donner à un ami"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 9, 1),
    explication: "Trouver et garder un objet perdu appartenant à autrui est un délit. Il faut le remettre à la police, la gendarmerie ou la mairie pour restitution au propriétaire."
  },
  {
    id: 10,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation",
    question: "Un ami vous demande de mentir à la police pour lui servir d'alibi. Que faire ?",
    options: [
      "Accepter, c'est un ami",
      "Refuser, c'est un faux témoignage puni par la loi",
      "Demander de l'argent en échange",
      "Accepter si c'est un petit mensonge"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 10, 1),
    explication: "Le faux témoignage et la complicité de délit sont des infractions pénales punies par la loi. Il ne faut jamais mentir à la justice, même pour protéger un proche."
  },
  {
    id: 11,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Liberté",
    question: "La liberté d'opinion en France signifie :",
    options: [
      "On peut penser et dire tout ce qu'on veut sans limites",
      "On peut avoir ses propres opinions dans le respect de la loi",
      "Seuls les Français peuvent avoir des opinions",
      "On ne peut pas critiquer le gouvernement"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 11, 1),
    explication: "La liberté d'opinion est garantie par la Constitution. Chacun peut penser librement et exprimer ses opinions dans le respect de la loi et d'autrui."
  },

  // ==================== 2. SYSTÈME INSTITUTIONNEL (6 questions) ====================
  
  {
    id: 12,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Démocratie et droit de vote",
    question: "Lors d'une élection en France, le vote doit être :",
    options: [
      "Public et oral",
      "Secret et personnel",
      "Collectif et public",
      "Obligatoire et public"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 12, 1),
    explication: "Le vote en France doit être secret (pour garantir la liberté) et personnel (chacun vote pour soi). C'est un principe fondamental de la démocratie."
  },
  {
    id: 13,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Démocratie et droit de vote",
    question: "Combien dure le mandat du Président de la République ?",
    options: ["4 ans", "5 ans", "7 ans", "10 ans"],
    correctHash: hashAnswer(EXAM_NUMBER, 13, 1),
    explication: "Depuis 2000, le mandat présidentiel dure 5 ans (quinquennat). Il était de 7 ans (septennat) auparavant. Le Président peut être réélu une fois consécutivement."
  },
  {
    id: 14,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Organisation de la République",
    question: "Qui préside le Conseil des ministres ?",
    options: ["Le Premier ministre", "Le Président de la République", "Le ministre de l'Intérieur", "Le Président de l'Assemblée"],
    correctHash: hashAnswer(EXAM_NUMBER, 14, 1),
    explication: "Le Président de la République préside le Conseil des ministres qui réunit tous les ministres du gouvernement, généralement chaque mercredi au Palais de l'Élysée."
  },
  {
    id: 15,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Organisation de la République",
    question: "Le préfet est :",
    options: [
      "Un élu local",
      "Le représentant de l'État dans le département",
      "Le maire de la préfecture",
      "Un député"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 15, 1),
    explication: "Le préfet est le représentant de l'État dans le département. Il est nommé par le Président de la République et veille à l'application des lois."
  },
  {
    id: 16,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Collectivités territoriales",
    question: "Qui élit le maire d'une commune ?",
    options: [
      "Les citoyens directement",
      "Le conseil municipal",
      "Le préfet",
      "Le Président de la République"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 16, 1),
    explication: "Le maire est élu par les conseillers municipaux lors de la première réunion du conseil municipal après les élections municipales."
  },
  {
    id: 17,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Institutions européennes",
    question: "Où se trouve le Parlement européen ?",
    options: [
      "Bruxelles uniquement",
      "Strasbourg et Bruxelles",
      "Paris",
      "Luxembourg uniquement"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 17, 1),
    explication: "Le Parlement européen siège à Strasbourg (séances plénières) et à Bruxelles (commissions). Strasbourg est le siège officiel depuis 1992."
  },

  // ==================== 3. DROITS ET DEVOIRS (11 questions) ====================
  
  {
    id: 18,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "Le droit de propriété est-il protégé en France ?",
    options: [
      "Non, l'État peut tout prendre",
      "Oui, c'est un droit constitutionnel",
      "Seulement pour les riches",
      "Uniquement pour les terrains"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 18, 1),
    explication: "Le droit de propriété est un droit fondamental protégé par la Constitution. L'État ne peut exproprier qu'en cas d'utilité publique et avec une juste indemnisation."
  },
  {
    id: 19,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits fondamentaux",
    question: "La liberté de réunion en France permet de :",
    options: [
      "Se réunir librement mais en respectant l'ordre public",
      "Organiser des manifestations sans aucune règle",
      "Bloquer des routes sans autorisation",
      "Se réunir uniquement chez soi"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 19, 0),
    explication: "La liberté de réunion est garantie mais doit respecter l'ordre public. Les rassemblements sur la voie publique doivent être déclarés à la préfecture."
  },
  {
    id: 20,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoirs du citoyen",
    question: "L'impôt sur le revenu sert à financer :",
    options: [
      "Uniquement l'armée",
      "Les services publics (écoles, hôpitaux, routes, etc.)",
      "Les salaires des députés uniquement",
      "Rien d'utile"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 20, 1),
    explication: "Les impôts financent tous les services publics : éducation nationale, santé, police, justice, infrastructures, aides sociales, etc."
  },
  {
    id: 21,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoirs du citoyen",
    question: "À partir de quel âge est-on majeur en France ?",
    options: ["16 ans", "17 ans", "18 ans", "21 ans"],
    correctHash: hashAnswer(EXAM_NUMBER, 21, 2),
    explication: "La majorité civile est fixée à 18 ans en France depuis 1974. À partir de cet âge, on acquiert la pleine capacité juridique et le droit de vote."
  },
  {
    id: 22,
    categorie: "Droits et devoirs",
    sousCategorie: "Justice",
    question: "Un accusé a-t-il le droit d'avoir un avocat en France ?",
    options: [
      "Non, c'est interdit",
      "Oui, c'est un droit fondamental",
      "Seulement s'il est riche",
      "Seulement pour les crimes graves"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 22, 1),
    explication: "Le droit à un avocat est garanti par la Constitution. Si l'accusé n'a pas les moyens, un avocat commis d'office lui est désigné gratuitement (aide juridictionnelle)."
  },
  {
    id: 23,
    categorie: "Droits et devoirs",
    sousCategorie: "Justice",
    question: "Qui juge les affaires criminelles les plus graves en France ?",
    options: [
      "Le tribunal de police",
      "La cour d'assises avec un jury populaire",
      "Le maire",
      "Le Président de la République"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 23, 1),
    explication: "Les crimes les plus graves sont jugés par la cour d'assises, composée de juges professionnels et d'un jury de citoyens tirés au sort."
  },
  {
    id: 24,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits sociaux",
    question: "Le RSA (Revenu de Solidarité Active) est :",
    options: [
      "Un impôt",
      "Une aide sociale pour les personnes sans ressources",
      "Un salaire minimum",
      "Une assurance voiture"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 24, 1),
    explication: "Le RSA est une aide sociale versée aux personnes sans ressources ou avec de faibles revenus pour leur assurer un minimum vital."
  },
  {
    id: 25,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits sociaux",
    question: "En France, l'accès aux soins d'urgence est-il gratuit pour tous ?",
    options: [
      "Non, il faut payer cash",
      "Oui, grâce à la Sécurité sociale et l'aide médicale d'État",
      "Seulement pour les Français",
      "Seulement pour les riches"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 25, 1),
    explication: "En France, toute personne a droit aux soins d'urgence, quelle que soit sa situation. La Sécurité sociale et l'Aide Médicale d'État garantissent cet accès."
  },
  {
    id: 26,
    categorie: "Droits et devoirs",
    sousCategorie: "Défense nationale",
    question: "Le service militaire obligatoire existe-t-il encore en France ?",
    options: [
      "Oui, pour tous",
      "Non, il a été supprimé en 1997",
      "Oui, uniquement pour les hommes",
      "Oui, uniquement en temps de guerre"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 26, 1),
    explication: "Le service militaire obligatoire (conscription) a été supprimé en 1997. L'armée française est professionnelle. Seule la JDC (1 journée) reste obligatoire."
  },
  {
    id: 27,
    categorie: "Droits et devoirs",
    sousCategorie: "Vie démocratique",
    question: "En France, peut-on créer un parti politique librement ?",
    options: [
      "Non, c'est interdit",
      "Oui, c'est une liberté garantie",
      "Seulement avec l'autorisation du Président",
      "Seulement si on a beaucoup d'argent"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 27, 1),
    explication: "La liberté d'association, y compris pour créer un parti politique, est garantie en France. Il suffit de déclarer l'association à la préfecture."
  },
  {
    id: 28,
    categorie: "Droits et devoirs",
    sousCategorie: "Vie démocratique",
    question: "Les élections municipales servent à élire :",
    options: [
      "Le maire directement",
      "Les conseillers municipaux qui éliront ensuite le maire",
      "Le Président",
      "Les députés"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 28, 1),
    explication: "Les élections municipales permettent d'élire les conseillers municipaux. Ces conseillers élisent ensuite le maire parmi eux lors de la première séance du conseil."
  },

  // ==================== 4. HISTOIRE/GÉOGRAPHIE/CULTURE (8 questions) ====================
  
  {
    id: 29,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire de France",
    question: "La Déclaration des droits de l'homme et du citoyen proclame que les hommes naissent :",
    options: [
      "Différents",
      "Libres et égaux en droits",
      "Soumis au roi",
      "Sans droits"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 29, 1),
    explication: "L'article 1 de la Déclaration de 1789 proclame : « Les hommes naissent et demeurent libres et égaux en droits ». C'est un texte fondateur des droits humains."
  },
  {
    id: 30,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire de France",
    question: "Pendant la Seconde Guerre mondiale, le régime de Vichy a :",
    options: [
      "Résisté aux nazis",
      "Collaboré avec l'Allemagne nazie",
      "Été neutre",
      "Libéré la France"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 30, 1),
    explication: "Le régime de Vichy (1940-1944), dirigé par le maréchal Pétain, a collaboré avec l'Allemagne nazie. Il a notamment participé à la déportation des Juifs."
  },
  {
    id: 31,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire de France",
    question: "Le droit de vote des femmes en France date de :",
    options: ["1789", "1848", "1944", "1968"],
    correctHash: hashAnswer(EXAM_NUMBER, 31, 2),
    explication: "Les femmes françaises ont obtenu le droit de vote le 21 avril 1944 par ordonnance du général de Gaulle. Elles ont voté pour la première fois en 1945."
  },
  {
    id: 32,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Histoire de France",
    question: "Mai 1968 en France était :",
    options: [
      "Une guerre",
      "Un mouvement social et étudiant important",
      "Une élection présidentielle",
      "Une catastrophe naturelle"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 32, 1),
    explication: "Mai 1968 fut un mouvement social et étudiant majeur qui a contesté l'ordre établi et entraîné d'importantes réformes sociales et culturelles en France."
  },
  {
    id: 33,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Géographie",
    question: "Quelle montagne sépare la France de l'Espagne ?",
    options: ["Les Alpes", "Les Pyrénées", "Le Jura", "Les Vosges"],
    correctHash: hashAnswer(EXAM_NUMBER, 33, 1),
    explication: "Les Pyrénées forment une frontière naturelle entre la France et l'Espagne. Elles s'étendent sur environ 430 km de l'Atlantique à la Méditerranée."
  },
  {
    id: 34,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Géographie",
    question: "La Corse est :",
    options: [
      "Un pays indépendant",
      "Une région française insulaire en Méditerranée",
      "Une ville française",
      "Un département d'outre-mer"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 34, 1),
    explication: "La Corse est une région française située en mer Méditerranée. Elle comprend deux départements : la Corse-du-Sud et la Haute-Corse."
  },
  {
    id: 35,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Géographie",
    question: "Combien de départements d'outre-mer compte la France ?",
    options: ["3", "5", "7", "10"],
    correctHash: hashAnswer(EXAM_NUMBER, 35, 1),
    explication: "La France compte 5 départements d'outre-mer (DOM) : Guadeloupe, Martinique, Guyane, La Réunion et Mayotte. Ce sont aussi des régions."
  },
  {
    id: 36,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Culture",
    question: "Le français est la langue officielle de la République française depuis :",
    options: ["Toujours", "1539 (ordonnance de Villers-Cotterêts)", "1789", "1958"],
    correctHash: hashAnswer(EXAM_NUMBER, 36, 1),
    explication: "L'ordonnance de Villers-Cotterêts de 1539 a imposé l'usage du français dans les actes officiels. La Constitution de 1992 fait du français la langue officielle de la République."
  },

  // ==================== 5. VIVRE EN FRANCE (4 questions) ====================
  
  {
    id: 37,
    categorie: "Vivre en France",
    sousCategorie: "Vie quotidienne",
    question: "Le 112 est le numéro d'urgence :",
    options: [
      "Uniquement français",
      "Européen valable dans toute l'Union européenne",
      "Uniquement pour les touristes",
      "Uniquement pour les accidents de voiture"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 37, 1),
    explication: "Le 112 est le numéro d'urgence européen gratuit, accessible 24h/24 dans tous les pays de l'UE. Il redirige vers les services d'urgence appropriés."
  },
  {
    id: 38,
    categorie: "Vivre en France",
    sousCategorie: "Vie quotidienne",
    question: "Le 119 est le numéro pour :",
    options: [
      "Les urgences médicales",
      "Signaler une situation d'enfance en danger",
      "Les pompiers",
      "Les problèmes de voisinage"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 38, 1),
    explication: "Le 119 est le numéro d'appel gratuit pour l'enfance en danger, accessible 24h/24, 7j/7. Il permet de signaler une situation de maltraitance ou de mise en danger d'un enfant."
  },
  {
    id: 39,
    categorie: "Vivre en France",
    sousCategorie: "Services publics",
    question: "Pour obtenir une carte d'identité, où doit-on se rendre ?",
    options: [
      "À la préfecture ou à la mairie équipée",
      "Au commissariat uniquement",
      "À la poste",
      "À l'ambassade"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 39, 0),
    explication: "Pour obtenir une carte d'identité, il faut se rendre dans une mairie équipée d'un dispositif de recueil ou à la préfecture avec les documents requis."
  },
  {
    id: 40,
    categorie: "Vivre en France",
    sousCategorie: "Logement",
    question: "Le dépôt de garantie (caution) pour un logement vide ne peut pas dépasser :",
    options: [
      "1 mois de loyer",
      "2 mois de loyer",
      "3 mois de loyer",
      "6 mois de loyer"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 40, 0),
    explication: "Pour un logement vide, le dépôt de garantie est limité à 1 mois de loyer hors charges. Pour un meublé, il est limité à 2 mois de loyer."
  },
];

export const EXAMEN_4: ExamenBlanc = {
  numero: 4,
  titre: "Examen blanc #4",
  description: "40 questions en conditions réelles d'examen",
  questions,
  dureeMinutes: 45,
  totalQuestions: 40
};
