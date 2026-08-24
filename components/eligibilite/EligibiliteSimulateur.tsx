'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Check,
  X,
  AlertTriangle,
  Info,
  Loader2,
  RotateCcw,
  ScrollText,
  ChevronDown,
} from 'lucide-react';
import {
  NATIONALITES,
  DEMARCHES,
  MENTIONS_CSP,
  DISPENSES,
  evaluer,
  type Nationalite,
  type Demarche,
  type MentionCsp,
  type Reponses,
  type Resultat,
} from '@/lib/data/eligibilite-examen-civique';
import { posthog } from '@/components/analytics/PostHogProvider';

interface EtatFormulaire {
  nationalite: Nationalite | '';
  demarche: Demarche | '';
  mentionCsp: MentionCsp | '';
  age65: boolean;
  protection: boolean;
  santeEmpeche: boolean;
}

const ETAT_INITIAL: EtatFormulaire = {
  nationalite: '',
  demarche: '',
  mentionCsp: '',
  age65: false,
  protection: false,
  santeEmpeche: false,
};

export default function EligibiliteSimulateur() {
  const [form, setForm] = useState<EtatFormulaire>(ETAT_INITIAL);
  const [erreurs, setErreurs] = useState<Record<string, string>>({});
  const [calcul, setCalcul] = useState(false);
  const [resultat, setResultat] = useState<Resultat | null>(null);
  const [visible, setVisible] = useState(false);
  const timers = useRef<number[]>([]);

  const besoinMention = form.demarche === 'carte_pluriannuelle';
  // Pour un ressortissant européen, la nationalité suffit à conclure.
  const horsChamp = form.nationalite === 'ue' || form.nationalite === 'britannique';

  const fermer = useCallback(() => {
    setVisible(false);
    timers.current.push(window.setTimeout(() => setResultat(null), 200));
  }, []);

  useEffect(() => {
    const liste = timers.current;
    return () => liste.forEach((t) => window.clearTimeout(t));
  }, []);

  // Échap pour fermer + blocage du défilement pendant la modale.
  useEffect(() => {
    if (!resultat && !calcul) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && resultat) fermer();
    };
    document.addEventListener('keydown', onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  }, [resultat, calcul, fermer]);

  const maj = <K extends keyof EtatFormulaire>(cle: K, valeur: EtatFormulaire[K]) => {
    setForm((prec) => {
      const suivant = { ...prec, [cle]: valeur };
      // La mention n'a de sens que pour une première carte pluriannuelle.
      if (cle === 'demarche' && valeur !== 'carte_pluriannuelle') suivant.mentionCsp = '';
      return suivant;
    });
    setErreurs((prec) => {
      const copie = { ...prec };
      delete copie[cle];
      delete copie.global;
      return copie;
    });
  };

  const soumettre = (e: React.FormEvent) => {
    e.preventDefault();

    const nouvelles: Record<string, string> = {};
    if (!form.nationalite) nouvelles.nationalite = 'Sélectionnez votre nationalité.';
    if (!horsChamp && !form.demarche) nouvelles.demarche = 'Sélectionnez votre démarche.';
    if (!horsChamp && besoinMention && !form.mentionCsp) {
      nouvelles.mentionCsp = 'Sélectionnez la mention de votre titre.';
    }

    if (Object.keys(nouvelles).length > 0) {
      setErreurs(nouvelles);
      const premier = document.getElementById(`champ-${Object.keys(nouvelles)[0]}`);
      premier?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    const reponses: Reponses = {
      nationalite: form.nationalite as Nationalite,
      demarche: (form.demarche || undefined) as Demarche | undefined,
      mentionCsp: (form.mentionCsp || undefined) as MentionCsp | undefined,
      age65: form.age65,
      santeEmpeche: form.santeEmpeche,
      protection: form.protection ? 'protection_internationale' : 'aucune',
    };

    let verdict: Resultat | null = null;
    try {
      verdict = evaluer(reponses);
    } catch (err) {
      console.error('[eligibilite] erreur du moteur de décision', err);
    }

    // Ne jamais échouer en silence : l'utilisateur doit toujours voir quelque chose.
    if (!verdict) {
      setErreurs({
        global:
          "Nous n'avons pas pu analyser cette combinaison. Vérifiez vos réponses ou réinitialisez le formulaire.",
      });
      return;
    }

    const resolu = verdict;
    setCalcul(true);

    // Le timer est programmé AVANT toute autre opération : rien ne doit pouvoir
    // empêcher l'affichage du résultat.
    timers.current.push(
      window.setTimeout(() => {
        setCalcul(false);
        setResultat(resolu);
        timers.current.push(window.setTimeout(() => setVisible(true), 20));
      }, 1100)
    );

    // Mesure d'audience — strictement optionnelle.
    // PostHog s'initialise en différé (requestIdleCallback, jusqu'à 3 s) et
    // uniquement après consentement : un appel anticipé peut lever. L'analytics
    // ne doit en aucun cas casser la fonctionnalité.
    try {
      posthog?.capture?.('eligibilite_simulee', {
        verdict: resolu.verdict,
        nationalite: reponses.nationalite,
        demarche: reponses.demarche,
      });
    } catch {
      /* PostHog non initialisé ou refusé : sans effet sur le résultat. */
    }
  };

  const reinitialiser = () => {
    fermer();
    timers.current.push(
      window.setTimeout(() => {
        setForm(ETAT_INITIAL);
        setErreurs({});
      }, 200)
    );
  };

  return (
    <>
      <form onSubmit={soumettre} noValidate className="bg-white border border-gray-200 shadow-sm">
        <div className="p-6 sm:p-10 space-y-10">
          {/* ---------- 1. Nationalité (radio) ---------- */}
          <fieldset id="champ-nationalite">
            <legend className="text-lg font-bold text-gray-900 mb-1">
              <span className="text-primary-600 mr-2">1.</span>
              Quelle est votre nationalité&nbsp;?
            </legend>
            <p className="text-sm text-gray-500 mb-4 ml-6">
              L&apos;examen civique ne vise que les ressortissants non européens.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {NATIONALITES.map((option) => {
                const actif = form.nationalite === option.valeur;
                return (
                  <label
                    key={option.valeur}
                    className={`flex gap-3 p-4 border cursor-pointer transition-all duration-200 hover:border-primary-400 hover:bg-primary-50/50 ${
                      actif ? 'border-primary-600 bg-primary-50 ring-1 ring-primary-600' : 'border-gray-200'
                    }`}
                  >
                    <input
                      type="radio"
                      name="nationalite"
                      value={option.valeur}
                      checked={actif}
                      onChange={() => maj('nationalite', option.valeur)}
                      className="mt-1 w-4 h-4 shrink-0 text-primary-600 border-gray-300 focus:ring-primary-500 focus:ring-2"
                    />
                    <span className="min-w-0">
                      <span className="block font-semibold text-gray-900 text-sm">
                        {option.label}
                      </span>
                      {option.description && (
                        <span className="block text-xs text-gray-500 mt-0.5 leading-relaxed">
                          {option.description}
                        </span>
                      )}
                    </span>
                  </label>
                );
              })}
            </div>
            {erreurs.nationalite && <MessageErreur texte={erreurs.nationalite} />}
          </fieldset>

          {/* Note pour les ressortissants hors champ */}
          {horsChamp && (
            <div className="flex gap-3 p-4 bg-emerald-50 border-l-4 border-emerald-400">
              <Info className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-sm text-emerald-900 leading-relaxed">
                Votre nationalité suffit à conclure : les questions suivantes ne changeront
                pas le résultat. Vous pouvez valider directement.
              </p>
            </div>
          )}

          {/* ---------- 2. Démarche (liste déroulante) ---------- */}
          <fieldset id="champ-demarche" className={horsChamp ? 'opacity-50' : ''}>
            <legend className="text-lg font-bold text-gray-900 mb-1">
              <span className="text-primary-600 mr-2">2.</span>
              Quelle démarche préparez-vous&nbsp;?
            </legend>
            <p className="text-sm text-gray-500 mb-4 ml-6">
              Le séjour et la nationalité obéissent à des règles opposées.
            </p>

            <SelectChamp
              id="demarche"
              value={form.demarche}
              onChange={(v) => maj('demarche', v as Demarche)}
              placeholder="— Sélectionnez votre démarche —"
              options={DEMARCHES}
              invalide={Boolean(erreurs.demarche)}
            />
            {erreurs.demarche && <MessageErreur texte={erreurs.demarche} />}
          </fieldset>

          {/* ---------- 3. Mention du titre (conditionnel) ---------- */}
          {besoinMention && !horsChamp && (
            <fieldset id="champ-mentionCsp" className="animate-fade-in-up">
              <legend className="text-lg font-bold text-gray-900 mb-1">
                <span className="text-primary-600 mr-2">3.</span>
                Quelle est la mention de votre titre&nbsp;?
              </legend>
              <p className="text-sm text-gray-500 mb-4 ml-6">
                Seuls les titres soumis au contrat d&apos;intégration républicaine (CIR)
                sont concernés.
              </p>

              <div className="space-y-3">
                {MENTIONS_CSP.map((option) => {
                  const actif = form.mentionCsp === option.valeur;
                  return (
                    <label
                      key={option.valeur}
                      className={`flex gap-3 p-4 border cursor-pointer transition-all duration-200 hover:border-primary-400 hover:bg-primary-50/50 ${
                        actif ? 'border-primary-600 bg-primary-50 ring-1 ring-primary-600' : 'border-gray-200'
                      }`}
                    >
                      <input
                        type="radio"
                        name="mentionCsp"
                        value={option.valeur}
                        checked={actif}
                        onChange={() => maj('mentionCsp', option.valeur)}
                        className="mt-1 w-4 h-4 shrink-0 text-primary-600 border-gray-300 focus:ring-primary-500 focus:ring-2"
                      />
                      <span className="min-w-0">
                        <span className="block font-semibold text-gray-900 text-sm">
                          {option.label}
                        </span>
                        {option.description && (
                          <span className="block text-xs text-gray-500 mt-0.5 leading-relaxed">
                            {option.description}
                          </span>
                        )}
                      </span>
                    </label>
                  );
                })}
              </div>
              {erreurs.mentionCsp && <MessageErreur texte={erreurs.mentionCsp} />}
            </fieldset>
          )}

          {/* ---------- 4. Dispenses (cases à cocher) ---------- */}
          <fieldset className={horsChamp ? 'opacity-50' : ''}>
            <legend className="text-lg font-bold text-gray-900 mb-1">
              <span className="text-primary-600 mr-2">{besoinMention && !horsChamp ? '4.' : '3.'}</span>
              Êtes-vous dans l&apos;un de ces cas&nbsp;?
            </legend>
            <p className="text-sm text-gray-500 mb-4 ml-6">
              Cochez ce qui s&apos;applique à votre situation. Aucune case si rien ne
              correspond.
            </p>

            <div className="space-y-3">
              {DISPENSES.map((dispense) => {
                const actif = form[dispense.id];
                return (
                  <label
                    key={dispense.id}
                    className={`flex gap-3 p-4 border cursor-pointer transition-all duration-200 hover:border-primary-400 hover:bg-primary-50/50 ${
                      actif ? 'border-primary-600 bg-primary-50 ring-1 ring-primary-600' : 'border-gray-200'
                    }`}
                  >
                    <input
                      type="checkbox"
                      name={dispense.id}
                      checked={actif}
                      onChange={(e) => maj(dispense.id, e.target.checked)}
                      className="mt-1 w-4 h-4 shrink-0 text-primary-600 border-gray-300 focus:ring-primary-500 focus:ring-2"
                    />
                    <span className="min-w-0">
                      <span className="block font-semibold text-gray-900 text-sm">
                        {dispense.label}
                      </span>
                      <span className="block text-xs text-gray-500 mt-0.5 leading-relaxed">
                        {dispense.description}
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        </div>

        {/* ---------- Validation ---------- */}
        <div className="border-t border-gray-200 bg-gray-50 p-6 sm:p-8">
          {erreurs.global && (
            <div className="flex gap-3 p-4 mb-5 bg-red-50 border-l-4 border-red-400" role="alert">
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <p className="text-sm text-red-900 leading-relaxed">{erreurs.global}</p>
            </div>
          )}
          <button
            type="submit"
            className="group flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary-600 text-white font-semibold text-lg hover:bg-primary-700 transition-colors"
          >
            Vérifier mon éligibilité
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            type="button"
            onClick={() => {
              setForm(ETAT_INITIAL);
              setErreurs({});
            }}
            className="mx-auto mt-4 flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Réinitialiser le formulaire
          </button>
        </div>
      </form>

      <p className="mt-6 text-sm text-gray-500 leading-relaxed">
        <Info className="w-4 h-4 inline-block mr-1.5 -mt-0.5 text-gray-400" />
        Ce simulateur donne une indication fondée sur les textes en vigueur. Il ne
        remplace pas une réponse officielle : en cas de doute, faites confirmer votre
        situation par votre préfecture.
      </p>

      {/* ---------- Écran de calcul ---------- */}
      {calcul && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-gray-900/60 backdrop-blur-sm p-4">
          <div className="bg-white p-10 sm:p-14 text-center max-w-sm w-full shadow-2xl">
            <Loader2 className="w-12 h-12 text-primary-600 mx-auto mb-6 animate-spin" />
            <p className="text-lg font-semibold text-gray-900 mb-1">
              Analyse de votre situation
            </p>
            <p className="text-sm text-gray-500">
              Croisement avec les critères officiels…
            </p>
          </div>
        </div>
      )}

      {/* ---------- Modale de résultat ---------- */}
      {resultat && (
        <div
          // Opacité pilotée par React : la classe utilitaire .animate-fade-in de
          // globals.css est définie trois fois, et la dernière déclaration perd
          // le fill-mode « forwards » tout en conservant opacity: 0 — ce qui
          // faisait clignoter la modale puis disparaître.
          className={`fixed inset-0 z-[60] flex items-start sm:items-center justify-center bg-gray-900/60 backdrop-blur-sm p-4 overflow-y-auto transition-opacity duration-300 ease-out ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resultat-titre"
          onClick={fermer}
        >
          <div
            className={`bg-white w-full max-w-2xl shadow-2xl my-4 sm:my-8 transition-all duration-500 ease-out ${
              visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <ResultatContenu
              resultat={resultat}
              onFermer={fermer}
              onRecommencer={reinitialiser}
              visible={visible}
            />
          </div>
        </div>
      )}
    </>
  );
}

// ---------------------------------------------------------------------------
// Sous-composants
// ---------------------------------------------------------------------------

function MessageErreur({ texte }: { texte: string }) {
  return (
    <p className="flex items-center gap-1.5 mt-3 text-sm text-red-600" role="alert">
      <AlertTriangle className="w-4 h-4 shrink-0" />
      {texte}
    </p>
  );
}

function SelectChamp({
  id,
  value,
  onChange,
  placeholder,
  options,
  invalide,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  options: { valeur: string; label: string }[];
  invalide?: boolean;
}) {
  return (
    <div className="relative">
      <select
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full appearance-none bg-white border px-4 py-4 pr-12 text-gray-900 font-medium cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 ${
          invalide ? 'border-red-400' : 'border-gray-300 hover:border-primary-400'
        } ${value ? 'text-gray-900' : 'text-gray-400'}`}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.valeur} value={option.valeur}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="w-5 h-5 text-gray-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  );
}

function ResultatContenu({
  resultat,
  onFermer,
  onRecommencer,
  visible,
}: {
  resultat: Resultat;
  onFermer: () => void;
  onRecommencer: () => void;
  visible: boolean;
}) {
  const concerne = resultat.verdict === 'concerne';
  const aConfirmer = resultat.verdict === 'a_confirmer';

  const theme = concerne
    ? { bg: 'bg-primary-600', Icone: ScrollText }
    : aConfirmer
      ? { bg: 'bg-amber-500', Icone: AlertTriangle }
      : { bg: 'bg-emerald-600', Icone: Check };

  const { Icone } = theme;

  return (
    <>
      <div className={`${theme.bg} px-6 sm:px-10 py-8 sm:py-10 text-center relative`}>
        <button
          type="button"
          onClick={onFermer}
          className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <div
          className={`w-20 h-20 mx-auto mb-5 bg-white/20 flex items-center justify-center transition-all duration-700 ease-out ${
            visible ? 'scale-100 rotate-0 opacity-100' : 'scale-50 -rotate-45 opacity-0'
          }`}
        >
          <Icone className="w-10 h-10 text-white" strokeWidth={2.5} />
        </div>

        <h2
          id="resultat-titre"
          className={`text-2xl sm:text-3xl font-bold text-white mb-3 transition-all duration-500 delay-150 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {resultat.titre}
        </h2>
        <p
          className={`text-white/90 leading-relaxed max-w-xl mx-auto transition-all duration-500 delay-200 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          {resultat.resume}
        </p>
      </div>

      <div className="px-6 sm:px-10 py-8">
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
          Pourquoi ce résultat
        </h3>
        <ul className="space-y-3 mb-6">
          {resultat.motifs.map((motif, i) => (
            <li
              key={i}
              className={`flex gap-3 text-gray-700 leading-relaxed transition-all duration-500 ${
                visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-3'
              }`}
              style={{ transitionDelay: `${250 + i * 90}ms` }}
            >
              <span className="w-1.5 h-1.5 bg-primary-600 mt-2.5 shrink-0" />
              <span>{motif}</span>
            </li>
          ))}
        </ul>

        {resultat.avertissement && (
          <div className="flex gap-3 p-4 bg-amber-50 border-l-4 border-amber-400 mb-8">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-900 leading-relaxed">
              {resultat.avertissement}
            </p>
          </div>
        )}

        {concerne || aConfirmer ? (
          <div className="space-y-3">
            <Link
              href="/signup"
              className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-primary-600 text-white font-semibold text-lg hover:bg-primary-700 transition-colors"
            >
              Me préparer au test
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-center text-sm text-gray-500">
              800+ questions, examens blancs illimités — gratuit pour commencer
            </p>
            <Link
              href="/articles/inscription-test-civique-2026-ou-quand-comment-sinscrire"
              className="block text-center text-sm text-primary-600 hover:text-primary-700 font-medium pt-2"
            >
              Comment s&apos;inscrire à l&apos;examen officiel&nbsp;?
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            <Link
              href="/articles/dispense-examen-civique-2026-qui-est-exempte-age-refugie-accords"
              className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors"
            >
              Comprendre les cas de dispense
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-center text-sm text-gray-500">
              Vous visez la naturalisation un jour&nbsp;? L&apos;examen redeviendra
              obligatoire —{' '}
              <Link href="/signup" className="text-primary-600 hover:underline font-medium">
                prenez de l&apos;avance
              </Link>
              .
            </p>
          </div>
        )}

        <div className="flex items-center justify-between gap-4 mt-8 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-400 leading-relaxed">
            Source&nbsp;: {resultat.reference}
          </p>
          <button
            type="button"
            onClick={onRecommencer}
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors shrink-0"
          >
            <RotateCcw className="w-4 h-4" />
            Recommencer
          </button>
        </div>
      </div>
    </>
  );
}
