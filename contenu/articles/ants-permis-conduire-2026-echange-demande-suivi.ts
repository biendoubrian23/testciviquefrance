import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-ants-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/ants-permis-conduire-2026-echange-demande-suivi`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "ants-permis-conduire-2026-echange-demande-suivi",
  titre: "ANTS permis de conduire 2026 : demande, échange, suivi",
  titreSeo: "ANTS permis de conduire 2026 : demande, échange, suivi",
  resume: "Toutes les démarches permis de conduire sur ANTS en 2026 : première demande, échange d'un permis étranger (45 €), duplicata après perte ou vol (25 €), photo-signature numérique et suivi de fabrication. Étapes, délais et solutions aux blocages.",
  chapo: "Demander un permis de conduire ou en suivre la fabrication passe **obligatoirement par ANTS** depuis 2018. En 2026, plus de **2.5 millions de démarches permis** sont effectuées chaque année sur permisdeconduire.ants.gouv.fr. Mais entre la première demande, le duplicata après vol, l'échange d'un permis étranger ou le simple suivi de production, le portail peut paraître complexe.",
  publieLe: "2026-04-28",
  modifieLe: "2026-04-28",
  minutes: 17,
  theme: "ants permis",
  motsCles: [
    "ants permis",
    "ants permis de conduire",
    "ants permis demande",
    "permis de conduire ants",
    "duplicata permis",
    "suivi permis ants",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1449965408869-ebd13bc0c637?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1449965408869-ebd13bc0c637",
  },
  blocs: [
    {
      type: "p",
      texte: "Ce guide complet vous accompagne sur **toutes les démarches permis ANTS 2026** : étapes pas à pas, documents requis, coûts officiels, délais réels et solutions aux blocages les plus courants.",
    },
    { type: "h2", texte: "Les 7 démarches permis disponibles sur ANTS", id: "les-7-demarches-permis" },
    { type: "p", texte: "**1. Inscription au permis (NEPH)**" },
    {
      type: "p",
      texte: "→ Numéro d'enregistrement préalable obligatoire, gratuit, attribué via auto-école ou en candidat libre.",
    },
    { type: "p", texte: "**2. Demande de fabrication après réussite**" },
    {
      type: "p",
      texte: "→ Lancée automatiquement par votre auto-école dans les 48h après l'examen pratique.",
    },
    { type: "p", texte: "**3. Duplicata après perte ou vol**" },
    { type: "p", texte: "→ Coût : **25 €** en timbre fiscal. Délai : 3 semaines." },
    { type: "p", texte: "**4. Échange permis étranger**" },
    {
      type: "p",
      texte: "→ Coût : **45 €**. Délai : 3 à 12 mois selon préfecture. Voir notre [article dédié](/articles/echanger-permis-conduire-etranger-france-2026-ants-demarches).",
    },
    { type: "p", texte: "**5. Demande après suspension/annulation**" },
    { type: "p", texte: "→ Procédure spéciale après visite médicale et tests psychotechniques." },
    { type: "p", texte: "**6. Conversion permis militaire**" },
    { type: "p", texte: "→ Pour les anciens militaires. Gratuit." },
    { type: "p", texte: "**7. Modification (changement nom, adresse)**" },
    { type: "p", texte: "→ Gratuit, sans nouveau permis sauf demande explicite." },
    {
      type: "h2",
      texte: "Tutoriel : faire une demande de permis sur ANTS pas à pas",
      id: "tutoriel-demande-permis",
    },
    { type: "p", texte: "**Étape 1 : Connexion**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Aller sur **permisdeconduire.ants.gouv.fr**",
        "Se connecter avec **FranceConnect** (impots.gouv, ameli, La Poste)",
      ],
    },
    { type: "p", texte: "**Étape 2 : Choisir la démarche**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "\"Je demande la fabrication de mon permis\"",
        "\"Je demande un duplicata\"",
        "\"Je fais une autre démarche\"",
      ],
    },
    { type: "p", texte: "**Étape 3 : Préparer les pièces (en PDF/JPG <2 Mo)**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Pièce d'identité** (CNI ou passeport)",
        "**Justificatif de domicile <6 mois**",
        "**Photo numérique signature** (via Photomaton agréé : code à 12 chiffres)",
        "**Permis actuel** (si renouvellement, modification, duplicata)",
        "**Timbre fiscal électronique** acheté sur **timbres.impots.gouv.fr**",
      ],
    },
    { type: "p", texte: "**Étape 4 : Téléverser les documents**" },
    { type: "p", texte: "Format **PDF, JPG, PNG**, **<2 Mo** (oui, plus strict qu'ANEF)." },
    { type: "p", texte: "**Étape 5 : Valider et payer**" },
    { type: "p", texte: "Le timbre fiscal est saisi par son numéro à 16 chiffres." },
    { type: "p", texte: "**Étape 6 : Récupérer le numéro de dossier**" },
    { type: "p", texte: "Conservez ce numéro : c'est votre clé pour suivre la fabrication." },
    { type: "h2", texte: "Suivre la fabrication de son permis sur ANTS", id: "suivre-fabrication" },
    {
      type: "p",
      texte: "Une fois la demande validée, le permis passe par **5 étapes de production** :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Demande enregistrée** (J+0)",
        "**Instruction en cours** (J+2 à J+7)",
        "**Production en cours** (J+7 à J+14)",
        "**Permis envoyé** (J+14 à J+21) : vous recevez un mail",
        "**Permis disponible / livré** : Lettre suivie La Poste",
      ],
    },
    { type: "p", texte: "**Comment suivre :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Sur permisdeconduire.ants.gouv.fr → \"Où en est mon permis ?\"",
        "Saisir votre **numéro de dossier** (12 caractères)",
        "Ou utiliser la **plateforme téléphonique : 34 00**",
      ],
    },
    { type: "p", texte: "**Délais réels en 2026 :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Permis classique B après réussite : **2 à 4 semaines**",
        "Duplicata : **3 semaines**",
        "Reconstruction après suspension : **4 à 8 semaines**",
      ],
    },
    { type: "p", texte: "**Si retard >6 semaines :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Vérifier sur ANTS qu'aucune pièce n'est demandée",
        "Appeler le **34 00**",
        "Contacter votre préfecture si pièce demandée non visible",
      ],
    },
    {
      type: "h2",
      texte: "Les 6 problèmes les plus fréquents sur ANTS permis",
      id: "problemes-frequents",
    },
    { type: "p", texte: "**1. \"Photo signature non conforme\"**" },
    {
      type: "p",
      texte: "→ Repassez en Photomaton avec l'option **\"Photo + signature numérique ANTS\"** (code à 12 chiffres). Coût : 5-7 €.",
    },
    { type: "p", texte: "**2. Timbre fiscal \"déjà utilisé\"**" },
    {
      type: "p",
      texte: "→ Erreur fréquente : vous avez utilisé le timbre pour autre chose. Rachetez-en un nouveau.",
    },
    { type: "p", texte: "**3. \"Justificatif de domicile non valable\"**" },
    { type: "p", texte: "→ Doit être **<6 mois**, à votre nom, en France." },
    { type: "p", texte: "**4. Demande \"en attente\" depuis plus de 6 semaines**" },
    { type: "p", texte: "→ Appelez le **34 00**. Souvent une pièce manquante non signalée." },
    { type: "p", texte: "**5. \"Votre NEPH n'est pas reconnu\"**" },
    {
      type: "p",
      texte: "→ Le NEPH (Numéro d'Enregistrement Préfectoral Harmonisé) est attribué par votre auto-école. Demandez-le à votre formateur.",
    },
    { type: "p", texte: "**6. Permis expédié mais jamais reçu**" },
    {
      type: "p",
      texte: "→ Lettre suivie La Poste : numéro de suivi sur ANTS. Si perdu, demandez un **duplicata gratuit dans les 30 jours**.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Pour toute démarche permis en 2026, ANTS est incontournable et gratuit dans la plupart des cas. Préparez vos documents au bon format (photo signature numérique, timbre fiscal en ligne, justificatif <6 mois), conservez votre numéro de dossier et utilisez le 34 00 si le suivi se bloque. Pour les étrangers souhaitant échanger leur permis, voir notre guide spécialisé sur la procédure d'échange par pays.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Combien de temps prend la fabrication d'un permis sur ANTS ?",
      reponse: "2 à 4 semaines pour un permis B après réussite. 3 semaines pour un duplicata. 3 à 12 mois pour un échange de permis étranger.",
    },
    {
      question: "Comment obtenir le code photo-signature ?",
      reponse: "Dans une cabine Photomaton agréée (logo bleu \"Photo agréée e-services ANTS\"). Coût : 5 à 7 €. Code valable 6 mois.",
    },
    {
      question: "Mon permis a expiré pendant la fabrication, puis-je conduire ?",
      reponse: "Vous recevez automatiquement une attestation de droits temporaire valable jusqu'à réception du nouveau permis. Imprimez-la depuis ANTS.",
    },
    {
      question: "Peut-on faire une démarche permis sans FranceConnect ?",
      reponse: "Oui, vous pouvez créer un compte ANTS classique avec mail et mot de passe. Mais FranceConnect est plus rapide et plus sécurisé.",
    },
  ],
};

export default article;
