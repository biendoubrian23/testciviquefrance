import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-ants-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/ants-demarches-en-ligne-2026-guide-complet`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "ants-demarches-en-ligne-2026-guide-complet",
  titre: "ANTS démarches en ligne 2026 : le guide complet (top 10)",
  titreSeo: "ANTS démarches en ligne 2026 : le guide complet (top 10)",
  resume: "Toutes les démarches ANTS en ligne en 2026 : le top 10 par fréquence, la création de compte avec FranceConnect, les démarches véhicule et carte grise, la CNI et le passeport, plus les vrais numéros de support officiels.",
  chapo: "En 2026, **toutes les démarches ANTS sont 100% en ligne**. Plus de guichet préfecture pour le permis, la carte grise, la CNI ou le passeport sauf cas exceptionnels. Mais entre les 4 portails ANTS distincts, les multiples comptes et les formats de fichiers exigés, il est facile de se perdre.",
  publieLe: "2026-04-28",
  modifieLe: "2026-04-28",
  minutes: 19,
  theme: "ants demarches en ligne",
  motsCles: [
    "ants demarches en ligne",
    "ants demarches",
    "ants demarche en ligne 2026",
    "ants gouv",
    "demarches administratives en ligne",
    "ants 100% en ligne",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  blocs: [
    {
      type: "p",
      texte: "Ce guide hub présente **TOUTES les démarches en ligne ANTS 2026**, dans l'ordre de fréquence, avec pour chacune le bon site, les pièces à préparer et le coût exact. À garder en favori pour toutes vos démarches futures.",
    },
    { type: "h2", texte: "Top 10 des démarches ANTS en ligne en 2026", id: "classement-demarches" },
    {
      type: "p",
      texte: "Classement par fréquence (d'après les statistiques 2025 du Ministère de l'Intérieur) :",
    },
    { type: "p", texte: "**1. Demande de carte grise (immatriculation)** : 8.2 millions/an" },
    { type: "p", texte: "**2. Renouvellement / première CNI** : 6.5 millions/an" },
    { type: "p", texte: "**3. Renouvellement / première passeport** : 4.1 millions/an" },
    { type: "p", texte: "**4. Fabrication permis après réussite** : 850 000/an" },
    { type: "p", texte: "**5. Duplicata permis (perte/vol)** : 480 000/an" },
    { type: "p", texte: "**6. Changement adresse carte grise** : 380 000/an" },
    { type: "p", texte: "**7. Échange permis étranger** : 120 000/an" },
    { type: "p", texte: "**8. Cession véhicule (déclaration vente)** : 5 millions/an" },
    { type: "p", texte: "**9. Pré-demande passeport mineur** : 700 000/an" },
    { type: "p", texte: "**10. Suivi production titre** : toutes démarches" },
    {
      type: "p",
      texte: "Toutes ces démarches sont **disponibles en ligne, 24h/24**, depuis le portail unique ants.gouv.fr.",
    },
    { type: "h2", texte: "Créer un compte ANTS : la base pour tout faire en ligne", id: "compte-ants" },
    { type: "p", texte: "**Méthode recommandée : FranceConnect**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Si vous avez **impots.gouv.fr**, **ameli.fr**, **identité numérique La Poste** ou **MSA**, c'est en 30 secondes",
        "Connexion automatique, pas de mot de passe à gérer",
      ],
    },
    { type: "p", texte: "**Méthode classique : email + mot de passe**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Sur **ants.gouv.fr** → \"Mon espace\" → \"Créer un compte\"",
        "Validation par lien mail",
        "Mot de passe sécurisé (12 caractères min)",
      ],
    },
    { type: "p", texte: "**Un seul compte ANTS pour TOUTES les démarches :**" },
    {
      type: "p",
      texte: "Une fois connecté, vous accédez à toutes les démarches : permis, carte grise, CNI, passeport, suivi.",
    },
    { type: "p", texte: "**Astuce stockage cloud :**" },
    {
      type: "p",
      texte: "Téléversez vos documents fréquents (CNI scannée, justificatif de domicile, photo-signature) dans \"Mes documents\", ils seront pré-remplis pour les démarches futures.",
    },
    { type: "h2", texte: "Démarches véhicule en ligne (carte grise)", id: "demarches-vehicule" },
    { type: "p", texte: "**Achat véhicule neuf chez concessionnaire :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le concessionnaire fait la démarche pour vous (souvent gratuitement)",
        "Vous recevez votre carte grise par lettre suivie sous 7-21 jours",
      ],
    },
    { type: "p", texte: "**Achat véhicule occasion entre particuliers :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Connexion ants.gouv.fr (immatriculation)",
        "Pièces : carte grise barrée par le vendeur, certificat de cession, contrôle technique <6 mois, justificatif domicile, pièce d'identité",
        "Paiement : taxe régionale (variable selon CV) + redevance acheminement 2.76 €",
        "Code provisoire valable 1 mois pour rouler",
      ],
    },
    { type: "p", texte: "**Vente véhicule :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Déclaration en ligne dans les **15 jours**",
        "Code de cession à donner à l'acheteur",
        "Gratuit",
      ],
    },
    { type: "p", texte: "**Changement adresse :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Gratuit pour les 3 premières fois (au-delà : nouvelle carte payante)",
        "Étiquette autocollante envoyée gratuitement",
      ],
    },
    { type: "h2", texte: "Démarches CNI / Passeport en ligne (pré-demande)", id: "demarches-identite" },
    {
      type: "p",
      texte: "Important : pour la CNI et le passeport, **la pré-demande se fait en ligne** mais vous devez aussi **passer en mairie** pour la prise d'empreintes.",
    },
    { type: "p", texte: "**Procédure :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Pré-demande sur ants.gouv.fr** (30 minutes en ligne)",
        "**Prise de RDV en mairie** (équipée d'un dispositif de recueil)",
        "**Passage en mairie** : empreintes, signature, vérification documents (15 minutes)",
        "**Production** : 4 à 8 semaines en 2026",
        "**Récupération en mairie** (sur SMS/mail)",
      ],
    },
    { type: "p", texte: "**Coûts officiels 2026 :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "CNI première / renouvellement : **gratuit** (25 € si perte)",
        "Passeport adulte : **86 €**",
        "Passeport mineur 15+ : **42 €**",
        "Passeport mineur 0-14 : **17 €**",
      ],
    },
    { type: "p", texte: "**Astuce délai :**" },
    {
      type: "p",
      texte: "Pour passeport en urgence (vacances), demandez un passeport d'urgence en préfecture (30 €) : délivré sous 7 jours mais validité 1 an seulement.",
    },
    { type: "h2", texte: "Obtenir de l'aide : les bons canaux ANTS 2026", id: "support-aide" },
    { type: "p", texte: "**Téléphone officiel :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**34 00** : gratuit depuis fixe, 0.06 €/min depuis mobile, lun-ven 7h45-19h, sam 8h-17h",
      ],
    },
    { type: "p", texte: "**Formulaire de contact :**" },
    {
      type: "liste",
      style: "puces",
      items: ["ants.gouv.fr/Contacter-nous", "Réponse en 5 à 10 jours ouvrés"],
    },
    { type: "p", texte: "**Aide en présentiel :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Maisons France Services** (>2 700 en France) : aide gratuite à toutes démarches",
        "**Médiateur ANTS** en cas de blocage prolongé",
      ],
    },
    { type: "p", texte: "**FAQ officielle :**" },
    {
      type: "liste",
      style: "puces",
      items: ["ants.gouv.fr/faq → 200+ questions réponses"],
    },
    { type: "p", texte: "**À éviter :**" },
    {
      type: "p",
      texte: "❌ Sites privés payants (\"aide ANTS\" facturée 30-100 €) : toutes les vraies aides sont gratuites",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Le 100% en ligne ANTS est une réalité en 2026 et la plupart des démarches se font en moins de 30 minutes depuis votre canapé. La règle simple : **un seul compte ANTS** (avec FranceConnect idéalement), **les bonnes URL en .ants.gouv.fr**, **les vrais tarifs officiels** (jamais plus). Pour les blocages, le 34 00 et les Maisons France Services sont gratuits et efficaces. Les fameux sites \"intermédiaires\" payants n'apportent strictement rien.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Toutes les démarches ANTS sont-elles vraiment en ligne ?",
      reponse: "Oui pour 95% des démarches. La CNI et le passeport nécessitent encore un passage en mairie pour les empreintes. Les cas particuliers (suspension permis, annulation) peuvent demander un présentiel.",
    },
    {
      question: "Quel est le délai moyen d'une démarche ANTS en 2026 ?",
      reponse: "Carte grise : 7 à 21 jours. Permis fabriqué : 2-4 semaines. CNI/Passeport : 4-8 semaines. Échange permis étranger : 3 à 12 mois.",
    },
    {
      question: "Quels sont les coûts cachés ?",
      reponse: "Aucun coût caché côté ANTS. Les seuls frais : timbre fiscal selon démarche, taxe régionale carte grise, photo-signature en Photomaton (5-7 €). Méfiez-vous des sites tiers payants.",
    },
    {
      question: "ANTS gère-t-il les démarches pour étrangers ?",
      reponse: "Pas directement. ANTS gère le permis et la carte grise (que les étrangers résidents peuvent demander). Pour les titres de séjour, c'est ANEF.",
    },
  ],
};

export default article;
