'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Check, Target, Users, BookOpen, Award, ArrowRight, Star, Shield, Mail, FileText, User } from 'lucide-react';

// Points forts de la plateforme
const pointsForts = [
  'Quiz d\'entraînement complets et conformes au programme officiel',
  'Simulations d\'examen en conditions réelles',
  'Fiches de révision interactives',
  'Guide d\'apprentissage clair et progressif',
  'Statistiques et suivi de progression détaillés',
  'Conseils personnalisés selon vos résultats',
];

// Statistiques
const stats = [
  { value: '600+', label: 'Candidats préparés' },
  { value: '95%', label: 'Taux de réussite' },
  { value: '4.6/5', label: 'Note moyenne' },
  { value: '2026', label: 'Référentiel officiel' },
];

// Pourquoi nous choisir
const avantages = [
  {
    icon: Target,
    title: 'Conforme au référentiel officiel 2026',
    description: 'Nos contenus sont mis à jour régulièrement pour correspondre aux exigences actuelles du test civique.',
  },
  {
    icon: BookOpen,
    title: 'Accessible sur tous vos appareils',
    description: 'Mobile, tablette ou ordinateur : révisez où vous voulez, quand vous voulez, 24h/24.',
  },
  {
    icon: Users,
    title: 'Pour tous les profils',
    description: 'Naturalisation, titre de séjour pluriannuel ou carte de résident : nous vous accompagnons.',
  },
  {
    icon: Award,
    title: 'Réussissez du premier coup',
    description: 'Nos outils interactifs sont conçus pour vous aider à réussir votre examen dès la première tentative.',
  },
];

export default function AProposPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* Hero Section avec image de fond */}
        <section className="py-16 lg:py-24 relative overflow-hidden">
          {/* Image de fond - Arc de Triomphe */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1549144511-f099e773c147?q=80&w=2070')",
            }}
          />
          {/* Overlay avec dégradé */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/85 to-white/95" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in-up drop-shadow-sm">
                Préparez votre examen civique français
              </h1>
              <p className="text-xl text-gray-700 mb-8 animate-fade-in-up delay-100 drop-shadow-sm">
                Préparez votre examen civique français en ligne, à votre rythme et en toute confiance.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 animate-fade-in-up delay-200">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-700 drop-shadow-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Rating */}
              <div className="flex items-center justify-center gap-2 mt-8 animate-fade-in-up delay-300">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${star <= 4 ? 'text-amber-400 fill-amber-400' : 'text-amber-400 fill-amber-100'}`}
                    />
                  ))}
                </div>
                <span className="text-gray-700 font-medium drop-shadow-sm">4.6 / 5</span>
              </div>
            </div>
          </div>
        </section>

        {/* Présentation */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="animate-fade-in-left delay-100">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 text-sm font-medium mb-6">
                  <Check className="w-4 h-4" />
                  Conforme au référentiel officiel 2026
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Une plateforme dédiée à la préparation de l'examen civique
                </h2>

                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  <strong>Test Civique France</strong> est une plateforme moderne et accessible sur mobile,
                  tablette et ordinateur, dédiée à la préparation de <strong>l'examen civique français</strong>,
                  requis pour la naturalisation, le titre de séjour pluriannuel ou la carte de résident.
                </p>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Entraînez-vous, révisez et progressez à votre rythme grâce à des tests, leçons et
                  outils interactifs conçus pour vous aider à réussir du premier coup.
                </p>

                <Link
                  href="/signup"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white font-semibold text-lg hover:bg-primary-700 transition-colors"
                >
                  Commencer gratuitement
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Points forts */}
              <div className="bg-gray-50 p-8 lg:p-10 border border-gray-200 animate-fade-in-right delay-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Nos points forts</h3>
                <ul className="space-y-4">
                  {pointsForts.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-16 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
                Pourquoi choisir Test Civique France ?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-100">
                Une solution complète pour réussir votre examen civique
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {avantages.map((avantage, index) => {
                const Icon = avantage.icon;
                const delays = ['delay-200', 'delay-300', 'delay-400', 'delay-500'];
                return (
                  <div
                    key={index}
                    className={`bg-white p-6 border border-gray-200 animate-fade-in-up ${delays[index]} transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-primary-300`}
                  >
                    <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {avantage.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {avantage.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Notre mission */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">
                Notre mission
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up delay-100">
                Rendre la réussite à l'examen civique accessible à tous. Nous croyons qu'apprendre
                les valeurs, les institutions et l'histoire de la République française doit être
                une expérience claire, motivante et moderne.
              </p>

              {/* Citation */}
              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 text-left animate-fade-in-up delay-200">
                <p className="text-lg text-gray-700 italic">
                  <strong>Test Civique France</strong> vous accompagne tout au long de votre préparation —
                  du premier quiz jusqu'à la réussite du test officiel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Politique éditoriale */}
        <section className="py-16 lg:py-24 bg-gray-50" id="politique-editoriale">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 text-sm font-medium mb-4">
                  <Shield className="w-4 h-4" />
                  Transparence
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Politique éditoriale
                </h2>
                <p className="text-lg text-gray-600">
                  Notre engagement envers la fiabilité et la transparence de l&apos;information.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-100 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Sources officielles uniquement</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Tous nos contenus s&apos;appuient exclusivement sur les sources officielles : service-public.fr, Legifrance, Journal officiel, sites des préfectures et du ministère de l&apos;Intérieur.
                  </p>
                </div>

                <div className="bg-white p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-100 flex items-center justify-center">
                      <Check className="w-5 h-5 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Vérification systématique</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Chaque information juridique est vérifiée avant publication. Nos articles sont relus et mis à jour mensuellement en cas de changements législatifs ou réglementaires.
                  </p>
                </div>

                <div className="bg-white p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Neutralité politique</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Test Civique France est une plateforme éducative indépendante. Nous ne sommes affiliés à aucun parti politique, syndicat ou organisation gouvernementale.
                  </p>
                </div>

                <div className="bg-white p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-amber-100 flex items-center justify-center">
                      <Star className="w-5 h-5 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">Mise à jour continue</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Nos contenus sont mis à jour en continu pour refléter les derniers décrets, circulaires et évolutions législatives concernant le test civique et la naturalisation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Équipe éditoriale */}
        <section className="py-16 lg:py-24" id="equipe">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Équipe éditoriale
                </h2>
                <p className="text-lg text-gray-600">
                  Les personnes derrière le contenu de Test Civique France.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <div className="w-20 h-20 rounded-full bg-primary-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    BB
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Brian B</h3>
                    <p className="text-primary-600 font-medium mb-3">Fondateur & Rédacteur en chef</p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      Fondateur de Test Civique France depuis 2024, Brian accompagne les candidats à la naturalisation française
                      et au renouvellement de titre de séjour. Spécialiste du test civique obligatoire (décret 2025-647),
                      il s&apos;appuie sur les sources officielles pour produire des contenus fiables et à jour.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['Test civique', 'Naturalisation', 'Titres de séjour', 'Droit des étrangers', 'Réforme 2026'].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-primary-50 text-primary-700 text-xs rounded-full border border-primary-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/auteurs/brian-biendou"
                      className="inline-flex items-center gap-1.5 text-sm text-primary-600 hover:text-primary-700 mt-4"
                    >
                      <User className="w-4 h-4" />
                      Voir tous ses articles
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financement et contact */}
        <section className="py-16 lg:py-24 bg-gray-50" id="financement">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Financement</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Test Civique France est financé par les abonnements de ses utilisateurs
                    ainsi que par la publicité affichée sur le site. Nous ne recevons aucun
                    financement public ni subvention. Notre indépendance éditoriale reste
                    totale : les annonceurs n&apos;ont aucune influence sur nos contenus.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Publicité non intrusive, sans influence sur nos contenus
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Aucune influence externe sur le contenu
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Indépendance éditoriale garantie
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Pour toute question concernant nos contenus, notre politique éditoriale
                    ou la plateforme, n&apos;hésitez pas à nous contacter.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="mailto:notification@testciviquefrance.fr"
                      className="flex items-center gap-3 text-primary-600 hover:text-primary-700"
                    >
                      <Mail className="w-5 h-5" />
                      notification@testciviquefrance.fr
                    </a>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-4 text-sm text-primary-600 hover:text-primary-700"
                  >
                    Formulaire de contact
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 lg:py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 animate-fade-in-up">
              Prêt à réussir votre examen civique ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-100">
              Rejoignez les milliers de candidats qui ont réussi leur test grâce à notre plateforme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
              <Link
                href="/signup"
                className="px-8 py-4 bg-primary-600 text-white font-semibold text-lg hover:bg-primary-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                Commencer gratuitement
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/tarifs"
                className="px-8 py-4 border-2 border-gray-600 text-white font-semibold text-lg hover:border-gray-500 hover:bg-gray-800 transition-colors inline-flex items-center justify-center"
              >
                Voir les tarifs
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
