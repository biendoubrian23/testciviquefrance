import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 24/11/2026 (`docs/seo/ROBOT.md`).
 * Requête visée : « séparation des pouvoirs » (1 k à 10 k recherches par mois,
 * + 900 % sur trois mois ; Planificateur de mots clés, France, French,
 * 22/11/2026). Famille examen civique : la séparation des pouvoirs est au
 * référentiel officiel (« Système institutionnel et politique ») et revient
 * dans les deux listes officielles des questions de connaissance.
 * Sources lues le 24/11/2026 : Constitution du 4 octobre 1958 (Conseil
 * constitutionnel, art. 3, 5, 6, 8, 12, 20, 21, 24, 49, 50, 61, 61-1, 64,
 * 66) ; formation-civique.interieur.gouv.fr, les trois fiches « État de droit
 * et séparation des pouvoirs » et les listes officielles CSP et CR.
 */
const article: Article = {
  slug: "separation-des-pouvoirs",
  titre: "Séparation des pouvoirs : qui fait la loi, qui l'applique, qui juge ? Les 3 pouvoirs expliqués simplement",
  titreSeo: "Séparation des pouvoirs : les 3 pouvoirs expliqués",
  resume: "Pouvoir législatif, exécutif, judiciaire : qui fait quoi en France, comment ils se contrôlent, et ce que l'examen civique vous demande.",
  chapo: "La séparation des pouvoirs veut dire que ==faire la loi, appliquer la loi et juger== sont confiés à des personnes différentes. En France, le Parlement vote la loi, le président de la République et le Gouvernement l'appliquent, les juges rendent la justice. Le but : que personne n'ait tous les pouvoirs. Voici le principe en mots simples, et les questions que l'examen civique pose dessus.",
  publieLe: "2026-11-24",
  modifieLe: "2026-11-24",
  minutes: 8,
  theme: "La séparation des pouvoirs à l'examen civique",
  motsCles: [
    "séparation des pouvoirs",
    "les 3 pouvoirs",
    "pouvoir législatif exécutif judiciaire",
    "séparation des pouvoirs définition",
    "séparation des pouvoirs examen civique",
    "état de droit",
  ],
  rubrique: "thematiques",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/separation-des-pouvoirs-palais-bourbon.webp",
    alt: "La façade à colonnes du Palais Bourbon, siège de l'Assemblée nationale à Paris, avec des drapeaux français devant les marches",
    largeur: 1200,
    hauteur: 797,
    credit: "Funky Tee, via Wikimedia Commons",
    licence: "CC BY-SA 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Assemblee_Nationale_fa%C3%A7ade.jpg",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qu'est-ce que la séparation des pouvoirs ?",
    },
    {
      type: "p",
      texte: "Dans un pays, il faut faire les lois, les appliquer, et punir ceux qui ne les respectent pas. La séparation des pouvoirs, c'est la règle qui confie ces trois tâches à ==trois pouvoirs différents==. Selon la [fiche officielle de la formation civique](https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/systeme-institutionnel-et-politique/etat-de-droit-et-separation-des-pouvoirs/etat-de-droit-et-separation-des-pouvoirs--presentation-de-letat-de-droit-et-principe-de-la-separation-des-pouvoirs/), ces pouvoirs « ne sont pas entre les mains des mêmes personnes » et ils « se contrôlent mutuellement ».",
    },
    {
      type: "p",
      texte: "Pourquoi ? Parce qu'une personne qui ferait la loi, l'appliquerait et jugerait seule pourrait faire ce qu'elle veut. C'était le cas du roi avant 1789. La séparation des pouvoirs protège donc vos libertés.",
    },
    {
      type: "p",
      texte: "Ce principe vient de la Déclaration des droits de l'homme et du citoyen (DDHC) de 1789. Son article 16 dit qu'une société sans séparation des pouvoirs « n'a point de Constitution ». La Constitution, c'est le texte qui fixe les règles les plus importantes du pays. La nôtre date du 4 octobre 1958, et elle renvoie à la DDHC. Nous l'expliquons dans [notre article sur la DDHC](/articles/ddhc-declaration-droits-homme-citoyen).",
    },
    {
      type: "h2",
      texte: "Quels sont les trois pouvoirs en France ?",
    },
    {
      type: "p",
      texte: "Le tableau suivant reprend la fiche officielle « [Présentation des 3 pouvoirs](https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/systeme-institutionnel-et-politique/etat-de-droit-et-separation-des-pouvoirs/etat-de-droit-et-separation-des-pouvoirs-presentation-des-3-pouvoirs-1/) » et les articles de la [Constitution de 1958](https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/texte-integral-de-la-constitution-du-4-octobre-1958-en-vigueur) :",
    },
    {
      type: "tableau",
      entetes: ["Pouvoir", "Ce qu'il fait", "Qui l'exerce", "Dans la Constitution"],
      lignes: [
        ["Législatif", "Il vote la loi, contrôle le Gouvernement et évalue les politiques publiques.", "Le Parlement : l'Assemblée nationale (577 députés élus par les citoyens) et le Sénat (348 sénateurs élus par les grands électeurs).", "Article 24"],
        ["Exécutif", "Il applique la loi et la fait respecter. Il dirige l'administration et conduit la politique du pays.", "Le président de la République et le Gouvernement (le Premier ministre et les ministres).", "Articles 5, 20 et 21"],
        ["Judiciaire", "Il juge, rend la justice et sanctionne quand la loi n'est pas respectée.", "Les juges et les magistrats, recrutés par concours et non choisis par le pouvoir.", "Articles 64 et 66"],
      ],
    },
    {
      type: "encadre",
      titre: "La phrase à retenir",
      texte: "Le Parlement **fait** la loi. Le Gouvernement **applique** la loi. Les juges **sanctionnent** ceux qui ne la respectent pas.",
      ton: "bleu",
    },
    {
      type: "p",
      texte: "Deux mots à comprendre. Les sénateurs ne sont donc pas élus directement par les citoyens, mais par des élus, appelés « grands électeurs ». Un « magistrat » est une personne dont le métier est de juger ou de poursuivre en justice. La justice se divise en deux, précise la fiche officielle. La justice judiciaire règle les conflits entre personnes et punit les infractions. La justice administrative règle les conflits avec l'État.",
    },
    {
      type: "h2",
      texte: "Comment les trois pouvoirs se contrôlent-ils ?",
    },
    {
      type: "p",
      texte: "Séparer ne suffit pas : chaque pouvoir peut freiner les autres. Le référentiel de l'examen parle d'un ==équilibre entre les pouvoirs==. Voici comment la Constitution l'organise.",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Le Parlement contrôle le Gouvernement.** Le Gouvernement « est responsable devant le Parlement » (article 20). L'Assemblée nationale peut voter une **motion de censure** (article 49) : un vote qui retire sa confiance au Gouvernement. Si elle est adoptée, le Premier ministre doit remettre la démission du Gouvernement (article 50).",
        "**Le président peut dissoudre l'Assemblée nationale** (article 12), après avoir consulté le Premier ministre et les présidents des deux assemblées. Dissoudre, c'est mettre fin au mandat des députés avant la date prévue : de nouvelles élections ont alors lieu.",
        "**La justice est indépendante.** Le président de la République en est le « garant » (article 64). Les magistrats du siège, c'est-à-dire les juges qui rendent les décisions, sont « inamovibles » : on ne peut pas les déplacer ou les renvoyer parce qu'une décision déplaît.",
        "**Le Conseil constitutionnel contrôle les lois.** Il vérifie qu'une loi respecte la Constitution (article 61). Une personne peut aussi contester une loi pendant un procès : c'est la question prioritaire de constitutionnalité, ou QPC (article 61-1).",
      ],
    },
    {
      type: "p",
      texte: "Et si un responsable public ne respecte pas la loi ? La fiche officielle donne l'exemple : « un ministre qui ne respecte pas la loi peut être sanctionné comme tout citoyen ». Personne n'est au-dessus de la loi.",
    },
    {
      type: "h2",
      texte: "Le président de la République a-t-il tous les pouvoirs ?",
    },
    {
      type: "p",
      texte: "Non. C'est une question des deux listes officielles de l'examen, et la réponse est claire. Le président est élu « pour cinq ans au suffrage universel direct » (article 6), c'est-à-dire par tous les électeurs. Il « veille au respect de la Constitution » et assure, « par son arbitrage », le bon fonctionnement des pouvoirs publics (article 5). Il nomme le Premier ministre (article 8).",
    },
    {
      type: "p",
      texte: "Mais il ne vote pas les lois : c'est le Parlement. Il ne juge pas : ce sont les juges. Et c'est le Gouvernement qui « détermine et conduit la politique de la nation » (article 20). Il est dirigé par le Premier ministre, qui « assure l'exécution des lois » (article 21). Pour aller plus loin sur chacun de ces acteurs, lisez [notre guide des institutions françaises](/articles/institutions-francaises-president-assemblee-senat).",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Ne confondez pas le **Parlement** (qui vote les lois) et le **Gouvernement** (qui les applique). Les ministres ne votent pas les lois.",
        "Ne confondez pas l'**article 16 de la DDHC** (la séparation des pouvoirs) avec l'**article 16 de la Constitution** (les pouvoirs exceptionnels du président en cas de crise grave). Ce sont deux textes différents.",
        "Le **Conseil constitutionnel** ne fait pas partie des trois pouvoirs. Le référentiel de l'examen le range parmi les « autres institutions ». Il y place aussi le [Défenseur des droits](/articles/defenseur-des-droits), l'autorité indépendante qui défend vos droits face aux administrations.",
      ],
    },
    {
      type: "h2",
      texte: "Quel lien avec l'État de droit ?",
    },
    {
      type: "p",
      texte: "Les deux notions vont ensemble à l'examen. Selon la fiche officielle, « un État de droit est un système dans lequel la loi est la même pour tous, y compris pour l'État ». La fiche ajoute que c'est ==le contraire de l'État arbitraire==, où le pouvoir décide sans règle. La séparation des pouvoirs est l'un des six principes de l'État de droit. Les cinq autres sont la primauté du droit, l'égalité devant la loi, la légalité, la sécurité juridique et la protection par un juge.",
    },
    {
      type: "p",
      texte: "En pratique, c'est ce qui vous protège face à l'administration. Si vous contestez une décision de la préfecture, l'administration de l'État dans votre département, c'est un juge indépendant qui tranche, pas la préfecture elle-même.",
    },
    {
      type: "h2",
      texte: "Que demande l'examen civique sur les trois pouvoirs ?",
    },
    {
      type: "p",
      texte: "La séparation des pouvoirs relève de la thématique « Système institutionnel et politique », qui compte ==6 questions sur 40== à l'examen, selon l'[arrêté du 10 octobre 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620), article 3. Un arrêté, c'est une décision écrite d'un ministre. Le ministère de l'Intérieur publie la liste des questions de connaissance.",
    },
    {
      type: "p",
      texte: "Pour la carte de séjour pluriannuelle (le titre de séjour de 2 à 4 ans), la [liste officielle CSP](https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-csp/) demande par exemple : « Qui vote les lois ? », « Qui possède le pouvoir exécutif ? », « Quel pouvoir détient un juge ? » ou « Qui sanctionne l'auteur d'un vol ? ». Pour la carte de résident (le titre de 10 ans), la [liste officielle CR](https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-cr/) ajoute : « Pourquoi séparer les trois pouvoirs dans une démocratie ? » et « Qu'est-ce que l'État de droit ? ». Les deux listes posent : « La séparation des pouvoirs est un principe fondamental. Quels sont les trois pouvoirs concernés ? »",
    },
    {
      type: "qcm",
      thematique: "Système institutionnel et politique",
      question: "En France, qui vote les lois ?",
      choix: [
        "Le président de la République",
        "Le Parlement (l'Assemblée nationale et le Sénat)",
        "Le Premier ministre",
        "Le Conseil constitutionnel",
      ],
      reponse: 1,
      explication: "L'article 24 de la Constitution dit : « Le Parlement vote la loi. » Le président et le Premier ministre appartiennent au pouvoir exécutif, qui applique la loi. Le Conseil constitutionnel vérifie que la loi respecte la Constitution, il ne la vote pas. Ceci est une question type, écrite par nous, pas une question de l'examen officiel.",
    },
    {
      type: "qcm",
      thematique: "Système institutionnel et politique",
      question: "Pourquoi sépare-t-on les trois pouvoirs dans une démocratie ?",
      choix: [
        "Pour que les lois soient votées plus vite",
        "Pour éviter qu'une seule personne ou un seul groupe ait tous les pouvoirs",
        "Pour que le président puisse juger les ministres",
        "Pour supprimer les élections",
      ],
      reponse: 1,
      explication: "Séparer les pouvoirs évite l'arbitraire : celui qui fait la loi n'est pas celui qui l'applique, ni celui qui juge. Les pouvoirs se contrôlent mutuellement, ce qui protège les libertés de chacun. Ceci est une question type, écrite par nous, pas une question de l'examen officiel.",
    },
    {
      type: "cta",
      texte: "Parlement, Gouvernement, juges : les trois pouvoirs se mélangent vite sous le stress. Sur Test Civique France, les cours des 5 thématiques sont gratuits, et les examens blancs de 40 questions vous donnent votre score et la correction de chaque question. L'inscription est gratuite.",
    },
    {
      type: "p",
      texte: "Pour réviser autour de ce thème, lisez aussi [la laïcité expliquée simplement](/articles/laicite-definition), [vos droits et devoirs en France](/articles/droits-devoirs-citoyens-france-guide) et nos [exemples de questions corrigées](/articles/examen-civique-2026-exemples-questions-corrigees). Et si vous ne savez pas encore si l'examen vous concerne, [vérifiez-le en une minute](/eligibilite-examen-civique).",
    },
  ],
  faq: [
    {
      question: "Quels sont les 3 pouvoirs en France ?",
      reponse: "Le pouvoir législatif vote la loi : c'est le Parlement, formé de l'Assemblée nationale et du Sénat. Le pouvoir exécutif applique la loi : ce sont le président de la République et le Gouvernement. Le pouvoir judiciaire juge et sanctionne : ce sont les juges et les magistrats, indépendants des deux autres pouvoirs.",
    },
    {
      question: "Quelle est la définition de la séparation des pouvoirs ?",
      reponse: "C'est le principe qui confie la création des lois, leur application et le jugement à des personnes différentes, qui se contrôlent entre elles. Il vise à empêcher qu'une seule personne ait tous les pouvoirs. En France, il vient de l'article 16 de la Déclaration de 1789, à laquelle renvoie la Constitution de 1958.",
    },
    {
      question: "Qui contrôle le Gouvernement ?",
      reponse: "Le Parlement. L'article 24 de la Constitution dit qu'il « contrôle l'action du Gouvernement ». L'Assemblée nationale peut voter une motion de censure. Si la majorité de ses membres la vote, le Premier ministre doit remettre la démission du Gouvernement au président de la République (articles 49 et 50).",
    },
    {
      question: "La justice est-elle indépendante en France ?",
      reponse: "Oui. L'article 64 de la Constitution fait du président de la République le garant de l'indépendance de l'autorité judiciaire. Les juges qui rendent les décisions sont inamovibles : on ne peut pas les déplacer pour une décision. Ils sont recrutés par concours, et non choisis par le pouvoir politique.",
    },
  ],
  sources: [
    {
      titre: "Conseil constitutionnel : Constitution du 4 octobre 1958 en vigueur (art. 3, 5, 6, 8, 12, 20, 21, 24, 49, 50, 61, 61-1, 64, 66)",
      url: "https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/texte-integral-de-la-constitution-du-4-octobre-1958-en-vigueur",
      type: "juridique",
      luLe: "2026-11-24",
    },
    {
      titre: "Formation civique (ministère de l'Intérieur) : « État de droit et séparation des pouvoirs : présentation de l'État de droit et principe de la séparation des pouvoirs »",
      url: "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/systeme-institutionnel-et-politique/etat-de-droit-et-separation-des-pouvoirs/etat-de-droit-et-separation-des-pouvoirs--presentation-de-letat-de-droit-et-principe-de-la-separation-des-pouvoirs/",
      type: "officiel",
      luLe: "2026-11-24",
    },
    {
      titre: "Formation civique (ministère de l'Intérieur) : « Présentation des 3 pouvoirs (1/2) »",
      url: "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/systeme-institutionnel-et-politique/etat-de-droit-et-separation-des-pouvoirs/etat-de-droit-et-separation-des-pouvoirs-presentation-des-3-pouvoirs-1/",
      type: "officiel",
      luLe: "2026-11-24",
    },
    {
      titre: "Formation civique (ministère de l'Intérieur) : « Présentation des 3 pouvoirs (2/2) »",
      url: "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/systeme-institutionnel-et-politique/etat-de-droit-et-separation-des-pouvoirs/etat-de-droit-et-separation-des-pouvoirs-presentation-des-3-pouvoirs-2/",
      type: "officiel",
      luLe: "2026-11-24",
    },
    {
      titre: "Formation civique (ministère de l'Intérieur) : listes officielles des questions de connaissance, CSP et CR",
      url: "https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-cr/",
      type: "officiel",
      luLe: "2026-11-24",
    },
    {
      titre: "Conseil constitutionnel : Déclaration des droits de l'homme et du citoyen de 1789 (article 16)",
      url: "https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/declaration-des-droits-de-l-homme-et-du-citoyen-de-1789",
      type: "juridique",
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
