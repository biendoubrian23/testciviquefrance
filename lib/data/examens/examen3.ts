// ==================== EXAMEN BLANC #3 ====================
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

const EXAM_NUMBER = 3;

const questions: Question[] = [
  // ==================== 1. PRINCIPES ET VALEURS (11 questions) ====================
  
  {
    id: 1,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Devise républicaine",
    question: "Quel article de la Constitution de 1958 inscrit la devise « Liberté, Égalité, Fraternité » comme symbole de la République ?",
    options: [
      "L'article 2 de la Constitution, qui définit les symboles officiels de la République française",
      "L'article 1er de la Constitution, qui définit les caractéristiques de la République française",
      "L'article 89 de la Constitution, qui définit les modalités de révision constitutionnelle",
      "Le Préambule de la Constitution, qui renvoie à la Déclaration des droits de l'homme de 1789"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 1, 0),
    explication: "L'article 2 de la Constitution de 1958 définit les symboles de la République : la langue française, le drapeau tricolore, l'hymne national, la devise et le principe de gouvernement."
  },
  {
    id: 2,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Drapeau français",
    question: "Quelle est la signification historique des trois couleurs du drapeau français et leur disposition ?",
    options: [
      "Bleu et rouge (couleurs de Paris) encadrant le blanc (couleur royale), symbolisant l'union peuple-monarchie en 1789",
      "Trois couleurs choisies au hasard par Napoléon Bonaparte lors de son sacre impérial en 1804",
      "Rouge, blanc, bleu représentant le sang versé, la pureté et le ciel de France depuis le Moyen Âge",
      "Couleurs héritées du drapeau américain en hommage au soutien français lors de la guerre d'indépendance"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 2, 0),
    explication: "Le drapeau français est composé de trois bandes verticales : bleu (côté mât), blanc (centre) et rouge (côté flottant). Le bleu et le rouge sont les couleurs de Paris, le blanc était la couleur royale."
  },
  {
    id: 3,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Hymne national",
    question: "Qui a composé La Marseillaise et dans quel contexte historique particulier ?",
    options: [
      "Rouget de Lisle en 1792 à Strasbourg, comme chant de guerre pour l'armée du Rhin face aux monarchies européennes",
      "Victor Hugo en 1830 pour célébrer la révolution de Juillet et l'avènement de Louis-Philippe",
      "Hector Berlioz en 1848 pour accompagner la proclamation de la Deuxième République française",
      "Claude Debussy en 1914 pour galvaniser les troupes françaises au début de la Première Guerre mondiale"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 3, 0),
    explication: "La Marseillaise a été composée par Rouget de Lisle en 1792 à Strasbourg pour l'armée du Rhin. Elle est devenue hymne national en 1795."
  },
  {
    id: 4,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Démocratie",
    question: "Qu'est-ce que le suffrage universel direct et depuis quand s'applique-t-il pleinement en France ?",
    options: [
      "Le droit de vote pour tous les citoyens majeurs, pleinement effectif depuis 1944 avec le vote des femmes",
      "Le droit de vote réservé aux propriétaires fonciers, en vigueur depuis la Révolution de 1789",
      "Le droit de vote par l'intermédiaire de grands électeurs, comme pour l'élection des sénateurs",
      "Le droit de vote accordé uniquement aux hommes de plus de 25 ans sachant lire et écrire"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 4, 0),
    explication: "Le suffrage universel direct permet à tous les citoyens majeurs de voter. Il est pleinement effectif en France depuis 1944, date du droit de vote des femmes."
  },
  {
    id: 5,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Signes religieux école",
    question: "Que prévoit la loi du 15 mars 2004 concernant les signes religieux dans les établissements scolaires publics ?",
    options: [
      "L'interdiction du port de signes religieux ostensibles par les élèves des écoles, collèges et lycées publics",
      "L'autorisation de tous les signes religieux dans les établissements scolaires sans aucune restriction",
      "L'interdiction de toute référence religieuse y compris dans les cours d'histoire et de philosophie",
      "L'obligation pour tous les élèves de porter un uniforme laïque standardisé dans les écoles publiques"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 5, 0),
    explication: "La loi du 15 mars 2004 interdit le port de signes religieux ostensibles par les élèves dans les écoles, collèges et lycées publics. Les signes discrets sont autorisés."
  },
  {
    id: 6,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Alsace-Moselle",
    question: "Pourquoi le régime de la laïcité est-il différent en Alsace-Moselle par rapport au reste de la France ?",
    options: [
      "Ces départements étaient allemands en 1905 et n'ont pas été concernés par la loi de séparation des Églises et de l'État",
      "Ces régions ont obtenu une dérogation spéciale du Conseil constitutionnel en 1958 lors de la Ve République",
      "Le Pape a négocié une exception pour ces territoires historiquement catholiques au XIXe siècle",
      "Ces départements ont voté par référendum local pour conserver le régime concordataire en 1945"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 6, 0),
    explication: "L'Alsace-Moselle était allemande en 1905 et n'a pas été concernée par la loi de séparation. Le régime concordataire y est maintenu, avec reconnaissance de certains cultes."
  },
  {
    id: 7,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Égalité devant la loi",
    question: "Qu'implique le principe d'égalité devant la loi inscrit dans la Constitution française ?",
    options: [
      "La même loi s'applique à tous sans distinction d'origine, de race, de religion ou de condition sociale",
      "Tous les citoyens doivent avoir exactement les mêmes revenus et le même patrimoine",
      "L'État doit traiter différemment chaque citoyen selon sa situation personnelle particulière",
      "Seuls les citoyens français de naissance bénéficient de l'égalité devant la loi française"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 7, 0),
    explication: "L'égalité devant la loi signifie que la même loi s'applique à tous, sans distinction. C'est un principe fondamental de la République depuis 1789."
  },
  {
    id: 8,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Mise en situation embauche",
    question: "Un employeur vous demande lors d'un entretien d'embauche si vous comptez avoir des enfants. Est-ce légal ?",
    options: [
      "Non, c'est une question discriminatoire interdite par le Code du travail, vous n'êtes pas obligé de répondre",
      "Oui, l'employeur a le droit de connaître vos projets familiaux pour organiser son entreprise",
      "Oui, si le poste implique des responsabilités importantes nécessitant une disponibilité totale",
      "Non, sauf si vous êtes une femme, auquel cas cette question est autorisée par la loi"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 8, 0),
    explication: "Les questions sur la vie privée (projets familiaux, religion, opinions politiques...) sont interdites lors d'un entretien d'embauche. C'est une forme de discrimination."
  },
  {
    id: 9,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Accès aux services publics",
    question: "Quel principe garantit que tous les usagers puissent accéder aux services publics dans les mêmes conditions ?",
    options: [
      "Le principe d'égalité d'accès aux services publics, corollaire du principe d'égalité devant la loi",
      "Le principe de rentabilité des services publics imposant une tarification uniforme",
      "Le principe de proximité obligeant l'État à implanter un service public dans chaque commune",
      "Le principe de gratuité totale de tous les services publics pour l'ensemble des citoyens"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 9, 0),
    explication: "Le principe d'égalité d'accès aux services publics garantit que tous les usagers peuvent y accéder dans les mêmes conditions, sans discrimination."
  },
  {
    id: 10,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Solidarité nationale",
    question: "Comment se manifeste concrètement le principe de solidarité nationale en France ?",
    options: [
      "Par le système de protection sociale (Sécurité sociale, aides sociales) financé par les cotisations et impôts",
      "Par l'obligation pour chaque citoyen d'aider personnellement ses voisins en difficulté",
      "Par le bénévolat obligatoire de 10 heures par mois imposé à tous les citoyens français",
      "Par le versement d'un revenu universel identique à tous les résidents du territoire français"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 10, 0),
    explication: "La solidarité nationale se manifeste par le système de protection sociale : Sécurité sociale, allocations familiales, RSA, aides au logement... financés collectivement."
  },
  {
    id: 11,
    categorie: "Principes et valeurs de la République",
    sousCategorie: "Défenseur des droits",
    question: "Quel est le rôle du Défenseur des droits, autorité constitutionnelle indépendante créée en 2011 ?",
    options: [
      "Défendre les droits des citoyens face aux administrations, lutter contre les discriminations et protéger les enfants",
      "Représenter la France auprès de la Cour européenne des droits de l'homme à Strasbourg",
      "Présider le Conseil constitutionnel et statuer sur la conformité des lois à la Constitution",
      "Diriger les services de police et de gendarmerie pour garantir l'ordre public républicain"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 11, 0),
    explication: "Le Défenseur des droits défend les droits des citoyens face aux administrations, lutte contre les discriminations, défend les droits des enfants et veille à la déontologie des forces de sécurité."
  },

  // ==================== 2. SYSTÈME INSTITUTIONNEL (6 questions) ====================
  
  {
    id: 12,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Séparation des pouvoirs",
    question: "Quels sont les trois pouvoirs séparés dans une démocratie selon la théorie de Montesquieu ?",
    options: [
      "Le pouvoir législatif (faire les lois), exécutif (appliquer les lois) et judiciaire (juger selon les lois)",
      "Le pouvoir présidentiel, gouvernemental et parlementaire tels que définis dans la Constitution de 1958",
      "Le pouvoir municipal, départemental et régional constituant les collectivités territoriales françaises",
      "Le pouvoir militaire, religieux et civil hérités de l'organisation de l'Ancien Régime monarchique"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 12, 0),
    explication: "Montesquieu a théorisé la séparation des pouvoirs : législatif (Parlement), exécutif (Gouvernement) et judiciaire (tribunaux). Ce principe garantit les libertés."
  },
  {
    id: 13,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Mandat présidentiel",
    question: "Quelle est la durée du mandat présidentiel et combien de mandats consécutifs sont autorisés depuis 2008 ?",
    options: [
      "5 ans (quinquennat depuis 2000), renouvelable une seule fois consécutivement depuis la révision de 2008",
      "7 ans (septennat) renouvelable indéfiniment comme c'était le cas avant la réforme de 2000",
      "4 ans renouvelable deux fois maximum sur le modèle de la présidence américaine",
      "6 ans non renouvelable pour garantir l'alternance démocratique au sommet de l'État"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 13, 0),
    explication: "Le Président est élu pour 5 ans (quinquennat depuis 2000). Depuis 2008, il ne peut exercer plus de deux mandats consécutifs."
  },
  {
    id: 14,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Rôle du Gouvernement",
    question: "Quel est le rôle constitutionnel du Gouvernement selon l'article 20 de la Constitution de 1958 ?",
    options: [
      "Déterminer et conduire la politique de la Nation, disposer de l'administration et de la force armée",
      "Voter les lois, autoriser le budget de l'État et contrôler l'action du pouvoir exécutif",
      "Rendre la justice au nom du peuple français et interpréter les lois votées par le Parlement",
      "Élire le Président de la République et nommer les membres du Conseil constitutionnel"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 14, 0),
    explication: "Selon l'article 20, le Gouvernement détermine et conduit la politique de la Nation. Il dispose de l'administration et de la force armée."
  },
  {
    id: 15,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Motion de censure",
    question: "Qu'est-ce qu'une motion de censure et quelles sont ses conséquences si elle est adoptée ?",
    options: [
      "Un vote de l'Assemblée nationale qui, s'il est adopté à la majorité absolue, entraîne la démission du Gouvernement",
      "Une décision du Président de la République mettant fin aux fonctions du Premier ministre",
      "Un avis du Conseil constitutionnel déclarant une loi contraire à la Constitution",
      "Une procédure du Sénat permettant de destituer le Président de la République pour haute trahison"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 15, 0),
    explication: "La motion de censure est un vote de l'Assemblée nationale. Si elle est adoptée à la majorité absolue, le Gouvernement doit démissionner."
  },
  {
    id: 16,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Conseil d'État",
    question: "Quelles sont les deux fonctions principales du Conseil d'État dans le système institutionnel français ?",
    options: [
      "Conseiller juridique du Gouvernement pour les projets de loi et plus haute juridiction administrative",
      "Chambre haute du Parlement et cour d'appel pour les décisions de l'Assemblée nationale",
      "Tribunal pénal pour les crimes politiques et cour de cassation pour les affaires civiles",
      "Organe de contrôle du budget de l'État et juridiction financière suprême de la République"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 16, 0),
    explication: "Le Conseil d'État a deux fonctions : conseiller le Gouvernement sur les projets de textes juridiques et juger en dernier ressort les litiges administratifs."
  },
  {
    id: 17,
    categorie: "Système institutionnel et politique",
    sousCategorie: "Cour des comptes",
    question: "Quelle est la mission principale de la Cour des comptes dans le contrôle de l'action publique ?",
    options: [
      "Contrôler la régularité et l'efficacité de l'utilisation des fonds publics par les administrations",
      "Juger les infractions pénales commises par les fonctionnaires dans l'exercice de leurs fonctions",
      "Vérifier la constitutionnalité des lois votées par le Parlement avant leur promulgation",
      "Gérer le budget de l'État et répartir les crédits entre les différents ministères"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 17, 0),
    explication: "La Cour des comptes contrôle la régularité et l'efficacité de l'utilisation de l'argent public. Elle produit un rapport annuel rendu public."
  },

  // ==================== 3. DROITS ET DEVOIRS (11 questions) ====================
  
  {
    id: 18,
    categorie: "Droits et devoirs",
    sousCategorie: "Droits naturels DDHC",
    question: "Quels sont les quatre droits naturels et imprescriptibles de l'homme selon l'article 2 de la DDHC de 1789 ?",
    options: [
      "La liberté, la propriété, la sûreté et la résistance à l'oppression, droits inaliénables de tout être humain",
      "Le travail, le logement, l'éducation et la santé, droits sociaux garantis par l'État providence",
      "Le vote, l'éligibilité, la nationalité et la citoyenneté, droits politiques des seuls nationaux",
      "La vie, la dignité, l'intégrité physique et la liberté de mouvement, droits fondamentaux contemporains"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 18, 0),
    explication: "L'article 2 de la DDHC définit quatre droits naturels et imprescriptibles : la liberté, la propriété, la sûreté et la résistance à l'oppression."
  },
  {
    id: 19,
    categorie: "Droits et devoirs",
    sousCategorie: "Présomption d'innocence",
    question: "Qu'implique le principe de présomption d'innocence garanti par l'article 9 de la DDHC ?",
    options: [
      "Toute personne accusée est considérée innocente jusqu'à ce que sa culpabilité soit légalement établie",
      "Toute personne arrêtée doit être immédiatement libérée sans possibilité de détention provisoire",
      "Les juges doivent acquitter systématiquement les accusés en cas de doute sur leur culpabilité",
      "La police ne peut procéder à aucune arrestation sans une condamnation préalable par un tribunal"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 19, 0),
    explication: "La présomption d'innocence signifie que toute personne est considérée innocente jusqu'à ce qu'un tribunal établisse sa culpabilité. C'est un droit fondamental."
  },
  {
    id: 20,
    categorie: "Droits et devoirs",
    sousCategorie: "Secret du vote",
    question: "Pourquoi le secret du vote est-il garanti et comment est-il assuré lors des scrutins ?",
    options: [
      "Pour garantir la liberté de choix de l'électeur, assuré par l'isoloir et l'enveloppe fermée obligatoires",
      "Pour permettre aux candidats de vérifier qui a voté pour eux après le dépouillement",
      "Pour faciliter le comptage des voix par les assesseurs du bureau de vote",
      "Pour permettre aux électeurs de voter par correspondance sans se déplacer au bureau de vote"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 20, 0),
    explication: "Le secret du vote garantit la liberté de choix de l'électeur. Il est assuré par le passage obligatoire par l'isoloir et l'utilisation d'enveloppes fermées."
  },
  {
    id: 21,
    categorie: "Droits et devoirs",
    sousCategorie: "Devoir de contribution",
    question: "Qu'implique l'article 13 de la DDHC concernant la contribution commune aux charges publiques ?",
    options: [
      "Chacun doit contribuer aux dépenses publiques selon ses capacités, fondement du système fiscal français",
      "Seuls les propriétaires fonciers doivent payer des impôts pour financer les services publics",
      "Les impôts sont facultatifs et chaque citoyen choisit librement de contribuer ou non",
      "L'État doit assurer la gratuité totale de tous les services sans aucun prélèvement fiscal"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 21, 0),
    explication: "L'article 13 de la DDHC fonde l'obligation fiscale : la contribution commune doit être répartie entre tous selon leurs facultés. C'est le fondement de l'impôt."
  },
  {
    id: 22,
    categorie: "Droits et devoirs",
    sousCategorie: "Droit à l'éducation",
    question: "Qui peut bénéficier du droit à l'instruction gratuite dans l'école publique française ?",
    options: [
      "Tous les enfants résidant en France, quelle que soit leur nationalité ou leur situation administrative",
      "Uniquement les enfants de nationalité française nés sur le territoire national",
      "Les enfants de familles payant des impôts en France depuis au moins 5 ans",
      "Uniquement les enfants dont les parents sont inscrits sur les listes électorales"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 22, 0),
    explication: "Tous les enfants résidant en France ont droit à l'instruction gratuite, quelle que soit leur nationalité ou la situation administrative de leurs parents."
  },
  {
    id: 23,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation recensement",
    question: "À quel âge devez-vous vous faire recenser auprès de votre mairie et pourquoi est-ce obligatoire ?",
    options: [
      "À 16 ans, pour être convoqué à la Journée Défense et Citoyenneté et pouvoir passer des examens",
      "À 18 ans, pour obtenir automatiquement le droit de vote aux élections nationales",
      "À 21 ans, pour être éligible aux fonctions électives municipales et départementales",
      "À 25 ans, pour pouvoir demander la nationalité française par naturalisation"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 23, 0),
    explication: "Le recensement est obligatoire à 16 ans. Il permet d'être convoqué à la JDC et est nécessaire pour s'inscrire aux examens (bac, permis de conduire...)."
  },
  {
    id: 24,
    categorie: "Droits et devoirs",
    sousCategorie: "Droit au logement",
    question: "Le droit au logement est-il reconnu en France et comment peut-on le faire valoir ?",
    options: [
      "Oui, c'est un objectif à valeur constitutionnelle ; le DALO permet de saisir une commission en cas de mal-logement",
      "Non, le logement relève exclusivement de la responsabilité individuelle de chaque citoyen",
      "Oui, l'État doit fournir gratuitement un logement à toute personne qui en fait la demande",
      "Non, seuls les propriétaires ont des droits en matière de logement en France"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 24, 0),
    explication: "Le droit au logement est un objectif à valeur constitutionnelle. Le Droit au Logement Opposable (DALO) permet aux mal-logés de saisir une commission pour faire valoir ce droit."
  },
  {
    id: 25,
    categorie: "Droits et devoirs",
    sousCategorie: "Obligation de témoigner",
    question: "Êtes-vous obligé de témoigner si vous êtes cité comme témoin dans une affaire judiciaire ?",
    options: [
      "Oui, le refus de témoigner sans motif légitime est une infraction punie par la loi française",
      "Non, le témoignage est toujours facultatif pour protéger la vie privée des citoyens",
      "Oui, sauf si vous êtes un proche de l'accusé, auquel cas vous êtes automatiquement dispensé",
      "Non, seuls les fonctionnaires et agents publics ont l'obligation légale de témoigner"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 25, 0),
    explication: "Le témoignage en justice est une obligation civique. Le refus de témoigner ou le faux témoignage sont des infractions punies par la loi."
  },
  {
    id: 26,
    categorie: "Droits et devoirs",
    sousCategorie: "Mise en situation accident",
    question: "Vous assistez à un accident de la route avec des blessés. Quelle est votre obligation légale ?",
    options: [
      "Protéger, alerter les secours (15, 18, 112), secourir si possible ; la non-assistance est un délit pénal",
      "Ne rien faire pour ne pas aggraver la situation car seuls les professionnels peuvent intervenir",
      "Prendre des photos de l'accident pour les assurances puis continuer votre route normalement",
      "Attendre l'arrivée de la police sans bouger ni parler aux victimes pour préserver les preuves"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 26, 0),
    explication: "Face à un accident, vous devez protéger les lieux, alerter les secours (15, 18, 112) et secourir si possible. La non-assistance à personne en danger est un délit."
  },
  {
    id: 27,
    categorie: "Droits et devoirs",
    sousCategorie: "Respect environnement",
    question: "Quelles obligations environnementales découlent de la Charte de l'environnement intégrée à la Constitution ?",
    options: [
      "Le devoir de prendre part à la préservation de l'environnement et de réparer les dommages causés",
      "L'interdiction totale d'utiliser tout véhicule à moteur thermique depuis 2020",
      "L'obligation de recycler 100% de ses déchets ménagers sous peine d'amende forfaitaire",
      "Le paiement d'une taxe carbone personnelle calculée sur le nombre de kilomètres parcourus"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 27, 0),
    explication: "La Charte de l'environnement de 2004, intégrée à la Constitution, impose à chacun de prendre part à la préservation de l'environnement et de réparer les dommages causés."
  },
  {
    id: 28,
    categorie: "Droits et devoirs",
    sousCategorie: "Liberté de manifestation",
    question: "Le droit de manifester est-il garanti en France et quelles sont les obligations à respecter ?",
    options: [
      "Oui, c'est une liberté fondamentale mais les manifestations sur la voie publique doivent être déclarées en préfecture",
      "Non, toute manifestation est interdite car elle trouble l'ordre public et la circulation",
      "Oui, aucune formalité n'est requise car la liberté de manifester est absolue et sans restriction",
      "Oui, mais uniquement pour les syndicats et partis politiques officiellement reconnus par l'État"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 28, 0),
    explication: "Le droit de manifester est une liberté fondamentale. Les manifestations sur la voie publique doivent être déclarées en préfecture au moins 3 jours avant."
  },

  // ==================== 4. HISTOIRE, GÉOGRAPHIE ET CULTURE (8 questions) ====================
  
  {
    id: 29,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "République et ses formes",
    question: "Combien de Républiques la France a-t-elle connues depuis 1792 et laquelle est actuellement en vigueur ?",
    options: [
      "Cinq Républiques : la Ve République, instaurée en 1958, est actuellement en vigueur sous forme présidentielle",
      "Trois Républiques : la IIIe République, la plus longue, est toujours en application depuis 1870",
      "Une seule République continue depuis 1789 avec différentes constitutions successives",
      "Sept Républiques, la VIIe ayant été instaurée lors de la réforme constitutionnelle de 2008"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 29, 0),
    explication: "La France a connu cinq Républiques. La Ve République a été instaurée en 1958 par le général de Gaulle. Elle se caractérise par un régime semi-présidentiel."
  },
  {
    id: 30,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Seconde Guerre mondiale",
    question: "Quels événements majeurs ont marqué la participation de la France à la Seconde Guerre mondiale ?",
    options: [
      "La défaite de 1940, l'Occupation, la Résistance, la France libre de De Gaulle et la Libération en 1944",
      "La victoire rapide sur l'Allemagne en 1939, l'occupation de Berlin et la capitulation allemande en 1940",
      "La neutralité totale de la France pendant le conflit et son rôle de médiateur entre les belligérants",
      "L'alliance avec l'Allemagne nazie de 1939 à 1943 puis le retournement d'alliance après Stalingrad"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 30, 0),
    explication: "La France a été vaincue en 1940 et occupée. La Résistance intérieure et la France libre de De Gaulle ont contribué à la Libération en 1944."
  },
  {
    id: 31,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Décolonisation",
    question: "Comment la France a-t-elle procédé à la décolonisation de son empire colonial après 1945 ?",
    options: [
      "Par des indépendances négociées ou des guerres (Indochine 1954, Algérie 1962), avec maintien de liens avec les anciennes colonies",
      "Par un transfert pacifique et immédiat de souveraineté à toutes les colonies dès 1945",
      "Par le maintien de tous les territoires coloniaux comme départements d'outre-mer français",
      "Par la vente des colonies aux États-Unis et à la Grande-Bretagne contre des compensations financières"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 31, 0),
    explication: "La décolonisation s'est faite par des indépendances négociées ou des guerres (Indochine, Algérie). La France conserve des liens étroits avec ses anciennes colonies."
  },
  {
    id: 32,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Hexagone",
    question: "Pourquoi la France métropolitaine est-elle surnommée l'Hexagone et quelle est sa superficie ?",
    options: [
      "En raison de sa forme géométrique à six côtés ; elle couvre environ 551 000 km² pour 68 millions d'habitants",
      "En raison du nombre de ses régions métropolitaines fixé à six par la Constitution de 1958",
      "En référence aux six pays frontaliers avec lesquels elle partage des frontières terrestres",
      "En hommage aux six rois qui ont unifié le territoire français au cours du Moyen Âge"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 32, 0),
    explication: "La France métropolitaine est appelée l'Hexagone en raison de sa forme géométrique. Elle couvre environ 551 000 km² et compte environ 68 millions d'habitants."
  },
  {
    id: 33,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Pays frontaliers",
    question: "Avec quels pays la France métropolitaine partage-t-elle une frontière terrestre ?",
    options: [
      "Belgique, Luxembourg, Allemagne, Suisse, Italie, Monaco, Espagne et Andorre (8 pays)",
      "Uniquement l'Allemagne, l'Espagne et l'Italie, les trois grands voisins européens",
      "Belgique, Pays-Bas, Allemagne, Autriche et Suisse au nord et à l'est du territoire",
      "Espagne, Portugal, Italie et Grèce au sud, pays méditerranéens de l'Union européenne"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 33, 0),
    explication: "La France métropolitaine a des frontières terrestres avec 8 pays : Belgique, Luxembourg, Allemagne, Suisse, Italie, Monaco, Espagne et Andorre."
  },
  {
    id: 34,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Francophonie",
    question: "Qu'est-ce que la Francophonie et quel est son rôle dans le monde ?",
    options: [
      "L'ensemble des pays et régions où le français est parlé, représentant 321 millions de locuteurs dans le monde",
      "Un mouvement politique visant à imposer la langue française comme langue officielle de l'ONU",
      "Une organisation militaire regroupant les anciennes colonies françaises pour leur défense commune",
      "Un programme économique d'aide au développement financé exclusivement par la France"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 34, 0),
    explication: "La Francophonie regroupe les pays et régions où le français est parlé. L'Organisation internationale de la Francophonie (OIF) promeut la langue française et les valeurs qu'elle véhicule."
  },
  {
    id: 35,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Gastronomie UNESCO",
    question: "Quel aspect de la culture française a été inscrit au patrimoine culturel immatériel de l'UNESCO en 2010 ?",
    options: [
      "Le repas gastronomique des Français, avec ses rituels et sa convivialité autour de la table",
      "La Tour Eiffel comme symbole de l'ingénierie française et du génie architectural",
      "La langue française comme patrimoine linguistique universel de l'humanité",
      "Le système éducatif français comme modèle d'enseignement républicain laïque"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 35, 0),
    explication: "Le repas gastronomique des Français a été inscrit au patrimoine culturel immatériel de l'UNESCO en 2010. Il célèbre l'art de bien manger et la convivialité."
  },
  {
    id: 36,
    categorie: "Histoire, géographie et culture",
    sousCategorie: "Grandes figures lettres",
    question: "Quel philosophe des Lumières, auteur du Contrat social, a influencé les principes de la Révolution française ?",
    options: [
      "Jean-Jacques Rousseau, dont les idées sur la souveraineté populaire ont inspiré la Déclaration de 1789",
      "René Descartes, fondateur du rationalisme moderne et auteur du Discours de la méthode",
      "Blaise Pascal, mathématicien et philosophe auteur des Pensées sur la condition humaine",
      "Michel de Montaigne, humaniste de la Renaissance auteur des Essais sur la nature humaine"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 36, 0),
    explication: "Jean-Jacques Rousseau (1712-1778), philosophe des Lumières, a influencé la Révolution française avec ses idées sur la souveraineté populaire et le contrat social."
  },

  // ==================== 5. VIVRE DANS LA SOCIÉTÉ FRANÇAISE (4 questions) ====================
  
  {
    id: 37,
    categorie: "Vivre dans la société française",
    sousCategorie: "Pôle emploi",
    question: "Quel organisme accompagne les demandeurs d'emploi dans leur recherche de travail et gère l'assurance chômage ?",
    options: [
      "France Travail (anciennement Pôle emploi), service public de l'emploi issu de la fusion ANPE-Assedic en 2008",
      "La Caisse d'Allocations Familiales (CAF), qui gère toutes les prestations sociales françaises",
      "L'Inspection du travail, service de contrôle du respect du droit du travail dans les entreprises",
      "La Caisse Primaire d'Assurance Maladie (CPAM), branche maladie de la Sécurité sociale"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 37, 0),
    explication: "France Travail (ex-Pôle emploi) accompagne les demandeurs d'emploi, gère l'inscription et l'indemnisation chômage, et aide à la recherche d'emploi."
  },
  {
    id: 38,
    categorie: "Vivre dans la société française",
    sousCategorie: "Aide juridictionnelle",
    question: "Qu'est-ce que l'aide juridictionnelle et qui peut en bénéficier ?",
    options: [
      "Une prise en charge totale ou partielle des frais de justice pour les personnes aux revenus modestes",
      "Un service de conseil juridique gratuit réservé exclusivement aux citoyens français",
      "Une assurance obligatoire couvrant tous les frais de justice pour l'ensemble de la population",
      "Un fonds d'indemnisation des victimes d'erreurs judiciaires géré par le ministère de la Justice"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 38, 0),
    explication: "L'aide juridictionnelle permet aux personnes aux revenus modestes de bénéficier d'une prise en charge totale ou partielle des frais de justice (avocat, huissier...)."
  },
  {
    id: 39,
    categorie: "Vivre dans la société française",
    sousCategorie: "Transport public",
    question: "Quel titre de transport permet de circuler librement dans les transports en commun d'Île-de-France ?",
    options: [
      "Le pass Navigo, carte nominative permettant l'accès à tous les transports franciliens (métro, bus, RER, tramway)",
      "Le ticket de métro unitaire valable uniquement pour un trajet dans le métro parisien intra-muros",
      "La carte Vitale, carte d'assurance maladie utilisée également pour les transports publics",
      "Le permis de conduire, seul document permettant d'accéder aux transports en commun en France"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 39, 0),
    explication: "Le pass Navigo est une carte nominative permettant de circuler dans tous les transports en commun d'Île-de-France : métro, bus, RER, tramway."
  },
  {
    id: 40,
    categorie: "Vivre dans la société française",
    sousCategorie: "Compte bancaire",
    question: "Le droit au compte bancaire est-il garanti en France et comment peut-on le faire valoir ?",
    options: [
      "Oui, toute personne peut demander à la Banque de France de désigner une banque obligée de lui ouvrir un compte",
      "Non, les banques sont libres de refuser d'ouvrir un compte sans avoir à justifier leur décision",
      "Oui, mais uniquement pour les citoyens français disposant d'un emploi stable et déclaré",
      "Non, l'ouverture d'un compte bancaire dépend exclusivement du bon vouloir des établissements bancaires"
    ],
    correctHash: hashAnswer(EXAM_NUMBER, 40, 0),
    explication: "Le droit au compte est garanti. En cas de refus d'ouverture par une banque, vous pouvez saisir la Banque de France qui désignera un établissement obligé de vous ouvrir un compte."
  }
];

export const EXAMEN_3: ExamenBlanc = {
  numero: 3,
  titre: "Examen blanc #3",
  description: "40 questions en conditions réelles d'examen",
  questions: questions,
  dureeMinutes: 45,
  totalQuestions: 40
};
