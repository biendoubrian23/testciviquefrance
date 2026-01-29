/**
 * Index des contenus SEO
 * Point d'entrée pour accéder à tous les contenus d'articles
 */

// Re-export de tous les contenus
export * from './articles-part1';
export * from './articles-part2';
export * from './articles-part3';
export * from './articles-part4';
export * from './articles-part5';
export * from './articles-new';

// Import des contenus individuels pour le mapping
import {
  reussirTestCiviqueContent,
  questionsCiviquesContent,
  naturalisationContent,
  ArticleFullContent
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
