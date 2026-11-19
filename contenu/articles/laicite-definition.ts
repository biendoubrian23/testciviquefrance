import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 19/11/2026 (`docs/seo/ROBOT.md`).
 * Requêtes visées : « laïcité » et « laïcité définition » (10 k à 100 k
 * recherches par mois chacune, « laïcité » + 900 % sur trois mois), « loi
 * 1905 » (1 k à 10 k), « laïcité définition simple », « principe de laïcité »
 * (100 à 1 k) ; Planificateur de mots clés, France, toutes les langues,
 * 19/11/2026. Famille examen civique : la laïcité est une des cinq notions de
 * la thématique « Principes et valeurs de la République » du référentiel
 * officiel, et le site n'avait aucune page sur elle.
 * Sources lues le 19/11/2026 : Légifrance, loi du 9 décembre 1905 (art. 1,
 * 2 et 31) et Constitution (art. 1) ; Conseil constitutionnel, décision
 * n° 2012-297 QPC ; formation-civique.interieur.gouv.fr, fiches « La
 * définition de la laïcité (1/2) », « Histoire de la laïcité », « Le
 * prosélytisme », « Le blasphème », « La laïcité dans les services publics »,
 * « La laïcité à l'école (1/2) », « La laïcité au travail », et les deux
 * listes officielles des questions de connaissance (CSP et CR).
 * Non écrit faute de source officielle lue ce jour : la liste précise des
 * territoires d'outre-mer où la loi de 1905 ne s'applique pas (Légifrance
 * par article et vie-publique.fr inaccessibles aux outils), la Journée de la
 * laïcité du 9 décembre (education.gouv.fr en 403).
 */
const article: Article = {
  slug: "laicite-definition",
  titre: "La laïcité expliquée simplement : définition, loi de 1905, et ce que l'examen civique vous demande",
  titreSeo: "Laïcité : la définition simple, et la loi de 1905",
  resume: "La laïcité en mots simples : la loi de 1905, vos libertés, qui doit être neutre (mairie, école, travail) et les questions de l'examen civique.",
  chapo: "La laïcité, c'est le principe qui ==sépare l'État et les religions== et qui ==garantit à chacun la liberté de croire ou de ne pas croire==. L'État ne favorise aucune religion, et il protège toutes les croyances. C'est un des principes de la Constitution, et une notion clé de l'examen civique : voici l'essentiel, en mots simples.",
  publieLe: "2026-11-19",
  modifieLe: "2026-11-19",
  minutes: 10,
  theme: "La laïcité à l'examen civique",
  motsCles: [
    "laïcité",
    "laïcité définition",
    "laïcité définition simple",
    "principe de laïcité",
    "loi 1905",
    "loi de 1905 laïcité",
    "laïcité examen civique",
    "neutralité de l'État",
  ],
  rubrique: "thematiques",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/laicite-examen-civique.webp",
    alt: "La façade d'une école publique de village en briques roses, avec l'inscription « Groupe scolaire » et un drapeau français au-dessus de la porte",
    largeur: 1200,
    hauteur: 565,
    credit: "Didier Descouens, via Wikimedia Commons",
    licence: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Escatalens_-_Ecole_Publique_%27Antoine_de_Saint-Exup%C3%A9ry%27.jpg",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qu'est-ce que la laïcité ?",
    },
    {
      type: "p",
      texte: "La laïcité est un principe de la République française. Elle repose sur deux idées. D'abord, ==l'État et les religions sont séparés==. Ensuite, ==chaque personne est libre d'avoir une religion, ou de ne pas en avoir== ([fiche officielle de la formation civique](https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/principes-et-valeurs-de-la-republique/laicite/la-definition-de-la-laicite-1/)).",
    },
    {
      type: "p",
      texte: "Ce n'est pas une opinion : c'est écrit dans la Constitution, le texte qui fixe les règles les plus importantes du pays. Son article 1 commence ainsi : « La France est une République indivisible, laïque, démocratique et sociale. » Il ajoute que la République « respecte toutes les croyances » ([Constitution, article 1, sur Légifrance](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000571356/)). Légifrance, c'est le site officiel où l'État publie les lois.",
    },
    {
      type: "p",
      texte: "Le Conseil constitutionnel, qui vérifie que les lois respectent la Constitution, a précisé ce que la laïcité veut dire. L'État est neutre. Il ne reconnaît aucun culte, c'est-à-dire aucune religion organisée. Il respecte toutes les croyances et traite tous les citoyens de la même façon, quelle que soit leur religion. Et il garantit le libre exercice des cultes ([décision n° 2012-297 QPC du 21 février 2013](https://www.conseil-constitutionnel.fr/decision/2013/2012297QPC.htm)).",
    },
    {
      type: "p",
      texte: "La laïcité n'est donc pas contre les religions. Elle organise les relations entre l'État et les religions, pour que chacun puisse vivre sa croyance, ou son absence de croyance, librement.",
    },
    {
      type: "h2",
      texte: "Que dit la loi de 1905 ?",
    },
    {
      type: "p",
      texte: "La loi du 9 décembre 1905 sépare les Églises et l'État. Ses deux premiers articles sont les plus connus ([loi du 9 décembre 1905, sur Légifrance](https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000508749)) :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Article 1** : « La République assure la liberté de conscience. » Elle garantit aussi le libre exercice des cultes, dans les limites fixées pour protéger l'ordre public, c'est-à-dire la sécurité et la tranquillité de tous.",
        "**Article 2** : « La République ne reconnaît, ne salarie ni ne subventionne aucun culte. » L'État ne paie pas les prêtres, les imams, les pasteurs ou les rabbins, et ne finance pas les religions.",
      ],
    },
    {
      type: "p",
      texte: "La même loi prévoit une exception : l'État peut payer des aumôneries. Ce sont des religieux présents dans des lieux qu'on ne quitte pas librement, comme les prisons, les hôpitaux ou certains internats. Le but est que chacun puisse y pratiquer sa religion.",
    },
    {
      type: "p",
      texte: "La loi protège aussi la liberté de chacun. Menacer quelqu'un pour le forcer à pratiquer une religion, ou à arrêter, est puni. La peine est ==d'un an de prison et de 15 000 € d'amende== (article 31). La peine monte à trois ans et 45 000 € en cas de violence.",
    },
    {
      type: "encadre",
      titre: "La phrase à retenir",
      texte: "La loi de séparation des Églises et de l'État date de ==1905==. Depuis, l'État ne reconnaît, ne paie et ne finance aucune religion. Il garantit à chacun la liberté de conscience : croire, ne pas croire, ou changer de religion.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Quelles libertés la laïcité vous garantit-elle ?",
    },
    {
      type: "p",
      texte: "La liberté de conscience, c'est le droit de penser ce que l'on veut en matière de religion. Le référentiel officiel de l'examen la décrit ainsi : la liberté de croire, de ne pas croire, de ne plus croire, et de changer de religion. Concrètement, vous avez le droit de :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "avoir une religion, ou ne pas en avoir ;",
        "changer de religion, ou la quitter ;",
        "pratiquer votre religion, seul ou avec d'autres, tant que vous ne troublez pas l'ordre public ;",
        "parler de votre religion pour convaincre quelqu'un : c'est le prosélytisme, et il est permis, sauf s'il force la personne ([fiche « Le prosélytisme »](https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/principes-et-valeurs-de-la-republique/laicite/le-proselytisme/)) ;",
        "critiquer une religion ou s'en moquer, y compris par une caricature : c'est le blasphème, et il n'est pas puni en France ([fiche « Le blasphème »](https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/principes-et-valeurs-de-la-republique/laicite/le-blaspheme/)).",
      ],
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Critiquer une religion est permis, mais **insulter des personnes à cause de leur religion** ou appeler à la haine contre elles est puni par la loi.",
        "Personne ne peut invoquer sa religion pour ne pas respecter les règles communes. Par exemple, un usager doit montrer son visage pour vérifier son identité.",
        "Le harcèlement religieux, c'est-à-dire forcer quelqu'un par la pression ou la menace, est interdit.",
      ],
    },
    {
      type: "h2",
      texte: "Qui doit être neutre : à la mairie, à l'école, au travail ?",
    },
    {
      type: "p",
      texte: "Être neutre, c'est ne pas montrer sa religion. La règle change selon le lieu et selon votre rôle. C'est le point qui piège le plus de candidats. Le tableau suit les fiches officielles de la formation civique ([services publics](https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/principes-et-valeurs-de-la-republique/laicite/la-laicite-dans-les-services-publics/), [école](https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/principes-et-valeurs-de-la-republique/laicite/la-laicite-a-ecole-1/), [travail](https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/principes-et-valeurs-de-la-republique/laicite/la-laicite-au-travail/)).",
    },
    {
      type: "tableau",
      entetes: ["Qui", "Doit être neutre ?", "Ce que cela veut dire"],
      lignes: [
        ["Agent public (mairie, préfecture, hôpital public, école publique)", "Oui", "Il ne porte aucun signe religieux au travail et ne fait pas de prosélytisme. Ainsi, tous les usagers sont traités de la même façon."],
        ["Usager d'un service public (vous, au guichet)", "Non", "Vous pouvez porter un signe religieux. Mais vous ne pouvez pas exiger que le service change ses règles à cause de votre religion."],
        ["Élève d'une école, d'un collège ou d'un lycée public", "En partie", "Depuis une loi de 2004, il ne peut pas porter de signe qui montre sa religion de façon visible. Il ne peut pas refuser un cours, le sport par exemple, pour une raison religieuse."],
        ["Salarié d'une entreprise privée", "Non, en principe", "Il peut porter un signe religieux. L'employeur peut limiter cette liberté pour l'hygiène, la sécurité ou le bon fonctionnement de l'entreprise."],
        ["Toute personne, dans la rue", "Non", "Chacun peut montrer sa religion, sans troubler l'ordre public."],
      ],
    },
    {
      type: "p",
      texte: "Une préfecture, c'est l'administration de l'État dans le département, celle qui délivre les titres de séjour. Ses agents doivent donc être neutres. Vous, en tant qu'usager, n'y êtes pas obligé. Pour une absence liée à une fête religieuse, un salarié doit demander l'accord de son employeur. Celui-ci peut refuser, mais pas pour une raison de discrimination.",
    },
    {
      type: "h2",
      texte: "La laïcité en 6 dates",
    },
    {
      type: "p",
      texte: "Voici les repères donnés par la [fiche officielle « Histoire de la laïcité »](https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/principes-et-valeurs-de-la-republique/laicite/histoire-de-la-laicite/) :",
    },
    {
      type: "tableau",
      entetes: ["Date", "Ce qui se passe"],
      lignes: [
        ["1789", "La Déclaration des droits de l'homme et du citoyen pose la liberté de conscience et de religion. C'est le fondement de la laïcité."],
        ["1801", "Un traité, le Concordat, organise les relations entre l'État et l'Église catholique."],
        ["1882", "L'école primaire publique devient obligatoire, gratuite et indépendante de l'Église."],
        ["1905", "La loi sépare les Églises et l'État."],
        ["2004", "Une loi interdit aux élèves des écoles, collèges et lycées publics les signes religieux visibles."],
        ["2021", "Une loi renforce la laïcité et la neutralité dans les services publics et les associations."],
      ],
    },
    {
      type: "h2",
      texte: "La laïcité s'applique-t-elle partout en France ?",
    },
    {
      type: "p",
      texte: "Le principe de laïcité de la Constitution vaut partout. Mais la loi de 1905 ne s'applique pas partout. En Alsace et en Moselle (Bas-Rhin, Haut-Rhin et Moselle), d'anciennes règles sont restées en vigueur : l'État y paie par exemple certains ministres du culte. Ces règles particulières existaient « dans plusieurs parties du territoire » avant la Constitution. En 2013, le Conseil constitutionnel a jugé qu'elles restent valables ([décision n° 2012-297 QPC](https://www.conseil-constitutionnel.fr/decision/2013/2012297QPC.htm)).",
    },
    {
      type: "p",
      texte: "Certains territoires d'outre-mer ont, eux aussi, des règles anciennes sur les cultes. Si vous vivez outre-mer et qu'une question pratique se pose, renseignez-vous auprès de la préfecture de votre territoire. Les règles de neutralité des agents publics et des élèves, elles, restent les mêmes.",
    },
    {
      type: "h2",
      texte: "Que demande l'examen civique sur la laïcité ?",
    },
    {
      type: "p",
      texte: "La laïcité fait partie de la thématique « Principes et valeurs de la République ». Cette thématique compte ==11 questions sur 40== à l'examen, selon l'[arrêté du 10 octobre 2025](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052381620), article 3. Un arrêté, c'est une décision écrite d'un ministre. Le référentiel officiel est la liste de ce que vous devez savoir. Il cite l'histoire de la laïcité, la liberté de conscience et la neutralité de l'État. Il cite aussi la laïcité dans les services publics, au travail et à l'école.",
    },
    {
      type: "p",
      texte: "Le ministère publie la liste des questions de connaissance. Celle de la carte de séjour pluriannuelle (le titre de séjour de 2 à 4 ans) contient par exemple : « Qu'est-ce que la laïcité ? » ou « En quelle année la loi de séparation des Églises et de l'État a-t-elle été votée ? » ([liste officielle CSP](https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-csp/)). Celle de la carte de résident (le titre de séjour de 10 ans) ajoute : « Qui doit respecter le principe de neutralité religieuse dans une préfecture ? » ([liste officielle CR](https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-cr/)).",
    },
    {
      type: "qcm",
      thematique: "Principes et valeurs de la République",
      question: "Dans une préfecture, qui doit respecter la neutralité religieuse ?",
      choix: [
        "Les usagers qui viennent au guichet",
        "Les agents qui travaillent à la préfecture",
        "Tout le monde, agents et usagers",
        "Personne, la préfecture n'est pas concernée",
      ],
      reponse: 1,
      explication: "La neutralité s'impose aux agents publics : ils ne montrent pas leur religion au travail, pour traiter tous les usagers de la même façon. Les usagers, eux, peuvent porter un signe religieux, sans exiger que le service change ses règles. Ceci est une question type, écrite par nous, pas une question de l'examen officiel.",
    },
    {
      type: "qcm",
      thematique: "Principes et valeurs de la République",
      question: "Que garantit la laïcité à chaque personne ?",
      choix: [
        "L'obligation d'avoir une religion",
        "Le droit de pratiquer seulement la religion de l'État",
        "La liberté de croire, de ne pas croire ou de changer de religion",
        "L'interdiction de parler de religion en public",
      ],
      reponse: 2,
      explication: "La laïcité garantit la liberté de conscience : croire, ne pas croire, ne plus croire ou changer de religion. L'État n'a pas de religion officielle, et chacun peut montrer sa religion en public, sans troubler l'ordre public. Ceci est une question type, écrite par nous, pas une question de l'examen officiel.",
    },
    {
      type: "cta",
      texte: "Le tableau « qui doit être neutre » est le piège classique de la laïcité. Sur Test Civique France, les cours des 5 thématiques sont gratuits, et les examens blancs de 40 questions vous donnent votre score et la correction de chaque question. L'inscription est gratuite.",
    },
    {
      type: "p",
      texte: "Pour réviser les autres notions de la même thématique, lisez nos articles sur [la devise « Liberté, Égalité, Fraternité »](/articles/valeurs-republique-francaise-liberte-egalite-fraternite) et sur [Marianne, le coq et le drapeau](/articles/symboles-france-marianne-coq-drapeau-tricolore). Organisez vos révisions avec notre [plan en 4 semaines](/articles/preparer-examen-civique). Et si vous ne savez pas encore si l'examen vous concerne, [vérifiez-le en une minute](/eligibilite-examen-civique).",
    },
  ],
  faq: [
    {
      question: "Qu'est-ce que la laïcité en termes simples ?",
      reponse: "La laïcité, c'est la séparation de l'État et des religions. L'État n'a pas de religion, ne paie et ne finance aucun culte, et traite tout le monde de la même façon. En échange, chacun est libre de croire, de ne pas croire ou de changer de religion, tant qu'il respecte l'ordre public et les règles communes.",
    },
    {
      question: "Quelle loi définit la laïcité en France ?",
      reponse: "La loi du 9 décembre 1905 sépare les Églises et l'État. Son article 1 garantit la liberté de conscience, son article 2 dit que la République ne reconnaît, ne salarie ni ne subventionne aucun culte. La Constitution de 1958, dans son article 1, dit aussi que la France est une République laïque.",
    },
    {
      question: "Quels sont les principes de la laïcité ?",
      reponse: "Le Conseil constitutionnel en donne quatre. L'État est neutre et ne reconnaît aucun culte. Il respecte toutes les croyances. Tous sont égaux devant la loi, quelle que soit leur religion. Et chacun peut pratiquer librement son culte. L'État ne salarie aucun culte, sauf règles particulières comme en Alsace-Moselle.",
    },
    {
      question: "Peut-on porter un signe religieux en France ?",
      reponse: "Oui, en principe : dans la rue, comme usager d'un service public ou comme salarié du privé. Mais les agents publics doivent être neutres au travail, et les élèves des écoles, collèges et lycées publics ne peuvent pas porter de signe religieux visible depuis 2004. Un employeur privé peut aussi limiter cette liberté, pour la sécurité par exemple.",
    },
  ],
  sources: [
    {
      titre: "Légifrance : loi du 9 décembre 1905 concernant la séparation des Églises et de l'État (articles 1, 2 et 31), en vigueur au 19/11/2026",
      url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000508749",
      type: "juridique",
      luLe: "2026-11-19",
    },
    {
      titre: "Légifrance : Constitution du 4 octobre 1958, article 1",
      url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000571356/",
      type: "juridique",
      luLe: "2026-11-19",
    },
    {
      titre: "Conseil constitutionnel : décision n° 2012-297 QPC du 21 février 2013 (principe de laïcité, Alsace-Moselle)",
      url: "https://www.conseil-constitutionnel.fr/decision/2013/2012297QPC.htm",
      type: "juridique",
      luLe: "2026-11-19",
    },
    {
      titre: "Formation civique (ministère de l'Intérieur) : « La définition de la laïcité (1/2) »",
      url: "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/principes-et-valeurs-de-la-republique/laicite/la-definition-de-la-laicite-1/",
      type: "officiel",
      luLe: "2026-11-19",
    },
    {
      titre: "Formation civique (ministère de l'Intérieur) : « Histoire de la laïcité »",
      url: "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/principes-et-valeurs-de-la-republique/laicite/histoire-de-la-laicite/",
      type: "officiel",
      luLe: "2026-11-19",
    },
    {
      titre: "Formation civique (ministère de l'Intérieur) : « Le prosélytisme » et « Le blasphème »",
      url: "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/principes-et-valeurs-de-la-republique/laicite/le-proselytisme/",
      type: "officiel",
      luLe: "2026-11-19",
    },
    {
      titre: "Formation civique (ministère de l'Intérieur) : « La laïcité dans les services publics », « La laïcité à l'école (1/2) », « La laïcité au travail »",
      url: "https://formation-civique.interieur.gouv.fr/fiches-par-thematiques/principes-et-valeurs-de-la-republique/laicite/la-laicite-au-travail/",
      type: "officiel",
      luLe: "2026-11-19",
    },
    {
      titre: "Formation civique (ministère de l'Intérieur) : listes officielles des questions de connaissance, CSP et CR",
      url: "https://formation-civique.interieur.gouv.fr/examen-civique/liste-officielle-des-questions-de-connaissance-csp/",
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
};

export default article;
