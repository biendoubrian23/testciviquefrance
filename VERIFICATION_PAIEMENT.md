# 🔍 GUIDE DE VÉRIFICATION APRÈS PAIEMENT

## 📋 CHECKLIST COMPLÈTE DE VÉRIFICATION

### 1️⃣ TERMINAL STRIPE LISTENER (PREMIER ENDROIT À REGARDER)

**Ce que vous devez voir :**
```
--> checkout.session.completed [evt_xxxxx]
--> customer.subscription.created [evt_xxxxx]
--> invoice.paid [evt_xxxxx]
```

**✅ Si vous voyez ces 3 événements → Le webhook fonctionne**
**❌ Si rien n'apparaît → Le listener n'est pas connecté ou l'app n'est pas démarrée**

---

### 2️⃣ SUPABASE - TABLE `profiles`

**Allez sur :** https://supabase.com/dashboard/project/exlwbyfxuhitctiwjech/editor

**Sélectionnez la table : `profiles`**

**Colonnes à vérifier pour votre utilisateur :**

| Colonne | Valeur attendue | Signification |
|---------|----------------|---------------|
| `stripe_customer_id` | `cus_XXXXXXXX` | ID unique client dans Stripe ✅ |
| `stripe_subscription_id` | `sub_XXXXXXXX` | ID de l'abonnement actif ✅ |
| `stripe_price_id` | `price_1Sc3qx...` (Standard) ou `price_1Sc3rP...` (Premium) | Plan souscrit ✅ |
| `subscription_status` | `active` | Abonnement actif ✅ |
| `is_premium` | `true` | Accès premium accordé ✅ |
| `subscription_start_date` | Date/heure du paiement | Début de l'abonnement ✅ |
| `subscription_end_date` | Date dans 7 jours | Fin de la période payée ✅ |

**Si TOUTES ces colonnes sont remplies → ✅ La synchronisation fonctionne parfaitement**

---

### 3️⃣ STRIPE DASHBOARD

**Allez sur :** https://dashboard.stripe.com/test/

#### A. Vérifier le paiement
**Dashboard → Payments (Paiements)**
- Vous devriez voir un paiement de 2,99€ ou 6,99€
- Statut : **Succeeded** (Réussi) ✅
- Cliquez dessus pour voir les détails

#### B. Vérifier le client
**Dashboard → Customers (Clients)**
- Votre client devrait être créé
- Email visible
- Cliquez sur le client pour voir :
  - **Subscriptions** → 1 abonnement actif
  - **Payments** → Le paiement réalisé
  - **Invoices** → La facture générée

#### C. Vérifier l'abonnement
**Dashboard → Subscriptions (Abonnements)**
- Statut : **Active** ✅
- Plan : Pack Standard ou Premium
- Prochain paiement : dans 7 jours

#### D. Vérifier les webhooks
**Dashboard → Developers → Webhooks**
- Cliquez sur votre endpoint local
- Vous verrez la liste des événements envoyés
- Chaque événement doit avoir : **200 OK** ✅
- Si vous voyez **400** ou **500** → Il y a une erreur dans votre API

---

### 4️⃣ LOGS DE VOTRE APPLICATION (CONSOLE)

**Terminal Node.js (npm run dev)**

**Logs attendus après paiement :**
```
📨 Event reçu: checkout.session.completed
✅ Checkout completed: cs_test_xxxxx
💰 Abonnement créé - Plan: standard, Email: votre@email.com
✅ Profil mis à jour avec succès

📨 Event reçu: customer.subscription.created
🔄 Subscription updated: sub_xxxxx
✅ Subscription mise à jour

📨 Event reçu: invoice.paid
💳 Invoice paid: in_xxxxx
✅ Paiement confirmé
```

**Si vous voyez ces logs → ✅ Tout fonctionne côté backend**

**Erreurs possibles :**
- ❌ `Erreur récupération profil` → L'email ne correspond pas à un utilisateur
- ❌ `Erreur mise à jour profil` → Problème avec Supabase
- ❌ `Plan non trouvé pour price_id` → Le price_id ne correspond à aucun plan

---

### 5️⃣ INTERFACE UTILISATEUR

**Sur votre site : http://localhost:3000/dashboard/credits**

**Ce qui doit changer après paiement :**

**AVANT le paiement :**
```
Votre statut : Gratuit
Niveaux restants : 3/jour
```

**APRÈS le paiement (après avoir rafraîchi la page) :**
```
Votre statut : Premium
Niveaux restants : ∞/jour
Bouton "Gérer mon abonnement" visible ✅
```

**Si le statut ne change pas :**
1. Rafraîchissez la page (F5)
2. Déconnectez-vous et reconnectez-vous
3. Vérifiez Supabase que `is_premium` = true

---

### 6️⃣ PORTAIL CLIENT STRIPE

**Test du bouton "Gérer mon abonnement" :**

1. Cliquez sur **"Gérer mon abonnement"**
2. Vous devriez être redirigé vers Stripe Customer Portal
3. Vous devez voir :
   - Votre abonnement actif
   - Option pour **Update plan** (changer de plan)
   - Option pour **Cancel subscription** (annuler)
   - Historique de paiement
   - Gérer les cartes de paiement

**Si le portail ne s'ouvre pas :**
- Vérifiez que `stripe_customer_id` est bien rempli dans Supabase
- Vérifiez les logs du terminal pour voir l'erreur

---

### 7️⃣ EMAIL (SI CONFIGURÉ)

**Vous devriez recevoir un email avec :**
- ✅ Confirmation de paiement
- ✅ Facture en pièce jointe (PDF)
- ✅ Montant payé
- ✅ Date du prochain prélèvement

**Si pas d'email :**
- Allez dans Stripe Dashboard → Settings → Emails
- Vérifiez que "Successful payments" est activé

---

## 🐛 DÉBOGAGE SI PROBLÈME

### Problème : Rien ne se passe après le paiement

**1. Vérifier que stripe listen est actif :**
```powershell
# Dans le terminal stripe, vous devez voir "Ready!"
```

**2. Vérifier les logs de l'application :**
```powershell
# Le terminal npm run dev doit afficher les événements
```

**3. Vérifier dans Supabase SQL Editor :**
```sql
-- Voir tous les profils avec leurs abonnements
SELECT 
  email,
  stripe_customer_id,
  stripe_subscription_id,
  subscription_status,
  is_premium,
  subscription_start_date,
  subscription_end_date
FROM profiles
WHERE email = 'votre@email.com';
```

**4. Vérifier les webhooks dans Stripe Dashboard :**
```
Developers → Webhooks → [Votre endpoint local]
→ Voir les événements récents
→ Si erreur 400/500, cliquer pour voir les détails
```

---

## 📊 COMMANDES SQL UTILES

### Voir tous les utilisateurs premium
```sql
SELECT email, subscription_status, is_premium, subscription_end_date
FROM profiles
WHERE is_premium = true;
```

### Voir l'historique des abonnements
```sql
SELECT 
  email,
  stripe_subscription_id,
  subscription_status,
  stripe_price_id,
  subscription_start_date,
  subscription_end_date
FROM profiles
WHERE stripe_customer_id IS NOT NULL
ORDER BY subscription_start_date DESC;
```

### Réinitialiser un utilisateur (pour tester à nouveau)
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
WHERE email = 'votre@email.com';
```

---

## ✅ RÉSUMÉ : TOUT EST OK SI...

1. ✅ Terminal Stripe affiche les 3 événements
2. ✅ Supabase `profiles` a toutes les colonnes remplies
3. ✅ Stripe Dashboard montre le paiement en "Succeeded"
4. ✅ Stripe Dashboard montre l'abonnement en "Active"
5. ✅ Terminal Node.js affiche les logs de succès
6. ✅ L'interface affiche "Premium" et "∞/jour"
7. ✅ Le bouton "Gérer mon abonnement" fonctionne
8. ✅ Le portail Stripe s'ouvre correctement

**Si TOUS ces points sont verts → 🎉 Votre intégration Stripe est PARFAITE !**
