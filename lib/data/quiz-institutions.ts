// =====================================================
// QUESTIONS - SYSTÈME INSTITUTIONNEL ET POLITIQUE
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

// ==================== NIVEAU 1 : LE PRÉSIDENT DE LA RÉPUBLIQUE ====================
const NIVEAU_1: QuizQuestion[] = [
  {
    id: 1001,
    niveau: 1,
    question: "Qui est le chef de l'État en France ?",
    options: [
      "Le Président de la République",
      "Le Premier ministre",
      "Le Président de l'Assemblée nationale",
      "Le Roi"
    ],
    correctHash: hashAnswer(1001, 0),
    explication: "Le Président de la République est le chef de l'État français. Il est élu au suffrage universel direct pour un mandat de 5 ans (quinquennat) depuis la réforme de 2000."
  },
  {
    id: 1002,
    niveau: 1,
    question: "Pour combien d'années le Président de la République est-il élu ?",
    options: [
      "5 ans",
      "4 ans",
      "6 ans",
      "7 ans"
    ],
    correctHash: hashAnswer(1002, 0),
    explication: "Depuis le référendum de 2000, le Président de la République est élu pour un mandat de 5 ans appelé quinquennat. Avant, le mandat était de 7 ans (septennat)."
  },
  {
    id: 1003,
    niveau: 1,
    question: "Comment le Président de la République est-il élu ?",
    options: [
      "Au suffrage universel direct par les citoyens",
      "Par le Parlement",
      "Par les maires",
      "Par le Conseil constitutionnel"
    ],
    correctHash: hashAnswer(1003, 0),
    explication: "Depuis 1962, le Président de la République est élu au suffrage universel direct. Tous les citoyens français de 18 ans et plus peuvent voter pour élire le Président."
  },
  {
    id: 1004,
    niveau: 1,
    question: "Qui nomme le Premier ministre en France ?",
    options: [
      "Le Président de la République",
      "L'Assemblée nationale",
      "Le Sénat",
      "Le peuple par référendum"
    ],
    correctHash: hashAnswer(1004, 0),
    explication: "Le Président de la République nomme le Premier ministre. C'est l'une de ses attributions principales selon l'article 8 de la Constitution."
  },
  {
    id: 1005,
    niveau: 1,
    question: "Où réside officiellement le Président de la République ?",
    options: [
      "Au Palais de l'Élysée",
      "À Matignon",
      "À l'Assemblée nationale",
      "Au Château de Versailles"
    ],
    correctHash: hashAnswer(1005, 0),
    explication: "Le Palais de l'Élysée, situé à Paris, est la résidence officielle du Président de la République française depuis 1848."
  },
  {
    id: 1006,
    niveau: 1,
    question: "Quel est le rôle principal du Président de la République ?",
    options: [
      "Garantir le respect de la Constitution",
      "Voter les lois",
      "Rendre la justice",
      "Percevoir les impôts"
    ],
    correctHash: hashAnswer(1006, 0),
    explication: "Le Président de la République veille au respect de la Constitution. Il est le garant de l'indépendance nationale et de l'intégrité du territoire."
  },
  {
    id: 1007,
    niveau: 1,
    question: "Combien de fois maximum une personne peut-elle être élue Président de la République ?",
    options: [
      "2 mandats consécutifs maximum",
      "1 seul mandat",
      "3 mandats consécutifs maximum",
      "Aucune limite"
    ],
    correctHash: hashAnswer(1007, 0),
    explication: "Depuis la révision constitutionnelle de 2008, nul ne peut exercer plus de deux mandats consécutifs de Président de la République."
  },
  {
    id: 1008,
    niveau: 1,
    question: "Quel âge minimum faut-il avoir pour être élu Président de la République ?",
    options: [
      "18 ans",
      "21 ans",
      "25 ans",
      "35 ans"
    ],
    correctHash: hashAnswer(1008, 0),
    explication: "Depuis 2011, il faut avoir au moins 18 ans pour se présenter à l'élection présidentielle (contre 23 ans auparavant)."
  },
  {
    id: 1009,
    niveau: 1,
    question: "Le Président de la République est-il le chef des armées ?",
    options: [
      "Oui",
      "Non, c'est le Premier ministre",
      "Non, c'est le ministre de la Défense",
      "Non, c'est le Parlement"
    ],
    correctHash: hashAnswer(1009, 0),
    explication: "Oui, selon l'article 15 de la Constitution, le Président de la République est le chef des armées. Il préside les conseils de défense."
  },
  {
    id: 1010,
    niveau: 1,
    question: "Qui peut dissoudre l'Assemblée nationale ?",
    options: [
      "Le Président de la République",
      "Le Premier ministre",
      "Le Sénat",
      "Le Conseil constitutionnel"
    ],
    correctHash: hashAnswer(1010, 0),
    explication: "Le Président de la République peut dissoudre l'Assemblée nationale (article 12 de la Constitution). Cela entraîne de nouvelles élections législatives."
  },
];

// ==================== NIVEAU 2 : LE GOUVERNEMENT ====================
const NIVEAU_2: QuizQuestion[] = [
  {
    id: 1011,
    niveau: 2,
    question: "Qui dirige le Gouvernement en France ?",
    options: [
      "Le Premier ministre",
      "Le Président de la République",
      "Le Président de l'Assemblée nationale",
      "Le ministre de l'Intérieur"
    ],
    correctHash: hashAnswer(1011, 0),
    explication: "Le Premier ministre dirige l'action du Gouvernement. Il est responsable devant l'Assemblée nationale et réside à l'Hôtel de Matignon."
  },
  {
    id: 1012,
    niveau: 2,
    question: "Où se situe le siège du Premier ministre ?",
    options: [
      "À l'Hôtel de Matignon",
      "Au Palais de l'Élysée",
      "À l'Assemblée nationale",
      "Au Palais du Luxembourg"
    ],
    correctHash: hashAnswer(1012, 0),
    explication: "L'Hôtel de Matignon, situé dans le 7e arrondissement de Paris, est la résidence officielle et le lieu de travail du Premier ministre depuis 1935."
  },
  {
    id: 1013,
    niveau: 2,
    question: "Qui nomme les ministres du Gouvernement ?",
    options: [
      "Le Président de la République sur proposition du Premier ministre",
      "Le Premier ministre seul",
      "L'Assemblée nationale",
      "Le Sénat"
    ],
    correctHash: hashAnswer(1013, 0),
    explication: "Les ministres sont nommés par le Président de la République sur proposition du Premier ministre (article 8 de la Constitution)."
  },
  {
    id: 1014,
    niveau: 2,
    question: "Le Gouvernement est responsable devant :",
    options: [
      "L'Assemblée nationale",
      "Le Sénat",
      "Le Président de la République",
      "Le Conseil constitutionnel"
    ],
    correctHash: hashAnswer(1014, 0),
    explication: "Le Gouvernement est responsable devant l'Assemblée nationale qui peut voter une motion de censure pour le renverser."
  },
  {
    id: 1015,
    niveau: 2,
    question: "Quel est le rôle principal du Gouvernement ?",
    options: [
      "Déterminer et conduire la politique de la Nation",
      "Voter les lois",
      "Rendre la justice",
      "Élire le Président"
    ],
    correctHash: hashAnswer(1015, 0),
    explication: "Selon l'article 20 de la Constitution, le Gouvernement détermine et conduit la politique de la Nation. Il dispose de l'administration et de la force armée."
  },
  {
    id: 1016,
    niveau: 2,
    question: "Comment s'appelle la réunion hebdomadaire du Gouvernement présidée par le Président ?",
    options: [
      "Le Conseil des ministres",
      "L'Assemblée générale",
      "Le Conseil d'État",
      "Le Parlement"
    ],
    correctHash: hashAnswer(1016, 0),
    explication: "Le Conseil des ministres se réunit chaque mercredi à l'Élysée sous la présidence du Président de la République. C'est l'instance suprême du Gouvernement."
  },
  {
    id: 1017,
    niveau: 2,
    question: "Qu'est-ce qu'une motion de censure ?",
    options: [
      "Un vote de l'Assemblée pour renverser le Gouvernement",
      "Une loi votée par le Sénat",
      "Une décision du Président",
      "Un discours du Premier ministre"
    ],
    correctHash: hashAnswer(1017, 0),
    explication: "La motion de censure permet à l'Assemblée nationale de mettre en cause la responsabilité du Gouvernement. Si elle est adoptée, le Premier ministre doit démissionner."
  },
  {
    id: 1018,
    niveau: 2,
    question: "Quel ministre est chargé de la sécurité intérieure et de la police ?",
    options: [
      "Le ministre de l'Intérieur",
      "Le ministre de la Justice",
      "Le ministre de la Défense",
      "Le Premier ministre"
    ],
    correctHash: hashAnswer(1018, 0),
    explication: "Le ministre de l'Intérieur est responsable de la sécurité intérieure, de la police nationale, de la gendarmerie (en temps de paix) et des préfets."
  },
  {
    id: 1019,
    niveau: 2,
    question: "Le Premier ministre peut-il proposer des lois ?",
    options: [
      "Oui, ce sont des projets de loi",
      "Non, seuls les députés le peuvent",
      "Non, seul le Président le peut",
      "Non, c'est interdit"
    ],
    correctHash: hashAnswer(1019, 0),
    explication: "Oui, le Premier ministre peut proposer des lois appelées « projets de loi ». Les propositions de loi viennent des parlementaires."
  },
  {
    id: 1020,
    niveau: 2,
    question: "En cas de désaccord grave avec le Président, le Premier ministre peut-il démissionner ?",
    options: [
      "Oui, il peut présenter sa démission au Président",
      "Non, il est élu et ne peut pas démissionner",
      "Non, seul l'Assemblée peut le démettre",
      "Non, son mandat est fixe"
    ],
    correctHash: hashAnswer(1020, 0),
    explication: "Oui, le Premier ministre peut présenter sa démission au Président de la République à tout moment. C'est une pratique courante dans la Ve République."
  },
];

// ==================== NIVEAU 3 : LE PARLEMENT ====================
const NIVEAU_3: QuizQuestion[] = [
  {
    id: 1021,
    niveau: 3,
    question: "De combien de chambres est composé le Parlement français ?",
    options: [
      "2 chambres",
      "1 chambre",
      "3 chambres",
      "4 chambres"
    ],
    correctHash: hashAnswer(1021, 0),
    explication: "Le Parlement français est bicaméral : il est composé de l'Assemblée nationale et du Sénat. C'est ce qu'on appelle le bicamérisme."
  },
  {
    id: 1022,
    niveau: 3,
    question: "Comment s'appellent les membres de l'Assemblée nationale ?",
    options: [
      "Les députés",
      "Les sénateurs",
      "Les conseillers",
      "Les ministres"
    ],
    correctHash: hashAnswer(1022, 0),
    explication: "Les membres de l'Assemblée nationale sont appelés députés. Ils sont élus au suffrage universel direct pour 5 ans."
  },
  {
    id: 1023,
    niveau: 3,
    question: "Où siège l'Assemblée nationale ?",
    options: [
      "Au Palais Bourbon",
      "Au Palais du Luxembourg",
      "À l'Élysée",
      "À Matignon"
    ],
    correctHash: hashAnswer(1023, 0),
    explication: "L'Assemblée nationale siège au Palais Bourbon, sur la rive gauche de la Seine à Paris, face à la place de la Concorde."
  },
  {
    id: 1024,
    niveau: 3,
    question: "Où siège le Sénat ?",
    options: [
      "Au Palais du Luxembourg",
      "Au Palais Bourbon",
      "À l'Élysée",
      "À Versailles"
    ],
    correctHash: hashAnswer(1024, 0),
    explication: "Le Sénat siège au Palais du Luxembourg, dans le 6e arrondissement de Paris. Le jardin du Luxembourg est ouvert au public."
  },
  {
    id: 1025,
    niveau: 3,
    question: "Quel est le rôle principal du Parlement ?",
    options: [
      "Voter les lois",
      "Exécuter les lois",
      "Juger les citoyens",
      "Nommer le Président"
    ],
    correctHash: hashAnswer(1025, 0),
    explication: "Le Parlement vote les lois et contrôle l'action du Gouvernement. C'est le pouvoir législatif dans la séparation des pouvoirs."
  },
  {
    id: 1026,
    niveau: 3,
    question: "Comment sont élus les sénateurs ?",
    options: [
      "Au suffrage universel indirect par les grands électeurs",
      "Au suffrage universel direct par les citoyens",
      "Par le Président de la République",
      "Par les députés"
    ],
    correctHash: hashAnswer(1026, 0),
    explication: "Les sénateurs sont élus au suffrage universel indirect par un collège de grands électeurs composé principalement d'élus locaux (maires, conseillers...)."
  },
  {
    id: 1027,
    niveau: 3,
    question: "Combien y a-t-il de députés à l'Assemblée nationale ?",
    options: [
      "577 députés",
      "348 députés",
      "500 députés",
      "450 députés"
    ],
    correctHash: hashAnswer(1027, 0),
    explication: "L'Assemblée nationale compte 577 députés, chacun représentant une circonscription. Ce nombre est fixé par la loi."
  },
  {
    id: 1028,
    niveau: 3,
    question: "Quelle chambre a le dernier mot en cas de désaccord entre l'Assemblée et le Sénat ?",
    options: [
      "L'Assemblée nationale",
      "Le Sénat",
      "Le Président de la République",
      "Le Conseil constitutionnel"
    ],
    correctHash: hashAnswer(1028, 0),
    explication: "En cas de désaccord persistant, le Gouvernement peut demander à l'Assemblée nationale de statuer définitivement. L'Assemblée a le dernier mot."
  },
  {
    id: 1029,
    niveau: 3,
    question: "Pour combien d'années les députés sont-ils élus ?",
    options: [
      "5 ans",
      "6 ans",
      "4 ans",
      "7 ans"
    ],
    correctHash: hashAnswer(1029, 0),
    explication: "Les députés sont élus pour un mandat de 5 ans (une législature), sauf en cas de dissolution de l'Assemblée nationale."
  },
  {
    id: 1030,
    niveau: 3,
    question: "Pour combien d'années les sénateurs sont-ils élus ?",
    options: [
      "6 ans",
      "5 ans",
      "4 ans",
      "9 ans"
    ],
    correctHash: hashAnswer(1030, 0),
    explication: "Les sénateurs sont élus pour 6 ans. Le Sénat est renouvelé par moitié tous les 3 ans."
  },
];

// ==================== NIVEAU 4 : LE DROIT DE VOTE ====================
const NIVEAU_4: QuizQuestion[] = [
  {
    id: 1031,
    niveau: 4,
    question: "À partir de quel âge peut-on voter en France ?",
    options: [
      "18 ans",
      "16 ans",
      "21 ans",
      "25 ans"
    ],
    correctHash: hashAnswer(1031, 0),
    explication: "Le droit de vote est accordé à tous les citoyens français âgés d'au moins 18 ans et jouissant de leurs droits civiques."
  },
  {
    id: 1032,
    niveau: 4,
    question: "Le vote est-il obligatoire en France ?",
    options: [
      "Non, le vote est un droit mais pas une obligation",
      "Oui, sous peine d'amende",
      "Oui, sous peine de prison",
      "Oui, pour les élections présidentielles uniquement"
    ],
    correctHash: hashAnswer(1032, 0),
    explication: "En France, le vote est un droit civique mais il n'est pas obligatoire, contrairement à certains pays comme la Belgique ou l'Australie."
  },
  {
    id: 1033,
    niveau: 4,
    question: "Depuis quand les femmes ont-elles le droit de vote en France ?",
    options: [
      "1944",
      "1789",
      "1848",
      "1958"
    ],
    correctHash: hashAnswer(1033, 0),
    explication: "Les femmes ont obtenu le droit de vote en France le 21 avril 1944 par ordonnance du Comité français de Libération nationale. Elles ont voté pour la première fois en 1945."
  },
  {
    id: 1034,
    niveau: 4,
    question: "Qu'est-ce que le suffrage universel direct ?",
    options: [
      "Tous les citoyens votent directement pour élire un représentant",
      "Seuls les riches peuvent voter",
      "Les élus votent pour choisir d'autres élus",
      "Le vote se fait par correspondance uniquement"
    ],
    correctHash: hashAnswer(1034, 0),
    explication: "Le suffrage universel direct signifie que tous les citoyens en âge de voter choisissent directement leurs représentants, sans intermédiaire."
  },
  {
    id: 1035,
    niveau: 4,
    question: "Pour voter, il faut être inscrit sur :",
    options: [
      "Les listes électorales",
      "Les listes de recensement",
      "Les listes fiscales",
      "Les listes scolaires"
    ],
    correctHash: hashAnswer(1035, 0),
    explication: "Pour pouvoir voter, il faut être inscrit sur les listes électorales de sa commune. L'inscription est automatique à 18 ans depuis 1997."
  },
  {
    id: 1036,
    niveau: 4,
    question: "Quel document faut-il présenter pour voter ?",
    options: [
      "Une pièce d'identité",
      "Un justificatif de domicile",
      "Un bulletin de salaire",
      "Un certificat de naissance"
    ],
    correctHash: hashAnswer(1036, 0),
    explication: "Pour voter, il faut présenter une pièce d'identité (carte d'identité, passeport, permis de conduire...). La carte électorale est recommandée mais pas obligatoire."
  },
  {
    id: 1037,
    niveau: 4,
    question: "Un citoyen empêché de se déplacer le jour du vote peut :",
    options: [
      "Donner procuration à un autre électeur",
      "Voter par téléphone",
      "Voter par internet",
      "Envoyer son bulletin par la poste"
    ],
    correctHash: hashAnswer(1037, 0),
    explication: "En cas d'impossibilité de se déplacer, on peut donner procuration à un autre électeur inscrit dans la même commune pour qu'il vote à notre place."
  },
  {
    id: 1038,
    niveau: 4,
    question: "Les étrangers non-européens peuvent-ils voter aux élections en France ?",
    options: [
      "Non, seuls les citoyens français peuvent voter",
      "Oui, à toutes les élections",
      "Oui, aux élections municipales uniquement",
      "Oui, aux élections européennes uniquement"
    ],
    correctHash: hashAnswer(1038, 0),
    explication: "Seuls les citoyens français peuvent voter aux élections nationales. Les citoyens européens résidant en France peuvent voter aux élections municipales et européennes."
  },
  {
    id: 1039,
    niveau: 4,
    question: "Les citoyens de l'Union européenne résidant en France peuvent voter :",
    options: [
      "Aux élections municipales et européennes",
      "À toutes les élections",
      "Uniquement aux élections européennes",
      "À aucune élection"
    ],
    correctHash: hashAnswer(1039, 0),
    explication: "Les citoyens européens résidant en France peuvent voter aux élections municipales et aux élections européennes, mais pas aux élections nationales (présidentielle, législatives)."
  },
  {
    id: 1040,
    niveau: 4,
    question: "Le secret du vote est garanti par :",
    options: [
      "L'isoloir et l'enveloppe",
      "Le vote à main levée",
      "Le vote électronique public",
      "La présence de témoins"
    ],
    correctHash: hashAnswer(1040, 0),
    explication: "Le secret du vote est garanti par le passage obligatoire dans l'isoloir et l'utilisation d'une enveloppe opaque pour glisser le bulletin dans l'urne."
  },
];

// ==================== NIVEAU 5 : LES COLLECTIVITÉS TERRITORIALES ====================
const NIVEAU_5: QuizQuestion[] = [
  {
    id: 1041,
    niveau: 5,
    question: "Quelles sont les trois principales collectivités territoriales en France ?",
    options: [
      "Communes, départements et régions",
      "Cantons, arrondissements et provinces",
      "Préfectures, sous-préfectures et mairies",
      "Villages, villes et métropoles"
    ],
    correctHash: hashAnswer(1041, 0),
    explication: "Les trois niveaux de collectivités territoriales sont les communes (36 000 environ), les départements (101) et les régions (18 dont 13 métropolitaines)."
  },
  {
    id: 1042,
    niveau: 5,
    question: "Qui est à la tête d'une commune ?",
    options: [
      "Le maire",
      "Le préfet",
      "Le conseiller régional",
      "Le député"
    ],
    correctHash: hashAnswer(1042, 0),
    explication: "Le maire est élu par le conseil municipal pour diriger la commune. Il est à la fois agent de l'État et chef de l'administration communale."
  },
  {
    id: 1043,
    niveau: 5,
    question: "Combien y a-t-il de régions en France métropolitaine ?",
    options: [
      "13 régions",
      "22 régions",
      "18 régions",
      "10 régions"
    ],
    correctHash: hashAnswer(1043, 0),
    explication: "Depuis la réforme de 2015, la France métropolitaine compte 13 régions (contre 22 auparavant). Avec les outre-mer, il y a 18 régions au total."
  },
  {
    id: 1044,
    niveau: 5,
    question: "Qui représente l'État dans le département ?",
    options: [
      "Le préfet",
      "Le maire",
      "Le président du conseil départemental",
      "Le député"
    ],
    correctHash: hashAnswer(1044, 0),
    explication: "Le préfet représente l'État dans le département. Il est nommé par le Président de la République en Conseil des ministres."
  },
  {
    id: 1045,
    niveau: 5,
    question: "Combien y a-t-il de départements en France (métropole + outre-mer) ?",
    options: [
      "101 départements",
      "96 départements",
      "95 départements",
      "110 départements"
    ],
    correctHash: hashAnswer(1045, 0),
    explication: "La France compte 101 départements : 96 en métropole et 5 départements d'outre-mer (Guadeloupe, Martinique, Guyane, Réunion, Mayotte)."
  },
];

// ==================== NIVEAU 6 : LA JUSTICE ====================
const NIVEAU_6: QuizQuestion[] = [
  {
    id: 1046,
    niveau: 6,
    question: "Quel principe garantit l'indépendance de la justice ?",
    options: [
      "La séparation des pouvoirs",
      "La fusion des pouvoirs",
      "La concentration des pouvoirs",
      "La délégation des pouvoirs"
    ],
    correctHash: hashAnswer(1046, 0),
    explication: "La séparation des pouvoirs (exécutif, législatif, judiciaire) garantit l'indépendance de la justice. Ce principe vient de Montesquieu."
  },
  {
    id: 1047,
    niveau: 6,
    question: "La justice est rendue au nom de qui en France ?",
    options: [
      "Au nom du peuple français",
      "Au nom du Président de la République",
      "Au nom du Premier ministre",
      "Au nom de l'Union européenne"
    ],
    correctHash: hashAnswer(1047, 0),
    explication: "En France, la justice est rendue au nom du peuple français. C'est inscrit sur les décisions de justice et c'est le fondement de la légitimité judiciaire."
  },
  {
    id: 1048,
    niveau: 6,
    question: "Qui garantit l'indépendance de l'autorité judiciaire ?",
    options: [
      "Le Président de la République",
      "Le Premier ministre",
      "Le Parlement",
      "Les avocats"
    ],
    correctHash: hashAnswer(1048, 0),
    explication: "Selon l'article 64 de la Constitution, le Président de la République est garant de l'indépendance de l'autorité judiciaire, assisté du Conseil supérieur de la magistrature."
  },
  {
    id: 1049,
    niveau: 6,
    question: "Quelle institution veille à la conformité des lois à la Constitution ?",
    options: [
      "Le Conseil constitutionnel",
      "Le Conseil d'État",
      "La Cour de cassation",
      "Le Parlement"
    ],
    correctHash: hashAnswer(1049, 0),
    explication: "Le Conseil constitutionnel vérifie que les lois sont conformes à la Constitution. Il peut censurer les dispositions inconstitutionnelles."
  },
  {
    id: 1050,
    niveau: 6,
    question: "La présomption d'innocence signifie que :",
    options: [
      "Toute personne est innocente jusqu'à preuve de sa culpabilité",
      "Toute personne est coupable jusqu'à preuve de son innocence",
      "La police décide de la culpabilité",
      "L'accusé doit prouver son innocence"
    ],
    correctHash: hashAnswer(1050, 0),
    explication: "La présomption d'innocence est un principe fondamental : toute personne accusée est considérée comme innocente jusqu'à ce que sa culpabilité soit établie par un tribunal."
  },
];

// ==================== NIVEAU 7 : L'UNION EUROPÉENNE ====================
const NIVEAU_7: QuizQuestion[] = [
  {
    id: 1051,
    niveau: 7,
    question: "La France est-elle membre de l'Union européenne ?",
    options: [
      "Oui, elle est membre fondateur",
      "Non, elle n'en fait pas partie",
      "Oui, depuis 2000",
      "Elle est en cours d'adhésion"
    ],
    correctHash: hashAnswer(1051, 0),
    explication: "La France est l'un des 6 pays fondateurs de la construction européenne (1957 avec le traité de Rome). L'UE compte aujourd'hui 27 États membres."
  },
  {
    id: 1052,
    niveau: 7,
    question: "Quelle est la monnaie commune de la zone euro ?",
    options: [
      "L'euro",
      "Le franc",
      "Le dollar",
      "La livre"
    ],
    correctHash: hashAnswer(1052, 0),
    explication: "L'euro est la monnaie commune utilisée par 20 pays de l'Union européenne. La France l'utilise depuis le 1er janvier 2002 (pièces et billets)."
  },
  {
    id: 1053,
    niveau: 7,
    question: "Où siège le Parlement européen ?",
    options: [
      "À Strasbourg (France) et Bruxelles (Belgique)",
      "À Paris uniquement",
      "À Berlin uniquement",
      "À Londres uniquement"
    ],
    correctHash: hashAnswer(1053, 0),
    explication: "Le Parlement européen siège officiellement à Strasbourg (sessions plénières) mais travaille aussi à Bruxelles. C'est la seule institution européenne en France."
  },
  {
    id: 1054,
    niveau: 7,
    question: "Les citoyens français peuvent-ils voter aux élections européennes ?",
    options: [
      "Oui, tous les 5 ans",
      "Non, seuls les députés votent",
      "Oui, tous les 7 ans",
      "Non, c'est réservé aux fonctionnaires européens"
    ],
    correctHash: hashAnswer(1054, 0),
    explication: "Les citoyens français élisent leurs députés européens au suffrage universel direct tous les 5 ans. Les dernières élections ont eu lieu en 2024."
  },
  {
    id: 1055,
    niveau: 7,
    question: "Combien d'États membres compte l'Union européenne en 2024 ?",
    options: [
      "27 États membres",
      "28 États membres",
      "25 États membres",
      "30 États membres"
    ],
    correctHash: hashAnswer(1055, 0),
    explication: "L'Union européenne compte 27 États membres depuis le Brexit (sortie du Royaume-Uni en 2020). Elle s'étend de l'Atlantique à la mer Noire."
  },
];

// ==================== NIVEAU 8 : LA CONSTITUTION ====================
const NIVEAU_8: QuizQuestion[] = [
  {
    id: 1056,
    niveau: 8,
    question: "Quelle est la Constitution actuelle de la France ?",
    options: [
      "La Constitution de 1958 (Ve République)",
      "La Constitution de 1946 (IVe République)",
      "La Constitution de 1789",
      "La Constitution de 1848"
    ],
    correctHash: hashAnswer(1056, 0),
    explication: "La Constitution actuelle date du 4 octobre 1958 et fonde la Ve République. Elle a été adoptée par référendum et révisée plusieurs fois depuis."
  },
  {
    id: 1057,
    niveau: 8,
    question: "Qui a fondé la Ve République ?",
    options: [
      "Le général de Gaulle",
      "François Mitterrand",
      "Jacques Chirac",
      "Napoléon Bonaparte"
    ],
    correctHash: hashAnswer(1057, 0),
    explication: "Le général Charles de Gaulle a fondé la Ve République en 1958. Il en a été le premier Président de 1959 à 1969."
  },
  {
    id: 1058,
    niveau: 8,
    question: "La Constitution peut être modifiée par :",
    options: [
      "Le Parlement réuni en Congrès ou par référendum",
      "Le Président seul",
      "Le Premier ministre seul",
      "Le Conseil constitutionnel"
    ],
    correctHash: hashAnswer(1058, 0),
    explication: "La Constitution peut être révisée soit par le Parlement réuni en Congrès (3/5 des voix), soit par référendum. C'est l'article 89 de la Constitution."
  },
  {
    id: 1059,
    niveau: 8,
    question: "Quel texte de 1789 fait partie du bloc de constitutionnalité ?",
    options: [
      "La Déclaration des droits de l'homme et du citoyen",
      "Le Code civil",
      "Le Code pénal",
      "Le traité de Versailles"
    ],
    correctHash: hashAnswer(1059, 0),
    explication: "La Déclaration des droits de l'homme et du citoyen de 1789 fait partie du bloc de constitutionnalité. Ses principes ont valeur constitutionnelle."
  },
  {
    id: 1060,
    niveau: 8,
    question: "L'article 1er de la Constitution affirme que la France est :",
    options: [
      "Une République indivisible, laïque, démocratique et sociale",
      "Une monarchie constitutionnelle",
      "Un État fédéral",
      "Une dictature éclairée"
    ],
    correctHash: hashAnswer(1060, 0),
    explication: "L'article 1er définit les caractères fondamentaux de la République française : indivisible, laïque, démocratique et sociale."
  },
];

// ==================== NIVEAU 9 : LES LIBERTÉS FONDAMENTALES ====================
const NIVEAU_9: QuizQuestion[] = [
  {
    id: 1061,
    niveau: 9,
    question: "Quel texte garantit les libertés fondamentales au niveau européen ?",
    options: [
      "La Convention européenne des droits de l'homme",
      "Le traité de Versailles",
      "La Constitution américaine",
      "La Charte des Nations Unies"
    ],
    correctHash: hashAnswer(1061, 0),
    explication: "La Convention européenne des droits de l'homme (1950) garantit les libertés fondamentales. La France l'a ratifiée et la Cour de Strasbourg veille à son respect."
  },
  {
    id: 1062,
    niveau: 9,
    question: "La liberté d'expression permet-elle de tout dire ?",
    options: [
      "Non, elle est limitée par la loi (diffamation, incitation à la haine...)",
      "Oui, on peut dire absolument tout",
      "Non, seul le gouvernement peut s'exprimer",
      "Oui, mais uniquement à l'oral"
    ],
    correctHash: hashAnswer(1062, 0),
    explication: "La liberté d'expression est garantie mais encadrée par la loi : l'injure, la diffamation, l'incitation à la haine raciale ou religieuse sont interdites."
  },
  {
    id: 1063,
    niveau: 9,
    question: "Le droit de grève est-il reconnu en France ?",
    options: [
      "Oui, c'est un droit constitutionnel",
      "Non, il est interdit",
      "Oui, mais seulement dans le secteur privé",
      "Non, sauf autorisation du préfet"
    ],
    correctHash: hashAnswer(1063, 0),
    explication: "Le droit de grève est reconnu par le préambule de la Constitution de 1946. Il s'exerce dans le cadre des lois qui le réglementent."
  },
  {
    id: 1064,
    niveau: 9,
    question: "La liberté de la presse est garantie depuis quelle loi ?",
    options: [
      "La loi du 29 juillet 1881",
      "La loi du 14 juillet 1789",
      "La loi du 1er janvier 2000",
      "La loi du 11 novembre 1918"
    ],
    correctHash: hashAnswer(1064, 0),
    explication: "La loi du 29 juillet 1881 sur la liberté de la presse est le texte fondateur qui garantit la liberté de publication et définit les limites (diffamation, etc.)."
  },
  {
    id: 1065,
    niveau: 9,
    question: "Le Défenseur des droits a pour mission de :",
    options: [
      "Protéger les droits et libertés des citoyens face à l'administration",
      "Défendre la France militairement",
      "Voter les lois",
      "Juger les criminels"
    ],
    correctHash: hashAnswer(1065, 0),
    explication: "Le Défenseur des droits est une autorité indépendante qui défend les droits des citoyens face aux administrations, lutte contre les discriminations et protège les droits des enfants."
  },
];

// ==================== NIVEAU 10 : APPROFONDISSEMENT ====================
const NIVEAU_10: QuizQuestion[] = [
  {
    id: 1066,
    niveau: 10,
    question: "Qu'est-ce que la cohabitation en politique française ?",
    options: [
      "Le Président et le Premier ministre sont de bords politiques opposés",
      "Le Président vit avec le Premier ministre",
      "L'Assemblée et le Sénat votent ensemble",
      "Le Président cumule tous les pouvoirs"
    ],
    correctHash: hashAnswer(1066, 0),
    explication: "La cohabitation survient quand le Président de la République et le Premier ministre appartiennent à des majorités politiques opposées (1986-88, 1993-95, 1997-2002)."
  },
  {
    id: 1067,
    niveau: 10,
    question: "L'article 49.3 de la Constitution permet au Gouvernement de :",
    options: [
      "Faire adopter un texte sans vote, sauf si une motion de censure est votée",
      "Dissoudre l'Assemblée nationale",
      "Organiser un référendum",
      "Déclarer la guerre"
    ],
    correctHash: hashAnswer(1067, 0),
    explication: "L'article 49.3 permet au Premier ministre d'engager la responsabilité du Gouvernement sur un texte de loi. Le texte est adopté sauf si une motion de censure est votée."
  },
  {
    id: 1068,
    niveau: 10,
    question: "Qu'est-ce que le Conseil d'État ?",
    options: [
      "La juridiction suprême de l'ordre administratif et conseiller du Gouvernement",
      "L'équivalent du Sénat",
      "Le conseil privé du Président",
      "Un tribunal pour les ministres"
    ],
    correctHash: hashAnswer(1068, 0),
    explication: "Le Conseil d'État a une double fonction : il conseille le Gouvernement sur les projets de loi et il est la juridiction suprême de l'ordre administratif."
  },
  {
    id: 1069,
    niveau: 10,
    question: "Combien de membres compte le Conseil constitutionnel ?",
    options: [
      "9 membres nommés + les anciens Présidents de la République",
      "15 membres élus",
      "7 membres nommés",
      "12 membres tirés au sort"
    ],
    correctHash: hashAnswer(1069, 0),
    explication: "Le Conseil constitutionnel compte 9 membres nommés pour 9 ans (3 par le Président, 3 par le président de l'Assemblée, 3 par le président du Sénat), plus les anciens Présidents."
  },
  {
    id: 1070,
    niveau: 10,
    question: "Qu'est-ce que la QPC (Question Prioritaire de Constitutionnalité) ?",
    options: [
      "Le droit pour tout justiciable de contester la constitutionnalité d'une loi",
      "Une question posée au Premier ministre",
      "Un examen pour devenir juge",
      "Une procédure de vote au Parlement"
    ],
    correctHash: hashAnswer(1070, 0),
    explication: "Depuis 2010, tout justiciable peut soulever une QPC pour contester la conformité d'une loi à la Constitution lors d'un procès. C'est une avancée majeure pour les droits fondamentaux."
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

export function getQuestionsInstitutions(niveau: number): QuizQuestion[] {
  return ALL_QUESTIONS.filter(q => q.niveau === niveau);
}

export function getAllQuestionsInstitutions(): QuizQuestion[] {
  return ALL_QUESTIONS;
}

export default ALL_QUESTIONS;
