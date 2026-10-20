import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-naturalisation-passeport-talent-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/naturalisation-francaise-2026-delais-conditions-pieges-dossier-complet`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "naturalisation-francaise-2026-delais-conditions-pieges-dossier-complet",
  titre: "Naturalisation française 2026 : délais réels par préfecture, conditions, dossier complet et 7 pièges à éviter",
  titreSeo: "Naturalisation française 2026 : délais réels par préfecture, conditions, dossier complet et 7 pièges à éviter",
  resume: "Guide complet naturalisation 2026 : délais réels (6 à 28 mois selon préfecture), nouvelles conditions loi 2024 (B1, test civique 80%), checklist des documents, 7 motifs de refus fréquents et comment rédiger un exposé des motifs convaincant.",
  chapo: "Obtenir la nationalité française est l'aboutissement d'un parcours d'intégration. Mais en 2026, entre la nouvelle loi immigration qui durcit les conditions, les délais qui s'allongent dans certaines préfectures et les dossiers souvent refusés pour des raisons évitables, beaucoup de candidats se retrouvent perdus. Ce guide vous donne toutes les informations concrètes : les 5 conditions à remplir, les délais réels par ville, la liste exacte des documents à fournir, les 7 motifs de refus les plus fréquents et les clés pour maximiser vos chances de succès dès le premier dépôt.",
  publieLe: "2026-04-05",
  modifieLe: "2026-04-05",
  minutes: 22,
  theme: "naturalisation française 2026",
  motsCles: [
    "naturalisation française 2026",
    "conditions naturalisation France 2026",
    "délai naturalisation préfecture 2026",
    "dossier naturalisation documents",
    "refus naturalisation motifs",
    "naturalisation nouvelle loi immigration",
    "exposé des motifs naturalisation",
    "test civique naturalisation",
    "niveau B1 naturalisation",
    "cérémonie naturalisation France",
    "nationalité française demarches 2026",
    "naturalisation préfecture paris lyon marseille délai",
  ],
  rubrique: "cadre-legal",
  auteur: "Brian B",
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
      type: "h2",
      texte: "Les 5 conditions pour être naturalisé en France en 2026",
      id: "conditions-naturalisation",
    },
    {
      type: "p",
      texte: "Depuis la **loi immigration du 26 janvier 2024** et le **décret 2025-647**, les conditions de naturalisation sont plus strictes. Voici les 5 critères cumulatifs à remplir absolument.",
    },
    { type: "h3", texte: "Vue d'ensemble des conditions" },
    {
      type: "tableau",
      entetes: ["Condition", "Exigence 2026", "Remarques"],
      lignes: [
        [
          "Résidence en France",
          "5 ans minimum (résidence stable et régulière)",
          "Réduit à 2 ans si diplôme français Bac+5, service militaire ou mérite particulier",
        ],
        [
          "Niveau de français",
          "B1 minimum (CECRL)",
          "DELF B1, TCF, TEF ou diplôme français. Nouveauté 2024 : niveau B1 obligatoirement certifié",
        ],
        [
          "Test civique",
          "Réussir à 80% (32/40 questions)",
          "Conforme au décret 2025-647 : préparez-vous sur TestCiviqueFrance.fr",
        ],
        [
          "Intégration républicaine",
          "Adhérer aux valeurs de la République",
          "Évaluée lors de l'entretien préfectoral et via CIR/OFII",
        ],
        [
          "Absence de condamnations",
          "Casier judiciaire vierge (B2)",
          "Condamnations supérieures à 6 mois ferme = refus automatique",
        ],
      ],
    },
    { type: "h3", texte: "Cas particuliers avec délai réduit à 2 ans" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Diplôme national de niveau Bac+5 (master, ingénieur, doctorat) délivré par un établissement français",
        "Service dans les forces armées françaises",
        "Contribution exceptionnelle dans un domaine scientifique, culturel, sportif ou économique",
        "Réfugiés reconnus par l'OFPRA (délai non applicable dans certains cas)",
      ],
    },
    { type: "h3", texte: "Lien avec le test civique" },
    {
      type: "p",
      texte: "Le test civique est désormais une étape **incontournable** pour la naturalisation. Il évalue vos connaissances sur les valeurs de la République, les institutions françaises et les droits et devoirs du citoyen. En dessous de 80% (32/40), votre dossier sera refusé automatiquement.",
    },
    {
      type: "h2",
      texte: "Délais réels par préfecture en 2026 : le tableau complet",
      id: "delais-prefecture",
    },
    {
      type: "p",
      texte: "L'un des sujets qui angoisse le plus les candidats à la naturalisation : **combien de temps ça prend vraiment ?** Les délais officiels sont rarement respectés. Voici les données constatées en 2026.",
    },
    { type: "h3", texte: "Délais moyens constatés en 2026 (de la remise du dossier à la décision)" },
    {
      type: "tableau",
      entetes: ["Préfecture / Zone", "Délai moyen 2026", "Tendance"],
      lignes: [
        ["Paris (75)", "18 à 24 mois", "Stable (délai structurellement long)"],
        ["Seine-Saint-Denis (93)", "20 à 28 mois", "En hausse : fort volume de dossiers"],
        ["Val-de-Marne (94)", "16 à 22 mois", "Stable"],
        ["Lyon / Rhône (69)", "12 à 18 mois", "En légère amélioration"],
        ["Marseille / Bouches-du-Rhône (13)", "15 à 22 mois", "Stable"],
        ["Toulouse / Haute-Garonne (31)", "10 à 14 mois", "Parmi les plus rapides"],
        ["Bordeaux / Gironde (33)", "10 à 16 mois", "Stable"],
        ["Lille / Nord (59)", "14 à 20 mois", "En légère hausse"],
        ["Nantes / Loire-Atlantique (44)", "8 à 12 mois", "Un des meilleurs délais nationaux"],
        ["Strasbourg / Bas-Rhin (67)", "10 à 15 mois", "Stable"],
        ["Nice / Alpes-Maritimes (06)", "12 à 18 mois", "Délais variables selon période"],
        ["Départements ruraux (hors IDF)", "6 à 10 mois", "Souvent meilleurs délais"],
      ],
    },
    { type: "h3", texte: "Les 3 phases du traitement de votre dossier" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Phase 1 : Instruction préfectorale** (3 à 9 mois) : vérification de la complétude du dossier, enquête de moralité, convocation pour entretien",
        "**Phase 2 : Contrôle central** (3 à 8 mois) : transmission au ministère de l'Intérieur ou à la sous-direction de l'accès à la nationalité française (SDANF) pour décision",
        "**Phase 3 : Notification et cérémonie** (1 à 3 mois) : vous recevez le décret, puis êtes convoqué à la cérémonie",
      ],
    },
    {
      type: "p",
      texte: "**Astuce :** Si vous n'avez aucune nouvelle après 18 mois, vous pouvez envoyer un courrier recommandé à la préfecture pour demander un point sur l'avancement de votre dossier. Vous pouvez également saisir le médiateur national de la naturalisation.",
    },
    { type: "h2", texte: "La checklist complète des documents à fournir", id: "dossier-documents" },
    {
      type: "p",
      texte: "Un dossier incomplet est la première cause de rejet ou de délai supplémentaire. Voici la liste exhaustive des pièces à préparer.",
    },
    { type: "h3", texte: "Documents d'identité et d'état civil" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Formulaire CERFA n°12753*05 (demande de naturalisation), dûment rempli et signé",
        "Copie intégrale de l'acte de naissance (moins de 3 mois), traduite et apostillée si besoin",
        "Copie de votre titre de séjour en cours de validité (recto-verso)",
        "4 photos d'identité récentes (moins de 6 mois, fond blanc, normes ICAO)",
        "Extrait du casier judiciaire de votre pays d'origine (B2 ou équivalent), traduit",
        "Si marié : acte de mariage intégral (et livret de famille si enfants)",
      ],
    },
    { type: "h3", texte: "Preuves de résidence (5 ans)" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Tous vos titres de séjour successifs (ou justificatifs d'entrée régulière)",
        "Justificatifs de domicile sur toute la période (quittances de loyer, factures EDF…)",
        "Si changements d'adresse : justificatifs pour chaque adresse",
      ],
    },
    { type: "h3", texte: "Preuves de ressources et d'intégration professionnelle" },
    {
      type: "liste",
      style: "puces",
      items: [
        "3 derniers avis d'imposition (ou déclarations de revenus)",
        "3 derniers bulletins de salaire ou justificatifs de revenus",
        "Contrat de travail ou extrait Kbis si indépendant",
      ],
    },
    { type: "h3", texte: "Preuves d'intégration et de connaissances" },
    {
      type: "tableau",
      entetes: ["Preuve", "Document accepté"],
      lignes: [
        [
          "Niveau de français B1",
          "DELF B1, TCF niveau B1, TEF, ou diplôme français (Brevet, Bac, Titre professionnel...)",
        ],
        ["Test civique", "Attestation de réussite au test civique officiel (score ≥ 80%)"],
        [
          "Intégration républicaine",
          "Attestation OFII (CIR), relevés des formations civiques suivies",
        ],
      ],
    },
    { type: "h3", texte: "L'exposé des motifs (pièce décisive)" },
    {
      type: "p",
      texte: "Lettre manuscrite ou dactylographiée de 1 à 2 pages où vous exprimez **pourquoi vous souhaitez devenir français** : votre parcours, votre attachement aux valeurs de la République, vos projets en France, votre intégration. C'est la pièce que l'agent de préfecture lit en premier et qui conditionne souvent l'issue de l'entretien.",
    },
    {
      type: "h2",
      texte: "Les 7 motifs de refus les plus fréquents (et comment les éviter)",
      id: "motifs-refus",
    },
    {
      type: "p",
      texte: "Connaître les raisons de refus les plus fréquentes vous permet d'anticiper et de consolider votre dossier avant le dépôt.",
    },
    { type: "h3", texte: "Les 7 raisons de refus les plus courantes en 2026" },
    {
      type: "tableau",
      entetes: ["Motif", "Explication", "Comment l'éviter"],
      lignes: [
        [
          "1. Dossier incomplet",
          "Pièce manquante ou périmée à la date du dépôt",
          "Vérifier chaque pièce 1 semaine avant le dépôt, faire certifier les traductions",
        ],
        [
          "2. Niveau de français insuffisant",
          "Pas de certification B1 valide ou certification expirée (plus de 2 ans)",
          "Passer le DELF B1 ou TCF avant de déposer le dossier",
        ],
        [
          "3. Score test civique inférieur à 80%",
          "Attestation manquante ou score insuffisant",
          "Se préparer sur TestCiviqueFrance.fr, viser 35+/40 pour avoir de la marge",
        ],
        [
          "4. Continuité de résidence non prouvée",
          "Trous dans les preuves de domicile ou absences longues",
          "Conserver tous les justificatifs d'adresse depuis 5 ans, signaler les séjours à l'étranger",
        ],
        [
          "5. Condamnation pénale",
          "Condamnation signalée par l'enquête de moralité",
          "Vérifier son casier judiciaire B3 avant le dépôt, consulter un avocat si besoin",
        ],
        [
          "6. Défaut d'assimilation",
          "Réponses insuffisantes lors de l'entretien sur les valeurs républicaines",
          "Préparer l'entretien, connaître les institutions, la devise, les droits et devoirs",
        ],
        [
          "7. Revenus insuffisants",
          "Ressources considérées comme instables ou insuffisantes",
          "Attendre une période de stabilité professionnelle (CDI, 3 ans de revenus constants)",
        ],
      ],
    },
    {
      type: "p",
      texte: "**Bon à savoir :** En cas de rejet, vous pouvez déposer un recours gracieux auprès du préfet dans les 2 mois, puis un recours contentieux devant le tribunal administratif si nécessaire.",
    },
    {
      type: "h2",
      texte: "Test civique et niveau B1 : les deux nouveaux prérequis expliqués",
      id: "test-civique-b1",
    },
    {
      type: "p",
      texte: "Depuis la réforme de 2024-2025, le test civique et la certification B1 sont devenus des **conditions sine qua non** pour la naturalisation. Voici ce qu'il faut savoir concrètement.",
    },
    { type: "h3", texte: "Le test civique : comment ça fonctionne" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Format :** 40 questions QCM, 45 minutes, 5 thématiques officielles",
        "**Seuil de réussite :** 80% minimum, soit 32 bonnes réponses sur 40",
        "**Où le passer :** Centres agréés OFII, votre préfecture vous indiquera le centre le plus proche",
        "**Validité de l'attestation :** Renseignez-vous auprès de votre préfecture pour la durée exacte de validité",
      ],
    },
    { type: "h3", texte: "Les 5 thématiques du test civique" },
    {
      type: "tableau",
      entetes: ["Thématique", "Nombre de questions", "Exemples de sujets"],
      lignes: [
        [
          "Principes et valeurs de la République",
          "11",
          "Laïcité, liberté, égalité, fraternité, devise, drapeau",
        ],
        [
          "Système institutionnel et politique",
          "6",
          "Président, Assemblée nationale, Sénat, Conseil d'État",
        ],
        [
          "Droits et devoirs",
          "11",
          "Déclaration des droits, droits sociaux, impôts, service civique",
        ],
        [
          "Histoire, géographie et culture",
          "8",
          "Révolution française, régions, patrimoine UNESCO",
        ],
        ["Vivre dans la société française", "4", "École, santé, logement, vie associative"],
      ],
    },
    { type: "h3", texte: "Le niveau B1 de français : ce qui est accepté" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**DELF B1** (Alliance Française, CIEP) : la certification la plus reconnue",
        "**TCF (Test de Connaissance du Français)** niveau B1",
        "**TEF (Test d'Évaluation du Français)** équivalent B1",
        "**Diplôme scolaire français** : Brevet des collèges, Baccalauréat, BTS, Licence dispense du test de langue",
      ],
    },
    {
      type: "p",
      texte: "*Attention : un simple cours de langue ou une attestation d'employeur ne suffit pas, seule la certification officielle est acceptée.*",
    },
    {
      type: "h2",
      texte: "Après la décision : cérémonie, CNI et passeport français",
      id: "apres-naturalisation",
    },
    {
      type: "p",
      texte: "Votre naturalisation est accordée ! Voici ce qui se passe ensuite, étape par étape.",
    },
    { type: "h3", texte: "Les étapes après l'accord de naturalisation" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Réception du décret :** La naturalisation est officialisée par décret publié au Journal officiel. Vous en recevez une copie.",
        "**Cérémonie d'accueil dans la citoyenneté française :** Obligatoire et organisée par la préfecture ou la mairie. Vous prononcez solennellement votre attachement aux valeurs de la République. Délai habituel : 1 à 3 mois après le décret.",
        "**Demande de Carte Nationale d'Identité (CNI) :** Dès le lendemain de la cérémonie, vous pouvez déposer votre demande de CNI en mairie.",
        "**Demande de passeport français :** Simultanément à la CNI, vous pouvez demander un passeport biométrique.",
        "**Inscription sur les listes électorales :** Vous pouvez désormais voter aux élections françaises et européennes.",
      ],
    },
    { type: "h3", texte: "Coûts à prévoir" },
    {
      type: "tableau",
      entetes: ["Démarche", "Coût"],
      lignes: [
        ["Dossier de naturalisation", "Gratuit"],
        ["Traductions/apostilles de documents", "50 à 200 € selon le pays et le nombre de pièces"],
        ["Certification DELF B1 ou TCF", "100 à 150 €"],
        ["Test civique officiel", "Environ 50 € dans les centres agréés"],
        ["Carte Nationale d'Identité", "Gratuite"],
        ["Passeport français", "86 € (adulte)"],
      ],
    },
    {
      type: "h2",
      texte: "FAQ : Vos questions fréquentes sur la naturalisation 2026",
      id: "faq-naturalisation",
    },
    { type: "h3", texte: "Peut-on conserver sa nationalité d'origine en se naturalisant français ?" },
    {
      type: "p",
      texte: "Dans la majority des cas, oui. La France accepte la double nationalité sans restriction. Cependant, votre pays d'origine peut exiger que vous renonciez à sa nationalité si vous devenez citoyen d'un autre pays, vérifiez la législation de votre pays natal.",
    },
    { type: "h3", texte: "Peut-on déposer une demande de naturalisation si on est en CDD ?" },
    {
      type: "p",
      texte: "Oui, un CDD est accepté mais la préfecture analysera la stabilité de vos revenus sur les 3 dernières années. Un CDI récent ou 5+ ans d'activité régulière sont des éléments très favorables.",
    },
    { type: "h3", texte: "Comment savoir si mon dossier avance ?" },
    {
      type: "p",
      texte: "Vous pouvez appeler la sous-direction de l'accès à la nationalité française (SDANF) au numéro dédié à votre préfecture, ou envoyer un courrier recommandé pour demander un état d'avancement. En l'absence de réponse au-delà de 18 mois, un recours pour excès de pouvoir est possible.",
    },
    {
      type: "h3",
      texte: "Le test civique est-il valable pour la naturalisation et le titre de séjour ?",
    },
    {
      type: "p",
      texte: "Oui, la même attestation de réussite au test civique peut être utilisée pour plusieurs démarches : naturalisation, carte de séjour pluriannuelle, carte de résident. Conservez-la précieusement.",
    },
    {
      type: "h3",
      texte: "Peut-on être naturalisé sans avoir passé le Contrat d'Intégration Républicaine (CIR) ?",
    },
    {
      type: "p",
      texte: "Si vous n'êtes pas passé par le CIR (personnes entrées en France avant sa généralisation, ou entrées autrement que par le OFII), d'autres preuves d'intégration sont acceptées : ancienneté en France, emploi stable, participation à la vie associative, bénévolat, etc.",
    },
    {
      type: "h3",
      texte: "Que se passe-t-il si je suis en cours de renouvellement de titre de séjour lors du dépôt ?",
    },
    {
      type: "p",
      texte: "Vous pouvez déposer votre dossier avec votre récépissé de renouvellement. Cependant, la préfecture attendra souvent que votre titre soit renouvelé avant d'instruire définitivement. Il vaut mieux attendre la délivrance du nouveau titre pour déposer.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La naturalisation française est un parcours long mais accessible à qui s'y prépare sérieusement. Les nouvelles conditions de 2024, test civique à 80%, niveau B1 certifié, entretien d'assimilation, sont contraignantes mais prévisibles. Constituez votre dossier sans lacune, rédigez un exposé des motifs sincère et préparez-vous au test civique dès maintenant sur TestCiviqueFrance.fr. La nationalité française est à portée de main pour qui met toutes les chances de son côté.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Combien de temps faut-il attendre pour être naturalisé en France en 2026 ?",
      reponse: "Les délais varient de 6 à 28 mois selon la préfecture. Nantes et Toulouse traitent les dossiers en 8-14 mois. Paris et la Seine-Saint-Denis peuvent dépasser 24 mois. Il faut compter en moyenne 12 à 18 mois sur l'ensemble du territoire.",
    },
    {
      question: "Quel score faut-il avoir au test civique pour la naturalisation ?",
      reponse: "Vous devez obtenir au minimum 80% soit 32 bonnes réponses sur 40. Le test civique couvre 5 thématiques officielles. Préparez-vous sur TestCiviqueFrance.fr pour maximiser vos chances.",
    },
    {
      question: "Quelle certification de français est acceptée pour la naturalisation en 2026 ?",
      reponse: "Le niveau B1 minimum est requis. Les certifications acceptées sont : DELF B1, TCF niveau B1, TEF équivalent B1. Un diplôme scolaire français (Brevet, Bac et au-delà) dispense de la certification.",
    },
    {
      question: "Peut-on garder sa nationalité d'origine après naturalisation française ?",
      reponse: "Oui, la France autorise la double nationalité sans restriction. Mais votre pays d'origine peut avoir des règles différentes, vérifiez auprès de votre consulat.",
    },
    {
      question: "Peut-on être recalé à l'entretien de naturalisation ?",
      reponse: "Oui. L'entretien évalue votre intégration et votre connaissance des valeurs républicaines. Des réponses imprécises sur les institutions, la laïcité ou les droits et devoirs peuvent entraîner un avis défavorable. Préparez-vous avec les thématiques du test civique.",
    },
    {
      question: "Comment accélérer sa demande de naturalisation ?",
      reponse: "Quatre leviers : 1) Déposer un dossier parfait dès le premier dépôt (zéro pièce manquante). 2) Choisir si possible une préfecture moins engorgée. 3) Réussir le test civique avec un score élevé. 4) Rédiger un exposé des motifs sincère et détaillé.",
    },
  ],
  sources: [
    {
      titre: "Conditions de la naturalisation : Service-Public.fr",
      url: "https://www.service-public.fr/particuliers/vosdroits/F2213",
      type: "officiel",
      description: "Conditions officielles pour demander la naturalisation française",
    },
  ],
};

export default article;
