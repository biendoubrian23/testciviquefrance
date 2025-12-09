'use client';

import Link from 'next/link';
import { ExternalLink, MapPin, Calendar, Euro, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { centresExamen2026Content } from '@/lib/data/article-content';

export default function CentresExamen2026Article() {
  const content = centresExamen2026Content;

  return (
    <div className="prose prose-lg max-w-none">
      {/* Introduction */}
      <section className="mb-16">
        <div className="bg-gradient-to-r from-pink-50 to-blue-50 border-l-4 border-pink-500 p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-0">
            {content.introduction.title}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-0" dangerouslySetInnerHTML={{ 
            __html: content.introduction.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          }} />
        </div>
      </section>

      {/* Nouveautés 2026 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-primary-500">
          {content.nouveautes2026.title}
        </h2>
        <p className="text-lg text-gray-700 mb-6">{content.nouveautes2026.content}</p>
        <div className="grid gap-4">
          {content.nouveautes2026.points.map((point, index) => (
            <div key={index} className="flex items-start gap-4 bg-white border-l-4 border-green-500 p-6 shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
              <p className="text-gray-800 text-lg m-0" dangerouslySetInnerHTML={{ 
                __html: point.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>')
              }} />
            </div>
          ))}
        </div>
      </section>

      {/* Importance du test civique */}
      {content.importanceTest && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-primary-500">
            {content.importanceTest.title}
          </h2>
          <p className="text-lg text-gray-700 mb-8" dangerouslySetInnerHTML={{ 
            __html: content.importanceTest.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>')
          }} />
          
          <div className="grid gap-8">
            {content.importanceTest.points.map((point, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-0 flex items-center gap-3">
                  <span className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                    {index + 1}
                  </span>
                  {point.title}
                </h3>
                <p className="text-gray-700 text-lg mb-0 pl-13" dangerouslySetInnerHTML={{ 
                  __html: point.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>')
                }} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA - Trouver les centres */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white p-10 shadow-xl">
          <h2 className="text-3xl font-bold mb-4 mt-0 text-white">
            {content.ouTrouverCentres.title}
          </h2>
          <p className="text-xl mb-6 text-primary-50" dangerouslySetInnerHTML={{ 
            __html: content.ouTrouverCentres.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          }} />
          <Link
            href={content.ouTrouverCentres.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-primary-700 px-8 py-4 font-bold text-lg hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl no-underline"
          >
            <MapPin className="w-6 h-6" />
            {content.ouTrouverCentres.link.text}
            <ExternalLink className="w-5 h-5" />
          </Link>
          <p className="mt-4 text-sm text-primary-100 mb-0">
            {content.ouTrouverCentres.link.description}
          </p>
        </div>
      </section>

      {/* Comment s'inscrire */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-4 border-primary-500">
          {content.commentSinscrire.title}
        </h2>
        <div className="grid gap-6">
          {content.commentSinscrire.steps.map((step, index) => (
            <div key={index} className="flex gap-6 bg-white border border-gray-200 p-8 hover:border-primary-300 hover:shadow-lg transition-all">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white flex items-center justify-center text-3xl font-bold shadow-lg">
                  {step.number}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-0">{step.title}</h3>
                <p className="text-lg text-gray-700 mb-0">{step.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image professionnelle - Centre d'examen */}
      <section className="mb-16">
        <div className="relative h-[500px] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
            alt="Centre d'examen moderne avec ordinateurs"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
            <p className="text-white text-xl font-semibold mb-0">
              Des centres modernes et équipés pour passer votre examen dans les meilleures conditions
            </p>
          </div>
        </div>
      </section>

      {/* Centres par région */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-4 border-primary-500">
          {content.principalesVilles.title}
        </h2>
        <p className="text-lg text-gray-700 mb-8">{content.principalesVilles.content}</p>
        
        <div className="grid gap-8">
          {content.principalesVilles.regions.map((region, index) => (
            <div key={index} className="bg-white border-2 border-gray-200 p-8 hover:border-primary-300 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="w-8 h-8 text-primary-600 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-0">{region.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {region.villes.map((ville, vIndex) => (
                      <span key={vIndex} className="inline-block bg-primary-50 text-primary-700 px-4 py-2 text-sm font-medium border border-primary-200">
                        {ville}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 text-base mb-0">{region.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image professionnelle - Carte de France */}
      <section className="mb-16">
        <div className="relative h-[500px] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1555992337-f4a6c45a3c9a?q=80&w=2070"
            alt="Carte de France avec épingles de localisation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div className="p-12 max-w-2xl">
              <h3 className="text-4xl font-bold text-white mb-4">
                Centres disponibles partout en France
              </h3>
              <p className="text-xl text-white/90">
                Plus de 150 centres agréés répartis sur l'ensemble du territoire, y compris l'outre-mer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-4 border-primary-500">
          {content.infosPratiques.title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {content.infosPratiques.items.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 p-8 hover:border-primary-300 hover:shadow-lg transition-all">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 mt-0">{item.title}</h3>
              <p className="text-gray-700 mb-0">{item.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Préparation efficace */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-green-50 to-blue-50 p-10 border-l-4 border-green-500">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-0">
            {content.preparationEfficace.title}
          </h2>
          <p className="text-lg text-gray-700 mb-8" dangerouslySetInnerHTML={{ 
            __html: content.preparationEfficace.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>')
          }} />
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {content.preparationEfficace.features.map((feature, index) => (
              <div key={index} className="bg-white p-6 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 mt-0">{feature.title}</h3>
                <p className="text-gray-700 mb-0">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <Link
            href={content.preparationEfficace.cta.href}
            className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl no-underline"
          >
            {content.preparationEfficace.cta.text}
          </Link>
        </div>
      </section>

      {/* Image professionnelle - Étudiant concentré */}
      <section className="mb-16">
        <div className="relative h-[500px] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070"
            alt="Étudiant préparant son examen sur ordinateur"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <h3 className="text-5xl font-bold mb-4">Taux de réussite 95%</h3>
              <p className="text-2xl">Pour nos utilisateurs bien préparés</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conseils de réussite */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-4 border-primary-500">
          {content.conseilsReussite.title}
        </h2>
        <div className="grid gap-4">
          {content.conseilsReussite.tips.map((tip, index) => (
            <div key={index} className="flex items-start gap-4 bg-white border-l-4 border-yellow-500 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 text-yellow-700 flex items-center justify-center font-bold text-lg">
                {index + 1}
              </div>
              <p className="text-gray-800 text-lg m-0" dangerouslySetInnerHTML={{ 
                __html: tip.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>')
              }} />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-4 border-primary-500">
          {content.faq.title}
        </h2>
        <div className="grid gap-6">
          {content.faq.questions.map((item, index) => (
            <div key={index} className="bg-white border-2 border-gray-200 p-8 hover:border-primary-300 transition-colors">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 mt-0">{item.q}</h3>
                  <p className="text-gray-700 mb-0">{item.r}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Conclusion avec CTA */}
      <section className="mb-16">
        <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white p-12 shadow-2xl">
          <h2 className="text-4xl font-bold mb-6 mt-0 text-white">
            {content.conclusion.title}
          </h2>
          <p className="text-xl mb-8 leading-relaxed text-primary-50" dangerouslySetInnerHTML={{ 
            __html: content.conclusion.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          }} />
          
          <div className="flex flex-wrap gap-4">
            <Link
              href={content.conclusion.cta.primary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-primary-700 px-8 py-4 font-bold text-lg hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl no-underline"
            >
              <ExternalLink className="w-6 h-6" />
              {content.conclusion.cta.primary.text}
            </Link>
            <Link
              href={content.conclusion.cta.secondary.href}
              className="inline-flex items-center gap-3 bg-primary-500 text-white px-8 py-4 font-bold text-lg hover:bg-primary-400 transition-all shadow-lg hover:shadow-xl border-2 border-white no-underline"
            >
              {content.conclusion.cta.secondary.text}
            </Link>
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-300">
          {content.sources.title}
        </h2>
        
        <div className="bg-gradient-to-br from-primary-50 to-blue-50 p-10 border-l-4 border-primary-600 shadow-lg mb-8">
          <p className="text-lg text-gray-800 mb-6" dangerouslySetInnerHTML={{ 
            __html: content.sources.content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          }} />
          
          <Link
            href={content.sources.mainLink.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary-600 text-white px-8 py-4 font-bold text-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl no-underline"
          >
            <MapPin className="w-6 h-6" />
            {content.sources.mainLink.text}
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>

        {content.sources.additionalLinks && content.sources.additionalLinks.length > 0 && (
          <div className="bg-gray-50 p-8 border-l-4 border-gray-400">
            <p className="text-sm font-semibold text-gray-600 mb-4">Références légales :</p>
            <ul className="space-y-3 mb-0">
              {content.sources.additionalLinks.map((source, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ExternalLink className="w-5 h-5 text-gray-500 flex-shrink-0 mt-1" />
                  <Link
                    href={source.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 hover:underline text-sm"
                  >
                    {source.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}
