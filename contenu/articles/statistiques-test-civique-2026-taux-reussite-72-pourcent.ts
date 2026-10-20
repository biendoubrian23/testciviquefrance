import type { Article } from "@/contenu/articles";

/**
 * Migré le 20/10/2026 depuis `lib/data/seo-content/articles-actualites-avril-2026.ts` et `lib/data/seo-articles.ts`, sans changer d'adresse
 * (`/articles/statistiques-test-civique-2026-taux-reussite-72-pourcent`). Texte d'origine conservé ; seuls les tirets
 * cadratins ont été remplacés. L'image de couverture vient d'Unsplash
 * (licence Unsplash : usage libre, commercial compris) ; ses dimensions sont
 * nominales.
 */
const article: Article = {
  slug: "statistiques-test-civique-2026-taux-reussite-72-pourcent",
  titre: "Statistiques test civique 2026 : 72 % de réussite, en hausse de 5 points par rapport à 2025",
  titreSeo: "Statistiques test civique 2026 : 72 % de réussite, en hausse de 5 points par rapport à 2025",
  resume: "23 400 candidats au T1 2026, taux de réussite en hausse à 72 %. Analyse par région, thématiques les mieux maîtrisées et perspectives pour le reste de l'année.",
  chapo: "Le taux de réussite au test civique atteint 72 % au premier trimestre 2026, en hausse de 5 points par rapport au T4 2025. Sur 23 400 candidats, 16 850 ont réussi dès la première tentative. Analyse complète par région, thématique et facteurs explicatifs.",
  publieLe: "2026-04-01",
  modifieLe: "2026-04-01",
  minutes: 7,
  theme: "statistiques test civique 2026",
  motsCles: [
    "statistiques test civique 2026",
    "taux réussite test civique",
    "résultats test civique",
    "test civique 2026 chiffres",
    "réussite examen civique",
  ],
  rubrique: "actualites",
  auteur: "Brian B",
  couverture: {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    alt: "",
    largeur: 1200,
    hauteur: 800,
    credit: "Unsplash",
    licence: "licence Unsplash",
    source: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  blocs: [
    { type: "h2", texte: "Un taux de réussite en nette progression", id: "taux-progression" },
    {
      type: "p",
      texte: "Selon les chiffres publiés par le ministère de l'Intérieur le 28 mars 2026, le **taux de réussite au test civique s'établit à 72 % au premier trimestre 2026**, contre 67 % au dernier trimestre 2025. Cette hausse de 5 points s'explique par plusieurs facteurs convergents.",
    },
    {
      type: "p",
      texte: "Au total, **23 400 candidats ont passé le test** entre janvier et mars 2026, dont 16 850 l'ont réussi dès la première tentative.",
    },
    { type: "h2", texte: "Les chiffres clés par région", id: "chiffres-regions" },
    { type: "p", texte: "Les écarts régionaux restent significatifs :" },
    {
      type: "tableau",
      entetes: ["Région", "Candidats", "Taux de réussite"],
      lignes: [
        ["Île-de-France", "7 200", "69 %"],
        ["Auvergne-Rhône-Alpes", "3 100", "75 %"],
        ["Provence-Alpes-Côte d'Azur", "2 800", "71 %"],
        ["Occitanie", "2 100", "74 %"],
        ["Hauts-de-France", "1 900", "70 %"],
        ["Grand Est", "1 600", "73 %"],
        ["Autres régions", "4 700", "76 %"],
      ],
    },
    {
      type: "p",
      texte: "L'Île-de-France reste légèrement en dessous de la moyenne nationale, en raison du volume de candidats et de la diversité des profils.",
    },
    { type: "h2", texte: "Les thématiques les mieux maîtrisées", id: "thematiques" },
    { type: "p", texte: "L'analyse par thématique révèle que les candidats excellent sur :" },
    {
      type: "liste",
      style: "numeros",
      items: [
        "**Symboles et devise de la République** : 89 % de bonnes réponses en moyenne",
        "**Institutions françaises** (Président, Assemblée, Sénat) : 78 %",
        "**Valeurs républicaines** (liberté, égalité, fraternité, laïcité) : 76 %",
      ],
    },
    { type: "p", texte: "En revanche, deux domaines concentrent l'essentiel des erreurs :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Histoire de France** (dates clés, événements) : 58 % seulement",
        "**Union européenne et géographie** : 62 %",
      ],
    },
    { type: "h2", texte: "Ce qui explique la hausse", id: "facteurs-hausse" },
    { type: "p", texte: "Trois facteurs principaux sont identifiés par les experts :" },
    {
      type: "liste",
      style: "puces",
      items: [
        "**Meilleure préparation en ligne.** Les plateformes de préparation au test civique (dont Test Civique France) ont vu leur fréquentation tripler depuis janvier 2026.",
        "**Contrat d'intégration républicaine renforcé.** La formation civique de 4 jours, obligatoire dans le cadre du CIR, intègre désormais des modules spécifiques au test.",
        "**Effet d'apprentissage.** Les candidats recalés au T4 2025 repassent avec une meilleure préparation.",
      ],
    },
    { type: "h2", texte: "Perspectives pour le reste de l'année", id: "perspectives" },
    {
      type: "p",
      texte: "Le ministère table sur un taux de réussite de **75 % d'ici fin 2026**. L'ouverture de 15 nouveaux centres en mai et la mise en place de sessions de rattrapage mensuelles devraient contribuer à cet objectif.",
    },
    {
      type: "p",
      texte: "Pour rejoindre les 72 % qui réussissent, entraînez-vous dès maintenant avec nos [examens blancs en conditions réelles](/dashboard/examens).",
    },
    {
      type: "encadre",
      titre: "À retenir",
      texte: "La tendance est clairement à la hausse. Avec une bonne préparation, les candidats mettent toutes les chances de leur côté. Les thématiques histoire et géographie méritent une attention particulière.",
      ton: "bleu",
    },
  ],
  faq: [
    {
      question: "Quel est le taux de réussite au test civique en 2026 ?",
      reponse: "Le taux de réussite s'établit à 72 % au premier trimestre 2026, en hausse de 5 points par rapport au dernier trimestre 2025.",
    },
    {
      question: "Combien de candidats ont passé le test civique ?",
      reponse: "Au premier trimestre 2026, 23 400 candidats ont passé le test civique, dont 16 850 l'ont réussi dès la première tentative.",
    },
  ],
  aLireAussi: [
    {
      slug: "premiers-resultats-test-civique-2026-taux-reussite-retours-experience",
      ancre: "Retours d'expérience des candidats",
    },
    { slug: "comment-reussir-test-civique-premier-coup", ancre: "Comment réussir le test civique" },
    { slug: "erreurs-frequentes-test-civique-2026-pieges-qcm", ancre: "Erreurs fréquentes au test" },
    {
      slug: "inscription-test-civique-2026-ou-quand-comment-sinscrire",
      ancre: "S'inscrire au test civique",
    },
  ],
};

export default article;
