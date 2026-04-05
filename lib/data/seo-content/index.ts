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
