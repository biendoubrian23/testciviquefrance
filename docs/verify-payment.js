// Script de vérification post-paiement
// Usage : node verify-payment.js votre@email.com

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// Charger les variables depuis .env.local
const envPath = path.join(__dirname, '.env.local');
if (fs.existsSync(envPath)) {
  const envFile = fs.readFileSync(envPath, 'utf8');
  envFile.split('\n').forEach(line => {
    // Ignorer les lignes vides et les commentaires
    if (!line || line.trim().startsWith('#')) return;
    
    const match = line.match(/^([^=:#]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      let value = match[2].trim();
      
      // Supprimer les guillemets si présents
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      process.env[key] = value;
    }
  });
}

const email = process.argv[2];

if (!email) {
  console.log('❌ Usage: node verify-payment.js votre@email.com');
  process.exit(1);
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

async function verifyPayment() {
  console.log('\n🔍 VÉRIFICATION DU PAIEMENT POUR:', email);
  console.log('='.repeat(60));

  try {
    // Récupérer le profil
    const { data: profile, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('email', email)
      .single();

    if (error) {
      console.log('\n❌ ERREUR:', error.message);
      return;
    }

    if (!profile) {
      console.log('\n❌ Aucun utilisateur trouvé avec cet email');
      return;
    }

    console.log('\n📊 INFORMATIONS DU PROFIL\n');

    // Vérifications
    const checks = [
      {
        name: 'Email',
        value: profile.email,
        status: profile.email ? '✅' : '❌',
      },
      {
        name: 'Stripe Customer ID',
        value: profile.stripe_customer_id || 'Non défini',
        status: profile.stripe_customer_id ? '✅' : '❌',
      },
      {
        name: 'Stripe Subscription ID',
        value: profile.stripe_subscription_id || 'Non défini',
        status: profile.stripe_subscription_id ? '✅' : '❌',
      },
      {
        name: 'Stripe Price ID',
        value: profile.stripe_price_id || 'Non défini',
        status: profile.stripe_price_id ? '✅' : '❌',
      },
      {
        name: 'Statut abonnement',
        value: profile.subscription_status || 'inactive',
        status: profile.subscription_status === 'active' ? '✅' : '❌',
      },
      {
        name: 'Accès Premium',
        value: profile.is_premium ? 'Oui' : 'Non',
        status: profile.is_premium ? '✅' : '❌',
      },
      {
        name: 'Date de début',
        value: profile.subscription_start_date ? new Date(profile.subscription_start_date).toLocaleString('fr-FR') : 'Non défini',
        status: profile.subscription_start_date ? '✅' : '❌',
      },
      {
        name: 'Date de fin',
        value: profile.subscription_end_date ? new Date(profile.subscription_end_date).toLocaleString('fr-FR') : 'Non défini',
        status: profile.subscription_end_date ? '✅' : '❌',
      },
    ];

    checks.forEach(check => {
      console.log(`${check.status} ${check.name.padEnd(25)} : ${check.value}`);
    });

    // Déterminer le plan
    console.log('\n💰 PLAN SOUSCRIT\n');
    if (profile.stripe_price_id === 'price_1Sc3qxEuT9agNbEUdX0RkLM4') {
      console.log('📦 Pack Standard - 2,99€/semaine');
    } else if (profile.stripe_price_id === 'price_1Sc3rPEuT9agNbEU65mDE4RP') {
      console.log('👑 Premium - 6,99€/semaine');
    } else if (profile.stripe_price_id === 'price_1Sc3rnEuT9agNbEUjrVnwyaq') {
      console.log('📝 Pack Examen - 2,50€ (paiement unique)');
    } else if (profile.stripe_price_id) {
      console.log('❓ Plan inconnu:', profile.stripe_price_id);
    } else {
      console.log('❌ Aucun plan souscrit');
    }

    // Résumé
    console.log('\n' + '='.repeat(60));
    console.log('📋 RÉSUMÉ\n');

    const allGood = profile.stripe_customer_id &&
                    profile.stripe_subscription_id &&
                    profile.subscription_status === 'active' &&
                    profile.is_premium;

    if (allGood) {
      console.log('✅ TOUT EST OK ! L\'intégration fonctionne parfaitement.');
      console.log('\n🎉 L\'utilisateur a bien accès aux fonctionnalités premium.');
      console.log('\n🔗 Liens utiles :');
      console.log(`   - Stripe Customer: https://dashboard.stripe.com/test/customers/${profile.stripe_customer_id}`);
      console.log(`   - Stripe Subscription: https://dashboard.stripe.com/test/subscriptions/${profile.stripe_subscription_id}`);
    } else {
      console.log('⚠️  PROBLÈME DÉTECTÉ !\n');
      
      if (!profile.stripe_customer_id) {
        console.log('❌ Pas de Customer ID Stripe');
        console.log('   → Le webhook checkout.session.completed n\'a pas été reçu');
      }
      
      if (!profile.stripe_subscription_id) {
        console.log('❌ Pas de Subscription ID');
        console.log('   → L\'abonnement n\'a pas été créé dans Supabase');
      }
      
      if (profile.subscription_status !== 'active') {
        console.log('❌ Abonnement pas actif');
        console.log('   → Statut actuel:', profile.subscription_status);
      }
      
      if (!profile.is_premium) {
        console.log('❌ Accès premium non accordé');
        console.log('   → Vérifiez la logique dans le webhook handler');
      }

      console.log('\n📝 Actions à faire :');
      console.log('   1. Vérifiez que stripe listen est actif');
      console.log('   2. Vérifiez les logs du terminal npm run dev');
      console.log('   3. Vérifiez les webhooks dans Stripe Dashboard');
      console.log('   4. Consultez VERIFICATION_PAIEMENT.md pour le débogage');
    }

    console.log('\n');

  } catch (err) {
    console.error('\n❌ ERREUR:', err.message);
  }
}

verifyPayment();
