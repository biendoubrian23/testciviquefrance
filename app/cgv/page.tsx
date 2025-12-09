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
            Dernière mise à jour : 9 décembre 2025
          </p>

          <div className="space-y-8">
            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 1 - Objet
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>Les présentes CGV régissent les ventes de crédits et services premium sur Test Civique France.</p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 2 - Produits
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>Test Civique France propose des packs de crédits permettant d&apos;accéder aux examens blancs. Les prix sont indiqués en euros TTC.</p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 3 - Paiement
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>Le paiement s&apos;effectue par carte bancaire via Stripe. Les transactions sont sécurisées par SSL.</p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 4 - Livraison
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>Les crédits sont crédités instantanément après confirmation du paiement.</p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 5 - Droit de Rétractation
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>Conformément à l&apos;article L221-28 du Code de la consommation, le droit de rétractation ne s&apos;applique pas aux contenus numériques.</p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 6 - Validité des Crédits
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>Les crédits sont valables 12 mois à compter de la date d&apos;achat.</p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 7 - Contact
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
