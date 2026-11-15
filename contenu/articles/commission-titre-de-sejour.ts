import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 15/11/2026 (`docs/seo/ROBOT.md`).
 * Requête visée : « commission du titre de séjour » (100 à 1 k recherches par
 * mois ; Planificateur de mots clés, France, toutes les langues, 13 et
 * 15/11/2026). Famille guides pratiques permanents (cadre légal) ; pont vers
 * l'examen civique par le contrat d'engagement républicain (5° de L. 432-13).
 * Sources lues le 15/11/2026 : Conseil constitutionnel, décision n° 2026-1228
 * QPC du 22/10/2026 (JORF n° 0248 du 23/10/2026) ; Conseil d'État, décision
 * n° 500420 du 13/11/2025 (qui cite L. 432-13 en entier) ; Légifrance, CESEDA
 * L. 432-14, L. 432-15 (en vigueur depuis le 01/05/2021) et L. 435-1 (depuis le
 * 26/08/2021) ; service-public F2209 (vérifiée le 06/11/2026) et F2208
 * (vérifiée le 01/07/2026).
 * Non écrit faute de source lue : les articles R. 432-6 et suivants (délai de
 * l'avis, publicité), un nombre de saisines par an, des taux d'avis favorables.
 */
const article: Article = {
  slug: "commission-titre-de-sejour",
  titre: "Commission du titre de séjour : les 5 cas où le préfet doit demander son avis",
  titreSeo: "Commission du titre de séjour : cas et procédure",
  resume: "Quand la préfecture doit saisir la commission du titre de séjour, la convocation, vos droits devant elle, et ce que vaut son avis.",
  chapo: "La commission du titre de séjour est un groupe de trois personnes qui donne un ==avis== au préfet avant certains refus de titre de séjour. La loi prévoit ==5 cas== où le préfet doit la consulter, par exemple après 10 ans de présence en France. Son avis ne décide pas à la place du préfet, mais il vous permet d'être entendu.",
  publieLe: "2026-11-15",
  modifieLe: "2026-11-15",
  minutes: 7,
  theme: "La commission du titre de séjour : les cas de saisine obligatoire, la procédure et la valeur de l'avis",
  motsCles: [
    "commission du titre de séjour",
    "commission titre de séjour",
    "saisine commission du titre de séjour",
    "commission du titre de séjour 10 ans",
    "commission du titre de séjour avis",
    "refus renouvellement titre de séjour",
    "carte de séjour pluriannuelle refus renouvellement",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/commission-titre-de-sejour.webp",
    alt: "Façade blanche de l'hôtel de préfecture de la Loire-Atlantique à Nantes, avec ses drapeaux français et sa grille fermée",
    largeur: 1200,
    hauteur: 675,
    credit: "Selbymay, via Wikimedia Commons",
    licence: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:H%C3%B4tel_de_pr%C3%A9fecture_de_la_Loire-Atlantique_-_Nantes.jpg",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qu'est-ce que la commission du titre de séjour ?",
    },
    {
      type: "p",
      texte: "C'est une commission créée dans chaque département. Le préfet, le représentant de l'État dans le département, la consulte avant certaines décisions sur le séjour des étrangers. Le titre de séjour, c'est la carte qui vous permet de vivre en France de façon régulière. La règle est écrite à l'article L. 432-13 du CESEDA, le code qui réunit le droit des étrangers.",
    },
    {
      type: "p",
      texte: "Elle compte trois membres ([CESEDA, article L. 432-14](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042776372)) :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**un maire ou un adjoint au maire**, désigné par l'association des maires du département (à Paris, par le Conseil de Paris) ;",
        "**deux personnes qualifiées**, choisies par le préfet (à Paris, par le préfet de police).",
      ],
    },
    {
      type: "p",
      texte: "Le préfet choisit le président parmi ces trois membres. Dans un département de plus de 500 000 habitants, il peut exister plusieurs commissions, par arrondissement.",
    },
    {
      type: "h2",
      texte: "Dans quels cas le préfet doit-il la consulter ?",
    },
    {
      type: "p",
      texte: "La commission n'est pas consultée pour tous les refus. La loi fixe ==5 cas==. Le Conseil d'État les a cités en entier dans sa [décision n° 500420 du 13 novembre 2025](https://www.conseil-etat.fr/fr/arianeweb/CE/decision/2025-11-13/500420) :",
    },
    {
      type: "tableau",
      entetes: ["Cas", "Ce que le préfet envisage", "Exemples ou condition"],
      lignes: [
        ["1°", "Refuser de délivrer ou de renouveler une carte de séjour temporaire", "Certaines cartes, par exemple conjoint de Français, parent d'enfant français ou étranger malade. Il faut en remplir vraiment les conditions"],
        ["2°", "Refuser de délivrer une carte de résident (la carte de 10 ans)", "Certaines cartes de résident seulement, si vous en remplissez vraiment les conditions"],
        ["3°", "Retirer un titre de séjour", "Le cas prévu à l'article L. 423-19"],
        ["4°", "Refuser une admission exceptionnelle au séjour", "Si vous prouvez plus de 10 ans de résidence habituelle en France"],
        ["5°", "Refuser le renouvellement ou retirer une carte pluriannuelle ou une carte de résident", "Seulement pour un manquement au contrat d'engagement à respecter les principes de la République"],
      ],
    },
    {
      type: "p",
      texte: "La carte de séjour temporaire dure en général un an. La carte pluriannuelle dure plusieurs années. La carte de résident dure 10 ans. Notre guide sur [la carte de résident](/articles/carte-resident-10-ans-france-2026-conditions-obtention-refus-prefecture) détaille ses conditions.",
    },
    {
      type: "encadre",
      titre: "Le mot qui compte : « vraiment »",
      texte: "Pour les cas 1° et 2°, la loi parle d'un étranger qui remplit ==effectivement== les conditions de la carte. Si une condition manque, le préfet n'a pas l'obligation de consulter la commission.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Après 10 ans en France : que change la commission ?",
    },
    {
      type: "p",
      texte: "L'admission exceptionnelle au séjour, c'est une régularisation au cas par cas. Le préfet n'est jamais obligé de l'accorder. Mais si vous prouvez ==plus de 10 ans== de résidence habituelle en France, il doit d'abord demander l'avis de la commission avant de vous refuser un titre ([CESEDA, article L. 435-1](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042772028)).",
    },
    {
      type: "p",
      texte: "La loi dit que la preuve se fait « par tout moyen ». En pratique, gardez des papiers datés pour chaque année : avis d'impôt, factures, bulletins de salaire, certificats médicaux, courriers officiels. Plus ils sont nombreux et variés, mieux ils montrent une présence régulière. Notre article sur [la régularisation en 2026](/articles/regularisation-sans-papiers-france-2026-methode-demarches-circulaire-valls) explique la demande elle-même.",
    },
    {
      type: "h2",
      texte: "Carte pluriannuelle refusée : la commission est-elle saisie ?",
    },
    {
      type: "p",
      texte: "Le plus souvent, non. Pour refuser de renouveler une carte pluriannuelle, le préfet doit consulter la commission ==dans un seul cas==. C'est un manquement à votre contrat d'engagement à respecter les principes de la République. Ce contrat, vous l'avez signé en demandant votre titre.",
    },
    {
      type: "p",
      texte: "Le Conseil d'État l'a jugé le 13 novembre 2025. Une carte pluriannuelle n'avait pas été renouvelée pour un motif d'ordre public. La commission n'avait donc pas à être saisie. Puis le Conseil constitutionnel a jugé cette règle conforme à la Constitution, dans sa [décision n° 2026-1228 QPC du 22 octobre 2026](https://www.conseil-constitutionnel.fr/decision/2026/20261228QPC.htm).",
    },
    {
      type: "citation",
      texte: "La différence de traitement instituée par ces dispositions, qui repose sur une différence de situation, est en rapport direct avec l'objet de la loi.",
      source: "Conseil constitutionnel, décision n° 2026-1228 QPC, 22 octobre 2026, point 14",
    },
    {
      type: "p",
      texte: "Le Conseil explique qu'une personne qui a une carte pluriannuelle n'est pas dans la même situation qu'une personne qui a une carte temporaire. Pour une carte temporaire du 1°, la commission est consultée quel que soit le motif du refus de renouvellement.",
    },
    {
      type: "h2",
      texte: "Comment se passe la convocation et l'audition ?",
    },
    {
      type: "p",
      texte: "Vous êtes convoqué ==par écrit, au moins 15 jours== avant la réunion. La réunion doit avoir lieu dans les 3 mois après la saisine ([CESEDA, article L. 432-15](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042776370)). Devant la commission, vous avez ces droits ([service-public, F2209](https://www.service-public.gouv.fr/particuliers/vosdroits/F2209)) :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "être assisté d'un avocat ou de toute personne de votre choix ;",
        "être entendu avec un interprète ;",
        "demander l'aide juridictionnelle, c'est-à-dire la prise en charge par l'État de tout ou partie des frais d'avocat, selon vos ressources (la convocation doit vous le dire) ;",
        "expliquer les raisons de votre demande et votre situation ;",
        "demander que le maire de votre commune, ou son représentant, soit présent et entendu.",
      ],
    },
    {
      type: "p",
      texte: "Si vous n'avez pas de carte de séjour, ou si elle est périmée, un document provisoire de séjour vous est remis pendant la procédure, selon service-public.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Ne manquez pas la réunion.** C'est le seul moment où vous parlez à la commission. Prévenez-la par écrit si vous avez un empêchement grave.",
        "**Apportez vos preuves**, classées par année ou par sujet : la commission juge sur ce qu'elle voit.",
        "**Gardez l'enveloppe et la convocation** : la date compte si un recours est fait plus tard.",
      ],
    },
    {
      type: "h2",
      texte: "Que vaut l'avis de la commission ?",
    },
    {
      type: "p",
      texte: "L'avis est ==consultatif== : il éclaire le préfet, mais ne l'oblige pas. Le Conseil constitutionnel le rappelle au point 12 de sa décision. Service-public le dit aussi : le préfet peut refuser la carte même après un avis favorable ([F2208](https://www.service-public.gouv.fr/particuliers/vosdroits/F2208)). Vos explications partent chez le préfet avec l'avis motivé, et l'avis vous est aussi communiqué.",
    },
    {
      type: "p",
      texte: "Un refus est en général notifié par une lettre motivée. Il est souvent assorti d'une OQTF (obligation de quitter le territoire français). Les délais de recours sont courts. Notre guide sur [le refus de titre et l'OQTF](/articles/refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france) les présente. Si le préfet ne répond pas du tout, lisez notre article sur [le délai de 90 jours](/articles/delai-reponse-prefecture-titre-de-sejour-90-jours).",
    },
    {
      type: "encadre",
      titre: "Le geste le plus utile",
      texte: "Si votre situation entre dans l'un des 5 cas et que le préfet refuse ==sans avoir saisi la commission==, c'est un argument à faire valoir dans un recours. Montrez votre dossier à un avocat ou à une association agréée (La Cimade, le Gisti, une permanence d'accès au droit). Seul un examen de votre cas dit si l'argument tient.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Le contrat républicain, un lien avec l'examen civique",
    },
    {
      type: "p",
      texte: "Le 5° parle du contrat d'engagement à respecter les principes de la République : la liberté, l'égalité, la laïcité, le respect des lois. Ce sont aussi les premiers thèmes de l'examen civique, obligatoire pour une première carte pluriannuelle ou une première carte de résident. Notre article sur [l'examen civique pour la carte de résident](/articles/examen-civique-carte-de-resident) dit ce qui est demandé, et le [simulateur d'éligibilité](/eligibilite-examen-civique) vous dit en une minute si vous êtes concerné.",
    },
  ],
  faq: [
    {
      question: "Quand la commission du titre de séjour est-elle saisie ?",
      reponse: "Le préfet doit la saisir dans 5 cas fixés par l'article L. 432-13 du CESEDA. Par exemple, avant de refuser certaines cartes à une personne qui en remplit les conditions. Ou avant de refuser une admission exceptionnelle à une personne présente depuis plus de 10 ans. Hors de ces cas, il n'y est pas obligé.",
    },
    {
      question: "La commission du titre de séjour est-elle obligatoire après 10 ans de présence ?",
      reponse: "Oui, pour une demande d'admission exceptionnelle au séjour. Si vous prouvez par tout moyen plus de 10 ans de résidence habituelle en France, le préfet doit demander l'avis de la commission avant de refuser (article L. 435-1 du CESEDA). Cela ne donne pas droit au titre : l'avis reste consultatif.",
    },
    {
      question: "Le préfet doit-il suivre l'avis de la commission du titre de séjour ?",
      reponse: "Non. L'avis est consultatif : le préfet peut refuser le titre même si la commission a donné un avis favorable. L'avis motivé et vos explications lui sont transmis, et l'avis vous est aussi communiqué. En cas de refus, vous pouvez faire un recours, dans des délais courts.",
    },
    {
      question: "Peut-on être assisté d'un avocat devant la commission du titre de séjour ?",
      reponse: "Oui. Vous pouvez être assisté d'un avocat ou de toute personne de votre choix, et être entendu avec un interprète. Vous pouvez demander l'aide juridictionnelle, et la convocation doit vous le dire. Elle vous est envoyée par écrit au moins 15 jours avant la réunion.",
    },
  ],
  sources: [
    {
      titre: "Conseil constitutionnel : décision n° 2026-1228 QPC du 22 octobre 2026 (5° de l'article L. 432-13 du CESEDA, conformité ; JORF n° 0248 du 23/10/2026)",
      url: "https://www.conseil-constitutionnel.fr/decision/2026/20261228QPC.htm",
      type: "juridique",
      luLe: "2026-11-15",
    },
    {
      titre: "Conseil d'État : décision n° 500420 du 13 novembre 2025 (texte de l'article L. 432-13 ; carte pluriannuelle et commission)",
      url: "https://www.conseil-etat.fr/fr/arianeweb/CE/decision/2025-11-13/500420",
      type: "juridique",
      luLe: "2026-11-15",
    },
    {
      titre: "Légifrance : CESEDA, article L. 432-14 (composition de la commission, en vigueur depuis le 01/05/2021)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042776372",
      type: "officiel",
      luLe: "2026-11-15",
    },
    {
      titre: "Légifrance : CESEDA, article L. 432-15 (convocation, délai de 3 mois, assistance, aide juridictionnelle)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042776370",
      type: "officiel",
      luLe: "2026-11-15",
    },
    {
      titre: "Légifrance : CESEDA, article L. 435-1 (admission exceptionnelle au séjour, plus de 10 ans de résidence)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042772028",
      type: "officiel",
      luLe: "2026-11-15",
    },
    {
      titre: "Service-public : carte de séjour « vie privée et familiale » (F2209, vérifiée le 06/11/2026), rubrique « Contester en cas de refus »",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2209",
      type: "officiel",
      luLe: "2026-11-15",
    },
    {
      titre: "Service-public : carte de résident de 10 ans (F2208, vérifiée le 01/07/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2208",
      type: "officiel",
      luLe: "2026-11-15",
    },
  ],
};

export default article;
