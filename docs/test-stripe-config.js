// Script de test pour vérifier la configuration Stripe + Supabase
// Exécutez : node test-stripe-config.js

const fs = require('fs');
const path = require('path');

// Charger les variables depuis .env.local
const envPath = path.join(__dirname, '.env.local');
if (fs.existsSync(envPath)) {
  const envFile = fs.readFileSync(envPath, 'utf8');
  envFile.split('\n').forEach(line => {
    const match = line.match(/^([^=:#]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim();
      process.env[key] = value;
    }
  });
}

console.log('\n🔍 VÉRIFICATION DE LA CONFIGURATION\n');

// Vérifier les variables d'environnement
const checks = {
  'NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY': process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  'STRIPE_SECRET_KEY': process.env.STRIPE_SECRET_KEY,
  'STRIPE_WEBHOOK_SECRET': process.env.STRIPE_WEBHOOK_SECRET,
  'NEXT_PUBLIC_SUPABASE_URL': process.env.NEXT_PUBLIC_SUPABASE_URL,
  'NEXT_PUBLIC_SUPABASE_ANON_KEY': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  'SUPABASE_SERVICE_ROLE_KEY': process.env.SUPABASE_SERVICE_ROLE_KEY,
};

let allGood = true;

Object.entries(checks).forEach(([key, value]) => {
  const status = value ? '✅' : '❌';
  const display = value ? `${value.substring(0, 20)}...` : 'NON DÉFINIE';
  console.log(`${status} ${key}: ${display}`);
  if (!value) allGood = false;
});

console.log('\n📋 RÉSUMÉ\n');

if (allGood) {
  console.log('✅ Toutes les variables sont configurées !');
  console.log('\n🚀 Prochaines étapes :');
  console.log('1. Ouvrez un terminal et lancez : stripe login');
  console.log('2. Puis lancez : stripe listen --forward-to localhost:3000/api/webhook/stripe');
  console.log('3. Copiez le webhook secret et ajoutez-le dans .env.local');
  console.log('4. Lancez votre app : npm run dev');
} else {
  console.log('❌ Il manque des variables d\'environnement');
  console.log('\n📝 À faire :');
  if (!checks.STRIPE_WEBHOOK_SECRET) {
    console.log('- Lancez "stripe listen" pour obtenir le STRIPE_WEBHOOK_SECRET');
  }
  if (!checks.SUPABASE_SERVICE_ROLE_KEY) {
    console.log('- Récupérez la Service Role Key depuis Supabase Dashboard');
  }
}

console.log('\n');
