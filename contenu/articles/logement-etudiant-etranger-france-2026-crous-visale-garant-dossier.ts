import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026, sans changer d'adresse. Corrigé et réécrit par le robot
 * éditorial le 09/11/2026 (`docs/seo/ROBOT.md`) : le texte d'origine disait
 * que les étudiants étrangers en séjour régulier « peuvent avoir droit » à
 * l'APL sans dire que la règle a changé le 01/07/2026 (loi n° 2026-103, art.
 * 179 ; décret n° 2026-552). Sources lues le 09/11/2026 : service-public
 * F1563, F12006, F33453, F31269, Légifrance, CAF, Cnous. Retirés, faute de
 * source officielle lue : les dates de campagne du DSE, l'obligation
 * d'assurance et la règle du boursier sans garant, à rétablir une fois lues.
 */
const article: Article = {
  slug: "logement-etudiant-etranger-france-2026-crous-visale-garant-dossier",
  titre: "Étudiant étranger en France : se loger sans garant, Visale, Crous, dépôt de garantie, et la nouvelle règle de l'APL",
  titreSeo: "Logement étudiant étranger : Visale, Crous, APL",
  resume: "Se loger en France quand on vient étudier de l'étranger : Crous, garantie Visale, dépôt de garantie, APL depuis le 1er juillet 2026, arnaques à éviter.",
  chapo: "Pour louer sans garant en France, la ==garantie Visale== est gratuite pour les moins de 30 ans. Le Crous propose des logements aux étudiants internationaux. Mais attention : depuis le ==1er juillet 2026==, un étudiant non européen sans bourse sur critères sociaux n'a plus droit à l'APL, sauf exceptions. Prévoyez votre budget en conséquence.",
  publieLe: "2026-07-09",
  modifieLe: "2026-11-09",
  minutes: 7,
  theme: "logement étudiant étranger france",
  motsCles: [
    "logement étudiant étranger france",
    "garantie visale étudiant étranger",
    "logement crous étudiant international",
    "louer sans garant français",
    "caution logement étudiant france",
    "dossier location étudiant étranger",
    "dépôt de garantie location france",
    "apl étudiant étranger",
    "arnaque location étudiant étranger",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/logement-etudiant-etranger-cite-universitaire.webp",
    alt: "La Maison du Mexique à la Cité internationale universitaire de Paris, avec une grande fresque murale sculptée sous un ciel bleu",
    largeur: 1024,
    hauteur: 683,
    credit: "corno.fulgur75, via Flickr",
    licence: "CC BY 2.0",
    source: "https://www.flickr.com/photos/129231073@N06/17910515488",
  },
  blocs: [
    {
      type: "encadre",
      titre: "Article corrigé le 9 novembre 2026",
      texte: "La version précédente disait que les étudiants étrangers en séjour régulier pouvaient avoir droit à l'APL, sans signaler le changement du 1er juillet 2026. La règle est maintenant expliquée plus bas. Nous avons aussi retiré des dates et des règles que nous n'avons pas retrouvées sur une source officielle.",
      ton: "ambre",
    },
    {
      type: "h2",
      texte: "Quels logements chercher quand on vient étudier en France ?",
    },
    {
      type: "p",
      texte: "Vous avez quatre grandes pistes. Le loyer et les exigences du propriétaire changent beaucoup de l'une à l'autre.",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**La résidence du Crous.** Le Crous est le service public de la vie étudiante. Ses places sont limitées.",
        "**La résidence étudiante privée.** Elle propose des studios meublés, souvent plus chers.",
        "**La colocation.** Vous partagez un logement. Vérifiez si vous avez un bail à plusieurs ou un bail chacun.",
        "**La location auprès d'un particulier.** Le choix est plus large, mais on vous demandera souvent une personne garante.",
      ],
    },
    {
      type: "h2",
      texte: "Un étudiant international peut-il avoir un logement Crous ?",
    },
    {
      type: "p",
      texte: "Oui. Les Crous consacrent en moyenne 26,4 % de leurs logements aux étudiants internationaux, sous convention ou à titre individuel ([Cnous, rapport d'activité 2024](https://www.lescrous.fr/rapport/rapport-dactivite-2024/les-etudiants-internationaux-et-la-cooperation-internationale/)). En octobre 2025, le ministère de l'Enseignement supérieur a indiqué que les étudiants non européens sans bourse garderaient l'accès à ces logements ([communiqué du 29 octobre 2025](https://www.enseignementsup-recherche.gouv.fr/fr/aides-au-logement-pour-les-etudiants-internationaux-le-gouvernement-adapte-les-criteres-d-100242)).",
    },
    {
      type: "p",
      texte: "La démarche passe par le dossier social étudiant et par le site [messervices.etudiant.gouv.fr](https://www.messervices.etudiant.gouv.fr/). Le calendrier change chaque année : vérifiez-le sur ce site et sur celui du Crous de votre ville. Le Cnous indique que les offres de son « tour logement » sont proposées dès le mois de mai, avec quatre vœux à formuler.",
    },
    {
      type: "h2",
      texte: "Comment louer sans garant en France ?",
    },
    {
      type: "p",
      texte: "Une personne garante s'engage à payer le loyer si le locataire ne le fait pas. Beaucoup de propriétaires en demandent une. La solution officielle s'appelle la garantie Visale. C'est une caution gratuite d'Action Logement ([service-public, F33453](https://www.service-public.gouv.fr/particuliers/vosdroits/F33453), vérifiée le 23 janvier 2026).",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**Qui peut l'avoir ?** Les locataires de 17 ans et 10 mois à moins de 30 ans, dont les étudiants, sous certaines conditions.",
        "**Quels logements ?** Le secteur privé, le logement social, les résidences universitaires et certains foyers.",
        "**Quand la demander ?** ==Avant la signature du bail.== Le propriétaire doit ensuite accepter le dispositif.",
        "**Combien de loyer ?** Pour un étudiant sans condition de ressources, jusqu'à ==1 000 €== charges comprises en Île-de-France (F33453).",
      ],
    },
    {
      type: "p",
      texte: "Hors Île-de-France, la fiche indique deux plafonds pour un étudiant sans justificatif de ressources, ==840 € ou 680 €== selon la commune. Vérifiez le vôtre avec le simulateur de [visale.fr](https://www.visale.fr/), qui dit aussi si votre situation d'étudiant international est acceptée.",
    },
    {
      type: "h2",
      texte: "Quel dossier préparer pour un propriétaire ?",
    },
    {
      type: "p",
      texte: "Préparez un dossier en un seul fichier PDF, prêt à envoyer. Voici ce qui est le plus souvent demandé :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "votre passeport, et votre visa ou votre titre de séjour (la carte qui autorise une personne étrangère à vivre en France) si vous l'avez déjà ;",
        "votre attestation d'inscription ou d'admission ;",
        "votre visa Visale, ou les papiers de votre garant ;",
        "vos justificatifs de ressources : bourse, relevés bancaires, revenus des parents, traduits si besoin ;",
        "un RIB français dès que vous en avez un.",
      ],
    },
    {
      type: "p",
      texte: "Notre article sur [les refus illégaux de location](/articles/louer-appartement-etranger-france-discrimination-refus-illegaux-2026) explique quoi faire si l'on vous refuse un logement à cause de votre origine.",
    },
    {
      type: "h2",
      texte: "Combien faut-il payer en entrant dans le logement ?",
    },
    {
      type: "p",
      texte: "Le dépôt de garantie est la somme que le propriétaire garde pendant la location. Il vous la rend à la fin, sous conditions. Son montant maximum dépend du type de location ([service-public, F31269](https://www.service-public.gouv.fr/particuliers/vosdroits/F31269), vérifiée le 9 juin 2026).",
    },
    {
      type: "tableau",
      entetes: ["Type de location", "Dépôt maximum (hors charges)"],
      lignes: [
        ["Logement vide, loyer payé chaque mois ou tous les 2 mois", "1 mois de loyer"],
        ["Logement meublé, loyer payé chaque mois ou tous les 2 mois", "2 mois de loyer"],
        ["Loyer payé d'avance chaque trimestre", "Interdit"],
        ["Bail mobilité (bail court)", "Interdit"],
      ],
      legende: "Source : service-public F31269, lue le 9 novembre 2026.",
    },
    {
      type: "p",
      texte: "Le propriétaire doit rendre le dépôt dans un délai maximum de ==1 mois== si l'état des lieux de sortie est conforme à celui d'entrée. Sinon, le délai maximum est de ==2 mois==. Le délai court à partir du jour où vous rendez les clés (F31269). Prenez des photos datées à l'entrée.",
    },
    {
      type: "h2",
      texte: "Un étudiant étranger a-t-il encore droit à l'APL ?",
    },
    {
      type: "p",
      texte: "Oui, mais plus dans tous les cas. L'APL, ou aide personnalisée au logement, aide à payer le loyer. C'est la CAF, l'organisme public des aides au logement, qui la verse. Depuis le ==1er juillet 2026==, la règle change pour un étudiant venu d'un pays hors Union européenne, Espace économique européen et Suisse. Il doit être dans l'un de ces cas ([service-public, F1563](https://www.service-public.gouv.fr/particuliers/vosdroits/F1563)) :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "percevoir une bourse sur critères sociaux (Crous, ou bourse régionale sanitaire et sociale alignée sur ces critères) ;",
        "exercer une activité professionnelle ;",
        "être en contrat d'apprentissage ou de professionnalisation.",
      ],
    },
    {
      type: "p",
      texte: "Les réfugiés, les apatrides et les conjoints d'étudiants non européens restent éligibles ([service-public, A18981](https://www.service-public.gouv.fr/particuliers/actualites/A18981)). Tout est détaillé dans notre article sur [l'APL des étudiants étrangers](/articles/apl-etudiant-etranger), dont les bourses qui ne comptent pas.",
    },
    {
      type: "p",
      texte: "Si vous y avez droit, faites la demande sur caf.fr dès l'entrée dans le logement. Le premier paiement arrive en général 2 mois après la demande (F1563). Comptez donc sans cette aide pour les premiers mois.",
    },
    {
      type: "h2",
      texte: "Comment éviter les arnaques à la location ?",
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "**Ne versez jamais d'argent** avant d'avoir visité le logement, au moins en vidéo en direct, et signé un vrai bail.",
        "**Méfiez-vous** d'un propriétaire injoignable, d'un loyer très bas pour le quartier ou d'une demande de virement urgent.",
        "**Protégez vos documents** : n'envoyez pas de photo de carte bancaire, et limitez le partage de votre passeport.",
      ],
    },
    {
      type: "p",
      texte: "Une offre vous semble douteuse ? Notre article sur [les arnaques qui visent les étrangers](/articles/arnaques-etrangers-france-2026-faux-avocats-prefecture-anef) donne d'autres réflexes. Pour le reste de l'installation, voyez notre liste des [papiers à obtenir en arrivant](/articles/papiers-documents-obtenir-arrivee-france-2026-ou-comment-demander).",
    },
    {
      type: "encadre",
      titre: "Le geste à faire avant de partir",
      texte: "Demandez votre visa Visale, faites une simulation d'APL sur caf.fr, et calculez deux à trois mois de loyer d'avance. Pour un cas personnel, adressez-vous au service social de votre établissement, au Crous ou à La Cimade. Vous comptez rester en France après vos études ? [Vérifiez si l'examen civique vous concernera](/eligibilite-examen-civique).",
      ton: "vert",
    },
  ],
  faq: [
    {
      question: "Peut-on louer un logement en France sans garant français ?",
      reponse: "Oui. La garantie Visale est une caution gratuite d'Action Logement pour les locataires de 17 ans et 10 mois à moins de 30 ans, dont les étudiants, sous conditions. Elle se demande avant la signature du bail, et le propriétaire doit accepter le dispositif. Vérifiez votre situation d'étudiant international sur le simulateur officiel de visale.fr.",
    },
    {
      question: "La garantie Visale est-elle accessible aux étudiants étrangers ?",
      reponse: "La fiche de service-public vise les locataires de moins de 30 ans, dont les étudiants, sans citer de condition de nationalité dans les parties que nous avons lues. La réponse dépend de votre situation : testez votre éligibilité sur visale.fr avant de signer. La demande doit être faite avant la signature du bail et elle est gratuite.",
    },
    {
      question: "Quel budget prévoir pour le dépôt de garantie et le premier loyer ?",
      reponse: "Le dépôt de garantie est limité à un mois de loyer hors charges pour un logement vide, et à deux mois pour un meublé. Il est interdit avec un bail mobilité. Ajoutez le premier loyer : comptez souvent deux à trois mois de loyer à l'entrée. Le premier paiement d'une aide au logement arrive en général deux mois après la demande.",
    },
    {
      question: "Un étudiant étranger peut-il avoir l'APL ?",
      reponse: "Depuis le 1er juillet 2026, un étudiant non européen venu pour ses études doit remplir une condition. Il doit avoir une bourse sur critères sociaux, travailler, ou être en contrat d'apprentissage ou de professionnalisation. Les réfugiés, apatrides et conjoints d'étudiants non européens restent éligibles, selon service-public.",
    },
  ],
  sources: [
    {
      titre: "Service-public : aide au logement d'un étudiant (F1563), vérifiée le 01/07/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1563",
      type: "officiel",
      luLe: "2026-11-09",
    },
    {
      titre: "Service-public : suppression des APL pour les étudiants extra-européens non boursiers, actualité A18981 du 01/07/2026",
      url: "https://www.service-public.gouv.fr/particuliers/actualites/A18981",
      type: "officiel",
      luLe: "2026-11-09",
    },
    {
      titre: "Légifrance : décret n° 2026-552 du 27 juin 2026 (aides au logement des étudiants extra-communautaires)",
      url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054323364",
      type: "officiel",
      luLe: "2026-11-09",
    },
    {
      titre: "Service-public : garantie Visale (F33453), vérifiée le 23/01/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F33453",
      type: "officiel",
      luLe: "2026-11-09",
    },
    {
      titre: "Service-public : dépôt de garantie dans un bail d'habitation (F31269), vérifiée le 09/06/2026",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F31269",
      type: "officiel",
      luLe: "2026-11-09",
    },
    {
      titre: "Cnous : rapport d'activité 2024, étudiants internationaux et coopération internationale",
      url: "https://www.lescrous.fr/rapport/rapport-dactivite-2024/les-etudiants-internationaux-et-la-cooperation-internationale/",
      type: "officiel",
      luLe: "2026-11-09",
    },
    {
      titre: "Cnous : rapport d'activité 2024, le logement étudiant (tour logement)",
      url: "https://www.lescrous.fr/nos-services/le-logement/",
      type: "officiel",
      luLe: "2026-11-09",
    },
    {
      titre: "Ministère de l'Enseignement supérieur : aides au logement pour les étudiants internationaux, communiqué du 29/10/2025",
      url: "https://www.enseignementsup-recherche.gouv.fr/fr/aides-au-logement-pour-les-etudiants-internationaux-le-gouvernement-adapte-les-criteres-d-100242",
      type: "officiel",
      luLe: "2026-11-09",
    },
  ],
};

export default article;
