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
