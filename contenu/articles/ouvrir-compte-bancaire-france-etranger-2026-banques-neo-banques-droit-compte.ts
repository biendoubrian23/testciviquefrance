import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-vie-pratique-2.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/ouvrir-compte-bancaire-france-etranger-2026-banques-neo-banques-droit-compte`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "ouvrir-compte-bancaire-france-etranger-2026-banques-neo-banques-droit-compte",
  titre: "Ouvrir un compte bancaire en France quand on est étranger : banques, néo-banques et droit au compte 2026",
  titreSeo: "Ouvrir un compte bancaire en France quand on est étranger : banques, néo-banques et droit au compte 2026",
  resume: "Aucune banque ne peut vous refuser si vous êtes en situation régulière. Documents requis, banques les plus accessibles, Compte Nickel en 5 minutes, et comment activer le droit au compte via la Banque de France si on vous refuse.",
  chapo: "Ouvrir un compte bancaire est l'une des premières urgences à l'arrivée en France : sans compte, impossible de recevoir un salaire, de payer un loyer ou d'accéder aux aides CAF. Pourtant, beaucoup d'étrangers se heurtent à des refus de banques traditionnelles, parfois sans explication. Ce guide complet vous explique quels documents sont réellement requis, quelles banques disent oui, comment faire valoir votre droit au compte garanti par la loi française, et les alternatives (néo-banques, Compte Nickel) pour être opérationnel en 24 heures.",
  publieLe: "2026-04-10",
  modifieLe: "2026-04-10",
  minutes: 16,
  theme: "ouvrir compte bancaire étranger France",
  motsCles: [
    "ouvrir compte bancaire étranger France",
    "compte bancaire sans titre de séjour France",
    "banque pour étranger France 2026",
    "droit au compte étranger France",
    "Compte Nickel étranger France",
    "néo-banque étranger France",
    "Banque de France droit au compte",
    "refus ouverture compte bancaire étranger",
    "compte bancaire récépissé titre de séjour",
    "La Banque Postale étranger compte",
    "N26 Revolut étranger France",
    "documents compte bancaire étranger France",
    "banque sans justificatif de domicile",
    "compte bancaire demandeur asile France",
    "ouvrir compte sans domicile fixe France",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f",
  },
  blocs: [
    {
      type: "h2",
      texte: "Les documents que les banques ont le droit de vous demander (et pas plus)",
      id: "documents-requis",
    },
    {
      type: "p",
      texte: "Avant d'entrer dans une agence, sachez exactement ce que la banque est en droit d'exiger, et ce qu'elle ne peut pas vous refuser.",
    },
    { type: "h3", texte: "Documents légalement exigibles (décret du 30 janvier 2014)" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Une pièce d'identité valide** : passeport ou titre de séjour en cours de validité. Un récépissé de demande ou de renouvellement de titre de séjour est accepté comme document d'identité officiel (art. R431-1 CESEDA).",
        "**Un justificatif de domicile de moins de 3 mois** : facture EDF, quittance de loyer, avis de taxe d'habitation, attestation d'hébergement + pièce d'identité de l'hébergeant.",
        "**Un spécimen de signature**",
        "**Votre adresse email et numéro de téléphone**",
      ],
    },
    { type: "h3", texte: "Ce que la banque ne peut PAS vous demander" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Un contrat de travail CDI ou une fiche de paie",
        "Un titre de séjour \"définitif\" ou pluriannuel (un récépissé suffit)",
        "Une ancienneté dans votre titre de séjour",
        "La preuve que vous êtes propriétaire ou en CDI",
        "Un minimum de revenu (pour l'ouverture d'un compte courant simple)",
      ],
    },
    { type: "h3", texte: "Le cas du justificatif de domicile : le casse-tête des arrivants" },
    {
      type: "p",
      texte: "Si vous venez d'arriver et n'avez pas encore de justificatif à votre nom, plusieurs options existent :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Attestation d'hébergement** : votre hébergeur rédige une lettre sur papier libre + sa pièce d'identité + son propre justificatif de domicile",
        "**Domiciliation associative** : des associations comme La Cimade, le Secours Catholique ou France Services peuvent vous fournir une adresse postale officielle",
        "**CCAS de votre mairie** (Centre Communal d'Action Sociale) : domiciliation gratuite pour les personnes sans domicile stable",
      ],
    },
    {
      type: "h2",
      texte: "Les banques traditionnelles : lesquelles acceptent le mieux les étrangers ?",
      id: "banques-traditionnelles",
    },
    {
      type: "p",
      texte: "Toutes les banques françaises sont légalement tenues d'ouvrir un compte à toute personne en situation régulière sur le territoire. En pratique, les politiques varient.",
    },
    { type: "h3", texte: "Les banques les plus accessibles aux étrangers" },
    {
      type: "p",
      texte: "**La Banque Postale** est historiquement la banque la plus ouverte aux personnes en situation précaire ou aux étrangers. Elle est tenue par sa mission de service public et accepte systématiquement les récépissés comme document d'identité.",
    },
    {
      type: "p",
      texte: "**Le Crédit Mutuel** et **la Caisse d'Épargne** ont des politiques régionales variables, mais sont généralement accessibles avec les documents de base.",
    },
    {
      type: "p",
      texte: "**BNP Paribas**, **Société Générale** et **LCL** sont plus sélectives selon les agences et demandent parfois un premier dépôt ou un revenu minimum non légalement requis.",
    },
    { type: "h3", texte: "La procédure type" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Présentez-vous en agence avec vos documents",
        "Précisez que vous souhaitez ouvrir un **compte courant** (et non un compte épargne ou premium)",
        "Si on vous demande des justificatifs non légaux, rappelez poliment le décret du 30 janvier 2014",
        "Si refus : demandez-le **par écrit** : vous en aurez besoin pour la procédure Banque de France",
      ],
    },
    { type: "h3", texte: "Le délai d'ouverture" },
    {
      type: "p",
      texte: "En général 3 à 7 jours ouvrés après remise des documents. La carte bancaire est envoyée par courrier sous 10 à 15 jours. Demandez un RIB immédiatement après signature, il est disponible dès l'ouverture du compte.",
    },
    {
      type: "h2",
      texte: "Le droit au compte : la loi qui oblige toute banque à vous accepter",
      id: "droit-au-compte",
    },
    {
      type: "p",
      texte: "Si une banque vous refuse l'ouverture d'un compte, vous disposez d'un droit légal absolu : le **droit au compte**, garanti par l'article L312-1 du Code monétaire et financier.",
    },
    { type: "h3", texte: "Comment ça fonctionne" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Récupérez un refus écrit** de la banque (lettre ou email). Si le banquier refuse de mettre son refus par écrit, notez la date, l'heure et le nom de l'agence, cela suffit.",
        "**Rendez-vous à la Banque de France** de votre département (ou faites la démarche en ligne sur banque-france.fr)",
        "**Remplissez le formulaire de droit au compte** et joignez le refus écrit + vos documents d'identité et de domicile",
        "**La Banque de France désigne une banque** (souvent La Banque Postale) dans un délai de **3 jours ouvrés**",
        "La banque désignée **doit ouvrir votre compte** dans les **3 jours ouvrés** suivant la désignation",
      ],
    },
    { type: "h3", texte: "Ce que comprend le compte ouvert par droit au compte" },
    { type: "p", texte: "Le compte de base comprend :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Un RIB / IBAN",
        "La réception et l'envoi de virements",
        "Un relevé de compte mensuel",
        "Une carte de paiement à débit différé (sous conditions)",
        "Les prélèvements automatiques",
        "Les dépôts et retraits en agence",
      ],
    },
    {
      type: "p",
      texte: "C'est un compte fonctionnel à zéro frais : suffisant pour recevoir un salaire, payer un loyer et accéder à la CAF.",
    },
    { type: "h3", texte: "Délai total" },
    {
      type: "p",
      texte: "De la démarche Banque de France à l'ouverture du compte : **moins de 10 jours**.",
    },
    {
      type: "h2",
      texte: "Les néo-banques et alternatives : opérationnel en 24 heures",
      id: "neo-banques",
    },
    {
      type: "p",
      texte: "En attendant d'ouvrir un compte dans une banque traditionnelle, ou si vous voulez être opérationnel immédiatement, les néo-banques sont une solution rapide et accessible.",
    },
    { type: "h3", texte: "Compte Nickel (Bureau de tabac)" },
    {
      type: "p",
      texte: "Le Compte Nickel est ouvert dans n'importe quel bureau de tabac partenaire en **5 minutes**, avec uniquement :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Une pièce d'identité valide** (passeport ou titre de séjour)",
        "**Un numéro de téléphone français**",
        "**2,50 €** pour la carte",
      ],
    },
    {
      type: "p",
      texte: "Vous repartez avec une **carte Mastercard** et un **IBAN français** immédiatement. Frais : 20 €/an. Aucun justificatif de domicile requis. Idéal pour les premiers jours.",
    },
    { type: "h3", texte: "N26 (100% en ligne)" },
    {
      type: "p",
      texte: "Ouverture en ligne en 10 minutes avec passeport + selfie. IBAN allemand (DE…) : fonctionne partout en Europe mais certaines CAF ou employeurs refusent les IBAN étrangers. Vérifiez avant.",
    },
    { type: "h3", texte: "Revolut" },
    {
      type: "p",
      texte: "Rapide, pratique pour les transferts internationaux et les dépenses en devises. Mais l'IBAN commence par LT (Lituanie) : même problème que N26 pour la CAF et certains employeurs.",
    },
    { type: "h3", texte: "Lydia / Sumeria" },
    {
      type: "p",
      texte: "IBAN français (FR…), ouverture rapide, mais moins connue. Vérifiez la compatibilité avec votre CAF locale.",
    },
    { type: "h3", texte: "Notre recommandation pratique" },
    {
      type: "tableau",
      entetes: ["Besoin", "Solution recommandée"],
      lignes: [
        ["Urgence absolue (aujourd'hui)", "Compte Nickel en tabac"],
        ["IBAN français rapide (48h)", "Lydia/Sumeria ou Banque Postale en ligne"],
        ["Solution long terme", "Banque Postale ou Crédit Mutuel en agence"],
        ["Si toutes les banques refusent", "Droit au compte via Banque de France"],
      ],
    },
    {
      type: "h2",
      texte: "Cas particuliers : demandeur d'asile, sans-abri, récépissé ANEF",
      id: "cas-particuliers",
    },
    { type: "p", texte: "Certaines situations méritent une attention particulière." },
    { type: "h3", texte: "Demandeur d'asile en procédure" },
    {
      type: "p",
      texte: "Depuis 2017, les demandeurs d'asile ont droit à un compte bancaire dès le dépôt de leur demande auprès de l'OFPRA. L'attestation de demande d'asile (ADA) vaut document d'identité pour les banques. La Banque Postale et le Crédit Municipal acceptent systématiquement. L'allocation pour demandeur d'asile (ADA) est versée sur une carte prépayée (carte ADA) délivrée par l'OFII, elle fonctionne comme une carte bancaire pour les dépenses courantes.",
    },
    { type: "h3", texte: "Récépissé ANEF (numérique)" },
    {
      type: "p",
      texte: "Le récépissé numérique téléchargeable depuis l'espace ANEF a la **même valeur juridique** qu'un récépissé papier tamponné. Imprimez-le en couleur et en haute résolution. Si une banque refuse le récépissé numérique, c'est illégal, saisissez la Banque de France.",
    },
    { type: "h3", texte: "Sans domicile fixe" },
    { type: "p", texte: "Si vous n'avez pas d'adresse, vous pouvez :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Vous **domicilier dans une association agréée** ou au CCAS de votre mairie (gratuit)",
        "Utiliser cette adresse de domiciliation pour ouvrir votre compte",
        "La liste des organismes agréés est disponible sur service-public.fr",
      ],
    },
    { type: "h3", texte: "Mineur étranger" },
    {
      type: "p",
      texte: "Un mineur de 16 ans et plus peut ouvrir un compte bancaire avec l'autorisation de son représentant légal et sa propre pièce d'identité (passeport, titre de séjour).",
    },
    {
      type: "h2",
      texte: "Ce que le test civique vérifie sur la banque et l'économie",
      id: "compte-bancaire-test-civique",
    },
    {
      type: "p",
      texte: "Le test civique n'interroge pas directement sur les procédures bancaires, mais plusieurs questions portent sur des notions connexes.",
    },
    { type: "h3", texte: "Ce qu'il faut savoir pour le test" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**La Banque de France** est la banque centrale française, membre de la Banque Centrale Européenne (BCE). Elle régule le système bancaire et garantit le droit au compte.",
        "**L'euro** est la monnaie officielle de la France depuis le 1er janvier 2002 (mise en circulation des pièces et billets). La France fait partie de la **zone euro** (19 puis 20 pays membres).",
        "**L'IBAN** (International Bank Account Number) est le standard européen d'identification des comptes bancaires, mis en place dans le cadre de l'espace SEPA.",
        "Le **secret bancaire** est garanti en France mais peut être levé par décision judiciaire ou dans le cadre de la lutte contre le blanchiment (Tracfin).",
        "La **garantie des dépôts** est assurée jusqu'à **100 000 €** par banque et par client par le Fonds de Garantie des Dépôts et de Résolution (FGDR).",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Ouvrir un compte bancaire en France quand on est étranger est un droit, pas un privilège. La loi est claire : aucune banque ne peut vous refuser si vous êtes en situation régulière. En cas de refus, la procédure Banque de France est gratuite, rapide (10 jours) et contraignante pour la banque désignée. Si vous avez besoin d'un IBAN immédiatement, le Compte Nickel en bureau de tabac reste la solution la plus rapide en France, 5 minutes, sans justificatif de domicile. Gardez précieusement votre RIB dès l'ouverture : vous en aurez besoin pour votre employeur, la CAF, l'Assurance maladie et la préfecture.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Une banque peut-elle refuser d'ouvrir un compte parce que j'ai seulement un récépissé de titre de séjour ?",
      reponse: "Non, c'est illégal. Le récépissé est un document officiel qui prouve la régularité de votre séjour. Si une banque refuse, demandez un refus écrit et déposez une demande de droit au compte auprès de la Banque de France. La procédure est gratuite et prend moins de 10 jours.",
    },
    {
      question: "Peut-on ouvrir un compte bancaire sans justificatif de domicile ?",
      reponse: "Pas dans une banque traditionnelle, mais le Compte Nickel (en bureau de tabac) ne demande que votre pièce d'identité et un numéro de téléphone. Pour les banques classiques, une attestation d'hébergement signée par votre hébergeur + sa pièce d'identité + son justificatif de domicile est suffisante. En dernier recours, domiciliez-vous dans une association agréée ou au CCAS de votre mairie.",
    },
    {
      question: "Le Compte Nickel est-il suffisant pour recevoir mon salaire et les aides CAF ?",
      reponse: "Oui. Le Compte Nickel fournit un IBAN français (FR…) reconnu par tous les employeurs et par la CAF. Il est utilisable pour les virements, prélèvements et la carte Mastercard. Le seul inconvénient est qu'il n'offre pas de découvert autorisé ni de livret épargne.",
    },
    {
      question: "Qu'est-ce que le droit au compte et comment l'activer ?",
      reponse: "C'est un droit légal (art. L312-1 du Code monétaire) qui oblige toute banque désignée par la Banque de France à vous ouvrir un compte. Pour l'activer : obtenez un refus écrit d'une banque, rendez-vous à la Banque de France avec vos documents d'identité et de domicile, et déposez le formulaire de droit au compte. La Banque de France désigne une banque sous 3 jours, qui doit ouvrir votre compte sous 3 jours supplémentaires.",
    },
    {
      question: "Les néo-banques comme N26 ou Revolut sont-elles acceptées par les préfectures et la CAF ?",
      reponse: "Pas toujours. N26 (IBAN allemand DE…) et Revolut (IBAN lituanien LT…) peuvent être refusés par certaines CAF et préfectures qui n'acceptent que les IBAN français (FR…). Préférez une néo-banque avec IBAN français comme Lydia/Sumeria, ou le Compte Nickel pour être sûr.",
    },
  ],
  sources: [
    {
      titre: "Code monétaire et financier : Article L312-1 (droit au compte)",
      url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000020523494/",
      type: "juridique",
      description: "Droit au compte garanti par la loi française",
    },
    {
      titre: "Banque de France : Droit au compte",
      url: "https://www.banque-france.fr/fr/particuliers/incidents-bancaires/droit-au-compte",
      type: "officiel",
      description: "Procédure officielle pour activer le droit au compte",
    },
    {
      titre: "Service-Public.fr, Ouverture de compte bancaire",
      url: "https://www.service-public.fr/particuliers/vosdroits/F2909",
      type: "officiel",
      description: "Documents requis et procédure d'ouverture de compte",
    },
    {
      titre: "Compte Nickel : Ouverture en bureau de tabac",
      url: "https://www.comptenikel.com/",
      type: "officiel",
      description: "Solution rapide sans justificatif de domicile",
    },
  ],
};

export default article;
