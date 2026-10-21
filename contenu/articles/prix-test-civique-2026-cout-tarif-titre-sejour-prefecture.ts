import type { Article } from "@/contenu/articles";

/**
 * Publié le 25/03/2026, migré le 20/10/2026 sans changer d'adresse.
 * Réécrit par le robot éditorial le 21/10/2026 (`docs/seo/ROBOT.md`, liste
 * « à revérifier » de `docs/seo/MOTS-CLES.md`) : l'ancien titre annonçait un
 * examen à « 90 € », prix « fixe et identique sur tout le territoire », alors
 * que le ministère indique un prix libre, fixé par chaque centre, entre 60 et
 * 80 € (réponse à la question écrite n° 11488, JO du 11/08/2026). Les taxes de
 * titre de séjour de l'ancienne version (75 €, 225 €, naturalisation à 55 €)
 * dataient d'avant le 1er mai 2026 : elles sont remplacées par un renvoi au
 * barème officiel, tenu dans l'article sur le timbre fiscal.
 * Requête visée : « examen civique prix » (1 k à 10 k recherches par mois,
 * Planificateur de mots clés, 21/10/2026).
 */
const article: Article = {
  slug: "prix-test-civique-2026-cout-tarif-titre-sejour-prefecture",
  titre: "Prix de l'examen civique : entre 60 et 80 € selon le centre, et ce que vous payez en plus",
  titreSeo: "Prix de l'examen civique : 60 à 80 € en 2026",
  resume: "L'examen civique coûte entre 60 et 80 € selon le centre, d'après le ministère de l'Intérieur. Repassage, inscription, préparation gratuite et timbre fiscal.",
  chapo: "L'examen civique coûte ==entre 60 et 80 €==. Ce prix est fixé librement par chaque centre d'examen, d'après le ministère de l'Intérieur. Vous le payez à chaque passage. Le timbre fiscal (la taxe due à l'État pour votre titre de séjour, la carte qui vous autorise à vivre en France) est une autre somme.",
  publieLe: "2026-03-25",
  modifieLe: "2026-10-21",
  minutes: 6,
  theme: "prix examen civique",
  motsCles: [
    "examen civique prix",
    "prix examen civique",
    "prix test civique",
    "combien coûte l'examen civique",
    "coût examen civique",
    "tarif examen civique",
    "examen civique 60 80 euros",
    "repasser examen civique prix",
    "prix test civique 2026",
    "combien coûte le test civique",
  ],
  rubrique: "preparation",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/prix-examen-civique.webp",
    alt: "Une main glisse une pièce dans une tirelire noire marquée « Euros », posée sur des billets",
    largeur: 1024,
    hauteur: 683,
    credit: "raisin_raisin, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/194550014@N08/51720122615",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Correction du 21 octobre 2026",
      texte: "Une version précédente de cet article annonçait un examen à 90 €, au même prix partout en France. C'est inexact : le prix est fixé par chaque centre, entre 60 et 80 € selon le ministère. Les taxes de titre de séjour citées dataient aussi d'avant le 1er mai 2026.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Combien coûte l'examen civique ?",
    },
    {
      type: "p",
      texte: "L'examen civique est un questionnaire de 40 questions sur la France et ses valeurs. Son prix est ==compris entre 60 et 80 €== selon les centres. C'est le ministère de l'Intérieur qui donne cette fourchette, dans une réponse publiée au Journal officiel le 11 août 2026 ([question écrite n° 11488](https://questions.assemblee-nationale.fr/q17/17-11488QE.htm)).",
    },
    {
      type: "p",
      texte: "Le ministère précise que ce prix est « librement fixé par les centres d'examen ». Il n'existe donc pas de tarif national unique. Deux centres d'une même ville peuvent afficher des prix différents.",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "comparez les prix des centres proches de chez vous avant de réserver.",
        "lisez le prix affiché au moment de l'inscription : c'est lui qui compte.",
        "demandez au centre ce qui se passe en cas d'absence ou d'annulation.",
      ],
    },
    {
      type: "h2",
      texte: "Faut-il repayer si vous échouez ?",
    },
    {
      type: "p",
      texte: "Oui. Le prix donné par le ministère est celui « du passage de l'examen ». Chaque nouvelle tentative se paie donc à nouveau au centre. La bonne nouvelle : vous pouvez repasser l'examen ==autant de fois que nécessaire== ([question écrite n° 11488](https://questions.assemblee-nationale.fr/q17/17-11488QE.htm)). Le site du ministère précise qu'il peut être passé à tout moment.",
    },
    {
      type: "p",
      texte: "Pour réussir, il faut 32 bonnes réponses sur 40, soit 80 %. L'épreuve dure 45 minutes au plus, sur ordinateur ou sur tablette ([service-public, F39530](https://www.service-public.gouv.fr/particuliers/vosdroits/F39530)). Au 26 mai 2026, 81 % des 71 125 candidats avaient réussi, selon le ministère.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Une fraude ou une tentative de fraude entraîne une interdiction de repasser l'examen pendant 2 ans (F39530).",
        "Le non-respect du règlement de l'épreuve peut rendre votre examen nul : le centre vous le présente avant de commencer.",
      ],
    },
    {
      type: "cta",
      texte: "Chaque échec se paie : testez-vous d'abord sur 40 questions types, et voyez quelle thématique vous fait perdre des points.",
      bouton: "Faire un examen blanc gratuit",
    },
    {
      type: "h2",
      texte: "Où s'inscrire et payer l'examen ?",
    },
    {
      type: "p",
      texte: "Vous vous inscrivez dans un centre agréé par le ministère de l'Intérieur. Deux organismes publics gèrent ces centres : la CCI Paris Île-de-France et France Éducation international. Chacun propose une carte pour trouver un centre près de chez vous ([service-public, F39530](https://www.service-public.gouv.fr/particuliers/vosdroits/F39530)).",
    },
    {
      type: "p",
      texte: "Au 26 mai 2026, 444 centres couvraient l'ensemble des départements. Vous payez directement le centre, au moment de l'inscription. Notre article sur les [centres agréés](/articles/centres-agrees-examen-civique-2026) et notre guide [Où et comment s'inscrire](/articles/inscription-test-civique-2026-ou-quand-comment-sinscrire) donnent les étapes.",
    },
    {
      type: "p",
      texte: "Au moment de l'inscription, choisissez la bonne mention : carte de séjour pluriannuelle ou carte de résident. La liste des questions à réviser n'est pas la même. Notre comparatif [CSP ou carte de résident](/articles/examen-civique-carte-de-resident) explique la différence.",
    },
    {
      type: "h2",
      texte: "Peut-on se préparer gratuitement ?",
    },
    {
      type: "p",
      texte: "Oui. Le site officiel du ministère, [formation-civique.interieur.gouv.fr](https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/), publie des fiches par thème et la liste officielle des questions de connaissance. Il précise qu'il n'est pas nécessaire de payer pour y accéder.",
    },
    {
      type: "p",
      texte: "Méfiez-vous des sites qui se présentent comme officiels et vous font payer l'inscription à l'examen : seuls les centres agréés l'organisent. Le CIR (contrat d'intégration républicaine) est signé avec l'État à l'arrivée en France. Il comprend aussi quatre jours de formation civique, avec un prestataire de l'OFII, l'Office français de l'immigration et de l'intégration (question n° 11488).",
    },
    {
      type: "h2",
      texte: "Que payez-vous en plus pour votre titre de séjour ?",
    },
    {
      type: "p",
      texte: "L'examen ne remplace pas les taxes du titre de séjour, la carte qui vous autorise à vivre en France. Quand votre carte est prête, vous payez un timbre fiscal : une somme due à l'État. Depuis le 1er mai 2026, voici les montants publiés par [service-public](https://www.service-public.gouv.fr/particuliers/actualites/A18881) :",
    },
    {
      type: "tableau",
      entetes: ["Démarche", "Montant depuis le 1er mai 2026"],
      lignes: [
        ["Premier titre, tarif normal", "350 €."],
        ["Premier titre, tarif minoré", "150 €."],
        ["Renouvellement, tarif normal", "250 €."],
        ["Renouvellement, tarif minoré", "100 €."],
        ["Naturalisation", "255 € (127,50 € en Guyane)."],
      ],
      legende: "Source : service-public, actualité A18881, mise à jour le 12/05/2026, lue le 21/10/2026.",
    },
    {
      type: "p",
      texte: "Le test de français demandé à côté de l'examen a aussi un coût, fixé par l'organisme qui le fait passer. Notre page sur le [timbre fiscal du titre de séjour](/articles/hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances) détaille qui paie le tarif minoré.",
    },
    {
      type: "h2",
      texte: "Qui doit payer l'examen civique ?",
    },
    {
      type: "p",
      texte: "Depuis le 1er janvier 2026, l'examen est demandé pour une ==première== carte de séjour pluriannuelle, un titre de 2 à 4 ans. Il l'est aussi pour une ==première== carte de résident (un titre de 10 ans). Un renouvellement ne le demande pas. Les personnes de plus de 65 ans sont dispensées ([service-public, F39530](https://www.service-public.gouv.fr/particuliers/vosdroits/F39530)).",
    },
    {
      type: "p",
      texte: "Une mention existe aussi pour la naturalisation, avec sa propre liste de questions. Pour savoir en une minute si l'examen vous concerne, utilisez le [simulateur d'éligibilité](/eligibilite-examen-civique). Notre article sur les [dispenses](/articles/dispense-examen-civique-2026-qui-est-exempte-age-refugie-accords) détaille les autres cas.",
    },
    {
      type: "encadre",
      titre: "Le geste utile",
      texte: "L'attestation de réussite n'a pas de date de fin de validité. Un seul passage réussi suffit donc, même si votre demande de titre vient plus tard. Préparez-vous avant de payer : c'est la façon la plus sûre de ne payer qu'une fois.",
      ton: "vert",
    },
  ],
  faq: [
    {
      question: "Combien coûte l'examen civique ?",
      reponse: "L'examen civique coûte entre 60 et 80 € selon le centre d'examen, d'après la réponse du ministère de l'Intérieur publiée au Journal officiel le 11 août 2026. Le prix est fixé librement par chaque centre. Il se paie au centre, au moment de l'inscription, et il n'existe pas de tarif national unique.",
    },
    {
      question: "Faut-il repayer l'examen civique en cas d'échec ?",
      reponse: "Oui. Le prix indiqué par le ministère est celui du passage de l'examen : chaque nouvelle tentative se paie à nouveau au centre. Vous pouvez repasser l'examen autant de fois que nécessaire. Seule une fraude entraîne une interdiction de le repasser pendant 2 ans.",
    },
    {
      question: "L'examen civique est-il gratuit ?",
      reponse: "Non, le passage de l'examen est payant : entre 60 et 80 € selon le centre. La préparation, elle, peut être gratuite : le site officiel formation-civique.interieur.gouv.fr publie des fiches par thème et la liste officielle des questions de connaissance, sans rien payer.",
    },
    {
      question: "Où passer l'examen civique ?",
      reponse: "Dans un centre agréé par le ministère de l'Intérieur. Les centres sont gérés par la CCI Paris Île-de-France et par France Éducation international, qui proposent chacun une carte pour trouver un centre. Au 26 mai 2026, 444 centres couvraient l'ensemble des départements.",
    },
  ],
  sources: [
    {
      titre: "Assemblée nationale : question écrite n° 11488, réponse du ministère de l'Intérieur publiée au JO le 11/08/2026",
      url: "https://questions.assemblee-nationale.fr/q17/17-11488QE.htm",
      type: "officiel",
      luLe: "2026-10-21",
    },
    {
      titre: "Service-public : carte de séjour pluriannuelle et carte de résident, l'examen civique (F39530)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39530",
      type: "officiel",
      luLe: "2026-10-21",
    },
    {
      titre: "Ministère de l'Intérieur : informations générales sur l'examen civique",
      url: "https://formation-civique.interieur.gouv.fr/examen-civique/informations-g%C3%A9n%C3%A9rales-sur-lexamen-civique/",
      type: "officiel",
      luLe: "2026-10-21",
    },
    {
      titre: "Service-public : titres de séjour, augmentation des taxes à compter du 1er mai 2026 (A18881)",
      url: "https://www.service-public.gouv.fr/particuliers/actualites/A18881",
      type: "officiel",
      luLe: "2026-10-21",
    },
  ],
  aLireAussi: [
    { slug: "centres-agrees-examen-civique-2026", ancre: "Les centres agréés de l'examen civique" },
    { slug: "examen-civique-carte-de-resident", ancre: "Examen civique : CSP ou carte de résident" },
    {
      slug: "hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances",
      ancre: "Le timbre fiscal du titre de séjour en 2026",
    },
  ],
};

export default article;
