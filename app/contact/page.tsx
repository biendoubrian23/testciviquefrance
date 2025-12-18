'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Mail, MessageSquare, Clock, Send, MapPin, Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

// Fonction de validation d'email
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation de l'email avant envoi
    if (!validateEmail(formData.email)) {
      setEmailError('Veuillez entrer une adresse email valide');
      return;
    }

    setIsLoading(true);
    setSubmitError('');

    try {
      // Envoi direct à Web3Forms depuis le client
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: '365199e4-66dc-49b4-843f-d7426aae0e18',
          to: 'clarkybrian@outlook.fr',
          from_name: formData.nom,
          email: formData.email,
          subject: `[TestCiviqueFrance] ${formData.sujet}`,
          message: formData.message,
          nom: formData.nom,
          sujet: formData.sujet,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      } else {
        setSubmitError(data.message || 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.');
      }
    } catch (error) {
      setSubmitError('Une erreur est survenue. Veuillez vérifier votre connexion et réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validation en temps réel de l'email
    if (name === 'email') {
      if (value && !validateEmail(value)) {
        setEmailError('Veuillez entrer une adresse email valide');
      } else {
        setEmailError('');
      }
    }
  };

  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
        {/* Hero Section avec image de fond */}
        <section className="py-12 lg:py-16 relative overflow-hidden">
          {/* Image de fond - Champs-Élysées */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020')",
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/80" />
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6">
              <Link href="/" className="hover:text-primary-600 transition-colors">Accueil</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900">Contact</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 drop-shadow-md animate-fade-in-up" style={{ textShadow: '0 2px 4px rgba(255,255,255,0.8)' }}>
              Contactez-nous
            </h1>
            <p className="text-lg text-gray-800 max-w-2xl drop-shadow-md animate-fade-in-up delay-100" style={{ textShadow: '0 1px 3px rgba(255,255,255,0.9)' }}>
              Une question sur l'examen civique ou notre plateforme ? 
              Notre équipe est là pour vous accompagner dans votre préparation.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              
              {/* Informations de contact */}
              <div className="lg:col-span-2 space-y-8 animate-fade-in-left delay-100">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Comment pouvons-nous vous aider ?
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Que vous ayez des questions sur le contenu de nos cours, 
                    le fonctionnement de la plateforme ou votre préparation à l'examen civique, 
                    nous sommes disponibles pour vous répondre.
                  </p>
                </div>

                {/* Cards info */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-100 transition-all duration-300 hover:border-emerald-200 hover:bg-emerald-50/30">
                    <div className="w-12 h-12 bg-emerald-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Horaires</h3>
                      <p className="text-gray-600 text-sm">Lundi - Dimanche</p>
                      <p className="text-gray-900 font-medium">9h00 - 18h00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-5 bg-gray-50 border border-gray-100 transition-all duration-300 hover:border-amber-200 hover:bg-amber-50/30">
                    <div className="w-12 h-12 bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">FAQ</h3>
                      <p className="text-gray-600 text-sm mb-2">Trouvez des réponses rapides</p>
                      <Link href="/faq" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">
                        Consulter la FAQ →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Note */}
                <div className="p-5 bg-primary-50 border-l-4 border-primary-500">
                  <p className="text-sm text-primary-800">
                    <span className="font-semibold">Note :</span> Pour les questions urgentes concernant 
                    votre préparation ou un problème technique, privilégiez le formulaire de contact 
                    avec le sujet "Urgent".
                  </p>
                </div>
              </div>

              {/* Formulaire */}
              <div className="lg:col-span-3 animate-fade-in-right delay-200">
                <div className="bg-white border border-gray-200 p-8 lg:p-10 shadow-sm">
                  {!isSubmitted ? (
                    <>
                      <h2 className="text-xl font-bold text-gray-900 mb-6">
                        Envoyez-nous un message
                      </h2>
                      
                      <form 
                        onSubmit={handleSubmit} 
                        method="POST"
                        action=""
                        className="space-y-6"
                      >
                        <div className="grid sm:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
                              Nom complet
                            </label>
                            <input
                              type="text"
                              id="nom"
                              name="nom"
                              value={formData.nom}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                              placeholder="Votre nom"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                              Email
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className={`w-full px-4 py-3 border ${emailError ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-300 focus:border-primary-500 focus:ring-primary-500/20'} focus:ring-2 outline-none transition-all`}
                              placeholder="votre@email.com"
                            />
                            {emailError && (
                              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                <AlertCircle className="w-4 h-4" />
                                {emailError}
                              </p>
                            )}
                          </div>
                        </div>

                        <div>
                          <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-2">
                            Sujet
                          </label>
                          <select
                            id="sujet"
                            name="sujet"
                            value={formData.sujet}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white"
                          >
                            <option value="">Sélectionnez un sujet</option>
                            <option value="question-generale">Question générale</option>
                            <option value="preparation-examen">Préparation à l'examen</option>
                            <option value="probleme-technique">Problème technique</option>
                            <option value="facturation">Facturation / Paiement</option>
                            <option value="partenariat">Partenariat</option>
                            <option value="urgent">Urgent</option>
                            <option value="autre">Autre</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                            Message
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full px-4 py-3 border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                            placeholder="Décrivez votre demande en détail..."
                          />
                        </div>

                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            id="rgpd"
                            required
                            className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
                          />
                          <label htmlFor="rgpd" className="text-sm text-gray-600">
                            J'accepte que mes données soient utilisées pour traiter ma demande.{' '}
                            <Link href="/mentions-legales" className="text-primary-600 hover:underline">
                              Politique de confidentialité
                            </Link>
                          </label>
                        </div>

                        {submitError && (
                          <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                            {submitError}
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={isLoading || !!emailError}
                          className="w-full sm:w-auto px-8 py-4 bg-primary-600 text-white font-medium hover:bg-primary-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Envoi en cours...
                            </>
                          ) : (
                            <>
                              Envoyer le message
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-emerald-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Message envoyé !
                      </h2>
                      <p className="text-gray-600 mb-8 max-w-md mx-auto">
                        Merci de nous avoir contacté. Notre équipe vous répondra 
                        dans les plus brefs délais (généralement sous 24-48h).
                      </p>
                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({ nom: '', email: '', sujet: '', message: '' });
                        }}
                        className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                      >
                        Envoyer un autre message
                      </button>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section FAQ rapide */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Questions fréquentes
            </h2>
            <p className="text-gray-600 mb-8 animate-fade-in-up delay-100">
              Avant de nous contacter, consultez peut-être notre FAQ pour une réponse immédiate.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 border border-gray-200 animate-fade-in-up delay-100 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">L'examen civique</h3>
                <p className="text-sm text-gray-600 mb-3">Format, durée, thématiques...</p>
                <Link href="/faq#examen" className="text-primary-600 text-sm font-medium hover:text-primary-700">
                  En savoir plus →
                </Link>
              </div>
              <div className="bg-white p-6 border border-gray-200 animate-fade-in-up delay-200 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Nos tarifs</h3>
                <p className="text-sm text-gray-600 mb-3">Crédits, Premium, paiement...</p>
                <Link href="/tarifs" className="text-primary-600 text-sm font-medium hover:text-primary-700">
                  Voir les tarifs →
                </Link>
              </div>
              <div className="bg-white p-6 border border-gray-200 animate-fade-in-up delay-300 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-900 mb-2">Se préparer</h3>
                <p className="text-sm text-gray-600 mb-3">Conseils, méthodes, durée...</p>
                <Link href="/faq#preparation" className="text-primary-600 text-sm font-medium hover:text-primary-700">
                  Nos conseils →
                </Link>
              </div>
            </div>

            <Link
              href="/faq"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-all duration-300"
            >
              Voir toutes les questions
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
