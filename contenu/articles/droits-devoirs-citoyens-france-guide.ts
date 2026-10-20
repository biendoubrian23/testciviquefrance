import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/droits-devoirs-citoyens-france-guide`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "droits-devoirs-citoyens-france-guide",
  titre: "Droits et devoirs des citoyens en France : guide complet",
  titreSeo: "Droits et devoirs des citoyens en France : guide complet",
  resume: "Les droits fondamentaux et les devoirs civiques en France : droit de vote, liberté d'expression, obligation fiscale, service national. Thématique majeure du test civique.",
  chapo: "Être citoyen en France implique des droits mais aussi des devoirs. Cette réciprocité est au cœur du contrat social républicain. Découvrez les droits et devoirs essentiels pour réussir le test civique.",
  publieLe: "2025-12-08",
  modifieLe: "2025-12-08",
  minutes: 14,
  theme: "droits citoyen",
  motsCles: [
    "droits citoyen",
    "devoirs citoyen",
    "droits fondamentaux",
    "vote france",
    "liberté expression",
    "payer impôts",
  ],
  rubrique: "thematiques",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=2070",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb",
  },
  blocs: [
    { type: "h2", texte: "Les droits civiques et politiques", id: "droits-civiques" },
    { type: "p", texte: "**Les droits civiques**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Droit de vote** : élire ses représentants (à partir de 18 ans)",
        "**Droit d'éligibilité** : se présenter aux élections",
        "**Droit d'accès aux emplois publics** : concours de la fonction publique",
        "**Droit de pétition** : adresser des demandes aux autorités",
        "**Droit de participer** : référendums, consultations citoyennes",
      ],
    },
    { type: "p", texte: "**Les conditions pour exercer ces droits**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Être de nationalité française",
        "Être majeur (18 ans)",
        "Jouir de ses droits civiques (pas de privation par justice)",
        "Être inscrit sur les listes électorales",
      ],
    },
    { type: "p", texte: "**Le vote**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Suffrage universel, direct ou indirect",
        "Scrutin secret",
        "Un citoyen = une voix",
        "Vote non obligatoire mais devoir civique",
      ],
    },
    { type: "h2", texte: "Les droits fondamentaux", id: "droits-fondamentaux" },
    { type: "p", texte: "**Libertés individuelles**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Liberté d'aller et venir",
        "Liberté de pensée et d'opinion",
        "Liberté de religion",
        "Liberté d'expression",
        "Droit à la vie privée",
        "Droit à l'image",
      ],
    },
    { type: "p", texte: "**Droits économiques et sociaux**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Droit au travail",
        "Droit à la protection sociale",
        "Droit à l'éducation (gratuite et obligatoire)",
        "Droit à la santé",
        "Droit au logement",
        "Droit de grève",
      ],
    },
    { type: "p", texte: "**Droits garantis par la justice**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Présomption d'innocence",
        "Droit à un procès équitable",
        "Droit à un avocat",
        "Interdiction de la torture",
        "Interdiction de la détention arbitraire",
      ],
    },
    { type: "p", texte: "**Protection contre les discriminations**" },
    { type: "p", texte: "La loi interdit toute discrimination fondée sur :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "L'origine, l'ethnie, la nationalité",
        "Le sexe, l'orientation sexuelle",
        "La religion, les opinions politiques",
        "Le handicap, l'état de santé",
        "L'âge, l'apparence physique",
      ],
    },
    { type: "h2", texte: "Les devoirs du citoyen", id: "devoirs-citoyen" },
    { type: "p", texte: "**Devoirs envers la nation**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Respecter les lois** : obligation fondamentale",
        "**Payer les impôts** : contribuer aux charges publiques",
        "**Participer à la défense** : Journée Défense et Citoyenneté (JDC)",
        "**Participer à la justice** : être juré si convoqué",
      ],
    },
    { type: "p", texte: "**Devoirs envers la société**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Respecter les droits et libertés d'autrui",
        "Contribuer à l'intérêt général",
        "Porter secours aux personnes en danger",
        "Signaler les crimes et délits graves",
      ],
    },
    { type: "p", texte: "**Devoirs civiques**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Participer à la vie démocratique (voter)",
        "S'informer sur la vie publique",
        "Respecter les symboles de la République",
      ],
    },
    { type: "p", texte: "**Le Contrat d'Intégration Républicaine (CIR)**" },
    { type: "p", texte: "Les étrangers signant le CIR s'engagent à :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Respecter les lois et valeurs de la République",
        "Suivre une formation civique et linguistique",
        "S'intégrer dans la société française",
      ],
    },
    { type: "h2", texte: "L'équilibre entre droits et devoirs", id: "equilibre-droits-devoirs" },
    { type: "p", texte: "**Le principe de réciprocité**" },
    { type: "p", texte: "Les droits n'existent pas sans les devoirs correspondants :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Liberté d'expression ↔ Devoir de ne pas diffamer",
        "Droit de propriété ↔ Devoir de payer des impôts",
        "Droit à la sécurité ↔ Devoir de respecter les lois",
        "Droit à l'éducation ↔ Devoir d'assiduité scolaire",
      ],
    },
    { type: "p", texte: "**Sanctions en cas de non-respect des devoirs**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Amendes pour infractions",
        "Peines de prison pour délits et crimes",
        "Privation des droits civiques",
        "Expulsion du territoire pour les étrangers en cas grave",
      ],
    },
    { type: "p", texte: "**Questions types du test civique**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "\"Citez un droit du citoyen français\"",
        "\"Citez un devoir du citoyen en France\"",
        "\"Quelles sont les conditions pour voter ?\"",
        "\"Que signifie l'égalité devant la loi ?\"",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Droits et devoirs forment les deux faces de la citoyenneté française. Les maîtriser est indispensable pour le test civique et pour participer pleinement à la vie de la nation. Préparez-vous sur Test Civique France.",
      ton: "bleu",
    },
  ],
  videos: [
    { id: "M6Jqed7F16I", titre: "Les droits et devoirs du citoyen français" },
  ],
  sources: [
    {
      titre: "Défenseur des droits - Vos droits",
      url: "https://www.defenseurdesdroits.fr/",
      type: "officiel",
      description: "Connaître et défendre vos droits fondamentaux",
    },
    {
      titre: "Vie publique - Les droits des citoyens",
      url: "https://www.vie-publique.fr/fiches/23846-quels-sont-les-droits-du-citoyen",
      type: "officiel",
      description: "Liste des droits civiques et politiques",
    },
    {
      titre: "Légifrance - Déclaration des droits de 1789",
      url: "https://www.legifrance.gouv.fr/contenu/menu/droit-national-en-vigueur/constitution/declaration-des-droits-de-l-homme-et-du-citoyen-de-1789",
      type: "juridique",
      description: "Texte fondateur des droits en France",
    },
  ],
};

export default article;
