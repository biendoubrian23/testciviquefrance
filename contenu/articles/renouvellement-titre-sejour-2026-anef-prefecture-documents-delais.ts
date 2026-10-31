import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026, sans changer d'adresse. Réécrit par le robot éditorial
 * le 31/10/2026 (`docs/seo/ROBOT.md`, liste « à revérifier ») : la version
 * migrée écrivait « silence de 4 mois = refus implicite », faux depuis le
 * 30/10/2026 (décret n° 2026-1001, article R. 432-2 du CESEDA : 90 jours
 * après le dépôt d'une demande complète). Elle donnait aussi des chiffres
 * repris de la presse (objectif de 55 jours, 500 vacataires) et des mots-clés
 * dans le texte : retirés. Sources lues le 31/10/2026 : service-public F35799
 * (vérifiée le 01/05/2026), F15763 (vérifiée le 17/11/2023), A18881 (mise à
 * jour le 12/05/2026) ; décret n° 2026-1001 lu le 30/10/2026.
 */
const article: Article = {
  slug: "renouvellement-titre-sejour-2026-anef-prefecture-documents-delais",
  titre: "Renouvellement du titre de séjour : quand déposer, 90 jours pour la réponse, et vos droits en attendant",
  titreSeo: "Renouvellement titre de séjour : délai et étapes",
  resume: "Renouveler votre titre de séjour : quand déposer, où, combien ça coûte, et le délai de réponse de la préfecture, 90 jours depuis le 30 octobre 2026.",
  chapo: "Pour renouveler votre titre de séjour, déposez la demande dans les ==2 mois== qui précèdent sa fin de validité (de 4 à 2 mois avant pour un étudiant). Depuis le ==30 octobre 2026==, la préfecture a ==90 jours== pour répondre à un dossier complet. Pendant l'attente, un document provisoire garde vos droits.",
  publieLe: "2026-06-25",
  modifieLe: "2026-10-31",
  minutes: 7,
  theme: "renouvellement du titre de séjour",
  motsCles: [
    "renouvellement titre de séjour",
    "renouvellement titre de séjour délai",
    "quand renouveler titre de séjour",
    "renouvellement carte de séjour pluriannuelle",
    "renouvellement titre de séjour ANEF",
    "délai réponse préfecture renouvellement",
    "récépissé renouvellement titre de séjour",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/renouvellement-titre-sejour.webp",
    alt: "Le palais préfectoral de Nice, façade claire à colonnes derrière des palmiers, au soleil couchant",
    largeur: 1024,
    hauteur: 768,
    credit: "corno.fulgur75, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/129231073@N06/16293823652",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Article corrigé le 31 octobre 2026",
      texte: "Une ancienne version de cette page indiquait qu'un silence de 4 mois de la préfecture valait refus. C'est faux depuis le 30 octobre 2026 : le délai est de 90 jours après le dépôt d'une demande complète. Elle citait aussi des chiffres de la presse, que nous avons retirés.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Quand faut-il demander le renouvellement ?",
    },
    {
      type: "p",
      texte: "Un titre de séjour, c'est la carte qui vous autorise à vivre en France. Le renouveler, c'est demander une nouvelle carte avant la fin de l'ancienne. Le moment dépend du motif de votre carte, selon [service-public](https://www.service-public.gouv.fr/particuliers/vosdroits/F35799) (fiche vérifiée le 1er mai 2026).",
    },
    {
      type: "tableau",
      entetes: ["Motif de votre carte", "Quand déposer la demande", "Où"],
      lignes: [
        ["Salarié, entrepreneur ou profession libérale", "Dans les 2 mois avant la fin de validité", "Préfecture ou sous-préfecture de votre domicile"],
        ["Étudiant", "Au plus tôt 4 mois et au plus tard 2 mois avant la fin de validité", "En ligne, sur le site de l'État (voir ci-dessous)"],
        ["Vie privée et familiale", "Variable selon le motif précis de la carte", "Voir la fiche de votre motif sur service-public"],
      ],
      legende: "Source : service-public, fiche F35799 (carte de séjour pluriannuelle), lue le 31/10/2026.",
    },
    {
      type: "p",
      texte: "L'ANEF, c'est le site du ministère de l'Intérieur pour les démarches des étrangers. Beaucoup de demandes s'y font. Si vous n'avez pas encore de compte, notre guide pour [créer votre compte ANEF](/articles/compte-anef-creer-2026-guide-pas-a-pas) vous aide pas à pas.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Ne déposez pas trop tard : sans demande en cours, vous n'avez plus de document qui prouve votre droit au séjour une fois la carte expirée.",
        "Notez la date de fin de validité de votre carte dans votre agenda, avec un rappel 3 mois avant.",
      ],
    },
    {
      type: "h2",
      texte: "Quelles conditions faut-il remplir ?",
    },
    {
      type: "p",
      texte: "Vous devez toujours remplir les conditions de la carte que vous avez. Vous pouvez aussi demander une carte pour un autre motif, avec les pièces de ce nouveau motif (F35799).",
    },
    {
      type: "p",
      texte: "La préfecture peut refuser le renouvellement dans quelques cas, précisés par service-public :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "vous ne prouvez pas que vous vivez en France de façon habituelle, c'est-à-dire au moins 6 mois dans l'année civile ;",
        "vous avez reçu une OQTF, une obligation de quitter le territoire français, c'est-à-dire une décision qui vous demande de partir ;",
        "vous avez fait un faux document, commis certaines infractions graves, ou des violences contre un agent public.",
      ],
    },
    {
      type: "p",
      texte: "Vous partez souvent à l'étranger ? Lisez notre article sur [la durée d'absence qui peut faire perdre un titre de séjour](/articles/absence-france-voyage-perte-titre-sejour-duree-maximale-2026).",
    },
    {
      type: "h2",
      texte: "Faut-il passer l'examen civique pour renouveler ?",
    },
    {
      type: "p",
      texte: "Pas pour renouveler une carte pluriannuelle, c'est-à-dire une carte valable plusieurs années. Mais l'examen civique et le niveau de français A2 sont demandés pour une **première** carte pluriannuelle, sauf après 65 ans (F35799). L'examen civique est un QCM sur les valeurs, l'histoire et les institutions de la France.",
    },
    {
      type: "p",
      texte: "Vous avez une carte d'un an et vous allez demander une carte pluriannuelle à la place ? C'est une première carte pluriannuelle : l'attestation de réussite fait partie du dossier. Vérifiez en une minute si l'[examen civique vous concerne](/eligibilite-examen-civique), avant d'y penser le jour du dépôt. Pour la carte de 10 ans, notre article sur [l'examen civique pour la carte de résident](/articles/examen-civique-carte-de-resident) compare les deux examens.",
    },
    {
      type: "h2",
      texte: "Combien coûte le renouvellement ?",
    },
    {
      type: "p",
      texte: "Vous payez avec un timbre fiscal, une somme due à l'État que vous achetez à l'avance. Pour un renouvellement, le montant est de ==250 €== depuis le 1er mai 2026, contre 225 € avant ([service-public, A18881](https://www.service-public.gouv.fr/particuliers/actualites/A18881), mise à jour le 12 mai 2026).",
    },
    {
      type: "p",
      texte: "Un tarif réduit de ==100 €== existe, par exemple pour une carte étudiant (F35799). La preuve du paiement est demandée à la remise de la carte, pas au dépôt du dossier. Le détail des cas est dans notre page sur [les taxes des titres de séjour](/articles/hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances).",
    },
    {
      type: "h2",
      texte: "Combien de temps la préfecture a-t-elle pour répondre ?",
    },
    {
      type: "p",
      texte: "La préfecture est le service de l'État qui instruit votre demande. Depuis le 30 octobre 2026, elle doit notifier sa décision ==au plus tard 90 jours== après le dépôt d'une demande complète. Pour un dossier d'une complexité particulière, elle peut ajouter 30 jours, si elle vous prévient. C'est l'article R. 432-2 du CESEDA, modifié par le [décret n° 2026-1001](https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000055023061). Le CESEDA est le code qui réunit les règles sur le séjour des étrangers.",
    },
    {
      type: "p",
      texte: "Avant cette date, le délai était de 4 mois. Sans réponse au bout de 90 jours, la demande est refusée de façon implicite, c'est-à-dire sans lettre. Vous avez alors 2 mois pour faire un recours. Notre article sur [le délai de 90 jours](/articles/delai-reponse-prefecture-titre-de-sejour-90-jours) explique ce qui change, et ce qu'il faut demander si votre dossier date d'avant le 30 octobre.",
    },
    {
      type: "encadre",
      titre: "Le mot qui compte : « complète »",
      texte: "Les 90 jours partent du jour où votre dossier contient toutes les pièces. Si la préfecture vous demande un document, envoyez-le vite et gardez la preuve de l'envoi.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Quels sont vos droits pendant l'attente ?",
    },
    {
      type: "p",
      texte: "Pendant l'examen d'un renouvellement, la préfecture vous remet un récépissé : le papier qui prouve que votre demande est en cours. Si vous avez déposé sur l'ANEF, vous recevez à la place une attestation dans votre espace ([service-public, F15763](https://www.service-public.gouv.fr/particuliers/vosdroits/F15763), fiche vérifiée le 17 novembre 2023).",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "Le récépissé de renouvellement dure 3 mois. Il commence le lendemain de la fin de votre carte, et il peut être renouvelé (F15763).",
        "En général, il garde les droits de votre ancien titre, comme le droit de travailler. Vérifiez la mention écrite sur le document.",
        "Téléchargez l'attestation dès qu'elle apparaît sur l'ANEF, et montrez-la à votre employeur. Notre article sur l'[attestation de prolongation d'instruction](/articles/attestation-prolongation-instruction) détaille ce qu'elle permet.",
      ],
    },
    {
      type: "h2",
      texte: "Que faire si la réponse tarde ou si c'est un refus ?",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Relancez par écrit**, sur l'ANEF ou par lettre recommandée, avec votre numéro de dossier et la date du dépôt complet.",
        "**Saisissez le Défenseur des droits** si un service public ne répond pas. C'est une autorité indépendante, gratuite ([defenseurdesdroits.fr](https://www.defenseurdesdroits.fr/)).",
        "**Comptez les délais** : 90 jours après le dépôt complet, puis 2 mois pour un recours. Notre guide du [refus de titre de séjour et des recours](/articles/refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france) explique chaque étape.",
      ],
    },
    {
      type: "p",
      texte: "Cet article explique une règle générale. Pour votre situation, adressez-vous à la préfecture, à un avocat ou à une association comme La Cimade.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Déposez dans les 2 mois avant la fin de votre carte (de 4 à 2 mois avant pour un étudiant). Gardez la preuve que votre dossier est complet : la préfecture a 90 jours pour répondre depuis le 30 octobre 2026. Pendant l'attente, le récépissé ou l'attestation de l'ANEF prouve vos droits.",
      ton: "vert",
    },
  ],
  faq: [
    {
      question: "Quand faire la demande de renouvellement de titre de séjour ?",
      reponse: "Pour une carte salarié, entrepreneur ou profession libérale, dans les 2 mois qui précèdent la fin de validité, à la préfecture de votre domicile. Pour une carte étudiant, sur l'ANEF, entre 4 mois et 2 mois avant la fin. Pour une carte vie privée et familiale, la date dépend du motif (service-public F35799).",
    },
    {
      question: "Quel est le délai de renouvellement d'un titre de séjour ?",
      reponse: "Depuis le 30 octobre 2026, la préfecture doit répondre au plus tard 90 jours après le dépôt d'une demande complète (article R. 432-2 du CESEDA). Pour un dossier complexe, elle peut ajouter 30 jours si elle vous prévient. Sans réponse, c'est un refus implicite, contestable dans un délai de 2 mois.",
    },
    {
      question: "Combien coûte le renouvellement d'un titre de séjour ?",
      reponse: "Le timbre fiscal est de 250 € depuis le 1er mai 2026, contre 225 € avant. Un tarif réduit de 100 € s'applique dans certains cas, par exemple pour une carte étudiant. Vous payez au moment où la carte vous est remise, pas au dépôt du dossier (service-public A18881 et F35799).",
    },
    {
      question: "Peut-on travailler pendant le renouvellement du titre de séjour ?",
      reponse: "En général, oui. Le récépissé délivré pour un renouvellement garde les droits de votre ancien titre, dont le droit de travailler, selon service-public (F15763). Sur l'ANEF, c'est une attestation qui joue ce rôle. Vérifiez la mention écrite sur le document et montrez-le à votre employeur.",
    },
  ],
  sources: [
    {
      titre: "Service-public : carte de séjour pluriannuelle « générale », renouvellement (F35799, vérifiée le 1er mai 2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F35799",
      type: "officiel",
      luLe: "2026-10-31",
    },
    {
      titre: "Service-public : qu'est-ce qu'un récépissé de demande de titre de séjour ? (F15763, vérifiée le 17 novembre 2023)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F15763",
      type: "officiel",
      luLe: "2026-10-31",
    },
    {
      titre: "Service-public : titres de séjour, hausse du montant des taxes à partir du 1er mai 2026 (A18881, mise à jour le 12 mai 2026)",
      url: "https://www.service-public.gouv.fr/particuliers/actualites/A18881",
      type: "officiel",
      luLe: "2026-10-31",
    },
    {
      titre: "Légifrance : décret n° 2026-1001 du 26 octobre 2026 (JORF n° 0253 du 29 octobre 2026), article R. 432-2 du CESEDA",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000055023061",
      type: "officiel",
      description: "Texte intégral lu dans l'édition open data du Journal officiel (DILA)",
      luLe: "2026-10-30",
    },
    {
      titre: "Défenseur des droits",
      url: "https://www.defenseurdesdroits.fr/",
      type: "officiel",
      luLe: "2026-10-31",
    },
  ],
  aLireAussi: [
    {
      slug: "delai-reponse-prefecture-titre-de-sejour-90-jours",
      ancre: "Délai de réponse de la préfecture : 90 jours",
    },
    {
      slug: "attestation-prolongation-instruction",
      ancre: "Attestation de prolongation d'instruction : vos droits",
    },
    {
      slug: "refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france",
      ancre: "Que faire en cas de refus ?",
    },
  ],
};

export default article;
