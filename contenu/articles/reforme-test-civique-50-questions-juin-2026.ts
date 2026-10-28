import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-actualites-avril-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/reforme-test-civique-50-questions-juin-2026`).
 *
 * Corrigé et réécrit par le robot éditorial le 28/10/2026 (liste « à
 * revérifier » de `docs/seo/MOTS-CLES.md`). La version migrée annonçait un
 * passage à 50 questions en juin 2026, deux thématiques nouvelles, 55 minutes
 * et un décret en mai 2026, d'après un « document de travail » cité sans
 * source, avec des citations d'associations et d'une instance publique sans
 * date ni lien. Aucun texte officiel ne le prévoit : l'arrêté du 10/10/2025
 * (Légifrance, lu le 28/10/2026) fixe toujours 40 questions et 45 minutes,
 * comme le manuel du candidat de France Éducation international (version B,
 * septembre 2026) et formation-civique.interieur.gouv.fr. L'article est
 * réécrit à la même adresse sur le format en vigueur ; les citations sont
 * retirées. Couverture Unsplash remplacée par une photo libre.
 */
const article: Article = {
  slug: "reforme-test-civique-50-questions-juin-2026",
  titre: "Examen civique à 50 questions ? Non : le format officiel reste de 40 questions en 45 minutes",
  titreSeo: "Examen civique : 40 questions, pas 50",
  resume: "L'examen civique compte toujours 40 questions en 45 minutes, d'après l'arrêté du 10 octobre 2025. Aucun texte ne prévoit 50 questions.",
  chapo: "L'examen civique compte ==40 questions==, pas 50. Aucun texte officiel publié ne prévoit 50 questions, ni de nouvelles thématiques, ni une épreuve de 55 minutes. Cette page annonçait le contraire au printemps 2026 : elle se trompait. Voici le format en vigueur au 28 octobre 2026, texte par texte.",
  publieLe: "2026-04-01",
  modifieLe: "2026-10-28",
  minutes: 6,
  theme: "format examen civique",
  motsCles: [
    "examen civique 50 questions",
    "réforme examen civique",
    "réforme test civique 2026",
    "examen civique combien de questions",
    "format examen civique",
    "examen civique 40 questions",
  ],
  rubrique: "preparation",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/resultat-examen-civique.webp",
    alt: "Salle informatique vide, des écrans alignés face à une grande baie vitrée",
    largeur: 1024,
    hauteur: 768,
    credit: "quatro.sinko, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/93932066@N00/468370932",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Correction du 28 octobre 2026",
      texte: "La première version de cet article, publiée le 1er avril 2026, annonçait un examen à 50 questions dès juin 2026. Elle ajoutait deux thématiques nouvelles (développement durable et numérique) et une durée de 55 minutes. Elle citait un « document de travail » sans lien et des réactions sans source. Nous n'avons trouvé ==aucun texte officiel== qui le prévoie. Nous avons réécrit la page sur les textes en vigueur.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Combien de questions compte l'examen civique ?",
    },
    {
      type: "p",
      texte: "L'examen civique compte **40 questions**. C'est un QCM, un questionnaire à choix multiples : pour chaque question, vous choisissez une réponse parmi quatre. La règle vient d'un arrêté, un texte signé par un ministre : l'arrêté du 10 octobre 2025, article 3 ([Légifrance](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620)). Il vaut pour les trois mentions de l'examen : carte de séjour pluriannuelle, carte de résident et naturalisation.",
    },
    {
      type: "tableau",
      entetes: ["Point", "Ce que disent les textes"],
      lignes: [
        ["Nombre de questions", "40, questions de connaissance et mises en situation"],
        ["Durée", "45 minutes au plus, sauf aménagement pour raison médicale"],
        ["Pour réussir", "80 % de bonnes réponses, soit 32 sur 40"],
        ["Notation", "1 point par bonne réponse, 0 pour une erreur ou une absence de réponse"],
        ["Support", "ordinateur ou tablette, en français"],
      ],
      legende: "Sources : arrêté du 10 octobre 2025 (articles 2 à 4) et formation-civique.interieur.gouv.fr, lus le 28/10/2026.",
    },
    {
      type: "p",
      texte: "Le ministère de l'Intérieur précise la répartition : ==28 questions de connaissance et 12 mises en situation== ([formation-civique.interieur.gouv.fr](https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/)). Une mise en situation décrit un cas de la vie courante et vous demande la bonne réaction.",
    },
    {
      type: "h2",
      texte: "Comment les 40 questions sont-elles réparties ?",
    },
    {
      type: "p",
      texte: "Tous les candidats ont le même nombre de questions par thématique. L'arrêté fixe cinq thématiques, toujours les mêmes :",
    },
    {
      type: "tableau",
      entetes: ["Thématique", "Questions", "Dont mises en situation"],
      lignes: [
        ["Principes et valeurs de la République", "11", "6"],
        ["Système institutionnel et politique", "6", "0"],
        ["Droits et devoirs", "11", "6"],
        ["Histoire, géographie et culture", "8", "0"],
        ["Vivre dans la société française", "4", "0"],
      ],
      legende: "Source : arrêté du 10 octobre 2025, article 3.",
    },
    {
      type: "p",
      texte: "Il n'y a ni thématique « développement durable » ni thématique « numérique ». Les principes et valeurs et les droits et devoirs pèsent le plus : 22 questions sur 40, dont toutes les mises en situation. Notre page d'[exemples de questions corrigées](/articles/examen-civique-2026-exemples-questions-corrigees) vous montre à quoi elles ressemblent.",
    },
    {
      type: "qcm",
      thematique: "Système institutionnel et politique",
      question: "Qui vote les lois en France ?",
      choix: [
        "Le président de la République",
        "Le Parlement, c'est-à-dire l'Assemblée nationale et le Sénat",
        "Le Conseil constitutionnel",
        "Les maires",
      ],
      reponse: 1,
      explication: "L'article 24 de la Constitution dit que le Parlement vote la loi. Il réunit l'Assemblée nationale et le Sénat. Ceci est une question type, pas une question de l'examen officiel.",
    },
    {
      type: "h2",
      texte: "Le format a-t-il changé depuis janvier 2026 ?",
    },
    {
      type: "p",
      texte: "Non, pas sur le nombre de questions ni sur la durée. Les documents officiels les plus récents que nous avons lus disent tous 40 questions et 45 minutes :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Le manuel du candidat de France Éducation international**, l'un des deux organismes qui font passer l'examen, dans sa version de septembre 2026 ([FEI](https://www.france-education-international.fr/examen-civique/examen-civique-informations-pour-les-candidats)).",
        "**La page de l'examen sur le site du ministère de l'Intérieur** ([formation-civique.interieur.gouv.fr](https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/)).",
        "**La fiche de service-public** sur l'examen pour une carte de séjour pluriannuelle ou une carte de résident, vérifiée le 10 février 2026 ([F39530](https://www.service-public.gouv.fr/particuliers/vosdroits/F39530)).",
      ],
    },
    {
      type: "p",
      texte: "Ce qui bouge, ce sont les **supports de révision**. Le ministère a publié le 12 janvier 2026 une liste officielle des questions de connaissance pour la naturalisation. Un nouveau livret du citoyen a été approuvé par un arrêté du 3 juillet 2026 ([service-public, F39426](https://www.service-public.gouv.fr/particuliers/vosdroits/F39426)). Notre article sur [l'examen civique pour la naturalisation](/articles/examen-civique-naturalisation) détaille ces documents.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Une règle d'examen change par un texte publié au Journal officiel** (le journal où l'État publie chaque jour ses lois, décrets et arrêtés). Un article de presse, une vidéo ou un message sur un réseau social ne suffit pas.",
        "**Avant de vous inscrire, vérifiez la page du ministère** sur formation-civique.interieur.gouv.fr. Elle donne le format officiel.",
        "**Si un texte modifie un jour l'examen**, il dira à partir de quelle date. Nous l'expliquerons sur ce site, avec le lien vers le texte.",
      ],
    },
    {
      type: "h2",
      texte: "Comment vous préparer au format réel ?",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Vérifiez d'abord si l'examen vous concerne** : première carte de séjour pluriannuelle, première carte de résident ou naturalisation. Le [simulateur d'éligibilité](/eligibilite-examen-civique) répond en une minute.",
        "**Révisez par thématique**, en commençant par les principes et valeurs, puis les droits et devoirs.",
        "**Entraînez-vous en 45 minutes**, sur 40 questions, pour prendre le rythme : un peu plus d'une minute par question.",
        "**Visez une marge** au-dessus de 32 bonnes réponses, pour garder de la place en cas de stress le jour J.",
      ],
    },
    {
      type: "p",
      texte: "Le prix de l'examen est fixé par chaque centre, de 60 à 80 € selon le ministère de l'Intérieur ([réponse ministérielle publiée le 11 août 2026](https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE11488)). Après l'épreuve, notre article sur [le résultat de l'examen civique](/articles/resultat-examen-civique) explique quand et où vous le recevez.",
    },
  ],
  faq: [
    {
      question: "L'examen civique va-t-il passer à 50 questions ?",
      reponse: "Aucun texte officiel ne le prévoit au 28 octobre 2026. L'arrêté du 10 octobre 2025 fixe 40 questions pour les trois mentions de l'examen. Le manuel du candidat de France Éducation international, mis à jour en septembre 2026, dit aussi 40 questions en 45 minutes. Un changement devrait passer par un nouveau texte publié au Journal officiel.",
    },
    {
      question: "Combien de questions à l'examen civique ?",
      reponse: "L'examen compte 40 questions : 28 questions de connaissance et 12 mises en situation, selon le ministère de l'Intérieur. Elles sont réparties entre cinq thématiques. Il faut au moins 32 bonnes réponses, soit 80 %, pour réussir. L'épreuve dure 45 minutes au plus, sur ordinateur ou sur tablette.",
    },
    {
      question: "Combien de temps dure l'examen civique ?",
      reponse: "L'examen dure 45 minutes au plus, selon l'arrêté du 10 octobre 2025. Cette durée ne peut être allongée qu'en cas d'aménagement accordé pour une raison médicale justifiée, sur certificat médical. Les épreuves ont lieu entre 8 heures et 20 heures, et un candidat en retard n'est pas admis.",
    },
  ],
  sources: [
    {
      titre: "Légifrance : arrêté du 10 octobre 2025 relatif au programme, aux épreuves et aux modalités d'organisation de l'examen civique",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620",
      type: "officiel",
      luLe: "2026-10-28",
    },
    {
      titre: "Ministère de l'Intérieur : informations générales sur l'examen civique (formation-civique.interieur.gouv.fr)",
      url: "https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/",
      type: "officiel",
      luLe: "2026-10-28",
    },
    {
      titre: "France Éducation international : examen civique, informations pour les candidats",
      url: "https://www.france-education-international.fr/examen-civique/examen-civique-informations-pour-les-candidats",
      type: "officiel",
      luLe: "2026-10-28",
    },
    {
      titre: "France Éducation international : manuel du candidat à l'examen civique, version B, septembre 2026",
      url: "https://www.france-education-international.fr/document/manuelcandidatexamencivique",
      type: "officiel",
      luLe: "2026-10-28",
    },
    {
      titre: "Service-public : examen civique pour une carte de séjour pluriannuelle ou une carte de résident (F39530, vérifiée le 10/02/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39530",
      type: "officiel",
      luLe: "2026-10-28",
    },
    {
      titre: "Service-public : naturalisation française, comment passer l'examen civique ? (F39426)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39426",
      type: "officiel",
      luLe: "2026-10-25",
    },
    {
      titre: "Assemblée nationale : question écrite n° 11488, réponse du ministère de l'Intérieur publiée le 11/08/2026",
      url: "https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE11488",
      type: "officiel",
      luLe: "2026-10-28",
    },
  ],
};

export default article;
