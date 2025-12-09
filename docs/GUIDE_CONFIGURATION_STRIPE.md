# GUIDE DE CONFIGURATION STRIPE + SUPABASE
# ==========================================

## ÉTAPE 1 : Configuration Stripe Webhooks (LOCAL)

### 1. Installer Stripe CLI (si pas encore fait)
# Téléchargez depuis : https://stripe.com/docs/stripe-cli
# Ou avec Chocolatey : choco install stripe

### 2. Se connecter à Stripe
stripe login
# Cela ouvrira votre navigateur pour autoriser

### 3. Lancer le listener webhook LOCAL (dans un terminal séparé)
stripe listen --forward-to localhost:3000/api/webhook/stripe

# ⚠️ IMPORTANT : Copiez le "webhook signing secret" qui commence par "whsec_..."
# Il ressemble à : whsec_1234567890abcdefghijklmnopqrstuvwxyz
# Ajoutez-le dans votre .env.local :
# STRIPE_WEBHOOK_SECRET=whsec_...

### 4. Tester les webhooks
stripe trigger checkout.session.completed
# Vérifiez que vous recevez l'événement dans votre terminal


## ÉTAPE 2 : Récupérer la Service Role Key de Supabase

### 1. Allez sur : https://supabase.com/dashboard/project/exlwbyfxuhitctiwjech/settings/api

### 2. Dans la section "Project API keys", copiez la clé "service_role" (secret)
# ⚠️ ATTENTION : Cette clé donne un accès complet à votre base de données
# Ne la partagez JAMAIS et ne la commitez JAMAIS dans Git

### 3. Ajoutez-la dans votre .env.local :
# SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUz...

## ÉTAPE 3 : Démarrer l'application

### 1. Terminal 1 : Application Next.js
npm run dev

### 2. Terminal 2 : Listener Stripe Webhooks
stripe listen --forward-to localhost:3000/api/webhook/stripe

### 3. Testez un paiement
# Allez sur : http://localhost:3000/dashboard/credits
# Cliquez sur "Sélectionner" pour un plan
# Utilisez la carte test : 4242 4242 4242 4242
# Date : n'importe quelle date future
# CVC : n'importe quel nombre à 3 chiffres


## ÉTAPE 4 : Configuration Webhooks PRODUCTION (après déploiement)

### 1. Allez sur : https://dashboard.stripe.com/webhooks

### 2. Cliquez sur "Ajouter un endpoint"

### 3. Entrez l'URL de production :
# URL : https://www.testciviquefrance.fr/api/webhook/stripe

### 4. Sélectionnez ces événements :
# - checkout.session.completed
# - customer.subscription.updated
# - customer.subscription.deleted
# - invoice.paid
# - invoice.payment_failed

### 5. Copiez le "Signing secret" du webhook
# Ajoutez-le dans Vercel → Environment Variables :
# STRIPE_WEBHOOK_SECRET=whsec_...


## VÉRIFICATIONS IMPORTANTES

### ✅ Fichiers créés :
- [x] lib/stripe/plans.ts
- [x] app/api/webhook/stripe/route.ts
- [x] app/api/create-portal-session/route.ts
- [x] components/dashboard/ManageSubscriptionButton.tsx
- [x] supabase/update-profiles-stripe.sql

### ✅ Variables d'environnement (.env.local) :
- [x] NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
- [x] STRIPE_SECRET_KEY
- [ ] STRIPE_WEBHOOK_SECRET (à ajouter après "stripe listen")
- [ ] SUPABASE_SERVICE_ROLE_KEY (à récupérer sur Supabase)

### ✅ Supabase :
- [x] Script SQL exécuté (update-profiles-stripe.sql)
- [ ] Service Role Key récupérée et ajoutée dans .env.local

### ✅ Stripe Dashboard :
- [ ] Emails de factures activés
- [ ] Customer Portal activé
- [ ] Produits ajoutés au Customer Portal
- [ ] Webhooks configurés (local pour test, production après déploiement)
