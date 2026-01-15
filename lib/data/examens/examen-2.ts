// ==================== EXAMEN BLANC #2 ====================
// Répartition officielle :
// 1. Principes et valeurs (11 questions)
// 2. Système institutionnel (6 questions)
// 3. Droits et devoirs (11 questions)
// 4. Histoire/géographie/culture (8 questions)
// 5. Vivre en France (4 questions)
// ==========================================================================
// VERSION NON ENCODÉE - Questions difficiles niveau examen civique
// ==========================================================================

import { ExamenBlanc, Question, hashAnswer } from './types';

const EXAM_NUMBER = 2;

const questions: Question[] = [
  // ==================== 1. PRINCIPES ET VALEURS (11 questions) ====================
  
  {
    id: 1,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Symboles républicains",
    question: "Quel animal symbolise traditionnellement la France et figure sur les maillots des équipes nationales sportives ?",
    options: [
      "Le coq gaulois, symbole de vigilance et de courage hérité de l'Antiquité romaine",
      "L'aigle impérial, symbole de puissance adopté sous le Premier et le Second Empire",
      "Le lion héraldique, symbole de force utilisé par les monarchies européennes",
      "Le taureau camargue, symbole de la résistance et de la culture méridionale française"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 1, 0),
    explication: "Le coq gaulois est l'un des symboles de la France. Il représente la vigilance et le courage. Il figure notamment sur les maillots des équipes nationales sportives."
  },
  {
    id: 2,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Symboles républicains",
    question: "Qui est Marianne et quel est son rôle symbolique dans la République française ?",
    options: [
      "La représentation allégorique de la République française, présente dans toutes les mairies avec son bonnet phrygien",
      "Une figure historique réelle ayant participé activement à la Révolution française de 1789",
      "La première femme élue à l'Assemblée nationale sous la Troisième République française",
      "L'épouse de Napoléon Bonaparte qui a contribué à moderniser l'administration française"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 2, 0),
    explication: "Marianne est la représentation symbolique de la République française. Son buste figure dans toutes les mairies. Elle porte souvent un bonnet phrygien, symbole de liberté."
  },
  {
    id: 3,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Fête nationale",
    question: "Que commémore la fête nationale du 14 juillet, instituée comme jour férié depuis 1880 ?",
    options: [
      "La prise de la Bastille (1789) et la Fête de la Fédération (1790), symboles de l'unité nationale",
      "La victoire de Napoléon à Austerlitz (1805), considérée comme le sommet de l'Empire français",
      "La proclamation de la Troisième République (1870) après la défaite face à la Prusse",
      "L'armistice de la Première Guerre mondiale (1918) célébrant la paix retrouvée"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 3, 0),
    explication: "Le 14 juillet est la fête nationale française. Elle commémore la prise de la Bastille le 14 juillet 1789 et la Fête de la Fédération du 14 juillet 1790."
  },
  {
    id: 4,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Neutralité des agents publics",
    question: "Un enseignant de l'école publique peut-il porter des signes religieux ostensibles pendant ses cours ?",
    options: [
      "Non, les agents publics doivent respecter le principe de neutralité dans l'exercice de leurs fonctions",
      "Oui, c'est sa liberté individuelle garantie par la Déclaration des droits de l'homme de 1789",
      "Oui, si le directeur de l'établissement et les parents d'élèves donnent leur accord préalable",
      "Cela dépend de la religion concernée et de la taille du signe porté par l'enseignant"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 4, 0),
    explication: "Les enseignants, en tant qu'agents publics, doivent respecter le principe de neutralité et ne peuvent afficher leurs convictions religieuses dans l'exercice de leurs fonctions."
  },
  {
    id: 5,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité garanties",
    question: "Quelles sont les deux garanties fondamentales de la laïcité inscrites dans la loi de 1905 ?",
    options: [
      "La liberté de culte pour tous et la neutralité absolue de l'État vis-à-vis des religions",
      "L'interdiction de toutes les pratiques religieuses et l'athéisme obligatoire pour les fonctionnaires",
      "La priorité donnée à la religion catholique et la tolérance des autres cultes reconnus",
      "L'obligation pour tous de pratiquer une religion et le contrôle étatique des lieux de culte"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 5, 0),
    explication: "La laïcité garantit la liberté de conscience, le libre exercice des cultes et la neutralité de l'État vis-à-vis des religions, dans le respect de l'ordre public."
  },
  {
    id: 6,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Discriminations interdites",
    question: "Quels types de discrimination sont expressément interdits par la législation française ?",
    options: [
      "Toutes les formes de discrimination : origine, sexe, religion, handicap, orientation sexuelle, âge, opinions",
      "Uniquement les discriminations fondées sur l'origine ethnique ou la couleur de peau",
      "Uniquement les discriminations fondées sur le sexe dans le cadre professionnel et familial",
      "Aucune discrimination n'est interdite, l'employeur étant libre de ses critères de sélection"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 6, 0),
    explication: "La loi française interdit toutes les formes de discrimination : origine, sexe, situation de famille, orientation sexuelle, âge, opinions politiques, activités syndicales, religion, apparence physique, handicap, etc."
  },
  {
    id: 7,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Sanctions discrimination",
    question: "Quelles sanctions pénales encourt un commerçant qui refuse de servir une personne en raison de son origine ?",
    options: [
      "Jusqu'à 3 ans d'emprisonnement et 45 000 euros d'amende selon le Code pénal",
      "Un simple avertissement administratif sans conséquence juridique majeure",
      "Une amende de 50 euros pour trouble à l'ordre public commercial",
      "Aucune sanction, le commerçant étant libre de choisir sa clientèle sans justification"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 7, 0),
    explication: "Refuser un bien ou un service en raison de l'origine est une discrimination punie par le Code pénal : jusqu'à 3 ans de prison et 45 000 € d'amende."
  },
  {
    id: 8,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité femmes-hommes travail",
    question: "Depuis quelle date une femme mariée peut-elle exercer une profession sans l'autorisation de son mari ?",
    options: [
      "Depuis 1965, date de la réforme du régime matrimonial accordant l'autonomie professionnelle aux femmes",
      "Depuis 1789, date de la Déclaration des droits de l'homme proclamant l'égalité de tous",
      "Depuis 1944, date de l'obtention du droit de vote par les femmes en France",
      "Depuis 2000, date des lois sur la parité en politique et dans les entreprises"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 8, 0),
    explication: "Depuis 1965, une femme mariée peut exercer une profession sans le consentement de son mari. L'égalité femmes-hommes est un principe constitutionnel."
  },
  {
    id: 9,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation dégradation",
    question: "Vous voyez une personne dégrader un monument public par des graffitis. Quelle est la conduite à tenir ?",
    options: [
      "Noter les éléments d'identification, prendre des photos discrètement et alerter la police au 17",
      "Ne rien faire car la dégradation de biens publics n'est pas répréhensible en France",
      "Aider la personne à finir son œuvre car le street art est reconnu comme un art légitime",
      "Filmer la scène et la publier sur les réseaux sociaux pour dénoncer publiquement l'acte"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 9, 0),
    explication: "La dégradation de bien public est un délit. Il convient d'alerter les forces de l'ordre (17 ou 112) et éventuellement de prendre des photos comme preuves."
  },
  {
    id: 10,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation harcèlement",
    question: "Un collègue fait des remarques sexistes répétées à votre encontre. Que dit la loi française ?",
    options: [
      "C'est du harcèlement interdit par le Code du travail et le Code pénal, passible de sanctions sévères",
      "C'est toléré si cela reste de l'humour entre collègues dans un cadre professionnel détendu",
      "C'est autorisé si les remarques ne sont pas faites devant d'autres témoins présents",
      "Cela dépend du règlement intérieur de l'entreprise et de la sensibilité de chaque personne"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 10, 0),
    explication: "Les propos sexistes constituent du harcèlement sexuel ou moral, interdit par le Code du travail et le Code pénal. Les sanctions peuvent être sévères."
  },
  {
    id: 11,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Fraternité solidarité",
    question: "Que signifie concrètement le principe de fraternité inscrit dans la devise républicaine ?",
    options: [
      "La solidarité et l'entraide entre tous les citoyens, fondement de la cohésion sociale nationale",
      "L'obligation légale d'être ami avec toutes les personnes de son quartier ou de sa commune",
      "L'obéissance absolue aux autorités et le respect inconditionnel de la hiérarchie sociale",
      "Le maintien des traditions familiales et la transmission des valeurs ancestrales uniquement"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 11, 0),
    explication: "La fraternité implique la solidarité et l'entraide entre tous les membres de la société, sans distinction. C'est le troisième pilier de la devise républicaine."
  },

  // ==================== 2. SYSTÈME INSTITUTIONNEL (6 questions) ====================
  
  {
    id: 12,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Conditions du vote",
    question: "Quelles sont toutes les conditions requises pour voter aux élections nationales en France ?",
    options: [
      "Avoir 18 ans, être de nationalité française, jouir de ses droits civiques et être inscrit sur les listes électorales",
      "Avoir 21 ans minimum, résider en France depuis au moins 10 ans et posséder un diplôme",
      "Avoir 18 ans, être propriétaire d'un bien immobilier et payer des impôts en France",
      "Être majeur, avoir un casier judiciaire vierge et exercer une activité professionnelle déclarée"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 12, 0),
    explication: "Pour voter en France, il faut avoir 18 ans, être de nationalité française, jouir de ses droits civils et politiques, et être inscrit sur les listes électorales."
  },
  {
    id: 13,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Mandat des députés",
    question: "Pour quelle durée les députés de l'Assemblée nationale sont-ils élus et selon quel mode de scrutin ?",
    options: [
      "5 ans au scrutin uninominal majoritaire à deux tours dans des circonscriptions législatives",
      "4 ans au scrutin proportionnel intégral sur des listes nationales présentées par les partis",
      "7 ans comme le Président de la République pour assurer la stabilité des institutions",
      "6 ans au scrutin indirect par des grands électeurs comme les sénateurs au Sénat"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 13, 0),
    explication: "Les députés de l'Assemblée nationale sont élus pour 5 ans au suffrage universel direct. Ils peuvent être réélus sans limitation."
  },
  {
    id: 14,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Nomination Premier ministre",
    question: "Qui nomme le Premier ministre en France selon la Constitution de la Ve République ?",
    options: [
      "Le Président de la République, qui choisit librement une personnalité politique de son choix",
      "L'Assemblée nationale par un vote à la majorité absolue de tous les députés",
      "Les citoyens français directement lors d'un scrutin national organisé tous les 5 ans",
      "Le Sénat en concertation avec les présidents des conseils régionaux de France"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 14, 0),
    explication: "Le Président de la République nomme le Premier ministre. Il doit généralement tenir compte de la majorité parlementaire à l'Assemblée nationale."
  },
  {
    id: 15,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Pouvoir législatif",
    question: "Quel est le rôle principal du Parlement français dans le système institutionnel de la Ve République ?",
    options: [
      "Voter les lois, autoriser le budget de l'État et contrôler l'action du Gouvernement",
      "Nommer les ministres du Gouvernement et diriger la politique étrangère de la France",
      "Rendre la justice au nom du peuple français et interpréter les lois votées",
      "Gérer les collectivités territoriales et organiser les élections municipales"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 15, 0),
    explication: "Le Parlement vote les lois, autorise le budget et contrôle l'action du Gouvernement. Il peut le renverser par une motion de censure."
  },
  {
    id: 16,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Collectivités territoriales",
    question: "Quelles sont les différentes collectivités territoriales françaises ayant une autonomie administrative ?",
    options: [
      "Les communes (environ 35 000), les départements (101) et les régions (18 dont 13 métropolitaines)",
      "Uniquement les préfectures et sous-préfectures représentant l'État dans les territoires",
      "Les provinces, les duchés et les comtés hérités de l'organisation de l'Ancien Régime",
      "Les arrondissements, les cantons et les quartiers administrés par des fonctionnaires nommés"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 16, 0),
    explication: "La France compte trois niveaux de collectivités territoriales : les communes (environ 35 000), les départements (101) et les régions (18 dont 13 métropolitaines)."
  },
  {
    id: 17,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Rôle du maire",
    question: "Quelles sont les principales fonctions du maire dans une commune française ?",
    options: [
      "Représenter l'État, diriger l'administration municipale, célébrer les mariages et gérer l'état civil",
      "Voter les lois nationales, nommer les fonctionnaires d'État et lever les impôts nationaux",
      "Rendre la justice locale, contrôler la police nationale et gérer les hôpitaux publics",
      "Administrer les élections présidentielles, gérer les universités et diriger les préfectures"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 17, 0),
    explication: "Le maire représente à la fois l'État et la commune. Il dirige l'administration municipale, célèbre les mariages, gère l'état civil et assure l'ordre public local."
  },

  // ==================== 3. DROITS ET DEVOIRS (11 questions) ====================
  
  {
    id: 18,
    categorie: "Droits et devoirs",
    sousCategorie: "Liberté d'expression",
    question: "Quelles sont les limites légales à la liberté d'expression en France selon la loi de 1881 ?",
    options: [
      "La diffamation, l'injure, l'incitation à la haine raciale et l'apologie du terrorisme sont interdites",
      "Il n'existe aucune limite, la liberté d'expression étant absolue dans la République française",
      "Seule la critique du Président de la République est interdite par la loi constitutionnelle",
      "Toute critique des religions est interdite pour garantir la paix sociale et religieuse"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 18, 0),
    explication: "La liberté d'expression a des limites : la diffamation, l'injure, l'incitation à la haine, l'apologie du terrorisme sont punies par la loi."
  },
  {
    id: 19,
    categorie: "Droits et devoirs",
    sousCategorie: "Droit de grève",
    question: "Le droit de grève est-il reconnu en France et quelles sont ses conditions d'exercice ?",
    options: [
      "Oui, c'est un droit constitutionnel pour les salariés, avec préavis obligatoire dans les services publics",
      "Non, la grève est interdite car elle perturbe l'ordre économique et la productivité nationale",
      "Oui, mais uniquement pour les fonctionnaires de l'État et les agents des services publics",
      "Non, sauf autorisation préalable du préfet accordée en cas de conflit social majeur"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 19, 0),
    explication: "Le droit de grève est un droit constitutionnel reconnu par le préambule de 1946. Il s'exerce dans le cadre des lois qui le réglementent, avec préavis dans les services publics."
  },
  {
    id: 20,
    categorie: "Droits et devoirs",
    sousCategorie: "Obligation scolaire",
    question: "Quelles sont les sanctions encourues par les parents qui ne scolarisent pas leurs enfants sans motif valable ?",
    options: [
      "Des amendes pouvant atteindre plusieurs milliers d'euros et des poursuites pour manquement à l'obligation d'instruction",
      "Aucune sanction car l'instruction est un droit mais pas une obligation pour les familles",
      "Une simple convocation à la mairie pour rappel de la réglementation en vigueur",
      "Le retrait immédiat de la garde des enfants sans possibilité de recours judiciaire"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 20, 0),
    explication: "Le manquement à l'obligation d'instruction est puni par la loi. Les parents peuvent faire l'objet de poursuites et d'amendes importantes."
  },
  {
    id: 21,
    categorie: "Droits et devoirs",
    sousCategorie: "Protection sociale",
    question: "Qu'est-ce que la Sécurité sociale française et quand a-t-elle été créée ?",
    options: [
      "Un système de protection sociale créé en 1945 couvrant maladie, retraite, famille et accidents du travail",
      "Une assurance privée obligatoire créée en 2000 pour compléter les mutuelles existantes",
      "Un impôt prélevé sur les salaires pour financer l'armée et la défense nationale",
      "Une aide réservée aux personnes sans emploi créée lors de la crise de 1929"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 21, 0),
    explication: "La Sécurité sociale a été créée en 1945. Elle couvre la maladie, la maternité, les accidents du travail, la retraite et la famille. C'est le pilier de la protection sociale française."
  },
  {
    id: 22,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation agression",
    question: "Vous êtes témoin d'une agression dans la rue. Quelle est votre obligation légale selon le Code pénal ?",
    options: [
      "Porter assistance à la victime ou alerter les secours (15, 17, 18, 112), la non-assistance est un délit",
      "Ne pas intervenir car toute action peut vous rendre complice de l'agression en cours",
      "Filmer la scène pour avoir des preuves exploitables par la justice ultérieurement",
      "Fuir les lieux pour ne pas être vous-même victime d'une agression similaire"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 22, 0),
    explication: "La non-assistance à personne en danger est un délit. Vous devez alerter les secours (15, 17, 18, 112) et, si possible, porter assistance sans vous mettre en danger."
  },
  {
    id: 23,
    categorie: "Droits et devoirs",
    sousCategorie: "Déclaration revenus",
    question: "Êtes-vous obligé de déclarer vos revenus même si vous estimez ne pas être imposable ?",
    options: [
      "Oui, la déclaration est obligatoire pour tous les résidents fiscaux, même non imposables",
      "Non, seules les personnes dont les revenus dépassent le SMIC doivent déclarer",
      "Non, les personnes de moins de 25 ans sont automatiquement dispensées de déclaration",
      "Oui, mais uniquement si vous êtes propriétaire d'un bien immobilier en France"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 23, 0),
    explication: "Toute personne résidant en France doit déclarer ses revenus, même si elle n'est pas imposable. La déclaration permet de déterminer le montant de l'impôt ou l'accès à certains droits."
  },
  {
    id: 24,
    categorie: "Droits et devoirs",
    sousCategorie: "Respect voisinage",
    question: "Quels comportements constituent des troubles de voisinage sanctionnables par la loi ?",
    options: [
      "Le tapage nocturne, les odeurs excessives, les nuisances sonores répétées et les dégradations des parties communes",
      "Aucun comportement n'est sanctionnable car chacun est libre chez soi sans limite",
      "Uniquement le bruit après 22h, tous les autres comportements étant tolérés légalement",
      "Seules les violences physiques entre voisins peuvent faire l'objet de poursuites judiciaires"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 24, 0),
    explication: "Les troubles de voisinage (tapage, odeurs, nuisances répétées) sont sanctionnables. Le tapage nocturne est une contravention punie par le Code pénal."
  },
  {
    id: 25,
    categorie: "Droits et devoirs",
    sousCategorie: "Droit à la santé",
    question: "Quels droits fondamentaux en matière de santé la Constitution française garantit-elle ?",
    options: [
      "Le droit à la protection de la santé pour tous et l'accès aux soins, inscrits dans le préambule de 1946",
      "Aucun droit à la santé n'est garanti, les soins étant entièrement à la charge des individus",
      "Le droit à la santé uniquement pour les citoyens français de naissance et leurs descendants",
      "Un accès aux soins réservé aux personnes cotisant à une mutuelle privée agréée par l'État"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 25, 0),
    explication: "Le préambule de 1946, intégré au bloc de constitutionnalité, garantit à tous le droit à la protection de la santé et l'accès aux soins."
  },
  {
    id: 26,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation location",
    question: "Un propriétaire refuse de vous louer un appartement en raison de votre religion. Que pouvez-vous faire ?",
    options: [
      "Porter plainte pour discrimination au logement, délit puni jusqu'à 3 ans de prison et 45 000 euros d'amende",
      "Accepter le refus car le propriétaire est libre de choisir son locataire selon ses critères",
      "Demander l'intervention de la mairie qui peut contraindre le propriétaire à louer",
      "Rien, car la discrimination dans le logement privé n'est pas réprimée par la loi française"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 26, 0),
    explication: "La discrimination dans le logement fondée sur la religion est interdite. Le bailleur encourt des sanctions pénales pouvant aller jusqu'à 3 ans de prison et 45 000 € d'amende."
  },
  {
    id: 27,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoir de mémoire",
    question: "Quelle obligation civique incombe aux citoyens français concernant la défense nationale depuis la suspension du service militaire ?",
    options: [
      "Participer à la Journée Défense et Citoyenneté (JDC), obligatoire pour tous les jeunes de 16 à 25 ans",
      "Aucune obligation, le service militaire ayant été définitivement supprimé sans remplacement",
      "S'engager volontairement dans l'armée pour une durée minimale de deux ans de service actif",
      "Payer une taxe de remplacement militaire calculée sur les revenus du foyer fiscal"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 27, 0),
    explication: "La Journée Défense et Citoyenneté (JDC) est obligatoire pour tous les jeunes Français. Elle remplace le service militaire suspendu depuis 1997."
  },
  {
    id: 28,
    categorie: "Droits et devoirs",
    sousCategorie: "Droit syndical",
    question: "Le droit syndical est-il garanti en France et quelles libertés implique-t-il concrètement ?",
    options: [
      "Oui, liberté de créer un syndicat, d'y adhérer ou non, et de participer à l'action syndicale sans représailles",
      "Non, les syndicats sont interdits depuis les ordonnances de modernisation du travail de 2017",
      "Oui, mais uniquement dans les entreprises de plus de 500 salariés et dans la fonction publique",
      "Non, l'adhésion syndicale est obligatoire pour tous les salariés selon leur branche professionnelle"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 28, 0),
    explication: "Le droit syndical est garanti par le préambule de 1946. Chacun est libre de créer un syndicat, d'y adhérer ou non, et de participer à l'action syndicale."
  },

  // ==================== 4. HISTOIRE, GÉOGRAPHIE ET CULTURE (8 questions) ====================
  
  {
    id: 29,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Première Guerre mondiale",
    question: "Quelle date commémore l'armistice de la Première Guerre mondiale, jour férié en France ?",
    options: [
      "Le 11 novembre 1918, date de la signature de l'armistice mettant fin aux combats sur le front occidental",
      "Le 8 mai 1945, date de la capitulation de l'Allemagne nazie marquant la fin de la Seconde Guerre mondiale",
      "Le 14 juillet 1789, date de la prise de la Bastille symbole de la Révolution française",
      "Le 6 juin 1944, date du débarquement allié en Normandie lors de l'opération Overlord"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 29, 0),
    explication: "Le 11 novembre 1918 marque l'armistice de la Première Guerre mondiale. Cette date est un jour férié en France, commémorant la fin des combats."
  },
  {
    id: 30,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Résistance",
    question: "Qui était Jean Moulin et quel rôle a-t-il joué dans l'histoire de France pendant l'Occupation ?",
    options: [
      "Le chef du Conseil national de la Résistance, unifiant les mouvements résistants sous l'autorité du général de Gaulle",
      "Le chef du gouvernement de Vichy, collaborant avec l'Allemagne nazie pendant l'Occupation",
      "Le général commandant les forces françaises libres depuis Londres pendant toute la guerre",
      "Le premier président de la IVe République élu après la Libération du territoire national"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 30, 0),
    explication: "Jean Moulin a unifié les mouvements de Résistance au sein du Conseil national de la Résistance (CNR) en 1943. Il a été arrêté et est mort sous la torture."
  },
  {
    id: 31,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Droit de vote femmes",
    question: "En quelle année les femmes françaises ont-elles obtenu le droit de vote et d'éligibilité ?",
    options: [
      "En 1944, par ordonnance du Comité français de libération nationale présidé par le général de Gaulle",
      "En 1789, lors de la Révolution française proclamant l'égalité de tous les citoyens",
      "En 1905, en même temps que la loi de séparation des Églises et de l'État",
      "En 1958, lors de l'adoption de la Constitution de la Ve République par référendum"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 31, 0),
    explication: "Les femmes ont obtenu le droit de vote en 1944 par ordonnance du Comité français de libération nationale. Elles ont voté pour la première fois en 1945."
  },
  {
    id: 32,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Capitale Paris",
    question: "Quelle est la capitale de la France et quel est son statut administratif particulier ?",
    options: [
      "Paris, à la fois commune et département (75), siège des institutions nationales et internationales",
      "Marseille, deuxième ville de France et capitale économique de la région méditerranéenne",
      "Lyon, ancienne capitale des Gaules et actuel centre économique de la région Auvergne-Rhône-Alpes",
      "Strasbourg, siège du Parlement européen et capitale de la coopération franco-allemande"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 32, 0),
    explication: "Paris est la capitale de la France. Elle est à la fois une commune et un département (75). Elle abrite les principales institutions de la République."
  },
  {
    id: 33,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Montagne",
    question: "Quel est le plus haut sommet de France et des Alpes, culminant à 4 809 mètres d'altitude ?",
    options: [
      "Le Mont Blanc, situé à la frontière franco-italienne dans le massif du Mont-Blanc en Haute-Savoie",
      "Le Pic du Midi de Bigorre, observatoire astronomique des Pyrénées centrales françaises",
      "Le Puy de Sancy, plus haut sommet du Massif central dans le département du Puy-de-Dôme",
      "Le Grand Ballon, point culminant des Vosges dans la région Grand Est"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 33, 0),
    explication: "Le Mont Blanc (4 809 m) est le plus haut sommet de France et des Alpes. Il est situé à la frontière franco-italienne en Haute-Savoie."
  },
  {
    id: 34,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "DOM-TOM",
    question: "Quel territoire français d'outre-mer est situé dans l'océan Indien et porte le nom d'une île volcanique ?",
    options: [
      "La Réunion, département et région d'outre-mer français situé à l'est de Madagascar",
      "La Guadeloupe, archipel des Antilles françaises dans la mer des Caraïbes",
      "La Martinique, île des Petites Antilles découverte par Christophe Colomb en 1502",
      "La Nouvelle-Calédonie, territoire du Pacifique Sud avec un statut de collectivité sui generis"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 34, 0),
    explication: "La Réunion est un département et région d'outre-mer (DROM) situé dans l'océan Indien, à l'est de Madagascar. C'est une île volcanique."
  },
  {
    id: 35,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Musée Louvre",
    question: "Quel célèbre musée parisien, ancienne résidence royale, abrite la Joconde de Léonard de Vinci ?",
    options: [
      "Le musée du Louvre, plus grand musée d'art du monde avec plus de 35 000 œuvres exposées",
      "Le musée d'Orsay, installé dans une ancienne gare et dédié à l'art impressionniste",
      "Le Centre Pompidou, musée d'art moderne et contemporain du quartier Beaubourg",
      "Le musée Rodin, hôtel particulier abritant les œuvres du sculpteur Auguste Rodin"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 35, 0),
    explication: "Le musée du Louvre, ancienne résidence royale, est le plus grand musée d'art du monde. Il abrite notamment la Joconde de Léonard de Vinci."
  },
  {
    id: 36,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Victor Hugo",
    question: "Quel célèbre écrivain français du XIXe siècle est l'auteur des Misérables et de Notre-Dame de Paris ?",
    options: [
      "Victor Hugo, écrivain romantique engagé politiquement, dont les cendres reposent au Panthéon",
      "Émile Zola, chef de file du naturalisme et auteur de l'article J'accuse dans l'affaire Dreyfus",
      "Alexandre Dumas, auteur des Trois Mousquetaires et du Comte de Monte-Cristo",
      "Gustave Flaubert, auteur de Madame Bovary et L'Éducation sentimentale"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 36, 0),
    explication: "Victor Hugo (1802-1885) est l'auteur des Misérables et de Notre-Dame de Paris. Écrivain engagé, il repose au Panthéon depuis 1885."
  },

  // ==================== 5. VIVRE DANS LA SOCIÉTÉ FRANÇAISE (4 questions) ====================
  
  {
    id: 37,
    categorie: "Vivre dans la société française",
    sousCategorie: "Carte Vitale",
    question: "Qu'est-ce que la carte Vitale et à quoi sert-elle dans le système de santé français ?",
    options: [
      "La carte d'assurance maladie permettant le remboursement des soins par la Sécurité sociale",
      "Un document d'identité obligatoire pour circuler sur le territoire national français",
      "Une carte de transport en commun valable dans toutes les villes de France métropolitaine",
      "Un titre de séjour délivré aux étrangers résidant légalement sur le territoire français"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 37, 0),
    explication: "La carte Vitale est la carte d'assurance maladie. Elle permet l'identification de l'assuré et facilite le remboursement des soins par la Sécurité sociale."
  },
  {
    id: 38,
    categorie: "Vivre dans la société française",
    sousCategorie: "Numéros urgence",
    question: "Quel numéro européen unique permet de joindre tous les services d'urgence dans l'Union européenne ?",
    options: [
      "Le 112, numéro européen d'urgence accessible gratuitement dans tous les pays de l'UE",
      "Le 15, numéro du SAMU exclusivement réservé aux urgences médicales en France",
      "Le 17, numéro de la police secours pour signaler les infractions et délits",
      "Le 18, numéro des sapeurs-pompiers pour les incendies et accidents de la route"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 38, 0),
    explication: "Le 112 est le numéro européen d'urgence. Il permet de joindre les services d'urgence (pompiers, police, SAMU) dans tous les pays de l'Union européenne."
  },
  {
    id: 39,
    categorie: "Vivre dans la société française",
    sousCategorie: "Congés payés",
    question: "Quel est le nombre minimum de jours de congés payés légaux pour un salarié à temps plein en France ?",
    options: [
      "5 semaines (25 jours ouvrés) par an, soit 2,5 jours par mois de travail effectif",
      "2 semaines (10 jours ouvrés) par an comme dans la plupart des pays européens",
      "Aucun congé garanti, le nombre dépendant uniquement de la convention collective applicable",
      "3 semaines (15 jours ouvrés) réservées aux salariés ayant plus de 5 ans d'ancienneté"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 39, 0),
    explication: "Tout salarié a droit à 5 semaines de congés payés par an (25 jours ouvrés). C'est un droit acquis depuis 1982 en France."
  },
  {
    id: 40,
    categorie: "Vivre dans la société française",
    sousCategorie: "SMIC",
    question: "Qu'est-ce que le SMIC et quelle est sa fonction dans le droit du travail français ?",
    options: [
      "Le Salaire Minimum Interprofessionnel de Croissance, rémunération horaire minimale légale obligatoire",
      "Un impôt sur les sociétés calculé sur le chiffre d'affaires des grandes entreprises françaises",
      "Une allocation versée aux demandeurs d'emploi pendant leur période de recherche active",
      "Un diplôme professionnel délivré par l'État validant les compétences acquises en entreprise"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 40, 0),
    explication: "Le SMIC (Salaire Minimum Interprofessionnel de Croissance) est le salaire horaire minimum légal en France. Aucun salarié ne peut être rémunéré en dessous de ce seuil."
  }
];

export const EXAMEN_2: ExamenBlanc = {
  numero: 2,
  titre: "Examen blanc #2",
  description: "40 questions en conditions réelles d'examen",
  questions: questions,
  dureeMinutes: 45,
  totalQuestions: 40
};
