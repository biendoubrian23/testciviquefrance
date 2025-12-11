import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Mentions Légales
          </h1>
          
          <p className="text-gray-600 mb-8">
            Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site les présentes mentions légales.
          </p>

          <div className="space-y-8">
            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                1. Éditeur et Responsable de la Publication
              </h2>
              <div className="text-gray-700 space-y-3">
                <p><strong>Raison sociale :</strong> Test Civique France</p>
                <p><strong>Nom du site :</strong> Test Civique France</p>
                <p><strong>URL du site :</strong> <a href="https://www.testciviquefrance.fr" className="text-blue-600 hover:underline">www.testciviquefrance.fr</a></p>
                <p><strong>Directeur de la publication :</strong> Test Civique France</p>
                <p><strong>Adresse email de contact :</strong> <a href="mailto:contact@testciviquefrance.fr" className="text-blue-600 hover:underline">contact@testciviquefrance.fr</a></p>
                
                <p className="mt-4">Le responsable de la publication est une personne physique.</p>
                
                <h3 className="font-semibold mt-6 mb-2">Objet du site :</h3>
                <p>
                  Test Civique France est une plateforme d'apprentissage en ligne dédiée à la préparation du test de connaissance civique français, 
                  requis pour l'obtention du titre de séjour pluriannuel, le renouvellement de titre de séjour ou la naturalisation française. 
                  Le site propose des contenus pédagogiques, des quiz interactifs, des examens blancs et des cours complets sur les principes et 
                  valeurs de la République française, le système institutionnel, les droits et devoirs des citoyens, ainsi que l'histoire, 
                  la géographie et la culture françaises.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                2. Propriété Intellectuelle
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  L'ensemble du contenu présent sur le site Test Civique France, incluant mais ne se limitant pas aux textes, 
                  images, graphismes, logos, icônes, sons, logiciels, structure du site et bases de données, est la propriété 
                  exclusive de Test Civique France, sauf mention contraire explicite.
                </p>
                
                <h3 className="font-semibold mt-6 mb-2">Protection des droits :</h3>
                <p>
                  Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, 
                  quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de Test Civique France.
                </p>
                
                <p className="mt-4">
                  Toute exploitation non autorisée du site ou de l'un des éléments qu'il contient sera considérée comme constitutive 
                  d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
                </p>
                
                <h3 className="font-semibold mt-6 mb-2">Licences et crédits :</h3>
                <p>
                  Les questions et contenus pédagogiques sont créés par Test Civique France en conformité avec le référentiel officiel 
                  de l'examen civique français publié par l'État français. Certains contenus peuvent être issus de sources officielles 
                  publiques (Légifrance, Service Public, etc.) et sont utilisés dans un cadre pédagogique.
                </p>
                
                <p className="mt-4">
                  Le logo de la République française et les symboles officiels sont utilisés conformément à la réglementation en vigueur 
                  à des fins éducatives uniquement.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                3. Protection des Données Personnelles
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Test Civique France accorde une importance particulière à la protection de vos données personnelles et au respect de votre vie privée.
                </p>
                
                <h3 className="font-semibold mt-4 mb-2">Conformité RGPD :</h3>
                <p>
                  Le site est en conformité avec le Règlement Général sur la Protection des Données (RGPD) - Règlement UE 2016/679 du 27 avril 2016 
                  et la loi Informatique et Libertés modifiée (loi n°78-17 du 6 janvier 1978).
                </p>
                
                <h3 className="font-semibold mt-4 mb-2">Responsable du traitement :</h3>
                <p>Test Civique France est le responsable du traitement de vos données personnelles.</p>
                
                <p className="mt-4">
                  Pour toute information détaillée concernant la collecte, l'utilisation, le stockage et la protection de vos données personnelles, 
                  veuillez consulter notre <Link href="/politique-confidentialite" className="text-blue-600 hover:underline font-semibold">Politique de Confidentialité</Link>.
                </p>
                
                <h3 className="font-semibold mt-6 mb-2">Exercice de vos droits :</h3>
                <p>
                  Conformément au RGPD, vous disposez des droits d'accès, de rectification, d'effacement, de limitation, de portabilité 
                  et d'opposition concernant vos données personnelles. Pour exercer ces droits, contactez-nous à : 
                  <a href="mailto:contact@testciviquefrance.fr" className="text-blue-600 hover:underline"> contact@testciviquefrance.fr</a>
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                4. Cookies et Technologies de Suivi
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Le site Test Civique France utilise des cookies essentiels au fonctionnement technique du site et à la fourniture des services. 
                  Aucun cookie publicitaire ou de traçage tiers n'est utilisé.
                </p>
                
                <h3 className="font-semibold mt-4 mb-2">Types de cookies utilisés :</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Cookies de session</strong> : nécessaires pour l'authentification et la sécurité</li>
                  <li><strong>Cookies fonctionnels</strong> : permettent de mémoriser vos préférences (langue, thème, etc.)</li>
                  <li><strong>Cookies de performance</strong> : analysent l'utilisation du site pour améliorer nos services</li>
                </ul>
                
                <p className="mt-4">
                  Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela peut affecter certaines fonctionnalités du site.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                5. Limitation de Responsabilité
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Test Civique France met tout en œuvre pour offrir aux utilisateurs des informations et des outils performants, 
                  précis et actualisés. Toutefois, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations 
                  mises à disposition sur le site.
                </p>
                
                <h3 className="font-semibold mt-4 mb-2">Disponibilité du service :</h3>
                <p>
                  Test Civique France s'efforce d'assurer la disponibilité permanente du site, mais ne peut garantir une accessibilité 
                  ininterrompue. Le site peut être temporairement indisponible en raison d'opérations de maintenance, de mises à jour, 
                  de pannes techniques ou de circonstances indépendantes de notre volonté.
                </p>
                
                <h3 className="font-semibold mt-6 mb-2">Nature pédagogique :</h3>
                <p>
                  Test Civique France est un outil d'aide à la préparation du test civique français. La réussite aux quiz et examens blancs 
                  sur notre plateforme ne garantit en aucun cas la réussite à l'examen officiel. Les utilisateurs sont invités à se renseigner 
                  auprès des autorités compétentes (préfecture, OFII, etc.) pour obtenir les informations officielles les plus récentes.
                </p>
                
                <h3 className="font-semibold mt-6 mb-2">Liens externes :</h3>
                <p>
                  Le site peut contenir des liens hypertextes vers d'autres sites internet. Test Civique France n'exerce aucun contrôle 
                  sur ces sites externes et décline toute responsabilité quant à leur contenu, leur disponibilité ou leur politique de confidentialité.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                6. Droit Applicable et Juridiction Compétente
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable, 
                  le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
                </p>
                
                <p className="mt-4">
                  Conformément à l'article L.612-1 du Code de la consommation, les utilisateurs consommateurs ont le droit de recourir 
                  gratuitement à un médiateur de la consommation en vue de la résolution amiable d'un litige.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                7. Modifications des Mentions Légales
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Test Civique France se réserve le droit de modifier les présentes mentions légales à tout moment. 
                  Les modifications prendront effet dès leur publication sur le site. Nous vous invitons à consulter régulièrement 
                  cette page pour prendre connaissance des éventuelles modifications.
                </p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                8. Contact et Réclamations
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>
                  Pour toute question concernant les présentes mentions légales, pour signaler un contenu inapproprié ou 
                  pour toute réclamation, vous pouvez nous contacter :
                </p>
                
                <ul className="list-none space-y-2 ml-4 mt-4">
                  <li><strong>Par email :</strong> <a href="mailto:contact@testciviquefrance.fr" className="text-blue-600 hover:underline">contact@testciviquefrance.fr</a></li>
                  <li><strong>Via notre formulaire de contact :</strong> <Link href="/contact" className="text-blue-600 hover:underline">Page contact</Link></li>
                </ul>
                
                <p className="mt-6 text-sm text-gray-600">
                  Dernière mise à jour des mentions légales : Décembre 2025
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
