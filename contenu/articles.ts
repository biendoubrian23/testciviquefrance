/**
 * Les articles de Test Civique France : le registre, et le format d'un article.
 *
 * Le contenu vit en données, pas en JSX ni en chaînes de markdown : une seule
 * source alimente la page de l'article, la liste `/articles`, les derniers
 * articles de l'accueil, la page auteur, le plan du site, `sitemap-news.xml`,
 * `feed.xml`, le JSON-LD et les vérificateurs du robot éditorial
 * (`docs/seo/ROBOT.md`). Avant le 20/10/2026, les 154 articles vivaient dans
 * quatre systèmes (`lib/data/seo-articles.ts` pour la fiche,
 * `lib/data/seo-content/*` pour le texte, `lib/data/internal-links.ts` pour le
 * maillage, trois composants faits à la main pour trois articles) : ils ont
 * été migrés ici sans changer une seule adresse.
 *
 * Le site est **en français seulement**, et il **vouvoie** ses lecteurs.
 *
 * # Publier un article, pas à pas
 *
 * 1. **Choisir le slug** : `[a-z0-9-]`, **60 caractères au plus** (les anciens
 *    articles en ont de plus longs : ils ne changent pas), choisi sur la
 *    requête visée. L'adresse est `/articles/<slug>` et **ne change plus
 *    jamais** une fois publiée. Le slug sert aussi de campagne aux appels
 *    (`/signup?c=<slug>`).
 * 2. **Écrire le fichier** `contenu/articles/<slug>.ts`, sur le modèle d'un
 *    article voisin :
 *
 *    ```ts
 *    import type { Article } from "@/contenu/articles";
 *
 *    const article: Article = {
 *      slug: "le-slug",
 *      // … les champs décrits plus bas, dans le type `Article`
 *    };
 *
 *    export default article;
 *    ```
 * 3. **L'inscrire ici** : une ligne `import` et une entrée dans `ARTICLES`.
 *    L'ordre du tableau ne compte pas, la liste se trie par date.
 * 4. **Vérifier** : `npm run seo:verifier`, `npx tsc --noEmit`,
 *    `npm run build`, puis `npm run seo:banc`.
 *
 * Rien d'autre à toucher : la liste, l'accueil, le plan du site,
 * `sitemap-news.xml` (les articles de moins de deux jours et demi),
 * `feed.xml`, le sommaire, les cinq appels, la FAQ et les sources en données
 * structurées, et la colonne « À lire ensuite » se déduisent de ces fichiers.
 *
 * # Les règles que les vérificateurs tiennent, et celles qu'ils ne voient pas
 *
 * - ⚠️ **Aucun tiret cadratin ni demi-cadratin**, nulle part : coupez la
 *   phrase, ou mettez une virgule, un deux-points, une parenthèse.
 * - ⚠️ **Toute règle, tout délai, tout montant, toute condition vient d'une
 *   source officielle** déclarée dans `sources` avec sa date de lecture
 *   (`luLe`) : Légifrance, service-public, interieur.gouv.fr, ANEF, OFII,
 *   préfectures, Journal officiel. Un texte pas encore en vigueur le dit, avec
 *   sa date d'entrée en vigueur.
 * - ⚠️ **Neutralité politique stricte** : des faits, des textes, des dates.
 *   Jamais d'opinion sur une loi, un parti ou un responsable ; une position
 *   utile est attribuée à qui la tient, et sourcée.
 * - ⚠️ **Aucun conseil juridique individuel, aucune promesse de résultat** :
 *   la règle générale, puis le renvoi vers la préfecture, un avocat, une
 *   association agréée (La Cimade, etc.) ou le Défenseur des droits.
 * - ⚠️ **Aucun prix de la formation** : les prix vivent dans l'app et chez
 *   Stripe, l'article renvoie à `/tarifs`. Un frais administratif officiel
 *   (timbre fiscal, taxe) s'écrit seulement avec sa source et sa date.
 * - **Aucun chiffre inventé** : une statistique vient du ministère de
 *   l'Intérieur, de l'INSEE ou de la DGEF, avec l'année.
 * - **Les questions d'examen citées** suivent le référentiel officiel
 *   (`docs/RÉFÉRENTIEL DE L'EXAMEN CIVIQUE.txt`) ; on ne présente jamais une
 *   question comme une « vraie question de l'examen ».
 * - **`resume` est repris tel quel** dans la balise `description`, le JSON-LD
 *   et les flux : **entre 50 et 160 caractères**, et il tient debout seul.
 * - **`titreSeo` fait 50 caractères au plus** pour un nouvel article : le
 *   gabarit y ajoute « | Test Civique France » (22 caractères). Les anciens
 *   articles gardent leur titre long jusqu'à leur optimisation.
 * - **Au moins trois `h2`** : le sommaire en a besoin, et l'appel du milieu se
 *   pose avant le `h2` qui tombe à la moitié des titres.
 * - Le texte **vouvoie**, et se lit facilement par un lecteur dont le français
 *   n'est pas la langue maternelle comme par un adolescent de 15 ans :
 *   phrases courtes, mots simples, chaque terme administratif expliqué la
 *   première fois (préfecture, titre de séjour, CESEDA, ANEF, OFII…).
 *
 * # Le balisage du texte
 *
 * Rendu par `components/articles/TexteRiche.tsx`, qui construit des éléments
 * React et jamais du HTML : un article ne peut pas devenir du code.
 *
 * | écrit | rendu |
 * |---|---|
 * | `[le libellé](la cible)` | un lien (interne si la cible commence par `/`) |
 * | `**gras**` | du gras |
 * | `*italique*` | de l'italique |
 * | `==surligné==` | un surlignage, pour le chiffre ou la règle à retenir |
 * | `++souligné++` | un soulignement, pour l'idée qui retourne la phrase |
 *
 * Ils valent dans `chapo`, `p`, `liste`, `encadre`, `citation`, `tableau`,
 * `qcm`, `cta` et les réponses de la FAQ ; pas dans les titres. Dans un
 * encadré, un retour à la ligne (`\n`) commence un nouveau paragraphe.
 *
 * # Les images
 *
 * Une image nouvelle vit dans `public/images/articles/<nom>.webp` (1200 px de
 * large au plus) avec sa petite taille `<nom>-s.webp` (700 px), toutes deux
 * fabriquées par `npm run seo:photo`, depuis des banques libres (Openverse,
 * Wikimedia Commons : CC0, domaine public, CC BY, CC BY-SA). Les couvertures
 * des articles migrés restent des photos Unsplash (licence Unsplash), servies
 * depuis `images.unsplash.com`. **`credit` et `licence` sont obligatoires**,
 * au niveau du type.
 */
import type { Auteur, Rubrique, ThematiqueOfficielle } from "@/contenu/rubriques";

import a1EtrangerSur3NationaliteFrancaiseChiffresOfficiels2026 from "./articles/1-etranger-sur-3-nationalite-francaise-chiffres-officiels-2026";
import a5ErreursRefusDossierPrefectureEtrangerFrance2026 from "./articles/5-erreurs-refus-dossier-prefecture-etranger-france-2026";
import a930000DossiersBloquesPrefecture2026DroitsRecoursEtrangersFr from "./articles/930000-dossiers-bloques-prefecture-2026-droits-recours-etrangers-france";
import absenceFranceVoyagePerteTitreSejourDureeMaximale2026 from "./articles/absence-france-voyage-perte-titre-sejour-duree-maximale-2026";
import aidesSocialesEtrangersFrance2026CafRsaAplPrimeActivite from "./articles/aides-sociales-etrangers-france-2026-caf-rsa-apl-prime-activite";
import algeriensExamenCivique2026Accord1968DispenseSejourMaisPasNat from "./articles/algeriens-examen-civique-2026-accord-1968-dispense-sejour-mais-pas-naturalisation";
import ameliDemarches2026GuideCompletAffiliationCarteVitaleRembours from "./articles/ameli-demarches-2026-guide-complet-affiliation-carte-vitale-remboursements";
import anefDossierBloqueEnAttente2026DebloquerRelancer from "./articles/anef-dossier-bloque-en-attente-2026-debloquer-relancer";
import anefErreursCourantes2026PageBlancheSessionExpiree500 from "./articles/anef-erreurs-courantes-2026-page-blanche-session-expiree-500";
import anefEtudiantEtranger2026 from "./articles/anef-etudiant-etranger-2026";
import anefFranceconnectBloque2026ErreurConnexionSolutions from "./articles/anef-franceconnect-bloque-2026-erreur-connexion-solutions";
import anefMonCompteConnexionProblemeSolution2026 from "./articles/anef-mon-compte-connexion-probleme-solution-2026";
import antsDemarchesEnLigne2026GuideComplet from "./articles/ants-demarches-en-ligne-2026-guide-complet";
import antsPermisConduire2026EchangeDemandeSuivi from "./articles/ants-permis-conduire-2026-echange-demande-suivi";
import antsPermisConduireCategorieB2026DemandeEtapesTarifs from "./articles/ants-permis-conduire-categorie-b-2026-demande-etapes-tarifs";
import antsRdvIndisponiblePrefecture2026AlternativesSolutions from "./articles/ants-rdv-indisponible-prefecture-2026-alternatives-solutions";
import arnaquesEtrangersFrance2026FauxAvocatsPrefectureAnef from "./articles/arnaques-etrangers-france-2026-faux-avocats-prefecture-anef";
import attentatDejoueParis2026SecuriteNationaleVigipirateTestCiviqu from "./articles/attentat-dejoue-paris-2026-securite-nationale-vigipirate-test-civique";
import attestationProlongationInstruction from "./articles/attestation-prolongation-instruction";
import droitDuSolMayotte from "./articles/droit-du-sol-mayotte";
import resultatExamenCivique from "./articles/resultat-examen-civique";
import delaiReponsePrefectureTitreDeSejour90Jours from "./articles/delai-reponse-prefecture-titre-de-sejour-90-jours";
import etiasAutorisationVoyageFrance from "./articles/etias-autorisation-voyage-france";
import attestationAccueilInviterFamilleFrance2026MairieConditions from "./articles/attestation-accueil-inviter-famille-france-2026-mairie-conditions";
import autoEntrepreneurEtrangerFrance2026CreerEntrepriseTitreSejour from "./articles/auto-entrepreneur-etranger-france-2026-creer-entreprise-titre-sejour";
import avoirEnfantFranceEtranger2026DroitSolNationaliteAllocations from "./articles/avoir-enfant-france-etranger-2026-droit-sol-nationalite-allocations";
import binationauxFrancoMaghrebinsObligationsServiceNationalVoteCon from "./articles/binationaux-franco-maghrebins-obligations-service-national-vote-consulaire";
import cadreGeneralExamenCivique from "./articles/cadre-general-examen-civique";
import campusFranceEtudeFrance2026VisaInscriptionProcedure from "./articles/campus-france-etude-france-2026-visa-inscription-procedure";
import carteDeSejourFrance2026GuideCompletTypesDemarchesRenouvellem from "./articles/carte-de-sejour-france-2026-guide-complet-types-demarches-renouvellement";
import carteResident10AnsFrance2026ConditionsObtentionRefusPrefectu from "./articles/carte-resident-10-ans-france-2026-conditions-obtention-refus-prefecture";
import carteSejourPluriannuelleGuideComplet2025 from "./articles/carte-sejour-pluriannuelle-guide-complet-2025";
import centresAgreesExamenCivique2026 from "./articles/centres-agrees-examen-civique-2026";
import changementStatutEtudiantSalarie2026DemarchesAnef from "./articles/changement-statut-etudiant-salarie-2026-demarches-anef";
import chomagePerteEmploiEtrangerFrance2026AreFranceTravailDroits from "./articles/chomage-perte-emploi-etranger-france-2026-are-france-travail-droits";
import circulaireAvril2026NaturalisationMaghrebMarocAlgerieTunisie from "./articles/circulaire-avril-2026-naturalisation-maghreb-maroc-algerie-tunisie";
import commentReussirTestCiviquePremierCoup from "./articles/comment-reussir-test-civique-premier-coup";
import compteAnefCreer2026GuidePasAPas from "./articles/compte-anef-creer-2026-guide-pas-a-pas";
import contratEngagementRepublicain2026ObligationsFormationCivique from "./articles/contrat-engagement-republicain-2026-obligations-formation-civique";
import contratIntegrationRepublicaineCir2026FormationCivique from "./articles/contrat-integration-republicaine-cir-2026-formation-civique";
import controlePoliceEtrangerFranceDroits2026 from "./articles/controle-police-etranger-france-droits-2026";
import coupeDuMonde2026EquipeDeFranceIntegrationSportTestCivique from "./articles/coupe-du-monde-2026-equipe-de-france-integration-sport-test-civique";
import coutNaturalisationFrancaise2026BudgetCompletTimbreFiscal from "./articles/cout-naturalisation-francaise-2026-budget-complet-timbre-fiscal";
import coutRegularisationSituationFrance2026BudgetComplet from "./articles/cout-regularisation-situation-france-2026-budget-complet";
import craRetentionEtrangers7Jours7Mois2026DroitsRecoursExpulsion from "./articles/cra-retention-etrangers-7-jours-7-mois-2026-droits-recours-expulsion";
import cultureFrancaisePatrimoineMonumentsArtistes from "./articles/culture-francaise-patrimoine-monuments-artistes";
import decretDeNaturalisationTrouverEtApres from "./articles/decret-de-naturalisation-trouver-et-apres";
import decretRetentionAdministrative22Octobre2026 from "./articles/decret-retention-administrative-22-octobre-2026";
import declarationImpotsEtrangerFrance2026ObligationsSeuilsRisques from "./articles/declaration-impots-etranger-france-2026-obligations-seuils-risques";
import declarationImpotsNonResidentFrance2026Formulaire2042NrRevenu from "./articles/declaration-impots-non-resident-france-2026-formulaire-2042-nr-revenus-source-francaise";
import declarationImpotsPremiereAnneeFranceEtranger2026GuideDebutan from "./articles/declaration-impots-premiere-annee-france-etranger-2026-guide-debutant";
import delfTcfDilfCertificationFrancais2026TitreSejourNaturalisatio from "./articles/delf-tcf-dilf-certification-francais-2026-titre-sejour-naturalisation-laquelle-choisir";
import demandeAsileFrance2026OfpraCndaProcedureDelais from "./articles/demande-asile-france-2026-ofpra-cnda-procedure-delais";
import dispenseExamenCivique2026QuiEstExempteAgeRefugieAccords from "./articles/dispense-examen-civique-2026-qui-est-exempte-age-refugie-accords";
import divorceSeparationTitreSejour2026DroitsRenouvellementEtranger from "./articles/divorce-separation-titre-sejour-2026-droits-renouvellement-etranger";
import documentsTestCivique2026ConvocationPieceIdentite from "./articles/documents-test-civique-2026-convocation-piece-identite";
import dossierNaturalisation2026DocumentsDelaisPrefectureAnef from "./articles/dossier-naturalisation-2026-documents-delais-prefecture-anef";
import dossierNaturalisationRefuseSansMotif2026RecoursCadaTribunal from "./articles/dossier-naturalisation-refuse-sans-motif-2026-recours-cada-tribunal";
import doubleNationaliteFrance2026PaysInterdisentRisquesDeclaration from "./articles/double-nationalite-france-2026-pays-interdisent-risques-declaration";
import doubleNationaliteFrancoMarocaine2026TestCiviqueDemarches from "./articles/double-nationalite-franco-marocaine-2026-test-civique-demarches";
import droitDeVoteElectionsFrance2026GuideCitoyen from "./articles/droit-de-vote-elections-france-2026-guide-citoyen";
import droitsDevoirsCitoyensFranceGuide from "./articles/droits-devoirs-citoyens-france-guide";
import droitsEtrangersFrance2026CeQueVousNeSaviezPas from "./articles/droits-etrangers-france-2026-ce-que-vous-ne-saviez-pas";
import echangePermisConduireEtrangerFrance2026PaysAccordsListeCompl from "./articles/echange-permis-conduire-etranger-france-2026-pays-accords-liste-complete";
import electionsMunicipales2026BallyBagayokoValeursRepublicainesTes from "./articles/elections-municipales-2026-bally-bagayoko-valeurs-republicaines-test-civique";
import entretienNaturalisation2026PreparationAssimilationPrefecture from "./articles/entretien-naturalisation-2026-preparation-assimilation-prefecture";
import entretienVisaConsulatAmbassadeFrance2026ReussirVisaLongSejou from "./articles/entretien-visa-consulat-ambassade-france-2026-reussir-visa-long-sejour";
import envoyerArgentPaysEtrangerFranceFiscSeuilDeclaration2026 from "./articles/envoyer-argent-pays-etranger-france-fisc-seuil-declaration-2026";
import erreursFrequentesTestCivique2026PiegesQcm from "./articles/erreurs-frequentes-test-civique-2026-pieges-qcm";
import espagneRegularisation500000SansPapiers2026PourquoiPasFrance from "./articles/espagne-regularisation-500000-sans-papiers-2026-pourquoi-pas-france";
import examenCiviqueCarteDeResident from "./articles/examen-civique-carte-de-resident";
import examenCiviqueNaturalisation from "./articles/examen-civique-naturalisation";
import examenCivique2026ExemplesQuestionsCorrigees from "./articles/examen-civique-2026-exemples-questions-corrigees";
import examenCiviqueObligatoireCarteSejourPluriannuelle2026 from "./articles/examen-civique-obligatoire-carte-sejour-pluriannuelle-2026";
import famillePasseportTalentFrance2026ConjointEnfantsDroitsTitre from "./articles/famille-passeport-talent-france-2026-conjoint-enfants-droits-titre";
import fraisInscriptionUniversitesFranceEtudiantsHorsUe2026 from "./articles/frais-inscription-universites-france-etudiants-hors-ue-2026";
import geographieFranceRegionsDepartementsVilles from "./articles/geographie-france-regions-departements-villes";
import guideAnefComplet2026CreerCompteDeposerDemande from "./articles/guide-anef-complet-2026-creer-compte-deposer-demande";
import hausseTaxesTitresSejourMai2026NouveauxTarifsPrefectureLoiFin from "./articles/hausse-taxes-titres-sejour-mai-2026-nouveaux-tarifs-prefecture-loi-finances";
import inscriptionTestCivique2026OuQuandCommentSinscrire from "./articles/inscription-test-civique-2026-ou-quand-comment-sinscrire";
import institutionsFrancaisesPresidentAssembleeSenat from "./articles/institutions-francaises-president-assemblee-senat";
import intelligenceArtificielleMetiersDisparaissent2026TravailFranc from "./articles/intelligence-artificielle-metiers-disparaissent-2026-travail-france-test-civique";
import logementEtudiantEtrangerFrance2026CrousVisaleGarantDossier from "./articles/logement-etudiant-etranger-france-2026-crous-visale-garant-dossier";
import louerAppartementEtrangerFranceDiscriminationRefusIllegaux202 from "./articles/louer-appartement-etranger-france-discrimination-refus-illegaux-2026";
import mariageEtrangerFrance2026PapiersVisaConjointTitreSejour from "./articles/mariage-etranger-france-2026-papiers-visa-conjoint-titre-sejour";
import medecinTraitantSecuSocialeEtrangerFrance2026AmeliCarteVitale from "./articles/medecin-traitant-secu-sociale-etranger-france-2026-ameli-carte-vitale";
import mutuelleSanteEtrangerFrance2026CssComparerChoisirObligation from "./articles/mutuelle-sante-etranger-france-2026-css-comparer-choisir-obligation";
import nationaliteFrancaiseParMariage2026ConditionsDelai4AnsDossier from "./articles/nationalite-francaise-par-mariage-2026-conditions-delai-4-ans-dossier";
import naturalisationDecretMariage2026ComparatifConditionsDelais from "./articles/naturalisation-decret-mariage-2026-comparatif-conditions-delais";
import naturalisationEnfantMineurFrance2026EffetCollectifDeclaratio from "./articles/naturalisation-enfant-mineur-france-2026-effet-collectif-declaration";
import naturalisationFrancaise2AnsRaccourcisLegauxAccelerer2026 from "./articles/naturalisation-francaise-2-ans-raccourcis-legaux-accelerer-2026";
import naturalisationFrancaise2026DelaisConditionsPiegesDossierComp from "./articles/naturalisation-francaise-2026-delais-conditions-pieges-dossier-complet";
import naturalisationFrancaiseRefusee2026RaisonsCacheesContesterRec from "./articles/naturalisation-francaise-refusee-2026-raisons-cachees-contester-recours";
import niveauFrancaisA2B1B22026TitreSejourNaturalisation from "./articles/niveau-francais-a2-b1-b2-2026-titre-sejour-naturalisation";
import numerosUrgenceFrance from "./articles/numeros-urgence-france";
import oqtf2026DroitsRecoursExpulsionAideJuridictionnelleTestCiviqu from "./articles/oqtf-2026-droits-recours-expulsion-aide-juridictionnelle-test-civique";
import oqtfEnfantsFrance2026ExpulsionEnfantsFrancaisScolarises from "./articles/oqtf-enfants-france-2026-expulsion-enfants-francais-scolarises";
import oqtfEtudiantEtrangerFrance2026RecoursDroitsDefense from "./articles/oqtf-etudiant-etranger-france-2026-recours-droits-defense";
import ouvrirCompteBancaireFranceEtranger2026BanquesNeoBanquesDroit from "./articles/ouvrir-compte-bancaire-france-etranger-2026-banques-neo-banques-droit-compte";
import papiersDocumentsObtenirArriveeFrance2026OuCommentDemander from "./articles/papiers-documents-obtenir-arrivee-france-2026-ou-comment-demander";
import passeportTalent2026ConditionsMetiersDemarches from "./articles/passeport-talent-2026-conditions-metiers-demarches";
import passeportTalentChercheurFrance2026ConditionsDemarchesSalaire from "./articles/passeport-talent-chercheur-france-2026-conditions-demarches-salaire";
import passeportTalentCreationEntrepriseFrance2026ConditionsInvesti from "./articles/passeport-talent-creation-entreprise-france-2026-conditions-investissement";
import passeportTalentEtudiantVisiteurNonSoumisExamenCivique2026Cir from "./articles/passeport-talent-etudiant-visiteur-non-soumis-examen-civique-2026-cir";
import passeportTalentSalarieQualifie2026SalaireConditionsProcedure from "./articles/passeport-talent-salarie-qualifie-2026-salaire-conditions-procedure";
import penurieCarburantPrixEssence2026EconomieFrancaiseTestCivique from "./articles/penurie-carburant-prix-essence-2026-economie-francaise-test-civique";
import prefecturesDelaisRendezVousAvril2026Solutions from "./articles/prefectures-delais-rendez-vous-avril-2026-solutions";
import premiersPasFranceEtrangerBanqueLogementCafAmeli from "./articles/premiers-pas-france-etranger-banque-logement-caf-ameli";
import preparerDepartFrance2026ChecklistDocumentsAvantAvion from "./articles/preparer-depart-france-2026-checklist-documents-avant-avion";
import primeRetourVolontaireFrance2026ConditionsDemarches from "./articles/prime-retour-volontaire-france-2026-conditions-demarches";
import prixTestCivique2026CoutTarifTitreSejourPrefecture from "./articles/prix-test-civique-2026-cout-tarif-titre-sejour-prefecture";
import questionsFrequentesTestCivique2025 from "./articles/questions-frequentes-test-civique-2025";
import raterExamenCivique2026RepasserDelaiCoutThemesEchec from "./articles/rater-examen-civique-2026-repasser-delai-cout-themes-echec";
import rdvPrefectureTitreSejourIntrouvable2026CreneauxMarcheNoir from "./articles/rdv-prefecture-titre-sejour-introuvable-2026-creneaux-marche-noir";
import recepisseTitreDeSejourDroitsDureeVoyage from "./articles/recepisse-titre-de-sejour-droits-duree-voyage";
import reconnaissanceDiplomesEtrangersFrance2026EnicNaricEquivalenc from "./articles/reconnaissance-diplomes-etrangers-france-2026-enic-naric-equivalences";
import reformeTestCivique50QuestionsJuin2026 from "./articles/reforme-test-civique-50-questions-juin-2026";
import regularisationMetiersEnTension from "./articles/regularisation-metiers-en-tension";
import refusNaturalisation7Erreurs90PourcentCandidats from "./articles/refus-naturalisation-7-erreurs-90-pourcent-candidats";
import refusTitreSejourOqtfRecours2026GuideEtrangersFrance from "./articles/refus-titre-sejour-oqtf-recours-2026-guide-etrangers-france";
import regroupementFamilialFrance2026GuideCompletConditionsDocument from "./articles/regroupement-familial-france-2026-guide-complet-conditions-documents-delais";
import regularisationSansPapiersFrance2026MethodeDemarchesCirculair from "./articles/regularisation-sans-papiers-france-2026-methode-demarches-circulaire-valls";
import renouvellementCarteResident10Ans2026ConditionsDocumentsAnef from "./articles/renouvellement-carte-resident-10-ans-2026-conditions-documents-anef";
import renouvellementTitreSejour2026AnefPrefectureDocumentsDelais from "./articles/renouvellement-titre-sejour-2026-anef-prefecture-documents-delais";
import rentreeSeptembre2026EtrangersFranceCalendrierDemarchesDelais from "./articles/rentree-septembre-2026-etrangers-france-calendrier-demarches-delais";
import residanceFiscaleFranceEtrangerImposabiliteTest2026 from "./articles/residance-fiscale-france-etranger-imposabilite-test-2026";
import ressourcesUtilesEtrangersFrance2026OutilsAssociationsAides from "./articles/ressources-utiles-etrangers-france-2026-outils-associations-aides";
import retraiteEtrangerFrance2026DroitsAspaPensionRetourPays from "./articles/retraite-etranger-france-2026-droits-aspa-pension-retour-pays";
import scolariserEnfantsEtrangerFrance2026InscriptionEcoleDroits from "./articles/scolariser-enfants-etranger-france-2026-inscription-ecole-droits";
import simulateurEligibiliteExamenCivique2026SuisJeConcerne from "./articles/simulateur-eligibilite-examen-civique-2026-suis-je-concerne";
import statistiquesTestCivique2026TauxReussite72Pourcent from "./articles/statistiques-test-civique-2026-taux-reussite-72-pourcent";
import symbolesFranceMarianneCoqDrapeauTricolore from "./articles/symboles-france-marianne-coq-drapeau-tricolore";
import systemeSanteFranceEtrangerSecuriteSociale from "./articles/systeme-sante-france-etranger-securite-sociale";
import tensionsIranUsaPetrole2026GeopolitiqueFranceTestCivique from "./articles/tensions-iran-usa-petrole-2026-geopolitique-france-test-civique";
import testCiviqueGratuitEnLigne2026ExamenBlancEntrainementQcm from "./articles/test-civique-gratuit-en-ligne-2026-examen-blanc-entrainement-qcm";
import titreSejourDeclarationImpotsEtrangerDroitsObligations2026 from "./articles/titre-sejour-declaration-impots-etranger-droits-obligations-2026";
import titreSejourEtrangerMaladeRaisonsSante2026 from "./articles/titre-sejour-etranger-malade-raisons-sante-2026";
import titreSejourEtudiantFranceGuide2025 from "./articles/titre-sejour-etudiant-france-guide-2025";
import titreSejourExpireVacancesEtrangerFranceQueFaireVisaRetour from "./articles/titre-sejour-expire-vacances-etranger-france-que-faire-visa-retour";
import titreSejourPerduVoleExpire2026DemarchesUrgence from "./articles/titre-sejour-perdu-vole-expire-2026-demarches-urgence";
import toutSavoirExamenCivique2026 from "./articles/tout-savoir-examen-civique-2026";
import travaillerFranceEtrangerAutorisationDroits from "./articles/travailler-france-etranger-autorisation-droits";
import travaillerSansPapiersFrance2026RisquesRegularisation from "./articles/travailler-sans-papiers-france-2026-risques-regularisation";
import unionEuropeenneFranceInstitutionsCitoyennete from "./articles/union-europeenne-france-institutions-citoyennete";
import valeursRepubliqueFrancaiseLiberteEgaliteFraternite from "./articles/valeurs-republique-francaise-liberte-egalite-fraternite";
import visaLongSejourVlsTsValidationOfii2026 from "./articles/visa-long-sejour-vls-ts-validation-ofii-2026";
import voyagerTitreSejourFrancais2026PaysSansVisaSchengen from "./articles/voyager-titre-sejour-francais-2026-pays-sans-visa-schengen";

export { NOM_RUBRIQUE, RUBRIQUES, type Auteur, type Rubrique } from "@/contenu/rubriques";

/**
 * Le crédit d'une image : qui l'a faite, sous quelle licence, d'où elle vient.
 *
 * ⚠️ **Ce n'est pas décoratif.** Une photo sous licence Creative Commons
 * **oblige** à nommer l'auteur et la licence, et à pointer vers l'original.
 * Le type l'exige, plutôt que de compter sur la relecture. Jamais la photo
 * d'une personne identifiable dans une situation sensible (file d'attente de
 * préfecture, contrôle), jamais celle d'une personnalité politique sauf
 * licence explicite et nécessité.
 */
export type Credit = {
  /** L'auteur, ou « Unsplash » pour les couvertures migrées. */
  credit: string;
  /** La licence telle qu'on l'écrit : « CC BY 2.0 », « CC0 », « domaine public », « licence Unsplash ». */
  licence: string;
  /** La page d'origine. */
  source?: string;
};

export type Image = Credit & {
  /** `/images/articles/<nom>.webp` (sa petite taille `<nom>-s.webp` à côté), ou une adresse `https://images.unsplash.com/…` pour les couvertures migrées. */
  src: string;
  /** Ce que montre l'image, pour qui ne la voit pas. Vide pour une couverture décorative. */
  alt: string;
  largeur: number;
  hauteur: number;
  /**
   * Le cadrage de la couverture dans le bandeau, facultatif : deux
   * pourcentages, horizontal puis vertical (`"50% 30%"`), comme
   * `object-position`. À vérifier sur une capture à 1440 et à 390 px.
   */
  position?: string;
};

/** Le ton d'un encadré : la couleur de sa bordure et de son titre. */
export type TonEncadre = "bleu" | "vert" | "ambre" | "rouge" | "violet";

/**
 * Un bloc d'article, dans l'ordre où il s'affiche.
 *
 * | `type` | ce qu'il rend |
 * |---|---|
 * | `p` | un paragraphe |
 * | `h2` | un titre de section : il entre au sommaire et reçoit une ancre (`id` garde une ancre historique) |
 * | `h3` | un sous-titre, hors du sommaire |
 * | `liste` | une liste ; `style` : `puces` (défaut), `coches` (✓ vert), `alertes` (! rouge), `numeros` (1, 2, 3) |
 * | `citation` | une citation en exergue, avec sa source |
 * | `encadre` | un encadré à bordure de couleur, titre facultatif (« À retenir », « Attention ») |
 * | `tableau` | un tableau : une ligne d'en-têtes, puis les lignes |
 * | `qcm` | une question d'entraînement, sa bonne réponse et son explication, rattachée à une thématique officielle |
 * | `image` | une illustration, avec son crédit |
 * | `cta` | l'appel du milieu, à l'endroit choisi (un au plus) |
 */
export type Bloc =
  | { type: "p"; texte: string }
  | { type: "h2"; texte: string; id?: string }
  | { type: "h3"; texte: string }
  | { type: "liste"; items: readonly string[]; style?: "puces" | "coches" | "alertes" | "numeros" }
  | { type: "citation"; texte: string; source?: string }
  | { type: "encadre"; titre?: string; texte: string; ton?: TonEncadre }
  | { type: "tableau"; entetes: readonly string[]; lignes: readonly (readonly string[])[]; legende?: string }
  | {
      type: "qcm";
      /** La thématique officielle de la question : l'une des cinq du décret. */
      thematique: ThematiqueOfficielle;
      question: string;
      choix: readonly string[];
      /** L'indice de la bonne réponse dans `choix`, à partir de 0. */
      reponse: number;
      explication: string;
    }
  | (Image & { type: "image"; legende?: string })
  /**
   * L'appel du milieu de l'article, à l'endroit choisi.
   *
   * Sans bloc `cta`, la page en pose un d'office avant le `h2` qui tombe à la
   * moitié des titres, avec une phrase générique. En écrire un sert à choisir
   * l'endroit **et** la phrase, liée à ce que l'article vient de dire
   * (« Testez-vous sur les 40 questions types avant le jour J »). Un seul par
   * article. Le bouton mène toujours à l'inscription gratuite.
   */
  | { type: "cta"; texte?: string; bouton?: string };

/** Une question de la FAQ : la phrase qu'on taperait dans Google, et une réponse directe. */
export type QuestionArticle = { question: string; reponse: string };

/** Une vidéo YouTube, chargée seulement au clic (façade). */
export type Video = { id: string; titre: string };

/**
 * Une source citée en fin d'article et en `citation` dans le JSON-LD.
 *
 * `officiel` : Légifrance, service-public, interieur.gouv.fr, ANEF, OFII,
 * préfecture, Journal officiel, INSEE, DGEF. `juridique` : un texte de loi ou
 * une décision. `luLe` (AAAA-MM-JJ) est la date à laquelle la page a été lue :
 * **obligatoire** pour un article publié ou retouché depuis la mise en place
 * du robot (`docs/seo/REGLAGES.json > doctrine_depuis`).
 */
export type Source = {
  titre: string;
  url: string;
  type: "officiel" | "juridique" | "article" | "video";
  description?: string;
  luLe?: string;
};

/** Un lien de la section « À lire aussi », choisi à la main. */
export type LienInterne = { slug: string; ancre: string };

export type Article = {
  /** L'adresse, sans `/articles/` : `[a-z0-9-]`, définitive. */
  slug: string;
  /** Le titre affiché en `h1`. Il peut accrocher, jamais tromper. */
  titre: string;
  /** Le titre de l'onglet et des résultats Google, sans « | Test Civique France » que le gabarit ajoute. */
  titreSeo: string;
  /** La description : entre 50 et 160 caractères, et elle tient debout seule. */
  resume: string;
  /** Le chapeau, en tête et en plus grand : la réponse est dans la première phrase. */
  chapo: string;
  /** Format ISO (`2026-10-20`) : la date que Google affiche. Elle ne bouge plus. */
  publieLe: string;
  /** Format ISO. La date de la dernière retouche réelle ; égale à `publieLe` le jour de la publication. */
  modifieLe: string;
  /** La durée de lecture annoncée, en minutes. */
  minutes: number;
  /** Le mot-clé principal. */
  theme: string;
  /** Quelques requêtes voisines, reprises dans `keywords` et `sitemap-news.xml`. */
  motsCles?: readonly string[];
  rubrique: Rubrique;
  /** La signature. Un article du robot est signé « Équipe Le Test Civique ». */
  auteur: Auteur;
  couverture: Image;
  blocs: readonly Bloc[];
  faq?: readonly QuestionArticle[];
  videos?: readonly Video[];
  sources?: readonly Source[];
  aLireAussi?: readonly LienInterne[];
};

export const ARTICLES: readonly Article[] = [
  a1EtrangerSur3NationaliteFrancaiseChiffresOfficiels2026,
  a5ErreursRefusDossierPrefectureEtrangerFrance2026,
  a930000DossiersBloquesPrefecture2026DroitsRecoursEtrangersFr,
  absenceFranceVoyagePerteTitreSejourDureeMaximale2026,
  aidesSocialesEtrangersFrance2026CafRsaAplPrimeActivite,
  algeriensExamenCivique2026Accord1968DispenseSejourMaisPasNat,
  ameliDemarches2026GuideCompletAffiliationCarteVitaleRembours,
  anefDossierBloqueEnAttente2026DebloquerRelancer,
  anefErreursCourantes2026PageBlancheSessionExpiree500,
  anefEtudiantEtranger2026,
  anefFranceconnectBloque2026ErreurConnexionSolutions,
  anefMonCompteConnexionProblemeSolution2026,
  antsDemarchesEnLigne2026GuideComplet,
  antsPermisConduire2026EchangeDemandeSuivi,
  antsPermisConduireCategorieB2026DemandeEtapesTarifs,
  antsRdvIndisponiblePrefecture2026AlternativesSolutions,
  arnaquesEtrangersFrance2026FauxAvocatsPrefectureAnef,
  attentatDejoueParis2026SecuriteNationaleVigipirateTestCiviqu,
  attestationAccueilInviterFamilleFrance2026MairieConditions,
  attestationProlongationInstruction,
  droitDuSolMayotte,
  resultatExamenCivique,
  delaiReponsePrefectureTitreDeSejour90Jours,
  etiasAutorisationVoyageFrance,
  autoEntrepreneurEtrangerFrance2026CreerEntrepriseTitreSejour,
  avoirEnfantFranceEtranger2026DroitSolNationaliteAllocations,
  binationauxFrancoMaghrebinsObligationsServiceNationalVoteCon,
  cadreGeneralExamenCivique,
  campusFranceEtudeFrance2026VisaInscriptionProcedure,
  carteDeSejourFrance2026GuideCompletTypesDemarchesRenouvellem,
  carteResident10AnsFrance2026ConditionsObtentionRefusPrefectu,
  carteSejourPluriannuelleGuideComplet2025,
  centresAgreesExamenCivique2026,
  changementStatutEtudiantSalarie2026DemarchesAnef,
  chomagePerteEmploiEtrangerFrance2026AreFranceTravailDroits,
  circulaireAvril2026NaturalisationMaghrebMarocAlgerieTunisie,
  commentReussirTestCiviquePremierCoup,
  compteAnefCreer2026GuidePasAPas,
  contratEngagementRepublicain2026ObligationsFormationCivique,
  contratIntegrationRepublicaineCir2026FormationCivique,
  controlePoliceEtrangerFranceDroits2026,
  coupeDuMonde2026EquipeDeFranceIntegrationSportTestCivique,
  coutNaturalisationFrancaise2026BudgetCompletTimbreFiscal,
  coutRegularisationSituationFrance2026BudgetComplet,
  craRetentionEtrangers7Jours7Mois2026DroitsRecoursExpulsion,
  decretRetentionAdministrative22Octobre2026,
  decretDeNaturalisationTrouverEtApres,
  cultureFrancaisePatrimoineMonumentsArtistes,
  declarationImpotsEtrangerFrance2026ObligationsSeuilsRisques,
  declarationImpotsNonResidentFrance2026Formulaire2042NrRevenu,
  declarationImpotsPremiereAnneeFranceEtranger2026GuideDebutan,
  delfTcfDilfCertificationFrancais2026TitreSejourNaturalisatio,
  demandeAsileFrance2026OfpraCndaProcedureDelais,
  dispenseExamenCivique2026QuiEstExempteAgeRefugieAccords,
  divorceSeparationTitreSejour2026DroitsRenouvellementEtranger,
  documentsTestCivique2026ConvocationPieceIdentite,
  dossierNaturalisation2026DocumentsDelaisPrefectureAnef,
  dossierNaturalisationRefuseSansMotif2026RecoursCadaTribunal,
  doubleNationaliteFrance2026PaysInterdisentRisquesDeclaration,
  doubleNationaliteFrancoMarocaine2026TestCiviqueDemarches,
  droitDeVoteElectionsFrance2026GuideCitoyen,
  droitsDevoirsCitoyensFranceGuide,
  droitsEtrangersFrance2026CeQueVousNeSaviezPas,
  echangePermisConduireEtrangerFrance2026PaysAccordsListeCompl,
  electionsMunicipales2026BallyBagayokoValeursRepublicainesTes,
  entretienNaturalisation2026PreparationAssimilationPrefecture,
  entretienVisaConsulatAmbassadeFrance2026ReussirVisaLongSejou,
  envoyerArgentPaysEtrangerFranceFiscSeuilDeclaration2026,
  erreursFrequentesTestCivique2026PiegesQcm,
  espagneRegularisation500000SansPapiers2026PourquoiPasFrance,
  examenCiviqueCarteDeResident,
  examenCiviqueNaturalisation,
  examenCivique2026ExemplesQuestionsCorrigees,
  examenCiviqueObligatoireCarteSejourPluriannuelle2026,
  famillePasseportTalentFrance2026ConjointEnfantsDroitsTitre,
  fraisInscriptionUniversitesFranceEtudiantsHorsUe2026,
  geographieFranceRegionsDepartementsVilles,
  guideAnefComplet2026CreerCompteDeposerDemande,
  hausseTaxesTitresSejourMai2026NouveauxTarifsPrefectureLoiFin,
  inscriptionTestCivique2026OuQuandCommentSinscrire,
  institutionsFrancaisesPresidentAssembleeSenat,
  intelligenceArtificielleMetiersDisparaissent2026TravailFranc,
  logementEtudiantEtrangerFrance2026CrousVisaleGarantDossier,
  louerAppartementEtrangerFranceDiscriminationRefusIllegaux202,
  mariageEtrangerFrance2026PapiersVisaConjointTitreSejour,
  medecinTraitantSecuSocialeEtrangerFrance2026AmeliCarteVitale,
  mutuelleSanteEtrangerFrance2026CssComparerChoisirObligation,
  nationaliteFrancaiseParMariage2026ConditionsDelai4AnsDossier,
  naturalisationDecretMariage2026ComparatifConditionsDelais,
  naturalisationEnfantMineurFrance2026EffetCollectifDeclaratio,
  naturalisationFrancaise2AnsRaccourcisLegauxAccelerer2026,
  naturalisationFrancaise2026DelaisConditionsPiegesDossierComp,
  naturalisationFrancaiseRefusee2026RaisonsCacheesContesterRec,
  niveauFrancaisA2B1B22026TitreSejourNaturalisation,
  numerosUrgenceFrance,
  oqtf2026DroitsRecoursExpulsionAideJuridictionnelleTestCiviqu,
  oqtfEnfantsFrance2026ExpulsionEnfantsFrancaisScolarises,
  oqtfEtudiantEtrangerFrance2026RecoursDroitsDefense,
  ouvrirCompteBancaireFranceEtranger2026BanquesNeoBanquesDroit,
  papiersDocumentsObtenirArriveeFrance2026OuCommentDemander,
  passeportTalent2026ConditionsMetiersDemarches,
  passeportTalentChercheurFrance2026ConditionsDemarchesSalaire,
  passeportTalentCreationEntrepriseFrance2026ConditionsInvesti,
  passeportTalentEtudiantVisiteurNonSoumisExamenCivique2026Cir,
  passeportTalentSalarieQualifie2026SalaireConditionsProcedure,
  penurieCarburantPrixEssence2026EconomieFrancaiseTestCivique,
  prefecturesDelaisRendezVousAvril2026Solutions,
  premiersPasFranceEtrangerBanqueLogementCafAmeli,
  preparerDepartFrance2026ChecklistDocumentsAvantAvion,
  primeRetourVolontaireFrance2026ConditionsDemarches,
  prixTestCivique2026CoutTarifTitreSejourPrefecture,
  questionsFrequentesTestCivique2025,
  raterExamenCivique2026RepasserDelaiCoutThemesEchec,
  rdvPrefectureTitreSejourIntrouvable2026CreneauxMarcheNoir,
  recepisseTitreDeSejourDroitsDureeVoyage,
  reconnaissanceDiplomesEtrangersFrance2026EnicNaricEquivalenc,
  reformeTestCivique50QuestionsJuin2026,
  regularisationMetiersEnTension,
  refusNaturalisation7Erreurs90PourcentCandidats,
  refusTitreSejourOqtfRecours2026GuideEtrangersFrance,
  regroupementFamilialFrance2026GuideCompletConditionsDocument,
  regularisationSansPapiersFrance2026MethodeDemarchesCirculair,
  renouvellementCarteResident10Ans2026ConditionsDocumentsAnef,
  renouvellementTitreSejour2026AnefPrefectureDocumentsDelais,
  rentreeSeptembre2026EtrangersFranceCalendrierDemarchesDelais,
  residanceFiscaleFranceEtrangerImposabiliteTest2026,
  ressourcesUtilesEtrangersFrance2026OutilsAssociationsAides,
  retraiteEtrangerFrance2026DroitsAspaPensionRetourPays,
  scolariserEnfantsEtrangerFrance2026InscriptionEcoleDroits,
  simulateurEligibiliteExamenCivique2026SuisJeConcerne,
  statistiquesTestCivique2026TauxReussite72Pourcent,
  symbolesFranceMarianneCoqDrapeauTricolore,
  systemeSanteFranceEtrangerSecuriteSociale,
  tensionsIranUsaPetrole2026GeopolitiqueFranceTestCivique,
  testCiviqueGratuitEnLigne2026ExamenBlancEntrainementQcm,
  titreSejourDeclarationImpotsEtrangerDroitsObligations2026,
  titreSejourEtrangerMaladeRaisonsSante2026,
  titreSejourEtudiantFranceGuide2025,
  titreSejourExpireVacancesEtrangerFranceQueFaireVisaRetour,
  titreSejourPerduVoleExpire2026DemarchesUrgence,
  toutSavoirExamenCivique2026,
  travaillerFranceEtrangerAutorisationDroits,
  travaillerSansPapiersFrance2026RisquesRegularisation,
  unionEuropeenneFranceInstitutionsCitoyennete,
  valeursRepubliqueFrancaiseLiberteEgaliteFraternite,
  visaLongSejourVlsTsValidationOfii2026,
  voyagerTitreSejourFrancais2026PaysSansVisaSchengen,
];

controlerRegistre(ARTICLES);

/**
 * Arrête le build sur un registre incohérent : deux articles au même slug, ou
 * un slug hors format. Appelée au chargement, donc par `next build`.
 */
function controlerRegistre(liste: readonly Article[]): void {
  const vus = new Set<string>();
  for (const a of liste) {
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(a.slug) || a.slug.length > 120) {
      throw new Error(`Article « ${a.slug} » : slug hors format ([a-z0-9-]).`);
    }
    if (vus.has(a.slug)) throw new Error(`Deux articles portent le slug « ${a.slug} ».`);
    vus.add(a.slug);
  }
}

export function articleParSlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

/** Du plus récent au plus ancien : l'ordre de la liste, de l'accueil, du plan du site et des flux. */
export const ARTICLES_RECENTS: readonly Article[] = [...ARTICLES].sort(
  (a, b) => b.publieLe.localeCompare(a.publieLe) || b.modifieLe.localeCompare(a.modifieLe) || a.slug.localeCompare(b.slug),
);
