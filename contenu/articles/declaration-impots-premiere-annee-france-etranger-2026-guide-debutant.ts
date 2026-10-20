import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-passeport-impots-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/declaration-impots-premiere-annee-france-etranger-2026-guide-debutant`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "declaration-impots-premiere-annee-france-etranger-2026-guide-debutant",
  titre: "Première déclaration d'impôts en France pour un étranger 2026 : guide débutant complet",
  titreSeo: "Première déclaration d'impôts en France pour un étranger 2026 : guide débutant complet",
  resume: "Vous êtes arrivé en France en 2025 et faites votre première déclaration en 2026 ? Numéro fiscal, formulaire 2042, dates limites, 5 erreurs qui coûtent cher (jusqu'au refus de naturalisation), avis d'imposition et crédit d'impôt.",
  chapo: "Vous êtes **étranger arrivé en France** en 2025 et vous devez faire votre **première déclaration d'impôts en 2026** ? C'est obligatoire, même si vous n'avez gagné qu'un mois de salaire. Beaucoup de nouveaux arrivants oublient cette étape et se retrouvent avec des **majorations** ou pire, un **rejet de leur demande de naturalisation** plus tard.",
  publieLe: "2026-04-28",
  modifieLe: "2026-04-28",
  minutes: 17,
  theme: "premiere declaration impots france",
  motsCles: [
    "premiere declaration impots france",
    "declaration impots etranger 2026",
    "numero fiscal france etranger",
    "formulaire 2042 etranger",
    "impots france premiere annee",
    "declaration etranger nouvel arrivant",
  ],
  rubrique: "cadre-legal",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85",
  },
  blocs: [
    {
      type: "p",
      texte: "Ce guide pas à pas vous explique **tout ce qu'il faut savoir** : qui doit déclarer, comment obtenir son numéro fiscal, comment remplir la déclaration, et 5 erreurs qui coûtent cher en première déclaration.",
    },
    { type: "h2", texte: "Qui doit faire sa première déclaration en 2026 ?", id: "qui-doit-declarer" },
    { type: "p", texte: "**Vous devez OBLIGATOIREMENT déclarer en 2026 si :**" },
    { type: "p", texte: "✅ Vous êtes arrivé en France **avant le 31 décembre 2025** et y résidez" },
    {
      type: "p",
      texte: "✅ Vous avez perçu des **revenus en France** en 2025 (salaire, allocations, bourse, micro-entreprise)",
    },
    {
      type: "p",
      texte: "✅ Votre **foyer fiscal** est désormais en France (résidence habituelle, famille, travail principal)",
    },
    { type: "p", texte: "**Cas particuliers :**" },
    {
      type: "p",
      texte: "🟡 **Étudiant boursier ou sans emploi** : vous devez quand même déclarer **0 €** pour pouvoir bénéficier des aides (CSS, APL renforcée, etc.)",
    },
    {
      type: "p",
      texte: "🟡 **Arrivé fin d'année (octobre-décembre 2025)** : déclarez uniquement les revenus français de cette période",
    },
    {
      type: "p",
      texte: "🟡 **Frontaliers** (Belgique, Luxembourg, Suisse, Allemagne, Italie, Espagne) : régime particulier, déclaration France pour tous les revenus mondiaux ou pays selon convention",
    },
    { type: "p", texte: "**Vous N'avez PAS à déclarer en 2026 si :**" },
    {
      type: "p",
      texte: "❌ Vous arrivez en France **après le 1er janvier 2026** (votre première déclaration sera en 2027)",
    },
    { type: "p", texte: "❌ Vous êtes en visa court séjour (<6 mois) sans revenus français" },
    {
      type: "h2",
      texte: "Étape 1 : obtenir son numéro fiscal (la clé de tout)",
      id: "obtenir-numero-fiscal",
    },
    {
      type: "p",
      texte: "**Le numéro fiscal** est obligatoire pour déclarer en ligne. Si vous n'en avez pas encore :",
    },
    { type: "p", texte: "**Méthode 1 : demande en ligne**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Site **impots.gouv.fr** → \"Vous n'avez pas encore de numéro fiscal\"",
        "Formulaire avec passeport, justificatif de résidence",
        "Réception sous **2-3 semaines** par courrier",
      ],
    },
    { type: "p", texte: "**Méthode 2 : prendre RDV au SIP (Service des Impôts des Particuliers)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Localisez votre SIP sur impots.gouv.fr",
        "Documents : passeport, justificatif de domicile, titre de séjour, contrat de travail",
        "Numéro attribué immédiatement",
      ],
    },
    {
      type: "p",
      texte: "**Astuce timing :** demandez votre numéro fiscal **dès février-mars 2026** pour avoir le temps de faire la déclaration avant le 23 mai 2026.",
    },
    {
      type: "p",
      texte: "**À conserver précieusement :** votre numéro fiscal vous suit toute votre vie en France et est demandé pour : naturalisation, achat immobilier, ouverture compte bancaire, certaines aides.",
    },
    {
      type: "h2",
      texte: "Étape 2 : remplir la déclaration (formulaire 2042)",
      id: "remplir-declaration",
    },
    {
      type: "p",
      texte: "**Plateforme :** **impots.gouv.fr** → \"Particulier\" → \"Espace particulier\"",
    },
    { type: "p", texte: "**Calendrier 2026 (confirmé) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Service en ligne : à partir d'**avril 2026**",
        "Date limite département **01-19** : 21 mai 2026",
        "Date limite département **20-54** : 28 mai 2026",
        "Date limite département **55-976 + non-résidents** : 4 juin 2026",
      ],
    },
    { type: "p", texte: "**Sections à compléter (déclaration classique 2042) :**" },
    { type: "p", texte: "**Page 1 : État civil**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Nom, prénom, date de naissance",
        "Adresse en France",
        "Situation familiale (célibataire, marié, etc.)",
      ],
    },
    { type: "p", texte: "**Page 2 : Personnes à charge**" },
    {
      type: "liste",
      style: "puces",
      items: ["Conjoint", "Enfants", "Autres personnes à charge"],
    },
    { type: "p", texte: "**Page 3 : Revenus**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Cases 1AJ-1DJ** : salaires perçus en 2025",
        "**Case 1AS** : pensions/retraites",
        "**Case 1AO** : allocations chômage",
        "**Cases 1NX, 2DC** : revenus capitaux mobiliers",
        "**Cases 4BE, 4BL** : revenus fonciers (loyers)",
      ],
    },
    { type: "p", texte: "**Page 4 : Charges déductibles**" },
    {
      type: "liste",
      style: "puces",
      items: ["Pensions alimentaires versées", "Frais de garde d'enfants", "Dons aux associations"],
    },
    { type: "p", texte: "**Page 5 : Réductions et crédits d'impôt**" },
    {
      type: "liste",
      style: "puces",
      items: ["Emploi à domicile", "Investissements logement", "Souscription PER"],
    },
    { type: "p", texte: "**Validation et signature électronique.**" },
    {
      type: "h2",
      texte: "Les 5 erreurs de première déclaration qui coûtent cher",
      id: "erreurs-couteuses",
    },
    { type: "p", texte: "**Erreur 1 : ne pas déclarer du tout**" },
    {
      type: "p",
      texte: "→ Coût : **majoration 40%** + intérêts de retard. **Refus de naturalisation** si découvert plus tard. Une déclaration à 0 € prend 5 minutes et vous protège.",
    },
    { type: "p", texte: "**Erreur 2 : oublier les revenus de l'étranger**" },
    {
      type: "p",
      texte: "→ Si vous êtes devenu résident fiscal France en 2025, vous déclarez aussi vos revenus du pays d'origine pour la période où vous étiez en France. Sanctions : **redressement 3 à 10 ans en arrière**.",
    },
    { type: "p", texte: "**Erreur 3 : déclarer un faux statut familial**" },
    {
      type: "p",
      texte: "→ \"Marié\" alors que mariage non transcrit en France : refus. \"Concubinage\" non déclaré : pas d'avantages.",
    },
    { type: "p", texte: "**Erreur 4 : ne pas conserver les justificatifs**" },
    {
      type: "p",
      texte: "→ Conservez **3 ans minimum** : bulletins de salaire, attestations CAF, relevés bancaires, factures. Le fisc peut contrôler à tout moment.",
    },
    { type: "p", texte: "**Erreur 5 : ne pas demander les aides auxquelles vous avez droit**" },
    {
      type: "p",
      texte: "→ Crédit d'impôt emploi à domicile (50%), réductions enfants à charge, dons. Une déclaration optimisée peut vous faire **récupérer 200 à 1 500 €**.",
    },
    {
      type: "h2",
      texte: "Après la déclaration : avis d'imposition et impôts à payer",
      id: "apres-declaration",
    },
    { type: "p", texte: "**Avis d'imposition (août/septembre 2026) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Reçu par voie électronique sur impots.gouv.fr",
        "Indique : revenu fiscal de référence, impôt à payer ou crédit d'impôt",
        "À conserver précieusement (demandé pour CAF, naturalisation, etc.)",
      ],
    },
    { type: "p", texte: "**Le revenu fiscal de référence (RFR)** :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Indicateur clé pour toutes vos démarches futures",
        "Détermine vos droits aux aides (APL, bourses, CSS, etc.)",
        "Affecte vos futurs prélèvements sociaux et CSG",
      ],
    },
    { type: "p", texte: "**Modes de paiement de l'impôt :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Prélèvement automatique mensuel (recommandé)",
        "Prélèvement à l'échéance (3 fois)",
        "Paiement en ligne par CB",
        "Si <300 € : paiement comptant",
      ],
    },
    { type: "p", texte: "**Si vous avez payé trop d'impôts à la source :**" },
    {
      type: "p",
      texte: "→ **Crédit d'impôt remboursé en juillet/août 2026** sur votre compte bancaire.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La première déclaration d'impôts en France peut sembler intimidante mais c'est **obligatoire et essentiel** pour toute votre vie en France : aides sociales, naturalisation, achat immobilier, tout passe par votre dossier fiscal. La règle d'or : **demandez votre numéro fiscal dès février 2026**, déclarez **même si vous n'avez rien gagné** (déclaration à 0 €), conservez tous vos justificatifs 3 ans et utilisez **impots.gouv.fr** uniquement (jamais de sites tiers payants). En cas de doute, votre SIP local accompagne gratuitement les nouveaux arrivants.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Comment obtenir mon premier numéro fiscal en France ?",
      reponse: "Demande en ligne sur impots.gouv.fr ou directement au Service des Impôts des Particuliers (SIP) avec passeport, titre de séjour et justificatif de domicile. Délai : 1 jour (en personne) à 3 semaines (en ligne).",
    },
    {
      question: "Dois-je déclarer si je n'ai eu aucun revenu en France ?",
      reponse: "Oui, faites une déclaration à 0 €. Cela ouvre droit aux aides (CSS, APL renforcée) et crée votre dossier fiscal pour les années suivantes.",
    },
    {
      question: "Quel impact sur ma demande de naturalisation ?",
      reponse: "Énorme : la préfecture vérifie systématiquement votre situation fiscale. Toute déclaration manquante ou erronée peut bloquer votre naturalisation pendant des années.",
    },
    {
      question: "Que faire si j'ai oublié de déclarer une année passée ?",
      reponse: "Faites une déclaration rectificative dans votre espace impots.gouv.fr ou contactez votre SIP. Mieux vaut régulariser spontanément (intérêts de retard seulement) que se faire contrôler (majoration jusqu'à 80%).",
    },
  ],
};

export default article;
