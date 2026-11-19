import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-part3.ts` et
 * `lib/data/seo-articles.ts`, sans changer d'adresse.
 * Réécrit par le robot éditorial le 19/11/2026 (`docs/seo/ROBOT.md`) : la page
 * était dans la liste « à revérifier » (619 mots, deux questions de FAQ,
 * sources sans date de lecture, couverture distante sans texte alternatif),
 * citée par Copilot sur « liberté égalité fraternité » (260 citations), non
 * indexée par Google (« Détectée, actuellement non indexée »). Recentrée sur
 * la devise (« devise de la france », 1 k à 10 k, + 900 % sur trois mois,
 * Planificateur, France, toutes les langues, 19/11/2026) ; la laïcité a
 * désormais sa page (`laicite-definition`), la démocratie et les droits du
 * citoyen ont les leurs.
 * Sources lues le 19/11/2026 : Légifrance, Constitution (art. 1 et 2) et
 * Déclaration des droits de l'homme et du citoyen (art. 1, 2, 4, 6) ;
 * formation-civique.interieur.gouv.fr, fiches « La devise française », « La
 * liberté », « L'égalité (1/3) », « L'égalité (3/3) », « La fraternité (1/2) »
 * et « La fraternité (2/2) ».
 * Retiré : « inscrite dans la Constitution de 1958 » sans article (c'est
 * l'article 2), la liste des devoirs et droits du citoyen sans source (elle
 * vit dans `droits-devoirs-citoyens-france-guide`), le mot « isonomie ».
 */
const article: Article = {
  slug: "valeurs-republique-francaise-liberte-egalite-fraternite",
  titre: "Liberté, Égalité, Fraternité : la devise de la France expliquée simplement, valeur par valeur",
  titreSeo: "Liberté, Égalité, Fraternité : la devise expliquée",
  resume: "La devise de la France en mots simples : d'où vient « Liberté, Égalité, Fraternité », ce que veut dire chaque valeur, et ce que l'examen civique demande.",
  chapo: "La devise de la République française est ==« Liberté, Égalité, Fraternité »==. Elle est écrite dans l'article 2 de la Constitution et elle est officielle depuis 1848. Chaque mot porte une valeur : la liberté de chacun, l'égalité de tous devant la loi, et la solidarité entre les citoyens. Voici ce qu'elles veulent dire, et ce que l'examen civique vous demande.",
  publieLe: "2025-12-13",
  modifieLe: "2026-11-19",
  minutes: 8,
  theme: "La devise de la République à l'examen civique",
  motsCles: [
    "liberté égalité fraternité",
    "devise de la france",
    "devise de la république française",
    "valeurs de la république",
    "valeurs de la république examen civique",
    "fraternité définition",
  ],
  rubrique: "thematiques",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/devise-liberte-egalite-fraternite.webp",
    alt: "La façade en pierre de l'hôtel de ville de Vernon, avec les mots Liberté, Égalité, Fraternité gravés au-dessus des fenêtres et un drapeau français au balcon",
    largeur: 1024,
    hauteur: 768,
    credit: "ell brown, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/39415781@N06/3713429996",
  },
  blocs: [
    {
      type: "h2",
      texte: "Quelle est la devise de la République française ?",
      id: "devise-republicaine",
    },
    {
      type: "p",
      texte: "Une devise, c'est une courte phrase qui dit les valeurs d'un pays. Celle de la France est « Liberté, Égalité, Fraternité ». La Constitution est le texte qui fixe les règles les plus importantes du pays. Son article 2 dit : « La devise de la République est \"Liberté, Egalité, Fraternité\" » ([Constitution, article 2, sur Légifrance](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000571356/)).",
    },
    {
      type: "p",
      texte: "Selon la [fiche officielle de la formation civique](https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/principes-et-valeurs-de-la-republique/devise-et-symboles-de-la-republique/la-devise-francaise/), la devise apparaît pendant la Révolution française, en 1789. Elle devient officielle en ==1848==, sous la Deuxième République. Sous la Troisième République, on la grave sur les mairies, les écoles et les monuments.",
    },
    {
      type: "p",
      texte: "Vous la voyez aujourd'hui sur la façade des mairies, sur des pièces de monnaie et des timbres, et sur des documents officiels. Le même article 2 cite aussi les autres symboles : le drapeau bleu, blanc, rouge, la Marseillaise et la langue française. Pour eux, lisez notre article sur [Marianne, le coq et le drapeau](/articles/symboles-france-marianne-coq-drapeau-tricolore).",
    },
    {
      type: "h2",
      texte: "Que veut dire « liberté » ?",
    },
    {
      type: "p",
      texte: "La liberté, c'est pouvoir penser, s'exprimer et vivre comme on le souhaite. Elle a une seule limite : ne pas empêcher les autres d'en faire autant. La Déclaration des droits de l'homme et du citoyen de 1789 le dit. Son article 4 précise : « La liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui » ([DDHC, sur Légifrance](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000697056)).",
    },
    {
      type: "p",
      texte: "La [fiche officielle « La liberté »](https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/principes-et-valeurs-de-la-republique/devise-et-symboles-de-la-republique/la-liberte/) distingue deux sortes de libertés :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**les libertés de chaque personne** : se déplacer, avoir ou non une religion, donner son avis, vivre avec qui l'on veut ;",
        "**les libertés qui se vivent à plusieurs** : se réunir, manifester, adhérer à un syndicat pour défendre des intérêts communs.",
      ],
    },
    {
      type: "p",
      texte: "Ces libertés valent pour tous, sans différence selon le pays d'origine, les parents ou la religion. Un étranger qui vit en France avec un titre de séjour, le document qui l'autorise à y rester, en profite aussi.",
    },
    {
      type: "h2",
      texte: "Que veut dire « égalité » ?",
    },
    {
      type: "p",
      texte: "L'égalité, c'est l'idée que ==la loi est la même pour tous==. L'article 1 de la Déclaration de 1789 dit : « Les hommes naissent et demeurent libres et égaux en droits. » La Constitution ajoute que la République assure l'égalité de tous les citoyens devant la loi, « sans distinction d'origine, de race ou de religion » (article 1).",
    },
    {
      type: "p",
      texte: "La [fiche officielle « L'égalité »](https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/principes-et-valeurs-de-la-republique/devise-et-symboles-de-la-republique/egalite-1/) donne quatre formes d'égalité :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**devant la loi** : les mêmes règles pour toutes les personnes ;",
        "**des droits civiques** : tous les citoyens français peuvent voter et se présenter à une élection ;",
        "**des droits sociaux** : l'éducation, la santé, le logement et l'emploi sont ouverts à tous ;",
        "**devant les services publics** : chacun peut en bénéficier, et chacun doit respecter leurs règles.",
      ],
    },
    {
      type: "p",
      texte: "L'égalité interdit aussi la discrimination. C'est traiter une personne moins bien qu'une autre à cause d'un critère interdit par la loi, comme son handicap ou sa religion ([fiche « L'égalité (3/3) »](https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/principes-et-valeurs-de-la-republique/devise-et-symboles-de-la-republique/egalite-3/)). L'égalité entre les femmes et les hommes en fait partie, et revient souvent à l'examen.",
    },
    {
      type: "h2",
      texte: "Que veut dire « fraternité » ?",
    },
    {
      type: "p",
      texte: "La fraternité, c'est ==la solidarité entre les citoyens==. C'est ce qui permet de vivre ensemble et de former une société. Elle est la plus jeune des trois valeurs : elle n'est pas dans la Déclaration de 1789. Elle apparaît dans la Constitution de 1848, puis dans celles de 1946 et de 1958 ([fiche « La fraternité »](https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/principes-et-valeurs-de-la-republique/devise-et-symboles-de-la-republique/fraternite-1/)).",
    },
    {
      type: "p",
      texte: "Elle prend plusieurs formes concrètes :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**la solidarité organisée par l'État** : la Sécurité sociale, le RSA, l'aide au logement, payés par les impôts et les cotisations (l'argent prélevé sur les salaires) ;",
        "**la solidarité entre les générations** : les retraites sont payées par les cotisations de ceux qui travaillent ;",
        "**l'engagement** : le bénévolat dans une association, un syndicat ou un parti. Toute personne, française ou étrangère, peut s'engager librement, selon une loi de 1901 ([fiche « La fraternité (2/2) »](https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/principes-et-valeurs-de-la-republique/devise-et-symboles-de-la-republique/fraternite-2/)).",
      ],
    },
    {
      type: "tableau",
      entetes: ["Valeur", "En une phrase", "Le texte à citer"],
      lignes: [
        ["Liberté", "Faire ce que l'on veut, sans nuire aux autres", "Déclaration de 1789, article 4"],
        ["Égalité", "La même loi pour tous, sans discrimination", "Déclaration de 1789, article 1 ; Constitution, article 1"],
        ["Fraternité", "La solidarité entre les citoyens", "Constitution de 1848, puis de 1946 et de 1958"],
      ],
    },
    {
      type: "encadre",
      titre: "La phrase à retenir",
      texte: "La devise « Liberté, Égalité, Fraternité » naît en ==1789==, devient officielle en ==1848==, et figure dans l'==article 2== de la Constitution de 1958. La fraternité est la seule des trois valeurs absente de la Déclaration de 1789.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Et la laïcité, est-ce une valeur de la devise ?",
      id: "laicite",
    },
    {
      type: "p",
      texte: "Non, la laïcité n'est pas dans la devise. C'est un principe de la République, écrit dans l'article 1 de la Constitution : la France est une République « indivisible, laïque, démocratique et sociale ». Elle sépare l'État et les religions, et garantit à chacun la liberté de croire ou de ne pas croire. Elle a sa propre page : [la laïcité expliquée simplement](/articles/laicite-definition).",
    },
    {
      type: "h2",
      texte: "Que demande l'examen civique sur la devise ?",
      id: "droits-homme",
    },
    {
      type: "p",
      texte: "La devise fait partie de la thématique « Principes et valeurs de la République ». Elle compte ==11 questions sur 40== à l'examen, selon l'[arrêté du 10 octobre 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620), article 3. Un arrêté, c'est une décision écrite d'un ministre. Retenez les trois dates de la devise, le sens de chaque mot, et les articles 1 et 4 de la Déclaration de 1789.",
    },
    {
      type: "p",
      texte: "L'article 2 de la Déclaration de 1789 donne quatre droits « naturels et imprescriptibles », qu'on ne peut pas perdre. Ce sont la liberté, la propriété, la sûreté et la résistance à l'oppression. Et son article 6 dit : « La loi est l'expression de la volonté générale. »",
    },
    {
      type: "qcm",
      thematique: "Principes et valeurs de la République",
      question: "Quelle est la devise de la République française ?",
      choix: [
        "Travail, Famille, Patrie",
        "Liberté, Égalité, Fraternité",
        "Unité, Travail, Progrès",
        "Liberté, Sécurité, Justice",
      ],
      reponse: 1,
      explication: "La devise de la République est « Liberté, Égalité, Fraternité », selon l'article 2 de la Constitution. Elle est officielle depuis 1848. Ceci est une question type, écrite par nous, pas une question de l'examen officiel.",
    },
    {
      type: "qcm",
      thematique: "Principes et valeurs de la République",
      question: "Que signifie la fraternité dans la devise de la République ?",
      choix: [
        "Le droit de choisir sa religion",
        "La solidarité entre les citoyens",
        "Le droit de vote des citoyens",
        "La séparation des pouvoirs",
      ],
      reponse: 1,
      explication: "La fraternité, c'est la solidarité entre les citoyens : la Sécurité sociale, les retraites payées par ceux qui travaillent, ou le bénévolat en sont des exemples. Ceci est une question type, écrite par nous, pas une question de l'examen officiel.",
    },
    {
      type: "cta",
      texte: "La devise, la laïcité et les symboles font partie de la même thématique. Sur Test Civique France, les cours des 5 thématiques sont gratuits, et les examens blancs de 40 questions vous donnent votre score et la correction de chaque question. L'inscription est gratuite.",
    },
    {
      type: "p",
      texte: "Pour organiser vos révisions, suivez notre [plan en 4 semaines](/articles/preparer-examen-civique). Pour voir d'autres questions types corrigées, lisez nos [exemples de questions de l'examen civique](/articles/examen-civique-2026-exemples-questions-corrigees). Et si vous ne savez pas encore si l'examen vous concerne, [vérifiez-le en une minute](/eligibilite-examen-civique).",
    },
  ],
  faq: [
    {
      question: "Quelle est la devise de la France ?",
      reponse: "La devise de la France est « Liberté, Égalité, Fraternité ». Elle est écrite dans l'article 2 de la Constitution de 1958. Elle apparaît pendant la Révolution française, en 1789, et devient officielle en 1848, sous la Deuxième République. On la voit sur les mairies, les écoles, des pièces et des documents officiels.",
    },
    {
      question: "Que veut dire Liberté, Égalité, Fraternité ?",
      reponse: "La liberté, c'est pouvoir faire tout ce qui ne nuit pas aux autres. L'égalité, c'est la même loi pour tous, sans discrimination selon l'origine ou la religion. La fraternité, c'est la solidarité entre les citoyens, par exemple la Sécurité sociale ou l'entraide dans les associations. Ensemble, ces trois mots disent les valeurs de la République.",
    },
    {
      question: "Depuis quand Liberté, Égalité, Fraternité est la devise de la France ?",
      reponse: "La formule apparaît pendant la Révolution française, en 1789. Elle devient la devise officielle de la République en 1848, sous la Deuxième République. Sous la Troisième République, elle est gravée sur les mairies et les écoles. Aujourd'hui, l'article 2 de la Constitution de 1958 en fait la devise de la République.",
    },
    {
      question: "La laïcité fait-elle partie de la devise ?",
      reponse: "Non. La devise compte trois mots : Liberté, Égalité, Fraternité. La laïcité est un autre principe de la République, écrit dans l'article 1 de la Constitution : la France est une République indivisible, laïque, démocratique et sociale. Elle garantit la liberté de croire ou de ne pas croire, et la neutralité de l'État.",
    },
  ],
  videos: [
    { id: "8dKBT22FrKk", titre: "Les valeurs de la République française expliquées" },
    { id: "faTI6V7m5Tk", titre: "Liberté, Égalité, Fraternité : comprendre la devise" },
  ],
  sources: [
    {
      titre: "Légifrance : Constitution du 4 octobre 1958, articles 1 et 2",
      url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000571356/",
      type: "juridique",
      luLe: "2026-11-19",
    },
    {
      titre: "Légifrance : Déclaration des droits de l'homme et du citoyen du 26 août 1789 (articles 1, 2, 4 et 6)",
      url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000697056",
      type: "juridique",
      luLe: "2026-11-19",
    },
    {
      titre: "Formation civique (ministère de l'Intérieur) : « La devise française »",
      url: "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/principes-et-valeurs-de-la-republique/devise-et-symboles-de-la-republique/la-devise-francaise/",
      type: "officiel",
      luLe: "2026-11-19",
    },
    {
      titre: "Formation civique (ministère de l'Intérieur) : « La liberté »",
      url: "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/principes-et-valeurs-de-la-republique/devise-et-symboles-de-la-republique/la-liberte/",
      type: "officiel",
      luLe: "2026-11-19",
    },
    {
      titre: "Formation civique (ministère de l'Intérieur) : « L'égalité (1/3) » et « L'égalité (3/3) »",
      url: "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/principes-et-valeurs-de-la-republique/devise-et-symboles-de-la-republique/egalite-1/",
      type: "officiel",
      luLe: "2026-11-19",
    },
    {
      titre: "Formation civique (ministère de l'Intérieur) : « La fraternité (1/2) » et « La fraternité (2/2) »",
      url: "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/principes-et-valeurs-de-la-republique/devise-et-symboles-de-la-republique/fraternite-1/",
      type: "officiel",
      luLe: "2026-11-19",
    },
    {
      titre: "Légifrance : arrêté du 10 octobre 2025 relatif à l'examen civique (article 3, répartition des questions par thématique)",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620",
      type: "juridique",
      luLe: "2026-10-28",
    },
  ],
  aLireAussi: [
    { slug: "laicite-definition", ancre: "La laïcité expliquée simplement" },
    { slug: "symboles-france-marianne-coq-drapeau-tricolore", ancre: "Les symboles de la France" },
  ],
};

export default article;
