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
            Conformément à la loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l&apos;économie numérique.
          </p>

          <div className="space-y-8">
            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                1. Éditeur du Site
              </h2>
              <div className="text-gray-700 space-y-3">
                <p><strong>Nom du site :</strong> Test Civique France</p>
                <p><strong>URL :</strong> www.testciviquefrance.fr</p>
                <p><strong>Email :</strong> contact@testciviquefrance.fr</p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                2. Hébergement
              </h2>
              <div className="text-gray-700 space-y-3">
                <p><strong>Hébergeur :</strong> Vercel Inc.</p>
                <p><strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA</p>
                <p><strong>Base de données :</strong> Supabase Inc.</p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                3. Propriété Intellectuelle
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>L&apos;ensemble des éléments du site (textes, images, logos) est protégé par le droit de la propriété intellectuelle.</p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                4. Données Personnelles
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>Consultez notre <Link href="/politique-confidentialite" className="text-blue-600 hover:underline">Politique de Confidentialité</Link>.</p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                5. Contact
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
