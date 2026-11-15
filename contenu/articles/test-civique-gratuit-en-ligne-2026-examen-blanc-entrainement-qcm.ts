import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 sans changer d'adresse, puis réécrit par le robot
 * éditorial le 15/11/2026 (`docs/seo/ROBOT.md`, optimisation de priorité 1 :
 * article faux). La version migrée disait l'examen obligatoire pour un
 * renouvellement et le regroupement familial (faux : première CSP et première
 * carte de résident seulement), un prix de 90 € (60 à 80 € selon le
 * ministère), un délai de 30 jours avant de repasser (aucun délai de ce type
 * sur la page officielle), 6 mises en situation (12), une tablette seulement
 * (tablette ou ordinateur), un résultat d'examen blanc « par thématique » (la
 * plateforme donne le score, le temps et la correction question par question ;
 * la progression par thème vient des quiz d'entraînement), et « 95 % de
 * réussite » sans aucune donnée. Tout cela est retiré ou corrigé.
 * Requête visée : « test civique gratuit » (1 k à 10 k ; Planificateur, France,
 * French, 15/11/2026), avec « examen civique gratuit », « examen civique en
 * ligne » et « simulation examen civique » (100 à 1 k chacune).
 * Sources lues le 15/11/2026 : formation-civique.interieur.gouv.fr
 * « Informations générales sur l'examen civique ». Lues avant : arrêté du
 * 10/10/2025 (art. 3, 28/10/2026), QE n° 11488 (28/10/2026).
 */
const article: Article = {
  slug: "test-civique-gratuit-en-ligne-2026-examen-blanc-entrainement-qcm",
  titre: "Test civique gratuit en ligne : où s'entraîner sans payer, et à quoi sert un examen blanc",
  titreSeo: "Test civique gratuit : s'entraîner en ligne",
  resume: "Les ressources gratuites et officielles pour préparer l'examen civique, ce que vaut un examen blanc en 40 questions, et les pièges des sites payants.",
  chapo: "Oui, vous pouvez préparer l'examen civique ==gratuitement== : le ministère de l'Intérieur publie les fiches et les listes officielles de questions, sans compte à créer. Ce qui n'est pas gratuit, c'est l'examen lui-même, passé dans un centre agréé. Voici où vous entraîner, et comment tirer parti d'un examen blanc.",
  publieLe: "2026-03-29",
  modifieLe: "2026-11-15",
  minutes: 7,
  theme: "S'entraîner gratuitement à l'examen civique en ligne : ressources officielles, examens blancs et pièges",
  motsCles: [
    "test civique gratuit",
    "test civique gratuit en ligne",
    "examen civique gratuit",
    "examen civique en ligne",
    "simulation examen civique",
    "examen blanc examen civique",
    "test civique blanc",
    "entraînement examen civique",
    "qcm examen civique",
  ],
  rubrique: "preparation",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/test-civique-gratuit-en-ligne.webp",
    alt: "Petit bureau de révision éclairé par une lampe, avec un ordinateur portable fermé, des cahiers, des crayons et deux feuilles blanches au mur",
    largeur: 1024,
    hauteur: 660,
    credit: "dejankrsmanovic, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/155403590@N07/48210800471",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Article corrigé le 15 novembre 2026",
      texte: "La version précédente contenait des erreurs. L'examen n'est pas exigé pour un renouvellement. Son prix est fixé par les centres, de 60 à 80 € selon le ministère. Et aucun délai de 30 jours n'existe avant de le repasser. Un taux de réussite sans source a été retiré.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "L'examen civique en bref : qui, quoi, combien ?",
    },
    {
      type: "p",
      texte: "L'examen civique vérifie que vous connaissez les principes de la République et le fonctionnement de la société française. Depuis le 1er janvier 2026, il est exigé pour une ==première== carte de séjour pluriannuelle (CSP) ou une ==première== carte de résident (CR). C'est ce qu'indique le [site officiel de la formation civique](https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/). La carte pluriannuelle est un titre de séjour de plusieurs années. La carte de résident dure 10 ans.",
    },
    {
      type: "tableau",
      entetes: ["Point", "Ce que dit le ministère"],
      lignes: [
        ["Questions", "40 QCM en français, 1 bonne réponse sur 4"],
        ["Types", "28 questions de connaissance et 12 mises en situation"],
        ["Durée", "45 minutes au plus, sur tablette ou ordinateur"],
        ["Réussite", "32 bonnes réponses au moins, soit 80 %"],
        ["Renouvellement d'une CSP ou d'une CR", "Pas d'examen"],
        ["Nombre de passages", "Autant de fois que nécessaire, à tout moment"],
        ["Attestation de réussite", "Sans durée de validité"],
      ],
    },
    {
      type: "p",
      texte: "La naturalisation a sa propre mention d'examen. Notre article sur [l'examen civique pour la naturalisation](/articles/examen-civique-naturalisation) l'explique. Le [simulateur d'éligibilité](/eligibilite-examen-civique) vous dit en une minute si l'examen vous concerne.",
    },
    {
      type: "h2",
      texte: "Le test civique officiel est-il gratuit ?",
    },
    {
      type: "p",
      texte: "Non. L'examen se passe dans un centre agréé par l'un des deux organismes choisis par le ministère : la CCI Paris Île-de-France (CCIP) et France Éducation International (FEI). Le prix est fixé par chaque centre. Le ministère l'a situé ==entre 60 et 80 €== dans sa [réponse à la question écrite n° 11488](https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE11488), publiée le 11 août 2026. Notre article sur [le prix de l'examen civique](/articles/prix-test-civique-2026-cout-tarif-titre-sejour-prefecture) détaille ce point.",
    },
    {
      type: "p",
      texte: "La ==préparation==, elle, peut être entièrement gratuite. Le ministère l'écrit lui-même : il n'est pas nécessaire de payer pour accéder à des questions ou à des tests d'entraînement.",
    },
    {
      type: "h2",
      texte: "Où s'entraîner gratuitement en ligne ?",
    },
    {
      type: "p",
      texte: "Commencez par les ressources officielles. Elles sont gratuites, sans inscription, et elles fixent le programme :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Les fiches des 5 thématiques** sur [formation-civique.interieur.gouv.fr](https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/) : principes et valeurs de la République, système institutionnel et politique, droits et devoirs, histoire, géographie et culture, vivre dans la société française.",
        "**Les listes officielles des questions de connaissance**, une pour la mention CSP et une pour la mention CR. Elles n'ont ni réponses ni mises en situation.",
        "**Un quiz gratuit de 50 questions**, signalé par le ministère et proposé par l'association France Fraternité. Le ministère précise que son format peut varier de celui de l'examen.",
      ],
    },
    {
      type: "p",
      texte: "Notre [mode d'emploi du site officiel](/articles/formation-civique-site-officiel) vous montre où trouver chaque document. Sur Test Civique France, les cours des 5 thématiques, les fiches de révision et une partie des questions d'entraînement sont gratuits, avec un compte.",
    },
    {
      type: "h2",
      texte: "À quoi sert un examen blanc ?",
    },
    {
      type: "p",
      texte: "Un examen blanc, c'est un entraînement qui reprend le format de l'examen : 40 questions, 45 minutes, 32 bonnes réponses pour réussir. Il ne remplace pas la lecture des fiches. Il sert à trois choses que les listes officielles ne font pas :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Tenir le temps.** 45 minutes pour 40 questions, c'est un peu plus d'une minute par question. Mieux vaut le vivre une fois avant le jour J.",
        "**S'habituer aux mises en situation.** Elles comptent pour 12 questions sur 40 et ne sont pas publiées par le ministère. Les nôtres sont des questions types, écrites par nous.",
        "**Voir vos erreurs.** Chaque réponse fausse a sa correction expliquée. C'est là que vous apprenez le plus.",
      ],
    },
    {
      type: "p",
      texte: "Sur notre plateforme, un examen blanc affiche à la fin votre score sur 40, votre pourcentage, le temps utilisé et « réussi » ou « échoué ». Vous revoyez ensuite chaque question, avec la bonne réponse et une explication. Votre progression par thème se lit dans le tableau de bord, à partir des quiz d'entraînement. Les examens blancs complets font partie de nos formules, présentées sur la [page des tarifs](/tarifs).",
    },
    {
      type: "cta",
      texte: "Commencez par les cours et les questions gratuites, puis mesurez-vous en conditions réelles avant le jour J.",
    },
    {
      type: "h2",
      texte: "Quels thèmes travailler en premier ?",
    },
    {
      type: "p",
      texte: "Les thèmes n'ont pas le même poids. L'[arrêté du 10 octobre 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620), le texte qui organise l'examen, fixe la répartition dans son article 3 :",
    },
    {
      type: "tableau",
      entetes: ["Thématique", "Questions sur 40"],
      lignes: [
        ["Principes et valeurs de la République", "11"],
        ["Droits et devoirs", "11"],
        ["Histoire, géographie et culture", "8"],
        ["Système institutionnel et politique", "6"],
        ["Vivre dans la société française", "4"],
      ],
    },
    {
      type: "p",
      texte: "Les deux premières font 22 questions, dont les 12 mises en situation. Notre [plan de révision en 4 semaines](/articles/preparer-examen-civique) suit ce poids. Pour les erreurs de lecture les plus fréquentes, lisez [les pièges du QCM](/articles/erreurs-frequentes-test-civique-2026-pieges-qcm).",
    },
    {
      type: "qcm",
      thematique: "Principes et valeurs de la République",
      question: "Que garantit la laïcité en France ?",
      choix: [
        "L'interdiction de toutes les religions",
        "La liberté de conscience et la neutralité de l'État envers les religions",
        "Une religion officielle de l'État",
        "L'obligation de pratiquer une religion",
      ],
      reponse: 1,
      explication: "La laïcité garantit la liberté de croire ou de ne pas croire. L'État est neutre : il ne reconnaît et ne favorise aucune religion. Ceci est une question type, écrite par nous, pas une question de l'examen officiel.",
    },
    {
      type: "h2",
      texte: "Les pièges des sites payants",
    },
    {
      type: "p",
      texte: "Le ministère met en garde : les sites qui font payer des contenus ne sont pas gérés par lui, peuvent présenter des risques de fraude et contenir de fausses informations. Test Civique France est un site privé, lui aussi. Voici comment juger n'importe quel site d'entraînement, le nôtre compris :",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Un site qui dit avoir le contenu exact de l'examen** : les mises en situation ne sont pas publiées. Un tel site se trompe ou vous trompe.",
        "**Une promesse de résultat** ou un taux de réussite sans source : personne ne peut garantir l'issue d'un examen.",
        "**Un « examen blanc officiel » payant** : il n'en existe pas. Le seul examen officiel se passe dans un centre agréé CCIP ou FEI.",
        "**Des règles fausses** : un examen pour le renouvellement, un délai d'attente avant de repasser. Vérifiez sur le site officiel.",
      ],
    },
    {
      type: "p",
      texte: "Le meilleur réflexe reste le même : lisez les fiches officielles d'abord, entraînez-vous ensuite. Et le jour J, ne manquez pas la convocation : notre article sur [le jour de l'examen](/articles/comment-reussir-test-civique-premier-coup) liste ce qu'il faut apporter.",
    },
  ],
  faq: [
    {
      question: "Le test civique est-il gratuit ?",
      reponse: "L'examen officiel ne l'est pas : il se passe dans un centre agréé, à un prix fixé par le centre, entre 60 et 80 € selon le ministère de l'Intérieur. La préparation peut être gratuite : fiches des 5 thématiques et listes officielles de questions sur formation-civique.interieur.gouv.fr, sans compte à créer.",
    },
    {
      question: "Où faire un test civique blanc gratuit ?",
      reponse: "Le ministère signale un quiz gratuit de 50 questions de l'association France Fraternité, en précisant que son format peut varier. Les listes officielles de questions sont aussi gratuites, mais sans réponses. Sur Test Civique France, les cours et une partie des questions sont gratuits ; les examens blancs complets font partie des formules.",
    },
    {
      question: "Combien de questions comporte l'examen civique ?",
      reponse: "L'examen compte 40 questions à choix multiples : 28 questions de connaissance et 12 mises en situation, sur les 5 thématiques de la formation civique. Il dure 45 minutes au plus. Pour réussir, il faut au moins 32 bonnes réponses, soit 80 %.",
    },
    {
      question: "Peut-on repasser l'examen civique en cas d'échec ?",
      reponse: "Oui. Selon le ministère de l'Intérieur, l'examen peut être passé à tout moment et autant de fois que nécessaire. Chaque passage se paie à nouveau auprès du centre. L'attestation de réussite n'a pas de durée de validité : vous pouvez la garder pour votre demande de titre.",
    },
  ],
  sources: [
    {
      titre: "Ministère de l'Intérieur, formation civique : « Informations générales sur l'examen civique » (format, public concerné, renouvellement, passages, préparation gratuite)",
      url: "https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/",
      type: "officiel",
      luLe: "2026-11-15",
    },
    {
      titre: "Ministère de l'Intérieur : fiches par thématique de la formation civique",
      url: "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/",
      type: "officiel",
      luLe: "2026-11-15",
    },
    {
      titre: "Légifrance : arrêté du 10 octobre 2025 relatif au programme, aux épreuves et aux modalités d'organisation de l'examen civique (article 3, répartition par thématique)",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620",
      type: "juridique",
      luLe: "2026-10-28",
    },
    {
      titre: "Assemblée nationale : question écrite n° 11488, réponse du ministère de l'Intérieur publiée le 11/08/2026 (prix de 60 à 80 €, opérateurs CCIP et FEI)",
      url: "https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE11488",
      type: "officiel",
      luLe: "2026-10-28",
    },
  ],
};

export default article;
