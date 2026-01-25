import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';
import fs from 'fs';
import path from 'path';

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

const cwd = process.cwd();
const envMain = parseEnv(path.join(cwd, '.env'));
const envLocal = parseEnv(path.join(cwd, '.env.local'));
const env = { ...envMain, ...envLocal, ...process.env };

const stripe = new Stripe(env.STRIPE_SECRET_KEY!, { apiVersion: '2025-11-17.clover' as any });

const customerId = 'cus_To2tRMwIU033A6';

async function main() {
    console.log(`Checking Customer ID: ${customerId}`);
    try {
        const customer = await stripe.customers.retrieve(customerId);
        if (customer.deleted) {
            console.log('Customer is deleted.');
            return;
        }
        console.log('Customer Email:', (customer as Stripe.Customer).email);
        console.log('Customer Metadata:', (customer as Stripe.Customer).metadata);

        const subscriptions = await stripe.subscriptions.list({ customer: customerId });
        console.log(`Found ${subscriptions.data.length} subscriptions.`);
        subscriptions.data.forEach(sub => {
            console.log(`- ID: ${sub.id}`);
            console.log(`  Status: ${sub.status}`);
            console.log(`  Current Period End: ${new Date(sub.current_period_end * 1000).toISOString()}`);
            console.log(`  Plan: ${sub.items.data[0].price.id}`);
        });

        const charges = await stripe.charges.list({ customer: customerId, limit: 5 });
        console.log(`Found ${charges.data.length} recent charges.`);
        charges.data.forEach(c => {
            console.log(`- Charge: ${c.id}, Amount: ${c.amount}, Paid: ${c.paid}, Status: ${c.status}`);
        });

    } catch (error: any) {
        console.error('Error retrieving customer:', error.message);
    }
}

main();
