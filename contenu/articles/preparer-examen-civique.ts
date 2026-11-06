import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 06/11/2026 (`docs/seo/ROBOT.md`). Pas de
 * règle des 24 heures ce jour (JORF n° 0259 et n° 0260 des 05 et 06/11 : un
 * seul texte filtré, une reconduction à la CNDA). Familles Test Civique
 * pratique et examen civique. Requêtes visées : « préparer examen civique »
 * (100 à 1 k, + 900 % sur trois mois) et « révision examen civique »
 * (100 à 1 k), Planificateur de mots clés, France, mesures du 25/10 et du
 * 02/11/2026. Sources lues le 06/11/2026 : formation-civique.interieur.gouv.fr
 * (informations générales sur l'examen). Répartition des questions par
 * thématique : arrêté du 10/10/2025, article 3, lu le 28/10/2026. Délai de
 * 24 heures entre deux passages et sanction de la fraude : manuel du candidat
 * de FEI et pages de la CCIP, lus le 28/10/2026.
 */
const article: Article = {
  slug: "preparer-examen-civique",
  titre: "Préparer l'examen civique en 4 semaines : le plan qui suit le poids officiel de chaque thème",
  titreSeo: "Préparer l'examen civique : le plan en 4 semaines",
  resume: "Un plan de révision de 4 semaines pour l'examen civique, calé sur le poids de chaque thème : quoi réviser chaque semaine, avec quelles ressources.",
  chapo: "Pour préparer l'examen civique, commencez par les deux thématiques qui comptent le plus : les principes et valeurs de la République, et les droits et devoirs. Elles font ==22 questions sur 40==. Voici un plan simple en 4 semaines, à raison d'environ 30 minutes par jour, qui suit le poids officiel de chaque thème.",
  publieLe: "2026-11-06",
  modifieLe: "2026-11-06",
  minutes: 8,
  theme: "préparer l'examen civique",
  motsCles: [
    "préparer examen civique",
    "révision examen civique",
    "réviser examen civique",
    "préparation examen civique",
    "plan de révision examen civique",
    "entraînement examen civique",
    "réussir examen civique",
  ],
  rubrique: "preparation",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/preparer-examen-civique.webp",
    alt: "La salle de lecture de la bibliothèque Mazarine à Paris, avec ses longues tables, ses lampes vertes et ses murs couverts de livres",
    largeur: 1200,
    hauteur: 705,
    credit: "Remi Mathis & Marie-Lan Nguyen, via Wikimedia Commons",
    licence: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Salle_de_lecture_Biblioth%C3%A8que_Mazarine_depuis_gallerie.jpg",
  },
  blocs: [
    {
      type: "h2",
      texte: "Combien de temps faut-il pour préparer l'examen civique ?",
    },
    {
      type: "p",
      texte: "Aucun texte officiel ne fixe une durée de préparation. Nous proposons ici 4 semaines, avec environ 30 minutes par jour. C'est assez pour lire les 5 thématiques une fois, revenir sur ce qui coince et vous entraîner en conditions réelles. Si la lecture en français vous demande du temps, prenez 6 semaines : le plan reste le même.",
    },
    {
      type: "p",
      texte: "L'examen civique est un questionnaire de 40 questions en français. Il est obligatoire depuis le 1er janvier 2026 pour une ==première== carte de séjour pluriannuelle (CSP) ou une première carte de résident (CR) ([page officielle de l'examen](https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/)). La CSP est un titre de séjour de 2 à 4 ans. La carte de résident dure 10 ans. Un titre de séjour est la carte qui vous autorise à vivre en France. L'examen existe aussi pour la naturalisation, avec sa propre liste : voir notre article sur [l'examen civique pour la naturalisation](/articles/examen-civique-naturalisation).",
    },
    {
      type: "encadre",
      titre: "Pas de raison d'attendre la dernière semaine",
      texte: "L'attestation de réussite ==n'a pas de durée de validité==, selon le ministère de l'Intérieur. Vous pouvez donc passer l'examen dès que le moment est venu, bien avant votre rendez-vous en préfecture. La préfecture est le service de l'État qui instruit votre demande de titre.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Que compte vraiment l'examen ?",
    },
    {
      type: "p",
      texte: "L'examen dure 45 minutes au plus, sur tablette ou ordinateur. Chaque question a 4 réponses, dont une seule est juste. Il faut ==32 bonnes réponses sur 40== pour réussir, soit 80 %. Il y a 28 questions de connaissance et 12 mises en situation. Une mise en situation décrit un cas de la vie courante et vous demande la bonne réaction.",
    },
    {
      type: "p",
      texte: "Les thèmes n'ont pas le même poids. L'[arrêté du 10 octobre 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620), le texte qui organise l'examen, fixe la répartition dans son article 3 :",
    },
    {
      type: "tableau",
      entetes: ["Thématique", "Questions", "Dont mises en situation", "Semaine du plan"],
      lignes: [
        ["Principes et valeurs de la République", "11", "6", "Semaine 2"],
        ["Droits et devoirs", "11", "6", "Semaine 2"],
        ["Système institutionnel et politique", "6", "0", "Semaine 3"],
        ["Histoire, géographie et culture", "8", "0", "Semaine 3"],
        ["Vivre dans la société française", "4", "0", "Semaine 3"],
      ],
      legende: "Source : arrêté du 10 octobre 2025, article 3 (Légifrance, lu le 28/10/2026).",
    },
    {
      type: "p",
      texte: "La leçon est simple : les 12 mises en situation tombent toutes sur les deux premières thématiques. Les apprendre par cœur ne suffit pas, il faut les comprendre. C'est pourquoi le plan leur donne une semaine entière.",
    },
    {
      type: "h2",
      texte: "Semaine 1 : faire le point et choisir la bonne liste",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Vérifiez que l'examen vous concerne.** Le renouvellement d'une CSP ou d'une carte de résident déjà obtenue n'en demande pas. Le [simulateur d'éligibilité](/eligibilite-examen-civique) répond en une minute.",
        "**Choisissez votre niveau.** Il y a une liste pour la CSP et une pour la carte de résident, plus difficile. Notre article sur [l'examen pour la carte de résident](/articles/examen-civique-carte-de-resident) compare les deux.",
        "**Faites un premier test sans réviser.** Le score compte peu. Ce qui compte, c'est la liste des thèmes où vous perdez des points.",
        "**Lisez une fois les fiches officielles des 5 thématiques**, sans chercher à tout retenir. Elles sont gratuites sur [formation-civique.interieur.gouv.fr](https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/). Notre [mode d'emploi du site officiel](/articles/formation-civique-site-officiel) vous guide.",
      ],
    },
    {
      type: "p",
      texte: "Le ministère le rappelle sur sa page : la préparation « peut se faire de manière totalement gratuite ». Il cite aussi un quiz gratuit de l'association France Fraternité, en prévenant que son format peut différer de l'examen.",
    },
    {
      type: "h2",
      texte: "Semaine 2 : principes et valeurs, droits et devoirs",
    },
    {
      type: "p",
      texte: "C'est la semaine la plus importante : 22 questions sur 40 et toutes les mises en situation. Travaillez chaque jour une notion, puis demandez-vous comment elle s'applique dans la vie réelle.",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**La devise et les symboles** : Liberté, Égalité, Fraternité, le drapeau, la Marseillaise, Marianne, le 14 juillet.",
        "**La laïcité** : la liberté de croire ou de ne pas croire, la neutralité de l'État, ce qui change entre un agent public et un salarié du privé.",
        "**L'égalité femmes-hommes** et le refus des discriminations.",
        "**Les droits et les devoirs** : voter quand on est citoyen, payer ses impôts, envoyer ses enfants à l'école, respecter la loi.",
      ],
    },
    {
      type: "p",
      texte: "Pour chaque notion, posez-vous la question d'une mise en situation : « Que doit faire cette personne ? Qui a le droit de décider ? » Notre article sur [les pièges du QCM](/articles/erreurs-frequentes-test-civique-2026-pieges-qcm) montre les erreurs qui reviennent le plus.",
    },
    {
      type: "qcm",
      thematique: "Principes et valeurs de la République",
      question: "Une employée de mairie accueille le public à son guichet. Que lui impose le principe de laïcité pendant son service ?",
      choix: [
        "Rien, elle fait comme elle veut",
        "Elle doit rester neutre sur le plan religieux",
        "Elle doit dire sa religion aux usagers",
        "Elle doit refuser les usagers d'une autre religion",
      ],
      reponse: 1,
      explication: "Dans les institutions publiques, les agents sont soumis au principe de neutralité : ils ne manifestent pas leur religion pendant leur service et traitent tous les usagers de la même façon. Le référentiel de l'examen cite ce point dans la laïcité au travail. Ceci est une question type, écrite par nous, pas une question de l'examen officiel.",
    },
    {
      type: "h2",
      texte: "Semaine 3 : institutions, histoire et vie en France",
    },
    {
      type: "p",
      texte: "Ces trois thématiques font 18 questions, toutes de connaissance. Ici, la mémoire paie. La liste officielle des questions est votre meilleur outil. Lisez une thématique par jour et cochez ce que vous ne savez pas. Cherchez la réponse dans la fiche, puis refaites la liste le lendemain.",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Institutions** (6 questions) : le président de la République, le Premier ministre, l'Assemblée nationale et le Sénat, la commune, l'Union européenne.",
        "**Histoire, géographie et culture** (8 questions) : les grandes dates, les régions, l'outre-mer, quelques grandes figures de la culture.",
        "**Vivre en France** (4 questions) : la santé, l'école, le travail, les numéros d'urgence. Notre article sur [les numéros d'urgence](/articles/numeros-urgence-france) couvre un point souvent demandé.",
      ],
    },
    {
      type: "h2",
      texte: "Semaine 4 : s'entraîner en conditions réelles",
    },
    {
      type: "p",
      texte: "La dernière semaine sert à passer des examens blancs complets : 40 questions, 45 minutes, sans pause ni aide. Notez à chaque fois les thèmes où vous perdez des points, et revoyez seulement ceux-là. Visez une marge au-dessus de 32 sur 40 : le stress du jour J peut coûter une ou deux réponses.",
    },
    {
      type: "cta",
      texte: "Les listes officielles n'ont ni réponses ni mises en situation. Sur Test Civique France, les cours des 5 thématiques sont gratuits, et les examens blancs de 40 questions vous donnent un résultat par thématique. L'inscription est gratuite.",
      bouton: "Commencer ma préparation",
    },
    {
      type: "p",
      texte: "Cette semaine, inscrivez-vous aussi à une session. Deux organismes sont agréés : la CCI Paris Île-de-France (CCIP) et France Éducation international (FEI). Le prix est fixé par le centre, de 60 à 80 € selon le ministère ([réponse ministérielle publiée le 11 août 2026](https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE11488)). Notre article sur [les centres agréés](/articles/centres-agrees-examen-civique-2026) vous aide à trouver une date proche.",
    },
    {
      type: "image",
      src: "/images/articles/preparer-examen-civique.webp",
      alt: "Une grande salle de lecture vue d'une galerie, avec des tables alignées, des lampes allumées et des rayonnages sur deux étages",
      legende: "La salle de lecture de la bibliothèque Mazarine, à Paris : 30 minutes par jour pendant 4 semaines suffisent pour suivre le plan.",
      credit: "Remi Mathis & Marie-Lan Nguyen, via Wikimedia Commons",
      licence: "CC BY-SA 3.0",
      source: "https://commons.wikimedia.org/wiki/File:Salle_de_lecture_Biblioth%C3%A8que_Mazarine_depuis_gallerie.jpg",
      largeur: 1200,
      hauteur: 705,
    },
    {
      type: "h2",
      texte: "Que faire la veille et le jour de l'examen ?",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Pas de nouvelle notion la veille.** Relisez seulement vos erreurs des examens blancs.",
        "**Préparez vos papiers** : la convocation et une pièce d'identité valide. Notre liste des [documents à apporter](/articles/documents-test-civique-2026-convocation-piece-identite) détaille ce qui est accepté.",
        "**Laissez votre téléphone où le centre l'indique.** Une fraude ou une tentative de fraude peut vous interdire de repasser l'examen pendant ==2 ans== (arrêté du 10 octobre 2025).",
      ],
    },
    {
      type: "p",
      texte: "Et si le score n'y est pas ? L'examen se repasse « autant de fois que nécessaire », selon le ministère, avec ==24 heures== d'attente entre deux passages chez FEI comme à la CCIP. Notre article sur [le résultat de l'examen](/articles/resultat-examen-civique) explique où le trouver, et celui sur [l'échec à l'examen](/articles/rater-examen-civique-2026-repasser-delai-cout-themes-echec) dit comment repartir. Le meilleur conseil reste le premier : commencez par les principes et valeurs, et par les droits et devoirs. Plus de la moitié de la note se joue là.",
    },
  ],
  faq: [
    {
      question: "Comment préparer l'examen civique ?",
      reponse: "Commencez par lire les fiches gratuites des 5 thématiques sur formation-civique.interieur.gouv.fr. Travaillez d'abord les principes et valeurs de la République et les droits et devoirs : ils font 22 questions sur 40, dont les 12 mises en situation. Apprenez ensuite la liste officielle des questions, puis terminez par des examens blancs de 40 questions en 45 minutes.",
    },
    {
      question: "Combien de temps pour réviser l'examen civique ?",
      reponse: "Aucun texte ne fixe de durée. Un plan de 4 semaines, avec environ 30 minutes par jour, laisse le temps de lire les 5 thématiques, de revoir ce qui coince et de s'entraîner en conditions réelles. Si la lecture en français vous prend du temps, prévoyez 6 semaines. L'attestation de réussite n'a pas de durée de validité : rien n'oblige à attendre.",
    },
    {
      question: "Quel est le thème le plus important à l'examen civique ?",
      reponse: "Deux thématiques pèsent le plus : les principes et valeurs de la République (11 questions) et les droits et devoirs (11 questions), selon l'arrêté du 10 octobre 2025. Elles portent aussi les 12 mises en situation. Viennent ensuite l'histoire, la géographie et la culture (8), le système institutionnel et politique (6) et la vie en France (4).",
    },
    {
      question: "Peut-on préparer l'examen civique gratuitement ?",
      reponse: "Oui. Le ministère de l'Intérieur publie gratuitement les fiches des 5 thématiques et les listes officielles des questions de connaissance, sans compte à créer. Il indique que la préparation peut se faire de manière totalement gratuite. Les listes ne donnent ni les réponses ni les mises en situation, qui ne sont pas publiées.",
    },
  ],
  sources: [
    {
      titre: "Ministère de l'Intérieur : informations générales sur l'examen civique (40 questions, 28 de connaissance et 12 mises en situation, 45 minutes, 32 bonnes réponses, préparation gratuite, attestation sans durée de validité)",
      url: "https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/",
      type: "officiel",
      luLe: "2026-11-06",
    },
    {
      titre: "Ministère de l'Intérieur : fiches par thématique de la formation civique",
      url: "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/",
      type: "officiel",
      luLe: "2026-11-06",
    },
    {
      titre: "Légifrance : arrêté du 10 octobre 2025 relatif au programme, aux épreuves et aux modalités d'organisation de l'examen civique (article 3, répartition par thématique ; sanction de la fraude)",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620",
      type: "officiel",
      luLe: "2026-10-28",
    },
    {
      titre: "France Éducation international : manuel du candidat à l'examen civique, version B, septembre 2026 (réinscriptions, sanctions)",
      url: "https://www.france-education-international.fr/document/manuelcandidatexamencivique",
      type: "officiel",
      luLe: "2026-10-28",
    },
    {
      titre: "CCI Paris Île-de-France (Le français des affaires) : examen civique, comprendre ses résultats",
      url: "https://www.lefrancaisdesaffaires.fr/candidat/examen-civique/resultats/",
      type: "officiel",
      luLe: "2026-10-28",
    },
    {
      titre: "Assemblée nationale : question écrite n° 11488, réponse du ministère de l'Intérieur publiée le 11/08/2026 (prix de 60 à 80 €, examen repassable)",
      url: "https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE11488",
      type: "officiel",
      luLe: "2026-10-28",
    },
  ],
};

export default article;
