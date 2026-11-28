import type { Article } from "@/contenu/articles";

/**
 * Écrit par le robot éditorial le 28/11/2026 (`docs/seo/ROBOT.md`).
 * Requête visée : « france services » (10 k à 100 k recherches par mois,
 * stable ; Planificateur de mots clés, France). Famille vie en France
 * (démarches du quotidien) ; angle : ce que les conseillers font gratuitement
 * pour une personne étrangère, et ce qu'ils ne font pas (le titre de séjour).
 * Sources lues le 28/11/2026 : france-services.gouv.fr (accueil, « Démarches
 * et services », « Questions fréquentes », « Un service public de proximité »,
 * « Le réseau ») ; service-public F2209 (vérifiée le 06/11/2026, « Qui peut
 * m'aider ? » : Allô Service Public) et F39426 (vérifiée le 16/07/2026,
 * Centre de contact citoyens Nationalité française).
 * Non écrit faute de source lue : une aide France services pour l'ANEF (le
 * ministère de l'Intérieur n'est pas parmi les 12 partenaires), les critères
 * du label (cahier des charges non lu), des horaires, un nombre de maisons
 * outre-mer.
 */
const article: Article = {
  slug: "france-services",
  titre: "France Services : l'aide gratuite pour vos démarches, et ce qu'elle ne fait pas pour votre titre de séjour",
  titreSeo: "France Services : l'aide gratuite à vos démarches",
  resume: "CAF, impôts, ameli, permis, aide juridictionnelle : ce que France Services fait gratuitement pour vous, et vers qui aller pour un titre de séjour.",
  chapo: "France Services est un réseau de plus de ==2 865 lieux d'accueil==. Des conseillers vous y aident, ==gratuitement et sans rendez-vous==, pour la CAF, les impôts, l'assurance maladie, le permis de conduire ou l'emploi. Pour une personne étrangère, c'est une aide précieuse au quotidien. Mais votre titre de séjour ne fait pas partie de ses missions : voici quoi y faire, et vers qui aller pour le reste.",
  publieLe: "2026-11-28",
  modifieLe: "2026-11-28",
  minutes: 7,
  theme: "France Services : les démarches accompagnées gratuitement, les 12 organismes partenaires, comment trouver un lieu, et les limites pour les démarches de titre de séjour",
  motsCles: [
    "france services",
    "maison france services",
    "france services démarches",
    "france services étranger",
    "aide démarche en ligne gratuite",
    "france services titre de séjour",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "/images/articles/france-services.webp",
    alt: "Un camion bleu France Services garé dans une rue, avec l'inscription « Pour toutes vos démarches »",
    largeur: 1200,
    hauteur: 670,
    credit: "Jérémy-Günther-Heinz Jähnick, via Wikimedia Commons",
    licence: "CC BY-SA 3.0",
    source: "https://commons.wikimedia.org/wiki/File:Somain_-_Camion_France_Services,_stationn%C3%A9_rue_Achille-Andris,_devant_le_stade_Georges-Facon_(01).JPG",
  },
  blocs: [
    {
      type: "h2",
      texte: "France Services, qu'est-ce que c'est ?",
    },
    {
      type: "p",
      texte: "France Services est un ==label de l'État==. Un label, c'est une marque officielle donnée à un lieu qui respecte des règles fixées par l'État. Dans une maison France Services, des conseillers formés vous accueillent. Ils répondent à vos questions sur vos papiers du quotidien et vous aident à faire vos démarches en ligne.",
    },
    {
      type: "p",
      texte: "Selon le [site officiel du réseau](https://www.france-services.gouv.fr/notre-mission/un-service-public-de-proximite), il y avait ==2 865 lieux en décembre 2025==. Le site indique qu'un lieu se trouve à 20 minutes au plus en voiture, en ville comme à la campagne. La plupart sont tenus par des communes ou des intercommunalités (67 %). D'autres sont dans un bureau de La Poste (15 %), une association (13 %), une caisse de la MSA (2 %) ou une préfecture (1 %).",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "**C'est gratuit** : « l'accompagnement réalisé par les conseillers France services est toujours gratuit » ([questions fréquentes](https://www.france-services.gouv.fr/notre-mission/questions-frequentes)) ;",
        "**sans rendez-vous** : la page d'accueil du réseau l'indique pour tous les conseillers ;",
        "**où vous voulez** : vous pouvez aller dans n'importe quelle maison France Services, même hors de votre commune ;",
        "**avec du matériel** : un ordinateur, une imprimante, un scanner, et l'aide pour créer une adresse e-mail.",
      ],
    },
    {
      type: "h2",
      texte: "Les 12 organismes que vous trouvez dans un même lieu",
    },
    {
      type: "p",
      texte: "La page [« Démarches et services »](https://www.france-services.gouv.fr/demarches-et-services) liste 12 partenaires nationaux. Pour chacun, les conseillers vous aident sur les démarches les plus courantes. Voici celles qui servent souvent aux personnes étrangères installées en France.",
    },
    {
      type: "tableau",
      entetes: ["Organisme", "Exemples de démarches où l'on vous aide"],
      lignes: [
        ["Allocations familiales (CAF)", "Demande de RSA, de prime d'activité, d'aide au logement (APL), naissance d'un enfant, changement de situation"],
        ["Assurance maladie", "Carte Vitale, attestation de droits, complémentaire santé solidaire (C2S), première demande d'aide médicale de l'État (AME)"],
        ["Finances publiques (impôts)", "Déclaration de revenus, avis d'impôt, prélèvement à la source, achat d'un timbre fiscal (le timbre qui sert à payer certaines taxes de l'État)"],
        ["France Titres (ANTS)", "Carte grise, permis de conduire, échange d'un permis étranger contre un permis français, achat d'un timbre fiscal"],
        ["France Travail", "Inscription comme demandeur d'emploi, actualisation mensuelle, CV et lettre de motivation"],
        ["Point-justice", "Extrait de casier judiciaire, demande d'aide juridictionnelle en ligne, contacts d'avocats et de lieux d'accès au droit"],
        ["Assurance retraite et MSA", "Demande de retraite, relevé de carrière, pension de réversion"],
        ["Les autres", "La Poste (changement d'adresse), Urssaf (auto-entrepreneur, emploi à domicile), chèque énergie, France Rénov'"],
      ],
    },
    {
      type: "p",
      texte: "L'aide juridictionnelle, c'est la prise en charge par l'État de tout ou partie des frais d'avocat, selon vos revenus. L'AME est la couverture santé des personnes étrangères en situation irrégulière qui vivent en France depuis plus de 3 mois : nous l'expliquons dans notre guide sur [l'aide médicale de l'État](/articles/aide-medicale-etat-ame). Pour le permis, voyez [l'échange d'un permis étranger](/articles/echange-permis-conduire-etranger-france-2026-pays-accords-liste-complete).",
    },
    {
      type: "h2",
      texte: "Et pour votre titre de séjour ?",
    },
    {
      type: "p",
      texte: "C'est le point que beaucoup ignorent. Le ministère de l'Intérieur, qui gère les titres de séjour, ==ne fait pas partie des 12 partenaires== de France Services. Un titre de séjour, c'est la carte qui vous permet de vivre en France de façon régulière. Sa demande se fait le plus souvent sur l'ANEF, le site de l'État pour les démarches des étrangers (administration-etrangers-en-france.interieur.gouv.fr).",
    },
    {
      type: "p",
      texte: "Sur les pages officielles du réseau, aucune démarche de titre de séjour n'est citée. Un conseiller ne peut donc pas vous dire où en est votre dossier ni décider à la place de la préfecture. La préfecture, c'est le service de l'État dans votre département qui étudie et délivre les titres de séjour.",
    },
    {
      type: "p",
      texte: "Ce que France Services peut quand même vous apporter, c'est le matériel et l'aide numérique de base : scanner vos pièces, les imprimer, créer une adresse e-mail. Ce sont des étapes utiles avant de [créer votre compte sur l'ANEF](/articles/compte-anef-creer-2026-guide-pas-a-pas).",
    },
    {
      type: "encadre",
      titre: "À qui poser une question sur un titre de séjour ou la nationalité",
      texte: "**Allô Service Public** répond aux questions générales sur les titres de séjour. C'est un service gratuit, et ses informateurs appartiennent au ministère de l'Intérieur, selon [service-public (F2209)](https://www.service-public.gouv.fr/particuliers/vosdroits/F2209). Il n'a pas accès à votre dossier.\n**Pour une demande de naturalisation en ligne**, appelez le Centre de contact citoyens au ==0806 001 620== (numéro non surtaxé). Il répond du lundi au vendredi, de 9 h à 17 h ([F39426](https://www.service-public.gouv.fr/particuliers/vosdroits/F39426)).\n**Pour votre dossier lui-même**, c'est votre préfecture.",
      ton: "bleu",
    },
    {
      type: "h2",
      texte: "Comment trouver la maison France Services la plus proche ?",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Allez sur [france-services.gouv.fr](https://www.france-services.gouv.fr/) ;",
        "tapez votre adresse, votre code postal ou votre commune dans la barre de recherche ;",
        "la carte vous montre les lieux proches de chez vous ;",
        "vérifiez les horaires du lieu choisi avant de partir.",
      ],
    },
    {
      type: "p",
      texte: "Il existe aussi des lieux qui viennent à vous. Fin 2025, le réseau comptait ==143 bus France Services==, qui passent dans les villages et dans certains quartiers. Il comptait aussi 144 maisons dont les conseillers tiennent des permanences de mairie en mairie. Le réseau est présent en outre-mer : son site a des pages pour la Guadeloupe, la Guyane, la Martinique, Mayotte et La Réunion.",
    },
    {
      type: "h2",
      texte: "Ce qu'il faut apporter pour gagner du temps",
    },
    {
      type: "p",
      texte: "Le site du réseau ne publie pas de liste de pièces. Mais une démarche en ligne demande presque toujours les mêmes choses. Avant d'y aller, réunissez :",
    },
    {
      type: "liste",
      style: "coches",
      items: [
        "une pièce d'identité, et votre titre de séjour ou votre récépissé (le papier qui prouve que votre demande est en cours) ;",
        "vos identifiants : numéro de sécurité sociale, numéro fiscal, numéro allocataire de la CAF, mots de passe si vous les avez ;",
        "votre téléphone portable, car beaucoup de sites envoient un code par SMS ;",
        "les courriers que vous avez reçus de l'organisme concerné ;",
        "les justificatifs de la démarche : avis d'impôt, bulletins de salaire, justificatif de domicile.",
      ],
    },
    {
      type: "liste",
      style: "alertes",
      items: [
        "Un conseiller France Services ne vous demande jamais d'argent. Si quelqu'un vous fait payer une aide « officielle » pour vos papiers, méfiez-vous : voyez [les arnaques qui visent les étrangers](/articles/arnaques-etrangers-france-2026-faux-avocats-prefecture-anef).",
        "Ne donnez pas vos mots de passe à une autre personne que le conseiller, et seulement s'il en a besoin pour vous aider devant vous.",
        "Les conseillers ne donnent pas de conseil juridique : pour un litige ou un refus, ils vous orientent vers un point-justice ou un avocat.",
      ],
    },
    {
      type: "h2",
      texte: "Les autres aides gratuites à connaître",
    },
    {
      type: "p",
      texte: "France Services ne remplace pas les associations spécialisées. Pour un refus de titre de séjour ou un recours, une association comme La Cimade ou une permanence d'accès au droit peut vous aider. Si une administration ne respecte pas vos droits, vous pouvez saisir gratuitement le [Défenseur des droits](/articles/defenseur-des-droits), une autorité indépendante qui défend les droits des usagers face aux administrations. Notre page de [ressources utiles pour les étrangers en France](/articles/ressources-utiles-etrangers-france-2026-outils-associations-aides) rassemble les autres contacts.",
    },
    {
      type: "p",
      texte: "Votre prochaine étape est peut-être une carte de séjour pluriannuelle (une carte valable 2 à 4 ans), une carte de résident (une carte valable 10 ans) ou la naturalisation. Pensez alors à l'examen civique. Le [simulateur d'éligibilité](/eligibilite-examen-civique) vous dit en une minute s'il vous concerne.",
    },
    {
      type: "cta",
      texte: "L'examen civique fait partie de votre prochaine démarche ? Entraînez-vous sur des questions types des cinq thématiques officielles, avec la correction. L'inscription sur Test Civique France est gratuite.",
    },
  ],
  faq: [
    {
      question: "Qu'est-ce qu'une maison France Services ?",
      reponse: "C'est un lieu labellisé par l'État où des conseillers vous aident, gratuitement et sans rendez-vous, à faire vos démarches administratives du quotidien. Vous y trouvez 12 organismes partenaires, dont la CAF, l'Assurance maladie, les impôts, France Travail et l'ANTS. Le réseau comptait 2 865 lieux en décembre 2025, selon son site officiel.",
    },
    {
      question: "Est-ce que France Services est payant ?",
      reponse: "Non. Selon le site officiel du réseau, l'accompagnement réalisé par les conseillers France Services est toujours gratuit. Vous pouvez aussi utiliser sur place un ordinateur, une imprimante et un scanner. Si une personne vous demande de l'argent pour une aide présentée comme officielle, méfiez-vous et vérifiez sur france-services.gouv.fr.",
    },
    {
      question: "Quels sont les 12 partenaires de France Services ?",
      reponse: "Les Allocations familiales, l'Assurance retraite, l'Assurance maladie, le chèque énergie, les Finances publiques, France Titres (ANTS), France Travail, France Rénov', La Poste, l'Urssaf, la MSA et le point-justice. Le ministère de l'Intérieur, qui gère les titres de séjour, ne fait pas partie de cette liste.",
    },
    {
      question: "Peut-on faire une demande de titre de séjour à France Services ?",
      reponse: "Les pages officielles de France Services ne citent aucune démarche de titre de séjour. Le conseiller peut vous aider à scanner et imprimer vos pièces ou à créer une adresse e-mail. Pour une question sur votre dossier, adressez-vous à votre préfecture ; pour une question générale, à Allô Service Public.",
    },
  ],
  sources: [
    {
      titre: "France services : « Démarches et services » (les 12 partenaires nationaux et les démarches accompagnées)",
      url: "https://www.france-services.gouv.fr/demarches-et-services",
      type: "officiel",
      luLe: "2026-11-28",
    },
    {
      titre: "France services : « Un service public de proximité » (2 865 lieux en décembre 2025, 143 bus, répartition des structures)",
      url: "https://www.france-services.gouv.fr/notre-mission/un-service-public-de-proximite",
      type: "officiel",
      luLe: "2026-11-28",
    },
    {
      titre: "France services : questions fréquentes (gratuité, choix du lieu, passeport et carte d'identité)",
      url: "https://www.france-services.gouv.fr/notre-mission/questions-frequentes",
      type: "officiel",
      luLe: "2026-11-28",
    },
    {
      titre: "France services : page d'accueil (sans rendez-vous, recherche par adresse) et « Le réseau » (pages régionales, outre-mer compris)",
      url: "https://www.france-services.gouv.fr/le-reseau",
      type: "officiel",
      luLe: "2026-11-28",
    },
    {
      titre: "Service-public : carte de séjour vie privée et familiale (F2209, vérifiée le 06/11/2026), « Qui peut m'aider ? » : Allô Service Public",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2209",
      type: "officiel",
      luLe: "2026-11-28",
    },
    {
      titre: "Service-public : examen civique (F39426, vérifiée le 16/07/2026), Centre de contact citoyens Nationalité française",
      url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F39426",
      type: "officiel",
      luLe: "2026-11-28",
    },
  ],
};

export default article;
