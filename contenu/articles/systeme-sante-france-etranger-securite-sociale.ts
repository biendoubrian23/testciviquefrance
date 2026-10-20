import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/systeme-sante-france-etranger-securite-sociale`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "systeme-sante-france-etranger-securite-sociale",
  titre: "Le système de santé français pour les étrangers : tout comprendre",
  titreSeo: "Le système de santé français pour les étrangers : tout comprendre",
  resume: "Guide complet sur l'accès aux soins en France pour les étrangers : sécurité sociale, mutuelle, AME, CMU-C. Droits et démarches selon votre situation administrative.",
  chapo: "Le système de santé français est considéré comme l'un des meilleurs au monde. Fondé sur le principe de solidarité, il garantit l'accès aux soins pour tous. Comprendre son fonctionnement est important pour le test civique et la vie quotidienne.",
  publieLe: "2025-12-07",
  modifieLe: "2025-12-07",
  minutes: 16,
  theme: "système santé france",
  motsCles: [
    "système santé france",
    "sécurité sociale",
    "carte vitale",
    "médecin traitant",
    "numéros urgence",
    "remboursement soins",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528",
  },
  blocs: [
    { type: "h2", texte: "La Sécurité sociale : protection pour tous", id: "securite-sociale" },
    { type: "p", texte: "**Création de la Sécurité sociale**" },
    {
      type: "p",
      texte: "La Sécurité sociale est créée en **1945** par les ordonnances des 4 et 19 octobre. Elle incarne le principe de fraternité et de solidarité nationale.",
    },
    { type: "p", texte: "**Les principes fondateurs**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Universalité** : protection pour tous les résidents",
        "**Solidarité** : les actifs financent la protection de tous",
        "**Unicité** : un seul système national",
      ],
    },
    { type: "p", texte: "**Les branches de la Sécurité sociale**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Maladie** : remboursement des soins, indemnités journalières",
        "**Famille** : allocations familiales, aides au logement",
        "**Vieillesse** : retraites",
        "**Accidents du travail** : indemnisation des accidents professionnels",
        "**Autonomie** : aide aux personnes âgées et handicapées (depuis 2020)",
      ],
    },
    { type: "p", texte: "**Protection universelle maladie (PUMa)**" },
    {
      type: "p",
      texte: "Depuis 2016, toute personne résidant en France de manière stable a droit à la prise en charge de ses frais de santé.",
    },
    { type: "h2", texte: "Accès aux soins : comment ça marche", id: "acces-soins" },
    { type: "p", texte: "**La carte Vitale**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Carte électronique personnelle",
        "Contient vos droits à l'assurance maladie",
        "À présenter à chaque consultation",
        "Permet le remboursement automatique",
      ],
    },
    { type: "p", texte: "**Le parcours de soins coordonné**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Choisir un **médecin traitant** (obligatoire)",
        "Consulter d'abord le médecin traitant",
        "Être orienté vers un spécialiste si nécessaire",
        "Meilleur remboursement si respect du parcours",
      ],
    },
    { type: "p", texte: "**Le remboursement des soins**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Consultation médecin généraliste : 70% remboursé",
        "Médicaments : 15% à 100% selon importance",
        "Hospitalisation : 80% en général",
        "Ticket modérateur : reste à charge du patient",
      ],
    },
    { type: "p", texte: "**La complémentaire santé (mutuelle)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Rembourse le ticket modérateur",
        "Obligatoire pour les salariés (entreprise)",
        "CSS (Complémentaire Santé Solidaire) pour les revenus modestes",
      ],
    },
    { type: "h2", texte: "Urgences et services de santé", id: "services-urgence" },
    { type: "p", texte: "**Les numéros d'urgence (gratuits)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**15 - SAMU** : urgences médicales",
        "**18 - Pompiers** : secours, accidents, incendies",
        "**17 - Police** : urgences de sécurité",
        "**112** : numéro d'urgence européen (tous services)",
        "**114** : urgences par SMS (sourds et malentendants)",
      ],
    },
    { type: "p", texte: "**Les services d'urgence**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Urgences hospitalières : 24h/24",
        "SOS Médecins : visites à domicile",
        "Pharmacies de garde : nuits et jours fériés",
        "Maisons médicales de garde : soins non programmés",
      ],
    },
    { type: "p", texte: "**Quand appeler les urgences ?**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Malaise, perte de connaissance",
        "Difficultés respiratoires",
        "Douleur thoracique",
        "Hémorragie importante",
        "Accident grave",
        "Brûlures étendues",
      ],
    },
    { type: "h2", texte: "Droits des étrangers à la santé", id: "droits-etrangers-sante" },
    { type: "p", texte: "**Pour les étrangers en situation régulière**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Affiliation à la Sécurité sociale après 3 mois de résidence",
        "Mêmes droits que les Français",
        "Carte Vitale délivrée",
        "Accès à la complémentaire santé solidaire (CSS)",
      ],
    },
    { type: "p", texte: "**Pour les demandeurs d'asile**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Protection universelle maladie (PUMa) dès la demande",
        "Pas de délai de carence",
        "Accès aux soins complet",
      ],
    },
    { type: "p", texte: "**L'Aide Médicale d'État (AME)**" },
    { type: "p", texte: "Pour les étrangers en situation irrégulière :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Conditions : 3 mois de résidence, ressources faibles",
        "Soins pris en charge à 100%",
        "Renouvelable chaque année",
      ],
    },
    { type: "p", texte: "**Le test civique et la santé**" },
    { type: "p", texte: "Les questions peuvent porter sur :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le fonctionnement de la Sécurité sociale",
        "Les numéros d'urgence",
        "Le rôle du médecin traitant",
        "La création de la Sécu en 1945",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le système de santé français, fondé sur la solidarité, garantit l'accès aux soins pour tous. Connaître son fonctionnement est utile au quotidien et peut être demandé au test civique. Préparez-vous sur Test Civique France.",
      ton: "bleu",
    },
  ],
  videos: [
    { id: "8MyAxR3G-fU", titre: "Comprendre le système de santé français" },
  ],
  sources: [
    {
      titre: "Ameli.fr - Assurance Maladie",
      url: "https://www.ameli.fr/",
      type: "officiel",
      description: "Site officiel de l'Assurance Maladie",
    },
    {
      titre: "Service-Public.fr - Protection sociale",
      url: "https://www.service-public.fr/particuliers/vosdroits/N19811",
      type: "officiel",
      description: "Informations sur les droits à la Sécurité sociale",
    },
    {
      titre: "Gouvernement - Sécurité sociale",
      url: "https://www.securite-sociale.fr/",
      type: "officiel",
      description: "Portail de la Sécurité sociale française",
    },
  ],
};

export default article;
