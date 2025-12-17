'use client';

import Link from 'next/link';
import { ExternalLink, BookOpen, CheckCircle, GraduationCap, ArrowRight, Globe, Link as LinkIcon, AlertCircle } from 'lucide-react';
import { toutSavoirExamen2026Content } from '@/lib/data/tout-savoir-content';

export default function ToutSavoirExamen2026Article() {
    const content = toutSavoirExamen2026Content;

    return (
        <div className="prose prose-lg max-w-none text-gray-700">

            {/* Introduction */}
            <section className="mb-16">
                <div className="bg-white border-l-4 border-primary-600 p-8 shadow-sm">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-0">
                        {content.introduction.title}
                    </h2>
                    <p className="text-lg leading-relaxed mb-0" dangerouslySetInnerHTML={{
                        __html: content.introduction.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary-800">$1</strong>')
                    }} />
                </div>
            </section>

            {/* 1. Qu'est-ce que l'examen ? */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-primary-200 inline-block">
                    {content.questCeQueCest.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <p className="text-lg leading-relaxed mb-6" dangerouslySetInnerHTML={{
                            __html: content.questCeQueCest.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>')
                        }} />
                    </div>
                    <div className="bg-primary-50 p-6 border border-primary-100">
                        <h3 className="text-lg font-bold text-primary-800 mb-4 mt-0 uppercase tracking-wide">
                            Public concerné
                        </h3>
                        <ul className="space-y-3 m-0 p-0 list-none">
                            {content.questCeQueCest.targets.map((target, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
                                    <span className="text-gray-800" dangerouslySetInnerHTML={{
                                        __html: target.replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary-700 font-semibold">$1</strong>')
                                    }} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* 2. Cadre légal */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-primary-200 inline-block">
                    {content.cadreLegal.title}
                </h2>

                <p className="text-lg mb-8" dangerouslySetInnerHTML={{
                    __html: content.cadreLegal.intro.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>')
                }} />

                <div className="grid gap-6 mb-8">
                    {content.cadreLegal.points.map((point, index) => (
                        <div key={index} className="bg-white border text-gray-700 hover:border-primary-400 p-6 shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                            <div className="flex items-start gap-4">
                                <div className="w-8 h-8 bg-primary-100 text-primary-700 flex items-center justify-center font-bold flex-shrink-0 mt-1">
                                    {index + 1}
                                </div>
                                <p className="m-0 text-lg" dangerouslySetInnerHTML={{
                                    __html: point.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900 font-bold">$1</strong>')
                                }} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-gray-50 p-6 border-l-4 border-gray-400 mb-8">
                    <p className="text-base text-gray-600 m-0 italic" dangerouslySetInnerHTML={{
                        __html: content.cadreLegal.note.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-800">$1</strong>')
                    }} />
                </div>

                <Link
                    href={content.cadreLegal.articleLink.href}
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-800 transition-colors no-underline group"
                >
                    <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    {content.cadreLegal.articleLink.text}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
            </section>

            {/* Image Professionnelle 1 - Cadre Institutionnel - Palais de Justice/Assemblée */}
            <section className="mb-16 overflow-hidden shadow-xl relative h-[400px]">
                <img
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=80"
                    alt="Le Palais de Justice, symbolisant les institutions républicaines"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                    <p className="text-white text-xl font-medium m-0">
                        Une réforme pour renforcer l'intégration et les valeurs républicaines
                    </p>
                </div>
            </section>

            {/* 3. Modalités (QCM) */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-primary-200 inline-block">
                    {content.modalites.title}
                </h2>

                <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
                    <div>
                        <p className="text-lg leading-relaxed mb-6" dangerouslySetInnerHTML={{
                            __html: content.modalites.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>')
                        }} />

                        <div className="bg-amber-50 border border-amber-200 p-6">
                            <h4 className="flex items-center gap-2 text-amber-800 font-bold m-0 mb-3 text-lg">
                                <GraduationCap className="w-6 h-6" /> Condition de réussite
                            </h4>
                            <p className="text-amber-900 m-0" dangerouslySetInnerHTML={{
                                __html: content.modalites.successNote.replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-950 decoration-amber-500 decoration-2 underline underline-offset-2">$1</strong>')
                            }} />
                        </div>
                    </div>

                    <div className="bg-white border overflow-hidden shadow-lg">
                        <div className="bg-primary-600 text-white p-4 font-bold text-center text-lg">
                            Fiche Technique
                        </div>
                        <div className="divide-y divide-gray-100">
                            {content.modalites.details.map((detail, index) => (
                                <div key={index} className="flex justify-between p-4 hover:bg-gray-50 transition-colors">
                                    <span className="text-gray-600 font-medium">{detail.label}</span>
                                    <span className="text-gray-900 font-bold">{detail.value}</span>
                                </div>
                            ))}
                        </div>
                        <div className="p-4 bg-gray-50 text-center border-t border-gray-100">
                            <Link
                                href={content.modalites.centresLink.href}
                                className="text-primary-600 font-bold hover:text-primary-800 text-sm no-underline"
                            >
                                {content.modalites.centresLink.text} →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Thématiques */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-primary-200 inline-block">
                    {content.thematiques.title}
                </h2>
                <p className="text-lg text-gray-700 mb-8">{content.thematiques.intro}</p>

                <div className="grid gap-6">
                    {content.thematiques.themes.map((theme, index) => (
                        <div key={index} className="group flex flex-col md:flex-row gap-6 bg-white border border-gray-200 p-6 hover:shadow-lg hover:border-primary-300 transition-all">
                            <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-primary-50 group-hover:bg-primary-600 transition-colors">
                                <span className="text-2xl font-bold text-primary-600 group-hover:text-white transition-colors">{index + 1}</span>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mt-0 mb-2 group-hover:text-primary-700 transition-colors">
                                    {theme.title}
                                </h3>
                                <p className="text-gray-600 m-0 leading-relaxed">
                                    {theme.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Image Professionnelle 2 - Louvre / Culture */}
            <section className="mb-16 relative overflow-hidden shadow-xl h-[400px]">
                <img
                    src="https://images.unsplash.com/photo-1565099824688-e93eb20fe622?auto=format&fit=crop&w=1200&q=80"
                    alt="Le Musée du Louvre, symbole de la culture française"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex items-center p-12">
                    <div className="max-w-md text-white">
                        <h3 className="text-3xl font-bold mb-4 mt-0 text-white">Préparez-vous à réussir</h3>
                        <p className="text-lg opacity-90 m-0 text-white">
                            Une bonne préparation est la clé pour aborder l'examen avec sérénité et confiance.
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. Préparation */}
            <section className="mb-16 bg-gray-900 text-white p-10 shadow-2xl overflow-hidden relative">
                {/* Background Accents */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600 mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

                <div className="relative z-10">
                    <h2 className="text-3xl font-bold text-white mb-6 pb-2 border-b-2 border-primary-500 inline-block">
                        {content.preparation.title}
                    </h2>

                    <p className="text-lg text-gray-300 mb-8" dangerouslySetInnerHTML={{
                        __html: content.preparation.content.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                    }} />

                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                        {content.preparation.steps.map((step, index) => (
                            <div key={index} className="flex gap-4">
                                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                                <p className="text-gray-300 m-0" dangerouslySetInnerHTML={{
                                    __html: step.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
                                }} />
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            href={content.preparation.links[2].href}
                            className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 font-bold text-lg hover:bg-primary-500 transition-all shadow-lg hover:shadow-primary-500/30 no-underline"
                        >
                            {content.preparation.links[2].text} <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href={content.preparation.links[0].href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 font-bold text-lg hover:bg-white/20 transition-all no-underline border border-white/20"
                        >
                            <Globe className="w-5 h-5" /> {content.preparation.links[0].text}
                        </Link>
                    </div>
                </div>
            </section>

            {/* Sources et Ressources Utiles */}
            <section className="mb-16 bg-gray-50 border-t-2 border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-primary-600" />
                    Sources officielles et ressources utiles
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Sources Officielles */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4 uppercase text-sm tracking-wider">
                            Documentation Officielle
                        </h3>
                        <ul className="space-y-4 list-none p-0 m-0">
                            <li>
                                <a
                                    href="https://www.service-public.fr/particuliers/vosdroits/F35799"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 group no-underline"
                                >
                                    <span className="mt-1 w-2 h-2 rounded-full bg-blue-600 group-hover:scale-125 transition-transform"></span>
                                    <div>
                                        <span className="block text-gray-900 font-medium group-hover:text-blue-600 transition-colors">Service-Public.fr : Examen civique</span>
                                        <span className="text-sm text-gray-500">Le portail officiel de l'administration française</span>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://francais.cci-paris-idf.fr/candidat"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 group no-underline"
                                >
                                    <span className="mt-1 w-2 h-2 rounded-full bg-blue-600 group-hover:scale-125 transition-transform"></span>
                                    <div>
                                        <span className="block text-gray-900 font-medium group-hover:text-blue-600 transition-colors">Plateforme CCI Paris Île-de-France</span>
                                        <span className="text-sm text-gray-500">Pour s'inscrire et trouver un centre d'examen agréé</span>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.legifrance.gouv.fr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 group no-underline"
                                >
                                    <span className="mt-1 w-2 h-2 rounded-full bg-blue-600 group-hover:scale-125 transition-transform"></span>
                                    <div>
                                        <span className="block text-gray-900 font-medium group-hover:text-blue-600 transition-colors">Légifrance - Décret n° 2025-647</span>
                                        <span className="text-sm text-gray-500">Le texte de loi officiel de la réforme 2026</span>
                                    </div>
                                    <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Articles Recommandés */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-4 uppercase text-sm tracking-wider">
                            Guides Recommandés
                        </h3>
                        <ul className="space-y-4 list-none p-0 m-0">
                            <li>
                                <Link
                                    href="/articles/cadre-general-examen-civique"
                                    className="flex items-start gap-3 group no-underline"
                                >
                                    <span className="mt-1 w-2 h-2 rounded-full bg-primary-600 group-hover:scale-125 transition-transform"></span>
                                    <div>
                                        <span className="block text-gray-900 font-medium group-hover:text-primary-600 transition-colors">Cadre général de l'examen civique</span>
                                        <span className="text-sm text-gray-500">Comprendre le programme détaillé</span>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/articles/centres-agrees-examen-civique-2026"
                                    className="flex items-start gap-3 group no-underline"
                                >
                                    <span className="mt-1 w-2 h-2 rounded-full bg-primary-600 group-hover:scale-125 transition-transform"></span>
                                    <div>
                                        <span className="block text-gray-900 font-medium group-hover:text-primary-600 transition-colors">Liste des centres agréés 2026</span>
                                        <span className="text-sm text-gray-500">Où passer votre examen près de chez vous</span>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/signup"
                                    className="flex items-start gap-3 group no-underline"
                                >
                                    <span className="mt-1 w-2 h-2 rounded-full bg-green-500 group-hover:scale-125 transition-transform"></span>
                                    <div>
                                        <span className="block text-gray-900 font-medium group-hover:text-green-600 transition-colors">S'entraîner maintenant</span>
                                        <span className="text-sm text-gray-500">Accès gratuit aux séries de QCM officielles</span>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 border border-blue-100 flex gap-4 items-start">
                    <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <p className="text-sm text-blue-800 m-0 font-medium">Pour aller plus loin</p>
                        <p className="text-sm text-blue-700 m-0 mt-1">
                            N'hésitez pas à consulter régulièrement notre section <Link href="/articles" className="font-bold underline hover:text-blue-900">Articles</Link> pour suivre l'actualité des réformes et des sessions d'examen.
                        </p>
                    </div>
                </div>
            </section>

            {/* SEO Keywords */}
            <section className="sr-only">
                <h3>Mots-clés associés</h3>
                <ul>
                    {content.seoKeywords.map((kw, i) => <li key={i}>{kw}</li>)}
                </ul>
            </section>

        </div>
    );
}
