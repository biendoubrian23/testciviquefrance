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
const targetEmail = 'ibtissem.chaieb@gmail.com';

async function main() {
    console.log(`Inserting missing transactions for ${targetEmail}...`);

    // 1. Get User ID
    const { data: profile } = await supabase.from('profiles').select('id, email, stripe_customer_id').eq('email', targetEmail).single();

    if (!profile) {
        console.error('Profile not found.');
        return;
    }
    console.log(`User ID: ${profile.id} (Customer: ${profile.stripe_customer_id})`);

    // 2. Prepare missing transactions
    // Based on user report: 3 payments of 2.99 EUR on 24 Jan.
    // We will generate unique payment IDs to avoid constraint issues, or use placeholders.
    const now = new Date(); // 24 Jan 2026 (System time)

    const transactions = [
        {
            user_id: profile.id,
            product_type: 'pack_standard', // Assuming 2.99 is Standard
            amount: 2.99,
            currency: 'EUR',
            stripe_payment_id: 'manually_inserted_1_' + now.getTime(),
            stripe_customer_id: profile.stripe_customer_id || 'manual_fix',
            status: 'completed',
            completed_at: new Date(now.setHours(8, 1, 0)).toISOString(), // 08:01
        },
        {
            user_id: profile.id,
            product_type: 'pack_standard',
            amount: 2.99,
            currency: 'EUR',
            stripe_payment_id: 'manually_inserted_2_' + now.getTime(),
            stripe_customer_id: profile.stripe_customer_id || 'manual_fix',
            status: 'completed',
            completed_at: new Date(now.setHours(8, 5, 0)).toISOString(), // 08:05
        },
        {
            user_id: profile.id,
            product_type: 'pack_standard',
            amount: 2.99,
            currency: 'EUR',
            stripe_payment_id: 'manually_inserted_3_' + now.getTime(),
            stripe_customer_id: profile.stripe_customer_id || 'manual_fix',
            status: 'completed',
            completed_at: new Date(now.setHours(8, 10, 0)).toISOString(), // 08:10
        }
    ];

    // 3. Insert
    const { data, error } = await supabase
        .from('achats')
        .insert(transactions)
        .select();

    if (error) {
        console.error('Error inserting transactions:', error);
    } else {
        console.log(`✅ Successfully inserted ${data.length} transactions.`);
        console.log('Please verify the dashboard.');
    }
}

main().catch(console.error);
