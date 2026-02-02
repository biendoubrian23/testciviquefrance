import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';
import * as fs from 'fs';
import * as path from 'path';

function loadEnv(filePath: string) {
    console.log(`Loading env from ${filePath}`);
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        return;
    }
    try {
        let envContent = fs.readFileSync(filePath, 'utf8');
        // Remove BOM
        if (envContent.charCodeAt(0) === 0xFEFF) {
            envContent = envContent.slice(1);
        }

        const lines = envContent.split(/\r?\n/);
        console.log(`Read ${lines.length} lines from ${filePath}`);

        lines.forEach(line => {
            const trimmedLine = line.trim();
            if (!trimmedLine || trimmedLine.startsWith('#')) return;

            const parts = trimmedLine.split('=');
            if (parts.length >= 2) {
                const key = parts[0].trim();
                const value = parts.slice(1).join('=').trim().replace(/^["']|["']$/g, '');
                if (key && value) {
                    process.env[key] = value;
                }
            }
        });
    } catch (e) {
        console.error(`Could not read ${filePath}`, e);
    }
}

// Try loading both
loadEnv(path.resolve(process.cwd(), '.env'));
loadEnv(path.resolve(process.cwd(), 'admin-dashboard', '.env'));

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!supabaseUrl || !supabaseServiceKey || !stripeSecretKey) {
    console.error('Missing environment variables');
    console.log('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? 'Set' : 'Missing');
    console.log('SUPABASE_SERVICE_ROLE_KEY:', supabaseServiceKey ? 'Set' : 'Missing');
    console.log('STRIPE_SECRET_KEY:', stripeSecretKey ? 'Set' : 'Missing');

    console.log('Available Env Keys:', Object.keys(process.env).filter(k => k.includes('SUPABASE') || k.includes('STRIPE')));
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const stripe = new Stripe(stripeSecretKey, { apiVersion: '2024-10-28.acacia' });

async function main() {
    const email = 'enablermoney@gmail.com';
    console.log(`Investigating user: ${email}`);

    // 1. Check Supabase
    console.log('--- Supabase ---');
    const { data: profiles, error: profileError } = await supabase
        .from('profiles')
        .select('*')
        .eq('email', email);

    if (profileError) {
        console.error('Supabase Error:', profileError);
        return;
    }

    if (!profiles || profiles.length === 0) {
        console.log('User not found in Supabase.');
    } else {
        console.log('Supabase Profile Found:');
        profiles.forEach(p => {
            console.log(`ID: ${p.id}`);
            console.log(`Email: ${p.email}`);
            console.log(`Is Premium: ${p.is_premium}`);
            console.log(`Stripe Price ID: ${p.stripe_price_id}`);
            console.log(`Subscription Status: ${p.subscription_status}`);
            console.log(`Subscription End Date: ${p.subscription_end_date}`);
            console.log(`Stripe Customer ID: ${p.stripe_customer_id}`);
            console.log('----------------');
        });

        const profile = profiles[0];

        // 2. Check Stripe
        console.log('\n--- Stripe ---');
        if (profile.stripe_customer_id) {
            console.log(`Checking Stripe Customer ID from profile: ${profile.stripe_customer_id}`);
            try {
                const customer = await stripe.customers.retrieve(profile.stripe_customer_id);
                if (customer.deleted) {
                    console.log('Customer is deleted in Stripe.');
                } else {
                    console.log(`Stripe Customer Email: ${(customer as Stripe.Customer).email}`);
                }

                const subscriptions = await stripe.subscriptions.list({
                    customer: profile.stripe_customer_id,
                    status: 'all',
                });
                console.log(`Found ${subscriptions.data.length} subscriptions.`);
                subscriptions.data.forEach(sub => {
                    console.log(`- Sub ID: ${sub.id}`);
                    console.log(`  Status: ${sub.status}`);
                    console.log(`  Plan: ${sub.items.data[0].price.id}`);
                    console.log(`  Current Period End: ${new Date(sub.current_period_end * 1000).toISOString()}`);
                    console.log(`  Canceled At: ${sub.canceled_at ? new Date(sub.canceled_at * 1000).toISOString() : 'N/A'}`);
                });

            } catch (e) {
                console.error('Error retrieving customer from Stripe:', e);
            }
        } else {
            console.log('No stripe_customer_id in profile.');
        }

        console.log('\n--- Searching Stripe by Email ---');
        const customers = await stripe.customers.list({ email: email });
        console.log(`Found ${customers.data.length} customers with email ${email}`);

        for (const cust of customers.data) {
            console.log(`Customer ID: ${cust.id}`);
            const subscriptions = await stripe.subscriptions.list({
                customer: cust.id,
                status: 'all',
            });
            console.log(`Subscriptions for ${cust.id}:`);
            subscriptions.data.forEach(sub => {
                console.log(`  - Sub ID: ${sub.id}`);
                console.log(`    Status: ${sub.status}`);
                console.log(`    Plan: ${sub.items.data[0].price.id}`);
                console.log(`    Current Period End: ${new Date(sub.current_period_end * 1000).toISOString()}`);
                console.log(`    Canceled At: ${sub.canceled_at ? new Date(sub.canceled_at * 1000).toISOString() : 'N/A'}`);
            });
        }
    }
}

main().catch(console.error);
