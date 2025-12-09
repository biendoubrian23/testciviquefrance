# 🔔 GUIDE COMPLET : CONFIGURATION WEBHOOKS STRIPE

## 🏠 WEBHOOKS EN LOCAL (Pour tester sur votre ordinateur)

### Étape 1 : Installer Stripe CLI

**Option 1 - Téléchargement direct :**
1. Allez sur : https://github.com/stripe/stripe-cli/releases/latest
2. Téléchargez le fichier pour Windows
3. Extrayez le fichier `stripe.exe`
4. Déplacez-le dans un dossier (ex: C:\stripe\)
5. Ajoutez ce dossier au PATH de Windows

**Option 2 - Avec Chocolatey (plus simple) :**
```powershell
choco install stripe-cli
```

### Étape 2 : Se connecter à Stripe

Ouvrez PowerShell et tapez :
```powershell
stripe login
```

Cela ouvrira votre navigateur. Cliquez sur "Allow access" pour autoriser.

### Étape 3 : Lancer le listener (IMPORTANT !)

**Dans un NOUVEAU terminal PowerShell** (gardez-le ouvert), tapez :

```powershell
cd X:\MesApplis\BiendouCorp\testciviquefrance
stripe listen --forward-to localhost:3000/api/webhook/stripe
```

**Vous allez voir quelque chose comme :**
```
> Ready! You are using Stripe API Version [2025-02-24]. Your webhook signing secret is whsec_1234567890abcdefghijklmnopqrstuvwxyz (^C to quit)
```

### ⚠️ IMPORTANT : Copiez le "webhook signing secret"

Le secret ressemble à : `whsec_1234567890abcdefghijklmnopqrstuvwxyz`

**Ajoutez-le dans votre fichier `.env.local` :**
```env
STRIPE_WEBHOOK_SECRET=whsec_1234567890abcdefghijklmnopqrstuvwxyz
```

### Étape 4 : Tester

Dans un AUTRE terminal, lancez votre application :
```powershell
npm run dev
```

Maintenant vous avez :
- **Terminal 1** : stripe listen (écoute les événements)
- **Terminal 2** : npm run dev (votre application)

---

## 🌐 WEBHOOKS EN PRODUCTION (Après déploiement sur Vercel)

### Étape 1 : Aller dans Stripe Dashboard

1. Connectez-vous à : https://dashboard.stripe.com
2. **IMPORTANT : Passez en mode "Test" (bouton en haut à droite)**
3. Allez dans **Developers** → **Webhooks**

### Étape 2 : Ajouter un endpoint

1. Cliquez sur **"Add endpoint"** (ou "Ajouter un endpoint")

2. **Entrez l'URL :**
   ```
   https://www.testciviquefrance.fr/api/webhook/stripe
   ```

3. **Dans "Events to send", sélectionnez ces événements :**
   - ✅ `checkout.session.completed`
   - ✅ `customer.subscription.created`
   - ✅ `customer.subscription.updated`
   - ✅ `customer.subscription.deleted`
   - ✅ `invoice.paid`
   - ✅ `invoice.payment_failed`

4. Cliquez sur **"Add endpoint"**

### Étape 3 : Récupérer le Signing Secret

1. Cliquez sur votre webhook nouvellement créé
2. Dans la section **"Signing secret"**, cliquez sur "Reveal"
3. Copiez le secret (commence par `whsec_...`)

### Étape 4 : Ajouter le secret dans Vercel

1. Allez sur : https://vercel.com/dashboard
2. Sélectionnez votre projet **testciviquefrance**
3. Allez dans **Settings** → **Environment Variables**
4. Ajoutez :
   - **Name:** `STRIPE_WEBHOOK_SECRET`
   - **Value:** `whsec_...` (le secret que vous avez copié)
   - **Environments:** Cochez **Production**, **Preview**, et **Development**
5. Cliquez sur **Save**

### Étape 5 : Redéployer

Faites un commit et push pour redéployer :
```powershell
git add .
git commit -m "feat: Configuration webhooks Stripe production"
git push
```

---

## 🧪 TESTER LES WEBHOOKS

### En local :

Dans le terminal où tourne `stripe listen`, vous devriez voir les événements arriver en temps réel.

Pour simuler un paiement :
```powershell
stripe trigger checkout.session.completed
```

### En production :

1. Allez sur votre site : https://www.testciviquefrance.fr/dashboard/credits
2. Cliquez sur "Sélectionner" pour un plan
3. Utilisez la carte de test : `4242 4242 4242 4242`
4. Vérifiez dans Stripe Dashboard → Webhooks que l'événement a été envoyé avec succès

---

## ✅ CHECKLIST DE VÉRIFICATION

### Environnement LOCAL :
- [ ] Stripe CLI installé
- [ ] `stripe login` effectué
- [ ] `stripe listen` en cours d'exécution
- [ ] `STRIPE_WEBHOOK_SECRET` ajouté dans `.env.local`
- [ ] `npm run dev` en cours d'exécution
- [ ] Test de paiement réussi

### Environnement PRODUCTION :
- [ ] Webhook créé dans Stripe Dashboard
- [ ] URL pointant vers votre domaine Vercel
- [ ] 6 événements sélectionnés
- [ ] Signing secret ajouté dans Vercel Environment Variables
- [ ] Application redéployée
- [ ] Test de paiement réussi en production

---

## 🆘 PROBLÈMES COURANTS

### "stripe: command not found"
→ Stripe CLI n'est pas installé ou pas dans le PATH

### "Failed to connect to Stripe"
→ Vérifiez votre connexion internet et refaites `stripe login`

### "Webhook signature verification failed"
→ Le `STRIPE_WEBHOOK_SECRET` dans `.env.local` ne correspond pas au secret du listener

### "Cannot POST /api/webhook/stripe"
→ Vérifiez que votre application Next.js est bien lancée sur le port 3000

### Les événements n'arrivent pas en production
→ Vérifiez l'URL du webhook dans Stripe Dashboard
→ Vérifiez que le secret est bien dans Vercel Environment Variables
→ Vérifiez les logs Vercel pour voir les erreurs
