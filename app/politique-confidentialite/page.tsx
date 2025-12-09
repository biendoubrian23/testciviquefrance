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
            Dernière mise à jour : 9 décembre 2025
          </p>

          <div className="space-y-8">
            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                1. Responsable du Traitement
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>Test Civique France - contact@testciviquefrance.fr</p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                2. Données Collectées
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>Nous collectons : nom, email, historique des quiz, données de paiement (via Stripe).</p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                3. Finalités
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>Gestion du compte, fourniture des services, traitement des paiements, communication.</p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                4. Vos Droits (RGPD)
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>Vous disposez des droits d&apos;accès, rectification, effacement, portabilité et opposition.</p>
                <p>Contact : contact@testciviquefrance.fr</p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                5. Cookies
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>Nous utilisons des cookies essentiels pour le fonctionnement du site.</p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                6. Contact
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>Pour toute question : <Link href="/contact" className="text-blue-600 hover:underline">contactez-nous</Link></p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
