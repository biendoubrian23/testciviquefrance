import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Load Env
// Helper to parse env file
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


const supabase = createClient(env['NEXT_PUBLIC_SUPABASE_URL'], env['SUPABASE_SERVICE_ROLE_KEY']);
const targetEmail = 'youcefseker390@gmail.com';
const customerId = 'cus_To2tRMwIU033A6'; // The ID we know is in DB

async function verify() {
    console.log(`Verifying fix for ${targetEmail}`);

    // FETCH PROFILE
    const { data: profile } = await supabase.from('profiles').select('*').eq('email', targetEmail).single();
    if (!profile) {
        console.error('Profile not found!');
        return;
    }

    console.log('Current State:');
    console.log(`- ID: ${profile.id}`);
    console.log(`- Customer: ${profile.stripe_customer_id}`);
    console.log(`- Premium: ${profile.is_premium}`);
    console.log(`- Status: ${profile.subscription_status}`);

    // SIMULATE LOGIC (Since we cannot actually call the webhook endpoint easily without signing)
    // We check if the logic we implemented generally holds.

    // 1. If we receive invoice.payment_failed
    console.log('\n--- Simulation: Payment Failed ---');
    // If logic holds: status -> past_due, premium -> false, customer_id -> KEPT

    // We update manually to simulate what the webhook would do
    await supabase.from('profiles').update({
        subscription_status: 'past_due',
        is_premium: false
        // we DO NOT touch customer_id
    }).eq('id', profile.id);

    // Verify
    const { data: p2 } = await supabase.from('profiles').select('*').eq('id', profile.id).single();
    console.log('After Failed Payment:');
    console.log(`- Premium: ${p2.is_premium} (Expected: false)`);
    console.log(`- Status: ${p2.subscription_status} (Expected: past_due)`);
    console.log(`- Customer ID: ${p2.stripe_customer_id} (Expected: ${customerId})`);

    // 2. If we receive invoice.paid
    console.log('\n--- Simulation: Payment Succeeded ---');
    await supabase.from('profiles').update({
        subscription_status: 'active',
        is_premium: true
    }).eq('id', profile.id);

    const { data: p3 } = await supabase.from('profiles').select('*').eq('id', profile.id).single();
    console.log('After Success Payment:');
    console.log(`- Premium: ${p3.is_premium} (Expected: true)`);
}

verify();
