import Link from 'next/link';
import { ArrowRight, HelpCircle, Clock, ShieldCheck, ChevronDown } from 'lucide-react';

const points = [
  'Les ressortissants européens ne sont pas concernés',
  'Les renouvellements de titre en sont exclus',
  'Une dispense pour le séjour ne vaut pas pour la naturalisation',
];

export default function EligibiliteSection() {
  return (
    <section className="py-14 sm:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Texte */}
          <div className="animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white text-sm font-semibold mb-6">
              <HelpCircle className="w-4 h-4" />
              Avant de réviser, vérifiez
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
              Êtes-vous vraiment obligé de passer l&apos;examen civique&nbsp;?
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Depuis le 1<sup>er</sup> janvier 2026, l&apos;examen conditionne la carte de
              séjour pluriannuelle, la carte de résident et la naturalisation. Mais des
              milliers de personnes se préparent — ou paient une inscription — sans être
              concernées. D&apos;autres croient en être dispensées et voient leur dossier
              déclaré incomplet.
            </p>

            <ul className="space-y-3 mb-9">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-gray-300">
                  <span className="w-1.5 h-1.5 bg-primary-400 mt-2.5 shrink-0" />
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/eligibilite-examen-civique"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold text-lg hover:bg-primary-500 transition-colors"
            >
              Vérifier si je dois le passer
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-6 text-sm text-gray-400">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                Moins d&apos;une minute
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                Gratuit, sans inscription
              </span>
            </div>
          </div>

          {/* Aperçu du simulateur */}
          <div className="animate-fade-in-up delay-200">
            <div className="bg-white shadow-2xl p-7 sm:p-9" aria-hidden="true">
              {/* Aperçu statique du formulaire */}
              <p className="text-base font-bold text-gray-900 mb-4">
                <span className="text-primary-600 mr-2">1.</span>
                Quelle est votre nationalité&nbsp;?
              </p>
              <div className="grid grid-cols-2 gap-2 mb-7">
                <div className="flex items-center gap-2 p-3 border border-primary-600 bg-primary-50">
                  <span className="w-3.5 h-3.5 rounded-full border-[4px] border-primary-600 shrink-0" />
                  <span className="text-xs font-semibold text-gray-900">Hors UE</span>
                </div>
                <div className="flex items-center gap-2 p-3 border border-gray-200">
                  <span className="w-3.5 h-3.5 rounded-full border border-gray-300 shrink-0" />
                  <span className="text-xs font-semibold text-gray-900">Algérienne</span>
                </div>
              </div>

              <p className="text-base font-bold text-gray-900 mb-4">
                <span className="text-primary-600 mr-2">2.</span>
                Quelle démarche&nbsp;?
              </p>
              <div className="flex items-center justify-between p-3.5 border border-gray-300 mb-7">
                <span className="text-xs font-medium text-gray-900">
                  Naturalisation française
                </span>
                <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
              </div>

              <p className="text-base font-bold text-gray-900 mb-4">
                <span className="text-primary-600 mr-2">3.</span>
                Cas de dispense&nbsp;?
              </p>
              <div className="space-y-2 mb-7">
                <div className="flex items-center gap-2 p-3 border border-gray-200">
                  <span className="w-3.5 h-3.5 border border-gray-300 shrink-0" />
                  <span className="text-xs text-gray-700">65 ans révolus au dépôt</span>
                </div>
                <div className="flex items-center gap-2 p-3 border border-gray-200">
                  <span className="w-3.5 h-3.5 border border-gray-300 shrink-0" />
                  <span className="text-xs text-gray-700">Protection internationale</span>
                </div>
              </div>

              <div className="bg-primary-600 text-white text-center py-3 text-sm font-semibold">
                Vérifier mon éligibilité
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
