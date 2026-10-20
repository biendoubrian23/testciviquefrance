import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { ARTICLES_RECENTS } from "@/contenu/articles";
import { NOM_RUBRIQUE, PAGE_RUBRIQUE, RUBRIQUES, type Rubrique } from "@/contenu/rubriques";
import { dateLongue, insecables, petiteImage, texteBrut } from "@/lib/article";
import { articlesDeRubrique, cheminRubrique, derniereRetouche } from "@/lib/maillage";
import { SEO_CONFIG } from "@/lib/seo/constants";

type Params = { params: { rubrique: string } };

const SITE = SEO_CONFIG.siteUrl;

/**
 * La page d'une rubrique : `/articles/rubrique/<rubrique>`.
 *
 * Elle existe pour le maillage (`lib/maillage.ts`) : une page indexable par
 * rubrique, qui lie **tous** ses articles en liens HTML classiques, et vers
 * laquelle pointe le fil d'Ariane de chaque article. Elle se déduit du
 * registre : un article publié demain y entre au build suivant, sans rien
 * écrire. Son texte d'introduction vit dans `contenu/rubriques.ts`
 * (`PAGE_RUBRIQUE`).
 *
 * Rendue au build, sans JavaScript pour la liste. Données structurées :
 * `CollectionPage` (avec la liste des articles en `ItemList`) et
 * `BreadcrumbList`.
 */
export const dynamicParams = false;

export function generateStaticParams() {
  return RUBRIQUES.map((rubrique) => ({ rubrique }));
}

function rubriqueDe(params: Params["params"]): Rubrique | undefined {
  return (RUBRIQUES as readonly string[]).includes(params.rubrique) ? (params.rubrique as Rubrique) : undefined;
}

export function generateMetadata({ params }: Params): Metadata {
  const r = rubriqueDe(params);
  if (!r) return { title: "Rubrique introuvable" };
  const page = PAGE_RUBRIQUE[r];
  const url = `${SITE}${cheminRubrique(r)}`;
  return {
    title: `${page.titreSeo} | Test Civique France`,
    description: page.description,
    keywords: [],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title: `${NOM_RUBRIQUE[r]} : les articles de Test Civique France`,
      description: page.description,
      url,
      siteName: SEO_CONFIG.siteName,
      locale: "fr_FR",
    },
    twitter: { card: "summary_large_image", title: `${NOM_RUBRIQUE[r]} | Test Civique France`, description: page.description },
  };
}

export default function PageRubrique({ params }: Params) {
  const r = rubriqueDe(params);
  if (!r) notFound();
  const page = PAGE_RUBRIQUE[r];
  const articles = articlesDeRubrique(r, ARTICLES_RECENTS);
  const url = `${SITE}${cheminRubrique(r)}`;
  const modifie = derniereRetouche(articles);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}/#page`,
        url,
        name: `${NOM_RUBRIQUE[r]} : les articles de Test Civique France`,
        description: page.description,
        inLanguage: "fr-FR",
        isPartOf: { "@type": "WebSite", name: SEO_CONFIG.siteName, url: SITE },
        publisher: { "@id": `${SITE}/#organization` },
        ...(modifie ? { dateModified: `${modifie}T08:00:00+02:00` } : {}),
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: articles.length,
          itemListElement: articles.map((a, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE}/articles/${a.slug}`,
            name: texteBrut(a.titre),
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: SITE },
          { "@type": "ListItem", position: 2, name: "Articles", item: `${SITE}/articles` },
          { "@type": "ListItem", position: 3, name: NOM_RUBRIQUE[r], item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c").replace(/>/g, "\\u003e") }}
      />
      <Header />
      <main className="min-h-screen bg-gray-50/60 pb-24">
        <section className="bg-gradient-to-br from-primary-800 to-primary-600 px-5 pb-12 pt-28 text-white sm:px-8">
          <div className="mx-auto max-w-5xl">
            <nav aria-label="Fil d'Ariane" className="text-[13px] text-white/80">
              <Link href="/" className="hover:text-white">
                Accueil
              </Link>
              <span aria-hidden className="mx-2 text-white/50">›</span>
              <Link href="/articles" className="hover:text-white">
                Articles
              </Link>
              <span aria-hidden className="mx-2 text-white/50">›</span>
              <span className="text-white/90">{NOM_RUBRIQUE[r]}</span>
            </nav>
            <h1 className="mt-3 text-[30px] font-bold leading-tight tracking-tight sm:text-[42px]">{NOM_RUBRIQUE[r]}</h1>
            <p className="mt-4 max-w-3xl text-[16.5px] leading-relaxed text-blue-50">{insecables(page.intro)}</p>
            <p className="mt-4 text-[13px] text-white/75">
              {articles.length} article{articles.length > 1 ? "s" : ""}
              {modifie ? `, dernière mise à jour le ${dateLongue(modifie)}` : ""}
            </p>
          </div>
        </section>

        <div className="mx-auto mt-10 max-w-5xl px-5 sm:px-8">
          <nav aria-label="Les autres rubriques" className="flex flex-wrap gap-2">
            {RUBRIQUES.filter((x) => x !== r).map((x) => (
              <Link
                key={x}
                href={cheminRubrique(x)}
                className="rounded-full bg-white px-3.5 py-1.5 text-[13px] font-medium text-gray-700 ring-1 ring-gray-200 transition hover:text-primary-700 hover:ring-primary-300"
              >
                {NOM_RUBRIQUE[x]}
              </Link>
            ))}
            <Link href="/articles" className="rounded-full px-3.5 py-1.5 text-[13px] font-semibold text-primary-700 hover:underline">
              Tous les articles →
            </Link>
          </nav>

          <h2 className="mt-10 text-[22px] font-bold tracking-tight text-gray-900">Tous les articles de la rubrique</h2>
          <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/articles/${a.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 transition hover:ring-primary-300"
                >
                  {/* Un fond, comme sur la page d'article : une photo disparue laisse un aplat. */}
                  <span
                    aria-hidden
                    className="block aspect-[16/9] w-full bg-gradient-to-br from-primary-100 to-primary-50 bg-cover bg-center"
                    style={{ backgroundImage: `url("${petiteImage(a.couverture.src)}")` }}
                  />
                  <span className="flex flex-1 flex-col p-4">
                    <span className="text-balance text-[15.5px] font-semibold leading-snug text-gray-900 group-hover:text-primary-700">
                      {insecables(a.titre)}
                    </span>
                    <span className="mt-2 line-clamp-3 text-[13.5px] leading-relaxed text-gray-600">{insecables(a.resume)}</span>
                    <span className="mt-auto pt-3 text-[12px] text-gray-400">
                      <time dateTime={a.publieLe}>{dateLongue(a.publieLe)}</time> · {a.minutes} min
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
