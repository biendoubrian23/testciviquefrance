import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-passeport-impots-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/passeport-talent-creation-entreprise-france-2026-conditions-investissement`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "passeport-talent-creation-entreprise-france-2026-conditions-investissement",
  titre: "Passeport Talent Création d'entreprise 2026 : 30 000 € d'investissement, business plan, procédure",
  titreSeo: "Passeport Talent Création d'entreprise 2026 : 30 000 € d'investissement, business plan, procédure",
  resume: "Lancer son entreprise en France comme étranger : conditions Passeport Talent Création d'entreprise (Master ou 5 ans d'XP, 30 000 €), business plan détaillé, procédure du dossier au visa, renouvellement à 4 ans et naturalisation.",
  chapo: "Le **Passeport Talent : Création d'entreprise** permet aux entrepreneurs étrangers de s'installer en France pour lancer leur projet, avec un titre **valable 4 ans renouvelables**. Conditions : un **diplôme Master OU un investissement de 30 000 €**, un projet économique sérieux et une présence effective en France.",
  publieLe: "2026-04-28",
  modifieLe: "2026-04-28",
  minutes: 21,
  theme: "passeport talent création entreprise",
  motsCles: [
    "passeport talent création entreprise",
    "visa entrepreneur france",
    "créer entreprise étranger france",
    "business plan visa france",
    "investissement 30000 euros france",
  ],
  rubrique: "cadre-legal",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1664575602554-2087b04935a5",
  },
  blocs: [
    {
      type: "p",
      texte: "En 2026, plus de **2 000 entrepreneurs étrangers** par an obtiennent ce titre, dans la tech, le commerce, la restauration et les services. Voici les **conditions exactes, le montant à investir, le business plan attendu et les démarches** étape par étape.",
    },
    {
      type: "h2",
      texte: "Conditions d'éligibilité Passeport Talent Création d'entreprise",
      id: "conditions",
    },
    { type: "p", texte: "**Voie 1 : Le profil \"diplômé\"**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Master ou Bac+5 minimum",
        "Projet économique sérieux et viable",
        "Investissement personnel : **au moins 30 000 €** dans le projet",
        "Justifier de **ressources** ≥ 1 SMIC (1 805 € brut/mois en 2026)",
      ],
    },
    { type: "p", texte: "**Voie 2 : Le profil \"expérimenté\"**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "5 ans d'expérience professionnelle dans le secteur du projet",
        "Projet économique sérieux et viable",
        "Investissement personnel : **au moins 30 000 €**",
        "Ressources ≥ 1 SMIC",
      ],
    },
    { type: "p", texte: "**Voie 3 : Le profil \"investisseur\" (autre Passeport Talent)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Investissement direct ≥ **300 000 € en France**",
        "Création/préservation d'au moins **3 emplois**",
        "Différent du Passeport Talent Création (titre Investisseur)",
      ],
    },
    { type: "p", texte: "**Le projet doit présenter :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Une **viabilité économique** documentée",
        "Un **business plan** sur 3 ans",
        "Un **siège en France** (possible avec domiciliation au démarrage)",
      ],
    },
    { type: "h2", texte: "Le business plan exigé : 7 sections obligatoires", id: "business-plan" },
    {
      type: "p",
      texte: "Le business plan est **la pièce maîtresse du dossier**. Il doit prouver le sérieux et la viabilité du projet.",
    },
    { type: "p", texte: "**Les 7 sections attendues :**" },
    { type: "p", texte: "**1. Présentation du porteur**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "CV détaillé",
        "Diplômes et expériences pertinentes",
        "Pourquoi vous, pourquoi maintenant",
      ],
    },
    { type: "p", texte: "**2. Description du projet**" },
    {
      type: "liste",
      style: "puces",
      items: ["Activité, produits/services", "Clientèle cible", "Localisation envisagée en France"],
    },
    { type: "p", texte: "**3. Étude de marché**" },
    {
      type: "liste",
      style: "puces",
      items: ["Marché français du secteur", "Concurrents principaux", "Avantage différenciateur"],
    },
    { type: "p", texte: "**4. Stratégie commerciale**" },
    {
      type: "liste",
      style: "puces",
      items: ["Plan de communication", "Canaux de distribution", "Pricing"],
    },
    { type: "p", texte: "**5. Plan financier sur 3 ans**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Investissement initial (≥30 000 €)",
        "Compte de résultat prévisionnel",
        "Plan de trésorerie",
        "Seuil de rentabilité",
      ],
    },
    { type: "p", texte: "**6. Équipe et organisation**" },
    {
      type: "liste",
      style: "puces",
      items: ["Embauches prévues", "Partenariats clés"],
    },
    { type: "p", texte: "**7. Calendrier de mise en œuvre**" },
    {
      type: "liste",
      style: "puces",
      items: ["Étapes mois par mois sur 12-18 mois", "Jalons clés"],
    },
    {
      type: "p",
      texte: "**Astuce :** faites relire le business plan par un **expert-comptable français** ou via **BPI France Création**. Ils valident gratuitement les business plans.",
    },
    { type: "h2", texte: "Comment justifier les 30 000 € d'investissement", id: "investissement-30000" },
    { type: "p", texte: "**Les 30 000 € peuvent provenir de :**" },
    { type: "p", texte: "✅ **Apport personnel** sur compte bancaire (relevés des 6 derniers mois)" },
    {
      type: "p",
      texte: "✅ **Prêt bancaire** ou prêt d'honneur (BPI, France Active, Réseau Entreprendre)",
    },
    { type: "p", texte: "✅ **Apport d'associés** (avec convention d'investissement)" },
    {
      type: "p",
      texte: "✅ **Apport en nature** (matériel, brevets, fonds de commerce, évalué par un commissaire aux apports)",
    },
    { type: "p", texte: "**Justificatifs requis :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Relevés bancaires montrant les fonds disponibles",
        "Lettre d'engagement de la banque (si prêt)",
        "Statuts de la société avec capital social ≥ 30 000 €",
      ],
    },
    { type: "p", texte: "**Pièges à éviter :**" },
    { type: "p", texte: "❌ Comptes alimentés juste avant la demande (banque France soupçonne fraude)" },
    { type: "p", texte: "❌ Argent provenant de pays sous sanctions" },
    {
      type: "p",
      texte: "❌ Capital social ≥ 30 000 € mais inexploité (la préfecture vérifie l'usage réel)",
    },
    { type: "h2", texte: "Procédure complète : du business plan au visa", id: "procedure-complete" },
    { type: "p", texte: "**Étape 1 : Préparer le projet (3-6 mois)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Rédaction du business plan",
        "Validation BPI France Création (gratuit)",
        "Constitution de la société française (SAS, SARL, SA) ou domiciliation",
      ],
    },
    { type: "p", texte: "**Étape 2 : Validation du caractère économique sérieux**" },
    {
      type: "p",
      texte: "Avant la demande de visa, validation par la préfecture du département du futur siège :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Soumission du business plan",
        "Délai : 1 à 3 mois",
        "Décision : favorable / défavorable / réservée",
      ],
    },
    { type: "p", texte: "**Étape 3 : Demande de visa long séjour au consulat**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**VLS-TS Passeport Talent Création d'entreprise**",
        "Documents : décision préfectorale, business plan, justificatifs financiers, passeport",
        "Coût : **99 €**",
        "Délai : 15 à 60 jours",
      ],
    },
    { type: "p", texte: "**Étape 4 : Arrivée en France et validation**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Validation VLS-TS sur ANEF dans 3 mois",
        "Timbre fiscal **200 €**",
        "Visite médicale OFII",
      ],
    },
    { type: "p", texte: "**Étape 5 : Démarrage effectif de l'activité**" },
    {
      type: "p",
      texte: "Vous devez **démarrer effectivement l'activité dans les 6 mois** : immatriculation, embauche, clients, factures.",
    },
    { type: "p", texte: "**Étape 6 : Carte 4 ans**" },
    { type: "p", texte: "Carte Passeport Talent Création d'entreprise valable 4 ans, renouvelable." },
    { type: "h2", texte: "Renouvellement et naturalisation après création", id: "renouvellement" },
    { type: "p", texte: "**Pour renouveler à 4 ans :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Société toujours active",
        "Bilan comptable positif ou en équilibre",
        "Justificatifs fiscaux (déclarations TVA, IS)",
        "Création réelle d'emplois (idéal mais pas obligatoire)",
      ],
    },
    { type: "p", texte: "**Si l'entreprise échoue :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Possibilité de basculer sur un autre titre (salarié, vie privée et familiale si lien familial)",
        "En dernier recours : retour au pays ou nouveau projet",
      ],
    },
    { type: "p", texte: "**Naturalisation après création d'entreprise :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "5 ans de résidence régulière (réduit à 2 si étudiant français Bac+2)",
        "Niveau B1 français",
        "Test civique (80%)",
        "Activité économique stable = forte plus-value pour le dossier",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le Passeport Talent Création d'entreprise est une voie d'entrée concrète pour les entrepreneurs étrangers en France, à condition de présenter un projet sérieux : business plan rigoureux, 30 000 € d'investissement justifiés, marché clairement identifié. Anticipez 6 à 12 mois entre la conception du projet et le visa effectif. Une fois en France, démarrer rapidement et tenir une comptabilité propre garantit le renouvellement à 4 ans et l'accès à la naturalisation après 5 ans.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Peut-on demander un Passeport Talent Création sans diplôme ?",
      reponse: "Oui, avec 5 ans d'expérience professionnelle dans le secteur du projet et les autres conditions remplies.",
    },
    {
      question: "Les 30 000 € d'investissement doivent-ils être en cash ?",
      reponse: "Non, peuvent inclure apport personnel, prêt bancaire, apport d'associés ou apport en nature évalué par commissaire aux apports.",
    },
    {
      question: "Que se passe-t-il si l'entreprise échoue dans les 4 ans ?",
      reponse: "Vous pouvez basculer sur un autre titre (salarié, vie privée familiale si lien familial). En dernier recours, retour au pays ou nouveau projet.",
    },
    {
      question: "Quelles formes juridiques sont éligibles ?",
      reponse: "Toutes : SAS, SARL, SA, EURL, micro-entrepreneur (rare). Le choix dépend de votre projet et fiscal-isé selon votre situation.",
    },
  ],
};

export default article;
