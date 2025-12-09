# Test Civique France

Plateforme professionnelle de préparation au test civique français pour la naturalisation.

## 🚀 Technologies

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Design system professionnel
- **PWA** - Application Progressive Web App
- **Supabase** - Base de données et authentification
- **Stripe** - Paiements sécurisés

## 📋 Prérequis

- Node.js 18+
- npm ou yarn

## 🛠️ Installation

```bash
# Installer les dépendances
npm install

# Copier le fichier d'environnement
cp .env.example .env.local

# Configurer les variables d'environnement
# Modifier .env.local avec vos clés Supabase et Stripe
```

## 🏃 Développement

```bash
# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000
```

## 🏗️ Build Production

```bash
# Build l'application
npm run build

# Démarrer en production
npm start
```

## 📁 Structure du Projet

```
testciviquefrance/
├── app/                    # Pages Next.js (App Router)
│   ├── login/             # Page connexion
│   ├── signup/            # Page inscription
│   ├── offline/           # Page hors ligne (PWA)
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Landing page
├── components/            # Composants réutilisables
│   ├── layout/           # Header, Footer
│   └── landing/          # Hero, Features, Pricing
├── lib/                  # Utilitaires et helpers
├── public/               # Assets statiques
│   ├── icons/           # Icons PWA
│   └── manifest.json    # Manifest PWA
└── styles/              # Styles globaux
```

## 🎨 Design System

### Couleurs
- **Primary**: Bleu (#3B82F6)
- **Background**: Blanc (#FFFFFF)
- **Text**: Gris foncé (#111827)

### Règles de Design
- ❌ Pas d'emojis
- ✅ Angles droits privilégiés
- ✅ Border radius max 8px
- ✅ Fond blanc/gris clair
- ✅ Mobile-first responsive

## 📱 PWA Features

- ✅ Installation sur écran d'accueil
- ✅ Mode offline
- ✅ Cache intelligent
- ✅ Notifications push (à venir)

## 🔒 Variables d'Environnement

Voir `.env.example` pour la liste complète des variables requises.

## 📚 Documentation

Consulter `SPECIFICATIONS_TECHNIQUES.md` pour les détails complets de l'architecture et des spécifications.

## 🤝 Contribution

Ce projet est privé. Pour toute question, contacter l'équipe de développement.

## 📄 Licence

Propriétaire - Tous droits réservés
