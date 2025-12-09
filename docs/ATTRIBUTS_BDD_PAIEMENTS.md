# 📊 Attributs Base de Données - Paiements Stripe

## Vue d'ensemble

Ce document décrit **tous les attributs** de la table `profiles` qui sont mis à jour lors des achats via Stripe.

---

## 🎯 Pack Standard (2,99€/semaine - Abonnement)

### Attributs mis à jour

| Attribut | Type | Valeur | Description |
|----------|------|--------|-------------|
| `stripe_customer_id` | TEXT | `cus_xxxxxxxxxxxxx` | ID unique du client dans Stripe |
| `stripe_subscription_id` | TEXT | `sub_xxxxxxxxxxxxx` | ID de l'abonnement Stripe |
| `stripe_price_id` | TEXT | `price_1Sc3qxEuT9agNbEUdX0RkLM4` | ID du tarif (permet de différencier Standard/Premium) |
| `subscription_status` | TEXT | `active` | Statut de l'abonnement (`active`, `past_due`, `canceled`) |
| `subscription_start_date` | TIMESTAMPTZ | `2025-12-08T14:56:26Z` | Date de début de l'abonnement |
| `subscription_end_date` | TIMESTAMPTZ | `2025-12-15T14:56:26Z` | Date de fin de la période actuelle (renouvellement) |
| `is_premium` | BOOLEAN | `true` | Indique si l'utilisateur a un accès premium |
| `last_purchase_at` | TIMESTAMPTZ | `2025-12-08T14:56:26Z` | Date du dernier achat |

### Exemple de requête SQL

```sql
SELECT 
  email,
  stripe_customer_id,
  stripe_subscription_id,
  stripe_price_id,
  subscription_status,
  is_premium,
  subscription_start_date,
  subscription_end_date
FROM profiles
WHERE email = 'clarkybrian@outlook.fr';
```

### Webhook déclenché

- `checkout.session.completed` → Création initiale
- `customer.subscription.updated` → Renouvellement/Modification
- `customer.subscription.deleted` → Annulation
- `invoice.paid` → Confirmation du paiement

---

## ⭐ Pack Premium (6,99€/semaine - Abonnement)

### Attributs mis à jour

**IDENTIQUES au Pack Standard**, sauf :

| Attribut | Valeur différente |
|----------|-------------------|
| `stripe_price_id` | `price_1Sc3rPEuT9agNbEU65mDE4RP` |

💡 **La seule différence** entre Standard et Premium dans la BDD est le `stripe_price_id`.

### Comment différencier Standard et Premium ?

```typescript
// Dans votre code
if (profile.stripe_price_id === 'price_1Sc3qxEuT9agNbEUdX0RkLM4') {
  console.log('Utilisateur Standard');
} else if (profile.stripe_price_id === 'price_1Sc3rPEuT9agNbEU65mDE4RP') {
  console.log('Utilisateur Premium');
}
```

---

## 📝 Pack Examen (2,50€ - Paiement unique)

### Attributs mis à jour

| Attribut | Type | Valeur | Description |
|----------|------|--------|-------------|
| `credits` | INTEGER | `+2` | Ajoute 2 crédits d'examens blancs au total existant |
| `stripe_customer_id` | TEXT | `cus_xxxxxxxxxxxxx` | Sauvegardé si première transaction |
| `last_purchase_at` | TIMESTAMPTZ | `2025-12-08T15:30:00Z` | Date de l'achat |

### ⚠️ Différences importantes

- ❌ **PAS de** `stripe_subscription_id` (ce n'est pas un abonnement)
- ❌ **PAS de** `stripe_price_id` (paiement unique)
- ❌ **PAS de** `subscription_status`
- ✅ **Seulement** ajout de crédits + date d'achat

### Exemple de requête SQL

```sql
-- Voir les crédits d'un utilisateur
SELECT 
  email,
  credits,
  last_purchase_at
FROM profiles
WHERE email = 'clarkybrian@outlook.fr';
```

### Webhook déclenché

- `checkout.session.completed` avec `session.mode = 'payment'`

### Table `achats` (historique)

En plus de mettre à jour `profiles`, un enregistrement est créé dans la table `achats` :

```sql
INSERT INTO achats (
  user_id,
  product_type,
  amount,
  currency,
  stripe_payment_id,
  stripe_customer_id,
  status,
  completed_at
) VALUES (
  'uuid-du-user',
  'pack_examen',
  2.50,
  'EUR',
  'pi_xxxxxxxxxxxxx',
  'cus_xxxxxxxxxxxxx',
  'completed',
  NOW()
);
```

---

## 🔄 Cas d'usage : Changement d'abonnement

### Standard → Premium

**Ce qui se passe :**
1. Stripe facture la différence au prorata
2. Webhook `customer.subscription.updated` déclenché
3. Base de données mise à jour :

```sql
UPDATE profiles
SET 
  stripe_price_id = 'price_1Sc3rPEuT9agNbEU65mDE4RP',  -- Nouveau price_id
  subscription_start_date = NOW(),                      -- Nouvelle période commence
  subscription_end_date = NOW() + INTERVAL '7 days',   -- Nouvelle fin
  last_purchase_at = NOW()
WHERE stripe_customer_id = 'cus_xxxxxxxxxxxxx';
```

### Premium → Standard

**Ce qui se passe :**
1. Stripe applique un crédit (pas de facturation immédiate)
2. Webhook `customer.subscription.updated` déclenché
3. Base de données mise à jour :

```sql
UPDATE profiles
SET 
  stripe_price_id = 'price_1Sc3qxEuT9agNbEUdX0RkLM4',  -- Downgrade
  subscription_start_date = NOW(),
  subscription_end_date = NOW() + INTERVAL '14 days',  -- Prolongé grâce au crédit
  last_purchase_at = NOW()
WHERE stripe_customer_id = 'cus_xxxxxxxxxxxxx';
```

---

## 🚫 Annulation d'abonnement

**Ce qui se passe :**
1. L'utilisateur clique sur "Cancel subscription" dans le portail Stripe
2. Webhook `customer.subscription.deleted` déclenché
3. Base de données mise à jour :

```sql
UPDATE profiles
SET 
  subscription_status = 'canceled',
  is_premium = false,
  stripe_subscription_id = NULL,
  stripe_price_id = NULL
WHERE stripe_customer_id = 'cus_xxxxxxxxxxxxx';
```

⚠️ **Note :** `stripe_customer_id` est conservé pour l'historique.

---

## 📋 Combinaison d'achats

### Peut-on avoir un abonnement ET des crédits Pack Examen ?

**✅ OUI !** Les deux sont **indépendants** :

```sql
-- Exemple d'utilisateur avec abonnement Premium + Pack Examen acheté
{
  "email": "user@example.com",
  "stripe_customer_id": "cus_xxxxxxxxxxxxx",
  "stripe_subscription_id": "sub_xxxxxxxxxxxxx",
  "stripe_price_id": "price_1Sc3rPEuT9agNbEU65mDE4RP",  -- Premium
  "subscription_status": "active",
  "is_premium": true,
  "credits": 5,  -- 2 crédits du Pack Examen + 3 crédits gratuits de base
  "last_purchase_at": "2025-12-08T15:30:00Z"
}
```

---

## 🛠️ Migration SQL nécessaire

Si vous venez de mettre à jour le webhook, **exécutez ce script** dans Supabase :

```sql
-- Ajouter la colonne last_purchase_at si elle n'existe pas
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS last_purchase_at TIMESTAMPTZ;

COMMENT ON COLUMN public.profiles.last_purchase_at 
IS 'Date et heure du dernier achat effectué par l''utilisateur';
```

📄 **Fichier :** `supabase/add-last-purchase-at.sql`

---

## 🧪 Test de vérification

### Vérifier l'intégration complète

```sql
-- 1. Vérifier les colonnes Stripe
SELECT 
  column_name, 
  data_type, 
  is_nullable
FROM information_schema.columns
WHERE table_name = 'profiles' 
AND column_name IN (
  'stripe_customer_id',
  'stripe_subscription_id',
  'stripe_price_id',
  'subscription_status',
  'subscription_start_date',
  'subscription_end_date',
  'is_premium',
  'credits',
  'last_purchase_at'
);

-- 2. Vérifier un profil spécifique
SELECT 
  email,
  stripe_customer_id,
  stripe_subscription_id,
  stripe_price_id,
  subscription_status,
  is_premium,
  credits,
  subscription_start_date,
  subscription_end_date,
  last_purchase_at
FROM profiles
WHERE email = 'clarkybrian@outlook.fr';

-- 3. Voir l'historique des achats
SELECT 
  product_type,
  amount,
  status,
  completed_at
FROM achats
WHERE user_id = (SELECT id FROM profiles WHERE email = 'clarkybrian@outlook.fr')
ORDER BY completed_at DESC;
```

---

## 📊 Résumé visuel

```
┌─────────────────────────────────────────────────────────────┐
│                    TABLE: profiles                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  🎯 Pack Standard / ⭐ Pack Premium (Abonnements)          │
│  ├─ stripe_customer_id        → cus_xxxxxxxxxxxxx          │
│  ├─ stripe_subscription_id    → sub_xxxxxxxxxxxxx          │
│  ├─ stripe_price_id            → price_xxxxxxxxxxxxx       │
│  ├─ subscription_status        → active/canceled/past_due  │
│  ├─ subscription_start_date    → 2025-12-08T14:56:26Z     │
│  ├─ subscription_end_date      → 2025-12-15T14:56:26Z     │
│  ├─ is_premium                 → true                      │
│  └─ last_purchase_at           → 2025-12-08T14:56:26Z     │
│                                                             │
│  📝 Pack Examen (Paiement unique)                          │
│  ├─ credits                    → +2                        │
│  ├─ stripe_customer_id         → cus_xxxxxxxxxxxxx         │
│  └─ last_purchase_at           → 2025-12-08T15:30:00Z     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## ✅ Checklist de validation

- [ ] Exécuter `supabase/add-last-purchase-at.sql` dans Supabase
- [ ] Tester l'achat du Pack Standard → Vérifier `stripe_price_id` = Standard
- [ ] Tester l'achat du Pack Premium → Vérifier `stripe_price_id` = Premium
- [ ] Tester l'achat du Pack Examen → Vérifier `credits` +2
- [ ] Tester le changement Standard → Premium → Vérifier `stripe_price_id` change
- [ ] Tester l'annulation d'abonnement → Vérifier `is_premium` = false
- [ ] Vérifier que les webhooks s'affichent dans les logs Node.js
- [ ] Vérifier que la table `achats` enregistre les transactions

---

## 🔗 Fichiers associés

- `app/api/webhook/stripe/route.ts` - Gestion des webhooks
- `lib/stripe/plans.ts` - Configuration des plans
- `contexts/AuthContext.tsx` - Type Profile avec champs Stripe
- `supabase/update-profiles-stripe.sql` - Migration des colonnes Stripe
- `supabase/add-last-purchase-at.sql` - Ajout de last_purchase_at
- `supabase/achats-utilisateur.sql` - Table des achats

---

**Dernière mise à jour :** 8 décembre 2025
