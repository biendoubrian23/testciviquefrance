import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';
import fs from 'fs';
import path from 'path';

// Helper to parse env file
function parseEnv(filePath: string) {
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        return {};
    }
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

// Load env vars
const cwd = process.cwd();
const envMain = parseEnv(path.join(cwd, '.env'));
const envLocal = parseEnv(path.join(cwd, '.env.local'));
const env = { ...envMain, ...envLocal, ...process.env };

const STRIPE_SECRET_KEY = env.STRIPE_SECRET_KEY;
const SUPABASE_URL = env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = env.SUPABASE_SERVICE_ROLE_KEY;

if (!STRIPE_SECRET_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.error('Missing environment variables.');
    process.exit(1);
}

const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: '2025-11-17.clover' as any });
const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const targetEmail = 'youcefseker390@gmail.com';

async function main() {
    console.log(`\nDiagnostic for: ${targetEmail}`);

    // 1. Supabase Check
    console.log('\n--- SUPABASE DATA ---');
    const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('email', targetEmail)
        .single();

    if (profile) {
        console.log(`Profile ID: ${profile.id}`);
        console.log(`Email: ${profile.email}`);
        console.log(`Stripe Customer ID (DB): ${profile.stripe_customer_id}`);
        console.log(`Subscription Status: ${profile.subscription_status}`);
        console.log(`Is Premium: ${profile.is_premium}`);
    } else {
        console.log('❌ Profile NOT found in Supabase.');
    }

    // 2. Stripe Check
    console.log('\n--- STRIPE DATA ---');
    const customers = await stripe.customers.list({ email: targetEmail, limit: 5 });

    if (customers.data.length > 0) {
        for (const cust of customers.data) {
            console.log(`✅ Stripe Customer Found: ${cust.id}`);
            console.log(`   Email: ${cust.email}`);

            const subs = await stripe.subscriptions.list({ customer: cust.id });
            subs.data.forEach(sub => {
                console.log(`   Subscription: ${sub.id} | Status: ${sub.status} | Plan: ${sub.items.data[0]?.price.id}`);
            });
        }
    } else {
        console.log('❌ No Stripe customer found with this email.');
    }
}

main().catch(console.error);
