import Link from "next/link";

import ArticleViews from "@/components/blog/ArticleViews";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { YouTubeGrid } from "@/components/seo/YouTubeEmbed";
import type { Article, Source } from "@/contenu/articles";
import { COULEUR_RUBRIQUE, NOM_RUBRIQUE, PAGE_AUTEUR } from "@/contenu/rubriques";
import { ANCRE_FAQ, dateLongue, insecables, petiteImage, sommaire, suggestions } from "@/lib/article";
import { jsonLdArticle } from "@/lib/articleJsonLd";
import { AppelInscription } from "./AppelInscription";
import { BarreAppel, SommaireActif, SuiviLecture } from "./ArticleInteractif";
import { CorpsArticle, Credit } from "./CorpsArticle";
import { TexteRiche } from "./TexteRiche";

/**
 * Les textes des appels. Vouvoiement, comme le reste du site ; aucun prix ici
 * (les prix vivent dans l'app et chez Stripe : `/tarifs`), aucune promesse de
 * résultat.
 */
const TEXTES = {
  haut: "Vous passez bientôt l'examen civique ? Testez-vous gratuitement sur un examen blanc de 40 questions, avec la correction de chaque réponse.",
  hautBouton: "Faire un test gratuit",
  milieu:
    "Ce que vous venez de lire peut tomber à l'examen civique. Entraînez-vous sur les cinq thématiques officielles, avec une explication pour chaque réponse.",
  milieuBouton: "M'entraîner gratuitement",
  colonneTitre: "L'examen civique, sans stress",
  colonneTexte: "Des examens blancs de 40 questions, chronométrés et corrigés, sur les cinq thématiques officielles.",
  colonneBouton: "Commencer gratuitement",
  finSurtitre: "Inscription gratuite, sans carte bancaire",
  finTitre: "Préparez l'examen civique avec Test Civique France",
  finTexte:
    "Des examens blancs en conditions réelles, des cours sur les cinq thématiques officielles et la correction de chaque réponse, pour arriver le jour J en sachant où vous en êtes.",
  finBouton: "Créer mon compte gratuit",
  barreTexte: "Examen blanc gratuit, sans carte bancaire",
  barreBouton: "Commencer",
};

/** La phrase de prudence de chaque article : une règle générale n'est pas un conseil pour un cas personnel. */
const PRUDENCE =
  "Cet article explique les règles générales, à la date indiquée. Pour votre situation personnelle, adressez-vous à votre préfecture, à un avocat, à une association agréée comme [La Cimade](https://www.lacimade.org/) ou au [Défenseur des droits](https://www.defenseurdesdroits.fr/).";

const BOUTON =
  "inline-flex items-center justify-center gap-2 rounded-lg bg-primary-600 px-5 py-2.5 text-[14.5px] font-semibold text-white shadow-sm transition hover:bg-primary-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-300";

const TYPE_SOURCE: Record<Source["type"], string> = {
  officiel: "Source officielle",
  juridique: "Texte juridique",
  article: "Article",
  video: "Vidéo",
};

/**
 * Une page d'article, sur le modèle de Cosme Check, de MemoryPilot et de
 * RevealChat, dans la charte de Test Civique France (bleu, bandeau photo).
 *
 * Trois colonnes à partir de `xl` (1280 px) : le sommaire à gauche, qui suit
 * la lecture ; l'article au centre ; « À lire ensuite » et un appel à droite,
 * les deux colonnes collées pendant le défilement. En dessous, une seule
 * colonne : le sommaire se replie en haut de l'article, « À lire ensuite »
 * passe dessous, et une barre d'appel se colle au bas de l'écran.
 *
 * La page est rendue au build, sans JavaScript pour le texte : seuls le
 * sommaire actif, la barre, la mesure de lecture, les vidéos et les questions
 * d'entraînement sont des composants client.
 *
 * ## Les cinq appels
 *
 * Tous mènent à l'inscription gratuite, `/signup?c=<slug>&m=blog&e=<emplacement>`
 * (`AppelInscription`), et chacun se mesure à part (`cta_clic`,
 * `source: '<slug>-<emplacement>'`) :
 *
 * | emplacement | où | pour qui |
 * |---|---|---|
 * | `haut` | avant le premier `h2`, après le chapeau | qui a déjà sa réponse et veut agir |
 * | `milieu` | avant le `h2` du milieu, ou là où l'article pose son bloc `cta` | là où la lecture décroche le plus |
 * | `colonne` | colonne de droite, toujours visible sur ordinateur | qui lit sur grand écran |
 * | `fin` | le bloc sombre après la FAQ et les sources | qui a tout lu |
 * | `barre` | collée en bas, sur téléphone et tablette | entre les deux |
 *
 * Le robot lit ces chiffres chaque matin : un emplacement qui ne convertit
 * jamais est une hypothèse à tester, pas un emplacement sacré.
 */
export function PageArticle({ article, liste }: { article: Article; liste: readonly Article[] }) {
  const faq = article.faq ?? [];
  const toc = [...sommaire(article.blocs), ...(faq.length ? [{ id: ANCRE_FAQ, texte: "Questions fréquentes" }] : [])].map((e) => ({
    id: e.id,
    texte: insecables(e.texte),
  }));
  const aLire = suggestions(article, liste, 3);
  const modifie = article.modifieLe !== article.publieLe;
  const pageAuteur = PAGE_AUTEUR[article.auteur];
  const sources = article.sources ?? [];
  const videos = article.videos ?? [];
  const aLireAussi = article.aLireAussi ?? [];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLdArticle(article)).replace(/</g, "\\u003c").replace(/>/g, "\\u003e"),
        }}
      />
      <Header />
      <main className="min-h-screen bg-gray-50/60 pb-24">
        <section className="relative h-[400px] w-full overflow-hidden bg-gradient-to-br from-primary-800 to-primary-600 sm:h-[480px]">
          {/* Un fond, et non une <img> : une photo distante disparue (Unsplash
              retire parfois une image, 8 couvertures migrées en 404 au
              20/10/2026) laisse le dégradé au lieu d'une icône d'image cassée. */}
          <div
            aria-hidden
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("${article.couverture.src}")`,
              ...(article.couverture.position ? { backgroundPosition: article.couverture.position } : {}),
            }}
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/55 to-black/80" />

          <div className="relative mx-auto flex h-full w-full max-w-6xl flex-col justify-end px-5 pb-10 pt-20 sm:px-8 sm:pb-12 xl:max-w-[88rem] xl:px-10">
            <nav aria-label="Fil d'Ariane" className="text-[13px] text-white/80">
              <Link href="/" className="hover:text-white">
                Accueil
              </Link>
              <span aria-hidden className="mx-2 text-white/50">›</span>
              <Link href="/articles" className="hover:text-white">
                Articles
              </Link>
              <span aria-hidden className="mx-2 text-white/50">›</span>
              <span className="text-white/90">{NOM_RUBRIQUE[article.rubrique]}</span>
            </nav>

            <h1 className="mt-3 max-w-4xl text-balance text-[28px] font-bold leading-tight tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:text-[40px] sm:leading-[1.1]">
              {insecables(article.titre)}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-white/85 sm:text-[14px]">
              <span>
                <time dateTime={article.publieLe}>{dateLongue(article.publieLe)}</time>
                {modifie && (
                  <>
                    , mis à jour le <time dateTime={article.modifieLe}>{dateLongue(article.modifieLe)}</time>
                  </>
                )}
              </span>
              <span>
                Par{" "}
                {pageAuteur ? (
                  <Link href={pageAuteur} className="underline-offset-2 hover:text-white hover:underline">
                    {article.auteur}
                  </Link>
                ) : (
                  article.auteur
                )}
              </span>
              <span>{article.minutes} min de lecture</span>
              <ArticleViews slug={article.slug} iconClassName="h-4 w-4" label="long" incrementOnMount />
              <span className={`inline-flex items-center rounded-md px-2 py-1 text-[11px] font-semibold uppercase tracking-wider ring-1 ${COULEUR_RUBRIQUE[article.rubrique]}`}>
                {NOM_RUBRIQUE[article.rubrique]}
              </span>
            </div>
          </div>
        </section>

        <div className="mx-auto mt-10 grid w-full max-w-3xl gap-10 px-5 sm:px-8 xl:max-w-[88rem] xl:grid-cols-[240px_minmax(0,1fr)_280px] xl:gap-14 xl:px-10">
          {/* Colonne de gauche : le sommaire, collé pendant la lecture. */}
          <aside className="hidden xl:sticky xl:top-24 xl:block xl:self-start">
            <Link href="/articles" className="mb-3 inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-[13px] font-medium text-gray-500 transition hover:bg-gray-100 hover:text-primary-700">
              <span aria-hidden>←</span> Tous les articles
            </Link>
            {toc.length > 1 && (
              <nav aria-label="Sommaire de l'article" className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
                <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                  <span aria-hidden className="h-px w-4 bg-primary-400" />
                  Dans cet article
                  <span className="ml-auto rounded-md bg-gray-100 px-1.5 py-0.5 text-[11px] font-semibold text-gray-500">{toc.length}</span>
                </p>
                <SommaireActif entrees={toc} />
              </nav>
            )}
          </aside>

          <article className="min-w-0">
            <p className="text-[19px] leading-relaxed text-gray-700">
              <TexteRiche texte={insecables(article.chapo)} />
            </p>

            {toc.length > 1 && (
              <details className="group mt-6 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-200 xl:hidden">
                <summary className="flex cursor-pointer list-none items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-gray-500">
                  <span aria-hidden className="h-px w-4 bg-primary-400" />
                  Dans cet article ({toc.length})
                  <span aria-hidden className="ml-auto transition group-open:rotate-180">▾</span>
                </summary>
                <ol className="mt-3 flex flex-col gap-1 text-[14px]">
                  {toc.map((e, idx) => (
                    <li key={e.id}>
                      <a href={`#${e.id}`} className="flex gap-2 rounded-lg px-2 py-1.5 text-gray-600 hover:bg-primary-50 hover:text-primary-700">
                        <span className="mt-px shrink-0 text-[11px] font-semibold text-gray-400">{String(idx + 1).padStart(2, "0")}</span>
                        <span className="leading-snug">{e.texte}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </details>
            )}

            {/* `data-corps` délimite les titres que suit `SuiviLecture` : seuls
                ceux du texte comptent dans l'entonnoir de lecture. */}
            <div data-corps>
              <CorpsArticle
                blocs={article.blocs}
                appel={(emplacement, texte, bouton) =>
                  emplacement === "haut" ? (
                    <aside className="mt-8 flex flex-col gap-4 rounded-2xl bg-primary-50 p-5 ring-1 ring-primary-100 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-[15px] leading-relaxed text-gray-800">{insecables(TEXTES.haut)}</p>
                      <AppelInscription slug={article.slug} emplacement="haut" className={`${BOUTON} shrink-0`}>
                        {TEXTES.hautBouton}
                      </AppelInscription>
                    </aside>
                  ) : (
                    <aside className="mt-10 overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200">
                      <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-700">
                        <span aria-hidden className="h-px w-6 bg-primary-400" />
                        Test Civique France
                      </p>
                      <p className="mt-3 text-[16px] leading-relaxed text-gray-800">
                        <TexteRiche texte={insecables(texte ?? TEXTES.milieu)} />
                      </p>
                      <AppelInscription slug={article.slug} emplacement="milieu" className={`${BOUTON} mt-5`}>
                        {bouton ?? TEXTES.milieuBouton} <span aria-hidden>→</span>
                      </AppelInscription>
                    </aside>
                  )
                }
              />

              {faq.length > 0 && (
                <section aria-labelledby={ANCRE_FAQ} className="mt-14">
                  <h2 id={ANCRE_FAQ} className="scroll-mt-28 text-[24px] font-bold tracking-tight text-gray-900 sm:text-[27px]">
                    Questions fréquentes
                  </h2>
                  <div className="mt-5 divide-y divide-gray-100 rounded-2xl bg-white px-5 shadow-sm ring-1 ring-gray-200 sm:px-6">
                    {faq.map((q) => (
                      <div key={q.question} className="py-5">
                        <h3 className="text-[17px] font-semibold leading-snug text-gray-900">{insecables(q.question)}</h3>
                        <p className="mt-2 text-[16px] leading-relaxed text-gray-700">
                          <TexteRiche texte={insecables(q.reponse)} />
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {videos.length > 0 && (
              <div id="videos" className="mt-12">
                <YouTubeGrid videos={videos.map((v) => ({ videoId: v.id, title: v.titre }))} title="Vidéos pour approfondir" />
              </div>
            )}

            {sources.length > 0 && (
              <section id="sources" className="mt-12 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200 sm:p-6">
                <h2 className="text-[19px] font-bold tracking-tight text-gray-900">Sources officielles et références</h2>
                <ul className="mt-4 space-y-3">
                  {sources.map((s) => (
                    <li key={s.url} className="text-[15px] leading-snug">
                      <a href={s.url} target="_blank" rel="noopener noreferrer" className="font-medium text-primary-700 underline decoration-primary-200 underline-offset-2 hover:text-primary-800">
                        {s.titre}
                      </a>
                      <span className="ml-2 text-[12px] text-gray-500">
                        {TYPE_SOURCE[s.type]}
                        {s.luLe ? `, lu le ${dateLongue(s.luLe)}` : ""}
                      </span>
                      {s.description && <span className="mt-0.5 block text-[13.5px] text-gray-600">{s.description}</span>}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {aLireAussi.length > 0 && (
              <section id="a-lire-aussi" className="mt-12">
                <h2 className="text-[19px] font-bold tracking-tight text-gray-900">À lire aussi</h2>
                <ul className="mt-4 grid gap-2">
                  {aLireAussi.map((l) => (
                    <li key={l.slug}>
                      <Link href={`/articles/${l.slug}`} className="flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-3 text-[15px] font-medium text-gray-800 ring-1 ring-gray-200 transition hover:text-primary-700 hover:ring-primary-300">
                        {l.ancre}
                        <span aria-hidden className="text-gray-400">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <p className="mt-10 rounded-xl bg-amber-50/80 p-4 text-[13.5px] leading-relaxed text-amber-900 ring-1 ring-amber-100">
              <TexteRiche texte={insecables(PRUDENCE)} />
            </p>

            <div id="cta-fin" className="mt-10 overflow-hidden rounded-2xl bg-gradient-to-br from-primary-700 to-primary-900 p-6 text-white shadow-lg sm:p-8">
              <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-100">
                <span aria-hidden className="h-px w-6 bg-blue-200/70" />
                {TEXTES.finSurtitre}
              </p>
              <p className="mt-4 text-[22px] font-bold leading-tight tracking-tight sm:text-[26px]">{TEXTES.finTitre}</p>
              <p className="mt-3 max-w-xl text-[15.5px] leading-relaxed text-blue-50">{insecables(TEXTES.finTexte)}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <AppelInscription
                  slug={article.slug}
                  emplacement="fin"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-[14.5px] font-bold text-primary-700 transition hover:bg-blue-50"
                >
                  {TEXTES.finBouton} <span aria-hidden>→</span>
                </AppelInscription>
                <Link href="/tarifs" className="text-[14px] font-semibold text-blue-100 underline-offset-2 hover:text-white hover:underline">
                  Voir les formules
                </Link>
                <Link href="/login" className="text-[14px] text-blue-100/90 underline-offset-2 hover:text-white hover:underline">
                  Déjà inscrit ? Se connecter
                </Link>
              </div>
            </div>

            <p className="mt-6 text-[12px] text-gray-500">
              Image de couverture : <Credit {...article.couverture} />
            </p>
          </article>

          {/* Colonne de droite : les articles à lire ensuite, puis l'appel. Sous
              `xl` elle passe sous l'article, et l'appel y laisse la place à la barre. */}
          <aside aria-label="À lire ensuite" className="xl:sticky xl:top-24 xl:self-start">
            <div className="flex flex-col gap-6">
              {aLire.length > 0 && (
                <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-200">
                  <h2 className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-gray-500">
                    <span aria-hidden className="h-px w-4 bg-primary-400" />
                    À lire ensuite
                  </h2>
                  <ul className="mt-4 grid gap-5 sm:grid-cols-3 xl:grid-cols-1">
                    {aLire.map((a) => (
                      <li key={a.slug}>
                        <Link href={`/articles/${a.slug}`} className="group block">
                          {/* Un fond, pour la même raison que le bandeau : une photo disparue laisse un aplat. */}
                          <span
                            aria-hidden
                            className="block aspect-[16/10] w-full rounded-lg bg-gradient-to-br from-primary-100 to-primary-50 bg-cover bg-center transition duration-500 group-hover:scale-[1.02]"
                            style={{ backgroundImage: `url("${petiteImage(a.couverture.src)}")` }}
                          />
                          <span className="mt-2 block text-[10.5px] font-semibold uppercase tracking-wider text-gray-400">{NOM_RUBRIQUE[a.rubrique]}</span>
                          <span className="mt-1 line-clamp-3 block text-balance text-[14px] font-semibold leading-snug text-gray-900 transition group-hover:text-primary-700">
                            {insecables(a.titre)}
                          </span>
                          <span className="mt-1.5 block text-[11.5px] text-gray-400">
                            {dateLongue(a.publieLe)} · {a.minutes} min
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <div className="hidden rounded-2xl bg-gradient-to-br from-primary-50 via-white to-blue-50 p-5 ring-1 ring-primary-100 xl:block">
                <p className="text-[16px] font-bold leading-snug tracking-tight text-gray-900">{TEXTES.colonneTitre}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-gray-600">{insecables(TEXTES.colonneTexte)}</p>
                <AppelInscription slug={article.slug} emplacement="colonne" className={`${BOUTON} mt-4 w-full`}>
                  {TEXTES.colonneBouton}
                </AppelInscription>
                <Link href="/eligibilite-examen-civique" className="mt-3 block text-center text-[13px] font-medium text-primary-700 hover:underline">
                  Êtes-vous concerné par l&apos;examen ?
                </Link>
              </div>

              <Link href="/articles" className="hidden text-center text-[13px] font-semibold text-primary-700 hover:text-primary-800 xl:block">
                Tous les articles →
              </Link>
            </div>
          </aside>
        </div>
      </main>

      <BarreAppel>
        <p className="text-[14px] font-semibold leading-snug text-gray-900">{insecables(TEXTES.barreTexte)}</p>
        <AppelInscription slug={article.slug} emplacement="barre" className={`${BOUTON} shrink-0 px-4 py-2`}>
          {TEXTES.barreBouton}
        </AppelInscription>
      </BarreAppel>

      <SuiviLecture slug={article.slug} />
      <Footer />
    </>
  );
}
