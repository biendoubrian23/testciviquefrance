/**
 * Index des contenus SEO
 * Point d'entrée pour accéder à tous les contenus d'articles
 *
 * NOTE: On évite "export *" combiné avec des imports nommés depuis les mêmes
 * modules — ce pattern provoque un bug webpack runtime
 * "Cannot read properties of undefined (reading 'call')".
 * Les types/interfaces sont re-exportés explicitement ci-dessous.
 */

// Re-export explicite des types (définis uniquement dans articles-part1)
export type { ArticleFullContent, ArticleSection, VideoEmbed, ExternalSource } from './articles-part1';

// Import des contenus individuels pour le mapping
import type { ArticleFullContent } from './articles-part1';

import {
  reussirTestCiviqueContent,
  questionsCiviquesContent,
  naturalisationContent,
} from './articles-part1';

import {
  carteSejourPluriannuelleContent,
  carteResident10AnsContent,
  titreSejourEtudiantContent,
  regroupementFamilialContent,
} from './articles-part2';

import {
  valeursRepubliqueContent,
  symbolesFranceContent,
  institutionsFrancaisesContent,
} from './articles-part3';

import {
  histoireFranceContent,
  laiciteFranceContent,
  droitsDevoirsContent,
  systemeSanteContent,
  travaillerFranceContent,
} from './articles-part4';

import {
  geographieFranceContent,
  cultureFranceContent,
  unionEuropeenneContent,
} from './articles-part5';

import {
  titresSejourContent,
  etudiantsEtrangersContent,
  travailFranceContent,
} from './articles-new';

import {
  erreursTestCiviqueContent,
  contratIntegrationRepublicaineContent,
} from './articles-ai-seo';

import {
  documentsTestCiviqueContent,
  niveauxFrancais2026Content,
} from './articles-2026-additions';

import {
  entretienNaturalisationContent,
  droitVoteElectionsContent,
} from './articles-2026-part2';

import {
  renouvellementTitreSejourAnefContent,
  dossierNaturalisation2026Content,
  refusTitreSejourRecours2026Content,
} from './articles-2026-part3';

import {
  prixTestCiviqueTarifsContent,
} from './articles-prix-tarifs';

import {
  penurieCarburantTestCiviqueContent,
  tensionsGeopolitiquesTestCiviqueContent,
  iaMetiersTestCiviqueContent,
} from './articles-tendances-2026';

import {
  electionsMunicipales2026TestCiviqueContent,
  attentatDejoueSecuriteTestCiviqueContent,
  coupeDuMonde2026IntegrationTestCiviqueContent,
} from './articles-actualites-mars-2026';

import {
  testCiviqueGratuitBlancContent,
  niveauLangueNationaliteFrancaiseContent,
  carteSejourFranceGuideCompletContent,
} from './articles-requetes-fortes-2026';

// ===== Batch 12 articles SEO - Mai 2026 =====
import { fraisTitreSejourContent } from './articles-frais-titre-sejour-2026';
import { premiersResultatsTestCiviqueContent } from './articles-resultats-test-civique';
import { inscriptionTestCiviqueContent } from './articles-inscription-test-civique';
import { changementStatutEtudiantSalarieContent } from './articles-changement-statut';
import { recepisseContent, guideAnefContent } from './articles-recepisse-anef';
import { vlsTsContent, passeportTalentContent } from './articles-vls-ts-passeport-talent';
import { premiersPasFranceContent } from './articles-premiers-pas-france';
import { titreSejouRaisonsSanteContent } from './articles-titre-sejour-sante';
import { contratEngagementRepublicainContent } from './articles-contrat-republicain';
import { demandeAsileFranceContent } from './articles-demande-asile';

// ===== Batch 3 articles SEO impôts - Juillet 2026 =====
import {
  declarationImpotEtrangerContent,
  residanceFiscaleEtrangerContent,
  titreSejourImpotsContent,
} from './articles-impots-etrangers';

// ===== Articles ciblés Maghreb (Maroc, Algérie, Tunisie) - Avril 2026 =====
import {
  doubleNationaliteMarocContent,
  circulaireMaghreb2026Content,
  binationnaliteMaghrebObligationsContent,
} from './articles-maghreb';

// ===== Articles Actualités - Avril 2026 (Google News) =====
import {
  circulaireAvril2026NaturalisationsContent,
  nouveauxCentresTestCiviqueMai2026Content,
  statistiquesTestCivique2026Content,
  reformeTestCiviqueJuin2026Content,
  prefecturesDelaisAvril2026Content,
} from './articles-actualites-avril-2026';

// ===== Articles Quotidien Immigration - Avril 2026 =====
import {
  mariageEtrangerFranceContent,
  voyagerTitreSejourContent,
  echangePermisConduireEtrangerContent,
  titreSejourPerduVoleExpireContent,
  attestationAccueilFamilleContent,
} from './articles-quotidien-immigration';

// ===== Articles Vie Pratique - Avril 2026 =====
import {
  aidesSocialesEtrangersFranceContent,
  divorceTitreSejourContent,
  autoEntrepreneurEtrangerContent,
  scolariserEnfantsEtrangerContent,
  chomagePerteEmploiEtrangerContent,
} from './articles-vie-pratique-2026';

// ===== Nouveaux articles Avril 2026 =====
import {
  regroupementFamilial2026Content,
  oqtf2026Content,
  declarationImpots2026Content,
  etudiantEtranger2026Content,
} from './articles-nouveaux-avril-2026';

// ===== Articles Naturalisation & Passeport Talent 2026 =====
import {
  naturalisation2026Content,
  passeportTalent2026GuideContent,
} from './articles-naturalisation-passeport-talent-2026';

// ===== Articles Naturalisation Erreurs 2026 =====
import { refusNaturalisationErreurs2026Content } from './articles-naturalisation-erreurs-2026';

// ===== Articles Diplômes, Mariage, Retraite - Avril 2026 =====
import { reconnaissanceDiplomesContent } from './articles-reconnaissance-diplomes';
import { nationaliteParMariageContent } from './articles-nationalite-mariage';
import { retraiteEtrangersFranceContent } from './articles-retraite-etrangers';

// ===== Articles Buzz Généraux - Avril 2026 =====
import {
  dixDroitsEtrangersContent,
  coutRegularisationFranceContent,
  cinqErreursRefusPrefectureContent,
} from './articles-buzz-generaux';

// ===== Articles Buzz Généraux 2 - Avril 2026 =====
import {
  voyageTropAbsenceTitreContent,
  envoyerArgentPaysFiscContent,
  naturalisationRapide2AnsContent,
} from './articles-buzz-generaux-2';

// ===== Articles Buzz Généraux 3 - Avril 2026 =====
import {
  arnaquesEtrangersFranceContent,
  controlePoliceEtrangerDroitsContent,
  logementEtrangerRefusIllegauxContent,
} from './articles-buzz-generaux-3';

// ===== Articles Vie Pratique (Batch 2) - Avril 2026 =====
import {
  compteBancaireEtrangerFranceContent,
  certificationFrancaisDELFTCFContent,
  medecinTraitantSecuSocialeEtrangerContent,
  mutuelleEtrangerFranceContent,
} from './articles-vie-pratique-2';

// ===== Articles Buzz Généraux 4 - Avril 2026 =====
import {
  travaillerSansPapiersFranceContent,
  avoirEnfantFranceEtrangerContent,
  oqtfEnfantsFranceContent,
  primeRetourVolontaireFranceContent,
} from './articles-buzz-generaux-4';

// ===== Articles Buzz Généraux 5 - Avril 2026 =====
import {
  regularisationSansPapiers2026Content,
  naturalisationRefusee2026Content,
  carteResident10Ans2026Content,
} from './articles-buzz-generaux-5';

// ===== Article Taxes Titres Séjour - Mai 2026 =====
import { haussesTaxesTitresSejour2026Content } from './articles-taxes-titres-sejour-2026';

// ===== Article Frais Université Hors-UE - Mai 2026 =====
import { fraisUniversiteHorsUe2026Content } from './articles-frais-universite-hors-ue-2026';

// ===== Article Examen Civique Obligatoire 2026 (article pilier éditorial) =====
import { examenCiviqueObligatoire2026Content } from './articles-examen-civique-obligatoire-2026';

// ===== Article Coût total de la naturalisation 2026 (timbre 255 €) =====
import { coutNaturalisation2026Content } from './articles-cout-naturalisation-2026';

// ===== Articles Buzz Actualité - Avril 2026 =====
import {
  espagneRegularisation2026Content,
  craRetention7Mois2026Content,
  dossiersBlockesPrefecture2026Content,
} from './articles-buzz-actu-2026';

// ===== Articles Buzz Nouveaux - Avril 2026 =====
import {
  doubleNationaliteGeneralContent,
  unEtrangerSurTroisNationaliteContent,
  titreSejourExpireEtrangerContent,
} from './articles-buzz-nouveaux-2026';

// ===== Articles ANEF 2026 (Bing SEO) =====
import {
  anefMonCompteConnexionContent,
  anefEtudiantEtrangerContent,
  compteAnefCreerContent,
  ouvrirCompteAnefProblemesContent,
} from './articles-anef-2026';

// ===== Articles ANTS 2026 (Bing SEO) =====
import {
  antsGouvFrToutesDemarchesContent,
  antsPermisConduireDemandeContent,
  antsPermisConduireEnLigneEtapesContent,
  antsDemarchesEnLigneContent,
} from './articles-ants-2026';

// ===== Article Campus France 2026 (Bing SEO) =====
import { campusFranceEtudeFranceContent } from './articles-campus-france-2026';

// ===== Articles Passeport Talent par catégorie + Impôts variantes 2026 =====
import {
  passeportTalentChercheurContent,
  passeportTalentSalarieQualifieContent,
  passeportTalentCreationEntrepriseContent,
  declarationImpotsNonResidentContent,
  declarationImpotsPremiereAnneeContent,
} from './articles-passeport-impots-2026';

// ===== Page Ressources Backlinks 2026 =====
import { ressourcesUtilesEtrangersContent } from './articles-ressources-2026';

// ===== Batch Mai 2026 — 12 articles =====
// Les 3 premiers sont publiés (06/05/2026). Les 9 suivants sont en brouillon
// (champ `publishedAt` futur) et seront publiés au fil de l'eau en retirant
// leur `publishedAt` puis en pushant.
import {
  article1Content as anefDossierBloqueContent,
  article2Content as antsRdvIndispoContent,
  article3Content as naturalisationDecretMariageContent,
} from './articles-batch-mai-2026-1';
import {
  article1Content as anefFranceConnectBloqueContent,
  article2Content as anefErreursCourantesContent,
  article3Content as echangePermisPaysAccordsContent,
} from './articles-batch-mai-2026-2';
import {
  article1Content as famillePasseportTalentContent,
  article2Content as naturalisationEnfantMineurContent,
  article3Content as oqtfEtudiantContent,
} from './articles-batch-mai-2026-3';
import {
  article1Content as refusNaturalisationCadaContent,
  article2Content as antsPermisCategorieBContent,
  article3Content as renouvellementResident10AnsContent,
} from './articles-batch-mai-2026-4';

// Map slug -> contenu complet
export const articleContents: Record<string, ArticleFullContent> = {
  'comment-reussir-test-civique-premier-coup': reussirTestCiviqueContent,
  'questions-frequentes-test-civique-2025': questionsCiviquesContent,
  'naturalisation-francaise-conditions-demarches-2025': naturalisationContent,
  'carte-sejour-pluriannuelle-guide-complet-2025': carteSejourPluriannuelleContent,
  'carte-resident-10-ans-obtention-2025': carteResident10AnsContent,
  'titre-sejour-etudiant-france-guide-2025': titreSejourEtudiantContent,
  'regroupement-familial-france-procedure-2025': regroupementFamilialContent,
  'valeurs-republique-francaise-liberte-egalite-fraternite': valeursRepubliqueContent,
  'symboles-france-marianne-coq-drapeau-tricolore': symbolesFranceContent,
  'institutions-francaises-president-assemblee-senat': institutionsFrancaisesContent,
  'histoire-france-dates-cles-test-civique': histoireFranceContent,
  'laicite-france-principe-loi-1905': laiciteFranceContent,
  'droits-devoirs-citoyens-france-guide': droitsDevoirsContent,
  'systeme-sante-france-etranger-securite-sociale': systemeSanteContent,
  'travailler-france-etranger-autorisation-droits': travaillerFranceContent,
  'geographie-france-regions-departements-villes': geographieFranceContent,
  'culture-francaise-patrimoine-monuments-artistes': cultureFranceContent,
  'union-europeenne-france-institutions-citoyennete': unionEuropeenneContent,
  'titres-de-sejour-france-guide-complet-2026': titresSejourContent,
  'guide-etudiants-etrangers-france-titres-demarches-2026': etudiantsEtrangersContent,
  'travailler-en-france-guide-permis-contrats-etrangers-2026': travailFranceContent,
  'erreurs-frequentes-test-civique-2026-pieges-qcm': erreursTestCiviqueContent,
  'contrat-integration-republicaine-cir-2026-formation-civique': contratIntegrationRepublicaineContent,
  'documents-test-civique-2026-convocation-piece-identite': documentsTestCiviqueContent,
  'niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation': niveauxFrancais2026Content,
  'entretien-naturalisation-2026-preparation-assimilation-prefecture': entretienNaturalisationContent,
  'droit-de-vote-elections-france-2026-guide-citoyen': droitVoteElectionsContent,
  'renouvellement-titre-sejour-2026-anef-prefecture-documents-delais': renouvellementTitreSejourAnefContent,
  'dossier-naturalisation-2026-documents-delais-prefecture-anef': dossierNaturalisation2026Content,
  'refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france': refusTitreSejourRecours2026Content,
  'prix-test-civique-2026-cout-tarif-titre-sejour-prefecture': prixTestCiviqueTarifsContent,
  'penurie-carburant-prix-essence-2026-economie-francaise-test-civique': penurieCarburantTestCiviqueContent,
  'tensions-iran-usa-petrole-2026-geopolitique-france-test-civique': tensionsGeopolitiquesTestCiviqueContent,
  'intelligence-artificielle-metiers-disparaissent-2026-travail-france-test-civique': iaMetiersTestCiviqueContent,
  'elections-municipales-2026-bally-bagayoko-valeurs-republicaines-test-civique': electionsMunicipales2026TestCiviqueContent,
  'attentat-dejoue-paris-2026-securite-nationale-vigipirate-test-civique': attentatDejoueSecuriteTestCiviqueContent,
  'coupe-du-monde-2026-equipe-de-france-integration-sport-test-civique': coupeDuMonde2026IntegrationTestCiviqueContent,
  'test-civique-gratuit-en-ligne-2026-examen-blanc-entrainement-qcm': testCiviqueGratuitBlancContent,
  'niveau-de-langue-francais-nationalite-titre-sejour-a2-b1-2026': niveauLangueNationaliteFrancaiseContent,
  'carte-de-sejour-france-2026-guide-complet-types-demarches-renouvellement': carteSejourFranceGuideCompletContent,
  // Batch 12 articles SEO - Mai 2026
  'hausse-frais-titre-sejour-2026-nouveaux-tarifs-timbres-fiscaux': fraisTitreSejourContent,
  'premiers-resultats-test-civique-2026-taux-reussite-retours-experience': premiersResultatsTestCiviqueContent,
  'inscription-test-civique-2026-ou-quand-comment-sinscrire': inscriptionTestCiviqueContent,
  'changement-statut-etudiant-salarie-2026-demarches-anef': changementStatutEtudiantSalarieContent,
  'recepisse-titre-de-sejour-droits-duree-voyage': recepisseContent,
  'guide-anef-complet-2026-creer-compte-deposer-demande': guideAnefContent,
  'visa-long-sejour-vls-ts-validation-ofii-2026': vlsTsContent,
  'passeport-talent-2026-conditions-metiers-demarches': passeportTalentContent,
  'premiers-pas-france-etranger-banque-logement-caf-ameli': premiersPasFranceContent,
  'titre-sejour-etranger-malade-raisons-sante-2026': titreSejouRaisonsSanteContent,
  'contrat-engagement-republicain-2026-obligations-formation-civique': contratEngagementRepublicainContent,
  'demande-asile-france-2026-ofpra-cnda-procedure-delais': demandeAsileFranceContent,
  // Batch 3 articles SEO - Impôts étrangers - Juillet 2026
  'declaration-impots-etranger-france-2026-obligations-seuils-risques': declarationImpotEtrangerContent,
  'residance-fiscale-france-etranger-imposabilite-test-2026': residanceFiscaleEtrangerContent,
  'titre-sejour-declaration-impots-etranger-droits-obligations-2026': titreSejourImpotsContent,
  // Articles Maghreb - Avril 2026
  'double-nationalite-franco-marocaine-2026-test-civique-demarches': doubleNationaliteMarocContent,
  'circulaire-avril-2026-naturalisation-maghreb-maroc-algerie-tunisie': circulaireMaghreb2026Content,
  'binationaux-franco-maghrebins-obligations-service-national-vote-consulaire': binationnaliteMaghrebObligationsContent,
  // Articles Actualités - Avril 2026 (Google News)
  'circulaire-avril-2026-delais-naturalisation-reduits-12-mois-maghreb': circulaireAvril2026NaturalisationsContent,
  'nouveaux-centres-test-civique-mai-2026-liste-complete': nouveauxCentresTestCiviqueMai2026Content,
  'statistiques-test-civique-2026-taux-reussite-72-pourcent': statistiquesTestCivique2026Content,
  'reforme-test-civique-50-questions-juin-2026': reformeTestCiviqueJuin2026Content,
  'prefectures-delais-rendez-vous-avril-2026-solutions': prefecturesDelaisAvril2026Content,
  // Articles Quotidien Immigration - Avril 2026
  'mariage-etranger-france-2026-papiers-visa-conjoint-titre-sejour': mariageEtrangerFranceContent,
  'voyager-titre-sejour-francais-2026-pays-sans-visa-schengen': voyagerTitreSejourContent,
  'echanger-permis-conduire-etranger-france-2026-ants-demarches': echangePermisConduireEtrangerContent,
  'titre-sejour-perdu-vole-expire-2026-demarches-urgence': titreSejourPerduVoleExpireContent,
  'attestation-accueil-inviter-famille-france-2026-mairie-conditions': attestationAccueilFamilleContent,
  // Articles Vie Pratique - Avril 2026
  'aides-sociales-etrangers-france-2026-caf-rsa-apl-prime-activite': aidesSocialesEtrangersFranceContent,
  'divorce-separation-titre-sejour-2026-droits-renouvellement-etranger': divorceTitreSejourContent,
  'auto-entrepreneur-etranger-france-2026-creer-entreprise-titre-sejour': autoEntrepreneurEtrangerContent,
  'scolariser-enfants-etranger-france-2026-inscription-ecole-droits': scolariserEnfantsEtrangerContent,
  'chomage-perte-emploi-etranger-france-2026-are-france-travail-droits': chomagePerteEmploiEtrangerContent,
  // Nouveaux articles Avril 2026
  'regroupement-familial-france-2026-guide-complet-conditions-documents-delais': regroupementFamilial2026Content,
  'oqtf-2026-droits-recours-expulsion-aide-juridictionnelle-test-civique': oqtf2026Content,
  'declaration-impots-etrangers-france-2026-guide-pratique-formulaires-dates-remboursement': declarationImpots2026Content,
  'etudiant-etranger-france-2026-visa-campus-france-travail-famille-droit-rester': etudiantEtranger2026Content,
  // Articles Naturalisation & Passeport Talent 2026
  'naturalisation-francaise-2026-delais-conditions-pieges-dossier-complet': naturalisation2026Content,
  'passeport-talent-france-2026-guide-complet-10-categories-famille-naturalisation': passeportTalent2026GuideContent,
  // Articles Naturalisation Erreurs 2026
  'refus-naturalisation-7-erreurs-90-pourcent-candidats': refusNaturalisationErreurs2026Content,
  // Articles Diplômes, Mariage, Retraite - Avril 2026
  'reconnaissance-diplomes-etrangers-france-2026-enic-naric-equivalences': reconnaissanceDiplomesContent,
  'nationalite-francaise-par-mariage-2026-conditions-delai-4-ans-dossier': nationaliteParMariageContent,
  'retraite-etranger-france-2026-droits-aspa-pension-retour-pays': retraiteEtrangersFranceContent,
  // Articles Buzz Généraux - Avril 2026
  'droits-etrangers-france-2026-ce-que-vous-ne-saviez-pas': dixDroitsEtrangersContent,
  'cout-regularisation-situation-france-2026-budget-complet': coutRegularisationFranceContent,
  '5-erreurs-refus-dossier-prefecture-etranger-france-2026': cinqErreursRefusPrefectureContent,
  // Articles Buzz Généraux 2 - Avril 2026
  'absence-france-voyage-perte-titre-sejour-duree-maximale-2026': voyageTropAbsenceTitreContent,
  'envoyer-argent-pays-etranger-france-fisc-seuil-declaration-2026': envoyerArgentPaysFiscContent,
  'naturalisation-francaise-2-ans-raccourcis-legaux-accelerer-2026': naturalisationRapide2AnsContent,
  // Articles Buzz Généraux 3 - Avril 2026
  'arnaques-etrangers-france-2026-faux-avocats-prefecture-anef': arnaquesEtrangersFranceContent,
  'controle-police-etranger-france-droits-2026': controlePoliceEtrangerDroitsContent,
  'louer-appartement-etranger-france-discrimination-refus-illegaux-2026': logementEtrangerRefusIllegauxContent,
  // Articles Vie Pratique (Batch 2) - Avril 2026
  'ouvrir-compte-bancaire-france-etranger-2026-banques-neo-banques-droit-compte': compteBancaireEtrangerFranceContent,
  'delf-tcf-dilf-certification-francais-2026-titre-sejour-naturalisation-laquelle-choisir': certificationFrancaisDELFTCFContent,
  'medecin-traitant-secu-sociale-etranger-france-2026-ameli-carte-vitale': medecinTraitantSecuSocialeEtrangerContent,
  'mutuelle-sante-etranger-france-2026-css-comparer-choisir-obligation': mutuelleEtrangerFranceContent,
  // Articles Buzz Généraux 4 - Avril 2026
  'travailler-sans-papiers-france-2026-risques-regularisation': travaillerSansPapiersFranceContent,
  'avoir-enfant-france-etranger-2026-droit-sol-nationalite-allocations': avoirEnfantFranceEtrangerContent,
  'oqtf-enfants-france-2026-expulsion-enfants-francais-scolarises': oqtfEnfantsFranceContent,
  'prime-retour-volontaire-france-2026-conditions-demarches': primeRetourVolontaireFranceContent,
  // Articles Buzz Généraux 5 - Avril 2026
  'regularisation-sans-papiers-france-2026-methode-demarches-circulaire-valls': regularisationSansPapiers2026Content,
  'naturalisation-francaise-refusee-2026-raisons-cachees-contester-recours': naturalisationRefusee2026Content,
  'carte-resident-10-ans-france-2026-conditions-obtention-refus-prefecture': carteResident10Ans2026Content,
  // Article Taxes Titres Séjour - Mai 2026
  'hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances': haussesTaxesTitresSejour2026Content,
  // Article Frais Université Hors-UE - Mai 2026
  'frais-inscription-universites-france-etudiants-hors-ue-2026': fraisUniversiteHorsUe2026Content,
  // Article pilier éditorial — Examen Civique Obligatoire 2026
  'examen-civique-obligatoire-carte-sejour-pluriannuelle-2026': examenCiviqueObligatoire2026Content,
  // Article éditorial — Coût total de la naturalisation 2026 (timbre 255 €)
  'cout-naturalisation-francaise-2026-budget-complet-timbre-fiscal': coutNaturalisation2026Content,
  // Articles Buzz Actualité - Avril 2026
  'espagne-regularisation-500000-sans-papiers-2026-pourquoi-pas-france': espagneRegularisation2026Content,
  'cra-retention-etrangers-7-jours-7-mois-2026-droits-recours-expulsion': craRetention7Mois2026Content,
  '930000-dossiers-bloques-prefecture-2026-droits-recours-etrangers-france': dossiersBlockesPrefecture2026Content,
  // Articles Buzz Nouveaux - Avril 2026
  'double-nationalite-france-2026-pays-interdisent-risques-declaration': doubleNationaliteGeneralContent,
  '1-etranger-sur-3-nationalite-francaise-chiffres-officiels-2026': unEtrangerSurTroisNationaliteContent,
  'titre-sejour-expire-vacances-etranger-france-que-faire-visa-retour': titreSejourExpireEtrangerContent,
  // Articles ANEF 2026 (Bing SEO)
  'anef-mon-compte-connexion-probleme-solution-2026': anefMonCompteConnexionContent,
  'anef-etudiant-etranger-2026': anefEtudiantEtrangerContent,
  'compte-anef-creer-2026-guide-pas-a-pas': compteAnefCreerContent,
  'ouvrir-compte-anef-2026-etapes-documents-problemes': ouvrirCompteAnefProblemesContent,
  // Articles ANTS 2026 (Bing SEO)
  'ants-gouv-fr-2026-toutes-demarches-guide-complet': antsGouvFrToutesDemarchesContent,
  'ants-permis-conduire-2026-echange-demande-suivi': antsPermisConduireDemandeContent,
  'ants-permis-conduire-en-ligne-2026-etapes': antsPermisConduireEnLigneEtapesContent,
  'ants-demarches-en-ligne-2026-guide-complet': antsDemarchesEnLigneContent,
  // Article Campus France 2026 (Bing SEO)
  'campus-france-etude-france-2026-visa-inscription-procedure': campusFranceEtudeFranceContent,
  // Articles Passeport Talent par catégorie 2026
  'passeport-talent-chercheur-france-2026-conditions-demarches-salaire': passeportTalentChercheurContent,
  'passeport-talent-salarie-qualifie-2026-salaire-conditions-procedure': passeportTalentSalarieQualifieContent,
  'passeport-talent-creation-entreprise-france-2026-conditions-investissement': passeportTalentCreationEntrepriseContent,
  // Articles Impôts variantes 2026
  'declaration-impots-non-resident-france-2026-formulaire-2042-nr-revenus-source-francaise': declarationImpotsNonResidentContent,
  'declaration-impots-premiere-annee-france-etranger-2026-guide-debutant': declarationImpotsPremiereAnneeContent,
  // Page Ressources Backlinks 2026
  'ressources-utiles-etrangers-france-2026-outils-associations-aides': ressourcesUtilesEtrangersContent,
  // Batch programmé Mai 2026 — publication automatique 3/jour à 8h/12h/16h Paris
  'anef-dossier-bloque-en-attente-2026-debloquer-relancer': anefDossierBloqueContent,
  'ants-rdv-indisponible-prefecture-2026-alternatives-solutions': antsRdvIndispoContent,
  'naturalisation-decret-mariage-2026-comparatif-conditions-delais': naturalisationDecretMariageContent,
  'anef-franceconnect-bloque-2026-erreur-connexion-solutions': anefFranceConnectBloqueContent,
  'anef-erreurs-courantes-2026-page-blanche-session-expiree-500': anefErreursCourantesContent,
  'echange-permis-conduire-etranger-france-2026-pays-accords-liste-complete': echangePermisPaysAccordsContent,
  'famille-passeport-talent-france-2026-conjoint-enfants-droits-titre': famillePasseportTalentContent,
  'naturalisation-enfant-mineur-france-2026-effet-collectif-declaration': naturalisationEnfantMineurContent,
  'oqtf-etudiant-etranger-france-2026-recours-droits-defense': oqtfEtudiantContent,
  'dossier-naturalisation-refuse-sans-motif-2026-recours-cada-tribunal': refusNaturalisationCadaContent,
  'ants-permis-conduire-categorie-b-2026-demande-etapes-tarifs': antsPermisCategorieBContent,
  'renouvellement-carte-resident-10-ans-2026-conditions-documents-anef': renouvellementResident10AnsContent,
};

/**
 * Récupère le contenu complet d'un article par son slug
 */
export function getArticleContent(slug: string): ArticleFullContent | undefined {
  return articleContents[slug];
}

/**
 * Récupère tous les slugs d'articles SEO disponibles
 */
export function getAllSEOArticleSlugs(): string[] {
  return Object.keys(articleContents);
}
