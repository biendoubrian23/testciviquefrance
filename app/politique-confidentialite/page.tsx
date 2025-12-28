import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Politique de Confidentialité
          </h1>
          
          <p className="text-gray-600 mb-8">
            Dernière mise à jour : Janvier 2026
          </p>

          <div className="space-y-8">
            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Introduction
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Test Civique France accorde une importance particulière à la protection de vos données personnelles et 
                  au respect de votre vie privée. La présente Politique de Confidentialité a pour objectif de vous informer 
                  de manière claire et transparente sur la façon dont nous collectons, utilisons, partageons et protégeons 
                  vos données personnelles lorsque vous utilisez notre plateforme.
                </p>
                
                <p className="mt-4">
                  Cette politique est établie en conformité avec :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Le Règlement Général sur la Protection des Données (RGPD) - Règlement UE 2016/679 du 27 avril 2016</li>
                  <li>La loi Informatique et Libertés modifiée - Loi n°78-17 du 6 janvier 1978</li>
                  <li>La directive ePrivacy 2002/58/CE</li>
                </ul>
                
                <p className="mt-4">
                  En utilisant notre site, vous acceptez les termes de cette Politique de Confidentialité. Si vous n'acceptez pas 
                  cette politique, veuillez ne pas utiliser nos services.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                1. Responsable du Traitement
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Le responsable du traitement de vos données personnelles est :
                </p>
                
                <div className="bg-gray-50 p-4 rounded mt-4">
                  <p><strong>Raison sociale :</strong> Test Civique France</p>
                  <p><strong>Adresse email :</strong> <a href="mailto:contact@testciviquefrance.fr" className="text-blue-600 hover:underline">contact@testciviquefrance.fr</a></p>
                  <p><strong>Site web :</strong> <a href="https://www.testciviquefrance.fr" className="text-blue-600 hover:underline">www.testciviquefrance.fr</a></p>
                </div>
                
                <p className="mt-4">
                  Le responsable du traitement est la personne qui détermine les finalités et les moyens du traitement 
                  de vos données personnelles. Pour toute question relative au traitement de vos données, vous pouvez 
                  nous contacter à l'adresse email ci-dessus.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                2. Données Personnelles Collectées
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Dans le cadre de l'utilisation de nos services, nous pouvons être amenés à collecter et traiter 
                  les catégories de données personnelles suivantes :
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">2.1. Données d'identification :</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Mot de passe (stocké de manière cryptée)</li>
                  <li>Date de création du compte</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">2.2. Données de connexion et d'utilisation :</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Adresse IP</li>
                  <li>Type et version du navigateur</li>
                  <li>Système d'exploitation</li>
                  <li>Pages consultées et durée de visite</li>
                  <li>Date et heure de connexion</li>
                  <li>Données de navigation (cookies)</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">2.3. Données pédagogiques et de progression :</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Historique des quiz réalisés (questions, réponses, scores)</li>
                  <li>Résultats aux examens blancs</li>
                  <li>Progression par thématique et par niveau</li>
                  <li>Statistiques d'apprentissage (temps passé, taux de réussite)</li>
                  <li>Préférences d'apprentissage (thèmes favoris, paramètres personnalisés)</li>
                  <li>Utilisation des flashcards et du mode révision</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">2.4. Données d'abonnement et de paiement :</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Type d'abonnement (Gratuit, Standard, Premium)</li>
                  <li>Date de souscription et de renouvellement</li>
                  <li>Historique des transactions</li>
                  <li>Informations de paiement (traitées de manière sécurisée par notre prestataire de paiement Stripe - voir section 3.3)</li>
                  <li>Statut de l'abonnement (actif, expiré, résilié)</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">2.5. Données de communication :</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Messages envoyés via le formulaire de contact</li>
                  <li>Échanges par email avec notre service support</li>
                  <li>Réponses aux enquêtes de satisfaction (optionnelles)</li>
                </ul>
                
                <p className="mt-6 bg-blue-50 p-4 rounded">
                  <strong>Note importante :</strong> Nous ne collectons jamais de données sensibles telles que l'origine ethnique, 
                  les opinions politiques, les convictions religieuses, l'état de santé ou l'orientation sexuelle. 
                  Les informations relatives à votre nationalité ou votre situation administrative ne sont jamais demandées ni stockées.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                3. Finalités du Traitement et Bases Légales
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Vos données personnelles sont collectées et traitées pour les finalités suivantes, chacune reposant 
                  sur une base légale conforme au RGPD :
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">3.1. Gestion de votre compte utilisateur</h3>
                <p><strong>Base légale :</strong> Exécution du contrat (article 6.1.b du RGPD)</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Création et gestion de votre compte</li>
                  <li>Authentification et sécurisation de l'accès</li>
                  <li>Personnalisation de votre expérience utilisateur</li>
                  <li>Sauvegarde de vos préférences et paramètres</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">3.2. Fourniture des services pédagogiques</h3>
                <p><strong>Base légale :</strong> Exécution du contrat (article 6.1.b du RGPD)</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Accès aux contenus pédagogiques (questions, cours, examens blancs)</li>
                  <li>Suivi de votre progression et de vos résultats</li>
                  <li>Génération de statistiques personnalisées</li>
                  <li>Recommandations de révision adaptées à votre niveau</li>
                  <li>Historique de vos sessions d'apprentissage</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">3.3. Gestion des abonnements et paiements</h3>
                <p><strong>Base légale :</strong> Exécution du contrat (article 6.1.b du RGPD) et obligation légale (article 6.1.c du RGPD)</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Traitement des paiements via notre prestataire sécurisé Stripe</li>
                  <li>Gestion des abonnements (souscription, renouvellement, résiliation)</li>
                  <li>Émission des factures et justificatifs de paiement</li>
                  <li>Gestion des remboursements éventuels</li>
                  <li>Prévention de la fraude</li>
                </ul>
                
                <p className="mt-3 text-sm bg-gray-50 p-3 rounded">
                  <strong>Important :</strong> Les données bancaires ne sont jamais stockées sur nos serveurs. Elles sont traitées 
                  directement par Stripe, certifié PCI-DSS niveau 1 (le plus haut niveau de certification en matière de sécurité des paiements). 
                  Nous recevons uniquement un identifiant anonymisé de la transaction.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">3.4. Communication et support client</h3>
                <p><strong>Base légale :</strong> Intérêt légitime (article 6.1.f du RGPD)</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Réponse à vos demandes d'information</li>
                  <li>Assistance technique et support utilisateur</li>
                  <li>Traitement de vos réclamations</li>
                  <li>Envoi d'emails transactionnels (confirmation d'inscription, rappels d'abonnement)</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">3.5. Amélioration de nos services</h3>
                <p><strong>Base légale :</strong> Intérêt légitime (article 6.1.f du RGPD)</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Analyse statistique de l'utilisation du site (données agrégées et anonymisées)</li>
                  <li>Optimisation de l'expérience utilisateur</li>
                  <li>Développement de nouvelles fonctionnalités</li>
                  <li>Tests A/B pour améliorer l'efficacité pédagogique</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">3.6. Respect des obligations légales</h3>
                <p><strong>Base légale :</strong> Obligation légale (article 6.1.c du RGPD)</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Conservation des données de facturation (obligations comptables et fiscales)</li>
                  <li>Réponse aux requêtes des autorités compétentes</li>
                  <li>Lutte contre la fraude et les abus</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">3.7. Marketing et communication (avec votre consentement)</h3>
                <p><strong>Base légale :</strong> Consentement (article 6.1.a du RGPD)</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Envoi de newsletters et informations sur nos services (uniquement si vous avez accepté)</li>
                  <li>Notifications de nouvelles fonctionnalités</li>
                  <li>Offres promotionnelles personnalisées</li>
                </ul>
                
                <p className="mt-3 text-sm bg-green-50 p-3 rounded">
                  Vous pouvez retirer votre consentement à tout moment en cliquant sur le lien de désinscription 
                  présent dans chaque email ou en nous contactant directement.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                4. Destinataires de Vos Données
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Vos données personnelles sont destinées aux services internes de Test Civique France. 
                  Nous ne vendons jamais vos données à des tiers. Toutefois, nous pouvons être amenés à partager 
                  certaines données avec des prestataires de services tiers dans les conditions suivantes :
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">4.1. Prestataires de services essentiels :</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Stripe (processeur de paiement) :</strong> pour le traitement sécurisé des paiements. 
                    Stripe est certifié PCI-DSS et conforme au RGPD. Vos données bancaires sont exclusivement traitées par Stripe.
                    <br />
                    <span className="text-sm text-gray-600">
                      Politique de confidentialité : <a href="https://stripe.com/fr/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://stripe.com/fr/privacy</a>
                    </span>
                  </li>
                  
                  <li>
                    <strong>Supabase (hébergement de la base de données) :</strong> pour le stockage sécurisé de vos données. 
                    Supabase est conforme au RGPD et héberge les données dans l'Union Européenne.
                    <br />
                    <span className="text-sm text-gray-600">
                      Politique de confidentialité : <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://supabase.com/privacy</a>
                    </span>
                  </li>
                  
                  <li>
                    <strong>Prestataire d'envoi d'emails :</strong> pour l'envoi d'emails transactionnels et newsletters (uniquement avec votre consentement). 
                    Nos prestataires d'emailing sont conformes au RGPD.
                  </li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">4.2. Garanties contractuelles :</h3>
                <p>
                  Tous nos prestataires de services sont soumis à des obligations contractuelles strictes en matière 
                  de protection des données personnelles. Ils ne sont autorisés à traiter vos données que dans le cadre 
                  des services qu'ils nous fournissent et conformément à nos instructions. Ils ne peuvent en aucun cas 
                  utiliser vos données à leurs propres fins.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">4.3. Transferts hors UE :</h3>
                <p>
                  Dans la mesure du possible, nous privilégions des prestataires dont les serveurs sont situés dans l'Union Européenne. 
                  Si un transfert de données hors UE est nécessaire, celui-ci est encadré par :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Des clauses contractuelles types approuvées par la Commission Européenne</li>
                  <li>Des mécanismes de certification reconnus (Privacy Shield successeur, Binding Corporate Rules)</li>
                  <li>L'obtention de garanties appropriées conformément au RGPD</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">4.4. Autorités légales :</h3>
                <p>
                  Nous pouvons être amenés à communiquer vos données aux autorités compétentes si la loi l'exige, 
                  notamment dans le cadre d'enquêtes judiciaires ou pour répondre à des réquisitions légales.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                5. Durée de Conservation des Données
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Vos données personnelles sont conservées pendant une durée qui n'excède pas celle nécessaire 
                  aux finalités pour lesquelles elles sont traitées :
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">5.1. Données du compte actif :</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Durée :</strong> Pendant toute la durée d'utilisation de votre compte</li>
                  <li><strong>Suppression :</strong> 3 ans après votre dernière connexion (compte inactif)</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">5.2. Données d'apprentissage et de progression :</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Durée :</strong> Conservées tant que votre compte est actif</li>
                  <li><strong>Suppression :</strong> Supprimées avec votre compte ou sur demande</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">5.3. Données de facturation :</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Durée :</strong> 10 ans à compter de la clôture de l'exercice comptable (obligation légale)</li>
                  <li><strong>Base légale :</strong> Article L123-22 du Code de commerce</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">5.4. Données de connexion (logs) :</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Durée :</strong> 12 mois maximum</li>
                  <li><strong>Base légale :</strong> Article 6-II de la loi pour la confiance dans l'économie numérique</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">5.5. Données de prospection commerciale :</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Durée :</strong> 3 ans à compter du dernier contact ou de votre désinscription</li>
                </ul>
                
                <p className="mt-6 bg-gray-50 p-4 rounded">
                  <strong>Suppression de compte :</strong> Vous pouvez demander la suppression complète de votre compte 
                  et de toutes vos données personnelles à tout moment en nous contactant à 
                  <a href="mailto:contact@testciviquefrance.fr" className="text-blue-600 hover:underline"> contact@testciviquefrance.fr</a>. 
                  La suppression sera effective sous 30 jours maximum, sauf pour les données devant être conservées pour des obligations légales.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                6. Sécurité de Vos Données
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  La sécurité de vos données personnelles est notre priorité. Nous mettons en œuvre des mesures 
                  techniques et organisationnelles appropriées pour protéger vos données contre la perte, 
                  la destruction accidentelle, l'altération, l'accès non autorisé ou la divulgation :
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">6.1. Mesures techniques :</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Chiffrement SSL/TLS :</strong> Toutes les communications entre votre navigateur et nos serveurs sont chiffrées (HTTPS)</li>
                  <li><strong>Chiffrement des mots de passe :</strong> Vos mots de passe sont hashés avec un algorithme robuste (bcrypt) et ne sont jamais stockés en clair</li>
                  <li><strong>Chiffrement des données sensibles :</strong> Les données sensibles en base de données sont chiffrées</li>
                  <li><strong>Pare-feu et protection DDoS :</strong> Protection contre les attaques malveillantes</li>
                  <li><strong>Sauvegardes régulières :</strong> Sauvegardes automatiques et chiffrées de la base de données</li>
                  <li><strong>Authentification renforcée :</strong> Protection contre les tentatives d'accès non autorisé</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">6.2. Mesures organisationnelles :</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Limitation des accès :</strong> Seules les personnes habilitées ont accès aux données personnelles</li>
                  <li><strong>Politique de confidentialité interne :</strong> Nos collaborateurs sont sensibilisés et formés à la protection des données</li>
                  <li><strong>Audits de sécurité :</strong> Contrôles réguliers de nos systèmes et procédures</li>
                  <li><strong>Plan de réponse aux incidents :</strong> Procédure établie en cas de violation de données</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">6.3. Vos bonnes pratiques :</h3>
                <p>
                  Nous vous recommandons également d'adopter les bonnes pratiques suivantes pour protéger votre compte :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Choisissez un mot de passe fort et unique</li>
                  <li>Ne partagez jamais vos identifiants de connexion</li>
                  <li>Déconnectez-vous après chaque session sur un ordinateur partagé</li>
                  <li>Maintenez votre navigateur et votre système d'exploitation à jour</li>
                </ul>
                
                <p className="mt-6 bg-amber-50 p-4 rounded">
                  <strong>En cas de violation de données :</strong> Conformément au RGPD, nous nous engageons à vous notifier 
                  dans les 72 heures toute violation de données susceptible de présenter un risque pour vos droits et libertés.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                7. Vos Droits (RGPD)
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, 
                  vous disposez des droits suivants concernant vos données personnelles :
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">7.1. Droit d'accès (article 15 RGPD) :</h3>
                <p>
                  Vous avez le droit d'obtenir la confirmation que des données vous concernant sont traitées et, 
                  si tel est le cas, d'accéder à ces données ainsi qu'à des informations sur leur traitement 
                  (finalités, catégories, destinataires, durée de conservation, etc.).
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">7.2. Droit de rectification (article 16 RGPD) :</h3>
                <p>
                  Vous pouvez demander la correction de données inexactes ou incomplètes vous concernant. 
                  Vous pouvez également modifier directement certaines informations depuis votre espace personnel.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">7.3. Droit à l'effacement / "droit à l'oubli" (article 17 RGPD) :</h3>
                <p>
                  Vous pouvez demander l'effacement de vos données personnelles dans les cas suivants :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Les données ne sont plus nécessaires aux finalités pour lesquelles elles ont été collectées</li>
                  <li>Vous retirez votre consentement et il n'existe pas d'autre base légale au traitement</li>
                  <li>Vous vous opposez au traitement et il n'existe pas de motif légitime impérieux</li>
                  <li>Les données ont fait l'objet d'un traitement illicite</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">7.4. Droit à la limitation du traitement (article 18 RGPD) :</h3>
                <p>
                  Vous pouvez demander la limitation du traitement de vos données dans certains cas 
                  (contestation de l'exactitude, traitement illicite, opposition au traitement, etc.).
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">7.5. Droit à la portabilité (article 20 RGPD) :</h3>
                <p>
                  Vous avez le droit de recevoir vos données personnelles dans un format structuré, 
                  couramment utilisé et lisible par machine, et de les transmettre à un autre responsable de traitement.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">7.6. Droit d'opposition (article 21 RGPD) :</h3>
                <p>
                  Vous pouvez vous opposer à tout moment au traitement de vos données personnelles fondé sur l'intérêt légitime 
                  ou à des fins de prospection commerciale (y compris le profilage).
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">7.7. Droit de retirer son consentement :</h3>
                <p>
                  Lorsque le traitement est fondé sur votre consentement, vous pouvez le retirer à tout moment. 
                  Ce retrait ne compromet pas la licéité du traitement fondé sur le consentement effectué avant le retrait.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">7.8. Droit de définir des directives post-mortem :</h3>
                <p>
                  Vous avez le droit de définir des directives relatives au sort de vos données après votre décès.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">7.9. Droit d'introduire une réclamation :</h3>
                <p>
                  Vous avez le droit d'introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) :
                </p>
                <div className="bg-gray-50 p-4 rounded mt-3">
                  <p><strong>CNIL</strong></p>
                  <p>3 Place de Fontenoy - TSA 80715</p>
                  <p>75334 PARIS CEDEX 07</p>
                  <p>Téléphone : 01 53 73 22 22</p>
                  <p>Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.cnil.fr</a></p>
                </div>
                
                <h3 className="font-semibold mt-6 mb-3">Comment exercer vos droits :</h3>
                <p>
                  Pour exercer l'un de ces droits, vous pouvez nous contacter par email à 
                  <a href="mailto:contact@testciviquefrance.fr" className="text-blue-600 hover:underline"> contact@testciviquefrance.fr</a> en précisant :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Vos nom et prénom</li>
                  <li>Votre adresse email associée à votre compte</li>
                  <li>L'objet de votre demande (droit que vous souhaitez exercer)</li>
                  <li>Une copie d'une pièce d'identité (pour éviter toute usurpation d'identité)</li>
                </ul>
                
                <p className="mt-4">
                  Nous nous engageons à répondre à votre demande dans un délai d'un mois maximum. 
                  Ce délai peut être prolongé de deux mois en cas de demande complexe.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                8. Cookies et Technologies Similaires
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Le site Test Civique France utilise des cookies et technologies similaires pour améliorer votre expérience 
                  de navigation et le fonctionnement de nos services.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">8.1. Qu'est-ce qu'un cookie ?</h3>
                <p>
                  Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, smartphone, tablette) 
                  lors de votre visite sur un site internet. Il permet de conserver des informations sur votre navigation 
                  et de reconnaître votre terminal lors de visites ultérieures.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">8.2. Types de cookies utilisés :</h3>
                
                <h4 className="font-semibold mt-4">a) Cookies strictement nécessaires (exemptés de consentement) :</h4>
                <p className="ml-4">
                  Ces cookies sont indispensables au fonctionnement du site et ne peuvent pas être désactivés :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-8 mt-2">
                  <li>Cookies d'authentification : maintiennent votre session connectée</li>
                  <li>Cookies de sécurité : protègent contre les attaques CSRF et autres menaces</li>
                  <li>Cookies de préférence : mémorisent vos choix (langue, thème d'affichage)</li>
                </ul>
                
                <h4 className="font-semibold mt-4">b) Cookies fonctionnels :</h4>
                <p className="ml-4">
                  Ces cookies permettent d'améliorer les fonctionnalités du site :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-8 mt-2">
                  <li>Sauvegarde de votre progression dans les quiz</li>
                  <li>Mémorisation de vos paramètres personnalisés</li>
                  <li>Optimisation de l'interface utilisateur</li>
                </ul>
                
                <h4 className="font-semibold mt-4">c) Cookies analytiques :</h4>
                <p className="ml-4">
                  Ces cookies nous aident à comprendre comment vous utilisez le site (pages visitées, temps passé, etc.) 
                  afin d'améliorer nos services. Les données collectées sont anonymisées et agrégées.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">8.3. Gestion de vos préférences :</h3>
                <p>
                  Vous pouvez à tout moment configurer vos préférences de cookies ou les refuser (sauf cookies strictement nécessaires) :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Via le bandeau de consentement lors de votre première visite</li>
                  <li>Via les paramètres de votre navigateur (voir ci-dessous)</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">8.4. Configuration du navigateur :</h3>
                <p>
                  Vous pouvez configurer votre navigateur pour refuser les cookies ou être informé de leur dépôt :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li><strong>Chrome :</strong> Paramètres → Confidentialité et sécurité → Cookies</li>
                  <li><strong>Firefox :</strong> Options → Vie privée et sécurité → Cookies et données de sites</li>
                  <li><strong>Safari :</strong> Préférences → Confidentialité → Cookies</li>
                  <li><strong>Edge :</strong> Paramètres → Cookies et autorisations de site</li>
                </ul>
                
                <p className="mt-4 bg-yellow-50 p-4 rounded">
                  <strong>Attention :</strong> Le refus de certains cookies peut entraîner une dégradation de votre expérience 
                  utilisateur et limiter l'accès à certaines fonctionnalités du site.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">8.5. Durée de conservation des cookies :</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Cookies de session : supprimés à la fermeture du navigateur</li>
                  <li>Cookies fonctionnels : 12 mois maximum</li>
                  <li>Cookies analytiques : 13 mois maximum</li>
                </ul>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                9. Modifications de la Politique de Confidentialité
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Nous nous réservons le droit de modifier la présente Politique de Confidentialité à tout moment, 
                  notamment pour refléter les évolutions de nos pratiques, de nos services ou de la législation applicable.
                </p>
                
                <p className="mt-4">
                  En cas de modification substantielle, nous vous en informerons par email ou via une notification 
                  sur le site au moins 30 jours avant l'entrée en vigueur des changements.
                </p>
                
                <p className="mt-4">
                  Nous vous encourageons à consulter régulièrement cette page pour prendre connaissance des éventuelles modifications. 
                  La date de dernière mise à jour est indiquée en haut de ce document.
                </p>
                
                <p className="mt-4">
                  L'utilisation continue de nos services après la modification de cette politique constitue votre acceptation 
                  des nouvelles conditions.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                10. Contact et Questions
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Pour toute question, demande d'information ou exercice de vos droits concernant vos données personnelles, 
                  vous pouvez nous contacter :
                </p>
                
                <div className="bg-gray-50 p-6 rounded mt-4">
                  <p className="font-semibold mb-3">Test Civique France - Service Protection des Données</p>
                  <p><strong>Email :</strong> <a href="mailto:contact@testciviquefrance.fr" className="text-blue-600 hover:underline">contact@testciviquefrance.fr</a></p>
                  <p className="mt-2"><strong>Formulaire de contact :</strong> <Link href="/contact" className="text-blue-600 hover:underline">Page contact</Link></p>
                  <p className="mt-4 text-sm text-gray-600">
                    Délai de réponse : Nous nous engageons à répondre à toutes vos demandes dans un délai maximum d'un mois.
                  </p>
                </div>
                
                <p className="mt-6">
                  Nous restons à votre disposition pour toute question relative à la protection de vos données personnelles 
                  et nous efforçons de traiter chaque demande avec la plus grande attention et dans les meilleurs délais.
                </p>
              </div>
            </section>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-8">
              <h3 className="font-semibold text-blue-900 mb-3">En résumé :</h3>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>✓ Vos données sont traitées de manière sécurisée et transparente</li>
                <li>✓ Nous ne vendons jamais vos données à des tiers</li>
                <li>✓ Vous gardez le contrôle total sur vos informations personnelles</li>
                <li>✓ Vous pouvez à tout moment accéder, modifier ou supprimer vos données</li>
                <li>✓ Nous sommes conformes au RGPD et à la législation française</li>
                <li>✓ En cas de questions, notre équipe est à votre écoute</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
