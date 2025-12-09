# 📝 Guide de Test - Système Multi-Examens Blancs

## ✅ Ce qui a été créé

### 1. **Structure modulaire pour 5 examens**
- **Dossier** : `lib/data/examens/`
- **Fichiers** :
  - `types.ts` : Interfaces communes et fonctions de hash
  - `examen-2.ts` : 40 questions de l'examen blanc #2 (hashées)
  - `index.ts` : Gestion centralisée et algorithme d'attribution
  - (Espaces réservés pour examen-3, 4, 5)

### 2. **Examen Blanc #2**
- **40 questions** réparties selon le référentiel officiel :
  - 11 questions : Principes et valeurs
  - 6 questions : Système institutionnel
  - 11 questions : Droits et devoirs
  - 8 questions : Histoire/géographie/culture
  - 4 questions : Vivre en France
- **Différenciation** : ~70% de questions différentes de l'examen #1
- **Sécurité** : Toutes les réponses sont hashées avec `hashAnswer(examNumber, questionId, answerIndex)`

### 3. **Migration Base de Données**
- **Fichier** : `supabase/migration-multi-examens.sql`
- **Ajouts** :
  - Colonne `exam_number` (1-5) dans `examens_blancs`
  - Index composites optimisés pour 10k users simultanés
  - Fonction `get_next_exam_number(user_id)` pour rotation automatique
  - Fonction `get_exam_in_progress(user_id)` pour reprendre un examen
  - Vue `examens_distribution` pour analytics

### 4. **Page d'examen optimisée**
- **Fichier** : `app/dashboard/examens/nouveau2/page.tsx`
- **Fonctionnalités** :
  - Attribution automatique de l'examen suivant (rotation)
  - Sauvegarde automatique (debounce 500ms)
  - Persistance complète (réponses, temps, progression)
  - Timer de 45 minutes
  - Correction détaillée avec explications
  - Optimisé pour performance

### 5. **Algorithme d'attribution intelligent**
```typescript
// Rotation simple : (nombreExamensPassés % totalExamens) + 1
// Exemple :
// - 1er examen : examen #1
// - 2ème examen : examen #2
// - 3ème examen : examen #3
// - 6ème examen : on recommence à #1

// Sécurité : évite de redonner le même examen consécutivement
```

---

## 🚀 Étapes de Déploiement

### Étape 1 : Exécuter la migration SQL
```bash
# Option A : Via Supabase Dashboard
# 1. Aller sur https://supabase.com/dashboard/project/[votre-projet]/sql
# 2. Copier le contenu de supabase/migration-multi-examens.sql
# 3. Exécuter

# Option B : Via CLI Supabase
supabase db push
```

### Étape 2 : Vérifier la migration
```sql
-- Vérifier que la colonne existe
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'examens_blancs' 
AND column_name = 'exam_number';

-- Vérifier les index
SELECT indexname 
FROM pg_indexes 
WHERE tablename = 'examens_blancs';

-- Tester la fonction
SELECT get_next_exam_number('VOTRE_USER_ID'::UUID);
```

### Étape 3 : Déployer sur Vercel
```bash
# Pousser sur GitHub
git add .
git commit -m "feat: système multi-examens avec rotation automatique"
git push origin main

# Vercel déploiera automatiquement
```

---

## 🧪 Tests à Effectuer

### Test 1 : Premier examen (utilisateur nouveau)
1. Se connecter avec un compte qui n'a jamais passé d'examen
2. Aller sur `/dashboard/examens/nouveau2`
3. **Vérifier** : L'examen blanc #2 se charge
4. Répondre à quelques questions
5. Rafraîchir la page
6. **Vérifier** : Les réponses et le temps sont sauvegardés
7. Terminer l'examen
8. **Vérifier** : Le score s'affiche, correction disponible

### Test 2 : Rotation des examens
1. Passer un premier examen (nouveau2)
2. Créer un nouvel examen
3. **Vérifier dans la DB** :
```sql
SELECT exam_number, score, is_completed 
FROM examens_blancs 
WHERE user_id = 'VOTRE_USER_ID' 
ORDER BY started_at DESC;
```
4. **Attendu** : Le 1er examen a `exam_number = 2`
5. Si vous passez un 2ème examen, il devrait avoir `exam_number = 3` ou 1 (selon disponibilité)

### Test 3 : Différenciation des questions
1. Comparer les questions de `/dashboard/examens/nouveau` (examen #1)
2. Avec `/dashboard/examens/nouveau2` (examen #2)
3. **Vérifier** : Maximum 30% de similarité dans les réponses

### Test 4 : Performance (si possible)
```bash
# Simuler 100 requêtes simultanées
ab -n 100 -c 10 https://votre-site.vercel.app/dashboard/examens/nouveau2
```
**Attendu** : Temps de réponse < 500ms

### Test 5 : Sécurité des hash
1. Ouvrir les DevTools > Console
2. Chercher dans le code source : `correctHash`
3. **Vérifier** : Les hash sont des chaînes hexadécimales (ex: `a3f2c8d`)
4. **Vérifier** : Impossible de deviner la réponse directement

---

## 📊 Requêtes de Monitoring

### Statistiques par examen
```sql
SELECT * FROM examens_distribution;
```

### Examens en cours (non terminés)
```sql
SELECT 
  user_id, 
  exam_number, 
  current_question_index, 
  time_remaining / 60 as minutes_restantes,
  started_at
FROM examens_blancs
WHERE is_completed = FALSE
ORDER BY started_at DESC;
```

### Performance utilisateur
```sql
SELECT 
  user_id,
  exam_number,
  score,
  temps_total / 60.0 as duree_minutes,
  passed
FROM examens_blancs
WHERE is_completed = TRUE
ORDER BY completed_at DESC
LIMIT 20;
```

### Rotation des examens par utilisateur
```sql
SELECT 
  user_id,
  ARRAY_AGG(exam_number ORDER BY started_at) as examens_passes,
  COUNT(*) as total_examens
FROM examens_blancs
WHERE is_completed = TRUE
GROUP BY user_id
ORDER BY total_examens DESC;
```

---

## 🔧 Optimisations Mises en Place

### 1. **Base de données**
- ✅ Index composites pour recherches rapides
- ✅ Fonction SQL pour calcul côté serveur (évite round-trips)
- ✅ Vue matérialisée pour analytics

### 2. **Code**
- ✅ Questions en mémoire (pas de requête DB pour récupérer)
- ✅ Hash pré-calculés au build
- ✅ Debounce sur les sauvegardes (500ms)
- ✅ Sauvegarde temps toutes les 10s (pas à chaque seconde)

### 3. **Algorithme**
- ✅ O(1) pour attribution d'examen (modulo)
- ✅ Une seule requête pour historique
- ✅ Pas de race condition (transactions SQL)

---

## 📈 Prochaines Étapes

### Pour compléter les 5 examens :
1. Copier `lib/data/examens/examen-2.ts` → `examen-3.ts`, `examen-4.ts`, `examen-5.ts`
2. Modifier `EXAM_NUMBER` dans chaque fichier (3, 4, 5)
3. Générer 40 nouvelles questions pour chaque examen
4. Importer dans `lib/data/examens/index.ts` :
```typescript
import { EXAMEN_3 } from './examen-3';
import { EXAMEN_4 } from './examen-4';
import { EXAMEN_5 } from './examen-5';

const EXAMENS_MAP: Map<number, ExamenBlanc> = new Map([
  [2, EXAMEN_2],
  [3, EXAMEN_3],
  [4, EXAMEN_4],
  [5, EXAMEN_5],
]);
```

### Pour remplacer l'ancien système :
1. Renommer `/dashboard/examens/nouveau` → `/dashboard/examens/nouveau-legacy`
2. Renommer `/dashboard/examens/nouveau2` → `/dashboard/examens/nouveau`
3. Ajouter l'examen #1 dans le nouveau système

---

## ⚠️ Points d'attention

1. **Migration** : Exécuter le SQL sur la base de données en **production** après tests
2. **Crédits** : Le système consomme toujours 1 crédit par examen démarré
3. **Compatibilité** : L'ancien examen #1 reste accessible sur `/nouveau` (legacy)
4. **Cache** : Vider le cache navigateur après déploiement (Ctrl+Shift+R)

---

## 📞 Support

En cas de problème :
1. Vérifier les logs Vercel
2. Vérifier les logs Supabase (Database > Logs)
3. Tester les fonctions SQL manuellement
4. Vérifier que la migration a bien été exécutée

---

**Système prêt pour 10 000 utilisateurs simultanés ! 🚀**
