/**
 * Script de diagnostic SIMPLE pour vérifier les crédits d'examens d'un utilisateur
 * Écrit les résultats dans un fichier JSON pour éviter les problèmes de console
 */

import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

// Configuration des plans
const ALL_STANDARD_PRICE_IDS = ['price_1Sc3AqIUG5GUejFZagJyV8HC'];
const ALL_PREMIUM_PRICE_IDS = ['price_1Sc3BYIUG5GUejFZaWexcxzz'];

// Helper pour parser le fichier .env
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

// Charger les variables d'environnement
const cwd = process.cwd();
const envMain = parseEnv(path.join(cwd, '.env'));
const envLocal = parseEnv(path.join(cwd, '.env.local'));
const env = { ...envMain, ...envLocal, ...process.env };

const SUPABASE_URL = env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    fs.writeFileSync('diagnostic_result.json', JSON.stringify({ error: 'Missing env vars' }, null, 2));
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
const targetEmail = process.argv[2] || 'brianbiendou@gmail.com';

async function main() {
    const result: any = { email: targetEmail, timestamp: new Date().toISOString() };

    // 1. Récupérer le profil Supabase
    const { data: profile, error } = await supabase
        .from('profiles')
        .select('id, email, prenom, nom, stripe_customer_id, stripe_subscription_id, stripe_price_id, subscription_status, subscription_start_date, subscription_end_date, is_premium, subscription_exams_used, exam_credits, last_purchase_at')
        .ilike('email', targetEmail)
        .single();

    if (error || !profile) {
        result.error = 'Profile not found: ' + (error?.message || 'Unknown');
        fs.writeFileSync('diagnostic_result.json', JSON.stringify(result, null, 2));
        process.exit(1);
    }

    result.profile = {
        id: profile.id,
        email: profile.email,
        prenom: profile.prenom,
        nom: profile.nom,
        subscription_status: profile.subscription_status,
        is_premium: profile.is_premium,
        stripe_price_id: profile.stripe_price_id,
        stripe_customer_id: profile.stripe_customer_id,
        stripe_subscription_id: profile.stripe_subscription_id,
        subscription_start_date: profile.subscription_start_date,
        subscription_end_date: profile.subscription_end_date,
        subscription_exams_used: profile.subscription_exams_used,
        exam_credits: profile.exam_credits,
        last_purchase_at: profile.last_purchase_at
    };

    // 2. Calculer les crédits
    const subscriptionStatus = profile.subscription_status;
    const isSubscriptionActive = subscriptionStatus === 'active' || subscriptionStatus === 'trialing';
    const stripepriceId = profile.stripe_price_id;

    let subscriptionExamsLimit = 0;
    let planType = 'none';

    if (isSubscriptionActive) {
        if (ALL_STANDARD_PRICE_IDS.includes(stripepriceId)) {
            subscriptionExamsLimit = 1;
            planType = 'standard';
        } else if (ALL_PREMIUM_PRICE_IDS.includes(stripepriceId)) {
            subscriptionExamsLimit = 3;
            planType = 'premium';
        } else {
            planType = 'unknown_price_id';
        }
    }

    const subscriptionExamsUsed = profile.subscription_exams_used ?? 0;
    const subscriptionExamsRemaining = Math.max(0, subscriptionExamsLimit - subscriptionExamsUsed);
    const examCredits = profile.exam_credits ?? 0;
    const totalAvailable = subscriptionExamsRemaining + examCredits;

    result.calculation = {
        isSubscriptionActive,
        planType,
        subscriptionExamsLimit,
        subscriptionExamsUsed,
        subscriptionExamsRemaining,
        examCredits,
        totalAvailable,
        priceIdInDB: stripepriceId,
        priceIdMatchesStandard: ALL_STANDARD_PRICE_IDS.includes(stripepriceId),
        priceIdMatchesPremium: ALL_PREMIUM_PRICE_IDS.includes(stripepriceId),
        ALL_PREMIUM_PRICE_IDS,
        ALL_STANDARD_PRICE_IDS
    };

    // 3. Identifier les problèmes
    const problems: string[] = [];

    if (!isSubscriptionActive) {
        problems.push(`subscription_status "${subscriptionStatus}" is not active or trialing`);
    }

    if (isSubscriptionActive && subscriptionExamsLimit === 0) {
        problems.push(`stripe_price_id "${stripepriceId}" not recognized as Standard or Premium`);
    }

    if (profile.subscription_exams_used === null) {
        problems.push('subscription_exams_used is NULL (should be 0 for new subscription)');
    }

    result.problems = problems;
    result.diagnosis = problems.length === 0 ? 'OK' : 'ISSUES_FOUND';

    // Écrire le résultat
    fs.writeFileSync('diagnostic_result.json', JSON.stringify(result, null, 2));
    console.log('Diagnostic complete. See diagnostic_result.json');
}

main().catch(e => {
    fs.writeFileSync('diagnostic_result.json', JSON.stringify({ error: e.message }, null, 2));
});
