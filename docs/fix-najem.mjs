const SUPABASE_URL = 'https://exlwbyfxuhitctiwjech.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4bHdieWZ4dWhpdGN0aXdqZWNoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NDkzMDU3NywiZXhwIjoyMDgwNTA2NTc3fQ.KwBruDK_6wzN2XGr9J-LWNJTP0-EbUd4i0_YN7FNAE4';

async function fixNajem() {
  console.log('Correction du profil Helmi Najem...');
  
  // D'abord récupérer l'ID de l'utilisateur
  const getResponse = await fetch(
    `${SUPABASE_URL}/rest/v1/profiles?email=eq.najem.helmi.shop@outlook.com&select=id`,
    {
      headers: {
        'apikey': SERVICE_ROLE_KEY,
        'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );
  
  const profiles = await getResponse.json();
  if (!profiles || profiles.length === 0) {
    console.log('Utilisateur non trouvé');
    return;
  }
  
  const userId = profiles[0].id;
  console.log('User ID:', userId);
  
  // Mettre à jour le profil pour passer en mode gratuit
  const updateResponse = await fetch(
    `${SUPABASE_URL}/rest/v1/profiles?id=eq.${userId}`,
    {
      method: 'PATCH',
      headers: {
        'apikey': SERVICE_ROLE_KEY,
        'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify({
        is_premium: false,
        subscription_status: 'canceled',
        stripe_price_id: null,
        subscription_start_date: null,
        subscription_end_date: null,
        stripe_subscription_id: null
      })
    }
  );
  
  if (!updateResponse.ok) {
    console.log('Erreur mise à jour:', updateResponse.status, await updateResponse.text());
    return;
  }
  
  const updated = await updateResponse.json();
  console.log('\n✅ Profil mis à jour avec succès!');
  console.log('Nouveau statut:');
  console.log('- is_premium:', updated[0].is_premium);
  console.log('- subscription_status:', updated[0].subscription_status);
  console.log('- subscription_tier:', updated[0].subscription_tier);
}

fixNajem().catch(console.error);
