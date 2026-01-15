// ==================== EXAMEN BLANC #4 ====================
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

const EXAM_NUMBER = 4;

const questions: Question[] = [
  // ==================== 1. PRINCIPES ET VALEURS (11 questions) ====================
  
  {
    id: 1,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Caractère démocratique",
    question: "Que signifie le caractère « démocratique » de la République inscrit à l'article 1er de la Constitution de 1958 ?",
    options: [
      "Le pouvoir appartient au peuple qui l'exerce par le vote et ses représentants élus au suffrage universel",
      "Le Président de la République détient tous les pouvoirs et gouverne seul sans contre-pouvoir",
      "Seuls les citoyens les plus éduqués peuvent participer aux décisions politiques nationales",
      "Le pouvoir est partagé entre les différentes religions présentes sur le territoire français"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 1, 0),
    explication: "La démocratie signifie que le pouvoir appartient au peuple. Les citoyens exercent ce pouvoir par le vote et par leurs représentants élus."
  },
  {
    id: 2,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Bonnet phrygien",
    question: "Quelle est la signification historique du bonnet phrygien porté par Marianne, symbole de la République ?",
    options: [
      "Un symbole de liberté hérité de l'Antiquité, porté par les esclaves affranchis de Rome",
      "Un couvre-chef traditionnel breton adopté comme symbole national pendant la Révolution",
      "Une coiffe militaire portée par les généraux de l'armée révolutionnaire française",
      "Un accessoire de mode parisien popularisé par les aristocrates du XVIIIe siècle"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 2, 0),
    explication: "Le bonnet phrygien est un symbole de liberté hérité de l'Antiquité romaine. Il était porté par les esclaves affranchis et a été adopté pendant la Révolution."
  },
  {
    id: 3,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "14 juillet",
    question: "Depuis quelle année le 14 juillet est-il officiellement la fête nationale française ?",
    options: [
      "Depuis 1880, sous la IIIe République, par une loi instituant ce jour comme fête nationale",
      "Depuis 1789, immédiatement après la prise de la Bastille par les révolutionnaires parisiens",
      "Depuis 1958, lors de l'instauration de la Ve République par le général de Gaulle",
      "Depuis 1945, pour commémorer la victoire sur l'Allemagne nazie et la Libération"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 3, 0),
    explication: "Le 14 juillet est devenu la fête nationale française par la loi du 6 juillet 1880, sous la IIIe République."
  },
  {
    id: 4,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité universités",
    question: "La loi de 2004 sur les signes religieux s'applique-t-elle aux étudiants des universités publiques ?",
    options: [
      "Non, cette loi concerne uniquement les élèves des écoles, collèges et lycées publics, pas les universités",
      "Oui, tous les étudiants des universités publiques doivent retirer leurs signes religieux",
      "Oui, mais uniquement dans les amphithéâtres et non dans les espaces de vie étudiante",
      "Non, sauf pour les étudiants préparant des concours de la fonction publique territoriale"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 4, 0),
    explication: "La loi de 2004 sur les signes religieux ne s'applique pas aux universités. Les étudiants majeurs peuvent porter des signes religieux, seuls les agents publics doivent être neutres."
  },
  {
    id: 5,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Neutralité services publics",
    question: "Un usager des services publics peut-il porter des signes religieux lorsqu'il se rend dans une administration ?",
    options: [
      "Oui, les usagers ne sont pas soumis à l'obligation de neutralité, contrairement aux agents publics",
      "Non, tous les signes religieux sont interdits dans l'ensemble des bâtiments publics français",
      "Oui, mais uniquement les signes religieux discrets ne dépassant pas une certaine taille réglementée",
      "Non, sauf autorisation préalable du responsable du service public concerné"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 5, 0),
    explication: "Les usagers des services publics ne sont pas soumis à l'obligation de neutralité. Ils peuvent porter des signes religieux, contrairement aux agents publics."
  },
  {
    id: 6,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité chances",
    question: "Qu'est-ce que le principe d'égalité des chances et comment la République le met-elle en œuvre ?",
    options: [
      "L'État doit permettre à chacun d'atteindre son potentiel par l'éducation et des dispositifs de correction des inégalités",
      "Tous les citoyens doivent obtenir exactement les mêmes résultats scolaires et professionnels",
      "L'État ne doit pas intervenir, laissant la concurrence libre déterminer la réussite de chacun",
      "Seuls les citoyens méritants selon des critères objectifs peuvent bénéficier de l'aide de l'État"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 6, 0),
    explication: "L'égalité des chances vise à permettre à chacun d'atteindre son potentiel. L'État met en place l'éducation gratuite, les bourses, les zones d'éducation prioritaire..."
  },
  {
    id: 7,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation logement",
    question: "Vous cherchez un logement et le propriétaire exige de connaître votre religion avant de louer. Est-ce légal ?",
    options: [
      "Non, c'est une question discriminatoire interdite ; le propriétaire ne peut pas demander cette information",
      "Oui, le propriétaire a le droit de choisir son locataire selon tous les critères qu'il souhaite",
      "Oui, si le logement est situé dans un immeuble où résident des personnes d'une religion particulière",
      "Non, sauf si le propriétaire est lui-même religieux et souhaite un locataire de même confession"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 7, 0),
    explication: "Demander la religion d'un candidat locataire est interdit. C'est une discrimination punie par la loi. Le propriétaire ne peut demander que des informations liées à la solvabilité."
  },
  {
    id: 8,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mixité",
    question: "Le principe de mixité est-il obligatoire dans les établissements scolaires publics en France ?",
    options: [
      "Oui, la mixité filles-garçons est obligatoire dans l'enseignement public depuis la loi Haby de 1975",
      "Non, les familles peuvent choisir entre écoles mixtes et écoles non-mixtes selon leurs préférences",
      "Oui, mais uniquement dans les lycées, les écoles primaires pouvant rester non-mixtes",
      "Non, la mixité est encouragée mais non obligatoire selon les traditions locales de chaque région"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 8, 0),
    explication: "La mixité est obligatoire dans l'enseignement public depuis la loi Haby de 1975. Les établissements publics doivent accueillir filles et garçons ensemble."
  },
  {
    id: 9,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "HALDE Défenseur",
    question: "Quelle institution a été fusionnée avec d'autres pour créer le Défenseur des droits en 2011 ?",
    options: [
      "La HALDE (Haute Autorité de Lutte contre les Discriminations et pour l'Égalité), le Médiateur de la République et le Défenseur des enfants",
      "Le Conseil constitutionnel, la Cour des comptes et le Conseil d'État réunis en une seule autorité",
      "La Commission nationale de l'informatique et des libertés (CNIL) et l'Autorité de la concurrence",
      "L'Inspection générale de l'administration et l'Inspection générale des finances fusionnées"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 9, 0),
    explication: "Le Défenseur des droits, créé en 2011, a fusionné la HALDE, le Médiateur de la République, le Défenseur des enfants et la Commission de déontologie de la sécurité."
  },
  {
    id: 10,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Violence conjugale",
    question: "Les violences conjugales sont-elles considérées comme une circonstance aggravante par le Code pénal ?",
    options: [
      "Oui, le fait que la victime soit le conjoint ou partenaire constitue une circonstance aggravante des peines",
      "Non, les violences conjugales sont traitées comme n'importe quelle autre forme de violence entre particuliers",
      "Oui, mais uniquement si le couple est marié légalement, pas pour les concubins ou pacsés",
      "Non, les violences au sein du couple relèvent exclusivement du droit civil et non du droit pénal"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 10, 0),
    explication: "Les violences commises sur le conjoint ou partenaire constituent une circonstance aggravante. Les peines sont plus lourdes pour protéger les victimes de violences intrafamiliales."
  },
  {
    id: 11,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mariage pour tous",
    question: "Depuis quelle année le mariage civil est-il ouvert aux couples de même sexe en France ?",
    options: [
      "Depuis 2013, par la loi du 17 mai ouvrant le mariage aux couples de personnes de même sexe",
      "Depuis 1999, lors de la création du Pacte civil de solidarité (PACS) par le gouvernement Jospin",
      "Depuis 2008, lors de la révision constitutionnelle modernisant les institutions de la République",
      "Depuis 1981, sous la présidence de François Mitterrand, première alternance de la Ve République"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 11, 0),
    explication: "La loi du 17 mai 2013 a ouvert le mariage civil aux couples de personnes de même sexe. Ces couples peuvent également adopter."
  },

  // ==================== 2. SYSTÈME INSTITUTIONNEL (6 questions) ====================
  
  {
    id: 12,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Référendum",
    question: "Le Président de la République peut-il organiser un référendum et sur quels sujets ?",
    options: [
      "Oui, sur l'organisation des pouvoirs publics, les réformes économiques et sociales, ou la ratification de traités",
      "Non, seul le Parlement peut décider de consulter le peuple par voie référendaire",
      "Oui, mais uniquement pour modifier la Constitution française, sans autre possibilité",
      "Non, les référendums ont été supprimés par la révision constitutionnelle de 2008"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 12, 0),
    explication: "Le Président peut organiser un référendum sur l'organisation des pouvoirs publics, sur des réformes économiques ou sociales, ou pour ratifier certains traités (article 11)."
  },
  {
    id: 13,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Article 49.3",
    question: "Qu'est-ce que l'article 49.3 de la Constitution et quelles sont ses conséquences ?",
    options: [
      "Il permet au Premier ministre d'engager la responsabilité du Gouvernement sur un texte adopté sans vote sauf motion de censure",
      "Il autorise le Président à dissoudre l'Assemblée nationale en cas de crise politique majeure",
      "Il définit les conditions de révision de la Constitution par le Congrès ou le référendum",
      "Il fixe les règles de l'état d'urgence et les pouvoirs exceptionnels du Président"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 13, 0),
    explication: "L'article 49.3 permet au Premier ministre d'engager la responsabilité du Gouvernement sur un texte. Celui-ci est adopté sans vote sauf si une motion de censure est votée."
  },
  {
    id: 14,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Sénateurs",
    question: "Comment les sénateurs sont-ils élus et quelle est la durée de leur mandat ?",
    options: [
      "Au suffrage universel indirect par un collège de grands électeurs (élus locaux) pour un mandat de 6 ans",
      "Au suffrage universel direct par tous les citoyens majeurs pour un mandat de 5 ans",
      "Par nomination du Président de la République sur proposition des préfets pour un mandat de 9 ans",
      "Par cooptation des sénateurs sortants choisissant leurs successeurs pour un mandat à vie"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 14, 0),
    explication: "Les sénateurs sont élus au suffrage indirect par les grands électeurs (conseillers municipaux, départementaux, régionaux et députés) pour 6 ans."
  },
  {
    id: 15,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Conseil des ministres",
    question: "Qui préside le Conseil des ministres et quel est son rôle dans le fonctionnement du Gouvernement ?",
    options: [
      "Le Président de la République le préside ; c'est là que sont adoptés les projets de loi et décrets importants",
      "Le Premier ministre le préside car il est le chef du Gouvernement et coordonne l'action ministérielle",
      "Le président de l'Assemblée nationale le préside pour garantir le contrôle parlementaire",
      "Le Garde des Sceaux le préside en tant que gardien des institutions républicaines françaises"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 15, 0),
    explication: "Le Président de la République préside le Conseil des ministres. C'est là que sont adoptés les projets de loi, ordonnances et décrets importants."
  },
  {
    id: 16,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Département préfet",
    question: "Quel est le rôle du préfet et qui le nomme à la tête du département ?",
    options: [
      "Représentant de l'État nommé par décret du Président en Conseil des ministres, il veille à l'application des lois",
      "Élu par les conseillers départementaux pour diriger le conseil départemental et ses services",
      "Fonctionnaire recruté par concours administratif gérant les services déconcentrés de l'État",
      "Magistrat nommé par le Conseil supérieur de la magistrature pour garantir l'ordre public"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 16, 0),
    explication: "Le préfet est le représentant de l'État dans le département. Nommé par décret du Président en Conseil des ministres, il veille à l'application des lois et dirige les services de l'État."
  },
  {
    id: 17,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Compétences région",
    question: "Quelles sont les principales compétences des régions depuis les lois de décentralisation ?",
    options: [
      "Lycées, transports régionaux (TER), formation professionnelle, développement économique et aménagement du territoire",
      "Écoles primaires, aide sociale à l'enfance, RSA et gestion des routes départementales",
      "Universités, hôpitaux publics, armée et police nationale sur le territoire régional",
      "Maternelles, assainissement, distribution d'eau potable et collecte des ordures ménagères"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 17, 0),
    explication: "Les régions gèrent les lycées, les transports régionaux (TER), la formation professionnelle, le développement économique et l'aménagement du territoire."
  },

  // ==================== 3. DROITS ET DEVOIRS (11 questions) ====================
  
  {
    id: 18,
    categorie: "Droits et devoirs",
    sousCategorie: "Droit à la vie privée",
    question: "Le droit au respect de la vie privée est-il protégé par la loi française et comment ?",
    options: [
      "Oui, l'article 9 du Code civil le protège ; toute atteinte peut donner lieu à des dommages et intérêts",
      "Non, la vie privée n'est pas protégée juridiquement, chacun est responsable de sa propre protection",
      "Oui, mais uniquement pour les personnalités publiques et les élus de la République",
      "Non, les informations personnelles peuvent être librement diffusées par la presse sans restriction"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 18, 0),
    explication: "L'article 9 du Code civil protège le droit au respect de la vie privée. Toute atteinte peut donner lieu à réparation par des dommages et intérêts."
  },
  {
    id: 19,
    categorie: "Droits et devoirs",
    sousCategorie: "Données personnelles",
    question: "Quelle autorité indépendante protège les données personnelles des citoyens en France ?",
    options: [
      "La CNIL (Commission Nationale de l'Informatique et des Libertés), veillant au respect du RGPD",
      "Le Défenseur des droits, autorité constitutionnelle protégeant toutes les libertés fondamentales",
      "L'Autorité de la concurrence, régulant les pratiques commerciales des entreprises numériques",
      "Le Conseil supérieur de l'audiovisuel (CSA), contrôlant les médias audiovisuels français"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 19, 0),
    explication: "La CNIL (Commission Nationale de l'Informatique et des Libertés) protège les données personnelles. Elle veille au respect du RGPD et peut sanctionner les violations."
  },
  {
    id: 20,
    categorie: "Droits et devoirs",
    sousCategorie: "Congé maternité",
    question: "Quelle est la durée minimale du congé maternité pour une première grossesse en France ?",
    options: [
      "16 semaines (6 semaines avant et 10 semaines après l'accouchement) avec maintien du salaire",
      "8 semaines de congé obligatoire non rémunéré pour toutes les salariées enceintes",
      "26 semaines dès la première grossesse pour favoriser l'égalité avec les pays nordiques",
      "4 semaines avant l'accouchement sans garantie d'emploi à la fin du congé légal"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 20, 0),
    explication: "Le congé maternité est de 16 semaines pour une première grossesse (6 avant, 10 après l'accouchement). La salariée perçoit des indemnités journalières de la Sécurité sociale."
  },
  {
    id: 21,
    categorie: "Droits et devoirs",
    sousCategorie: "Congé paternité",
    question: "Quelle est la durée du congé paternité et d'accueil de l'enfant depuis la réforme de 2021 ?",
    options: [
      "28 jours (25 jours + 3 jours de naissance), dont 7 jours obligatoires à prendre après la naissance",
      "11 jours calendaires à prendre dans les 4 mois suivant la naissance de l'enfant",
      "3 jours ouvrés accordés par l'employeur sans indemnisation de la Sécurité sociale",
      "16 semaines comme le congé maternité pour garantir l'égalité parentale"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 21, 0),
    explication: "Depuis 2021, le congé paternité est de 28 jours (25 jours + 3 jours de naissance). Une partie est obligatoire pour favoriser l'implication des pères."
  },
  {
    id: 22,
    categorie: "Droits et devoirs",
    sousCategorie: "Droit de retrait",
    question: "Dans quelles conditions un salarié peut-il exercer son droit de retrait au travail ?",
    options: [
      "En cas de danger grave et imminent pour sa vie ou sa santé, sans sanction ni retenue de salaire",
      "En cas de désaccord avec les directives de son employeur sur l'organisation du travail",
      "Uniquement après autorisation écrite de l'inspection du travail compétente territoriale",
      "En cas de mésentente avec un collègue rendant impossible la collaboration professionnelle"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 22, 0),
    explication: "Le droit de retrait permet à un salarié de quitter son poste en cas de danger grave et imminent pour sa vie ou sa santé, sans sanction ni retenue de salaire."
  },
  {
    id: 23,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation travail",
    question: "Votre employeur vous demande de signer un contrat vous interdisant de rejoindre la concurrence. Est-ce légal ?",
    options: [
      "Oui, une clause de non-concurrence est légale si elle est limitée dans le temps, l'espace et compensée financièrement",
      "Non, cela constitue une atteinte à la liberté du travail interdite par le Code du travail",
      "Oui, l'employeur peut imposer toutes les clauses qu'il souhaite dans le contrat de travail",
      "Non, sauf si vous êtes cadre dirigeant ou mandataire social de l'entreprise concernée"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 23, 0),
    explication: "Une clause de non-concurrence est légale si elle est limitée dans le temps, dans l'espace, justifiée par les intérêts de l'entreprise et compensée financièrement."
  },
  {
    id: 24,
    categorie: "Droits et devoirs",
    sousCategorie: "Assistance juridique GAV",
    question: "Avez-vous droit à l'assistance d'un avocat dès le début d'une garde à vue ?",
    options: [
      "Oui, vous pouvez demander l'assistance d'un avocat dès le début de la garde à vue, c'est un droit fondamental",
      "Non, l'avocat ne peut intervenir qu'après les 24 premières heures de la procédure",
      "Oui, mais uniquement si vous êtes en mesure de payer les honoraires de l'avocat vous-même",
      "Non, la présence d'un avocat n'est obligatoire que devant un juge, pas en garde à vue"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 24, 0),
    explication: "Vous avez droit à l'assistance d'un avocat dès le début de la garde à vue. C'est un droit fondamental qui ne peut être refusé."
  },
  {
    id: 25,
    categorie: "Droits et devoirs",
    sousCategorie: "Assurance habitation",
    question: "L'assurance habitation est-elle obligatoire en France pour les locataires ?",
    options: [
      "Oui, les locataires doivent obligatoirement souscrire une assurance couvrant au minimum les risques locatifs",
      "Non, l'assurance habitation est toujours facultative quel que soit le statut d'occupation",
      "Oui, mais uniquement pour les logements situés dans des zones à risque (inondation, incendie)",
      "Non, seul le propriétaire est tenu de souscrire une assurance pour son bien immobilier"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 25, 0),
    explication: "Les locataires doivent obligatoirement souscrire une assurance habitation couvrant au minimum les risques locatifs (incendie, dégât des eaux, explosion)."
  },
  {
    id: 26,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation héritage",
    question: "En cas de décès, les héritiers doivent-ils obligatoirement payer les dettes du défunt ?",
    options: [
      "Oui, sauf s'ils renoncent à la succession ou l'acceptent à concurrence de l'actif net du patrimoine",
      "Non, les dettes disparaissent automatiquement avec le décès du débiteur sans transmission",
      "Oui, tous les héritiers sont solidairement responsables des dettes sans possibilité de refus",
      "Non, seul l'héritier désigné comme exécuteur testamentaire est responsable des dettes"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 26, 0),
    explication: "Les héritiers peuvent renoncer à la succession ou l'accepter à concurrence de l'actif net pour ne pas payer plus que la valeur de l'héritage reçu."
  },
  {
    id: 27,
    categorie: "Droits et devoirs",
    sousCategorie: "Autorité parentale",
    question: "Qu'est-ce que l'autorité parentale et comment s'exerce-t-elle en cas de séparation des parents ?",
    options: [
      "Ensemble des droits et devoirs des parents envers l'enfant ; elle reste conjointe même après séparation sauf décision contraire du juge",
      "Le pouvoir absolu des parents sur leurs enfants jusqu'à leur majorité sans aucun contrôle",
      "Un droit exclusif du père de famille qui décide seul de l'éducation et du mode de vie de l'enfant",
      "Une responsabilité transférée automatiquement à l'État en cas de séparation ou divorce des parents"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 27, 0),
    explication: "L'autorité parentale est l'ensemble des droits et devoirs des parents. Elle reste conjointe après séparation sauf décision du juge aux affaires familiales."
  },
  {
    id: 28,
    categorie: "Droits et devoirs",
    sousCategorie: "Médiation familiale",
    question: "Qu'est-ce que la médiation familiale et quand peut-elle être proposée ?",
    options: [
      "Un processus de résolution amiable des conflits familiaux avec un tiers neutre, proposé avant ou pendant une procédure judiciaire",
      "Une procédure judiciaire obligatoire avant tout divorce pour tenter une réconciliation des époux",
      "Un conseil donné par un avocat pour éviter une procédure judiciaire coûteuse et longue",
      "Une thérapie familiale remboursée par la Sécurité sociale pour les familles en difficulté"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 28, 0),
    explication: "La médiation familiale est un processus de résolution amiable des conflits avec un médiateur neutre. Elle peut être proposée ou ordonnée par le juge."
  },

  // ==================== 4. HISTOIRE, GÉOGRAPHIE ET CULTURE (8 questions) ====================
  
  {
    id: 29,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Napoléon Code civil",
    question: "Quelle réforme majeure Napoléon Bonaparte a-t-il mise en place qui régit encore le droit français aujourd'hui ?",
    options: [
      "Le Code civil de 1804 (Code Napoléon), unifiant le droit privé français et inspirant de nombreux pays",
      "La Déclaration des droits de l'homme et du citoyen, texte fondateur des libertés individuelles",
      "La Constitution de la Ve République, organisant les institutions politiques actuelles",
      "La loi de séparation des Églises et de l'État, fondement de la laïcité française"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 29, 0),
    explication: "Le Code civil de 1804, aussi appelé Code Napoléon, unifie le droit privé français. Il a inspiré de nombreux codes civils dans le monde."
  },
  {
    id: 30,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "IIIe République",
    question: "Quelle République française a été la plus longue de l'histoire et combien d'années a-t-elle duré ?",
    options: [
      "La IIIe République (1870-1940), qui a duré environ 70 ans, consolidant les institutions démocratiques",
      "La Ve République (depuis 1958), actuellement en vigueur depuis plus de 60 ans",
      "La Ire République (1792-1804), première expérience républicaine de l'histoire de France",
      "La IVe République (1946-1958), régime parlementaire instauré après la Libération"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 30, 0),
    explication: "La IIIe République (1870-1940) est la plus longue République française. Elle a duré environ 70 ans et a consolidé les institutions démocratiques et la laïcité."
  },
  {
    id: 31,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Mai 1968",
    question: "Quels événements majeurs ont marqué la France en mai 1968 ?",
    options: [
      "Une crise sociale et politique mêlant contestation étudiante, grève générale et remise en cause de la société",
      "L'élection de Charles de Gaulle comme président de la République pour un nouveau mandat",
      "L'adoption de la Constitution de la Ve République par référendum populaire national",
      "La fin de la guerre d'Algérie et l'indépendance des anciennes colonies françaises d'Afrique"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 31, 0),
    explication: "Mai 1968 a été marqué par une contestation étudiante, une grève générale et une crise politique majeure. Ces événements ont profondément transformé la société française."
  },
  {
    id: 32,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Outre-mer Caraïbes",
    question: "Quels sont les départements français situés dans la mer des Caraïbes ?",
    options: [
      "La Guadeloupe et la Martinique, départements et régions d'outre-mer des Antilles françaises",
      "La Réunion et Mayotte, situés dans l'océan Indien au large de l'Afrique orientale",
      "La Guyane et Saint-Pierre-et-Miquelon, territoires de l'Atlantique et de l'Amérique du Nord",
      "La Polynésie française et la Nouvelle-Calédonie, collectivités du Pacifique Sud"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 32, 0),
    explication: "La Guadeloupe et la Martinique sont les deux départements français situés dans la mer des Caraïbes. Ce sont des DROM (départements et régions d'outre-mer)."
  },
  {
    id: 33,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Marseille",
    question: "Quelle est la deuxième ville de France par sa population et quel est son principal atout géographique ?",
    options: [
      "Marseille, ville portuaire méditerranéenne la plus ancienne de France, fondée par les Grecs en 600 av. J.-C.",
      "Lyon, ancienne capitale des Gaules située au confluent du Rhône et de la Saône",
      "Toulouse, capitale de l'aéronautique européenne dans le sud-ouest de la France",
      "Bordeaux, métropole viticole et portuaire sur la Garonne ouverte sur l'Atlantique"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 33, 0),
    explication: "Marseille est la deuxième ville de France. Fondée par les Grecs vers 600 av. J.-C., c'est la plus ancienne ville de France et un grand port méditerranéen."
  },
  {
    id: 34,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Versailles",
    question: "Quel roi a fait construire le château de Versailles et quelle était sa fonction première ?",
    options: [
      "Louis XIV (le Roi-Soleil), qui en a fait le siège du gouvernement et le symbole de la monarchie absolue",
      "Louis XVI, dernier roi avant la Révolution, qui y a installé la première assemblée nationale",
      "Napoléon Ier, qui a transformé le château en résidence impériale et musée de la gloire militaire",
      "François Ier, roi de la Renaissance, qui a initié la construction des premiers bâtiments royaux"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 34, 0),
    explication: "Louis XIV a fait construire le château de Versailles et y a installé le gouvernement en 1682. C'était le symbole de la monarchie absolue."
  },
  {
    id: 35,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Molière",
    question: "Quel dramaturge français du XVIIe siècle est considéré comme le père de la comédie classique française ?",
    options: [
      "Molière (Jean-Baptiste Poquelin), auteur du Tartuffe, du Misanthrope et des Fourberies de Scapin",
      "Jean Racine, auteur de tragédies classiques comme Phèdre, Andromaque et Britannicus",
      "Pierre Corneille, auteur du Cid et fondateur de la tragédie classique française",
      "Jean de La Fontaine, auteur des Fables inspirées d'Ésope et de Phèdre"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 35, 0),
    explication: "Molière (1622-1673) est le père de la comédie classique française. Ses œuvres (Tartuffe, Le Misanthrope, L'Avare...) sont toujours jouées aujourd'hui."
  },
  {
    id: 36,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Marie Curie",
    question: "Qui est Marie Curie et pourquoi est-elle une figure majeure de l'histoire scientifique française ?",
    options: [
      "Physicienne et chimiste, première femme Prix Nobel, elle a découvert le polonium et le radium",
      "Première femme médecin en France, pionnière de la médecine moderne et de l'hygiène hospitalière",
      "Première femme astronaute française, elle a participé à la mission spatiale européenne de 1996",
      "Mathématicienne ayant résolu le dernier théorème de Fermat en collaboration avec Pierre Curie"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 36, 0),
    explication: "Marie Curie (1867-1934) est la première femme Prix Nobel (physique 1903, chimie 1911). Elle a découvert le polonium et le radium. Elle repose au Panthéon."
  },

  // ==================== 5. VIVRE DANS LA SOCIÉTÉ FRANÇAISE (4 questions) ====================
  
  {
    id: 37,
    categorie: "Vivre dans la société française",
    sousCategorie: "RSA",
    question: "Qu'est-ce que le RSA et quelles sont les conditions pour en bénéficier ?",
    options: [
      "Le Revenu de Solidarité Active, aide sociale pour les personnes sans ressources âgées d'au moins 25 ans ou parents",
      "Un impôt sur le revenu des sociétés calculé sur le bénéfice annuel des entreprises françaises",
      "Une allocation familiale versée automatiquement à toutes les familles avec enfants en France",
      "Une assurance chômage versée pendant 2 ans aux salariés ayant perdu leur emploi"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 37, 0),
    explication: "Le RSA (Revenu de Solidarité Active) est une aide sociale pour les personnes sans ressources. Il est accessible à partir de 25 ans, ou avant si l'on est parent."
  },
  {
    id: 38,
    categorie: "Vivre dans la société française",
    sousCategorie: "Médecin traitant",
    question: "Quel est l'intérêt de déclarer un médecin traitant auprès de la Sécurité sociale ?",
    options: [
      "Bénéficier d'un meilleur remboursement des soins en suivant le parcours de soins coordonnés",
      "Obtenir gratuitement tous les médicaments prescrits sans avance de frais en pharmacie",
      "Accéder prioritairement aux spécialistes sans rendez-vous dans tous les hôpitaux français",
      "Éviter de payer la consultation chez le médecin grâce au tiers payant obligatoire"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 38, 0),
    explication: "Déclarer un médecin traitant permet de bénéficier d'un meilleur remboursement des soins. C'est le principe du parcours de soins coordonnés."
  },
  {
    id: 39,
    categorie: "Vivre dans la société française",
    sousCategorie: "Contrat de travail",
    question: "Quels sont les principaux types de contrats de travail en France ?",
    options: [
      "Le CDI (durée indéterminée), le CDD (durée déterminée), le contrat d'intérim et le contrat d'apprentissage",
      "Le contrat civil, le contrat commercial et le contrat administratif uniquement pour les fonctionnaires",
      "Le contrat oral suffit dans tous les cas, aucun écrit n'étant obligatoire selon le Code du travail",
      "Un seul type de contrat existe, le CDI, tous les autres étant illégaux en droit français"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 39, 0),
    explication: "Les principaux contrats de travail sont le CDI (contrat par défaut), le CDD (motif précis et durée limitée), l'intérim et l'apprentissage."
  },
  {
    id: 40,
    categorie: "Vivre dans la société française",
    sousCategorie: "Prud'hommes",
    question: "Quel tribunal est compétent pour juger les litiges entre employeurs et salariés ?",
    options: [
      "Le conseil de prud'hommes, juridiction paritaire composée de représentants des employeurs et des salariés",
      "Le tribunal administratif, compétent pour tous les litiges impliquant une personne publique",
      "Le tribunal de commerce, spécialisé dans les affaires commerciales et économiques",
      "Le tribunal judiciaire, juridiction de droit commun compétente pour toutes les affaires civiles"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 40, 0),
    explication: "Le conseil de prud'hommes juge les litiges entre employeurs et salariés. C'est une juridiction paritaire composée de juges élus par les employeurs et les salariés."
  }
];

export const EXAMEN_4: ExamenBlanc = {
  numero: 4,
  titre: "Examen blanc #4",
  description: "40 questions en conditions réelles d'examen",
  questions: questions,
  dureeMinutes: 45,
  totalQuestions: 40
};
