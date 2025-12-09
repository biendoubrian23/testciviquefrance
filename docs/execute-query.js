const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://exlwbyfxuhitctiwjech.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4bHdieWZ4dWhpdGN0aXdqZWNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5MzA1NzcsImV4cCI6MjA4MDUwNjU3N30.TUTUpSC4C2kbwiWnM5SBn68sffDIAZJfAC5XEegYTK0';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function executeQuery() {
  try {
    const { data, error } = await supabase
      .from('questions')
      .select(`
        id,
        difficulte,
        question,
        created_at,
        categorie_id,
        reponses (
          id,
          texte,
          est_correcte
        ),
        categories!inner (
          nom
        )
      `)
      .eq('categories.nom', 'Principes et valeurs de la République')
      .in('difficulte', [1, 2, 3])
      .order('difficulte')
      .order('created_at');

    if (error) {
      console.error('Erreur Supabase:', error);
      return;
    }

    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error('Erreur:', err);
  }
}

executeQuery();
