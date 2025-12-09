'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { Loader2, Check, X } from 'lucide-react';
import LegalModal from '@/components/ui/LegalModal';
import { conditionsUtilisation, politiqueConfidentialite } from '@/lib/data/legal-content';

// Validation email stricte
const isValidEmail = (email: string): boolean => {
  // Regex plus stricte : domaine avec au moins 2 caractères après le point
  // et extension de 2-6 caractères (com, fr, org, etc.)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) return false;
  
  // Vérifier que le domaine a au moins 3 caractères avant le point
  const domain = email.split('@')[1];
  const domainParts = domain.split('.');
  const domainName = domainParts[0];
  
  // Rejeter les domaines trop courts ou avec des caractères répétitifs suspects
  if (domainName.length < 3) return false;
  
  // Vérifier si le domaine contient trop de consonnes consécutives (signe de spam)
  const hasValidPattern = !/[bcdfghjklmnpqrstvwxz]{5,}/i.test(domainName);
  
  return hasValidPattern;
};

// Validation mot de passe (min 8 caractères, au moins une lettre et un chiffre)
const isValidPassword = (password: string): boolean => {
  const hasMinLength = password.length >= 8;
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  return hasMinLength && hasLetter && hasNumber;
};

export default function SignupPage() {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [showCGU, setShowCGU] = useState(false);
  const [showPolitique, setShowPolitique] = useState(false);
  const { signUp, signInWithGoogle } = useAuth();
  const router = useRouter();

  // Critères du mot de passe
  const passwordCriteria = {
    minLength: password.length >= 8,
    hasLetter: /[a-zA-Z]/.test(password),
    hasNumber: /[0-9]/.test(password),
  };

  // Validation en temps réel de l'email
  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (value && !isValidEmail(value)) {
      setEmailError('Format d\'email invalide');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!acceptTerms) {
      setError('Vous devez accepter les conditions d\'utilisation');
      return;
    }

    // Validation email
    if (!isValidEmail(email)) {
      setError('Veuillez entrer un email valide');
      return;
    }

    // Validation mot de passe
    if (!isValidPassword(password)) {
      setError('Le mot de passe doit contenir au moins 8 caractères, une lettre et un chiffre');
      return;
    }

    setIsLoading(true);

    const { error } = await signUp(email, password, prenom, nom);

    if (error) {
      if (error.message.includes('already registered')) {
        setError('Cet email est déjà utilisé');
      } else {
        setError('Erreur lors de l\'inscription. Veuillez réessayer.');
      }
      setIsLoading(false);
    } else {
      // Rediriger directement vers l'onboarding
      router.push('/onboarding/quiz');
    }
  };

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    const { error } = await signInWithGoogle();
    if (error) {
      setError('Erreur lors de la connexion avec Google');
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="bg-white border border-gray-200 p-8 pt-0">
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-2 -mt-8 -mb-6">
              <Image
                src="/logo.png"
                alt="Test Civique France"
                width={200}
                height={200}
                className="w-44 h-44 object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              Créer un compte
            </h1>
            <p className="text-gray-600">
              Commencez gratuitement avec 5 crédits offerts
            </p>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Bouton Google */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={isGoogleLoading}
            className="w-full py-3 px-4 border border-gray-300 bg-white text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-3 mb-6 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGoogleLoading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            )}
            Continuer avec Google
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">ou</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Prénom
                </label>
                <input
                  type="text"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  placeholder="Jean"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  placeholder="Dupont"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
                className={`w-full px-4 py-3 border ${
                  emailError ? 'border-red-500' : email && isValidEmail(email) ? 'border-green-500' : 'border-gray-300'
                } focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all`}
                placeholder="votre@email.fr"
                required
              />
              {emailError && (
                <p className="mt-1 text-xs text-red-500">{emailError}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full px-4 py-3 border ${
                  password && !isValidPassword(password) ? 'border-red-500' : password && isValidPassword(password) ? 'border-green-500' : 'border-gray-300'
                } focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all`}
                placeholder="••••••••"
                required
                minLength={8}
              />
              {/* Indicateurs de critères du mot de passe */}
              {password && (
                <div className="mt-2 space-y-1">
                  <div className="flex items-center gap-2 text-xs">
                    {passwordCriteria.minLength ? (
                      <Check className="w-3 h-3 text-green-500" />
                    ) : (
                      <X className="w-3 h-3 text-red-500" />
                    )}
                    <span className={passwordCriteria.minLength ? 'text-green-600' : 'text-red-500'}>
                      Minimum 8 caractères
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    {passwordCriteria.hasLetter ? (
                      <Check className="w-3 h-3 text-green-500" />
                    ) : (
                      <X className="w-3 h-3 text-red-500" />
                    )}
                    <span className={passwordCriteria.hasLetter ? 'text-green-600' : 'text-red-500'}>
                      Au moins une lettre
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    {passwordCriteria.hasNumber ? (
                      <Check className="w-3 h-3 text-green-500" />
                    ) : (
                      <X className="w-3 h-3 text-red-500" />
                    )}
                    <span className={passwordCriteria.hasNumber ? 'text-green-600' : 'text-red-500'}>
                      Au moins un chiffre
                    </span>
                  </div>
                </div>
              )}
              {!password && (
                <p className="mt-2 text-xs text-gray-500">
                  Minimum 8 caractères, une lettre et un chiffre
                </p>
              )}
            </div>

            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="accept-terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="w-4 h-4 mt-1 border-gray-300 focus:ring-primary-500"
                required
              />
              <label htmlFor="accept-terms" className="text-sm text-gray-700">
                J&apos;accepte les{' '}
                <button
                  type="button"
                  onClick={() => setShowCGU(true)}
                  className="text-primary-600 hover:text-primary-700 font-semibold underline"
                >
                  conditions d&apos;utilisation
                </button>
                {' '}et la{' '}
                <button
                  type="button"
                  onClick={() => setShowPolitique(true)}
                  className="text-primary-600 hover:text-primary-700 font-semibold underline"
                >
                  politique de confidentialité
                </button>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
              Créer mon compte
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            Déjà un compte?{' '}
            <Link
              href="/login"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Se connecter
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-gray-600 hover:text-gray-900 text-sm transition-colors"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>

      {/* Modals légaux */}
      <LegalModal
        isOpen={showCGU}
        onClose={() => setShowCGU(false)}
        title={conditionsUtilisation.title}
        lastUpdate={conditionsUtilisation.lastUpdate}
        sections={conditionsUtilisation.sections}
      />
      
      <LegalModal
        isOpen={showPolitique}
        onClose={() => setShowPolitique(false)}
        title={politiqueConfidentialite.title}
        lastUpdate={politiqueConfidentialite.lastUpdate}
        sections={politiqueConfidentialite.sections}
      />
    </div>
  );
}
