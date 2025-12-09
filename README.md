# 🇫🇷 Test Civique France

Plateforme d'apprentissage et de préparation à l'examen civique français.

## 🚀 Démarrage rapide

```bash
# Installation des dépendances
npm install

# Lancer en développement
npm run dev

# Build production
npm run build
```

## 📚 Documentation

Toute la documentation est disponible dans le dossier **[`docs/`](docs/)** :

- **[Guide de démarrage](docs/GUIDE_DEMARRAGE.md)** - Configuration complète du projet
- **[Audit de sécurité](docs/AUDIT_SITE_CIVIQUE.md)** - Analyse de sécurité et optimisations
- **[Sécurité Webhook Stripe](docs/SECURITE_WEBHOOK_STRIPE.md)** - Protection des webhooks
- **[Système d'examens](docs/SYSTEME_EXAMENS.md)** - Fonctionnement des 5 examens
- **[Configuration Stripe](docs/GUIDE_CONFIGURATION_STRIPE.md)** - Paiements et abonnements

👉 **[Voir l'index complet de la documentation](docs/README_DOCS.md)**

## 🛠️ Stack technique

- **Framework** : Next.js 14.2.33 (App Router, TypeScript)
- **Base de données** : Supabase (PostgreSQL)
- **Paiement** : Stripe
- **Styling** : Tailwind CSS
- **Déploiement** : Vercel

## 🔑 Variables d'environnement

Copier `.env.example` vers `.env.local` et remplir les valeurs :

```bash
cp .env.example .env.local
```

Variables nécessaires :
- Supabase (URL, clés anon et service)
- Stripe (clés publique, secrète, webhook secret)
- URL de l'application

## 📂 Structure du projet

```
testciviquefrance/
├── app/                # Pages Next.js (App Router)
├── components/         # Composants React
├── lib/               # Utilitaires, data, services
├── supabase/          # Scripts SQL et migrations
├── docs/              # 📚 Documentation complète
├── public/            # Assets statiques
└── scripts/           # Scripts d'optimisation
```

## 🚀 Déploiement

Le projet se déploie automatiquement sur Vercel à chaque push sur `main`.

Configuration requise sur Vercel :
- Ajouter toutes les variables d'environnement
- Configurer le webhook Stripe en production

## 📝 Licence

© 2025 Test Civique France. Tous droits réservés.
