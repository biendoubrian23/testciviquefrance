/**
 * Contenu détaillé des articles SEO - Partie 1
 * Articles sur la préparation et les conditions
 */

export interface ArticleSection {
  id: string;
  title: string;
  content: string;
}

export interface VideoEmbed {
  videoId: string;
  title: string;
}

export interface ExternalSource {
  title: string;
  url: string;
  type: 'official' | 'legal' | 'article' | 'video';
  description?: string;
}

export interface ArticleFullContent {
  slug: string;
  introduction: string;
  sections: ArticleSection[];
  conclusion: string;
  faq?: { question: string; answer: string }[];
  keywords: string[];
  videos?: VideoEmbed[];
  sources?: ExternalSource[];
}

// Article 1: Comment réussir le test civique
export const reussirTestCiviqueContent: ArticleFullContent = {
  slug: 'comment-reussir-test-civique-premier-coup',
  introduction: `Le test civique est une étape cruciale pour votre naturalisation française ou l'obtention de votre titre de séjour. Avec un seuil de réussite fixé à 80% (32 bonnes réponses sur 40), une préparation sérieuse est indispensable. Ce guide vous donne toutes les clés pour réussir du premier coup.`,
  sections: [
    {
      id: 'comprendre-examen',
      title: "Comprendre le format de l'examen civique",
      content: `L'examen civique est un QCM de **40 questions** à réaliser en **45 minutes maximum**. Il se déroule dans un centre agréé, sur support numérique. Pour réussir, vous devez obtenir au minimum **32 bonnes réponses** (80%).

Les questions portent sur 5 thématiques officielles :
- **Principes et valeurs de la République** (devise, symboles, laïcité)
- **Institutions françaises et européennes** (Président, Parlement, UE)
- **Droits et devoirs** (droits fondamentaux, obligations civiques)
- **Histoire et géographie de la France** (dates clés, régions)
- **Vie en société** (santé, travail, éducation, démarches administratives)`,
    },
    {
      id: 'planning-revision',
      title: "Établir un planning de révision efficace",
      content: `Une préparation réussie s'étale sur **4 à 8 semaines** selon votre niveau de départ. Voici un planning type :

**Semaines 1-2 : Les fondamentaux**
- Étudiez les valeurs et symboles de la République
- Mémorisez la devise, les couleurs du drapeau, Marianne
- Apprenez l'hymne national et sa signification

**Semaines 3-4 : Les institutions**
- Comprenez le rôle du Président de la République
- Maîtrisez le fonctionnement de l'Assemblée nationale et du Sénat
- Apprenez les noms des principales institutions (Conseil constitutionnel, etc.)

**Semaines 5-6 : Histoire et géographie**
- Révisez les dates clés de l'histoire de France
- Connaissez les 13 régions métropolitaines
- Situez les grandes villes et fleuves

**Semaines 7-8 : Vie pratique et révisions**
- Révisez le système de santé, le travail, l'éducation
- Passez des examens blancs en conditions réelles
- Identifiez vos points faibles`,
    },
    {
      id: 'techniques-memorisation',
      title: "Techniques de mémorisation efficaces",
      content: `Pour retenir efficacement les informations, utilisez ces techniques éprouvées :

**Les flashcards**
Créez des cartes avec une question d'un côté et la réponse de l'autre. Révisez-les quotidiennement.

**Les associations mentales**
Associez les dates à des images ou des histoires. Par exemple : 1789 = Révolution = Bastille = Liberté.

**La répétition espacée**
Révisez les informations à intervalles croissants : J+1, J+3, J+7, J+14, J+30.

**Les moyens mnémotechniques**
- Devise : "LEF" pour Liberté, Égalité, Fraternité
- Drapeau : "BBR" pour Bleu, Blanc, Rouge (de gauche à droite)

**L'apprentissage actif**
Ne vous contentez pas de lire : testez-vous régulièrement avec des QCM.`,
    },
    {
      id: 'erreurs-eviter',
      title: "Les erreurs à éviter absolument",
      content: `Beaucoup de candidats échouent à cause d'erreurs évitables :

**Sous-estimer l'examen**
Le test civique n'est pas une formalité. 20% des candidats échouent à la première tentative.

**Réviser au dernier moment**
Commencez votre préparation au moins 4 semaines avant la date d'examen.

**Négliger certaines thématiques**
Toutes les thématiques sont importantes. Ne faites pas d'impasses.

**Ne pas s'entraîner en conditions réelles**
Passez plusieurs examens blancs chronométrés avant le jour J.

**Stresser le jour de l'examen**
Dormez bien la veille, arrivez en avance, restez calme.

**Aller trop vite**
Vous avez 45 minutes pour 40 questions. Prenez le temps de bien lire chaque question.`,
    },
  ],
  conclusion: `La réussite au test civique repose sur une préparation méthodique et régulière. En suivant ce guide et en vous entraînant sur Test Civique France, vous maximisez vos chances de réussir du premier coup. N'attendez plus pour commencer votre préparation !`,
  faq: [
    {
      question: "Combien de temps faut-il pour se préparer au test civique ?",
      answer: "En moyenne, 4 à 8 semaines de préparation régulière (30 min à 1h par jour) sont recommandées pour réussir le test civique.",
    },
    {
      question: "Peut-on repasser le test civique en cas d'échec ?",
      answer: "Oui, vous pouvez repasser le test après un délai minimum. Cependant, une fraude vous interdit de repasser pendant 2 ans.",
    },
    {
      question: "Le test civique est-il le même pour la naturalisation et le titre de séjour ?",
      answer: "Oui, le format est identique : 40 questions QCM, 45 minutes, seuil de 80%. Les thématiques sont les mêmes.",
    },
  ],
  keywords: [
    'réussir test civique',
    'préparation test civique',
    'conseils examen civique',
    'test civique premier coup',
    'révision test civique',
  ],
  videos: [
    {
      videoId: '8dKBT22FrKk',
      title: "Test civique France : tout ce qu'il faut savoir",
    },
    {
      videoId: 'M6Jqed7F16I',
      title: "Comment réussir le test civique du premier coup",
    },
  ],
  sources: [
    {
      title: 'Service-Public.fr - Test de connaissance civique',
      url: 'https://www.service-public.fr/particuliers/vosdroits/F2213',
      type: 'official',
      description: 'Informations officielles sur le test de connaissance des valeurs de la République',
    },
    {
      title: 'Légifrance - Décret n° 2025-647 relatif au test civique',
      url: 'https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000052098629',
      type: 'legal',
      description: 'Texte officiel du décret relatif au test de connaissance civique',
    },
    {
      title: 'Ministère de l\'Intérieur - Naturalisation française',
      url: 'https://www.interieur.gouv.fr/Archives/Archives-des-actualites/2024-Archives/Naturalisation-et-acquisition-de-la-nationalite-francaise',
      type: 'official',
      description: 'Page officielle sur les démarches de naturalisation',
    },
  ],
};

// Article 2: Questions fréquentes test civique
export const questionsCiviquesContent: ArticleFullContent = {
  slug: 'questions-frequentes-test-civique-2025',
  introduction: `Ce guide rassemble les 100 questions les plus fréquentes au test civique, organisées par thématique. Chaque question est accompagnée de sa réponse pour vous permettre de vous préparer efficacement.`,
  sections: [
    {
      id: 'valeurs-republique',
      title: "Questions sur les valeurs de la République (20 questions)",
      content: `**1. Quelle est la devise de la République française ?**
→ Liberté, Égalité, Fraternité

**2. Quelles sont les couleurs du drapeau français ?**
→ Bleu, blanc, rouge (dans cet ordre)

**3. Quel est l'hymne national français ?**
→ La Marseillaise

**4. Qui est Marianne ?**
→ Le symbole féminin de la République française

**5. Que signifie la laïcité ?**
→ La séparation des religions et de l'État

**6. La France est-elle un État laïque ?**
→ Oui, depuis la loi de 1905

**7. Quel animal est un symbole de la France ?**
→ Le coq gaulois

**8. Quelle fête célèbre-t-on le 14 juillet ?**
→ La Fête nationale (prise de la Bastille en 1789)

**9. Quel arbre est un symbole de liberté en France ?**
→ L'arbre de la liberté (souvent un chêne ou un platane)

**10. Que représente la couleur bleue du drapeau ?**
→ La ville de Paris`,
    },
    {
      id: 'institutions',
      title: "Questions sur les institutions françaises (25 questions)",
      content: `**11. Qui est le chef de l'État en France ?**
→ Le Président de la République

**12. Quelle est la durée du mandat présidentiel ?**
→ 5 ans (quinquennat)

**13. Qui nomme le Premier ministre ?**
→ Le Président de la République

**14. Comment s'appelle le Parlement français ?**
→ L'Assemblée nationale et le Sénat

**15. Qui vote les lois en France ?**
→ Le Parlement (Assemblée nationale et Sénat)

**16. Combien y a-t-il de députés à l'Assemblée nationale ?**
→ 577 députés

**17. Combien y a-t-il de sénateurs ?**
→ 348 sénateurs

**18. Quel est le rôle du Conseil constitutionnel ?**
→ Vérifier la conformité des lois à la Constitution

**19. Qui peut saisir le Conseil constitutionnel ?**
→ Le Président, le Premier ministre, les présidents des assemblées, 60 députés ou 60 sénateurs

**20. Qui nomme les ministres ?**
→ Le Président de la République, sur proposition du Premier ministre`,
    },
    {
      id: 'histoire',
      title: "Questions sur l'histoire de France (25 questions)",
      content: `**36. En quelle année a eu lieu la Révolution française ?**
→ 1789

**37. Quel événement marque le début de la Révolution française ?**
→ La prise de la Bastille (14 juillet 1789)

**38. Qui a proclamé la Ire République française ?**
→ La Convention nationale, en 1792

**39. Qui était Napoléon Bonaparte ?**
→ Empereur des Français de 1804 à 1814/1815

**40. Quand la IIIe République a-t-elle été proclamée ?**
→ En 1870, après la défaite de Sedan

**41. Quand a été signée l'armistice de la Première Guerre mondiale ?**
→ Le 11 novembre 1918

**42. Quelle date marque la fin de la Seconde Guerre mondiale en Europe ?**
→ Le 8 mai 1945

**43. Qui était le chef de la France libre pendant la Seconde Guerre mondiale ?**
→ Le général Charles de Gaulle

**44. En quelle année la Ve République a-t-elle été fondée ?**
→ 1958

**45. Qui fut le premier Président de la Ve République ?**
→ Charles de Gaulle`,
    },
    {
      id: 'geographie',
      title: "Questions sur la géographie française (15 questions)",
      content: `**61. Combien de régions métropolitaines compte la France ?**
→ 13 régions

**62. Quelle est la capitale de la France ?**
→ Paris

**63. Quel est le plus long fleuve de France ?**
→ La Loire (1 006 km)

**64. Quel est le point culminant de France ?**
→ Le Mont Blanc (4 809 m)

**65. Combien de pays ont une frontière commune avec la France métropolitaine ?**
→ 8 pays (Belgique, Luxembourg, Allemagne, Suisse, Italie, Monaco, Espagne, Andorre)

**66. Quels sont les 5 départements et régions d'outre-mer (DROM) ?**
→ Guadeloupe, Martinique, Guyane, La Réunion, Mayotte

**67. Quelle mer borde le sud de la France ?**
→ La mer Méditerranée

**68. Quel océan borde l'ouest de la France ?**
→ L'océan Atlantique

**69. Quelle chaîne de montagnes sépare la France de l'Espagne ?**
→ Les Pyrénées

**70. Quelle ville est le siège du Parlement européen ?**
→ Strasbourg`,
    },
    {
      id: 'vie-societe',
      title: "Questions sur la vie en société (15 questions)",
      content: `**76. À quel âge peut-on voter en France ?**
→ 18 ans

**77. Le vote est-il obligatoire en France ?**
→ Non, mais c'est un devoir civique

**78. Quel est le numéro d'urgence européen ?**
→ 112

**79. Quel est le numéro du SAMU ?**
→ 15

**80. Quel est le numéro des pompiers ?**
→ 18

**81. L'école est-elle obligatoire en France ?**
→ Oui, de 3 à 16 ans

**82. Quel est l'âge légal du mariage en France ?**
→ 18 ans

**83. Le mariage homosexuel est-il légal en France ?**
→ Oui, depuis 2013

**84. Qu'est-ce que la Sécurité sociale ?**
→ Le système de protection sociale français (maladie, famille, retraite)

**85. Quel organisme verse les allocations familiales ?**
→ La CAF (Caisse d'Allocations Familiales)`,
    },
  ],
  conclusion: `Cette liste de questions fréquentes couvre les principaux sujets du test civique. Entraînez-vous régulièrement sur Test Civique France pour maîtriser toutes les réponses et réussir votre examen avec assurance.`,
  keywords: [
    'questions test civique',
    'QCM naturalisation',
    'questions examen civique',
    '100 questions test civique',
    'réponses test civique',
  ],
  videos: [
    {
      videoId: 'faTI6V7m5Tk',
      title: "Les valeurs de la République française expliquées",
    },
    {
      videoId: '8MyAxR3G-fU',
      title: "Questions types du test civique - Entraînement",
    },
  ],
  sources: [
    {
      title: 'Vie publique - Les valeurs de la République',
      url: 'https://www.vie-publique.fr/fiches/274852-quelles-sont-les-valeurs-de-la-republique',
      type: 'official',
      description: 'Explication détaillée des valeurs républicaines françaises',
    },
    {
      title: 'Élysée - La Constitution française',
      url: 'https://www.elysee.fr/la-presidence/la-constitution',
      type: 'official',
      description: 'Présentation officielle de la Constitution de la Ve République',
    },
    {
      title: 'Service-Public.fr - Nationalité française',
      url: 'https://www.service-public.fr/particuliers/vosdroits/N111',
      type: 'official',
      description: 'Toutes les démarches relatives à la nationalité française',
    },
  ],
};

// Article 3: Naturalisation française
export const naturalisationContent: ArticleFullContent = {
  slug: 'naturalisation-francaise-conditions-demarches-2025',
  introduction: `La naturalisation est la procédure par laquelle un étranger acquiert la nationalité française par décision de l'autorité publique. Ce guide détaille toutes les conditions, les démarches et les délais pour devenir français en 2025.`,
  sections: [
    {
      id: 'conditions-eligibilite',
      title: "Conditions d'éligibilité à la naturalisation",
      content: `Pour demander la naturalisation française, vous devez remplir plusieurs conditions :

**Condition de résidence**
- Résider en France depuis au moins **5 ans** de manière régulière et continue
- Ce délai peut être réduit à **2 ans** si vous avez un diplôme français de niveau Master ou supérieur

**Condition de régularité du séjour**
- Posséder un titre de séjour valide au moment de la demande
- Ne pas être en situation irrégulière

**Condition de langue**
- Justifier d'un niveau de français **B1 oral** minimum
- Attestation délivrée par un organisme agréé (DELF, TCF, TEF...)

**Condition d'assimilation**
- Adhérer aux valeurs de la République
- **Réussir le test civique** avec un score minimum de 80%
- Connaître les droits et devoirs du citoyen

**Autres conditions**
- Être majeur (18 ans minimum)
- Avoir un casier judiciaire compatible
- Ne pas avoir fait l'objet d'un arrêté d'expulsion`,
    },
    {
      id: 'documents-dossier',
      title: "Documents à fournir pour le dossier",
      content: `Le dossier de naturalisation comprend de nombreux justificatifs :

**Documents d'état civil**
- Acte de naissance (avec traduction assermentée)
- Acte de mariage (si applicable)
- Actes de naissance des enfants

**Documents d'identité**
- Passeport en cours de validité
- Titre de séjour actuel
- Photos d'identité récentes

**Justificatifs de résidence**
- Justificatifs de domicile des 5 dernières années
- Avis d'imposition des 3 dernières années
- Attestation de résidence fiscale

**Justificatifs de ressources**
- Contrats de travail
- Bulletins de salaire des 3 derniers mois
- Avis d'imposition

**Documents spécifiques**
- **Attestation de réussite au test civique**
- Attestation de niveau B1 en français
- Diplômes obtenus en France (le cas échéant)
- Timbre fiscal (55€)`,
    },
    {
      id: 'procedure',
      title: "Procédure étape par étape",
      content: `**Étape 1 : Préparation du dossier**
Rassemblez tous les documents requis et faites traduire ceux en langue étrangère.

**Étape 2 : Test civique**
Inscrivez-vous et passez le test civique dans un centre agréé. Obtenez votre attestation de réussite.

**Étape 3 : Dépôt de la demande**
Déposez votre dossier complet à la préfecture de votre département ou via le portail en ligne.

**Étape 4 : Instruction du dossier**
La préfecture vérifie la recevabilité et mène l'enquête administrative.

**Étape 5 : Entretien d'assimilation**
Vous êtes convoqué pour un entretien avec un agent de la préfecture pour évaluer votre assimilation.

**Étape 6 : Décision**
Le ministre de l'Intérieur prend la décision finale. En cas d'accord, un décret de naturalisation est publié au Journal officiel.

**Étape 7 : Cérémonie d'accueil**
Vous participez à une cérémonie officielle où vous recevez votre décret de naturalisation.`,
    },
    {
      id: 'delais-recours',
      title: "Délais et recours en cas de refus",
      content: `**Délais moyens**
- Instruction du dossier : 12 à 18 mois
- Délai total (dépôt à décision) : 18 à 24 mois
- Certains dossiers complexes peuvent prendre plus de 2 ans

**En cas de décision défavorable**
Si votre demande est refusée, vous pouvez :
- Demander les motifs du refus (obligatoirement communiqués)
- Déposer un recours gracieux auprès du ministre (2 mois)
- Déposer un recours contentieux devant le tribunal administratif (2 mois)

**En cas d'ajournement**
L'administration peut ajourner votre demande si elle estime que vous n'êtes pas prêt. Vous pouvez redéposer après le délai indiqué.

**Après naturalisation**
- Vous recevez votre certificat de nationalité française
- Vous pouvez demander une carte d'identité et un passeport français
- Vous avez tous les droits et devoirs du citoyen français`,
    },
  ],
  conclusion: `La naturalisation est un processus long mais accessible. Avec le test civique désormais obligatoire, préparez-vous dès maintenant sur Test Civique France pour mettre toutes les chances de votre côté.`,
  faq: [
    {
      question: "Peut-on garder sa nationalité d'origine lors de la naturalisation ?",
      answer: "Oui, la France autorise la double nationalité. Vous pouvez conserver votre nationalité d'origine sauf si votre pays d'origine l'interdit.",
    },
    {
      question: "Le test civique est-il obligatoire pour la naturalisation ?",
      answer: "Oui, depuis le Décret n°2025-647, le test civique est obligatoire pour toute demande de naturalisation.",
    },
  ],
  keywords: [
    'naturalisation française',
    'devenir français',
    'conditions naturalisation',
    'dossier naturalisation',
    'procédure naturalisation 2025',
  ],
  videos: [
    {
      videoId: 'nXimESI0mQo',
      title: "Comment obtenir la nationalité française - Guide complet",
    },
    {
      videoId: '8dKBT22FrKk',
      title: "Test civique France : tout ce qu'il faut savoir",
    },
  ],
  sources: [
    {
      title: 'Service-Public.fr - Naturalisation française',
      url: 'https://www.service-public.fr/particuliers/vosdroits/F2213',
      type: 'official',
      description: 'Guide officiel de la procédure de naturalisation',
    },
    {
      title: 'Légifrance - CESEDA',
      url: 'https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006070158/',
      type: 'legal',
      description: "Code de l'entrée et du séjour des étrangers et du droit d'asile",
    },
    {
      title: 'Ministère de l\'Intérieur - Acquisition de la nationalité',
      url: 'https://www.interieur.gouv.fr/Archives/Archives-des-actualites/2024-Archives/Naturalisation-et-acquisition-de-la-nationalite-francaise',
      type: 'official',
      description: 'Informations officielles sur les différentes voies d\'acquisition',
    },
    {
      title: 'France Diplomatie - Nationalité française',
      url: 'https://www.diplomatie.gouv.fr/fr/services-aux-francais/etat-civil-et-nationalite-francaise/',
      type: 'official',
      description: 'Informations pour les démarches depuis l\'étranger',
    },
  ],
};
