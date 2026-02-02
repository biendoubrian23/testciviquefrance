/**
 * Script pour reset les crédits d'examens d'un utilisateur
 */

import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

function parseEnv(filePath: string) {
    if (!fs.existsSync(filePath)) return {};
    const content = fs.readFileSync(filePath, 'utf-8');
    const env: Record<string, string> = {};
    content.split(/\r?\n/).forEach(line => {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) return;
        const match = line.match(/^\s*([^=]+?)\s*=\s*(.*)?$/);
        if (match) {
            let value = match[2] || '';
            if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
                value = value.slice(1, -1);
            }
            env[match[1]] = value;
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
    console.error('Missing env vars');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
const userId = 'fb5cd384-fb2d-4806-bf8a-938d72ec5c89'; // Brian Biendou

async function main() {
    console.log('Resetting subscription_exams_used to 0...');

    const { error } = await supabase
        .from('profiles')
        .update({ subscription_exams_used: 0 })
        .eq('id', userId);

    if (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }

    console.log('Done! subscription_exams_used reset to 0');

    // Verify
    const { data } = await supabase
        .from('profiles')
        .select('subscription_exams_used, email')
        .eq('id', userId)
        .single();

    console.log('Verification:', data);
}

main().catch(console.error);
