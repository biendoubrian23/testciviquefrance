import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 02/11/2026 (`docs/seo/ROBOT.md`).
 * Requête visée : « pacte asile migration » (100 à 1 k recherches par mois,
 * + 900 % sur un an, Planificateur de mots clés, France, toutes les langues,
 * 02/11/2026). Famille « actualité réglementaire et démarches du moment » :
 * le Pacte s'applique depuis le 12/06/2026, la loi d'habilitation attend
 * toujours son vote à l'Assemblée nationale. Sources lues le 02/11/2026 :
 * communiqués du ministère de l'Intérieur (10/04 et 11/06/2026), décryptage
 * du Conseil d'État (12/06/2026), dossier législatif de l'Assemblée
 * nationale, règlements (UE) 2024/1348, 2024/1356 et 2024/1358 sur EUR-Lex,
 * article 349 du traité sur le fonctionnement de l'Union européenne.
 */
const article: Article = {
  slug: "pacte-europeen-migration-asile",
  titre: "Pacte européen sur la migration et l'asile : ce qui s'applique en France depuis le 12 juin 2026, et qui est concerné",
  titreSeo: "Pacte asile migration : ce qui change en France",
  resume: "Pacte européen sur la migration et l'asile : les règles en vigueur depuis le 12 juin 2026, ce que la France a adopté, et qui est vraiment concerné.",
  chapo: "Le Pacte européen sur la migration et l'asile s'applique en France depuis le ==12 juin 2026==. Il change surtout la demande d'asile et le contrôle aux frontières extérieures de l'Union. Si vous vivez en France avec un titre de séjour (la carte qui vous autorise à y vivre), vos démarches de renouvellement ne changent pas à cause de lui.",
  publieLe: "2026-11-02",
  modifieLe: "2026-11-02",
  minutes: 8,
  theme: "Pacte européen sur la migration et l'asile",
  motsCles: [
    "pacte asile migration",
    "pacte européen sur la migration et l'asile",
    "pacte asile migration 12 juin 2026",
    "pacte migration asile France",
    "filtrage frontière 7 jours",
    "Eurodac 6 ans",
    "procédure d'asile à la frontière 12 semaines",
    "circulaire INTV2615721C",
  ],
  rubrique: "actualites",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/pacte-europeen-migration-asile.webp",
    alt: "Quatre drapeaux de l'Union européenne flottent devant la façade vitrée et arrondie d'un grand bâtiment de Bruxelles, sous un ciel bleu",
    largeur: 1200,
    hauteur: 900,
    credit: "Thijs ter Haar, via Wikimedia Commons",
    licence: "CC BY 2.0",
    source: "https://commons.wikimedia.org/wiki/File:European_Union_Flags_2.jpg",
    position: "50% 40%",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qu'est-ce que le Pacte européen sur la migration et l'asile ?",
    },
    {
      type: "p",
      texte: "C'est un ensemble de ==dix textes européens== : neuf règlements et une directive, adoptés le 14 mai 2024. Un règlement européen s'applique directement dans chaque pays de l'Union. Une directive, elle, doit être recopiée dans le droit de chaque pays : on dit « transposée ».",
    },
    {
      type: "p",
      texte: "La plupart de ces textes s'appliquent depuis le ==12 juin 2026== ([Conseil d'État](https://www.conseil-etat.fr/publications-colloques/decryptages/decryptage-le-pacte-europeen-sur-la-migration-et-l-asile-et-la-justice-administrative)). Selon le ministère de l'Intérieur, ils visent trois buts. Mieux contrôler les frontières extérieures de l'Union, rendre les procédures plus rapides, et renforcer les garanties des demandeurs d'asile ([communiqué du 10 avril 2026](https://www.immigration.interieur.gouv.fr/actualites/communiques/mise-en-oeuvre-du-pacte-europeen-sur-migration-et-lasile)).",
    },
    {
      type: "tableau",
      entetes: ["Texte", "Ce qu'il règle"],
      lignes: [
        ["Règlement (UE) 2024/1356", "Le « filtrage » des personnes arrivées sans autorisation"],
        ["Règlement (UE) 2024/1358", "Eurodac, le fichier européen des empreintes et des photos"],
        ["Règlement (UE) 2024/1348", "La procédure commune de demande d'asile, dont la procédure à la frontière"],
        ["Règlement (UE) 2024/1351", "Le pays de l'Union responsable d'une demande d'asile (il remplace le règlement « Dublin III »)"],
        ["Directive (UE) 2024/1346", "L'accueil des demandeurs d'asile (logement, aide matérielle)"],
      ],
      legende: "Cinq des dix textes, d'après le décryptage du Conseil d'État du 12 juin 2026, lu le 02/11/2026.",
    },
    {
      type: "h2",
      texte: "Qui est concerné par le Pacte ?",
    },
    {
      type: "p",
      texte: "Le Pacte vise d'abord trois situations : les personnes qui demandent l'asile, celles qui arrivent dans l'Union sans autorisation, et celles qui doivent quitter le territoire après un refus. L'asile, c'est la protection que la France accorde à une personne menacée dans son pays.",
    },
    {
      type: "encadre",
      titre: "Vous avez déjà un titre de séjour ?",
      texte: "Le titre de séjour, c'est la carte qui vous autorise à vivre en France. Les textes du Pacte lus ici ne portent pas sur son renouvellement, ni sur la naturalisation. Pour ces démarches, les règles restent celles du CESEDA, le code qui réunit le droit des étrangers en France. Par exemple, le délai de réponse de la préfecture est de [90 jours depuis le 30 octobre 2026](/articles/delai-reponse-prefecture-titre-de-sejour-90-jours), à cause d'un autre décret.",
      ton: "bleu",
    },
    {
      type: "p",
      texte: "Si vous préparez une première carte pluriannuelle, une carte de résident (la carte de 10 ans) ou une naturalisation, l'examen civique reste obligatoire comme avant. [Vérifiez en une minute s'il vous concerne](/eligibilite-examen-civique).",
    },
    {
      type: "h2",
      texte: "Que change le filtrage aux frontières ?",
    },
    {
      type: "p",
      texte: "Le filtrage, c'est un premier contrôle des personnes qui arrivent sans autorisation, avant toute autre procédure. Le règlement (UE) 2024/1356 fixe sa durée ([EUR-Lex](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1356)) :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "à une frontière extérieure de l'Union : ==7 jours au plus== ;",
        "sur le territoire, pour une personne interpellée sans titre : ==3 jours au plus==.",
      ],
    },
    {
      type: "p",
      texte: "Le filtrage oriente ensuite la personne. Elle peut entrer dans la procédure d'asile, ou dans une procédure de retour.",
    },
    {
      type: "h2",
      texte: "Que change Eurodac pour les enfants ?",
    },
    {
      type: "p",
      texte: "Eurodac est le fichier européen qui garde les données des demandeurs d'asile. Depuis le Pacte, ce sont des **données biométriques** : les empreintes digitales et une image du visage. Elles sont relevées pour chaque demandeur ==âgé de 6 ans au moins== (article 15 du [règlement (UE) 2024/1358](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1358)).",
    },
    {
      type: "p",
      texte: "Le même règlement prévoit des garanties pour les enfants. Un mineur doit être accompagné, si possible par un adulte de sa famille, pendant le relevé. Un mineur seul est accompagné par un représentant ou une personne formée.",
    },
    {
      type: "h2",
      texte: "Combien de temps dure une demande d'asile avec le Pacte ?",
    },
    {
      type: "p",
      texte: "Le règlement (UE) 2024/1348 fixe des délais communs à toute l'Union ([EUR-Lex](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1348)). En France, c'est l'OFPRA (l'Office français de protection des réfugiés et apatrides) qui examine la demande.",
    },
    {
      type: "tableau",
      entetes: ["Procédure", "Délai fixé par le règlement"],
      lignes: [
        ["Procédure normale", "6 mois en principe après l'introduction de la demande, avec des prolongations possibles (article 35)"],
        ["Demande jugée irrecevable", "2 mois au plus, prolongeables de 2 mois (article 35)"],
        ["Procédure à la frontière", "12 semaines au plus, recours compris, portées à 16 semaines dans certains cas"],
      ],
      legende: "Source : règlement (UE) 2024/1348, lu le 02/11/2026 sur EUR-Lex.",
    },
    {
      type: "p",
      texte: "Les délais pour contester une décision ont aussi été revus par plusieurs décrets de juin 2026 ([Conseil d'État](https://www.conseil-etat.fr/publications-colloques/decryptages/decryptage-le-pacte-europeen-sur-la-migration-et-l-asile-et-la-justice-administrative)). Le recours contre un refus de l'OFPRA se fait devant la CNDA, la Cour nationale du droit d'asile.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Lisez le délai écrit sur la décision.** Chaque décision indique le délai et le tribunal pour la contester. Il peut être court, parfois quelques jours.",
        "**Ne vous fiez pas à une page écrite avant juin 2026.** Les délais de recours ont changé avec le Pacte.",
        "**Faites-vous aider tout de suite** : un avocat, une association comme La Cimade, ou une permanence d'accès au droit.",
      ],
    },
    {
      type: "h2",
      texte: "Comment la France a-t-elle adapté son droit ?",
    },
    {
      type: "p",
      texte: "La France a d'abord agi par décrets, des textes du gouvernement. Le Conseil d'État en cite huit, publiés du 3 au 11 juin 2026. L'un d'eux, le décret n° 2026-454 du 6 juin 2026, adapte le CESEDA au Pacte. Les autres portent sur l'OFPRA, la procédure à la frontière, l'accueil et les délais de recours.",
    },
    {
      type: "p",
      texte: "Le ministère a aussi publié le 11 juin 2026 une circulaire, une instruction aux services de l'État. Elle porte le numéro INTV2615721C et compte une trentaine de fiches. Elle dit quels articles du CESEDA ne s'appliquent plus, parce que les règlements européens les remplacent ([ministère de l'Intérieur](https://www.immigration.interieur.gouv.fr/actualites/actualites/pacte-europeen-sur-migration-et-lasile-publication-de-circulaire-dapplication)).",
    },
    {
      type: "encadre",
      titre: "Ce qui n'est pas encore voté",
      texte: "Le gouvernement a déposé le 8 avril 2026 un projet de loi pour adapter le reste du droit par ordonnances. Une ordonnance est un texte du gouvernement qui a la valeur d'une loi, si le Parlement l'y autorise. Le Sénat a adopté ce projet le 20 mai 2026. À l'Assemblée nationale, la commission des lois a déposé son rapport le 22 juillet 2026. Au 2 novembre 2026, le dossier législatif n'indique ==aucun vote en séance== ([Assemblée nationale](https://www.assemblee-nationale.fr/dyn/17/dossiers/DLR5L17N54094)).",
      ton: "ambre",
    },
    {
      type: "p",
      texte: "Cette attente compte. Dans son avis du 7 mai 2026, le Conseil d'État a rappelé qu'une circulaire peut expliquer le droit, mais pas créer de règle. Il a signalé deux points que la circulaire ne peut pas corriger : le délai de recours des demandeurs d'asile placés en rétention, et la procédure d'asile à la frontière. Pour comprendre la rétention, lisez notre article sur le [décret du 22 octobre 2026](/articles/decret-retention-administrative-22-octobre-2026).",
    },
    {
      type: "h2",
      texte: "Le Pacte s'applique-t-il outre-mer ?",
    },
    {
      type: "p",
      texte: "Le droit de l'Union s'applique dans les régions ultrapériphériques françaises citées par l'article 349 du traité : Guadeloupe, Guyane, Martinique, Mayotte, La Réunion et Saint-Martin ([EUR-Lex](https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:12016E349)). Les autres collectivités, comme la Nouvelle-Calédonie ou la Polynésie française, ont un régime à part.",
    },
    {
      type: "p",
      texte: "Le projet de loi prévoit une ordonnance propre à l'outre-mer, dans un délai de six mois après sa publication. Tant qu'elle n'existe pas, les règles locales peuvent différer : renseignez-vous auprès de la préfecture du territoire. À Mayotte, d'autres règles existent déjà, par exemple pour le [droit du sol](/articles/droit-du-sol-mayotte).",
    },
    {
      type: "h2",
      texte: "Que faire si vous êtes concerné ?",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "Gardez une copie de chaque papier remis à la frontière, à la préfecture, à l'OFII (l'Office français de l'immigration et de l'intégration) ou à l'OFPRA.",
        "Notez la date de chaque décision : le délai pour la contester part de là.",
        "Demandez l'aide d'un avocat, d'une association ou d'une permanence d'accès au droit pour votre cas précis.",
        "Si vous voyagez bientôt vers l'Europe avec un passeport sans visa, lisez aussi notre point sur [ETIAS](/articles/etias-autorisation-voyage-france), une autre règle européenne, sans lien avec l'asile.",
      ],
    },
    {
      type: "p",
      texte: "Le meilleur repère reste la décision elle-même. Elle est écrite pour vous, avec vos délais. En cas de doute sur l'action de l'administration, vous pouvez aussi saisir le [Défenseur des droits](https://www.defenseurdesdroits.fr/) (l'autorité indépendante qui défend vos droits face à l'administration). C'est gratuit.",
    },
  ],
  faq: [
    {
      question: "Quand le pacte asile et migration entre-t-il en vigueur ?",
      reponse: "La plupart des textes du Pacte européen sur la migration et l'asile s'appliquent depuis le 12 juin 2026, dans tous les pays de l'Union. En France, des décrets et une circulaire ont été publiés début juin 2026. Le projet de loi qui doit compléter ces textes par ordonnances n'était pas encore voté par l'Assemblée nationale au 2 novembre 2026.",
    },
    {
      question: "Que contient le pacte sur la migration et l'asile ?",
      reponse: "Il réunit neuf règlements et une directive du 14 mai 2024. Ils organisent le filtrage des personnes arrivées sans autorisation et le fichier Eurodac. Ils fixent aussi une procédure commune de demande d'asile, le choix du pays responsable, l'accueil des demandeurs et des règles pour les crises. Le but annoncé est de contrôler les frontières et d'accélérer les procédures.",
    },
    {
      question: "Le pacte asile migration change-t-il le renouvellement du titre de séjour ?",
      reponse: "Non. Les textes du Pacte portent sur l'asile, le contrôle aux frontières et le retour. Le renouvellement d'un titre de séjour suit toujours le CESEDA. Ce qui a changé récemment vient d'un autre texte : depuis le 30 octobre 2026, la préfecture a 90 jours pour répondre à une demande complète.",
    },
    {
      question: "À partir de quel âge prend-on les empreintes dans Eurodac ?",
      reponse: "Depuis le Pacte, les empreintes digitales et une image du visage sont relevées pour chaque demandeur d'asile âgé de 6 ans au moins, selon l'article 15 du règlement (UE) 2024/1358. Un enfant doit être accompagné pendant le relevé, si possible par un adulte de sa famille, ou par un représentant s'il est seul.",
    },
  ],
  sources: [
    {
      titre: "Ministère de l'Intérieur : mise en œuvre du Pacte européen sur la migration et l'asile (communiqué du 10/04/2026)",
      url: "https://www.immigration.interieur.gouv.fr/actualites/communiques/mise-en-oeuvre-du-pacte-europeen-sur-migration-et-lasile",
      type: "officiel",
      description: "Projet de loi d'habilitation présenté le 8 avril 2026, trois ordonnances prévues, objectifs du Pacte.",
      luLe: "2026-11-02",
    },
    {
      titre: "Ministère de l'Intérieur : publication de la circulaire d'application INTV2615721C (11/06/2026)",
      url: "https://www.immigration.interieur.gouv.fr/actualites/actualites/pacte-europeen-sur-migration-et-lasile-publication-de-circulaire-dapplication",
      type: "officiel",
      description: "Entrée en vigueur le 12 juin 2026, circulaire et une trentaine de fiches, articles du CESEDA écartés.",
      luLe: "2026-11-02",
    },
    {
      titre: "Conseil d'État : le Pacte européen sur la migration et l'asile et la justice administrative (12/06/2026)",
      url: "https://www.conseil-etat.fr/publications-colloques/decryptages/decryptage-le-pacte-europeen-sur-la-migration-et-l-asile-et-la-justice-administrative",
      type: "juridique",
      description: "Liste des textes européens, avis du 2 avril et du 7 mai 2026, décrets n° 2026-451 à 2026-474.",
      luLe: "2026-11-02",
    },
    {
      titre: "Assemblée nationale : dossier législatif du projet de loi d'habilitation (n° 2820)",
      url: "https://www.assemblee-nationale.fr/dyn/17/dossiers/DLR5L17N54094",
      type: "officiel",
      description: "Adopté par le Sénat le 20 mai 2026, rapport de la commission des lois de l'Assemblée le 22 juillet 2026, pas de vote en séance.",
      luLe: "2026-11-02",
    },
    {
      titre: "EUR-Lex : règlement (UE) 2024/1356 (filtrage)",
      url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1356",
      type: "juridique",
      description: "Filtrage de 7 jours au plus à la frontière extérieure, 3 jours sur le territoire.",
      luLe: "2026-11-02",
    },
    {
      titre: "EUR-Lex : règlement (UE) 2024/1358 (Eurodac)",
      url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1358",
      type: "juridique",
      description: "Article 15 : données biométriques de chaque demandeur âgé de six ans au moins.",
      luLe: "2026-11-02",
    },
    {
      titre: "EUR-Lex : règlement (UE) 2024/1348 (procédure commune)",
      url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32024R1348",
      type: "juridique",
      description: "Article 35 (durée de l'examen), procédure à la frontière de 12 semaines au plus.",
      luLe: "2026-11-02",
    },
    {
      titre: "EUR-Lex : article 349 du traité sur le fonctionnement de l'Union européenne",
      url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:12016E349",
      type: "juridique",
      description: "Les régions ultrapériphériques, dont six collectivités françaises.",
      luLe: "2026-11-02",
    },
  ],
  aLireAussi: [
    { slug: "delai-reponse-prefecture-titre-de-sejour-90-jours", ancre: "Titre de séjour : la préfecture a 90 jours pour répondre" },
    { slug: "decret-retention-administrative-22-octobre-2026", ancre: "Rétention administrative : le décret du 22 octobre 2026" },
    { slug: "droit-du-sol-mayotte", ancre: "Le droit du sol à Mayotte" },
  ],
};

export default article;
