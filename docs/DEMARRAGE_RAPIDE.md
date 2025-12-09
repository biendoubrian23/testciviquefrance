# 🚀 GUIDE DE DÉMARRAGE RAPIDE - STRIPE + SUPABASE

## ✅ CE QUI EST DÉJÀ CONFIGURÉ
- Clés Stripe (publique + secrète)
- Clés Supabase (URL + Anon + Service Role)
- Base de données Supabase mise à jour
- Code de l'application prêt

## 🔴 CE QU'IL FAUT FAIRE MAINTENANT (3 ÉTAPES)

### ÉTAPE 1 : Installer Stripe CLI

**Option facile (Chocolatey) :**
```powershell
choco install stripe-cli
```

**Option manuelle :**
1. Allez sur : https://github.com/stripe/stripe-cli/releases/latest
2. Téléchargez `stripe_X.XX.X_windows_x86_64.zip`
3. Extrayez et ajoutez au PATH

### ÉTAPE 2 : Se connecter à Stripe

Ouvrez PowerShell :
```powershell
stripe login
```
→ Cliquez sur "Allow access" dans le navigateur

### ÉTAPE 3 : Lancer le listener ET récupérer le secret

**GARDEZ CE TERMINAL OUVERT** :
```powershell
cd X:\MesApplis\BiendouCorp\testciviquefrance
stripe listen --forward-to localhost:3000/api/webhook/stripe
```

Vous verrez :
```
> Ready! Your webhook signing secret is whsec_XXXXXXXXXXXXXXX
```

**COPIEZ LE SECRET** (commence par `whsec_`) et dites-le moi, je vais le mettre dans `.env.local`

---

## 🎯 APRÈS AVOIR RÉCUPÉRÉ LE SECRET

Une fois que vous m'aurez donné le `whsec_...`, je le mettrai dans `.env.local` et vous pourrez :

1. **Terminal 1** : Garder `stripe listen` ouvert
2. **Terminal 2** : Lancer `npm run dev`
3. **Tester** : Aller sur http://localhost:3000/dashboard/credits et faire un paiement test

---

## 📧 CONFIGURATION STRIPE DASHBOARD (À faire en parallèle)

### 1. Emails automatiques
https://dashboard.stripe.com/test/settings/emails

✅ Activez "Successful payments"
✅ Activez "Failed payments"

### 2. Customer Portal
https://dashboard.stripe.com/test/settings/billing/portal

✅ Activez le portail
✅ Ajoutez vos 2 produits (Pack Standard + Premium)
✅ Cochez "Allow customers to update subscription"
✅ Cochez "Allow customers to cancel subscription"

### 3. Factures
https://dashboard.stripe.com/test/settings/billing/invoice

✅ Activez "Include PDF in emails"
✅ Activez "Include payment link in invoice emails"

---

## ❓ BESOIN D'AIDE ?

**Stripe CLI pas installé ?**
→ Téléchargez : https://github.com/stripe/stripe-cli/releases/latest

**Erreur "stripe: command not found" ?**
→ Redémarrez PowerShell après installation

**Le listener ne démarre pas ?**
→ Vérifiez que le port 3000 est libre : `netstat -ano | findstr :3000`
