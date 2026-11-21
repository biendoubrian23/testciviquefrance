import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 21/11/2026 (`docs/seo/ROBOT.md`), règle des
 * 24 heures : décret n° 2026-1060 du 17 novembre 2026, publié au Journal
 * officiel n° 0271 du 20/11/2026, en vigueur le lendemain de sa publication
 * (notice du décret), soit le 21/11/2026. Texte non vu par le Planificateur de
 * mots clés (moins de 72 h) : demande non mesurée.
 * Sources lues le 21/11/2026 : texte intégral du décret (archive open data de
 * la DILA, JORF_20261120, articles 1 à 6 et notice) ; Légifrance, CESEDA
 * R. 531-17 (version en vigueur), R. 591-1 (version « du 29/12/2025 au
 * 21/11/2026 »), R. 591-3 et R. 591-4 (Guadeloupe), R. 591-6 et R. 591-7
 * (Guyane), sous-section Martinique (R. 591-10 à R. 591-12), R. 591-12-1
 * (Mayotte) ; service-public F2232 (demande d'asile, page signalée « en cours
 * de mise à jour » après les décrets de 2026 sur le délai de recours devant
 * la CNDA : ce délai n'est donc pas écrit en chiffre ici).
 */
const article: Article = {
  slug: "ofpra-outre-mer-convocation-notification",
  titre: "Asile en Guadeloupe, Guyane, Martinique, à La Réunion et à Mayotte : depuis le 21 novembre 2026, une convocation de l'OFPRA manquée peut valoir notification",
  titreSeo: "OFPRA outre-mer : la convocation vaut notification",
  resume: "Décret n° 2026-1060, en vigueur le 21/11/2026 : comment l'OFPRA vous notifie sa décision outre-mer, et pourquoi il ne faut pas manquer sa convocation.",
  chapo: "Depuis le ==21 novembre 2026==, dans les cinq départements et régions d'outre-mer, l'OFPRA peut vous remettre sa décision en main propre lors d'une convocation. Si vous ne venez pas sans motif légitime, la décision est ==réputée notifiée à la date de la convocation==. C'est le décret n° 2026-1060 du 17 novembre 2026 : voici ce qui change, et ce que vous pouvez faire.",
  publieLe: "2026-11-21",
  modifieLe: "2026-11-21",
  minutes: 7,
  theme: "L'asile outre-mer : décret n° 2026-1060",
  motsCles: [
    "décret 2026-1060",
    "OFPRA outre-mer",
    "convocation OFPRA",
    "notification décision OFPRA",
    "demande d'asile Guyane",
    "demande d'asile Mayotte",
    "demande d'asile Guadeloupe",
    "compte numérique OFPRA",
  ],
  rubrique: "actualites",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/ofpra-outre-mer-prefecture-guyane.webp",
    alt: "L'hôtel de préfecture de la Guyane à Cayenne, un long bâtiment blanc à colonnes avec un toit de tuiles, des palmiers et un drapeau français",
    largeur: 1200,
    hauteur: 788,
    credit: "Don-vip, via Wikimedia Commons",
    licence: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:H%C3%B4tel_de_pr%C3%A9fecture_de_la_Guyane_2.jpg",
  },
  blocs: [
    {
      type: "h2",
      texte: "Que change le décret n° 2026-1060 ?",
    },
    {
      type: "p",
      texte: "Un décret, c'est un texte signé par le Premier ministre. Celui-ci a été publié au Journal officiel, le journal où paraissent les lois et les décrets, le 20 novembre 2026 ([Légifrance](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000055111384)). Il entre en vigueur ==le lendemain, le 21 novembre 2026==.",
    },
    {
      type: "p",
      texte: "Il touche les échanges entre l'OFPRA et les demandeurs d'asile. L'OFPRA (Office français de protection des réfugiés et apatrides) est l'organisme qui étudie les demandes d'asile et décide d'accorder ou non une protection. Le décret modifie le CESEDA, le code qui regroupe les règles sur les étrangers et l'asile.",
    },
    {
      type: "p",
      texte: "Son but, selon sa notice : étendre le ==compte numérique de l'OFPRA== à l'outre-mer. L'office pourra vous envoyer ses documents en ligne, de façon sécurisée. Le décret prévoit aussi deux autres façons de vous remettre une décision.",
    },
    {
      type: "tableau",
      entetes: ["Point", "Avant le 21/11/2026", "Depuis le 21/11/2026"],
      lignes: [
        ["Envoi de la décision si le procédé en ligne n'est pas possible", "lettre recommandée avec accusé de réception", "tout moyen qui protège la confidentialité de la demande et permet d'en accuser réception"],
        ["Remise en main propre lors d'une convocation", "seulement dans les procédures rapides (Guadeloupe, Guyane, Martinique, Mayotte)", "possible dans les cinq territoires"],
        ["Absence à cette convocation, sans motif légitime", "décision réputée notifiée à la date de la convocation (procédures rapides)", "même règle, dans les cinq territoires"],
      ],
      legende: "Source : décret n° 2026-1060, art. 1 à 5, et CESEDA, R. 591-1 à R. 591-12-1 (Légifrance), lus le 21/11/2026.",
    },
    {
      type: "h2",
      texte: "Qui est concerné ?",
    },
    {
      type: "p",
      texte: "Le décret vise les collectivités de ==l'article 73 de la Constitution== : la Guadeloupe, la Guyane, la Martinique, La Réunion et Mayotte. Ce sont les cinq départements et régions d'outre-mer (DROM).",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Vous avez demandé l'asile dans l'un de ces cinq territoires ?** Les nouvelles règles s'appliquent depuis le 21 novembre 2026.",
        "**Vous êtes dans l'Hexagone ?** Rien ne change pour vous avec ce décret. La règle générale reste celle de l'article R. 531-17 du CESEDA.",
        "**Vous êtes à Saint-Martin, à Saint-Barthélemy, à Saint-Pierre-et-Miquelon, en Nouvelle-Calédonie, en Polynésie française ou à Wallis-et-Futuna ?** Ces territoires ne relèvent pas de l'article 73 : ce décret ne les vise pas. Renseignez-vous auprès des services de l'État sur place.",
      ],
    },
    {
      type: "h2",
      texte: "Comment l'OFPRA vous remet-il sa décision ?",
    },
    {
      type: "p",
      texte: "Notifier une décision, c'est la porter officiellement à votre connaissance. Cette date compte beaucoup : c'est elle qui fait partir le délai pour contester la décision. Depuis le 21 novembre 2026, l'OFPRA a trois façons de le faire outre-mer.",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**En ligne, par le procédé électronique de l'office.** La décision est réputée notifiée le jour où vous l'ouvrez pour la première fois. Si vous ne l'ouvrez pas, elle l'est ==15 jours après sa mise en ligne== ([CESEDA, art. R. 531-17](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043463479)).",
        "**Par un autre moyen sûr**, quand vous ne pouvez pas utiliser le procédé en ligne. Avant, c'était la lettre recommandée. Désormais, c'est tout moyen qui protège la confidentialité de votre demande et permet d'en accuser réception.",
        "**En main propre, lors d'une convocation.** On vous remet la convocation contre un récépissé (un reçu que vous signez). Cela se fait quand vous déposez votre demande, ou à la fin de votre entretien à l'OFPRA.",
      ],
    },
    {
      type: "h2",
      texte: "Pourquoi ne faut-il pas manquer la convocation ?",
    },
    {
      type: "p",
      texte: "C'est le point le plus important du décret. Si vous ne venez pas à cette convocation, ==sans motif légitime==, la décision de l'OFPRA est réputée vous avoir été notifiée à la date de la convocation. Le texte dit : « *réputée notifiée à la date à laquelle le demandeur a été convoqué* ».",
    },
    {
      type: "p",
      texte: "Autrement dit, le délai pour contester la décision peut commencer ce jour-là, même si vous n'avez rien reçu. En cas de refus, le recours se fait devant la CNDA (Cour nationale du droit d'asile), le tribunal spécialisé de l'asile. Ce délai est court. La fiche service-public sur la demande d'asile est en cours de mise à jour après les décrets de 2026 ([service-public, F2232](https://www.service-public.gouv.fr/particuliers/vosdroits/F2232)) : fiez-vous au délai écrit sur la décision elle-même.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Le décret ne donne pas la liste des motifs légitimes.** Si vous ne pouvez pas venir, gardez une preuve (un certificat médical, par exemple) et prévenez l'OFPRA avant la date.",
        "**Ne jetez jamais le récépissé de la convocation.** Il prouve la date et le lieu où vous étiez attendu.",
        "**Changement d'adresse ou de téléphone ?** Signalez-le tout de suite, pour ne manquer aucun message de l'office.",
      ],
    },
    {
      type: "encadre",
      titre: "La phrase à retenir",
      texte: "Outre-mer, une convocation de l'OFPRA peut servir à vous remettre la décision. Si vous ne venez pas sans motif légitime, tout se passe comme si vous l'aviez reçue ce jour-là.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Et dans les procédures rapides de Guadeloupe, Guyane, Martinique et Mayotte ?",
    },
    {
      type: "p",
      texte: "Ces quatre territoires ont déjà des règles plus rapides. À Mayotte, elles s'appliquent toujours ([CESEDA, art. R. 591-12-1](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000045193516/)). En Guadeloupe, en Guyane et en Martinique, il faut une forte hausse des demandes sur trois mois. Le ministre peut alors les activer par un arrêté, un texte pris par un ministre ([CESEDA, art. R. 591-3](https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042802332/)).",
    },
    {
      type: "p",
      texte: "Dans ces procédures, une fois la demande enregistrée par les services de l'État, vous avez 7 jours, au lieu de 21, pour la présenter en personne à l'OFPRA. L'office statue en principe en 21 jours. Le décret y ajoute le procédé en ligne : pour vous dire que votre dossier est complet, et pour vous convoquer à l'entretien, en plus de la convocation remise au dépôt.",
    },
    {
      type: "h2",
      texte: "Que faire maintenant ?",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "Lisez chaque convocation de l'OFPRA en entier : la date, l'heure, le lieu, et ce qu'elle annonce.",
        "Rangez tous vos récépissés et tous vos courriers dans une même pochette.",
        "Si vous avez un accès en ligne à l'OFPRA, consultez-le souvent : le délai de 15 jours court même si vous ne l'ouvrez pas.",
        "En cas de refus, lisez le délai de recours écrit sur la décision, et faites-vous aider sans attendre.",
      ],
    },
    {
      type: "p",
      texte: "Pour un cas personnel, adressez-vous à un avocat, à une association qui aide les demandeurs d'asile, ou au [Défenseur des droits](/articles/defenseur-des-droits), une autorité indépendante gratuite. Pour la procédure générale, lisez notre guide de [la demande d'asile, de l'OFPRA à la CNDA](/articles/demande-asile-france-2026-ofpra-cnda-procedure-delais) et notre article sur [le Pacte européen sur la migration et l'asile](/articles/pacte-europeen-migration-asile). Si vous obtenez une protection, lisez aussi notre page sur [le titre de voyage des réfugiés](/articles/titre-voyage-refugie).",
    },
  ],
  faq: [
    {
      question: "Qu'est-ce que le décret 2026-1060 ?",
      reponse: "C'est un décret du 17 novembre 2026, publié au Journal officiel le 20 novembre et en vigueur le 21 novembre 2026. Il change la façon dont l'OFPRA échange avec les demandeurs d'asile en Guadeloupe, en Guyane, en Martinique, à La Réunion et à Mayotte. La décision peut arriver en ligne, par un autre moyen sûr, ou en main propre lors d'une convocation.",
    },
    {
      question: "Que se passe-t-il si je ne vais pas à la convocation de l'OFPRA ?",
      reponse: "Outre-mer, depuis le 21 novembre 2026, une convocation peut servir à vous remettre la décision. Si vous n'y allez pas sans motif légitime, la décision est réputée notifiée à la date de la convocation. Le délai pour la contester peut donc commencer ce jour-là. Prévenez l'OFPRA et gardez une preuve si vous ne pouvez pas venir.",
    },
    {
      question: "Le décret 2026-1060 s'applique-t-il en France hexagonale ?",
      reponse: "Non. Il vise seulement les cinq collectivités de l'article 73 de la Constitution : la Guadeloupe, la Guyane, la Martinique, La Réunion et Mayotte. Dans l'Hexagone, l'OFPRA notifie ses décisions selon l'article R. 531-17 du CESEDA, en ligne là où ce procédé est en place, et sinon par lettre recommandée.",
    },
    {
      question: "Comment savoir si la décision de l'OFPRA est notifiée en ligne ?",
      reponse: "Avec le procédé en ligne, la décision est réputée notifiée le jour de votre première consultation. Si vous ne la consultez pas, elle l'est quinze jours après sa mise à disposition. On vous informe de ce procédé quand votre demande est enregistrée. Consultez donc votre accès en ligne souvent.",
    },
  ],
  sources: [
    {
      titre: "Décret n° 2026-1060 du 17 novembre 2026 relatif aux échanges de l'OFPRA avec les demandeurs d'asile dans les collectivités régies par l'article 73 de la Constitution, JORF n° 0271 du 20 novembre 2026",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000055111384",
      type: "officiel",
      luLe: "2026-11-21",
    },
    {
      titre: "Légifrance : CESEDA, article R. 531-17 (notification des décisions de l'OFPRA)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000043463479",
      type: "officiel",
      luLe: "2026-11-21",
    },
    {
      titre: "Légifrance : CESEDA, articles R. 591-1 et D. 591-2 (dispositions communes aux collectivités de l'article 73)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042802326/",
      type: "officiel",
      luLe: "2026-11-21",
    },
    {
      titre: "Légifrance : CESEDA, articles R. 591-3 à R. 591-5 (Guadeloupe)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000042802332/",
      type: "officiel",
      luLe: "2026-11-21",
    },
    {
      titre: "Légifrance : CESEDA, article R. 591-12-1 (Mayotte, traitement de la demande d'asile)",
      url: "https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070158/LEGISCTA000045193516/",
      type: "officiel",
      luLe: "2026-11-21",
    },
    {
      titre: "Service-public : demande d'asile, fiche F2232 (en cours de mise à jour après les décrets de 2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2232",
      type: "officiel",
      luLe: "2026-11-21",
    },
  ],
};

export default article;
