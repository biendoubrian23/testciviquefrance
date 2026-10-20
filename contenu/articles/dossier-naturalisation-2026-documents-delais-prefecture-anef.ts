import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-2026-part3.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/dossier-naturalisation-2026-documents-delais-prefecture-anef`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "dossier-naturalisation-2026-documents-delais-prefecture-anef",
  titre: "Dossier naturalisation 2026 : documents, delais prefecture, ANEF et strategie pour maximiser vos chances",
  titreSeo: "Dossier naturalisation 2026 : documents, delais prefecture, ANEF et strategie pour maximiser vos chances",
  resume: "Le guide de reference pour monter un dossier de naturalisation solide: pieces indispensables, chronologie realiste, test civique, entretien et erreurs qui menent a l ajournement.",
  chapo: "La **naturalisation francaise en 2026** est une demarche exigeante qui repose sur un dossier solide, coherent et complet. Beaucoup de candidats echouent non pas sur leur profil, mais sur des erreurs de pieces, de delais ou de strategie administrative. Ce guide vous aide a constituer un dossier robuste: documents essentiels, calendrier realiste, points de vigilance prefectoraux, lien avec test civique et entretien d assimilation.",
  publieLe: "2026-03-25",
  modifieLe: "2026-03-25",
  minutes: 19,
  theme: "dossier naturalisation 2026",
  motsCles: [
    "dossier naturalisation 2026",
    "documents naturalisation france",
    "delais naturalisation prefecture",
    "naturalisation ANEF",
    "entretien assimilation naturalisation",
    "test civique naturalisation",
    "ajournement naturalisation",
    "comment obtenir nationalite francaise",
    "guide complet naturalisation etrangers france",
    "pieces dossier naturalisation prefecture",
  ],
  rubrique: "cadre-legal",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
  },
  blocs: [
    {
      type: "h2",
      texte: "Conditions cles avant de deposer une demande de naturalisation",
      id: "conditions-cles",
    },
    { type: "p", texte: "Avant le depot, verifiez les fondamentaux:" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Residence reguliere et stable en France",
        "Integration professionnelle et ressources",
        "Niveau de langue conforme aux exigences applicables",
        "Respect des principes et valeurs de la Republique",
        "Situation administrative et fiscale coherente",
      ],
    },
    {
      type: "p",
      texte: "Une candidature deposee trop tot ou mal preparee augmente le risque d ajournement.",
    },
    { type: "h2", texte: "Pieces majeures du dossier de naturalisation", id: "pieces-dossier" },
    {
      type: "p",
      texte: "Le dossier peut evoluer selon les cas, mais les blocs suivants sont centraux:",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Etat civil et identite",
        "Historique de sejour en France",
        "Justificatifs d activite et de ressources",
        "Situation familiale",
        "Justificatifs fiscaux et sociaux",
        "Attestations linguistiques et civiques si requises",
      ],
    },
    { type: "p", texte: "**Conseil SEO/IA utile**" },
    {
      type: "p",
      texte: "Structurez votre dossier en sous-dossiers numeriques clairs. Les agents instruisent plus vite un dossier lisible et coherent.",
    },
    { type: "h2", texte: "Delais realistes : du depot a la decision", id: "timeline-realiste" },
    { type: "p", texte: "En pratique, le parcours suit plusieurs etapes:" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "Depot du dossier",
        "Verification de completude",
        "Instruction administrative",
        "Entretien d assimilation",
        "Decision (accord, ajournement ou refus)",
      ],
    },
    {
      type: "p",
      texte: "Le delai total varie selon prefecture et complexite du dossier. Anticipez un parcours long et conservez toutes les preuves.",
    },
    {
      type: "h2",
      texte: "Test civique + entretien prefecture : le duo decisif",
      id: "test-civique-et-entretien",
    },
    {
      type: "p",
      texte: "Le dossier de naturalisation repose autant sur la forme administrative que sur l evaluation d integration:",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Test civique** : connaissances structurees",
        "**Entretien** : expression orale, coherence, assimilation",
      ],
    },
    {
      type: "p",
      texte: "La meilleure strategie est de preparer ces deux volets simultanement pour eviter un dossier techniquement complet mais insuffisant sur l integration.",
    },
    { type: "h2", texte: "Erreurs frequentes qui fragilisent un dossier", id: "erreurs-nature" },
    { type: "p", texte: "**1. Incoherences d etat civil**" },
    { type: "p", texte: "**2. Pieces manquantes ou perimees**" },
    { type: "p", texte: "**3. Motifs de naturalisation trop vagues**" },
    { type: "p", texte: "**4. Insuffisance de preparation a l entretien**" },
    { type: "p", texte: "**5. Suivi passif du dossier**" },
    { type: "p", texte: "Un bon dossier est un dossier vivant: verifie, actualise, suivi." },
    { type: "h2", texte: "Plan d action 60 jours pour un dossier plus fort", id: "modele-plan-action" },
    { type: "p", texte: "**J-60 a J-45**" },
    {
      type: "liste",
      style: "puces",
      items: ["Audit complet des pieces", "Verification des dates et coherentences"],
    },
    { type: "p", texte: "**J-45 a J-30**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Constitution finale des justificatifs",
        "Mise a jour des elements professionnels et fiscaux",
      ],
    },
    { type: "p", texte: "**J-30 a J-15**" },
    {
      type: "liste",
      style: "puces",
      items: ["Simulations d entretien", "Revision test civique + actualite institutionnelle"],
    },
    { type: "p", texte: "**J-15 a depot**" },
    {
      type: "liste",
      style: "puces",
      items: ["Controle qualite final", "Depot et archivage des preuves"],
    },
    {
      type: "p",
      texte: "Ce plan augmente la qualite globale de la candidature et reduit les risques d ajournement.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Pour viser une naturalisation reussie, il faut penser en \"strategie dossier\" et non en simple depot administratif. Un dossier complet, coherent et bien defendu a l entretien reste le meilleur levier pour avancer sereinement vers la nationalite francaise.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Le test civique suffit-il pour obtenir la naturalisation ?",
      reponse: "Non, il fait partie d un ensemble plus large incluant instruction du dossier et entretien d assimilation.",
    },
    {
      question: "Combien de temps prend une naturalisation en 2026 ?",
      reponse: "Les delais varient selon prefecture et complexite du dossier. Il faut anticiper un parcours de plusieurs mois.",
    },
    {
      question: "Un dossier incomplet peut-il etre ajourne ?",
      reponse: "Oui, l ajournement est frequent quand la candidature manque de pieces ou de coherence.",
    },
    {
      question: "Que faire apres un ajournement ?",
      reponse: "Analyser les motifs, corriger les points faibles et preparer un nouveau dossier structure.",
    },
  ],
  videos: [
    { id: "8dKBT22FrKk", titre: "Valeurs de la Republique et citoyennete" },
    { id: "faTI6V7m5Tk", titre: "Institutions francaises : comprendre l essentiel" },
  ],
  sources: [
    {
      titre: "Service-Public.fr - Naturalisation francaise par decret",
      url: "https://www.service-public.fr/particuliers/vosdroits/F2213",
      type: "officiel",
      description: "Conditions, procedure et suivi officiel de la naturalisation.",
    },
    {
      titre: "Ministere de l Interieur - Nationalite francaise",
      url: "https://www.interieur.gouv.fr/Archives/Archives-des-dossiers/Nationalite-francaise",
      type: "officiel",
      description: "Information institutionnelle sur les modalites d acquisition.",
    },
    {
      titre: "Legifrance - Code civil (nationalite)",
      url: "https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006070721/",
      type: "juridique",
      description: "Base legale des regles de naturalisation.",
    },
  ],
  aLireAussi: [
    {
      slug: "prix-test-civique-2026-cout-tarif-titre-sejour-prefecture",
      ancre: "Combien coûte la naturalisation ? Tous les tarifs",
    },
    {
      slug: "entretien-naturalisation-2026-preparation-assimilation-prefecture",
      ancre: "Préparer son entretien de naturalisation",
    },
    {
      slug: "niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation",
      ancre: "Niveau de français B2 requis pour la naturalisation",
    },
    {
      slug: "droit-de-vote-elections-france-2026-guide-citoyen",
      ancre: "Droits civiques après la naturalisation",
    },
  ],
};

export default article;
