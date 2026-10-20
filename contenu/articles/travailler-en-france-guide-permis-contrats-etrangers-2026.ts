import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-new.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/travailler-en-france-guide-permis-contrats-etrangers-2026`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "travailler-en-france-guide-permis-contrats-etrangers-2026",
  titre: "Travailler en France : permis, contrats et droits des étrangers 2026",
  titreSeo: "Travailler en France : permis, contrats et droits des étrangers 2026",
  resume: "Comprendre le travail en France pour les étrangers : permis de travail, contrats CDI/CDD, droits du salarié et passeport talent. Tout ce qu'il faut savoir.",
  chapo: "Travailler en France en tant qu'étranger nécessite de naviguer entre autorisations de travail, types de contrats et titres de séjour spécifiques. Salarié étranger, employeur ou futur expatrié, ce guide complet vous détaille tout ce qu'il faut savoir sur le **travail en France** : permis, procédures et droits des travailleurs étrangers en 2026.",
  publieLe: "2026-01-27",
  modifieLe: "2026-01-27",
  minutes: 15,
  theme: "travail france étranger",
  motsCles: [
    "travail france étranger",
    "contrat travail étranger france",
    "permis travail france",
    "autorisation travail france",
    "salarié étranger france",
    "métiers en tension",
    "passeport talent salarié",
    "taxe OFII",
    "droits travailleur étranger",
  ],
  rubrique: "conseils",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1586281380349-632531db7ed4",
  },
  blocs: [
    { type: "h2", texte: "L'Autorisation de Travail : Le Sésame", id: "autorisation-travail" },
    {
      type: "p",
      texte: "Pour un étranger non-européen, travailler en France nécessite une **autorisation de travail** (sauf si votre titre de séjour vaut autorisation, comme la carte de résident).",
    },
    {
      type: "p",
      texte: "* **Qui la demande ?** C'est l'employeur qui doit faire la démarche en ligne sur la plateforme dédiée.",
    },
    {
      type: "p",
      texte: "* **Opposabilité de l'emploi** : L'administration vérifie si des demandeurs d'emploi locaux sont disponibles. Cette vérification est levée pour les **métiers en tension** (liste actualisée régulièrement).",
    },
    {
      type: "h2",
      texte: "Les Titres de Séjour 'Salarié' et 'Travailleur Temporaire'",
      id: "titres-salaries",
    },
    { type: "p", texte: "Selon votre contrat (CDI ou CDD), le titre diffère :" },
    { type: "p", texte: "**Titre de séjour 'Salarié' (CDI)**" },
    {
      type: "p",
      texte: "Délivré pour un contrat à durée indéterminée. Valable 1 an, renouvelable en pluriannuelle (4 ans).",
    },
    { type: "p", texte: "**Titre de séjour 'Travailleur Temporaire' (CDD)**" },
    {
      type: "p",
      texte: "Délivré pour un contrat à durée déterminée. Sa validité couvre la durée du contrat.",
    },
    { type: "p", texte: "**Le Passeport Talent**" },
    {
      type: "p",
      texte: "Pour les profils hautement qualifiés (ingénieurs, cadres, artistes...), ce titre de 4 ans offre des facilités (famille accompagnante, pas d'opposabilité de l'emploi).",
    },
    { type: "h2", texte: "Le Contrat de Travail pour Étranger en France", id: "contrat-travail" },
    {
      type: "p",
      texte: "Le **contrat de travail étranger en France** obéit aux mêmes règles que pour les nationaux (Code du travail), mais avec des spécificités administratives :",
    },
    {
      type: "p",
      texte: "* La clause suspensive d'obtention de l'autorisation de travail est souvent incluse.",
    },
    {
      type: "p",
      texte: "* L'employeur doit payer une taxe à l'OFII lors de la première embauche d'un salarié étranger.",
    },
    { type: "p", texte: "**Salarié Détaché**" },
    {
      type: "p",
      texte: "Un statut particulier pour les employés d'entreprises étrangères envoyés temporairement en France.",
    },
    { type: "h2", texte: "Droits du Salarié Étranger", id: "droits-salarie" },
    {
      type: "p",
      texte: "En France, **à travail égal, salaire égal**. Le salarié étranger bénéficie des mêmes droits que le salarié français :",
    },
    { type: "p", texte: "* Salaire minimum (SMIC)" },
    { type: "p", texte: "* Conditions de travail, hygiène et sécurité" },
    { type: "p", texte: "* Congés payés et durée du travail" },
    { type: "p", texte: "* Liberté syndicale et droit de grève" },
    { type: "p", texte: "* Protection sociale (Assurance Maladie, Retraite)" },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "L'accès au marché du travail français est très réglementé mais offre de solides protections. Que vous visiez un permis de travail classique ou un Passeport Talent, la clé réside dans la cohérence entre votre profil, le poste visé et la réglementation en vigueur.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Mon titre de séjour étudiant me permet-il de travailler à temps plein ?",
      reponse: "Non, uniquement à 60% du temps annuel. Pour un temps plein, il faut changer de statut.",
    },
    {
      question: "Qu'est-ce qu'un métier en tension ?",
      reponse: "Un métier pour lequel il est difficile de recruter. L'autorisation de travail est délivrée quasi-automatiquement pour ces postes.",
    },
    {
      question: "Qui paie la taxe OFII ?",
      reponse: "C'est l'employeur qui doit s'acquitter de la taxe lors de l'embauche d'un primo-migrant salarié.",
    },
  ],
  aLireAussi: [
    {
      slug: "prix-test-civique-2026-cout-tarif-titre-sejour-prefecture",
      ancre: "Prix du titre de séjour salarié (225€)",
    },
    {
      slug: "titres-de-sejour-france-guide-complet-2026",
      ancre: "Types de titres de séjour pour travailler",
    },
    {
      slug: "guide-etudiants-etrangers-france-titres-demarches-2026",
      ancre: "De l'étude au travail en France",
    },
    {
      slug: "renouvellement-titre-sejour-2026-anef-prefecture-documents-delais",
      ancre: "Renouveler son titre salarié",
    },
  ],
};

export default article;
