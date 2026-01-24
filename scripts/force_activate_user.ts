import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Helper to parse env file
function parseEnv(filePath: string) {
    if (!fs.existsSync(filePath)) {
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
    console.log(`Activating subscription for ${targetEmail}...`);

    // 1. Check current status
    const { data: profile, error: fetchError } = await supabase
        .from('profiles')
        .select('*')
        .eq('email', targetEmail)
        .single();

    if (fetchError || !profile) {
        console.error('Profile not found:', fetchError);
        return;
    }

    console.log(`Current status: Premium=${profile.is_premium}, Status=${profile.subscription_status}`);

    // 2. Update to active
    const { data: updated, error: updateError } = await supabase
        .from('profiles')
        .update({
            is_premium: true,
            subscription_status: 'active',
            // We set a long future date since we don't have exact Stripe info, providing 1 month access at least, 
            // or just relying on "active" status. 
            // Better to set a date to avoid issues if logic checks dates.
            subscription_end_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(), // +30 days
            updated_at: new Date().toISOString()
        })
        .eq('id', profile.id)
        .select()
        .single();

    if (updateError) {
        console.error('Error updating profile:', updateError);
    } else {
        console.log('✅ Successfully activated user!');
        console.log(`New status: Premium=${updated.is_premium}, Status=${updated.subscription_status}`);
    }
}

main().catch(console.error);
