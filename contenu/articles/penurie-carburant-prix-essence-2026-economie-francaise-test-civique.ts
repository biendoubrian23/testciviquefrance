import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-tendances-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/penurie-carburant-prix-essence-2026-economie-francaise-test-civique`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "penurie-carburant-prix-essence-2026-economie-francaise-test-civique",
  titre: "Pénurie de carburant 2026 : comprendre l'économie française, la fiscalité et le rôle de l'État pour le test civique",
  titreSeo: "Pénurie de carburant 2026 : comprendre l'économie française, la fiscalité et le rôle de l'État pour le test civique",
  resume: "Prix de l'essence en hausse, pêcheurs bloqués, stations en pénurie : la crise du carburant 2026 décryptée à travers les 5 thématiques du test civique. Fiscalité, institutions, solidarité nationale et droits des consommateurs.",
  chapo: "La **flambée du prix du carburant** en mars 2026 touche tous les Français : files d'attente aux stations-service, pêcheurs de Boulogne-sur-Mer bloqués à quai, automobilistes exaspérés. Le gazole franchit la barre des **2 € le litre** dans de nombreuses régions. Mais derrière cette crise du quotidien se cache un sujet crucial pour toute personne en parcours de **naturalisation française** : **comprendre le fonctionnement économique de la France**, le rôle de l'État dans la régulation des prix, la fiscalité sur l'énergie et les mécanismes de solidarité nationale. Car oui, le **test civique de naturalisation** évalue votre connaissance de la vie en société française, et la crise du carburant en est une illustration parfaite. Comment l'État fixe-t-il les taxes sur l'essence ? Quels sont vos droits en tant que consommateur ? Comment fonctionne la solidarité nationale quand le pouvoir d'achat est menacé ? Autant de questions directement liées aux **5 thématiques officielles** de l'examen civique.",
  publieLe: "2026-03-27",
  modifieLe: "2026-03-27",
  minutes: 18,
  theme: "pénurie carburant 2026",
  motsCles: [
    "pénurie carburant 2026",
    "prix essence 2026",
    "hausse prix carburant france",
    "test civique naturalisation",
    "économie française test civique",
    "fiscalité carburant france",
    "TICPE taxe essence",
    "stations-service moins chères",
    "prix-carburants.gouv.fr",
    "solidarité nationale france",
    "pouvoir d'achat france 2026",
    "pêcheurs boulogne-sur-mer carburant",
    "détroit d'ormuz pétrole",
    "crise pétrolière 2026",
    "institutions françaises test civique",
    "test civique 2026 préparation",
    "examen civique naturalisation",
    "droits devoirs citoyens france",
    "thématiques officielles test civique",
    "vivre en france étranger",
  ],
  rubrique: "thematiques",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce",
  },
  blocs: [
    {
      type: "h2",
      texte: "Crise du carburant 2026 : pourquoi les prix explosent en France ?",
      id: "crise-carburant-2026-explications",
    },
    {
      type: "p",
      texte: "La hausse spectaculaire des prix à la pompe en mars 2026 résulte d'une conjonction de facteurs géopolitiques et économiques.",
    },
    { type: "p", texte: "**Les causes principales de la flambée :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Tensions au détroit d'Ormuz** : l'escalade entre les États-Unis et l'Iran menace le passage de 20 % du pétrole mondial ([source : Agence internationale de l'énergie](https://www.iea.org/))",
        "**Baril de Brent en forte hausse** : les marchés anticipent une perturbation prolongée de l'approvisionnement",
        "**Fiscalité française sur les carburants** : la TICPE (Taxe intérieure de consommation sur les produits énergétiques) représente environ **60 % du prix final** à la pompe",
        "**Dépréciation relative de l'euro** face au dollar, monnaie de référence pour le pétrole",
      ],
    },
    { type: "p", texte: "**Impact concret pour les Français :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le **gazole** dépasse les **2,00 €/litre** dans de nombreux départements",
        "Le **SP95** atteint des niveaux historiques",
        "Les **pêcheurs de Boulogne-sur-Mer** ne sortent plus en mer, le gazole maritime ayant doublé en quelques mois ([source : France 3 Hauts-de-France](https://france3-regions.francetvinfo.fr/hauts-de-france/))",
        "Les **transporteurs routiers** envisagent des actions de blocage",
      ],
    },
    { type: "p", texte: "**Pourquoi ce sujet concerne le test civique :**" },
    {
      type: "p",
      texte: "L'une des 5 thématiques officielles du test est « **Vivre dans la société française** ». Comprendre comment l'économie affecte la vie quotidienne, comment l'État intervient et quels droits protègent les citoyens fait partie des connaissances attendues.",
    },
    {
      type: "h2",
      texte: "Fiscalité et rôle de l'État : ce que le test civique attend de vous",
      id: "fiscalite-carburants-role-etat",
    },
    {
      type: "p",
      texte: "Le **test civique de naturalisation** évalue votre compréhension du fonctionnement de l'État français. La crise du carburant est un cas d'école pour comprendre la **fiscalité** et le **rôle régulateur de l'État**.",
    },
    { type: "p", texte: "**La structure du prix du carburant en France :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Prix du pétrole brut** : fixé par les marchés internationaux",
        "**Raffinage et distribution** : marge des entreprises pétrolières",
        "**TICPE** : taxe intérieure de consommation (~0,60 €/litre pour le gazole)",
        "**TVA** : 20 % appliquée sur le prix TTC (y compris la TICPE !)",
      ],
    },
    { type: "p", texte: "**Ce qu'il faut retenir pour le test civique :**" },
    {
      type: "tableau",
      entetes: ["Notion", "Ce qu'il faut savoir", "Thématique du test"],
      lignes: [
        [
          "**L'impôt finance les services publics**",
          "La TICPE rapporte ~30 milliards €/an, finançant routes, hôpitaux, écoles",
          "Droits et devoirs",
        ],
        [
          "**Le Parlement vote les lois fiscales**",
          "C'est l'Assemblée nationale + le Sénat qui décident du niveau des taxes",
          "Institutions",
        ],
        [
          "**Le gouvernement peut baisser temporairement les taxes**",
          "Remises exceptionnelles comme en 2022",
          "Vivre en société",
        ],
        [
          "**Le Président ne fixe pas les prix**",
          "Il propose, le Parlement légifère",
          "Institutions",
        ],
      ],
    },
    {
      type: "p",
      texte: "**Rappelez-vous** : au test civique, des questions de **mise en situation** peuvent porter sur la vie quotidienne. Comprendre pourquoi l'essence coûte cher, c'est comprendre comment fonctionne la République française.",
    },
    {
      type: "p",
      texte: "→ Source officielle : [Ministère de la Transition écologique, Prix des carburants](https://www.ecologie.gouv.fr/prix-des-carburants)",
    },
    {
      type: "h2",
      texte: "Solidarité nationale et pouvoir d'achat : un pilier de la République",
      id: "solidarite-nationale-pouvoir-achat",
    },
    {
      type: "p",
      texte: "La devise de la France est **« Liberté, Égalité, Fraternité »**. Le troisième terme, la **fraternité** : est directement lié à la **solidarité nationale**, un concept que vous devez maîtriser pour le test civique.",
    },
    { type: "p", texte: "**Comment la France protège le pouvoir d'achat :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Bouclier tarifaire** : plafonnement des prix de l'énergie décidé par le gouvernement",
        "**Chèque énergie** : aide financière pour les ménages modestes ([source : chequeenergie.gouv.fr](https://www.chequeenergie.gouv.fr/))",
        "**Indemnité inflation** : versée ponctuellement lors de hausses brutales",
        "**RSA, APL, prime d'activité** : aides sociales permanentes protégeant les plus vulnérables",
      ],
    },
    { type: "p", texte: "**Pourquoi c'est important pour votre naturalisation :**" },
    {
      type: "p",
      texte: "Le test civique comporte **11 questions sur les droits et devoirs** (dont 6 mises en situation). Des questions portent sur :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le **droit à la protection sociale** en France",
        "Le **devoir de payer ses impôts** (financer la solidarité)",
        "Le fonctionnement de la **Sécurité sociale**",
        "L'accès aux **services publics** (1 question spécifique sur « S'installer et résider en France »)",
      ],
    },
    { type: "p", texte: "**Exemple de question de mise en situation :**" },
    {
      type: "encadre",
      texte: "« Un voisin âgé n'a plus les moyens de chauffer son logement en raison de la hausse des prix de l'énergie. Que pouvez-vous faire ? »\n- a) Rien, c'est son problème\n- b) L'orienter vers les services sociaux de la mairie ou le CCAS\n- c) Appeler la police\n- d) Baisser le chauffage chez vous",
      ton: "bleu",
    },
    {
      type: "p",
      texte: "→ **Bonne réponse : b)** : La solidarité de proximité et l'orientation vers les dispositifs publics sont des valeurs républicaines fondamentales.",
    },
    {
      type: "h2",
      texte: "Trouver les stations les moins chères : vos droits de consommateur en France",
      id: "stations-moins-cheres-droits-consommateurs",
    },
    {
      type: "p",
      texte: "En pleine crise du carburant, savoir où trouver le meilleur prix est essentiel. Mais au-delà du réflexe pratique, c'est aussi une question de **droits du consommateur**, un sujet du test civique.",
    },
    { type: "p", texte: "**Outils officiels pour comparer les prix :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**prix-carburants.gouv.fr** : site officiel du gouvernement français répertoriant les prix en temps réel de toutes les stations-service ([source](https://www.prix-carburants.gouv.fr/))",
        "**Applications mobiles** : plusieurs apps agrègent les données pour trouver la station la moins chère près de chez vous",
      ],
    },
    { type: "p", texte: "**Vos droits de consommateur en France (testés au civique) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Droit à l'information** : les prix doivent être affichés clairement",
        "**Protection contre les pratiques commerciales trompeuses** par la DGCCRF ([source : economie.gouv.fr](https://www.economie.gouv.fr/dgccrf))",
        "**Liberté de concurrence** : les stations fixent leurs prix librement, d'où les écarts",
      ],
    },
    { type: "p", texte: "**Stations les moins chères : astuces :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les **hypermarchés** (Leclerc, Carrefour, Intermarché) proposent souvent les prix les plus bas",
        "Les **stations autoroutières** sont traditionnellement les plus chères (+20 à 30 centimes)",
        "Les **zones rurales** peuvent avoir des prix plus élevés en raison des coûts de livraison",
      ],
    },
    { type: "p", texte: "**Lien avec le test civique :**" },
    {
      type: "p",
      texte: "La question « **S'installer et résider en France** » dans la thématique « Vivre dans la société française » peut interroger votre connaissance des sites officiels et services publics numériques. Connaître prix-carburants.gouv.fr, c'est connaître les outils mis à disposition par la République.",
    },
    {
      type: "h2",
      texte: "Que fait le gouvernement face à la crise ? Les institutions en action",
      id: "gouvernement-crise-energetique",
    },
    {
      type: "p",
      texte: "Comprendre la **réponse institutionnelle** à une crise comme celle du carburant est fondamental pour le test civique. Voici comment les institutions françaises réagissent :",
    },
    { type: "p", texte: "**Circuit décisionnel lors d'une crise énergétique :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Le Président de la République** peut réunir un conseil de défense ou un conseil des ministres exceptionnel",
        "**Le Premier ministre** coordonne l'action gouvernementale",
        "**Le ministre de l'Économie** propose des mesures (baisse de taxes, aides ciblées)",
        "**L'Assemblée nationale** vote les lois de finances rectificatives si nécessaire",
        "**Le Sénat** examine et amende le texte",
        "**Le Conseil constitutionnel** peut être saisi pour vérifier la conformité des mesures",
      ],
    },
    { type: "p", texte: "**Ce circuit est exactement ce que le test civique évalue :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**6 questions sur le système institutionnel et politique**",
        "« Qui vote les lois ? » → Le **Parlement** (Assemblée + Sénat)",
        "« Qui nomme le Premier ministre ? » → Le **Président de la République**",
        "« Quel est le rôle du Parlement européen ? » → Il co-légifère au niveau européen",
      ],
    },
    { type: "p", texte: "**L'Union européenne et l'énergie :**" },
    {
      type: "p",
      texte: "Le test civique comporte **1 question sur les institutions européennes**. Sachez que l'UE joue un rôle majeur dans la politique énergétique :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "La **Commission européenne** propose des régulations sur les marchés de l'énergie",
        "Le **Parlement européen** et le **Conseil de l'UE** votent les directives énergétiques",
        "La France participe aux décisions via le **Conseil européen** (réunion des chefs d'État)",
      ],
    },
    {
      type: "p",
      texte: "→ Source : [Vie publique, Les institutions de la Ve République](https://www.vie-publique.fr/fiches/les-institutions-de-la-ve-republique)",
    },
    {
      type: "h2",
      texte: "Les crises pétrolières dans l'histoire de France : un rappel utile pour le test",
      id: "histoire-crises-petrolieres-france",
    },
    {
      type: "p",
      texte: "L'histoire de France : **8 questions au test civique** : est marquée par des crises économiques majeures liées au pétrole.",
    },
    { type: "p", texte: "**Les grandes crises énergétiques en France :**" },
    {
      type: "tableau",
      entetes: ["Année", "Événement", "Conséquence"],
      lignes: [
        [
          "**1973**",
          "Choc pétrolier (guerre du Kippour)",
          "Fin des Trente Glorieuses, début de l'austérité",
        ],
        [
          "**1979**",
          "Deuxième choc pétrolier (révolution iranienne)",
          "Inflation galopante, chômage de masse",
        ],
        ["**2008**", "Baril à 147 $", "Crise financière mondiale, récession"],
        ["**2022**", "Guerre en Ukraine", "Flambée gaz + pétrole, bouclier tarifaire"],
        ["**2026**", "Tensions Iran-USA, détroit d'Ormuz", "Pénurie et hausse brutale à la pompe"],
      ],
    },
    { type: "p", texte: "**Ce qu'il faut retenir pour le test civique :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le **premier choc pétrolier (1973)** a mis fin à la période de croissance appelée les « **Trente Glorieuses** » (1945-1973)",
        "La France a développé son **programme nucléaire civil** pour réduire sa dépendance au pétrole (75 % de l'électricité française est d'origine nucléaire)",
        "Chaque crise a renforcé les **mécanismes de solidarité nationale** (allocations, aides sociales)",
      ],
    },
    { type: "p", texte: "**Lien avec la thématique « Histoire, géographie et culture » :**" },
    {
      type: "p",
      texte: "Cette thématique représente **8 questions** au test civique, portant sur les « grandes périodes et personnages historiques » et les « territoires ». Comprendre la crise actuelle à la lumière de l'histoire française, c'est exactement le type de connaissance valorisée.",
    },
    {
      type: "p",
      texte: "→ Source : [INSEE, Les grandes dates de l'économie française](https://www.insee.fr/fr/information/2569926)",
    },
    {
      type: "h2",
      texte: "Comment utiliser l'actualité pour préparer votre test civique",
      id: "preparer-test-civique-actualite",
    },
    {
      type: "p",
      texte: "La crise du carburant de 2026 est un excellent support de révision pour le test civique. Voici comment transformer l'actualité en outil de préparation.",
    },
    { type: "p", texte: "**Méthode : relier chaque fait d'actualité aux 5 thématiques du test**" },
    { type: "p", texte: "**1. Principes et valeurs de la République (11 questions)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "La **fraternité** → solidarité face à la hausse des prix",
        "La **liberté** → droit de manifester (gilets jaunes, blocages routiers)",
        "L'**égalité** → l'État doit protéger tous les citoyens, pas seulement les plus aisés",
      ],
    },
    { type: "p", texte: "**2. Système institutionnel et politique (6 questions)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Qui décide des baisses de taxes ? → Le **Parlement**",
        "Qui gère la crise au quotidien ? → Le **gouvernement** (Premier ministre + ministres)",
        "Quel rôle joue l'UE ? → politique énergétique commune",
      ],
    },
    { type: "p", texte: "**3. Droits et devoirs (11 questions)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Droit** à la protection sociale",
        "**Devoir** de payer les impôts (y compris les taxes sur le carburant)",
        "**Droit** de manifester pacifiquement",
      ],
    },
    { type: "p", texte: "**4. Histoire, géographie et culture (8 questions)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les crises pétrolières passées",
        "La géographie énergétique de la France (centrales nucléaires, raffineries)",
      ],
    },
    { type: "p", texte: "**5. Vivre dans la société française (4 questions)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Accès aux services publics",
        "Se déplacer et résider en France",
        "Budget et vie quotidienne",
      ],
    },
    {
      type: "p",
      texte: "**Le meilleur conseil :** Entraînez-vous sur [LeTestCivique.fr](/dashboard) avec des quiz interactifs couvrant les 5 thématiques. Chaque question d'actualité peut être reliée à une thématique du test !",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La **crise du carburant de 2026** n'est pas qu'un problème de portefeuille, c'est une leçon vivante sur le fonctionnement de la République française. **Fiscalité, institutions, solidarité nationale, droits des consommateurs, histoire économique** : tous ces sujets sont directement évalués au **test civique de naturalisation**. En comprenant pourquoi le carburant coûte si cher et comment l'État réagit, vous révisez sans même vous en rendre compte les **5 thématiques officielles** de l'examen. Pour maximiser vos chances de réussir du premier coup (32/40 minimum), **entraînez-vous dès maintenant** sur [LeTestCivique.fr](/dashboard) : notre plateforme propose des quiz interactifs actualisés, incluant des mises en situation inspirées de l'actualité.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Le test civique pose-t-il des questions sur l'actualité économique ?",
      reponse: "Pas directement sur l'actualité, mais les mises en situation (12 questions sur 40) s'inspirent de problématiques réelles comme le pouvoir d'achat, l'accès aux services publics et la solidarité nationale.",
    },
    {
      question: "Combien coûte le test civique en 2026 ?",
      reponse: "Le test civique coûte 90 € en 2026. En cas d'échec, il faut repayer 90 € pour chaque nouvelle tentative.",
    },
    {
      question: "Quelles sont les 5 thématiques du test civique ?",
      reponse: "Les 5 thématiques sont : 1) Principes et valeurs de la République, 2) Système institutionnel et politique, 3) Droits et devoirs, 4) Histoire, géographie et culture, 5) Vivre dans la société française.",
    },
    {
      question: "La hausse du carburant peut-elle affecter le coût de la naturalisation ?",
      reponse: "Indirectement oui : les frais de déplacement vers le centre d'examen augmentent. Le test civique lui-même reste à 90 €, mais pensez à anticiper les frais de transport.",
    },
    {
      question: "Comment trouver la station-service la moins chère ?",
      reponse: "Utilisez le site officiel prix-carburants.gouv.fr. C'est un service public gratuit mis en place par le gouvernement français.",
    },
    {
      question: "Pourquoi les taxes sur l'essence sont-elles si élevées en France ?",
      reponse: "La TICPE et la TVA représentent environ 60 % du prix à la pompe. Ces recettes financent les services publics (routes, hôpitaux, écoles) et la transition écologique. C'est un exemple concret du devoir fiscal, un sujet du test civique.",
    },
    {
      question: "Où s'entraîner au test civique en ligne ?",
      reponse: "Sur LeTestCivique.fr, vous pouvez accéder à des quiz interactifs couvrant les 5 thématiques officielles avec des corrections détaillées.",
    },
    {
      question: "Faut-il suivre l'actualité pour réussir le test civique ?",
      reponse: "Ce n'est pas obligatoire, mais suivre l'actualité aide à comprendre le fonctionnement des institutions et de la société française. Les mises en situation du test sont plus faciles à résoudre quand on comprend le contexte réel.",
    },
  ],
  sources: [
    {
      titre: "Prix des carburants en France : Site officiel du gouvernement",
      url: "https://www.prix-carburants.gouv.fr/",
      type: "officiel",
      description: "Comparateur officiel des prix des carburants dans toutes les stations-service de France.",
    },
    {
      titre: "Agence internationale de l'énergie (AIE) : Marché pétrolier mondial",
      url: "https://www.iea.org/topics/oil",
      type: "article",
      description: "Analyses et données sur le marché mondial du pétrole et les tensions géopolitiques.",
    },
    {
      titre: "Vie publique : Les institutions de la Ve République",
      url: "https://www.vie-publique.fr/fiches/les-institutions-de-la-ve-republique",
      type: "officiel",
      description: "Fiches pédagogiques sur le fonctionnement des institutions françaises.",
    },
    {
      titre: "INSEE : L'économie française",
      url: "https://www.insee.fr/fr/information/2569926",
      type: "officiel",
      description: "Données et analyses sur l'économie française et son histoire.",
    },
    {
      titre: "Ministère de la Transition écologique : Énergie",
      url: "https://www.ecologie.gouv.fr/politiques-publiques/energie",
      type: "officiel",
      description: "Politique énergétique française, fiscalité et transition écologique.",
    },
    {
      titre: "DGCCRF : Droits des consommateurs",
      url: "https://www.economie.gouv.fr/dgccrf",
      type: "officiel",
      description: "Protection des consommateurs et répression des fraudes en France.",
    },
    {
      titre: "Chèque énergie : Site officiel",
      url: "https://www.chequeenergie.gouv.fr/",
      type: "officiel",
      description: "Aide au paiement des factures d'énergie pour les ménages modestes.",
    },
  ],
  aLireAussi: [
    {
      slug: "institutions-francaises-president-assemblee-senat",
      ancre: "Rôle du gouvernement dans l'économie",
    },
    {
      slug: "union-europeenne-france-institutions-citoyennete",
      ancre: "Politique énergétique européenne",
    },
    {
      slug: "declaration-impots-etranger-france-2026-obligations-seuils-risques",
      ancre: "Fiscalité et économie",
    },
  ],
};

export default article;
