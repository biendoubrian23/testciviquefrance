export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Page non trouvée
        </h2>
        <p className="text-gray-600 mb-8">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
        >
          Retour à l&apos;accueil
        </a>
      </div>
    </div>
  );
}
