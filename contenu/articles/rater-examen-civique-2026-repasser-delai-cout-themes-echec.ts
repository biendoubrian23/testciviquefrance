import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-rater-examen-civique-2026.ts`,
 * sans changer d'adresse. Réécrit en entier par le robot éditorial le
 * 06/11/2026 (liste « à revérifier » de `docs/seo/MOTS-CLES.md`). Faux ou sans
 * source, retirés : un prix de 65 à 90 € (le ministère indique 60 à 80 €) ;
 * « 4 à 8 semaines » d'attente de créneau (aucune source ; FEI et la CCIP
 * imposent 24 heures entre deux passages) ; une analyse de « 3 208 sessions »
 * et des taux d'échec par thème qu'aucune donnée publiée ne prouve ; un score
 * cible de 35/40 présenté comme une règle ; des émojis. Sources : page
 * officielle de l'examen relue le 06/11/2026 ; arrêté du 10/10/2025, manuel
 * du candidat de FEI, pages de la CCIP, F39530 et QE n° 11488 lus le
 * 28/10/2026.
 */
const article: Article = {
  slug: "rater-examen-civique-2026-repasser-delai-cout-themes-echec",
  titre: "Examen civique raté : repasser dès 24 heures, à quel prix, et comment viser juste la prochaine fois",
  titreSeo: "Rater l'examen civique : repasser après 24 h",
  resume: "Un échec à l'examen civique n'est pas définitif : on repasse autant de fois qu'il faut, 24 heures après. Le prix, le dossier, et où chercher les points perdus.",
  chapo: "Rater l'examen civique n'est pas éliminatoire : vous pouvez le repasser ==autant de fois que nécessaire==, avec ==24 heures== d'attente entre deux passages. Chaque passage se paie, de 60 à 80 € selon le centre. Voici ce que devient votre demande, et comment cibler les points qui vous ont manqué.",
  publieLe: "2026-08-24",
  modifieLe: "2026-11-06",
  minutes: 7,
  theme: "rater l'examen civique",
  motsCles: [
    "rater examen civique",
    "j'ai raté l'examen civique",
    "repasser examen civique",
    "échec examen civique",
    "examen civique combien de fois",
    "délai repasser examen civique",
    "prix repasser examen civique",
    "examen civique 32 sur 40",
  ],
  rubrique: "preparation",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/rater-examen-civique.webp",
    alt: "La salle Saint-Jacques de la bibliothèque de la Sorbonne, avec ses tables en bois, ses lampes vertes et son plafond peint",
    largeur: 1200,
    hauteur: 852,
    credit: "Zantastik, via Wikimedia Commons",
    licence: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Salle_Saint-Jacques_(Biblioth%C3%A8que_de_la_Sorbonne).jpg",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Cet article a été corrigé le 6 novembre 2026",
      texte: "Une ancienne version donnait un prix de 65 à 90 € et un délai de 4 à 8 semaines sans source. Elle citait aussi des taux d'échec par thème tirés de nos propres données, sans méthode publiée. Nous avons tout retiré. Le texte suit maintenant le ministère de l'Intérieur, l'arrêté qui organise l'examen et les deux organismes agréés.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Un échec à l'examen civique est-il grave ?",
    },
    {
      type: "p",
      texte: "Non. Un échec ne vous ferme aucune porte. L'examen civique est obligatoire pour une première carte de séjour pluriannuelle (CSP, un titre de 2 à 4 ans) ou une première carte de résident (CR, 10 ans). Un titre de séjour est la carte qui vous autorise à vivre en France. Sans l'attestation de réussite, il vous manque une pièce du dossier. Ce n'est pas un refus de la préfecture, le service de l'État qui instruit votre demande.",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**L'attestation de réussite n'a pas de durée de validité** ([page officielle de l'examen](https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/)). Une fois obtenue, elle reste acquise.",
        "**Une attestation « carte de résident » vaut aussi pour une CSP**, quand vous déposez la demande sur l'ANEF (le site de l'État pour les titres de séjour). L'inverse n'est pas vrai.",
        "**Le seuil reste le même à chaque passage** : 32 bonnes réponses sur 40, soit 80 %, en 45 minutes au plus.",
      ],
    },
    {
      type: "h2",
      texte: "Combien de fois et quand peut-on repasser l'examen ?",
    },
    {
      type: "p",
      texte: "Le ministère de l'Intérieur est clair : on peut passer l'examen « à tout moment et autant de fois que nécessaire » (page officielle de l'examen). Il n'y a pas de nombre maximal de passages.",
    },
    {
      type: "p",
      texte: "La seule attente est de ==24 heures== entre deux passages. France Éducation international (FEI) et la CCI Paris Île-de-France (CCIP), les deux organismes agréés, l'indiquent tous les deux ([manuel du candidat de FEI](https://www.france-education-international.fr/document/manuelcandidatexamencivique), [pages de la CCIP](https://www.lefrancaisdesaffaires.fr/candidat/examen-civique/resultats/)). Chez FEI, la nouvelle inscription se fait depuis votre compte candidat, onglet « Profil », puis « Nouvelle inscription ».",
    },
    {
      type: "p",
      texte: "En pratique, le vrai délai dépend des places libres dans les centres. Il varie d'une ville à l'autre, et aucun chiffre officiel ne le mesure. Regardez les dates de plusieurs centres proches : notre article sur [les centres agréés](/articles/centres-agrees-examen-civique-2026) vous aide à les comparer.",
    },
    {
      type: "h2",
      texte: "Combien coûte un nouveau passage ?",
    },
    {
      type: "p",
      texte: "Chaque passage se paie, sans tarif réduit pour une deuxième tentative. Le prix est fixé par chaque centre, ==de 60 à 80 €== selon le ministère de l'Intérieur ([réponse ministérielle publiée le 11 août 2026](https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE11488)). Notre article sur [le prix de l'examen civique](/articles/prix-test-civique-2026-cout-tarif-titre-sejour-prefecture) détaille ce point.",
    },
    {
      type: "p",
      texte: "C'est pourquoi il vaut mieux ne pas se réinscrire le lendemain sans rien changer. Prenez d'abord le temps de voir où les points se sont perdus.",
    },
    {
      type: "h2",
      texte: "Quelle est la seule faute qui bloque pendant 2 ans ?",
    },
    {
      type: "p",
      texte: "La fraude. Une fraude ou une tentative de fraude pendant l'épreuve peut vous interdire de repasser l'examen pendant ==2 ans== ([arrêté du 10 octobre 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620)). C'est la seule vraie limite à la règle des passages illimités.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Le téléphone et la montre connectée** se rangent là où le centre l'indique, avant d'entrer en salle.",
        "**Aucun échange** avec un autre candidat, aucun document consulté.",
        "**Aucune photo des questions.** Les questions de l'examen ne sortent pas de la salle.",
      ],
    },
    {
      type: "p",
      texte: "Notre liste des [documents à apporter le jour de l'examen](/articles/documents-test-civique-2026-convocation-piece-identite) dit aussi ce que vous ne devez pas avoir sur vous.",
    },
    {
      type: "h2",
      texte: "Où avez-vous perdu des points ?",
    },
    {
      type: "p",
      texte: "L'examen compte 28 questions de connaissance et 12 mises en situation. Une mise en situation décrit un cas de la vie courante et demande la bonne réaction. L'arrêté du 10 octobre 2025 répartit les 40 questions ainsi (article 3) :",
    },
    {
      type: "tableau",
      entetes: ["Thématique", "Questions", "Dont mises en situation"],
      lignes: [
        ["Principes et valeurs de la République", "11", "6"],
        ["Droits et devoirs", "11", "6"],
        ["Histoire, géographie et culture", "8", "0"],
        ["Système institutionnel et politique", "6", "0"],
        ["Vivre dans la société française", "4", "0"],
      ],
      legende: "Source : arrêté du 10 octobre 2025, article 3 (Légifrance, lu le 28/10/2026).",
    },
    {
      type: "p",
      texte: "Deux thématiques font ==22 questions sur 40==, et elles portent toutes les mises en situation. Si vous avez perdu 9 points ou plus, il y a de fortes chances qu'une partie vienne de là. Relisez-les en vous demandant comment chaque principe s'applique dans un cas concret, pas seulement sa définition.",
    },
    {
      type: "qcm",
      thematique: "Droits et devoirs",
      question: "Un parent d'élève veut garder son enfant de 8 ans à la maison toute l'année, sans le déclarer. Que dit la loi ?",
      choix: [
        "C'est permis, l'école est facultative avant 16 ans",
        "L'instruction est obligatoire de 3 à 16 ans",
        "L'école n'est obligatoire qu'à partir de 10 ans",
        "Seuls les enfants français doivent aller à l'école",
      ],
      reponse: 1,
      explication: "En France, l'instruction est obligatoire pour tous les enfants de 3 à 16 ans, français ou étrangers. L'instruction à la maison demande une autorisation. C'est un devoir des parents, que le référentiel de l'examen cite dans les droits et devoirs. Ceci est une question type, écrite par nous, pas une question de l'examen officiel.",
    },
    {
      type: "h2",
      texte: "Comment repartir en 2 ou 3 semaines ?",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Notez ce dont vous vous souvenez** : les questions qui vous ont surpris, et leur thème.",
        "**Reprenez les fiches officielles des thématiques faibles** sur [formation-civique.interieur.gouv.fr](https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/). Elles sont gratuites.",
        "**Travaillez les mises en situation** : pour chaque principe, imaginez un cas de la vie courante.",
        "**Refaites des examens blancs complets** de 40 questions en 45 minutes, jusqu'à dépasser 32 de façon régulière.",
        "**Réservez ensuite une date** dans un centre, au moins 24 heures après votre dernier passage.",
      ],
    },
    {
      type: "cta",
      texte: "Avant de payer un nouveau passage, faites un examen blanc de 40 questions types et regardez votre résultat thématique par thématique. L'inscription est gratuite.",
      bouton: "Voir où je perds des points",
    },
    {
      type: "p",
      texte: "Pour un plan complet, semaine par semaine, lisez notre article sur [la préparation de l'examen civique en 4 semaines](/articles/preparer-examen-civique). Les [pièges les plus fréquents du QCM](/articles/erreurs-frequentes-test-civique-2026-pieges-qcm) valent aussi une relecture.",
    },
    {
      type: "image",
      src: "/images/articles/rater-examen-civique.webp",
      alt: "Une longue salle de lecture ancienne, avec des lampes à abat-jour vert alignées sur des tables en bois et un plafond orné",
      legende: "La salle Saint-Jacques de la bibliothèque de la Sorbonne, à Paris.",
      credit: "Zantastik, via Wikimedia Commons",
      licence: "CC BY-SA 3.0",
      source: "https://commons.wikimedia.org/wiki/File:Salle_Saint-Jacques_(Biblioth%C3%A8que_de_la_Sorbonne).jpg",
      largeur: 1200,
      hauteur: 852,
    },
    {
      type: "h2",
      texte: "Et votre titre de séjour pendant ce temps ?",
    },
    {
      type: "p",
      texte: "Votre titre actuel garde sa date de fin, examen ou pas. Si la date approche, regardez tout de suite le calendrier de dépôt de votre demande : notre guide du [renouvellement de titre de séjour](/articles/renouvellement-titre-sejour-2026-anef-prefecture-documents-delais) le détaille. Le meilleur réflexe est simple : réservez une date d'examen tôt, et révisez pendant l'attente.",
    },
    {
      type: "p",
      texte: "Votre titre expire bientôt, ou vous doutez d'une pièce ? Adressez-vous à votre préfecture, à un avocat ou à une association d'aide aux étrangers, comme La Cimade. Et gardez en tête le point le plus rassurant : un échec honnête se rattrape, seule la fraude bloque pendant 2 ans.",
    },
  ],
  faq: [
    {
      question: "Combien de fois peut-on repasser l'examen civique ?",
      reponse: "Autant de fois que nécessaire. Le ministère de l'Intérieur indique que l'examen peut être passé « à tout moment et autant de fois que nécessaire ». Aucun texte ne limite le nombre de passages. La seule exception est la fraude : une fraude ou une tentative de fraude peut interdire de repasser l'examen pendant 2 ans.",
    },
    {
      question: "Quel délai pour repasser l'examen civique après un échec ?",
      reponse: "Il faut attendre 24 heures entre deux passages, selon France Éducation international et la CCI Paris Île-de-France, les deux organismes agréés. En pratique, le délai dépend surtout des places libres dans les centres, qui varient d'une ville à l'autre. Comparez plusieurs centres proches de chez vous avant de réserver.",
    },
    {
      question: "Faut-il repayer pour repasser l'examen civique ?",
      reponse: "Oui. Chaque passage se paie, sans tarif réduit pour une nouvelle tentative. Le prix est fixé par chaque centre, de 60 à 80 € selon le ministère de l'Intérieur, dans une réponse publiée le 11 août 2026. Mieux vaut donc repérer d'abord les thématiques où vous avez perdu des points avant de réserver.",
    },
    {
      question: "Un échec à l'examen civique fait-il refuser mon titre de séjour ?",
      reponse: "Non. L'échec n'est pas une décision de la préfecture. Il vous manque seulement l'attestation de réussite, une pièce du dossier pour une première carte de séjour pluriannuelle ou une première carte de résident. Une fois obtenue, l'attestation n'a pas de durée de validité. Pour un cas personnel, adressez-vous à votre préfecture ou à une association.",
    },
  ],
  sources: [
    {
      titre: "Ministère de l'Intérieur : informations générales sur l'examen civique (passages illimités, 32 bonnes réponses sur 40, attestation sans durée de validité, CR valant CSP)",
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
      titre: "Légifrance : arrêté du 10 octobre 2025 relatif au programme, aux épreuves et aux modalités d'organisation de l'examen civique (article 3, répartition ; sanction de la fraude)",
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
      titre: "Service-public : examen civique pour une carte de séjour pluriannuelle ou une carte de résident (F39530)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39530",
      type: "officiel",
      luLe: "2026-10-28",
    },
    {
      titre: "Assemblée nationale : question écrite n° 11488, réponse du ministère de l'Intérieur publiée le 11/08/2026 (prix de 60 à 80 €)",
      url: "https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE11488",
      type: "officiel",
      luLe: "2026-10-28",
    },
    {
      titre: "Service-public : instruction obligatoire de 3 à 16 ans, français et étrangers (F1898)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1898",
      type: "officiel",
      luLe: "2026-11-06",
    },
  ],
};

export default article;
