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
    console.log(`Reading env file: ${filePath}`);
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
            // Remove surrounding quotes if matching
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
console.log(`Current working directory: ${cwd}`);

const envMain = parseEnv(path.join(cwd, '.env'));
const envLocal = parseEnv(path.join(cwd, '.env.local'));

const env = { ...envMain, ...envLocal, ...process.env };

const STRIPE_SECRET_KEY = env.STRIPE_SECRET_KEY;
const SUPABASE_URL = env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = env.SUPABASE_SERVICE_ROLE_KEY;

console.log('--- Env Var Check ---');
console.log('STRIPE_SECRET_KEY:', STRIPE_SECRET_KEY ? 'Set (Length: ' + STRIPE_SECRET_KEY.length + ')' : 'Missing');
console.log('NEXT_PUBLIC_SUPABASE_URL:', SUPABASE_URL ? 'Set' : 'Missing');
console.log('SUPABASE_SERVICE_ROLE_KEY:', SUPABASE_SERVICE_ROLE_KEY ? 'Set (Length: ' + SUPABASE_SERVICE_ROLE_KEY.length + ')' : 'Missing');

if (!STRIPE_SECRET_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    console.error('Missing environment variables. Please check .env and .env.local');
    process.exit(1);
}

const stripe = new Stripe(STRIPE_SECRET_KEY, {
    apiVersion: '2025-11-17.clover' as any,
});

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

const targetEmail = 'ibtissem.chaieb@gmail.com';

async function main() {
    console.log('--- DIAGNOSTIC START ---');
    console.log(`Key Prefix: ${STRIPE_SECRET_KEY.substring(0, 7)}...`);

    // 1. Check Stripe Account
    try {
        const account = await stripe.accounts.retrieve();
        console.log(`Connected to Stripe Account: ${account.settings?.dashboard?.display_name} (${account.id})`);
    } catch (e: any) {
        console.error('Could not retrieve account details (expected if standard key):', e.message);
    }

    // 2. Search for the customer broadly
    console.log(`\nSearching for customer: ${targetEmail}`);
    const customers = await stripe.customers.list({ email: targetEmail, limit: 5 });

    let stripeCustomer: Stripe.Customer | null = null;

    if (customers.data.length === 0) {
        console.error('❌ Customer NOT found in Stripe via explicit email search.');
        console.log('Running fallback: Checking recent charges/intents to see if we can find the email in metadata.');

        // Fallback: list recent charges and check receipt_email
        const charges = await stripe.charges.list({ limit: 20 });
        const match = charges.data.find(c => c.receipt_email === targetEmail || c.billing_details?.email === targetEmail);
        if (match) {
            console.log('✅ Found a charge for this email!');
            console.log(`   Charge ID: ${match.id}`);
            if (typeof match.customer === 'string') {
                stripeCustomer = await stripe.customers.retrieve(match.customer) as Stripe.Customer;
                console.log(`   Resolved Customer ID from charge: ${stripeCustomer.id}`);
            }
        } else {
            console.log('❌ No recent charges found for this email in the last 20 transactions.');
        }
    } else {
        stripeCustomer = customers.data[0];
        console.log(`✅ Customer Found: ${stripeCustomer.id}`);
        console.log(`   Email: ${stripeCustomer.email}`);
        console.log(`   Created: ${new Date(stripeCustomer.created * 1000).toISOString()}`);
        console.log(`   Del: ${stripeCustomer.deleted}`);
    }

    // 3. Inspect recent webhooks events (from Stripe API)
    console.log('\n--- RECENT STRIPE EVENTS (Last 20) ---');
    const events = await stripe.events.list({ limit: 20 });

    const relevantEvents = events.data.filter(e => {
        // Check if event relates to our customer if we found one
        if (stripeCustomer && (e.data.object as any).customer === stripeCustomer.id) return true;

        // Or check if email is inside the object
        const obj = e.data.object as any;
        if (obj.email === targetEmail) return true;
        if (obj.customer_email === targetEmail) return true;
        if (obj.customer_details?.email === targetEmail) return true;
        return false;
    });

    if (relevantEvents.length > 0) {
        console.log(`Found ${relevantEvents.length} relevant events for this user/customer.`);
        for (const event of relevantEvents) {
            console.log(`Event: ${event.type} [${event.id}] - ${new Date(event.created * 1000).toISOString()}`);

            // DIAGNOSIS: Why did this not update DB?
            if (event.type === 'customer.subscription.updated') {
                const sub = event.data.object as Stripe.Subscription;
                console.log('   Subscription Status:', sub.status);
                console.log('   Items:', sub.items.data.map(i => i.price.id).join(', '));
            }
        }
    } else {
        console.log('No recent events found specifically matching this user in the last 20 events.');
        console.log('Listing ALL last 5 events to sanity check environment:');
        events.data.slice(0, 5).forEach(e => {
            const obj = e.data.object as any;
            const email = obj.email || obj.customer_email || obj.customer_details?.email || 'no-email';
            console.log(`   ${e.type} - ${email}`);
        });
    }

    // 4. Supabase Check
    console.log('\n--- SUPABASE DATA ---');
    const { data: profile } = await supabase
        .from('profiles')
        .select('*')
        .eq('email', targetEmail)
        .single();

    if (profile) {
        console.log(`Profile: ${profile.id}`);
        console.log(`   Stripe Customer in DB: ${profile.stripe_customer_id}`);
        console.log(`   Subscription Status: ${profile.subscription_status}`);
        console.log(`   Is Premium: ${profile.is_premium}`);

        if (stripeCustomer && profile.stripe_customer_id !== stripeCustomer.id) {
            console.warn(`⚠️ MISMATCH: DB has customer ${profile.stripe_customer_id}, but Stripe says ${stripeCustomer.id}`);
        }
    } else {
        console.log('Profile not found in Supabase.');
    }

}

main().catch(console.error);
