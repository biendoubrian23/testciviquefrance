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

  // ===== Batch 12 articles SEO - Mai 2026 =====

  // Hausse frais titre séjour → récépissé, renouvellement, changement statut, ANEF
  'hausse-frais-titre-sejour-2026-nouveaux-tarifs-timbres-fiscaux': [
    { slug: 'renouvellement-titre-sejour-2026-anef-prefecture-documents-delais', anchor: 'Renouveler son titre de séjour via ANEF' },
    { slug: 'recepisse-titre-de-sejour-droits-duree-voyage', anchor: 'Récépissé de titre de séjour : droits et durée' },
    { slug: 'changement-statut-etudiant-salarie-2026-demarches-anef', anchor: 'Changement de statut étudiant à salarié' },
    { slug: 'guide-anef-complet-2026-creer-compte-deposer-demande', anchor: 'Guide ANEF complet 2026' },
  ],

  // Résultats test civique → inscription, erreurs, prix, CER
  'premiers-resultats-test-civique-2026-taux-reussite-retours-experience': [
    { slug: 'inscription-test-civique-2026-ou-quand-comment-sinscrire', anchor: 'Comment s\'inscrire au test civique 2026' },
    { slug: 'erreurs-frequentes-test-civique-2026-pieges-qcm', anchor: 'Erreurs fréquentes au test civique' },
    { slug: 'prix-test-civique-2026-cout-tarif-titre-sejour-prefecture', anchor: 'Prix et coût du test civique' },
    { slug: 'contrat-engagement-republicain-2026-obligations-formation-civique', anchor: 'Le Contrat d\'Engagement Républicain' },
  ],

  // Inscription test civique → résultats, ANEF, documents, comment réussir
  'inscription-test-civique-2026-ou-quand-comment-sinscrire': [
    { slug: 'premiers-resultats-test-civique-2026-taux-reussite-retours-experience', anchor: 'Résultats et taux de réussite du test civique 2026' },
    { slug: 'guide-anef-complet-2026-creer-compte-deposer-demande', anchor: 'Créer un compte ANEF pas à pas' },
    { slug: 'documents-test-civique-2026-convocation-piece-identite', anchor: 'Documents à apporter le jour du test' },
    { slug: 'comment-reussir-test-civique-premier-coup', anchor: 'Réussir le test civique du premier coup' },
  ],

  // Changement statut étudiant→salarié → ANEF, passeport talent, frais, VLS-TS
  'changement-statut-etudiant-salarie-2026-demarches-anef': [
    { slug: 'guide-anef-complet-2026-creer-compte-deposer-demande', anchor: 'Tutoriel ANEF complet 2026' },
    { slug: 'passeport-talent-2026-conditions-metiers-demarches', anchor: 'Passeport talent : alternative au changement de statut' },
    { slug: 'hausse-frais-titre-sejour-2026-nouveaux-tarifs-timbres-fiscaux', anchor: 'Tarifs et frais du changement de statut' },
    { slug: 'visa-long-sejour-vls-ts-validation-ofii-2026', anchor: 'Validation du VLS-TS étudiant' },
  ],

  // Récépissé → renouvellement, ANEF, refus/OQTF, frais
  'recepisse-titre-de-sejour-droits-duree-voyage': [
    { slug: 'renouvellement-titre-sejour-2026-anef-prefecture-documents-delais', anchor: 'Renouveler son titre de séjour avant expiration' },
    { slug: 'guide-anef-complet-2026-creer-compte-deposer-demande', anchor: 'Suivre son dossier sur ANEF' },
    { slug: 'refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france', anchor: 'Que faire en cas de refus de titre de séjour ?' },
    { slug: 'hausse-frais-titre-sejour-2026-nouveaux-tarifs-timbres-fiscaux', anchor: 'Frais de titre de séjour 2026' },
  ],

  // Guide ANEF → récépissé, changement statut, renouvellement, inscription test
  'guide-anef-complet-2026-creer-compte-deposer-demande': [
    { slug: 'recepisse-titre-de-sejour-droits-duree-voyage', anchor: 'Comprendre le récépissé de titre de séjour' },
    { slug: 'changement-statut-etudiant-salarie-2026-demarches-anef', anchor: 'Changer de statut étudiant à salarié via ANEF' },
    { slug: 'renouvellement-titre-sejour-2026-anef-prefecture-documents-delais', anchor: 'Renouveler son titre via ANEF' },
    { slug: 'inscription-test-civique-2026-ou-quand-comment-sinscrire', anchor: 'S\'inscrire au test civique' },
  ],

  // VLS-TS → validation OFII, CER, premiers pas, passeport talent
  'visa-long-sejour-vls-ts-validation-ofii-2026': [
    { slug: 'contrat-engagement-republicain-2026-obligations-formation-civique', anchor: 'Le Contrat d\'Engagement Républicain (CER)' },
    { slug: 'premiers-pas-france-etranger-banque-logement-caf-ameli', anchor: 'Premiers pas en France après validation du visa' },
    { slug: 'passeport-talent-2026-conditions-metiers-demarches', anchor: 'Passeport talent : un VLS-TS spécifique' },
    { slug: 'guide-anef-complet-2026-creer-compte-deposer-demande', anchor: 'Valider son VLS-TS sur ANEF' },
  ],

  // Passeport talent → changement statut, VLS-TS, frais, ANEF
  'passeport-talent-2026-conditions-metiers-demarches': [
    { slug: 'changement-statut-etudiant-salarie-2026-demarches-anef', anchor: 'Changement de statut étudiant à passeport talent' },
    { slug: 'visa-long-sejour-vls-ts-validation-ofii-2026', anchor: 'VLS-TS et validation OFII' },
    { slug: 'hausse-frais-titre-sejour-2026-nouveaux-tarifs-timbres-fiscaux', anchor: 'Tarifs du passeport talent 2026' },
    { slug: 'guide-anef-complet-2026-creer-compte-deposer-demande', anchor: 'Démarches passeport talent sur ANEF' },
  ],

  // Premiers pas France → VLS-TS, CER, récépissé, test civique
  'premiers-pas-france-etranger-banque-logement-caf-ameli': [
    { slug: 'visa-long-sejour-vls-ts-validation-ofii-2026', anchor: 'Valider son VLS-TS dès l\'arrivée' },
    { slug: 'contrat-engagement-republicain-2026-obligations-formation-civique', anchor: 'Le CER : votre premier engagement républicain' },
    { slug: 'recepisse-titre-de-sejour-droits-duree-voyage', anchor: 'Le récépissé en attendant votre titre de séjour' },
    { slug: 'inscription-test-civique-2026-ou-quand-comment-sinscrire', anchor: 'Anticiper l\'inscription au test civique' },
  ],

  // Titre séjour étranger malade → récépissé, recours, AME, ANEF
  'titre-sejour-etranger-malade-raisons-sante-2026': [
    { slug: 'recepisse-titre-de-sejour-droits-duree-voyage', anchor: 'Le récépissé pendant la procédure médicale' },
    { slug: 'refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france', anchor: 'Recours en cas de refus de titre de séjour' },
    { slug: 'premiers-pas-france-etranger-banque-logement-caf-ameli', anchor: 'Démarches CAF et Ameli pour les étrangers' },
    { slug: 'guide-anef-complet-2026-creer-compte-deposer-demande', anchor: 'Déposer sa demande sur ANEF' },
  ],

  // Contrat Engagement Républicain → test civique, inscription, VLS-TS, résultats
  'contrat-engagement-republicain-2026-obligations-formation-civique': [
    { slug: 'inscription-test-civique-2026-ou-quand-comment-sinscrire', anchor: 'S\'inscrire au test civique après la formation civique' },
    { slug: 'premiers-resultats-test-civique-2026-taux-reussite-retours-experience', anchor: 'Résultats du test civique 2026' },
    { slug: 'visa-long-sejour-vls-ts-validation-ofii-2026', anchor: 'VLS-TS et signature du CIR' },
    { slug: 'comment-reussir-test-civique-premier-coup', anchor: 'Réussir le test civique du premier coup' },
  ],

  // Demande asile → premiers pas, CER, récépissé, titre séjour santé
  'demande-asile-france-2026-ofpra-cnda-procedure-delais': [
    { slug: 'premiers-pas-france-etranger-banque-logement-caf-ameli', anchor: 'Premiers pas en France après obtention du statut' },
    { slug: 'contrat-engagement-republicain-2026-obligations-formation-civique', anchor: 'Le CER pour les réfugiés reconnus' },
    { slug: 'titre-sejour-etranger-malade-raisons-sante-2026', anchor: 'Titre de séjour pour raisons de santé' },
    { slug: 'recepisse-titre-de-sejour-droits-duree-voyage', anchor: 'L\'attestation de demande d\'asile et le récépissé' },
  ],

  // ===== Articles impôts étrangers - Liens internes =====
  // Article 1: Déclaration impôts étrangers
  'declaration-impots-etranger-france-2026-obligations-seuils-risques': [
    { slug: 'residance-fiscale-france-etranger-imposabilite-test-2026', anchor: 'Qui est résidant fiscal France ?' },
    { slug: 'titre-sejour-declaration-impots-etranger-droits-obligations-2026', anchor: 'Lien titre de séjour et impôts' },
    { slug: 'changement-statut-etudiant-salarie-2026-demarches-anef', anchor: 'Changement de statut et impôts' },
    { slug: 'premiers-pas-france-etranger-banque-logement-caf-ameli', anchor: 'Aides CAF et allocations familiales' },
  ],

  // Article 2: Résidance fiscale étrangers
  'residance-fiscale-france-etranger-imposabilite-test-2026': [
    { slug: 'declaration-impots-etranger-france-2026-obligations-seuils-risques', anchor: 'Qui doit déclarer ses impôts' },
    { slug: 'titre-sejour-declaration-impots-etranger-droits-obligations-2026', anchor: 'Résidance fiscale et titre de séjour' },
    { slug: 'titres-de-sejour-france-guide-complet-2026', anchor: 'Les types de titres de séjour' },
    { slug: 'guide-etudiants-etrangers-france-titres-demarches-2026', anchor: 'Résidance fiscale des étudiants' },
  ],

  // Article 3: Titre de séjour et impôts
  'titre-sejour-declaration-impots-etranger-droits-obligations-2026': [
    { slug: 'declaration-impots-etranger-france-2026-obligations-seuils-risques', anchor: 'Obligations fiscales complètes' },
    { slug: 'residance-fiscale-france-etranger-imposabilite-test-2026', anchor: 'Déterminer sa résidance fiscale' },
    { slug: 'dossier-naturalisation-2026-documents-delais-prefecture-anef', anchor: 'Naturalisation et antécédent fiscal' },
    { slug: 'renouvellement-titre-sejour-2026-anef-prefecture-documents-delais', anchor: 'Renouvellement titre et transparence fiscale' },
  ],

  // ===== Articles de base / fondamentaux =====
  'cadre-general-examen-civique': [
    { slug: 'inscription-test-civique-2026-ou-quand-comment-sinscrire', anchor: 'S\'inscrire au test civique 2026' },
    { slug: 'comment-reussir-test-civique-premier-coup', anchor: 'Comment réussir le test civique' },
    { slug: 'documents-test-civique-2026-convocation-piece-identite', anchor: 'Documents à apporter le jour du test' },
    { slug: 'erreurs-frequentes-test-civique-2026-pieges-qcm', anchor: 'Erreurs fréquentes à éviter' },
  ],
  'centres-agrees-examen-civique-2026': [
    { slug: 'inscription-test-civique-2026-ou-quand-comment-sinscrire', anchor: 'Comment s\'inscrire au test civique' },
    { slug: 'prix-test-civique-2026-cout-tarif-titre-sejour-prefecture', anchor: 'Prix du test civique 2026' },
    { slug: 'documents-test-civique-2026-convocation-piece-identite', anchor: 'Documents à apporter au centre' },
    { slug: 'nouveaux-centres-test-civique-mai-2026-liste-complete', anchor: '15 nouveaux centres ouverts en 2026' },
  ],
  'tout-savoir-examen-civique-2026': [
    { slug: 'comment-reussir-test-civique-premier-coup', anchor: 'Réussir le test civique du premier coup' },
    { slug: 'erreurs-frequentes-test-civique-2026-pieges-qcm', anchor: 'Les pièges du QCM civique' },
    { slug: 'prix-test-civique-2026-cout-tarif-titre-sejour-prefecture', anchor: 'Tarif du test civique (90€)' },
    { slug: 'premiers-resultats-test-civique-2026-taux-reussite-retours-experience', anchor: 'Résultats et taux de réussite 2026' },
  ],

  // ===== Articles préparation / 2025 =====
  'questions-frequentes-test-civique-2025': [
    { slug: 'comment-reussir-test-civique-premier-coup', anchor: 'Réussir le test civique du premier coup' },
    { slug: 'erreurs-frequentes-test-civique-2026-pieges-qcm', anchor: 'Pièges fréquents du QCM' },
    { slug: 'inscription-test-civique-2026-ou-quand-comment-sinscrire', anchor: 'S\'inscrire au test civique' },
    { slug: 'contrat-integration-republicaine-cir-2026-formation-civique', anchor: 'Le CIR et la formation civique' },
  ],
  'naturalisation-francaise-conditions-demarches-2025': [
    { slug: 'dossier-naturalisation-2026-documents-delais-prefecture-anef', anchor: 'Dossier de naturalisation 2026' },
    { slug: 'entretien-naturalisation-2026-preparation-assimilation-prefecture', anchor: 'Préparer l\'entretien de naturalisation' },
    { slug: 'niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation', anchor: 'Niveau de français requis (B1)' },
    { slug: 'droit-de-vote-elections-france-2026-guide-citoyen', anchor: 'Droits civiques après naturalisation' },
  ],
  'carte-sejour-pluriannuelle-guide-complet-2025': [
    { slug: 'titres-de-sejour-france-guide-complet-2026', anchor: 'Guide complet des titres de séjour' },
    { slug: 'renouvellement-titre-sejour-2026-anef-prefecture-documents-delais', anchor: 'Renouveler son titre de séjour' },
    { slug: 'hausse-frais-titre-sejour-2026-nouveaux-tarifs-timbres-fiscaux', anchor: 'Tarifs des titres de séjour 2026' },
    { slug: 'guide-anef-complet-2026-creer-compte-deposer-demande', anchor: 'Démarches ANEF pour la carte pluriannuelle' },
  ],
  'carte-resident-10-ans-obtention-2025': [
    { slug: 'titres-de-sejour-france-guide-complet-2026', anchor: 'Tous les types de titres de séjour' },
    { slug: 'dossier-naturalisation-2026-documents-delais-prefecture-anef', anchor: 'Naturalisation après la carte de résident' },
    { slug: 'renouvellement-titre-sejour-2026-anef-prefecture-documents-delais', anchor: 'Renouveler sa carte de résident' },
    { slug: 'niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation', anchor: 'Niveau de français requis' },
  ],
  'titre-sejour-etudiant-france-guide-2025': [
    { slug: 'guide-etudiants-etrangers-france-titres-demarches-2026', anchor: 'Guide étudiant étranger 2026' },
    { slug: 'changement-statut-etudiant-salarie-2026-demarches-anef', anchor: 'Changement de statut étudiant → salarié' },
    { slug: 'guide-anef-complet-2026-creer-compte-deposer-demande', anchor: 'Créer son compte ANEF' },
    { slug: 'visa-long-sejour-vls-ts-validation-ofii-2026', anchor: 'Validation du VLS-TS étudiant' },
  ],

  // ===== Articles thématiques République =====
  'valeurs-republique-francaise-liberte-egalite-fraternite': [
    { slug: 'laicite-france-principe-loi-1905', anchor: 'La laïcité, principe fondamental' },
    { slug: 'symboles-france-drapeau-hymne-marianne', anchor: 'Les symboles de la République' },
    { slug: 'institutions-francaises-president-assemblee-senat', anchor: 'Les institutions françaises' },
    { slug: 'droit-de-vote-elections-france-2026-guide-citoyen', anchor: 'Le droit de vote en France' },
  ],
  'symboles-france-drapeau-hymne-marianne': [
    { slug: 'valeurs-republique-francaise-liberte-egalite-fraternite', anchor: 'Les valeurs de la République' },
    { slug: 'institutions-francaises-president-assemblee-senat', anchor: 'Les institutions françaises' },
    { slug: 'histoire-france-dates-cles-test-civique', anchor: 'Histoire de France : dates clés' },
    { slug: 'culture-francaise-patrimoine-monuments-artistes', anchor: 'Culture et patrimoine français' },
  ],
  'institutions-francaises-president-gouvernement-parlement': [
    { slug: 'institutions-francaises-president-assemblee-senat', anchor: 'Président, Assemblée, Sénat' },
    { slug: 'valeurs-republique-francaise-liberte-egalite-fraternite', anchor: 'Les valeurs républicaines' },
    { slug: 'droit-de-vote-elections-france-2026-guide-citoyen', anchor: 'Le droit de vote et les élections' },
    { slug: 'union-europeenne-france-institutions-citoyennete', anchor: 'La France dans l\'Union européenne' },
  ],
  'histoire-france-dates-cles-test-civique': [
    { slug: 'valeurs-republique-francaise-liberte-egalite-fraternite', anchor: 'Valeurs républicaines issues de l\'Histoire' },
    { slug: 'symboles-france-drapeau-hymne-marianne', anchor: 'Les symboles nés de l\'Histoire' },
    { slug: 'culture-francaise-patrimoine-monuments-artistes', anchor: 'Culture et patrimoine français' },
    { slug: 'institutions-francaises-president-assemblee-senat', anchor: 'Les institutions françaises' },
  ],
  'laicite-france-principe-loi-1905': [
    { slug: 'valeurs-republique-francaise-liberte-egalite-fraternite', anchor: 'Liberté, égalité, fraternité' },
    { slug: 'contrat-integration-republicaine-cir-2026-formation-civique', anchor: 'La formation civique du CIR' },
    { slug: 'contrat-engagement-republicain-2026-obligations-formation-civique', anchor: 'Le Contrat d\'Engagement Républicain' },
    { slug: 'institutions-francaises-president-assemblee-senat', anchor: 'Les institutions garantes de la laïcité' },
  ],
  'droits-devoirs-citoyen-france-2025': [
    { slug: 'droit-de-vote-elections-france-2026-guide-citoyen', anchor: 'Le droit de vote en France' },
    { slug: 'valeurs-republique-francaise-liberte-egalite-fraternite', anchor: 'Valeurs de la République' },
    { slug: 'dossier-naturalisation-2026-documents-delais-prefecture-anef', anchor: 'Devenir citoyen français' },
    { slug: 'declaration-impots-etranger-france-2026-obligations-seuils-risques', anchor: 'L\'obligation de déclarer ses impôts' },
  ],
  'geographie-france-regions-departements-villes': [
    { slug: 'culture-francaise-patrimoine-monuments-artistes', anchor: 'Patrimoine et monuments français' },
    { slug: 'histoire-france-dates-cles-test-civique', anchor: 'Histoire de France' },
    { slug: 'union-europeenne-france-institutions-citoyennete', anchor: 'La France en Europe' },
    { slug: 'institutions-francaises-president-assemblee-senat', anchor: 'Collectivités et institutions' },
  ],
  'culture-francaise-patrimoine-monuments-artistes': [
    { slug: 'histoire-france-dates-cles-test-civique', anchor: 'Dates clés de l\'Histoire de France' },
    { slug: 'geographie-france-regions-departements-villes', anchor: 'Géographie de la France' },
    { slug: 'symboles-france-drapeau-hymne-marianne', anchor: 'Symboles de la France' },
    { slug: 'valeurs-republique-francaise-liberte-egalite-fraternite', anchor: 'Valeurs républicaines' },
  ],
  'union-europeenne-france-institutions-citoyennete': [
    { slug: 'institutions-francaises-president-assemblee-senat', anchor: 'Les institutions nationales' },
    { slug: 'geographie-france-regions-departements-villes', anchor: 'La France en Europe' },
    { slug: 'droit-de-vote-elections-france-2026-guide-citoyen', anchor: 'Élections européennes et vote' },
    { slug: 'voyager-titre-sejour-francais-2026-pays-sans-visa-schengen', anchor: 'Voyager dans l\'espace Schengen' },
  ],
  'regroupement-familial-france-procedure-2025': [
    { slug: 'titres-de-sejour-france-guide-complet-2026', anchor: 'Guide des titres de séjour' },
    { slug: 'attestation-accueil-inviter-famille-france-2026-mairie-conditions', anchor: 'L\'attestation d\'accueil pour la famille' },
    { slug: 'mariage-etranger-france-2026-papiers-visa-conjoint-titre-sejour', anchor: 'Mariage avec un étranger en France' },
    { slug: 'guide-anef-complet-2026-creer-compte-deposer-demande', anchor: 'Déposer sa demande sur ANEF' },
  ],

  // ===== Articles vie pratique / santé =====
  'systeme-sante-francais-securite-sociale-2025': [
    { slug: 'premiers-pas-france-etranger-banque-logement-caf-ameli', anchor: 'S\'inscrire à Ameli dès l\'arrivée' },
    { slug: 'titre-sejour-etranger-malade-raisons-sante-2026', anchor: 'Titre de séjour pour soins médicaux' },
    { slug: 'titres-de-sejour-france-guide-complet-2026', anchor: 'Titres de séjour donnant accès à la sécu' },
    { slug: 'droits-devoirs-citoyen-france-2025', anchor: 'Droits sociaux des citoyens' },
  ],
  'travailler-france-droits-etrangers-2025': [
    { slug: 'travailler-en-france-guide-permis-contrats-etrangers-2026', anchor: 'Guide travail étrangers 2026' },
    { slug: 'changement-statut-etudiant-salarie-2026-demarches-anef', anchor: 'Passer d\'étudiant à salarié' },
    { slug: 'passeport-talent-2026-conditions-metiers-demarches', anchor: 'Le passeport talent pour travailler' },
    { slug: 'declaration-impots-etranger-france-2026-obligations-seuils-risques', anchor: 'Obligations fiscales des travailleurs étrangers' },
  ],

  // ===== 5 Articles quotidien immigration =====
  'mariage-etranger-france-2026-papiers-visa-conjoint-titre-sejour': [
    { slug: 'regroupement-familial-france-procedure-2025', anchor: 'Regroupement familial en France' },
    { slug: 'attestation-accueil-inviter-famille-france-2026-mairie-conditions', anchor: 'Attestation d\'accueil pour la famille' },
    { slug: 'titres-de-sejour-france-guide-complet-2026', anchor: 'Titre de séjour vie privée et familiale' },
    { slug: 'dossier-naturalisation-2026-documents-delais-prefecture-anef', anchor: 'Naturalisation par mariage (4 ans)' },
  ],
  'voyager-titre-sejour-francais-2026-pays-sans-visa-schengen': [
    { slug: 'recepisse-titre-de-sejour-droits-duree-voyage', anchor: 'Voyager avec un récépissé' },
    { slug: 'titres-de-sejour-france-guide-complet-2026', anchor: 'Types de titres de séjour' },
    { slug: 'union-europeenne-france-institutions-citoyennete', anchor: 'L\'espace Schengen et la libre circulation' },
    { slug: 'titre-sejour-perdu-vole-expire-2026-demarches-urgence', anchor: 'Titre perdu ou volé à l\'étranger' },
  ],
  'echanger-permis-conduire-etranger-france-2026-ants-demarches': [
    { slug: 'guide-anef-complet-2026-creer-compte-deposer-demande', anchor: 'Plateforme ANEF pour les démarches' },
    { slug: 'premiers-pas-france-etranger-banque-logement-caf-ameli', anchor: 'Démarches à l\'arrivée en France' },
    { slug: 'titres-de-sejour-france-guide-complet-2026', anchor: 'Titre de séjour et permis de conduire' },
    { slug: 'visa-long-sejour-vls-ts-validation-ofii-2026', anchor: 'Validation VLS-TS et permis' },
  ],
  'titre-sejour-perdu-vole-expire-2026-demarches-urgence': [
    { slug: 'recepisse-titre-de-sejour-droits-duree-voyage', anchor: 'Le récépissé de renouvellement' },
    { slug: 'renouvellement-titre-sejour-2026-anef-prefecture-documents-delais', anchor: 'Renouveler son titre de séjour' },
    { slug: 'guide-anef-complet-2026-creer-compte-deposer-demande', anchor: 'Signaler la perte sur ANEF' },
    { slug: 'refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france', anchor: 'Recours en cas de refus' },
  ],
  'attestation-accueil-inviter-famille-france-2026-mairie-conditions': [
    { slug: 'regroupement-familial-france-procedure-2025', anchor: 'Procédure de regroupement familial' },
    { slug: 'mariage-etranger-france-2026-papiers-visa-conjoint-titre-sejour', anchor: 'Mariage avec un étranger en France' },
    { slug: 'visa-long-sejour-vls-ts-validation-ofii-2026', anchor: 'Visa long séjour pour la famille' },
    { slug: 'premiers-pas-france-etranger-banque-logement-caf-ameli', anchor: 'Premiers pas en France pour les proches' },
  ],

  // ===== 5 Articles Actualités avril 2026 =====
  'statistiques-test-civique-2026-taux-reussite-72-pourcent': [
    { slug: 'premiers-resultats-test-civique-2026-taux-reussite-retours-experience', anchor: 'Retours d\'expérience des candidats' },
    { slug: 'comment-reussir-test-civique-premier-coup', anchor: 'Comment réussir le test civique' },
    { slug: 'erreurs-frequentes-test-civique-2026-pieges-qcm', anchor: 'Erreurs fréquentes au test' },
    { slug: 'inscription-test-civique-2026-ou-quand-comment-sinscrire', anchor: 'S\'inscrire au test civique' },
  ],
  'circulaire-avril-2026-delais-naturalisation-reduits-12-mois-maghreb': [
    { slug: 'dossier-naturalisation-2026-documents-delais-prefecture-anef', anchor: 'Constituer son dossier de naturalisation' },
    { slug: 'entretien-naturalisation-2026-preparation-assimilation-prefecture', anchor: 'Préparer l\'entretien d\'assimilation' },
    { slug: 'niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation', anchor: 'Niveau de français B1 requis' },
    { slug: 'prefectures-delais-rendez-vous-avril-2026-solutions', anchor: 'Délais en préfecture avril 2026' },
  ],
  'nouveaux-centres-test-civique-mai-2026-liste-complete': [
    { slug: 'centres-agrees-examen-civique-2026', anchor: 'Liste complète des centres agréés' },
    { slug: 'inscription-test-civique-2026-ou-quand-comment-sinscrire', anchor: 'S\'inscrire au test civique' },
    { slug: 'statistiques-test-civique-2026-taux-reussite-72-pourcent', anchor: 'Taux de réussite 2026 : 72%' },
    { slug: 'prix-test-civique-2026-cout-tarif-titre-sejour-prefecture', anchor: 'Prix du test civique' },
  ],
  'reforme-test-civique-50-questions-juin-2026': [
    { slug: 'tout-savoir-examen-civique-2026', anchor: 'Tout savoir sur l\'examen civique' },
    { slug: 'comment-reussir-test-civique-premier-coup', anchor: 'Comment réussir le test civique' },
    { slug: 'statistiques-test-civique-2026-taux-reussite-72-pourcent', anchor: 'Statistiques et taux de réussite' },
    { slug: 'erreurs-frequentes-test-civique-2026-pieges-qcm', anchor: 'Éviter les erreurs fréquentes' },
  ],
  'prefectures-delais-rendez-vous-avril-2026-solutions': [
    { slug: 'guide-anef-complet-2026-creer-compte-deposer-demande', anchor: 'Démarches en ligne via ANEF' },
    { slug: 'renouvellement-titre-sejour-2026-anef-prefecture-documents-delais', anchor: 'Renouvellement titre de séjour' },
    { slug: 'recepisse-titre-de-sejour-droits-duree-voyage', anchor: 'Le récépissé pendant l\'attente' },
    { slug: 'circulaire-avril-2026-delais-naturalisation-reduits-12-mois-maghreb', anchor: 'Délais naturalisation réduits (circulaire)' },
  ],

  // ===== Articles Maghreb / élections / actualités =====
  'elections-municipales-2026-bally-bagayoko-valeurs-republicaines-test-civique': [
    { slug: 'droit-de-vote-elections-france-2026-guide-citoyen', anchor: 'Le droit de vote en France' },
    { slug: 'institutions-francaises-president-assemblee-senat', anchor: 'Les institutions françaises' },
    { slug: 'valeurs-republique-francaise-liberte-egalite-fraternite', anchor: 'Valeurs républicaines' },
    { slug: 'dossier-naturalisation-2026-documents-delais-prefecture-anef', anchor: 'Voter après naturalisation' },
  ],
  'attentat-dejoue-paris-2026-securite-nationale-vigipirate-test-civique': [
    { slug: 'institutions-francaises-president-assemblee-senat', anchor: 'Les forces de sécurité françaises' },
    { slug: 'valeurs-republique-francaise-liberte-egalite-fraternite', anchor: 'Protection des valeurs républicaines' },
    { slug: 'laicite-france-principe-loi-1905', anchor: 'Laïcité et vivre-ensemble' },
    { slug: 'droits-devoirs-citoyen-france-2025', anchor: 'Droits et devoirs du citoyen' },
  ],
  'coupe-du-monde-2026-equipe-de-france-integration-sport-test-civique': [
    { slug: 'culture-francaise-patrimoine-monuments-artistes', anchor: 'Culture et patrimoine français' },
    { slug: 'valeurs-republique-francaise-liberte-egalite-fraternite', anchor: 'Valeurs d\'intégration et fraternité' },
    { slug: 'histoire-france-dates-cles-test-civique', anchor: 'Moments forts de l\'Histoire de France' },
    { slug: 'symboles-france-drapeau-hymne-marianne', anchor: 'La Marseillaise et les symboles' },
  ],
  'penurie-carburant-prix-essence-2026-economie-francaise-test-civique': [
    { slug: 'institutions-francaises-president-assemblee-senat', anchor: 'Rôle du gouvernement dans l\'économie' },
    { slug: 'union-europeenne-france-institutions-citoyennete', anchor: 'Politique énergétique européenne' },
    { slug: 'declaration-impots-etranger-france-2026-obligations-seuils-risques', anchor: 'Fiscalité et économie' },
    { slug: 'droits-devoirs-citoyen-france-2025', anchor: 'Droits économiques des citoyens' },
  ],
  'tensions-iran-usa-petrole-2026-geopolitique-france-test-civique': [
    { slug: 'union-europeenne-france-institutions-citoyennete', anchor: 'La France dans les relations internationales' },
    { slug: 'institutions-francaises-president-assemblee-senat', anchor: 'La diplomatie française' },
    { slug: 'histoire-france-dates-cles-test-civique', anchor: 'La France dans l\'Histoire mondiale' },
    { slug: 'penurie-carburant-prix-essence-2026-economie-francaise-test-civique', anchor: 'Impact sur l\'économie française' },
  ],
};

/**
 * Récupère les liens internes pour un article donné
 */
export function getInternalLinks(slug: string): InternalLink[] {
  return internalLinksMap[slug] || [];
}
