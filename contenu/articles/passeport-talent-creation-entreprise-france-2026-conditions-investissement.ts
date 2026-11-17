import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026, puis réécrit par le robot éditorial le 17/11/2026
 * (`docs/seo/ROBOT.md`), sans changer d'adresse. Sur la liste « à revérifier »
 * depuis le 28/10/2026, et en hausse (48 vues sur 28 jours, 14 vues le 15/11).
 * Erreurs corrigées : « 2 000 entrepreneurs par an » (aucune source) ; une
 * « validation par la préfecture » du projet (c'est un avis du ministère
 * chargé de l'économie) ; un « investisseur » à 3 emplois (F16922 dit
 * « créer ou sauvegarder de l'emploi », sans nombre) ; timbre de 200 € (350 €
 * pour la carte, F16922 et A18881) ; naturalisation au niveau B1 et « test
 * civique (80 %) » ; business plan « en 7 sections obligatoires », relecture
 * « gratuite » par Bpifrance, capital social de 30 000 € et « 6 mois pour
 * démarrer » (rien de tout cela dans les sources officielles).
 * Sources lues le 17/11/2026 : service-public F16922 (onglet « Porteur de
 * projet », lu dans Chrome ; vérifiée le 01/06/2026, « en cours de mise à
 * jour »), A18881 (mise à jour le 12/05/2026), F2213 (vérifiée le
 * 16/07/2026) ; décret n° 2026-1001 (lu le 30/10/2026).
 * Non écrit : le prix du visa (france-visas illisible), le niveau de langue de
 * la naturalisation (renvoyé à l'article dédié).
 */
const article: Article = {
  slug: "passeport-talent-creation-entreprise-france-2026-conditions-investissement",
  titre: "Carte talent création d'entreprise : les 4 conditions, dont 30 000 € de financement, et l'avis à obtenir avant le visa",
  titreSeo: "Carte talent création d'entreprise : 30 000 €",
  resume: "Carte talent création d'entreprise : diplôme ou 5 ans d'expérience, 30 000 € de financement, ressources au Smic, avis du ministère, prix et démarches.",
  chapo: "Pour créer une entreprise en France avec une carte « talent », il faut remplir ==4 conditions==. Les deux plus concrètes : un diplôme de niveau master ou 5 ans d'expérience, et un financement d'au moins ==30 000 €==. Depuis l'étranger, vous devez d'abord obtenir l'avis du ministère chargé de l'économie sur votre projet. La carte coûte ==350 €==.",
  publieLe: "2026-04-28",
  modifieLe: "2026-11-17",
  minutes: 7,
  theme: "La carte de séjour talent, parcours création d'entreprise : conditions, avis du ministère, pièces, prix et suite du parcours",
  motsCles: [
    "passeport talent création entreprise",
    "carte talent création d'entreprise",
    "talent porteur de projet",
    "visa entrepreneur france",
    "créer entreprise étranger france",
    "investissement 30000 euros france",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/carte-talent-creation-entreprise.webp",
    alt: "Un bureau vide au soleil, avec un ordinateur portable ouvert et une chaise bleue",
    largeur: 1024,
    hauteur: 683,
    credit: "www.cofab.de, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/63260285@N07/5754067245",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Article corrigé le 17 novembre 2026",
      texte: "La version précédente contenait des erreurs. Elle citait « 2 000 entrepreneurs par an » sans source, et oubliait l'avis du ministère chargé de l'économie sur le projet. Elle donnait aussi un prix de 200 € au lieu de 350 €, et un niveau de français B1 pour la naturalisation. Le texte ci-dessous suit la fiche officielle de service-public.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Qu'est-ce que la carte talent création d'entreprise ?",
    },
    {
      type: "p",
      texte: "La carte de séjour « talent » est une carte pluriannuelle : elle vaut plusieurs années, jusqu'à 4 ans. On l'appelait avant le « passeport talent ». Son nom officiel, pour un entrepreneur, est « talent-porteur de projet ». Elle vous autorise à séjourner en France et à y exercer ==une activité commerciale en lien avec votre projet== ([F16922](https://www.service-public.gouv.fr/particuliers/vosdroits/F16922)).",
    },
    {
      type: "p",
      texte: "Cette carte a trois parcours, avec des conditions différentes. Cet article traite du premier, la création d'entreprise. Les deux autres sont résumés plus bas.",
    },
    {
      type: "h2",
      texte: "Quelles sont les 4 conditions ?",
    },
    {
      type: "p",
      texte: "Service-public cite ==4 conditions==, toutes obligatoires ([F16922](https://www.service-public.gouv.fr/particuliers/vosdroits/F16922)) :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Un diplôme au moins équivalent au master**, comme un diplôme d'ingénieur ou un DESS, **ou 5 années d'expérience professionnelle** de niveau comparable.",
        "**Un projet réel et sérieux** de création d'entreprise en France.",
        "**Des ressources au moins égales au Smic** pour vous et votre famille. Le Smic est le salaire minimum. Service-public l'indique à 22 404,20 € brut par an.",
        "**Un financement du projet d'au moins 30 000 €**, en ressources propres ou empruntées.",
      ],
    },
    {
      type: "p",
      texte: "« Ressources propres ou empruntées » veut dire que les 30 000 € peuvent venir de votre épargne ou d'un prêt. Vous devez seulement le prouver avec un justificatif.",
    },
    {
      type: "h2",
      texte: "Qu'est-ce que l'avis du ministère chargé de l'économie ?",
    },
    {
      type: "p",
      texte: "C'est l'étape que beaucoup oublient. Si vous habitez à l'étranger, ==vous devez d'abord demander un avis au ministère chargé de l'économie== sur le caractère réel et sérieux de votre projet. Ce n'est pas la préfecture, le service de l'État qui délivre les titres de séjour, qui juge votre projet ([F16922](https://www.service-public.gouv.fr/particuliers/vosdroits/F16922)).",
    },
    {
      type: "p",
      texte: "Cet avis fait partie des pièces de votre dossier. Préparez donc votre projet par écrit avant toute demande de visa : ce que fera l'entreprise, ses clients, son financement. Service-public ne fixe pas de modèle de business plan : méfiez-vous des listes de « sections obligatoires » qui circulent.",
    },
    {
      type: "h2",
      texte: "Quelles sont les étapes ?",
    },
    {
      type: "p",
      texte: "Deux mots reviennent souvent. Le VLS-TS est un visa de long séjour qui vaut titre de séjour pendant sa durée. L'ANEF est le site du ministère de l'Intérieur où se font les demandes de titre de séjour.",
    },
    {
      type: "tableau",
      entetes: ["Votre situation", "Ce qu'il faut faire"],
      lignes: [
        ["Vous habitez à l'étranger", "Avis du ministère chargé de l'économie, puis demande de visa au consulat de France de votre pays de résidence"],
        ["Séjour de moins de 12 mois", "Le consulat délivre un VLS-TS « talent », à valider en ligne dans les 3 mois après votre arrivée"],
        ["Séjour de 1 an ou plus", "Le consulat délivre un visa « talent » de 3 mois ; vous demandez ensuite la carte en ligne, sur l'ANEF"],
        ["Vous habitez déjà en France", "Demande en ligne sur l'ANEF, au plus tôt 4 mois et au plus tard 2 mois avant la fin de votre visa ou titre"],
      ],
      legende: "Source : service-public F16922 (onglet « Porteur de projet »), lue le 17/11/2026.",
    },
    {
      type: "p",
      texte: "Au dépôt en ligne, vous recevez une attestation de dépôt. Attention : service-public précise qu'elle ne prouve pas que votre séjour est régulier.",
    },
    {
      type: "h2",
      texte: "Quelles pièces fournir ?",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "votre visa ou titre de séjour, et votre passeport ;",
        "un justificatif de domicile de moins de 6 mois et le code de votre e-photo ;",
        "votre diplôme de niveau master, ou les preuves de 5 ans d'expérience ;",
        "pour une première carte « talent », un extrait de casier judiciaire de votre pays ;",
        "le justificatif d'un investissement d'au moins 30 000 € dans le projet ;",
        "les justificatifs de ressources au moins égales au Smic ;",
        "l'immatriculation de l'entreprise (statuts, extrait K ou numéro Siren), ou l'affiliation au régime social des indépendants ;",
        "l'avis du ministère chargé de l'économie ;",
        "l'engagement signé à respecter les principes de la République.",
      ],
    },
    {
      type: "p",
      texte: "Si votre activité est réglementée (artisanat, pharmacie, transports, agence immobilière…), ajoutez les preuves que vous avez le droit de l'exercer : diplôme, autorisation ou inscription ([F16922](https://www.service-public.gouv.fr/particuliers/vosdroits/F16922)).",
    },
    {
      type: "h2",
      texte: "Combien coûte la carte, et quel est le délai ?",
    },
    {
      type: "p",
      texte: "Vous payez seulement si la carte vous est attribuée : ==350 €==, soit 50 € de droit de timbre et 300 € de taxe ([F16922](https://www.service-public.gouv.fr/particuliers/vosdroits/F16922)). Ce montant est en vigueur depuis le 1er mai 2026 ([A18881](https://www.service-public.gouv.fr/particuliers/actualites/A18881)). Le timbre fiscal, c'est la taxe payée à l'État. Il s'achète en ligne ou dans un bureau de tabac équipé. Tous les montants sont dans notre article sur les [taxes des titres de séjour](/articles/hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances).",
    },
    {
      type: "p",
      texte: "Pour le délai de réponse, la fiche F16922 indique encore 4 mois, mais elle est « en cours de mise à jour ». Depuis le 30 octobre 2026, le décret n° 2026-1001 a ramené le délai de refus implicite à ==90 jours==. Un refus implicite, c'est un refus sans lettre, quand la préfecture ne répond pas. Notre article sur le [délai de 90 jours](/articles/delai-reponse-prefecture-titre-de-sejour-90-jours) explique ce changement et les recours.",
    },
    {
      type: "h2",
      texte: "Et votre famille ?",
    },
    {
      type: "p",
      texte: "Votre famille n'a pas à passer par le regroupement familial. Votre époux ou épouse et vos enfants mineurs reçoivent une carte de séjour pluriannuelle « talent-famille », selon une procédure simplifiée ([F16922](https://www.service-public.gouv.fr/particuliers/vosdroits/F16922)).",
    },
    {
      type: "h2",
      texte: "Les deux autres parcours « porteur de projet »",
    },
    {
      type: "tableau",
      entetes: ["Parcours", "Conditions principales"],
      lignes: [
        ["Projet économique innovant", "Un projet innovant reconnu par le ministère chargé de l'économie, et des ressources au moins égales au Smic"],
        ["Investissement économique direct", "Investir au moins 300 000 € en France, seul ou par une société dont vous détenez au moins 30 % du capital, et créer ou sauvegarder de l'emploi"],
      ],
      legende: "Source : service-public F16922, lue le 17/11/2026.",
    },
    {
      type: "p",
      texte: "Pour les autres cartes talent, comme celle du salarié qualifié, lisez notre guide des [conditions de la carte talent](/articles/passeport-talent-2026-conditions-metiers-demarches).",
    },
    {
      type: "h2",
      texte: "Et plus tard, la naturalisation ?",
    },
    {
      type: "p",
      texte: "La liste des pièces de la carte talent ne demande pas l'examen civique : seulement l'engagement signé à respecter les principes de la République. L'examen arrive plus tard, si vous demandez la nationalité française.",
    },
    {
      type: "p",
      texte: "La naturalisation par décret demande en principe ==5 ans de résidence== en France ([F2213](https://www.service-public.gouv.fr/particuliers/vosdroits/F2213)). Votre intégration est vérifiée par « la réussite à l'examen civique et un entretien en préfecture ». La demande coûte 255 €. Le niveau de français demandé est expliqué dans notre article sur les [niveaux A2, B1 et B2](/articles/niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation).",
    },
    {
      type: "cta",
      texte: "L'examen civique de la naturalisation se prépare à l'avance. Testez-vous sur 40 questions types : l'inscription à Test Civique France est gratuite.",
      bouton: "Tester mon niveau",
    },
    {
      type: "p",
      texte: "Ces règles sont générales. Pour un cas précis, demandez conseil à la préfecture, à un avocat ou à une association spécialisée. Et vérifiez en une minute si l'[examen civique vous concerne](/eligibilite-examen-civique).",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La carte talent création d'entreprise demande ==4 conditions== : master ou 5 ans d'expérience, projet réel et sérieux, ressources au Smic, et ==30 000 €== de financement. Depuis l'étranger, l'avis du ministère chargé de l'économie vient avant le visa. La carte coûte 350 €, et votre famille reçoit une carte « talent-famille ».",
      ton: "vert",
    },
  ],
  faq: [
    {
      question: "Peut-on demander un passeport talent création d'entreprise sans diplôme ?",
      reponse: "Oui, si vous justifiez de 5 années d'expérience professionnelle d'un niveau comparable à un master, selon service-public (F16922). Les autres conditions restent obligatoires : un projet réel et sérieux, et des ressources au moins égales au Smic. Il faut aussi un financement du projet d'au moins 30 000 €, en ressources propres ou empruntées.",
    },
    {
      question: "Les 30 000 € doivent-ils être un apport personnel ?",
      reponse: "Non. Service-public demande le justificatif d'un investissement d'au moins 30 000 € dans le projet d'entreprise, « en ressources propres ou empruntées ». L'argent peut donc venir de votre épargne ou d'un prêt. Gardez les preuves : relevés, offre de prêt, apports dans la société. Le ministère chargé de l'économie juge aussi le sérieux du projet.",
    },
    {
      question: "Combien coûte la carte talent création d'entreprise ?",
      reponse: "La carte coûte 350 € depuis le 1er mai 2026 : 50 € de droit de timbre et 300 € de taxe, payés en timbres fiscaux. Vous payez seulement quand la préfecture vous attribue la carte, au moment de la retirer. Le timbre s'achète en ligne ou dans un bureau de tabac équipé.",
    },
    {
      question: "Qui donne l'avis sur le projet de création d'entreprise ?",
      reponse: "C'est le ministère chargé de l'économie, pas la préfecture. Si vous habitez à l'étranger, vous devez demander cet avis avant votre demande de visa au consulat. L'avis porte sur le caractère réel et sérieux de votre projet, et il fait partie des pièces de votre dossier, selon service-public (F16922).",
    },
  ],
  sources: [
    {
      titre: "Service-public : Carte talent, carte de séjour pluriannuelle d'un étranger en France, onglet « Porteur de projet » (F16922, vérifiée le 1er juin 2026, en cours de mise à jour)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F16922",
      type: "officiel",
      luLe: "2026-11-17",
    },
    {
      titre: "Service-public : Titres de séjour, augmentation du montant des taxes à compter du 1er mai (A18881, mise à jour le 12 mai 2026)",
      url: "https://www.service-public.gouv.fr/particuliers/actualites/A18881",
      type: "officiel",
      luLe: "2026-11-17",
    },
    {
      titre: "Service-public : Naturalisation française par décret (F2213, vérifiée le 16 juillet 2026)",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2213",
      type: "officiel",
      luLe: "2026-11-17",
    },
    {
      titre: "Légifrance : décret n° 2026-1001 du 26 octobre 2026 relatif aux droits des ressortissants étrangers autorisés à travailler en France",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000055023061",
      type: "officiel",
      description: "Texte intégral et notice, lus dans l'édition open data du Journal officiel (DILA)",
      luLe: "2026-10-30",
    },
  ],
};

export default article;
