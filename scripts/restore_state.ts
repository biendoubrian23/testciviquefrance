import { createClient } from '@supabase/supabase-js';
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
const customEnv = parseEnv(path.join(process.cwd(), '.env'));
const env = { ...process.env, ...customEnv };

const supabase = createClient(env['NEXT_PUBLIC_SUPABASE_URL']!, env['SUPABASE_SERVICE_ROLE_KEY']!);
const targetEmail = 'youcefseker390@gmail.com';

async function restore() {
    console.log(`Restoring state for ${targetEmail}`);
    const { data: profile } = await supabase.from('profiles').select('*').eq('email', targetEmail).single();
    if (!profile) return;

    await supabase.from('profiles').update({
        subscription_status: 'trialing',
        is_premium: true
    }).eq('id', profile.id);

    console.log('Restored to trialing/premium.');
}

restore();
