import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-buzz-generaux-5.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/regularisation-sans-papiers-france-2026-methode-demarches-circulaire-valls`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "regularisation-sans-papiers-france-2026-methode-demarches-circulaire-valls",
  titre: "Régularisation sans papiers en France 2026 : la méthode que personne ne vous explique (circulaire Valls, métiers en tension)",
  titreSeo: "Régularisation sans papiers en France 2026 : la méthode que personne ne vous explique (circulaire Valls, métiers en tension)",
  resume: "Les 5 voies légales pour se régulariser en France en 2026 : circulaire Valls, métiers en tension, parent d'enfant français, étranger malade. Dossier type, preuves acceptées, délais préfecture et recours en cas de refus.",
  chapo: "En France, des centaines de milliers de personnes vivent sans titre de séjour, et beaucoup ignorent qu'il existe des voies légales pour sortir de l'ombre. La régularisation n'est pas un mythe. Elle repose sur des textes précis, des critères vérifiables et une procédure encadrée. Pourtant, aucune administration ne vous expliquera jamais clairement comment faire. Ce guide est le plus complet que vous trouverez en 2026 : il détaille les 5 voies de régularisation qui fonctionnent réellement, les dossiers types acceptés par les préfectures, les délais réalistes, et les erreurs qui mènent droit au refus. Si vous êtes en situation irrégulière ou si vous connaissez quelqu'un dans ce cas, cet article peut changer une vie.",
  publieLe: "2026-04-28",
  modifieLe: "2026-04-28",
  minutes: 25,
  theme: "régularisation sans papiers France 2026",
  motsCles: [
    "régularisation sans papiers France 2026",
    "comment se régulariser en France",
    "circulaire Valls régularisation",
    "régularisation exceptionnelle France 2026",
    "admission exceptionnelle au séjour",
    "régularisation par le travail France",
    "régularisation 10 ans de présence France",
    "régularisation vie privée et familiale",
    "sans papiers demander titre de séjour",
    "régularisation parent enfant français",
    "régularisation parent enfant scolarisé",
    "article L435-1 CESEDA régularisation",
    "préfecture régularisation dossier",
    "preuve de résidence sans papiers France",
    "régularisation métiers en tension 2026",
  ],
  rubrique: "cadre-legal",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qui peut se régulariser en 2026 ? Les 5 voies légales qui fonctionnent",
      id: "qui-peut-se-regulariser",
    },
    {
      type: "p",
      texte: "Contrairement à ce que beaucoup pensent, la régularisation n'est pas une loterie. Elle repose sur des bases juridiques solides. Voici les **5 voies principales** reconnues par le droit français.",
    },
    { type: "h3", texte: "Voie n°1 : L'admission exceptionnelle au séjour (article L435-1 du CESEDA)" },
    {
      type: "p",
      texte: "C'est la voie la plus utilisée. L'article L435-1 du Code de l'entrée et du séjour des étrangers permet au préfet d'accorder un titre de séjour à un étranger en situation irrégulière lorsque des **considérations humanitaires** ou des **motifs exceptionnels** le justifient.",
    },
    {
      type: "p",
      texte: "**En pratique, la circulaire Valls du 28 novembre 2012** détaille les cas dans lesquels cette régularisation est accordée :",
    },
    {
      type: "tableau",
      entetes: ["Situation", "Durée de présence exigée", "Condition principale"],
      lignes: [
        [
          "Parent d'enfant scolarisé",
          "**5 ans de résidence** en France",
          "Enfant scolarisé depuis au moins 3 ans",
        ],
        [
          "Vie privée et familiale",
          "**5 ans minimum**",
          "Liens personnels et familiaux forts en France",
        ],
        [
          "Conjoint de Français ou de titulaire d'un titre",
          "**5 ans**",
          "Vie commune effective depuis au moins 18 mois",
        ],
        [
          "Ancienneté seule (sans attache familiale)",
          "**7 à 10 ans**",
          "Intégration prouvée (travail, impôts, logement)",
        ],
      ],
    },
    { type: "h3", texte: "Voie n°2 : La régularisation par le travail (métiers en tension)" },
    {
      type: "p",
      texte: "Depuis la loi immigration de 2024, un étranger sans papiers peut demander un titre de séjour « salarié » s'il remplit **toutes** ces conditions :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**3 ans de résidence** en France minimum",
        "**8 mois de travail** (continu ou non) dans les 24 derniers mois",
        "Emploi dans un **secteur en tension** (BTP, restauration, agriculture, aide à la personne, transport…)",
        "Un **employeur qui soutient la demande** par une lettre et un contrat",
      ],
    },
    {
      type: "p",
      texte: "Cette voie est en 2026 la plus rapide : délai moyen de traitement **4 à 6 mois**.",
    },
    {
      type: "h3",
      texte: "Voie n°3 : Le titre « vie privée et familiale » pour parent d'enfant français",
    },
    {
      type: "p",
      texte: "Si vous êtes parent d'un enfant de nationalité française et que vous contribuez à son entretien et son éducation, vous avez un **droit au séjour** (article L423-7 du CESEDA). Ce n'est pas une admission exceptionnelle : c'est un droit. La préfecture ne peut pas refuser si les conditions sont remplies.",
    },
    { type: "h3", texte: "Voie n°4 : L'étranger malade (titre de séjour pour raisons de santé)" },
    {
      type: "p",
      texte: "Si vous souffrez d'une pathologie grave qui ne peut pas être traitée dans votre pays d'origine, vous pouvez obtenir un titre de séjour « étranger malade » (article L425-9 du CESEDA). Un médecin de l'OFII évalue votre dossier médical de façon confidentielle.",
    },
    { type: "h3", texte: "Voie n°5 : Les victimes de violences conjugales ou de traite" },
    {
      type: "p",
      texte: "Les étrangers victimes de violences conjugales (même sans dépôt de plainte initial) ou de traite des êtres humains ont droit à un titre de séjour (articles L425-1 et L425-6 du CESEDA). Ces titres sont délivrés indépendamment de la situation administrative antérieure.",
    },
    {
      type: "h2",
      texte: "Comment monter un dossier de régularisation en béton",
      id: "dossier-en-beton",
    },
    {
      type: "p",
      texte: "La qualité de votre dossier fait **90 % du résultat**. Voici les pièces indispensables et les bonnes pratiques.",
    },
    { type: "h3", texte: "Les preuves de résidence (les plus importantes)" },
    {
      type: "p",
      texte: "Vous devez prouver votre présence en France sur la durée exigée (5, 7 ou 10 ans selon la voie). La préfecture accepte :",
    },
    { type: "p", texte: "**Preuves fortes (1 par trimestre minimum) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Quittances de loyer ou attestations d'hébergement",
        "Factures EDF, téléphone, internet à votre nom",
        "Courriers de la CAF, de l'Assurance Maladie (CMU/AME)",
        "Bulletins de paie (même sous alias : sauf si cela vous incrimine)",
        "Avis d'imposition ou déclarations de revenus",
        "Relevés bancaires",
      ],
    },
    { type: "p", texte: "**Preuves complémentaires :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Ordonnances médicales datées",
        "Billets de transport nominatifs",
        "Photos géolocalisées avec métadonnées",
        "Attestations de suivi scolaire des enfants",
        "Certificats d'associations d'aide aux migrants",
      ],
    },
    { type: "h3", texte: "La lettre de motivation : l'élément décisif" },
    { type: "p", texte: "Rédigez une lettre **personnelle, sincère et structurée** qui explique :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Votre parcours migratoire (pourquoi êtes-vous venu en France)",
        "Votre ancrage en France (famille, travail, logement, amis, engagement associatif)",
        "Les raisons pour lesquelles un retour au pays est impossible ou inhumain",
        "Votre volonté d'intégration (apprentissage du français, respect des valeurs de la République)",
      ],
    },
    { type: "h3", texte: "Les erreurs qui tuent un dossier" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Mentir sur les dates** : les préfectures croisent les fichiers. Un mensonge = refus définitif",
        "**Présenter des faux documents** : constitutif d'un délit pénal (article 441-1 du Code pénal)",
        "**Déposer un dossier incomplet** : la préfecture classe sans suite, et vous perdez des mois",
        "**Ne pas joindre de preuves récentes** : un dossier qui s'arrête il y a 2 ans montre un \"trou\" suspect",
        "**Ignorer l'employeur** : pour la voie travail, sans lettre de l'employeur, le dossier est irrecevable",
      ],
    },
    { type: "h2", texte: "La procédure en préfecture étape par étape", id: "procedure-prefecture" },
    { type: "h3", texte: "Étape 1 : Prendre rendez-vous (le plus dur)" },
    { type: "p", texte: "Selon les préfectures, le dépôt se fait :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**En ligne** sur le portail ANEF (Administration Numérique pour les Étrangers en France) : de plus en plus généralisé en 2026",
        "**Sur place** avec rendez-vous pris en ligne (prefectures avec créneaux rares)",
        "**Par courrier recommandé** avec accusé de réception (certaines préfectures l'acceptent pour les admissions exceptionnelles)",
      ],
    },
    {
      type: "p",
      texte: "**Astuce cruciale :** si la préfecture refuse de vous donner un rendez-vous, envoyez un **courrier recommandé** avec votre dossier complet. Le silence de l'administration pendant 4 mois vaut refus implicite, ce qui ouvre un droit de **recours devant le tribunal administratif**.",
    },
    { type: "h3", texte: "Étape 2 : Le dépôt du dossier et le récépissé" },
    {
      type: "p",
      texte: "Si votre dossier est jugé recevable, vous recevez un **récépissé de demande de titre de séjour**. Ce document vous protège : il prouve que vous avez une démarche en cours et il est **souvent assorti d'une autorisation de travail** provisoire.",
    },
    { type: "h3", texte: "Étape 3 : L'instruction (4 à 12 mois)" },
    {
      type: "p",
      texte: "La préfecture vérifie vos documents, interroge parfois les services de police, et peut vous convoquer pour un entretien. **Durée moyenne en 2026 :**",
    },
    {
      type: "tableau",
      entetes: ["Voie de régularisation", "Délai moyen"],
      lignes: [
        ["Métiers en tension", "4 à 6 mois"],
        ["Parent d'enfant français", "2 à 4 mois"],
        ["Vie privée et familiale (5 ans)", "6 à 9 mois"],
        ["Ancienneté (10 ans)", "8 à 12 mois"],
        ["Étranger malade", "6 à 10 mois"],
      ],
    },
    { type: "h3", texte: "Étape 4 : La décision" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Acceptation** : vous recevez un SMS ou un courrier vous invitant à retirer votre titre (carte de séjour temporaire 1 an, renouvelable)",
        "**Refus** : vous recevez un courrier motivé. Vous disposez alors de **2 mois** pour former un recours (gracieux, hiérarchique ou contentieux devant le tribunal administratif)",
      ],
    },
    { type: "h3", texte: "Étape 5 : Et après ?" },
    {
      type: "p",
      texte: "Le premier titre délivré est en général une **carte de séjour temporaire « vie privée et familiale »** ou **« salarié »** valable 1 an. Après 1 à 4 renouvellements, vous pouvez demander une **carte pluriannuelle** (4 ans). Après 5 ans de séjour régulier, vous pouvez demander une **carte de résident** (10 ans) ou la **nationalité française**.",
    },
    { type: "h2", texte: "Que faire en cas de refus ? Les recours qui marchent", id: "recours-refus" },
    {
      type: "p",
      texte: "Un refus n'est pas la fin du chemin. En 2026, environ **35 % des recours** devant le tribunal administratif aboutissent à l'annulation de la décision préfectorale.",
    },
    { type: "h3", texte: "Le recours gracieux (gratuit, rapide)" },
    {
      type: "p",
      texte: "Dans les **2 mois** suivant la notification de refus, vous pouvez adresser un **recours gracieux** au préfet. Joignez de nouvelles pièces ou des éléments non pris en compte. Le préfet a 2 mois pour répondre. L'absence de réponse vaut rejet.",
    },
    {
      type: "p",
      texte: "**Quand le recours gracieux marche :** quand le refus est motivé par un dossier incomplet ou un malentendu. Il ne marche presque jamais quand le refus est « politique ».",
    },
    { type: "h3", texte: "Le recours contentieux (tribunal administratif)" },
    {
      type: "p",
      texte: "Si le recours gracieux échoue (ou directement, sans passer par le gracieux), vous pouvez saisir le **tribunal administratif** dans un délai de **2 mois à compter de la décision de refus** (ou de la décision implicite de rejet du recours gracieux).",
    },
    { type: "p", texte: "**Ce qu'il faut savoir :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "L'aide juridictionnelle (AJ) est **accessible** même en situation irrégulière, elle couvre 100 % des frais d'avocat si vos revenus sont inférieurs à 1 235 €/mois",
        "Le recours est **suspensif** dans certains cas (OQTF avec délai de départ volontaire)",
        "Le juge évalue si la préfecture a correctement apprécié votre situation personnelle et familiale",
        "**Délai moyen du jugement** : 6 à 12 mois",
      ],
    },
    { type: "h3", texte: "Le référé-liberté (urgence absolue)" },
    {
      type: "p",
      texte: "Si une OQTF sans délai de départ menace de vous placer en centre de rétention, vous pouvez saisir le juge en **référé-liberté** (article L521-2 du Code de justice administrative). Le juge statue en **48 heures**.",
    },
    { type: "h3", texte: "Conseils pour maximiser vos chances" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Faites-vous accompagner** par une association spécialisée (GISTI, Cimade, ADDE, ligue des droits de l'homme)",
        "**Fournissez des preuves nouvelles** que la préfecture n'avait pas",
        "**Insistez sur vos attaches familiales** et l'intérêt supérieur de l'enfant (si applicable)",
        "**Demandez l'aide juridictionnelle** immédiatement après le refus pour ne pas dépasser les délais",
      ],
    },
    {
      type: "h2",
      texte: "Chiffres clés et réalités de la régularisation en 2026",
      id: "temoignages-chiffres",
    },
    { type: "h3", texte: "Les chiffres que les médias ne donnent pas" },
    {
      type: "tableau",
      entetes: ["Indicateur", "Valeur 2025-2026"],
      lignes: [
        ["Demandes d'admission exceptionnelle déposées", "~95 000/an"],
        ["Taux d'acceptation moyen national", "~30 %"],
        ["Taux d'acceptation via métiers en tension", "~55 %"],
        ["Durée moyenne d'instruction", "6 à 9 mois"],
        ["Recours devant le tribunal administratif", "~35 % de succès"],
        ["Titres délivrés pour raisons médicales", "~6 500/an"],
      ],
    },
    { type: "h3", texte: "Les préfectures les plus « ouvertes »" },
    {
      type: "p",
      texte: "Toutes les préfectures n'appliquent pas la même politique. Historiquement, certaines sont plus favorables aux admissions exceptionnelles :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Paris** : volume élevé, traitement standardisé",
        "**Seine-Saint-Denis** (Bobigny) : forte demande, critères stricts mais nombreuses régularisations",
        "**Rhône** (Lyon) : politique relativement souple pour les familles",
        "**Bouches-du-Rhône** (Marseille) : délais longs mais taux d'acceptation correct",
      ],
    },
    { type: "h3", texte: "Ce qui change en 2026" },
    {
      type: "p",
      texte: "La loi immigration de 2024, pleinement en vigueur en 2026, a apporté des changements importants :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "La régularisation par les métiers en tension est devenue un **droit** (et non plus un pouvoir discrétionnaire du préfet) sous certaines conditions",
        "Le **titre \"travailleur temporaire\"** obtenu par cette voie est renouvelable et ouvre droit à la carte pluriannuelle",
        "Les critères de la circulaire Valls **restent en vigueur** pour les autres voies (même si la circulaire n'a pas de valeur légale contraignante, les tribunaux s'y réfèrent)",
      ],
    },
    { type: "h3", texte: "Le conseil le plus important" },
    {
      type: "p",
      texte: "Ne restez pas isolé. Contactez une **association d'aide aux étrangers** dans votre département. elles accompagnent gratuitement des milliers de dossiers chaque année. Le GISTI (Groupe d'information et de soutien des immigrés) publie des notes pratiques gratuites sur chaque voie de régularisation : gisti.org",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La régularisation en France n'est pas un hasard : c'est un parcours juridique balisé, exigeant mais réel. En 2026, les voies légales existent, circulaire Valls, métiers en tension, parent d'enfant français, étranger malade, victime de violences. La clé, c'est un dossier irréprochable, des preuves solides et un accompagnement associatif ou juridique. Ne restez jamais seul face à l'administration. Chaque année, des dizaines de milliers de personnes obtiennent un titre de séjour par admission exceptionnelle. Vous pouvez être la prochaine.",
      ton: "bleu",
    },
  ],
};

export default article;
