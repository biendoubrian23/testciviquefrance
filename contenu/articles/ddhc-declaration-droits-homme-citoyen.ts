import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 22/11/2026 (`docs/seo/ROBOT.md`).
 * Requêtes visées : « ddhc » (10 k à 100 k recherches par mois, + 900 % sur
 * trois mois) et « déclaration des droits de l'homme et du citoyen » (1 k à
 * 10 k) ; Planificateur de mots clés, France, toutes les langues, 19/11/2026.
 * Famille examen civique (en retard sur le mélange) : la DDHC est citée deux
 * fois par le référentiel officiel (les textes garants des droits
 * fondamentaux ; l'article 16 pour la séparation des pouvoirs), et figure
 * dans les deux listes officielles des questions de connaissance.
 * Sources lues le 22/11/2026 : Conseil constitutionnel (texte de la DDHC,
 * Constitution de 1958 et son Préambule, décision n° 71-44 DC) ;
 * formation-civique.interieur.gouv.fr, fiche « Présentation des principaux
 * textes (1/3) : La Déclaration des droits de l'homme et du citoyen », et
 * listes officielles CSP et CR ; référentiel de l'examen civique.
 */
const article: Article = {
  slug: "ddhc-declaration-droits-homme-citoyen",
  titre: "DDHC : la Déclaration de 1789 expliquée simplement, et les articles que l'examen civique vous demande",
  titreSeo: "DDHC : la Déclaration de 1789 expliquée simplement",
  resume: "La Déclaration des droits de l'homme et du citoyen de 1789 en mots simples : les articles clés, sa valeur aujourd'hui, et l'examen civique.",
  chapo: "La Déclaration des droits de l'homme et du citoyen (DDHC) pose les libertés de chaque personne. Elle a été ==adoptée le 26 août 1789==, au début de la Révolution française. Elle compte 17 articles. Elle fait encore partie du droit français aujourd'hui, et l'examen civique vous interroge sur elle : voici l'essentiel, en mots simples.",
  publieLe: "2026-11-22",
  modifieLe: "2026-11-22",
  minutes: 9,
  theme: "La DDHC à l'examen civique",
  motsCles: [
    "ddhc",
    "déclaration des droits de l'homme et du citoyen",
    "ddhc 1789",
    "déclaration des droits de l'homme 1789 article 1",
    "ddhc examen civique",
    "article 16 ddhc séparation des pouvoirs",
  ],
  rubrique: "thematiques",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/declaration-droits-homme-1789.webp",
    alt: "Le haut du tableau de la Déclaration de 1789 : le titre en lettres d'or entre deux figures allégoriques, au-dessus du préambule",
    largeur: 1200,
    hauteur: 590,
    credit: "Localcosmos, via Wikimedia Commons",
    licence: "CC0",
    source: "https://commons.wikimedia.org/wiki/File:Declaration_of_the_Rights_of_Man_and_of_the_Citizen_in_1789_cropped_header.jpg",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qu'est-ce que la DDHC ?",
    },
    {
      type: "p",
      texte: "La DDHC est un texte écrit par les députés de l'Assemblée nationale pendant l'été 1789. Elle est ==adoptée le 26 août 1789==. Selon la [fiche officielle de la formation civique](https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/droits-et-devoirs/droits-fondamentaux/les-principaux-textes-la-declaraion-des-droits-de-lhomme-et-du-citoyen/), elle « marque une rupture avec l'Ancien Régime ». L'Ancien Régime, c'est la France d'avant 1789, gouvernée par un roi qui avait tous les pouvoirs.",
    },
    {
      type: "p",
      texte: "La Déclaration est courte : une introduction, appelée préambule, puis ==17 articles==. Le préambule explique pourquoi elle existe. Pour ses auteurs, l'ignorance, l'oubli ou le mépris des droits de l'homme sont les seules causes des malheurs publics. Il faut donc écrire ces droits, pour que chacun les connaisse ([texte intégral, Conseil constitutionnel](https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/declaration-des-droits-de-l-homme-et-du-citoyen-de-1789)).",
    },
    {
      type: "p",
      texte: "Un mot sur le titre. Les « droits de l'homme » sont ceux de toute personne, parce qu'elle est un être humain. Les « droits du citoyen » sont ceux de la personne qui participe à la vie politique du pays, par exemple en votant.",
    },
    {
      type: "h2",
      texte: "Les articles de la DDHC à connaître",
    },
    {
      type: "p",
      texte: "Vous n'avez pas besoin d'apprendre les 17 articles par cœur. Voici ceux que la fiche officielle met en avant, et ceux qui fondent des notions de l'examen civique :",
    },
    {
      type: "tableau",
      entetes: ["Article", "Ce qu'il dit", "En mots simples"],
      lignes: [
        ["1", "« Les hommes naissent et demeurent libres et égaux en droits. »", "Tout le monde a les mêmes droits, dès la naissance et toute la vie."],
        ["2", "Les droits naturels sont « la liberté, la propriété, la sûreté et la résistance à l'oppression ».", "L'État existe pour protéger ces quatre droits."],
        ["3", "« Le principe de toute souveraineté réside essentiellement dans la Nation. »", "Le pouvoir vient du peuple, pas d'un roi."],
        ["4", "La liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui.", "Vous êtes libre, tant que vous ne faites pas de tort aux autres."],
        ["6", "La loi est l'expression de la volonté générale. Elle est la même pour tous.", "Les citoyens font la loi, directement ou par leurs élus, et elle s'applique à tous."],
        ["9", "Tout homme est présumé innocent jusqu'à ce qu'il ait été déclaré coupable.", "C'est la présomption d'innocence."],
        ["10", "Nul ne doit être inquiété pour ses opinions, « même religieuses », si elles ne troublent pas l'ordre public.", "Vous pouvez avoir la religion ou les idées de votre choix."],
        ["11", "La libre communication des pensées et des opinions est un des droits les plus précieux.", "C'est la liberté d'expression : parler, écrire, publier, en répondant des abus prévus par la loi."],
        ["16", "Une société sans garantie des droits ni séparation des pouvoirs « n'a point de Constitution ».", "Les pouvoirs doivent être séparés pour protéger les libertés."],
        ["17", "La propriété est un droit inviolable et sacré.", "On ne peut vous prendre un bien que pour une nécessité publique, avec une juste indemnité payée avant."],
      ],
    },
    {
      type: "encadre",
      titre: "La phrase à retenir",
      texte: "L'article 1 de la DDHC : « Les hommes naissent et demeurent libres et égaux en droits. » C'est la phrase la plus connue du texte, et le fondement de l'égalité devant la loi en France.",
      ton: "bleu",
    },
    {
      type: "p",
      texte: "Ces libertés ne sont pas sans limites. L'article 4 le dit : les bornes de la liberté ne peuvent être fixées que par la loi. Le référentiel officiel de l'examen reprend cette idée. Les libertés sont limitées d'abord par la liberté des autres, ensuite par l'ordre public, c'est-à-dire la sécurité et la tranquillité de tous.",
    },
    {
      type: "h2",
      texte: "La DDHC est-elle encore en vigueur aujourd'hui ?",
    },
    {
      type: "p",
      texte: "Oui. La Constitution du 4 octobre 1958, le texte qui fixe les règles les plus importantes du pays, commence par un préambule. Sa première phrase dit que le peuple français est attaché aux droits de l'homme « tels qu'ils ont été définis par la Déclaration de 1789 » ([Constitution de 1958, Conseil constitutionnel](https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/texte-integral-de-la-constitution-du-4-octobre-1958-en-vigueur)).",
    },
    {
      type: "p",
      texte: "Le Conseil constitutionnel est l'institution qui vérifie que les lois respectent la Constitution. Le 16 juillet 1971, il a jugé une loi en s'appuyant sur ce préambule ([décision n° 71-44 DC](https://www.conseil-constitutionnel.fr/decision/1971/7144DC.htm)). Depuis, ==une loi contraire à la DDHC peut être censurée==, c'est-à-dire annulée en tout ou en partie. On dit que la DDHC fait partie du « bloc de constitutionnalité », l'ensemble des textes qui ont la même force que la Constitution.",
    },
    {
      type: "p",
      texte: "Le référentiel officiel de l'examen civique cite trois textes qui protègent les droits fondamentaux : ==la Constitution de 1958, la DDHC de 1789 et la Charte de l'environnement de 2004==. Retenez ces trois dates ensemble.",
    },
    {
      type: "h2",
      texte: "Quel lien avec la laïcité et la séparation des pouvoirs ?",
    },
    {
      type: "p",
      texte: "Deux notions clés de l'examen viennent de la DDHC. La première est la laïcité. L'article 10 protège les opinions « même religieuses » : c'est le fondement de la liberté de conscience, que la loi de 1905 organisera plus tard. Nous l'expliquons dans [notre article sur la laïcité](/articles/laicite-definition).",
    },
    {
      type: "p",
      texte: "La seconde est la séparation des pouvoirs. Le référentiel de l'examen dit que ce principe est « consacré par l'article 16 » de la DDHC. Il existe trois pouvoirs. Le pouvoir législatif fait les lois : ce sont les députés et les sénateurs. Le pouvoir exécutif applique les lois : c'est le gouvernement. L'autorité judiciaire rend la justice : ce sont les juges. Les séparer évite qu'une seule personne ait tous les pouvoirs, comme le roi avant 1789.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Ne confondez pas la DDHC (1789) avec la Constitution de la Ve République (1958) : la seconde renvoie à la première dans son préambule.",
        "Ne confondez pas non plus la DDHC avec la Déclaration universelle des droits de l'homme, un autre texte, adopté en 1948 par l'ONU.",
        "La Révolution française commence en 1789, mais la Ire République n'arrive qu'en 1792, selon le référentiel de l'examen.",
      ],
    },
    {
      type: "h2",
      texte: "Que demande l'examen civique sur la DDHC ?",
    },
    {
      type: "p",
      texte: "La DDHC relève surtout de la thématique « Droits et devoirs », qui compte ==11 questions sur 40== à l'examen, selon l'[arrêté du 10 octobre 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620), article 3. Un arrêté, c'est une décision écrite d'un ministre. Le ministère de l'Intérieur publie la liste des questions de connaissance.",
    },
    {
      type: "p",
      texte: "La carte de séjour pluriannuelle est le titre de séjour de 2 à 4 ans. Sa liste contient par exemple : « De quelle année date la Déclaration des droits de l'homme et du citoyen ? » et « Quel texte a été adopté pendant la Révolution française ? » ([liste officielle CSP](https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-csp/)). La carte de résident est le titre de séjour de 10 ans. Sa liste demande : « Laquelle de ces citations est inscrite dans la Déclaration des Droits de l'homme et du Citoyen de 1789 ? » ([liste officielle CR](https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-cr/)).",
    },
    {
      type: "qcm",
      thematique: "Droits et devoirs",
      question: "Quelle phrase vient de l'article 1 de la Déclaration des droits de l'homme et du citoyen ?",
      choix: [
        "« Liberté, Égalité, Fraternité »",
        "« Les hommes naissent et demeurent libres et égaux en droits »",
        "« La France est une République indivisible, laïque, démocratique et sociale »",
        "« Aux armes, citoyens »",
      ],
      reponse: 1,
      explication: "C'est l'article 1 de la DDHC de 1789. « Liberté, Égalité, Fraternité » est la devise de la République, « La France est une République… » vient de l'article 1 de la Constitution de 1958, et « Aux armes, citoyens » vient de La Marseillaise. Ceci est une question type, écrite par nous, pas une question de l'examen officiel.",
    },
    {
      type: "qcm",
      thematique: "Système institutionnel et politique",
      question: "Quel principe l'article 16 de la DDHC pose-t-il ?",
      choix: [
        "Le droit de vote des femmes",
        "La séparation des pouvoirs",
        "L'élection du président au suffrage universel",
        "L'école gratuite et obligatoire",
      ],
      reponse: 1,
      explication: "L'article 16 dit qu'une société sans garantie des droits ni séparation des pouvoirs n'a pas de Constitution. Le droit de vote des femmes date de 1944, l'école gratuite et obligatoire des années 1880. Ceci est une question type, écrite par nous, pas une question de l'examen officiel.",
    },
    {
      type: "cta",
      texte: "Les dates 1789, 1958 et 2004 se mélangent vite le jour de l'examen. Sur Test Civique France, les cours des 5 thématiques sont gratuits, et les examens blancs de 40 questions vous donnent votre score et la correction de chaque question. L'inscription est gratuite.",
    },
    {
      type: "p",
      texte: "Pour réviser la même famille de notions, lisez nos articles sur [la devise « Liberté, Égalité, Fraternité »](/articles/valeurs-republique-francaise-liberte-egalite-fraternite), sur [vos droits et devoirs en France](/articles/droits-devoirs-citoyens-france-guide) et nos [exemples de questions corrigées](/articles/examen-civique-2026-exemples-questions-corrigees). Et si vous ne savez pas encore si l'examen vous concerne, [vérifiez-le en une minute](/eligibilite-examen-civique).",
    },
  ],
  faq: [
    {
      question: "Qu'est-ce que la DDHC en résumé ?",
      reponse: "La Déclaration des droits de l'homme et du citoyen est un texte adopté le 26 août 1789, au début de la Révolution française. En 17 articles, elle pose l'égalité en droits, la liberté, la propriété, la sûreté, la présomption d'innocence, la liberté d'opinion et d'expression, et la séparation des pouvoirs. Elle a encore valeur constitutionnelle aujourd'hui.",
    },
    {
      question: "Quel est l'article 1 de la Déclaration des droits de l'homme ?",
      reponse: "L'article 1 dit : « Les hommes naissent et demeurent libres et égaux en droits. » Il ajoute que les distinctions sociales ne peuvent être fondées que sur l'utilité commune. Autrement dit, personne n'a plus de droits qu'un autre par sa naissance : c'est la fin des privilèges de l'Ancien Régime et le fondement de l'égalité devant la loi.",
    },
    {
      question: "Combien d'articles compte la DDHC ?",
      reponse: "La DDHC compte 17 articles, précédés d'un préambule qui explique pourquoi les droits doivent être écrits. Les plus connus sont l'article 1 (égalité en droits) et l'article 4 (la liberté s'arrête au tort fait aux autres). Viennent ensuite l'article 11 (liberté d'expression) et l'article 16 (séparation des pouvoirs).",
    },
    {
      question: "La DDHC a-t-elle une valeur juridique aujourd'hui ?",
      reponse: "Oui. Le préambule de la Constitution de 1958 renvoie aux droits définis par la Déclaration de 1789. Depuis une décision du 16 juillet 1971, le Conseil constitutionnel s'appuie sur ce préambule pour juger les lois. Une loi contraire à la DDHC peut donc être censurée. La DDHC fait partie du bloc de constitutionnalité.",
    },
  ],
  sources: [
    {
      titre: "Conseil constitutionnel : Déclaration des droits de l'homme et du citoyen de 1789 (texte intégral)",
      url: "https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/declaration-des-droits-de-l-homme-et-du-citoyen-de-1789",
      type: "juridique",
      luLe: "2026-11-22",
    },
    {
      titre: "Conseil constitutionnel : Constitution du 4 octobre 1958 en vigueur, Préambule",
      url: "https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/texte-integral-de-la-constitution-du-4-octobre-1958-en-vigueur",
      type: "juridique",
      luLe: "2026-11-22",
    },
    {
      titre: "Conseil constitutionnel : décision n° 71-44 DC du 16 juillet 1971 (liberté d'association, valeur du préambule)",
      url: "https://www.conseil-constitutionnel.fr/decision/1971/7144DC.htm",
      type: "juridique",
      luLe: "2026-11-22",
    },
    {
      titre: "Formation civique (ministère de l'Intérieur) : « Présentation des principaux textes (1/3) : La Déclaration des droits de l'homme et du citoyen »",
      url: "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/droits-et-devoirs/droits-fondamentaux/les-principaux-textes-la-declaraion-des-droits-de-lhomme-et-du-citoyen/",
      type: "officiel",
      luLe: "2026-11-22",
    },
    {
      titre: "Formation civique (ministère de l'Intérieur) : listes officielles des questions de connaissance, CSP et CR",
      url: "https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-csp/",
      type: "officiel",
      luLe: "2026-11-22",
    },
    {
      titre: "Légifrance : arrêté du 10 octobre 2025 relatif à l'examen civique (article 3, répartition des questions par thématique)",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620",
      type: "juridique",
      luLe: "2026-10-28",
    },
  ],
};

export default article;
