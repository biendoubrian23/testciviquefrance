/**
 * Base de données des articles SEO
 * Fichier principal contenant tous les articles optimisés pour le référencement
 */

import { Article } from './articles';

// Nouveaux articles SEO avec mots-clés à fort volume de recherche
export const seoArticles: Article[] = [
  // NOUVEAU: Titres de Séjour
  {
    id: 'seo-new-1',
    slug: 'titres-de-sejour-france-guide-complet-2026',
    title: "Titres de séjour en France : le guide complet 2026",
    excerpt: "Tout sur les titres de séjour en 2026 : première demande, renouvellement, carte pluriannuelle et carte de résident 10 ans. Les nouvelles règles expliquées.",
    content: '',
    category: 'Cadre légal',
    categorySlug: 'cadre-legal',
    author: 'Équipe Le Test Civique',
    date: '29/01/2026',
    readTime: 20,
    views: 0,
    image: 'https://images.unsplash.com/photo-1569974498991-d3c12a504f95?q=80&w=2070',
    featured: true,
  },
  // NOUVEAU: Étudiants Étrangers
  {
    id: 'seo-new-2',
    slug: 'guide-etudiants-etrangers-france-titres-demarches-2026',
    title: "Étudiants étrangers en France : visas, titres et changement de statut 2026",
    excerpt: "Guide ultime pour étudiants étrangers : du visa étudiant au changement de statut salarié, en passant par la recherche d'emploi et l'APS. Démarches Campus France incluses.",
    content: '',
    category: 'Conseils pratiques',
    categorySlug: 'conseils',
    author: 'Équipe Le Test Civique',
    date: '28/01/2026',
    readTime: 18,
    views: 0,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070',
    featured: true,
  },
  // NOUVEAU: Travail en France
  {
    id: 'seo-new-3',
    slug: 'travailler-en-france-guide-permis-contrats-etrangers-2026',
    title: "Travailler en France : permis, contrats et droits des étrangers 2026",
    excerpt: "Comprendre le travail en France pour les étrangers : permis de travail, contrats CDI/CDD, droits du salarié et passeport talent. Tout ce qu'il faut savoir.",
    content: '',
    category: 'Conseils pratiques',
    categorySlug: 'conseils',
    author: 'Équipe Le Test Civique',
    date: '27/01/2026',
    readTime: 15,
    views: 0,
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070',
    featured: true,
  },
  // ARTICLE 1: Comment réussir le test civique
  {
    id: 'seo-1',
    slug: 'comment-reussir-test-civique-premier-coup',
    title: "Comment réussir le test civique du premier coup : Guide complet 2025",
    excerpt: "Découvrez les meilleures stratégies et astuces pour réussir votre test civique français dès la première tentative. Méthodes de révision, erreurs à éviter et conseils d'experts.",
    content: '',
    category: 'Préparation',
    categorySlug: 'preparation',
    author: 'Équipe Le Test Civique',
    date: '20/12/2025',
    readTime: 15,
    views: 0,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070',
    featured: true,
  },
  // ARTICLE 2: Questions fréquentes test civique
  {
    id: 'seo-2',
    slug: 'questions-frequentes-test-civique-2025',
    title: "100 questions les plus fréquentes au test civique 2025-2026",
    excerpt: "Liste complète des 100 questions qui reviennent le plus souvent au test civique. Préparez-vous efficacement avec les bonnes réponses et explications détaillées.",
    content: '',
    category: 'Préparation',
    categorySlug: 'preparation',
    author: 'Équipe Le Test Civique',
    date: '19/12/2025',
    readTime: 25,
    views: 0,
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070',
    featured: true,
  },
  // ARTICLE 3: Naturalisation française conditions
  {
    id: 'seo-3',
    slug: 'naturalisation-francaise-conditions-demarches-2025',
    title: "Naturalisation française 2025 : conditions, délais et démarches complètes",
    excerpt: "Tout savoir sur la naturalisation française en 2025 : conditions requises, documents à fournir, délais de traitement et procédure complète étape par étape.",
    content: '',
    category: 'Cadre légal',
    categorySlug: 'cadre-legal',
    author: 'Équipe Le Test Civique',
    date: '18/12/2025',
    readTime: 20,
    views: 0,
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070',
    featured: true,
  },
  // ARTICLE 4: Carte de séjour pluriannuelle
  {
    id: 'seo-4',
    slug: 'carte-sejour-pluriannuelle-guide-complet-2025',
    title: "Carte de séjour pluriannuelle : guide complet des démarches 2025",
    excerpt: "Guide détaillé pour obtenir votre carte de séjour pluriannuelle en France : conditions, documents, délais et nouvelle obligation du test civique depuis janvier 2026.",
    content: '',
    category: 'Cadre légal',
    categorySlug: 'cadre-legal',
    author: 'Équipe Le Test Civique',
    date: '17/12/2025',
    readTime: 18,
    views: 0,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070',
    featured: false,
  },
  // ARTICLE 5: Carte de résident 10 ans
  {
    id: 'seo-5',
    slug: 'carte-resident-10-ans-obtention-2025',
    title: "Carte de résident 10 ans : comment l'obtenir en 2025",
    excerpt: "Procédure complète pour obtenir la carte de résident de 10 ans en France : conditions d'éligibilité, justificatifs requis et nouvelle réforme 2025.",
    content: '',
    category: 'Cadre légal',
    categorySlug: 'cadre-legal',
    author: 'Équipe Le Test Civique',
    date: '16/12/2025',
    readTime: 16,
    views: 0,
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070',
    featured: false,
  },
  // ARTICLE 6: Titre de séjour étudiant
  {
    id: 'seo-6',
    slug: 'titre-sejour-etudiant-france-guide-2025',
    title: "Titre de séjour étudiant en France : guide complet 2025",
    excerpt: "Tout savoir sur le titre de séjour étudiant : démarches Campus France, renouvellement, changement de statut et impact du test civique pour les étudiants étrangers.",
    content: '',
    category: 'Cadre légal',
    categorySlug: 'cadre-legal',
    author: 'Équipe Le Test Civique',
    date: '15/12/2025',
    readTime: 17,
    views: 0,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070',
    featured: true,
  },
  // ARTICLE 7: Regroupement familial
  {
    id: 'seo-7',
    slug: 'regroupement-familial-france-procedure-2025',
    title: "Regroupement familial en France 2025 : procédure et conditions",
    excerpt: "Guide complet du regroupement familial : conditions de ressources et logement, délais de traitement, documents requis et nouvelle réglementation 2025.",
    content: '',
    category: 'Cadre légal',
    categorySlug: 'cadre-legal',
    author: 'Équipe Le Test Civique',
    date: '14/12/2025',
    readTime: 19,
    views: 0,
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070',
    featured: false,
  },
  // ARTICLE 8: Valeurs de la République
  {
    id: 'seo-8',
    slug: 'valeurs-republique-francaise-liberte-egalite-fraternite',
    title: "Les valeurs de la République française : liberté, égalité, fraternité",
    excerpt: "Comprendre les fondements de la République française : signification de la devise, principes républicains, histoire et application au quotidien. Essentiel pour le test civique.",
    content: '',
    category: 'Thématiques officielles',
    categorySlug: 'thematiques',
    author: 'Équipe Le Test Civique',
    date: '13/12/2025',
    readTime: 14,
    views: 0,
    image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070',
    featured: false,
  },
  // ARTICLE 9: Symboles de la France
  {
    id: 'seo-9',
    slug: 'symboles-france-marianne-coq-drapeau-tricolore',
    title: "Les symboles de la France : Marianne, le coq, le drapeau tricolore",
    excerpt: "Découvrez tous les symboles officiels de la France : Marianne, le coq gaulois, le drapeau bleu-blanc-rouge, la Marseillaise, le 14 juillet. Fiche de révision complète.",
    content: '',
    category: 'Thématiques officielles',
    categorySlug: 'thematiques',
    author: 'Équipe Le Test Civique',
    date: '12/12/2025',
    readTime: 12,
    views: 0,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073',
    featured: false,
  },
  // ARTICLE 10: Institutions françaises
  {
    id: 'seo-10',
    slug: 'institutions-francaises-president-assemblee-senat',
    title: "Les institutions françaises expliquées simplement : guide 2025",
    excerpt: "Comprendre les institutions de la Ve République : rôle du Président, Assemblée nationale, Sénat, Gouvernement, Conseil constitutionnel. Fiches synthétiques pour le test civique.",
    content: '',
    category: 'Thématiques officielles',
    categorySlug: 'thematiques',
    author: 'Équipe Le Test Civique',
    date: '11/12/2025',
    readTime: 16,
    views: 0,
    image: 'https://images.unsplash.com/photo-1555116505-38ab61800975?q=80&w=2070',
    featured: true,
  },
  // ARTICLE 11: Histoire de France dates importantes
  {
    id: 'seo-11',
    slug: 'histoire-france-50-dates-importantes',
    title: "Histoire de France : les 50 dates importantes à connaître",
    excerpt: "Les 50 dates clés de l'histoire de France à maîtriser pour le test civique : de la Révolution française à nos jours. Chronologie illustrée et moyens mnémotechniques.",
    content: '',
    category: 'Thématiques officielles',
    categorySlug: 'thematiques',
    author: 'Équipe Le Test Civique',
    date: '10/12/2025',
    readTime: 22,
    views: 0,
    image: 'https://images.unsplash.com/photo-1461360228754-6e81c478b882?q=80&w=2074',
    featured: true,
  },
  // ARTICLE 12: Laïcité en France
  {
    id: 'seo-12',
    slug: 'laicite-france-definition-principes-loi-1905',
    title: "La laïcité en France : définition, principes et lois",
    excerpt: "Tout comprendre sur la laïcité française : la loi de 1905, la séparation de l'Église et de l'État, application dans les services publics et l'école. Questions fréquentes au test civique.",
    content: '',
    category: 'Thématiques officielles',
    categorySlug: 'thematiques',
    author: 'Équipe Le Test Civique',
    date: '09/12/2025',
    readTime: 15,
    views: 0,
    image: 'https://images.unsplash.com/photo-1548625361-1adbed7b2f92?q=80&w=2070',
    featured: false,
  },
  // ARTICLE 13: Droits et devoirs des citoyens
  {
    id: 'seo-13',
    slug: 'droits-devoirs-citoyens-france-guide',
    title: "Droits et devoirs des citoyens en France : guide complet",
    excerpt: "Les droits fondamentaux et les devoirs civiques en France : droit de vote, liberté d'expression, obligation fiscale, service national. Thématique majeure du test civique.",
    content: '',
    category: 'Thématiques officielles',
    categorySlug: 'thematiques',
    author: 'Équipe Le Test Civique',
    date: '08/12/2025',
    readTime: 14,
    views: 0,
    image: 'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?q=80&w=2070',
    featured: false,
  },
  // ARTICLE 14: Système de santé pour étrangers
  {
    id: 'seo-14',
    slug: 'systeme-sante-france-etranger-securite-sociale',
    title: "Le système de santé français pour les étrangers : tout comprendre",
    excerpt: "Guide complet sur l'accès aux soins en France pour les étrangers : sécurité sociale, mutuelle, AME, CMU-C. Droits et démarches selon votre situation administrative.",
    content: '',
    category: 'Conseils pratiques',
    categorySlug: 'conseils',
    author: 'Équipe Le Test Civique',
    date: '07/12/2025',
    readTime: 16,
    views: 0,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2070',
    featured: false,
  },
  // ARTICLE 15: Travailler en France en tant qu'étranger
  {
    id: 'seo-15',
    slug: 'travailler-france-etranger-autorisation-droits',
    title: "Travailler en France en tant qu'étranger : droits et démarches",
    excerpt: "Tout savoir sur le travail en France pour les étrangers : autorisation de travail, titre de séjour salarié, droits du travailleur étranger et démarches Pôle Emploi.",
    content: '',
    category: 'Conseils pratiques',
    categorySlug: 'conseils',
    author: 'Équipe Le Test Civique',
    date: '06/12/2025',
    readTime: 18,
    views: 0,
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070',
    featured: false,
  },
  // ARTICLE 16: Géographie de la France
  {
    id: 'seo-16',
    slug: 'geographie-france-regions-departements-villes',
    title: "Géographie de la France : régions, départements et grandes villes",
    excerpt: "Maîtrisez la géographie française pour le test civique : les 13 régions métropolitaines, les départements, les grandes villes et les territoires d'outre-mer.",
    content: '',
    category: 'Thématiques officielles',
    categorySlug: 'thematiques',
    author: 'Équipe Le Test Civique',
    date: '05/12/2025',
    readTime: 14,
    views: 0,
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020',
    featured: false,
  },
  // ARTICLE 17: Culture française patrimoine
  {
    id: 'seo-17',
    slug: 'culture-francaise-patrimoine-monuments-artistes',
    title: "La culture française : patrimoine, monuments et artistes célèbres",
    excerpt: "Découvrez le patrimoine culturel français : monuments historiques, musées, artistes, écrivains et musiciens célèbres. Thématique essentielle du test civique.",
    content: '',
    category: 'Thématiques officielles',
    categorySlug: 'thematiques',
    author: 'Équipe Le Test Civique',
    date: '04/12/2025',
    readTime: 15,
    views: 0,
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020',
    featured: false,
  },
  // ARTICLE 18: Union européenne France
  {
    id: 'seo-18',
    slug: 'union-europeenne-france-institutions-citoyennete',
    title: "La France et l'Union européenne : institutions et citoyenneté européenne",
    excerpt: "Comprendre le rôle de la France dans l'UE : institutions européennes, citoyenneté européenne, droits des citoyens européens. Questions fréquentes au test civique.",
    content: '',
    category: 'Thématiques officielles',
    categorySlug: 'thematiques',
    author: 'Équipe Le Test Civique',
    date: '03/12/2025',
    readTime: 13,
    views: 0,
    image: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?q=80&w=2096',
    featured: false,
  },
];

/**
 * Récupère tous les articles (existants + SEO)
 */
export function getAllArticlesWithSEO(existingArticles: Article[]): Article[] {
  return [...existingArticles, ...seoArticles];
}

/**
 * Récupère un article SEO par son slug
 */
export function getSEOArticleBySlug(slug: string): Article | undefined {
  return seoArticles.find((article) => article.slug === slug);
}

/**
 * Récupère les articles les plus populaires incluant les articles SEO
 */
export function getPopularArticlesWithSEO(articles: Article[], limit: number = 5): Article[] {
  return [...articles, ...seoArticles]
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}

/**
 * Récupère les articles par catégorie incluant les articles SEO
 */
export function getArticlesByCategoryWithSEO(
  articles: Article[],
  categorySlug: string
): Article[] {
  const allArticles = [...articles, ...seoArticles];
  if (categorySlug === 'tous') return allArticles;
  return allArticles.filter((article) => article.categorySlug === categorySlug);
}
