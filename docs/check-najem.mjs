const SUPABASE_URL = 'https://exlwbyfxuhitctiwjech.supabase.co';
const SERVICE_ROLE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4bHdieWZ4dWhpdGN0aXdqZWNoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NDkzMDU3NywiZXhwIjoyMDgwNTA2NTc3fQ.KwBruDK_6wzN2XGr9J-LWNJTP0-EbUd4i0_YN7FNAE4';

async function checkUser() {
  console.log('Recherche du profil Helmi Najem...');
  
  const response = await fetch(
    `${SUPABASE_URL}/rest/v1/profiles?email=eq.najem.helmi.shop@outlook.com&select=id,email,prenom,nom,is_premium,subscription_status,stripe_price_id,subscription_start_date,subscription_end_date,credits,exam_credits,stripe_customer_id`,
    {
      headers: {
        'apikey': SERVICE_ROLE_KEY,
        'Authorization': `Bearer ${SERVICE_ROLE_KEY}`,
        'Content-Type': 'application/json'
      }
    }
  );
  
  if (!response.ok) {
    console.log('Erreur HTTP:', response.status, await response.text());
    return;
  }
  
  const profiles = await response.json();
  
  if (!profiles || profiles.length === 0) {
    console.log('Aucun profil trouvé pour cet email');
    return;
  }
  
  const data = profiles[0];
  console.log('\n=== Profil Helmi Najem ===');
  console.log('Email:', data.email);
  console.log('Nom:', data.prenom, data.nom);
  console.log('is_premium:', data.is_premium);
  console.log('subscription_status:', data.subscription_status);
  console.log('stripe_price_id:', data.stripe_price_id);
  console.log('subscription_start_date:', data.subscription_start_date);
  console.log('subscription_end_date:', data.subscription_end_date);
  console.log('credits:', data.credits);
  console.log('exam_credits:', data.exam_credits);
  console.log('stripe_customer_id:', data.stripe_customer_id);
}

checkUser().catch(console.error);
