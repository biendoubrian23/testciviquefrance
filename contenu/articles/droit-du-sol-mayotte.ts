import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 27/10/2026 (`docs/seo/ROBOT.md`).
 * Requête visée : « droit du sol mayotte » (100 à 1 k recherches par mois,
 * Planificateur de mots clés, France et 6 COM, 20/10/2026). Grappe outre-mer
 * des priorités du premier mois (`MOTS-CLES.md`, rang 6). Aucune page du site
 * ne traitait la règle de Mayotte, et la fiche service-public F295 se contente
 * de dire que « des règles spécifiques s'appliquent ». Sources lues le
 * 27/10/2026 : circulaire du ministère de la Justice du 5 mai 2026 (NOR
 * JUSC2611765C), texte intégral ; décision du Conseil constitutionnel
 * n° 2025-881 DC du 7 mai 2025 ; service-public F295.
 */
const article: Article = {
  slug: "droit-du-sol-mayotte",
  titre: "Droit du sol à Mayotte : un an de séjour régulier pour les deux parents, et la démarche à faire en mairie",
  titreSeo: "Droit du sol à Mayotte : les conditions en 2026",
  resume: "Enfant né à Mayotte de parents étrangers : les conditions pour devenir français, les preuves du séjour des parents et la mention à demander en mairie.",
  chapo: "Un enfant né à Mayotte de parents étrangers peut devenir français, comme ailleurs en France. Mais il y a une condition de plus : à sa naissance, ==ses deux parents devaient être en séjour régulier depuis plus d'un an==. Cette règle vient de la loi du 12 mai 2025. Voici à qui elle s'applique, comment la prouver, et la démarche à faire en mairie dès maintenant.",
  publieLe: "2026-10-27",
  modifieLe: "2026-10-27",
  minutes: 10,
  theme: "droit du sol à Mayotte",
  motsCles: [
    "droit du sol mayotte",
    "nationalité française mayotte",
    "enfant né à mayotte parents étrangers",
    "article 2493 code civil",
    "loi 12 mai 2025 mayotte",
    "mention marge acte de naissance mayotte",
    "décret 2026-338",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/droit-du-sol-mayotte.webp",
    alt: "La façade de l'hôtel de ville de Mamoudzou, à Mayotte, sous un ciel bleu, avec des palmiers devant l'entrée",
    largeur: 1024,
    hauteur: 768,
    credit: "David Stanley from Nanaimo, Canada, via Wikimedia Commons",
    licence: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:Mamoudzou_City_Hall_(10030018363).jpg",
  },
  blocs: [
    {
      type: "h2",
      texte: "Le droit du sol, c'est quoi, en France ?",
    },
    {
      type: "p",
      texte: "Le droit du sol, c'est la possibilité de devenir français parce qu'on est né en France et qu'on y a grandi. Un enfant né en France de parents étrangers n'est pas français à la naissance. Il le devient ==automatiquement à 18 ans== s'il vit en France à cette date et y a vécu au moins 5 ans depuis ses 11 ans ([service-public, F295](https://www.service-public.gouv.fr/particuliers/vosdroits/F295)).",
    },
    {
      type: "p",
      texte: "Il peut aussi le devenir plus tôt, par une **déclaration de nationalité**. C'est une demande écrite qui se dépose au tribunal. Entre 13 et 15 ans, il faut 5 ans de vie en France depuis l'âge de 8 ans, et l'enfant doit être d'accord. À 16 ou 17 ans, il faut 5 ans depuis l'âge de 11 ans, et l'enfant fait la demande lui-même.",
    },
    {
      type: "p",
      texte: "Ces règles valent aussi à Mayotte. Mais la loi y ajoute une condition sur les parents. Service-public le signale sans la détailler. Nous la détaillons ici à partir de la [circulaire du ministère de la Justice du 5 mai 2026](https://www.justice.gouv.fr/sites/default/files/2026-05/JUSC2611765C.pdf), le texte qui explique la loi aux tribunaux.",
    },
    {
      type: "h2",
      texte: "Quelle condition de plus pour un enfant né à Mayotte ?",
    },
    {
      type: "p",
      texte: "À la date de la naissance, ==les deux parents== devaient résider en France de façon **régulière**, avec un titre de séjour, et **sans interruption depuis plus d'un an**. Le titre de séjour, c'est le document qui autorise un étranger à vivre en France. La règle est écrite à l'article 2493 du Code civil, dans sa version issue de la loi n° 2025-412 du 12 mai 2025.",
    },
    {
      type: "p",
      texte: "Si la filiation n'est établie qu'avec un seul parent, la condition ne porte que sur lui. La filiation, c'est le lien juridique entre un enfant et son parent, par exemple quand un seul parent a reconnu l'enfant.",
    },
    {
      type: "tableau",
      entetes: ["", "Avant la loi de 2025", "Depuis la loi de 2025"],
      lignes: [
        ["Quel parent ?", "Au moins un des deux", "Les deux (ou le seul parent reconnu)"],
        ["Depuis combien de temps ?", "Plus de 3 mois", "Plus d'un an"],
        ["Texte", "Loi du 10 septembre 2018", "Loi du 12 mai 2025"],
      ],
      legende: "Condition de séjour régulier et ininterrompu des parents à la naissance de l'enfant (article 2493 du Code civil), selon la circulaire du ministère de la Justice du 5 mai 2026.",
    },
    {
      type: "p",
      texte: "Le Conseil constitutionnel a jugé cette loi conforme à la Constitution, avec une réserve. Il a retenu les « caractéristiques et contraintes particulières » de Mayotte ([décision n° 2025-881 DC du 7 mai 2025](https://www.conseil-constitutionnel.fr/decision/2025/2025881DC.htm)). Sa réserve porte sur la pièce d'identité, nous y revenons plus bas.",
    },
    {
      type: "h2",
      texte: "Quelle règle s'applique à votre enfant ?",
    },
    {
      type: "p",
      texte: "La loi de 2025 est en vigueur depuis le ==14 mai 2025==. Mais elle ne s'applique pas à tout le monde de la même façon. Ce qui compte, c'est la date de la démarche, ou la date des 18 ans (article 17-2 du Code civil, cité par la circulaire).",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Pour une déclaration** entre 13 et 17 ans : on applique la loi en vigueur le jour où la déclaration est signée. Une déclaration signée depuis le 14 mai 2025 suit la nouvelle règle (deux parents, un an).",
        "**Pour la nationalité automatique à 18 ans** : on applique la loi en vigueur le jour des 18 ans, pas le jour où l'on demande la preuve.",
        "**Pour un enfant né avant le 1er mars 2019** : il existe une autre voie (article 2494 du Code civil). Il peut prouver que l'un de ses parents était en séjour régulier pendant ses 5 années de résidence en France. Ces périodes n'ont pas besoin d'être continues.",
        "**Pour un enfant né à partir du 1er mars 2019** : seule la condition de l'article 2493 joue.",
      ],
    },
    {
      type: "encadre",
      titre: "Un exemple",
      texte: "Un enfant né à Mamoudzou en 2020 signe une déclaration de nationalité à 13 ans, en 2033. La déclaration est signée après le 14 mai 2025 : il faudra prouver que ses deux parents étaient en séjour régulier depuis plus d'un an à sa naissance, en 2020.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Quels papiers prouvent le séjour régulier des parents ?",
    },
    {
      type: "p",
      texte: "Il faut montrer les titres de séjour qui couvrent ==toute l'année avant la naissance==, sans trou entre eux. La liste des documents acceptés est fixée par un arrêté du 1er mars 2019, mis à jour le 30 avril 2026 :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "le visa de long séjour qui vaut titre de séjour, validé en ligne, ou le visa de long séjour d'un an au plus ;",
        "l'**autorisation provisoire de séjour** (APS), quelle que soit sa mention : c'est un titre court que la préfecture donne dans certains cas ;",
        "la carte de séjour temporaire et la **carte de séjour pluriannuelle** (valable plusieurs années), quelle que soit la mention ;",
        "la carte de séjour des citoyens européens, de l'Espace économique européen, de Suisse et de leur famille ;",
        "la carte de résident (un titre de 10 ans) et la carte de résident de longue durée UE ;",
        "le certificat de résidence des ressortissants algériens.",
      ],
    },
    {
      type: "p",
      texte: "Si le parent a renouvelé son titre pendant cette année, il peut aussi montrer l'ancien titre et le **récépissé**, le papier provisoire que la préfecture remet pendant l'étude d'une demande. Les attestations de l'ANEF comptent aussi, comme l'[attestation de prolongation d'instruction](/articles/attestation-prolongation-instruction). L'ANEF, c'est le site du ministère de l'Intérieur pour les demandes de titre.",
    },
    {
      type: "h3",
      texte: "Et pour prouver que le séjour n'a pas été interrompu ?",
    },
    {
      type: "p",
      texte: "Les titres ne suffisent pas. Il faut aussi des papiers qui montrent que le parent vivait bien en France, mois après mois. La circulaire cite par exemple :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "des quittances de loyer, des factures d'électricité, d'eau ou de téléphone, une attestation d'assurance habitation ;",
        "des fiches de paie ou une attestation de l'employeur (les montants peuvent être cachés) ;",
        "des documents médicaux (les informations de santé peuvent être cachées) ;",
        "pour un parent étudiant, un certificat de scolarité ou un bulletin de notes ;",
        "pour un parent hébergé, le justificatif de domicile de la personne qui l'héberge, avec une attestation sur l'honneur de cette personne.",
      ],
    },
    {
      type: "h2",
      texte: "La démarche à faire en mairie dès la naissance",
    },
    {
      type: "p",
      texte: "Prouver un séjour de plus d'un an, treize ou dix-huit ans plus tard, est difficile : les papiers se perdent. La loi prévoit donc une démarche utile dès maintenant. Chaque parent peut demander qu'une **mention** soit écrite en marge de l'acte de naissance de l'enfant (article 2495 du Code civil). Cette mention dit que son séjour était régulier et ininterrompu à la naissance.",
    },
    {
      type: "p",
      texte: "Plus tard, l'enfant n'aura pas à refournir ces preuves. La demande se fait auprès d'un **officier de l'état civil**, l'agent de la mairie qui enregistre les naissances. Elle est possible ==pendant toute la minorité de l'enfant==, dans n'importe quelle mairie.",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Allez en personne en mairie.** Une demande par courrier ou par courriel n'est pas acceptée.",
        "**Apportez un passeport biométrique** valide, avec photo. Si votre pays ne délivre pas ce passeport, une autre pièce d'identité avec photo suffit (c'est la réserve du Conseil constitutionnel).",
        "**Apportez le titre de séjour** valide sous lequel vous viviez en France à la naissance.",
        "**Apportez les preuves de résidence** de l'année avant la naissance. Selon la circulaire, ==un document par mois== au moins peut suffire.",
        "**Ajoutez un extrait d'acte de naissance** de l'enfant de moins de 3 mois, si vous ne faites pas la demande au moment de déclarer la naissance.",
      ],
    },
    {
      type: "p",
      texte: "Un parent peut faire la demande pour les deux, ou chaque parent pour lui-même. La mention n'apparaît pas sur les copies ordinaires de l'acte : elle n'y figure que si l'enfant, ou son parent tant qu'il est mineur, le demande.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**En cas de refus**, la mairie doit vous remettre une décision écrite qui dit pourquoi. Vous avez ==2 mois== pour contester devant le **procureur de la République**, le magistrat qui contrôle l'état civil, par lettre recommandée avec accusé de réception.",
        "**Un titre obtenu moins d'un an avant la naissance** ne suffit pas, d'après la circulaire. C'est l'un des motifs de refus qu'elle cite.",
      ],
    },
    {
      type: "p",
      texte: "Pour déclarer la naissance elle-même, la circulaire rappelle que la mairie ne peut pas exiger seulement une carte d'identité ou un passeport. Tout document officiel avec nom, date de naissance, photo et signature peut prouver votre identité.",
    },
    {
      type: "h2",
      texte: "Et ensuite, quand l'enfant demandera la nationalité ?",
    },
    {
      type: "p",
      texte: "Entre 13 et 17 ans, la déclaration se dépose au **tribunal judiciaire**, le tribunal qui traite les questions de nationalité. À 18 ans, la nationalité est automatique, mais il faut la prouver avec un **certificat de nationalité française**, que le même tribunal délivre. Notre guide sur [la nationalité d'un enfant mineur](/articles/naturalisation-enfant-mineur-france-2026-effet-collectif-declaration) présente les autres voies, comme l'effet collectif quand un parent est naturalisé.",
    },
    {
      type: "p",
      texte: "Pour un cas personnel, adressez-vous au service de la nationalité du tribunal de Mamoudzou, à un avocat ou à une association comme La Cimade. Le **Défenseur des droits**, une autorité indépendante et gratuite, a aussi travaillé sur l'état civil à Mayotte (décision n° 2025-142 du 29 juillet 2025, citée par la circulaire).",
    },
    {
      type: "qcm",
      thematique: "Histoire, géographie et culture",
      question: "Laquelle de ces collectivités est un département et région d'outre-mer (DROM) ?",
      choix: [
        "La Nouvelle-Calédonie",
        "Mayotte",
        "La Polynésie française",
        "Saint-Pierre-et-Miquelon",
      ],
      reponse: 1,
      explication: "Les cinq DROM sont la Guadeloupe, la Martinique, la Guyane, La Réunion et Mayotte. Les autres territoires d'outre-mer ont d'autres statuts. Le référentiel de l'examen civique demande de connaître les cinq DROM. Cette question est une question type, pas une question officielle de l'examen.",
    },
    {
      type: "p",
      texte: "Les parents, eux, auront peut-être à passer l'**examen civique** pour leur prochaine carte de séjour pluriannuelle ou de résident. Vérifiez en une minute si [l'examen vous concerne](/eligibilite-examen-civique), et lisez ce qu'il faut savoir sur [l'examen pour la carte de résident](/articles/examen-civique-carte-de-resident).",
    },
  ],
  faq: [
    {
      question: "Est-ce que le droit du sol existe toujours à Mayotte ?",
      reponse: "Oui. Un enfant né à Mayotte de parents étrangers peut toujours devenir français à 18 ans ou par déclaration dès 13 ans, comme ailleurs en France. Mais depuis la loi du 12 mai 2025, ses deux parents devaient être en séjour régulier et ininterrompu depuis plus d'un an à sa naissance (article 2493 du Code civil).",
    },
    {
      question: "Quelles sont les conditions du droit du sol à Mayotte ?",
      reponse: "L'enfant doit remplir les conditions de toute la France, dont 5 ans de vie en France. À Mayotte, il faut en plus qu'à sa naissance, ses deux parents (ou le seul parent reconnu) aient eu un titre de séjour. Ce séjour devait durer sans interruption depuis plus d'un an. Les enfants nés avant le 1er mars 2019 ont une autre voie possible.",
    },
    {
      question: "Comment faire inscrire la mention de séjour régulier sur l'acte de naissance ?",
      reponse: "Chaque parent peut la demander en personne, dans n'importe quelle mairie, pendant toute la minorité de l'enfant. Il apporte une pièce d'identité avec photo (un passeport biométrique si son pays en délivre) et son titre de séjour. Il ajoute des preuves de résidence de l'année avant la naissance et, si besoin, un extrait d'acte de naissance de moins de 3 mois.",
    },
    {
      question: "Depuis quand s'applique la loi sur le droit du sol à Mayotte ?",
      reponse: "La loi n° 2025-412 du 12 mai 2025 est en vigueur depuis le 14 mai 2025. Elle s'applique aux déclarations de nationalité signées depuis cette date, et aux jeunes devenus majeurs depuis cette date. Un décret (un texte du Gouvernement) et un arrêté du 30 avril 2026 ont ensuite précisé les pièces et la démarche en mairie.",
    },
  ],
  sources: [
    {
      titre: "Ministère de la Justice : circulaire du 5 mai 2026 sur la loi n° 2025-412 du 12 mai 2025 (nationalité française à Mayotte), NOR JUSC2611765C",
      url: "https://www.justice.gouv.fr/sites/default/files/2026-05/JUSC2611765C.pdf",
      type: "officiel",
      description: "Articles 17-2, 2493, 2494 et 2495 du Code civil ; décret n° 2026-338 et arrêté du 30 avril 2026 ; tableaux d'application dans le temps ; liste des titres acceptés",
      luLe: "2026-10-27",
    },
    {
      titre: "Conseil constitutionnel, décision n° 2025-881 DC du 7 mai 2025, loi visant à renforcer les conditions d'accès à la nationalité française à Mayotte",
      url: "https://www.conseil-constitutionnel.fr/decision/2025/2025881DC.htm",
      type: "juridique",
      luLe: "2026-10-27",
    },
    {
      titre: "Service-public : nationalité française d'un enfant né en France de parents étrangers (F295)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F295",
      type: "officiel",
      luLe: "2026-10-27",
    },
  ],
};

export default article;
