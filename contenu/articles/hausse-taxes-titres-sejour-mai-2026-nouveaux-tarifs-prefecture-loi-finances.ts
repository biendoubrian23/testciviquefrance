import type { Article } from "@/contenu/articles";

/**
 * Publié le 22/05/2026, migré le 20/10/2026 sans changer d'adresse.
 * Réécrit par le robot éditorial le 20/10/2026 (`docs/seo/ROBOT.md`, liste
 * « à revérifier » de `docs/seo/MOTS-CLES.md`) : l'ancien titre annonçait
 * « 650 € pour un premier titre », alors que service-public indique 350 € au
 * tarif normal ; 650 € n'est que le total d'une régularisation (350 € + 300 €).
 * Chaque montant est repris de service-public, lu le 20/10/2026.
 */
const article: Article = {
  slug: "hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances",
  titre: "Timbre fiscal du titre de séjour : 350 €, 250 € ou 100 €, combien payer depuis le 1er mai 2026 ?",
  titreSeo: "Timbre fiscal titre de séjour : les tarifs 2026",
  resume: "Premier titre 350 €, renouvellement 250 €, tarif minoré 150 € ou 100 € : le barème officiel du timbre fiscal du titre de séjour depuis le 1er mai 2026.",
  chapo: "Depuis le 1er mai 2026, le timbre fiscal d'un **premier titre de séjour** coûte ==350 €== au tarif normal, et celui d'un **renouvellement** ==250 €==. Au tarif minoré (étudiants, saisonniers, regroupement familial…), c'est 150 € et 100 €. Le chiffre de 650 € que l'on voit souvent correspond seulement à une régularisation, qui ajoute un droit de visa de 300 €.",
  publieLe: "2026-05-22",
  modifieLe: "2026-10-20",
  minutes: 7,
  theme: "timbre fiscal titre de séjour 2026",
  motsCles: [
    "timbre fiscal titre de séjour",
    "timbre fiscal titre de séjour 2026",
    "prix titre de séjour 2026",
    "timbre fiscal titre de séjour 250 euros",
    "taxe renouvellement titre de séjour",
    "tarif minoré titre de séjour",
    "duplicata titre de séjour prix",
    "droit de visa de régularisation",
    "timbre fiscal naturalisation",
    "autorisation provisoire de séjour 100 euros",
  ],
  rubrique: "actualites",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/taxes-titres-sejour-2026.webp",
    alt: "Pièces de un et deux euros posées sur une table, en gros plan",
    largeur: 1024,
    hauteur: 768,
    credit: "Images_of_Money, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/59937401@N07/5929574223",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Correction du 20 octobre 2026",
      texte: "Une version précédente de cet article annonçait dans son titre « 650 € pour un premier titre ». C'est inexact : le tarif normal d'un premier titre est de 350 €. Les montants ci-dessous ont tous été revérifiés sur service-public le 20/10/2026.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Combien coûte un titre de séjour depuis le 1er mai 2026 ?",
      id: "ce-qui-change-le-1er-mai",
    },
    {
      type: "p",
      texte: "Un titre de séjour, c'est la carte qui vous autorise à vivre en France. Pour l'obtenir, vous payez un timbre fiscal : une somme due à l'État, que vous achetez à l'avance. Son montant a augmenté le 1er mai 2026, avec la loi de finances pour 2026 (loi n° 2026-103 du 19 février 2026, article 128). Voici le barème publié par [service-public](https://www.service-public.gouv.fr/particuliers/actualites/A18881) :",
    },
    {
      type: "tableau",
      entetes: ["Démarche", "Avant le 1er mai 2026", "Depuis le 1er mai 2026"],
      lignes: [
        ["Premier titre, tarif normal", "225 €", "**350 €**."],
        ["Premier titre, tarif minoré", "75 €", "**150 €**."],
        ["Renouvellement, tarif normal", "225 €", "**250 €**."],
        ["Renouvellement, tarif minoré", "75 €", "**100 €**."],
        ["Duplicata (titre perdu ou volé), tarif normal", "comme un premier titre", "**350 €**."],
        ["Duplicata, tarif minoré", "comme un premier titre", "**150 €**."],
      ],
      legende: "Source : service-public, actualité A18881, mise à jour le 12/05/2026, lue le 20/10/2026.",
    },
    {
      type: "p",
      texte: "Ces montants valent pour la carte de séjour temporaire, la carte de séjour pluriannuelle et la carte de résident. Pour une carte de résident, service-public détaille le calcul : 300 € de taxe et 50 € de droit de timbre pour une première délivrance ([fiche F2208](https://www.service-public.gouv.fr/particuliers/vosdroits/F2208)).",
    },
    {
      type: "p",
      texte: "Vous ne payez pas au dépôt du dossier. Quand votre carte est prête, vous recevez un SMS qui indique le montant à régler (A18881). Pour la suite de la démarche, voyez notre guide du [renouvellement de titre de séjour](/articles/renouvellement-titre-sejour-2026-anef-prefecture-documents-delais).",
    },
    {
      type: "h2",
      texte: "Qui paie le tarif minoré ?",
      id: "combien-allez-vous-payer",
    },
    {
      type: "p",
      texte: "Le tarif minoré vaut pour certaines situations. Service-public en donne des exemples, sans liste complète :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "les travailleurs saisonniers.",
        "les étudiants.",
        "les personnes en recherche d'emploi ou en création d'entreprise, après leurs études.",
        "les personnes venues par regroupement familial.",
        "les jeunes au pair.",
      ],
    },
    {
      type: "p",
      texte: "Les mêmes situations ouvrent le tarif minoré au renouvellement (A18881). Si vous hésitez sur votre cas, la préfecture tranche. La préfecture, c'est le service de l'État qui gère les titres de séjour dans votre département.",
    },
    {
      type: "h2",
      texte: "Pourquoi lit-on parfois 650 € ?",
    },
    {
      type: "p",
      texte: "Le chiffre de 650 € ne correspond pas à un premier titre. Il additionne deux sommes dues seulement en cas de **régularisation**. La régularisation, c'est le cas d'une personne entrée en France sans visa, ou qui n'a pas eu de titre dans les délais. Elle paie :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "le timbre fiscal du premier titre : 350 €.",
        "le droit de visa de régularisation : 300 €, dont 100 € à payer au dépôt de la demande et non remboursables.",
      ],
    },
    {
      type: "p",
      texte: "Avant le 1er mai 2026, ce droit de visa était de 200 €, dont 50 € non remboursables ([service-public, A18881](https://www.service-public.gouv.fr/particuliers/actualites/A18881)). Notre page sur le [budget d'une régularisation](/articles/cout-regularisation-situation-france-2026-budget-complet) détaille les autres frais.",
    },
    {
      type: "h2",
      texte: "Quels autres frais ont changé le 1er mai 2026 ?",
    },
    {
      type: "tableau",
      entetes: ["Démarche", "Avant", "Depuis le 1er mai 2026"],
      lignes: [
        ["Autorisation provisoire de séjour (APS), délivrance ou renouvellement", "gratuite", "**100 €**."],
        ["Naturalisation et déclarations de nationalité", "55 €", "**255 €** (127,50 € en Guyane)."],
        ["Visa de long séjour valant titre de séjour (VLS-TS), tarif normal", "200 €", "**300 €**."],
        ["VLS-TS, tarif minoré", "50 €", "**100 €**."],
      ],
      legende: "Source : service-public, actualité A18881, lue le 20/10/2026.",
    },
    {
      type: "p",
      texte: "Deux définitions utiles. L'APS (autorisation provisoire de séjour) est un document qui permet de rester en France pour une durée limitée, dans des situations prévues par la loi. Le VLS-TS est le visa de long séjour qui vaut titre de séjour la première année : vous le validez en ligne après votre arrivée. Pour le budget complet d'une demande de nationalité, lisez notre article sur le [coût de la naturalisation](/articles/cout-naturalisation-francaise-2026-budget-complet-timbre-fiscal).",
    },
    {
      type: "p",
      texte: "Une première carte de séjour pluriannuelle ou une première carte de résident demande aussi, depuis le 1er janvier 2026, la réussite à un examen civique. Cet examen se paie à part, au centre où vous le passez. Notre article sur [l'examen civique pour la carte de résident](/articles/examen-civique-carte-de-resident) explique ce qu'il demande, et le [simulateur d'éligibilité](/eligibilite-examen-civique) vous dit en une minute s'il vous concerne.",
    },
    {
      type: "h2",
      texte: "Qui ne paie pas le timbre fiscal ?",
      id: "qui-est-exonere",
    },
    {
      type: "p",
      texte: "Certaines personnes ne paient pas, ou paient moins. Voici les cas que service-public décrit :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les **réfugiés** : la délivrance de leur propre titre de séjour est gratuite. Les membres de leur famille paient 50 € de droit de timbre pour un premier titre ([fiche F15401](https://www.service-public.gouv.fr/particuliers/vosdroits/F15401)).",
        "Pour la taxe de 100 € de l'APS, deux exonérations (A18881). Elles visent les personnes sortant de la prostitution engagées dans un parcours d'insertion. Elles visent aussi les bénéficiaires de la protection temporaire, pour la première délivrance et le premier renouvellement.",
        "Les citoyens de l'Union européenne n'ont pas besoin de titre de séjour pour vivre en France, et ne sont donc pas concernés.",
      ],
    },
    {
      type: "p",
      texte: "D'autres cas sont prévus par le CESEDA, le code qui regroupe les règles sur le séjour des étrangers (articles L. 436-1 à L. 436-13). Ils dépendent du titre demandé. Avant de payer, demandez à la préfecture si votre situation ouvre une exonération.",
    },
    {
      type: "h2",
      texte: "Comment acheter le timbre fiscal sans se tromper ?",
      id: "comment-payer-conseils",
    },
    {
      type: "p",
      texte: "Le timbre s'achète de deux façons ([service-public, fiche F33071](https://www.service-public.gouv.fr/particuliers/vosdroits/F33071)) :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "en ligne, sur le site officiel [timbres.impots.gouv.fr](https://timbres.impots.gouv.fr), par carte bancaire.",
        "chez un buraliste équipé pour vendre les timbres fiscaux.",
      ],
    },
    {
      type: "p",
      texte: "Vous recevez le timbre sous forme d'un PDF avec un code, ou d'un SMS avec un numéro à 16 chiffres. Gardez-le bien : c'est ce numéro que vous donnez pour votre démarche. Si vous n'utilisez pas un timbre, vous pouvez en demander le remboursement en ligne (F33071).",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "N'achetez pas un « timbre amende » par erreur : ce n'est pas le même produit.",
        "Méfiez-vous des sites qui vendent des timbres plus cher que le prix officiel : le seul site de l'État est timbres.impots.gouv.fr.",
        "Vérifiez le montant dans le SMS de la préfecture avant d'acheter, surtout si vous relevez du tarif minoré.",
      ],
    },
    {
      type: "p",
      texte: "Les fausses offres d'aide aux démarches sont fréquentes : notre article sur les [arnaques qui visent les étrangers](/articles/arnaques-etrangers-france-2026-faux-avocats-prefecture-anef) montre comment les repérer.",
    },
    {
      type: "h2",
      texte: "Que faire si vous ne pouvez pas payer ?",
      id: "si-vous-ne-pouvez-pas-payer",
    },
    {
      type: "p",
      texte: "Vérifiez d'abord si vous relevez du tarif minoré ou d'une exonération. Ensuite, des associations peuvent vous orienter gratuitement, comme La Cimade (lacimade.org), ou une permanence d'accès au droit près de chez vous. Elles connaissent les règles de votre préfecture.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Premier titre : 350 € (150 € au tarif minoré). Renouvellement : 250 € (100 € au tarif minoré). Duplicata : 350 € (150 €).\nLe total de 650 € ne concerne qu'une régularisation. Achetez toujours le timbre sur timbres.impots.gouv.fr ou chez un buraliste, quand la préfecture vous a donné le montant.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quel est le prix du timbre fiscal pour un titre de séjour en 2026 ?",
      reponse: "Depuis le 1er mai 2026, le timbre fiscal d'un premier titre de séjour coûte 350 € au tarif normal et 150 € au tarif minoré. Un renouvellement coûte 250 €, ou 100 € au tarif minoré. Un duplicata coûte comme un premier titre. Ces montants viennent de la loi de finances pour 2026 et sont publiés par service-public.",
    },
    {
      question: "Pourquoi le timbre fiscal d'un titre de séjour est-il de 250 euros ?",
      reponse: "250 € est le tarif normal d'un renouvellement de titre de séjour depuis le 1er mai 2026. Il remplace l'ancien montant de 225 €. Pour une carte de résident, ce montant se compose d'une taxe et d'un droit de timbre de 50 €. Au tarif minoré, le renouvellement coûte 100 €.",
    },
    {
      question: "Le titre de séjour coûte-t-il 650 euros ?",
      reponse: "Non, pas pour un premier titre ordinaire, qui coûte 350 € au tarif normal. Le total de 650 € correspond à une régularisation : 350 € de timbre pour le titre, plus 300 € de droit de visa de régularisation. Sur ces 300 €, 100 € sont à payer au dépôt de la demande et ne sont pas remboursables.",
    },
    {
      question: "Où acheter un timbre fiscal pour un titre de séjour ?",
      reponse: "Sur le site officiel timbres.impots.gouv.fr, par carte bancaire, ou chez un buraliste équipé. Vous recevez un PDF avec un code ou un SMS avec un numéro à 16 chiffres. Achetez-le quand la préfecture vous a envoyé le montant à payer, et gardez bien ce numéro pour votre démarche.",
    },
  ],
  sources: [
    {
      titre: "Service-public : titres de séjour, hausse du montant des taxes à partir du 1er mai 2026 (A18881)",
      url: "https://www.service-public.gouv.fr/particuliers/actualites/A18881",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : carte de résident de 10 ans (F2208)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2208",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : réfugié, titre de séjour, document de voyage et accompagnement (F15401)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F15401",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : étranger en France, comment acheter un timbre fiscal ? (F33071)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33071",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Ministère de l'Économie : achat de timbres fiscaux en ligne",
      url: "https://timbres.impots.gouv.fr",
      type: "officiel",
      luLe: "2026-10-20",
    },
  ],
};

export default article;
