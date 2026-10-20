"use client";

import { useEffect, useState, type ReactNode } from "react";

import { suivre } from "@/lib/mesure";

/**
 * Les morceaux vivants d'une page d'article, portés de Cosme Check.
 *
 * Tout le reste de la page est rendu au build : ces composants n'ajoutent que
 * ce qui dépend du défilement, et la page reste lisible et navigable sans
 * eux. Sans JavaScript, le sommaire est une liste de liens qui marche, et la
 * barre du bas n'apparaît pas, ce qui est le bon repli.
 */

/** La ligne de lecture : un titre qui la passe ouvre sa section. */
const ligneDeLecture = () => Math.max(140, window.innerHeight * 0.35);

/**
 * Le sommaire de la colonne de gauche, qui suit la lecture : la section en
 * cours est celle dont le titre a passé la ligne de lecture en dernier. Un
 * seul calcul par image (`requestAnimationFrame`).
 */
export function SommaireActif({ entrees }: { entrees: readonly { id: string; texte: string }[] }) {
  const [actif, setActif] = useState(entrees[0]?.id ?? "");

  useEffect(() => {
    let image = 0;
    const calculer = () => {
      image = 0;
      let courant = entrees[0]?.id ?? "";
      const ligne = ligneDeLecture();
      for (const e of entrees) {
        const el = document.getElementById(e.id);
        if (el && el.getBoundingClientRect().top < ligne) courant = e.id;
      }
      setActif(courant);
    };
    const surDefilement = () => {
      if (!image) image = requestAnimationFrame(calculer);
    };
    calculer();
    window.addEventListener("scroll", surDefilement, { passive: true });
    window.addEventListener("resize", surDefilement, { passive: true });
    return () => {
      cancelAnimationFrame(image);
      window.removeEventListener("scroll", surDefilement);
      window.removeEventListener("resize", surDefilement);
    };
  }, [entrees]);

  return (
    <ol className="mt-4 flex flex-col gap-1 text-[13.5px]">
      {entrees.map((e, idx) => {
        const estActif = actif === e.id;
        return (
          <li key={e.id}>
            <a
              href={`#${e.id}`}
              aria-current={estActif ? "location" : undefined}
              className={`group flex items-start gap-2 rounded-lg px-2 py-1.5 transition hover:bg-primary-50 hover:text-primary-700 ${
                estActif ? "bg-primary-50 font-semibold text-primary-700" : "text-gray-600"
              }`}
            >
              <span
                className={`mt-px shrink-0 text-[11px] font-semibold ${
                  estActif ? "text-primary-600" : "text-gray-400 group-hover:text-primary-600"
                }`}
              >
                {String(idx + 1).padStart(2, "0")}
              </span>
              <span className="leading-snug">{e.texte}</span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}

/**
 * La barre d'appel collée en bas de l'écran, sur téléphone et tablette
 * seulement (cachée à partir de `xl`, où la colonne de droite porte l'appel).
 *
 * Elle apparaît une fois l'introduction dépassée et disparaît dès que le bloc
 * de fin d'article (`#cta-fin`) arrive à l'écran : deux fois le même bouton
 * l'un au-dessus de l'autre, c'est un de trop.
 */
export function BarreAppel({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let image = 0;
    const calculer = () => {
      image = 0;
      const fin = document.getElementById("cta-fin");
      const finVisible = fin ? fin.getBoundingClientRect().top < window.innerHeight : false;
      setVisible(window.scrollY > 600 && !finVisible);
    };
    const surDefilement = () => {
      if (!image) image = requestAnimationFrame(calculer);
    };
    calculer();
    window.addEventListener("scroll", surDefilement, { passive: true });
    window.addEventListener("resize", surDefilement, { passive: true });
    return () => {
      cancelAnimationFrame(image);
      window.removeEventListener("scroll", surDefilement);
      window.removeEventListener("resize", surDefilement);
    };
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_24px_-12px_rgba(17,17,17,0.18)] backdrop-blur transition-transform duration-300 print:hidden xl:hidden ${
        visible ? "translate-y-0" : "invisible translate-y-full"
      }`}
      // `invisible` en plus d'`aria-hidden` : cachée, la barre ne reçoit pas non plus le focus clavier.
      aria-hidden={!visible}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3">{children}</div>
    </div>
  );
}

/**
 * Jusqu'où un article est lu, section par section.
 *
 * Chaque titre de niveau 2 du corps (`[data-corps] h2[id]`) envoie
 * `section_atteinte` la première fois qu'il entre à l'écran : un événement
 * par section et par visite. C'est ce qui dit au robot « la moitié des
 * lecteurs ne dépasse pas la section 3 ».
 */
export function SuiviLecture({ slug }: { slug: string }) {
  useEffect(() => {
    const titres = Array.from(document.querySelectorAll<HTMLElement>("[data-corps] h2[id]"));
    if (titres.length === 0 || !("IntersectionObserver" in window)) return;
    const vus = new Set<string>();
    const observateur = new IntersectionObserver(
      (entrees) => {
        for (const entree of entrees) {
          const id = (entree.target as HTMLElement).id;
          if (!entree.isIntersecting || vus.has(id)) continue;
          vus.add(id);
          suivre("section_atteinte", {
            slug,
            section: id,
            index: titres.findIndex((t) => t.id === id) + 1,
            total: titres.length,
          });
          observateur.unobserve(entree.target);
        }
      },
      // Un titre compte quand il passe le haut des trois cinquièmes de l'écran.
      { rootMargin: "0px 0px -40% 0px" },
    );
    titres.forEach((t) => observateur.observe(t));
    return () => observateur.disconnect();
  }, [slug]);
  return null;
}

/**
 * Une question d'entraînement : le lecteur choisit, la page dit si c'est
 * juste et pourquoi. Sans JavaScript, la réponse reste lisible dans un
 * `details` replié.
 */
export function QuestionEntrainement({
  question,
  choix,
  reponse,
  explication,
  thematique,
}: {
  question: ReactNode;
  choix: readonly ReactNode[];
  reponse: number;
  explication: ReactNode;
  thematique: string;
}) {
  const [choisi, setChoisi] = useState<number | null>(null);
  return (
    <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200 sm:p-6">
      <p className="text-[11px] font-semibold uppercase tracking-wider text-primary-700">Question d&apos;entraînement · {thematique}</p>
      <p className="mt-2 text-[17px] font-semibold leading-snug text-gray-900">{question}</p>
      <ul className="mt-4 space-y-2">
        {choix.map((c, i) => {
          const etat = choisi === null ? "" : i === reponse ? "bg-green-50 ring-green-300" : i === choisi ? "bg-red-50 ring-red-300" : "opacity-70";
          return (
            <li key={i}>
              <button
                type="button"
                onClick={() => setChoisi(i)}
                disabled={choisi !== null}
                className={`w-full rounded-xl px-4 py-3 text-left text-[15px] text-gray-800 ring-1 ring-gray-200 transition hover:bg-gray-50 ${etat}`}
              >
                <span className="mr-2 font-semibold text-gray-500">{String.fromCharCode(65 + i)}.</span>
                {c}
              </button>
            </li>
          );
        })}
      </ul>
      {choisi !== null ? (
        <p className="mt-4 text-[15px] leading-relaxed text-gray-700">
          <strong className="text-gray-900">{choisi === reponse ? "Bonne réponse. " : `La bonne réponse est ${String.fromCharCode(65 + reponse)}. `}</strong>
          {explication}
        </p>
      ) : (
        <noscript>
          <p className="mt-4 text-[15px] text-gray-700">
            Réponse : {String.fromCharCode(65 + reponse)}. {explication}
          </p>
        </noscript>
      )}
    </div>
  );
}
