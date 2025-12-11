import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function CGVPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Conditions Générales de Vente
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
                  Les présentes Conditions Générales de Vente (ci-après « CGV ») régissent les relations contractuelles 
                  entre Test Civique France et tout utilisateur souhaitant souscrire à un abonnement payant 
                  sur la plateforme www.testciviquefrance.fr.
                </p>
                
                <p className="mt-4">
                  Ces CGV s'appliquent exclusivement aux services payants proposés sur la Plateforme. 
                  Elles complètent les <Link href="/cgu" className="text-blue-600 hover:underline">Conditions Générales d'Utilisation</Link> qui 
                  régissent l'usage général de la Plateforme.
                </p>
                
                <p className="mt-4">
                  Toute souscription à un abonnement implique l'acceptation pleine et entière des présentes CGV ainsi que des 
                  <Link href="/cgu" className="text-blue-600 hover:underline"> CGU</Link> et de notre 
                  <Link href="/politique-confidentialite" className="text-blue-600 hover:underline"> Politique de Confidentialité</Link>.
                </p>
                
                <p className="mt-4">
                  Test Civique France se réserve le droit de modifier à tout moment les présentes CGV. 
                  Les CGV applicables sont celles en vigueur au moment de la souscription de l'abonnement.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 1 - Définitions et Objet
              </h2>
              <div className="text-gray-700 space-y-3">
                <h3 className="font-semibold mt-6 mb-3">1.1. Définitions :</h3>
                <p>
                  Les termes ci-après définis auront, dans les présentes CGV, la signification suivante :
                </p>
                
                <ul className="space-y-3 mt-4">
                  <li>
                    <p><strong>« Vendeur »</strong> : désigne Test Civique France, responsable de l'édition et de l'exploitation 
                    de la Plateforme www.testciviquefrance.fr.</p>
                  </li>
                  
                  <li>
                    <p><strong>« Client » ou « Utilisateur »</strong> : désigne toute personne physique majeure ou mineure 
                    (avec autorisation parentale) procédant à la souscription d'un abonnement payant sur la Plateforme.</p>
                  </li>
                  
                  <li>
                    <p><strong>« Abonnement »</strong> : désigne le contrat à durée déterminée ou indéterminée, 
                    renouvelable automatiquement, donnant accès aux Services Premium de la Plateforme moyennant 
                    le paiement d'un prix fixé selon la formule choisie.</p>
                  </li>
                  
                  <li>
                    <p><strong>« Formules d'Abonnement »</strong> : désigne les différents niveaux de services payants proposés :</p>
                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                      <li><strong>Formule Standard :</strong> accès aux fonctionnalités premium de base (examens blancs illimités, 
                      mode sans chronomètre, progression illimitée)</li>
                      <li><strong>Formule Premium :</strong> accès à l'ensemble des fonctionnalités avancées 
                      (Standard + flashcards, révisions avancées, support prioritaire)</li>
                    </ul>
                  </li>
                  
                  <li>
                    <p><strong>« Services Premium »</strong> : désigne l'ensemble des fonctionnalités et contenus 
                    réservés aux utilisateurs abonnés, décrits à l'article 2.</p>
                  </li>
                  
                  <li>
                    <p><strong>« Plateforme de Paiement »</strong> : désigne Stripe, prestataire de services de paiement 
                    sécurisé utilisé pour le traitement des transactions.</p>
                  </li>
                  
                  <li>
                    <p><strong>« Espace Client »</strong> : désigne l'interface personnelle accessible après authentification, 
                    permettant au Client de gérer son abonnement et d'accéder aux Services Premium.</p>
                  </li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">1.2. Objet :</h3>
                <p>
                  Les présentes CGV ont pour objet de définir les droits et obligations des parties dans le cadre 
                  de la vente en ligne des abonnements aux Services Premium proposés par Test Civique France.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 2 - Description des Services et Abonnements
              </h2>
              <div className="text-gray-700 space-y-3">
                <h3 className="font-semibold mt-6 mb-3">2.1. Nature des Services :</h3>
                <p>
                  Test Civique France propose une plateforme d'aide à la préparation de l'examen civique en France, 
                  offrant un accès à des contenus pédagogiques numériques :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Quiz d'entraînement par thématique (Principes et valeurs, Symboles de la République, etc.)</li>
                  <li>Examens blancs conformes au format officiel (40 questions, 45 minutes)</li>
                  <li>Ressources documentaires et cours</li>
                  <li>Statistiques de progression personnalisées</li>
                  <li>Flashcards de révision (formule Premium)</li>
                  <li>Mode révision avancé (formule Premium)</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">2.2. Formules d'Abonnement disponibles :</h3>
                
                <div className="mt-4 space-y-4">
                  <div className="bg-blue-50 p-5 rounded border border-blue-200">
                    <p className="font-semibold text-blue-900 text-lg mb-3">Abonnement Standard</p>
                    
                    <p className="mb-3"><strong>Fonctionnalités incluses :</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Accès illimité aux quiz d'entraînement</li>
                      <li>Progression illimitée sur tous les niveaux de difficulté</li>
                      <li>Sessions d'examen blanc illimitées (40 questions, 45 min)</li>
                      <li>Mode sans chronomètre pour s'entraîner sans pression de temps</li>
                      <li>Statistiques détaillées et historique complet</li>
                      <li>Suivi de progression par thématique</li>
                      <li>Accès depuis tous vos appareils (ordinateur, tablette, smartphone)</li>
                    </ul>
                    
                    <p className="mt-4 text-sm"><strong>Tarif :</strong> Voir page <Link href="/tarifs" className="text-blue-600 hover:underline">Tarifs</Link></p>
                    <p className="text-sm"><strong>Durée :</strong> Abonnement mensuel renouvelable automatiquement</p>
                  </div>
                  
                  <div className="bg-purple-50 p-5 rounded border border-purple-200">
                    <p className="font-semibold text-purple-900 text-lg mb-3">Abonnement Premium</p>
                    
                    <p className="mb-3"><strong>Fonctionnalités incluses :</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                      <li>Toutes les fonctionnalités de la formule Standard</li>
                      <li>Flashcards personnalisées pour réviser efficacement</li>
                      <li>Mode révision avancé avec algorithme de répétition espacée</li>
                      <li>Analyses statistiques approfondies</li>
                      <li>Recommandations personnalisées basées sur vos performances</li>
                      <li>Accès prioritaire aux nouvelles fonctionnalités</li>
                      <li>Support client prioritaire par email</li>
                      <li>Badge Premium visible sur votre profil</li>
                    </ul>
                    
                    <p className="mt-4 text-sm"><strong>Tarif :</strong> Voir page <Link href="/tarifs" className="text-blue-600 hover:underline">Tarifs</Link></p>
                    <p className="text-sm"><strong>Durée :</strong> Abonnement mensuel renouvelable automatiquement</p>
                  </div>
                </div>
                
                <p className="mt-6 bg-amber-50 p-4 rounded">
                  <strong>Important :</strong> Les services proposés constituent des outils d'aide à la préparation 
                  à l'examen civique. Test Civique France ne garantit en aucune manière la réussite à l'examen officiel, 
                  qui dépend de nombreux facteurs indépendants de la Plateforme.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">2.3. Évolutions des Services :</h3>
                <p>
                  Test Civique France se réserve le droit de faire évoluer les Services, d'ajouter de nouvelles 
                  fonctionnalités ou d'en supprimer certaines, sans que cela ne constitue une modification substantielle 
                  du service justifiant une résiliation ou un remboursement. Les abonnés seront informés de toute 
                  évolution significative.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 3 - Prix et Modalités de Paiement
              </h2>
              <div className="text-gray-700 space-y-3">
                <h3 className="font-semibold mt-6 mb-3">3.1. Tarifs :</h3>
                <p>
                  Les prix des abonnements sont indiqués en euros (€) toutes taxes comprises (TTC). 
                  Ils sont clairement affichés sur la page <Link href="/tarifs" className="text-blue-600 hover:underline">Tarifs</Link> de la Plateforme 
                  et lors du processus de souscription.
                </p>
                
                <p className="mt-4">
                  Test Civique France se réserve le droit de modifier ses tarifs à tout moment. Toutefois, 
                  les tarifs applicables au Client sont ceux en vigueur au moment de la souscription de l'abonnement. 
                  Toute modification de tarif sera notifiée au Client au moins 30 jours avant son entrée en vigueur 
                  pour les abonnements en cours.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">3.2. Modalités de paiement :</h3>
                <p>
                  Le paiement des abonnements s'effectue exclusivement en ligne par carte bancaire via notre 
                  prestataire de paiement sécurisé <strong>Stripe</strong>.
                </p>
                
                <p className="mt-4">
                  <strong>Cartes acceptées :</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Visa</li>
                  <li>Mastercard</li>
                  <li>American Express</li>
                  <li>Cartes bancaires françaises et internationales</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">3.3. Sécurité des paiements :</h3>
                <p>
                  Toutes les transactions sont sécurisées via Stripe, plateforme de paiement certifiée 
                  <strong> PCI-DSS niveau 1</strong> (le plus haut niveau de certification en matière de sécurité des paiements).
                </p>
                
                <p className="mt-4">
                  Test Civique France ne stocke aucune donnée bancaire. Vos informations de paiement sont 
                  exclusivement traitées par Stripe de manière cryptée et sécurisée.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">3.4. Facturation et renouvellement automatique :</h3>
                <p>
                  Les abonnements sont facturés mensuellement à la date anniversaire de la souscription initiale. 
                  Le renouvellement est automatique jusqu'à résiliation explicite par le Client.
                </p>
                
                <p className="mt-4">
                  <strong>Fonctionnement du renouvellement automatique :</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>À chaque échéance mensuelle, le montant de l'abonnement est automatiquement prélevé 
                  sur la carte bancaire enregistrée</li>
                  <li>Un email de confirmation de paiement est envoyé après chaque prélèvement</li>
                  <li>Un rappel est envoyé 7 jours avant la date de renouvellement</li>
                  <li>Le Client peut résilier son abonnement à tout moment depuis son Espace Client 
                  (voir Article 7 - Résiliation)</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">3.5. Échec de paiement :</h3>
                <p>
                  En cas d'échec du paiement automatique (carte expirée, fonds insuffisants, etc.), 
                  le Client en sera informé par email et dispose de 7 jours pour régulariser sa situation.
                </p>
                
                <p className="mt-4">
                  Passé ce délai, l'abonnement sera automatiquement suspendu et l'accès aux Services Premium sera retiré. 
                  Le Client conserve son compte gratuit et pourra souscrire à nouveau à un abonnement à tout moment.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">3.6. Factures :</h3>
                <p>
                  Une facture est automatiquement générée et envoyée par email au Client après chaque paiement. 
                  Les factures sont également accessibles depuis l'Espace Client dans la rubrique "Mes factures".
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 4 - Souscription de l'Abonnement
              </h2>
              <div className="text-gray-700 space-y-3">
                <h3 className="font-semibold mt-6 mb-3">4.1. Processus de souscription :</h3>
                <p>
                  Pour souscrire à un abonnement, le Client doit :
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4 mt-2">
                  <li>Créer un compte sur la Plateforme (ou se connecter à un compte existant)</li>
                  <li>Choisir la formule d'abonnement souhaitée (Standard ou Premium)</li>
                  <li>Vérifier le récapitulatif de la commande (formule, prix, périodicité)</li>
                  <li>Accepter les présentes CGV et les CGU</li>
                  <li>Procéder au paiement sécurisé via Stripe</li>
                  <li>Recevoir un email de confirmation de souscription</li>
                </ol>
                
                <h3 className="font-semibold mt-6 mb-3">4.2. Conditions de souscription :</h3>
                <p>
                  La souscription à un abonnement est réservée :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Aux personnes physiques majeures</li>
                  <li>Aux personnes mineures disposant de l'autorisation de leur représentant légal 
                  (parent ou tuteur) qui effectuera le paiement</li>
                </ul>
                
                <p className="mt-4">
                  Le Client garantit posséder la capacité juridique nécessaire pour souscrire à un abonnement 
                  et utiliser les Services.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">4.3. Validation de la commande :</h3>
                <p>
                  La validation du paiement par Stripe constitue la validation définitive de la commande et l'acceptation 
                  des présentes CGV. Un email de confirmation contenant les détails de l'abonnement est immédiatement 
                  envoyé au Client.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">4.4. Accès immédiat aux Services Premium :</h3>
                <p>
                  Dès validation du paiement, l'accès aux Services Premium est activé instantanément. 
                  Le Client peut immédiatement utiliser l'ensemble des fonctionnalités de sa formule d'abonnement.
                </p>
                
                <p className="mt-4 bg-green-50 p-4 rounded">
                  <strong>Activation instantanée :</strong> Contrairement aux biens physiques, les services numériques 
                  sont fournis immédiatement après paiement. Cette fourniture immédiate a des conséquences sur le droit 
                  de rétractation (voir Article 5).
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 5 - Droit de Rétractation
              </h2>
              <div className="text-gray-700 space-y-3">
                <h3 className="font-semibold mt-6 mb-3">5.1. Principe du droit de rétractation :</h3>
                <p>
                  Conformément à l'article L.221-18 du Code de la consommation, le Client dispose d'un délai de 
                  <strong> 14 jours</strong> à compter de la souscription de l'abonnement pour exercer son droit de rétractation 
                  sans avoir à justifier de motifs ni à payer de pénalités.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">5.2. Exception : fourniture immédiate du service numérique :</h3>
                <p>
                  Toutefois, conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation 
                  ne peut être exercé pour les contrats de fourniture d'un contenu numérique non fourni sur un support 
                  matériel dont l'exécution a commencé avec l'accord préalable exprès du consommateur et pour lequel 
                  il a renoncé à son droit de rétractation.
                </p>
                
                <p className="mt-4 bg-amber-50 p-4 rounded">
                  <strong>Important :</strong> En souscrivant à un abonnement et en accédant immédiatement aux Services Premium, 
                  le Client reconnaît expressément :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2 bg-amber-50 p-4 rounded">
                  <li>Avoir demandé la fourniture immédiate des Services Premium</li>
                  <li>Être informé qu'il perd ainsi son droit de rétractation</li>
                  <li>Renoncer expressément à son droit de rétractation</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">5.3. Cas particulier : non-utilisation des Services :</h3>
                <p>
                  Si le Client n'a accédé à aucun Service Premium dans les 14 jours suivant la souscription, 
                  il conserve son droit de rétractation et peut demander un remboursement intégral en contactant 
                  notre service client à <a href="mailto:contact@testciviquefrance.fr" className="text-blue-600 hover:underline">contact@testciviquefrance.fr</a>.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">5.4. Modalités d'exercice du droit de rétractation :</h3>
                <p>
                  Pour exercer son droit de rétractation (dans les cas où il s'applique), le Client doit notifier 
                  sa décision de manière claire et non équivoque :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Par email à : <a href="mailto:contact@testciviquefrance.fr" className="text-blue-600 hover:underline">contact@testciviquefrance.fr</a></li>
                  <li>Via le formulaire de contact : <Link href="/contact" className="text-blue-600 hover:underline">Page contact</Link></li>
                </ul>
                
                <p className="mt-4">
                  La notification doit inclure :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Nom et prénom du Client</li>
                  <li>Adresse email associée au compte</li>
                  <li>Date de souscription de l'abonnement</li>
                  <li>Formule d'abonnement souscrite</li>
                  <li>Déclaration claire de volonté de se rétracter</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">5.5. Effets de la rétractation et remboursement :</h3>
                <p>
                  En cas de rétractation valide, Test Civique France remboursera la totalité des sommes versées 
                  dans un délai maximum de <strong>14 jours</strong> à compter de la notification de la rétractation.
                </p>
                
                <p className="mt-4">
                  Le remboursement sera effectué en utilisant le même moyen de paiement que celui utilisé pour 
                  la transaction initiale, sauf accord contraire du Client.
                </p>
                
                <p className="mt-4">
                  L'accès aux Services Premium sera immédiatement désactivé dès réception de la notification de rétractation.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 6 - Durée de l'Abonnement et Renouvellement
              </h2>
              <div className="text-gray-700 space-y-3">
                <h3 className="font-semibold mt-6 mb-3">6.1. Durée initiale :</h3>
                <p>
                  Les abonnements (Standard et Premium) sont souscrits pour une durée initiale d'un mois (30 jours) 
                  à compter de la date de validation du paiement initial.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">6.2. Renouvellement automatique :</h3>
                <p>
                  Sauf résiliation par le Client (voir Article 7), l'abonnement est automatiquement renouvelé 
                  pour des périodes successives d'un mois, aux mêmes conditions tarifaires (sous réserve 
                  d'éventuelles modifications de prix notifiées au préalable).
                </p>
                
                <p className="mt-4">
                  <strong>Date de renouvellement :</strong> L'abonnement est renouvelé chaque mois à la date anniversaire 
                  de la souscription initiale. Par exemple, un abonnement souscrit le 15 janvier sera renouvelé le 15 de chaque mois.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">6.3. Notifications de renouvellement :</h3>
                <p>
                  Le Client reçoit :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Un rappel par email <strong>7 jours avant</strong> la date de renouvellement</li>
                  <li>Une confirmation de paiement par email <strong>immédiatement après</strong> chaque renouvellement</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">6.4. Gestion de l'abonnement :</h3>
                <p>
                  Le Client peut à tout moment consulter les informations relatives à son abonnement depuis son Espace Client :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Formule d'abonnement en cours</li>
                  <li>Date de souscription</li>
                  <li>Prochaine date de renouvellement</li>
                  <li>Historique des paiements</li>
                  <li>Factures téléchargeables</li>
                  <li>Option de résiliation</li>
                </ul>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 7 - Résiliation de l'Abonnement
              </h2>
              <div className="text-gray-700 space-y-3">
                <h3 className="font-semibold mt-6 mb-3">7.1. Résiliation à l'initiative du Client :</h3>
                <p>
                  Le Client peut résilier son abonnement à tout moment, sans préavis ni pénalité, en procédant comme suit :
                </p>
                
                <p className="mt-4">
                  <strong>Méthode recommandée :</strong> Depuis l'Espace Client
                </p>
                <ol className="list-decimal list-inside space-y-1 ml-4 mt-2">
                  <li>Se connecter à son compte</li>
                  <li>Accéder à la section "Mon abonnement" ou "Paramètres"</li>
                  <li>Cliquer sur "Résilier mon abonnement"</li>
                  <li>Confirmer la résiliation</li>
                </ol>
                
                <p className="mt-4">
                  <strong>Méthode alternative :</strong> Par email
                </p>
                <p className="ml-4">
                  Envoyer une demande de résiliation à <a href="mailto:contact@testciviquefrance.fr" className="text-blue-600 hover:underline">contact@testciviquefrance.fr</a> en 
                  précisant vos nom, prénom et adresse email associée au compte.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">7.2. Effets de la résiliation :</h3>
                <p>
                  Lors de la résiliation :
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li><strong>Effet immédiat :</strong> Le renouvellement automatique est annulé immédiatement. 
                  Aucun nouveau prélèvement ne sera effectué.</li>
                  
                  <li><strong>Accès aux Services Premium :</strong> Le Client conserve l'accès aux Services Premium 
                  jusqu'à la fin de la période d'abonnement en cours (déjà payée). Par exemple, si la résiliation 
                  intervient le 10 du mois et que le dernier paiement couvre la période du 1er au 30, l'accès reste 
                  actif jusqu'au 30.</li>
                  
                  <li><strong>Fin de période :</strong> À l'échéance de la période payée, l'accès aux Services Premium 
                  est automatiquement désactivé. Le compte redevient un compte gratuit avec accès aux services de base.</li>
                  
                  <li><strong>Conservation des données :</strong> La progression, les statistiques et l'historique 
                  du Client sont conservés. En cas de réabonnement ultérieur, ces données seront à nouveau accessibles.</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">7.3. Pas de remboursement au prorata :</h3>
                <p className="bg-amber-50 p-4 rounded">
                  <strong>Important :</strong> La résiliation n'entraîne aucun remboursement de la période en cours déjà payée. 
                  Le Client continue de bénéficier des Services Premium jusqu'à la fin de cette période. 
                  Aucun remboursement au prorata temporis n'est effectué.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">7.4. Réabonnement :</h3>
                <p>
                  Le Client peut se réabonner à tout moment en souscrivant à nouveau une formule d'abonnement. 
                  Sa progression et ses données personnelles seront restaurées.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">7.5. Résiliation à l'initiative de Test Civique France :</h3>
                <p>
                  Test Civique France se réserve le droit de résilier l'abonnement d'un Client, sans préavis ni remboursement, 
                  dans les cas suivants :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Violation des <Link href="/cgu" className="text-blue-600 hover:underline">Conditions Générales d'Utilisation</Link></li>
                  <li>Violation des présentes CGV</li>
                  <li>Usage frauduleux ou abusif des Services</li>
                  <li>Comportement inapproprié, illégal ou contraire aux bonnes mœurs</li>
                  <li>Non-paiement récurrent après relance</li>
                  <li>Partage de compte avec des tiers</li>
                </ul>
                
                <p className="mt-4">
                  Dans ce cas, l'accès aux Services est immédiatement suspendu sans possibilité de remboursement. 
                  Test Civique France se réserve le droit d'engager des poursuites judiciaires si nécessaire.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 8 - Modification du Tarif des Abonnements
              </h2>
              <div className="text-gray-700 space-y-3">
                <h3 className="font-semibold mt-6 mb-3">8.1. Droit de modification des tarifs :</h3>
                <p>
                  Test Civique France se réserve le droit de modifier à tout moment le prix de ses abonnements 
                  pour des raisons économiques, commerciales ou d'évolution des Services.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">8.2. Information préalable :</h3>
                <p>
                  En cas de modification tarifaire, les Clients abonnés en seront informés au moins <strong>30 jours</strong> 
                  avant l'entrée en vigueur du nouveau tarif par :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Email envoyé à l'adresse enregistrée sur le compte</li>
                  <li>Notification visible dans l'Espace Client</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">8.3. Application du nouveau tarif :</h3>
                <p>
                  Le nouveau tarif s'applique au prochain renouvellement suivant la période de préavis de 30 jours. 
                  Les abonnements en cours ne sont pas affectés jusqu'à leur prochaine échéance de renouvellement.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">8.4. Droit de résiliation :</h3>
                <p>
                  Si le Client n'accepte pas la modification tarifaire, il dispose du droit de résilier son abonnement 
                  sans pénalité pendant toute la durée du préavis de 30 jours. La résiliation prendra effet à la fin 
                  de la période d'abonnement en cours.
                </p>
                
                <p className="mt-4">
                  Le silence du Client au-delà du délai de 30 jours vaut acceptation du nouveau tarif.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 9 - Responsabilité et Garanties
              </h2>
              <div className="text-gray-700 space-y-3">
                <h3 className="font-semibold mt-6 mb-3">9.1. Obligations de Test Civique France :</h3>
                <p>
                  Test Civique France s'engage à :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Fournir des Services conformes aux descriptions présentées</li>
                  <li>Assurer la disponibilité de la Plateforme dans la mesure du possible</li>
                  <li>Mettre en œuvre les moyens nécessaires pour la sécurité des données personnelles</li>
                  <li>Traiter les demandes des Clients dans des délais raisonnables</li>
                </ul>
                
                <h3 className="font-semibold mt-6 mb-3">9.2. Limitation de responsabilité :</h3>
                <p className="bg-amber-50 p-4 rounded">
                  <strong>Clause essentielle :</strong> Test Civique France ne garantit en aucun cas la réussite du Client 
                  à l'examen civique officiel. Les Services proposés constituent un outil d'aide à la préparation 
                  et ne se substituent pas à une préparation officielle ou à une formation dispensée par les autorités compétentes.
                </p>
                
                <p className="mt-4">
                  Test Civique France décline toute responsabilité :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>En cas d'échec du Client à l'examen officiel</li>
                  <li>Pour les interruptions temporaires de service (maintenance, pannes techniques)</li>
                  <li>Pour les dommages indirects, accessoires ou consécutifs</li>
                  <li>Pour les pertes de profits, revenus, données ou opportunités</li>
                  <li>En cas d'impossibilité d'accéder aux Services due à des problèmes de connexion Internet du Client</li>
                  <li>En cas d'utilisation non conforme ou abusive des Services</li>
                </ul>
                
                <p className="mt-4">
                  En tout état de cause, la responsabilité totale de Test Civique France ne saurait excéder 
                  le montant total des sommes versées par le Client au titre de son abonnement au cours des 
                  12 mois précédant la réclamation.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">9.3. Obligations du Client :</h3>
                <p>
                  Le Client s'engage à :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Utiliser les Services de manière conforme aux CGU et CGV</li>
                  <li>Ne pas partager son compte avec des tiers</li>
                  <li>Ne pas reproduire, distribuer ou commercialiser les contenus de la Plateforme</li>
                  <li>Maintenir à jour ses informations de paiement</li>
                  <li>Informer Test Civique France de toute anomalie ou problème technique</li>
                </ul>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 10 - Protection des Données Personnelles
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Le traitement des données personnelles collectées dans le cadre de la souscription et de l'utilisation 
                  des abonnements est régi par notre <Link href="/politique-confidentialite" className="text-blue-600 hover:underline">Politique de Confidentialité</Link>, 
                  conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
                </p>
                
                <p className="mt-4">
                  Les données collectées incluent notamment :
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Informations d'identification (nom, prénom, email)</li>
                  <li>Données de facturation et d'abonnement</li>
                  <li>Historique des paiements (traité par Stripe)</li>
                  <li>Données d'utilisation des Services</li>
                </ul>
                
                <p className="mt-4">
                  Pour toute information sur vos droits (accès, rectification, effacement, portabilité, opposition) 
                  et sur le traitement de vos données, veuillez consulter notre 
                  <Link href="/politique-confidentialite" className="text-blue-600 hover:underline"> Politique de Confidentialité</Link>.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 11 - Service Client et Réclamations
              </h2>
              <div className="text-gray-700 space-y-3">
                <h3 className="font-semibold mt-6 mb-3">11.1. Contact du service client :</h3>
                <p>
                  Pour toute question, assistance ou réclamation concernant votre abonnement, vous pouvez contacter 
                  notre service client :
                </p>
                
                <div className="bg-gray-50 p-4 rounded mt-3">
                  <p><strong>Email :</strong> <a href="mailto:contact@testciviquefrance.fr" className="text-blue-600 hover:underline">contact@testciviquefrance.fr</a></p>
                  <p className="mt-2"><strong>Formulaire :</strong> <Link href="/contact" className="text-blue-600 hover:underline">Page contact</Link></p>
                  <p className="mt-3 text-sm text-gray-600">Délai de réponse : 48 heures ouvrées maximum</p>
                </div>
                
                <h3 className="font-semibold mt-6 mb-3">11.2. Traitement des réclamations :</h3>
                <p>
                  Toute réclamation sera traitée avec attention et fera l'objet d'une réponse dans les meilleurs délais. 
                  Nous nous engageons à rechercher une solution satisfaisante pour résoudre tout litige à l'amiable.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">11.3. Médiation de la consommation :</h3>
                <p>
                  Conformément à l'article L.612-1 du Code de la consommation, en cas de litige persistant après avoir 
                  contacté notre service client, vous pouvez recourir gratuitement à la médiation de la consommation :
                </p>
                
                <div className="bg-gray-50 p-4 rounded mt-3">
                  <p><strong>Médiateur de la consommation DEVIGNY</strong></p>
                  <p>972 avenue de la République</p>
                  <p>59700 MARCQ-EN-BAROEUL</p>
                  <p>Site web : <a href="https://www.mediateur-consommation-devigny.fr" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.mediateur-consommation-devigny.fr</a></p>
                </div>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 12 - Droit Applicable et Juridiction
              </h2>
              <div className="text-gray-700 space-y-3">
                <h3 className="font-semibold mt-6 mb-3">12.1. Droit applicable :</h3>
                <p>
                  Les présentes Conditions Générales de Vente sont régies et interprétées conformément au droit français.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">12.2. Règlement des litiges :</h3>
                <p>
                  En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute action contentieuse. 
                  Le Client est invité à contacter prioritairement notre service client.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">12.3. Juridiction compétente :</h3>
                <p>
                  À défaut de résolution amiable, tout litige relatif à l'interprétation, l'exécution ou la résiliation 
                  des présentes CGV sera soumis aux tribunaux français compétents.
                </p>
                
                <p className="mt-4">
                  Pour les Clients consommateurs, les litiges relèvent de la compétence des tribunaux du ressort 
                  de leur domicile ou du siège social de Test Civique France, à leur choix.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 13 - Dispositions Finales
              </h2>
              <div className="text-gray-700 space-y-3">
                <h3 className="font-semibold mt-6 mb-3">13.1. Intégralité de l'accord :</h3>
                <p>
                  Les présentes CGV, associées aux CGU et à la Politique de Confidentialité, constituent l'intégralité 
                  de l'accord entre Test Civique France et le Client concernant les abonnements aux Services Premium.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">13.2. Nullité partielle :</h3>
                <p>
                  Si une clause des présentes CGV est déclarée nulle ou non applicable, les autres clauses 
                  restent en vigueur et conservent leur plein effet.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">13.3. Modification des CGV :</h3>
                <p>
                  Test Civique France se réserve le droit de modifier les présentes CGV à tout moment. 
                  Les CGV applicables sont celles en vigueur au moment de la souscription de l'abonnement. 
                  Toute modification substantielle sera notifiée aux Clients abonnés avec un préavis de 30 jours.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">13.4. Conservation :</h3>
                <p>
                  Les présentes CGV sont archivées sur un support fiable et durable de manière à constituer 
                  une copie fidèle et durable conformément à l'article 1366 du Code civil.
                </p>
                
                <h3 className="font-semibold mt-6 mb-3">13.5. Langue :</h3>
                <p>
                  Les présentes CGV sont rédigées en langue française. En cas de traduction, seul le texte français fait foi.
                </p>
              </div>
            </section>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mt-8">
              <h3 className="font-semibold text-purple-900 mb-3">Résumé des points essentiels :</h3>
              <ul className="space-y-2 text-purple-800 text-sm">
                <li>✓ Les abonnements sont mensuels et renouvelables automatiquement</li>
                <li>✓ Vous pouvez résilier à tout moment sans pénalité (effet à la fin de la période en cours)</li>
                <li>✓ Accès immédiat aux Services Premium dès validation du paiement</li>
                <li>✓ Paiement 100% sécurisé via Stripe (certification PCI-DSS niveau 1)</li>
                <li>✓ Facturation mensuelle à date anniversaire avec rappels automatiques</li>
                <li>✓ Droit de rétractation de 14 jours (sauf si utilisation des Services Premium)</li>
                <li>✓ Modification tarifaire possible avec préavis de 30 jours</li>
                <li>✓ Service client réactif et médiation de la consommation disponible</li>
                <li>✓ Pas de garantie de réussite à l'examen officiel (outil d'aide uniquement)</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded mt-6 text-center text-sm text-gray-600">
              <p>
                Ces CGV ont été mises à jour en décembre 2025. Vous acceptez les présentes CGV lors de la souscription 
                de votre abonnement. Pour toute question : <a href="mailto:contact@testciviquefrance.fr" className="text-blue-600 hover:underline">contact@testciviquefrance.fr</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
