import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-buzz-nouveaux-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/double-nationalite-france-2026-pays-interdisent-risques-declaration`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "double-nationalite-france-2026-pays-interdisent-risques-declaration",
  titre: "Double nationalité en France : les 15 pays qui l'interdisent et ce que vous risquez vraiment si vous ne le déclarez pas",
  titreSeo: "Double nationalité en France : les 15 pays qui l'interdisent et ce que vous risquez vraiment si vous ne le déclarez pas",
  resume: "La France autorise la double nationalité sans restriction. Mais votre pays d'origine, lui, peut tout perdre, passeport invalide, détention, perte de droits. Guide complet des 15 pays problématiques, des risques concrets et quoi faire selon votre situation.",
  chapo: "La double nationalité, c'est le sujet dont tout le monde parle mais que personne ne comprend vraiment. Des millions de personnes en France sont binationaux sans savoir exactement ce que ça implique, ni ce qu'ils risquent si leur pays d'origine l'interdit. **La France autorise la double nationalité sans restriction depuis 1973**. Mais votre pays d'origine, lui, peut très bien ne pas l'accepter. Et les conséquences vont de la simple perte de passeport étranger jusqu'à des poursuites pénales dans certains cas. Ce guide recense les **15 pays qui posent problème**, explique ce que vous risquez concrètement, et vous dit quoi faire selon votre situation.",
  publieLe: "2026-04-25",
  modifieLe: "2026-04-25",
  minutes: 20,
  theme: "double nationalité France 2026",
  motsCles: [
    "double nationalité France 2026",
    "double nationalité pays interdits",
    "binational France risques",
    "perdre nationalité naturalisation France",
    "double nationalité Maroc France",
    "double nationalité Algérie France",
    "double nationalité Turquie France",
    "double nationalité Chine France",
    "double nationalité Inde France",
    "naturalisation France conséquences nationalité origine",
    "déclarer double nationalité",
    "pays qui interdisent double nationalité",
  ],
  rubrique: "cadre-legal",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1436491865332-7a61a109db05?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1436491865332-7a61a109db05",
  },
  blocs: [
    {
      type: "h2",
      texte: "Ce que dit la France : la double nationalité est totalement libre",
      id: "france-autorise",
    },
    {
      type: "p",
      texte: "Depuis la loi du **9 janvier 1973**, la France ne demande pas à ses citoyens de renoncer à leur nationalité d'origine pour obtenir la nationalité française. C'est une position ferme et sans exception.",
    },
    { type: "p", texte: "**Concrètement :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous pouvez devenir français tout en restant marocain, algérien, turc, ou de n'importe quelle autre nationalité",
        "La France ne notifie jamais votre pays d'origine de votre naturalisation",
        "Vous avez le droit d'avoir deux passeports, deux cartes d'identité (selon les pays)",
        "Vous pouvez voyager avec le document que vous voulez",
      ],
    },
    { type: "p", texte: "**Ce que la France n'impose pas :**" },
    {
      type: "p",
      texte: "La France ne vous oblige pas à déclarer votre double nationalité à votre pays d'origine. Elle respecte votre vie privée. Mais **elle ne peut pas non plus vous protéger des lois de votre pays d'origine** si vous vous y rendez.",
    },
    {
      type: "encadre",
      texte: "La règle est simple : sur le sol français, vous êtes français. Dans votre pays d'origine, vous êtes soumis à ses lois, même si vous êtes aussi français.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Les 15 pays qui posent vraiment problème pour la double nationalité",
      id: "pays-interdisent",
    },
    {
      type: "p",
      texte: "Voici les pays dont les ressortissants doivent être vigilants avant ou après la naturalisation française.",
    },
    { type: "h3", texte: "Interdiction stricte (perte automatique de la nationalité d'origine)" },
    {
      type: "tableau",
      entetes: ["Pays", "Ce qui se passe", "Risque réel"],
      lignes: [
        [
          "**Inde**",
          "Perte automatique de la nationalité indienne dès acquisition d'une nationalité étrangère",
          "Passeport indien invalide immédiatement",
        ],
        [
          "**Chine**",
          "La loi chinoise ne reconnaît pas la double nationalité, perte théorique",
          "En pratique peu appliqué mais risque juridique",
        ],
        [
          "**Japon**",
          "Obligation de choisir à 22 ans, sinon perte automatique",
          "Bien appliqué : le Japon notifie les mairies",
        ],
        [
          "**Andorre**",
          "Double nationalité interdite sauf avec France, Espagne ou Portugal",
          "Cas rare, peu d'impact",
        ],
        [
          "**Singapour**",
          "Perte obligatoire à 21 ans pour les Singapouriens naturalisés ailleurs",
          "Très strictement appliqué",
        ],
        [
          "**Kazakhstan**",
          "Interdiction légale, perte automatique si naturalisation étrangère",
          "Appliqué mais rarement contrôlé à l'étranger",
        ],
      ],
    },
    { type: "h3", texte: "Restriction forte (autorisée mais avec conditions)" },
    {
      type: "tableau",
      entetes: ["Pays", "Condition", "Ce qu'il faut faire"],
      lignes: [
        [
          "**Maroc**",
          "Autorisée : mais le service national peut s'appliquer",
          "Vérifier votre statut militaire au consulat",
        ],
        [
          "**Algérie**",
          "Autorisée : mais l'Algérie vous considère algérien sur son sol",
          "Ne jamais entrer en Algérie avec passeport français si bi-national",
        ],
        [
          "**Tunisie**",
          "Autorisée : mais droit de la famille appliqué localement",
          "Prudence pour les femmes en cas de divorce ou succession",
        ],
        [
          "**Turquie**",
          "Autorisée avec démarche officielle obligatoire",
          "Vous devez informer l'ambassade turque",
        ],
        [
          "**Arabie Saoudite**",
          "Théoriquement interdite, rarement appliquée aux émigrants",
          "Risque faible mais réel en cas de retour",
        ],
        [
          "**Iran**",
          "L'Iran ne reconnaît pas la nationalité étrangère sur son sol",
          "Très dangereux : plusieurs bi-nationaux détenus",
        ],
        [
          "**Égypte**",
          "Interdite sans autorisation préalable du Président de la République",
          "Quasi impossible à obtenir en pratique",
        ],
        [
          "**Azerbaïdjan**",
          "Perte de la nationalité azerbaïdjanaise sauf exceptions",
          "Cas particulier pour les ressortissants anciens URSS",
        ],
        [
          "**Myanmar**",
          "Interdiction stricte, perte automatique",
          "Peu de ressortissants concernés en France",
        ],
      ],
    },
    { type: "h3", texte: "Cas particulier : l'Algérie" },
    {
      type: "p",
      texte: "L'Algérie mérite une mention spéciale. Légalement, elle autorise la double nationalité. Mais **l'Algérie considère tout Algérien naturalisé français comme étant AUSSI algérien**. Résultat : si vous entrez en Algérie avec votre passeport français, vous êtes traité comme un Algérien, soumis au droit algérien, au service militaire si vous n'avez pas régularisé votre situation, et aux décisions des autorités locales.",
    },
    {
      type: "p",
      texte: "**Recommandation** : si vous êtes franco-algérien, entrez toujours en Algérie avec votre passeport algérien en cours de validité, et renseignez-vous sur votre situation militaire avant tout voyage.",
    },
    {
      type: "h2",
      texte: "Ce que vous risquez concrètement selon votre situation",
      id: "que-risquez-vous",
    },
    { type: "p", texte: "Les risques varient énormément selon le pays. Voici les cas concrets." },
    { type: "h3", texte: "Risque 1 : Perte du passeport étranger (le plus fréquent)" },
    {
      type: "p",
      texte: "Pour les ressortissants indiens, japonais ou singapouriens principalement. **Dès votre naturalisation française**, votre passeport d'origine devient techniquement invalide. Si vous l'utilisez pour voyager, vous risquez :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Un refus d'embarquement (si le pays de destination vérifie la validité)",
        "Des problèmes à la frontière de votre pays d'origine",
        "Une amende ou une interpellation",
      ],
    },
    {
      type: "p",
      texte: "**Solution** : informez-vous auprès du consulat de votre pays avant de vous faire naturaliser si vous avez encore besoin de ce passeport pour des raisons familiales ou professionnelles.",
    },
    { type: "h3", texte: "Risque 2 : Détention dans le pays d'origine (le plus grave)" },
    {
      type: "p",
      texte: "Plusieurs pays : notamment **l'Iran, la Chine et dans une moindre mesure la Turquie** : ont arrêté des bi-nationaux à leur retour dans leur pays d'origine. Dans ces cas, le passeport français ne vous protège pas car le pays refuse de reconnaître votre nationalité française sur son sol.",
    },
    {
      type: "p",
      texte: "Des cas réels documentés : des Franco-Iraniens détenus à Téhéran, des Franco-Chinois empêchés de quitter la Chine. L'ambassade de France ne peut qu'intervenir diplomatiquement, sans garantie.",
    },
    { type: "h3", texte: "Risque 3 : Problèmes de droit de la famille (successoral, divorce)" },
    {
      type: "p",
      texte: "Dans certains pays (Tunisie, Maroc, Algérie, Sénégal…), les règles d'héritage et de divorce dépendent de la nationalité et peuvent être très différentes du droit français. Si vous avez une propriété ou une famille dans ces pays, une succession peut être réglée selon le droit local, pas selon le droit français.",
    },
    { type: "h3", texte: "Risque 4 : Service militaire non réglé" },
    {
      type: "p",
      texte: "Maroc, Algérie, Turquie, Sénégal : plusieurs pays maintiennent des obligations militaires qui s'appliquent à leurs ressortissants à l'étranger. Si vous n'avez jamais régularisé votre situation, un retour dans votre pays d'origine peut mener à une interpellation.",
    },
    {
      type: "h2",
      texte: "Quoi faire selon votre situation avant ou après la naturalisation",
      id: "quoi-faire",
    },
    { type: "p", texte: "**Avant de vous faire naturaliser :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Vérifiez la loi de votre pays d'origine** sur la double nationalité, ambassade ou consulat en France",
        "**Pesez vos attaches** : avez-vous des biens, une famille, un business dans votre pays ? Le droit local s'appliquera toujours là-bas",
        "**Réglez votre situation militaire** si applicable (livret militaire, exemption, reconnaissance de service à l'étranger)",
        "**Inde, Japon, Singapour** : si vous avez encore besoin de votre passeport d'origine (famille, affaires), envisagez l'OCI card (Inde) ou d'autres statuts avant de vous faire naturaliser",
      ],
    },
    { type: "p", texte: "**Après votre naturalisation française :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Pour les pays qui **autorisent** la double nationalité : rien à déclarer en France. Pour votre pays d'origine, renseignez-vous au consulat",
        "Pour les pays qui **interdisent** ou restreignent : soyez prudent lors de vos voyages. Utilisez le bon passeport selon le pays de destination",
        "**Consultez un avocat spécialisé** si vous avez des biens immobiliers, une succession potentielle ou une famille dans un pays à droit restrictif",
      ],
    },
    { type: "p", texte: "**Les démarches consulaires utiles :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Maroc : consulat marocain, régularisation militaire possible par courrier",
        "Algérie : consulat algérien, attestation de dispense de service national",
        "Turquie : consulat turc, déclaration de double nationalité (obligatoire légalement)",
      ],
    },
    {
      type: "h2",
      texte: "Double nationalité et test civique : ce que vous devez savoir",
      id: "test-civique-angle",
    },
    {
      type: "p",
      texte: "Le test civique ne pose **aucune question directe** sur la double nationalité, ce n'est pas un sujet du référentiel officiel. Mais plusieurs thématiques du test civique y sont liées :",
    },
    { type: "p", texte: "**Thématique \"Droits et libertés\" :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "La liberté de circulation est un droit fondamental en France",
        "La France garantit l'égalité de traitement indépendamment de la nationalité d'origine",
        "L'article 15 de la Déclaration des droits de l'homme protège contre la déchéance arbitraire de nationalité",
      ],
    },
    { type: "p", texte: "**Thématique \"Institutions françaises\" :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le Ministère de l'Intérieur gère la naturalisation (et non les consulats étrangers)",
        "La naturalisation est une décision souveraine de l'État français, irréversible sans démarche volontaire",
        "Le Défenseur des droits peut être saisi en cas de discrimination liée à la bi-nationalité",
      ],
    },
    { type: "p", texte: "**Ce que les candidats confondent souvent :**" },
    {
      type: "p",
      texte: "La France n'oblige **jamais** à renoncer à sa nationalité d'origine. Si un agent de préfecture vous dit le contraire, c'est une erreur. Vous pouvez (et avez le droit de) garder les deux nationalités.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La double nationalité en France, c'est une liberté, mais une liberté qui s'exerce dans un monde où votre pays d'origine a ses propres règles. **La France vous protège sur son sol et à l'étranger par ses consulats**, mais elle ne peut pas vous protéger des lois internes d'un autre État. Avant de vous faire naturaliser, prenez 30 minutes pour vérifier la position de votre pays d'origine. Après, soyez simplement prudent lors de vos voyages dans des pays qui ne reconnaissent pas la double nationalité. Avec les bonnes informations, la double nationalité est une chance, pas un piège.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "La France informe-t-elle mon pays d'origine quand je suis naturalisé ?",
      reponse: "Non. La France ne notifie jamais votre pays d'origine de votre naturalisation. C'est votre choix de le déclarer ou non, mais votre pays d'origine peut l'apprendre si vous utilisez un passeport français à sa frontière.",
    },
    {
      question: "Puis-je avoir deux passeports valides en même temps ?",
      reponse: "En France, oui. Vous pouvez avoir un passeport français et un passeport de votre pays d'origine simultanément, si votre pays d'origine l'autorise. Les pays comme l'Inde ou le Japon invalident automatiquement leur passeport à votre naturalisation.",
    },
    {
      question: "Que se passe-t-il si je suis arrêté dans mon pays d'origine avec un passeport français ?",
      reponse: "Si votre pays ne reconnaît pas la double nationalité, il vous traitera uniquement comme son ressortissant. L'ambassade de France peut intervenir diplomatiquement mais ne peut pas vous sortir de garde à vue. C'est le risque principal pour les ressortissants iraniens, chinois ou azerbaïdjanais.",
    },
    {
      question: "Dois-je choisir entre mes deux nationalités un jour ?",
      reponse: "En France, jamais. La France ne vous demandera jamais de choisir. Certains pays (Japon à 22 ans, Singapour) imposent un choix à leurs ressortissants, mais c'est une obligation de votre pays d'origine, pas de la France.",
    },
    {
      question: "La double nationalité affecte-t-elle ma demande de naturalisation ?",
      reponse: "Non. Le fait d'être déjà ressortissant d'un autre pays n'est pas un critère négatif pour la naturalisation française. L'entretien d'assimilation ne porte pas sur votre attachement à votre pays d'origine.",
    },
  ],
};

export default article;
