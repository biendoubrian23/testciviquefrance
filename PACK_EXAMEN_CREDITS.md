# 📝 Gestion des Examens Blancs (Pack Examen)

## Vue d'ensemble

Le **Pack Examen** (2,50€) donne accès à **2 examens blancs** via un système de crédits.

---

## 🗄️ Attribut en base de données

### Table `profiles`

```sql
exam_credits INTEGER DEFAULT 0
```

**Description :** Nombre d'examens blancs disponibles pour l'utilisateur.

---

## 🔄 Cycle de vie d'un crédit d'examen

### 1️⃣ Achat du Pack Examen

**Action utilisateur :** Clic sur "Sélectionner" du Pack Examen → Paiement Stripe

**Webhook déclenché :** `checkout.session.completed` avec `session.mode = 'payment'`

**Mise à jour BDD :**
```sql
UPDATE profiles
SET 
  exam_credits = exam_credits + 2,
  stripe_customer_id = 'cus_xxxxxxxxxxxxx',
  last_purchase_at = NOW()
WHERE email = 'user@example.com';
```

**Résultat :**
- `exam_credits` : 0 → **2**
- Badge affiché : "📝 2 examens blancs disponibles"

---

### 2️⃣ Utilisation d'un examen blanc

**Action utilisateur :** Lance un examen blanc depuis l'interface

**Code à implémenter dans votre logique métier :**

```typescript
// Exemple : Quand l'utilisateur démarre un examen blanc
async function startExamBlanc(userId: string) {
  const supabase = createClient();
  
  // 1. Vérifier si l'utilisateur a des crédits
  const { data: profile } = await supabase
    .from('profiles')
    .select('exam_credits')
    .eq('id', userId)
    .single();

  if (!profile || profile.exam_credits <= 0) {
    throw new Error('Aucun examen blanc disponible. Achetez le Pack Examen.');
  }

  // 2. Décrémenter le crédit
  const { error } = await supabase
    .from('profiles')
    .update({ exam_credits: profile.exam_credits - 1 })
    .eq('id', userId);

  if (error) {
    throw new Error('Erreur lors de la consommation du crédit');
  }

  // 3. Créer l'examen blanc
  // ... votre logique de création d'examen
}
```

**Résultat :**
- `exam_credits` : 2 → **1**
- Badge affiché : "📝 1 examen blanc disponible"

---

### 3️⃣ Rachats multiples

**Scénario :** Un utilisateur peut racheter le Pack Examen plusieurs fois

**Exemple :**
- Achat initial : `exam_credits` = 2
- Utilisation de 1 examen : `exam_credits` = 1
- **Nouveau achat** : `exam_credits` = 1 + 2 = **3**

✅ **Les crédits s'accumulent** et ne s'annulent jamais.

---

## 📊 Affichage pour l'utilisateur

### Dans `app/dashboard/credits/page.tsx`

**Section "Vos achats actifs" :**

```tsx
{extendedProfile?.exam_credits && extendedProfile.exam_credits > 0 && (
  <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-semibold">
    📝 {extendedProfile.exam_credits} examen{extendedProfile.exam_credits > 1 ? 's' : ''} blanc{extendedProfile.exam_credits > 1 ? 's' : ''} disponible{extendedProfile.exam_credits > 1 ? 's' : ''}
  </span>
)}
```

**Exemples d'affichage :**
- `exam_credits = 1` → "📝 1 examen blanc disponible"
- `exam_credits = 2` → "📝 2 examens blancs disponibles"
- `exam_credits = 5` → "📝 5 examens blancs disponibles"

---

## 🎯 Logique de contrôle d'accès

### Vérifier si l'utilisateur peut passer un examen

```typescript
// Fonction utilitaire
export function canAccessExamBlanc(profile: Profile): boolean {
  // Option 1 : A des crédits d'examen
  if (profile.exam_credits && profile.exam_credits > 0) {
    return true;
  }

  // Option 2 : Abonnement Standard (1 examen inclus)
  if (profile.stripe_price_id === STRIPE_PLANS.standard.priceId && 
      profile.subscription_status === 'active') {
    return true;
  }

  // Option 3 : Abonnement Premium (3 examens inclus)
  if (profile.stripe_price_id === STRIPE_PLANS.premium.priceId && 
      profile.subscription_status === 'active') {
    return true;
  }

  return false;
}
```

### Afficher le compteur dans l'UI

```typescript
export function getAvailableExams(profile: Profile): number {
  let total = 0;

  // Crédits Pack Examen
  total += profile.exam_credits || 0;

  // Examens inclus dans l'abonnement
  if (profile.stripe_price_id === STRIPE_PLANS.standard.priceId && 
      profile.subscription_status === 'active') {
    total += 1; // Standard = 1 examen
  }

  if (profile.stripe_price_id === STRIPE_PLANS.premium.priceId && 
      profile.subscription_status === 'active') {
    total += 3; // Premium = 3 examens
  }

  return total;
}
```

---

## 🔍 Requêtes SQL utiles

### Voir les utilisateurs avec des crédits d'examen

```sql
SELECT 
  email,
  exam_credits,
  last_purchase_at
FROM profiles
WHERE exam_credits > 0
ORDER BY exam_credits DESC;
```

### Statistiques des achats Pack Examen

```sql
SELECT 
  COUNT(*) as total_achats,
  SUM(amount) as revenue_total,
  AVG(amount) as prix_moyen
FROM achats
WHERE product_type = 'pack_examen'
AND status = 'completed';
```

### Utilisateurs ayant acheté mais pas encore utilisé

```sql
SELECT 
  p.email,
  p.exam_credits,
  a.completed_at as date_achat
FROM profiles p
INNER JOIN achats a ON a.user_id = p.id
WHERE a.product_type = 'pack_examen'
  AND a.status = 'completed'
  AND p.exam_credits = 2  -- N'ont pas encore utilisé
ORDER BY a.completed_at DESC;
```

---

## 🧪 Tests recommandés

### Test 1 : Achat simple

1. Acheter le Pack Examen (2,50€)
2. Vérifier dans Supabase : `exam_credits = 2`
3. Vérifier l'affichage : "📝 2 examens blancs disponibles"

### Test 2 : Utilisation d'un crédit

1. Lancer un examen blanc
2. Vérifier dans Supabase : `exam_credits = 1`
3. Vérifier l'affichage : "📝 1 examen blanc disponible"

### Test 3 : Rachats multiples

1. Acheter le Pack Examen → `exam_credits = 2`
2. Utiliser 1 examen → `exam_credits = 1`
3. Racheter le Pack Examen → `exam_credits = 3`
4. Vérifier l'affichage : "📝 3 examens blancs disponibles"

### Test 4 : Combinaison avec abonnement

1. Avoir un abonnement Premium actif
2. Acheter le Pack Examen → `exam_credits = 2`
3. Vérifier que les deux sont visibles :
   - "⭐ Pack Premium (6,99€/semaine)"
   - "📝 2 examens blancs disponibles"

---

## ⚠️ Points d'attention

### Les crédits ne s'annulent JAMAIS

❌ **Mauvaise pratique :**
```typescript
// NE PAS FAIRE : Réinitialiser les crédits
UPDATE profiles SET exam_credits = 0 WHERE ...
```

✅ **Bonne pratique :**
```typescript
// Décrémenter à chaque utilisation
UPDATE profiles 
SET exam_credits = exam_credits - 1 
WHERE id = ? AND exam_credits > 0;
```

### Différence entre `credits` et `exam_credits`

| Attribut | Utilisation |
|----------|-------------|
| `credits` | Crédits généraux (ancienne logique, obsolète) |
| `exam_credits` | **Crédits spécifiques aux examens blancs** (Pack Examen) |

⚠️ **Ne pas confondre les deux !**

---

## 📋 Migration SQL à exécuter

```sql
-- Créer la colonne exam_credits
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS exam_credits INTEGER DEFAULT 0;

COMMENT ON COLUMN public.profiles.exam_credits 
IS 'Nombre d''examens blancs disponibles (Pack Examen à 2,50€ = 2 examens)';

-- Créer la colonne last_purchase_at
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS last_purchase_at TIMESTAMPTZ;

COMMENT ON COLUMN public.profiles.last_purchase_at 
IS 'Date et heure du dernier achat effectué par l''utilisateur';
```

📄 **Fichier :** `supabase/add-last-purchase-at.sql`

---

## 🔗 Fichiers modifiés

1. `app/api/webhook/stripe/route.ts` - Gestion du webhook Pack Examen
2. `contexts/AuthContext.tsx` - Type Profile avec `exam_credits`
3. `app/dashboard/credits/page.tsx` - Affichage des crédits
4. `supabase/add-last-purchase-at.sql` - Migration SQL

---

## ✅ Checklist de mise en production

- [ ] Exécuter `supabase/add-last-purchase-at.sql` en production
- [ ] Tester l'achat du Pack Examen en test
- [ ] Vérifier que `exam_credits` s'incrémente correctement
- [ ] Implémenter la logique de décrémentation lors de l'utilisation
- [ ] Tester les rachats multiples
- [ ] Tester la combinaison avec un abonnement actif
- [ ] Mettre à jour la configuration Stripe en production
- [ ] Configurer les webhooks en production

---

**Dernière mise à jour :** 8 décembre 2025
