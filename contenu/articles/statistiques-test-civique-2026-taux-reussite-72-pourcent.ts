import type { Article } from "@/contenu/articles";

/**
 * Publié le 01/04/2026, migré le 20/10/2026 sans changer d'adresse. Le slug
 * garde « 72-pourcent » : c'est l'adresse que Google a indexée, elle ne change
 * jamais, même si le chiffre est faux.
 *
 * Réécrit le 20/10/2026 (`docs/seo/ROBOT.md`, liste « à revérifier » de
 * `docs/seo/MOTS-CLES.md`) : l'ancien texte annonçait 72 % de réussite au
 * premier trimestre 2026, « en hausse de 5 points », 23 400 candidats, des
 * taux par région et par thématique, attribués à un bilan du ministère du
 * 28/03/2026. Aucune source officielle de ces chiffres n'a été trouvée. Le
 * seul bilan officiel est la réponse du ministère de l'Intérieur à la
 * question écrite n° 11488 (JO de l'Assemblée nationale du 11/08/2026,
 * page 7488) : 81 % au 26/05/2026, 444 centres, 71 125 candidats. Le texte de
 * la réponse a été lu le 20/10/2026 dans les données ouvertes de l'Assemblée
 * (le site des questions répondait 503 ce jour-là).
 *
 * Le même jour, l'article doublon
 * `premiers-resultats-test-civique-2026-taux-reussite-retours-experience`
 * (31/03/2026) y a été fusionné (redirection 301). Il n'en a été repris que
 * ses requêtes et un conseil général de préparation : son taux de 70 à 75 %,
 * son seuil de 24/40, sa durée de 30 minutes, son prix de 90 €, ses taux par
 * profil, ses « questions les plus difficiles » et ses témoignages n'avaient
 * aucune source officielle, et le seuil comme la durée contredisent
 * service-public (32/40, 45 minutes).
 */
const article: Article = {
  slug: "statistiques-test-civique-2026-taux-reussite-72-pourcent",
  titre: "Taux de réussite à l'examen civique : 81 %, le seul chiffre officiel publié",
  titreSeo: "Taux de réussite examen civique : 81 % officiel",
  resume: "81 % de réussite, 71 125 candidats et 444 centres au 26 mai 2026 : le bilan officiel de l'examen civique, et ce que le ministère n'a pas publié.",
  chapo: "Au 26 mai 2026, 71 125 personnes avaient passé l'examen civique, avec un taux moyen de réussite de ==81 %==. C'est le seul bilan publié par le ministère de l'Intérieur, dans une réponse à un député parue le 11 août 2026. Le chiffre de 72 % que l'on lit en ligne n'a aucune source officielle.",
  publieLe: "2026-04-01",
  modifieLe: "2026-10-20",
  minutes: 7,
  theme: "taux de réussite examen civique",
  motsCles: [
    "taux de réussite examen civique",
    "statistiques test civique 2026",
    "taux réussite test civique",
    "résultats test civique 2026",
    "examen civique chiffres officiels",
    "combien de personnes ont passé l'examen civique",
    "examen civique 2026 statistiques",
    "réussite examen civique",
    "examen civique taux echec",
    "seuil réussite test civique",
    "combien de questions test civique",
    "durée test civique",
    "repasser test civique",
    "prix examen civique",
    "centres agréés test civique",
    "préparer test civique efficacement",
  ],
  rubrique: "actualites",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    alt: "Écran d'ordinateur qui affiche des graphiques et des courbes de données",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Correction du 20 octobre 2026",
      texte: "Une version précédente de cet article annonçait 72 % de réussite, « en hausse de 5 points », avec 23 400 candidats et des taux par région. Nous n'avons trouvé aucune source officielle de ces chiffres. Ils sont remplacés par le bilan publié par le ministère de l'Intérieur, lu le 20/10/2026.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Quel est le taux de réussite officiel à l'examen civique ?",
      id: "taux-reussite-officiel",
    },
    {
      type: "p",
      texte: "Le ministère de l'Intérieur donne un **taux moyen de réussite de 81 %** au 26 mai 2026. Ce chiffre figure dans sa réponse à la [question écrite n° 11488](https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE11488), publiée le 11 août 2026. Une question écrite, c'est une question qu'un député pose par écrit à un ministre. La réponse paraît au Journal officiel (le journal où l'État publie ses textes et ses réponses), ici à la page 7488.",
    },
    {
      type: "tableau",
      entetes: ["Ce que dit le ministère", "Chiffre publié"],
      lignes: [
        ["Date du bilan", "26 mai 2026"],
        ["Personnes qui ont passé l'examen", "**71 125**"],
        ["Taux moyen de réussite", "**81 %**"],
        ["Centres d'examen", "**444**, dans tous les départements"],
        ["Organismes agréés (novembre 2025)", "CCI de Paris (CCIP) et France Éducation International (FEI)"],
        ["Prix d'un passage", "entre 60 € et 80 €, fixé librement par chaque centre"],
        ["Nombre de passages possibles", "autant que nécessaire"],
      ],
      legende: "Source : réponse du ministère de l'Intérieur à la question écrite n° 11488, JO de l'Assemblée nationale du 11/08/2026, lue le 20/10/2026.",
    },
    {
      type: "p",
      texte: "Le ministère parle d'un taux « moyen ». Il ne dit pas comment il le calcule. On ne sait pas s'il compte chaque passage, chaque personne, ou la moyenne des centres. Lisez donc ce chiffre comme un ordre de grandeur : environ quatre examens sur cinq sont réussis.",
    },
    {
      type: "h2",
      texte: "Ce que le ministère n'a pas publié",
      id: "non-publie",
    },
    {
      type: "p",
      texte: "Au 20 octobre 2026, la réponse du 11 août est le seul bilan chiffré que nous avons trouvé sur un site officiel. Elle ne donne pas de détail. Voici ce qui n'est **pas** publié :",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "aucun taux par région ni par département.",
        "aucun taux par thème ni par question.",
        "aucun taux séparé selon le titre demandé (carte de séjour pluriannuelle, carte de résident, naturalisation).",
        "aucun taux au premier ou au deuxième passage.",
        "aucune série par mois ou par trimestre : on ne peut donc parler ni de hausse ni de baisse.",
      ],
    },
    {
      type: "p",
      texte: "Les classements par région, les « thèmes les plus ratés » ou les taux par profil qui circulent en ligne ne viennent donc pas du ministère. Méfiez-vous aussi des sites qui affichent leur propre taux de réussite : il ne se vérifie pas. Si le ministère publie un nouveau bilan, cet article sera mis à jour.",
    },
    {
      type: "h2",
      texte: "Comment se passe l'examen civique ?",
      id: "format-examen",
    },
    {
      type: "p",
      texte: "Depuis le 1er janvier 2026, l'examen civique est demandé pour trois démarches ([service-public, actualité A18713](https://www.service-public.gouv.fr/particuliers/actualites/A18713)) :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "une première carte de séjour pluriannuelle : c'est un titre de séjour de plusieurs années. Un titre de séjour, c'est la carte qui vous autorise à vivre en France.",
        "une première carte de résident : c'est le titre de séjour de 10 ans.",
        "la naturalisation, qui permet de devenir français.",
      ],
    },
    {
      type: "p",
      texte: "Le renouvellement de ces cartes ne demande pas l'examen. Les personnes qui ont une protection internationale (les réfugiés, par exemple) en sont dispensées. Pour savoir en une minute si l'examen vous concerne, utilisez le [simulateur d'éligibilité](/eligibilite-examen-civique).",
    },
    {
      type: "tableau",
      entetes: ["Point", "Règle officielle"],
      lignes: [
        ["Durée", "45 minutes au plus"],
        ["Support", "numérique (sur écran)"],
        ["Questions", "40 QCM, 4 réponses proposées, une seule juste"],
        ["Répartition", "28 questions de connaissance et 12 mises en situation"],
        ["Seuil de réussite", "**32 bonnes réponses sur 40**, soit 80 %"],
        ["Attestation de réussite", "sans limite de durée"],
      ],
      legende: "Source : service-public, actualité A18713 du 18/12/2025, lue le 20/10/2026.",
    },
    {
      type: "p",
      texte: "Attention : des pages anciennes parlent de 24 bonnes réponses ou de 30 minutes. C'est faux. Le seuil est de 32 sur 40 et la durée de 45 minutes, selon service-public.",
    },
    {
      type: "p",
      texte: "Les questions portent sur cinq thèmes. Ce sont les principes et valeurs de la République, puis le système des institutions et de la politique. Viennent ensuite les droits et devoirs, l'histoire, la géographie et la culture, et enfin la vie en société. Le ministère précise que la difficulté est adaptée au titre demandé. Il existe d'ailleurs deux listes de questions de connaissance, l'une pour la carte de résident, l'autre pour la carte pluriannuelle. Notre page sur le [cadre général de l'examen civique](/articles/cadre-general-examen-civique) détaille ces règles.",
    },
    {
      type: "h2",
      texte: "Où passer l'examen, et combien coûte-t-il ?",
      id: "centres-prix",
    },
    {
      type: "p",
      texte: "Deux organismes publics ont reçu l'agrément du ministère en novembre 2025 : la CCI de Paris (CCIP) et France Éducation International (FEI). Au 26 mai 2026, ils comptaient **444 centres**, dans tous les départements. Pour trouver un centre près de chez vous, lisez notre liste des [centres agréés pour l'examen civique](/articles/centres-agrees-examen-civique-2026).",
    },
    {
      type: "p",
      texte: "Le prix d'un passage n'est pas fixé par l'État. Chaque centre le choisit. Selon le ministère, il allait de ==60 € à 80 €== en août 2026 ([question n° 11488](https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE11488)). Vérifiez le prix exact au moment de réserver. Pour les étapes de la réservation, voyez notre guide pour [vous inscrire à l'examen civique](/articles/inscription-test-civique-2026-ou-quand-comment-sinscrire).",
    },
    {
      type: "h2",
      texte: "Que se passe-t-il si vous échouez ?",
      id: "repasser",
    },
    {
      type: "p",
      texte: "Vous pouvez repasser l'examen. Le ministère écrit que les étrangers peuvent le passer « autant de fois que nécessaire ». Chaque passage se paie à nouveau au centre. Notre article sur ce qu'il faut faire [après un examen civique raté](/articles/rater-examen-civique-2026-repasser-delai-cout-themes-echec) explique comment vous réinscrire et quoi réviser.",
    },
    {
      type: "h2",
      texte: "Comment se préparer avec les ressources officielles ?",
      id: "preparer",
    },
    {
      type: "p",
      texte: "Si vous demandez une carte pluriannuelle, vous suivez d'abord une formation civique de 24 heures, sur 4 jours. Elle est faite par un prestataire de l'OFII (l'Office français de l'immigration et de l'intégration, l'organisme public qui accueille les étrangers qui s'installent en France). L'examen vient à la fin de cette formation.",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "Le site du ministère [formation-civique.interieur.gouv.fr](https://formation-civique.interieur.gouv.fr/) réunit 222 fiches sur les cinq thèmes.",
        "Le même site publie les listes des questions de connaissance, une pour chaque titre.",
        "Pour la naturalisation, un nouveau livret du citoyen est en cours de refonte, sans date annoncée.",
      ],
    },
    {
      type: "p",
      texte: "Un conseil simple : entraînez-vous en temps limité, 40 questions en 45 minutes, sur les cinq thèmes. Lisez chaque réponse proposée avant de choisir. Nos [cours par thème](/cours) suivent le même découpage. Pour une question sur votre dossier, adressez-vous à votre préfecture, c'est-à-dire le service de l'État qui gère les titres de séjour, ou à une association comme La Cimade.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Seul chiffre officiel : 81 % de réussite moyenne au 26 mai 2026, sur 71 125 candidats, dans 444 centres.\nLe ministère n'a publié ni taux par région, ni taux par thème. Pour réussir, il faut 32 bonnes réponses sur 40, en 45 minutes au plus.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quel est le taux de réussite de l'examen civique ?",
      reponse: "Selon le ministère de l'Intérieur, le taux moyen de réussite était de 81 % au 26 mai 2026. Ce chiffre vient de sa réponse à la question écrite n° 11488, publiée le 11 août 2026. Le ministère n'a pas publié de taux par région, par thème ou par titre demandé.",
    },
    {
      question: "Combien de personnes ont passé l'examen civique ?",
      reponse: "Au 26 mai 2026, 71 125 personnes avaient passé l'examen civique, selon le ministère de l'Intérieur. Elles l'ont passé dans 444 centres, présents dans tous les départements. C'est le seul nombre officiel publié à ce jour. Les chiffres plus récents que l'on lit en ligne n'ont pas de source officielle.",
    },
    {
      question: "Combien de bonnes réponses faut-il pour réussir l'examen civique ?",
      reponse: "Il faut au moins 32 bonnes réponses sur 40, soit 80 %. L'examen dure 45 minutes au plus, sur écran. Il compte 28 questions de connaissance et 12 mises en situation, avec 4 réponses proposées et une seule juste. Ces règles sont publiées par service-public.",
    },
    {
      question: "Peut-on repasser l'examen civique en cas d'échec ?",
      reponse: "Oui. Le ministère de l'Intérieur indique que l'examen peut être passé autant de fois que nécessaire. Chaque passage se paie au centre, à un prix fixé par lui : entre 60 € et 80 € selon le ministère en août 2026. Vérifiez le prix exact au moment de réserver.",
    },
  ],
  sources: [
    {
      titre: "Assemblée nationale : question écrite n° 11488 et réponse du ministère de l'Intérieur (JO du 11/08/2026, page 7488)",
      url: "https://www.assemblee-nationale.fr/dyn/17/questions/QANR5L17QE11488",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Assemblée nationale, données ouvertes : questions écrites de la 17e législature (texte de la réponse n° 11488)",
      url: "https://data.assemblee-nationale.fr/static/openData/repository/17/questions/questions_ecrites/Questions_ecrites.json.zip",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : un nouvel examen civique pour les étrangers souhaitant s'installer en France (A18713)",
      url: "https://www.service-public.gouv.fr/particuliers/actualites/A18713",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Ministère de l'Intérieur : site de la formation civique",
      url: "https://formation-civique.interieur.gouv.fr/",
      type: "officiel",
      luLe: "2026-10-20",
    },
  ],
  aLireAussi: [
    { slug: "centres-agrees-examen-civique-2026", ancre: "Les centres agréés pour l'examen civique" },
    { slug: "inscription-test-civique-2026-ou-quand-comment-sinscrire", ancre: "S'inscrire à l'examen civique" },
    { slug: "rater-examen-civique-2026-repasser-delai-cout-themes-echec", ancre: "Après un examen civique raté" },
    { slug: "erreurs-frequentes-test-civique-2026-pieges-qcm", ancre: "Erreurs fréquentes au test" },
  ],
};

export default article;
