import { Fragment, type ReactNode } from "react";

import type { Bloc, TonEncadre } from "@/contenu/articles";
import { ancres, insecables, petiteImage, placesDesAppels } from "@/lib/article";
import { QuestionEntrainement } from "./ArticleInteractif";
import { TexteRiche } from "./TexteRiche";

/**
 * Le corps d'un article, bloc par bloc.
 *
 * Avant le 20/10/2026, le texte des articles était une chaîne de markdown
 * mêlée de HTML, découpée au rendu par des expressions régulières et posée
 * avec `dangerouslySetInnerHTML`, et trois articles avaient leur propre
 * composant. Un composant, une seule façon de rendre un bloc.
 *
 * Les titres portent leur ancre (`lib/article`, la même que lit le sommaire).
 * Les appels du haut et du milieu se glissent avant les titres que désigne
 * `placesDesAppels` ; un bloc `cta` écrit dans l'article prend la place du
 * milieu. Le corps ne connaît pas le bouton : la page le dessine, par `appel`.
 */
export function CorpsArticle({
  blocs,
  appel,
}: {
  blocs: readonly Bloc[];
  appel: (emplacement: "haut" | "milieu", texte?: string, bouton?: string) => ReactNode;
}) {
  const ids = ancres(blocs);
  const places = placesDesAppels(blocs);

  return (
    <>
      {blocs.map((b, i) => (
        <Fragment key={i}>
          {i === places.haut && appel("haut")}
          {i === places.milieu && appel("milieu")}
          {b.type === "cta" ? appel("milieu", b.texte, b.bouton) : <Rendu bloc={b} id={ids[i]} />}
        </Fragment>
      ))}
    </>
  );
}

const t = insecables;

const TONS: Record<TonEncadre, string> = {
  bleu: "border-primary-500 bg-primary-50/70 text-primary-800",
  vert: "border-green-500 bg-green-50/70 text-green-800",
  ambre: "border-amber-500 bg-amber-50/70 text-amber-800",
  rouge: "border-red-500 bg-red-50/70 text-red-800",
  violet: "border-violet-500 bg-violet-50/70 text-violet-800",
};

const PASTILLES = {
  coches: { signe: "✓", classe: "bg-green-100 text-[12px] text-green-700" },
  alertes: { signe: "!", classe: "bg-red-100 text-[11px] text-red-700" },
} as const;

function Rendu({ bloc, id }: { bloc: Exclude<Bloc, { type: "cta" }>; id?: string }) {
  switch (bloc.type) {
    case "h2":
      return (
        <h2 id={id} className="mt-12 scroll-mt-28 text-balance text-[24px] font-bold leading-tight tracking-tight text-gray-900 sm:text-[27px]">
          {t(bloc.texte)}
        </h2>
      );
    case "h3":
      return (
        <h3 id={id} className="mt-8 scroll-mt-28 text-[19px] font-bold leading-snug tracking-tight text-gray-900">
          {t(bloc.texte)}
        </h3>
      );
    case "p":
      return (
        <p className="mt-4 text-[17px] leading-[1.75] text-gray-800">
          <TexteRiche texte={t(bloc.texte)} />
        </p>
      );
    case "liste": {
      const style = bloc.style ?? "puces";
      if (style === "numeros") {
        return (
          <ol className="mt-4 list-decimal space-y-2.5 pl-6 text-[16.5px] leading-relaxed text-gray-800 marker:font-semibold marker:text-primary-600">
            {bloc.items.map((item, k) => (
              <li key={k} className="pl-1">
                <TexteRiche texte={t(item)} />
              </li>
            ))}
          </ol>
        );
      }
      if (style === "puces") {
        return (
          <ul className="mt-4 space-y-2.5 text-[16.5px] leading-relaxed text-gray-800">
            {bloc.items.map((item, k) => (
              <li key={k} className="flex gap-3">
                <span aria-hidden className="mt-[0.65em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                <span>
                  <TexteRiche texte={t(item)} />
                </span>
              </li>
            ))}
          </ul>
        );
      }
      const p = PASTILLES[style];
      return (
        <ul className="mt-4 space-y-2.5 text-[16.5px] leading-relaxed text-gray-800">
          {bloc.items.map((item, k) => (
            <li key={k} className="flex gap-2.5">
              <span aria-hidden className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-bold ${p.classe}`}>
                {p.signe}
              </span>
              <span>
                <TexteRiche texte={t(item)} />
              </span>
            </li>
          ))}
        </ul>
      );
    }
    case "citation":
      return (
        <blockquote className="my-8 border-l-4 border-primary-300 pl-5 text-[19px] font-medium leading-relaxed text-gray-900">
          <TexteRiche texte={t(bloc.texte)} />
          {bloc.source && (
            <cite className="mt-2 block text-[13px] font-normal not-italic text-gray-500">
              <TexteRiche texte={t(bloc.source)} />
            </cite>
          )}
        </blockquote>
      );
    case "encadre":
      return (
        <aside className={`mt-6 rounded-xl border-l-4 p-4 sm:p-5 ${TONS[bloc.ton ?? "bleu"]}`}>
          {bloc.titre && <p className="text-[12px] font-semibold uppercase tracking-wider">{t(bloc.titre)}</p>}
          {bloc.texte.split("\n").map((ligne, k) => (
            <p key={k} className={`${bloc.titre || k > 0 ? "mt-1.5" : ""} text-[16px] leading-relaxed text-gray-800`}>
              <TexteRiche texte={t(ligne)} />
            </p>
          ))}
        </aside>
      );
    case "tableau":
      return (
        <figure className="mt-5">
          {/* Le défilement horizontal reste dans le tableau : sur un téléphone,
              quatre colonnes ne doivent jamais élargir la page entière. */}
          <div className="overflow-x-auto rounded-2xl ring-1 ring-gray-200">
            <table className="w-full min-w-[480px] text-[15px]">
              <thead className="bg-primary-50 text-left">
                <tr>
                  {bloc.entetes.map((e, k) => (
                    <th key={k} scope="col" className="px-4 py-3 font-semibold text-gray-900">
                      <TexteRiche texte={t(e)} />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {bloc.lignes.map((ligne, k) => (
                  <tr key={k}>
                    {ligne.map((cellule, j) => (
                      <td key={j} className="px-4 py-3 align-top text-gray-800">
                        <TexteRiche texte={t(cellule)} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {bloc.legende && (
            <figcaption className="mt-2 text-[13px] text-gray-500">
              <TexteRiche texte={t(bloc.legende)} />
            </figcaption>
          )}
        </figure>
      );
    case "qcm":
      return (
        <QuestionEntrainement
          thematique={bloc.thematique}
          question={<TexteRiche texte={t(bloc.question)} />}
          choix={bloc.choix.map((c, k) => (
            <TexteRiche key={k} texte={t(c)} />
          ))}
          reponse={bloc.reponse}
          explication={<TexteRiche texte={t(bloc.explication)} />}
        />
      );
    case "image":
      return (
        <figure className="my-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={bloc.src}
            srcSet={/^https?:/.test(bloc.src) ? undefined : `${petiteImage(bloc.src)} 700w, ${bloc.src} ${bloc.largeur}w`}
            sizes="(max-width: 800px) 92vw, 720px"
            alt={bloc.alt}
            width={bloc.largeur}
            height={bloc.hauteur}
            loading="lazy"
            decoding="async"
            className="h-auto w-full rounded-2xl bg-gray-100 ring-1 ring-gray-200"
          />
          <figcaption className="mt-3 text-center text-[13px] text-gray-500">
            {bloc.legende && (
              <span className="italic">
                <TexteRiche texte={t(bloc.legende)} />{" "}
              </span>
            )}
            <Credit credit={bloc.credit} licence={bloc.licence} source={bloc.source} />
          </figcaption>
        </figure>
      );
  }
}

/** Le crédit d'une image, en petit ; un lien vers l'original quand il existe. */
export function Credit({ credit, licence, source }: { credit: string; licence: string; source?: string }) {
  const texte = `${credit}, ${licence}`;
  return (
    <span className="text-[11.5px] text-gray-500">
      {source ? (
        <a href={source} target="_blank" rel="noopener noreferrer" className="underline decoration-gray-300 underline-offset-2 hover:text-gray-700">
          {texte}
        </a>
      ) : (
        texte
      )}
    </span>
  );
}
