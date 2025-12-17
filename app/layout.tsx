import type { Metadata, Viewport } from 'next';
import './globals.css';
import { AuthProvider } from '@/contexts/AuthContext';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import { StructuredData, getOrganizationSchema, getWebSiteSchema } from '@/components/seo/StructuredData';
import AnnouncementBanner from '@/components/layout/AnnouncementBanner';



export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#2563EB' },
    { media: '(prefers-color-scheme: dark)', color: '#1D4ED8' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.testciviquefrance.fr'),
  title: {
    default: 'Test Civique France 2025 2026 - Préparation Examen Naturalisation & Titre de Séjour | Nouvelle Loi Immigration',
    template: '%s | Test Civique France - Examen Civique Naturalisation 2025 2026',
  },
  description: 'Préparez le test civique obligatoire 2025-2026 pour la naturalisation française, carte de séjour pluriannuelle et titre de séjour étudiant. Où passer le test civique ? Suis-je éligible ? 800+ questions QCM officielles conformes nouvelle loi immigration. Seuil 80% (32/40). Taux de réussite 95%. Gratuit.',
  keywords: [
    // Mots-clés principaux test civique
    'test civique',
    'test civique france',
    'test civique français',
    'test civique 2025',
    'examen civique',
    'examen civique france',
    'examen civique 2025',
    'test civique naturalisation',
    'examen civique naturalisation',
    'test civique gratuit',

    // NOUVELLE LOI IMMIGRATION 2024-2025
    'loi immigration 2024',
    'loi immigration 2025',
    'nouvelle loi immigration france',
    'réforme immigration france',
    'loi asile immigration',
    'loi pour contrôler immigration',
    'décret 2025-647',
    'CESEDA',
    'article R.413-12-1',
    'conditions naturalisation 2025',
    'nouvelles règles naturalisation',

    // NATURALISATION
    'naturalisation française',
    'naturalisation france 2025',
    'devenir français',
    'devenir citoyen français',
    'obtenir nationalité française',
    'demande naturalisation',
    'dossier naturalisation 2025',
    'nationalité française conditions',
    'procédure naturalisation',
    'délai naturalisation france',

    // TITRE DE SÉJOUR - CARTE DE SÉJOUR
    'titre de séjour',
    'titre de séjour france',
    'carte de séjour',
    'carte de séjour pluriannuelle',
    'carte de résident',
    'carte résident france',
    'renouvellement titre séjour',
    'renouvellement carte séjour 2025',
    'premier titre séjour france',
    'titre séjour 4 ans',
    'titre séjour 10 ans',
    'carte séjour vie privée familiale',

    // ÉTUDIANTS ÉTRANGERS
    'titre séjour étudiant',
    'visa étudiant france',
    'carte séjour étudiant',
    'étudiant étranger france',
    'renouvellement titre séjour étudiant',
    'changement statut étudiant salarié',
    'APS autorisation provisoire séjour',
    'passeport talent',
    'recherche emploi après études',
    'master france étranger',
    'doctorat france étranger',
    'campus france test civique',
    'études supérieures france étranger',

    // REGROUPEMENT FAMILIAL
    'regroupement familial france',
    'regroupement familial 2025',
    'visa conjoint français',
    'carte séjour conjoint',
    'titre séjour famille',

    // TRAVAIL ET IMMIGRATION
    'travail france étranger',
    'contrat travail étranger france',
    'permis travail france',
    'autorisation travail france',
    'salarié étranger france',

    // QUESTIONS ET PRÉPARATION
    'questions test civique',
    'questions examen civique',
    'QCM test civique',
    'QCM naturalisation',
    'révision test civique',
    'préparation test civique',
    'préparation examen civique',
    'entraînement test civique',
    's\'entraîner test civique',
    'exercices test civique',
    'annales test civique',
    'corrigé test civique',

    // THÉMATIQUES OFFICIELLES
    'valeurs république française',
    'principes républicains',
    'symboles république france',
    'institutions françaises',
    'système politique français',
    'droits et devoirs citoyen',
    'histoire de france',
    'géographie france',
    'culture française',
    'vie en société france',
    'laïcité france',
    'devise française liberté égalité fraternité',
    'Marianne symbole france',
    'drapeau français bleu blanc rouge',
    'hymne national Marseillaise',

    // ASPECTS PRATIQUES EXAMEN
    '40 questions test civique',
    '80 pourcent test civique',
    '32 bonnes réponses',
    'seuil réussite test civique',
    'durée test civique',
    'où passer test civique',
    'prix test civique',
    'inscription test civique',

    // EXAMENS BLANCS
    'session examen blanc test civique',
    'examen blanc test civique',
    'simulation test civique',
    'test blanc naturalisation',
    'entrainement gratuit test civique',

    // ===== TEST CIVIQUE PAR MOIS 2025 =====
    'test civique janvier 2025',
    'test civique février 2025',
    'test civique mars 2025',
    'test civique avril 2025',
    'test civique mai 2025',
    'test civique juin 2025',
    'test civique juillet 2025',
    'test civique août 2025',
    'test civique septembre 2025',
    'test civique octobre 2025',
    'test civique novembre 2025',
    'test civique décembre 2025',

    // ===== TEST CIVIQUE PAR MOIS 2026 =====
    'test civique 2026',
    'test civique janvier 2026',
    'test civique février 2026',
    'test civique mars 2026',
    'test civique avril 2026',
    'test civique mai 2026',
    'test civique juin 2026',
    'test civique juillet 2026',
    'test civique août 2026',
    'test civique septembre 2026',
    'test civique octobre 2026',
    'test civique novembre 2026',
    'test civique décembre 2026',

    // ===== EXAMEN CIVIQUE PAR MOIS 2025-2026 =====
    'examen civique 2026',
    'examen civique janvier 2026',
    'examen civique février 2026',
    'naturalisation 2026',
    'naturalisation janvier 2026',
    'naturalisation février 2026',

    // ===== QUESTIONS UTILISATEURS - OÙ PASSER =====
    'où passer le test civique',
    'où passer mon test civique',
    'où se passe le test civique',
    'lieu test civique',
    'centre examen test civique',
    'adresse test civique',
    'test civique près de chez moi',
    'test civique paris',
    'test civique lyon',
    'test civique marseille',
    'test civique toulouse',
    'test civique bordeaux',
    'test civique nantes',
    'test civique lille',
    'test civique strasbourg',

    // ===== QUESTIONS UTILISATEURS - ÉLIGIBILITÉ =====
    'suis-je éligible au test civique',
    'suis je eligible test civique',
    'qui doit passer le test civique',
    'qui est concerné par le test civique',
    'test civique obligatoire pour qui',
    'exemption test civique',
    'dispense test civique',
    'cas dispense test civique',
    'dois-je passer le test civique',
    'est-ce que je dois passer le test civique',

    // ===== QUESTIONS UTILISATEURS - COMMENT =====
    'comment s\'inscrire au test civique',
    'comment réviser le test civique',
    'comment se préparer au test civique',
    'comment réussir le test civique du premier coup',
    'comment avoir le test civique',
    'comment obtenir le test civique',
    'comment passer le test civique',

    // ===== QUESTIONS UTILISATEURS - QUAND =====
    'quand passer le test civique',
    'quand dois-je passer le test civique',
    'délai test civique',
    'date test civique',
    'prochaine session test civique',
    'calendrier test civique 2025',
    'calendrier test civique 2026',

    // ===== QUESTIONS UTILISATEURS - COMBIEN =====
    'combien coûte le test civique',
    'prix test civique 2025',
    'tarif test civique',
    'test civique gratuit ou payant',
    'coût inscription test civique',

    // ===== QUESTIONS UTILISATEURS - DIFFICULTÉ =====
    'le test civique est-il difficile',
    'test civique difficile',
    'test civique facile',
    'niveau difficulté test civique',
    'peut-on rater le test civique',
    'taux échec test civique',
    'pourcentage réussite test civique',

    // ===== QUESTIONS UTILISATEURS - EN CAS D\'ÉCHEC =====
    'que faire si on rate le test civique',
    'échec test civique que faire',
    'repasser le test civique',
    'combien de fois peut-on passer le test civique',
    'délai entre deux test civique',
    'rattrapage test civique',

    // ===== QUESTIONS UTILISATEURS - RÉSULTATS =====
    'résultat test civique',
    'quand reçoit-on les résultats test civique',
    'délai résultat test civique',
    'attestation réussite test civique',
    'certificat test civique',
    'validité test civique',
    'durée validité test civique',

    // ===== QUESTIONS UTILISATEURS - CONTENU =====
    'quelles questions au test civique',
    'que faut-il savoir pour le test civique',
    'sujets test civique',
    'thèmes test civique',
    'programme test civique',
    'révisions test civique',
    'fiches test civique',
    'cours test civique',

    // ===== PRÉPARATION SPÉCIFIQUE =====
    's\'entraîner au test civique en ligne',
    'test civique en ligne gratuit',
    'QCM test civique gratuit',
    'exercices test civique PDF',
    'annales test civique 2024',
    'annales test civique 2025',
    'corrigés test civique',
    'questions types test civique',

    // VARIANTES ET RECHERCHES LONGUE TRAÎNE
    'comment réussir test civique',
    'comment préparer test civique',
    'comment passer test civique',
    'quand passer test civique',
    'difficulté test civique',
    'taux réussite test civique',
    'résultats test civique',
    'attestation test civique',
    'certificat test civique',

    // PRÉFECTURE ET ADMINISTRATION
    'préfecture naturalisation',
    'rdv préfecture titre séjour',
    'documents naturalisation',
    'pièces justificatives naturalisation',
    'formulaire naturalisation',

    // ANGLAIS POUR RÉFÉRENCEMENT INTERNATIONAL
    'french citizenship test',
    'france citizenship exam',
    'civic test france',
    'integration test france',
    'french naturalization test',
    'residence permit france test',
  ],
  authors: [
    { name: 'Test Civique France' },
    { name: 'Le Test Civique', url: 'https://www.testciviquefrance.fr' },
  ],
  creator: 'Test Civique France',
  publisher: 'Test Civique France',
  category: 'Education',
  classification: 'Préparation examens civiques, naturalisation française, titre de séjour, immigration France',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.testciviquefrance.fr',
    title: 'Test Civique France 2025 - Préparation Examen Naturalisation & Titre de Séjour',
    description: 'Préparez le test civique 2025 pour la naturalisation, carte de séjour pluriannuelle, titre de séjour étudiant. 800+ questions QCM conformes nouvelle loi immigration. Gratuit.',
    siteName: 'Test Civique France',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Test Civique France - Préparation Examen Naturalisation et Titre de Séjour 2025',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Civique France 2025 - Naturalisation & Titre de Séjour',
    description: 'Préparation test civique obligatoire. 800+ questions, examens blancs. Conforme nouvelle loi immigration. Taux réussite 95%.',
    images: ['/twitter-image.png'],
    creator: '@testciviquefr',
    site: '@testciviquefr',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.testciviquefrance.fr',
    languages: {
      'fr-FR': 'https://www.testciviquefrance.fr',
    },
  },
  verification: {
    google: 'votre-code-verification-google',
    yandex: 'votre-code-yandex',
    other: {
      'msvalidate.01': 'votre-code-bing',
    },
  },
  other: {
    'geo.region': 'FR',
    'geo.placename': 'France',
    'og:locale:alternate': 'fr_FR',
    'article:author': 'Test Civique France',
    'article:publisher': 'https://www.testciviquefrance.fr',
    'revisit-after': '1 days',
    'rating': 'General',
    'distribution': 'Global',
    'language': 'French',
    'doc-type': 'Web Page',
    'doc-class': 'Published',
    'resource-type': 'document',
    // Meta tags additionnels pour SEO immigration et étudiants
    'subject': 'Test civique France, naturalisation française, titre de séjour, carte de séjour, immigration France, loi immigration 2024, étudiant étranger France',
    'abstract': 'Plateforme de préparation au test civique obligatoire pour la naturalisation française, la carte de séjour pluriannuelle et le titre de séjour. Conforme à la nouvelle loi immigration 2024-2025.',
    'topic': 'Immigration France, Naturalisation, Titre de séjour, Test civique, Examen civique, Carte de séjour pluriannuelle, Étudiant étranger',
    'summary': 'Test Civique France est la plateforme n°1 de préparation au test civique obligatoire. Préparation complète pour naturalisation, carte de séjour pluriannuelle (4 ans, 10 ans), titre de séjour étudiant, regroupement familial.',
  },
};

// JSON-LD Schema pour le SEO structuré - ULTRA OPTIMISÉ
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.testciviquefrance.fr/#website',
      url: 'https://www.testciviquefrance.fr',
      name: 'Test Civique France',
      description: 'Préparation au test civique obligatoire 2025 pour la naturalisation française, carte de séjour pluriannuelle et titre de séjour étudiant. Conforme nouvelle loi immigration.',
      publisher: {
        '@id': 'https://www.testciviquefrance.fr/#organization',
      },
      potentialAction: [
        {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://www.testciviquefrance.fr/articles?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      ],
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'Organization',
      '@id': 'https://www.testciviquefrance.fr/#organization',
      name: 'Test Civique France',
      alternateName: ['Le Test Civique', 'Test Civique FR', 'Examen Civique France', 'Test Naturalisation France'],
      url: 'https://www.testciviquefrance.fr',
      logo: {
        '@type': 'ImageObject',
        '@id': 'https://www.testciviquefrance.fr/#logo',
        url: 'https://www.testciviquefrance.fr/logo.png',
        contentUrl: 'https://www.testciviquefrance.fr/logo.png',
        width: 290,
        height: 88,
        caption: 'Test Civique France',
      },
      image: {
        '@id': 'https://www.testciviquefrance.fr/#logo',
      },
      sameAs: [
        'https://www.facebook.com/testciviquefrance',
        'https://twitter.com/testciviquefr',
        'https://www.linkedin.com/company/testciviquefrance',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['French', 'English'],
        email: 'contact@testciviquefrance.fr',
      },
    },
    {
      '@type': 'EducationalOrganization',
      '@id': 'https://www.testciviquefrance.fr/#educationalorg',
      name: 'Test Civique France',
      description: 'Plateforme de préparation au test civique pour la naturalisation française, la carte de séjour pluriannuelle et le titre de séjour étudiant',
      url: 'https://www.testciviquefrance.fr',
      educationalCredentialAwarded: 'Préparation au test civique de naturalisation et titre de séjour',
      teaches: [
        'Valeurs de la République française',
        'Institutions françaises',
        'Droits et devoirs du citoyen',
        'Histoire de France',
        'Géographie de France',
        'Culture française',
        'Vie en société en France',
        'Procédures immigration France',
        'Titre de séjour étudiant',
        'Nouvelle loi immigration 2024',
      ],
    },
    {
      '@type': 'Course',
      '@id': 'https://www.testciviquefrance.fr/#course',
      name: 'Préparation au Test Civique Français 2025',
      description: 'Formation complète pour réussir le test civique obligatoire à 80% (32/40 bonnes réponses) pour la naturalisation française, la carte de séjour pluriannuelle, la carte de résident ou le titre de séjour étudiant. Conforme à la nouvelle loi immigration 2024.',
      provider: {
        '@id': 'https://www.testciviquefrance.fr/#organization',
      },
      educationalLevel: 'Tous niveaux',
      inLanguage: 'fr-FR',
      teaches: [
        'Principes et valeurs de la République (11 questions)',
        'Système institutionnel et politique (6 questions)',
        'Droits et devoirs (11 questions)',
        'Histoire, géographie et culture (8 questions)',
        'Vivre dans la société française (4 questions)',
      ],
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'online',
        courseWorkload: 'PT10H',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '1250',
        bestRating: '5',
        worstRating: '1',
      },
      offers: {
        '@type': 'Offer',
        category: 'Préparation examen',
        availability: 'https://schema.org/InStock',
        price: '0',
        priceCurrency: 'EUR',
        validFrom: '2025-01-01',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.testciviquefrance.fr/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Qu\'est-ce que le test civique français ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le test civique est un examen officiel obligatoire pour obtenir la naturalisation française, une carte de séjour pluriannuelle ou une carte de résident. Il comprend 40 questions QCM sur 5 thématiques officielles avec un seuil de réussite de 80% (32 bonnes réponses). Ce test est requis depuis la nouvelle loi immigration 2024.',
          },
        },
        {
          '@type': 'Question',
          name: 'Combien de questions comporte le test civique ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le test civique comporte 40 questions au format QCM (Questions à Choix Multiples) avec une seule bonne réponse par question. Les questions sont réparties sur 5 thématiques officielles.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quel est le seuil de réussite du test civique ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le seuil de réussite du test civique est de 80%, soit 32 bonnes réponses sur 40 questions. Une bonne réponse vaut 1 point, une mauvaise réponse ou une absence de réponse vaut 0 point.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quelles sont les 5 thématiques du test civique ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Les 5 thématiques officielles sont : 1) Principes et valeurs de la République (11 questions), 2) Système institutionnel et politique (6 questions), 3) Droits et devoirs (11 questions), 4) Histoire, géographie et culture (8 questions), 5) Vivre dans la société française (4 questions).',
          },
        },
        {
          '@type': 'Question',
          name: 'Le test civique est-il obligatoire pour les étudiants étrangers ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Depuis la nouvelle loi immigration 2024, le test civique peut être requis pour certains titres de séjour, y compris dans le cadre du changement de statut étudiant vers salarié. Il est essentiel pour les étudiants étrangers souhaitant rester en France après leurs études.',
          },
        },
        {
          '@type': 'Question',
          name: 'Comment se préparer au test civique ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pour se préparer au test civique, utilisez Test Civique France : 800+ questions officielles, cours sur les 5 thématiques, examens blancs corrigés. Notre plateforme offre un taux de réussite de 95% grâce à un entraînement complet et personnalisé.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quelle est la nouvelle loi immigration 2024 concernant le test civique ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'La loi immigration 2024 (loi pour contrôler l\'immigration et améliorer l\'intégration) renforce les exigences du test civique. Le décret 2025-647 définit les nouvelles modalités. Le test est désormais obligatoire pour davantage de titres de séjour et de démarches d\'intégration.',
          },
        },
        {
          '@type': 'Question',
          name: 'Qui doit passer le test civique en France ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le test civique est obligatoire pour : la naturalisation française, l\'obtention de la carte de séjour pluriannuelle (4 ans), la carte de résident (10 ans), et certains changements de statut. Les conjoints de Français et les bénéficiaires du regroupement familial sont également concernés.',
          },
        },
        {
          '@type': 'Question',
          name: 'Où passer le test civique ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le test civique se passe dans des centres agréés en France. Vous pouvez trouver un centre près de chez vous via votre préfecture. Les principales villes comme Paris, Lyon, Marseille, Toulouse, Bordeaux, Nantes, Lille et Strasbourg disposent de centres d\'examen.',
          },
        },
        {
          '@type': 'Question',
          name: 'Suis-je éligible au test civique ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vous êtes éligible au test civique si vous souhaitez demander la naturalisation française, obtenir une carte de séjour pluriannuelle, une carte de résident 10 ans, ou si vous êtes dans le cadre d\'un regroupement familial ou conjoint de Français.',
          },
        },
        {
          '@type': 'Question',
          name: 'Combien coûte le test civique ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le prix du test civique varie selon les centres d\'examen. Préparez-vous gratuitement avec Test Civique France avant de passer l\'examen officiel. Notre plateforme propose 800+ questions pour vous entraîner sans frais.',
          },
        },
        {
          '@type': 'Question',
          name: 'Peut-on repasser le test civique en cas d\'échec ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, en cas d\'échec au test civique, vous pouvez le repasser. Il n\'y a pas de limite au nombre de tentatives. Cependant, nous vous recommandons de bien vous préparer avec notre plateforme pour réussir dès la première fois.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quelle est la durée de validité du test civique ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'L\'attestation de réussite au test civique a une durée de validité limitée. Elle doit être présentée lors de votre demande de naturalisation ou de titre de séjour. Vérifiez auprès de votre préfecture les délais exacts.',
          },
        },
        {
          '@type': 'Question',
          name: 'Le test civique est-il difficile ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Le test civique nécessite une préparation sérieuse mais il est accessible avec un bon entraînement. Avec Test Civique France, 95% de nos utilisateurs réussissent leur examen. Nos 800+ questions couvrent toutes les thématiques officielles.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quand passer le test civique en 2025 ou 2026 ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vous pouvez passer le test civique tout au long de l\'année 2025 et 2026. Les sessions sont organisées régulièrement dans les centres agréés. Commencez votre préparation dès maintenant avec Test Civique France.',
          },
        },
        {
          '@type': 'Question',
          name: 'Comment s\'inscrire au test civique ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pour vous inscrire au test civique, contactez votre préfecture ou un centre d\'examen agréé. Avant l\'inscription, préparez-vous efficacement avec Test Civique France : cours complets, QCM et examens blancs gratuits.',
          },
        },
        {
          '@type': 'Question',
          name: 'Y a-t-il des exemptions au test civique ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Certaines personnes peuvent être dispensées du test civique, notamment pour des raisons médicales ou d\'âge. Les conditions d\'exemption sont définies par la réglementation. Consultez votre préfecture pour connaître votre situation.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quelles sont les questions du test civique 2025-2026 ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Les questions du test civique portent sur : les valeurs de la République (laïcité, liberté, égalité, fraternité), les institutions françaises, les droits et devoirs des citoyens, l\'histoire et géographie de France, et la vie en société. Entraînez-vous avec nos 800+ questions.',
          },
        },
      ],
    },
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.testciviquefrance.fr/#breadcrumb',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Accueil',
          item: 'https://www.testciviquefrance.fr',
        },
      ],
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.testciviquefrance.fr/#navigation',
      name: ['Connexion', 'Inscription', 'Tarifs', 'Articles', 'FAQ'],
      url: [
        'https://www.testciviquefrance.fr/login',
        'https://www.testciviquefrance.fr/signup',
        'https://www.testciviquefrance.fr/tarifs',
        'https://www.testciviquefrance.fr/articles',
        'https://www.testciviquefrance.fr/faq'
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Préconnexions pour performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Favicons multiples */}
        <link rel="icon" type="image/png" href="/fav.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/fav.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Meta tags supplémentaires pour SEO */}
        <meta name="application-name" content="Test Civique France" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Test Civique" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Dublin Core Metadata */}
        <meta name="DC.title" content="Test Civique France - Préparation Examen Naturalisation" />
        <meta name="DC.creator" content="Test Civique France" />
        <meta name="DC.subject" content="Test civique, naturalisation française, examen civique, QCM" />
        <meta name="DC.description" content="Préparation complète au test civique pour la naturalisation française" />
        <meta name="DC.publisher" content="Test Civique France" />
        <meta name="DC.language" content="fr" />
        <meta name="DC.coverage" content="France" />
        <meta name="DC.rights" content="Copyright Test Civique France" />

        {/* Geo tags */}
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="France" />
        <meta name="ICBM" content="46.227638, 2.213749" />
        {/* JSON-LD Structured Data - Organisation et WebSite */}
        <StructuredData data={getOrganizationSchema()} />
        <StructuredData data={getWebSiteSchema()} />

        {/* JSON-LD Structured Data supplémentaire (FAQ, Course, etc.) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {/* Google tag (gtag.js) - Google Ads Conversion Tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17797146827"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17797146827');
          `}
        </Script>

        <AnnouncementBanner />
        <AuthProvider>{children}</AuthProvider>
        <Analytics />
      </body>
    </html>
  );
}
