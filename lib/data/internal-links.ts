/**
 * Maillage interne entre articles SEO
 * Chaque article possède une liste de liens contextuels vers d'autres articles
 * Les liens sont bidirectionnels et thématiquement pertinents
 */

export interface InternalLink {
  slug: string;
  anchor: string; // Texte d'ancre descriptif pour le SEO
}

// Mapping : slug de l'article → liens internes recommandés
const internalLinksMap: Record<string, InternalLink[]> = {
  // Prix test civique → naturalisation, renouvellement, documents
  'prix-test-civique-2026-cout-tarif-titre-sejour-prefecture': [
    { slug: 'dossier-naturalisation-2026-documents-delais-prefecture-anef', anchor: 'Dossier complet de naturalisation 2026' },
    { slug: 'renouvellement-titre-sejour-2026-anef-prefecture-documents-delais', anchor: 'Renouveler son titre de séjour via ANEF' },
    { slug: 'documents-test-civique-2026-convocation-piece-identite', anchor: 'Documents à apporter le jour du test civique' },
    { slug: 'erreurs-frequentes-test-civique-2026-pieges-qcm', anchor: 'Erreurs fréquentes à éviter au test civique' },
  ],

  // Renouvellement ANEF → prix, refus/OQTF, niveaux français
  'renouvellement-titre-sejour-2026-anef-prefecture-documents-delais': [
    { slug: 'prix-test-civique-2026-cout-tarif-titre-sejour-prefecture', anchor: 'Prix du test civique et tarifs des titres de séjour' },
    { slug: 'refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france', anchor: 'Que faire en cas de refus ou OQTF ?' },
    { slug: 'niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation', anchor: 'Niveaux de français requis (A2, B1, B2)' },
    { slug: 'titres-de-sejour-france-guide-complet-2026', anchor: 'Guide complet des titres de séjour en France' },
  ],

  // Naturalisation → prix, entretien, CIR, droit de vote
  'dossier-naturalisation-2026-documents-delais-prefecture-anef': [
    { slug: 'prix-test-civique-2026-cout-tarif-titre-sejour-prefecture', anchor: 'Combien coûte la naturalisation ? Tous les tarifs' },
    { slug: 'entretien-naturalisation-2026-preparation-assimilation-prefecture', anchor: 'Préparer son entretien de naturalisation' },
    { slug: 'niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation', anchor: 'Niveau de français B1 requis pour la naturalisation' },
    { slug: 'droit-de-vote-elections-france-2026-guide-citoyen', anchor: 'Droits civiques après la naturalisation' },
  ],

  // Refus / OQTF → renouvellement, prix, titres
  'refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france': [
    { slug: 'renouvellement-titre-sejour-2026-anef-prefecture-documents-delais', anchor: 'Renouveler correctement son titre de séjour' },
    { slug: 'dossier-naturalisation-2026-documents-delais-prefecture-anef', anchor: 'Constituer un dossier de naturalisation solide' },
    { slug: 'prix-test-civique-2026-cout-tarif-titre-sejour-prefecture', anchor: 'Tarifs des titres de séjour et test civique' },
    { slug: 'titres-de-sejour-france-guide-complet-2026', anchor: 'Tous les types de titres de séjour expliqués' },
  ],

  // Erreurs test civique → documents, prix, comment réussir
  'erreurs-frequentes-test-civique-2026-pieges-qcm': [
    { slug: 'documents-test-civique-2026-convocation-piece-identite', anchor: 'Documents obligatoires le jour du test' },
    { slug: 'prix-test-civique-2026-cout-tarif-titre-sejour-prefecture', anchor: 'Prix du test civique : 90€ (et en cas d\'échec)' },
    { slug: 'comment-reussir-test-civique-premier-coup', anchor: 'Comment réussir le test civique du premier coup' },
    { slug: 'contrat-integration-republicaine-cir-2026-formation-civique', anchor: 'Le Contrat d\'Intégration Républicaine (CIR)' },
  ],

  // Documents test civique → erreurs, prix, CIR
  'documents-test-civique-2026-convocation-piece-identite': [
    { slug: 'erreurs-frequentes-test-civique-2026-pieges-qcm', anchor: 'Les pièges à éviter le jour du test civique' },
    { slug: 'prix-test-civique-2026-cout-tarif-titre-sejour-prefecture', anchor: 'Combien coûte le test civique ?' },
    { slug: 'comment-reussir-test-civique-premier-coup', anchor: 'Guide pour réussir le test du premier coup' },
  ],

  // Niveaux français → naturalisation, renouvellement, CIR
  'niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation': [
    { slug: 'dossier-naturalisation-2026-documents-delais-prefecture-anef', anchor: 'Dossier de naturalisation : le français B1 est requis' },
    { slug: 'renouvellement-titre-sejour-2026-anef-prefecture-documents-delais', anchor: 'Titre de séjour : le français A2 est requis' },
    { slug: 'contrat-integration-republicaine-cir-2026-formation-civique', anchor: 'Formation linguistique via le CIR' },
    { slug: 'guide-etudiants-etrangers-france-titres-demarches-2026', anchor: 'Guide étudiant étranger en France' },
  ],

  // Entretien naturalisation → dossier, niveaux, droit de vote
  'entretien-naturalisation-2026-preparation-assimilation-prefecture': [
    { slug: 'dossier-naturalisation-2026-documents-delais-prefecture-anef', anchor: 'Constituer son dossier de naturalisation' },
    { slug: 'niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation', anchor: 'Prouver son niveau B1 de français' },
    { slug: 'droit-de-vote-elections-france-2026-guide-citoyen', anchor: 'Vos droits après la naturalisation' },
    { slug: 'prix-test-civique-2026-cout-tarif-titre-sejour-prefecture', anchor: 'Budget total de la naturalisation' },
  ],

  // CIR → niveaux français, erreurs test, titres
  'contrat-integration-republicaine-cir-2026-formation-civique': [
    { slug: 'niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation', anchor: 'Niveaux de français A2/B1 pour le titre de séjour' },
    { slug: 'erreurs-frequentes-test-civique-2026-pieges-qcm', anchor: 'Éviter les erreurs au test civique' },
    { slug: 'titres-de-sejour-france-guide-complet-2026', anchor: 'Guide des titres de séjour en France' },
    { slug: 'renouvellement-titre-sejour-2026-anef-prefecture-documents-delais', anchor: 'Renouvellement du titre de séjour' },
  ],

  // Droit de vote → naturalisation, entretien, institutions
  'droit-de-vote-elections-france-2026-guide-citoyen': [
    { slug: 'dossier-naturalisation-2026-documents-delais-prefecture-anef', anchor: 'Obtenir la nationalité française' },
    { slug: 'entretien-naturalisation-2026-preparation-assimilation-prefecture', anchor: 'L\'entretien de naturalisation' },
    { slug: 'institutions-francaises-president-assemblee-senat', anchor: 'Les institutions françaises' },
  ],

  // Titres de séjour guide → prix, renouvellement, étudiants, OQTF
  'titres-de-sejour-france-guide-complet-2026': [
    { slug: 'prix-test-civique-2026-cout-tarif-titre-sejour-prefecture', anchor: 'Prix de chaque titre de séjour' },
    { slug: 'renouvellement-titre-sejour-2026-anef-prefecture-documents-delais', anchor: 'Renouveler son titre de séjour' },
    { slug: 'guide-etudiants-etrangers-france-titres-demarches-2026', anchor: 'Titre de séjour étudiant' },
    { slug: 'refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france', anchor: 'Recours en cas de refus de titre' },
  ],

  // Étudiants → titres, prix, niveaux français, travailler
  'guide-etudiants-etrangers-france-titres-demarches-2026': [
    { slug: 'prix-test-civique-2026-cout-tarif-titre-sejour-prefecture', anchor: 'Prix du titre de séjour étudiant (75€)' },
    { slug: 'titres-de-sejour-france-guide-complet-2026', anchor: 'Tous les titres de séjour expliqués' },
    { slug: 'travailler-en-france-guide-permis-contrats-etrangers-2026', anchor: 'Travailler en France comme étudiant étranger' },
    { slug: 'niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation', anchor: 'Niveaux de français requis' },
  ],

  // Travailler en France → titres, prix, étudiants
  'travailler-en-france-guide-permis-contrats-etrangers-2026': [
    { slug: 'prix-test-civique-2026-cout-tarif-titre-sejour-prefecture', anchor: 'Prix du titre de séjour salarié (225€)' },
    { slug: 'titres-de-sejour-france-guide-complet-2026', anchor: 'Types de titres de séjour pour travailler' },
    { slug: 'guide-etudiants-etrangers-france-titres-demarches-2026', anchor: 'De l\'étude au travail en France' },
    { slug: 'renouvellement-titre-sejour-2026-anef-prefecture-documents-delais', anchor: 'Renouveler son titre salarié' },
  ],

  // Comment réussir → erreurs, documents, prix
  'comment-reussir-test-civique-premier-coup': [
    { slug: 'erreurs-frequentes-test-civique-2026-pieges-qcm', anchor: 'Les erreurs les plus fréquentes au test civique' },
    { slug: 'documents-test-civique-2026-convocation-piece-identite', anchor: 'Que faut-il apporter le jour J ?' },
    { slug: 'prix-test-civique-2026-cout-tarif-titre-sejour-prefecture', anchor: 'Combien coûte le test civique ?' },
    { slug: 'contrat-integration-republicaine-cir-2026-formation-civique', anchor: 'Le CIR : formation civique obligatoire' },
  ],
};

/**
 * Récupère les liens internes pour un article donné
 */
export function getInternalLinks(slug: string): InternalLink[] {
  return internalLinksMap[slug] || [];
}
