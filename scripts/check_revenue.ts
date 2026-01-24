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
    console.log(`Checking revenue/transactions for ${targetEmail}...`);

    // 1. Get User ID
    const { data: profile } = await supabase.from('profiles').select('id, email').eq('email', targetEmail).single();

    if (!profile) {
        console.error('Profile not found.');
        return;
    }
    console.log(`User ID: ${profile.id}`);

    // 2. Check 'achats' table
    const { data: achats, error } = await supabase
        .from('achats')
        .select('*')
        .eq('user_id', profile.id);

    if (error) {
        console.error('Error fetching achats:', error);
    } else {
        console.log(`Found ${achats.length} transactions in 'achats':`);
        achats.forEach(achat => {
            console.log(`  - [${achat.created_at}] Type: ${achat.product_type}, Amount: ${achat.amount} ${achat.currency}, Status: ${achat.status}, StripeID: ${achat.stripe_payment_id}`);
        });
    }
}

main().catch(console.error);
