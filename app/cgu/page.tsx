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
            Conditions Générales d&apos;Utilisation
          </h1>
          
          <p className="text-gray-600 mb-8">
            Dernière mise à jour : 9 décembre 2025
          </p>

          <div className="space-y-8">
            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 1 - Définitions
              </h2>
              <div className="text-gray-700 space-y-3">
                <p><strong>« Plateforme »</strong> : désigne le site internet Test Civique France accessible à l&apos;adresse www.testciviquefrance.fr</p>
                <p><strong>« Utilisateur »</strong> : désigne toute personne physique qui accède et utilise la Plateforme.</p>
                <p><strong>« Services »</strong> : désigne l&apos;ensemble des fonctionnalités proposées par la Plateforme.</p>
                <p><strong>« Compte »</strong> : désigne l&apos;espace personnel créé par l&apos;Utilisateur lors de son inscription.</p>
                <p><strong>« Crédits »</strong> : désigne les unités permettant d&apos;accéder aux examens blancs.</p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 2 - Objet
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>Les présentes Conditions Générales d&apos;Utilisation (CGU) définissent les modalités d&apos;utilisation de la Plateforme Test Civique France.</p>
                <p>L&apos;accès et l&apos;utilisation de la Plateforme impliquent l&apos;acceptation sans réserve des présentes CGU.</p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 3 - Accès à la Plateforme
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>La Plateforme est accessible gratuitement. Certains services premium nécessitent l&apos;achat de crédits.</p>
                <p>Nous nous réservons le droit de suspendre temporairement l&apos;accès pour maintenance.</p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 4 - Inscription
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>L&apos;Utilisateur s&apos;engage à fournir des informations exactes lors de l&apos;inscription et à maintenir la confidentialité de ses identifiants.</p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 5 - Propriété Intellectuelle
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>L&apos;ensemble des contenus de la Plateforme est protégé par les lois relatives à la propriété intellectuelle.</p>
              </div>
            </section>

            <section className="bg-white p-6 border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Article 6 - Responsabilité
              </h2>
              <div className="text-gray-700 space-y-3">
                <p>Test Civique France ne garantit pas le succès à l&apos;examen officiel. La Plateforme constitue un outil d&apos;aide à la préparation.</p>
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
