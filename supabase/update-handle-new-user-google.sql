-- Mise à jour de la fonction handle_new_user pour gérer les connexions Google
-- =====================================================
-- Cette fonction gère maintenant :
-- 1. Les inscriptions classiques (email/password)
-- 2. Les connexions Google OAuth (récupère prénom/nom depuis Google)

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
  user_prenom TEXT;
  user_nom TEXT;
  full_name TEXT;
BEGIN
  -- Récupérer le nom complet depuis Google (si connexion OAuth)
  full_name := NEW.raw_user_meta_data->>'full_name';
  
  -- Si connexion Google, extraire prénom et nom
  IF full_name IS NOT NULL AND full_name != '' THEN
    -- Séparer le nom complet (ex: "John Doe" -> prenom="John", nom="Doe")
    user_prenom := split_part(full_name, ' ', 1);
    user_nom := substring(full_name from position(' ' in full_name) + 1);
    -- Si pas d'espace dans le nom, mettre tout dans prénom
    IF user_nom = '' OR user_nom = full_name THEN
      user_nom := NULL;
    END IF;
  ELSE
    -- Inscription classique - utiliser les métadonnées fournies
    user_prenom := NEW.raw_user_meta_data->>'prenom';
    user_nom := NEW.raw_user_meta_data->>'nom';
  END IF;

  -- Créer le profil SEULEMENT si il n'existe pas
  -- Ne PAS modifier has_completed_onboarding si le profil existe déjà
  INSERT INTO public.profiles (id, email, prenom, nom, has_completed_onboarding)
  VALUES (
    NEW.id,
    NEW.email,
    user_prenom,
    user_nom,
    FALSE  -- FALSE uniquement pour les NOUVEAUX utilisateurs
  )
  ON CONFLICT (id) DO UPDATE SET
    email = EXCLUDED.email,
    prenom = COALESCE(profiles.prenom, EXCLUDED.prenom),
    nom = COALESCE(profiles.nom, EXCLUDED.nom);
    -- Ne PAS toucher à has_completed_onboarding pour les utilisateurs existants
  
  -- Créer les statistiques si elles n'existent pas
  INSERT INTO public.statistiques (user_id)
  VALUES (NEW.id)
  ON CONFLICT (user_id) DO NOTHING;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Recréer le trigger
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
