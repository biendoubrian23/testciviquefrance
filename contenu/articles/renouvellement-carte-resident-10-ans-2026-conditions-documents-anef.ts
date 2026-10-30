import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-batch-mai-2026-4.ts`
 * et `lib/data/seo-articles.ts`, sans changer d'adresse.
 *
 * Corrigé et réécrit en entier par le robot éditorial le 22/10/2026
 * (`docs/seo/ROBOT.md`) : l'ancien texte annonçait un renouvellement à 75 €
 * (250 € depuis le 1er mai 2026 selon service-public A18881), un taux de refus
 * « de moins de 2 % » et des délais par région sans source, des articles du
 * CESEDA mal attribués, un récépissé « de 6 mois » et le niveau B1 pour la
 * naturalisation (B2 depuis le 1er janvier 2026). Tout est repris sur les
 * fiches service-public F2208, F11201, F36206, F39530 et A18881, lues le
 * 22/10/2026.
 */
const article: Article = {
  slug: "renouvellement-carte-resident-10-ans-2026-conditions-documents-anef",
  titre: "Renouvellement de la carte de résident : quand déposer, combien payer et ce qui peut bloquer",
  titreSeo: "Renouvellement carte de résident : délai et prix",
  resume: "Renouveler une carte de résident de 10 ans : dépôt sur l'ANEF 4 à 2 mois avant la fin, 250 € de taxes, pas d'examen civique, motifs de refus.",
  chapo: "Déposez votre demande sur l'ANEF (le site des démarches des étrangers) ==entre 4 mois et 2 mois avant la fin de votre carte==. Le renouvellement coûte ==250 €== au tarif normal depuis le 1er mai 2026, et l'examen civique n'est pas demandé. La préfecture (le service de l'État qui gère les titres de séjour) peut refuser dans deux cas précis.",
  publieLe: "2026-05-10",
  modifieLe: "2026-10-30",
  minutes: 7,
  theme: "renouvellement carte de résident",
  motsCles: [
    "renouvellement carte de résident",
    "renouvellement carte de résident 10 ans",
    "renouvellement carte de résident prix",
    "renouvellement carte de résident ANEF",
    "carte de résident expirée",
    "carte de résident permanent",
    "attestation de prolongation d'instruction",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/renouvellement-carte-resident.webp",
    alt: "Façade en pierre de la préfecture du Rhône à Lyon, avec son horloge et son escalier",
    largeur: 1024,
    hauteur: 768,
    credit: "marsupilami92, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/41538865@N06/9511898610",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Correction du 22 octobre 2026",
      texte: "Une version précédente de cette page annonçait un renouvellement à 75 €, des délais et des taux de refus sans source officielle. Le montant en vigueur est de 250 € depuis le 1er mai 2026. La page a été réécrite sur les fiches de service-public.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Renouveler la carte de résident : de quoi s'agit-il ?",
    },
    {
      type: "p",
      texte: "La carte de résident est un titre de séjour de 10 ans. Un titre de séjour, c'est la carte qui vous autorise à vivre en France. À la fin des 10 ans, vous demandez une nouvelle carte : c'est le renouvellement ([service-public, F2208](https://www.service-public.gouv.fr/particuliers/vosdroits/F2208)).",
    },
    {
      type: "p",
      texte: "Le renouvellement est plus simple que la première demande. Vous n'avez pas à repasser l'examen civique ni à prouver à nouveau votre niveau de français. Service-public le dit clairement : « Seule la 1re demande de carte de résident est concernée par l'examen civique » ([F39530](https://www.service-public.gouv.fr/particuliers/vosdroits/F39530)).",
    },
    {
      type: "p",
      texte: "Si vous préparez une première carte de résident, lisez plutôt notre guide sur les [conditions de la carte de résident de 10 ans](/articles/carte-resident-10-ans-france-2026-conditions-obtention-refus-prefecture).",
    },
    {
      type: "h2",
      texte: "Quand faut-il déposer la demande ?",
    },
    {
      type: "p",
      texte: "Service-public indique une fenêtre précise : ==au plus tôt 4 mois et au plus tard 2 mois== avant la fin de validité de votre carte ([F11201](https://www.service-public.gouv.fr/particuliers/vosdroits/F11201)). Notez la date de fin de votre carte, puis mettez un rappel 4 mois avant.",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Un dépôt en retard coûte plus cher. Sauf cas de force majeure, service-public indique un droit de visa de régularisation de **180 €** en plus du prix de la carte (F2208, F11201).",
        "Un dossier complet déposé dans les délais vous donne droit à une attestation de prolongation d'instruction. Elle prouve que votre séjour reste régulier ([F36206](https://www.service-public.gouv.fr/particuliers/vosdroits/F36206)).",
      ],
    },
    {
      type: "h2",
      texte: "Comment faire la demande sur l'ANEF ?",
    },
    {
      type: "p",
      texte: "Dans la plupart des cas, la demande se fait en ligne sur l'ANEF (F2208). L'ANEF, c'est le site du ministère de l'Intérieur pour les démarches des étrangers. Deux cas passent encore par la préfecture, sur rendez-vous : les personnes apatrides et les personnes qui touchent une rente d'accident du travail.",
    },
    {
      type: "p",
      texte: "La liste exacte des pièces s'affiche sur l'ANEF selon votre situation. Préparez au moins votre passeport, votre carte actuelle et un justificatif de domicile de moins de 6 mois. Ajoutez une e-photo : une photo d'identité avec un code numérique (F2208). Notre [guide de l'ANEF](/articles/guide-anef-complet-2026-creer-compte-deposer-demande) explique le dépôt pas à pas.",
    },
    {
      type: "h3",
      texte: "Les deux attestations à ne pas confondre",
    },
    {
      type: "tableau",
      entetes: ["Document", "Quand vous le recevez", "Ce qu'il prouve"],
      lignes: [
        ["Attestation de dépôt", "Tout de suite après le dépôt en ligne", "La date de votre demande. Ce n'est pas un document de séjour."],
        ["Attestation de prolongation d'instruction", "Si le dossier complet est déposé dans le délai", "Un séjour régulier. Valable 3 mois au plus, renouvelée tant qu'il n'y a pas de décision."],
      ],
      legende: "Source : service-public, fiche F36206, lue le 22/10/2026.",
    },
    {
      type: "p",
      texte: "L'attestation de prolongation vous permet de travailler si la carte que vous renouvelez vous le permettait (F36206). Pour un voyage hors de France pendant l'attente, lisez d'abord notre article sur le [récépissé et vos droits pendant l'attente](/articles/recepisse-titre-de-sejour-droits-duree-voyage).",
    },
    {
      type: "p",
      texte: "Quand la nouvelle carte est prête, la préfecture ou la sous-préfecture de votre domicile vous prévient. Vous allez la chercher **en personne** (F2208).",
    },
    {
      type: "h2",
      texte: "Combien coûte le renouvellement ?",
    },
    {
      type: "p",
      texte: "Depuis le 1er mai 2026, le renouvellement d'un titre de séjour coûte ==250 €== au tarif normal, et ==100 €== au tarif minoré ([service-public, A18881](https://www.service-public.gouv.fr/particuliers/actualites/A18881)). Vous payez en timbres fiscaux, une somme due à l'État. Avant mai 2026, c'était 225 €.",
    },
    {
      type: "tableau",
      entetes: ["Situation", "Prix du renouvellement"],
      lignes: [
        ["Cas général", "250 €"],
        ["Tarif minoré", "100 €"],
        ["Réfugié, apatride, bénéficiaire de la protection subsidiaire", "Gratuit"],
        ["Membre de la famille d'un réfugié ou d'un apatride", "250 €"],
        ["Victime de violences conjugales ou de traite", "Gratuit"],
      ],
      legende: "Sources : service-public A18881 et F2208, lues le 22/10/2026.",
    },
    {
      type: "p",
      texte: "Le timbre fiscal (le moyen de payer ces taxes à l'État) a sa page complète. Notre page sur le [timbre fiscal du titre de séjour](/articles/hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances) donne tout le barème.",
    },
    {
      type: "h2",
      texte: "Pour quelles raisons la préfecture peut-elle refuser ?",
    },
    {
      type: "p",
      texte: "Service-public cite deux motifs de refus au renouvellement (F2208) :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Une menace grave pour l'ordre public**, c'est-à-dire pour la sécurité et la paix publiques.",
        "**L'absence de résidence habituelle en France**. Il faut avoir en France le centre de votre vie privée et familiale. Il faut **aussi** y vivre au moins **6 mois par année civile** (de janvier à décembre).",
      ],
    },
    {
      type: "p",
      texte: "Attention aussi aux longs séjours à l'étranger. Service-public précise que la carte n'est plus valable si vous quittez la France pendant ==plus de 3 ans de suite== (F2208). Notre article sur l'[absence de France et la perte du titre de séjour](/articles/absence-france-voyage-perte-titre-sejour-duree-maximale-2026) détaille ces durées.",
    },
    {
      type: "h3",
      texte: "Que faire en cas de refus ?",
    },
    {
      type: "p",
      texte: "Un refus écrit est en général accompagné d'une OQTF, une obligation de quitter le territoire français. Selon le type d'OQTF, vous avez 48 heures, 15 jours ou 30 jours pour saisir le tribunal administratif (F2208).",
    },
    {
      type: "p",
      texte: "Sans réponse ==90 jours== après le dépôt d'une demande complète, c'est un refus implicite. Ce délai était de 4 mois jusqu'au 29 octobre 2026 ; le [décret n° 2026-1001](/articles/delai-reponse-prefecture-titre-de-sejour-90-jours) l'a raccourci. Vous avez alors 2 mois pour un recours gracieux auprès du préfet, un recours hiérarchique auprès du ministre de l'Intérieur, ou un recours au tribunal (F2208). Notre guide des [recours contre un refus de titre et une OQTF](/articles/refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france) explique ces étapes. Pour votre cas précis, faites-vous aider par un avocat ou une association comme La Cimade.",
    },
    {
      type: "h2",
      texte: "Pouvez-vous demander une carte de résident permanent à la place ?",
    },
    {
      type: "p",
      texte: "Oui. La carte de résident permanent est délivrée en renouvellement d'une carte de résident de 10 ans. Elle vous est proposée systématiquement si vous avez déjà eu 2 cartes de résident de suite ([F11201](https://www.service-public.gouv.fr/particuliers/vosdroits/F11201)).",
    },
    {
      type: "p",
      texte: "Mais ses conditions sont celles d'une première demande. Il faut un niveau de français au moins B1 et la réussite à l'examen civique, sauf après 65 ans. Elle coûte 350 € (F11201). Si vous êtes de nationalité algérienne, vous n'êtes pas concerné : vous avez un certificat de résidence, avec ses propres règles. Notre article sur les [Algériens et l'examen civique](/articles/algeriens-examen-civique-2026-accord-1968-dispense-sejour-mais-pas-naturalisation) en parle.",
    },
    {
      type: "p",
      texte: "Vous visez la carte permanente ou la naturalisation ? Vérifiez en une minute si l'examen vous concerne avec le [simulateur d'éligibilité](/eligibilite-examen-civique).",
    },
    {
      type: "cta",
      texte: "Pour la carte de résident permanent, l'examen civique est demandé : testez-vous sur 40 questions types, avec la correction.",
      bouton: "Faire un examen blanc gratuit",
    },
    {
      type: "encadre",
      titre: "Le geste utile",
      texte: "Regardez aujourd'hui la date de fin de votre carte. Mettez un rappel 4 mois avant. Ce jour-là, déposez sur l'ANEF un dossier complet : c'est ce qui vous donne l'attestation de prolongation, et vous évite les 180 € de retard.",
      ton: "vert",
    },
  ],
  faq: [
    {
      question: "Quel est le prix du renouvellement d'une carte de résident ?",
      reponse: "Depuis le 1er mai 2026, le renouvellement coûte 250 € au tarif normal et 100 € au tarif minoré, selon service-public. Il est gratuit pour les réfugiés, les apatrides et les bénéficiaires de la protection subsidiaire. Si vous déposez en retard, 180 € de droit de visa de régularisation peuvent s'ajouter.",
    },
    {
      question: "Quand faire la demande de renouvellement de la carte de résident ?",
      reponse: "Service-public indique de déposer la demande sur l'ANEF au plus tôt 4 mois et au plus tard 2 mois avant la fin de votre carte. Un dossier complet déposé dans ce délai vous donne une attestation de prolongation d'instruction, qui prouve que votre séjour reste régulier pendant l'attente.",
    },
    {
      question: "Faut-il passer l'examen civique pour renouveler sa carte de résident ?",
      reponse: "Non. Selon service-public, seule la première demande de carte de résident est concernée par l'examen civique. Les renouvellements ne le sont pas. L'examen est en revanche demandé pour une première carte de résident permanent, sauf si vous avez plus de 65 ans.",
    },
    {
      question: "Que se passe-t-il si ma carte de résident est expirée ?",
      reponse: "Déposez votre demande au plus vite sur l'ANEF. Hors force majeure, service-public indique un droit de visa de régularisation de 180 € en plus du prix de la carte. Une carte expirée ne prouve plus votre séjour régulier : pour votre situation précise, renseignez-vous auprès de la préfecture ou d'une association.",
    },
  ],
  sources: [
    {
      titre: "Légifrance : décret n° 2026-1001 du 26 octobre 2026 (délai de réponse de la préfecture ramené à 90 jours, JORF n° 0253 du 29 octobre 2026)",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000055023061",
      type: "officiel",
      luLe: "2026-10-30",
    },
    {
      titre: "Service-public : carte de résident de 10 ans (F2208, vérifiée le 01/07/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2208",
      type: "officiel",
      luLe: "2026-10-22",
    },
    {
      titre: "Service-public : carte de résident permanent (F11201, vérifiée le 01/05/2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F11201",
      type: "officiel",
      luLe: "2026-10-22",
    },
    {
      titre: "Service-public : attestations délivrées lors d'une demande de titre de séjour en ligne (F36206)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F36206",
      type: "officiel",
      luLe: "2026-10-22",
    },
    {
      titre: "Service-public : carte de séjour pluriannuelle et carte de résident, l'examen civique (F39530)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39530",
      type: "officiel",
      luLe: "2026-10-22",
    },
    {
      titre: "Service-public : titres de séjour, augmentation des taxes à compter du 1er mai 2026 (A18881)",
      url: "https://www.service-public.gouv.fr/particuliers/actualites/A18881",
      type: "officiel",
      luLe: "2026-10-22",
    },
  ],
};

export default article;
