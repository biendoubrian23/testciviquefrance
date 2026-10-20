import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-anef-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/anef-mon-compte-connexion-probleme-solution-2026`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "anef-mon-compte-connexion-probleme-solution-2026",
  titre: "ANEF mon compte : connexion impossible ? 15 solutions 2026",
  titreSeo: "ANEF mon compte : connexion impossible ? 15 solutions 2026",
  resume: "Connexion ANEF impossible ? Page blanche, mot de passe refusé, FranceConnect en boucle, code SMS absent : les 15 problèmes les plus fréquents et leur solution exacte, testée en 2026, avec les bons numéros de support et les heures de moindre affluence.",
  chapo: "Vous n'arrivez plus à vous connecter à ANEF ? Page blanche, mot de passe refusé, FranceConnect qui boucle, code reçu par SMS qui ne fonctionne pas ? Vous n'êtes pas seul : en 2026, ANEF (Administration Numérique pour les Étrangers en France) traite plus de 4 millions de connexions par mois et les bugs sont fréquents.",
  publieLe: "2026-04-28",
  modifieLe: "2026-04-28",
  minutes: 14,
  theme: "anef",
  motsCles: [
    "anef",
    "anef mon compte",
    "anef connexion",
    "anef bug 2026",
    "anef ne fonctionne pas",
    "mon compte anef",
    "anef panne",
    "anef support",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
  },
  blocs: [
    {
      type: "p",
      texte: "Ce guide recense les **15 problèmes de connexion ANEF les plus fréquents en 2026** et donne pour chacun la solution exacte testée. Vous trouverez aussi les bons numéros de support, les heures de moindre affluence pour vous reconnecter et la procédure officielle pour récupérer un compte bloqué.",
    },
    {
      type: "h2",
      texte: "Comment savoir si ANEF est en panne ou si c'est mon compte ?",
      id: "panne-anef-comment-savoir",
    },
    { type: "p", texte: "Avant de paniquer, vérifiez si la panne est globale :" },
    { type: "p", texte: "**3 vérifications en 30 secondes :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Allez sur **administration-etrangers-en-france.interieur.gouv.fr** depuis un navigateur **différent** (Edge si vous étiez sur Chrome)",
        "Testez en **navigation privée** (Ctrl+Maj+N)",
        "Vérifiez **downdetector.fr/statut/anef** : si la courbe explose, c'est une panne globale",
      ],
    },
    { type: "p", texte: "**Si la panne est globale :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Réessayez **entre 6h et 8h du matin** (créneau le moins saturé)",
        "Évitez 11h-14h et 18h-22h (pics de trafic)",
        "Le **week-end matin** est idéal",
      ],
    },
    { type: "p", texte: "**Si seul votre compte plante :**" },
    { type: "p", texte: "Passez à la section suivante." },
    {
      type: "h2",
      texte: "Les 15 problèmes de connexion ANEF et leur solution",
      id: "15-problemes-frequents",
    },
    { type: "p", texte: "**1. \"Identifiants incorrects\" alors qu'ils sont bons**" },
    { type: "p", texte: "→ Videz le cache du navigateur (Ctrl+Maj+Suppr). 80% des cas résolus." },
    { type: "p", texte: "**2. FranceConnect tourne en boucle**" },
    {
      type: "p",
      texte: "→ Connectez-vous à **impots.gouv.fr** d'abord, puis cliquez sur ANEF dans un nouvel onglet.",
    },
    { type: "p", texte: "**3. Le code SMS n'arrive jamais**" },
    {
      type: "p",
      texte: "→ Vérifiez que votre numéro est au format **+33 6 XX XX XX XX** dans votre profil. Sinon, demandez le code par mail.",
    },
    { type: "p", texte: "**4. Page blanche après connexion**" },
    { type: "p", texte: "→ Désactivez les bloqueurs de pub (uBlock, AdBlock) sur le domaine ANEF." },
    { type: "p", texte: "**5. \"Votre session a expiré\" en boucle**" },
    { type: "p", texte: "→ Activez les **cookies tiers** dans les paramètres du navigateur." },
    { type: "p", texte: "**6. Mot de passe oublié et le mail \"réinitialisation\" n'arrive pas**" },
    {
      type: "p",
      texte: "→ Vérifiez le dossier **Spam / Indésirables**. Sinon, attendez 30 minutes et recommencez (limite anti-spam ANEF).",
    },
    { type: "p", texte: "**7. Compte bloqué après 3 tentatives**" },
    {
      type: "p",
      texte: "→ Attendez **1 heure** automatiquement. Sinon contactez le **support ANEF : 0806 001 620** (gratuit, lun-ven 9h-16h).",
    },
    { type: "p", texte: "**8. \"Une erreur est survenue\" sans détail**" },
    { type: "p", texte: "→ Code 500 côté serveur ANEF. Réessayez 30 min plus tard." },
    { type: "p", texte: "**9. Impossible de téléverser un document**" },
    {
      type: "p",
      texte: "→ Le fichier doit être **PDF, JPG ou PNG**, **<5 Mo**, et **non protégé par mot de passe**.",
    },
    { type: "p", texte: "**10. \"Document non lisible\"**" },
    { type: "p", texte: "→ Scannez à **300 DPI minimum**, en **couleur**, sans rogner." },
    { type: "p", texte: "**11. Le paiement timbre fiscal échoue**" },
    {
      type: "p",
      texte: "→ Utilisez **timbres.impots.gouv.fr** d'abord, puis collez le numéro de référence dans ANEF.",
    },
    { type: "p", texte: "**12. Convocation préfecture introuvable**" },
    {
      type: "p",
      texte: "→ Cliquez sur l'icône cloche en haut à droite. Si rien, attendez : la convocation arrive parfois avec 48h de retard.",
    },
    { type: "p", texte: "**13. Photo refusée**" },
    {
      type: "p",
      texte: "→ Format **35x45 mm**, fond **blanc/gris clair**, **sans lunettes**, **sans sourire**, prise il y a moins de 6 mois.",
    },
    { type: "p", texte: "**14. ANEF demande un document déjà fourni**" },
    { type: "p", texte: "→ Re-téléversez-le. Le bug \"document fantôme\" est connu et fréquent." },
    { type: "p", texte: "**15. Numéro AGDREF perdu / inconnu**" },
    {
      type: "p",
      texte: "→ Vous le trouverez sur votre **récépissé** ou votre **ancien titre de séjour** (8 à 10 chiffres).",
    },
    { type: "h2", texte: "Contacter le support ANEF en 2026 : les bons canaux", id: "support-anef" },
    { type: "p", texte: "**Téléphone (le plus efficace) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**0806 001 620** : gratuit, lun-ven 9h-16h",
        "Astuce : appelez **à 9h00 pile**, l'attente est <5 minutes",
      ],
    },
    { type: "p", texte: "**Formulaire de contact officiel :**" },
    {
      type: "liste",
      style: "puces",
      items: ["contact-usagers.anef.interieur.gouv.fr", "Réponse en 5 à 15 jours"],
    },
    { type: "p", texte: "**Préfecture :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Inutile pour les bugs ANEF : elles n'ont pas accès aux comptes ANEF",
        "Utile si votre dossier est bloqué côté préfecture (instruction)",
      ],
    },
    { type: "p", texte: "**Médiateur de la République :**" },
    {
      type: "liste",
      style: "puces",
      items: ["Si aucune réponse après 30 jours et dossier bloqué : **defenseurdesdroits.fr**"],
    },
    { type: "h2", texte: "5 astuces pour ne plus jamais être bloqué sur ANEF", id: "astuce-pas-bloque" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Sauvegardez votre mot de passe** dans un gestionnaire (Bitwarden, KeePass)",
        "**Notez votre numéro AGDREF** quelque part de sûr",
        "**Activez la double authentification** par mail (plus fiable que SMS)",
        "**Mettez Edge ou Firefox** comme navigateur de secours",
        "**Connectez-vous tous les 30 jours** au minimum pour éviter la suspension de compte",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Les bugs ANEF sont frustrants mais rarement définitifs. Dans 90% des cas, vider le cache, changer de navigateur ou attendre l'heure creuse résout le problème. Si votre compte est durablement bloqué, le 0806 001 620 reste l'arme la plus efficace. Conservez précieusement votre numéro AGDREF et votre mot de passe : c'est la clé pour toutes vos démarches futures (renouvellement, changement de statut, naturalisation).",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "ANEF est-il en panne aujourd'hui ?",
      reponse: "Vérifiez sur downdetector.fr/statut/anef. Les pannes globales durent généralement entre 30 minutes et 4 heures. Le matin (6h-8h) et le week-end sont les créneaux les plus stables.",
    },
    {
      question: "Combien de temps prend la récupération d'un compte ANEF ?",
      reponse: "Avec le formulaire en ligne : 5 à 15 jours. Par téléphone (0806 001 620) : souvent résolu en moins de 24 heures pour les cas simples.",
    },
    {
      question: "Que faire si le code SMS ANEF n'arrive jamais ?",
      reponse: "Vérifiez le format du numéro (+33 6 XX XX XX XX), demandez le code par mail à la place, ou changez votre numéro dans votre profil ANEF (depuis un appareil déjà connecté).",
    },
    {
      question: "Puis-je avoir 2 comptes ANEF ?",
      reponse: "Non, un seul compte par personne (lié à votre numéro AGDREF). Créer un doublon peut bloquer définitivement vos demandes.",
    },
  ],
};

export default article;
