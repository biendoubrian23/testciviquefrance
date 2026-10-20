import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-papiers-arrivee-france-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/papiers-documents-obtenir-arrivee-france-2026-ou-comment-demander`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "papiers-documents-obtenir-arrivee-france-2026-ou-comment-demander",
  titre: "Tous les papiers à obtenir en arrivant en France 2026 : où et comment les demander",
  titreSeo: "Tous les papiers à obtenir en arrivant en France 2026 : où et comment les demander",
  resume: "La checklist des papiers indispensables quand on vient d'arriver en France : validation du VLS-TS, justificatif de domicile, compte bancaire et RIB, numéro de Sécurité sociale et carte Vitale, CAF, école des enfants. À quoi sert chaque document, où et comment l'obtenir.",
  chapo: "Vous venez d'arriver en France ? Très vite, vous allez découvrir une règle locale : **ici, tout fonctionne avec des papiers**. Pour louer, travailler, vous soigner, ouvrir un compte ou toucher une aide, on vous réclamera systématiquement un justificatif. Et le piège classique, c'est que ces documents se débloquent **en chaîne** : sans l'un, impossible d'obtenir l'autre.",
  publieLe: "2026-06-25",
  modifieLe: "2026-06-25",
  minutes: 15,
  theme: "papiers à obtenir en arrivant en france",
  motsCles: [
    "papiers à obtenir en arrivant en france",
    "documents arrivée france étranger",
    "démarches administratives nouvel arrivant france",
    "numéro sécurité sociale france étranger",
    "carte vitale étranger france",
    "justificatif de domicile france",
    "ouvrir compte bancaire étranger france",
    "droit au compte banque de france",
    "valider VLS-TS anef",
    "CAF APL étranger 2026",
    "inscrire enfant école france étranger",
    "contrat intégration républicaine CIR",
    "premiers papiers france 2026",
    "taxe OFII validation visa",
    "s'installer en france démarches papiers",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
  },
  blocs: [
    {
      type: "p",
      texte: "Cet article est une **checklist des papiers indispensables** à obtenir dès l'arrivée, classés non pas par date mais **par document** : à quoi il sert, **où** et **comment** le demander, et dans quel ordre les enchaîner pour éviter les blocages. De la validation du visa au numéro de Sécurité sociale, en passant par le justificatif de domicile et le RIB, voici votre feuille de route documentaire pour 2026.",
    },
    {
      type: "h2",
      texte: "L'ordre logique : pourquoi les papiers se débloquent en chaîne",
      id: "ordre-logique",
    },
    {
      type: "p",
      texte: "Le plus grand piège de l'arrivée en France, c'est l'**effet domino** : chaque document en exige un autre. Comprendre la chaîne vous fait gagner des semaines.",
    },
    { type: "p", texte: "**La chaîne typique :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Validation du VLS-TS** → vous êtes en séjour régulier.",
        "**Carte SIM + adresse** (même provisoire) → vous devenez joignable et « localisable ».",
        "**Justificatif de domicile** → la clé qui ouvre presque tout.",
        "**Compte bancaire + RIB** → indispensable pour le loyer, le salaire, les aides.",
        "**Numéro de Sécurité sociale → carte Vitale** → pour vous soigner et être remboursé.",
        "**CAF (APL), France Travail, école des enfants** → selon votre situation.",
      ],
    },
    {
      type: "encadre",
      texte: "💡 Le **justificatif de domicile** et le **RIB** sont les deux pièces qu'on vous redemandera le plus. Obtenez-les en priorité : ils déverrouillent la plupart des autres démarches.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "1. Valider son visa (VLS-TS) : le document fondateur",
      id: "titre-sejour-vls",
    },
    {
      type: "p",
      texte: "**À quoi ça sert :** prouver que vous êtes en **séjour régulier**. Sans validation, votre visa perd sa valeur de titre de séjour et vous basculez en situation irrégulière.",
    },
    {
      type: "p",
      texte: "**Où / comment :** en ligne sur la plateforme **ANEF (administration-etrangers.interieur.gouv.fr)**, dans un **délai de 3 mois** après l'arrivée.",
    },
    { type: "p", texte: "**Ce qu'il faut :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Votre visa VLS-TS",
        "Votre adresse en France",
        "Le paiement de la **taxe OFII** (par exemple **60 €** pour les étudiants ; **225 €** pour la plupart des autres motifs, salarié, conjoint de Français, visiteur, regroupement familial)",
      ],
    },
    {
      type: "p",
      texte: "**Résultat :** une **confirmation de validation** qui vaut titre de séjour. Conservez-la précieusement (PDF + impression).",
    },
    {
      type: "encadre",
      texte: "⚠️ C'est la démarche n°1, à ne jamais repousser. Tout le reste en découle.",
      ton: "bleu",
    },
    { type: "h2", texte: "2. Justificatif de domicile et compte bancaire (RIB)", id: "domicile-banque" },
    { type: "p", texte: "**Le justificatif de domicile**" },
    {
      type: "p",
      texte: "**À quoi ça sert :** prouver où vous habitez. Réclamé pour le compte bancaire, la Sécu, la CAF, l'inscription des enfants…",
    },
    {
      type: "p",
      texte: "**Comment l'obtenir :** facture d'électricité/internet à votre nom, **quittance de loyer**, **attestation d'hébergement** (si vous logez chez quelqu'un, accompagnée de sa pièce d'identité et d'un justificatif à son nom), ou attestation de la résidence/CROUS.",
    },
    { type: "p", texte: "**Le compte bancaire et le RIB**" },
    {
      type: "p",
      texte: "**À quoi ça sert :** le **RIB** (relevé d'identité bancaire) est exigé pour percevoir un salaire, une bourse, les aides CAF, et payer le loyer.",
    },
    {
      type: "p",
      texte: "**Comment l'ouvrir :** dans une banque traditionnelle ou une néo-banque, généralement avec : pièce d'identité/passeport, titre de séjour ou visa validé, et justificatif de domicile.",
    },
    {
      type: "p",
      texte: "**En cas de refus :** vous avez un **droit au compte**. Si plusieurs banques refusent, saisissez la **Banque de France**, qui désignera d'office un établissement tenu de vous ouvrir un compte de base gratuit.",
    },
    {
      type: "encadre",
      texte: "💡 Pas encore de justificatif de domicile ? Certaines néo-banques ouvrent un compte avec une simple adresse déclarée, utile pour démarrer, en attendant un compte classique.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "3. Numéro de Sécurité sociale et carte Vitale",
      id: "securite-sociale-vitale",
    },
    {
      type: "p",
      texte: "**À quoi ça sert :** être remboursé de vos frais de santé. Le **numéro de Sécurité sociale** est aussi demandé par de nombreuses administrations.",
    },
    { type: "p", texte: "**Comment l'obtenir :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Étudiants** : affiliation **gratuite** à la Sécurité sociale étudiante, via le portail dédié, dès votre arrivée et votre inscription.",
        "**Salariés** : votre employeur déclenche votre affiliation ; vous obtenez un numéro provisoire puis définitif.",
        "**Autres situations** : demande d'affiliation auprès de la **CPAM** (Assurance maladie) sur **ameli.fr**, avec pièce d'identité, titre de séjour, acte de naissance traduit et RIB.",
      ],
    },
    {
      type: "p",
      texte: "**La carte Vitale :** une fois votre numéro de Sécu définitif attribué, vous demandez votre **carte Vitale** (photo + justificatif). Comptez quelques semaines. En attendant, une **attestation de droits** téléchargeable sur ameli.fr fait foi.",
    },
    {
      type: "p",
      texte: "**À ne pas oublier :** une **complémentaire santé (mutuelle)** pour la part non remboursée par la Sécu. Sous conditions de revenus, la **Complémentaire santé solidaire (CSS)** peut être gratuite.",
    },
    { type: "h2", texte: "4. CAF, France Travail et école des enfants", id: "caf-france-travail-ecole" },
    { type: "p", texte: "**La CAF (allocations familiales / logement)**" },
    { type: "p", texte: "**À quoi ça sert :** toucher l'**APL** (aide au logement) et d'autres aides." },
    {
      type: "p",
      texte: "**Comment :** créez un compte sur **caf.fr**, demandez un **numéro d'allocataire**, et déposez votre demande d'APL avec RIB, bail et justificatifs. L'APL peut représenter **100 à 250 €/mois** selon le logement et les ressources.",
    },
    { type: "p", texte: "**France Travail (ex-Pôle emploi)**" },
    {
      type: "p",
      texte: "**À quoi ça sert :** si vous cherchez un emploi et que votre titre vous y autorise.",
    },
    {
      type: "p",
      texte: "**Comment :** inscription en ligne sur **francetravail.fr**, avec titre de séjour autorisant le travail, RIB et CV.",
    },
    { type: "p", texte: "**L'école des enfants**" },
    {
      type: "p",
      texte: "**À quoi ça sert :** l'instruction est **obligatoire de 3 à 16 ans**, quelle que soit la situation administrative des parents.",
    },
    {
      type: "p",
      texte: "**Comment :** inscription en **mairie** (école maternelle/élémentaire) ou auprès de l'établissement / du rectorat (collège, lycée), avec justificatif de domicile, livret de famille ou acte de naissance, et carnet de vaccinations.",
    },
    { type: "p", texte: "**Le Contrat d'Intégration Républicaine (CIR)**" },
    {
      type: "p",
      texte: "La plupart des primo-arrivants signent un **CIR** à l'**OFII** : formation civique, et formation linguistique si besoin. C'est une obligation pour beaucoup de titres de séjour.",
    },
    {
      type: "h2",
      texte: "5. Les papiers complémentaires utiles à prévoir",
      id: "documents-utiles-complementaires",
    },
    {
      type: "p",
      texte: "Une fois le socle en place, quelques documents vous simplifieront la vie au quotidien :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Carte étudiante** (étudiants) : accès au restaurant universitaire, réductions, preuve de statut.",
        "**Abonnement de transport** : souvent à tarif réduit pour les étudiants et jeunes.",
        "**Assurance habitation** : **obligatoire** pour tout locataire, à souscrire dès la signature du bail.",
        "**Échange du permis de conduire** : selon votre pays d'origine et les accords de réciprocité, via l'**ANTS**. Attention aux délais : la demande doit souvent être faite dans **l'année** suivant l'établissement de votre titre de séjour.",
        "**Reconnaissance de diplôme (ENIC-NARIC)** : pour faire reconnaître l'équivalence d'un diplôme étranger, utile pour un emploi ou une poursuite d'études.",
      ],
    },
    {
      type: "encadre",
      texte: "📋 Gardez un **classeur (physique + numérique)** avec une copie de chaque document : passeport, visa validé, acte de naissance traduit, justificatif de domicile, RIB, attestation de Sécu. Vous le ressortirez à chaque démarche.",
      ton: "bleu",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "S'installer en France, c'est d'abord constituer **un socle de papiers** dans le bon ordre. Validez votre VLS-TS dans les 3 mois, c'est la pièce fondatrice, puis sécurisez le duo qui débloque tout le reste : **justificatif de domicile** et **compte bancaire / RIB**. Enchaînez avec le **numéro de Sécurité sociale** et la **carte Vitale** pour vous soigner, puis la **CAF**, **France Travail** et l'**école** selon votre situation. Gardez en tête l'effet domino : chaque document en appelle un autre, alors avancez méthodiquement et conservez une copie de tout. Avec ce socle, vous passez du statut de « nouvel arrivant » à celui de résident pleinement intégré dans la vie administrative française, et vous serez prêt, le moment venu, pour les démarches de titre pluriannuel, voire de naturalisation.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quel est le tout premier papier à régler en arrivant en France ?",
      reponse: "La validation de votre visa VLS-TS, en ligne sur la plateforme ANEF, dans les 3 mois suivant votre arrivée. C'est ce qui vous place en séjour régulier et conditionne toutes les autres démarches. Elle implique le paiement de la taxe OFII (60 € pour les étudiants, 225 € pour la plupart des autres motifs).",
    },
    {
      question: "Quels documents sont les plus souvent demandés en France ?",
      reponse: "Le justificatif de domicile et le RIB (relevé d'identité bancaire) sont les deux pièces réclamées en permanence. Viennent ensuite la pièce d'identité/titre de séjour, l'acte de naissance (traduit) et l'attestation de droits à l'Assurance maladie. Obtenez le justificatif de domicile et le compte bancaire en priorité : ils déverrouillent presque tout le reste.",
    },
    {
      question: "Comment obtenir un numéro de Sécurité sociale et une carte Vitale ?",
      reponse: "Les étudiants s'affilient gratuitement à la Sécurité sociale étudiante ; les salariés sont affiliés via leur employeur ; les autres situations passent par la CPAM sur ameli.fr (avec pièce d'identité, titre de séjour, acte de naissance traduit et RIB). Une fois le numéro définitif attribué, vous demandez votre carte Vitale. En attendant, l'attestation de droits téléchargeable sur ameli.fr fait foi.",
    },
    {
      question: "Une banque peut-elle refuser de m'ouvrir un compte ?",
      reponse: "Une banque peut refuser, mais vous bénéficiez d'un droit au compte. Si plusieurs banques refusent, saisissez la Banque de France : elle désignera d'office un établissement tenu de vous ouvrir un compte de base gratuit. Certaines néo-banques permettent aussi d'ouvrir un compte rapidement, parfois sans justificatif de domicile classique.",
    },
    {
      question: "Mes enfants peuvent-ils être scolarisés même sans titre de séjour définitif ?",
      reponse: "Oui. L'instruction est obligatoire de 3 à 16 ans pour tous les enfants présents en France, quelle que soit la situation administrative des parents. L'inscription se fait en mairie pour la maternelle et l'élémentaire, et auprès de l'établissement ou du rectorat pour le collège et le lycée, avec un justificatif de domicile et le carnet de vaccinations.",
    },
  ],
  sources: [
    {
      titre: "ANEF : Administration numérique pour les étrangers en France",
      url: "https://administration-etrangers-en-france.interieur.gouv.fr/",
      type: "officiel",
      description: "Plateforme officielle pour valider son VLS-TS et gérer ses démarches de titre de séjour en ligne.",
    },
    {
      titre: "Ameli.fr, S'affilier à l'Assurance maladie en arrivant en France",
      url: "https://www.ameli.fr/assure/droits-demarches/situations-particulieres/personnes-nees-etranger",
      type: "officiel",
      description: "Démarche officielle d'affiliation, obtention du numéro de Sécurité sociale et de la carte Vitale.",
    },
    {
      titre: "Service-Public.fr, Droit au compte bancaire",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1741",
      type: "officiel",
      description: "Procédure officielle du droit au compte via la Banque de France en cas de refus d'ouverture par les banques.",
    },
    {
      titre: "Service-Public.fr, Inscription à l'école d'un enfant",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1864",
      type: "officiel",
      description: "Règles d'inscription scolaire et obligation d'instruction de 3 à 16 ans, quelle que soit la situation des parents.",
    },
    {
      titre: "OFII : Le Contrat d'Intégration Républicaine (CIR)",
      url: "https://www.ofii.fr/",
      type: "officiel",
      description: "Présentation officielle du parcours d'intégration et du CIR pour les primo-arrivants.",
    },
  ],
  aLireAussi: [
    { slug: "visa-long-sejour-vls-ts-validation-ofii-2026", ancre: "Valider son VLS-TS sur ANEF" },
    {
      slug: "premiers-pas-france-etranger-banque-logement-caf-ameli",
      ancre: "Banque, logement, CAF et Ameli en arrivant",
    },
    {
      slug: "echanger-permis-conduire-etranger-france-2026-ants-demarches",
      ancre: "Échanger son permis de conduire étranger",
    },
    {
      slug: "preparer-depart-france-2026-checklist-documents-avant-avion",
      ancre: "Ce qu'il faut préparer avant de partir",
    },
  ],
};

export default article;
