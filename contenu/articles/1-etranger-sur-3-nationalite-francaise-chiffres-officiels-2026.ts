import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026, puis réécrit en entier par le robot éditorial le
 * 23/11/2026 (`docs/seo/ROBOT.md`, liste « à revérifier » de `MOTS-CLES.md`).
 * La version migrée inventait sa série (taux « estimés » de 78 % à 37 %,
 * « environ 55 000 » naturalisations en 2025, taux par diplôme, par durée de
 * résidence et par département, seuil de revenus de 1 200 €), et son titre
 * parlait de chiffres publiés « discrètement » alors qu'ils sont publics.
 * Sources lues le 23/11/2026 : DSED (page « L'accès à la nationalité
 * française pour l'année 2025 », publication du 30/06/2026) ; ministère de
 * l'Intérieur, « Les étrangers en France, rapport au Parlement 2025 »
 * (publié le 14/10/2026) ; Assemblée nationale, avis n° 2006, tome IV
 * (PLF 2026, tableau des décisions favorables) ; Légifrance (code civil,
 * art. 21-25-1 ; décret n° 93-1362, art. 43 à 45) ; service-public F2213 et
 * F11926 ; réponse à la question écrite n° 11488.
 */
const article: Article = {
  slug: "1-etranger-sur-3-nationalite-francaise-chiffres-officiels-2026",
  titre: "Naturalisation : 1 demande sur 3 acceptée ? Ce que disent vraiment les chiffres officiels",
  titreSeo: "Taux d'acceptation naturalisation : les chiffres",
  resume: "Combien de naturalisations par an, d'où vient le « 1 sur 3 », combien de temps attendre et que faire après un refus : les chiffres officiels expliqués.",
  chapo: "En 2025, ==42 246 personnes sont devenues françaises par décret==, et 98 139 ont acquis la nationalité française en tout, selon le ministère de l'Intérieur. Le chiffre « 1 sur 3 » vient d'un calcul de l'Assemblée nationale. Il compare les décisions favorables d'une année aux demandes de la même année : ce n'est pas un vrai taux d'acceptation. Voici les chiffres, et ce qu'ils veulent dire pour votre démarche.",
  publieLe: "2026-04-25",
  modifieLe: "2026-11-23",
  minutes: 8,
  theme: "Les chiffres officiels de la naturalisation",
  motsCles: [
    "taux d'acceptation naturalisation",
    "statistiques naturalisation française",
    "nombre de naturalisations par an",
    "chiffres naturalisation 2025",
    "taux refus naturalisation",
    "délai naturalisation",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/naturalisation-chiffres-arles.webp",
    alt: "Un drapeau tricolore accroché à la façade en pierre de l'hôtel de ville d'Arles",
    largeur: 1024,
    hauteur: 768,
    credit: "ell brown, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/39415781@N06/5800111775",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Article corrigé le 23 novembre 2026",
      texte: "La version précédente donnait des taux d'acceptation « estimés » (78 % en 2021, 37 % en 2025) et environ 55 000 naturalisations en 2025. Elle donnait aussi des taux par diplôme, par durée de résidence et par département. Aucun de ces chiffres ne venait d'une source officielle. Cet article est réécrit sur les chiffres publiés par le ministère de l'Intérieur et l'Assemblée nationale.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Combien de personnes deviennent françaises chaque année ?",
    },
    {
      type: "p",
      texte: "Il y a deux grandes façons de devenir français quand on est étranger. La ==naturalisation par décret== est une demande faite à l'État : il peut l'accepter ou la refuser. La ==déclaration== est un droit ouvert dans certains cas, par exemple après 4 ans de mariage avec une personne française. Les enfants mineurs d'une personne naturalisée deviennent souvent français en même temps qu'elle : c'est l'« effet collectif ».",
    },
    {
      type: "p",
      texte: "Le service statistique du ministère de l'Intérieur, la DSED, publie les chiffres chaque année ([DSED, publication du 30 juin 2026](https://www.immigration.interieur.gouv.fr/chiffres-de-limmigration-en-france/lacces-a-nationalite-francaise-pour-lannee-2025-moins-dacquisitions-de-nationalite-francaise-par)) :",
    },
    {
      type: "tableau",
      entetes: ["Année", "Par décret (enfants compris)", "Par mariage", "Toutes les voies"],
      lignes: [
        ["2021", "75 249", "17 280", "128 560"],
        ["2022", "60 556", "16 465", "114 483"],
        ["2023", "40 064", "19 455", "97 288"],
        ["2024", "48 829", "15 910", "103 661"],
        ["2025", "42 246", "17 579", "98 139"],
      ],
    },
    {
      type: "p",
      texte: "Lecture : en 2025, 42 246 personnes ont acquis la nationalité par décret, dont 9 196 enfants. C'est 13,5 % de moins qu'en 2024. « Toutes les voies » ajoute les déclarations, dont celles des jeunes nés en France, et les jeunes devenus français de plein droit à 18 ans. Le rapport au Parlement de 2025 présente encore les chiffres de 2025 comme provisoires.",
    },
    {
      type: "h2",
      texte: "D'où vient le chiffre « 1 demande sur 3 » ?",
    },
    {
      type: "p",
      texte: "Il vient d'un rapport de l'Assemblée nationale sur le budget 2026 ([avis n° 2006, tome IV, p. 27](https://www.assemblee-nationale.fr/dyn/17/rapports/cion_lois/l17b2006-tiv_rapport-avis.pdf)). La députée rapporteure y compare, pour chaque année, le nombre de décisions favorables au nombre de demandes déposées. Les chiffres viennent du ministère de l'Intérieur.",
    },
    {
      type: "tableau",
      entetes: ["Année", "Demandes déposées", "Décisions favorables", "Rapport entre les deux"],
      lignes: [
        ["2022", "89 672", "60 556", "67,5 %"],
        ["2023", "132 248", "40 064", "30,3 %"],
        ["2024", "131 034", "48 829", "37,3 %"],
      ],
    },
    {
      type: "p",
      texte: "Ce calcul ==n'est pas un taux d'acceptation==. Un dossier déposé en 2024 reçoit souvent sa réponse en 2025 ou plus tard. Et les décisions favorables comptent aussi les enfants. Le rapport le dit lui-même : la série est très « volatile ». En 2021, le même calcul donne 97,7 %, ce qui montre ses limites.",
    },
    {
      type: "p",
      texte: "Le chiffre le plus proche d'un taux vient du [rapport au Parlement 2025](https://www.immigration.interieur.gouv.fr/documentation/rapports/rapport-au-parlement-sur-donnees-de-2025.html) du ministère de l'Intérieur. Les plateformes, ces services qui instruisent les dossiers pour plusieurs départements, proposaient une décision favorable dans plus de 70 % des cas au début de 2025. Ce taux tombe à ==50 % en moyenne au quatrième trimestre 2025==. Ce sont des propositions, pas encore des décrets. Le même rapport compte plus de 153 850 demandes déposées en ligne en 2025, contre 131 083 en 2024.",
    },
    {
      type: "encadre",
      titre: "Ce qu'il faut retenir",
      texte: "Aucun taux officiel ne dit « votre dossier a 1 chance sur 3 ». Les chiffres publiés montrent deux choses : les demandes augmentent, et la part des propositions favorables a baissé au cours de 2025. Le résultat dépend de votre situation, examinée dossier par dossier.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Combien de temps faut-il attendre une réponse ?",
    },
    {
      type: "p",
      texte: "La loi fixe un délai maximum. L'administration doit répondre dans les ==18 mois== qui suivent la remise d'un dossier complet. Le récépissé, le papier qui prouve que le dossier est complet, fait partir ce délai. Il passe à 12 mois si vous résidez en France depuis au moins 10 ans. Il peut être prolongé une fois de 3 mois, par une décision motivée ([code civil, article 21-25-1](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006419662)).",
    },
    {
      type: "p",
      texte: "En pratique, c'est plus long. Selon le rapport de l'Assemblée nationale, il fallait en moyenne 760 jours en 2024 entre le premier dépôt et une décision favorable. Pour une décision défavorable, il fallait 467 jours. Après une réponse favorable, notre article [sur le décret de naturalisation](/articles/decret-de-naturalisation-trouver-et-apres) explique comment le trouver au Journal officiel et la suite. Le Journal officiel est le journal où l'État publie ses lois et ses décrets.",
    },
    {
      type: "h2",
      texte: "Irrecevabilité, ajournement, refus : quelle différence ?",
    },
    {
      type: "p",
      texte: "Le [décret n° 93-1362](https://www.legifrance.gouv.fr/codes/section_lc/JORFTEXT000000699753/LEGISCTA000006083937/), articles 43 et 44, prévoit trois réponses négatives :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**L'irrecevabilité** : une condition de la loi manque (la durée de résidence, par exemple). La préfecture n'examine pas le fond du dossier.",
        "**L'ajournement** : la demande est reportée. La décision fixe un délai ou des conditions à remplir avant de redemander.",
        "**Le rejet** (ou refus) : la demande est refusée. Une nouvelle demande moins de 5 ans après peut être classée sans suite.",
      ],
    },
    {
      type: "p",
      texte: "Pour contester, il faut d'abord faire un ==recours auprès du ministre chargé des naturalisations, dans les 2 mois== qui suivent la décision. Ce recours est obligatoire avant d'aller au tribunal. Sans réponse du ministre pendant 4 mois, le recours est considéré comme rejeté. Vous avez alors 2 mois pour saisir le tribunal administratif de Nantes ([service-public, F2213](https://www.service-public.gouv.fr/particuliers/vosdroits/F2213) ; décret n° 93-1362, article 45). Pour votre cas précis, faites-vous aider par un avocat ou une association, comme La Cimade.",
    },
    {
      type: "h2",
      texte: "Ce qui est demandé aujourd'hui pour être naturalisé",
    },
    {
      type: "p",
      texte: "Selon la fiche [service-public F2213](https://www.service-public.gouv.fr/particuliers/vosdroits/F2213), vérifiée le 16 juillet 2026, il faut en général :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "5 ans de résidence en France (moins dans certains cas, par exemple après 2 ans d'études supérieures en France).",
        "Un niveau de français B2, à l'oral et à l'écrit ([F11926](https://www.service-public.gouv.fr/particuliers/vosdroits/F11926)).",
        "La réussite à l'examen civique, puis un entretien en préfecture qui vérifie votre adhésion aux valeurs de la République.",
        "Un timbre fiscal de 255 € (127,50 € en Guyane). Le détail est dans notre article [sur le coût de la naturalisation](/articles/cout-naturalisation-francaise-2026-budget-complet-timbre-fiscal).",
      ],
    },
    {
      type: "p",
      texte: "L'examen civique et le niveau B2 sont ==exigés depuis le 1er janvier 2026==, selon le rapport au Parlement. L'examen compte 40 questions. Au 26 mai 2026, 71 125 personnes l'avaient passé, avec un taux moyen de réussite de 81 %, tous titres confondus ([réponse à la question écrite n° 11488](https://questions.assemblee-nationale.fr/q17/17-11488QE.htm)). Notre article [examen civique et naturalisation](/articles/examen-civique-naturalisation) explique quand le passer.",
    },
    {
      type: "cta",
      texte: "L'examen civique est une étape que vous pouvez préparer à l'avance. Sur Test Civique France, les cours des 5 thématiques sont gratuits, et les examens blancs de 40 questions vous donnent votre score et la correction de chaque question. L'inscription est gratuite.",
    },
    {
      type: "p",
      texte: "Si un enfant mineur vit avec vous, lisez aussi [comment il peut devenir français](/articles/naturalisation-enfant-mineur-france-2026-effet-collectif-declaration). Et si vous ne savez pas encore si l'examen vous concerne, [vérifiez-le en une minute](/eligibilite-examen-civique).",
    },
  ],
  faq: [
    {
      question: "Combien de personnes obtiennent la nationalité française chaque année ?",
      reponse: "En 2025, 98 139 personnes ont acquis la nationalité française, toutes voies confondues, selon le ministère de l'Intérieur. Parmi elles, 42 246 l'ont obtenue par décret de naturalisation, enfants compris, et 17 579 par mariage. En 2024, le total était de 103 661, dont 48 829 par décret.",
    },
    {
      question: "Quel est le taux d'acceptation des demandes de naturalisation ?",
      reponse: "Il n'existe pas de taux officiel. Un rapport de l'Assemblée nationale rapporte les décisions favorables aux demandes de la même année : 37,3 % en 2024. Mais un dossier déposé une année est souvent jugé l'année suivante. Selon le rapport au Parlement, les propositions favorables sont passées de plus de 70 % à 50 % au cours de 2025.",
    },
    {
      question: "Quel est le délai pour obtenir la naturalisation ?",
      reponse: "La loi impose une réponse dans les 18 mois après la remise d'un dossier complet, ou 12 mois si vous résidez en France depuis au moins 10 ans. Ce délai peut être prolongé une fois de 3 mois. En 2024, il fallait en moyenne 760 jours entre le premier dépôt et une décision favorable.",
    },
    {
      question: "Que faire en cas de refus de naturalisation ?",
      reponse: "Vous devez d'abord faire un recours auprès du ministre chargé des naturalisations, dans les 2 mois après la décision. Ce recours est obligatoire. Sans réponse pendant 4 mois, il est rejeté, et vous avez 2 mois pour saisir le tribunal administratif de Nantes. Un avocat ou une association peut vous aider pour votre cas.",
    },
  ],
  sources: [
    {
      titre: "Ministère de l'Intérieur (DSED) : L'accès à la nationalité française pour l'année 2025 (publication du 30/06/2026)",
      url: "https://www.immigration.interieur.gouv.fr/chiffres-de-limmigration-en-france/lacces-a-nationalite-francaise-pour-lannee-2025-moins-dacquisitions-de-nationalite-francaise-par",
      type: "officiel",
      luLe: "2026-11-23",
    },
    {
      titre: "Ministère de l'Intérieur : Les étrangers en France, rapport au Parlement sur les données de 2025 (publié le 14/10/2026)",
      url: "https://www.immigration.interieur.gouv.fr/documentation/rapports/rapport-au-parlement-sur-donnees-de-2025.html",
      type: "officiel",
      luLe: "2026-11-23",
    },
    {
      titre: "Assemblée nationale : avis n° 2006, tome IV, Immigration, asile et intégration (PLF 2026)",
      url: "https://www.assemblee-nationale.fr/dyn/17/rapports/cion_lois/l17b2006-tiv_rapport-avis.pdf",
      type: "officiel",
      luLe: "2026-11-23",
    },
    {
      titre: "Légifrance : code civil, article 21-25-1 (délai de réponse)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006419662",
      type: "juridique",
      luLe: "2026-11-23",
    },
    {
      titre: "Légifrance : décret n° 93-1362 du 30 décembre 1993, articles 43 à 45 (irrecevabilité, ajournement, rejet, recours)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/JORFTEXT000000699753/LEGISCTA000006083937/",
      type: "juridique",
      luLe: "2026-11-23",
    },
    {
      titre: "Service-public.gouv.fr : Naturalisation par décret (F2213)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2213",
      type: "officiel",
      luLe: "2026-11-23",
    },
    {
      titre: "Service-public.gouv.fr : niveau de langue française exigé pour la naturalisation (F11926)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11926",
      type: "officiel",
      luLe: "2026-11-23",
    },
    {
      titre: "Assemblée nationale : question écrite n° 11488, réponse du ministère de l'Intérieur (JO du 11/08/2026)",
      url: "https://questions.assemblee-nationale.fr/q17/17-11488QE.htm",
      type: "officiel",
      luLe: "2026-11-23",
    },
  ],
};

export default article;
