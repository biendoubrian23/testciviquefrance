import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">TCF</span>
              </div>
              <span className="text-xl font-bold text-white">
                Test Civique France
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              La plateforme de référence pour préparer votre test civique
              français. Obtenez votre titre de séjour pluriannuel, 
              votre renouvellement ou préparez votre demande de nationalité.
            </p>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/a-propos"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/tarifs"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tarifs
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="font-semibold text-white mb-4">Légal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/cgu"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  CGU
                </Link>
              </li>
              <li>
                <Link
                  href="/cgv"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  CGV
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-2 pt-1 border-t border-gray-700 text-left text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Test Civique France. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
