import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function CGUPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Conditions Générales d'Utilisation
          </h1>
          
          <p className="text-gray-600 mb-8">
            Dernière mise à jour : Décembre 2025
          </p>

          <div className="space-y-8">
            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Préambule
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») régissent l'accès et l'utilisation 
                  de la plateforme Test Civique France, accessible à l'adresse <a href="https://www.testciviquefrance.fr" className="text-blue-600 hover:underline">www.testciviquefrance.fr</a>, 
                  ainsi que l'ensemble des services qui y sont proposés.
                </p>
                
                <p className="mt-4">
                  La plateforme Test Civique France a pour vocation d'accompagner les candidats dans leur préparation 
                  à l'examen civique en France, en mettant à leur disposition des outils pédagogiques interactifs, 
                  des quiz thématiques, des examens blancs et des ressources documentaires.
                </p>
                
                <p className="mt-4">
                  L'accès et l'utilisation de la plateforme impliquent l'acceptation pleine et entière des présentes CGU 
                  par l'Utilisateur. En cas de désaccord avec l'une quelconque des dispositions des présentes CGU, 
                  l'Utilisateur est invité à ne pas utiliser les services de la plateforme.
                </p>
                
                <p className="mt-4">
                  Test Civique France se réserve le droit de modifier à tout moment les présentes CGU. Les nouvelles conditions 
                  seront portées à la connaissance des utilisateurs par une notification sur le site et/ou par email. 
                  L'utilisation continue de la plateforme après modification vaut acceptation des nouvelles CGU.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 1 - Définitions
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Les termes ci-après définis auront, dans les présentes CGU, la signification suivante :
                </p>
                
                <ul className="space-y-4 mt-4">
                  <li>
                    <p><strong>« Plateforme »</strong> : désigne le site internet Test Civique France accessible à l'adresse 
                    www.testciviquefrance.fr, ainsi que l'ensemble de ses pages, fonctionnalités et services associés.</p>
                  </li>
                  
                  <li>
                    <p><strong>« Utilisateur »</strong> : désigne toute personne physique majeure ou mineure disposant de l'autorisation 
                    parentale qui accède et utilise la Plateforme, qu'elle soit inscrite ou simple visiteur.</p>
                  </li>
                  
                  <li>
                    <p><strong>« Compte »</strong> : désigne l'espace personnel et sécurisé créé par l'Utilisateur lors de son inscription 
                    sur la Plateforme, lui permettant d'accéder aux services et de suivre sa progression.</p>
                  </li>
                  
                  <li>
                    <p><strong>« Services »</strong> : désigne l'ensemble des fonctionnalités et contenus proposés par la Plateforme, 
                    incluant notamment les quiz, les examens blancs, les ressources documentaires, les statistiques de progression, 
                    les flashcards et tout autre outil pédagogique mis à disposition.</p>
                  </li>
                  
                  <li>
                    <p><strong>« Abonnement »</strong> : désigne la souscription à une formule payante (Standard ou Premium) donnant accès 
                    à des fonctionnalités avancées de la Plateforme pendant une durée déterminée. Les abonnements sont renouvelables 
                    et peuvent être résiliés à tout moment.</p>
                  </li>
                  
                  <li>
                    <p><strong>« Formule Gratuite »</strong> : désigne l'offre de base permettant un accès limité aux services de la Plateforme 
                    sans engagement financier.</p>
                  </li>
                  
                  <li>
                    <p><strong>« Formule Standard »</strong> : désigne l'abonnement payant offrant un accès étendu aux services, incluant 
                    des fonctionnalités premium comme les examens blancs illimités et le mode sans chronomètre.</p>
                  </li>
                  
                  <li>
                    <p><strong>« Formule Premium »</strong> : désigne l'abonnement payant de niveau supérieur offrant un accès complet 
                    à l'ensemble des services et fonctionnalités avancées de la Plateforme.</p>
                  </li>
                  
                  <li>
                    <p><strong>« Contenu »</strong> : désigne l'ensemble des éléments présents sur la Plateforme, incluant textes, images, 
                    vidéos, logos, graphismes, questions, cours, et tout autre élément de propriété intellectuelle.</p>
                  </li>
                  
                  <li>
                    <p><strong>« Données Personnelles »</strong> : désigne les informations relatives à l'Utilisateur collectées et traitées 
                    dans le cadre de l'utilisation de la Plateforme, conformément à notre 
                    <Link href="/politique-confidentialite" className="text-blue-600 hover:underline"> Politique de Confidentialité</Link>.</p>
                  </li>
                </ul>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 2 - Objet et Champ d'Application
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Les présentes Conditions Générales d'Utilisation ont pour objet de définir les modalités et conditions 
                  dans lesquelles Test Civique France met à disposition de ses Utilisateurs la Plateforme et les Services associés, 
                  ainsi que les droits et obligations des parties dans ce cadre.
                </p>
                
                <p className="mt-4">
                  Les présentes CGU s'appliquent à tous les Utilisateurs de la Plateforme, sans distinction entre :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Les visiteurs non inscrits consultant librement les pages publiques</li>
                  <li>Les utilisateurs inscrits avec un compte gratuit</li>
                  <li>Les abonnés aux formules Standard ou Premium</li>
                </ul>
                
                <p className="mt-4">
                  Elles complètent, sans s'y substituer :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Les <Link href="/cgv" className="text-blue-600 hover:underline">Conditions Générales de Vente</Link> pour les utilisateurs souscrivant à un abonnement payant</li>
                  <li>La <Link href="/politique-confidentialite" className="text-blue-600 hover:underline">Politique de Confidentialité</Link> concernant le traitement des données personnelles</li>
                  <li>La <Link href="/mentions-legales" className="text-blue-600 hover:underline">politique en matière de cookies</Link></li>
                </ul>
                
                <p className="mt-4">
                  En accédant à la Plateforme et en utilisant ses Services, l'Utilisateur reconnaît avoir pris connaissance 
                  des présentes CGU, les avoir comprises et les accepter sans réserve. Si l'Utilisateur n'accepte pas 
                  d'être lié par les présentes CGU, il ne doit pas accéder à la Plateforme ni utiliser les Services.
                </p>
                
                <p className="mt-4 bg-blue-50 p-4 rounded">
                  <strong>Important :</strong> Pour les utilisateurs mineurs, l'utilisation de la Plateforme requiert 
                  l'autorisation préalable et la supervision d'un représentant légal (parent ou tuteur). En créant un compte 
                  pour un mineur, le représentant légal accepte les présentes CGU en son nom.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 3 - Accès à la Plateforme
              </h2>
              <div className="text-gray-700 space-y-3">
                <h3 className="font-semibold mt-6 mb-3">3.1. Modalités d'accès :</h3>
                <p>
                  La Plateforme est accessible gratuitement à tout Utilisateur disposant d'un accès à Internet. 
                  Tous les coûts afférents à l'accès aux Services, que ce soient les frais matériels, logiciels ou d'accès à Internet, 
                  sont exclusivement à la charge de l'Utilisateur.
                </p>
                
                <p className="mt-4">
                  L'accès à la Plateforme est possible 24 heures sur 24, 7 jours sur 7, sauf en cas de force majeure, 
                  d'événement hors du contrôle de Test Civique France, ou de maintenance planifiée ou d'urgence.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">3.2. Formules d'abonnement :</h3>
                <p>
                  La Plateforme propose plusieurs niveaux d'accès aux Services :
                </p>
                
                <div className="mt-4 space-y-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold">Formule Gratuite :</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2 text-sm">
                      <li>Accès aux quiz d'entraînement par thématique</li>
                      <li>Progression limitée (niveau 1 uniquement)</li>
                      <li>Statistiques de base</li>
                      <li>Un examen blanc gratuit</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold">Formule Standard (payante) :</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2 text-sm">
                      <li>Tous les avantages de la formule gratuite</li>
                      <li>Accès au mode sans chronomètre</li>
                      <li>Progression illimitée (tous les niveaux)</li>
                      <li>Sessions d'examen blanc illimitées</li>
                      <li>Statistiques détaillées et historique complet</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded">
                    <p className="font-semibold">Formule Premium (payante) :</p>
                    <ul className="list-disc list-inside space-y-1 ml-4 mt-2 text-sm">
                      <li>Tous les avantages de la formule Standard</li>
                      <li>Flashcards personnalisées</li>
                      <li>Mode révision avancé</li>
                      <li>Accès prioritaire aux nouvelles fonctionnalités</li>
                      <li>Support client prioritaire</li>
                    </ul>
                  </div>
                </div>
                
                <p className="mt-4 text-sm">
                  Les tarifs et modalités de souscription aux formules payantes sont détaillés dans nos 
                  <Link href="/cgv" className="text-blue-600 hover:underline"> Conditions Générales de Vente</Link> et sur la page 
                  <Link href="/tarifs" className="text-blue-600 hover:underline"> Tarifs</Link>.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">3.3. Maintenance et interruptions :</h3>
                <p>
                  Test Civique France se réserve le droit de suspendre temporairement l'accès à tout ou partie de la Plateforme 
                  pour des raisons de maintenance, de mise à niveau ou d'amélioration des Services. Nous nous efforcerons 
                  d'informer les Utilisateurs de ces interruptions programmées dans un délai raisonnable.
                </p>
                
                <p className="mt-4">
                  En cas d'interruption non planifiée pour des raisons techniques, nous nous engageons à rétablir l'accès 
                  dans les meilleurs délais. Aucune indemnisation ne pourra être réclamée en cas d'interruption temporaire 
                  des Services, quelle qu'en soit la cause.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">3.4. Modifications des Services :</h3>
                <p>
                  Test Civique France se réserve le droit de faire évoluer, de modifier ou de suspendre, 
                  temporairement ou définitivement, tout ou partie des Services, sans préavis et sans que sa responsabilité 
                  puisse être engagée de ce fait. Les Utilisateurs seront informés de toute modification substantielle 
                  des Services par email ou notification sur la Plateforme.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 4 - Inscription et Création de Compte
              </h2>
              <div className="text-gray-700 space-y-3">
                <h3 className="font-semibold mt-6 mb-3">4.1. Processus d'inscription :</h3>
                <p>
                  Pour accéder à l'ensemble des fonctionnalités de la Plateforme, l'Utilisateur doit créer un Compte 
                  en renseignant les informations suivantes :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Nom et prénom</li>
                  <li>Adresse email valide</li>
                  <li>Mot de passe sécurisé</li>
                </ul>
                
                <p className="mt-4">
                  L'Utilisateur s'engage à fournir des informations exactes, complètes et à jour. Toute information erronée, 
                  inexacte ou incomplète pourra entraîner la suspension ou la suppression du Compte sans préavis.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">4.2. Validation du compte :</h3>
                <p>
                  Après inscription, un email de confirmation est envoyé à l'adresse email renseignée. L'Utilisateur doit 
                  valider son adresse email en cliquant sur le lien de confirmation pour activer pleinement son Compte.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">4.3. Sécurité du compte :</h3>
                <p>
                  L'Utilisateur est entièrement responsable du maintien de la confidentialité de ses identifiants de connexion 
                  (email et mot de passe). Il s'engage à :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Choisir un mot de passe suffisamment robuste (minimum 8 caractères)</li>
                  <li>Ne pas partager ses identifiants avec des tiers</li>
                  <li>Informer immédiatement Test Civique France de toute utilisation non autorisée de son Compte</li>
                  <li>Se déconnecter après chaque session sur un ordinateur partagé</li>
                </ul>
                
                <p className="mt-4">
                  L'Utilisateur est responsable de toutes les activités effectuées depuis son Compte. Test Civique France 
                  ne saurait être tenu responsable des pertes ou dommages résultant du non-respect de ces obligations de sécurité.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">4.4. Un compte par personne :</h3>
                <p>
                  Chaque Utilisateur ne peut créer qu'un seul Compte. La création de comptes multiples par une même personne 
                  est interdite et pourra entraîner la suspension de tous les comptes concernés.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">4.5. Modification des informations :</h3>
                <p>
                  L'Utilisateur peut à tout moment modifier ses informations personnelles depuis son espace personnel. 
                  Il s'engage à maintenir ses informations à jour.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">4.6. Suppression du compte :</h3>
                <p>
                  L'Utilisateur peut demander la suppression de son Compte à tout moment en nous contactant à 
                  <a href="mailto:contact@testciviquefrance.fr" className="text-blue-600 hover:underline"> contact@testciviquefrance.fr</a>. 
                  La suppression entraîne la perte définitive de toutes les données associées au compte (progression, statistiques, historique). 
                  En cas d'abonnement actif, les conditions de résiliation prévues aux CGV s'appliquent.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 5 - Obligations et Responsabilités de l'Utilisateur
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  En utilisant la Plateforme, l'Utilisateur s'engage à respecter les obligations suivantes :
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">5.1. Usage conforme :</h3>
                <p>
                  L'Utilisateur s'engage à utiliser la Plateforme et les Services de manière conforme aux présentes CGU, 
                  aux lois et règlements en vigueur, ainsi qu'aux bonnes mœurs et à l'ordre public.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">5.2. Interdictions :</h3>
                <p>
                  Il est strictement interdit à l'Utilisateur de :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Utiliser la Plateforme à des fins commerciales sans autorisation préalable écrite de Test Civique France</li>
                  <li>Copier, reproduire, distribuer, revendre ou exploiter tout contenu de la Plateforme sans autorisation</li>
                  <li>Tenter de contourner les mesures de sécurité ou d'accéder à des zones protégées de la Plateforme</li>
                  <li>Utiliser des robots, scrapers ou tout autre moyen automatisé pour accéder aux Services</li>
                  <li>Diffuser des virus, malwares ou tout autre code malveillant</li>
                  <li>Usurper l'identité d'une autre personne ou d'une entité</li>
                  <li>Collecter des informations personnelles d'autres utilisateurs sans leur consentement</li>
                  <li>Perturber le fonctionnement normal de la Plateforme ou nuire à l'expérience des autres utilisateurs</li>
                  <li>Utiliser la Plateforme pour diffuser du contenu illégal, diffamatoire, injurieux, discriminatoire ou contraire aux bonnes mœurs</li>
                  <li>Partager son compte avec d'autres personnes ou créer des comptes multiples</li>
                  <li>Tenter de déchiffrer, décompiler ou désassembler le code source de la Plateforme</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">5.3. Exactitude des informations :</h3>
                <p>
                  L'Utilisateur garantit l'exactitude et la véracité des informations qu'il fournit lors de son inscription 
                  et s'engage à les mettre à jour régulièrement.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">5.4. Usage personnel :</h3>
                <p>
                  Les Services de la Plateforme sont destinés à un usage strictement personnel et non commercial. 
                  L'Utilisateur s'interdit de revendre, céder ou transférer à titre gratuit ou onéreux son accès aux Services 
                  ou tout contenu obtenu via la Plateforme.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">5.5. Sanctions en cas de manquement :</h3>
                <p>
                  En cas de manquement à l'une quelconque de ces obligations, Test Civique France se réserve le droit, 
                  sans préavis ni indemnité, de :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Suspendre temporairement ou définitivement l'accès au Compte de l'Utilisateur</li>
                  <li>Supprimer le Compte de l'Utilisateur</li>
                  <li>Refuser l'accès à tout ou partie des Services</li>
                  <li>Engager toute action judiciaire appropriée</li>
                </ul>
                
                <p className="mt-4">
                  Ces mesures ne dispensent pas l'Utilisateur de sa responsabilité civile et pénale pour les dommages 
                  qu'il pourrait causer à Test Civique France ou à des tiers.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 6 - Propriété Intellectuelle
              </h2>
              <div className="text-gray-700 space-y-3">
                <h3 className="font-semibold mt-6 mb-3">6.1. Propriété des contenus :</h3>
                <p>
                  L'ensemble des éléments composant la Plateforme (structure, design, textes, graphismes, logos, icônes, images, 
                  sons, logiciels, bases de données, etc.) ainsi que tous les contenus pédagogiques (questions, cours, 
                  explications, examens blancs, etc.) sont la propriété exclusive de Test Civique France ou de ses partenaires.
                </p>
                
                <p className="mt-4">
                  Ces éléments sont protégés par les lois françaises et internationales relatives à la propriété intellectuelle, 
                  notamment par le Code de la propriété intellectuelle (articles L.111-1 et suivants, L.335-2 et suivants).
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">6.2. Droits d'utilisation :</h3>
                <p>
                  L'accès à la Plateforme confère à l'Utilisateur un droit d'usage strictement personnel, non exclusif, 
                  non cessible et non transférable des contenus. Ce droit se limite à :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>La consultation en ligne des contenus depuis son navigateur</li>
                  <li>L'utilisation des fonctionnalités pédagogiques (quiz, examens, révisions)</li>
                  <li>La sauvegarde de sa progression personnelle</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">6.3. Restrictions :</h3>
                <p>
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments 
                  de la Plateforme, quel que soit le moyen ou le procédé utilisé, est strictement interdite sans l'autorisation 
                  écrite préalable de Test Civique France.
                </p>
                
                <p className="mt-4">
                  Sont notamment interdits :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>La copie, la reproduction ou l'enregistrement des questions et contenus pédagogiques</li>
                  <li>La diffusion, distribution ou communication des contenus à des tiers</li>
                  <li>L'utilisation commerciale des contenus</li>
                  <li>L'extraction, la réutilisation ou l'exploitation de bases de données</li>
                  <li>La création d'œuvres dérivées basées sur les contenus de la Plateforme</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">6.4. Contenus officiels :</h3>
                <p>
                  Certains contenus présents sur la Plateforme peuvent provenir de sources officielles (textes de loi, 
                  documents administratifs, contenus du référentiel officiel de l'examen civique). Ces contenus restent 
                  la propriété de leurs auteurs respectifs. Test Civique France les utilise dans le respect des licences 
                  et autorisations applicables.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">6.5. Marques :</h3>
                <p>
                  Les dénominations sociales, marques et signes distinctifs reproduits sur la Plateforme sont protégés. 
                  Toute reproduction, imitation ou usage, total ou partiel, sans autorisation expresse est prohibée 
                  et constituerait une contrefaçon sanctionnée par les articles L.713-2 et suivants du Code de la propriété intellectuelle.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">6.6. Signalement de violation :</h3>
                <p>
                  Toute utilisation non autorisée des contenus de la Plateforme est susceptible de constituer une contrefaçon 
                  engageant la responsabilité civile et pénale de son auteur. Test Civique France se réserve le droit 
                  de poursuivre en justice toute violation de ses droits de propriété intellectuelle.
                </p>
                
                <p className="mt-4">
                  Si vous constatez une utilisation non autorisée de nos contenus, merci de nous en informer à 
                  <a href="mailto:contact@testciviquefrance.fr" className="text-blue-600 hover:underline"> contact@testciviquefrance.fr</a>.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 7 - Responsabilité et Garanties
              </h2>
              <div className="text-gray-700 space-y-3">
                <h3 className="font-semibold mt-6 mb-3">7.1. Nature des Services :</h3>
                <p>
                  Test Civique France fournit une plateforme d'aide à la préparation à l'examen civique en France. 
                  Les Services proposés constituent un outil pédagogique complémentaire et ne se substituent en aucun cas 
                  à une préparation officielle ou à une formation dispensée par les autorités compétentes.
                </p>
                
                <p className="mt-4 bg-amber-50 p-4 rounded">
                  <strong>Avertissement important :</strong> Test Civique France ne garantit en aucune manière la réussite 
                  de l'Utilisateur à l'examen civique officiel. Le succès à l'examen dépend de nombreux facteurs indépendants 
                  de la Plateforme, notamment l'assiduité, la compréhension des contenus et les conditions le jour de l'examen.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">7.2. Exactitude des contenus :</h3>
                <p>
                  Test Civique France s'efforce d'assurer l'exactitude et la mise à jour régulière des contenus pédagogiques. 
                  Toutefois, nous ne pouvons garantir l'absence totale d'erreurs, d'omissions ou de décalages par rapport 
                  aux évolutions réglementaires ou aux contenus du référentiel officiel.
                </p>
                
                <p className="mt-4">
                  L'Utilisateur est invité à se référer aux sources officielles pour toute information critique. 
                  En cas d'erreur constatée, nous vous remercions de nous en informer à 
                  <a href="mailto:contact@testciviquefrance.fr" className="text-blue-600 hover:underline"> contact@testciviquefrance.fr</a>.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">7.3. Disponibilité des Services :</h3>
                <p>
                  Test Civique France s'efforce de maintenir la Plateforme accessible 24h/24 et 7j/7. Toutefois, 
                  nous ne garantissons pas une disponibilité ininterrompue des Services en raison :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>D'opérations de maintenance planifiées ou d'urgence</li>
                  <li>De pannes techniques ou de défaillances du réseau Internet</li>
                  <li>D'événements de force majeure</li>
                  <li>D'actes de tiers (attaques, piratage, etc.)</li>
                </ul>
                
                <p className="mt-4">
                  Test Civique France ne saurait être tenu responsable des dommages résultant d'une interruption, 
                  suspension ou indisponibilité temporaire ou définitive des Services.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">7.4. Limitation de responsabilité :</h3>
                <p>
                  Dans toute la mesure permise par la loi, Test Civique France exclut toute responsabilité pour :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Les dommages indirects, accessoires, spéciaux ou consécutifs</li>
                  <li>La perte de profits, de revenus, de données ou d'opportunités</li>
                  <li>Les préjudices résultant de l'utilisation ou de l'impossibilité d'utiliser les Services</li>
                  <li>Les dommages causés par des erreurs, omissions ou interruptions des Services</li>
                  <li>Les conséquences d'un échec à l'examen civique officiel</li>
                </ul>
                
                <p className="mt-4">
                  En tout état de cause, la responsabilité de Test Civique France ne saurait excéder le montant 
                  total des sommes effectivement versées par l'Utilisateur au titre de son abonnement au cours 
                  des 12 mois précédant la réclamation.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">7.5. Responsabilité de l'Utilisateur :</h3>
                <p>
                  L'Utilisateur est seul responsable :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>De l'utilisation qu'il fait de la Plateforme et des Services</li>
                  <li>De la protection de ses identifiants de connexion</li>
                  <li>Des équipements et connexions Internet nécessaires à l'accès aux Services</li>
                  <li>Des dommages qu'il pourrait causer à Test Civique France ou à des tiers par ses actions</li>
                </ul>
                
                <p className="mt-4">
                  L'Utilisateur s'engage à indemniser Test Civique France de tous dommages, réclamations ou frais 
                  (y compris les frais juridiques) résultant de sa violation des présentes CGU ou de la législation applicable.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">7.6. Liens externes :</h3>
                <p>
                  La Plateforme peut contenir des liens vers des sites externes. Ces liens sont fournis à titre informatif. 
                  Test Civique France n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu, 
                  leur disponibilité ou leur politique de confidentialité.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 8 - Protection des Données Personnelles
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Test Civique France accorde une importance primordiale à la protection de vos données personnelles 
                  et au respect de votre vie privée.
                </p>
                
                <p className="mt-4">
                  Les données personnelles collectées dans le cadre de l'utilisation de la Plateforme sont traitées 
                  conformément à notre <Link href="/politique-confidentialite" className="text-blue-600 hover:underline">Politique de Confidentialité</Link> et dans le respect :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Du Règlement Général sur la Protection des Données (RGPD) - Règlement UE 2016/679</li>
                  <li>De la loi Informatique et Libertés modifiée - Loi n°78-17 du 6 janvier 1978</li>
                </ul>
                
                <p className="mt-4">
                  Pour toute information détaillée sur la collecte, l'utilisation, le partage et la protection de vos données, 
                  ainsi que sur vos droits (accès, rectification, effacement, portabilité, opposition), 
                  veuillez consulter notre <Link href="/politique-confidentialite" className="text-blue-600 hover:underline">Politique de Confidentialité</Link>.
                </p>
                
                <p className="mt-4">
                  Pour toute question ou exercice de vos droits, contactez-nous à 
                  <a href="mailto:contact@testciviquefrance.fr" className="text-blue-600 hover:underline"> contact@testciviquefrance.fr</a>.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 9 - Modifications des CGU
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Test Civique France se réserve le droit de modifier à tout moment les présentes Conditions Générales d'Utilisation, 
                  notamment pour tenir compte des évolutions légales, réglementaires, jurisprudentielles ou techniques, 
                  ainsi que des modifications apportées aux Services.
                </p>
                
                <p className="mt-4">
                  En cas de modification substantielle des CGU, les Utilisateurs inscrits seront informés par :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Un email à l'adresse enregistrée dans leur compte</li>
                  <li>Une notification visible sur la Plateforme</li>
                  <li>Un bandeau d'information lors de la connexion</li>
                </ul>
                
                <p className="mt-4">
                  Les nouvelles CGU entreront en vigueur 30 jours après leur notification, sauf dispositions légales contraires. 
                  L'Utilisateur qui n'accepte pas les nouvelles CGU doit cesser d'utiliser les Services et peut demander 
                  la suppression de son compte.
                </p>
                
                <p className="mt-4">
                  L'utilisation continue de la Plateforme après l'entrée en vigueur des nouvelles CGU vaut acceptation 
                  de celles-ci par l'Utilisateur.
                </p>
                
                <p className="mt-4">
                  La version en vigueur des CGU est celle publiée sur la Plateforme. La date de dernière mise à jour 
                  est indiquée en haut du présent document.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 10 - Droit Applicable et Règlement des Litiges
              </h2>
              <div className="text-gray-700 space-y-3">
                <h3 className="font-semibold mt-6 mb-3">10.1. Loi applicable :</h3>
                <p>
                  Les présentes Conditions Générales d'Utilisation sont régies et interprétées conformément au droit français, 
                  sans tenir compte des principes de conflits de lois.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">10.2. Résolution amiable :</h3>
                <p>
                  En cas de difficulté dans l'exécution ou l'interprétation des présentes CGU, les parties s'engagent 
                  à rechercher une solution amiable avant toute action contentieuse.
                </p>
                
                <p className="mt-4">
                  L'Utilisateur est invité à nous contacter en priorité à 
                  <a href="mailto:contact@testciviquefrance.fr" className="text-blue-600 hover:underline"> contact@testciviquefrance.fr</a> ou via notre 
                  <Link href="/contact" className="text-blue-600 hover:underline"> formulaire de contact</Link> pour toute réclamation. 
                  Nous nous engageons à répondre dans les meilleurs délais et à rechercher une solution satisfaisante.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">10.3. Médiation de la consommation :</h3>
                <p>
                  Conformément aux articles L.611-1 et suivants du Code de la consommation, l'Utilisateur consommateur 
                  a le droit de recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable 
                  d'un litige qui l'opposerait à Test Civique France.
                </p>
                
                <p className="mt-4">
                  Le médiateur compétent est :
                </p>
                <div className="bg-gray-50 p-4 rounded mt-3">
                  <p><strong>Médiateur de la consommation DEVIGNY</strong></p>
                  <p>972 avenue de la République</p>
                  <p>59700 MARCQ-EN-BAROEUL</p>
                  <p>Site web : <a href="https://www.mediateur-consommation-devigny.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.mediateur-consommation-devigny.fr</a></p>
                </div>
                
                <p className="mt-4 text-sm text-gray-600">
                  Le recours au médiateur est possible après avoir tenté de résoudre le litige directement auprès de notre service client.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">10.4. Juridiction compétente :</h3>
                <p>
                  À défaut de règlement amiable, tout litige relatif à l'interprétation, l'exécution ou la résiliation 
                  des présentes CGU sera soumis aux tribunaux français compétents, conformément aux règles de droit commun.
                </p>
                
                <p className="mt-4">
                  Pour les Utilisateurs non-professionnels (consommateurs), les litiges relèvent de la compétence 
                  des tribunaux du ressort de leur domicile ou du siège social de Test Civique France, à leur choix.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 11 - Dispositions Diverses
              </h2>
              <div className="text-gray-700 space-y-3">
                <h3 className="font-semibold mt-6 mb-3">11.1. Intégralité de l'accord :</h3>
                <p>
                  Les présentes CGU, complétées par les Conditions Générales de Vente et la Politique de Confidentialité, 
                  constituent l'intégralité de l'accord entre Test Civique France et l'Utilisateur concernant l'utilisation 
                  de la Plateforme.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">11.2. Nullité partielle :</h3>
                <p>
                  Si une ou plusieurs stipulations des présentes CGU sont tenues pour non valides ou déclarées comme telles 
                  en application d'une loi, d'un règlement ou à la suite d'une décision définitive d'une juridiction compétente, 
                  les autres stipulations garderont toute leur force et leur portée.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">11.3. Non-renonciation :</h3>
                <p>
                  Le fait pour Test Civique France de ne pas se prévaloir à un moment donné de l'une quelconque 
                  des dispositions des présentes CGU ne peut être interprété comme valant renonciation à se prévaloir 
                  ultérieurement de ladite disposition.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">11.4. Langue :</h3>
                <p>
                  Les présentes CGU sont rédigées en langue française. En cas de traduction en une ou plusieurs langues étrangères, 
                  seul le texte français fera foi en cas de litige.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">11.5. Conservation et archivage :</h3>
                <p>
                  Les présentes CGU sont archivées sur un support fiable et durable de manière à correspondre 
                  à une copie fidèle et durable conformément à l'article 1366 du Code civil.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 12 - Contact et Informations
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Pour toute question relative aux présentes Conditions Générales d'Utilisation, 
                  à l'utilisation de la Plateforme ou à nos Services, vous pouvez nous contacter :
                </p>
                
                <div className="bg-gray-50 p-6 rounded mt-4">
                  <p className="font-semibold mb-3">Test Civique France - Service Client</p>
                  <p><strong>Email :</strong> <a href="mailto:contact@testciviquefrance.fr" className="text-blue-600 hover:underline">contact@testciviquefrance.fr</a></p>
                  <p className="mt-2"><strong>Formulaire de contact :</strong> <Link href="/contact" className="text-blue-600 hover:underline">Page contact</Link></p>
                  <p className="mt-4 text-sm text-gray-600">
                    Nous nous engageons à répondre à toutes vos demandes dans un délai de 48 heures ouvrées.
                  </p>
                </div>
                
                <p className="mt-6">
                  Pour toute réclamation ou question spécifique, n'hésitez pas à consulter également notre 
                  <Link href="/faq" className="text-blue-600 hover:underline"> page FAQ</Link> qui pourrait répondre rapidement à vos interrogations.
                </p>
              </div>
            </section>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200 mt-8">
              <h3 className="font-semibold text-green-900 mb-3">Points clés à retenir :</h3>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>✓ Les CGU régissent votre utilisation de Test Civique France</li>
                <li>✓ Vous devez respecter un usage personnel et conforme des Services</li>
                <li>✓ Votre compte et vos identifiants sont personnels et confidentiels</li>
                <li>✓ Les contenus de la Plateforme sont protégés par la propriété intellectuelle</li>
                <li>✓ Test Civique France ne garantit pas la réussite à l'examen officiel</li>
                <li>✓ Vous disposez de droits (RGPD, médiation, recours) en cas de litige</li>
                <li>✓ Notre équipe reste à votre écoute pour toute question</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}