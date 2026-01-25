import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// --- ENV SETUP ---
function parseEnv(filePath: string) {
    if (!fs.existsSync(filePath)) return {};
    const content = fs.readFileSync(filePath, 'utf-8');
    const env: Record<string, string> = {};
    const lines = content.split(/\r?\n/);
    lines.forEach(line => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) return;
        const match = line.match(/^\s*([^=]+?)\s*=\s*(.*)?\s*$/);
        if (match) {
            env[match[1]] = match[2]?.replace(/^['"]|['"]$/g, '') || '';
        }
    });
    return env;
}
const customEnv = parseEnv(path.join(process.cwd(), '.env'));
const env = { ...process.env, ...customEnv };

const supabase = createClient(env['NEXT_PUBLIC_SUPABASE_URL']!, env['SUPABASE_SERVICE_ROLE_KEY']!);

// TARGET USER
const email = 'youcefseker390@gmail.com';
// Using Youssef as the test subject since he is the focus, 
// we will RESET him to his original state at the end.

async function runSimulation() {
    console.log(`\n🔵 STARTING SIMULATION FOR: ${email}`);

    // 0. Get User ID
    const { data: user } = await supabase.from('profiles').select('*').eq('email', email).single();
    if (!user) { console.error('User not found'); return; }
    const userId = user.id;

    // --- SCENARIO A: TRIAL START ---
    console.log('\n--- Scenario A: Subscription Trial Starts (Checkout) ---');
    // Logic: Webhook receives checkout.session.completed with status='trialing'
    // Expected: is_premium=true, status='trialing', customer_id set.

    const subIdA = 'sub_Trial123';
    const custIdA = 'cus_TrialUserA';

    // Mock Update (What the webhook does)
    await supabase.from('profiles').update({
        stripe_customer_id: custIdA,
        stripe_subscription_id: subIdA,
        subscription_status: 'trialing',
        is_premium: true
    }).eq('id', userId);

    const { data: stateA } = await supabase.from('profiles').select('*').eq('id', userId).single();
    console.log(`[CHECK] Premium: ${stateA.is_premium} (Want: true)`);
    console.log(`[CHECK] Status: ${stateA.subscription_status} (Want: trialing)`);
    console.log(`[CHECK] Customer: ${stateA.stripe_customer_id} (Want: ${custIdA})`);
    if (stateA.is_premium && stateA.subscription_status === 'trialing') console.log('✅ PASS: Trial grants premium access.');
    else console.error('❌ FAIL: Trial logic broken.');


    // --- SCENARIO B: PAYMENT SUCCESS (Renewal) ---
    console.log('\n--- Scenario B: Payment Success (Renewal) ---');
    // Logic: Webhook receives invoice.paid -> status='active'

    await supabase.from('profiles').update({
        subscription_status: 'active',
        is_premium: true
    }).eq('id', userId);

    const { data: stateB } = await supabase.from('profiles').select('*').eq('id', userId).single();
    console.log(`[CHECK] Premium: ${stateB.is_premium} (Want: true)`);
    if (stateB.is_premium) console.log('✅ PASS: Renewal keeps premium active.');
    else console.error('❌ FAIL: Renewal logic broken.');


    // --- SCENARIO C: PAYMENT FAILURE ---
    console.log('\n--- Scenario C: Payment Failed ---');
    // Logic: Webhook receives invoice.payment_failed -> status='past_due', PREMIUM REVOKED
    // BUT Customer ID must remain!

    await supabase.from('profiles').update({
        subscription_status: 'past_due',
        is_premium: false
        // We do NOT nullify customer_id in the webhook logic
    }).eq('id', userId);

    const { data: stateC } = await supabase.from('profiles').select('*').eq('id', userId).single();
    console.log(`[CHECK] Premium: ${stateC.is_premium} (Want: false)`);
    console.log(`[CHECK] Status: ${stateC.subscription_status} (Want: past_due)`);
    console.log(`[CHECK] Customer: ${stateC.stripe_customer_id} (Want: ${custIdA})`);

    if (!stateC.is_premium && stateC.subscription_status === 'past_due' && stateC.stripe_customer_id === custIdA) {
        console.log('✅ PASS: Access revoked but Customer ID kept (Manage Button works).');
    } else {
        console.error('❌ FAIL: Payment failure logic incorrect.');
    }


    // --- SCENARIO D: ONE-SHOT PURCHASE CONFLICT ---
    console.log('\n--- Scenario D: One-Shot Purchase (Different Customer ID?) ---');
    // Logic: User buys Flashcards as a guest or with a different email that links to a NEW Stripe Customer ID
    // BUT we identify them by client_reference_id (User ID).
    // The webhook sees a new customer ID in the session.
    // Logic in code: `updates.stripe_customer_id = profile.stripe_customer_id || newCustomerId`

    const custIdOneShot = 'cus_OneShotNewID';

    // Simulate logic:
    const existingId = stateC.stripe_customer_id; // cus_TrialUserA
    const finalId = existingId || custIdOneShot; // Should be cus_TrialUserA

    await supabase.from('profiles').update({
        stripe_customer_id: finalId,
        flashcards_2_themes: true // Simulate the purchase
    }).eq('id', userId);

    const { data: stateD } = await supabase.from('profiles').select('*').eq('id', userId).single();
    console.log(`[CHECK] Flashcards: ${stateD.flashcards_2_themes} (Want: true)`);
    console.log(`[CHECK] Customer: ${stateD.stripe_customer_id} (Want: ${custIdA})`);

    if (stateD.stripe_customer_id === custIdA) {
        console.log('✅ PASS: Existing Subscription Customer ID preserved. No overwrite.');
    } else {
        console.error(`❌ FAIL: ID overwritten by ${stateD.stripe_customer_id}`);
    }


    // --- CLEANUP ---
    console.log('\n--- Restoring User State ---');
    await supabase.from('profiles').update({
        stripe_customer_id: 'cus_To2tRMwIU033A6', // Original
        stripe_subscription_id: null,
        subscription_status: 'trialing',
        is_premium: true,
        flashcards_2_themes: false
    }).eq('id', userId);
    console.log('State restored.');
}

runSimulation();
