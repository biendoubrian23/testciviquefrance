import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-nouveaux-avril-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/declaration-impots-etrangers-france-2026-guide-pratique-formulaires-dates-remboursement`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "declaration-impots-etrangers-france-2026-guide-pratique-formulaires-dates-remboursement",
  titre: "Déclaration d'impôts pour étrangers en France 2026 : guide pratique, dates limites, formulaires et lien avec le titre de séjour",
  titreSeo: "Déclaration d'impôts pour étrangers en France 2026 : guide pratique, dates limites, formulaires et lien avec le titre de séjour",
  resume: "Avril = saison des impôts. Êtes-vous résident fiscal en France ? Comment remplir votre 1ère déclaration, éviter la double imposition (conventions fiscales), les dates limites par département et pourquoi vos impôts sont liés à votre titre de séjour et à la naturalisation.",
  chapo: "Avril 2026 : la saison des impôts est ouverte. Si vous êtes étranger en France, êtes-vous obligé de déclarer vos revenus ? La réponse est souvent oui, et beaucoup d'étrangers l'ignorent, au risque de lourdes pénalités. Que vous soyez salarié, étudiant, auto-entrepreneur ou en cours de naturalisation, ce guide pratique vous explique comment remplir votre déclaration pas à pas, quels formulaires utiliser, comment éviter la double imposition avec votre pays d'origine, et pourquoi votre déclaration fiscale est aussi liée à votre titre de séjour.",
  publieLe: "2026-04-04",
  modifieLe: "2026-04-04",
  minutes: 19,
  theme: "déclaration impôts étranger France 2026",
  motsCles: [
    "déclaration impôts étranger France 2026",
    "impôts étranger titre de séjour",
    "résident fiscal France",
    "date limite déclaration impôts 2026",
    "formulaire impôts étranger",
    "double imposition France",
    "convention fiscale France",
    "revenus étrangers déclaration France",
    "impôts naturalisation France",
    "premier déclaration impôts étranger",
    "aide déclaration impôts centre des finances",
    "crédit impôt étranger France",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
  blocs: [
    {
      type: "h2",
      texte: "Êtes-vous résident fiscal en France ? Le test en 3 critères",
      id: "etes-vous-resident-fiscal",
    },
    {
      type: "p",
      texte: "Avant tout, il faut déterminer si vous êtes considéré comme **résident fiscal en France**. Si oui, vous devez déclarer **l'ensemble de vos revenus mondiaux** en France.",
    },
    {
      type: "h3",
      texte: "Vous êtes résident fiscal français si vous remplissez AU MOINS UN de ces critères :",
    },
    {
      type: "tableau",
      entetes: ["Critère", "Explication"],
      lignes: [
        [
          "**Foyer principal en France**",
          "Votre famille (conjoint, enfants) réside habituellement en France",
        ],
        [
          "**Séjour principal en France**",
          "Vous passez plus de **183 jours par an** en France (même si votre famille est à l'étranger)",
        ],
        [
          "**Activité professionnelle principale en France**",
          "Votre emploi principal ou votre activité principale se déroule en France",
        ],
        [
          "**Centre des intérêts économiques en France**",
          "Vos revenus principaux proviennent de France, ou vous y avez vos investissements principaux",
        ],
      ],
    },
    { type: "p", texte: "**Q : Je suis arrivé en France en cours d'année. Dois-je déclarer ?**" },
    {
      type: "p",
      texte: "R : Oui, dès votre arrivée vous devenez résident fiscal français. Vous déclarez les revenus perçus **depuis la date d'arrivée** en France, plus les revenus étrangers si vous remplissez l'un des critères ci-dessus pour la période avant votre arrivée.",
    },
    {
      type: "p",
      texte: "**Q : J'ai un titre de séjour mais je travaille partiellement à l'étranger. Que faire ?**",
    },
    {
      type: "p",
      texte: "R : Si vous résidez principalement en France, vous êtes résident fiscal français et devez déclarer la totalité de vos revenus, y compris ceux perçus à l'étranger. Les conventions fiscales éviteront la double imposition.",
    },
    {
      type: "h2",
      texte: "Les dates clés de la déclaration 2026 : à ne pas manquer",
      id: "dates-limites",
    },
    {
      type: "p",
      texte: "Pour la campagne déclarative 2026 (revenus 2025), les dates limites sont fixées par l'administration fiscale selon votre département de résidence :",
    },
    {
      type: "tableau",
      entetes: ["Zone", "Départements", "Date limite (déclaration en ligne)"],
      lignes: [
        ["Zone 1", "01 à 19", "22 mai 2026"],
        ["Zone 2", "20 à 54 (+ DOM)", "28 mai 2026"],
        ["Zone 3", "55 à 976", "5 juin 2026"],
        ["Déclaration papier (tous)", "Tous départements", "20 mai 2026"],
        ["Contribuables hors de France", "Non-résidents, expatriés", "25 juin 2026"],
      ],
    },
    {
      type: "p",
      texte: "**Première déclaration obligatoire en papier :** si c'est votre **première déclaration** en France, vous devez utiliser le **formulaire papier 2042** (téléchargeable sur impots.gouv.fr) et l'envoyer par courrier au Centre des Finances Publiques de votre domicile, même si vos voisins déclarent en ligne. L'année suivante, vous pourrez déclarer en ligne.",
    },
    { type: "h3", texte: "Pénalités pour retard :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Retard :** majoration de 10 % du montant d'impôt dû",
        "**Non-déclaration :** majoration de **40 %** (de mauvaise foi) ou **80 %** (fraude avérée)",
        "**Intérêts de retard :** 0,20 % par mois de retard",
      ],
    },
    {
      type: "h2",
      texte: "Comment remplir votre première déclaration étape par étape",
      id: "comment-remplir",
    },
    { type: "p", texte: "Suivez ces étapes pour compléter votre déclaration correctement :" },
    { type: "h3", texte: "Étape 1 : Créer votre espace personnel sur impots.gouv.fr" },
    {
      type: "p",
      texte: "Munissez-vous de votre **numéro fiscal** (indiqué sur votre avis d'imposition ou disponible sur demande auprès du Centre des Finances Publiques) et de votre **numéro de titre de séjour**.",
    },
    { type: "h3", texte: "Étape 2 : Remplir la page d'état civil" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Situation familiale (célibataire, marié, pacsé, divorcé)",
        "Nombre de personnes à charge (enfants)",
        "Adresse en France",
      ],
    },
    { type: "h3", texte: "Étape 3 : Déclarer vos revenus salariés (cases 1AJ/1BJ)" },
    {
      type: "p",
      texte: "Reportez le montant du **net imposable** indiqué sur votre dernier bulletin de salaire de l'année (généralement différent du net payé). Votre employeur envoie ces données directement à l'administration, vérifiez qu'elles sont correctes.",
    },
    { type: "h3", texte: "Étape 4 : Déclarer vos éventuels revenus étrangers" },
    {
      type: "p",
      texte: "Utilisez la **case 1AF** (traitements et salaires de source étrangère) et le formulaire **2047** (revenus encaissés à l'étranger). La convention fiscale entre la France et votre pays d'origine détermine si ces revenus sont imposables en France ou ouvrent droit à un crédit d'impôt.",
    },
    { type: "h3", texte: "Étape 5 : Valider et signer" },
    {
      type: "p",
      texte: "Relisez chaque case, validez et conservez le **numéro de télédéclaration** comme preuve de dépôt.",
    },
    {
      type: "h2",
      texte: "Conventions fiscales : éviter la double imposition",
      id: "conventions-fiscales",
    },
    {
      type: "p",
      texte: "La France a signé des **conventions fiscales bilatérales** avec plus de 125 pays pour éviter que vous soyez imposé deux fois sur les mêmes revenus.",
    },
    { type: "h3", texte: "Comment fonctionne une convention fiscale ?" },
    { type: "p", texte: "Selon le pays et le type de revenu, la convention détermine :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Quel pays a le droit d'imposer** (France ou pays source)",
        "**Si un crédit d'impôt est accordé en France** pour l'impôt déjà payé à l'étranger",
      ],
    },
    { type: "h3", texte: "Exemples de pays avec convention fiscale avec la France :" },
    {
      type: "tableau",
      entetes: ["Pays", "Convention en vigueur"],
      lignes: [
        ["Maroc", "Oui : Convention du 29 mai 1970"],
        ["Algérie", "Oui : Convention du 17 octobre 1999"],
        ["Tunisie", "Oui : Convention du 28 mai 1973"],
        ["Sénégal", "Oui : Convention du 29 mars 1974"],
        ["Côte d'Ivoire", "Oui : Convention du 6 avril 1966"],
        ["Portugal", "Oui : Convention du 14 janvier 1971"],
        ["Espagne", "Oui : Convention du 10 octobre 1995"],
      ],
    },
    {
      type: "p",
      texte: "**Si aucune convention n'existe** entre la France et votre pays d'origine, vous pouvez tout de même éviter la double imposition via le **crédit d'impôt unilatéral** prévu par le droit interne français.",
    },
    {
      type: "h2",
      texte: "Impôts et titre de séjour : le lien que beaucoup ignorent",
      id: "impots-titre-sejour",
    },
    {
      type: "p",
      texte: "Votre situation fiscale a un impact direct sur votre dossier d'immigration. C'est un point souvent négligé mais crucial :",
    },
    { type: "h3", texte: "Pour le renouvellement du titre de séjour :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "La préfecture peut demander votre **avis d'imposition** comme justificatif de ressources",
        "Ne pas avoir déclaré ses impôts peut être perçu comme un signe de non-intégration ou de fraude",
        "Pour certains titres (pluriannuel, résident), l'avis d'imposition prouve votre résidence stable en France",
      ],
    },
    { type: "h3", texte: "Pour la naturalisation française :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le dossier de naturalisation exige **3 derniers avis d'imposition**",
        "Des revenus non déclarés peuvent entraîner un **ajournement** ou un **rejet** de la demande",
        "La régularité fiscale est un critère d'**assimilation** évalué par le préfet",
      ],
    },
    { type: "h3", texte: "Ce que dit le test civique :" },
    {
      type: "p",
      texte: "La thématique *Droits et devoirs* du test civique inclut explicitement le **devoir de payer ses impôts** comme obligation civique fondamentale de toute personne résidant en France. La solidarité nationale, le financement des services publics et l'État providence reposent sur le consentement à l'impôt.",
    },
    { type: "h2", texte: "Les aides gratuites pour remplir votre déclaration", id: "aides-gratuites" },
    {
      type: "p",
      texte: "Vous n'êtes pas seul face à votre déclaration. De nombreux dispositifs gratuits existent :",
    },
    { type: "h3", texte: "1. Les Centres de Finances Publiques (anciens Centres des Impôts)" },
    {
      type: "p",
      texte: "Chaque direction départementale des finances publiques organise des **permanences gratuites** de janvier à juin pour aider les contribuables, notamment les primo-déclarants. Trouvez le vôtre sur **impots.gouv.fr**.",
    },
    { type: "h3", texte: "2. Les Maisons France Services" },
    {
      type: "p",
      texte: "Présentes dans tout le territoire, elles proposent une aide à la déclaration en ligne, avec accompagnement en cas de difficulté.",
    },
    { type: "h3", texte: "3. Les associations d'aide fiscale agréées" },
    {
      type: "p",
      texte: "Des associations comme **Crésus**, **Points Conseil Budget** et certaines UDAF (Unions Départementales des Associations Familiales) proposent une aide fiscale gratuite pour les revenus modestes.",
    },
    { type: "h3", texte: "4. Le service de messagerie sécurisée impots.gouv.fr" },
    {
      type: "p",
      texte: "Vous pouvez poser vos questions directement à votre service des impôts via votre espace personnel en ligne. Réponse garantie sous 5 à 10 jours ouvrés.",
    },
    { type: "h3", texte: "Documents à préparer avant d'aller chercher de l'aide :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Bulletin de salaire de décembre (ou dernier bulletin de l'année)",
        "Titre de séjour ou passeport",
        "Avis d'imposition de l'année précédente (si disponible)",
        "RIB pour recevoir un éventuel remboursement",
        "Justificatifs de charges déductibles (pension alimentaire versée, dons, frais de garde d'enfants)",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Déclarer ses impôts en France n'est pas une option pour les étrangers résidents fiscaux, c'est une obligation légale avec de vraies conséquences en cas de non-respect (pénalités financières, impact sur le titre de séjour et la naturalisation). La bonne nouvelle : la déclaration est souvent plus simple qu'on ne le croit, et de nombreuses aides gratuites existent. Ne laissez pas passer les dates limites (fin mai pour la déclaration en ligne). Si vous avez des revenus à l'étranger, consultez les conventions fiscales pour éviter la double imposition.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Dois-je déclarer mes impôts si je suis en France depuis moins d'un an ?",
      reponse: "Oui, si vous avez résidé plus de 183 jours en France ou si votre foyer principal s'y trouve. Vous déclarez les revenus perçus depuis votre date d'arrivée en France. Pour une arrivée en milieu d'année, vous pouvez cocher la case correspondante sur le formulaire 2042.",
    },
    {
      question: "Comment éviter d'être imposé deux fois sur mes revenus étrangers ?",
      reponse: "La France a des conventions fiscales avec plus de 125 pays. Si votre pays d'origine a signé une convention avec la France, vous bénéficiez d'un crédit d'impôt égal à l'impôt déjà payé à l'étranger. Utilisez le formulaire 2047 pour déclarer vos revenus étrangers et renseignez-vous auprès du Centre des Finances Publiques.",
    },
    {
      question: "Que risque-t-on si on ne déclare pas ses impôts en France ?",
      reponse: "Les pénalités varient de 10 % (retard simple) à 40-80 % (mauvaise foi ou fraude). Au-delà de l'aspect financier, ne pas déclarer ses impôts peut mettre en danger votre titre de séjour et bloquer votre demande de naturalisation, qui exige 3 avis d'imposition.",
    },
    {
      question: "Comment obtenir mon numéro fiscal si je suis étranger ?",
      reponse: "Vous pouvez obtenir votre numéro fiscal en vous rendant au Centre des Finances Publiques de votre lieu de résidence, en apportant votre titre de séjour, un justificatif de domicile et votre passeport. Il vous sera attribué immédiatement ou sous quelques jours.",
    },
    {
      question: "La déclaration d'impôts est-elle obligatoire pour le renouvellement du titre de séjour ?",
      reponse: "La préfecture peut vous demander votre dernier avis d'imposition comme justificatif de ressources. Ce n'est pas systématiquement obligatoire mais une absence d'avis d'imposition peut ralentir votre dossier ou être interprétée comme un manque d'intégration, surtout pour les titres pluriannuels et la naturalisation.",
    },
  ],
};

export default article;
