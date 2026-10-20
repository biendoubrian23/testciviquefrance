import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-ants-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/ants-permis-conduire-en-ligne-2026-etapes`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "ants-permis-conduire-en-ligne-2026-etapes",
  titre: "ANTS permis de conduire en ligne 2026 : les 5 étapes",
  titreSeo: "ANTS permis de conduire en ligne 2026 : les 5 étapes",
  resume: "Faire son permis de conduire 100 % en ligne via ANTS en 2026 : NEPH, photo-signature numérique, timbre fiscal, dépôt des pièces, suivi et réception du titre. Tutoriel en 5 étapes avec les liens directs et les délais réels.",
  chapo: "Faire son permis de conduire **entièrement en ligne** en 2026 ? C'est désormais possible pour la plupart des démarches grâce à ANTS. Plus besoin de se déplacer en préfecture : inscription, paiement, dépôt de pièces, suivi et même téléchargement de l'attestation provisoire, tout se passe sur **permisdeconduire.ants.gouv.fr**.",
  publieLe: "2026-04-28",
  modifieLe: "2026-04-28",
  minutes: 15,
  theme: "ants permis en ligne",
  motsCles: [
    "ants permis en ligne",
    "ants permis de conduire en ligne",
    "permis ants etapes",
    "demande permis ants",
    "photo signature ants",
    "permis en ligne 2026",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd",
  },
  blocs: [
    {
      type: "p",
      texte: "Voici le parcours complet **étape par étape** pour tout faire en ligne en 2026, avec les liens directs, les outils de paiement et les délais à connaître.",
    },
    { type: "h2", texte: "Étape 1 : s'inscrire à l'examen du permis (NEPH)", id: "etape-1-inscription" },
    { type: "p", texte: "**Avec une auto-école (90% des cas) :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "L'auto-école s'occupe de tout",
        "Vous fournissez : pièce d'identité, photo, justificatif de domicile, ASSR2 (pour les <21 ans)",
        "Vous recevez votre **NEPH** sous 7 à 14 jours",
      ],
    },
    { type: "p", texte: "**En candidat libre :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Connexion sur **permisdeconduire.ants.gouv.fr** avec FranceConnect",
        "Choisir \"S'inscrire au permis\"",
        "Compléter le formulaire CERFA en ligne",
        "Téléverser les pièces",
        "NEPH attribué sous 1 à 2 mois",
      ],
    },
    {
      type: "p",
      texte: "**Avantage candidat libre :** Économies (~1 200 €). Inconvénient : place d'examen plus difficile à obtenir (6-12 mois d'attente).",
    },
    {
      type: "h2",
      texte: "Étape 2 : obtenir la photo-signature numérique",
      id: "etape-2-photo-signature",
    },
    { type: "p", texte: "**Obligatoire pour la fabrication du permis** depuis 2024." },
    { type: "p", texte: "**Où l'obtenir :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Cabine **Photomaton bleue** avec logo \"Photo agréée e-services ANTS\"",
        "**Photo + signature** capturée en cabine",
        "Code à **12 chiffres** remis au verso de la planche photo",
      ],
    },
    { type: "p", texte: "**Coût :** 5 à 7 €" },
    { type: "p", texte: "**Validité :** 6 mois" },
    { type: "p", texte: "**À éviter absolument :**" },
    { type: "p", texte: "❌ Photo prise par un photographe traditionnel (non compatible)" },
    { type: "p", texte: "❌ Photo prise avec un smartphone (refusée systématiquement)" },
    { type: "p", texte: "❌ Cabine Photomaton sans le logo \"ANTS / e-services\"" },
    {
      type: "h2",
      texte: "Étape 3 : payer en ligne (timbre fiscal électronique)",
      id: "etape-3-paiement",
    },
    { type: "p", texte: "Pour les démarches payantes (duplicata 25 €, échange étranger 45 €) :" },
    { type: "p", texte: "**Procédure :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Aller sur **timbres.impots.gouv.fr**",
        "Choisir \"Acheter un timbre fiscal électronique\"",
        "Sélectionner \"Permis de conduire\" et le montant exact",
        "Payer par CB (paiement immédiat)",
        "Récupérer le **numéro de référence à 16 chiffres**",
      ],
    },
    { type: "p", texte: "**À conserver :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Mail de confirmation",
        "Numéro de référence (à saisir sur ANTS)",
        "PDF du timbre (à imprimer si demandé)",
      ],
    },
    { type: "p", texte: "**Validité :** 1 an. Remboursement possible si non utilisé." },
    {
      type: "h2",
      texte: "Étape 4 : déposer les pièces sur ANTS en ligne",
      id: "etape-4-deposer-pieces",
    },
    { type: "p", texte: "**Format technique :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**PDF, JPG ou PNG**",
        "**<2 Mo** par fichier",
        "Document **complet** (toutes pages d'une CNI par exemple)",
      ],
    },
    { type: "p", texte: "**Pièces classiques pour une demande après réussite :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Pièce d'identité",
        "Justificatif de domicile <6 mois",
        "Photo-signature (code 12 chiffres)",
        "Si applicable : ASSR2, JDC (Journée Défense et Citoyenneté)",
      ],
    },
    { type: "p", texte: "**Pièces pour duplicata :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Pièce d'identité",
        "Justificatif de domicile",
        "Photo-signature",
        "Déclaration sur l'honneur de perte (en ligne)",
        "Timbre fiscal 25 €",
      ],
    },
    {
      type: "p",
      texte: "**Astuce gain de temps :** scannez tous vos documents en avance avec une app comme **CamScanner** ou **Microsoft Lens** (PDF haute qualité automatique).",
    },
    {
      type: "h2",
      texte: "Étape 5 : suivre la production et recevoir le permis",
      id: "etape-5-suivre-recevoir",
    },
    { type: "p", texte: "**Suivi en ligne :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "\"Où en est mon permis ?\" sur permisdeconduire.ants.gouv.fr",
        "Notifications mail à chaque étape",
        "5 statuts : reçu → instruction → production → expédition → reçu/disponible",
      ],
    },
    { type: "p", texte: "**Réception :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Envoi en **lettre recommandée suivie** par La Poste",
        "Suivi via **laposte.fr** avec le numéro de suivi",
        "En cas d'absence, retrait en bureau de Poste sous **15 jours**",
      ],
    },
    { type: "p", texte: "**Attestation provisoire :**" },
    {
      type: "p",
      texte: "Si votre ancien permis expire ou si vous attendez le permis fabriqué, ANTS génère automatiquement une **attestation de droits valable 4 mois** que vous pouvez télécharger et imprimer (acceptée en cas de contrôle police/gendarmerie).",
    },
    { type: "p", texte: "**En cas de non-réception après 6 semaines :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Vérifier le suivi La Poste",
        "Appeler **34 00**",
        "Demander un duplicata gratuit (lettre perdue)",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Faire son permis de conduire entièrement en ligne en 2026 est non seulement possible mais aussi plus rapide qu'autrefois. La règle d'or : **anticipez la photo-signature** (Photomaton ANTS), **utilisez FranceConnect** pour gagner du temps, et **conservez tous vos numéros** (NEPH, dossier ANTS, timbre fiscal). Pour 90% des démarches, vous n'aurez jamais à mettre les pieds en préfecture. Si vous bloquez à une étape, le 34 00 est gratuit et efficace pour débloquer un dossier en quelques minutes.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Toutes les démarches permis sont-elles 100% en ligne ?",
      reponse: "Oui, sauf cas spécifiques (suspension, annulation après infraction grave) qui nécessitent une visite médicale et des tests psychotechniques en personne.",
    },
    {
      question: "Quel délai pour faire toute la procédure en ligne ?",
      reponse: "Création de demande : 30 minutes si tous les documents sont prêts. Délai total jusqu'à réception du permis : 2 à 4 semaines.",
    },
    {
      question: "Que faire si je n'ai pas d'imprimante pour le timbre fiscal ?",
      reponse: "Aucun besoin d'imprimer. Le numéro de référence à 16 chiffres saisi sur ANTS suffit. Le timbre est purement dématérialisé.",
    },
    {
      question: "Puis-je conduire pendant la fabrication ?",
      reponse: "Oui, avec votre attestation de droits téléchargeable depuis ANTS, valable 4 mois. Imprimez-la et gardez-la dans le véhicule.",
    },
  ],
};

export default article;
