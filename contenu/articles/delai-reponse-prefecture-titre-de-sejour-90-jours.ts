import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 30/10/2026 (`docs/seo/ROBOT.md`), sous la
 * règle des 24 heures : décret n° 2026-1001 du 26 octobre 2026, publié au
 * Journal officiel n° 0253 du 29 octobre 2026, en vigueur le 30 octobre 2026.
 * Texte intégral lu le 30/10/2026 dans l'archive open data de la DILA (même
 * texte que Légifrance), notice comprise. Service-public (F16053, vérifiée le
 * 03/06/2025) indique encore 4 mois : la fiche n'est pas à jour. Nouvelle
 * règle de moins de 72 heures : pas de volume mesuré. Famille « actualité
 * réglementaire ».
 */
const article: Article = {
  slug: "delai-reponse-prefecture-titre-de-sejour-90-jours",
  titre: "Titre de séjour : la préfecture a 90 jours pour répondre depuis le 30 octobre 2026, ce qui change pour vous",
  titreSeo: "Délai préfecture titre de séjour : 90 jours",
  resume: "Titre de séjour : depuis le 30 octobre 2026, la préfecture doit répondre en 90 jours, et non plus en 4 mois. Ce que change le décret.",
  chapo: "Votre demande de titre de séjour (la carte qui permet de vivre en France) attend une réponse ? Depuis le ==30 octobre 2026==, la préfecture (le service de l'État qui gère votre dossier) a ==90 jours== pour répondre à un dossier complet, au lieu de 4 mois. Sans réponse, la demande est refusée de façon implicite. Le décret, un texte du gouvernement, change aussi des règles sur le changement d'employeur.",
  publieLe: "2026-10-30",
  modifieLe: "2026-10-30",
  minutes: 9,
  theme: "délai de réponse de la préfecture pour un titre de séjour",
  motsCles: [
    "délai réponse préfecture titre de séjour",
    "décret 2026-1001",
    "décret 26 octobre 2026 titre de séjour",
    "silence préfecture titre de séjour 90 jours",
    "refus implicite titre de séjour",
    "changer d'employeur titre de séjour 6 mois",
    "carte bleue européenne 2026",
  ],
  rubrique: "actualites",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/delai-reponse-prefecture-titre-de-sejour.webp",
    alt: "Façade d'une préfecture en pierre claire derrière une grille, avec des drapeaux français et européens, devant une grande place vide",
    largeur: 1200,
    hauteur: 800,
    credit: "JacquesLavignotte, via Wikimedia Commons",
    licence: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Prefecture-Region-Poitiers-86.jpg",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qu'est-ce que le décret du 26 octobre 2026 ?",
    },
    {
      type: "p",
      texte: "C'est un décret : un texte signé par le Premier ministre, qui précise comment appliquer la loi. Il porte le numéro 2026-1001. Il a été publié au Journal officiel (le journal où paraissent les lois et les décrets) le 29 octobre 2026 ([Légifrance](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000055023061)).",
    },
    {
      type: "p",
      texte: "Il modifie le CESEDA, c'est-à-dire le code qui réunit les règles sur l'entrée et le séjour des étrangers en France. Il modifie aussi le code du travail. Il transpose des directives européennes, notamment la directive « permis unique » de 2024, qui fixe des règles communes pour les étrangers qui vivent et travaillent dans l'Union européenne.",
    },
    {
      type: "encadre",
      titre: "Les dates à retenir",
      texte: "Publié au Journal officiel : ==29 octobre 2026==.\nEn vigueur : ==30 octobre 2026==, le lendemain de sa publication, selon la notice du décret.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Combien de temps la préfecture a-t-elle pour répondre ?",
    },
    {
      type: "p",
      texte: "La préfecture, c'est le service de l'État qui instruit les demandes de titre de séjour (la carte qui vous permet de vivre en France de façon régulière). Depuis le 30 octobre 2026, elle doit notifier sa décision par écrit ==au plus tard 90 jours== après le dépôt d'une demande complète (article R. 432-2 du CESEDA, réécrit par l'article 2 du décret).",
    },
    {
      type: "tableau",
      entetes: ["Point", "Avant le 30 octobre 2026", "Depuis le 30 octobre 2026"],
      lignes: [
        ["Délai de réponse de la préfecture", "4 mois", "90 jours après le dépôt d'une demande complète"],
        ["Dossier d'une complexité particulière", "Règle nouvelle", "30 jours de plus, si la préfecture vous en informe"],
        ["Silence de la préfecture", "Refus implicite après 4 mois", "Refus implicite après 90 jours"],
      ],
      legende: "Source : décret n° 2026-1001 du 26 octobre 2026, article 2 et notice, lus le 30/10/2026.",
    },
    {
      type: "p",
      texte: "Deux mots comptent dans ce texte. **« Complète »** : le délai part du jour où votre dossier contient toutes les pièces demandées. Si la préfecture vous réclame un document, répondez vite. **« Complexité particulière »** : pour un dossier difficile, la préfecture peut ajouter 30 jours, à condition de vous le dire.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Le décret énumère des cartes pour lesquelles la préfecture ne peut pas ajouter les 30 jours. C'est le cas, par exemple, de la carte « talent, carte bleue européenne » et des cartes de salarié détaché « ICT ».",
        "Quelques cartes gardent leur propre délai, plus court. Par exemple, l'article R. 421-26 prévoit un refus implicite au bout de ==60 jours== après le dépôt de la demande complète (article 5 du décret).",
        "La fiche de service-public sur la régularisation par le travail parle encore de 4 mois ([F16053](https://www.service-public.gouv.fr/particuliers/vosdroits/F16053), vérifiée le 3 juin 2025). Elle n'est pas encore mise à jour : le décret s'applique depuis le 30 octobre 2026.",
      ],
    },
    {
      type: "h2",
      texte: "Que veut dire « refus implicite » ?",
    },
    {
      type: "p",
      texte: "Un refus implicite, c'est un refus sans lettre. En matière de titre de séjour, le silence de la préfecture vaut refus (article R.* 432-1 du CESEDA). Depuis le décret, ce refus naît au bout de ==90 jours== après le dépôt d'une demande complète, au lieu de 4 mois.",
    },
    {
      type: "p",
      texte: "Ce refus ouvre un délai pour agir. Service-public indique ==2 mois== à partir du refus pour faire un recours ([F16053](https://www.service-public.gouv.fr/particuliers/vosdroits/F16053)) :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "un **recours gracieux** : une lettre au préfet pour lui demander de revoir sa décision ;",
        "un **recours hiérarchique** : une lettre au ministre de l'Intérieur ;",
        "un **recours contentieux** : une requête devant le tribunal administratif. L'avocat n'y est pas obligatoire, selon service-public.",
      ],
    },
    {
      type: "p",
      texte: "Le délai est donc plus court qu'avant : notez la date de dépôt complet de votre dossier, et comptez 90 jours. Pendant l'instruction, gardez votre preuve de séjour régulier. Sur l'ANEF (le site du ministère pour les démarches des étrangers), c'est souvent l'[attestation de prolongation d'instruction](/articles/attestation-prolongation-instruction). Pour la suite, notre guide du [refus de titre de séjour et des recours](/articles/refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france) explique chaque étape.",
    },
    {
      type: "encadre",
      titre: "Et les demandes déposées avant le 30 octobre ?",
      texte: "Le décret entre en vigueur le 30 octobre 2026. Sa notice ne prévoit pas de règle particulière pour les demandes déjà en cours. Votre demande date d'avant le 30 octobre ? Demandez quel délai s'applique à votre dossier : à la préfecture, à un avocat ou à une association (La Cimade, une permanence d'accès au droit).",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Qu'est-ce qui change si vous travaillez ?",
    },
    {
      type: "p",
      texte: "Le décret touche aussi l'autorisation de travail, c'est-à-dire le document qui permet à un étranger d'occuper un emploi salarié en France. Trois changements concernent beaucoup de monde.",
    },
    {
      type: "tableau",
      entetes: ["Situation", "Ce que dit le décret"],
      lignes: [
        ["Changer d'employeur après une première autorisation de travail", "La période pendant laquelle vous ne pouvez pas changer d'employeur passe de ==12 à 6 mois== (article R. 5221-36 du code du travail, article 14 du décret)"],
        ["Employeur qui viole gravement les conditions de travail", "Nouvelle exception : vous pouvez changer d'employeur avant la fin de ces 6 mois (même article)"],
        ["Carte « travailleur temporaire » et perte d'emploi involontaire", "La carte ne peut pas être retirée après une période sans emploi, subie et non choisie, de ==3 mois au plus== au total pendant sa validité (article R. 421-4, article 1 du décret)"],
        ["Nouvel employeur trouvé pendant cette période", "Vous pouvez rester en France pendant l'examen de la nouvelle demande d'autorisation de travail (même article)"],
      ],
      legende: "Source : décret n° 2026-1001 du 26 octobre 2026, articles 1 et 14, lus le 30/10/2026.",
    },
    {
      type: "p",
      texte: "La période de 3 mois est prolongée de 3 mois pour une victime de conditions de travail punies par le code pénal. C'est le cas de la traite des êtres humains ou d'un travail contraire à la dignité. Pour vos droits au chômage, lisez notre article sur la [perte d'emploi et le chômage des étrangers](/articles/chomage-perte-emploi-etranger-france-2026-are-france-travail-droits).",
    },
    {
      type: "h2",
      texte: "Qu'est-ce qui change pour les salariés très qualifiés ?",
    },
    {
      type: "p",
      texte: "La carte « talent, carte bleue européenne » est une carte pluriannuelle (valable plusieurs années) pour les emplois hautement qualifiés. Le décret en change quatre points.",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Sa durée** : la même que le contrat de travail, dans la limite de 4 ans, si le contrat dure au moins 2 ans. Pour un contrat plus court, la durée du contrat plus 3 mois, dans la limite de 2 ans (article R. 421-12).",
        "**Venir d'un autre pays de l'Union** : il faut désormais ==12 mois== de séjour avec une carte bleue européenne dans un autre État membre, au lieu de 18 mois. À partir de la deuxième mobilité, 6 mois suffisent (articles R. 421-21 et R. 421-22).",
        "**Perdre son emploi par la faute de l'employeur** : le préfet peut envisager de refuser le renouvellement ou de retirer la carte. Il doit alors vous laisser ==6 mois== pour chercher un nouvel emploi, ou plus si vos droits au chômage durent plus longtemps (nouvel article R. 421-24 A).",
        "**La famille** : le renouvellement du titre d'un membre de la famille est facilité après 5 ans de résidence régulière dans différents pays de l'Union, selon la notice.",
      ],
    },
    {
      type: "p",
      texte: "Les cartes « ICT » servent à un transfert à l'intérieur d'un même groupe d'entreprises. Pour un salarié détaché ou un stagiaire « ICT », il faut désormais un salaire annuel brut minimum. Ce montant est fixé par arrêté, c'est-à-dire une décision du ministre chargé de l'immigration (articles 10 et 11). Pour le seuil de salaire de la carte « talent, salarié qualifié », voir notre article sur le [passeport talent salarié qualifié](/articles/passeport-talent-salarie-qualifie-2026-salaire-conditions-procedure).",
    },
    {
      type: "p",
      texte: "Enfin, une entreprise britannique peut envoyer un salarié en France pour une prestation de services. Sous conditions, ce salarié peut travailler sans autorisation de travail, pendant 12 mois au plus en tout (article 13). Les métiers concernés seront fixés par arrêté.",
    },
    {
      type: "h2",
      texte: "Le décret s'applique-t-il en outre-mer ?",
    },
    {
      type: "p",
      texte: "Les articles 15 à 19 du décret étendent ces règles, avec des adaptations, aux collectivités d'outre-mer qui ont leurs propres tableaux dans le CESEDA. Le décret cite les avis de Saint-Barthélemy et de la Polynésie française, et la saisine de Saint-Martin et de la Nouvelle-Calédonie. Dans ces collectivités, l'autorisation de travailler relève des règles locales (article 19). Si vous vivez outre-mer, renseignez-vous auprès de la préfecture ou du haut-commissariat de votre territoire.",
    },
    {
      type: "h2",
      texte: "Quoi faire dès aujourd'hui ?",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "Gardez la preuve du jour où votre dossier est complet (courriel ou message de l'ANEF, accusé de réception).",
        "Notez dans votre agenda la date de dépôt plus 90 jours, puis plus 2 mois pour un éventuel recours.",
        "Répondez vite à toute demande de pièce : le délai ne court que sur un dossier complet.",
        "Pour un renouvellement, déposez dans la fenêtre prévue, comme l'explique notre guide du [renouvellement de titre de séjour](/articles/renouvellement-titre-sejour-2026-anef-prefecture-documents-delais).",
        "Pour une première carte pluriannuelle ou une carte de résident (la carte de 10 ans), vérifiez en une minute si l'[examen civique vous concerne](/eligibilite-examen-civique).",
      ],
    },
    {
      type: "p",
      texte: "Cet article explique une règle générale. Pour une situation précise, adressez-vous à la préfecture, à un avocat ou à une association comme La Cimade. Vous pouvez aussi saisir le Défenseur des droits (l'autorité indépendante qui défend les droits face aux administrations).",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Depuis le 30 octobre 2026, la préfecture a ==90 jours== après le dépôt d'une demande complète pour répondre, 30 jours de plus pour un dossier complexe. Sans réponse, c'est un refus implicite, contre lequel vous avez 2 mois pour agir. Après une première autorisation de travail, vous pouvez changer d'employeur au bout de 6 mois, et non plus 12.",
      ton: "vert",
    },
  ],
  faq: [
    {
      question: "Quel est le délai de réponse de la préfecture pour un titre de séjour ?",
      reponse: "Depuis le 30 octobre 2026, la préfecture doit notifier sa décision au plus tard 90 jours après le dépôt d'une demande complète (article R. 432-2 du CESEDA, modifié par le décret n° 2026-1001). Pour un dossier d'une complexité particulière, elle peut ajouter 30 jours en vous prévenant. Avant cette date, le délai était de 4 mois.",
    },
    {
      question: "Que faire si la préfecture ne répond pas à ma demande de titre de séjour ?",
      reponse: "Au bout de 90 jours après le dépôt d'une demande complète, le silence vaut refus implicite. Vous avez alors 2 mois pour un recours gracieux auprès du préfet, un recours hiérarchique auprès du ministre de l'Intérieur ou un recours devant le tribunal administratif. Pour votre cas, demandez conseil à un avocat ou à une association.",
    },
    {
      question: "Peut-on changer d'employeur avec un titre de séjour salarié ?",
      reponse: "Oui, mais pas tout de suite après une première autorisation de travail. Depuis le 30 octobre 2026, cette période d'attente est de 6 mois, au lieu de 12 (article R. 5221-36 du code du travail). Elle ne s'applique pas en cas de perte involontaire d'emploi, ni si l'employeur viole gravement les conditions de travail.",
    },
    {
      question: "Le décret du 26 octobre 2026 s'applique-t-il aux demandes déjà déposées ?",
      reponse: "Le décret est en vigueur depuis le 30 octobre 2026, et sa notice ne prévoit pas de règle particulière pour les demandes en cours. Si votre demande date d'avant cette date, demandez à la préfecture, à un avocat ou à une association quel délai s'applique à votre dossier, avant de compter les jours.",
    },
  ],
  sources: [
    {
      titre: "Légifrance : décret n° 2026-1001 du 26 octobre 2026 relatif aux droits des ressortissants étrangers autorisés à travailler en France, aux conditions d'octroi d'une carte de séjour pluriannuelle aux travailleurs hautement qualifiés et aux membres de leur famille et à la dispense d'autorisation de travail pour les ressortissants étrangers détachés en France par un employeur britannique (JORF n° 0253 du 29 octobre 2026)",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000055023061",
      type: "officiel",
      description: "Texte intégral et notice, lus dans l'édition open data du Journal officiel (DILA)",
      luLe: "2026-10-30",
    },
    {
      titre: "Journal officiel, open data de la DILA : édition JORF n° 0253 du 29 octobre 2026",
      url: "https://echanges.dila.gouv.fr/OPENDATA/JORF/",
      type: "officiel",
      luLe: "2026-10-30",
    },
    {
      titre: "Service-public : qu'est-ce que la régularisation d'un étranger par le travail ? (F16053, vérifiée le 3 juin 2025, délais de recours)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F16053",
      type: "officiel",
      luLe: "2026-10-30",
    },
  ],
};

export default article;
