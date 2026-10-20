import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-part3.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/valeurs-republique-francaise-liberte-egalite-fraternite`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "valeurs-republique-francaise-liberte-egalite-fraternite",
  titre: "Les valeurs de la République française : liberté, égalité, fraternité",
  titreSeo: "Les valeurs de la République française : liberté, égalité, fraternité",
  resume: "Comprendre les fondements de la République française : signification de la devise, principes républicains, histoire et application au quotidien. Essentiel pour le test civique.",
  chapo: "Les valeurs de la République française - Liberté, Égalité, Fraternité - constituent le socle de notre vie démocratique. Comprendre ces valeurs est essentiel pour réussir le test civique et pour s'intégrer pleinement dans la société française.",
  publieLe: "2025-12-13",
  modifieLe: "2025-12-13",
  minutes: 14,
  theme: "valeurs République",
  motsCles: [
    "valeurs République",
    "liberté égalité fraternité",
    "laïcité france",
    "démocratie française",
    "droits homme citoyen",
    "devise république",
  ],
  rubrique: "thematiques",
  auteur: "Équipe Le Test Civique",
  couverture: {
    src: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1478720568477-152d9b164e26",
  },
  blocs: [
    {
      type: "h2",
      texte: "La devise de la République : Liberté, Égalité, Fraternité",
      id: "devise-republicaine",
    },
    { type: "p", texte: "**Origine historique**" },
    {
      type: "p",
      texte: "La devise \"Liberté, Égalité, Fraternité\" naît pendant la Révolution française de 1789. Elle devient la devise officielle de la République en 1848 et est inscrite dans la Constitution de 1958.",
    },
    { type: "p", texte: "**Les trois valeurs fondamentales**" },
    { type: "p", texte: "**1. La Liberté**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Liberté individuelle : aller et venir, expression, opinion, religion",
        "Liberté d'entreprendre et de travailler",
        "Liberté de la presse et d'information",
        "Limites : la liberté des uns s'arrête où commence celle des autres",
      ],
    },
    { type: "p", texte: "**2. L'Égalité**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Égalité devant la loi (isonomie)",
        "Égalité des droits civiques et politiques",
        "Égalité femmes-hommes",
        "Égalité d'accès aux services publics",
        "Non-discrimination",
      ],
    },
    { type: "p", texte: "**3. La Fraternité**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Solidarité entre citoyens",
        "Protection sociale (Sécurité sociale)",
        "Aide aux plus vulnérables",
        "Cohésion nationale",
      ],
    },
    { type: "h2", texte: "La laïcité : pilier de la République", id: "laicite" },
    { type: "p", texte: "**Définition de la laïcité**" },
    {
      type: "p",
      texte: "La laïcité est le principe de séparation des Églises et de l'État. Elle garantit la liberté de conscience et le libre exercice des cultes.",
    },
    { type: "p", texte: "**La loi du 9 décembre 1905**" },
    { type: "p", texte: "Cette loi fondatrice établit trois principes :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**La liberté de conscience** : chacun peut croire ou ne pas croire",
        "**La neutralité de l'État** : l'État ne favorise aucune religion",
        "**La séparation** : l'État ne finance aucun culte",
      ],
    },
    { type: "p", texte: "**La laïcité au quotidien**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Les agents publics doivent respecter une stricte neutralité",
        "Les élèves des écoles publiques ne peuvent porter de signes religieux ostensibles",
        "Les lieux publics peuvent accueillir des personnes de toutes religions",
        "Chacun peut pratiquer sa religion librement dans le respect des lois",
      ],
    },
    { type: "p", texte: "**Laïcité et intégration**" },
    {
      type: "p",
      texte: "La laïcité n'est pas contre les religions mais garantit leur coexistence pacifique. Elle permet à chaque citoyen de vivre sa foi tout en participant à la vie commune.",
    },
    { type: "h2", texte: "Démocratie et citoyenneté", id: "democratie-citoyennete" },
    { type: "p", texte: "**La France, une démocratie représentative**" },
    { type: "p", texte: "Le peuple exerce sa souveraineté par l'intermédiaire de représentants élus :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Le Président de la République (suffrage universel direct)",
        "Les députés (Assemblée nationale)",
        "Les sénateurs (suffrage indirect)",
        "Les conseillers municipaux, départementaux, régionaux",
      ],
    },
    { type: "p", texte: "**Les principes démocratiques**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Suffrage universel** : un citoyen = une voix",
        "**Séparation des pouvoirs** : exécutif, législatif, judiciaire",
        "**État de droit** : tous sont soumis à la loi",
        "**Pluralisme politique** : existence de plusieurs partis",
      ],
    },
    { type: "p", texte: "**Les devoirs du citoyen**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Respecter les lois",
        "Payer les impôts",
        "Participer à la défense nationale si nécessaire",
        "Voter (droit et devoir civique)",
        "Respecter les autres et leur liberté",
      ],
    },
    { type: "p", texte: "**Les droits du citoyen**" },
    {
      type: "liste",
      style: "puces",
      items: [
        "Droit de vote et d'éligibilité",
        "Accès aux emplois publics",
        "Protection consulaire à l'étranger",
        "Participation aux décisions publiques",
      ],
    },
    { type: "h2", texte: "La Déclaration des Droits de l'Homme et du Citoyen", id: "droits-homme" },
    { type: "p", texte: "**Un texte fondateur (26 août 1789)**" },
    {
      type: "p",
      texte: "La Déclaration des Droits de l'Homme et du Citoyen (DDHC) est adoptée au début de la Révolution française. Elle inspire toutes les constitutions françaises.",
    },
    { type: "p", texte: "**Les droits naturels et imprescriptibles**" },
    { type: "p", texte: "L'article 2 énonce quatre droits fondamentaux :" },
    {
      type: "liste",
      style: "puces",
      items: ["La liberté", "La propriété", "La sûreté", "La résistance à l'oppression"],
    },
    { type: "p", texte: "**Articles essentiels pour le test civique**" },
    {
      type: "p",
      texte: "*Article 1* : \"Les hommes naissent et demeurent libres et égaux en droits.\"",
    },
    {
      type: "p",
      texte: "*Article 4* : \"La liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui.\"",
    },
    { type: "p", texte: "*Article 6* : \"La loi est l'expression de la volonté générale.\"" },
    {
      type: "p",
      texte: "*Article 11* : \"La libre communication des pensées et des opinions est un des droits les plus précieux de l'homme.\"",
    },
    { type: "p", texte: "**Valeur juridique actuelle**" },
    {
      type: "p",
      texte: "La DDHC fait partie du \"bloc de constitutionnalité\". Elle a la même valeur que la Constitution et s'impose à toutes les lois.",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "Les valeurs de la République française forment le ciment de notre société. Liberté, Égalité, Fraternité, laïcité et droits de l'Homme sont des sujets centraux du test civique. Préparez-vous efficacement sur Test Civique France.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "La laïcité signifie-t-elle que la religion est interdite en France ?",
      reponse: "Non, la laïcité garantit au contraire la liberté de religion. Chacun peut pratiquer sa foi librement, dans le respect des lois.",
    },
    {
      question: "La devise Liberté, Égalité, Fraternité est-elle inscrite dans la Constitution ?",
      reponse: "Oui, la devise est inscrite à l'article 2 de la Constitution de 1958 : 'La devise de la République est Liberté, Égalité, Fraternité'.",
    },
  ],
  videos: [
    { id: "8dKBT22FrKk", titre: "Les valeurs de la République française expliquées" },
    { id: "faTI6V7m5Tk", titre: "Liberté, Égalité, Fraternité : comprendre la devise" },
  ],
  sources: [
    {
      titre: "Vie publique - Valeurs de la République",
      url: "https://www.vie-publique.fr/fiches/274852-quelles-sont-les-valeurs-de-la-republique",
      type: "officiel",
      description: "Explication détaillée des valeurs républicaines",
    },
    {
      titre: "Élysée - Les symboles de la République",
      url: "https://www.elysee.fr/la-presidence/les-symboles-de-la-republique-francaise",
      type: "officiel",
      description: "Présentation officielle des symboles nationaux",
    },
    {
      titre: "Légifrance - Constitution française",
      url: "https://www.legifrance.gouv.fr/loda/id/LEGITEXT000006071194",
      type: "juridique",
      description: "Texte intégral de la Constitution de 1958",
    },
  ],
  aLireAussi: [
    { slug: "institutions-francaises-president-assemblee-senat", ancre: "Les institutions françaises" },
    { slug: "droit-de-vote-elections-france-2026-guide-citoyen", ancre: "Le droit de vote en France" },
  ],
};

export default article;
