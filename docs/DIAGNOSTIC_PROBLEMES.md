# 🚨 DIAGNOSTIC DES PROBLÈMES DÉTECTÉS

## ❌ PROBLÈME 1 : Webhooks non fonctionnels

### Symptôme :
- Vous avez payé sur Stripe
- Aucun événement n'apparaît dans le terminal
- Supabase n'est pas mis à jour

### Cause :
Le listener Stripe n'est PAS connecté à votre application Next.js

### Solution :

**Étape 1 : Vérifier que l'app tourne**
```powershell
# Terminal 1
cd X:\MesApplis\BiendouCorp\testciviquefrance
npm run dev
```

Attendez de voir :
```
✓ Ready in 2.6s
- Local: http://localhost:3000
```

**Étape 2 : Lancer le listener Stripe**
```powershell
# Terminal 2 (NOUVEAU TERMINAL !)
cd X:\MesApplis\BiendouCorp\testciviquefrance
& "$env:USERPROFILE\stripe-cli\stripe.exe" listen --forward-to localhost:3000/api/webhook/stripe
```

Attendez de voir :
```
> Ready! Your webhook signing secret is whsec_...
```

**⚠️ IMPORTANT : GARDEZ CES 2 TERMINAUX OUVERTS !**

---

## ❌ PROBLÈME 2 : Titre "Membre Premium" pour tous

### Symptôme :
Pack Standard (2,99€) et Premium (6,99€) affichent le même titre

### Cause :
Le code ne vérifie que `is_premium` sans regarder le `stripe_price_id`

### Solution :
✅ **CORRIGÉ !** Le code affiche maintenant :
- "Membre Standard" pour le pack à 2,99€
- "Membre Premium" pour le pack à 6,99€
- "Membre gratuit" pour les utilisateurs sans abonnement

---

## ❌ PROBLÈME 3 : Notification bizarre lors du 2ème paiement

### Symptôme :
Vous avez pris le Pack Standard, puis essayé de prendre le Premium
→ Juste une notification, pas de nouveau paiement

### Cause possible :
Stripe détecte que vous avez déjà un abonnement actif et essaie de le modifier

### Ce qui se passe normalement :
1. Vous cliquez sur "Sélectionner Premium"
2. Stripe ouvre un nouveau checkout
3. Vous devez payer avec la même carte ou une nouvelle
4. L'ancien abonnement est annulé et remplacé

### À vérifier :
1. Allez sur https://dashboard.stripe.com/test/customers
2. Cliquez sur votre client (clarkybrian@outlook.fr)
3. Regardez la section "Subscriptions"
4. Vous devriez voir 1 seul abonnement actif

---

## ❌ PROBLÈME 4 : Aucun attribut mis à jour dans Supabase

### Symptôme :
Après paiement, les colonnes Supabase restent NULL

### Cause :
Les webhooks ne sont pas reçus par votre application

### Comment vérifier :

**1. Vérifier Supabase directement :**
```sql
SELECT 
  email,
  stripe_customer_id,
  stripe_subscription_id,
  stripe_price_id,
  subscription_status,
  is_premium
FROM profiles
WHERE email = 'clarkybrian@outlook.fr';
```

Allez sur : https://supabase.com/dashboard/project/exlwbyfxuhitctiwjech/editor
→ SQL Editor → Collez cette requête → Run

**Résultat attendu si le webhook a fonctionné :**
- `stripe_customer_id` : `cus_XXXXXXX`
- `stripe_subscription_id` : `sub_XXXXXXX`
- `stripe_price_id` : `price_1Sc3qx...`
- `subscription_status` : `active`
- `is_premium` : `true`

**Si tout est NULL → Les webhooks n'ont PAS été reçus**

---

## 🔍 VÉRIFICATION DANS STRIPE

### Ce que vous avez vu (logs Stripe) :
```
200 OK POST /v1/payment_methods
200 OK POST /v1/billing_portal/configurations
200 OK POST /v1/payment_links
```

### Ce que vous DEVRIEZ voir (si le paiement a réussi) :
Allez sur : https://dashboard.stripe.com/test/workbench/events

Cherchez ces événements :
- `checkout.session.completed`
- `customer.subscription.created`
- `invoice.paid`

**Si vous les voyez :**
→ Le paiement a été traité par Stripe
→ Mais votre application n'a PAS reçu les webhooks

**Si vous ne les voyez PAS :**
→ Le paiement n'a peut-être pas été finalisé

---

## 🛠️ PROCÉDURE DE TEST COMPLÈTE

### Étape 1 : Préparer l'environnement

```powershell
# Terminal 1 : Application
cd X:\MesApplis\BiendouCorp\testciviquefrance
npm run dev
```

```powershell
# Terminal 2 : Stripe Listener
cd X:\MesApplis\BiendouCorp\testciviquefrance
& "$env:USERPROFILE\stripe-cli\stripe.exe" listen --forward-to localhost:3000/api/webhook/stripe
```

### Étape 2 : Réinitialiser votre profil Supabase

Allez sur : https://supabase.com/dashboard/project/exlwbyfxuhitctiwjech/editor
→ SQL Editor → Collez et exécutez :

```sql
UPDATE profiles
SET 
  stripe_customer_id = NULL,
  stripe_subscription_id = NULL,
  stripe_price_id = NULL,
  subscription_status = 'inactive',
  is_premium = false,
  subscription_start_date = NULL,
  subscription_end_date = NULL
WHERE email = 'clarkybrian@outlook.fr';
```

### Étape 3 : Faire un nouveau paiement test

1. Allez sur http://localhost:3000/dashboard/credits
2. Cliquez sur "Sélectionner" pour Pack Standard
3. Utilisez la carte test : `4242 4242 4242 4242`
4. Validez

### Étape 4 : Observer

**Dans le Terminal 2 (Stripe Listener), vous DEVEZ voir :**
```
--> checkout.session.completed [evt_xxxxx]
--> customer.subscription.created [evt_xxxxx]
--> invoice.paid [evt_xxxxx]
```

**Dans le Terminal 1 (npm run dev), vous DEVEZ voir :**
```
📨 Event reçu: checkout.session.completed
✅ Checkout completed: cs_test_xxxxx
💰 Abonnement créé - Plan: standard, Email: clarkybrian@outlook.fr
✅ Profil mis à jour avec succès
```

**Si vous ne voyez RIEN → Le listener n'est pas connecté !**

### Étape 5 : Vérifier Supabase

Relancez la requête SQL :
```sql
SELECT * FROM profiles WHERE email = 'clarkybrian@outlook.fr';
```

Vous devez voir toutes les colonnes Stripe remplies.

---

## 📋 CHECKLIST DE DÉBOGAGE

- [ ] Terminal 1 : `npm run dev` est lancé et affiche "Ready"
- [ ] Terminal 2 : Stripe listener est lancé et affiche "Ready!"
- [ ] Les 2 terminaux restent OUVERTS pendant le test
- [ ] L'application est accessible sur http://localhost:3000
- [ ] Vous êtes connecté avec clarkybrian@outlook.fr
- [ ] Vous pouvez accéder à /dashboard/credits
- [ ] Le paiement Stripe aboutit (carte 4242)
- [ ] Le Terminal 2 affiche les 3 événements
- [ ] Le Terminal 1 affiche les logs de succès
- [ ] Supabase est mis à jour
- [ ] L'interface affiche "Membre Standard" ou "Membre Premium"

**Si TOUTES ces cases sont cochées → ✅ Tout fonctionne !**

---

## 🆘 SI ÇA NE FONCTIONNE TOUJOURS PAS

Lancez ce script de diagnostic :
```powershell
node verify-payment.js clarkybrian@outlook.fr
```

Il vous dira exactement ce qui ne va pas.
