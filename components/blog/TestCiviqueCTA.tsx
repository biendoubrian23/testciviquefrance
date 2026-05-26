import Link from 'next/link';
import { ArrowRight, GraduationCap, FileCheck, Sparkles, Lock } from 'lucide-react';

export type TestCiviqueCTAVariant = 'inline' | 'final';

interface TestCiviqueCTAProps {
  /**
   * `inline` : version compacte à insérer au milieu d'un article.
   * `final`  : version premium pour la fin d'article (plus visuelle, plus large).
   */
  variant?: TestCiviqueCTAVariant;
  /** Surcharge optionnelle du titre principal */
  title?: string;
  /** Surcharge optionnelle du sous-titre */
  subtitle?: string;
}

/**
 * Bloc CTA standardisé pour les articles SEO.
 *
 * Objectif : convertir le trafic SEO (souvent intéressé par démarches
 * naturalisation/séjour) vers l'inscription gratuite et le test civique blanc.
 *
 * Deux variantes pour rester pertinent à des emplacements différents :
 *  - `inline` (au milieu d'un article) : compact, ne casse pas la lecture.
 *  - `final`  (en bas d'article) : large, visuel, autorité visuelle maximale.
 */
export default function TestCiviqueCTA({
  variant = 'final',
  title,
  subtitle,
}: TestCiviqueCTAProps) {
  if (variant === 'inline') {
    return (
      <aside
        className="my-10 border-l-4 border-primary-600 bg-gradient-to-r from-primary-50 to-blue-50 p-6 md:p-7 rounded-r-lg shadow-sm"
        aria-label="Inscription gratuite Test Civique France"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <div className="flex-shrink-0 hidden md:flex w-12 h-12 bg-primary-600 text-white items-center justify-center rounded-full">
            <Sparkles className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 leading-snug">
              {title ?? 'Préparez le test civique pendant votre démarche'}
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              {subtitle ??
                "Un test civique réussi (32/40 minimum) accélère votre dossier. Inscrivez-vous gratuitement et faites un examen blanc en 5 minutes — sans carte bancaire."}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-2 flex-shrink-0">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 transition-colors rounded"
            >
              S'inscrire gratuitement
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white border border-primary-600 text-primary-700 text-sm font-semibold hover:bg-primary-50 transition-colors rounded"
            >
              <Lock className="w-4 h-4" />
              Déjà inscrit ? Se connecter
            </Link>
          </div>
        </div>
      </aside>
    );
  }

  // variant === 'final'
  return (
    <section
      className="my-12 bg-gradient-to-br from-primary-600 via-primary-700 to-blue-800 text-white p-8 md:p-12 rounded-2xl shadow-xl relative overflow-hidden"
      aria-label="Inscription gratuite Test Civique France"
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 70%, white 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/15 backdrop-blur rounded-full text-xs md:text-sm font-medium mb-5 ring-1 ring-white/20">
          <Sparkles className="w-4 h-4" />
          <span>Inscription gratuite — sans carte bancaire</span>
        </div>

        <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
          {title ?? 'Réussissez votre test civique du premier coup'}
        </h2>
        <p className="text-base md:text-lg text-blue-50 mb-8 leading-relaxed">
          {subtitle ??
            "Le test civique conditionne votre naturalisation, votre carte de résident 10 ans ou votre carte de séjour pluriannuelle. Avec 800+ questions QCM officielles et des examens blancs en conditions réelles, conformes au décret 2025-647, vous mettez toutes les chances de votre côté."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <Link
            href="/signup"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-white text-primary-700 font-bold hover:bg-blue-50 transition-colors rounded-lg text-base md:text-lg shadow-lg"
          >
            <GraduationCap className="w-5 h-5" />
            S'inscrire gratuitement
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/login"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 bg-primary-800/40 hover:bg-primary-800/60 backdrop-blur text-white font-semibold transition-colors rounded-lg text-base md:text-lg ring-1 ring-white/30"
          >
            <Lock className="w-5 h-5" />
            Déjà inscrit ? Se connecter
          </Link>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-blue-50/90">
          <li className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
            800+ questions QCM
          </li>
          <li className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
            Examens blancs illimités
          </li>
          <li className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
            Conforme décret 2025-647
          </li>
        </ul>
      </div>
    </section>
  );
}
