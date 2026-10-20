import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-anef-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/compte-anef-creer-2026-guide-pas-a-pas`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "compte-anef-creer-2026-guide-pas-a-pas",
  titre: "Créer un compte ANEF en 2026 : tutoriel pas à pas (5 min)",
  titreSeo: "Créer un compte ANEF en 2026 : tutoriel pas à pas (5 min)",
  resume: "Créez votre compte ANEF en 5 minutes avec ce tutoriel pas à pas 2026 : connexion FranceConnect ou e-mail, documents à préparer et les 6 pièges qui bloquent 1 inscription sur 4 dès la création. Guide spécial débutants.",
  chapo: "Créer un compte ANEF (Administration Numérique pour les Étrangers en France) est la **première étape obligatoire** pour toutes vos démarches : validation de visa, demande de titre de séjour, renouvellement, changement de statut, naturalisation. En 2026, ANEF est la seule porte d'entrée, il n'y a plus de dossier papier.",
  publieLe: "2026-04-28",
  modifieLe: "2026-04-28",
  minutes: 12,
  theme: "créer compte anef",
  motsCles: [
    "créer compte anef",
    "compte anef",
    "anef inscription",
    "tuto anef 2026",
    "anef etranger",
    "créer un compte anef",
    "anef premiere connexion",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1488998427799-e3362cec87c3",
  },
  blocs: [
    {
      type: "p",
      texte: "Ce tutoriel vous guide pas à pas pour **créer votre compte ANEF en 5 minutes**, sans erreur, avec la liste des documents à avoir sous la main et les pièges à éviter qui bloquent 1 utilisateur sur 4 dès la création.",
    },
    {
      type: "h2",
      texte: "Avant de commencer : les 4 documents à avoir sous la main",
      id: "avant-de-commencer",
    },
    { type: "p", texte: "Pour créer votre compte ANEF sans interruption :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Une adresse mail valide** que vous consultez régulièrement",
        "**Un numéro de téléphone français** (commençant par +33 6 ou +33 7)",
        "**Votre passeport ou pièce d'identité** (numéro à saisir)",
        "**Votre numéro de visa OU numéro AGDREF** si vous avez déjà un titre de séjour",
      ],
    },
    { type: "p", texte: "**Ressources optionnelles mais utiles :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Compte FranceConnect (impots.gouv.fr, ameli.fr) → connexion simplifiée",
        "Justificatif de domicile <3 mois (pour les démarches qui suivent)",
      ],
    },
    { type: "h2", texte: "Tutoriel : créer votre compte ANEF en 5 étapes", id: "tutoriel-creation" },
    { type: "p", texte: "**Étape 1 : Aller sur le bon site**" },
    { type: "p", texte: "Tapez exactement : **administration-etrangers-en-france.interieur.gouv.fr**" },
    {
      type: "p",
      texte: "⚠️ Méfiez-vous des sites pirates qui imitent ANEF. Le vrai site se termine par **.interieur.gouv.fr**.",
    },
    { type: "p", texte: "**Étape 2 : Cliquer sur \"Je n'ai pas encore de compte\"**" },
    { type: "p", texte: "Choisissez la méthode :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**FranceConnect** (recommandé si vous avez impots.gouv ou ameli) : 30 secondes",
        "**Création classique** par mail : 5 minutes",
      ],
    },
    { type: "p", texte: "**Étape 3 : Renseigner vos informations personnelles**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Nom et prénom : **exactement comme sur le passeport**",
        "Date de naissance : format JJ/MM/AAAA",
        "Adresse mail : utilisez une adresse personnelle (pas une adresse pro temporaire)",
      ],
    },
    { type: "p", texte: "**Étape 4 : Choisir un mot de passe sécurisé**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "12 caractères minimum",
        "1 majuscule, 1 chiffre, 1 caractère spécial",
        "⚠️ **Notez-le immédiatement** : la récupération est lente (5-15 jours)",
      ],
    },
    { type: "p", texte: "**Étape 5 : Valider par mail puis SMS**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Code à 6 chiffres envoyé par mail (vérifiez les Spams)",
        "Puis code SMS de vérification",
      ],
    },
    {
      type: "p",
      texte: "✅ Votre compte est créé. Vous pouvez maintenant déposer votre première demande.",
    },
    {
      type: "h2",
      texte: "Les 6 pièges qui bloquent la création (à éviter absolument)",
      id: "pieges-frequents",
    },
    { type: "p", texte: "**Piège 1 : utiliser le nom Facebook au lieu du nom passeport**" },
    {
      type: "p",
      texte: "→ Conséquence : votre compte ne pourra jamais être lié à votre titre. Toujours saisir le nom **EXACTEMENT** comme sur le passeport (accents inclus).",
    },
    { type: "p", texte: "**Piège 2 : créer un compte avec une adresse mail temporaire ou pro**" },
    { type: "p", texte: "→ Si vous perdez l'accès à cette adresse, votre compte est perdu." },
    { type: "p", texte: "**Piège 3 : utiliser un numéro de téléphone étranger**" },
    {
      type: "p",
      texte: "→ Les SMS ANEF ne fonctionnent **que sur des numéros français**. Achetez une carte SIM française (Free Mobile à 2€/mois suffit).",
    },
    { type: "p", texte: "**Piège 4 : créer un compte au nom d'un proche pour lui**" },
    {
      type: "p",
      texte: "→ Strictement interdit et détectable. Risque : blocage définitif des deux comptes.",
    },
    { type: "p", texte: "**Piège 5 : oublier d'utiliser FranceConnect quand on a impots.gouv**" },
    { type: "p", texte: "→ FranceConnect divise par 3 le temps de connexion. À activer." },
    { type: "p", texte: "**Piège 6 : créer plusieurs comptes en croyant que ça aide**" },
    {
      type: "p",
      texte: "→ Au contraire, ça bloque vos demandes. **Un seul compte par personne**, lié à votre numéro AGDREF.",
    },
    { type: "h2", texte: "Et après ? Vos premières démarches sur ANEF", id: "apres-creation" },
    { type: "p", texte: "Une fois le compte créé, voici l'ordre logique :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Compléter votre profil** (état civil, adresse en France, nationalité)",
        "**Téléverser vos justificatifs** dans \"Mes documents\" (passeport, photo, justificatif de domicile)",
        "**Choisir votre démarche** dans \"Démarches en ligne\" :",
      ],
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Validation visa long séjour",
        "Demande de premier titre",
        "Renouvellement",
        "Changement de situation (mariage, naissance, déménagement)",
        "Demande de naturalisation",
      ],
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Suivre l'avancement** dans \"Mes demandes en cours\"",
        "**Activer les notifications** (cloche en haut à droite)",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Créer un compte ANEF est rapide et gratuit, mais quelques règles simples évitent 90% des problèmes : utilisez votre nom de passeport exact, une adresse mail durable, un numéro français, et FranceConnect si possible. Une fois le compte créé, sauvegardez votre mot de passe et votre numéro AGDREF dans un endroit sûr, ce sera votre identifiant à vie pour toutes vos démarches en France.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "La création de compte ANEF est-elle payante ?",
      reponse: "Non, totalement gratuite. Seules les démarches (timbres fiscaux, taxes OFII) sont payantes ensuite.",
    },
    {
      question: "Puis-je créer un compte ANEF sans être encore en France ?",
      reponse: "Oui, vous pouvez créer le compte depuis l'étranger. Mais certaines démarches (validation VLS-TS) nécessitent que vous soyez physiquement en France.",
    },
    {
      question: "Que faire si je perds l'accès à mon compte ANEF ?",
      reponse: "Cliquez sur \"Mot de passe oublié\" sur la page de connexion. Sinon, appelez le 0806 001 620 (lun-ven 9h-16h) avec votre numéro AGDREF en main.",
    },
    {
      question: "Combien de temps reste actif un compte ANEF inactif ?",
      reponse: "Le compte reste valide tant que vous avez un titre de séjour ou un dossier en cours. Aucune suppression automatique.",
    },
  ],
};

export default article;
