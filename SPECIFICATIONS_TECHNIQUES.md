# Spécifications Techniques - Plateforme Test Civique France

## 🎯 Vue d'ensemble du Projet

Plateforme web professionnelle permettant aux étrangers de s'entraîner pour le test civique français. **Architecture PWA** avec monétisation par crédits et abonnements.

---

## 📊 Business Model (Analyse du Document)

### Offres Commerciales

#### 1. **Pack Gratuit "Je découvre"**
- ✅ Tous les cours gratuits en accès illimité
- ✅ 10 questions gratuites par jour
- ❌ Mini-tests bloqués
- ❌ Tests thématiques bloqués
- ❌ Examens blancs bloqués

#### 2. **Pack Crédits** (Revenu Principal)
- **Mini-test** (après cours) : 0.5 crédit
- **Test par domaine** (20 questions) : 1 crédit
- **Examen blanc complet** (40 questions) : 2 crédits
- **Révision intelligente** : 0.5 crédit/session

**Tarification Crédits :**
- 10 crédits → 4,99€
- 25 crédits → 9,99€ ⭐ (Choix majoritaire)
- 50 crédits → 17,99€
- 100 crédits → 29,99€

#### 3. **Abonnements Premium**
- 48h illimité → 7,99€
- 1 semaine → 13,99€
- 3 semaines → 24,99€

### Contenus Pédagogiques

**8 Domaines/Modules :**
1. Les valeurs de la République
2. Institutions françaises
3. Droits et devoirs
4. Histoire de France
5. Laïcité
6. Symboles de la République
7. Système judiciaire
8. Vie sociale & professionnelle en France

**Structure par module :**
- Texte simple (niveau A2)
- Illustrations
- Exemples réels
- Résumé en 5 points
- Mini-test de fin (0.5 crédit)

---

## 🏗️ Stack Technologique Optimale

### Framework Principal
**Next.js 14.2+ (App Router)**
- ✅ **SSR/SSG** pour SEO maximal
- ✅ **Server Components** pour performance
- ✅ **Image Optimization** native
- ✅ **Route Handlers** pour API
- ✅ **Metadata API** pour SEO dynamique
- ✅ **Incremental Static Regeneration (ISR)**

### PWA Configuration
**@ducanh2912/next-pwa** (meilleure alternative à next-pwa deprecated)
```bash
npm install @ducanh2912/next-pwa
```

**Fonctionnalités PWA obligatoires :**
- ✅ Offline mode pour révisions
- ✅ Installation sur écran d'accueil
- ✅ Notifications push (rappels révision)
- ✅ Cache intelligent des questions
- ✅ Service Worker optimisé

### Styling & UI
**Tailwind CSS 3.4+**
- Design system avec variables CSS
- Utilitaires personnalisés
- Configuration mobile-first
- **PAS de shadcn/ui** (trop de border-radius par défaut)
- Composants custom ultra-propres

### Base de Données & Auth
**Supabase** (fourni ultérieurement)
- PostgreSQL pour données
- Row Level Security (RLS)
- Auth avec JWT
- Storage pour images/vidéos
- Realtime pour statistiques

### Optimisation SEO
- **next-sitemap** pour sitemap.xml automatique
- **Metadata API** de Next.js 14
- **Schema.org** structured data
- **Open Graph** pour partages sociaux
- **Canonical URLs**
- **Robots.txt** optimisé

---

## 🎨 Design System Ultra-Professionnel

### Palette de Couleurs

```javascript
// tailwind.config.js
colors: {
  // Couleurs principales (ultra claires et professionnelles)
  primary: {
    50: '#EFF6FF',   // Bleu très clair
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6',  // Bleu principal
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
  },
  // Arrière-plans ultra clairs
  background: {
    DEFAULT: '#FFFFFF',    // Blanc pur
    light: '#F9FAFB',      // Gris très clair
    subtle: '#F3F4F6',     // Gris subtil
  },
  // Textes professionnels
  text: {
    primary: '#111827',    // Noir quasi pur
    secondary: '#4B5563',  // Gris foncé
    muted: '#6B7280',      // Gris moyen
  },
  // États de succès/erreur
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
}
```

### Typographie

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  display: ['Inter', 'sans-serif'],
}
fontSize: {
  'xs': ['0.75rem', { lineHeight: '1rem' }],
  'sm': ['0.875rem', { lineHeight: '1.25rem' }],
  'base': ['1rem', { lineHeight: '1.5rem' }],
  'lg': ['1.125rem', { lineHeight: '1.75rem' }],
  'xl': ['1.25rem', { lineHeight: '1.75rem' }],
  '2xl': ['1.5rem', { lineHeight: '2rem' }],
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  '5xl': ['3rem', { lineHeight: '1' }],
}
```

### Bordures et Espacements

```javascript
borderRadius: {
  'none': '0',
  'sm': '0.125rem',    // 2px - angles légèrement adoucis
  DEFAULT: '0.25rem',  // 4px - usage principal
  'md': '0.375rem',    // 6px - usage rare
  'lg': '0.5rem',      // 8px - maximum autorisé
  // PAS de xl, 2xl, 3xl, full
}

spacing: {
  // Système d'espacement cohérent (4px base)
  '0': '0px',
  '1': '0.25rem',   // 4px
  '2': '0.5rem',    // 8px
  '3': '0.75rem',   // 12px
  '4': '1rem',      // 16px
  '5': '1.25rem',   // 20px
  '6': '1.5rem',    // 24px
  '8': '2rem',      // 32px
  '10': '2.5rem',   // 40px
  '12': '3rem',     // 48px
  '16': '4rem',     // 64px
  '20': '5rem',     // 80px
  '24': '6rem',     // 96px
}
```

### Composants de Base

#### Boutons (3 variantes)
```jsx
// Bouton primaire
<button className="px-6 py-3 bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors duration-200 shadow-sm">
  Commencer
</button>

// Bouton secondaire
<button className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200">
  En savoir plus
</button>

// Bouton outline
<button className="px-6 py-3 border border-primary-600 text-primary-600 font-medium hover:bg-primary-50 transition-colors duration-200">
  Connexion
</button>
```

#### Cards
```jsx
<div className="bg-white border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
  {/* Contenu */}
</div>
```

#### Inputs
```jsx
<input 
  type="text"
  className="w-full px-4 py-3 border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-200"
  placeholder="Email"
/>
```

---

## 📱 Architecture Responsive (Mobile-First)

### Breakpoints Tailwind
```javascript
screens: {
  'sm': '640px',   // Mobile large
  'md': '768px',   // Tablette
  'lg': '1024px',  // Desktop petit
  'xl': '1280px',  // Desktop
  '2xl': '1536px', // Desktop large
}
```

### Règles Mobile-First
1. **Design d'abord pour 375px** (iPhone SE)
2. **Touch targets minimum 44x44px**
3. **Police minimum 16px** (évite zoom iOS)
4. **Spacing généreux** sur mobile
5. **Navigation bottom-sheet** pour mobile
6. **Sticky header** avec scroll collapse

### Grille Responsive
```jsx
// Layout principal
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
  {/* Cards */}
</div>

// Container
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Contenu */}
</div>
```

---

## 🏠 Landing Page - Structure Détaillée

### Section Hero
```jsx
<section className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Colonne gauche - Texte */}
      <div className="text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Réussissez votre test civique français
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
          Préparez-vous efficacement avec des centaines de questions officielles, 
          des cours complets et des examens blancs.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="px-8 py-4 bg-primary-600 text-white font-semibold text-lg hover:bg-primary-700 transition-colors shadow-lg">
            Commencer gratuitement
          </button>
          <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-colors">
            Voir les cours
          </button>
        </div>
        
        {/* Social Proof */}
        <div className="mt-12 flex items-center gap-8 justify-center lg:justify-start text-sm text-gray-600">
          <div>
            <div className="text-2xl font-bold text-gray-900">10,000+</div>
            <div>Utilisateurs</div>
          </div>
          <div className="h-12 w-px bg-gray-300"></div>
          <div>
            <div className="text-2xl font-bold text-gray-900">95%</div>
            <div>Taux de réussite</div>
          </div>
        </div>
      </div>
      
      {/* Colonne droite - Visuel */}
      <div className="relative">
        {/* Mockup ou illustration */}
      </div>
    </div>
  </div>
</section>
```

### Section Features (3 colonnes)
```jsx
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Tout pour réussir votre test
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Une plateforme complète conçue pour maximiser vos chances de succès
      </p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8">
      {/* Feature 1 */}
      <div className="bg-gray-50 p-8 border border-gray-200">
        <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mb-6">
          {/* Icon SVG */}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Cours complets
        </h3>
        <p className="text-gray-600 leading-relaxed">
          8 modules couvrant tous les domaines du test civique, 
          avec des explications claires et des exemples concrets.
        </p>
      </div>
      
      {/* Feature 2 */}
      <div className="bg-gray-50 p-8 border border-gray-200">
        <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mb-6">
          {/* Icon SVG */}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Examens blancs
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Entraînez-vous dans les conditions réelles avec nos examens blancs 
          de 40 questions basés sur les questions officielles.
        </p>
      </div>
      
      {/* Feature 3 */}
      <div className="bg-gray-50 p-8 border border-gray-200">
        <div className="w-12 h-12 bg-primary-100 flex items-center justify-center mb-6">
          {/* Icon SVG */}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          Révision intelligente
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Notre algorithme identifie vos lacunes et vous propose 
          des révisions ciblées pour progresser rapidement.
        </p>
      </div>
    </div>
  </div>
</section>
```

### Section Pricing
```jsx
<section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Choisissez votre formule
      </h2>
      <p className="text-lg text-gray-600">
        Commencez gratuitement, payez seulement ce dont vous avez besoin
      </p>
    </div>
    
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {/* Card Gratuit */}
      <div className="bg-white border-2 border-gray-200 p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Gratuit
        </h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">0€</span>
        </div>
        <ul className="space-y-3 mb-8 text-gray-600">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-success mt-0.5" fill="currentColor">...</svg>
            <span>Tous les cours gratuits</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-success mt-0.5" fill="currentColor">...</svg>
            <span>10 questions par jour</span>
          </li>
        </ul>
        <button className="w-full py-3 border-2 border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
          Commencer
        </button>
      </div>
      
      {/* Card Crédits - POPULAIRE */}
      <div className="bg-white border-2 border-primary-500 p-8 relative shadow-lg">
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-500 text-white px-4 py-1 text-sm font-medium">
          POPULAIRE
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Pack Crédits
        </h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">9,99€</span>
          <span className="text-gray-600 ml-2">25 crédits</span>
        </div>
        <ul className="space-y-3 mb-8 text-gray-600">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-success mt-0.5" fill="currentColor">...</svg>
            <span>Tests thématiques illimités</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-success mt-0.5" fill="currentColor">...</svg>
            <span>12 examens blancs</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-success mt-0.5" fill="currentColor">...</svg>
            <span>Révision intelligente</span>
          </li>
        </ul>
        <button className="w-full py-3 bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors">
          Acheter
        </button>
      </div>
      
      {/* Card Premium */}
      <div className="bg-white border-2 border-gray-200 p-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Premium
        </h3>
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900">13,99€</span>
          <span className="text-gray-600 ml-2">/ semaine</span>
        </div>
        <ul className="space-y-3 mb-8 text-gray-600">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-success mt-0.5" fill="currentColor">...</svg>
            <span>Tests illimités</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-success mt-0.5" fill="currentColor">...</svg>
            <span>Corrigés détaillés</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-success mt-0.5" fill="currentColor">...</svg>
            <span>Statistiques avancées</span>
          </li>
        </ul>
        <button className="w-full py-3 border-2 border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors">
          Choisir Premium
        </button>
      </div>
    </div>
  </div>
</section>
```

---

## 🧭 Header Navigation

```jsx
<header className="sticky top-0 z-50 bg-white border-b border-gray-200">
  <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary-600"></div>
        <span className="text-xl font-bold text-gray-900">
          Test Civique France
        </span>
      </div>
      
      {/* Navigation desktop */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
          Cours
        </a>
        <a href="#" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
          Tests
        </a>
        <a href="#" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
          Tarifs
        </a>
        <a href="#" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
          À propos
        </a>
      </div>
      
      {/* Auth buttons */}
      <div className="hidden md:flex items-center gap-4">
        <button className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors">
          Connexion
        </button>
        <button className="px-6 py-2 bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors">
          Inscription
        </button>
      </div>
      
      {/* Mobile menu button */}
      <button className="md:hidden p-2 text-gray-700">
        {/* Hamburger icon */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </nav>
</header>
```

---

## 🔐 Pages Authentification

### Page Login
```jsx
// app/login/page.tsx
export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white border border-gray-200 p-8">
          {/* Logo centré */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Connexion
            </h1>
            <p className="text-gray-600">
              Accédez à votre espace d'entraînement
            </p>
          </div>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                placeholder="votre@email.fr"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-700">
                <input type="checkbox" className="w-4 h-4" />
                <span>Se souvenir de moi</span>
              </label>
              <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                Mot de passe oublié?
              </a>
            </div>
            
            <button className="w-full py-3 bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors">
              Se connecter
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm text-gray-600">
            Pas encore de compte?{' '}
            <a href="/signup" className="text-primary-600 hover:text-primary-700 font-medium">
              Créer un compte
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
```

### Page Inscription
```jsx
// app/signup/page.tsx
export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full">
        <div className="bg-white border border-gray-200 p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Créer un compte
            </h1>
            <p className="text-gray-600">
              Commencez gratuitement dès aujourd'hui
            </p>
          </div>
          
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prénom
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                placeholder="Jean"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                placeholder="Dupont"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                placeholder="votre@email.fr"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                placeholder="••••••••"
              />
              <p className="mt-2 text-xs text-gray-500">
                Minimum 8 caractères
              </p>
            </div>
            
            <div className="flex items-start gap-2">
              <input type="checkbox" className="w-4 h-4 mt-1" required />
              <label className="text-sm text-gray-700">
                J'accepte les{' '}
                <a href="#" className="text-primary-600 hover:text-primary-700">
                  conditions d'utilisation
                </a>
                {' '}et la{' '}
                <a href="#" className="text-primary-600 hover:text-primary-700">
                  politique de confidentialité
                </a>
              </label>
            </div>
            
            <button className="w-full py-3 bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors">
              Créer mon compte
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm text-gray-600">
            Vous avez déjà un compte?{' '}
            <a href="/login" className="text-primary-600 hover:text-primary-700 font-medium">
              Se connecter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## 📁 Structure des Fichiers Next.js

```
testciviquefrance/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── signup/
│   │       └── page.tsx
│   ├── (dashboard)/
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── cours/
│   │   │   ├── page.tsx
│   │   │   └── [domaine]/
│   │   │       └── page.tsx
│   │   ├── tests/
│   │   │   ├── page.tsx
│   │   │   ├── mini-test/[id]/page.tsx
│   │   │   ├── test-domaine/[id]/page.tsx
│   │   │   └── examen-blanc/[id]/page.tsx
│   │   ├── revision/
│   │   │   └── page.tsx
│   │   └── credits/
│   │       └── page.tsx
│   ├── api/
│   │   ├── auth/
│   │   │   └── [...nextauth]/route.ts
│   │   ├── credits/
│   │   │   └── route.ts
│   │   ├── questions/
│   │   │   └── route.ts
│   │   └── stats/
│   │       └── route.ts
│   ├── layout.tsx
│   ├── page.tsx (Landing Page)
│   ├── not-found.tsx
│   └── error.tsx
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Input.tsx
│   │   ├── Modal.tsx
│   │   └── Badge.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Sidebar.tsx
│   │   └── MobileNav.tsx
│   ├── landing/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Pricing.tsx
│   │   ├── Testimonials.tsx
│   │   └── FAQ.tsx
│   └── dashboard/
│       ├── StatsCard.tsx
│       ├── ProgressBar.tsx
│       └── QuestionCard.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   ├── server.ts
│   │   └── types.ts
│   ├── utils/
│   │   ├── cn.ts
│   │   ├── credits.ts
│   │   └── questions.ts
│   └── hooks/
│       ├── useUser.ts
│       ├── useCredits.ts
│       └── useQuestions.ts
├── public/
│   ├── icons/
│   │   ├── icon-192x192.png
│   │   ├── icon-512x512.png
│   │   └── favicon.ico
│   ├── images/
│   └── manifest.json
├── styles/
│   └── globals.css
├── .env.local
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## ⚙️ Configuration Next.js + PWA

### next.config.js
```javascript
const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  sw: 'sw.js',
  fallbacks: {
    document: '/offline',
  },
  workboxOptions: {
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts',
          expiration: {
            maxEntries: 4,
            maxAgeSeconds: 365 * 24 * 60 * 60, // 1 an
          },
        },
      },
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg|gif|webp)$/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 64,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 30 jours
          },
        },
      },
      {
        urlPattern: /^https:\/\/.*\.supabase\.co\/rest\/.*/i,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'supabase-api',
          networkTimeoutSeconds: 5,
          expiration: {
            maxEntries: 50,
            maxAgeSeconds: 5 * 60, // 5 minutes
          },
        },
      },
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['*.supabase.co'],
    formats: ['image/avif', 'image/webp'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = withPWA(nextConfig);
```

### public/manifest.json
```json
{
  "name": "Test Civique France - Préparation Examen",
  "short_name": "Test Civique",
  "description": "Préparez-vous efficacement pour le test civique français avec des cours complets et des examens blancs",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#FFFFFF",
  "theme_color": "#3B82F6",
  "orientation": "portrait-primary",
  "categories": ["education", "productivity"],
  "lang": "fr",
  "dir": "ltr",
  "icons": [
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ],
  "screenshots": [
    {
      "src": "/screenshots/mobile-1.png",
      "sizes": "750x1334",
      "type": "image/png"
    }
  ],
  "shortcuts": [
    {
      "name": "Commencer un test",
      "short_name": "Test",
      "description": "Lancer un nouveau test",
      "url": "/tests",
      "icons": [{ "src": "/icons/test-icon.png", "sizes": "96x96" }]
    },
    {
      "name": "Mes cours",
      "short_name": "Cours",
      "url": "/cours",
      "icons": [{ "src": "/icons/cours-icon.png", "sizes": "96x96" }]
    }
  ]
}
```

---

## 🎯 SEO Configuration

### app/layout.tsx - Metadata de base
```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://testciviquefrance.com'),
  title: {
    default: 'Test Civique France - Préparation Examen Naturalisation',
    template: '%s | Test Civique France',
  },
  description: 'Préparez-vous efficacement pour le test civique français avec 800+ questions officielles, 8 modules de cours et des examens blancs. Taux de réussite de 95%.',
  keywords: [
    'test civique',
    'naturalisation française',
    'examen civique',
    'préparation test civique',
    'questions civiques',
    'devenir français',
    'test naturalisation',
    'examen nationalité française',
  ],
  authors: [{ name: 'Test Civique France' }],
  creator: 'Test Civique France',
  publisher: 'Test Civique France',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://testciviquefrance.com',
    title: 'Test Civique France - Préparation Examen Naturalisation',
    description: 'Préparez-vous efficacement pour le test civique français avec 800+ questions officielles, 8 modules de cours et des examens blancs.',
    siteName: 'Test Civique France',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Test Civique France',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Civique France - Préparation Examen Naturalisation',
    description: 'Préparez-vous efficacement pour le test civique français',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-google-search-console',
  },
};
```

### Structured Data (JSON-LD)
```typescript
// components/StructuredData.tsx
export function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Test Civique France',
    description: 'Plateforme de préparation au test civique français',
    url: 'https://testciviquefrance.com',
    sameAs: [
      'https://facebook.com/testciviquefrance',
      'https://twitter.com/testciviquefr',
    ],
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: '0',
      highPrice: '29.99',
      offerCount: '5',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1247',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
```

### next-sitemap.config.js
```javascript
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://testciviquefrance.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*', '/dashboard/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/dashboard/'],
      },
    ],
  },
  transform: async (config, path) => {
    // Priorités SEO
    let priority = 0.7;
    let changefreq = 'weekly';

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/cours')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.startsWith('/tests')) {
      priority = 0.8;
      changefreq = 'daily';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
};
```

---

## 📊 Optimisations Performance

### Core Web Vitals Targets
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Techniques d'optimisation

1. **Images Next.js**
```jsx
import Image from 'next/image';

<Image
  src="/hero-image.png"
  alt="Description"
  width={800}
  height={600}
  priority // Pour l'image hero
  placeholder="blur"
  blurDataURL="data:image/..."
/>
```

2. **Lazy Loading Components**
```typescript
import dynamic from 'next/dynamic';

const TestimonialSection = dynamic(() => import('@/components/landing/Testimonials'), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
  ssr: false, // Si non nécessaire au SSR
});
```

3. **Font Optimization**
```typescript
// app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
```

---

## 🔒 Sécurité & Bonnes Pratiques

### Variables d'environnement (.env.local)
```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Stripe (paiements)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Rate Limiting API Routes
```typescript
// lib/rate-limit.ts
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, '10 s'),
  analytics: true,
});

export async function checkRateLimit(identifier: string) {
  const { success, limit, reset, remaining } = await ratelimit.limit(identifier);
  return { success, limit, reset, remaining };
}
```

---

## 📱 PWA Best Practices

### Service Worker Events
```javascript
// public/sw.js (custom additions)
self.addEventListener('push', (event) => {
  const data = event.data.json();
  
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    data: {
      url: data.url,
    },
  });
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
```

### Offline Page
```jsx
// app/offline/page.tsx
export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 flex items-center justify-center">
          {/* Offline icon */}
          <svg className="w-12 h-12 text-gray-400">...</svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Vous êtes hors ligne
        </h1>
        <p className="text-gray-600 mb-6">
          Vérifiez votre connexion internet et réessayez
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
        >
          Réessayer
        </button>
      </div>
    </div>
  );
}
```

---

## 🎨 Librairies UI Recommandées

### Icons
```bash
npm install lucide-react
```
**Pourquoi**: Icons modernes, tree-shakeable, cohérents

### Animations
```bash
npm install framer-motion
```
**Usage**: Transitions fluides, animations micro-interactions

### Forms
```bash
npm install react-hook-form zod
```
**Validation**: Type-safe avec Zod schema

### Charts (Statistiques)
```bash
npm install recharts
```
**Dashboard**: Graphiques progressions utilisateur

---

## 📦 Package.json Complet

```json
{
  "name": "test-civique-france",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "postbuild": "next-sitemap"
  },
  "dependencies": {
    "@ducanh2912/next-pwa": "^10.2.0",
    "@supabase/supabase-js": "^2.39.0",
    "@supabase/auth-helpers-nextjs": "^0.9.0",
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.344.0",
    "react-hook-form": "^7.50.0",
    "zod": "^3.22.0",
    "recharts": "^2.12.0",
    "stripe": "^14.0.0",
    "@stripe/stripe-js": "^3.0.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "@types/node": "^20.11.0",
    "@types/react": "^18.3.0",
    "@types/react-dom": "^18.3.0",
    "typescript": "^5.3.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "eslint": "^8.57.0",
    "eslint-config-next": "^14.2.0",
    "next-sitemap": "^4.2.0"
  }
}
```

---

## 🚀 Commandes de Démarrage

```bash
# Installation
npm install

# Développement
npm run dev

# Build production
npm run build

# Démarrage production
npm start

# Génération sitemap (après build)
npm run postbuild
```

---

## ✅ Checklist de Qualité

### Design
- [ ] Palette couleurs ultra claire définie
- [ ] Typography scale cohérente
- [ ] Spacing system 4px base
- [ ] Border radius max 8px
- [ ] Pas d'emojis
- [ ] Angles droits privilégiés

### Performance
- [ ] Core Web Vitals < seuils Google
- [ ] Images optimisées (WebP/AVIF)
- [ ] Lazy loading implémenté
- [ ] Code splitting automatique
- [ ] Bundle size analysé

### SEO
- [ ] Metadata complètes
- [ ] Structured data JSON-LD
- [ ] Sitemap généré
- [ ] Robots.txt configuré
- [ ] Canonical URLs
- [ ] Open Graph tags

### PWA
- [ ] Manifest.json complet
- [ ] Service Worker fonctionnel
- [ ] Offline page
- [ ] Icons toutes tailles
- [ ] Installable

### Responsive
- [ ] Mobile-first design
- [ ] Breakpoints cohérents
- [ ] Touch targets 44px min
- [ ] Fonts 16px min mobile
- [ ] Testé iOS/Android

### Accessibilité
- [ ] Contraste WCAG AA minimum
- [ ] Navigation clavier
- [ ] ARIA labels
- [ ] Focus states visibles
- [ ] Alt texts images

---

## 🎓 Architecture Base de Données (Supabase)

### Tables Principales

```sql
-- Utilisateurs (géré par Supabase Auth)
-- auth.users

-- Profils utilisateurs
CREATE TABLE profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  credits INTEGER DEFAULT 0,
  free_questions_today INTEGER DEFAULT 10,
  last_free_reset TIMESTAMP WITH TIME ZONE,
  subscription_type TEXT, -- null, 'premium_48h', 'premium_week', 'premium_month'
  subscription_ends_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Domaines de cours
CREATE TABLE domaines (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  order_index INTEGER,
  icon_name TEXT
);

-- Questions
CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  domaine_id INTEGER REFERENCES domaines(id),
  question_text TEXT NOT NULL,
  option_a TEXT NOT NULL,
  option_b TEXT NOT NULL,
  option_c TEXT NOT NULL,
  option_d TEXT NOT NULL,
  correct_answer CHAR(1) NOT NULL, -- 'a', 'b', 'c', 'd'
  explanation TEXT,
  difficulty TEXT, -- 'facile', 'moyen', 'difficile'
  is_official BOOLEAN DEFAULT false
);

-- Résultats tests
CREATE TABLE test_results (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  test_type TEXT NOT NULL, -- 'mini', 'domaine', 'examen_blanc', 'revision'
  domaine_id INTEGER REFERENCES domaines(id),
  score INTEGER NOT NULL,
  total_questions INTEGER NOT NULL,
  time_spent INTEGER, -- secondes
  credits_used DECIMAL(3,1),
  completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Réponses individuelles
CREATE TABLE user_answers (
  id SERIAL PRIMARY KEY,
  test_result_id INTEGER REFERENCES test_results(id),
  question_id INTEGER REFERENCES questions(id),
  user_answer CHAR(1),
  is_correct BOOLEAN,
  answered_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Transactions crédits
CREATE TABLE credit_transactions (
  id SERIAL PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  amount DECIMAL(5,2),
  transaction_type TEXT, -- 'purchase', 'spent', 'refund'
  credits_quantity INTEGER,
  stripe_payment_id TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

---

## 🎯 Prochaines Étapes (Post-Landing)

1. **Dashboard utilisateur**
   - Statistiques progression
   - Historique tests
   - Gestion crédits

2. **Système de questions**
   - Algorithme révision intelligente
   - Timer examens blancs
   - Correction détaillée

3. **Paiements Stripe**
   - Webhooks
   - Gestion abonnements
   - Refunds

4. **Admin Panel**
   - Gestion questions
   - Analytics
   - Modération

---

## 📝 Notes Importantes pour Claude Opus

### Priorités d'implémentation
1. ✅ **Structure Next.js 14 App Router**
2. ✅ **Tailwind config ultra-professionnelle**
3. ✅ **Landing page complète responsive**
4. ✅ **Header + Footer navigation**
5. ✅ **Pages Login/Signup UI uniquement**
6. ⏳ **Intégration Supabase** (attendre credentials)
7. ⏳ **Dashboard** (après auth)
8. ⏳ **Système tests** (après dashboard)

### Design Rules STRICTES
- ❌ **JAMAIS** d'emojis dans l'UI
- ❌ **PAS** de border-radius > 8px
- ❌ **PAS** de couleurs vives/flashy
- ✅ **TOUJOURS** fond blanc ou gris ultra clair
- ✅ **TOUJOURS** angles droits privilégiés
- ✅ **TOUJOURS** responsive mobile-first
- ✅ **TOUJOURS** espacement généreux

### Performance Rules
- Images: Next Image component obligatoire
- Fonts: next/font Google Fonts
- Icons: Lucide React (tree-shakeable)
- Code splitting: dynamic imports
- API calls: Server Components quand possible

### SEO Non-Négociables
- Metadata complètes chaque page
- Structured data JSON-LD
- Canonical URLs
- Alt texts images
- Semantic HTML5

---

**Ce document est votre référence absolue. Suivez-le à la lettre pour créer une plateforme ultra-professionnelle qui convertit et scale.**
