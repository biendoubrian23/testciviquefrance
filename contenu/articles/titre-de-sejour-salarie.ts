import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 16/11/2026 (`docs/seo/ROBOT.md`).
 * Requêtes visées : « titre de séjour salarié » et « renouvellement titre de
 * séjour salarié » (1 k à 10 k recherches par mois chacune ; Planificateur de
 * mots clés, « Trouver de nouveaux mots clés », France, French, 09/11/2026),
 * « carte de séjour salarié » (100 à 1 k). Aucune page dédiée chez nous
 * (`travailler-france-etranger-autorisation-droits` traite de l'autorisation
 * de travail, pas de la carte). Angle du moment : le décret n° 2026-1001
 * (changement d'employeur après 6 mois, délai de 90 jours), repris par
 * service-public le 06/11/2026 (A19128).
 * Sources lues le 16/11/2026 : service-public F15898 (vérifiée le 01/05/2026,
 * « en cours de mise à jour »), F2728, F35799, A18881 (mise à jour le
 * 12/05/2026), A19128 (06/11/2026). Décret n° 2026-1001 lu le 30/10/2026.
 * Non écrit : la taxe de l'employeur (montants non relus mot pour mot) ; le
 * droit de visa de régularisation donné à 180 € par F15898 et à 300 € par
 * A18881 (on cite A18881, plus récente, et on signale l'écart).
 */
const article: Article = {
  slug: "titre-de-sejour-salarie",
  titre: "Titre de séjour salarié : la carte d'un an, celle de 4 ans, et changer d'employeur après 6 mois",
  titreSeo: "Titre de séjour salarié : obtenir et renouveler",
  resume: "Titre de séjour salarié : conditions, pièces, prix, renouvellement en carte de 4 ans, changement d'employeur et perte d'emploi en 2026.",
  chapo: "Le titre de séjour « salarié » est la carte qui permet à un étranger de vivre en France pour y travailler en CDI. La première carte vaut ==1 an==, puis vous pouvez demander une carte de ==4 ans==. Depuis le 30 octobre 2026, vous pouvez changer d'employeur ==6 mois== après une première autorisation de travail, et non plus 12.",
  publieLe: "2026-11-16",
  modifieLe: "2026-11-16",
  minutes: 8,
  theme: "Le titre de séjour salarié : obtenir la carte, la renouveler, changer d'employeur ou perdre son emploi",
  motsCles: [
    "titre de séjour salarié",
    "carte de séjour salarié",
    "renouvellement titre de séjour salarié",
    "titre de séjour salarié pluriannuel",
    "changer d'employeur titre de séjour",
    "titre de séjour travailleur temporaire",
    "perte d'emploi titre de séjour salarié",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/titre-de-sejour-salarie.webp",
    alt: "Grue de chantier rouge et jaune sur un ciel blanc, la flèche tendue au-dessus d'un chantier",
    largeur: 1024,
    hauteur: 683,
    credit: "Alexandre Prevot, via Flickr",
    licence: "CC BY-SA 2.0",
    source: "https://www.flickr.com/photos/32569229@N06/51820406298",
  },
  blocs: [
    {
      type: "h2",
      texte: "Qu'est-ce que le titre de séjour salarié ?",
    },
    {
      type: "p",
      texte: "Un titre de séjour, c'est la carte qui vous permet de vivre en France de façon régulière. La carte « salarié » est celle des personnes venues travailler en France pour un employeur. Elle est délivrée par la préfecture, le service de l'État qui gère les titres de séjour dans votre département ([F15898](https://www.service-public.gouv.fr/particuliers/vosdroits/F15898)).",
    },
    {
      type: "p",
      texte: "Tout dépend de votre contrat. Avec un CDI (un contrat sans date de fin), vous recevez une carte « salarié ». Avec un CDD (un contrat à durée limitée), vous recevez une carte « travailleur temporaire ». Service-public le dit ainsi : « Cette carte est valable 1 an et renouvelable. »",
    },
    {
      type: "encadre",
      titre: "Qui n'est pas concerné ?",
      texte: "Les citoyens de l'Union européenne, de l'Espace économique européen et de la Suisse n'ont pas besoin de cette carte pour travailler. Les Algériens suivent l'accord franco-algérien de 1968 : leurs règles sont différentes, comme le rappelle service-public. Outre-mer, certaines collectivités ont leurs propres règles : renseignez-vous auprès de la préfecture ou du haut-commissariat de votre territoire.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Quelles sont les étapes pour une première carte ?",
    },
    {
      type: "p",
      texte: "Si vous vivez encore à l'étranger, tout commence par votre futur employeur. C'est lui qui demande, sur internet, l'autorisation de travail : le document qui vous permet d'occuper ce poste en France ([F2728](https://www.service-public.gouv.fr/particuliers/vosdroits/F2728)).",
    },
    {
      type: "tableau",
      entetes: ["Étape", "Qui agit", "Ce qu'il faut savoir"],
      lignes: [
        ["1. Autorisation de travail", "L'employeur, en ligne", "À demander avant votre arrivée en France, et pour chaque nouveau contrat"],
        ["2. Visa de long séjour « salarié »", "Vous, au consulat", "C'est le VLS-TS : un visa qui vaut titre de séjour pendant sa première année"],
        ["3. Validation du VLS-TS", "Vous, en ligne", "Dans les 3 mois après votre arrivée, avec une taxe de 300 € selon F15898"],
        ["4. Carte de séjour « salarié »", "Vous, à la préfecture", "Avant la fin de validité du VLS-TS"],
        ["5. Carte pluriannuelle de 4 ans", "Vous, à la préfecture", "Après une première carte « salarié », sous conditions"],
      ],
      legende: "Sources : service-public F15898, F2728 et F35799, lues le 16/11/2026.",
    },
    {
      type: "p",
      texte: "Retenez une règle importante. Votre visa ou votre carte vous permet seulement d'exercer l'activité salariée pour laquelle l'autorisation de travail a été obtenue, dit [F2728](https://www.service-public.gouv.fr/particuliers/vosdroits/F2728). Un nouveau contrat demande donc une nouvelle autorisation de travail. Notre article sur l'[autorisation de travail des étrangers](/articles/travailler-france-etranger-autorisation-droits) explique qui en a besoin.",
    },
    {
      type: "h2",
      texte: "Quelles pièces fournir à la préfecture ?",
    },
    {
      type: "p",
      texte: "À la fin de votre VLS-TS « salarié », vous demandez la carte à la préfecture ou à la sous-préfecture de votre domicile. Service-public renvoie à la procédure de dépôt indiquée sur le site de votre préfecture. Voici les pièces demandées dans ce cas ([F15898](https://www.service-public.gouv.fr/particuliers/vosdroits/F15898)) :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "votre passeport et votre visa de long séjour qui arrive à sa fin ;",
        "un justificatif de domicile de moins de 6 mois ;",
        "3 photos d'identité (avec leur code e-photo si vous déposez en ligne) ;",
        "l'autorisation de travail qui correspond à votre poste ;",
        "la déclaration sociale de votre employeur, ou une attestation d'activité des 12 derniers mois ;",
        "l'engagement signé à respecter les principes de la République.",
      ],
    },
    {
      type: "p",
      texte: "Au moment de recevoir la carte, on vous demande aussi la preuve du paiement du timbre fiscal et le certificat médical de l'OFII. Le timbre fiscal est une taxe payée en ligne. L'OFII, c'est l'Office français de l'immigration et de l'intégration, qui fait passer la visite médicale.",
    },
    {
      type: "h2",
      texte: "Combien coûte le titre de séjour salarié ?",
    },
    {
      type: "p",
      texte: "Les taxes ont augmenté le 1er mai 2026 ([A18881](https://www.service-public.gouv.fr/particuliers/actualites/A18881)). Vous les payez quand la préfecture accepte votre demande, pas au dépôt.",
    },
    {
      type: "tableau",
      entetes: ["Demande", "Montant depuis le 1er mai 2026", "Détail"],
      lignes: [
        ["Première carte de séjour", "350 €", "300 € de taxe et 50 € de droit de timbre"],
        ["Renouvellement", "250 €", "200 € de taxe et 50 € de droit de timbre"],
        ["Demande déposée trop tard", "Droit de visa de régularisation en plus", "300 € selon A18881 (la fiche F15898, en cours de mise à jour, indique encore 180 €)"],
      ],
      legende: "Sources : service-public A18881 (mise à jour le 12/05/2026), F15898 et F35799, lues le 16/11/2026.",
    },
    {
      type: "p",
      texte: "Le tarif réduit de 150 € vaut pour d'autres motifs, comme les étudiants ou les travailleurs saisonniers. Il ne vaut pas pour la carte « salarié ». Tous les montants sont dans notre article sur les [taxes des titres de séjour](/articles/hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances).",
    },
    {
      type: "h2",
      texte: "Comment renouveler et obtenir la carte de 4 ans ?",
    },
    {
      type: "p",
      texte: "Déposez votre demande ==au plus tard 2 mois avant la fin== de votre carte, à la préfecture de votre domicile ([F15898](https://www.service-public.gouv.fr/particuliers/vosdroits/F15898)). Si vous avez toujours votre emploi et que la demande est acceptée, vous recevez une carte de séjour pluriannuelle de ==4 ans==. Une carte pluriannuelle est une carte valable plusieurs années ([F35799](https://www.service-public.gouv.fr/particuliers/vosdroits/F35799)).",
    },
    {
      type: "p",
      texte: "Pour une première carte pluriannuelle, service-public cite trois conditions de plus, sauf si vous avez plus de 65 ans :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "un niveau de français **A2**, c'est-à-dire le niveau d'une personne qui se débrouille dans la vie de tous les jours ([nos explications sur les niveaux A2, B1 et B2](/articles/niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation)) ;",
        "la réussite à l'**examen civique**, mention « carte de séjour pluriannuelle » : 40 questions sur les valeurs, les institutions et l'histoire de la France ;",
        "la signature du **contrat d'engagement** à respecter les principes de la République.",
      ],
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Avec une carte « travailleur temporaire » (un CDD), vous ne pouvez pas demander une carte pluriannuelle pour le même motif, précise F35799.",
        "L'examen civique se prépare avant le dépôt : prévoyez le temps de vous inscrire, de le passer et de recevoir l'attestation. Notre guide de l'[examen civique pour la carte pluriannuelle](/articles/examen-civique-obligatoire-carte-sejour-pluriannuelle-2026) détaille qui le passe.",
      ],
    },
    {
      type: "cta",
      texte: "La carte de 4 ans demande la réussite à l'examen civique. Testez-vous sur 40 questions types avant de vous inscrire à l'examen : l'inscription à Test Civique France est gratuite.",
      bouton: "Tester mon niveau",
    },
    {
      type: "h2",
      texte: "Pouvez-vous changer d'employeur ?",
    },
    {
      type: "p",
      texte: "Oui, mais pas tout de suite. Après une première autorisation de travail en France, il existe une période pendant laquelle vous ne pouvez pas changer d'employeur. Depuis le ==30 octobre 2026==, elle dure ==6 mois==, « contre 12 mois auparavant » ([A19128](https://www.service-public.gouv.fr/particuliers/actualites/A19128), publiée le 6 novembre 2026). C'est le décret n° 2026-1001, un texte du gouvernement, qui l'a changée.",
    },
    {
      type: "p",
      texte: "Le décret prévoit une exception : si l'employeur viole gravement les conditions de travail, vous pouvez changer avant la fin des 6 mois (article R. 5221-36 du code du travail). Dans tous les cas, le nouvel employeur doit obtenir une nouvelle autorisation de travail pour votre nouveau contrat. Notre article sur le [décret du 26 octobre 2026](/articles/delai-reponse-prefecture-titre-de-sejour-90-jours) détaille ces changements.",
    },
    {
      type: "h2",
      texte: "Que se passe-t-il si vous perdez votre emploi ?",
    },
    {
      type: "p",
      texte: "Votre carte ne disparaît pas le jour où votre contrat s'arrête. La suite dépend de votre carte et de votre situation ([F15898](https://www.service-public.gouv.fr/particuliers/vosdroits/F15898), [A19128](https://www.service-public.gouv.fr/particuliers/actualites/A19128)) :",
    },
    {
      type: "tableau",
      entetes: ["Situation", "Ce que dit service-public"],
      lignes: [
        ["Carte « salarié », au chômage indemnisé", "Vous pouvez recevoir une nouvelle carte « salarié » d'un an au plus, d'une durée égale à vos droits au chômage"],
        ["Carte « salarié », sans emploi au renouvellement", "Vous déposez la demande avec l'attestation de votre ancien employeur pour France Travail et l'avis de situation de France Travail"],
        ["Carte « travailleur temporaire », chômage subi", "Vous gardez votre droit au séjour si vous n'êtes pas sans emploi plus de 3 mois pendant la validité de la carte"],
      ],
      legende: "Sources : service-public F15898 et A19128, lues le 16/11/2026.",
    },
    {
      type: "p",
      texte: "France Travail, c'est l'organisme public de l'emploi qui verse les allocations chômage. Pour vos droits au chômage, lisez notre article sur la [perte d'emploi d'un étranger en France](/articles/chomage-perte-emploi-etranger-france-2026-are-france-travail-droits). Pour votre cas précis, demandez conseil à la préfecture, à un avocat ou à une association comme La Cimade.",
    },
    {
      type: "h2",
      texte: "Combien de temps la préfecture a-t-elle pour répondre ?",
    },
    {
      type: "p",
      texte: "Depuis le 30 octobre 2026, la décision du préfet doit intervenir dans un délai de ==90 jours== après une demande complète, contre 4 mois avant ([A19128](https://www.service-public.gouv.fr/particuliers/actualites/A19128)). Pour un dossier complexe, la préfecture peut ajouter 30 jours en vous prévenant. Sans réponse, la demande est refusée de façon implicite, ce qui ouvre un délai de recours.",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "Notez la date où votre dossier est complet, puis comptez 90 jours.",
        "Gardez toujours la preuve de votre dépôt : elle montre que vous avez demandé le renouvellement à temps.",
        "Déposez dans les délais : notre guide du [renouvellement de titre de séjour](/articles/renouvellement-titre-sejour-2026-anef-prefecture-documents-delais) donne la marche à suivre.",
        "Avant de viser la carte de 4 ans, vérifiez en une minute si l'[examen civique vous concerne](/eligibilite-examen-civique).",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La première carte « salarié » vaut ==1 an== et coûte 350 €. Renouvelez-la au plus tard 2 mois avant sa fin : avec votre emploi, le niveau A2 et l'examen civique, vous pouvez obtenir une carte de ==4 ans== (250 €). Depuis le 30 octobre 2026, vous pouvez changer d'employeur 6 mois après une première autorisation de travail.",
      ton: "vert",
    },
  ],
  faq: [
    {
      question: "Quelle est la durée d'un titre de séjour salarié ?",
      reponse: "La première carte de séjour « salarié » est valable 1 an et renouvelable, selon service-public. Si vous gardez votre emploi, le renouvellement peut donner une carte de séjour pluriannuelle de 4 ans. Pour la première carte pluriannuelle, il faut aussi un niveau de français A2 et la réussite à l'examen civique, sauf après 65 ans.",
    },
    {
      question: "Quand faire le renouvellement du titre de séjour salarié ?",
      reponse: "Service-public demande de déposer la demande au plus tard 2 mois avant la fin de validité de votre carte, à la préfecture ou à la sous-préfecture de votre domicile. Gardez la preuve de dépôt. Depuis le 30 octobre 2026, la préfecture a 90 jours pour répondre à une demande complète, 30 jours de plus pour un dossier complexe.",
    },
    {
      question: "Peut-on changer d'employeur avec un titre de séjour salarié ?",
      reponse: "Oui. Depuis le 30 octobre 2026, la période pendant laquelle vous ne pouvez pas changer d'employeur, après une première autorisation de travail, est de 6 mois au lieu de 12. Le nouvel employeur doit demander une nouvelle autorisation de travail pour votre contrat. Une violation grave des conditions de travail permet de changer plus tôt.",
    },
    {
      question: "Combien coûte une carte de séjour salarié en 2026 ?",
      reponse: "Depuis le 1er mai 2026, une première carte coûte 350 €, soit 300 € de taxe et 50 € de droit de timbre. Un renouvellement coûte 250 €. Vous payez quand la préfecture accepte la demande. Une demande déposée trop tard ajoute un droit de visa de régularisation, de 300 € selon service-public (A18881).",
    },
  ],
  sources: [
    {
      titre: "Service-public : Travail d'un étranger en France, carte de séjour salarié ou travailleur temporaire (F15898, vérifiée le 1er mai 2026, en cours de mise à jour)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F15898",
      type: "officiel",
      luLe: "2026-11-16",
    },
    {
      titre: "Service-public : Autorisation de travail d'un salarié étranger en France (F2728, vérifiée le 18 juin 2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2728",
      type: "officiel",
      luLe: "2026-11-16",
    },
    {
      titre: "Service-public : Carte de séjour pluriannuelle (F35799, vérifiée le 1er mai 2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F35799",
      type: "officiel",
      luLe: "2026-11-16",
    },
    {
      titre: "Service-public : Titres de séjour, augmentation du montant des taxes demandées aux étrangers à compter du 1er mai (A18881, mise à jour le 12 mai 2026)",
      url: "https://www.service-public.gouv.fr/particuliers/actualites/A18881",
      type: "officiel",
      luLe: "2026-11-16",
    },
    {
      titre: "Service-public : Ressortissants étrangers, du nouveau concernant le droit à travailler et à séjourner en France (A19128, publiée le 6 novembre 2026)",
      url: "https://www.service-public.gouv.fr/particuliers/actualites/A19128",
      type: "officiel",
      luLe: "2026-11-16",
    },
    {
      titre: "Légifrance : décret n° 2026-1001 du 26 octobre 2026 relatif aux droits des ressortissants étrangers autorisés à travailler en France (JORF n° 0253 du 29 octobre 2026)",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000055023061",
      type: "officiel",
      description: "Texte intégral et notice, lus dans l'édition open data du Journal officiel (DILA)",
      luLe: "2026-10-30",
    },
  ],
};

export default article;
