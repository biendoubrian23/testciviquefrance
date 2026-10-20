import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-buzz-nouveaux-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/titre-sejour-expire-vacances-etranger-france-que-faire-visa-retour`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "titre-sejour-expire-vacances-etranger-france-que-faire-visa-retour",
  titre: "Mon titre de séjour expire pendant mes vacances à l'étranger : que faire pour rentrer en France ?",
  titreSeo: "Mon titre de séjour expire pendant mes vacances à l'étranger : que faire pour rentrer en France ?",
  resume: "Titre de séjour expiré à l'étranger : visa de retour consulaire, laissez-passer, durée d'absence maximale selon votre titre, et procédure étape par étape pour rentrer en France sans être refoulé. Le guide complet pour éviter le blocage à l'aéroport.",
  chapo: "C'est le cauchemar de milliers d'étrangers en France chaque été : vous partez en vacances dans votre pays d'origine, votre titre de séjour expire pendant votre voyage, et vous ne savez plus si vous avez le droit de rentrer en France. Ou pire, vous êtes bloqué à l'aéroport. Ce scénario arrive plus souvent qu'on ne le croit, et les conséquences peuvent être dramatiques : perte du titre de séjour, interdiction de retour, procédure ANEF à recommencer depuis zéro. Ce guide vous explique exactement **quoi faire selon votre situation**, les démarches à anticiper, et comment rentrer en France si le pire se produit.",
  publieLe: "2026-04-25",
  modifieLe: "2026-04-25",
  minutes: 16,
  theme: "titre de séjour expire pendant vacances",
  motsCles: [
    "titre de séjour expire pendant vacances",
    "rentrer France titre séjour expiré",
    "visa retour France titre séjour",
    "titre séjour expiré à l'étranger que faire",
    "laissez passer consulaire France",
    "absence France durée titre séjour",
    "carte résident 10 ans expire à l'étranger",
    "renouvellement titre séjour avant voyage",
    "perdre titre séjour voyage trop long",
    "consulat français étranger titre séjour",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
  },
  blocs: [
    {
      type: "h2",
      texte: "Le problème : quand est-ce que votre titre de séjour est en danger ?",
      id: "comprendre-le-probleme",
    },
    { type: "p", texte: "Avant tout, clarifiez votre situation. Il y a deux cas très différents." },
    { type: "h3", texte: "Cas 1 : Votre titre expire PENDANT votre voyage (le plus fréquent)" },
    {
      type: "p",
      texte: "Vous partez avec un titre valide. Pendant votre séjour à l'étranger, la date d'expiration arrive. **Vous ne pouvez plus rentrer en France normalement** car à votre retour, votre titre sera périmé, et la compagnie aérienne ou la frontière peut vous refuser l'embarquement.",
    },
    {
      type: "p",
      texte: "**Ce que beaucoup ignorent :** les compagnies aériennes vérifient la validité des titres de séjour à l'embarquement. Un titre expiré = risque de refus d'embarquement, même si vous avez un ticket valide.",
    },
    { type: "h3", texte: "Cas 2 : Vous restez trop longtemps à l'étranger" },
    {
      type: "p",
      texte: "Votre titre de séjour est valide mais vous dépassez la durée d'absence autorisée :",
    },
    {
      type: "tableau",
      entetes: ["Type de titre", "Absence maximale autorisée"],
      lignes: [
        [
          "Titre de séjour temporaire (1 an)",
          "En théorie : pas de limite stricte, mais l'ANEF peut refuser le renouvellement si absence > 6 mois",
        ],
        [
          "Carte pluriannuelle (2-4 ans)",
          "Absence > 6 mois consécutifs peut motiver un non-renouvellement",
        ],
        [
          "Carte de résident 10 ans",
          "Absence > 3 ans consécutifs = perte automatique de la carte (article L433-4 du CESEDA)",
        ],
        [
          "Carte de résident longue durée UE",
          "Absence > 12 mois consécutifs hors UE = perte (article L433-4)",
        ],
      ],
    },
    {
      type: "p",
      texte: "**La règle d'or :** ne jamais dépasser 6 mois d'absence pour un titre ordinaire, et 3 ans pour une carte résident, sauf exception dûment justifiée.",
    },
    {
      type: "h2",
      texte: "Ce qu'il faut absolument faire AVANT de partir en vacances",
      id: "avant-de-partir",
    },
    {
      type: "p",
      texte: "La meilleure solution au problème est de l'anticiper. Voici la checklist avant chaque voyage hors de France.",
    },
    { type: "p", texte: "**1. Vérifiez la date d'expiration de votre titre**" },
    {
      type: "p",
      texte: "Calculez : votre titre expire-t-il pendant ou dans les 3 mois suivant votre retour prévu ? Si oui, agissez avant de partir.",
    },
    { type: "p", texte: "**2. Déposez votre demande de renouvellement AVANT de partir**" },
    {
      type: "p",
      texte: "Si votre titre expire dans moins de 3 mois et que vous prévoyez de voyager, déposez votre renouvellement sur ANEF **avant le voyage**. Un dépôt en cours génère un récépissé qui prolonge votre droit de séjour, mais **ce récépissé n'autorise généralement pas les voyages hors espace Schengen**.",
    },
    {
      type: "encadre",
      texte: "Exception : certains récépissés mentionnent expressément \"autorise son titulaire à voyager dans les pays de l'espace Schengen\". Lisez attentivement votre document.",
      ton: "bleu",
    },
    { type: "p", texte: "**3. Vérifiez votre visa national**" },
    {
      type: "p",
      texte: "Si vous êtes ressortissant d'un pays nécessitant un visa pour entrer en France, vérifiez que votre visa national est toujours valide en plus de votre titre de séjour. Ce sont deux documents distincts.",
    },
    { type: "p", texte: "**4. Demandez un visa de retour si nécessaire**" },
    {
      type: "p",
      texte: "Pour certains titres (carte résident notamment), il est possible de demander un **visa de retour** auprès du consulat français de votre pays avant votre départ, si vous savez que votre titre expirera pendant votre voyage. C'est rare mais ça existe.",
    },
    {
      type: "h2",
      texte: "Votre titre a expiré à l'étranger : la procédure étape par étape",
      id: "titre-expire-bloque",
    },
    {
      type: "p",
      texte: "Vous êtes à l'étranger, votre titre est expiré, et vous devez rentrer. Voici quoi faire.",
    },
    { type: "h3", texte: "Étape 1 : Contactez le consulat de France du pays où vous êtes" },
    {
      type: "p",
      texte: "C'est votre premier interlocuteur obligatoire. Appelez ou rendez-vous sur place. Expliquez votre situation :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous résidez légalement en France",
        "Votre titre de séjour a expiré pendant votre voyage",
        "Vous souhaitez rentrer pour renouveler votre titre",
      ],
    },
    {
      type: "p",
      texte: "Le consulat peut vous délivrer un **laissez-passer consulaire** ou un **visa de retour** pour rentrer en France.",
    },
    { type: "h3", texte: "Étape 2 : Les documents à présenter au consulat" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Passeport en cours de validité",
        "Copie (recto-verso) de votre titre de séjour expiré",
        "Preuve de résidence en France (bail, facture, avis d'imposition)",
        "Preuve de votre situation en France (contrat de travail, attestation employeur, justificatif CAF…)",
        "Billets d'avion ou itinéraire prévu",
      ],
    },
    { type: "h3", texte: "Étape 3 : Le visa de retour ou laissez-passer" },
    { type: "p", texte: "Le consulat peut vous délivrer :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Un **visa de retour** (valable 1 mois, usage unique) pour rentrer en France",
        "Un **laissez-passer consulaire** dans les situations d'urgence",
      ],
    },
    {
      type: "p",
      texte: "**Délai** : généralement 3 à 10 jours ouvrables selon le consulat. En situation d'urgence documentée (hospitalisation, décès, etc.), le délai peut être réduit à 24-48h.",
    },
    {
      type: "p",
      texte: "**Coût** : le visa de retour est gratuit si vous avez un titre de séjour expiré, pas de timbre fiscal à payer.",
    },
    { type: "h3", texte: "Étape 4 : À votre arrivée en France" },
    {
      type: "p",
      texte: "Rentrez, présentez votre visa de retour à la frontière, et **déposez immédiatement votre demande de renouvellement de titre de séjour sur ANEF**. Expliquez la situation dans votre dossier. La préfecture tiendra compte du visa de retour pour ne pas vous pénaliser.",
    },
    {
      type: "encadre",
      texte: "**Important** : un voyage avec titre expiré n'est pas automatiquement une infraction, si vous avez un visa de retour valide et que vous rentrez immédiatement pour régulariser, votre situation reste gérable.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Situations spéciales : carte résident, urgence, impossibilité de rentrer",
      id: "situations-speciales",
    },
    { type: "h3", texte: "Carte de résident 10 ans : les règles spécifiques" },
    {
      type: "p",
      texte: "La carte de résident a une règle stricte : **toute absence de plus de 3 ans consécutifs entraîne sa perte automatique** (article L433-4 CESEDA). Mais des exceptions existent :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Raisons professionnelles documentées (détachement, mission)",
        "Raisons familiales graves (maladie grave d'un proche à l'étranger)",
        "Raisons médicales (hospitalisation)",
      ],
    },
    {
      type: "p",
      texte: "Dans ces cas, présentez une demande de maintien au consulat de France avant la fin des 3 ans. Le consulat peut saisir la préfecture pour maintenir votre droit au séjour.",
    },
    { type: "h3", texte: "Cas d'urgence : hospitalisation, catastrophe naturelle, décès" },
    {
      type: "p",
      texte: "Si vous ne pouvez pas rentrer pour des raisons indépendantes de votre volonté (hospitalisation, fermeture des frontières, catastrophe naturelle), contactez le consulat de France immédiatement et documentez tout. Ces situations sont reconnues comme cas de force majeure et ne peuvent pas vous être opposées lors du renouvellement.",
    },
    { type: "h3", texte: "Vous êtes refoulé à la frontière" },
    {
      type: "p",
      texte: "Si une compagnie aérienne ou une autorité frontalière vous refuse l'embarquement ou l'entrée sur le territoire parce que votre titre est expiré :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Ne rentrez pas sans document de retour valide : vous risqueriez un refus en France et d'être renvoyé à vos frais",
        "Contactez le consulat de France du pays où vous vous trouvez dans les 24h",
        "Contactez un avocat spécialisé en droit des étrangers si la situation se complique",
      ],
    },
    { type: "h3", texte: "Le cas du récépissé ANEF" },
    {
      type: "p",
      texte: "Si vous avez un récépissé de renouvellement en cours et que vous voulez voyager :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Espace Schengen** : autorisé si le récépissé le mentionne explicitement",
        "**Hors Schengen (votre pays d'origine)** : risqué, vérifiez toujours avec la préfecture avant de partir. Un récépissé seul peut ne pas suffire pour rentrer.",
      ],
    },
    {
      type: "h2",
      texte: "Les 7 règles d'or avant chaque voyage hors de France",
      id: "conseils-pratiques",
    },
    {
      type: "p",
      texte: "**Règle 1 :** Vérifiez la date d'expiration de votre titre **3 mois avant** chaque voyage prévu.",
    },
    {
      type: "p",
      texte: "**Règle 2 :** Si votre titre expire dans les 3 mois, déposez votre renouvellement **avant** de partir, pas après.",
    },
    {
      type: "p",
      texte: "**Règle 3 :** Gardez toujours une photocopie recto-verso de votre titre de séjour dans vos bagages ET dans votre téléphone (photo).",
    },
    {
      type: "p",
      texte: "**Règle 4 :** Enregistrez le numéro du consulat de France de votre pays d'origine dans votre téléphone avant de partir.",
    },
    {
      type: "p",
      texte: "**Règle 5 :** Ne prolongez jamais un séjour à l'étranger sans avoir vérifié la durée d'absence autorisée pour votre type de titre.",
    },
    {
      type: "p",
      texte: "**Règle 6 :** Si vous rentrez avec un titre qui expire dans moins de 15 jours, déposez votre demande ANEF le lendemain de votre retour, pas dans 2 semaines.",
    },
    {
      type: "p",
      texte: "**Règle 7 :** Gardez sur vous tous vos justificatifs de vie en France lors du retour (bail, contrat de travail, avis d'imposition) : la douane peut vous poser des questions si votre titre est proche de l'expiration.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Un titre de séjour qui expire pendant des vacances, c'est stressant, mais c'est gérable si vous agissez rapidement et dans le bon ordre. **Le consulat de France est votre allié dans cette situation** : il existe précisément pour vous aider à rentrer légalement. L'erreur à ne pas faire est d'ignorer le problème ou de tenter de rentrer sans document valide. Anticipez, documentez tout, et contactez le consulat dès que vous réalisez la situation. En agissant vite, vous évitez que ce contretemps ne devienne une véritable rupture de statut.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Puis-je rentrer en France avec un titre de séjour expiré ?",
      reponse: "Non directement. Si votre titre est expiré, vous devez obtenir un visa de retour auprès du consulat de France dans votre pays avant de prendre votre avion. Sans ce document, la compagnie aérienne peut refuser de vous embarquer.",
    },
    {
      question: "Combien de temps dure le visa de retour délivré par le consulat ?",
      reponse: "Le visa de retour est généralement valable 1 mois et pour un usage unique. Il vous permet de rentrer en France pour y renouveler votre titre de séjour.",
    },
    {
      question: "Mon récépissé ANEF me permet-il de voyager à l'étranger ?",
      reponse: "Ça dépend. Pour les pays Schengen, un récépissé peut autoriser le voyage s'il le mentionne explicitement. Pour les voyages hors Schengen (notamment votre pays d'origine), vérifiez toujours auprès de votre préfecture avant de partir.",
    },
    {
      question: "Que se passe-t-il si je reste trop longtemps à l'étranger avec une carte résident 10 ans ?",
      reponse: "Une absence de plus de 3 ans consécutifs entraîne la perte automatique de la carte de résident (article L433-4 du CESEDA). Des exceptions existent pour les raisons professionnelles, familiales ou médicales graves, à documenter et à déclarer au consulat avant le terme des 3 ans.",
    },
    {
      question: "Le consulat peut-il me refuser un visa de retour ?",
      reponse: "Théoriquement oui, si vous ne pouvez pas prouver votre résidence légale en France. En pratique, avec un titre expiré récemment et des preuves de vie en France, le consulat délivre quasi systématiquement le visa de retour. Le refus est exceptionnel.",
    },
  ],
};

export default article;
