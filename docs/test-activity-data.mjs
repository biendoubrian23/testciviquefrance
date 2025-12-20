// Script de test pour vérifier les données en base
// Exécuter avec: node --env-file=.env docs/test-activity-data.mjs

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error('❌ Variables d\'environnement manquantes');
  console.log('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? '✅' : '❌');
  console.log('SUPABASE_SERVICE_ROLE_KEY:', serviceRoleKey ? '✅' : '❌');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey);

async function testQueries() {
  console.log('\n🔍 Test des requêtes de données d\'activité\n');
  console.log('='.repeat(50));

  // 1. Compter les sessions de quiz
  const { count: totalSessions, error: e1 } = await supabase
    .from('sessions_quiz')
    .select('*', { count: 'exact', head: true });
  console.log(`\n📊 Sessions de quiz (total): ${totalSessions || 0}`);
  if (e1) console.log('   Erreur:', e1.message);

  // 2. Dernières sessions
  const { data: recentSessions, error: e2 } = await supabase
    .from('sessions_quiz')
    .select('id, user_id, niveau, score, started_at, completed')
    .order('started_at', { ascending: false })
    .limit(5);
  console.log(`\n📝 Dernières sessions (5):`, recentSessions?.length || 0);
  if (recentSessions?.length > 0) {
    recentSessions.forEach(s => {
      console.log(`   - Niveau ${s.niveau}, Score: ${s.score}, ${s.started_at}`);
    });
  }
  if (e2) console.log('   Erreur:', e2.message);

  // 3. Compter les examens blancs
  const { count: totalExamens, error: e3 } = await supabase
    .from('examens_blancs')
    .select('*', { count: 'exact', head: true });
  console.log(`\n📊 Examens blancs (total): ${totalExamens || 0}`);
  if (e3) console.log('   Erreur:', e3.message);

  // 4. Derniers examens
  const { data: recentExamens, error: e4 } = await supabase
    .from('examens_blancs')
    .select('id, user_id, score, is_completed, started_at')
    .order('started_at', { ascending: false })
    .limit(5);
  console.log(`\n📝 Derniers examens (5):`, recentExamens?.length || 0);
  if (recentExamens?.length > 0) {
    recentExamens.forEach(e => {
      console.log(`   - Score: ${e.score}, Complété: ${e.is_completed}, ${e.started_at}`);
    });
  }
  if (e4) console.log('   Erreur:', e4.message);

  // 5. Compter les profils
  const { count: totalProfiles, error: e5 } = await supabase
    .from('profiles')
    .select('*', { count: 'exact', head: true });
  console.log(`\n📊 Profils (total): ${totalProfiles || 0}`);
  if (e5) console.log('   Erreur:', e5.message);

  // 6. Dernières inscriptions
  const { data: recentSignups, error: e6 } = await supabase
    .from('profiles')
    .select('id, email, prenom, created_at')
    .order('created_at', { ascending: false })
    .limit(5);
  console.log(`\n📝 Dernières inscriptions (5):`, recentSignups?.length || 0);
  if (recentSignups?.length > 0) {
    recentSignups.forEach(u => {
      console.log(`   - ${u.prenom || 'N/A'} (${u.email}), ${u.created_at}`);
    });
  }
  if (e6) console.log('   Erreur:', e6.message);

  // 7. Statistiques utilisateurs
  const { count: totalStats, error: e7 } = await supabase
    .from('statistiques')
    .select('*', { count: 'exact', head: true });
  console.log(`\n📊 Statistiques utilisateurs (total): ${totalStats || 0}`);
  if (e7) console.log('   Erreur:', e7.message);

  // 8. Dernières activités
  const { data: recentActivity, error: e8 } = await supabase
    .from('statistiques')
    .select('user_id, derniere_activite, total_quiz_completed')
    .order('derniere_activite', { ascending: false })
    .limit(5);
  console.log(`\n📝 Dernières activités (5):`, recentActivity?.length || 0);
  if (recentActivity?.length > 0) {
    recentActivity.forEach(a => {
      console.log(`   - Quiz complétés: ${a.total_quiz_completed}, Dernière: ${a.derniere_activite}`);
    });
  }
  if (e8) console.log('   Erreur:', e8.message);

  // 9. Achats
  const { count: totalAchats, error: e9 } = await supabase
    .from('achats')
    .select('*', { count: 'exact', head: true });
  console.log(`\n📊 Achats (total): ${totalAchats || 0}`);
  if (e9) console.log('   Erreur:', e9.message);

  console.log('\n' + '='.repeat(50));
  console.log('✅ Test terminé\n');
}

testQueries().catch(console.error);
