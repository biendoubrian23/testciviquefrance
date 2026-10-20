import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-ai-seo.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/contrat-integration-republicaine-cir-2026-formation-civique`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "contrat-integration-republicaine-cir-2026-formation-civique",
  titre: "Contrat d'Intégration Républicaine (CIR) 2026 : formation civique, obligations et lien avec le test civique",
  titreSeo: "Contrat d'Intégration Républicaine (CIR) 2026 : formation civique, obligations et lien avec le test civique",
  resume: "Guide complet sur le CIR : formation civique de 4 jours, cours de français OFII, obligations légales et lien avec le test civique de naturalisation. Tout ce que vous devez savoir pour votre parcours d'intégration en France.",
  chapo: "Le **Contrat d'Intégration Républicaine (CIR)** est le premier engagement officiel que signe tout étranger arrivant légalement en France pour un séjour durable. Instauré en 2016 et renforcé par la **loi immigration 2024**, le CIR est bien plus qu'une formalité administrative : c'est le **socle de votre parcours d'intégration** en France. Ce guide complet vous explique tout sur le CIR en 2026 : son contenu, les **formations civiques obligatoires**, le lien avec le **test civique de naturalisation**, et les conséquences en cas de non-respect. Que vous veniez d'obtenir votre premier visa long séjour ou que vous prépariez votre demande de carte de séjour pluriannuelle, comprendre le CIR est essentiel.",
  publieLe: "2026-03-09",
  modifieLe: "2026-03-09",
  minutes: 22,
  theme: "contrat intégration républicaine",
  motsCles: [
    "contrat intégration républicaine",
    "CIR",
    "CIR 2026",
    "contrat intégration républicaine 2026",
    "formation civique",
    "formation civique obligatoire",
    "formation civique OFII",
    "OFII formation",
    "OFII contrat intégration",
    "Office Français Immigration Intégration",
    "parcours intégration france",
    "intégration républicaine france",
    "cours de français OFII",
    "cours français gratuits immigration",
    "niveau français A1 A2 B1",
    "test linguistique OFII",
    "test civique naturalisation",
    "test civique carte séjour",
    "loi immigration 2024",
    "décret 2025-647",
    "CESEDA",
    "carte séjour pluriannuelle",
    "carte résident 10 ans",
    "naturalisation française",
    "visa long séjour VLS-TS",
    "renouvellement titre séjour",
    "valeurs république française",
    "laïcité france",
    "droits devoirs france",
    "regroupement familial",
    "conjoint français titre séjour",
    "préparation test civique",
    "LeTestCivique.fr",
    "examen civique QCM 40 questions",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070",
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
      texte: "Qu'est-ce que le Contrat d'Intégration Républicaine (CIR) ?",
      id: "definition-cir",
    },
    {
      type: "p",
      texte: "Le **Contrat d'Intégration Républicaine** est un contrat signé entre l'État français (représenté par l'**OFII, Office Français de l'Immigration et de l'Intégration**) et tout étranger admis pour la première fois au séjour en France et souhaitant s'y installer durablement.",
    },
    { type: "p", texte: "**Cadre juridique du CIR :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Instauré par la **loi du 7 mars 2016** relative au droit des étrangers",
        "Codifié dans le **CESEDA (Code de l'entrée et du séjour des étrangers et du droit d'asile)**, articles L.413-1 à L.413-7",
        "Renforcé par la **loi n° 2024-42 du 26 janvier 2024** pour contrôler l'immigration et améliorer l'intégration",
        "Précisé par le **décret n° 2025-647 du 15 juillet 2025** pour le volet test civique",
      ],
    },
    { type: "p", texte: "**Qui doit signer le CIR ?**" },
    {
      type: "p",
      texte: "Tout étranger non-européen admis au séjour en France pour la première fois et souhaitant s'y maintenir de façon durable. Cela inclut :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les bénéficiaires d'un **visa long séjour (VLS-TS)**",
        "Les demandeurs de **carte de séjour vie privée et familiale**",
        "Les bénéficiaires du **regroupement familial**",
        "Les **conjoints de Français**",
        "Les **réfugiés et bénéficiaires de la protection subsidiaire**",
      ],
    },
    { type: "p", texte: "**Qui est dispensé du CIR ?**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les étrangers ayant séjourné **au moins 3 ans en France avec un titre de séjour** qui les dispensait du CIR",
        "Les titulaires d'un **visa de court séjour** (tourisme, affaires)",
        "Les ressortissants de l'**Union européenne** et de l'**Espace économique européen**",
      ],
    },
    { type: "h2", texte: "Que contient le Contrat d'Intégration Républicaine ?", id: "contenu-cir" },
    {
      type: "p",
      texte: "Le CIR comporte **4 volets principaux** que le signataire s'engage à respecter et à suivre :",
    },
    { type: "p", texte: "**1. La formation civique (obligatoire)**" },
    {
      type: "p",
      texte: "C'est le cœur du CIR. Elle comprend **4 jours de formation** (32 heures) répartis en modules :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Module 1 : Principes et valeurs de la République française** : laïcité, égalité femmes-hommes, liberté, fraternité, démocratie",
        "**Module 2 : Vivre et accéder à l'emploi en France** : système de santé, éducation, logement, droits sociaux, recherche d'emploi",
        "**Module 3 : Droits et devoirs en France** : droit de vote, obligation fiscale, respect des lois, devoir scolaire",
        "**Module 4 : Vie quotidienne et société française** : institutions locales, démarches administratives, culture et patrimoine",
      ],
    },
    { type: "p", texte: "**2. Le test de positionnement linguistique**" },
    {
      type: "p",
      texte: "Lors de la signature du CIR, l'OFII évalue votre **niveau de français** (oral et écrit). Si votre niveau est inférieur au **niveau A1 du CECRL**, vous bénéficiez de cours de français gratuits (jusqu'à **600 heures** de formation linguistique).",
    },
    { type: "p", texte: "**3. L'entretien personnalisé avec un auditeur OFII**" },
    {
      type: "p",
      texte: "Un conseiller OFII réalise un bilan de votre situation personnelle et professionnelle pour orienter votre parcours d'intégration.",
    },
    { type: "p", texte: "**4. L'orientation vers le service public de l'emploi**" },
    {
      type: "p",
      texte: "Si vous êtes en âge de travailler, l'OFII peut vous orienter vers **France Travail** (ex-Pôle Emploi) pour faciliter votre insertion professionnelle.",
    },
    {
      type: "h2",
      texte: "La formation civique obligatoire : déroulement et contenu détaillé",
      id: "formation-civique-detail",
    },
    {
      type: "p",
      texte: "La **formation civique du CIR** est dispensée par des prestataires agréés par l'OFII, dans toute la France. Elle est **gratuite** pour le signataire.",
    },
    { type: "p", texte: "**Durée et organisation :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**4 jours de formation** (4 x 8 heures = 32 heures)",
        "Dispensée en français, avec interprétation possible dans votre langue",
        "Formation en présentiel dans un centre proche de votre domicile",
        "Vous recevez une **attestation d'assiduité** à la fin de la formation",
      ],
    },
    { type: "p", texte: "**Ce que vous apprenez concrètement :**" },
    { type: "p", texte: "*Jour 1 : Les valeurs de la République*" },
    {
      type: "liste",
      style: "puces",
      items: [
        "La devise « Liberté, Égalité, Fraternité » et son application concrète",
        "La **laïcité** : séparation de l'Église et de l'État, neutralité des services publics",
        "L'**égalité femmes-hommes** : droit de vote, travail, mariage, autorité parentale",
        "La **démocratie** : droit de vote, pluralisme politique, liberté de la presse",
      ],
    },
    { type: "p", texte: "*Jour 2 : Les institutions et la citoyenneté*" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le **Président de la République** et le Gouvernement",
        "L'**Assemblée nationale** et le **Sénat**",
        "Le rôle de la **commune**, du **département** et de la **région**",
        "Les élections et le droit de vote",
      ],
    },
    { type: "p", texte: "*Jour 3 : Droits et devoirs au quotidien*" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les **droits fondamentaux** : liberté d'expression, d'association, de culte",
        "Les **devoirs** : payer ses impôts, respecter les lois, scolariser ses enfants",
        "Le système judiciaire et les recours en cas de litige",
      ],
    },
    { type: "p", texte: "*Jour 4 : Vivre en France, emploi, santé, éducation*" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le **système de santé** : Sécurité sociale, médecin traitant, carte Vitale",
        "Le **système éducatif** : école obligatoire de 3 à 16 ans, collège, lycée, université",
        "**Travailler en France** : contrat de travail, SMIC, droits du salarié",
        "**Se loger** : bail, CAF, aides au logement",
      ],
    },
    {
      type: "p",
      texte: "→ Cette formation constitue une **excellente base de préparation** pour le **test civique** exigé ultérieurement.",
    },
    {
      type: "h2",
      texte: "Quel est le lien entre le CIR et le test civique de naturalisation ?",
      id: "lien-cir-test-civique",
    },
    {
      type: "p",
      texte: "Le **CIR** et le **test civique** sont deux étapes distinctes mais complémentaires du parcours d'intégration :",
    },
    { type: "p", texte: "**Le CIR = votre formation initiale**" },
    {
      type: "p",
      texte: "Le CIR est signé à votre arrivée en France. La formation civique vous donne les **bases fondamentales** sur les valeurs, institutions et la vie en société. C'est un socle de connaissances.",
    },
    { type: "p", texte: "**Le test civique = votre évaluation finale**" },
    { type: "p", texte: "Le test civique intervient plus tard, lors de votre demande de :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Carte de séjour pluriannuelle** (après 1 an de séjour)",
        "**Carte de résident de 10 ans** (après 3 à 5 ans)",
        "**Naturalisation française**",
      ],
    },
    { type: "p", texte: "**Ce que le CIR vous apporte pour le test civique :**" },
    {
      type: "p",
      texte: "Les 4 jours de formation civique couvrent les **mêmes 5 thématiques** que le test civique :",
    },
    {
      type: "tableau",
      entetes: ["Formation CIR", "Thématique test civique", "Questions au test"],
      lignes: [
        ["Jour 1 : Valeurs", "Principes et valeurs de la République", "11/40"],
        ["Jour 2 : Institutions", "Système institutionnel et politique", "6/40"],
        ["Jour 3 : Droits/devoirs", "Droits et devoirs", "11/40"],
        ["Jour 4 : Vie quotidienne", "Histoire/géo + Vivre en société", "12/40"],
      ],
    },
    { type: "p", texte: "**Attention : le CIR ne suffit pas pour réussir le test civique**" },
    {
      type: "p",
      texte: "La formation civique du CIR est une **introduction**. Le test civique exige un niveau de connaissance **beaucoup plus approfondi** : dates précises, chiffres exacts, noms d'institutions, détails historiques. Il est indispensable de compléter votre préparation avec des **entraînements ciblés** comme ceux proposés sur **LeTestCivique.fr**.",
    },
    {
      type: "h2",
      texte: "Que se passe-t-il si vous ne respectez pas le CIR ?",
      id: "consequences-non-respect",
    },
    {
      type: "p",
      texte: "Le respect du CIR est une **condition déterminante** pour le renouvellement de votre titre de séjour et l'accès à la carte de séjour pluriannuelle.",
    },
    { type: "p", texte: "**Conséquences du non-respect :**" },
    { type: "p", texte: "**1. Refus de délivrance de la carte de séjour pluriannuelle**" },
    {
      type: "p",
      texte: "Si vous n'avez pas suivi la formation civique ou si votre niveau de français est insuffisant, la préfecture **peut refuser** votre carte de séjour pluriannuelle.",
    },
    { type: "p", texte: "**2. Non-renouvellement du titre de séjour**" },
    {
      type: "p",
      texte: "Le non-respect des engagements du CIR (absence aux formations, refus de signer) peut être un motif de **non-renouvellement** de votre titre de séjour.",
    },
    { type: "p", texte: "**3. Impact sur la naturalisation**" },
    {
      type: "p",
      texte: "Lors d'une demande de naturalisation, les services de la préfecture vérifient votre **parcours d'intégration**. Le respect du CIR fait partie des éléments examinés pour apprécier votre **assimilation à la communauté française**.",
    },
    { type: "p", texte: "**4. Depuis la loi immigration 2024**" },
    { type: "p", texte: "La réforme a renforcé les exigences :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les conditions de respect du CIR sont **plus strictement contrôlées**",
        "Le niveau de français exigé pour la carte pluriannuelle est passé à **A2** (au lieu de A1 précédemment)",
        "Le **test civique** est devenu une condition supplémentaire pour certains titres",
      ],
    },
    {
      type: "p",
      texte: "→ **Conseil** : Prenez le CIR au sérieux dès la signature. Suivez assidûment toutes les formations et conservez précieusement vos attestations.",
    },
    {
      type: "h2",
      texte: "Le parcours d'intégration complet en France : du CIR à la naturalisation",
      id: "parcours-integration-complet",
    },
    {
      type: "p",
      texte: "Voici le **parcours d'intégration républicaine type** pour un étranger arrivant en France :",
    },
    { type: "p", texte: "**Étape 1 : Arrivée en France (Année 0)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Validation du visa long séjour (VLS-TS) sur l'ANEF",
        "Signature du **Contrat d'Intégration Républicaine** à l'OFII",
        "Test de positionnement linguistique",
        "Début de la **formation civique** (4 jours) et des **cours de français** si nécessaire",
      ],
    },
    { type: "p", texte: "**Étape 2 : Première année de séjour (Année 1)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Suivi des formations du CIR",
        "Atteinte du **niveau de français A1** (minimum)",
        "Première expérience professionnelle ou poursuite d'études",
        "Début de la préparation au test civique (recommandé)",
      ],
    },
    { type: "p", texte: "**Étape 3 : Demande de carte de séjour pluriannuelle (Année 1-2)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Demande en ligne via l'ANEF",
        "Justifier du **niveau de français A2**",
        "Réussir le **test civique** (32/40 minimum)",
        "Obtention de la carte pluriannuelle de 4 ans",
      ],
    },
    { type: "p", texte: "**Étape 4 : Demande de carte de résident 10 ans (Année 3-5)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Justifier d'une résidence régulière et continue",
        "Niveau de français **B1** exigé",
        "Test civique réussi (si pas déjà fait)",
        "Ressources stables et suffisantes",
      ],
    },
    { type: "p", texte: "**Étape 5 : Naturalisation française (Année 5+)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Résidence régulière d'au moins 5 ans",
        "Niveau de français **B1** (oral et écrit)",
        "Test civique réussi",
        "Entretien d'assimilation en préfecture",
        "Examen du dossier par le ministère de l'Intérieur",
      ],
    },
    {
      type: "p",
      texte: "→ Chaque étape s'appuie sur la précédente. Le CIR pose les fondations, et le test civique valide vos connaissances. **Préparez-vous dès maintenant** sur [LeTestCivique.fr](/dashboard).",
    },
    { type: "h2", texte: "Les nouveautés du CIR en 2026", id: "nouveautes-cir-2026" },
    {
      type: "p",
      texte: "La **réforme de l'immigration 2024** et le **décret du 15 juillet 2025** ont apporté des changements significatifs au CIR :",
    },
    { type: "p", texte: "**Renforcement des exigences linguistiques**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le niveau de français exigé à la fin du CIR est désormais **A2** pour accéder à la carte pluriannuelle (contre A1 auparavant)",
        "Les cours de français gratuits sont **étendus jusqu'à 600 heures** pour les personnes en difficulté linguistique",
        "Un **test de français certifié** est requis (et non plus une simple attestation)",
      ],
    },
    { type: "p", texte: "**Intégration du test civique dans le parcours**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le **test civique** (QCM de 40 questions, seuil 80%) est officiellement intégré au parcours d'intégration républicaine",
        "La formation civique du CIR est désormais explicitement conçue comme **préparation au test civique**",
        "L'attestation de réussite au test civique est requise pour la **carte pluriannuelle** et la **carte de résident**",
      ],
    },
    { type: "p", texte: "**Modernisation des formations**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Introduction de supports numériques et de **modules en ligne** en complément du présentiel",
        "Contenu mis à jour pour refléter les **5 thématiques officielles du décret 2025-647**",
        "Meilleur suivi individualisé grâce à une plateforme OFII digitalisée",
      ],
    },
    { type: "p", texte: "**Suivi renforcé de l'intégration**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Entretien de bilan obligatoire à la fin de la première année de séjour",
        "Évaluation des progrès linguistiques et de l'insertion professionnelle",
        "Compte rendu transmis à la préfecture pour le renouvellement du titre de séjour",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le **Contrat d'Intégration Républicaine** est la première pierre de votre parcours d'intégration en France. En 2026, avec le renforcement des exigences linguistiques et l'introduction du **test civique obligatoire**, il est plus important que jamais de prendre le CIR au sérieux dès la signature. La formation civique de 4 jours vous donne les bases, mais seul un **entraînement approfondi** vous permettra de réussir le test civique avec les 32/40 exigés. Commencez votre préparation dès maintenant sur **LeTestCivique.fr** et transformez votre parcours d'intégration en succès.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "C'est quoi le Contrat d'Intégration Républicaine (CIR) ?",
      reponse: "Le CIR est un contrat signé entre l'État français (via l'OFII) et tout étranger arrivant en France pour un séjour durable. Il comprend une formation civique de 4 jours, un test de positionnement en français, et un entretien personnalisé.",
    },
    {
      question: "Le CIR est-il obligatoire ?",
      reponse: "Oui, la signature du CIR est obligatoire pour tout étranger non-européen admis au séjour en France pour la première fois et souhaitant s'y installer durablement. Le non-respect du CIR peut entraîner le refus de renouvellement de votre titre de séjour.",
    },
    {
      question: "Combien de jours dure la formation civique du CIR ?",
      reponse: "La formation civique du CIR dure 4 jours (32 heures). Elle couvre les valeurs de la République, les institutions françaises, les droits et devoirs, et la vie quotidienne en France.",
    },
    {
      question: "La formation civique du CIR est-elle gratuite ?",
      reponse: "Oui, la formation civique et les cours de français proposés dans le cadre du CIR sont entièrement gratuits pour le signataire. Ils sont financés par l'État français via l'OFII.",
    },
    {
      question: "Quelle est la différence entre le CIR et le test civique ?",
      reponse: "Le CIR est une formation initiale obligatoire signée à l'arrivée en France. Le test civique est un examen (QCM de 40 questions, seuil 80%) passé plus tard pour obtenir la carte de séjour pluriannuelle, la carte de résident ou la naturalisation. Le CIR prépare au test civique mais ne le remplace pas.",
    },
    {
      question: "Quel niveau de français faut-il pour le CIR ?",
      reponse: "Aucun niveau minimum n'est exigé à la signature du CIR. L'OFII teste votre niveau et vous propose des cours gratuits (jusqu'à 600 heures) si vous êtes en dessous du niveau A1. En revanche, le niveau A2 est exigé pour la carte pluriannuelle.",
    },
    {
      question: "Que se passe-t-il si je ne suis pas la formation civique ?",
      reponse: "Le non-respect du CIR (absence à la formation civique) peut entraîner le refus de la carte de séjour pluriannuelle et le non-renouvellement de votre titre de séjour. C'est également pris en compte pour une future demande de naturalisation.",
    },
    {
      question: "Le CIR prépare-t-il au test civique ?",
      reponse: "La formation civique du CIR couvre les mêmes 5 thématiques que le test civique. C'est une excellente introduction, mais le test civique exige un niveau de connaissance plus approfondi. Un entraînement complémentaire sur LeTestCivique.fr est fortement recommandé.",
    },
    {
      question: "Qui gère le CIR en France ?",
      reponse: "Le CIR est géré par l'OFII (Office Français de l'Immigration et de l'Intégration), un établissement public sous la tutelle du ministère de l'Intérieur.",
    },
    {
      question: "Le CIR concerne-t-il les réfugiés ?",
      reponse: "Oui, les réfugiés et les bénéficiaires de la protection subsidiaire sont tenus de signer le CIR et de suivre la formation civique, au même titre que les autres étrangers admis au séjour durable.",
    },
  ],
  aLireAussi: [
    {
      slug: "niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation",
      ancre: "Niveaux de français A2/B1 pour le titre de séjour",
    },
    {
      slug: "erreurs-frequentes-test-civique-2026-pieges-qcm",
      ancre: "Éviter les erreurs au test civique",
    },
    {
      slug: "carte-de-sejour-france-2026-guide-complet-types-demarches-renouvellement",
      ancre: "Guide des titres de séjour en France",
    },
    {
      slug: "renouvellement-titre-sejour-2026-anef-prefecture-documents-delais",
      ancre: "Renouvellement du titre de séjour",
    },
  ],
};

export default article;
