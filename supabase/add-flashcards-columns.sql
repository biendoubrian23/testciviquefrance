-- Migration pour ajouter les colonnes Flashcards dans la table profiles
-- Les Flashcards sont des achats ponctuels qui nécessitent un abonnement actif

-- Ajouter les colonnes pour les achats Flashcards
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS flashcards_2_themes BOOLEAN DEFAULT FALSE;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS flashcards_5_themes BOOLEAN DEFAULT FALSE;
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS flashcards_purchased_at TIMESTAMPTZ;

-- Commentaires pour documentation
COMMENT ON COLUMN profiles.flashcards_2_themes IS 'Achat ponctuel Flashcards 2 thèmes (1,20€) - Débloque: Principes et valeurs + Histoire et géographie';
COMMENT ON COLUMN profiles.flashcards_5_themes IS 'Achat ponctuel Flashcards 5 thèmes (1,50€) - Débloque tous les thèmes';
COMMENT ON COLUMN profiles.flashcards_purchased_at IS 'Date du dernier achat de Flashcards';

-- Les Flashcards nécessitent un abonnement actif (Standard ou Premium)
-- flashcards_2_themes débloque: Principes et valeurs + Histoire et géographie
-- flashcards_5_themes débloque: tous les 5 thèmes
