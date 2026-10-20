import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-anef-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/anef-etudiant-etranger-2026`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "anef-etudiant-etranger-2026",
  titre: "ANEF étudiant étranger 2026 : VLS-TS, renouvellement, APS",
  titreSeo: "ANEF étudiant étranger 2026 : VLS-TS, renouvellement, APS",
  resume: "Toutes les démarches ANEF de l'étudiant étranger en 2026 : valider son VLS-TS dans les 3 mois, renouveler son titre, demander une APS et changer de statut salarié. Documents, délais réels par préfecture et pièges qui font rejeter 40 % des dossiers.",
  chapo: "ANEF est désormais la **plateforme officielle obligatoire** pour toutes les démarches des étudiants étrangers en France : validation du VLS-TS, renouvellement du titre étudiant, changement de statut après le diplôme, demande d'APS (Autorisation Provisoire de Séjour). En 2026, plus de 90% des préfectures n'acceptent **plus aucun dossier papier** pour les étudiants.",
  publieLe: "2026-04-28",
  modifieLe: "2026-04-28",
  minutes: 16,
  theme: "anef étudiant",
  motsCles: [
    "anef étudiant",
    "anef etudiant etranger",
    "titre séjour étudiant 2026",
    "aps master",
    "changement statut étudiant salarié",
    "renouvellement titre étudiant",
  ],
  rubrique: "conseils",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
  },
  blocs: [
    {
      type: "p",
      texte: "Ce guide ANEF étudiant 2026 reprend toutes les démarches dans l'ordre chronologique, avec les documents à préparer, les délais réels par préfecture et les pièges qui font rejeter les dossiers étudiants.",
    },
    {
      type: "h2",
      texte: "Étape 1 : valider votre VLS-TS dans les 3 mois (obligatoire)",
      id: "arrivee-france-vls-ts",
    },
    {
      type: "p",
      texte: "Si vous êtes arrivé avec un visa long séjour valant titre de séjour (VLS-TS) \"étudiant\", vous **devez le valider dans les 3 mois** sur ANEF.",
    },
    { type: "p", texte: "**Procédure exacte (15 minutes) :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Connexion sur **administration-etrangers-en-france.interieur.gouv.fr**",
        "Création de compte avec votre numéro de visa",
        "Renseignement de l'adresse en France",
        "Paiement de la **taxe OFII : 50 €** (étudiants) via timbre fiscal électronique",
        "Téléchargement de l'**attestation de validation** (à conserver !)",
      ],
    },
    { type: "p", texte: "**Sans validation dans les 3 mois :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Votre VLS-TS devient **invalide**",
        "Vous êtes en situation irrégulière",
        "Risque d'OQTF en cas de contrôle",
      ],
    },
    { type: "p", texte: "**Documents à téléverser :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Visa (page passeport)",
        "Justificatif de domicile (<3 mois)",
        "Page d'identité du passeport",
      ],
    },
    {
      type: "h2",
      texte: "Étape 2 : renouveler votre titre étudiant sur ANEF",
      id: "renouvellement-titre-etudiant",
    },
    {
      type: "p",
      texte: "Le renouvellement se fait **2 à 4 mois avant l'expiration** de votre titre actuel.",
    },
    { type: "p", texte: "**Documents obligatoires (12 pièces) :**" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Passeport (toutes pages utiles)",
        "Titre de séjour actuel",
        "Photo d'identité format ANEF",
        "Justificatif de domicile <3 mois",
        "**Certificat de scolarité de l'année en cours**",
        "**Relevé de notes des semestres précédents** (preuve de progression)",
        "Justificatif de ressources (615 €/mois minimum requis)",
        "Attestation CVEC payée",
        "Attestation d'inscription pour l'année à venir",
        "Justificatif d'assurance maladie",
        "Timbre fiscal **75 €**",
        "Justificatif de l'année précédente si redoublement",
      ],
    },
    { type: "p", texte: "**Le piège #1 (cause de 40% des refus) :**" },
    {
      type: "p",
      texte: "Le **manque de progression académique**. Si vous avez redoublé sans raison valable médicale ou personnelle documentée, votre titre peut être refusé. Joignez TOUJOURS un courrier explicatif si vos notes sont faibles.",
    },
    {
      type: "h2",
      texte: "Étape 3 : demander une APS après votre Master (12 mois pour trouver un emploi)",
      id: "aps-apres-master",
    },
    {
      type: "p",
      texte: "L'**Autorisation Provisoire de Séjour (APS)** vous permet de rester **12 mois en France après votre diplôme** pour chercher un emploi ou créer une entreprise.",
    },
    { type: "p", texte: "**Conditions 2026 :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Diplôme **niveau Master minimum** (Bac+5)",
        "Diplôme délivré par un **établissement français habilité**",
        "Demande dans les **4 mois après l'obtention** du diplôme",
      ],
    },
    { type: "p", texte: "**Documents :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Diplôme ou attestation de réussite",
        "Justificatif de ressources : **2 707 €/mois** (équivalent SMIC)",
        "Projet professionnel détaillé",
        "CV et lettre de motivation",
      ],
    },
    { type: "p", texte: "**Ce que l'APS permet :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Travailler à **100%** (plus de limite des 964h)",
        "Créer une entreprise",
        "Convertir en **Passeport Talent** ou **salarié** dès que vous trouvez un emploi qualifié",
      ],
    },
    {
      type: "h2",
      texte: "Étape 4 : changement de statut étudiant → salarié sur ANEF",
      id: "changement-statut-etudiant-salarie",
    },
    { type: "p", texte: "Si vous trouvez un CDI ou CDD ≥12 mois pendant ou après vos études :" },
    { type: "p", texte: "**Conditions :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Salaire **brut ≥ 1.5 SMIC** (≈ 2 707 € brut/mois en 2026)",
        "Emploi **lié au diplôme** obtenu",
        "L'employeur dépose une **demande d'autorisation de travail** sur ANEF (côté employeur)",
      ],
    },
    { type: "p", texte: "**Délai d'instruction :**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "2 mois en théorie",
        "3 à 6 mois en réalité dans les grosses préfectures (Paris, 93, 94)",
      ],
    },
    {
      type: "p",
      texte: "**Astuce :** lancez la procédure **avant la fin de votre titre étudiant**. ANEF émet un récépissé qui vous permet de continuer à séjourner et travailler pendant l'instruction.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "ANEF est désormais incontournable pour tout étudiant étranger en France. La règle d'or : **anticipez de 4 mois** vos démarches, conservez tous vos justificatifs académiques et financiers, et ne laissez jamais votre titre expirer sans avoir lancé le renouvellement. Si vous visez de rester en France après votre diplôme, demander l'APS est la stratégie la plus sûre : elle vous donne 12 mois pour transformer votre statut en salarié ou Passeport Talent.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Combien coûte le renouvellement d'un titre étudiant en 2026 ?",
      reponse: "75 € de timbre fiscal pour le renouvellement. À cela s'ajoutent la CVEC (103 € en 2026) et les frais de scolarité.",
    },
    {
      question: "Puis-je travailler avec un titre étudiant ?",
      reponse: "Oui, jusqu'à 964 heures par an (60% du temps légal annuel). Avec une APS ou un changement de statut, vous passez à 100%.",
    },
    {
      question: "Mon titre étudiant a expiré et je n'ai pas fait le renouvellement, que faire ?",
      reponse: "Déposez immédiatement une demande sur ANEF même tardive. Vous serez sans doute pénalisé d'une amende mais le dossier sera étudié. Évitez de quitter la France pendant cette période.",
    },
  ],
};

export default article;
