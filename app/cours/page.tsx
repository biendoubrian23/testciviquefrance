import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { BookOpen, CheckCircle, ArrowRight, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cours de Préparation au Test Civique 2026 | Test Civique France',
  description: 'Accédez aux cours complets de préparation au test civique français 2026. 5 thèmes officiels, quiz interactifs, examens blancs. Conforme décret 2025-647.',
  alternates: {
    canonical: 'https://www.testciviquefrance.fr/cours',
  },
};

const themes = [
  {
    number: '01',
    title: 'Principes et valeurs de la République',
    description: 'La devise, les symboles, la laïcité, l\'égalité, la fraternité et les valeurs fondamentales de la République française.',
    questions: 11,
  },
  {
    number: '02',
    title: 'Institutions françaises et européennes',
    description: 'Le Président de la République, le Parlement, le Gouvernement, le Conseil constitutionnel, l\'Union européenne et ses institutions.',
    questions: 6,
  },
  {
    number: '03',
    title: 'Droits et devoirs du citoyen',
    description: 'Les droits fondamentaux, les libertés publiques, les obligations civiques, le service national et la participation à la vie démocratique.',
    questions: 11,
  },
  {
    number: '04',
    title: 'Histoire, géographie et culture françaises',
    description: 'Les grandes périodes de l\'histoire de France, la géographie du territoire, le patrimoine culturel, artistique et scientifique.',
    questions: 8,
  },
  {
    number: '05',
    title: 'Vivre dans la société française',
    description: 'L\'organisation sociale, le système éducatif, le système de santé, les services publics et la vie quotidienne en France.',
    questions: 4,
  },
];

const outils = [
  'Quiz d\'entraînement par thème, à votre rythme',
  'Examens blancs en conditions réelles (40 questions, 25 min)',
  'Mode révision chronométré ou non',
  'Fiches de révision interactives (flashcards)',
  'Statistiques détaillées de progression',
  'Historique de tous vos résultats',
];

export default function CoursPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-white border-b border-gray-200 py-12 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full mb-6">
              <BookOpen className="w-4 h-4" />
              Programme officiel 2026 — Décret n°2025-647
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Cours de Préparation au Test Civique
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Le test civique porte sur <strong>40 questions QCM</strong> réparties en 5 thèmes officiels.
              Vous devez obtenir au moins <strong>32 bonnes réponses (80 %)</strong> pour réussir.
              Nos cours couvrent l&apos;intégralité du programme conforme au décret n°2025-647 du 15 juillet 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
              >
                Accéder gratuitement
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold text-lg rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-colors"
              >
                <Lock className="w-5 h-5" />
                J&apos;ai déjà un compte
              </Link>
            </div>
          </div>
        </section>

        {/* Les 5 thèmes officiels */}
        <section className="py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Les 5 thèmes officiels du programme
              </h2>
              <p className="text-gray-600">
                Chaque thème correspond à une partie du test civique officiel. Nos quiz vous entraînent
                sur chacun d&apos;eux séparément ou en examen blanc complet.
              </p>
            </div>

            <div className="space-y-4">
              {themes.map((theme) => (
                <div
                  key={theme.number}
                  className="bg-white border border-gray-200 rounded-xl p-6 flex gap-5 items-start hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-600 text-white font-bold text-lg rounded-lg flex items-center justify-center flex-shrink-0">
                    {theme.number}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{theme.title}</h3>
                      <span className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium whitespace-nowrap">
                        {theme.questions} questions au test
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{theme.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Outils disponibles */}
        <section className="py-16 bg-white border-t border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Outils inclus dans votre espace
              </h2>
              <p className="text-gray-600">
                Créez un compte gratuit pour accéder à l&apos;ensemble des outils de préparation.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {outils.map((outil, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{outil}</span>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-xl hover:bg-blue-700 transition-colors shadow-lg"
              >
                Créer mon compte gratuit
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="mt-4 text-sm text-gray-500">
                Accès gratuit · Sans carte bancaire · Inscription en 30 secondes
              </p>
            </div>
          </div>
        </section>

        {/* Info officielle */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-blue-900 mb-3">
                Informations officielles sur le test civique
              </h2>
              <p className="text-blue-800 text-sm leading-relaxed mb-4">
                Le test de connaissance de la société française est régi par le <strong>décret n°2025-647 du 15 juillet 2025</strong>{' '}
                et l&apos;arrêté du 10 octobre 2025. Il est obligatoire pour l&apos;obtention du titre de séjour pluriannuel,
                du renouvellement ou de la demande de naturalisation française.
              </p>
              <p className="text-blue-700 text-sm">
                Test Civique France est un organisme privé indépendant, non affilié à l&apos;État français.
                Pour les informations officielles, consultez{' '}
                <a
                  href="https://www.service-public.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-blue-900"
                >
                  service-public.fr
                </a>{' '}
                ou votre préfecture.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
