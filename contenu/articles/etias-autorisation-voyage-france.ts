import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 31/10/2026 (`docs/seo/ROBOT.md`). Pas de
 * règle des 24 heures ce jour (JORF n° 0254 et n° 0255 : rien sur nos
 * sujets). « etias » : 1 k à 10 k recherches par mois (Planificateur, France,
 * French, 31/10/2026). Sources lues le 31/10/2026 sur le site officiel de
 * l'Union européenne (travel-europe.europa.eu) : accueil ETIAS, « Qui doit
 * déposer une demande ? », FAQ ETIAS, « À qui l'EES ne s'applique-t-il pas ? »,
 * « Qu'est-ce que l'EES ? ». ETIAS n'est pas en service à cette date, et
 * aucune date de lancement n'est publiée. Famille « vie en France ».
 */
const article: Article = {
  slug: "etias-autorisation-voyage-france",
  titre: "ETIAS : pas encore en service, 20 € à terme, et qui en sera dispensé pour venir en France",
  titreSeo: "ETIAS : pas encore en service, prix et dispenses",
  resume: "ETIAS n'est pas encore en service et n'a pas de date de lancement. Qui en aura besoin pour venir en France, le prix officiel, et qui en est dispensé.",
  chapo: "L'ETIAS, la future autorisation de voyage pour entrer en France sans visa, ==n'est pas encore en service== au 31 octobre 2026. L'Union européenne n'a pas fixé sa date de lancement. Aucun site ne peut donc vous la vendre aujourd'hui. Quand elle arrivera, elle coûtera ==20 €== et ne concernera pas les personnes qui ont un titre de séjour français.",
  publieLe: "2026-10-31",
  modifieLe: "2026-10-31",
  minutes: 7,
  theme: "ETIAS, l'autorisation de voyage pour l'Europe",
  motsCles: [
    "etias",
    "etias france",
    "etias date",
    "etias prix",
    "etias titre de séjour",
    "ees etias",
    "autorisation de voyage europe",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/etias-france.webp",
    alt: "Le grand panneau ovale des départs dans le hall F du terminal 2 de l'aéroport Paris-Charles-de-Gaulle, au-dessus de comptoirs d'enregistrement vides",
    largeur: 1200,
    hauteur: 900,
    credit: "Captainm, via Wikimedia Commons",
    licence: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Paris-Charles_de_Gaulle_Terminal_2_Hall_F_-_flight_info_board.jpg",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qu'est-ce que l'ETIAS ?",
    },
    {
      type: "p",
      texte: "L'ETIAS est une autorisation de voyage. Ce n'est pas un visa : c'est une demande en ligne, rapide, pour les personnes qui peuvent venir en Europe sans visa. Elle servira à entrer dans ==30 pays européens==, dont la France, pour un court séjour ([site officiel de l'Union européenne](https://travel-europe.europa.eu/fr/etias)).",
    },
    {
      type: "p",
      texte: "Avec une autorisation ETIAS, une personne pourra rester ==90 jours au plus sur toute période de 180 jours==. L'ETIAS ne permet ni de travailler, ni de faire de longues études : ce n'est pas un titre de séjour ([FAQ officielle](https://travel-europe.europa.eu/fr/etias/faq)). Un titre de séjour, c'est la carte qui autorise un étranger à vivre en France.",
    },
    {
      type: "h2",
      texte: "Quand l'ETIAS entre-t-il en service ?",
    },
    {
      type: "p",
      texte: "Pas encore. Le site officiel l'écrit en tête de chaque page, lu le 31 octobre 2026 : le système ETIAS n'est pas opérationnel, et aucune demande n'est recueillie pour le moment. L'Union européenne annoncera la date précise ==plusieurs mois avant== le lancement.",
    },
    {
      type: "encadre",
      titre: "Méfiez-vous des sites qui font déjà payer",
      texte: "Aujourd'hui, personne ne peut déposer une demande ETIAS. Un site qui vous propose de payer une demande ETIAS maintenant ne vous donne rien d'officiel. Le seul site officiel est [travel-europe.europa.eu](https://travel-europe.europa.eu/fr/etias). Notre article sur les [arnaques qui visent les étrangers en France](/articles/arnaques-etrangers-france-2026-faux-avocats-prefecture-anef) donne d'autres réflexes.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Qui aura besoin de l'ETIAS pour venir en France ?",
    },
    {
      type: "p",
      texte: "Les personnes qui viennent pour un court séjour, et dont le pays est dispensé de visa. La liste officielle compte une soixantaine de pays et territoires. En voici quelques-uns :",
    },
    {
      type: "tableau",
      entetes: ["Région", "Exemples de pays concernés"],
      lignes: [
        ["Amériques", "Brésil, Canada, Colombie, États-Unis, Mexique, Pérou"],
        ["Europe hors Union", "Albanie, Royaume-Uni, Serbie, Géorgie, Moldavie, Ukraine"],
        ["Asie et Pacifique", "Japon, Corée du Sud, Malaisie, Australie, Nouvelle-Zélande"],
        ["Afrique et océan Indien", "Maurice, Seychelles"],
      ],
      legende: "Extraits de la liste officielle, travel-europe.europa.eu, page « Qui doit déposer une demande ? », lue le 31/10/2026.",
    },
    {
      type: "p",
      texte: "Vos proches viennent d'un pays qui demande un visa, comme l'Algérie, le Maroc ou le Sénégal ? L'ETIAS ne les concerne pas : ils gardent la démarche de visa, comme avant. Pour les recevoir chez vous, notre guide de l'[attestation d'accueil](/articles/attestation-accueil-inviter-famille-france-2026-mairie-conditions) explique le document à demander en mairie.",
    },
    {
      type: "h2",
      texte: "Avec un titre de séjour français, faut-il l'ETIAS ?",
    },
    {
      type: "p",
      texte: "Non. Le site officiel range parmi les personnes dispensées le titulaire d'un titre de séjour délivré par un des 30 pays qui exigent l'ETIAS, sauf Chypre. La France en fait partie. Sont aussi dispensés :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "les personnes qui ont la nationalité française, ou celle d'un autre de ces 30 pays, même avec une autre nationalité : elles voyagent alors avec ce passeport-là ;",
        "les titulaires d'un visa de long séjour, comme le VLS-TS, le visa long séjour qui vaut titre de séjour la première année ;",
        "les titulaires d'un visa uniforme, c'est-à-dire un visa de court séjour Schengen.",
      ],
    },
    {
      type: "p",
      texte: "Votre titre de séjour reste votre document de voyage pour revenir en France. Il doit être valide. Avant de partir, relisez notre guide pour [voyager avec un titre de séjour](/articles/voyager-titre-sejour-francais-2026-pays-sans-visa-schengen), et la règle sur [la durée d'absence](/articles/absence-france-voyage-perte-titre-sejour-duree-maximale-2026).",
    },
    {
      type: "h2",
      texte: "Combien coûtera l'ETIAS, et combien de temps durera-t-il ?",
    },
    {
      type: "p",
      texte: "Les chiffres viennent de la FAQ officielle, lue le 31 octobre 2026. Ils s'appliqueront le jour où le système ouvrira.",
    },
    {
      type: "tableau",
      entetes: ["Point", "Ce que dit le site officiel"],
      lignes: [
        ["Prix", "20 €, sur le site officiel"],
        ["Gratuit pour", "Les moins de 18 ans et les plus de 70 ans, et certains membres de la famille d'un citoyen de l'Union"],
        ["Réponse", "En quelques minutes le plus souvent, jusqu'à 30 jours dans certains cas"],
        ["Validité", "3 ans, ou jusqu'à la fin du passeport si elle arrive avant"],
        ["Durée de séjour", "90 jours au plus sur toute période de 180 jours"],
      ],
      legende: "Source : FAQ ETIAS, travel-europe.europa.eu, lue le 31/10/2026.",
    },
    {
      type: "p",
      texte: "L'autorisation ne garantit pas l'entrée : le garde-frontière vérifie toujours les conditions à l'arrivée. Une demande peut être faite par un proche ou une agence de voyage, au nom du voyageur.",
    },
    {
      type: "h2",
      texte: "Et l'EES, le nouveau contrôle aux frontières ?",
    },
    {
      type: "p",
      texte: "L'EES, le système d'entrée et de sortie, est un autre outil européen. Il remplace peu à peu les tampons sur le passeport par un enregistrement numérique, avec les empreintes et une photo du visage ([site officiel de l'EES](https://travel-europe.europa.eu/fr/ees/what-is-the-ees)).",
    },
    {
      type: "p",
      texte: "Lui non plus ne s'applique pas aux titulaires d'un titre de séjour ou d'un visa de long séjour, selon la page officielle « [À qui l'EES ne s'applique-t-il pas ?](https://travel-europe.europa.eu/fr/ees/to-whom-does-ees-not-apply) ». Vos proches qui viennent en court séjour, eux, y passeront.",
    },
    {
      type: "h2",
      texte: "Et pour l'outre-mer ?",
    },
    {
      type: "p",
      texte: "Le site officiel parle des 30 pays européens, sans détailler les territoires d'outre-mer français. Les règles d'entrée y sont souvent différentes de celles de l'Hexagone. Pour un voyage vers la Guadeloupe, La Réunion, la Nouvelle-Calédonie ou un autre territoire, demandez au consulat de France du pays de départ.",
    },
    {
      type: "h2",
      texte: "Que faire dès maintenant ?",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Ne payez aucune demande ETIAS tant que le site officiel n'a pas annoncé l'ouverture.",
        "Vérifiez que le passeport de vos proches sera valide pendant tout le séjour.",
        "Pour vous, gardez un titre de séjour valide et pensez à son renouvellement à temps, comme l'explique notre guide du [renouvellement de titre de séjour](/articles/renouvellement-titre-sejour-2026-anef-prefecture-documents-delais).",
        "Revenez sur cette page : nous la mettrons à jour dès que l'Union européenne publiera la date de lancement.",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Au 31 octobre 2026, l'ETIAS n'est pas en service et n'a pas de date de lancement. À terme, il coûtera 20 € et concernera les voyageurs de pays dispensés de visa. Avec un titre de séjour français ou un visa de long séjour, vous n'en avez pas besoin.",
      ton: "vert",
    },
  ],
  faq: [
    {
      question: "Quand l'ETIAS sera-t-il obligatoire ?",
      reponse: "Aucune date n'est fixée au 31 octobre 2026. Le site officiel de l'Union européenne indique que le système n'est pas opérationnel et qu'aucune demande n'est recueillie. L'Union européenne annoncera la date précise plusieurs mois avant le lancement. Jusque-là, aucun voyageur n'a besoin de l'ETIAS pour entrer en France.",
    },
    {
      question: "Combien coûte l'ETIAS ?",
      reponse: "Le prix officiel sera de 20 € sur le site officiel, travel-europe.europa.eu. La demande sera gratuite pour les moins de 18 ans, les plus de 70 ans et certains membres de la famille d'un citoyen de l'Union. Un site qui demande plus cher, ou qui fait payer avant le lancement, n'est pas le site officiel.",
    },
    {
      question: "Faut-il l'ETIAS quand on a un titre de séjour en France ?",
      reponse: "Non. Selon le site officiel, le titulaire d'un titre de séjour délivré par l'un des 30 pays qui exigent l'ETIAS, dont la France, en est dispensé. Seuls les titres délivrés par Chypre font exception. Les titulaires d'un visa de long séjour sont aussi dispensés. Votre titre doit simplement être valide pour revenir.",
    },
    {
      question: "Quelle est la différence entre l'ETIAS et l'EES ?",
      reponse: "L'ETIAS est une autorisation de voyage à demander en ligne avant de partir, pour les voyageurs dispensés de visa. L'EES est un enregistrement numérique fait à la frontière, avec les empreintes et une photo, qui remplace peu à peu les tampons. Les titulaires d'un titre de séjour ne sont concernés ni par l'un ni par l'autre.",
    },
  ],
  sources: [
    {
      titre: "Union européenne : site officiel de l'ETIAS, page d'accueil (« Le système ETIAS n'est actuellement pas opérationnel »)",
      url: "https://travel-europe.europa.eu/fr/etias",
      type: "officiel",
      luLe: "2026-10-31",
    },
    {
      titre: "Union européenne : ETIAS, « Qui doit déposer une demande ? »",
      url: "https://travel-europe.europa.eu/fr/etias/about-etias/who-should-apply",
      type: "officiel",
      luLe: "2026-10-31",
    },
    {
      titre: "Union européenne : ETIAS, foire aux questions (prix, validité, délai, durée de séjour)",
      url: "https://travel-europe.europa.eu/fr/etias/faq",
      type: "officiel",
      luLe: "2026-10-31",
    },
    {
      titre: "Union européenne : « Qu'est-ce que l'EES ? »",
      url: "https://travel-europe.europa.eu/fr/ees/what-is-the-ees",
      type: "officiel",
      luLe: "2026-10-31",
    },
    {
      titre: "Union européenne : « À qui l'EES ne s'applique-t-il pas ? »",
      url: "https://travel-europe.europa.eu/fr/ees/to-whom-does-ees-not-apply",
      type: "officiel",
      luLe: "2026-10-31",
    },
  ],
};

export default article;
