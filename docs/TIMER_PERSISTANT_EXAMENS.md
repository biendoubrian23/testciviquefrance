# 🎯 Système de Timer Persistant par Examen

## 📋 Vue d'ensemble

Chaque examen blanc (1, 2, 3, 4, 5) possède maintenant :
- **Son propre timer persistant** : Le temps continue même après actualisation de la page
- **Sa propre session** : Un examen ne peut pas écraser les données d'un autre
- **Consommation de crédit unique** : Le crédit n'est consommé qu'au premier démarrage

---

## 🗄️ Structure de la base de données

### Contrainte unique ajoutée

```sql
CREATE UNIQUE INDEX idx_examens_blancs_user_exam_in_progress 
ON examens_blancs(user_id, exam_number) 
WHERE is_completed = FALSE;
```

**Signification :** 
- Un utilisateur ne peut avoir qu'**UNE SEULE session en cours** par numéro d'examen
- ✅ Possible : Examen 1 en cours + Examen 2 en cours
- ❌ Impossible : 2 sessions de l'examen 1 en cours simultanément

### Nouvelles colonnes

| Colonne | Type | Description |
|---------|------|-------------|
| `started_at` | TIMESTAMP | Date/heure de démarrage de l'examen (pour calcul temps écoulé) |
| `last_saved_at` | TIMESTAMP | Dernière sauvegarde (pour détecter sessions abandonnées) |

---

## 🔄 Flux de fonctionnement

### 1️⃣ Premier démarrage d'un examen

```
Utilisateur clique sur "Examen Blanc 1"
    ↓
Vérifier : Existe une session en cours pour exam_number=1 ?
    ↓
NON → Créer nouvelle session
    ↓
Insérer dans examens_blancs :
  - exam_number = 1
  - time_remaining = 2700 (45 min)
  - started_at = NOW()
  - last_saved_at = NOW()
    ↓
💳 Consommer 1 crédit d'examen
    ↓
Afficher l'examen avec timer à 45:00
```

### 2️⃣ Actualisation de la page / Retour plus tard

```
Utilisateur revient sur "Examen Blanc 1"
    ↓
Vérifier : Existe une session en cours pour exam_number=1 ?
    ↓
OUI → Charger session existante
    ↓
Récupérer :
  - current_answers (réponses déjà données)
  - current_question_index (dernière question)
  - time_remaining (temps restant exact)
    ↓
❌ PAS de consommation de crédit
    ↓
Reprendre l'examen là où il était
```

### 3️⃣ Démarrage d'un autre examen

```
Utilisateur a Examen 1 en cours
Clique sur "Examen Blanc 2"
    ↓
Vérifier : Existe une session en cours pour exam_number=2 ?
    ↓
NON → Créer nouvelle session pour examen 2
    ↓
💳 Consommer 1 crédit d'examen
    ↓
Maintenant :
  - Examen 1 : en cours, 20 min restantes
  - Examen 2 : en cours, 45 min (nouveau)
    ↓
Chaque examen garde son propre état
```

---

## 💾 Sauvegarde automatique

### Fréquence

- **Toutes les 500ms** : Lors d'un changement de réponse ou de question (debounced)
- **Toutes les 10 secondes** : Sauvegarde du timer

### Données sauvegardées

```typescript
await supabase
  .from('examens_blancs')
  .update({
    current_answers: userAnswers,           // Tableau des réponses
    current_question_index: currentQuestionIndex,  // Question actuelle
    time_remaining: timeRemaining,          // Temps restant en secondes
    last_saved_at: new Date().toISOString() // Horodatage
  })
  .eq('id', sessionId);
```

---

## 🔐 Consommation de crédit

### Règle unique

**Le crédit est consommé UNIQUEMENT lors de la création d'une nouvelle session.**

```typescript
// Dans nouveau/page.tsx et nouveau2/page.tsx
const EXAM_NUMBER = 1; // ou 2

// Chercher session existante
const existingExam = await supabase
  .from('examens_blancs')
  .select('*')
  .eq('user_id', userId)
  .eq('exam_number', EXAM_NUMBER)
  .eq('is_completed', false)
  .maybeSingle();

if (existingExam) {
  // Session existe → Reprendre (PAS de crédit consommé)
  console.log('📖 Reprise de l\'examen');
} else {
  // Nouvelle session → Créer ET consommer crédit
  console.log('✨ Nouvelle session');
  await consumeExamCredit(userId); // 💳 CRÉDIT CONSOMMÉ ICI
}
```

### Scénario détaillé

| Action | Crédit consommé ? | Explication |
|--------|-------------------|-------------|
| Démarrer examen 1 | ✅ Oui | Nouvelle session créée |
| Actualiser page (examen 1) | ❌ Non | Session existante reprise |
| Revenir 2h après (examen 1) | ❌ Non | Même session, timer continue |
| Démarrer examen 2 | ✅ Oui | Nouvelle session examen 2 |
| Alterner entre examen 1 et 2 | ❌ Non | Sessions déjà créées |

---

## 📂 Fichiers modifiés

### 1. Migration SQL

**Fichier :** `supabase/timer-persistant-par-examen.sql`

**Contenu :**
- Index unique `idx_examens_blancs_user_exam_in_progress`
- Colonnes `started_at` et `last_saved_at`
- Fonction `get_or_create_exam_session()`
- Vue `user_active_exams`

### 2. Page Examen 1

**Fichier :** `app/dashboard/examens/nouveau/page.tsx`

**Modifications :**
```typescript
const EXAM_NUMBER = 1;

// Filtrer par exam_number
.eq('exam_number', EXAM_NUMBER)

// Ajouter last_saved_at
started_at: new Date().toISOString(),
last_saved_at: new Date().toISOString()
```

### 3. Page Examen 2

**Fichier :** `app/dashboard/examens/nouveau2/page.tsx`

**Modifications :** Identiques à l'examen 1, avec `EXAM_NUMBER = 2`

---

## 🧪 Tests à effectuer

### Test 1 : Séparation des examens

1. Démarrer l'examen 1
2. Répondre à 10 questions
3. Retourner au dashboard
4. Démarrer l'examen 2
5. **Vérifier :** Examen 2 commence à 45 min (pas 35 min)
6. Retourner à l'examen 1
7. **Vérifier :** Questions 1-10 sont toujours répondues

### Test 2 : Timer persistant

1. Démarrer l'examen 1
2. Attendre 5 minutes (timer à 40:00)
3. Actualiser la page
4. **Vérifier :** Timer reprend à ~40:00 (pas 45:00)

### Test 3 : Consommation crédit unique

1. Avoir 3 crédits
2. Démarrer examen 1 → Crédits : 2
3. Actualiser page → Crédits : 2 (pas 1)
4. Revenir 1h après → Crédits : 2 (pas 1)
5. Démarrer examen 2 → Crédits : 1

### Test 4 : Pas d'écrasement

1. Créer examen 1 en base avec exam_number=1
2. Créer examen 2 en base avec exam_number=2
3. **Vérifier :** 2 lignes distinctes en base
4. Modifier réponses examen 1
5. **Vérifier :** Examen 2 inchangé

---

## 🚀 Prochaines étapes

Pour ajouter les examens 3, 4, 5 :

1. Copier `nouveau2/page.tsx` vers `nouveau3/page.tsx`
2. Changer `EXAM_NUMBER = 3`
3. Remplacer les questions par celles de l'examen 3
4. Mettre à jour le modal pour rediriger vers `/dashboard/examens/nouveau3`
5. Répéter pour examens 4 et 5

---

## 💡 Avantages du système

✅ **Isolation complète** : Chaque examen est indépendant  
✅ **Timer précis** : Continue exactement là où il était  
✅ **Pas de perte de données** : Impossible d'écraser un examen avec un autre  
✅ **Économie de crédits** : Crédit consommé qu'une seule fois  
✅ **Multi-examens simultanés** : Possibilité de jongler entre plusieurs examens  
✅ **Scalable** : Facile d'ajouter examens 3-10

---

## 📊 Requêtes SQL utiles

### Voir les examens en cours d'un utilisateur

```sql
SELECT 
  exam_number,
  current_question_index,
  time_remaining / 60 AS minutes_restantes,
  started_at,
  last_saved_at
FROM examens_blancs
WHERE user_id = 'UUID_USER'
  AND is_completed = FALSE
ORDER BY exam_number;
```

### Nettoyer les sessions abandonnées (24h)

```sql
SELECT cleanup_abandoned_exams();
-- Retourne le nombre de sessions nettoyées
```

---

## ⚠️ Points d'attention

### Contrainte unique

L'index unique empêche automatiquement les doublons :

```sql
-- ✅ OK
INSERT INTO examens_blancs (user_id, exam_number, is_completed)
VALUES ('user1', 1, FALSE);

-- ❌ ERREUR (doublon)
INSERT INTO examens_blancs (user_id, exam_number, is_completed)
VALUES ('user1', 1, FALSE);

-- ✅ OK (exam_number différent)
INSERT INTO examens_blancs (user_id, exam_number, is_completed)
VALUES ('user1', 2, FALSE);
```

### Gestion du temps écoulé

Si `time_remaining` tombe à 0, l'examen devrait automatiquement se terminer :

```typescript
// À implémenter si besoin
if (timeRemaining <= 0) {
  handleSubmitExam();
}
```

---

## 📝 Récapitulatif

| Aspect | Ancienne version | Nouvelle version |
|--------|------------------|------------------|
| Stockage | 1 examen global | 1 examen par numéro |
| Timer | Réinitialise à 45min | Continue où il était |
| Actualisation | Perd progression | Garde tout |
| Crédit | Consommé à chaque fois | Consommé 1 fois |
| Examens multiples | Écrasement possible | Totalement séparés |

---

**Date de mise en place :** 10 décembre 2025  
**Version :** 2.0 - Timer Persistant  
**Status :** ✅ Implémenté (migration SQL à exécuter)
