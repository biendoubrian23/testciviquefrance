import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-vie-pratique-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/divorce-separation-titre-sejour-2026-droits-renouvellement-etranger`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "divorce-separation-titre-sejour-2026-droits-renouvellement-etranger",
  titre: "Divorce et titre de séjour 2026 : conséquences, renouvellement, violences conjugales, vos droits",
  titreSeo: "Divorce et titre de séjour 2026 : conséquences, renouvellement, violences conjugales, vos droits",
  resume: "Que se passe-t-il pour votre titre de séjour en cas de divorce ? Impact sur la carte conjoint de Français, protection en cas de violences, garde des enfants et naturalisation. Guide juridique complet.",
  chapo: "Que se passe-t-il pour votre titre de séjour si vous divorcez en France ? C'est l'une des questions les plus angoissantes pour les étrangers dont le droit au séjour dépend de leur situation familiale. Titre « vie privée et familiale », carte de résident, naturalisation en cours : ce guide détaille les conséquences juridiques d'une séparation ou d'un divorce sur chaque type de titre de séjour en 2026, les protections en cas de violences conjugales, et les démarches pour sécuriser votre situation.",
  publieLe: "2026-04-03",
  modifieLe: "2026-04-03",
  minutes: 20,
  theme: "divorce titre de séjour 2026",
  motsCles: [
    "divorce titre de séjour 2026",
    "séparation étranger France",
    "divorce conjoint français titre séjour",
    "renouvellement titre séjour après divorce",
    "divorce carte de séjour vie privée familiale",
    "violence conjugale titre séjour",
    "divorce naturalisation en cours",
    "garde enfants étranger divorce",
    "divorce carte de résident",
    "rupture communauté de vie titre séjour",
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
      texte: "Divorce et titre de séjour « conjoint de Français » : ce qui change",
      id: "impact-titre-conjoint",
    },
    {
      type: "p",
      texte: "Si votre titre de séjour a été délivré au motif de votre mariage avec un ressortissant français (mention « vie privée et familiale, conjoint de Français »), un divorce modifie votre situation mais **ne vous met pas automatiquement en situation irrégulière**.",
    },
    { type: "h3", texte: "Pendant la procédure de divorce :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Votre titre de séjour **reste valide jusqu'à sa date d'expiration**",
        "Vous pouvez continuer à travailler et à résider en France normalement",
        "Le juge aux affaires familiales est compétent pour le divorce, pas la préfecture",
      ],
    },
    { type: "h3", texte: "Au renouvellement du titre :" },
    {
      type: "p",
      texte: "C'est au moment du **renouvellement** que la situation se complique. La préfecture peut :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Refuser le renouvellement** si la communauté de vie a cessé (article L423-1 du CESEDA)",
        "**Délivrer un titre sur un autre fondement** si vous justifiez d'attaches personnelles et familiales en France (article L423-23)",
        "**Accorder un titre « vie privée et familiale »** si vous avez des enfants français ou si vous résidez en France depuis longtemps",
      ],
    },
    {
      type: "p",
      texte: "**Durée du mariage importante** : si vous étiez marié depuis plus de **3 ans** avec communauté de vie effective et que vous avez obtenu une carte de résident, celle-ci **n'est pas retirée** en cas de divorce.",
    },
    {
      type: "h2",
      texte: "Divorce et carte de résident : êtes-vous protégé ?",
      id: "carte-resident-divorce",
    },
    {
      type: "p",
      texte: "Si vous êtes titulaire d'une **carte de résident de 10 ans**, le divorce a un impact limité :",
    },
    { type: "h3", texte: "Carte de résident déjà obtenue :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "La carte de résident est un **droit autonome** : elle ne peut pas être retirée au seul motif du divorce",
        "Elle reste valable jusqu'à son expiration et se renouvelle de plein droit si vous résidez toujours en France",
        "Seule la **menace à l'ordre public** ou une absence prolongée du territoire (plus de 3 ans) peut justifier un non-renouvellement",
      ],
    },
    { type: "h3", texte: "Carte de résident pas encore obtenue :" },
    {
      type: "p",
      texte: "Si vous n'aviez pas encore la carte de résident (éligible après 3 ans de mariage), le divorce **bloque cette possibilité**. Vous devrez demander un titre sur un autre fondement (attaches en France, enfants, travail).",
    },
    {
      type: "p",
      texte: "**Conseil** : si vous approchez des 3 ans de mariage et anticipez une séparation, déposez votre demande de carte de résident **avant** le prononcé du divorce.",
    },
    {
      type: "h2",
      texte: "Protection spéciale en cas de violences conjugales",
      id: "violences-conjugales",
    },
    {
      type: "p",
      texte: "La loi française prévoit une **protection renforcée** pour les étrangers victimes de violences conjugales, même en cas de rupture de la communauté de vie.",
    },
    { type: "h3", texte: "Vos droits en tant que victime :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Article L423-5 du CESEDA** : si la communauté de vie a cessé à cause de violences conjugales, le préfet **ne peut pas refuser** le renouvellement du titre de séjour « vie privée et familiale »",
        "**Ordonnance de protection** : le juge aux affaires familiales peut délivrer en urgence (dans les 6 jours) une ordonnance qui protège la victime et maintient ses droits au séjour",
        "**Dépôt de plainte** : même sans titre de séjour valide, vous avez le droit de déposer plainte. La police ne peut pas vous refuser ce droit ni signaler votre situation administrative",
      ],
    },
    { type: "h3", texte: "Démarches en cas de violence :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Mettez-vous en sécurité** : appelez le **3919** (Violences Femmes Info, gratuit et anonyme) ou le **17** (police) en cas de danger immédiat",
        "**Déposez plainte** au commissariat ou à la gendarmerie, demandez un certificat médical de constatation",
        "**Demandez une ordonnance de protection** auprès du tribunal judiciaire",
        "**Contactez une association** : France Victimes (116 006), CIDFF, associations d'aide aux femmes étrangères",
        "**Déposez votre demande de renouvellement** en préfecture en joignant le dépôt de plainte et/ou l'ordonnance de protection",
      ],
    },
    {
      type: "p",
      texte: "**Important** : cette protection s'applique quel que soit le sexe de la victime et pour tous les types de couples (marié, pacsé, concubin).",
    },
    { type: "h2", texte: "Garde des enfants et droit au séjour", id: "enfants-garde-divorce" },
    {
      type: "p",
      texte: "La présence d'**enfants français** (ou d'enfants résidant en France) modifie considérablement votre droit au séjour après un divorce.",
    },
    { type: "h3", texte: "Si vous avez des enfants français :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous pouvez obtenir un titre de séjour **« parent d'enfant français »** (article L423-7 du CESEDA), indépendamment de votre ex-conjoint",
        "Condition : vous devez **contribuer à l'entretien et à l'éducation de l'enfant** depuis sa naissance ou depuis au moins 2 ans",
        "Ce titre est renouvelable et donne accès à la carte de résident après 3 ans",
      ],
    },
    { type: "h3", texte: "Si vos enfants ne sont pas français :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le juge français est compétent pour la garde si les enfants résident en France",
        "Le parent qui obtient la garde peut demander un titre « vie privée et familiale » au titre de ses attaches personnelles",
        "L'**intérêt supérieur de l'enfant** (article 3 de la Convention internationale des droits de l'enfant) est un argument fort dans toute demande de titre de séjour",
      ],
    },
    {
      type: "p",
      texte: "**Conseil juridique** : en cas de divorce, demandez l'aide juridictionnelle (gratuite sous conditions de revenus) pour être assisté par un avocat spécialisé en droit des étrangers et droit de la famille.",
    },
    {
      type: "h2",
      texte: "Impact du divorce sur une demande de naturalisation en cours",
      id: "naturalisation-divorce",
    },
    {
      type: "p",
      texte: "Si vous avez déposé une demande de **naturalisation par mariage** (article 21-2 du Code civil) et que vous divorcez pendant l'instruction :",
    },
    { type: "h3", texte: "Les 3 scénarios :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Divorce avant le dépôt de la demande** : vous n'êtes plus éligible à la naturalisation par mariage. Vous devrez attendre 5 ans de résidence régulière (au lieu de 4 ans de mariage) pour demander la naturalisation par décret.",
        "**Divorce pendant l'instruction** : l'administration peut rejeter la demande au motif de la rupture de la communauté de vie. Elle doit néanmoins examiner si les conditions étaient remplies **au moment du dépôt**.",
        "**Divorce après l'obtention de la nationalité** : aucun impact. La nationalité française acquise est **définitive** et ne peut pas être retirée au motif d'un divorce.",
      ],
    },
    {
      type: "p",
      texte: "**Point important** : la condition de 4 ans de mariage avec communauté de vie s'apprécie **à la date de souscription de la déclaration**. Si vous aviez 4 ans de mariage effectif au moment du dépôt, la demande reste recevable même si le divorce intervient ensuite (jurisprudence Conseil d'État).",
    },
    { type: "h2", texte: "Les démarches pratiques après un divorce", id: "demarches-pratiques" },
    {
      type: "p",
      texte: "Voici la checklist des actions à mener pour sécuriser votre situation administrative :",
    },
    { type: "h3", texte: "Dans les premières semaines :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Conservez tous vos documents** : titre de séjour, jugement de divorce, livret de famille, preuves de communauté de vie passée",
        "**Signalez votre changement de situation** à la CAF, CPAM, impôts et banque",
        "**Consultez un avocat spécialisé** en droit des étrangers (aide juridictionnelle possible)",
      ],
    },
    { type: "h3", texte: "Pour le renouvellement du titre de séjour :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Identifiez votre nouveau fondement de séjour** : parent d'enfant français, attaches personnelles, 10 ans de résidence, travail, santé…",
        "**Constituez un dossier solide** : preuves de votre intégration (travail, logement, impôts payés, connaissance du français, scolarisation des enfants)",
        "**Déposez votre demande de renouvellement** via ANEF avant l'expiration de votre titre actuel",
        "**En cas de refus** : formulez un recours gracieux puis, si besoin, un recours contentieux devant le tribunal administratif dans les 2 mois",
      ],
    },
    {
      type: "h2",
      texte: "Ce que le test civique aborde sur la famille et le droit",
      id: "lien-test-civique-divorce",
    },
    { type: "p", texte: "Le test civique inclut des questions sur :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "L'**égalité homme-femme** dans le mariage et le divorce (article 1 de la Constitution)",
        "L'**interdiction du mariage forcé** et des violences conjugales",
        "L'**autorité parentale** exercée conjointement par les deux parents, même après un divorce",
        "Le **droit à un jugement équitable** en matière familiale",
        "La **protection de l'enfance** et l'intérêt supérieur de l'enfant",
      ],
    },
    {
      type: "p",
      texte: "Préparez ces thématiques avec nos [QCM gratuits](/dashboard/entrainement) dans la catégorie « Droits et devoirs ».",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Un divorce ne signifie pas automatiquement la fin de votre droit au séjour en France. Selon votre situation (durée du mariage, enfants, violences, ancienneté de résidence), des solutions existent pour maintenir ou obtenir un nouveau titre de séjour. L'essentiel est d'anticiper, de consulter un avocat spécialisé et de préparer un dossier solide pour le renouvellement. Si vous préparez aussi votre naturalisation, n'oubliez pas que le test civique inclut des questions sur l'égalité dans le couple et les droits familiaux, entraînez-vous sur [notre plateforme](/dashboard/entrainement).",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Mon ex-conjoint peut-il faire annuler mon titre de séjour après le divorce ?",
      reponse: "Non. Votre ex-conjoint n'a aucun pouvoir sur votre titre de séjour. Seul le préfet peut décider du renouvellement ou du refus. Votre ex-conjoint ne peut pas \"signaler\" votre divorce à la préfecture pour vous faire expulser.",
    },
    {
      question: "Combien de temps ai-je après le divorce pour renouveler mon titre ?",
      reponse: "Votre titre reste valide jusqu'à sa date d'expiration, quelle que soit la date du divorce. Déposez votre demande de renouvellement 2 à 4 mois avant l'expiration, en précisant votre nouvelle situation. Ne laissez jamais votre titre expirer sans agir.",
    },
    {
      question: "Puis-je demander la nationalité française après un divorce ?",
      reponse: "Oui, mais pas par la voie du mariage si le mariage a duré moins de 4 ans. Vous pouvez demander la naturalisation par décret après 5 ans de résidence régulière en France (conditions classiques : intégration, langue, test civique).",
    },
    {
      question: "Mon mari me menace de faire supprimer mes papiers si je demande le divorce, que faire ?",
      reponse: "C'est une forme de violence psychologique et de chantage. Il n'a aucun pouvoir sur vos papiers. Appelez le 3919 (gratuit, anonyme), déposez plainte et demandez une ordonnance de protection. La loi protège spécifiquement les victimes de violences conjugales même en cas de rupture de communauté de vie.",
    },
  ],
  sources: [
    {
      titre: "CESEDA : Article L423-5 (violences conjugales)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000042776406/",
      type: "juridique",
      description: "Protection du droit au séjour en cas de violences conjugales",
    },
    {
      titre: "Service-Public.fr, Divorce et titre de séjour",
      url: "https://www.service-public.fr/particuliers/vosdroits/F2209",
      type: "officiel",
      description: "Conséquences du divorce sur le droit au séjour des étrangers",
    },
    {
      titre: "Code civil : Article 21-2 (naturalisation par mariage)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006419880/",
      type: "juridique",
      description: "Conditions de la naturalisation par mariage",
    },
    {
      titre: "3919 : Violences Femmes Info",
      url: "https://arretonslesviolences.gouv.fr/",
      type: "officiel",
      description: "Numéro national d'aide aux victimes de violences conjugales",
    },
  ],
};

export default article;
