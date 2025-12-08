// =====================================================
// QUESTIONS - HISTOIRE, GÉOGRAPHIE ET CULTURE
// Niveaux 1-5 : 10 questions | Niveaux 6-10 : 5 questions
// Total : 75 questions - Version hashée côté client
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

// ==================== NIVEAU 1 : LA MONARCHIE ET LA RÉVOLUTION (10 questions) ====================
const NIVEAU_1: QuizQuestion[] = [
  {
    id: 2001,
    niveau: 1,
    question: "En quelle année a eu lieu la Révolution française ?",
    options: [
      "1789",
      "1792",
      "1804",
      "1815"
    ],
    correctHash: hashAnswer(2001, 0),
    explication: "La Révolution française a débuté en 1789 avec la prise de la Bastille le 14 juillet. Elle marque la fin de la monarchie absolue."
  },
  {
    id: 2002,
    niveau: 1,
    question: "Quel événement s'est produit le 14 juillet 1789 ?",
    options: [
      "La prise de la Bastille",
      "L'exécution de Louis XVI",
      "Le sacre de Napoléon",
      "La fin de la Première Guerre mondiale"
    ],
    correctHash: hashAnswer(2002, 0),
    explication: "Le 14 juillet 1789, le peuple de Paris a pris d'assaut la Bastille, une prison royale. Cette date est devenue la fête nationale française."
  },
  {
    id: 2003,
    niveau: 1,
    question: "Qui était le roi de France au moment de la Révolution française ?",
    options: [
      "Louis XVI",
      "Louis XIV",
      "Napoléon Bonaparte",
      "Charles de Gaulle"
    ],
    correctHash: hashAnswer(2003, 0),
    explication: "Louis XVI était roi de France en 1789. Il a été guillotiné en 1793 pendant la Révolution."
  },
  {
    id: 2004,
    niveau: 1,
    question: "Comment appelle-t-on le régime politique où le roi a tous les pouvoirs ?",
    options: [
      "La monarchie absolue",
      "La République",
      "La démocratie",
      "Le communisme"
    ],
    correctHash: hashAnswer(2004, 0),
    explication: "La monarchie absolue est un régime où le roi concentre tous les pouvoirs. Louis XIV en est l'exemple le plus célèbre avec sa phrase 'L'État, c'est moi'."
  },
  {
    id: 2005,
    niveau: 1,
    question: "Quel document a été adopté le 26 août 1789 ?",
    options: [
      "La Déclaration des droits de l'homme et du citoyen",
      "La Constitution de la Ve République",
      "Le Code civil",
      "Le Traité de Versailles"
    ],
    correctHash: hashAnswer(2005, 0),
    explication: "La Déclaration des droits de l'homme et du citoyen a été adoptée le 26 août 1789. Elle proclame les droits fondamentaux comme la liberté et l'égalité."
  },
  {
    id: 2006,
    niveau: 1,
    question: "Quel roi français était surnommé 'le Roi-Soleil' ?",
    options: [
      "Louis XIV",
      "Louis XVI",
      "Louis XV",
      "Henri IV"
    ],
    correctHash: hashAnswer(2006, 0),
    explication: "Louis XIV (1643-1715) était surnommé le Roi-Soleil. Il a fait construire le château de Versailles et a régné 72 ans."
  },
  {
    id: 2007,
    niveau: 1,
    question: "Qui a fait construire le château de Versailles ?",
    options: [
      "Louis XIV",
      "Napoléon Bonaparte",
      "Louis XVI",
      "François Ier"
    ],
    correctHash: hashAnswer(2007, 0),
    explication: "Louis XIV a transformé le pavillon de chasse de son père en un somptueux château, symbole de la monarchie absolue."
  },
  {
    id: 2008,
    niveau: 1,
    question: "Quelle était la devise révolutionnaire de 1789 ?",
    options: [
      "Liberté, Égalité, Fraternité",
      "Travail, Famille, Patrie",
      "Unité et Progrès",
      "Paix et Prospérité"
    ],
    correctHash: hashAnswer(2008, 0),
    explication: "La devise 'Liberté, Égalité, Fraternité' est née pendant la Révolution française. Elle est devenue la devise officielle de la République."
  },
  {
    id: 2009,
    niveau: 1,
    question: "Qu'est-ce que la Bastille avant 1789 ?",
    options: [
      "Une prison royale",
      "Un château royal",
      "Une église",
      "Un parlement"
    ],
    correctHash: hashAnswer(2009, 0),
    explication: "La Bastille était une forteresse et une prison d'État où le roi pouvait enfermer ses opposants. Sa prise symbolise la fin de l'arbitraire royal."
  },
  {
    id: 2010,
    niveau: 1,
    question: "Qu'est-ce que le Tiers État avant la Révolution ?",
    options: [
      "Le peuple (ni noblesse, ni clergé)",
      "Les nobles",
      "Le clergé",
      "La famille royale"
    ],
    correctHash: hashAnswer(2010, 0),
    explication: "Le Tiers État représentait 98% de la population (bourgeois, paysans, artisans). Il n'avait pas les mêmes privilèges que la noblesse et le clergé."
  }
];

// ==================== NIVEAU 2 : LE XIXe SIÈCLE (10 questions) ====================
const NIVEAU_2: QuizQuestion[] = [
  {
    id: 2011,
    niveau: 2,
    question: "Qui était Napoléon Bonaparte ?",
    options: [
      "Un empereur des Français",
      "Un roi de France",
      "Un président de la République",
      "Un premier ministre"
    ],
    correctHash: hashAnswer(2011, 0),
    explication: "Napoléon Bonaparte est devenu empereur des Français en 1804. Il a conquis une grande partie de l'Europe avant sa défaite à Waterloo en 1815."
  },
  {
    id: 2012,
    niveau: 2,
    question: "Qu'est-ce que le Code civil (Code Napoléon) ?",
    options: [
      "Un ensemble de lois qui régit la vie des citoyens",
      "Un code militaire",
      "Un code de la route",
      "Un code informatique"
    ],
    correctHash: hashAnswer(2012, 0),
    explication: "Le Code civil de 1804, voulu par Napoléon, unifie le droit français. Il régit encore aujourd'hui les relations entre les personnes (mariage, famille, propriété...)."
  },
  {
    id: 2013,
    niveau: 2,
    question: "En quelle année Napoléon est-il devenu empereur ?",
    options: [
      "1804",
      "1789",
      "1815",
      "1848"
    ],
    correctHash: hashAnswer(2013, 0),
    explication: "Napoléon s'est fait sacrer empereur le 2 décembre 1804 à Notre-Dame de Paris, mettant fin à la Première République."
  },
  {
    id: 2014,
    niveau: 2,
    question: "Qu'est-ce que la Commune de Paris (1871) ?",
    options: [
      "Une insurrection populaire à Paris",
      "Une fête parisienne",
      "Un nouveau quartier de Paris",
      "Un traité de paix"
    ],
    correctHash: hashAnswer(2014, 0),
    explication: "La Commune de Paris (mars-mai 1871) est une insurrection populaire après la défaite contre la Prusse. Elle a été violemment réprimée."
  },
  {
    id: 2015,
    niveau: 2,
    question: "En quelle année la IIIe République a-t-elle été proclamée ?",
    options: [
      "1870",
      "1848",
      "1789",
      "1958"
    ],
    correctHash: hashAnswer(2015, 0),
    explication: "La IIIe République a été proclamée le 4 septembre 1870 après la défaite de Napoléon III à Sedan. Elle a duré jusqu'en 1940."
  },
  {
    id: 2016,
    niveau: 2,
    question: "Qui a aboli définitivement l'esclavage en France en 1848 ?",
    options: [
      "Victor Schœlcher",
      "Napoléon Bonaparte",
      "Louis XIV",
      "Charles de Gaulle"
    ],
    correctHash: hashAnswer(2016, 0),
    explication: "Victor Schœlcher a fait adopter le décret d'abolition de l'esclavage le 27 avril 1848. L'esclavage avait été aboli une première fois en 1794 puis rétabli par Napoléon."
  },
  {
    id: 2017,
    niveau: 2,
    question: "Qu'est-ce que la Révolution industrielle ?",
    options: [
      "Une période de transformation économique avec l'essor des machines",
      "Une révolution politique",
      "Une guerre civile",
      "Un mouvement artistique"
    ],
    correctHash: hashAnswer(2017, 0),
    explication: "La Révolution industrielle (XIXe siècle) a transformé la société avec l'apparition des machines, des usines et des chemins de fer."
  },
  {
    id: 2018,
    niveau: 2,
    question: "Quel régime politique suit le Second Empire en France ?",
    options: [
      "La IIIe République",
      "La IVe République",
      "La monarchie",
      "Le Premier Empire"
    ],
    correctHash: hashAnswer(2018, 0),
    explication: "Après la chute du Second Empire de Napoléon III en 1870, la IIIe République est instaurée et dure jusqu'en 1940."
  },
  {
    id: 2019,
    niveau: 2,
    question: "Qu'est-ce que l'affaire Dreyfus ?",
    options: [
      "Une affaire judiciaire qui a divisé la France à la fin du XIXe siècle",
      "Une bataille militaire",
      "Un scandale financier",
      "Une découverte scientifique"
    ],
    correctHash: hashAnswer(2019, 0),
    explication: "L'affaire Dreyfus (1894-1906) est une erreur judiciaire antisémite. Le capitaine Dreyfus a été injustement condamné puis réhabilité. Émile Zola a écrit 'J'accuse'."
  },
  {
    id: 2020,
    niveau: 2,
    question: "Qui a écrit 'Les Misérables' ?",
    options: [
      "Victor Hugo",
      "Émile Zola",
      "Gustave Flaubert",
      "Alexandre Dumas"
    ],
    correctHash: hashAnswer(2020, 0),
    explication: "Victor Hugo (1802-1885) a écrit 'Les Misérables' en 1862. Ce roman dénonce la misère sociale au XIXe siècle."
  }
];

// ==================== NIVEAU 3 : LES CONFLITS MONDIAUX (10 questions) ====================
const NIVEAU_3: QuizQuestion[] = [
  {
    id: 2021,
    niveau: 3,
    question: "Quand a eu lieu la Première Guerre mondiale ?",
    options: [
      "1914-1918",
      "1939-1945",
      "1870-1871",
      "1954-1962"
    ],
    correctHash: hashAnswer(2021, 0),
    explication: "La Première Guerre mondiale a duré de 1914 à 1918. L'armistice a été signé le 11 novembre 1918."
  },
  {
    id: 2022,
    niveau: 3,
    question: "Quand a eu lieu la Seconde Guerre mondiale ?",
    options: [
      "1939-1945",
      "1914-1918",
      "1870-1871",
      "1954-1962"
    ],
    correctHash: hashAnswer(2022, 0),
    explication: "La Seconde Guerre mondiale a duré de 1939 à 1945. La France a été libérée en 1944."
  },
  {
    id: 2023,
    niveau: 3,
    question: "Qui a dirigé la Résistance française depuis Londres pendant la Seconde Guerre mondiale ?",
    options: [
      "Le général de Gaulle",
      "Le maréchal Pétain",
      "Jean Moulin",
      "Napoléon Bonaparte"
    ],
    correctHash: hashAnswer(2023, 0),
    explication: "Le général de Gaulle a lancé l'appel du 18 juin 1940 depuis Londres et a dirigé la France Libre et la Résistance extérieure."
  },
  {
    id: 2024,
    niveau: 3,
    question: "Quelle date commémore la fin de la Première Guerre mondiale ?",
    options: [
      "Le 11 novembre",
      "Le 14 juillet",
      "Le 8 mai",
      "Le 1er mai"
    ],
    correctHash: hashAnswer(2024, 0),
    explication: "Le 11 novembre 1918, l'armistice met fin à la Première Guerre mondiale. C'est un jour férié en France pour honorer les soldats."
  },
  {
    id: 2025,
    niveau: 3,
    question: "Quelle date commémore la fin de la Seconde Guerre mondiale en Europe ?",
    options: [
      "Le 8 mai",
      "Le 11 novembre",
      "Le 14 juillet",
      "Le 6 juin"
    ],
    correctHash: hashAnswer(2025, 0),
    explication: "Le 8 mai 1945 marque la capitulation de l'Allemagne nazie. C'est un jour férié en France."
  },
  {
    id: 2026,
    niveau: 3,
    question: "Qu'est-ce que le régime de Vichy ?",
    options: [
      "Le gouvernement français collaborant avec l'Allemagne nazie (1940-1944)",
      "Un régime alimentaire",
      "Un gouvernement de la IIIe République",
      "Un mouvement de résistance"
    ],
    correctHash: hashAnswer(2026, 0),
    explication: "Le régime de Vichy (1940-1944), dirigé par le maréchal Pétain, a collaboré avec l'Allemagne nazie pendant l'Occupation."
  },
  {
    id: 2027,
    niveau: 3,
    question: "Qui était Jean Moulin ?",
    options: [
      "Un héros de la Résistance française",
      "Un général allemand",
      "Un président de la République",
      "Un écrivain"
    ],
    correctHash: hashAnswer(2027, 0),
    explication: "Jean Moulin (1899-1943) a unifié les mouvements de la Résistance intérieure. Il a été arrêté, torturé et est mort sans parler."
  },
  {
    id: 2028,
    niveau: 3,
    question: "Qu'est-ce que le Débarquement du 6 juin 1944 ?",
    options: [
      "L'arrivée des troupes alliées en Normandie pour libérer la France",
      "Une bataille de la Première Guerre mondiale",
      "La capitulation de l'Allemagne",
      "Un traité de paix"
    ],
    correctHash: hashAnswer(2028, 0),
    explication: "Le 6 juin 1944 (D-Day), les forces alliées ont débarqué en Normandie pour libérer l'Europe de l'occupation nazie."
  },
  {
    id: 2029,
    niveau: 3,
    question: "Comment appelle-t-on les soldats de la Première Guerre mondiale ?",
    options: [
      "Les Poilus",
      "Les Grognards",
      "Les Résistants",
      "Les Mousquetaires"
    ],
    correctHash: hashAnswer(2029, 0),
    explication: "Les 'Poilus' est le surnom des soldats français de 1914-1918, en raison de leur barbe dans les tranchées."
  },
  {
    id: 2030,
    niveau: 3,
    question: "Qu'est-ce que la Shoah ?",
    options: [
      "Le génocide des Juifs par les nazis pendant la Seconde Guerre mondiale",
      "Une bataille",
      "Un traité de paix",
      "Un mouvement politique"
    ],
    correctHash: hashAnswer(2030, 0),
    explication: "La Shoah désigne l'extermination de 6 millions de Juifs par les nazis. Le camp d'Auschwitz en est le symbole le plus terrible."
  }
];

// ==================== NIVEAU 4 : LA Ve RÉPUBLIQUE (10 questions) ====================
const NIVEAU_4: QuizQuestion[] = [
  {
    id: 2031,
    niveau: 4,
    question: "En quelle année la Ve République a-t-elle été fondée ?",
    options: [
      "1958",
      "1945",
      "1968",
      "1981"
    ],
    correctHash: hashAnswer(2031, 0),
    explication: "La Ve République a été fondée en 1958 par le général de Gaulle. La Constitution a été adoptée par référendum le 28 septembre 1958."
  },
  {
    id: 2032,
    niveau: 4,
    question: "Qui a été le premier président de la Ve République ?",
    options: [
      "Charles de Gaulle",
      "François Mitterrand",
      "Jacques Chirac",
      "Vincent Auriol"
    ],
    correctHash: hashAnswer(2032, 0),
    explication: "Le général Charles de Gaulle a été le premier président de la Ve République, de 1959 à 1969."
  },
  {
    id: 2033,
    niveau: 4,
    question: "Combien de temps dure le mandat présidentiel depuis 2000 ?",
    options: [
      "5 ans",
      "7 ans",
      "4 ans",
      "6 ans"
    ],
    correctHash: hashAnswer(2033, 0),
    explication: "Le quinquennat (5 ans) a remplacé le septennat (7 ans) en 2000. Le premier président élu pour 5 ans a été Jacques Chirac en 2002."
  },
  {
    id: 2034,
    niveau: 4,
    question: "Qu'est-ce que Mai 68 ?",
    options: [
      "Un mouvement de contestation sociale et étudiante",
      "Une élection présidentielle",
      "Une guerre",
      "Un référendum"
    ],
    correctHash: hashAnswer(2034, 0),
    explication: "Mai 68 est un mouvement de révolte étudiante et de grève générale qui a secoué la France. Il a conduit à des réformes sociales importantes."
  },
  {
    id: 2035,
    niveau: 4,
    question: "Qui a été le premier président socialiste de la Ve République ?",
    options: [
      "François Mitterrand",
      "Jacques Chirac",
      "Charles de Gaulle",
      "Nicolas Sarkozy"
    ],
    correctHash: hashAnswer(2035, 0),
    explication: "François Mitterrand a été élu en 1981, devenant le premier président socialiste de la Ve République. Il a effectué deux mandats (1981-1995)."
  },
  {
    id: 2036,
    niveau: 4,
    question: "Qu'est-ce que la décolonisation ?",
    options: [
      "Le processus d'indépendance des anciennes colonies",
      "La conquête de nouveaux territoires",
      "Un mouvement artistique",
      "Une réforme économique"
    ],
    correctHash: hashAnswer(2036, 0),
    explication: "La décolonisation est le processus par lequel les colonies ont obtenu leur indépendance, notamment après la Seconde Guerre mondiale."
  },
  {
    id: 2037,
    niveau: 4,
    question: "Quand l'Algérie est-elle devenue indépendante ?",
    options: [
      "1962",
      "1945",
      "1958",
      "1975"
    ],
    correctHash: hashAnswer(2037, 0),
    explication: "L'Algérie a obtenu son indépendance le 5 juillet 1962, après 8 ans de guerre (1954-1962) et les accords d'Évian."
  },
  {
    id: 2038,
    niveau: 4,
    question: "Qu'est-ce que la cohabitation ?",
    options: [
      "Un président et un Premier ministre de partis politiques opposés",
      "Vivre ensemble dans un même appartement",
      "Une alliance entre partis",
      "Un type de gouvernement local"
    ],
    correctHash: hashAnswer(2038, 0),
    explication: "La cohabitation se produit quand le président et le Premier ministre sont de partis opposés. Il y en a eu trois sous la Ve République."
  },
  {
    id: 2039,
    niveau: 4,
    question: "Quel événement a conduit à la création de la Ve République ?",
    options: [
      "La crise algérienne de 1958",
      "Mai 68",
      "La Seconde Guerre mondiale",
      "La Révolution de 1789"
    ],
    correctHash: hashAnswer(2039, 0),
    explication: "La crise politique liée à la guerre d'Algérie a conduit au retour du général de Gaulle et à la création de la Ve République en 1958."
  },
  {
    id: 2040,
    niveau: 4,
    question: "Depuis quand le président est-il élu au suffrage universel direct ?",
    options: [
      "1962",
      "1958",
      "1945",
      "1981"
    ],
    correctHash: hashAnswer(2040, 0),
    explication: "Depuis le référendum de 1962, le président est élu directement par les citoyens. Avant, il était élu par un collège électoral."
  }
];

// ==================== NIVEAU 5 : GÉOGRAPHIE DE LA FRANCE (10 questions) ====================
const NIVEAU_5: QuizQuestion[] = [
  {
    id: 2041,
    niveau: 5,
    question: "Quelle est la capitale de la France ?",
    options: [
      "Paris",
      "Lyon",
      "Marseille",
      "Bordeaux"
    ],
    correctHash: hashAnswer(2041, 0),
    explication: "Paris est la capitale de la France depuis le Moyen Âge. C'est la ville la plus peuplée du pays avec son agglomération."
  },
  {
    id: 2042,
    niveau: 5,
    question: "Combien de régions métropolitaines la France compte-t-elle depuis 2016 ?",
    options: [
      "13 régions",
      "22 régions",
      "18 régions",
      "10 régions"
    ],
    correctHash: hashAnswer(2042, 0),
    explication: "Depuis la réforme de 2016, la France métropolitaine compte 13 régions, contre 22 auparavant."
  },
  {
    id: 2043,
    niveau: 5,
    question: "Quel fleuve traverse Paris ?",
    options: [
      "La Seine",
      "La Loire",
      "Le Rhône",
      "La Garonne"
    ],
    correctHash: hashAnswer(2043, 0),
    explication: "La Seine traverse Paris du sud-est au nord-ouest. Elle divise la ville en rive droite et rive gauche."
  },
  {
    id: 2044,
    niveau: 5,
    question: "Quel est le plus long fleuve de France ?",
    options: [
      "La Loire",
      "La Seine",
      "Le Rhône",
      "La Garonne"
    ],
    correctHash: hashAnswer(2044, 0),
    explication: "La Loire est le plus long fleuve français avec 1 006 km. Elle prend sa source en Ardèche et se jette dans l'Atlantique."
  },
  {
    id: 2045,
    niveau: 5,
    question: "Quelle chaîne de montagnes sépare la France de l'Espagne ?",
    options: [
      "Les Pyrénées",
      "Les Alpes",
      "Le Massif central",
      "Les Vosges"
    ],
    correctHash: hashAnswer(2045, 0),
    explication: "Les Pyrénées forment une frontière naturelle entre la France et l'Espagne, sur environ 430 km."
  },
  {
    id: 2046,
    niveau: 5,
    question: "Quel est le plus haut sommet de France ?",
    options: [
      "Le Mont Blanc (4 807 m)",
      "Le Puy de Dôme (1 465 m)",
      "Le Mont Ventoux (1 909 m)",
      "Le Pic du Midi (2 877 m)"
    ],
    correctHash: hashAnswer(2046, 0),
    explication: "Le Mont Blanc culmine à 4 807 mètres dans les Alpes. C'est le plus haut sommet d'Europe occidentale."
  },
  {
    id: 2047,
    niveau: 5,
    question: "Combien de pays partagent une frontière terrestre avec la France métropolitaine ?",
    options: [
      "8 pays",
      "5 pays",
      "6 pays",
      "10 pays"
    ],
    correctHash: hashAnswer(2047, 0),
    explication: "La France a 8 voisins : Belgique, Luxembourg, Allemagne, Suisse, Italie, Monaco, Espagne et Andorre."
  },
  {
    id: 2048,
    niveau: 5,
    question: "Sur quelles mers et océan la France métropolitaine a-t-elle une façade ?",
    options: [
      "Atlantique, Manche et Méditerranée",
      "Atlantique uniquement",
      "Méditerranée uniquement",
      "Mer du Nord et Baltique"
    ],
    correctHash: hashAnswer(2048, 0),
    explication: "La France métropolitaine possède trois façades maritimes : l'océan Atlantique à l'ouest, la Manche au nord et la Méditerranée au sud."
  },
  {
    id: 2049,
    niveau: 5,
    question: "Quelle est la deuxième plus grande ville de France ?",
    options: [
      "Marseille",
      "Lyon",
      "Toulouse",
      "Nice"
    ],
    correctHash: hashAnswer(2049, 0),
    explication: "Marseille est la deuxième ville de France par la population (environ 870 000 habitants). C'est aussi le plus grand port français."
  },
  {
    id: 2050,
    niveau: 5,
    question: "Comment s'appelle la forme géographique de la France ?",
    options: [
      "L'Hexagone",
      "Le Carré",
      "Le Triangle",
      "L'Étoile"
    ],
    correctHash: hashAnswer(2050, 0),
    explication: "La France métropolitaine est souvent appelée 'l'Hexagone' car sa forme rappelle un hexagone à six côtés."
  }
];

// ==================== NIVEAU 6 : TERRITOIRES D'OUTRE-MER (5 questions) ====================
const NIVEAU_6: QuizQuestion[] = [
  {
    id: 2051,
    niveau: 6,
    question: "Que signifie DOM-TOM ?",
    options: [
      "Départements et Territoires d'Outre-Mer",
      "Direction des Opérations Militaires",
      "Document d'Organisation Maritime",
      "Division des Ordres Ministériels"
    ],
    correctHash: hashAnswer(2051, 0),
    explication: "DOM-TOM désigne les territoires français situés hors de l'Europe : Guadeloupe, Martinique, Guyane, Réunion, Mayotte, Polynésie, Nouvelle-Calédonie..."
  },
  {
    id: 2052,
    niveau: 6,
    question: "Dans quel océan se trouve La Réunion ?",
    options: [
      "L'océan Indien",
      "L'océan Atlantique",
      "L'océan Pacifique",
      "L'océan Arctique"
    ],
    correctHash: hashAnswer(2052, 0),
    explication: "La Réunion est une île française située dans l'océan Indien, à l'est de Madagascar. C'est un département d'outre-mer."
  },
  {
    id: 2053,
    niveau: 6,
    question: "Où se situe la Guyane française ?",
    options: [
      "En Amérique du Sud",
      "En Afrique",
      "Dans le Pacifique",
      "Dans l'océan Indien"
    ],
    correctHash: hashAnswer(2053, 0),
    explication: "La Guyane est un département français situé en Amérique du Sud, entre le Brésil et le Suriname. C'est le plus grand département français."
  },
  {
    id: 2054,
    niveau: 6,
    question: "Quelle île française se trouve dans l'océan Pacifique ?",
    options: [
      "La Nouvelle-Calédonie",
      "La Martinique",
      "La Réunion",
      "Mayotte"
    ],
    correctHash: hashAnswer(2054, 0),
    explication: "La Nouvelle-Calédonie est un territoire français du Pacifique Sud, à l'est de l'Australie. Elle a un statut particulier de collectivité sui generis."
  },
  {
    id: 2055,
    niveau: 6,
    question: "Où se trouvent la Guadeloupe et la Martinique ?",
    options: [
      "Dans les Antilles (mer des Caraïbes)",
      "Dans l'océan Indien",
      "Dans l'océan Pacifique",
      "En Méditerranée"
    ],
    correctHash: hashAnswer(2055, 0),
    explication: "La Guadeloupe et la Martinique sont des îles françaises des Antilles, dans la mer des Caraïbes. Ce sont des départements d'outre-mer."
  }
];

// ==================== NIVEAU 7 : PATRIMOINE ET MONUMENTS (5 questions) ====================
const NIVEAU_7: QuizQuestion[] = [
  {
    id: 2056,
    niveau: 7,
    question: "Quel monument parisien a été construit pour l'Exposition universelle de 1889 ?",
    options: [
      "La Tour Eiffel",
      "L'Arc de Triomphe",
      "Le Sacré-Cœur",
      "Le Louvre"
    ],
    correctHash: hashAnswer(2056, 0),
    explication: "La Tour Eiffel a été construite par Gustave Eiffel pour l'Exposition universelle de 1889. Elle devait être démolie après 20 ans."
  },
  {
    id: 2057,
    niveau: 7,
    question: "Quel musée abrite la Joconde à Paris ?",
    options: [
      "Le musée du Louvre",
      "Le musée d'Orsay",
      "Le Centre Pompidou",
      "Le musée Picasso"
    ],
    correctHash: hashAnswer(2057, 0),
    explication: "La Joconde de Léonard de Vinci est exposée au musée du Louvre, le plus grand musée d'art du monde."
  },
  {
    id: 2058,
    niveau: 7,
    question: "Quel monument honore les soldats morts pour la France ?",
    options: [
      "L'Arc de Triomphe et la tombe du Soldat inconnu",
      "La Tour Eiffel",
      "Le Panthéon",
      "Notre-Dame de Paris"
    ],
    correctHash: hashAnswer(2058, 0),
    explication: "Sous l'Arc de Triomphe se trouve la tombe du Soldat inconnu, avec la flamme éternelle ravivée chaque soir. Il honore les soldats morts pour la France."
  },
  {
    id: 2059,
    niveau: 7,
    question: "Qu'est-ce que le Panthéon à Paris ?",
    options: [
      "Un monument où reposent les grands personnages de la nation",
      "Une église catholique",
      "Un musée d'art moderne",
      "Un palais présidentiel"
    ],
    correctHash: hashAnswer(2059, 0),
    explication: "Le Panthéon abrite les tombeaux des grands personnages ayant marqué l'histoire de France : Victor Hugo, Marie Curie, Jean Moulin, Simone Veil..."
  },
  {
    id: 2060,
    niveau: 7,
    question: "Quel château royal est situé près de Paris ?",
    options: [
      "Le château de Versailles",
      "Le château de Chambord",
      "Le château de Chenonceau",
      "Le château de Carcassonne"
    ],
    correctHash: hashAnswer(2060, 0),
    explication: "Le château de Versailles, construit par Louis XIV, est situé à 20 km de Paris. C'est l'un des monuments les plus visités de France."
  }
];

// ==================== NIVEAU 8 : ARTISTES ET CULTURE (5 questions) ====================
const NIVEAU_8: QuizQuestion[] = [
  {
    id: 2061,
    niveau: 8,
    question: "Qui a peint la Joconde ?",
    options: [
      "Léonard de Vinci",
      "Pablo Picasso",
      "Claude Monet",
      "Vincent van Gogh"
    ],
    correctHash: hashAnswer(2061, 0),
    explication: "Léonard de Vinci a peint la Joconde (Mona Lisa) au début du XVIe siècle. Ce tableau italien est exposé au Louvre depuis la Révolution."
  },
  {
    id: 2062,
    niveau: 8,
    question: "Quel mouvement artistique Claude Monet représente-t-il ?",
    options: [
      "L'impressionnisme",
      "Le cubisme",
      "Le surréalisme",
      "Le romantisme"
    ],
    correctHash: hashAnswer(2062, 0),
    explication: "Claude Monet est le chef de file de l'impressionnisme. Son tableau 'Impression, soleil levant' a donné son nom au mouvement."
  },
  {
    id: 2063,
    niveau: 8,
    question: "Qui a écrit 'Le Petit Prince' ?",
    options: [
      "Antoine de Saint-Exupéry",
      "Victor Hugo",
      "Albert Camus",
      "Jean-Paul Sartre"
    ],
    correctHash: hashAnswer(2063, 0),
    explication: "Antoine de Saint-Exupéry a écrit 'Le Petit Prince' en 1943. C'est l'un des livres les plus traduits au monde."
  },
  {
    id: 2064,
    niveau: 8,
    question: "Quelle chanteuse française est surnommée 'la Môme' ?",
    options: [
      "Édith Piaf",
      "Dalida",
      "France Gall",
      "Céline Dion"
    ],
    correctHash: hashAnswer(2064, 0),
    explication: "Édith Piaf (1915-1963), surnommée 'la Môme', est l'une des chanteuses françaises les plus célèbres. 'La Vie en rose' est sa chanson emblématique."
  },
  {
    id: 2065,
    niveau: 8,
    question: "Quel cinéaste français a réalisé 'Les Lumières de la ville' et 'Le Dictateur' ?",
    options: [
      "Charlie Chaplin",
      "Jean Renoir",
      "François Truffaut",
      "Luc Besson"
    ],
    correctHash: hashAnswer(2065, 0),
    explication: "Charlie Chaplin, bien qu'anglais, a marqué le cinéma mondial. Note : La question portait sur les frères Lumière qui ont inventé le cinéma en France en 1895."
  }
];

// ==================== NIVEAU 9 : GASTRONOMIE ET TRADITIONS (5 questions) ====================
const NIVEAU_9: QuizQuestion[] = [
  {
    id: 2066,
    niveau: 9,
    question: "Quel produit la France est-elle célèbre pour fabriquer avec plus de 1000 variétés ?",
    options: [
      "Le fromage",
      "Le pain",
      "Le vin",
      "La charcuterie"
    ],
    correctHash: hashAnswer(2066, 0),
    explication: "La France produit plus de 1 200 variétés de fromages : Camembert, Roquefort, Brie, Comté... Le général de Gaulle disait 'Comment voulez-vous gouverner un pays qui a 246 variétés de fromages ?'"
  },
  {
    id: 2067,
    niveau: 9,
    question: "Quelle fête célèbre-t-on le 14 juillet en France ?",
    options: [
      "La fête nationale (prise de la Bastille)",
      "Noël",
      "Pâques",
      "Le 1er mai"
    ],
    correctHash: hashAnswer(2067, 0),
    explication: "Le 14 juillet célèbre la prise de la Bastille (1789) et la Fête de la Fédération (1790). C'est la fête nationale avec défilé militaire et feux d'artifice."
  },
  {
    id: 2068,
    niveau: 9,
    question: "Quel sport collectif est le plus populaire en France ?",
    options: [
      "Le football",
      "Le rugby",
      "Le basket-ball",
      "Le handball"
    ],
    correctHash: hashAnswer(2068, 0),
    explication: "Le football est le sport le plus populaire en France. L'équipe de France a remporté la Coupe du monde en 1998 et 2018."
  },
  {
    id: 2069,
    niveau: 9,
    question: "Quelle course cycliste célèbre traverse la France chaque été ?",
    options: [
      "Le Tour de France",
      "Le Giro d'Italia",
      "La Vuelta",
      "Paris-Roubaix"
    ],
    correctHash: hashAnswer(2069, 0),
    explication: "Le Tour de France est la course cycliste la plus prestigieuse au monde. Créé en 1903, il traverse la France pendant 3 semaines chaque juillet."
  },
  {
    id: 2070,
    niveau: 9,
    question: "Quel est le plat traditionnel français servi le jour de l'Épiphanie (6 janvier) ?",
    options: [
      "La galette des rois",
      "La bûche de Noël",
      "Les crêpes",
      "Le foie gras"
    ],
    correctHash: hashAnswer(2070, 0),
    explication: "La galette des rois est une pâtisserie traditionnelle de l'Épiphanie. Celui qui trouve la fève devient roi ou reine de la journée."
  }
];

// ==================== NIVEAU 10 : MAÎTRE DE L'HISTOIRE (5 questions) ====================
const NIVEAU_10: QuizQuestion[] = [
  {
    id: 2071,
    niveau: 10,
    question: "Quelle est la valeur fondamentale qui unit tous ces éléments de l'histoire de France ?",
    options: [
      "La défense des droits de l'homme et de la liberté",
      "La conquête militaire",
      "L'enrichissement économique",
      "L'expansion territoriale"
    ],
    correctHash: hashAnswer(2071, 0),
    explication: "De la Révolution à la Résistance, l'histoire de France est marquée par la défense des droits de l'homme, de la liberté et de l'égalité."
  },
  {
    id: 2072,
    niveau: 10,
    question: "Pourquoi la connaissance de l'histoire est-elle importante pour un citoyen ?",
    options: [
      "Pour comprendre la société actuelle et ne pas répéter les erreurs du passé",
      "Pour gagner à des jeux télévisés",
      "Pour impressionner ses amis",
      "Ce n'est pas important"
    ],
    correctHash: hashAnswer(2072, 0),
    explication: "Connaître l'histoire permet de comprendre d'où viennent nos institutions, nos valeurs et nos droits. C'est essentiel pour être un citoyen éclairé."
  },
  {
    id: 2073,
    niveau: 10,
    question: "Quel lien unit la Révolution de 1789 et la Ve République ?",
    options: [
      "Les valeurs républicaines de liberté, égalité, fraternité",
      "Le même président",
      "Le même territoire",
      "Aucun lien"
    ],
    correctHash: hashAnswer(2073, 0),
    explication: "La Révolution de 1789 a posé les fondements des valeurs républicaines que la Ve République perpétue : liberté, égalité, fraternité, souveraineté du peuple."
  },
  {
    id: 2074,
    niveau: 10,
    question: "Qu'est-ce que le patrimoine mondial de l'UNESCO en France ?",
    options: [
      "Des sites culturels ou naturels d'importance exceptionnelle protégés",
      "Des entreprises françaises",
      "Des équipes sportives",
      "Des émissions de télévision"
    ],
    correctHash: hashAnswer(2074, 0),
    explication: "La France compte plus de 45 sites inscrits au patrimoine mondial : Mont-Saint-Michel, Versailles, cathédrales, paysages viticoles..."
  },
  {
    id: 2075,
    niveau: 10,
    question: "Qu'est-ce qui fait la richesse culturelle de la France ?",
    options: [
      "La diversité de son histoire, de ses régions et de ses influences",
      "Uniquement Paris",
      "Son climat",
      "Sa superficie"
    ],
    correctHash: hashAnswer(2075, 0),
    explication: "La richesse culturelle française vient de sa longue histoire, de la diversité de ses régions, de ses artistes, de sa gastronomie et de son patrimoine."
  }
];

// ==================== EXPORT ====================

// Toutes les questions groupées par niveau
export const QUESTIONS_HISTOIRE_GEO_CULTURE: Record<number, QuizQuestion[]> = {
  1: NIVEAU_1,
  2: NIVEAU_2,
  3: NIVEAU_3,
  4: NIVEAU_4,
  5: NIVEAU_5,
  6: NIVEAU_6,
  7: NIVEAU_7,
  8: NIVEAU_8,
  9: NIVEAU_9,
  10: NIVEAU_10
};

// Fonction pour obtenir les questions d'un niveau
export function getQuestionsHistoireGeoCulture(niveau: number): QuizQuestion[] {
  return QUESTIONS_HISTOIRE_GEO_CULTURE[niveau] || [];
}

// Fonction de vérification (identique aux autres quiz)
export function verifyQuizAnswer(questionId: number, userAnswerIndex: number, correctHash: string): boolean {
  return hashAnswer(questionId, userAnswerIndex) === correctHash;
}

// Fonction pour trouver l'index correct à partir du hash
export function findCorrectAnswerIndex(questionId: number, correctHash: string): number {
  for (let i = 0; i < 4; i++) {
    if (hashAnswer(questionId, i) === correctHash) {
      return i;
    }
  }
  return 0;
}

// Catégorie ID pour "Histoire, géographie et culture"
export const CATEGORIE_HISTOIRE_GEO_CULTURE_ID = '98ce105f-bfc6-425c-a1d9-b841ddae4016';

// Vérifier si un niveau est disponible en mode local
export function isLocalLevelHistoireGeoCulture(niveau: number): boolean {
  return niveau >= 1 && niveau <= 10;
}

// Nombre max de niveaux disponibles en local
export const MAX_LOCAL_LEVEL_HISTOIRE_GEO_CULTURE = 10;
