import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-part4.ts` (contenu jamais publié : aucune fiche dans `seo-articles.ts`, adresse en 404 au 20/10/2026), sans changer d'adresse
 * (`/articles/laicite-france-principe-loi-1905`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "laicite-france-principe-loi-1905",
  titre: "laicite-france-principe-loi-1905",
  titreSeo: "laicite-france-principe-loi-1905",
  resume: "La laïcité est un principe fondamental de la République française. Elle garantit la liberté de conscience et la séparation des religions et de l'État.",
  chapo: "La laïcité est un principe fondamental de la République française. Elle garantit la liberté de conscience et la séparation des religions et de l'État. Comprendre la laïcité est essentiel pour le test civique et pour vivre ensemble en France.",
  publieLe: "2026-10-20",
  modifieLe: "2026-10-20",
  minutes: 8,
  theme: "laïcité france",
  motsCles: [
    "laïcité france",
    "loi 1905",
    "séparation église état",
    "liberté conscience",
    "neutralité état",
    "signes religieux école",
  ],
  rubrique: "thematiques",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
  },
  blocs: [
    { type: "h2", texte: "Définition et histoire de la laïcité", id: "definition-histoire" },
    { type: "p", texte: "**Qu'est-ce que la laïcité ?**" },
    {
      type: "p",
      texte: "La laïcité est le principe qui organise la séparation entre l'État et les religions. Elle repose sur trois piliers :",
    },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**La liberté de conscience** : chacun peut croire ou ne pas croire",
        "**L'égalité des citoyens** : quelle que soit leur religion",
        "**La neutralité de l'État** : l'État ne favorise aucune religion",
      ],
    },
    { type: "p", texte: "**Histoire de la laïcité en France**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "1789 : La Révolution proclame la liberté de conscience",
        "1801 : Concordat de Napoléon avec l'Église catholique",
        "1882 : Lois Jules Ferry - école laïque",
        "**1905 : Loi de séparation des Églises et de l'État**",
        "2004 : Loi sur les signes religieux à l'école",
        "2021 : Loi confortant le respect des principes de la République",
      ],
    },
    { type: "p", texte: "**La loi du 9 décembre 1905**" },
    { type: "p", texte: "Cette loi fondatrice proclame :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Article 1 : \"La République assure la liberté de conscience. Elle garantit le libre exercice des cultes.\"",
        "Article 2 : \"La République ne reconnaît, ne salarie ni ne subventionne aucun culte.\"",
      ],
    },
    { type: "h2", texte: "La laïcité au quotidien", id: "application-quotidienne" },
    { type: "p", texte: "**Dans les services publics**" },
    { type: "p", texte: "Les agents de l'État (fonctionnaires, enseignants, policiers...) doivent :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Respecter une stricte neutralité",
        "Ne pas manifester leurs opinions religieuses",
        "Traiter tous les usagers de manière égale",
      ],
    },
    { type: "p", texte: "Les usagers des services publics :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Peuvent porter des signes religieux (sauf cas particuliers)",
        "Doivent accepter d'être servis par n'importe quel agent",
        "Ne peuvent imposer leurs convictions",
      ],
    },
    { type: "p", texte: "**À l'école publique**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les élèves ne peuvent porter de signes religieux \"ostensibles\" (loi 2004)",
        "Signes interdits : voile, kippa, grande croix",
        "Signes discrets autorisés : petite croix, main de Fatma discrète",
        "Les accompagnateurs scolaires peuvent porter des signes religieux",
      ],
    },
    { type: "p", texte: "**Dans l'espace public**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Chacun peut pratiquer sa religion librement",
        "La loi de 2010 interdit la dissimulation du visage (niqab, burqa)",
        "Les processions religieuses sont autorisées avec déclaration",
        "Les fêtes religieuses peuvent être célébrées",
      ],
    },
    { type: "h2", texte: "Liberté de religion et ses limites", id: "liberte-religion" },
    { type: "p", texte: "**Ce que la laïcité garantit**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le droit de croire en un dieu, plusieurs, ou aucun",
        "Le droit de pratiquer sa religion",
        "Le droit de changer de religion",
        "Le droit de ne pas avoir de religion (athéisme, agnosticisme)",
        "Le droit de construire des lieux de culte",
      ],
    },
    { type: "p", texte: "**Les limites de la liberté religieuse**" },
    { type: "p", texte: "La liberté de religion s'arrête où commencent :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les lois de la République (pas de polygamie, pas d'excision...)",
        "Les droits d'autrui (pas de prosélytisme agressif)",
        "L'ordre public (pas de troubles à la paix publique)",
        "La dignité humaine",
      ],
    },
    { type: "p", texte: "**La neutralité de l'État**" },
    { type: "p", texte: "L'État laïque :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Ne favorise aucune religion",
        "Ne finance pas les cultes (sauf Alsace-Moselle, régime particulier)",
        "N'intervient pas dans l'organisation des religions",
        "Garantit l'égalité de traitement à tous",
      ],
    },
    { type: "h2", texte: "Laïcité et intégration", id: "laicite-integration" },
    { type: "p", texte: "**La laïcité, facteur d'intégration**" },
    {
      type: "p",
      texte: "La laïcité permet à des personnes de toutes origines et religions de vivre ensemble. Elle crée un espace commun où :",
    },
    {
      type: "liste",
      style: "puces",
      items: [
        "Chacun peut garder ses convictions personnelles",
        "Les relations se font sur une base citoyenne",
        "Les différences religieuses n'empêchent pas la vie commune",
      ],
    },
    { type: "p", texte: "**La Charte de la laïcité à l'école**" },
    { type: "p", texte: "Affichée dans toutes les écoles depuis 2013, elle rappelle :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "La laïcité permet l'exercice de la citoyenneté",
        "Elle protège de tout prosélytisme",
        "Elle implique le rejet des violences et discriminations",
        "Elle garantit l'égalité filles-garçons",
      ],
    },
    { type: "p", texte: "**Questions du test civique sur la laïcité**" },
    { type: "p", texte: "Les questions portent souvent sur :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "La définition de la laïcité",
        "La loi de 1905",
        "Les signes religieux à l'école",
        "La neutralité des agents publics",
        "La liberté de conscience",
      ],
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La laïcité est un sujet majeur du test civique. Elle incarne l'équilibre français entre liberté de religion et neutralité de l'État. Préparez-vous efficacement sur Test Civique France.",
      ton: "bleu",
    },
  ],
  videos: [
    { id: "faTI6V7m5Tk", titre: "La laïcité en France expliquée simplement" },
  ],
  sources: [
    {
      titre: "Gouvernement - Comprendre la laïcité",
      url: "https://www.gouvernement.fr/laicite-et-liberte-de-conscience",
      type: "officiel",
      description: "Ressources officielles sur le principe de laïcité",
    },
    {
      titre: "Légifrance - Loi du 9 décembre 1905",
      url: "https://www.legifrance.gouv.fr/loda/id/LEGITEXT000006069570",
      type: "juridique",
      description: "Texte intégral de la loi de séparation",
    },
    {
      titre: "Éducation nationale - Charte de la laïcité",
      url: "https://www.education.gouv.fr/la-laicite-a-l-ecole-12482",
      type: "officiel",
      description: "La laïcité dans les établissements scolaires",
    },
  ],
  aLireAussi: [
    {
      slug: "valeurs-republique-francaise-liberte-egalite-fraternite",
      ancre: "Liberté, égalité, fraternité",
    },
    {
      slug: "contrat-integration-republicaine-cir-2026-formation-civique",
      ancre: "La formation civique du CIR",
    },
    {
      slug: "contrat-engagement-republicain-2026-obligations-formation-civique",
      ancre: "Le Contrat d'Engagement Républicain",
    },
    {
      slug: "institutions-francaises-president-assemblee-senat",
      ancre: "Les institutions garantes de la laïcité",
    },
  ],
};

export default article;
