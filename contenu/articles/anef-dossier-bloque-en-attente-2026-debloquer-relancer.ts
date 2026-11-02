import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-batch-mai-2026-1.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/anef-dossier-bloque-en-attente-2026-debloquer-relancer`).
 *
 * Réécrit le 02/11/2026 par le robot éditorial (`docs/seo/ROBOT.md`), liste
 * « à revérifier » de `MOTS-CLES.md`. La version migrée était fausse ou sans
 * source sur des points qui décident d'une démarche : un délai légal de
 * « 4 mois » fondé sur un « article R. 431-12 » (le délai est de 90 jours
 * depuis le 30/10/2026, article R. 432-2 réécrit par le décret
 * n° 2026-1001), des chiffres sans source (« 930 000 dossiers selon la
 * Cimade », « 35 % des dossiers débloqués », « 62 % de résolution »,
 * « 18 000 saisines »), un plafond d'aide juridictionnelle et des tarifs
 * d'avocat inventés, des statuts ANEF non vérifiables, la liste des
 * requérants de la décision du Conseil d'État n° 502860 (requête de la
 * Fédération des acteurs de la solidarité et autres), et le niveau « B1 »
 * pour la naturalisation (B2). Sources lues le 02/11/2026 : Légifrance
 * (décret n° 2026-1001), décision n° 502860 (points 12 à 16, 29 à 31, 38,
 * 40, 48 et 49), service-public F36206, F16053 et F2551, page ANEF du
 * ministère de l'Intérieur. Couverture : préfecture d'Indre-et-Loire à Tours,
 * Wikimedia Commons.
 */
const article: Article = {
  slug: "anef-dossier-bloque-en-attente-2026-debloquer-relancer",
  titre: "Dossier ANEF bloqué ou en attente : le délai de la préfecture depuis le 30 octobre 2026, et comment relancer",
  titreSeo: "ANEF dossier bloqué : délai légal et relance",
  resume: "Dossier ANEF sans nouvelles : le délai de 90 jours depuis le 30 octobre 2026, vos papiers pendant l'attente, et les gestes pour relancer, dans l'ordre.",
  chapo: "Votre demande de titre de séjour (la carte qui autorise à vivre en France) attend sur l'ANEF (le site des démarches des étrangers) depuis des semaines ? Depuis le ==30 octobre 2026==, la préfecture (le service de l'État qui décide) a ==90 jours== pour répondre à un dossier complet. Sans réponse, la demande est refusée de façon implicite, et ce refus peut se contester. Voici comment vérifier où en est votre dossier, garder vos droits pendant l'attente, et relancer dans le bon ordre.",
  publieLe: "2026-05-06",
  modifieLe: "2026-11-02",
  minutes: 8,
  theme: "dossier ANEF bloqué",
  motsCles: [
    "anef dossier bloqué",
    "anef en attente instruction",
    "anef relancer préfecture",
    "dossier anef figé",
    "anef délai instruction",
    "débloquer dossier anef",
    "anef titre de séjour bloqué",
    "centre de contact citoyens anef",
    "référé liberté préfecture",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/anef-dossier-bloque.webp",
    alt: "Grille d'entrée dorée de la préfecture d'Indre-et-Loire à Tours, avec le drapeau français au-dessus d'un bâtiment en pierre claire",
    largeur: 1200,
    hauteur: 675,
    credit: "Benjamin Smith, via Wikimedia Commons",
    licence: "CC BY-SA 4.0",
    source: "https://commons.wikimedia.org/wiki/File:Tours_-_Pr%C3%A9fecture_-_01.jpg",
  },
  blocs: [
    {
      type: "h2",
      texte: "Combien de temps la préfecture a-t-elle pour répondre ?",
      id: "delai-legal",
    },
    {
      type: "p",
      texte: "L'**ANEF**, c'est l'administration numérique pour les étrangers en France. C'est le site du ministère de l'Intérieur où se déposent la plupart des demandes de titre de séjour. La **préfecture**, c'est le service de l'État qui étudie votre demande et décide.",
    },
    {
      type: "p",
      texte: "Depuis le 30 octobre 2026, la préfecture doit vous notifier sa décision ==au plus tard 90 jours== après le dépôt d'une demande **complète**. C'est l'article R. 432-2 du CESEDA, le code qui réunit le droit des étrangers, réécrit par le [décret n° 2026-1001 du 26 octobre 2026](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000055023061). Avant, ce délai était de 4 mois.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Le délai part d'un dossier complet.** Si la préfecture vous demande une pièce, le dossier n'est pas complet tant que vous ne l'avez pas envoyée.",
        "**Un dossier complexe peut prendre 30 jours de plus**, si la préfecture vous prévient (même article).",
        "**Quelques cartes ont leur propre délai.** Le décret en écarte certaines, comme celles de l'article R. 421-26.",
      ],
    },
    {
      type: "p",
      texte: "Notre article sur le [délai de 90 jours](/articles/delai-reponse-prefecture-titre-de-sejour-90-jours) détaille le décret, y compris les règles nouvelles sur le changement d'employeur.",
    },
    {
      type: "h2",
      texte: "Que veut dire un dossier « bloqué » ?",
      id: "dossier-bloque",
    },
    {
      type: "p",
      texte: "Un dossier semble bloqué quand rien ne bouge sur votre espace ANEF pendant des semaines. Trois cas sont fréquents, et ils ne se règlent pas de la même façon.",
    },
    {
      type: "tableau",
      entetes: ["Ce que vous voyez", "Ce que cela peut vouloir dire", "Le geste"],
      lignes: [
        ["Une demande de pièce ou de complément", "Le dossier n'est pas complet : le délai de 90 jours ne court pas encore", "Envoyez la pièce sur l'ANEF, au bon format, et gardez une capture d'écran"],
        ["Aucun changement, dossier complet", "La préfecture étudie la demande, ou elle a pris du retard", "Comptez 90 jours depuis le dépôt complet, puis relancez"],
        ["Une erreur dans le dossier (adresse, ancien titre non enregistré)", "L'ANEF ne permet pas toujours de la corriger vous-même", "Signalez-la au Centre de contact citoyens, puis par écrit à la préfecture"],
      ],
      legende: "Les cas de la troisième ligne sont ceux relevés par le Conseil d'État dans sa décision n° 502860 du 5 mai 2026 (points 13 et 15).",
    },
    {
      type: "h2",
      texte: "Comment garder vos droits pendant l'attente ?",
      id: "droits-attente",
    },
    {
      type: "p",
      texte: "Pour un renouvellement, le document clé est l'**attestation de prolongation d'instruction**. C'est un papier provisoire, mis à disposition sur l'ANEF, qui prouve que votre séjour reste régulier quand votre titre expire avant la décision ([service-public, F36206](https://www.service-public.gouv.fr/particuliers/vosdroits/F36206)).",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "Elle est donnée si la demande est complète et déposée dans les délais : entre le 120e et le 60e jour avant la fin de votre titre (article R. 431-5 du CESEDA, cité par le Conseil d'État au point 24 de sa décision n° 502860).",
        "Elle vaut 3 mois au plus, et doit être renouvelée tant que la préfecture n'a pas décidé.",
        "Elle permet de travailler si votre ancien titre le permettait. Lisez la mention imprimée dessus.",
      ],
    },
    {
      type: "p",
      texte: "Le Conseil d'État l'a rappelé le 5 mai 2026. L'administration doit la mettre à disposition ==avant== la fin de votre titre, puis la renouveler à temps. Vous n'avez pas à la réclamer ([décision n° 502860, point 29](https://www.conseil-etat.fr/site/Media/actualites/documents/2026/mai-2026/502860.pdf)). Notre page sur l'[attestation de prolongation d'instruction](/articles/attestation-prolongation-instruction) explique ce qu'elle permet à la CAF et chez votre employeur.",
    },
    {
      type: "h2",
      texte: "Comment relancer, dans quel ordre ?",
      id: "relancer",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Vérifiez votre espace ANEF** et vos courriels, y compris les indésirables. Une demande de pièce passe souvent inaperçue.",
        "**Contactez le Centre de contact citoyens (CCC)**, le service d'aide aux usagers de l'ANEF. Il répond par téléphone au ==0 806 001 620== (appel gratuit) ou par un formulaire en ligne ([ministère de l'Intérieur](https://www.immigration.interieur.gouv.fr/limmigration-en-france/ladministration-numerique-pour-etrangers-en-france)).",
        "**Allez au point d'accueil numérique de votre préfecture** si l'ordinateur vous pose problème. Les préfectures en ont mis en place pour aider à faire la démarche en ligne (même source).",
        "**Écrivez à la préfecture** par lettre recommandée avec accusé de réception. Donnez votre numéro de dossier, la date du dépôt complet, et demandez où en est la décision. Gardez une copie.",
      ],
    },
    {
      type: "encadre",
      titre: "Gardez une trace de tout",
      texte: "Notez la date du dépôt complet. Faites une capture d'écran de chaque étape sur l'ANEF. Gardez les courriels, les accusés de réception et les numéros d'appel. Si vous devez un jour contester, ces preuves seront votre dossier.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Que faire après 90 jours sans réponse ?",
      id: "apres-90-jours",
    },
    {
      type: "p",
      texte: "Le silence de la préfecture vaut alors **refus implicite**, c'est-à-dire un refus sans lettre. Service-public indique que vous avez ==2 mois== à partir de ce refus pour faire un recours ([F16053](https://www.service-public.gouv.fr/particuliers/vosdroits/F16053)) :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "un **recours gracieux** : une lettre au préfet pour lui demander de revoir sa décision ;",
        "un **recours hiérarchique** : une lettre au ministre de l'Intérieur ;",
        "un **recours contentieux** : une requête devant le tribunal administratif (le juge des litiges avec l'administration).",
      ],
    },
    {
      type: "p",
      texte: "Notre guide du [refus de titre de séjour et des recours](/articles/refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france) explique chaque étape.",
    },
    {
      type: "p",
      texte: "En cas d'urgence grave, il existe aussi le **référé-liberté**. C'est une procédure d'urgence devant le juge des référés du tribunal administratif, en cas d'atteinte grave et manifestement illégale à une liberté fondamentale. Le juge se prononce en ==48 heures== ([service-public, F2551](https://www.service-public.gouv.fr/particuliers/vosdroits/F2551)). L'urgence y est appréciée de façon stricte : un simple retard ne suffit pas toujours.",
    },
    {
      type: "p",
      texte: "Pour votre cas précis, faites-vous aider : un avocat, une association comme La Cimade, une permanence d'accès au droit. Vous pouvez aussi saisir le [Défenseur des droits](https://www.defenseurdesdroits.fr/) (l'autorité indépendante qui défend vos droits face à l'administration). C'est gratuit.",
    },
    {
      type: "h2",
      texte: "Qu'a décidé le Conseil d'État sur l'ANEF ?",
      id: "conseil-etat",
    },
    {
      type: "p",
      texte: "Le Conseil d'État a été saisi par la Fédération des acteurs de la solidarité et d'autres requérants. Le 5 mai 2026, il a jugé illégal le refus de l'État de corriger plusieurs défauts de l'ANEF. Il a ordonné à l'État d'agir dans des délais précis ([décision n° 502860, points 48 et 49](https://www.conseil-etat.fr/site/Media/actualites/documents/2026/mai-2026/502860.pdf)).",
    },
    {
      type: "tableau",
      entetes: ["Ce que l'État doit permettre", "Délai après la notification de la décision"],
      lignes: [
        ["Signaler et faire corriger un ancien titre remis mais non enregistré", "6 mois"],
        ["Faire enregistrer une nouvelle adresse pendant l'instruction", "6 mois"],
        ["Ajouter ou modifier des pièces sans attendre une demande de la préfecture", "6 mois"],
        ["Recevoir à temps l'attestation de prolongation d'instruction", "6 mois"],
        ["Faire reconnaître l'attestation par les organismes sociaux", "6 mois"],
        ["Voir écrits les droits liés à l'attestation de décision favorable", "6 mois"],
        ["Déposer une autre demande, pour un autre titre, pendant l'instruction", "12 mois"],
      ],
      legende: "Source : décision n° 502860 du 5 mai 2026, points 12, 13, 15, 16, 31, 38, 40, 48 et 49, lue le 02/11/2026.",
    },
    {
      type: "p",
      texte: "Cette décision ne débloque pas un dossier à elle seule. Mais si l'un de ces défauts vous touche, vous pouvez la citer dans votre lettre à la préfecture, avec son numéro et sa date.",
    },
    {
      type: "h2",
      texte: "Et pendant ce temps, préparer la suite",
      id: "preparer-la-suite",
    },
    {
      type: "p",
      texte: "Vous visez ensuite une carte pluriannuelle, une carte de résident (la carte de 10 ans) ou la nationalité ? Un examen civique vous attend, et un niveau de français à prouver. Notre page sur l'[examen civique pour la naturalisation](/articles/examen-civique-naturalisation) dit ce qui est demandé.",
    },
    {
      type: "cta",
      texte: "Ces semaines d'attente peuvent servir : testez-vous sur 40 questions types et voyez quelle thématique travailler.",
      bouton: "Faire un test gratuit",
    },
  ],
  faq: [
    {
      question: "Quel est le délai de traitement d'un dossier ANEF ?",
      reponse: "Depuis le 30 octobre 2026, la préfecture doit répondre au plus tard 90 jours après le dépôt d'une demande complète (article R. 432-2 du CESEDA). Elle peut ajouter 30 jours pour un dossier complexe, si elle vous prévient. Quelques cartes ont leur propre délai.",
    },
    {
      question: "Comment contacter l'ANEF ?",
      reponse: "Le Centre de contact citoyens aide les usagers qui ont un problème avec leur démarche sur l'ANEF. Il répond par téléphone au 0 806 001 620, un appel gratuit, ou par un formulaire de contact en ligne. Si l'ordinateur vous pose problème, les préfectures ont aussi des points d'accueil numérique.",
    },
    {
      question: "Que faire si la préfecture ne répond pas après 90 jours ?",
      reponse: "Après 90 jours sans réponse sur un dossier complet, la demande est refusée de façon implicite. Vous avez alors 2 mois pour un recours gracieux auprès du préfet, un recours hiérarchique auprès du ministre de l'Intérieur, ou un recours devant le tribunal administratif. Un avocat ou une association peut vous aider.",
    },
    {
      question: "Peut-on travailler pendant l'instruction d'un dossier ANEF ?",
      reponse: "Pour un renouvellement, oui, si votre ancien titre vous autorisait à travailler : l'attestation de prolongation d'instruction le permet alors. Montrez à l'employeur l'attestation et l'ancien titre. Pour une première demande, c'est plus limité : lisez la mention imprimée sur votre document provisoire.",
    },
  ],
  sources: [
    {
      titre: "Légifrance : décret n° 2026-1001 du 26 octobre 2026 (article R. 432-2 du CESEDA)",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000055023061",
      type: "officiel",
      description: "Décision notifiée au plus tard 90 jours après le dépôt d'une demande complète, 30 jours de plus pour un dossier complexe.",
      luLe: "2026-11-02",
    },
    {
      titre: "Conseil d'État : décision n° 502860 du 5 mai 2026",
      url: "https://www.conseil-etat.fr/site/Media/actualites/documents/2026/mai-2026/502860.pdf",
      type: "juridique",
      description: "Défauts de l'ANEF jugés illégaux, injonctions à 6 et 12 mois, attestation de prolongation d'instruction.",
      luLe: "2026-11-02",
    },
    {
      titre: "Service-public : attestation de prolongation d'instruction (F36206)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F36206",
      type: "officiel",
      description: "Conditions, durée, droit au travail pendant l'instruction.",
      luLe: "2026-11-02",
    },
    {
      titre: "Service-public : recours contre un refus de titre de séjour (F16053)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F16053",
      type: "officiel",
      description: "Recours administratif ou contentieux dans les 2 mois après le refus. Vérifiée le 3 juin 2025 (délai de réponse pas encore mis à jour).",
      luLe: "2026-11-02",
    },
    {
      titre: "Service-public : référé-liberté (F2551)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2551",
      type: "officiel",
      description: "Procédure d'urgence, décision du juge en 48 heures. Vérifiée le 27 avril 2026.",
      luLe: "2026-11-02",
    },
    {
      titre: "Ministère de l'Intérieur : l'administration numérique pour les étrangers en France",
      url: "https://www.immigration.interieur.gouv.fr/limmigration-en-france/ladministration-numerique-pour-etrangers-en-france",
      type: "officiel",
      description: "Centre de contact citoyens (0 806 001 620, formulaire en ligne), points d'accueil numérique des préfectures.",
      luLe: "2026-11-02",
    },
  ],
  aLireAussi: [
    { slug: "attestation-prolongation-instruction", ancre: "L'attestation de prolongation d'instruction" },
    { slug: "delai-reponse-prefecture-titre-de-sejour-90-jours", ancre: "Le délai de 90 jours de la préfecture" },
    { slug: "refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france", ancre: "Refus de titre de séjour : les recours" },
  ],
};

export default article;
