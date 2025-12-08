-- =====================================================
-- OPTIMISATION: Index pour améliorer les performances
-- À exécuter dans l'éditeur SQL de Supabase
-- Ces index NE CASSENT RIEN - ils accélèrent seulement les requêtes
-- =====================================================

-- Index pour les requêtes sessions_quiz par utilisateur et catégorie
-- Utilisé par: page catégorie, dashboard progression
CREATE INDEX IF NOT EXISTS idx_sessions_quiz_user_categorie 
ON sessions_quiz(user_id, categorie_id, completed);

-- Index pour les requêtes sessions_quiz triées par date
-- Utilisé par: activité récente du dashboard
CREATE INDEX IF NOT EXISTS idx_sessions_quiz_user_completed_at 
ON sessions_quiz(user_id, completed, completed_at DESC);

-- Index pour la table statistiques
-- Utilisé par: dashboard stats
CREATE INDEX IF NOT EXISTS idx_statistiques_user 
ON statistiques(user_id);

-- Index pour progression_niveaux
-- Utilisé par: page catégorie
CREATE INDEX IF NOT EXISTS idx_progression_user_categorie
ON progression_niveaux(user_id, categorie_id);

-- Index pour gamification
-- Utilisé par: page catégorie (points et série)
CREATE INDEX IF NOT EXISTS idx_gamification_user
ON gamification(user_id);

-- =====================================================
-- VÉRIFICATION: Lister les index créés
-- =====================================================
-- SELECT indexname, tablename FROM pg_indexes WHERE schemaname = 'public';
