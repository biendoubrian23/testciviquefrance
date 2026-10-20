import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-ants-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/ants-gouv-fr-2026-toutes-demarches-guide-complet`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "ants-gouv-fr-2026-toutes-demarches-guide-complet",
  titre: "ANTS 2026 : toutes les démarches (permis, carte grise, CNI)",
  titreSeo: "ANTS 2026 : toutes les démarches (permis, carte grise, CNI)",
  resume: "ANTS 2026, le guide complet : les 4 portails officiels à connaître, toutes les démarches (permis, carte grise, CNI, passeport), les coûts et délais réels, la différence avec ANEF et comment éviter les faux sites qui surfacturent.",
  chapo: "**ANTS** (Agence Nationale des Titres Sécurisés) est le portail officiel français pour toutes les démarches concernant les titres sécurisés : permis de conduire, carte grise, carte d'identité, passeport, et certaines démarches pour étrangers. En 2026, **plus de 32 millions de Français et étrangers** y passent chaque année. Mais entre les multiples sites (ants.gouv.fr, immatriculation.ants.gouv.fr, permisdeconduire.ants.gouv.fr), beaucoup s'y perdent.",
  publieLe: "2026-04-28",
  modifieLe: "2026-04-28",
  minutes: 18,
  theme: "ants",
  motsCles: [
    "ants",
    "ants.gouv.fr",
    "ants 2026",
    "ants demarches",
    "ants permis",
    "ants france",
    "titre securise france",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1568992687947-868a62a9f521",
  },
  blocs: [
    {
      type: "p",
      texte: "Ce guide hub référence **toutes les démarches ANTS de 2026**, le bon site selon votre besoin, les délais réels et les coûts officiels. Que vous soyez Français de souche, naturalisé ou étranger résidant en France, vous trouverez ici votre point de départ.",
    },
    { type: "h2", texte: "Qu'est-ce qu'ANTS et pour quoi l'utiliser ?", id: "qu-est-ce-que-ants" },
    { type: "p", texte: "**ANTS = Agence Nationale des Titres Sécurisés**" },
    {
      type: "p",
      texte: "Établissement public sous tutelle du **Ministère de l'Intérieur**, l'ANTS centralise depuis 2017 toutes les démarches administratives liées aux titres sécurisés.",
    },
    { type: "p", texte: "**Les 6 démarches principales sur ANTS :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Permis de conduire** : fabrication, duplicata, échange permis étranger, modification",
        "**Certificat d'immatriculation** (carte grise) : achat véhicule, changement adresse, vente",
        "**Carte nationale d'identité (CNI)** : première demande, renouvellement, perte",
        "**Passeport** : première demande, renouvellement, perte/vol",
        "**Visa long séjour** : pré-demande pour certains pays",
        "**Suivi de production** des titres en cours",
      ],
    },
    { type: "p", texte: "**Ce qu'ANTS NE GÈRE PAS (erreur fréquente) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "❌ Titres de séjour étrangers → c'est **ANEF** (administration-etrangers-en-france.interieur.gouv.fr)",
        "❌ Naturalisation → également **ANEF**",
        "❌ Validation VLS-TS → **ANEF**",
      ],
    },
    {
      type: "h2",
      texte: "Les 4 portails ANTS officiels (ne vous trompez pas !)",
      id: "les-bons-sites-ants",
    },
    {
      type: "p",
      texte: "**Méfiance : de nombreux sites pirates imitent ANTS** et facturent jusqu'à 100 € pour des démarches gratuites ou à 25 €.",
    },
    { type: "p", texte: "**Les 4 vrais sites officiels (tous en .gouv.fr) :**" },
    { type: "p", texte: "🔵 **ants.gouv.fr** : portail principal, point d'entrée" },
    { type: "p", texte: "🔵 **passeport.ants.gouv.fr** : passeport et CNI" },
    { type: "p", texte: "🔵 **permisdeconduire.ants.gouv.fr** : permis de conduire" },
    { type: "p", texte: "🔵 **immatriculation.ants.gouv.fr** : carte grise et véhicules" },
    { type: "p", texte: "**Comment vérifier que vous êtes sur le bon site :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "L'adresse se termine **TOUJOURS par .ants.gouv.fr**",
        "Cadenas vert dans la barre du navigateur",
        "Logo Marianne en haut à gauche",
        "Mention \"République Française : Ministère de l'Intérieur\"",
      ],
    },
    { type: "h2", texte: "Démarches ANTS 2026 : coûts et délais réels", id: "demarches-couts-delais" },
    { type: "p", texte: "**Permis de conduire :**" },
    {
      type: "tableau",
      entetes: ["Démarche", "Coût", "Délai 2026"],
      lignes: [
        ["Inscription au permis", "Gratuit (via auto-école)", ""],
        ["Permis fabriqué après réussite", "Gratuit", "2 à 4 semaines"],
        ["Duplicata (perte/vol)", "**25 €**", "3 semaines"],
        ["Échange permis étranger", "**45 €**", "3 à 12 mois"],
        ["Conversion permis poids lourd", "**25 €**", "1 mois"],
      ],
    },
    { type: "p", texte: "**Carte grise :**" },
    {
      type: "tableau",
      entetes: ["Démarche", "Coût", "Délai 2026"],
      lignes: [
        ["Achat véhicule neuf", "Variable selon CV", "7 à 21 jours"],
        ["Achat véhicule occasion", "Variable + 2.76 €", "7 à 21 jours"],
        ["Changement adresse", "Gratuit (3 changements)", "Immédiat (étiquette)"],
        ["Duplicata", "**30 €**", "7 jours"],
      ],
    },
    { type: "p", texte: "**CNI / Passeport :**" },
    {
      type: "tableau",
      entetes: ["Démarche", "Coût", "Délai 2026"],
      lignes: [
        ["CNI première demande", "Gratuit", "4 à 8 semaines"],
        ["Renouvellement CNI", "Gratuit (sauf perte 25 €)", "4 à 8 semaines"],
        ["Passeport adulte", "**86 €**", "4 à 8 semaines"],
        ["Passeport mineur 0-15 ans", "**17 à 42 €**", "4 à 8 semaines"],
      ],
    },
    {
      type: "h2",
      texte: "Étrangers en France : quand utilisez-vous ANTS ?",
      id: "qui-utilise-ants-2026",
    },
    {
      type: "p",
      texte: "Beaucoup d'étrangers se demandent s'ils doivent utiliser ANTS ou ANEF. Voici la règle simple :",
    },
    { type: "p", texte: "**Vous utilisez ANTS si :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous voulez **échanger votre permis étranger** contre un permis français",
        "Vous achetez ou vendez un véhicule (carte grise)",
        "Vous avez la **nationalité française** (naturalisé) et demandez votre première CNI ou passeport",
        "Vous avez besoin du suivi production de votre permis ou carte grise",
      ],
    },
    { type: "p", texte: "**Vous utilisez ANEF si :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Vous demandez un **titre de séjour** (premier, renouvellement, changement)",
        "Vous validez un **VLS-TS**",
        "Vous demandez la **naturalisation**",
        "Vous faites un **regroupement familial**",
      ],
    },
    { type: "p", texte: "**Astuce naturalisé récent :**" },
    {
      type: "p",
      texte: "Si vous venez d'obtenir la nationalité française, faites votre première CNI sur ANTS dans les 6 mois, c'est votre nouvelle pièce d'identité officielle qui remplace votre titre de séjour.",
    },
    { type: "h2", texte: "Éviter les arnaques ANTS : 5 règles d'or", id: "eviter-arnaques" },
    { type: "p", texte: "**1. Ne payez JAMAIS un service ANTS plus que les tarifs officiels**" },
    { type: "p", texte: "Tout site qui demande 60-100 € pour une démarche est une arnaque." },
    { type: "p", texte: "**2. Tapez l'URL manuellement**" },
    {
      type: "p",
      texte: "Ne cliquez pas sur les pubs Google \"ants en ligne\", ce sont souvent des faux sites.",
    },
    { type: "p", texte: "**3. Vérifiez le .gouv.fr**" },
    { type: "p", texte: "Le seul gage d'authenticité." },
    { type: "p", texte: "**4. Méfiez-vous des \"intermédiaires\" qui proposent leur aide payante**" },
    {
      type: "p",
      texte: "Toutes les démarches ANTS sont gratuites ou aux tarifs officiels indiqués ici.",
    },
    { type: "p", texte: "**5. En cas de doute, appelez le 34 00**" },
    { type: "p", texte: "Numéro officiel ANTS, gratuit depuis un fixe, ouvert 7h45-19h." },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "ANTS est le passage obligé pour tous les titres sécurisés (permis, carte grise, CNI, passeport) en 2026. La règle d'or : **toujours passer par les sites en .ants.gouv.fr**, ne jamais payer plus que les tarifs officiels et bien distinguer ANTS (titres sécurisés français) d'ANEF (titres pour étrangers). Pour les naturalisés récents, ANTS devient votre interlocuteur principal, gardez ce guide en favori, vous y reviendrez forcément.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quelle est la différence entre ANTS et ANEF ?",
      reponse: "ANTS gère les titres sécurisés français (permis, carte grise, CNI, passeport). ANEF gère les titres de séjour pour étrangers. Les deux sont des sites .gouv.fr distincts.",
    },
    {
      question: "Le service ANTS est-il vraiment gratuit ?",
      reponse: "L'accès au service est gratuit. Vous payez uniquement les frais officiels (timbres fiscaux) selon la démarche : 25 € duplicata permis, 45 € échange permis, 86 € passeport, etc.",
    },
    {
      question: "Comment contacter ANTS en 2026 ?",
      reponse: "Téléphone : 34 00 (gratuit depuis fixe, 7h45-19h). En ligne : formulaire sur ants.gouv.fr/formulaire-de-contact.",
    },
    {
      question: "Puis-je faire une démarche ANTS pour quelqu'un d'autre ?",
      reponse: "Non, sauf mandat formel. Chaque personne doit avoir son propre compte ANTS.",
    },
  ],
};

export default article;
