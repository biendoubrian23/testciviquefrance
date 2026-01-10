/**
 * Constantes SEO centralisées pour Test Civique France
 * Toutes les informations SEO en un seul endroit pour faciliter la maintenance
 */

export const SEO_CONFIG = {
  siteName: 'Test Civique France',
  siteUrl: 'https://www.testciviquefrance.fr',
  defaultTitle: 'Test Civique France 2025 2026 - Préparation Examen Naturalisation & Titre de Séjour',
  defaultDescription: 'Préparez le test civique obligatoire 2025-2026 pour la naturalisation française, carte de séjour pluriannuelle et titre de séjour étudiant. 800+ questions QCM officielles. Taux de réussite 95%.',
  defaultImage: '/images/og-default.jpg',
  locale: 'fr_FR',
  twitterHandle: '@testciviquefr',
  author: 'Équipe Test Civique France',
  
  // Contact
  email: 'contact@testciviquefrance.fr',
  phone: '+33-1-XX-XX-XX-XX',
  
  // Social media
  social: {
    facebook: 'https://www.facebook.com/testciviquefrance',
    twitter: 'https://twitter.com/testciviquefr',
    linkedin: 'https://www.linkedin.com/company/testciviquefrance',
  },
  
  // Images
  logo: '/images/logo.png',
  logoWidth: 512,
  logoHeight: 512,
};

// Mots-clés principaux organisés par catégorie
export const PRIMARY_KEYWORDS = {
  main: [
    'test civique',
    'test civique france',
    'test civique français',
    'test civique 2025',
    'test civique 2026',
    'examen civique',
    'examen civique france',
    'examen civique naturalisation',
  ],
  
  // NOUVEAUX - CONCURRENTS DIRECTS
  competitors: [
    'le test civique',
    'letestcivique',
    'le-test-civique',
    'test-civique.fr',
    'mon examen civique',
    'monexamencivique',
    'prepacivique',
    'prépa civique',
    'civique-test',
    'quizzcivique',
    'quiz civique',
    'examen-civique.fr',
    'test civique officiel',
    'preparation-naturalisation',
    'france-naturalisation',
    'naturalisationfrancaise',
  ],
  
  // NOUVEAUX - SITES GOUVERNEMENTAUX
  governmental: [
    'service-public.fr naturalisation',
    'france-visas test civique',
    'ANEF naturalisation',
    'ANEF titre séjour',
    'OFII test civique',
    'OFII naturalisation',
    'office français immigration',
    'interieur.gouv.fr naturalisation',
    'immigration.interieur.gouv.fr',
    'demarches.interieur.gouv.fr',
    'demarches-simplifiees.fr naturalisation',
    'gouv.fr naturalisation',
    'gouv.fr test civique',
    'préfecture naturalisation',
    'préfecture titre séjour',
    'rendez-vous ANEF',
    'prise rendez-vous naturalisation',
  ],
  
  naturalisation: [
    'naturalisation française',
    'naturalisation france 2025',
    'devenir français',
    'devenir citoyen français',
    'obtenir nationalité française',
    'demande naturalisation',
    'dossier naturalisation 2025',
  ],
  titresSejour: [
    'titre de séjour',
    'carte de séjour',
    'carte de séjour pluriannuelle',
    'carte de résident',
    'renouvellement titre séjour',
  ],
  etudiants: [
    'titre séjour étudiant',
    'visa étudiant france',
    'carte séjour étudiant',
    'étudiant étranger france',
  ],
  loiImmigration: [
    'loi immigration 2024',
    'loi immigration 2025',
    'nouvelle loi immigration france',
    'décret 2025-647',
    'CESEDA',
  ],
};

// Questions fréquentes pour rich snippets
export const FAQ_RICH_SNIPPETS = [
  {
    question: "Qu'est-ce que le test civique français ?",
    answer: "Le test civique est un examen QCM de 40 questions obligatoire pour la naturalisation française et certains titres de séjour, instauré par le Décret n°2025-647. Il faut obtenir 80% (32/40) pour réussir.",
  },
  {
    question: "Combien coûte le test civique ?",
    answer: "Le test civique officiel coûte environ 50€. La préparation sur Test Civique France est gratuite pour les cours, avec des options payantes pour les examens blancs.",
  },
  {
    question: "Où passer le test civique en France ?",
    answer: "Le test civique se passe dans des centres agréés répartis dans toute la France. Consultez notre liste des centres pour trouver celui le plus proche de chez vous.",
  },
  {
    question: "Quel est le taux de réussite au test civique ?",
    answer: "Avec une bonne préparation, le taux de réussite est d'environ 95%. Sur Test Civique France, nos utilisateurs atteignent ce taux grâce à nos 800+ questions d'entraînement.",
  },
];

// Articles SEO à créer - mots-clés à fort volume
export const SEO_ARTICLE_TOPICS = [
  {
    slug: 'comment-reussir-test-civique-premier-coup',
    title: "Comment réussir le test civique du premier coup : Guide complet 2025",
    keywords: ['réussir test civique', 'astuces test civique', 'préparation test civique'],
    volume: 8200,
    priority: 'high',
  },
  {
    slug: 'questions-frequentes-test-civique',
    title: "100 questions les plus fréquentes au test civique 2025-2026",
    keywords: ['questions test civique', 'QCM test civique', 'exemples questions'],
    volume: 12000,
    priority: 'high',
  },
  {
    slug: 'naturalisation-francaise-conditions-2025',
    title: "Naturalisation française 2025 : conditions, délais et démarches complètes",
    keywords: ['naturalisation française', 'devenir français', 'conditions naturalisation'],
    volume: 22000,
    priority: 'high',
  },
  {
    slug: 'carte-sejour-pluriannuelle-guide-complet',
    title: "Carte de séjour pluriannuelle : guide complet des démarches 2025",
    keywords: ['carte séjour pluriannuelle', 'titre séjour 4 ans', 'renouvellement'],
    volume: 14000,
    priority: 'high',
  },
  {
    slug: 'carte-resident-10-ans-obtention',
    title: "Carte de résident 10 ans : comment l'obtenir en 2025",
    keywords: ['carte résident', 'titre séjour 10 ans', 'carte resident france'],
    volume: 9500,
    priority: 'high',
  },
  {
    slug: 'titre-sejour-etudiant-france',
    title: "Titre de séjour étudiant en France : guide complet 2025",
    keywords: ['titre séjour étudiant', 'visa étudiant', 'étudiant étranger france'],
    volume: 18000,
    priority: 'high',
  },
  {
    slug: 'regroupement-familial-france-2025',
    title: "Regroupement familial en France 2025 : procédure et conditions",
    keywords: ['regroupement familial', 'visa famille', 'rejoindre conjoint france'],
    volume: 11000,
    priority: 'high',
  },
  {
    slug: 'valeurs-republique-francaise',
    title: "Les valeurs de la République française : liberté, égalité, fraternité",
    keywords: ['valeurs république', 'devise française', 'liberté égalité fraternité'],
    volume: 6800,
    priority: 'medium',
  },
  {
    slug: 'symboles-france-marianne-coq',
    title: "Les symboles de la France : Marianne, le coq, le drapeau tricolore",
    keywords: ['symboles france', 'marianne', 'drapeau français', 'coq gaulois'],
    volume: 7200,
    priority: 'medium',
  },
  {
    slug: 'institutions-francaises-explication',
    title: "Les institutions françaises expliquées simplement : guide 2025",
    keywords: ['institutions françaises', 'président république', 'assemblée nationale'],
    volume: 8500,
    priority: 'medium',
  },
  {
    slug: 'histoire-france-dates-importantes',
    title: "Histoire de France : les 50 dates importantes à connaître",
    keywords: ['histoire france', 'dates importantes', 'révolution française'],
    volume: 15000,
    priority: 'medium',
  },
  {
    slug: 'laicite-france-definition-principes',
    title: "La laïcité en France : définition, principes et lois",
    keywords: ['laïcité france', 'loi 1905', 'séparation église état'],
    volume: 9200,
    priority: 'medium',
  },
  {
    slug: 'droits-devoirs-citoyens-france',
    title: "Droits et devoirs des citoyens en France : guide complet",
    keywords: ['droits citoyens', 'devoirs citoyens', 'droits fondamentaux'],
    volume: 5400,
    priority: 'medium',
  },
  {
    slug: 'systeme-sante-france-etranger',
    title: "Le système de santé français pour les étrangers : tout comprendre",
    keywords: ['sécurité sociale étranger', 'santé france', 'AME CMU'],
    volume: 7800,
    priority: 'medium',
  },
  {
    slug: 'travailler-france-etranger-droits',
    title: "Travailler en France en tant qu'étranger : droits et démarches",
    keywords: ['travailler france étranger', 'autorisation travail', 'permis travail'],
    volume: 12500,
    priority: 'high',
  },
];
