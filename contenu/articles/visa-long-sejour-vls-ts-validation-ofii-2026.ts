import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026, réécrit en entier par le robot éditorial le
 * 22/11/2026 (`docs/seo/ROBOT.md`), sur la liste « à revérifier » : le résumé
 * annonçait une « taxe OFII 200 € » pour tous, alors que service-public donne
 * 100 € pour un VLS-TS « étudiant » (F2231) et 300 € pour un VLS-TS « salarié »
 * (F15898). Retirés faute de source officielle lue : les montants par motif
 * qui ne figurent pas sur service-public, la carte Vitale, la visite médicale
 * présentée comme une étape de la validation.
 * Sources lues le 22/11/2026 : service-public F16162 (vérifiée le 09/10/2026),
 * F2231 (01/08/2026), F15898 (01/05/2026), F2209 (06/11/2026).
 */
const article: Article = {
  slug: "visa-long-sejour-vls-ts-validation-ofii-2026",
  titre: "Valider votre VLS-TS : le délai de 3 mois, la taxe selon votre visa, et ce qui vient ensuite",
  titreSeo: "Validation VLS-TS : délai, taxe et étapes",
  resume: "Valider son VLS-TS en ligne dans les 3 mois : la démarche ANEF, la taxe (100 € étudiant, 300 € salarié), les droits, puis la carte de séjour.",
  chapo: "Vous avez ==3 mois après votre arrivée en France== pour valider en ligne votre visa long séjour valant titre de séjour (VLS-TS) et payer sa taxe. Sans cette validation, vous n'êtes plus en séjour régulier et vous ne pouvez pas ressortir puis revenir dans l'espace Schengen. Voici la démarche, le bon montant selon votre visa, et la suite.",
  publieLe: "2026-03-31",
  modifieLe: "2026-11-22",
  minutes: 7,
  theme: "VLS-TS visa long séjour",
  motsCles: [
    "validation vls-ts",
    "valider vls-ts en ligne",
    "vls-ts taxe",
    "vls-ts étudiant taxe 100 €",
    "vls-ts salarié taxe",
    "visa long séjour valant titre de séjour",
    "vls-ts délai 3 mois",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/vls-ts-validation.webp",
    alt: "Un passeport ouvert sur ses pages « Visas », encore vierges, prêtes à recevoir une vignette de visa",
    largeur: 1200,
    hauteur: 804,
    credit: "Tony Webster, via Wikimedia Commons",
    licence: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:U.S._Passport_Visas_Page.jpg",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Article corrigé le 22/11/2026",
      texte: "La version précédente annonçait une taxe de 200 € pour tous. Service-public donne ==100 € pour un VLS-TS « étudiant »== et ==300 € pour un VLS-TS « salarié »==. Les informations sans source officielle ont été retirées.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Qu'est-ce que le VLS-TS ?",
    },
    {
      type: "p",
      texte: "Le VLS-TS, c'est un visa de long séjour (visa de type D) qui ==vaut titre de séjour==. Un titre de séjour, c'est le document qui vous autorise à vivre en France. Avec un VLS-TS, vous n'avez donc pas de carte à demander à la préfecture dès votre arrivée. Il est valable ==de 4 à 12 mois== ([service-public, fiche « Visa de long séjour »](https://www.service-public.gouv.fr/particuliers/vosdroits/F16162)).",
    },
    {
      type: "p",
      texte: "Service-public cite notamment ces cas : les étudiants, les salariés en contrat à durée indéterminée (CDI), les personnes mariées à un Français ou une Française, et la carte « talent ». Le visa est délivré par le consulat de France du pays où vous vivez. Il se présente comme une vignette collée dans votre passeport.",
    },
    {
      type: "p",
      texte: "Attention, tous les visas longs ne sont pas des VLS-TS. Certains portent la mention « carte de séjour à solliciter dans les 2 mois suivant l'arrivée ». Avec ce visa, vous ne validez rien en ligne : vous devez demander une carte de séjour à la préfecture dans les 2 mois. Regardez bien la mention écrite sur votre vignette.",
    },
    {
      type: "h2",
      texte: "Quel est le délai pour valider le VLS-TS ?",
    },
    {
      type: "p",
      texte: "Vous devez valider votre VLS-TS ==dans les 3 mois qui suivent votre arrivée en France==, et payer une taxe en même temps. Cette taxe s'ajoute aux droits de visa déjà payés au consulat. Selon service-public, cette démarche en ligne vous permet d'être en séjour régulier et de pouvoir franchir à nouveau la frontière de l'espace Schengen ([F16162](https://www.service-public.gouv.fr/particuliers/vosdroits/F16162)).",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Le délai part de votre **date d'arrivée en France**, pas de la date de délivrance du visa. Gardez une preuve de cette date : le tampon d'entrée sur le passeport, ou votre billet.",
        "Sans validation, vous n'êtes plus en séjour régulier au-delà de 3 mois. Vous risquez d'être bloqué à la frontière si vous sortez de l'espace Schengen.",
        "Ne laissez pas passer le délai en attendant un logement ou un compte bancaire. La validation peut se faire dès les premiers jours.",
      ],
    },
    {
      type: "h2",
      texte: "Comment valider votre VLS-TS en ligne ?",
    },
    {
      type: "p",
      texte: "La validation se fait sur internet, sur le site de l'ANEF. L'ANEF, c'est le site officiel du ministère de l'Intérieur pour les démarches des étrangers : [administration-etrangers-en-france.interieur.gouv.fr](https://administration-etrangers-en-france.interieur.gouv.fr/). Si vous n'avez pas encore de compte, suivez notre [guide pour créer votre compte ANEF](/articles/compte-anef-creer-2026-guide-pas-a-pas).",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Préparez votre passeport avec la vignette du visa, votre date d'entrée en France et votre adresse en France.",
        "Sur l'ANEF, choisissez la démarche de validation du visa long séjour valant titre de séjour.",
        "Recopiez les informations de la vignette, puis votre date d'arrivée et votre adresse.",
        "Payez la taxe en ligne. Le paiement se fait par timbre fiscal électronique : c'est un timbre que vous achetez sur internet.",
        "Téléchargez et gardez l'attestation de validation. Avec votre passeport, c'est elle qui prouve que votre séjour est régulier.",
      ],
    },
    {
      type: "p",
      texte: "L'OFII, l'Office français de l'immigration et de l'intégration, peut ensuite vous convoquer selon votre situation. Il vous propose notamment le contrat d'intégration républicaine (CIR). Le CIR est un engagement avec l'État : vous suivez une formation civique et, si besoin, des cours de français. Nous l'expliquons dans [notre article sur le CIR](/articles/contrat-integration-republicaine-cir-2026-formation-civique).",
    },
    {
      type: "h2",
      texte: "Combien coûte la validation du VLS-TS ?",
    },
    {
      type: "p",
      texte: "Le montant dépend de la mention de votre visa. Voici les montants que service-public donne aujourd'hui, à la date de notre lecture :",
    },
    {
      type: "tableau",
      entetes: ["Mention du VLS-TS", "Taxe à la validation", "Source"],
      lignes: [
        ["Étudiant", "100 €", "[F2231](https://www.service-public.gouv.fr/particuliers/vosdroits/F2231), vérifiée le 01/08/2026"],
        ["Salarié (CDI) ou travailleur temporaire (CDD)", "300 €", "[F15898](https://www.service-public.gouv.fr/particuliers/vosdroits/F15898), vérifiée le 01/05/2026"],
        ["Autre mention", "le montant s'affiche sur l'ANEF au moment du paiement", "fiche service-public de votre titre"],
      ],
    },
    {
      type: "p",
      texte: "Les taxes changent souvent, en général avec la loi de finances de l'année. Avant de payer, vérifiez le montant affiché sur l'ANEF. N'achetez pas de timbre fiscal à l'avance sur un site qui n'est pas officiel : le seul site d'achat est celui de l'État, timbres.impots.gouv.fr.",
    },
    {
      type: "h2",
      texte: "Que permet le VLS-TS une fois validé ?",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Vivre en France** pendant toute la durée du visa, sans carte de séjour à demander à la préfecture.",
        "**Voyager dans l'espace Schengen** sans autre visa, sans dépasser 90 jours pendant la validité du visa ([F16162](https://www.service-public.gouv.fr/particuliers/vosdroits/F16162)).",
        "**Sortir de France et revenir** : c'est la validation qui vous permet de repasser la frontière.",
        "**Travailler**, selon la mention. Un VLS-TS « salarié » permet de travailler dès l'arrivée ([F15898](https://www.service-public.gouv.fr/particuliers/vosdroits/F15898)). Un étudiant peut travailler dans une limite d'heures par an : nous la détaillons dans [notre guide ANEF de l'étudiant étranger](/articles/anef-etudiant-etranger-2026).",
      ],
    },
    {
      type: "h2",
      texte: "Que faire avant la fin du VLS-TS ?",
    },
    {
      type: "p",
      texte: "Pour rester en France après le VLS-TS, vous devez demander une carte de séjour. Pour la plupart des titres, la demande se fait sur l'ANEF ==au plus tôt 4 mois et au plus tard 2 mois avant la fin du visa== ([F2209](https://www.service-public.gouv.fr/particuliers/vosdroits/F2209), [F2231](https://www.service-public.gouv.fr/particuliers/vosdroits/F2231)). Pour un salarié, service-public indique un dépôt à la préfecture au plus tard 2 mois avant la fin du visa ([F15898](https://www.service-public.gouv.fr/particuliers/vosdroits/F15898)).",
    },
    {
      type: "p",
      texte: "Si vous déposez trop tard, un droit de visa de régularisation peut s'ajouter au prix de la carte. Pour un étudiant ou un salarié, service-public l'indique à ==180 €==, sauf cas de force majeure ou visa encore valide. Pour la marche à suivre, lisez notre guide du [renouvellement du titre de séjour](/articles/renouvellement-titre-sejour-2026-anef-prefecture-documents-delais).",
    },
    {
      type: "encadre",
      titre: "Le geste à faire aujourd'hui",
      texte: "Notez dans votre agenda trois dates. La date limite de validation : 3 mois après votre arrivée. Puis le jour qui tombe 4 mois avant la fin du visa, et celui qui tombe 2 mois avant : c'est votre fenêtre pour demander la carte suivante.",
      ton: "vert",
    },
    {
      type: "h2",
      texte: "L'examen civique est-il demandé pour le VLS-TS ?",
    },
    {
      type: "p",
      texte: "Non. Ni la délivrance ni la validation du VLS-TS ne demandent l'examen civique. En revanche, pour une ==première carte de séjour pluriannuelle==, la carte de 2 à 4 ans, service-public liste désormais la réussite à l'examen civique, sauf après 65 ans. Elle s'ajoute au suivi du CIR et au français de niveau A2 ([F2209](https://www.service-public.gouv.fr/particuliers/vosdroits/F2209), [F15898](https://www.service-public.gouv.fr/particuliers/vosdroits/F15898)).",
    },
    {
      type: "p",
      texte: "Si vous visez cette carte après votre VLS-TS, le bon moment pour préparer l'examen, c'est pendant l'année du visa. Lisez [ce que demande l'examen pour la carte pluriannuelle](/articles/examen-civique-obligatoire-carte-sejour-pluriannuelle-2026), et [vérifiez en une minute s'il vous concernera](/eligibilite-examen-civique).",
    },
    {
      type: "p",
      texte: "Chaque situation est différente. Pour un cas personnel, adressez-vous à votre préfecture, à un avocat ou à une association d'aide aux étrangers, comme La Cimade.",
    },
  ],
  faq: [
    {
      question: "Comment valider mon VLS-TS en ligne ?",
      reponse: "Sur le site de l'ANEF, administration-etrangers-en-france.interieur.gouv.fr, dans les 3 mois après votre arrivée en France. Vous recopiez les informations de la vignette, votre date d'entrée et votre adresse, puis vous payez la taxe par timbre fiscal électronique. Gardez l'attestation de validation avec votre passeport : elle prouve que votre séjour est régulier.",
    },
    {
      question: "Combien coûte la validation du VLS-TS ?",
      reponse: "Selon service-public, 100 € pour un VLS-TS « étudiant » et 300 € pour un VLS-TS « salarié » ou « travailleur temporaire ». Pour les autres mentions, le montant s'affiche sur l'ANEF au moment du paiement. Cette taxe s'ajoute aux droits de visa payés au consulat. Les montants changent souvent : vérifiez avant de payer.",
    },
    {
      question: "Que se passe-t-il si je ne valide pas mon VLS-TS dans les 3 mois ?",
      reponse: "Vous n'êtes plus en séjour régulier, et vous risquez de ne pas pouvoir revenir en France si vous sortez de l'espace Schengen. Si le délai est passé, ne restez pas sans rien faire : contactez la préfecture de votre domicile, ou une association d'aide aux étrangers, pour savoir comment régulariser votre situation.",
    },
    {
      question: "Puis-je voyager dans l'espace Schengen avec un VLS-TS ?",
      reponse: "Oui. Le visa de long séjour permet de circuler dans l'espace Schengen sans autre visa, sans dépasser 90 jours pendant sa validité. Mais pour repasser la frontière et revenir en France, votre VLS-TS doit avoir été validé en ligne. Emportez votre passeport et l'attestation de validation.",
    },
  ],
  sources: [
    {
      titre: "Service-public : Visa de long séjour (séjour de plus de 3 mois à 1 an), F16162, vérifiée le 09/10/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F16162",
      type: "officiel",
      luLe: "2026-11-22",
    },
    {
      titre: "Service-public : Étudiant étranger en France, visa de long séjour ou titre de séjour, F2231 (taxe de validation de 100 €), vérifiée le 01/08/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2231",
      type: "officiel",
      luLe: "2026-11-22",
    },
    {
      titre: "Service-public : Carte de séjour salarié ou travailleur temporaire, F15898 (taxe de validation de 300 €), vérifiée le 01/05/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F15898",
      type: "officiel",
      luLe: "2026-11-22",
    },
    {
      titre: "Service-public : Carte de séjour « vie privée et familiale », F2209 (délais de dépôt, condition d'intégration), vérifiée le 06/11/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2209",
      type: "officiel",
      luLe: "2026-11-22",
    },
    {
      titre: "ANEF : administration numérique pour les étrangers en France (ministère de l'Intérieur)",
      url: "https://administration-etrangers-en-france.interieur.gouv.fr/",
      type: "officiel",
      luLe: "2026-11-22",
    },
  ],
};

export default article;
