import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import EligibiliteSimulateur from '@/components/eligibilite/EligibiliteSimulateur';
import { ShieldCheck, Clock, FileCheck, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Suis-je concerné par l'examen civique ? Simulateur gratuit 2026 | Test Civique France",
  description:
    "Vérifiez en 1 minute si vous devez passer l'examen civique en 2026. Simulateur gratuit fondé sur les critères officiels : nationalité, type de démarche, dispenses (65 ans, protection internationale, accord franco-algérien, santé). Réponse immédiate.",
  keywords: [
    'suis-je concerné examen civique',
    'simulateur examen civique',
    'éligibilité examen civique',
    'dois-je passer examen civique',
    'dispense examen civique 2026',
    'examen civique obligatoire',
    'test éligibilité titre de séjour',
    'examen civique carte de séjour',
  ],
  alternates: {
    canonical: 'https://www.testciviquefrance.fr/eligibilite-examen-civique',
  },
  openGraph: {
    title: "Suis-je concerné par l'examen civique ? Simulateur gratuit",
    description:
      "6 questions, 1 minute, une réponse claire : découvrez si l'examen civique est obligatoire dans votre situation.",
    url: 'https://www.testciviquefrance.fr/eligibilite-examen-civique',
    type: 'website',
  },
};

const reperes = [
  {
    icon: Clock,
    titre: 'Moins d\'une minute',
    texte: 'Un formulaire court : 3 à 4 champs à renseigner.',
  },
  {
    icon: ShieldCheck,
    titre: 'Critères officiels',
    texte: 'Décret du 15 juillet 2025, CESEDA et fiche Service-Public F39530.',
  },
  {
    icon: FileCheck,
    titre: 'Réponse motivée',
    texte: 'Chaque résultat cite les règles qui le fondent.',
  },
];

export default function EligibilitePage() {
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://www.testciviquefrance.fr',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: "Suis-je concerné par l'examen civique ?",
        item: 'https://www.testciviquefrance.fr/eligibilite-examen-civique',
      },
    ],
  };

  // Décrit l'outil lui-même : permet aux moteurs de réponse d'identifier
  // le simulateur comme une application utilisable, et non une simple page.
  const application = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: "Simulateur d'éligibilité à l'examen civique",
    url: 'https://www.testciviquefrance.fr/eligibilite-examen-civique',
    applicationCategory: 'GovernmentApplication',
    operatingSystem: 'Tout navigateur web',
    inLanguage: 'fr-FR',
    description:
      "Détermine si une personne est concernée par l'examen civique obligatoire en France depuis le 1er janvier 2026, à partir de sa nationalité, de sa démarche, de la mention de son titre et des cas de dispense prévus par les textes.",
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    isAccessibleForFree: true,
    featureList: [
      'Analyse de la nationalité (UE, EEE, Suisse, Royaume-Uni, Algérie, pays tiers)',
      'Distinction entre régime du séjour et régime de la naturalisation',
      "Prise en compte du contrat d'intégration républicaine (art. L. 413-5 du CESEDA)",
      'Cas de dispense : 65 ans révolus, protection internationale, état de santé',
      'Résultat motivé avec référence officielle',
    ],
    publisher: {
      '@type': 'Organization',
      name: 'Test Civique France',
      url: 'https://www.testciviquefrance.fr',
    },
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Qui est concerné par l'examen civique en 2026 ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Les ressortissants non européens qui font une première demande de carte de séjour pluriannuelle soumise au contrat d'intégration républicaine, une première demande de carte de résident, ou une demande de naturalisation. Les renouvellements de titre ne sont pas concernés.",
        },
      },
      {
        '@type': 'Question',
        name: "Qui est dispensé de l'examen civique ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Les ressortissants de l'Union européenne, de l'EEE et de Suisse ; les personnes de 65 ans révolus à la date du dépôt ; les bénéficiaires d'une protection internationale (pour le titre de séjour uniquement) ; les ressortissants algériens pour leur certificat de résidence, en vertu de l'accord franco-algérien du 27 décembre 1968 ; et les personnes dont l'état de santé ou le handicap rend l'examen impossible, sur certificat médical.",
        },
      },
      {
        '@type': 'Question',
        name: "Une dispense pour le titre de séjour vaut-elle pour la naturalisation ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non. La naturalisation relève du code civil, et non du CESEDA ni des accords bilatéraux de séjour. Ni le statut de réfugié ni l'accord franco-algérien de 1968 n'en dispensent. C'est la première cause de dossiers de naturalisation déclarés incomplets.",
        },
      },
      {
        '@type': 'Question',
        name: "Les Marocains et les Tunisiens sont-ils dispensés comme les Algériens ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non. Seul l'accord franco-algérien du 27 décembre 1968 crée un régime autonome au CESEDA. Les conventions franco-marocaine du 9 octobre 1987 et franco-tunisienne du 17 mars 1988 n'exemptent pas des obligations du CESEDA : Marocains et Tunisiens sont pleinement soumis à l'examen civique.",
        },
      },
    ],
  };

  return (
    <>
      {[breadcrumb, application, faq].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Header />

      <main className="min-h-screen bg-gray-50">
        {/* En-tête */}
        <section className="bg-white border-b border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center">
            <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-sm font-semibold mb-6">
              Simulateur gratuit — mis à jour pour 2026
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-5 leading-tight animate-fade-in-up">
              Suis-je concerné par l&apos;examen civique&nbsp;?
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
              Depuis le 1<sup>er</sup> janvier 2026, l&apos;examen civique conditionne la
              carte de séjour pluriannuelle, la carte de résident et la naturalisation.
              Mais tout le monde n&apos;est pas concerné. Remplissez le formulaire
              ci-dessous pour obtenir une réponse motivée.
            </p>
          </div>
        </section>

        {/* Simulateur */}
        <section className="py-10 sm:py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <EligibiliteSimulateur />
          </div>
        </section>

        {/* Repères */}
        <section className="pb-10 sm:pb-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-4">
              {reperes.map((repere) => {
                const Icone = repere.icon;
                return (
                  <div
                    key={repere.titre}
                    className="bg-white border border-gray-200 p-6"
                  >
                    <Icone className="w-6 h-6 text-primary-600 mb-3" />
                    <p className="font-semibold text-gray-900 mb-1">{repere.titre}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {repere.texte}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contexte + liens internes */}
        <section className="pb-16 sm:pb-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-gray-200 p-6 sm:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ce que le simulateur prend en compte
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                L&apos;obligation d&apos;examen civique dépend de quatre facteurs, et
                l&apos;ordre dans lequel on les examine change la réponse. Votre{' '}
                <strong>nationalité</strong> d&apos;abord — les ressortissants européens
                sont hors champ, les Algériens relèvent de l&apos;accord de 1968. Votre{' '}
                <strong>démarche</strong> ensuite : le séjour et la nationalité obéissent
                à des règles opposées. La <strong>mention de votre titre</strong> pour
                une carte pluriannuelle, car seuls les titres soumis au contrat
                d&apos;intégration républicaine sont visés. Enfin les{' '}
                <strong>dispenses personnelles</strong> : 65 ans révolus, protection
                internationale, état de santé.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Le piège le plus fréquent tient en une phrase :{' '}
                <strong>
                  une dispense accordée pour le titre de séjour ne vaut jamais pour la
                  naturalisation
                </strong>
                . La nationalité relève du code civil, auquel ni le statut de réfugié ni
                l&apos;accord franco-algérien ne font échapper.
              </p>

              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                Pour aller plus loin
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  {
                    href: '/articles/dispense-examen-civique-2026-qui-est-exempte-age-refugie-accords',
                    titre: 'Les 4 cas de dispense en détail',
                  },
                  {
                    href: '/articles/examen-civique-obligatoire-carte-sejour-pluriannuelle-2026',
                    titre: "L'obligation pour la carte de séjour",
                  },
                  {
                    href: '/articles/algeriens-examen-civique-2026-accord-1968-dispense-sejour-mais-pas-naturalisation',
                    titre: "Algériens : ce que dit l'accord de 1968",
                  },
                  {
                    href: '/articles/inscription-test-civique-2026-ou-quand-comment-sinscrire',
                    titre: "S'inscrire à l'examen officiel",
                  },
                ].map((lien) => (
                  <Link
                    key={lien.href}
                    href={lien.href}
                    className="group flex items-center justify-between gap-3 p-4 border border-gray-200 hover:border-primary-500 hover:bg-primary-50 transition-all"
                  >
                    <span className="text-sm font-medium text-gray-900">
                      {lien.titre}
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary-600 group-hover:translate-x-1 transition-all shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
