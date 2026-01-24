import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

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
            const key = match[1];
            let value = match[2] || '';
            if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }
            env[key] = value;
        }
    });
    return env;
}

const cwd = process.cwd();
const envMain = parseEnv(path.join(cwd, '.env'));
const envLocal = parseEnv(path.join(cwd, '.env.local'));
const env = { ...envMain, ...envLocal, ...process.env };

const SUPABASE_URL = env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.error('Missing Supabase environment variables.');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
const targetEmail = 'ibtissem.chaieb@gmail.com'; // Reuse this user for safety as test subject

// Mock Data matching Stripe Checkout Session
const MOCK_SESSION_ID = 'cs_test_SIMULATION_SUBSCRIPTION';
const MOCK_CUSTOMER_ID = 'cus_SIMULATION_SUB';
const MOCK_SUBSCRIPTION_ID = 'sub_SIMULATION_123';
const MOCK_PRICE_ID = 'price_1Sc3AqIUG5GUejFZagJyV8HC'; // Standard Production Price ID

async function main() {
    console.log(`Simulating Checkout Session for ${targetEmail}...`);

    // 1. Get User ID to verifying pre-state
    const { data: preProfile } = await supabase.from('profiles').select('*').eq('email', targetEmail).single();
    console.log('PRE-STATE:', {
        is_premium: preProfile?.is_premium,
        status: preProfile?.subscription_status
    });

    // 2. Perform the update logically equivalent to handleCheckoutCompleted
    // We can't call the function directly as it's not exported, so we verify logic by replicating it
    // or by running a script that calls the webhook endpoint?
    // Calling webhook endpoint is better to test the ROUTE logic.

    // BUT: calling localhost endpoint from here is tricky if server not running.
    // Instead, let's replicate the DB update logic exactly as found in route.ts to see if it works.

    const now = Math.floor(Date.now() / 1000);

    const { error: updateError, data: updated } = await supabase
        .from('profiles')
        .update({
            stripe_customer_id: MOCK_CUSTOMER_ID,
            stripe_subscription_id: MOCK_SUBSCRIPTION_ID,
            stripe_price_id: MOCK_PRICE_ID,
            subscription_status: 'trialing', // Simulating a TRIAL
            subscription_start_date: new Date(now * 1000).toISOString(),
            subscription_end_date: new Date((now + 86400) * 1000).toISOString(), // +1 day
            is_premium: true, // This is what the code explicitly sets
            subscription_exams_used: 0,
        })
        .eq('id', preProfile?.id)
        .select()
        .single();

    if (updateError) {
        console.error('Update Failed:', updateError);
    } else {
        console.log('POST-STATE (Simulation Success):', {
            is_premium: updated.is_premium,
            status: updated.subscription_status
        });

        // Check if is_premium persisted as TRUE given status is 'trialing'
        if (updated.is_premium === true && updated.subscription_status === 'trialing') {
            console.log('✅ Logic confirms: "trialing" status CAN coexist with is_premium=true in DB.');
        } else {
            console.log('❌ Logic mismatch: Database might have triggers or constraints?');
        }
    }

    // Cleanup
    console.log('Cleaning up...');
    await supabase.from('profiles').update({
        stripe_customer_id: preProfile?.stripe_customer_id,
        stripe_subscription_id: preProfile?.stripe_subscription_id,
        stripe_price_id: preProfile?.stripe_price_id,
        subscription_status: preProfile?.subscription_status,
        is_premium: preProfile?.is_premium
    }).eq('id', preProfile?.id);
}

main().catch(console.error);
