// ==================== EXAMEN BLANC #1 ====================
// Répartition officielle :
// 1. Principes et valeurs (11 questions)
// 2. Système institutionnel (6 questions)
// 3. Droits et devoirs (11 questions)
// 4. Histoire/géographie/culture (8 questions)
// 5. Vivre en France (4 questions)
// ==========================================================================
// VERSION NON ENCODÉE - Questions difficiles niveau examen civique
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
    sousCategorie: "Constitution",
    question: "Quel article de la Constitution de 1958 définit les caractéristiques fondamentales de la République française comme indivisible, laïque, démocratique et sociale ?",
    options: [
      "L'article 1er de la Constitution de 1958",
      "L'article 2 de la Constitution de 1958",
      "L'article 89 de la Constitution de 1958",
      "Le Préambule de la Constitution de 1958"
    ],
    correctHash: hashAnswer(1, 0),
    explication: "L'article 1er de la Constitution de 1958 affirme que « La France est une République indivisible, laïque, démocratique et sociale ». C'est le fondement de l'identité constitutionnelle française."
  },
  {
    id: 2,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité",
    question: "Quelle loi fondamentale a établi la séparation des Églises et de l'État, garantissant la liberté de conscience et le libre exercice des cultes ?",
    options: [
      "La loi du 9 décembre 1905 relative à la séparation des Églises et de l'État",
      "La loi du 28 mars 1882 sur l'enseignement primaire obligatoire et laïque",
      "La loi du 1er juillet 1901 relative au contrat d'association",
      "La loi du 29 juillet 1881 sur la liberté de la presse"
    ],
    correctHash: hashAnswer(2, 0),
    explication: "La loi du 9 décembre 1905 établit la séparation des Églises et de l'État. Elle garantit la liberté de conscience et le libre exercice des cultes, tout en affirmant que la République ne reconnaît, ne salarie ni ne subventionne aucun culte."
  },
  {
    id: 3,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Bloc de constitutionnalité",
    question: "Qu'est-ce que le « bloc de constitutionnalité » reconnu par le Conseil constitutionnel depuis 1971 ?",
    options: [
      "La Constitution de 1958, la DDHC de 1789, le Préambule de 1946 et la Charte de l'environnement de 2004",
      "La Constitution de 1958, le Code civil et les traités internationaux ratifiés par la France",
      "Les décisions du Conseil constitutionnel et les lois organiques fondamentales votées depuis 1958",
      "La Constitution de 1958, les ordonnances présidentielles et les règlements intérieurs du Parlement"
    ],
    correctHash: hashAnswer(3, 0),
    explication: "Le bloc de constitutionnalité comprend la Constitution de 1958, la Déclaration des droits de l'homme de 1789, le Préambule de 1946 et la Charte de l'environnement de 2004. Ces textes ont tous une valeur constitutionnelle."
  },
  {
    id: 4,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "DDHC",
    question: "Selon l'article 4 de la Déclaration des droits de l'homme et du citoyen de 1789, comment est définie la Liberté ?",
    options: [
      "Pouvoir faire tout ce qui ne nuit pas à autrui, dans les limites déterminées par la loi",
      "Pouvoir agir selon sa conscience personnelle sans aucune restriction extérieure",
      "Pouvoir exercer ses droits fondamentaux sans intervention de l'État",
      "Pouvoir s'exprimer librement en tout lieu et en toute circonstance"
    ],
    correctHash: hashAnswer(4, 0),
    explication: "L'article 4 de la DDHC définit la liberté comme « pouvoir faire tout ce qui ne nuit pas à autrui ». Les limites de cette liberté sont déterminées par la loi, qui protège les droits d'autrui."
  },
  {
    id: 5,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Conseil constitutionnel",
    question: "Quelle institution créée en 1958 veille au respect de la Constitution et peut être saisie par les citoyens via la QPC depuis 2008 ?",
    options: [
      "Le Conseil constitutionnel composé de 9 membres nommés pour 9 ans",
      "Le Conseil d'État qui est la plus haute juridiction administrative française",
      "La Cour de cassation qui est la plus haute juridiction de l'ordre judiciaire",
      "La Cour des comptes qui contrôle les finances publiques de l'État"
    ],
    correctHash: hashAnswer(5, 0),
    explication: "Le Conseil constitutionnel, créé en 1958, vérifie la conformité des lois à la Constitution. Depuis 2008, les citoyens peuvent le saisir via la Question Prioritaire de Constitutionnalité (QPC)."
  },
  {
    id: 6,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Indivisibilité",
    question: "Qu'implique le caractère « indivisible » de la République française inscrit à l'article 1er de la Constitution ?",
    options: [
      "L'unité du peuple français, du territoire national et de la loi s'appliquant uniformément à tous",
      "L'impossibilité de créer des régions autonomes disposant de leurs propres pouvoirs législatifs",
      "L'interdiction de toute décentralisation administrative et des pouvoirs locaux élus par les citoyens",
      "La centralisation de toutes les décisions administratives et politiques dans la capitale Paris"
    ],
    correctHash: hashAnswer(6, 0),
    explication: "L'indivisibilité signifie que la France forme un tout : un seul peuple, un seul territoire, une seule loi. Cela n'empêche pas la décentralisation mais exclut le fédéralisme et garantit l'égalité des citoyens."
  },
  {
    id: 7,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Laïcité garanties",
    question: "Quelles garanties fondamentales la laïcité assure-t-elle aux citoyens français selon la loi de 1905 ?",
    options: [
      "La liberté de conscience et le libre exercice des cultes dans le respect de l'ordre public",
      "La neutralité obligatoire de tous les citoyens vis-à-vis de toutes les religions reconnues",
      "L'interdiction de tous les signes religieux dans l'ensemble de l'espace public français",
      "La séparation stricte et absolue entre la vie privée des individus et toute pratique religieuse"
    ],
    correctHash: hashAnswer(7, 0),
    explication: "La laïcité garantit à chacun la liberté de croire ou de ne pas croire, et de pratiquer sa religion librement. L'État reste neutre vis-à-vis de toutes les religions sans en favoriser aucune."
  },
  {
    id: 8,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité",
    question: "Quel principe républicain fondamental est directement proclamé par l'article 1er de la DDHC de 1789 ?",
    options: [
      "L'égalité en droits des hommes naissant et demeurant libres dès leur naissance",
      "La liberté d'expression et d'opinion sans aucune restriction gouvernementale",
      "Le droit de propriété considéré comme inviolable et sacré par la Nation",
      "La résistance à l'oppression comme droit naturel et imprescriptible de l'homme"
    ],
    correctHash: hashAnswer(8, 0),
    explication: "L'article 1er de la DDHC proclame que « Les hommes naissent et demeurent libres et égaux en droits ». Ce principe d'égalité est repris dans l'article 1er de la Constitution de 1958."
  },
  {
    id: 9,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "République sociale",
    question: "Que signifie le caractère « social » de la République française mentionné dans la Constitution de 1958 ?",
    options: [
      "L'État garantit la protection sociale, la solidarité nationale et les droits sociaux fondamentaux",
      "L'État organise la redistribution égalitaire et totale des richesses entre tous les citoyens",
      "L'État contrôle directement toutes les principales entreprises stratégiques du pays",
      "L'État assure un revenu minimum strictement identique pour tous les résidents"
    ],
    correctHash: hashAnswer(9, 0),
    explication: "Le caractère social de la République implique que l'État assure la protection sociale des citoyens : santé, retraite, chômage, famille. C'est le fondement de la Sécurité sociale créée en 1945."
  },
  {
    id: 10,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Droits sociaux",
    question: "Quel texte constitutionnel a introduit les droits économiques et sociaux en France, notamment le droit au travail et le droit syndical ?",
    options: [
      "Le Préambule de la Constitution de 1946 faisant partie du bloc de constitutionnalité",
      "La Déclaration des droits de l'homme et du citoyen du 26 août 1789",
      "L'article premier de la Constitution de la Ve République de 1958",
      "La Charte de l'environnement adoptée et intégrée à la Constitution en 2004"
    ],
    correctHash: hashAnswer(10, 0),
    explication: "Le Préambule de 1946 a consacré les droits économiques et sociaux : droit au travail, droit syndical, droit de grève, protection de la santé, droit à l'éducation. Il fait partie du bloc de constitutionnalité."
  },
  {
    id: 11,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité femmes-hommes",
    question: "Que garantit le principe constitutionnel d'égalité entre les femmes et les hommes renforcé par la révision de 2008 ?",
    options: [
      "L'égal accès des femmes et des hommes aux mandats électoraux, fonctions et responsabilités",
      "Un quota obligatoire de 50% de femmes dans toutes les entreprises privées françaises",
      "La parité stricte et obligatoire dans tous les secteurs économiques sans exception",
      "L'interdiction de toute différence salariale même justifiée par des critères objectifs"
    ],
    correctHash: hashAnswer(11, 0),
    explication: "L'égalité entre les femmes et les hommes est un principe constitutionnel. La loi favorise l'égal accès aux mandats électoraux et fonctions électives, ainsi qu'aux responsabilités professionnelles et sociales."
  },

  // ==================== 2. SYSTÈME INSTITUTIONNEL (6 questions) ====================
  
  {
    id: 12,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Souveraineté",
    question: "Selon l'article 3 de la Constitution de 1958, à qui appartient la souveraineté nationale et comment s'exerce-t-elle ?",
    options: [
      "Au peuple qui l'exerce par ses représentants élus et par la voie du référendum",
      "Au Gouvernement qui définit et conduit la politique de la Nation française",
      "Au Parlement bicaméral composé de l'Assemblée nationale et du Sénat",
      "Au Président de la République élu au suffrage universel direct depuis 1962"
    ],
    correctHash: hashAnswer(12, 0),
    explication: "Selon l'article 3 de la Constitution : « La souveraineté nationale appartient au peuple qui l'exerce par ses représentants et par la voie du référendum. » C'est le principe de la démocratie représentative."
  },
  {
    id: 13,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Droit de vote",
    question: "Quelles sont les conditions cumulatives pour exercer le droit de vote en France lors des élections nationales ?",
    options: [
      "Avoir 18 ans, être de nationalité française, jouir de ses droits civiques et être inscrit sur les listes électorales",
      "Avoir 21 ans, résider en France depuis plus de 5 ans et posséder un titre de séjour valide",
      "Avoir 18 ans, posséder un diplôme reconnu par l'État et payer des impôts en France",
      "Être majeur, être propriétaire d'un bien immobilier et avoir un emploi stable depuis 2 ans"
    ],
    correctHash: hashAnswer(13, 0),
    explication: "En France, le droit de vote est accordé à tous les citoyens français âgés de 18 ans ou plus, jouissant de leurs droits civils et politiques, et inscrits sur les listes électorales."
  },
  {
    id: 14,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Vote",
    question: "Le vote en France est-il obligatoire et quelles sont les conséquences de l'abstention électorale ?",
    options: [
      "Non, le vote est un droit et un devoir civique mais l'abstention n'est pas sanctionnée par la loi",
      "Oui, l'abstention est passible d'une amende pouvant aller jusqu'à 150 euros par scrutin",
      "Oui, sauf pour les personnes âgées de plus de 70 ans qui bénéficient d'une dispense automatique",
      "Non, sauf pour les élections présidentielles où l'abstention entraîne une suspension des droits civiques"
    ],
    correctHash: hashAnswer(14, 0),
    explication: "En France, le vote n'est pas obligatoire (contrairement à la Belgique ou au Luxembourg). C'est un droit fondamental et un devoir civique, mais l'abstention n'est pas sanctionnée."
  },
  {
    id: 15,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Président",
    question: "Quel est le rôle constitutionnel du Président de la République selon l'article 5 de la Constitution de 1958 ?",
    options: [
      "Veiller au respect de la Constitution, assurer le fonctionnement des pouvoirs publics et la continuité de l'État",
      "Diriger l'action du Gouvernement, être responsable de la défense nationale et présider le Conseil des ministres",
      "Voter les lois, contrôler l'action du Gouvernement et représenter les territoires de la République",
      "Trancher les litiges entre les citoyens, interpréter la Constitution et valider les élections nationales"
    ],
    correctHash: hashAnswer(15, 0),
    explication: "Le Président de la République veille au respect de la Constitution. Il assure, par son arbitrage, le fonctionnement régulier des pouvoirs publics ainsi que la continuité de l'État."
  },
  {
    id: 16,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Parlement",
    question: "Comment est composé le Parlement français et quelle est la durée du mandat de ses membres ?",
    options: [
      "L'Assemblée nationale (577 députés élus pour 5 ans) et le Sénat (348 sénateurs élus pour 6 ans)",
      "L'Assemblée nationale (500 députés élus pour 4 ans) et le Sénat (300 sénateurs élus pour 5 ans)",
      "Une chambre unique de 600 parlementaires élus au suffrage universel direct pour 6 ans",
      "Deux chambres de 400 membres chacune élus au scrutin proportionnel pour 4 ans"
    ],
    correctHash: hashAnswer(16, 0),
    explication: "Le Parlement français est bicaméral : il comprend l'Assemblée nationale (577 députés élus au suffrage direct pour 5 ans) et le Sénat (348 sénateurs élus au suffrage indirect pour 6 ans)."
  },
  {
    id: 17,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Union européenne",
    question: "En quelle année a été signé le traité de Rome instituant la Communauté économique européenne dont la France est membre fondateur ?",
    options: [
      "Le 25 mars 1957 par six pays : France, Allemagne, Italie, Belgique, Pays-Bas et Luxembourg",
      "Le 7 février 1992 lors de la signature du traité de Maastricht créant l'Union européenne",
      "Le 9 mai 1950 date de la déclaration de Robert Schuman considérée comme l'acte fondateur",
      "Le 13 décembre 2007 lors de la signature du traité de Lisbonne réformant les institutions"
    ],
    correctHash: hashAnswer(17, 0),
    explication: "Le traité de Rome a été signé le 25 mars 1957 par 6 pays fondateurs : France, Allemagne, Italie, Belgique, Pays-Bas et Luxembourg. Il a créé la Communauté économique européenne (CEE)."
  },

  // ==================== 3. DROITS ET DEVOIRS (11 questions) ====================
  
  {
    id: 18,
    categorie: "Droits et devoirs",
    sousCategorie: "DDHC",
    question: "En quelle année a été adoptée la Déclaration des droits de l'homme et du citoyen qui fait partie du bloc de constitutionnalité ?",
    options: [
      "Le 26 août 1789, pendant la Révolution française, par l'Assemblée nationale constituante",
      "Le 24 février 1848, lors de la proclamation de la Deuxième République française",
      "Le 9 décembre 1905, en même temps que la loi de séparation des Églises et de l'État",
      "Le 4 octobre 1958, lors de l'adoption de la Constitution de la Ve République"
    ],
    correctHash: hashAnswer(18, 0),
    explication: "La Déclaration des droits de l'homme et du citoyen a été adoptée le 26 août 1789. Elle fait partie du bloc de constitutionnalité et garantit les droits fondamentaux."
  },
  {
    id: 19,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits constitutionnels",
    question: "Parmi les droits suivants, lequel n'est PAS garanti comme un droit créance opposable à l'État dans la Constitution française ?",
    options: [
      "Le droit à un emploi garanti par l'État pour tout citoyen demandeur d'emploi",
      "La liberté d'expression et de communication des pensées et des opinions",
      "Le droit de propriété considéré comme inviolable et sacré depuis 1789",
      "La liberté de conscience et le libre exercice des cultes religieux"
    ],
    correctHash: hashAnswer(19, 0),
    explication: "Le droit au travail est mentionné dans le préambule de 1946, mais il ne s'agit pas d'une garantie d'emploi par l'État. L'État doit favoriser l'accès à l'emploi, mais ne peut garantir un emploi à chacun."
  },
  {
    id: 20,
    categorie: "Droits et devoirs",
    sousCategorie: "Obligations fiscales",
    question: "Quelle est la principale obligation fiscale des personnes résidant en France, qu'elles soient françaises ou étrangères ?",
    options: [
      "Déclarer l'ensemble de ses revenus mondiaux et payer les impôts correspondants dans les délais légaux",
      "Payer uniquement la TVA sur les achats effectués dans les commerces du territoire français",
      "S'acquitter des impôts seulement en cas de propriété immobilière sur le territoire national",
      "Les étrangers résidant en France sont exonérés de tout impôt pendant les cinq premières années"
    ],
    correctHash: hashAnswer(20, 0),
    explication: "Toute personne résidant en France doit déclarer ses revenus et payer les impôts correspondants. C'est une obligation légale qui contribue au financement des services publics."
  },
  {
    id: 21,
    categorie: "Droits et devoirs",
    sousCategorie: "Respect des lois",
    question: "Le respect des lois de la République est-il obligatoire pour toutes les personnes se trouvant sur le territoire français ?",
    options: [
      "Oui, toute personne sur le territoire français doit respecter les lois, quelle que soit sa nationalité",
      "Non, seuls les citoyens français de naissance sont tenus de respecter l'ensemble des lois",
      "Non, les touristes et visiteurs étrangers bénéficient d'une immunité juridique temporaire",
      "Oui, mais uniquement les lois pénales, les lois civiles ne s'appliquant qu'aux nationaux"
    ],
    correctHash: hashAnswer(21, 0),
    explication: "Toute personne sur le territoire français, quelle que soit sa nationalité, doit respecter les lois de la République. Nul n'est censé ignorer la loi."
  },
  {
    id: 22,
    categorie: "Droits et devoirs",
    sousCategorie: "Scolarité obligatoire",
    question: "Depuis la loi de 2019, quelle est la tranche d'âge pendant laquelle l'instruction est obligatoire en France ?",
    options: [
      "De 3 à 16 ans, avec une obligation de formation jusqu'à 18 ans (école, apprentissage ou insertion)",
      "De 6 à 16 ans, comme c'était le cas depuis la loi de 1959 sur la prolongation de la scolarité",
      "De 3 à 14 ans, l'instruction étant facultative au-delà pour les élèves en difficulté scolaire",
      "De 6 à 18 ans, sans possibilité de dérogation même pour les élèves en apprentissage professionnel"
    ],
    correctHash: hashAnswer(22, 0),
    explication: "Depuis 2019, l'instruction est obligatoire de 3 à 16 ans. La formation est ensuite obligatoire jusqu'à 18 ans (école, apprentissage, insertion...)."
  },
  {
    id: 23,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation fiscale",
    question: "Vous recevez un avis d'imposition que vous estimez trop élevé. Quelle est votre obligation légale ?",
    options: [
      "Payer dans les délais puis contester par réclamation auprès de l'administration fiscale si nécessaire",
      "Ignorer l'avis si vous estimez que le montant est injustifié et attendre une relance officielle",
      "Payer uniquement la moitié du montant en attendant que l'erreur soit corrigée automatiquement",
      "Refuser tout paiement jusqu'à obtention d'un rendez-vous avec un inspecteur des impôts"
    ],
    correctHash: hashAnswer(23, 0),
    explication: "Le paiement des impôts dans les délais est une obligation légale. En cas de désaccord, il faut d'abord payer puis contester par réclamation. En cas de difficultés, contacter l'administration pour demander un délai."
  },
  {
    id: 24,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation voisinage",
    question: "Votre voisin fait du bruit excessif la nuit de manière répétée. Quels sont vos recours légaux ?",
    options: [
      "Appeler la police (17), faire constater le trouble par huissier ou engager une médiation de voisinage",
      "Rien, car les nuisances sonores entre voisins ne sont pas réprimées par la législation française",
      "Se venger en faisant également du bruit car la loi autorise la réciprocité entre voisins",
      "Déménager immédiatement car aucune procédure judiciaire n'existe pour les troubles de voisinage"
    ],
    correctHash: hashAnswer(24, 0),
    explication: "Le tapage nocturne est une infraction. Vous pouvez appeler la police (17), faire constater le trouble par un huissier, ou engager une médiation."
  },
  {
    id: 25,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoir civique jury",
    question: "Vous êtes convoqué pour participer à un jury d'assises. Quelle est la nature de cette obligation ?",
    options: [
      "C'est un devoir civique obligatoire ; refuser sans motif légitime est passible d'une amende de 3750 euros",
      "C'est une simple invitation facultative que vous pouvez décliner sans aucune justification",
      "C'est obligatoire seulement pour les fonctionnaires et agents de l'État en exercice",
      "C'est facultatif mais le refus entraîne une inscription au casier judiciaire pour cinq ans"
    ],
    correctHash: hashAnswer(25, 0),
    explication: "Être juré d'assises est un devoir civique obligatoire. Refuser sans motif légitime est passible d'une amende pouvant aller jusqu'à 3750 euros."
  },
  {
    id: 26,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation discrimination",
    question: "Un commerçant refuse de vous servir en raison de votre origine. Quelles sont les sanctions prévues par la loi ?",
    options: [
      "C'est un délit de discrimination puni jusqu'à 3 ans de prison et 45 000 euros d'amende",
      "C'est une simple contravention passible d'une amende de 150 euros maximum",
      "C'est légal car le commerçant est libre de choisir sa clientèle selon ses critères personnels",
      "C'est interdit mais non sanctionné pénalement, seule une action civile est possible"
    ],
    correctHash: hashAnswer(26, 0),
    explication: "Le refus de vente discriminatoire est un délit puni par le Code pénal : jusqu'à 3 ans de prison et 45 000 euros d'amende. Vous pouvez porter plainte auprès de la police ou du procureur."
  },
  {
    id: 27,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation objet trouvé",
    question: "Vous trouvez un portefeuille contenant de l'argent et des papiers d'identité. Quelle est votre obligation légale ?",
    options: [
      "Le rapporter à la police, la gendarmerie ou la mairie ; garder l'objet peut constituer un abus de confiance",
      "Le garder en attendant que le propriétaire vous contacte via une annonce sur les réseaux sociaux",
      "Garder l'argent et jeter les papiers pour éviter tout problème administratif ultérieur",
      "Le remettre au premier passant qui accepte de s'en charger pour vous libérer de toute responsabilité"
    ],
    correctHash: hashAnswer(27, 0),
    explication: "Vous devez rapporter l'objet trouvé au commissariat, à la gendarmerie ou à la mairie. Garder un objet trouvé sans chercher à le restituer peut constituer un abus de confiance."
  },
  {
    id: 28,
    categorie: "Droits et devoirs",
    sousCategorie: "Droit du travail",
    question: "Votre employeur vous demande de travailler le dimanche. Dans quels cas est-ce autorisé par la loi ?",
    options: [
      "Dans certains secteurs définis par la loi (commerce alimentaire, santé, hôtellerie) avec compensations obligatoires",
      "Jamais, le repos dominical est un droit absolu et inaliénable pour tous les salariés français",
      "Toujours, l'employeur est libre d'organiser le temps de travail selon les besoins de l'entreprise",
      "Seulement avec l'accord écrit préalable du salarié, sans aucune autre condition ni compensation"
    ],
    correctHash: hashAnswer(28, 0),
    explication: "Le travail le dimanche est encadré par la loi. Il est autorisé dans certains secteurs (commerce alimentaire, hôtellerie, santé...) et doit donner lieu à des compensations."
  },

  // ==================== 4. HISTOIRE, GÉOGRAPHIE ET CULTURE (8 questions) ====================
  
  {
    id: 29,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Révolution française",
    question: "Quel événement du 14 juillet 1789 marque symboliquement le début de la Révolution française ?",
    options: [
      "La prise de la Bastille, forteresse royale symbole de l'arbitraire monarchique",
      "La mort de Louis XVI guillotiné sur la place de la Révolution à Paris",
      "Le sacre de Napoléon Bonaparte comme Empereur des Français à Notre-Dame",
      "La bataille de Valmy, première victoire de l'armée révolutionnaire française"
    ],
    correctHash: hashAnswer(29, 0),
    explication: "La prise de la Bastille le 14 juillet 1789 est le symbole du début de la Révolution française. Cette date est devenue la fête nationale française depuis 1880."
  },
  {
    id: 30,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Charles de Gaulle",
    question: "Quel général a dirigé la France libre pendant la Seconde Guerre mondiale et fondé la Ve République en 1958 ?",
    options: [
      "Le général Charles de Gaulle, premier président de la Ve République de 1959 à 1969",
      "Le maréchal Philippe Pétain, chef de l'État français sous le régime de Vichy",
      "Jean Moulin, chef du Conseil national de la Résistance unifié en 1943",
      "Georges Clemenceau, président du Conseil et artisan de la victoire de 1918"
    ],
    correctHash: hashAnswer(30, 0),
    explication: "Le général Charles de Gaulle a dirigé la France libre pendant la Seconde Guerre mondiale et a fondé la Ve République en 1958. Il en a été le premier président (1959-1969)."
  },
  {
    id: 31,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Abolition esclavage",
    question: "Quand l'esclavage a-t-il été définitivement aboli dans les colonies françaises et par quel décret ?",
    options: [
      "Le 27 avril 1848 par le décret de Victor Schœlcher, sous la Deuxième République",
      "Le 4 février 1794 par la Convention nationale, première abolition révolutionnaire",
      "Le 9 décembre 1905 par la loi de séparation des Églises et de l'État",
      "Le 8 mai 1945 à la fin de la Seconde Guerre mondiale en Europe"
    ],
    correctHash: hashAnswer(31, 0),
    explication: "L'abolition définitive de l'esclavage en France a été proclamée le 27 avril 1848 par le décret de Victor Schœlcher."
  },
  {
    id: 32,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Régions métropolitaines",
    question: "Depuis la réforme territoriale de 2016, combien la France métropolitaine compte-t-elle de régions ?",
    options: [
      "13 régions métropolitaines (contre 22 auparavant), auxquelles s'ajoutent 5 régions d'outre-mer",
      "12 régions métropolitaines organisées autour des principales métropoles économiques françaises",
      "18 régions au total incluant les départements et régions d'outre-mer intégrés depuis 2003",
      "22 régions métropolitaines comme avant la réforme territoriale initialement prévue en 2010"
    ],
    correctHash: hashAnswer(32, 0),
    explication: "Depuis 2016, la France métropolitaine compte 13 régions (contre 22 auparavant). En comptant les régions d'outre-mer, la France compte 18 régions au total."
  },
  {
    id: 33,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Géographie fleuves",
    question: "Quel est le plus long fleuve entièrement français, prenant sa source au Mont Gerbier-de-Jonc ?",
    options: [
      "La Loire, avec 1 012 km, se jetant dans l'océan Atlantique à Saint-Nazaire",
      "La Seine, traversant Paris et se jetant dans la Manche au Havre en Normandie",
      "Le Rhône, prenant sa source en Suisse et se jetant dans la Méditerranée à Marseille",
      "La Garonne, prenant sa source en Espagne et formant l'estuaire de la Gironde"
    ],
    correctHash: hashAnswer(33, 0),
    explication: "La Loire est le plus long fleuve de France avec 1 012 km. Elle prend sa source au Mont Gerbier-de-Jonc en Ardèche et se jette dans l'océan Atlantique à Saint-Nazaire."
  },
  {
    id: 34,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Outre-mer",
    question: "Parmi les territoires suivants, lequel n'est PAS un département ou une région d'outre-mer français ?",
    options: [
      "Monaco, qui est une principauté indépendante et souveraine depuis le XIIIe siècle",
      "La Guadeloupe, département et région d'outre-mer situé dans les Antilles françaises",
      "La Réunion, département et région d'outre-mer situé dans l'océan Indien",
      "La Martinique, département et région d'outre-mer situé dans les Antilles françaises"
    ],
    correctHash: hashAnswer(34, 0),
    explication: "Monaco est une principauté indépendante, ce n'est pas un territoire français. La Guadeloupe, la Martinique et La Réunion sont des départements et régions d'outre-mer (DROM)."
  },
  {
    id: 35,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Patrimoine Tour Eiffel",
    question: "Pour quel événement et en quelle année la Tour Eiffel a-t-elle été construite par Gustave Eiffel ?",
    options: [
      "L'Exposition universelle de 1889, célébrant le centenaire de la Révolution française",
      "L'Exposition universelle de 1900, marquant l'entrée dans le nouveau siècle",
      "Les Jeux Olympiques de Paris en 1924, premiers jeux modernes en France",
      "La Libération de Paris en 1944, comme symbole de la France libre retrouvée"
    ],
    correctHash: hashAnswer(35, 0),
    explication: "La Tour Eiffel a été construite par Gustave Eiffel pour l'Exposition universelle de 1889, centenaire de la Révolution française."
  },
  {
    id: 36,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Panthéon",
    question: "Quel monument parisien accueille les sépultures des personnalités ayant marqué l'histoire de France ?",
    options: [
      "Le Panthéon, où reposent Victor Hugo, Marie Curie, Jean Moulin et Simone Veil",
      "Le musée du Louvre, ancienne résidence royale et plus grand musée du monde",
      "Le château de Versailles, symbole de la monarchie absolue de Louis XIV",
      "La cathédrale Notre-Dame de Paris, chef-d'œuvre de l'architecture gothique"
    ],
    correctHash: hashAnswer(36, 0),
    explication: "Le Panthéon, à Paris, accueille les sépultures de personnalités ayant marqué l'histoire de France (Victor Hugo, Marie Curie, Jean Moulin, Simone Veil...)."
  },

  // ==================== 5. VIVRE DANS LA SOCIÉTÉ FRANÇAISE (4 questions) ====================
  
  {
    id: 37,
    categorie: "Vivre dans la société française",
    sousCategorie: "Titre de séjour",
    question: "Quel document est obligatoire pour un étranger non-européen souhaitant résider en France plus de 3 mois ?",
    options: [
      "Un titre de séjour ou un visa long séjour valant titre de séjour (VLS-TS) délivré par la préfecture",
      "Un simple visa touristique de court séjour valable 90 jours renouvelable indéfiniment",
      "Une carte d'identité de son pays d'origine accompagnée d'une attestation d'hébergement",
      "Aucun document particulier, la libre circulation s'appliquant à tous les ressortissants étrangers"
    ],
    correctHash: hashAnswer(37, 0),
    explication: "Pour séjourner en France plus de 3 mois, un étranger non-européen doit posséder un titre de séjour ou un visa long séjour valant titre de séjour (VLS-TS)."
  },
  {
    id: 38,
    categorie: "Vivre dans la société française",
    sousCategorie: "Urgences médicales",
    question: "Quel numéro devez-vous appeler en cas d'urgence médicale nécessitant une intervention du SAMU ?",
    options: [
      "Le 15 (SAMU - Service d'Aide Médicale Urgente) pour toute urgence médicale grave",
      "Le 17 (Police secours) pour signaler une infraction ou demander une intervention policière",
      "Le 18 (Sapeurs-pompiers) pour les incendies et les accidents de la route",
      "Le 114 (Numéro d'urgence pour les personnes sourdes ou malentendantes)"
    ],
    correctHash: hashAnswer(38, 0),
    explication: "Le 15 est le numéro du SAMU (Service d'Aide Médicale Urgente). Le 17 est la police, le 18 les pompiers, le 112 le numéro européen d'urgence."
  },
  {
    id: 39,
    categorie: "Vivre dans la société française",
    sousCategorie: "Durée du travail",
    question: "Quelle est la durée légale hebdomadaire du travail en France pour un salarié à temps plein depuis les lois Aubry ?",
    options: [
      "35 heures par semaine depuis 2000, les heures au-delà étant des heures supplémentaires majorées",
      "32 heures par semaine depuis la réforme du temps de travail de 2019 pour tous les secteurs",
      "39 heures par semaine comme c'était le cas avant les ordonnances Macron de 2017",
      "40 heures par semaine selon le standard européen appliqué dans tous les pays de l'UE"
    ],
    correctHash: hashAnswer(39, 0),
    explication: "La durée légale du travail en France est de 35 heures par semaine depuis 2000 (lois Aubry). Les heures au-delà sont des heures supplémentaires majorées."
  },
  {
    id: 40,
    categorie: "Vivre dans la société française",
    sousCategorie: "École publique",
    question: "Quels sont les trois principes fondamentaux de l'école publique française issus des lois Jules Ferry ?",
    options: [
      "Gratuite, laïque et obligatoire de 3 à 16 ans pour tous les enfants résidant en France",
      "Payante, confessionnelle et facultative selon le choix des parents pour leurs enfants",
      "Réservée aux citoyens français, gérée par les religions et accessible dès 6 ans",
      "Privée, sélective et obligatoire uniquement pour les familles disposant de revenus suffisants"
    ],
    correctHash: hashAnswer(40, 0),
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
  questions: questions,
  dureeMinutes: 45,
  totalQuestions: 40
};
