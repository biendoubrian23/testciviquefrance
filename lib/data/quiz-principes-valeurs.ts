// =====================================================
// QUESTIONS - PRINCIPES ET VALEURS DE LA RÉPUBLIQUE
// 3 premiers niveaux (30 questions) - Version hashée côté client
// =====================================================

// Fonction de hash simple (djb2) - identique à examen blanc
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

// ==================== NIVEAU 1 : FONDAMENTAUX ====================
// Thème: La devise républicaine
const NIVEAU_1: QuizQuestion[] = [
  {
    id: 1,
    niveau: 1,
    question: "Quelle est la devise de la République française ?",
    options: [
      "Liberté, Égalité, Fraternité",
      "Unité, Force, Progrès",
      "Travail, Famille, Patrie",
      "Paix, Justice, Solidarité"
    ],
    correctHash: hashAnswer(1, 0),
    explication: "La devise « Liberté, Égalité, Fraternité » est apparue pendant la Révolution française. Elle est inscrite dans l'article 2 de la Constitution de 1958 et figure sur les frontons des bâtiments publics, les pièces de monnaie et les timbres."
  },
  {
    id: 2,
    niveau: 1,
    question: "Selon l'article 1er de la Constitution, la France est une République :",
    options: [
      "Indivisible, laïque, démocratique et sociale",
      "Fédérale, laïque et démocratique",
      "Indivisible, catholique et démocratique",
      "Divisible, laïque et monarchique"
    ],
    correctHash: hashAnswer(2, 0),
    explication: "L'article 1er de la Constitution de 1958 définit la France comme « une République indivisible, laïque, démocratique et sociale ». Ces quatre caractéristiques sont les piliers fondamentaux de notre République."
  },
  {
    id: 3,
    niveau: 1,
    question: "Que signifie le principe de laïcité en France ?",
    options: [
      "La séparation des Églises et de l'État et la neutralité religieuse",
      "L'interdiction de toutes les religions",
      "La religion catholique comme religion d'État",
      "L'obligation d'être athée"
    ],
    correctHash: hashAnswer(3, 0),
    explication: "La laïcité garantit la liberté de conscience et de culte, la séparation des Églises et de l'État, et la neutralité de l'État vis-à-vis des religions. Elle permet à chacun de croire ou de ne pas croire."
  },
  {
    id: 4,
    niveau: 1,
    question: "Que garantit le principe d'égalité en France ?",
    options: [
      "Tous les citoyens sont égaux devant la loi",
      "Tout le monde a le même salaire",
      "Les riches ont plus de droits",
      "Seuls les hommes ont des droits"
    ],
    correctHash: hashAnswer(4, 0),
    explication: "Le principe d'égalité signifie que tous les citoyens sont égaux devant la loi, sans distinction d'origine, de race ou de religion. C'est un droit fondamental inscrit dans la Déclaration des droits de l'homme de 1789."
  },
  {
    id: 5,
    niveau: 1,
    question: "Quel document fondateur proclame que « les hommes naissent libres et égaux en droits » ?",
    options: [
      "La Déclaration des droits de l'homme et du citoyen de 1789",
      "Le Code civil de 1804",
      "La Constitution de 1958",
      "Le Traité de Versailles"
    ],
    correctHash: hashAnswer(5, 0),
    explication: "L'article 1er de la Déclaration des droits de l'homme et du citoyen de 1789 proclame ce principe fondamental. Ce texte fait partie du bloc de constitutionnalité français."
  },
  {
    id: 6,
    niveau: 1,
    question: "La République française est-elle un État laïque ?",
    options: [
      "Oui, depuis la loi de 1905",
      "Non, c'est un État catholique",
      "Oui, depuis 1958",
      "Non, c'est un État athée"
    ],
    correctHash: hashAnswer(6, 0),
    explication: "Oui, la France est un État laïque depuis la loi de séparation des Églises et de l'État de 1905. Ce principe est inscrit dans l'article 1er de la Constitution."
  },
  {
    id: 7,
    niveau: 1,
    question: "Que signifie « Fraternité » dans la devise républicaine ?",
    options: [
      "La solidarité et l'entraide entre citoyens",
      "L'obligation d'avoir des frères",
      "Le respect de l'autorité",
      "La hiérarchie sociale"
    ],
    correctHash: hashAnswer(7, 0),
    explication: "La fraternité exprime l'idée de solidarité entre les citoyens, l'entraide et le vivre-ensemble. Elle implique que les citoyens se considèrent comme membres d'une même communauté nationale."
  },
  {
    id: 8,
    niveau: 1,
    question: "Quelle est la valeur qui permet à chacun de penser et d'agir selon sa volonté ?",
    options: [
      "La Liberté",
      "L'Égalité",
      "La Fraternité",
      "La Laïcité"
    ],
    correctHash: hashAnswer(8, 0),
    explication: "La Liberté est le premier terme de la devise républicaine. Elle comprend la liberté d'expression, de conscience, de circulation, d'association, etc. Elle s'exerce dans le respect des lois et des droits d'autrui."
  },
  {
    id: 9,
    niveau: 1,
    question: "En France, la souveraineté appartient à :",
    options: [
      "Au peuple",
      "Au Président de la République",
      "Au Parlement",
      "Au Gouvernement"
    ],
    correctHash: hashAnswer(9, 0),
    explication: "Selon l'article 3 de la Constitution, « la souveraineté nationale appartient au peuple qui l'exerce par ses représentants et par la voie du référendum ». C'est le principe de la démocratie."
  },
  {
    id: 10,
    niveau: 1,
    question: "Quel est le régime politique de la France ?",
    options: [
      "Une République",
      "Une Monarchie",
      "Une Dictature",
      "Un Empire"
    ],
    correctHash: hashAnswer(10, 0),
    explication: "La France est une République, c'est-à-dire un régime politique où le pouvoir est exercé par des représentants élus par le peuple. Depuis 1958, c'est la Ve République."
  }
];

// ==================== NIVEAU 2 : LAÏCITÉ ====================
// Thème: Les symboles constitutionnels
const NIVEAU_2: QuizQuestion[] = [
  {
    id: 11,
    niveau: 2,
    question: "En quelle année a été votée la loi de séparation des Églises et de l'État ?",
    options: [
      "1905",
      "1789",
      "1958",
      "1881"
    ],
    correctHash: hashAnswer(11, 0),
    explication: "La loi du 9 décembre 1905 établit la séparation des Églises et de l'État. Elle met fin au Concordat de 1801 et garantit la liberté de conscience et le libre exercice des cultes."
  },
  {
    id: 12,
    niveau: 2,
    question: "La laïcité interdit-elle de pratiquer sa religion en France ?",
    options: [
      "Non, elle garantit la liberté de culte",
      "Oui, toute religion est interdite",
      "Seulement les religions non chrétiennes",
      "Oui, sauf à domicile"
    ],
    correctHash: hashAnswer(12, 0),
    explication: "Non, la laïcité garantit au contraire la liberté de croire ou de ne pas croire. Elle assure le libre exercice des cultes tout en maintenant la neutralité de l'État."
  },
  {
    id: 13,
    niveau: 2,
    question: "Dans l'espace public, les agents de l'État doivent-ils afficher une neutralité religieuse ?",
    options: [
      "Oui, c'est le principe de neutralité",
      "Non, ils sont libres",
      "Seulement les enseignants",
      "Seulement en présence du public"
    ],
    correctHash: hashAnswer(13, 0),
    explication: "Oui, les agents publics (fonctionnaires, enseignants, policiers...) doivent respecter le principe de neutralité. Ils ne peuvent pas porter de signes religieux ostensibles dans l'exercice de leurs fonctions."
  },
  {
    id: 14,
    niveau: 2,
    question: "La loi de 2004 sur les signes religieux à l'école concerne :",
    options: [
      "Les élèves des écoles publiques",
      "Tous les citoyens",
      "Les étudiants universitaires",
      "Les élèves des écoles privées"
    ],
    correctHash: hashAnswer(14, 0),
    explication: "La loi du 15 mars 2004 interdit le port de signes religieux ostensibles par les élèves dans les écoles, collèges et lycées publics. Elle ne concerne pas les établissements privés ni les universités."
  },
  {
    id: 15,
    niveau: 2,
    question: "Que finance l'État français en matière de religion ?",
    options: [
      "Rien, l'État ne finance pas les cultes",
      "Toutes les religions à parts égales",
      "Uniquement l'Église catholique",
      "Les trois grandes religions monothéistes"
    ],
    correctHash: hashAnswer(15, 0),
    explication: "Depuis 1905, la République « ne reconnaît, ne salarie ni ne subventionne aucun culte ». L'État ne finance pas les cultes mais peut subventionner les associations cultuelles pour l'entretien du patrimoine religieux."
  },
  {
    id: 16,
    niveau: 2,
    question: "Peut-on être athée en France ?",
    options: [
      "Oui, c'est garanti par la liberté de conscience",
      "Non, c'est interdit",
      "Oui, mais c'est mal vu",
      "Seulement en privé"
    ],
    correctHash: hashAnswer(16, 0),
    explication: "Oui, la laïcité garantit la liberté de conscience, ce qui inclut le droit de ne croire en aucune religion. L'athéisme est une conviction philosophique parfaitement légale."
  },
  {
    id: 17,
    niveau: 2,
    question: "Les communes peuvent-elles installer des crèches de Noël dans les bâtiments publics ?",
    options: [
      "Oui, si c'est culturel ou festif, pas religieux",
      "Jamais, c'est strictement interdit",
      "Oui, sans aucune restriction",
      "Seulement dans les églises"
    ],
    correctHash: hashAnswer(17, 0),
    explication: "Les crèches peuvent être installées dans les bâtiments publics si elles présentent un caractère culturel, artistique ou festif, mais pas si elles constituent une revendication religieuse. La jurisprudence est nuancée."
  },
  {
    id: 18,
    niveau: 2,
    question: "La liberté de conscience garantit :",
    options: [
      "Le droit d'avoir ses propres convictions",
      "Le droit de critiquer le gouvernement",
      "Le droit de vote",
      "Le droit de manifester"
    ],
    correctHash: hashAnswer(18, 0),
    explication: "La liberté de conscience permet à chacun d'avoir ses propres convictions (religieuses, philosophiques, politiques) sans être inquiété. C'est un droit fondamental protégé par la Constitution."
  },
  {
    id: 19,
    niveau: 2,
    question: "Un employeur privé peut-il interdire le port de signes religieux ?",
    options: [
      "Oui, sous certaines conditions justifiées",
      "Non, jamais",
      "Oui, sans restriction",
      "Seulement dans les entreprises publiques"
    ],
    correctHash: hashAnswer(19, 0),
    explication: "Oui, sous certaines conditions. L'employeur peut restreindre le port de signes religieux si cela est justifié par la nature de la tâche et proportionné au but recherché (contact avec la clientèle, sécurité...)."
  },
  {
    id: 20,
    niveau: 2,
    question: "Le Concordat de 1801 est-il encore en vigueur quelque part en France ?",
    options: [
      "Oui, en Alsace-Moselle",
      "Non, il a été aboli en 1905",
      "Oui, dans toute la France",
      "Seulement en Corse"
    ],
    correctHash: hashAnswer(20, 0),
    explication: "Oui, en Alsace-Moselle (Bas-Rhin, Haut-Rhin, Moselle). Ces territoires étaient allemands en 1905 et n'ont pas été concernés par la loi de séparation. Le régime concordataire y est maintenu."
  }
];

// ==================== NIVEAU 3 : DROITS FONDAMENTAUX ====================
// Thème: La laïcité - Fondements
const NIVEAU_3: QuizQuestion[] = [
  {
    id: 21,
    niveau: 3,
    question: "Quel texte constitue la base des droits fondamentaux en France ?",
    options: [
      "La Déclaration des droits de l'homme et du citoyen de 1789",
      "La Constitution de 1958",
      "Le Code civil",
      "Le Code pénal"
    ],
    correctHash: hashAnswer(21, 0),
    explication: "La Déclaration des droits de l'homme et du citoyen de 1789 est le texte fondateur. Elle fait partie du « bloc de constitutionnalité » avec le préambule de 1946 et la Charte de l'environnement de 2004."
  },
  {
    id: 22,
    niveau: 3,
    question: "La liberté d'expression en France est-elle absolue ?",
    options: [
      "Non, elle a des limites (injure, diffamation, haine)",
      "Oui, on peut tout dire",
      "Non, on ne peut rien critiquer",
      "Oui, sauf pour la politique"
    ],
    correctHash: hashAnswer(22, 0),
    explication: "Non, la liberté d'expression a des limites : l'injure, la diffamation, l'incitation à la haine, le négationnisme, l'apologie du terrorisme sont interdits. La liberté s'arrête où commence celle d'autrui."
  },
  {
    id: 23,
    niveau: 3,
    question: "Le droit de propriété est considéré comme :",
    options: [
      "Un droit inviolable et sacré",
      "Un privilège réservé aux riches",
      "Un droit secondaire",
      "Un droit temporaire"
    ],
    correctHash: hashAnswer(23, 0),
    explication: "L'article 17 de la DDHC de 1789 qualifie la propriété de droit « inviolable et sacré ». Toutefois, elle peut être limitée pour cause d'utilité publique (expropriation) avec juste indemnisation."
  },
  {
    id: 24,
    niveau: 3,
    question: "Qu'est-ce que la présomption d'innocence ?",
    options: [
      "Être considéré innocent jusqu'à preuve du contraire",
      "Le droit de mentir à la police",
      "L'obligation de prouver son innocence",
      "Le droit de ne pas être arrêté"
    ],
    correctHash: hashAnswer(24, 0),
    explication: "Toute personne accusée est considérée innocente jusqu'à ce que sa culpabilité soit établie par un tribunal. C'est un principe fondamental du droit pénal inscrit dans la DDHC (article 9)."
  },
  {
    id: 25,
    niveau: 3,
    question: "La liberté de réunion permet-elle de manifester sans autorisation ?",
    options: [
      "Non, il faut déclarer la manifestation à la préfecture",
      "Oui, aucune formalité nécessaire",
      "Non, toute manifestation est interdite",
      "Oui, mais seulement le week-end"
    ],
    correctHash: hashAnswer(25, 0),
    explication: "Les manifestations sur la voie publique doivent être déclarées (pas autorisées) à la préfecture au moins 3 jours avant. Une manifestation non déclarée peut être dispersée."
  },
  {
    id: 26,
    niveau: 3,
    question: "Le droit au respect de la vie privée est garanti par :",
    options: [
      "L'article 9 du Code civil et la Constitution",
      "Aucun texte, c'est une tradition",
      "Uniquement la CNIL",
      "Le Code du travail"
    ],
    correctHash: hashAnswer(26, 0),
    explication: "L'article 9 du Code civil protège la vie privée. C'est aussi un droit constitutionnel et un droit garanti par la Convention européenne des droits de l'homme (article 8)."
  },
  {
    id: 27,
    niveau: 3,
    question: "Qu'est-ce que le droit d'asile ?",
    options: [
      "La protection accordée aux personnes persécutées",
      "Le droit de voyager librement",
      "Le droit de travailler en France",
      "Le droit de vote des étrangers"
    ],
    correctHash: hashAnswer(27, 0),
    explication: "Le droit d'asile permet à une personne persécutée dans son pays d'obtenir une protection en France. Il est garanti par la Constitution et les conventions internationales (Convention de Genève)."
  },
  {
    id: 28,
    niveau: 3,
    question: "La discrimination est-elle punie par la loi en France ?",
    options: [
      "Oui, c'est un délit puni par la loi",
      "Non, c'est seulement immoral",
      "Seulement dans le travail",
      "Non, c'est légal"
    ],
    correctHash: hashAnswer(28, 0),
    explication: "Oui, les discriminations fondées sur l'origine, le sexe, la religion, le handicap, l'orientation sexuelle, etc. sont des délits punis par le Code pénal (jusqu'à 3 ans de prison et 45 000€ d'amende)."
  },
  {
    id: 29,
    niveau: 3,
    question: "Le droit de grève en France est :",
    options: [
      "Un droit constitutionnel",
      "Interdit",
      "Réservé au secteur privé",
      "Soumis à autorisation"
    ],
    correctHash: hashAnswer(29, 0),
    explication: "Le droit de grève est un droit constitutionnel (préambule de 1946). Il peut être exercé par tous les salariés, avec quelques restrictions pour certains services publics essentiels."
  },
  {
    id: 30,
    niveau: 3,
    question: "Quel organisme défend les droits et libertés en France ?",
    options: [
      "Le Défenseur des droits",
      "Le Président de la République",
      "Le Premier ministre",
      "Le maire"
    ],
    correctHash: hashAnswer(30, 0),
    explication: "Le Défenseur des droits est une autorité indépendante créée en 2011. Il peut être saisi gratuitement par toute personne s'estimant victime de discrimination ou de dysfonctionnement des services publics."
  }
];

// ==================== NIVEAU 4 : LA LAÏCITÉ - APPLICATION ====================
const NIVEAU_4: QuizQuestion[] = [
  {
    id: 31,
    niveau: 4,
    question: "Un agent public peut-il porter un signe religieux dans l'exercice de ses fonctions ?",
    options: [
      "Non, la neutralité est obligatoire",
      "Oui, c'est sa liberté",
      "Seulement les signes discrets",
      "Cela dépend du service"
    ],
    correctHash: hashAnswer(31, 0),
    explication: "Les agents publics doivent respecter une stricte neutralité religieuse dans l'exercice de leurs fonctions. Ils ne peuvent porter aucun signe religieux ostensible."
  },
  {
    id: 32,
    niveau: 4,
    question: "Un usager du service public peut-il exprimer ses convictions religieuses ?",
    options: [
      "Oui, dans le respect de l'ordre public",
      "Non, c'est totalement interdit",
      "Seulement à l'extérieur du bâtiment",
      "Uniquement par écrit"
    ],
    correctHash: hashAnswer(32, 0),
    explication: "Les usagers des services publics conservent leur liberté d'expression religieuse, dans le respect de l'ordre public et du bon fonctionnement du service."
  },
  {
    id: 33,
    niveau: 4,
    question: "Que permet la Charte de la laïcité d'interdire ?",
    options: [
      "Se soustraire aux règles au nom de la religion",
      "De prier chez soi",
      "D'être croyant",
      "De parler de religion"
    ],
    correctHash: hashAnswer(33, 0),
    explication: "La Charte de la laïcité rappelle qu'aucun élève ne peut invoquer une conviction religieuse pour se soustraire aux règles de l'école ou contester un enseignement."
  },
  {
    id: 34,
    niveau: 4,
    question: "Une entreprise privée peut-elle restreindre l'expression religieuse ?",
    options: [
      "Oui, pour des raisons d'hygiène ou de sécurité",
      "Non, jamais",
      "Seulement les grandes entreprises",
      "Uniquement avec l'accord des syndicats"
    ],
    correctHash: hashAnswer(34, 0),
    explication: "Une entreprise privée peut imposer des restrictions à l'expression religieuse si elles sont justifiées par des impératifs d'hygiène, de sécurité ou de contact avec la clientèle."
  },
  {
    id: 35,
    niveau: 4,
    question: "Un élève peut-il refuser certains enseignements pour des raisons religieuses ?",
    options: [
      "Non, c'est interdit",
      "Oui, avec l'accord des parents",
      "Seulement pour le sport",
      "Cela dépend de la religion"
    ],
    correctHash: hashAnswer(35, 0),
    explication: "À l'école publique, aucun élève ne peut refuser un enseignement ou une activité au nom de ses convictions religieuses. Tous les enseignements sont obligatoires."
  },
  {
    id: 36,
    niveau: 4,
    question: "Quel est le rôle de l'État envers les lieux de culte ?",
    options: [
      "Les protéger et lutter contre les actes antireligieux",
      "Les financer intégralement",
      "Les interdire",
      "Les contrôler quotidiennement"
    ],
    correctHash: hashAnswer(36, 0),
    explication: "L'État garantit la protection des lieux de culte et lutte contre les actes antireligieux (profanations, dégradations) tout en maintenant la séparation avec les Églises."
  },
  {
    id: 37,
    niveau: 4,
    question: "La liberté religieuse est-elle garantie en prison ?",
    options: [
      "Oui, elle est garantie par l'État",
      "Non, les détenus n'ont pas ce droit",
      "Seulement pour certaines religions",
      "Uniquement le dimanche"
    ],
    correctHash: hashAnswer(37, 0),
    explication: "Les personnes détenues conservent leur liberté de religion. L'État doit permettre l'exercice du culte en prison (aumôniers, repas adaptés, etc.)."
  },
  {
    id: 38,
    niveau: 4,
    question: "Qu'est-ce que le prosélytisme abusif ?",
    options: [
      "Une pression forte pour forcer quelqu'un à croire",
      "Parler de sa religion",
      "Prier en public",
      "Porter un signe religieux"
    ],
    correctHash: hashAnswer(38, 0),
    explication: "Le prosélytisme abusif consiste à exercer des pressions répétées ou des manipulations pour convertir une personne. Il peut être sanctionné pénalement."
  },
  {
    id: 39,
    niveau: 4,
    question: "Pourquoi existe-t-il des règles sur la religion à l'école ?",
    options: [
      "Pour protéger la liberté des enfants",
      "Pour interdire toutes les religions",
      "Pour favoriser l'athéisme",
      "Par tradition historique"
    ],
    correctHash: hashAnswer(39, 0),
    explication: "Les règles de laïcité à l'école visent à protéger les élèves de toute pression religieuse et à garantir leur liberté de conscience en construction."
  },
  {
    id: 40,
    niveau: 4,
    question: "Peut-on être forcé à pratiquer une religion en France ?",
    options: [
      "Non, c'est puni par la loi",
      "Oui, par ses parents",
      "Seulement si c'est une tradition",
      "Cela dépend de la religion"
    ],
    correctHash: hashAnswer(40, 0),
    explication: "Nul ne peut être contraint à pratiquer une religion ou à y renoncer. Forcer quelqu'un est une atteinte à la liberté de conscience, punie par la loi."
  }
];

// ==================== NIVEAU 5 : LIBERTÉ ET SES FORMES ====================
const NIVEAU_5: QuizQuestion[] = [
  {
    id: 41,
    niveau: 5,
    question: "Qu'est-ce que la liberté de pensée ?",
    options: [
      "Le droit de penser ce qu'on veut",
      "Le droit de dire tout haut ce qu'on pense",
      "Le droit de critiquer le gouvernement",
      "Le droit de mentir"
    ],
    correctHash: hashAnswer(41, 0),
    explication: "La liberté de pensée est le droit fondamental de chacun d'avoir ses propres opinions, convictions et croyances sans aucune contrainte extérieure."
  },
  {
    id: 42,
    niveau: 5,
    question: "Qu'est-ce que la liberté d'expression ?",
    options: [
      "Le droit d'exprimer ses opinions dans le cadre de la loi",
      "Le droit de tout dire sans limite",
      "Le droit de mentir",
      "Le droit de diffamer"
    ],
    correctHash: hashAnswer(42, 0),
    explication: "La liberté d'expression permet d'exprimer ses opinions par tous moyens (parole, écrit, image), dans les limites fixées par la loi (pas de diffamation, injure, incitation à la haine)."
  },
  {
    id: 43,
    niveau: 5,
    question: "Qu'est-ce que la liberté de réunion ?",
    options: [
      "Le droit de se rassembler pacifiquement",
      "Le droit de faire des réunions secrètes",
      "Le droit de bloquer les rues",
      "Le droit de créer un parti politique"
    ],
    correctHash: hashAnswer(43, 0),
    explication: "La liberté de réunion permet aux citoyens de se rassembler pacifiquement pour échanger des idées, manifester ou participer à des événements collectifs."
  },
  {
    id: 44,
    niveau: 5,
    question: "Qu'est-ce que la liberté d'association ?",
    options: [
      "Le droit de créer ou d'adhérer à une association",
      "Le droit de créer une entreprise",
      "Le droit de former un syndicat",
      "Le droit de se marier"
    ],
    correctHash: hashAnswer(44, 0),
    explication: "La liberté d'association, reconnue par la loi de 1901, permet à toute personne de créer une association ou d'y adhérer librement."
  },
  {
    id: 45,
    niveau: 5,
    question: "La polygamie est-elle autorisée en France ?",
    options: [
      "Non, elle est interdite",
      "Oui, avec l'accord des épouses",
      "Seulement pour les étrangers",
      "Cela dépend de la religion"
    ],
    correctHash: hashAnswer(45, 0),
    explication: "La polygamie est interdite en France. Le mariage ne peut unir que deux personnes. La bigamie est un délit pénal."
  },
  {
    id: 46,
    niveau: 5,
    question: "Qu'est-ce que la liberté de circulation ?",
    options: [
      "Le droit de se déplacer librement sur le territoire",
      "Le droit de conduire sans permis",
      "Le droit de voyager gratuitement",
      "Le droit d'entrer dans tous les pays"
    ],
    correctHash: hashAnswer(46, 0),
    explication: "La liberté de circulation permet à toute personne de se déplacer librement sur le territoire national et de choisir son lieu de résidence."
  },
  {
    id: 47,
    niveau: 5,
    question: "Qu'est-ce que le droit syndical ?",
    options: [
      "Le droit de créer ou d'adhérer à un syndicat",
      "Le droit de faire grève",
      "Le droit d'être élu",
      "Le droit de manifester"
    ],
    correctHash: hashAnswer(47, 0),
    explication: "Le droit syndical, garanti par la Constitution, permet à tout travailleur de créer un syndicat ou d'y adhérer pour défendre ses intérêts professionnels."
  },
  {
    id: 48,
    niveau: 5,
    question: "Peut-on changer de religion en France ?",
    options: [
      "Oui, c'est un droit fondamental",
      "Non, c'est interdit",
      "Seulement une fois dans sa vie",
      "Avec l'autorisation de l'État"
    ],
    correctHash: hashAnswer(48, 0),
    explication: "La liberté de conscience inclut le droit de changer de religion ou de renoncer à toute religion. C'est un droit fondamental garanti par la Constitution."
  },
  {
    id: 49,
    niveau: 5,
    question: "Qu'est-ce que la liberté de mariage ?",
    options: [
      "Le droit de choisir librement son conjoint",
      "Le droit de se marier plusieurs fois",
      "Le droit de se marier à tout âge",
      "Le droit de divorcer"
    ],
    correctHash: hashAnswer(49, 0),
    explication: "La liberté de mariage permet à chaque personne majeure de choisir librement son conjoint, sans contrainte familiale ou autre. Le mariage forcé est un délit."
  },
  {
    id: 50,
    niveau: 5,
    question: "Le blasphème est-il un délit en France ?",
    options: [
      "Non, ce n'est pas un délit",
      "Oui, c'est puni par la loi",
      "Seulement pour certaines religions",
      "Cela dépend du contexte"
    ],
    correctHash: hashAnswer(50, 0),
    explication: "Le blasphème n'est pas un délit en France depuis 1881. La critique des religions est protégée par la liberté d'expression, tant qu'elle ne vise pas les croyants eux-mêmes."
  }
];

// ==================== NIVEAU 6 : ÉGALITÉ DES DROITS ====================
const NIVEAU_6: QuizQuestion[] = [
  {
    id: 51,
    niveau: 6,
    question: "Que signifie l'égalité devant la loi ?",
    options: [
      "La loi s'applique de la même façon à tous",
      "Tout le monde a le même salaire",
      "Tout le monde a les mêmes diplômes",
      "Tout le monde vote de la même façon"
    ],
    correctHash: hashAnswer(51, 0),
    explication: "L'égalité devant la loi signifie que les mêmes règles s'appliquent à tous les citoyens, sans distinction de naissance, d'origine ou de condition sociale."
  },
  {
    id: 52,
    niveau: 6,
    question: "L'égalité homme-femme est-elle dans la Constitution ?",
    options: [
      "Oui, elle est inscrite dans la Constitution",
      "Non, c'est seulement une loi",
      "Seulement pour le travail",
      "Cela n'existe pas en droit français"
    ],
    correctHash: hashAnswer(52, 0),
    explication: "L'égalité entre les femmes et les hommes est un principe constitutionnel. La loi garantit à la femme des droits égaux à ceux de l'homme dans tous les domaines."
  },
  {
    id: 53,
    niveau: 6,
    question: "Qu'est-ce qu'une discrimination ?",
    options: [
      "Un traitement inégal fondé sur des critères interdits",
      "Une opinion différente",
      "Un désaccord politique",
      "Une préférence personnelle"
    ],
    correctHash: hashAnswer(53, 0),
    explication: "La discrimination est le fait de traiter différemment une personne en raison de critères interdits par la loi (origine, sexe, religion, handicap, etc.)."
  },
  {
    id: 54,
    niveau: 6,
    question: "Le racisme est-il puni par la loi ?",
    options: [
      "Oui, c'est une discrimination punie par la loi",
      "Non, c'est une opinion",
      "Seulement s'il y a violence",
      "Cela dépend du contexte"
    ],
    correctHash: hashAnswer(54, 0),
    explication: "Le racisme sous toutes ses formes (propos, actes, discriminations) est interdit et puni par la loi. Les peines peuvent aller jusqu'à 3 ans de prison."
  },
  {
    id: 55,
    niveau: 6,
    question: "Qu'est-ce que l'antisémitisme ?",
    options: [
      "La haine envers les personnes juives",
      "Une religion",
      "Un parti politique",
      "Une philosophie"
    ],
    correctHash: hashAnswer(55, 0),
    explication: "L'antisémitisme désigne la haine, les préjugés ou les discriminations envers les personnes juives. C'est une forme de racisme punie par la loi."
  },
  {
    id: 56,
    niveau: 6,
    question: "Les discriminations envers les personnes LGBT sont-elles punies ?",
    options: [
      "Oui, elles sont punies par la loi",
      "Non, c'est une opinion",
      "Seulement dans le travail",
      "Cela dépend des régions"
    ],
    correctHash: hashAnswer(56, 0),
    explication: "Les discriminations fondées sur l'orientation sexuelle ou l'identité de genre sont interdites et punies par la loi, comme toutes les autres discriminations."
  },
  {
    id: 57,
    niveau: 6,
    question: "Que garantit l'égalité des droits ?",
    options: [
      "Les mêmes droits fondamentaux pour tous",
      "Le même salaire pour tous",
      "Les mêmes opinions pour tous",
      "Le même niveau de vie pour tous"
    ],
    correctHash: hashAnswer(57, 0),
    explication: "L'égalité des droits garantit que tous les citoyens jouissent des mêmes droits fondamentaux (vote, éducation, justice, etc.) sans discrimination."
  },
  {
    id: 58,
    niveau: 6,
    question: "Peut-on refuser un logement à quelqu'un en raison de son origine ?",
    options: [
      "Non, c'est une discrimination interdite",
      "Oui, le propriétaire est libre",
      "Seulement si c'est justifié",
      "Cela dépend du quartier"
    ],
    correctHash: hashAnswer(58, 0),
    explication: "Refuser un logement en raison de l'origine, de la religion ou de toute autre critère discriminatoire est interdit et puni par la loi."
  },
  {
    id: 59,
    niveau: 6,
    question: "Le principe 'à travail égal, salaire égal' est-il inscrit dans la loi ?",
    options: [
      "Oui, c'est un principe inscrit dans la loi",
      "Non, c'est juste une recommandation",
      "Seulement dans le public",
      "Cela dépend des conventions"
    ],
    correctHash: hashAnswer(59, 0),
    explication: "Le principe d'égalité de rémunération entre hommes et femmes pour un travail de valeur égale est inscrit dans le Code du travail depuis 1972."
  },
  {
    id: 60,
    niveau: 6,
    question: "Quelle institution lutte contre les discriminations ?",
    options: [
      "Le Défenseur des droits",
      "Le Président de la République",
      "Le maire",
      "Le préfet"
    ],
    correctHash: hashAnswer(60, 0),
    explication: "Le Défenseur des droits est l'institution indépendante chargée de lutter contre les discriminations et de défendre les droits des citoyens."
  }
];

// ==================== NIVEAU 7 : FRATERNITÉ ET SOLIDARITÉ ====================
const NIVEAU_7: QuizQuestion[] = [
  {
    id: 61,
    niveau: 7,
    question: "Que signifie la fraternité dans la devise républicaine ?",
    options: [
      "La capacité à voir en autrui un semblable, malgré les différences",
      "L'obligation d'avoir des frères et sœurs",
      "Un lien de sang entre citoyens",
      "Une amitié obligatoire"
    ],
    correctHash: hashAnswer(61, 0),
    explication: "La fraternité républicaine est le sentiment qui unit les citoyens au-delà de leurs différences, impliquant respect mutuel et solidarité."
  },
  {
    id: 62,
    niveau: 7,
    question: "Qu'est-ce que le principe de solidarité nationale ?",
    options: [
      "La Nation assure une protection aux citoyens",
      "Chacun doit se débrouiller seul",
      "L'État aide seulement les riches",
      "La solidarité est volontaire"
    ],
    correctHash: hashAnswer(62, 0),
    explication: "Le principe de solidarité nationale signifie que la collectivité garantit à tous une protection contre les risques de la vie (maladie, chômage, vieillesse)."
  },
  {
    id: 63,
    niveau: 7,
    question: "Pourquoi payer ses impôts est-il un acte de solidarité ?",
    options: [
      "Cela finance les services publics pour tous",
      "C'est obligatoire donc ce n'est pas solidaire",
      "Seuls les riches paient des impôts",
      "Les impôts servent seulement à l'État"
    ],
    correctHash: hashAnswer(63, 0),
    explication: "Les impôts financent les services publics (santé, éducation, sécurité) accessibles à tous, y compris ceux qui ne peuvent pas payer. C'est une solidarité collective."
  },
  {
    id: 64,
    niveau: 7,
    question: "Qu'est-ce que la solidarité intergénérationnelle ?",
    options: [
      "Le soutien entre différentes générations",
      "L'aide entre personnes du même âge",
      "La solidarité entre pays",
      "L'entraide entre voisins"
    ],
    correctHash: hashAnswer(64, 0),
    explication: "La solidarité intergénérationnelle est le lien de soutien mutuel entre les générations : les actifs financent les retraites, les aînés transmettent leur expérience."
  },
  {
    id: 65,
    niveau: 7,
    question: "Le système des retraites est un exemple de quelle solidarité ?",
    options: [
      "Solidarité intergénérationnelle",
      "Solidarité internationale",
      "Solidarité familiale",
      "Solidarité professionnelle"
    ],
    correctHash: hashAnswer(65, 0),
    explication: "Le système de retraite par répartition est fondé sur la solidarité intergénérationnelle : les actifs d'aujourd'hui financent les pensions des retraités actuels."
  },
  {
    id: 66,
    niveau: 7,
    question: "En cas de danger pour la Nation, que doit faire chaque citoyen ?",
    options: [
      "Défendre la Nation",
      "Fuir le pays",
      "Rester neutre",
      "Attendre les ordres"
    ],
    correctHash: hashAnswer(66, 0),
    explication: "La défense de la Nation est un devoir civique. En cas de menace grave, les citoyens peuvent être appelés à contribuer à la défense nationale."
  },
  {
    id: 67,
    niveau: 7,
    question: "La fraternité républicaine est-elle basée sur l'origine ethnique ?",
    options: [
      "Non, c'est une fraternité civique pour tous",
      "Oui, entre personnes de même origine",
      "Seulement entre Français de naissance",
      "Cela dépend des régions"
    ],
    correctHash: hashAnswer(67, 0),
    explication: "La fraternité républicaine est civique et universelle. Elle unit tous les citoyens indépendamment de leur origine, religion ou condition sociale."
  },
  {
    id: 68,
    niveau: 7,
    question: "Comment la solidarité collective se manifeste-t-elle ?",
    options: [
      "Par la protection sociale (maladie, allocations, etc.)",
      "Par des dons privés uniquement",
      "Par la charité religieuse",
      "Par l'entraide familiale seulement"
    ],
    correctHash: hashAnswer(68, 0),
    explication: "La solidarité collective s'exprime à travers la Sécurité sociale qui protège tous les citoyens contre les risques : maladie, chômage, vieillesse, handicap."
  },
  {
    id: 69,
    niveau: 7,
    question: "Qu'est-ce que les cotisations sociales financent ?",
    options: [
      "La protection sociale (maladie, retraites, chômage)",
      "Les salaires des ministres",
      "Les guerres",
      "Les entreprises privées"
    ],
    correctHash: hashAnswer(69, 0),
    explication: "Les cotisations sociales prélevées sur les salaires financent la Sécurité sociale : assurance maladie, retraites, allocations familiales, assurance chômage."
  },
  {
    id: 70,
    niveau: 7,
    question: "La fraternité implique-t-elle de respecter les différences ?",
    options: [
      "Oui, respecter autrui malgré les différences",
      "Non, tout le monde doit être identique",
      "Seulement les différences religieuses",
      "Cela dépend des différences"
    ],
    correctHash: hashAnswer(70, 0),
    explication: "La fraternité républicaine implique le respect des différences. Elle reconnaît la diversité tout en unissant les citoyens autour de valeurs communes."
  }
];

// ==================== NIVEAU 8 : LANGUE FRANÇAISE ====================
const NIVEAU_8: QuizQuestion[] = [
  {
    id: 71,
    niveau: 8,
    question: "Quel article de la Constitution affirme que le français est la langue de la République ?",
    options: [
      "Article 2",
      "Article 1",
      "Article 5",
      "Article 10"
    ],
    correctHash: hashAnswer(71, 0),
    explication: "L'article 2 de la Constitution de 1958 dispose que « La langue de la République est le français ». C'est un élément fondamental de l'identité républicaine."
  },
  {
    id: 72,
    niveau: 8,
    question: "Le français est-il la langue officielle de la France ?",
    options: [
      "Oui, c'est inscrit dans la Constitution",
      "Non, il n'y a pas de langue officielle",
      "Seulement pour l'administration",
      "C'est une tradition non écrite"
    ],
    correctHash: hashAnswer(72, 0),
    explication: "Le français est la langue officielle de la République française, inscrite dans la Constitution depuis 1992 (révision constitutionnelle)."
  },
  {
    id: 73,
    niveau: 8,
    question: "Combien de personnes parlent français dans le monde environ ?",
    options: [
      "Environ 321 millions",
      "Environ 100 millions",
      "Environ 50 millions",
      "Environ 500 millions"
    ],
    correctHash: hashAnswer(73, 0),
    explication: "Le français est parlé par environ 321 millions de personnes dans le monde, ce qui en fait une des langues les plus parlées au monde."
  },
  {
    id: 74,
    niveau: 8,
    question: "Quel est le rang du français parmi les langues mondiales ?",
    options: [
      "5e langue mondiale",
      "2e langue mondiale",
      "10e langue mondiale",
      "1re langue mondiale"
    ],
    correctHash: hashAnswer(74, 0),
    explication: "Le français est la 5e langue la plus parlée au monde, après l'anglais, le mandarin, l'hindi et l'espagnol."
  },
  {
    id: 75,
    niveau: 8,
    question: "Qu'est-ce que l'Organisation internationale de la Francophonie (OIF) ?",
    options: [
      "Une organisation promouvant la langue française dans le monde",
      "Une école de langues",
      "Un ministère français",
      "Une entreprise privée"
    ],
    correctHash: hashAnswer(75, 0),
    explication: "L'OIF regroupe 88 États et gouvernements ayant le français en partage. Elle promeut la langue française et la diversité culturelle."
  },
  {
    id: 76,
    niveau: 8,
    question: "La maîtrise du français est-elle importante pour l'intégration ?",
    options: [
      "Oui, c'est essentiel pour l'intégration",
      "Non, ce n'est pas nécessaire",
      "Seulement pour le travail",
      "Cela dépend des régions"
    ],
    correctHash: hashAnswer(76, 0),
    explication: "La maîtrise du français est essentielle pour s'intégrer en France : accès à l'emploi, aux services publics, participation citoyenne et vie sociale."
  },
  {
    id: 77,
    niveau: 8,
    question: "Les étrangers ont-ils droit à une formation linguistique ?",
    options: [
      "Oui, c'est un droit pour faciliter l'intégration",
      "Non, ils doivent se débrouiller",
      "Seulement les réfugiés",
      "Seulement les Européens"
    ],
    correctHash: hashAnswer(77, 0),
    explication: "Les étrangers souhaitant s'installer en France ont accès à des formations linguistiques gratuites dans le cadre du Contrat d'Intégration Républicaine (CIR)."
  },
  {
    id: 78,
    niveau: 8,
    question: "Dans combien de pays le français est-il langue officielle ?",
    options: [
      "29 pays",
      "10 pays",
      "50 pays",
      "5 pays"
    ],
    correctHash: hashAnswer(78, 0),
    explication: "Le français est langue officielle dans 29 pays, principalement en Afrique, mais aussi en Europe (Belgique, Suisse, Luxembourg), en Amérique et en Océanie."
  },
  {
    id: 79,
    niveau: 8,
    question: "Pourquoi le français est-il important dans l'administration ?",
    options: [
      "C'est la langue des documents officiels et des lois",
      "C'est une tradition sans importance légale",
      "Les autres langues sont acceptées",
      "Seulement pour les tribunaux"
    ],
    correctHash: hashAnswer(79, 0),
    explication: "Le français est la langue de l'administration, des lois et de la justice. Tous les documents officiels doivent être rédigés en français."
  },
  {
    id: 80,
    niveau: 8,
    question: "Les langues régionales sont-elles reconnues en France ?",
    options: [
      "Oui, comme patrimoine, mais le français reste la langue officielle",
      "Non, elles sont interdites",
      "Elles remplacent le français dans certaines régions",
      "Seulement l'alsacien et le breton"
    ],
    correctHash: hashAnswer(80, 0),
    explication: "Les langues régionales (breton, occitan, basque, etc.) sont reconnues comme patrimoine de la France, mais le français reste la seule langue officielle."
  }
];

// ==================== NIVEAU 9 : LUTTE CONTRE LES DISCRIMINATIONS ====================
const NIVEAU_9: QuizQuestion[] = [
  {
    id: 81,
    niveau: 9,
    question: "Combien de critères de discrimination sont interdits par la loi ?",
    options: [
      "Plus de 25 critères",
      "5 critères",
      "10 critères",
      "3 critères"
    ],
    correctHash: hashAnswer(81, 0),
    explication: "La loi interdit plus de 25 critères de discrimination : origine, sexe, âge, handicap, orientation sexuelle, religion, opinions politiques, apparence physique, etc."
  },
  {
    id: 82,
    niveau: 9,
    question: "Qu'est-ce que la discrimination à l'embauche ?",
    options: [
      "Refuser un emploi pour des critères interdits",
      "Choisir le meilleur candidat",
      "Demander un CV",
      "Faire passer un entretien"
    ],
    correctHash: hashAnswer(82, 0),
    explication: "La discrimination à l'embauche consiste à refuser un candidat en raison de critères interdits (origine, sexe, âge, etc.) plutôt que ses compétences."
  },
  {
    id: 83,
    niveau: 9,
    question: "L'incitation à la haine raciale est-elle un délit ?",
    options: [
      "Oui, c'est un délit puni par la loi",
      "Non, c'est une opinion",
      "Seulement si c'est violent",
      "Cela dépend du contexte"
    ],
    correctHash: hashAnswer(83, 0),
    explication: "L'incitation à la haine raciale est un délit puni d'un an d'emprisonnement et 45 000 € d'amende. La provocation à la discrimination est également punie."
  },
  {
    id: 84,
    niveau: 9,
    question: "Qui peut saisir le Défenseur des droits ?",
    options: [
      "Toute personne victime ou témoin de discrimination",
      "Seulement les citoyens français",
      "Seulement les victimes directes",
      "Seulement par avocat"
    ],
    correctHash: hashAnswer(84, 0),
    explication: "Le Défenseur des droits peut être saisi gratuitement par toute personne (victime ou témoin) qui s'estime discriminée ou constate un dysfonctionnement."
  },
  {
    id: 85,
    niveau: 9,
    question: "Le harcèlement moral est-il considéré comme une discrimination ?",
    options: [
      "Oui, c'est interdit et puni par la loi",
      "Non, c'est différent",
      "Seulement au travail",
      "Cela dépend de la gravité"
    ],
    correctHash: hashAnswer(85, 0),
    explication: "Le harcèlement moral, qui dégrade les conditions de travail ou porte atteinte à la dignité, est interdit et puni par la loi (2 ans de prison, 30 000 € d'amende)."
  },
  {
    id: 86,
    niveau: 9,
    question: "La discrimination fondée sur le handicap est-elle interdite ?",
    options: [
      "Oui, c'est interdit par la loi",
      "Non, les entreprises sont libres",
      "Seulement dans le public",
      "Cela dépend du handicap"
    ],
    correctHash: hashAnswer(86, 0),
    explication: "La discrimination fondée sur le handicap est interdite dans tous les domaines (emploi, logement, services). Les entreprises doivent favoriser l'emploi des personnes handicapées."
  },
  {
    id: 87,
    niveau: 9,
    question: "Qu'est-ce que le 'testing' anti-discrimination ?",
    options: [
      "Une méthode pour détecter les discriminations",
      "Un examen médical",
      "Un test de personnalité",
      "Une épreuve sportive"
    ],
    correctHash: hashAnswer(87, 0),
    explication: "Le testing consiste à envoyer des candidatures similaires avec des profils différents (origine, âge, etc.) pour détecter des pratiques discriminatoires."
  },
  {
    id: 88,
    niveau: 9,
    question: "Les propos homophobes sont-ils punis par la loi ?",
    options: [
      "Oui, c'est puni par la loi",
      "Non, c'est une opinion",
      "Seulement en public",
      "Cela dépend du contexte"
    ],
    correctHash: hashAnswer(88, 0),
    explication: "Les injures et diffamations homophobes sont des délits punis par la loi. L'incitation à la haine en raison de l'orientation sexuelle est également punie."
  },
  {
    id: 89,
    niveau: 9,
    question: "Peut-on refuser de louer à une famille avec enfants ?",
    options: [
      "Non, c'est une discrimination interdite",
      "Oui, le propriétaire est libre",
      "Seulement pour les petits logements",
      "Cela dépend du nombre d'enfants"
    ],
    correctHash: hashAnswer(89, 0),
    explication: "Refuser de louer un logement à une famille en raison de la présence d'enfants est une discrimination interdite, sauf si le logement est inadapté (surface minimale)."
  },
  {
    id: 90,
    niveau: 9,
    question: "Quelle est la peine maximale pour discrimination ?",
    options: [
      "Jusqu'à 3 ans de prison et 45 000 € d'amende",
      "Une simple amende",
      "6 mois de prison",
      "Aucune peine pénale"
    ],
    correctHash: hashAnswer(90, 0),
    explication: "La discrimination est punie de 3 ans d'emprisonnement et 45 000 € d'amende. Les peines sont aggravées si l'auteur est dépositaire de l'autorité publique."
  }
];

// ==================== NIVEAU 10 : MAÎTRE DES VALEURS (SYNTHÈSE) ====================
const NIVEAU_10: QuizQuestion[] = [
  {
    id: 91,
    niveau: 10,
    question: "Quelle est la devise de la République française ?",
    options: [
      "Liberté, Égalité, Fraternité",
      "Unité, Force, Progrès",
      "Travail, Famille, Patrie",
      "Honneur, Patrie, Devoir"
    ],
    correctHash: hashAnswer(91, 0),
    explication: "La devise « Liberté, Égalité, Fraternité » est inscrite dans l'article 2 de la Constitution. Elle résume les valeurs fondamentales de la République."
  },
  {
    id: 92,
    niveau: 10,
    question: "Selon l'article 1er, la République française est :",
    options: [
      "Indivisible, laïque, démocratique et sociale",
      "Fédérale, laïque et démocratique",
      "Indivisible et monarchique",
      "Divisible et religieuse"
    ],
    correctHash: hashAnswer(92, 0),
    explication: "L'article 1er de la Constitution définit la France comme « une République indivisible, laïque, démocratique et sociale »."
  },
  {
    id: 93,
    niveau: 10,
    question: "En quelle année a été votée la loi de séparation des Églises et de l'État ?",
    options: [
      "1905",
      "1789",
      "1958",
      "1848"
    ],
    correctHash: hashAnswer(93, 0),
    explication: "La loi de séparation des Églises et de l'État a été votée le 9 décembre 1905. Elle fonde la laïcité française."
  },
  {
    id: 94,
    niveau: 10,
    question: "Que signifie le principe d'indivisibilité de la République ?",
    options: [
      "La France forme un tout unique avec les mêmes lois partout",
      "La France peut être divisée en régions indépendantes",
      "Chaque région a ses propres lois",
      "Le Président ne peut être destitué"
    ],
    correctHash: hashAnswer(94, 0),
    explication: "L'indivisibilité signifie que la France forme une seule Nation, avec une seule Constitution et des lois qui s'appliquent uniformément sur tout le territoire."
  },
  {
    id: 95,
    niveau: 10,
    question: "À qui appartient la souveraineté nationale ?",
    options: [
      "Au peuple français",
      "Au Président de la République",
      "Au Parlement",
      "À l'Union européenne"
    ],
    correctHash: hashAnswer(95, 0),
    explication: "L'article 3 de la Constitution dispose que « La souveraineté nationale appartient au peuple qui l'exerce par ses représentants et par la voie du référendum »."
  },
  {
    id: 96,
    niveau: 10,
    question: "Quel texte de 1789 proclame les droits fondamentaux ?",
    options: [
      "La Déclaration des droits de l'homme et du citoyen",
      "La Constitution de 1789",
      "Le Code civil",
      "Le serment du Jeu de Paume"
    ],
    correctHash: hashAnswer(96, 0),
    explication: "La Déclaration des droits de l'homme et du citoyen de 1789 est le texte fondateur des droits fondamentaux en France. Elle fait partie du bloc de constitutionnalité."
  },
  {
    id: 97,
    niveau: 10,
    question: "Que signifie la neutralité de l'État ?",
    options: [
      "L'État ne favorise aucune religion",
      "L'État interdit les religions",
      "L'État soutient toutes les religions également",
      "L'État impose l'athéisme"
    ],
    correctHash: hashAnswer(97, 0),
    explication: "La neutralité signifie que l'État ne reconnaît, ne salarie ni ne subventionne aucun culte. Il garantit la liberté religieuse sans favoriser aucune religion."
  },
  {
    id: 98,
    niveau: 10,
    question: "Que garantit l'article 1er sur l'égalité ?",
    options: [
      "L'égalité sans distinction d'origine, de race ou de religion",
      "L'égalité des salaires",
      "L'égalité des diplômes",
      "L'égalité des opinions"
    ],
    correctHash: hashAnswer(98, 0),
    explication: "L'article 1er garantit l'égalité devant la loi de tous les citoyens « sans distinction d'origine, de race ou de religion »."
  },
  {
    id: 99,
    niveau: 10,
    question: "Quel est le rôle du Défenseur des droits ?",
    options: [
      "Défendre les droits et lutter contre les discriminations",
      "Juger les criminels",
      "Voter les lois",
      "Nommer les ministres"
    ],
    correctHash: hashAnswer(99, 0),
    explication: "Le Défenseur des droits est une autorité indépendante qui défend les droits des citoyens et lutte contre les discriminations."
  },
  {
    id: 100,
    niveau: 10,
    question: "Pourquoi les valeurs républicaines sont-elles importantes ?",
    options: [
      "Elles permettent de vivre ensemble dans le respect mutuel",
      "Elles sont obligatoires mais inutiles",
      "Elles concernent seulement les politiciens",
      "Elles sont dépassées aujourd'hui"
    ],
    correctHash: hashAnswer(100, 0),
    explication: "Les valeurs républicaines (liberté, égalité, fraternité, laïcité) sont le socle du vivre-ensemble. Elles garantissent les droits de chacun et la cohésion sociale."
  }
];

// ==================== EXPORT ====================

// Toutes les questions groupées par niveau (1 à 10)
export const QUESTIONS_PRINCIPES_VALEURS: Record<number, QuizQuestion[]> = {
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
export function getQuestionsForLevel(niveau: number): QuizQuestion[] {
  return QUESTIONS_PRINCIPES_VALEURS[niveau] || [];
}

// Fonction de vérification (identique à examen blanc)
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

// Catégorie ID pour "Principes et valeurs de la République"
export const CATEGORIE_PRINCIPES_VALEURS_ID = 'f4ade348-dbe7-4fc3-bd11-02889a31b9fd';

// Vérifier si un niveau est disponible en mode local (hash)
export function isLocalLevel(niveau: number): boolean {
  return niveau >= 1 && niveau <= 10;
}

// Nombre max de niveaux disponibles en local
export const MAX_LOCAL_LEVEL = 10;
