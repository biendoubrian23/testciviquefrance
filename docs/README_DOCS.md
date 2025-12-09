# 📚 Documentation - Test Civique France

Ce dossier contient toute la documentation technique et fonctionnelle du projet.

## 📋 Index des fichiers

### 🚀 Guides de démarrage
- **[GUIDE_DEMARRAGE.md](GUIDE_DEMARRAGE.md)** - Guide de démarrage complet du projet
- **[DEMARRAGE_RAPIDE.md](DEMARRAGE_RAPIDE.md)** - Guide de démarrage rapide
- **[INSTALLATION_REUSSIE.md](INSTALLATION_REUSSIE.md)** - Confirmation d'installation
- **[SUCCESS.md](SUCCESS.md)** - Guide de succès

### 💳 Stripe & Paiements
- **[GUIDE_CONFIGURATION_STRIPE.md](GUIDE_CONFIGURATION_STRIPE.md)** - Configuration complète de Stripe
- **[GUIDE_WEBHOOKS_STRIPE.md](GUIDE_WEBHOOKS_STRIPE.md)** - Configuration des webhooks
- **[SECURITE_WEBHOOK_STRIPE.md](SECURITE_WEBHOOK_STRIPE.md)** - ⭐ Sécurité webhook (signature + rate-limit)
- **[VERIFICATION_PAIEMENT.md](VERIFICATION_PAIEMENT.md)** - Vérification après paiement
- **[FACTURES_STRIPE.md](FACTURES_STRIPE.md)** - Gestion des factures
- **[PACK_EXAMEN_CREDITS.md](PACK_EXAMEN_CREDITS.md)** - Système de crédits
- **[ATTRIBUTS_BDD_PAIEMENTS.md](ATTRIBUTS_BDD_PAIEMENTS.md)** - Schéma base de données paiements
- **[STRIPE_GUIDE.txt](STRIPE_GUIDE.txt)** - Guide Stripe (texte brut)

### 🎓 Examens blancs
- **[SYSTEME_EXAMENS.md](SYSTEME_EXAMENS.md)** - Système complet des 5 examens
- **[GUIDE_MULTI_EXAMENS.md](GUIDE_MULTI_EXAMENS.md)** - Guide multi-examens

### 🔍 Audit & Spécifications
- **[AUDIT_SITE_CIVIQUE.md](AUDIT_SITE_CIVIQUE.md)** - ⭐ Audit ultra-détaillé du site (sécurité, optimisations, failles)
- **[SPECIFICATIONS_TECHNIQUES.md](SPECIFICATIONS_TECHNIQUES.md)** - Spécifications techniques
- **[DIAGNOSTIC_PROBLEMES.md](DIAGNOSTIC_PROBLEMES.md)** - Diagnostic des problèmes

### 📖 Contenu pédagogique
- **[RÉFÉRENTIEL DE L'EXAMEN CIVIQUE.txt](RÉFÉRENTIEL%20DE%20L'EXAMEN%20CIVIQUE.txt)** - Référentiel officiel
- **[Principesetvaleursrepublique.txt](Principesetvaleursrepublique.txt)** - Principes et valeurs
- **[symbolesdelafrance.txt](symbolesdelafrance.txt)** - Symboles de la France
- **[autreReferentiel.txt](autreReferentiel.txt)** - Autre référentiel

### 📝 Autres
- **[README.md](README.md)** - Documentation principale
- **[INDEX_FICHIERS.md](INDEX_FICHIERS.md)** - Index des fichiers (ancien)
- **[RECAPITULATIF.md](RECAPITULATIF.md)** - Récapitulatif

### 🧪 Fichiers de test (archivés)
- **[execute-query.js](execute-query.js)** - Script de test requêtes
- **[test-stripe-config.js](test-stripe-config.js)** - Test config Stripe
- **[verify-payment.js](verify-payment.js)** - Vérification paiement

---

## 🔑 Fichiers clés à consulter en priorité

1. **[AUDIT_SITE_CIVIQUE.md](AUDIT_SITE_CIVIQUE.md)** - Pour comprendre la sécurité et les optimisations
2. **[SECURITE_WEBHOOK_STRIPE.md](SECURITE_WEBHOOK_STRIPE.md)** - Pour la protection des webhooks
3. **[SYSTEME_EXAMENS.md](SYSTEME_EXAMENS.md)** - Pour le fonctionnement des examens
4. **[GUIDE_DEMARRAGE.md](GUIDE_DEMARRAGE.md)** - Pour démarrer le projet

---

## 📂 Organisation du projet

```
testciviquefrance/
├── docs/                    # 📚 Documentation (ce dossier)
├── app/                     # Pages Next.js (App Router)
├── components/              # Composants React réutilisables
├── lib/                     # Utilitaires, data, Stripe, Supabase
├── supabase/                # Scripts SQL et migrations
├── public/                  # Assets publics (images, icônes)
├── scripts/                 # Scripts d'optimisation
└── types/                   # Types TypeScript
```

---

*Documentation mise à jour le 09/12/2025*
