import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 sans changer d'adresse, puis réécrit le même jour au
 * niveau de la doctrine (`docs/seo/ROBOT.md`). L'article doublon
 * `carte-resident-10-ans-obtention-2025` y a été fusionné : son adresse
 * redirige ici en 301 (`next.config.js`). On en a repris les mots-clés, la
 * vidéo et l'idée des cas particuliers ; ses montants (225 €), son délai
 * (4 à 8 mois) et son niveau « B1 oral » n'avaient pas de source et sont
 * remplacés par ceux de service-public, lus le 20/10/2026.
 *
 * Retirés faute de source officielle, ou parce que la source dit autre chose :
 * le taux d'acceptation de 45 %, les 130 000 cartes par an, les taux de succès
 * des recours, les « quotas officieux », le seuil de ressources en SMIC net et
 * par enfant, le timbre de 269 €, la carte permanente « valable à vie »
 * (service-public : valable 10 ans, renouvelable), et le renouvellement
 * « automatique ».
 *
 * La couverture vient d'Unsplash (licence Unsplash : usage libre, commercial
 * compris) ; ses dimensions sont nominales.
 */
const article: Article = {
  slug: "carte-resident-10-ans-france-2026-conditions-obtention-refus-prefecture",
  titre: "Carte de résident 10 ans en 2026 : qui peut l'obtenir, combien elle coûte, et pourquoi elle est refusée",
  titreSeo: "Carte de résident 10 ans : conditions en 2026",
  resume: "Carte de résident 10 ans : les conditions en 2026 (B1, examen civique, 5 ans de séjour), les cas particuliers, le prix de 350 €, les refus et les recours.",
  chapo: "La carte de résident est un titre de séjour valable ==10 ans== et renouvelable. Depuis le 1er janvier 2026, une première carte demande un niveau de français **B1** et la réussite à l'**examen civique**. On l'obtient après 5 ans de séjour régulier, ou plus tôt dans certains cas : conjoint de Français, parent d'enfant français, réfugié.",
  publieLe: "2026-04-28",
  modifieLe: "2026-10-20",
  minutes: 10,
  theme: "carte de résident 10 ans France 2026",
  motsCles: [
    "carte de résident 10 ans",
    "carte de résident 10 ans France 2026",
    "carte de résident conditions 2026",
    "conditions carte résident",
    "carte de résident refusée préfecture",
    "refus carte de résident recours",
    "carte de résident conjoint français",
    "carte de résident parent enfant français",
    "obtenir carte de résident 10 ans",
    "carte de résident longue durée UE",
    "carte de résident permanent France",
    "carte de résident prix 2026",
    "renouvellement carte résident",
    "titre séjour 10 ans",
    "carte de résident et naturalisation",
  ],
  rubrique: "cadre-legal",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1200&auto=format&fit=crop",
    alt: "Un groupe de personnes discute autour d'une grande table en bois, dans une pièce lumineuse",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1568992687947-868a62a9f521",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qu'est-ce que la carte de résident de 10 ans ?",
      id: "quest-ce-que-carte-resident",
    },
    {
      type: "p",
      texte: "Un titre de séjour, c'est la carte qui vous autorise à vivre en France. La carte de résident est celui qui dure le plus longtemps : 10 ans, et elle se renouvelle ([service-public, fiche F2208](https://www.service-public.gouv.fr/particuliers/vosdroits/F2208)). Les autres cartes durent en général 1 an, ou 2 à 4 ans pour la carte de séjour pluriannuelle (le titre que l'on a souvent avant).",
    },
    {
      type: "p",
      texte: "Les règles viennent du CESEDA : c'est le code qui regroupe les lois sur l'entrée et le séjour des étrangers. Pour la demande, vous passez le plus souvent par l'ANEF, le site du ministère de l'Intérieur où se font les démarches de titre de séjour en ligne. La préfecture, c'est le service de l'État qui décide dans votre département.",
    },
    {
      type: "p",
      texte: "Il existe en fait plusieurs cartes. La carte de résident « classique » vise surtout les liens familiaux avec la France. La carte de **résident de longue durée-UE** vise les personnes qui vivent en France depuis 5 ans. La carte de **résident permanent** se demande plus tard, au renouvellement. Les Algériens relèvent d'un autre texte : ils reçoivent un certificat de résidence, et notre article sur [l'accord de 1968](/articles/algeriens-examen-civique-2026-accord-1968-dispense-sejour-mais-pas-naturalisation) explique leur cas.",
    },
    {
      type: "h2",
      texte: "Quelles conditions pour une première carte de résident en 2026 ?",
      id: "conditions-communes",
    },
    {
      type: "p",
      texte: "Quel que soit votre cas, la préfecture vérifie votre intégration. Pour une **première** carte de résident, service-public liste ces conditions (F2208) :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "un niveau de français **B1**, exigé depuis le 1er janvier 2026 ([fiche F34501](https://www.service-public.gouv.fr/particuliers/vosdroits/F34501)).",
        "la réussite à l'**examen civique**, avec la mention « carte de résident », exigée depuis le 1er janvier 2026 ([fiche F39530](https://www.service-public.gouv.fr/particuliers/vosdroits/F39530)).",
        "l'engagement signé à respecter les principes de la République.",
        "ne pas être une menace pour l'ordre public.",
        "ne pas vivre en France en état de polygamie.",
      ],
    },
    {
      type: "p",
      texte: "Les personnes de **plus de 65 ans** n'ont à prouver ni le niveau B1 ni la réussite à l'examen (F2208). B1 veut dire que vous pouvez vous débrouiller seul dans la plupart des situations de la vie courante.",
    },
    {
      type: "p",
      texte: "Pour prouver le B1, service-public accepte un diplôme (DELF, DALF, DCL, par exemple), un diplôme français d'au moins niveau 3 comme un CAP, ou un test. Les seuls tests reconnus sont le TCF et le TEF, des examens de français passés en centre. Leur attestation vaut 2 ans. Un diplôme obtenu à l'étranger n'est pas accepté, même dans un pays francophone (F34501). Notre guide des [niveaux A2, B1 et B2](/articles/niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation) compare ces preuves.",
    },
    {
      type: "p",
      texte: "L'examen civique est un QCM de 40 questions en français : il faut 32 bonnes réponses, en 45 minutes au plus (F39530). La liste « carte de résident » est un peu plus longue que celle de la carte pluriannuelle. Notre article sur [l'examen civique pour la carte de résident](/articles/examen-civique-carte-de-resident) détaille ces différences.",
    },
    {
      type: "h2",
      texte: "Après 5 ans en France : la carte de résident longue durée-UE",
      id: "cinq-ans-residence",
    },
    {
      type: "p",
      texte: "C'est la voie la plus connue. Elle est ouverte si vous vivez en France de façon régulière depuis 5 ans. Voici les conditions publiées par [service-public (fiche F17359)](https://www.service-public.gouv.fr/particuliers/vosdroits/F17359) :",
    },
    {
      type: "tableau",
      entetes: ["Condition", "Ce que dit service-public"],
      lignes: [
        ["Durée", "5 ans de séjour régulier et sans interruption en France."],
        ["Titres qui comptent", "Le VLS-TS, les cartes visiteur, vie privée et familiale (avec des exceptions), salarié, entrepreneur, talent, et la carte de résident."],
        ["Absences", "6 mois de suite au plus, et 10 mois au total sur les 5 ans."],
        ["Ressources", "Stables et régulières, au moins égales au Smic : 1 867,02 € bruts par mois. Les aides comme les APL ou le RSA ne comptent pas."],
        ["Assurance maladie", "Obligatoire."],
        ["Intégration", "B1, examen civique, engagement à respecter les principes de la République, avis du maire de votre commune."],
      ],
      legende: "Source : service-public, fiche F17359, vérifiée le 1er juin 2026, lue le 20/10/2026.",
    },
    {
      type: "p",
      texte: "Le VLS-TS est le visa de long séjour qui vaut titre de séjour la première année. Pour un réfugié, les 5 ans commencent à la date de la demande d'asile (F17359). Cette carte permet aussi de travailler, et de s'installer plus de 3 mois dans un autre pays de l'Union européenne. Il faut alors y demander un titre de séjour.",
    },
    {
      type: "h2",
      texte: "Dans quels cas la carte se demande-t-elle plus tôt ?",
      id: "cas-particuliers",
    },
    {
      type: "p",
      texte: "Certaines situations ouvrent la carte sans attendre 5 ans. Voici les principales, d'après la [fiche F2208](https://www.service-public.gouv.fr/particuliers/vosdroits/F2208) :",
    },
    {
      type: "tableau",
      entetes: ["Situation", "Condition principale"],
      lignes: [
        ["Conjoint de Français", "Mariage depuis au moins 3 ans (1 an pour les Tunisiens), vie commune réelle, conjoint toujours français. Un mariage à l'étranger doit être transcrit en France."],
        ["Venu par regroupement familial", "Conjoint ou enfant de moins de 19 ans d'un titulaire de la carte de résident, 3 ans de séjour régulier sans interruption."],
        ["Parent d'enfant français", "Carte « vie privée et familiale » depuis au moins 3 ans, et participation réelle à l'entretien de l'enfant."],
        ["Enfant ou parent à charge d'un Français", "Enfant de 18 à 21 ans ou à charge ; parent à charge entré avec un visa de long séjour."],
        ["Réfugié", "Carte délivrée dès que le statut de réfugié est reconnu."],
        ["Apatride, protection subsidiaire", "Carte pluriannuelle détenue depuis 4 ans."],
        ["Rente d'accident du travail", "Taux d'incapacité d'au moins 20 %."],
        ["Victime de violences conjugales, de mariage forcé ou de traite", "Plainte, et condamnation définitive de l'auteur."],
      ],
      legende: "Source : service-public, fiche F2208, vérifiée le 1er juillet 2026, lue le 20/10/2026.",
    },
    {
      type: "p",
      texte: "Pour un réfugié, le texte est net. L'article L424-1 du CESEDA dit qu'il « se voit délivrer une carte de résident d'une durée de dix ans » ([Légifrance](https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042776581), le site officiel des lois). Dans les autres cas, la préfecture vérifie chaque condition, dont le B1 et l'examen civique. Pour la famille, voyez notre guide du [regroupement familial](/articles/regroupement-familial-france-2026-guide-complet-conditions-documents-delais).",
    },
    {
      type: "h2",
      texte: "Combien coûte la carte de résident en 2026 ?",
      id: "prix-carte-resident",
    },
    {
      type: "p",
      texte: "Vous payez avec un timbre fiscal : une somme due à l'État, achetée en ligne ou chez un buraliste. Les montants ont augmenté le 1er mai 2026, avec la loi de finances pour 2026 ([service-public, A18881](https://www.service-public.gouv.fr/particuliers/actualites/A18881)).",
    },
    {
      type: "tableau",
      entetes: ["Situation", "Montant"],
      lignes: [
        ["Première carte de résident (cas général)", "**350 €** (300 € de taxe et 50 € de droit de timbre)."],
        ["Carte longue durée-UE avec un titre encore valable", "**250 €** (200 € et 50 €)."],
        ["Renouvellement, tarif normal", "**250 €**."],
        ["Réfugié", "Gratuit."],
        ["Famille d'un réfugié, première carte", "**50 €**."],
        ["Rente d'accident du travail", "**150 €**."],
        ["Victime de violences ou de traite", "Gratuit."],
        ["Entrée sans visa de long séjour", "**300 €** de plus (droit de visa de régularisation), dont 100 € au dépôt, non remboursables."],
        ["Demande déposée en retard", "**180 €** de plus, sauf force majeure."],
      ],
      legende: "Sources : service-public, fiches F2208 et F17359 et actualité A18881, lues le 20/10/2026.",
    },
    {
      type: "p",
      texte: "Vous ne payez qu'à la fin, quand la carte est prête. Notre article sur le [timbre fiscal du titre de séjour](/articles/hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances) détaille le barème. L'examen civique se paie à part, au centre où vous le passez.",
    },
    {
      type: "h2",
      texte: "Comment faire la demande ?",
      id: "demande",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Vérifiez votre cas et vos conditions sur la fiche service-public qui vous concerne.",
        "Passez le test de français et l'examen civique, si vous y êtes soumis. Le [simulateur d'éligibilité](/eligibilite-examen-civique) vous dit en une minute si l'examen vous concerne.",
        "Déposez la demande sur l'ANEF, au plus tôt 4 mois et au plus tard 2 mois avant la fin de votre titre actuel (F2208).",
        "Gardez l'attestation de dépôt que le site vous remet tout de suite.",
        "Retirez la carte à la préfecture quand elle vous prévient qu'elle est prête.",
      ],
    },
    {
      type: "p",
      texte: "Quelques cas passent encore par un rendez-vous en préfecture, comme les apatrides ou la rente d'accident du travail. Pour la carte longue durée-UE, vous pouvez aussi déposer en préfecture dès que vous remplissez les conditions (F17359).",
    },
    {
      type: "h2",
      texte: "Pourquoi la préfecture peut refuser, et que faire ?",
      id: "pourquoi-prefecture-refuse",
    },
    {
      type: "p",
      texte: "Un refus vient le plus souvent d'une condition non remplie : niveau B1 non prouvé, examen non réussi, ressources trop faibles, absences trop longues, vie commune rompue. Il peut aussi venir d'une menace pour l'ordre public (F2208).",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Si le préfet envisage un refus, il peut consulter la commission du titre de séjour. Vous êtes convoqué au moins 15 jours avant, et vous pouvez venir avec un avocat et un interprète.",
        "Un refus écrit est en général suivi d'une OQTF : c'est l'ordre de quitter la France. Le délai pour aller au tribunal administratif (le juge des décisions de l'État) est alors de 48 heures, 15 jours ou 30 jours, selon le type d'OQTF.",
        "Sans réponse au bout de 4 mois, la demande est refusée sans le dire. Vous avez alors 2 mois pour agir.",
      ],
    },
    {
      type: "p",
      texte: "Dans ce dernier cas, deux voies existent (F2208). Le recours gracieux est une lettre au préfet qui lui demande de changer d'avis. Le recours contentieux est une demande au tribunal administratif. Une aide de l'État peut payer l'avocat : c'est l'aide juridictionnelle.",
    },
    {
      type: "p",
      texte: "Chaque dossier est différent. Pour votre cas, adressez-vous à un avocat, à une association comme La Cimade, ou au Défenseur des droits, une autorité qui aide gratuitement face à l'administration. Notre guide [refus de titre de séjour et OQTF](/articles/refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france) explique les recours pas à pas.",
    },
    {
      type: "h2",
      texte: "Renouvellement et carte de résident permanent",
      id: "renouvellement-carte-resident",
    },
    {
      type: "p",
      texte: "Le renouvellement ne demande pas de repasser l'examen civique (F39530). Il peut être refusé dans deux cas : une menace grave pour l'ordre public, ou si vous ne prouvez pas que vous vivez vraiment en France. Cela veut dire y avoir le centre de votre vie et y rester au moins 6 mois par année civile (F2208).",
    },
    {
      type: "p",
      texte: "Attention aux longs départs : la carte n'est plus valable si vous quittez la France plus de **3 ans de suite** (F2208). Pour la carte longue durée-UE, la limite est de 3 ans hors de l'Union, ou 6 ans hors de France (F17359). Les étapes sont dans notre guide du [renouvellement de la carte de résident](/articles/renouvellement-carte-resident-10-ans-2026-conditions-documents-anef).",
    },
    {
      type: "p",
      texte: "La carte de **résident permanent** vous est proposée après 2 cartes de résident de suite. Elle l'est aussi si vous avez plus de 60 ans au renouvellement. Contrairement à une idée répandue, elle n'est pas « à vie » : service-public indique qu'elle vaut 10 ans et se renouvelle. Elle coûte 350 € ([fiche F11201](https://www.service-public.gouv.fr/particuliers/vosdroits/F11201)).",
    },
    {
      type: "h2",
      texte: "Faut-il la carte de résident pour demander la nationalité ?",
      id: "carte-resident-naturalisation",
    },
    {
      type: "p",
      texte: "Non. La naturalisation a ses propres conditions, et la carte de résident n'en fait pas partie. Les deux démarches sont séparées. Notre guide de la [naturalisation française](/articles/naturalisation-francaise-2026-delais-conditions-pieges-dossier-complet) les présente.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Depuis le 1er janvier 2026, une première carte de résident demande le niveau B1 et l'examen civique, sauf après 65 ans. Elle coûte 350 € dans le cas général.\nLe geste le plus utile : préparez le test de français et l'examen civique avant de déposer, car la préfecture demande ces deux preuves dans le dossier.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Qui peut avoir la carte de résident de 10 ans ?",
      reponse: "Les personnes qui vivent en France de façon régulière depuis 5 ans, avec des ressources au moins égales au Smic. Certaines situations l'ouvrent plus tôt : conjoint de Français marié depuis 3 ans, parent d'enfant français, famille venue par regroupement familial, réfugié. Dans tous les cas, la préfecture vérifie l'intégration, dont le B1 et l'examen civique.",
    },
    {
      question: "Quel niveau de français pour la carte de résident en 2026 ?",
      reponse: "Le niveau B1, exigé pour une première carte de résident depuis le 1er janvier 2026. Vous le prouvez avec un diplôme comme le DELF, un diplôme français d'au moins niveau 3, ou un test TCF ou TEF de moins de 2 ans. Les personnes de plus de 65 ans ne sont pas concernées.",
    },
    {
      question: "Quel est le prix de la carte de résident ?",
      reponse: "Depuis le 1er mai 2026, une première carte de résident coûte 350 € dans le cas général : 300 € de taxe et 50 € de droit de timbre, en timbre fiscal. Un renouvellement coûte 250 €. La carte est gratuite pour un réfugié, et 300 € s'ajoutent si vous êtes entré sans visa de long séjour.",
    },
    {
      question: "Peut-on perdre sa carte de résident ?",
      reponse: "Oui. Elle n'est plus valable si vous quittez la France plus de 3 ans de suite. Au renouvellement, la préfecture peut aussi refuser en cas de menace grave pour l'ordre public. Elle peut enfin refuser si vous ne prouvez pas que vous vivez en France au moins 6 mois par année civile.",
    },
  ],
  videos: [
    { id: "nXimESI0mQo", titre: "Nouvelle loi immigration : le niveau exigé aux tests de français (France 24)" },
  ],
  sources: [
    {
      titre: "Service-public : carte de résident de 10 ans d'un étranger en France (F2208)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2208",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : carte de résident de longue durée-UE, étranger en France depuis 5 ans (F17359)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F17359",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : carte de résident permanent d'un étranger en France (F11201)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11201",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : justifier de sa connaissance du français pour une carte de résident ou une carte pluriannuelle (F34501)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34501",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : carte pluriannuelle et carte de résident, comment passer l'examen civique ? (F39530)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39530",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Service-public : titres de séjour, hausse du montant des taxes à partir du 1er mai 2026 (A18881)",
      url: "https://www.service-public.gouv.fr/particuliers/actualites/A18881",
      type: "officiel",
      luLe: "2026-10-20",
    },
    {
      titre: "Légifrance : article L424-1 du CESEDA (carte de résident du réfugié)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042776581",
      type: "juridique",
      luLe: "2026-10-20",
    },
    {
      titre: "France 24 : nouvelle loi immigration, le niveau exigé aux tests de français (vidéo)",
      url: "https://www.youtube.com/watch?v=nXimESI0mQo",
      type: "video",
      luLe: "2026-10-20",
    },
  ],
};

export default article;
