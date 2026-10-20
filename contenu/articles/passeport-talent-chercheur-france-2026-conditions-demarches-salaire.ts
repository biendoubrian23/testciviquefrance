import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-passeport-impots-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/passeport-talent-chercheur-france-2026-conditions-demarches-salaire`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "passeport-talent-chercheur-france-2026-conditions-demarches-salaire",
  titre: "Passeport Talent Chercheur 2026 : conditions, salaire, convention d'accueil, famille (guide complet)",
  titreSeo: "Passeport Talent Chercheur 2026 : conditions, salaire, convention d'accueil, famille (guide complet)",
  resume: "Le titre de séjour le plus avantageux pour les chercheurs étrangers : 4 ans renouvelables, famille incluse, naturalisation accélérée à 2 ans. Convention d'accueil, salaires 2026 par profil, procédure étape par étape.",
  chapo: "Le **Passeport Talent : Chercheur** est l'un des titres de séjour les plus avantageux de France pour les universitaires, doctorants et post-doctorants étrangers. Valable **jusqu'à 4 ans renouvelables**, il donne le droit au travail à 100%, à l'accès au regroupement familial immédiat et à une procédure simplifiée.",
  publieLe: "2026-04-28",
  modifieLe: "2026-04-28",
  minutes: 20,
  theme: "passeport talent chercheur",
  motsCles: [
    "passeport talent chercheur",
    "passeport talent recherche",
    "visa chercheur france",
    "doctorat etranger france",
    "post-doc france",
    "convention accueil chercheur",
  ],
  rubrique: "cadre-legal",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
  },
  blocs: [
    {
      type: "p",
      texte: "En 2026, plus de **8 500 chercheurs étrangers** entrent en France chaque année avec ce titre. Voici **toutes les conditions, démarches, salaires et avantages** du Passeport Talent Chercheur 2026.",
    },
    {
      type: "h2",
      texte: "Conditions d'éligibilité du Passeport Talent Chercheur 2026",
      id: "conditions-eligibilite",
    },
    { type: "p", texte: "**Diplôme requis :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Master (Bac+5) au minimum**",
        "ou diplôme jugé **équivalent** par l'établissement d'accueil",
        "Aucune condition d'âge",
      ],
    },
    { type: "p", texte: "**Convention d'accueil obligatoire :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Convention signée avec un **organisme de recherche public ou privé reconnu** en France",
        "Universités, CNRS, Inserm, INRAE, CEA, Inria, Ifremer, etc.",
        "Doctorat (cotutelle ou inscription en école doctorale française)",
        "Post-doctorat avec contrat de recherche",
      ],
    },
    { type: "p", texte: "**Activité visée :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Travaux de recherche",
        "Enseignement universitaire (en complément de la recherche)",
        "Doctorat ou post-doctorat",
      ],
    },
    { type: "p", texte: "**Pas de condition de ressources élevées :**" },
    { type: "p", texte: "La **convention d'accueil** vaut justificatif de prise en charge." },
    { type: "h2", texte: "Salaire d'un chercheur Passeport Talent en 2026", id: "salaire-2026" },
    {
      type: "p",
      texte: "Contrairement au Passeport Talent salarié qualifié, **aucun seuil de salaire spécifique** n'est exigé pour le chercheur. Cependant, voici les fourchettes réelles 2026 :",
    },
    {
      type: "tableau",
      entetes: ["Statut", "Salaire brut mensuel"],
      lignes: [
        ["Doctorant contrat doctoral", "**2 100 €**"],
        ["Doctorant CIFRE (entreprise)", "**2 200 à 2 800 €**"],
        ["Post-doctorant CNRS", "**2 700 à 3 200 €**"],
        ["Chercheur contractuel", "**2 800 à 4 500 €**"],
        ["Maître de conférences titulaire", "**2 200 € (début) à 4 800 € (échelon haut)**"],
        ["Directeur de recherche", "**3 800 à 6 500 €**"],
      ],
    },
    { type: "p", texte: "**Avantages financiers complémentaires :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Accord SMIC chercheur** (suppression CSG-CRDS sur certaines bourses)",
        "Exonération impôts sur le revenu pour les chercheurs étrangers (régime impatriés, sous conditions)",
        "Frais de scolarité doctorat : **380 €/an** uniquement",
      ],
    },
    { type: "h2", texte: "Procédure de demande pas à pas", id: "procedure-demande" },
    { type: "p", texte: "**Étape 1 : Obtenir la convention d'accueil**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "L'établissement d'accueil français rédige une **convention d'accueil** (formulaire CERFA 16030*02)",
        "Validée par la préfecture du département de l'établissement",
        "Délai : 1 à 4 semaines",
      ],
    },
    { type: "p", texte: "**Étape 2 : Demande de visa long séjour**" },
    { type: "p", texte: "Si vous êtes hors UE :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Visa **VLS-TS Passeport Talent Chercheur**",
        "Demande au consulat de France de votre pays",
        "Documents : passeport, convention d'accueil, justificatif de diplôme, CV, photos",
        "Coût : **99 €** (frais consulaires)",
        "Délai : 15 à 60 jours",
      ],
    },
    { type: "p", texte: "**Étape 3 : Validation à l'arrivée en France**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Validation VLS-TS sur **ANEF** dans les **3 mois** après l'arrivée",
        "Taxe OFII : **200 €** (timbre fiscal électronique)",
        "Pas d'entretien CIR pour les chercheurs (dispense automatique)",
      ],
    },
    { type: "p", texte: "**Étape 4 : Demande de carte 4 ans**" },
    {
      type: "p",
      texte: "Si la convention d'accueil le permet, vous pouvez obtenir directement une carte **Passeport Talent Chercheur valable 4 ans**.",
    },
    { type: "p", texte: "**Étape 5 : Renouvellement**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Demande sur ANEF **2 à 4 mois avant expiration**",
        "Documents : nouvelle convention d'accueil, justificatif d'activité, passeport, photo",
      ],
    },
    {
      type: "h2",
      texte: "Faire venir conjoint et enfants : Passeport Talent Famille",
      id: "famille-conjoint",
    },
    {
      type: "p",
      texte: "**Avantage majeur du Passeport Talent :** votre famille obtient un titre de séjour **immédiatement, sans regroupement familial classique** (qui dure 12-18 mois).",
    },
    { type: "p", texte: "**Qui peut venir ?**" },
    {
      type: "liste",
      style: "puces",
      items: ["**Conjoint** (marié ou PACS)", "**Enfants mineurs** (-18 ans)"],
    },
    { type: "p", texte: "**Titre délivré :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**\"Passeport Talent : Famille\"**",
        "Valable autant d'années que votre titre",
        "**Droit de travailler immédiatement** (pour le conjoint)",
      ],
    },
    { type: "p", texte: "**Documents :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Acte de mariage / PACS traduit",
        "Acte de naissance des enfants",
        "Passeports",
        "Justificatif de votre Passeport Talent",
        "Justificatifs de ressources",
        "Certificat médical OFII",
      ],
    },
    { type: "p", texte: "**Coût :** 200 € de timbre fiscal par membre de la famille" },
    {
      type: "h2",
      texte: "Que faire après ? Naturalisation et carte de résident",
      id: "apres-passeport-talent",
    },
    {
      type: "p",
      texte: "Le Passeport Talent Chercheur est **une voie royale vers la naturalisation** :",
    },
    { type: "p", texte: "**Naturalisation accélérée :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**2 ans de résidence** suffisent (au lieu de 5 ans) pour les titulaires d'un diplôme français Bac+2 minimum",
        "Encore plus rapide pour les chercheurs ayant accompli un doctorat en France",
      ],
    },
    { type: "p", texte: "**Carte de résident 10 ans :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Après 4 ans de séjour régulier en Passeport Talent (3 si conditions favorables)",
        "Conditions : ressources, intégration, niveau B1 français",
      ],
    },
    { type: "p", texte: "**Conversion en autres titres :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Salarié classique → en cas de fin de mission recherche",
        "Passeport Talent salarié qualifié → si embauche dans le privé",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le Passeport Talent Chercheur reste en 2026 le titre de séjour le plus avantageux pour les universitaires étrangers : 4 ans renouvelables, famille incluse, naturalisation accélérée à 2 ans, dispense d'entretien CIR. Si vous êtes Master ou doctorant et qu'un établissement français vous accueille, c'est la voie la plus rapide et la plus sûre. Anticipez la convention d'accueil, validez votre VLS-TS dans les 3 mois et planifiez dès le début la naturalisation accélérée.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Combien de temps faut-il pour obtenir un Passeport Talent Chercheur ?",
      reponse: "Entre 2 et 4 mois entre la signature de la convention d'accueil et l'arrivée en France (incluant 15-60 jours de visa).",
    },
    {
      question: "Le Passeport Talent Chercheur est-il renouvelable ?",
      reponse: "Oui, autant que vos missions de recherche se poursuivent. Au bout de 4 ans, vous pouvez aussi demander une carte de résident 10 ans.",
    },
    {
      question: "Peut-on travailler en dehors de la recherche avec un Passeport Talent Chercheur ?",
      reponse: "Oui à 100% mais l'activité principale doit rester la recherche. Activités annexes (consulting, enseignement) sont autorisées.",
    },
    {
      question: "Existe-t-il un Passeport Talent pour les artistes ?",
      reponse: "Oui : \"Passeport Talent, Profession artistique et culturelle\", conditions différentes (contrats artistiques + ressources SMIC sur 12 mois).",
    },
  ],
};

export default article;
