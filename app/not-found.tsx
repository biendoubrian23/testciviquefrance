import Link from 'next/link';

const popularLinks = [
  { href: '/articles', label: 'Tous nos articles', desc: 'Guides immigration, naturalisation, titre de séjour' },
  { href: '/articles/prix-test-civique-2026-cout-tarif-titre-sejour-prefecture', label: 'Prix test civique & tarifs', desc: 'Coût du test civique (90€) et tous les tarifs' },
  { href: '/faq', label: 'Questions fréquentes', desc: 'Réponses aux questions sur le test civique' },
  { href: '/tarifs', label: 'Nos offres', desc: 'Préparez-vous avec plus de 800 questions QCM' },
  { href: '/cours', label: 'Commencer les cours', desc: 'Entraînez-vous sur les 5 thématiques officielles' },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Page non trouvée
        </h2>
        <p className="text-gray-600 mb-8">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>

        <div className="mb-8 text-left">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Pages populaires</h3>
          <ul className="space-y-3">
            {popularLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block p-3 bg-white rounded-lg border border-gray-200 hover:border-primary-500 hover:shadow-sm transition-all"
                >
                  <span className="font-medium text-primary-600">{link.label}</span>
                  <span className="block text-sm text-gray-500 mt-0.5">{link.desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/"
          className="inline-block px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
