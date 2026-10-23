import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 sans changer d'adresse, puis réécrit en entier par le
 * robot éditorial le 23/10/2026 (liste « à revérifier » de
 * `docs/seo/MOTS-CLES.md`). L'ancienne version présentait comme un projet
 * « de 7 jours à 7 mois » une rétention que la loi n° 2026-667 du 27 juillet
 * 2026 a depuis encadrée autrement, et donnait des chiffres sans source
 * (nombre de centres et de places, durées étrangères, délais de recours).
 * Tout est repris sur le CESEDA en vigueur (Légifrance, lu le 23/10/2026),
 * la décision n° 2026-906 DC et service-public (F2780). Le slug ne change pas.
 */
const article: Article = {
  slug: "cra-retention-etrangers-7-jours-7-mois-2026-droits-recours-expulsion",
  titre: "Centre de rétention (CRA) : combien de temps, quels droits, quels recours ?",
  titreSeo: "Centre de rétention (CRA) : durée, droits, recours",
  resume: "Centre de rétention administrative : durée maximale en 2026 (90 jours en règle générale), droits de la personne retenue, délais pour contester.",
  chapo: "En règle générale, un étranger ne peut pas rester plus de ==90 jours== en centre de rétention (CRA). Des durées de 180 et 210 jours existent, mais seulement pour des cas précis, comme le terrorisme. Dès l'arrivée, la personne retenue a droit à un avocat, à un interprète et à l'aide d'une association.",
  publieLe: "2026-04-21",
  modifieLe: "2026-10-23",
  minutes: 8,
  theme: "centre de rétention administrative : durée, droits et recours",
  motsCles: [
    "centre de rétention administrative",
    "CRA durée maximale",
    "combien de temps en centre de rétention",
    "droits en rétention administrative",
    "contester placement en rétention",
    "rétention administrative recours",
    "avocat rétention administrative",
    "rétention mineurs",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/centre-retention-administrative-cra.webp",
    alt: "Façade d'un ancien palais de justice en pierre rose, avec des drapeaux français et européen, sous un ciel bleu",
    largeur: 1024,
    hauteur: 768,
    credit: "Office de Tourisme de Colmar, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/56580533@N02/5465413476",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Correction du 23 octobre 2026",
      texte: "Une ancienne version de cette page annonçait une proposition de loi qui ferait passer la rétention « de 7 jours à 7 mois ». Ce n'est pas ce que dit le droit en vigueur. La règle générale reste 90 jours. La loi du 27 juillet 2026 a élargi les cas où la rétention peut aller plus loin, jusqu'à 180 ou 210 jours. Cette page a été réécrite sur les textes officiels, lus le 23 octobre 2026.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Qu'est-ce qu'un centre de rétention administrative ?",
    },
    {
      type: "p",
      texte: "Un centre de rétention administrative (CRA) est un lieu fermé. L'État y garde un étranger qui doit quitter la France, le temps d'organiser son départ forcé. Il existe aussi des locaux de rétention : des lieux plus petits, pour une durée courte.",
    },
    {
      type: "p",
      texte: "La rétention n'est pas une peine de prison. C'est une mesure décidée par l'administration, et contrôlée par un juge. Elle vise une personne qui a reçu une décision d'éloignement, par exemple une OQTF (obligation de quitter le territoire français). Elle sert quand son départ ne peut pas avoir lieu tout de suite ([service-public, F2780](https://www.service-public.gouv.fr/particuliers/vosdroits/F2780)).",
    },
    {
      type: "p",
      texte: "Le placement est décidé par le préfet, c'est-à-dire le représentant de l'État dans le département. Le juge peut, à la place, décider une assignation à résidence : la personne reste chez elle, mais doit se présenter régulièrement à la police ou à la gendarmerie (F2780).",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Un mineur ne peut pas être placé en rétention, depuis le 28 janvier 2024 ([article L. 741-5 du CESEDA](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042773236/), le code qui réunit les règles sur les étrangers). À Mayotte, cette interdiction ne s'applique qu'à partir du 1er janvier 2027.",
      ],
    },
    {
      type: "h2",
      texte: "Combien de temps peut durer la rétention ?",
    },
    {
      type: "p",
      texte: "La durée se compte par étapes. Après le placement, chaque prolongation doit être décidée par le juge du tribunal judiciaire, au cours d'une audience. Voici les durées écrites dans le CESEDA en vigueur ([L. 742-1 à L. 742-3](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042773264/), [L. 742-4](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042773274/), [L. 742-6 et L. 742-7](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042773280/)).",
    },
    {
      type: "tableau",
      entetes: ["Étape", "Durée totale au plus"],
      lignes: [
        ["Placement par le préfet", "96 heures (4 jours)"],
        ["Première prolongation par le juge (26 jours)", "30 jours"],
        ["Deuxième prolongation (30 jours), dans certains cas", "60 jours"],
        ["Troisième prolongation (30 jours), dans les mêmes cas", "==90 jours==, la règle générale"],
        ["Exception : terrorisme, ou menace grave avec certaines condamnations", "180 jours"],
        ["Dernière exception, dans des cas précis", "210 jours"],
      ],
      legende: "Sources : CESEDA, articles L. 742-1 à L. 742-7, lus sur Légifrance le 23/10/2026.",
    },
    {
      type: "p",
      texte: "Les deuxième et troisième prolongations ne sont pas automatiques. Le juge ne peut les accorder que dans des cas listés par la loi (article L. 742-4). Il peut s'agir d'une urgence ou d'une menace pour l'ordre public. Il peut aussi s'agir de papiers de voyage perdus ou cachés, ou d'une identité dissimulée. Enfin, le consulat peut ne pas délivrer le laissez-passer à temps, ou aucun moyen de transport n'est disponible.",
    },
    {
      type: "p",
      texte: "La loi du 27 juillet 2026 a élargi les exceptions au-delà de 90 jours. Elles visent les étrangers liés au terrorisme. Elles visent aussi ceux qui représentent une menace grave pour l'ordre public. Il faut alors une condamnation définitive pour certains crimes ou délits punis d'au moins cinq ans de prison (article L. 742-6). Le Conseil constitutionnel a jugé ces règles conformes le 23 juillet 2026 ([décision n° 2026-906 DC](https://www.conseil-constitutionnel.fr/decision/2026/2026906DC.htm)). Ce qui change au 24 octobre 2026 avec le décret d'application est expliqué dans notre article sur le [décret du 22 octobre 2026](/articles/decret-retention-administrative-22-octobre-2026).",
    },
    {
      type: "h2",
      texte: "Quels sont vos droits pendant la rétention ?",
    },
    {
      type: "p",
      texte: "Service-public liste les droits de la personne retenue ([F2780](https://www.service-public.gouv.fr/particuliers/vosdroits/F2780)). Les voici en clair.",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Être informé de ses droits.** Le document qui les rappelle doit être traduit si la personne le demande.",
        "**Un avocat**, dès l'arrivée. L'aide juridictionnelle (la prise en charge des frais d'avocat par l'État) peut être demandée.",
        "**Un interprète**, notamment à l'audience devant le juge.",
        "**Un médecin** : chaque centre a une unité médicale, et la personne peut demander à être examinée.",
        "**Communiquer avec l'extérieur** : téléphone, visites aux horaires prévus, contact avec la famille et le consulat de son pays.",
        "**L'aide d'une association** : une permanence juridique peut intervenir dans le centre.",
      ],
    },
    {
      type: "p",
      texte: "Attention : la fiche F2780 est en cours de mise à jour, et ses durées ne suivent pas encore les lois de 2025 et 2026. Pour les durées, fiez-vous au CESEDA cité plus haut.",
    },
    {
      type: "h2",
      texte: "Comment contester un placement en rétention ?",
    },
    {
      type: "p",
      texte: "Les délais sont très courts. Il faut agir dès le premier jour, avec un avocat ou l'association du centre.",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Contester la décision de placement** devant le juge du tribunal judiciaire, dans un délai de ==4 jours== après sa notification (F2780).",
        "**Se présenter à chaque audience de prolongation.** À chaque étape, le juge vérifie que la rétention reste justifiée. C'est une nouvelle occasion de faire valoir sa situation.",
        "**Faire appel d'une décision du juge** devant le premier président de la cour d'appel, dans un délai de 24 heures (F2780).",
        "**Contester la décision d'éloignement elle-même** (l'OQTF, par exemple) devant le tribunal administratif (le juge des décisions de l'administration), dans le délai écrit sur la décision.",
      ],
    },
    {
      type: "p",
      texte: "Quand le juge met fin à la rétention, la personne reste encore ==10 heures== à la disposition de la justice, le temps pour le procureur de faire appel ([article L. 743-19](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042773348/), en vigueur depuis le 29 juillet 2026). Avant, ce délai était de 24 heures.",
    },
    {
      type: "h2",
      texte: "Comment aider un proche placé en rétention ?",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "Trouvez le nom du centre et son adresse, et demandez les horaires de visite.",
        "Rassemblez les papiers utiles : passeport, preuves d'adresse, actes de naissance ou de mariage, contrat de travail, documents médicaux.",
        "Transmettez-les à son avocat ou à l'association du centre, qui saura quoi en faire devant le juge.",
        "Pour un enfant laissé seul, prévenez sans attendre un proche de confiance ou les services sociaux.",
      ],
    },
    {
      type: "p",
      texte: "Cette page explique la règle générale. Elle ne remplace pas un conseil pour un cas précis. Adressez-vous à un avocat, à l'association présente dans le centre, ou au Défenseur des droits (l'autorité indépendante qui défend les droits face aux administrations). Pour comprendre ce qui précède la rétention, lisez nos articles sur l'[OQTF et ses recours](/articles/oqtf-2026-droits-recours-expulsion-aide-juridictionnelle-test-civique) et sur le [refus de titre de séjour](/articles/refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france).",
    },
    {
      type: "h2",
      texte: "Les règles sont-elles les mêmes en outre-mer ?",
    },
    {
      type: "p",
      texte: "Pas toujours. Le CESEDA a des règles d'adaptation pour chaque territoire. À Mayotte, par exemple, l'interdiction de retenir des mineurs n'entre en vigueur que le 1er janvier 2027. Le décret du 22 octobre 2026 y limite aussi à 48 heures (24 heures avec des enfants) le maintien dans les locaux de rétention. En Guyane, en Guadeloupe, à Saint-Martin ou à Saint-Barthélemy, les recours peuvent aussi suivre des règles particulières : demandez à l'avocat ce qui s'applique sur place.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La rétention dure ==90 jours== au plus en règle générale. Chaque prolongation passe devant un juge. Le délai pour contester le placement est de 4 jours : le bon réflexe est de demander un avocat et l'association du centre dès l'arrivée.",
      ton: "vert",
    },
  ],
  faq: [
    {
      question: "Combien de temps peut-on rester en centre de rétention ?",
      reponse: "En règle générale, 90 jours au plus : 4 jours sur décision du préfet, puis des prolongations décidées par le juge (article L. 742-4 du CESEDA). Des exceptions vont jusqu'à 180 jours, puis 210 jours, pour les étrangers liés au terrorisme ou qui représentent une menace grave et ont été condamnés pour certaines infractions.",
    },
    {
      question: "Quels sont les droits d'une personne en centre de rétention ?",
      reponse: "Selon service-public, elle peut demander un avocat dès l'arrivée, avec l'aide juridictionnelle, un interprète et un examen médical. Elle peut téléphoner, recevoir des visites et contacter son consulat. Une association peut l'aider dans le centre. Elle peut aussi contester la décision de placement devant le juge.",
    },
    {
      question: "Comment contester un placement en rétention ?",
      reponse: "La personne retenue a 4 jours, après la notification, pour contester la décision de placement devant le juge du tribunal judiciaire, selon service-public. Elle peut ensuite faire appel des décisions du juge dans les 24 heures. La décision d'éloignement, comme une OQTF, se conteste devant le tribunal administratif.",
    },
    {
      question: "Un enfant peut-il être placé en centre de rétention ?",
      reponse: "Non. Depuis le 28 janvier 2024, l'article L. 741-5 du CESEDA interdit de placer un mineur en rétention. Cette règle ne s'appliquera à Mayotte qu'à partir du 1er janvier 2027. Jusque-là, le maintien dans un local de rétention avec des mineurs y est limité à 24 heures depuis le 24 octobre 2026.",
    },
  ],
  sources: [
    {
      titre: "Légifrance : CESEDA, articles L. 742-1 à L. 742-3 (première prolongation de la rétention)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042773264/",
      type: "officiel",
      luLe: "2026-10-23",
    },
    {
      titre: "Légifrance : CESEDA, article L. 742-4 (prolongations jusqu'à 90 jours)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042773274/",
      type: "officiel",
      luLe: "2026-10-23",
    },
    {
      titre: "Légifrance : CESEDA, articles L. 742-6 et L. 742-7 (rétention au-delà de 90 jours)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042773280/",
      type: "officiel",
      luLe: "2026-10-23",
    },
    {
      titre: "Légifrance : CESEDA, article L. 743-19 (délai de dix heures)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042773348/",
      type: "officiel",
      luLe: "2026-10-23",
    },
    {
      titre: "Légifrance : CESEDA, article L. 741-5 (interdiction de la rétention des mineurs)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042773236/",
      type: "officiel",
      luLe: "2026-10-23",
    },
    {
      titre: "Légifrance : décret n° 2026-977 du 22 octobre 2026 relatif à la rétention administrative de certains étrangers en situation irrégulière",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000055008942",
      type: "officiel",
      luLe: "2026-10-23",
    },
    {
      titre: "Conseil constitutionnel : décision n° 2026-906 DC du 23 juillet 2026",
      url: "https://www.conseil-constitutionnel.fr/decision/2026/2026906DC.htm",
      type: "juridique",
      luLe: "2026-10-23",
    },
    {
      titre: "Service-public : centre de rétention administrative (CRA) (F2780, en cours de mise à jour)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2780",
      type: "officiel",
      luLe: "2026-10-23",
    },
  ],
};

export default article;
