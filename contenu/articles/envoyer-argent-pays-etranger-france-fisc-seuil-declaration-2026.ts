import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-buzz-generaux-2.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/envoyer-argent-pays-etranger-france-fisc-seuil-declaration-2026`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "envoyer-argent-pays-etranger-france-fisc-seuil-declaration-2026",
  titre: "Envoyer de l'argent au pays depuis la France : ce que le fisc français surveille (et le seuil à ne jamais dépasser)",
  titreSeo: "Envoyer de l'argent au pays depuis la France : ce que le fisc français surveille (et le seuil à ne jamais dépasser)",
  resume: "Seuil des 10 000 €, Tracfin, hawala illégal, double imposition, conventions fiscales, transport d'espèces à la frontière. Tout ce que le fisc vérifie quand vous envoyez de l'argent à votre famille depuis la France.",
  chapo: "59 % des étrangers en France envoient régulièrement de l'argent à leur famille restée au pays. C'est un acte de solidarité naturel, mais c'est aussi un sujet que le fisc français surveille de très près. Depuis 2020, les contrôles sur les transferts d'argent internationaux se sont renforcés. Seuils de déclaration obligatoire, risques liés aux agences informelles (hawala), conventions fiscales, double imposition... Tout ce que vous devez savoir pour envoyer de l'argent au pays en toute légalité, et protéger votre situation en France.",
  publieLe: "2026-04-08",
  modifieLe: "2026-04-08",
  minutes: 18,
  theme: "envoyer argent au pays France",
  motsCles: [
    "envoyer argent au pays France",
    "virement international France seuil",
    "déclaration transfert argent étranger",
    "fisc français transfert international",
    "envoyer argent famille étranger",
    "Western Union impots France",
    "hawala France illégal risques",
    "double imposition transfert argent",
    "convention fiscale transfert argent",
    "tracfin transfert argent suspect",
    "seuil 10000 euros déclaration fisc",
    "envoyer argent Maroc Algérie Tunisie France",
    "transfert argent Afrique depuis France",
    "impots sur envoi argent étranger",
    "justifier transfert argent préfecture",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1580519542036-c47de6196ba5",
  },
  blocs: [
    {
      type: "h2",
      texte: "Ce que dit la loi française sur les transferts d'argent à l'étranger",
      id: "ce-que-dit-la-loi",
    },
    {
      type: "p",
      texte: "Envoyer de l'argent à l'étranger depuis la France est parfaitement **légal**. Mais ce n'est pas un acte anodin aux yeux de l'administration fiscale. La loi impose des obligations de déclaration à partir de certains seuils.",
    },
    { type: "h3", texte: "Le seuil des 10 000 € : la règle fondamentale" },
    {
      type: "p",
      texte: "Si vous transférez ou recevez **10 000 € ou plus** en cumulé sur une année vers ou depuis l'étranger via un intermédiaire (banque, Western Union, MoneyGram, Wise…), cet intermédiaire a l'obligation de signaler les mouvements à **Tracfin** (la cellule anti-blanchiment du ministère des Finances).",
    },
    { type: "h3", texte: "Vos obligations personnelles" },
    {
      type: "tableau",
      entetes: ["Situation", "Obligation"],
      lignes: [
        ["Virement bancaire < 10 000 €/an", "Aucune déclaration personnelle"],
        [
          "Virement bancaire ≥ 10 000 €/an",
          "L'intermédiaire déclare à Tracfin : pas d'action de votre part",
        ],
        [
          "Transport physique d'espèces ≥ 10 000 €",
          "Déclaration obligatoire en douane (formulaire Cerfa n°13426)",
        ],
        ["Compte bancaire à l'étranger", "Déclaration annuelle obligatoire (formulaire 3916)"],
      ],
    },
    { type: "h3", texte: "Ce que beaucoup ne savent pas" },
    {
      type: "p",
      texte: "Vous devez **déclarer chaque année** tout compte bancaire ouvert à l'étranger, même si son solde est de 0 €. Le formulaire 3916 est joint à votre déclaration de revenus. L'oubli est passible d'une amende de **1 500 € par compte** non déclaré (10 000 € si le compte est dans un pays non coopératif fiscalement).",
    },
    { type: "h2", texte: "Tracfin : comment fonctionne la surveillance des transferts", id: "tracfin" },
    {
      type: "p",
      texte: "**Tracfin** (Traitement du renseignement et action contre les circuits financiers clandestins) est le service de renseignement financier français. Il reçoit des millions de signalements par an, et les transferts vers certains pays sont dans son radar prioritaire.",
    },
    { type: "h3", texte: "Ce qui déclenche un signalement Tracfin" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Transferts **fréquents et réguliers** vers un même pays (même si chacun est inférieur à 10 000 €)",
        "Transferts **fractionnés** (plusieurs envois de 9 000 € pour éviter le seuil, c'est un délit en soi appelé \"schtroumpfage\")",
        "Transferts vers des pays considérés comme **non coopératifs** (liste grise du GAFI)",
        "Montants **incohérents avec vos revenus** déclarés en France",
        "Utilisation d'**identités multiples** pour effectuer des transferts",
      ],
    },
    { type: "h3", texte: "Que se passe-t-il après un signalement ?" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Tracfin analyse le signalement et peut classer sans suite",
        "Si soupçon de blanchiment ou fraude fiscale → transmission au procureur de la République",
        "Le fisc peut lancer un **examen de situation fiscale personnelle (ESFP)** : un contrôle fiscal approfondi de votre patrimoine",
      ],
    },
    { type: "h3", texte: "Le risque concret pour vous" },
    {
      type: "p",
      texte: "Un contrôle Tracfin n'est pas automatiquement un \"problème\". Mais s'il révèle des revenus non déclarés ou un patrimoine inexpliqué, les conséquences sont lourdes : rappel d'impôts + pénalités de 40 à 80 % + éventuelles poursuites pénales.",
    },
    {
      type: "h2",
      texte: "Les moyens légaux pour envoyer de l'argent : comparatif 2026",
      id: "moyens-legaux",
    },
    {
      type: "p",
      texte: "Tous les moyens ne se valent pas en termes de coût, de rapidité et de sécurité juridique. Voici un comparatif honnête.",
    },
    { type: "h3", texte: "Comparatif des services de transfert d'argent en 2026" },
    {
      type: "tableau",
      entetes: ["Service", "Frais moyens", "Délai", "Traçabilité fiscale", "Pays couverts"],
      lignes: [
        ["Virement bancaire classique", "15-45 €", "2-5 jours", "Totale", "Tous"],
        ["Wise (ex-TransferWise)", "0,5-1,5 %", "1-2 jours", "Totale", "80+ pays"],
        ["Western Union", "3-8 %", "Immédiat", "Totale", "200+ pays"],
        ["MoneyGram", "3-7 %", "Immédiat", "Totale", "200+ pays"],
        ["Remitly", "1-3 %", "1-3 jours", "Totale", "100+ pays"],
        ["WorldRemit", "1-3 %", "1 jour", "Totale", "130+ pays"],
        ["Transport d'espèces", "0 € de frais", "N/A", "Aucune si < 10 000 €", "N/A"],
        ["Hawala / circuits informels", "Variable", "Immédiat", "Aucune", "Dangereux"],
      ],
    },
    { type: "h3", texte: "Notre recommandation" },
    {
      type: "p",
      texte: "Utilisez toujours un service **tracé et légal** (Wise, Remitly, virement bancaire). Les frais ont considérablement baissé ces dernières années. Le sur-coût vaut largement la tranquillité par rapport aux risques pénaux des circuits informels.",
    },
    { type: "h2", texte: "Hawala et circuits informels : les risques réels", id: "hawala-risques" },
    {
      type: "p",
      texte: "Le système **hawala** (ou \"fei-ch'ien\") est un réseau de transfert d'argent informel très utilisé dans certaines communautés. Vous donnez du cash à un intermédiaire en France, et votre famille récupère le montant équivalent au pays. Pas de virement, pas de trace.",
    },
    { type: "h3", texte: "Pourquoi c'est illégal en France" },
    {
      type: "p",
      texte: "L'exercice de l'activité de **prestataire de services de paiement** sans agrément de l'ACPR (Autorité de Contrôle Prudentiel et de Résolution) est un **délit pénal** puni de :",
    },
    {
      type: "liste",
      style: "puces",
      items: ["3 ans d'emprisonnement", "375 000 € d'amende"],
    },
    { type: "h3", texte: "Les risques pour vous en tant qu'utilisateur" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Blanchiment d'argent** : même si votre argent est légitime, utiliser un réseau illégal vous rend complice",
        "**Impossibilité de justifier les flux** : en cas de contrôle fiscal, vous ne pourrez pas prouver d'où est parti l'argent ni où il est allé",
        "**Impact sur votre titre de séjour** : une condamnation pénale, même pour \"simple\" utilisation d'un réseau hawala, peut entraîner un refus de renouvellement de titre de séjour",
        "**Impact sur la naturalisation** : le casier judiciaire est consulté, toute condamnation compromet votre dossier",
        "**Arnaque** : aucun recours possible si l'intermédiaire disparaît avec votre argent",
      ],
    },
    { type: "h3", texte: "Le cas réel" },
    {
      type: "p",
      texte: "En 2024, un réseau hawala opérant entre Paris et Dakar a été démantelé. Plusieurs utilisateurs réguliers (pas seulement les organisateurs) ont été poursuivis pour complicité. Certains avaient un dossier de naturalisation en cours, il a été définitivement rejeté.",
    },
    {
      type: "h2",
      texte: "L'argent envoyé est-il imposé deux fois ? La vérité sur la double imposition",
      id: "double-imposition",
    },
    {
      type: "p",
      texte: "C'est la crainte n°1 : \"Est-ce que la France va m'imposer sur l'argent que j'envoie au pays ?\"",
    },
    { type: "h3", texte: "La réponse courte : non" },
    {
      type: "p",
      texte: "L'argent que vous envoyez à votre famille n'est **pas un revenu imposable** : ni pour vous, ni pour le destinataire en France. C'est un **don** ou une **aide familiale**. En France, l'impôt sur le revenu porte sur ce que vous gagnez, pas sur ce que vous dépensez ou donnez.",
    },
    { type: "h3", texte: "Quand un transfert PEUT poser un problème fiscal" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Si le transfert est **un paiement pour un travail non déclaré** (prestation de service à distance, vente de biens) : c'est un revenu caché",
        "Si vous recevez de l'argent de l'étranger et qu'il est considéré comme un **revenu professionnel** non déclaré",
        "Si le montant total envoyé est **disproportionné par rapport à vos revenus déclarés** : le fisc peut soupçonner des revenus non déclarés",
      ],
    },
    { type: "h3", texte: "Les conventions fiscales bilatérales" },
    {
      type: "p",
      texte: "La France a signé des conventions fiscales avec de nombreux pays pour éviter la double imposition :",
    },
    {
      type: "tableau",
      entetes: ["Pays", "Convention fiscale", "Avantage principal"],
      lignes: [
        ["Maroc", "Oui (1970, révisée)", "Pas de double imposition sur salaires et retraites"],
        ["Algérie", "Oui (1982)", "Pas de double imposition sur revenus immobiliers"],
        ["Tunisie", "Oui (1973)", "Pas de double imposition sur pensions"],
        ["Sénégal", "Oui (1974)", "Pas de double imposition sur revenus d'activité"],
        ["Côte d'Ivoire", "Oui (1966)", "Pas de double imposition sur revenus"],
        ["Turquie", "Oui (1987)", "Pas de double imposition sur revenus"],
      ],
    },
    {
      type: "p",
      texte: "Ces conventions ne concernent pas les transferts d'argent familiaux (qui ne sont pas imposés) mais les revenus que vous pourriez percevoir dans les deux pays.",
    },
    {
      type: "h2",
      texte: "Transporter de l'argent en espèces à la frontière : la procédure obligatoire",
      id: "especes-frontiere",
    },
    {
      type: "p",
      texte: "Si vous préférez transporter du cash plutôt que faire un virement, la loi impose des règles très strictes.",
    },
    { type: "h3", texte: "La règle des 10 000 €" },
    {
      type: "p",
      texte: "Si vous transportez **10 000 € ou plus** (ou l'équivalent en devises étrangères) en entrant ou en sortant de France, vous devez **obligatoirement le déclarer en douane**.",
    },
    { type: "h3", texte: "Comment déclarer ?" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Remplissez le **formulaire Cerfa n°13426** (disponible sur douane.gouv.fr)",
        "Présentez-le spontanément aux douaniers au point de passage (aéroport, gare, frontière routière)",
        "Depuis 2024, la déclaration peut être faite en ligne avant le voyage sur **dalia.douane.finances.gouv.fr**",
      ],
    },
    { type: "h3", texte: "Les sanctions en cas de non-déclaration" },
    {
      type: "tableau",
      entetes: ["Infraction", "Sanction"],
      lignes: [
        ["Défaut de déclaration", "Amende = 50 % des sommes non déclarées"],
        ["Fausse déclaration", "Amende = 50 % + saisie possible"],
        ["Soupçon de blanchiment", "Saisie intégrale + poursuites pénales"],
      ],
    },
    { type: "h3", texte: "Exemple concret" },
    {
      type: "p",
      texte: "Vous prenez l'avion pour Casablanca avec 12 000 € en espèces sans les déclarer. La douane vous contrôle. Résultat : 6 000 € d'amende (50 % de 12 000 €) + saisie temporaire des fonds + signalement à Tracfin. Si vous aviez simplement rempli le formulaire 5 minutes avant, rien ne vous arrivait.",
    },
    {
      type: "h2",
      texte: "Les bonnes pratiques pour envoyer de l'argent en toute sécurité",
      id: "bonnes-pratiques",
    },
    { type: "h3", texte: "Nos 7 recommandations concrètes" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Utilisez toujours un service agréé et tracé** : Wise, Remitly, WorldRemit, votre banque. Conservez les reçus",
        "**Déclarez vos comptes bancaires étrangers** : formulaire 3916 chaque année avec votre déclaration de revenus. Même si le solde est nul",
        "**Ne fractionnez jamais un envoi pour passer sous le seuil** : le schtroumpfage est un délit spécifique, facilement détecté par les algorithmes bancaires",
        "**Gardez une cohérence entre revenus et envois** : si vous gagnez 1 800 €/mois et envoyez 1 200 €/mois, le fisc va se poser des questions",
        "**Conservez les justificatifs pendant 6 ans** : durée de prescription fiscale en France. Gardez les reçus de transfert, relevés bancaires, preuves des raisons de l'envoi",
        "**Pas de cash au-delà de 10 000 €** non déclaré, ou déclarez-le simplement via le formulaire",
        "**En cas de doute, consultez un expert-comptable** : une consultation de 100 € peut vous éviter une amende de 10 000 €",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Envoyer de l'argent à sa famille au pays est un acte normal et légitime. Mais en France, il est encadré par des règles précises que trop d'étrangers ignorent, et dont la violation peut avoir des conséquences graves sur votre situation fiscale, pénale, et même sur votre titre de séjour ou votre dossier de naturalisation. Utilisez des services agréés, déclarez vos comptes étrangers, évitez les circuits hawala, et gardez vos reçus. C'est simple, c'est légal, et c'est la seule façon de protéger votre avenir en France tout en aidant votre famille.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "L'argent que j'envoie à ma famille est-il imposé en France ?",
      reponse: "Non. L'argent envoyé comme aide familiale ou don n'est pas un revenu imposable en France. Vous n'êtes imposé que sur vos revenus (salaires, loyers, etc.), pas sur ce que vous dépensez ou donnez. Mais les transferts doivent rester cohérents avec vos revenus déclarés.",
    },
    {
      question: "Je dois déclarer mon compte bancaire au Maroc même si je ne m'en sers plus ?",
      reponse: "Oui. Tant que le compte existe et n'est pas officiellement clôturé, vous devez le déclarer chaque année via le formulaire 3916 joint à votre déclaration de revenus. L'amende pour non-déclaration est de 1 500 € par compte et par an.",
    },
    {
      question: "Est-ce que les petites sommes (100-200 €/mois) sont surveillées ?",
      reponse: "Les petites sommes régulières ne déclenchent pas de signalement Tracfin individuellement. Mais si le cumul annuel atteint des montants importants ou si le pattern semble incohérent avec vos revenus, un signalement automatique peut être déclenché par votre banque.",
    },
    {
      question: "Le hawala peut-il impacter mon titre de séjour ?",
      reponse: "Oui. L'utilisation d'un réseau hawala peut entraîner des poursuites pénales pour complicité d'exercice illégal de services de paiement. Toute condamnation pénale peut compromettre le renouvellement de votre titre de séjour ou votre demande de naturalisation.",
    },
  ],
};

export default article;
