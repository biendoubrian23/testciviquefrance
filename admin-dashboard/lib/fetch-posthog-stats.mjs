// Script pour récupérer toutes les stats PostHog et générer posthog-stats.json
import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const API_KEY = process.env.POSTHOG_PERSONAL_API_KEY;
const PROJECT_ID = process.env.POSTHOG_PROJECT_ID;
if (!API_KEY || !PROJECT_ID) {
  console.error('Erreur: POSTHOG_PERSONAL_API_KEY et POSTHOG_PROJECT_ID doivent être définis dans les variables d\'environnement.');
  process.exit(1);
}
const HOST = 'https://eu.i.posthog.com';

async function hogql(query) {
  const res = await fetch(`${HOST}/api/projects/${PROJECT_ID}/query/`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: { kind: 'HogQLQuery', query } }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`HogQL error: ${res.status} ${err}`);
  }
  const data = await res.json();
  return data.results;
}

async function main() {
  console.log('Récupération des stats PostHog...');
  const stats = {};

  // 1. OVERVIEW
  console.log('  → Overview...');
  for (const [key, days] of [['overview_30d', 30], ['overview_7d', 7], ['overview_24h', 1]]) {
    const r = await hogql(`select count() as pv, count(distinct person_id) as uv from events where event = '$pageview' and timestamp >= now() - interval ${days} day`);
    stats[key] = { pageviews: r[0][0], visitors: r[0][1] };
  }

  // 2. SESSIONS
  console.log('  → Sessions...');
  const sess = await hogql(`select avg(se), avg(sd) from (select count() as se, dateDiff('second', min(timestamp), max(timestamp)) as sd from events where timestamp >= now() - interval 30 day and properties.$session_id is not null group by properties.$session_id having se > 1)`);
  stats.session_30d = {
    avg_events_per_session: Math.round(sess[0][0] * 10) / 10,
    avg_duration_minutes: Math.round(sess[0][1] / 60 * 10) / 10,
  };

  // Bounce rate estimate (sessions with only 1 event)
  const bounce = await hogql(`select countIf(se = 1) as bounced, count() as total from (select count() as se from events where timestamp >= now() - interval 30 day and properties.$session_id is not null group by properties.$session_id)`);
  stats.session_30d.bounce_rate = Math.round(bounce[0][0] / bounce[0][1] * 100);
  stats.session_30d.total_sessions = bounce[0][1];

  // 3. DAILY TREND (30 jours)
  console.log('  → Tendance quotidienne...');
  const daily = await hogql(`select toDate(timestamp) as jour, count(distinct person_id) as uv, count() as pv from events where event = '$pageview' and timestamp >= now() - interval 30 day group by jour order by jour`);
  stats.daily_trend = daily.map(r => ({ date: r[0], visitors: r[1], pageviews: r[2] }));

  // 4. WEEKLY TREND (90 jours)
  console.log('  → Tendance hebdomadaire...');
  const weekly = await hogql(`select toStartOfWeek(timestamp) as semaine, count(distinct person_id) as uv, count() as pv from events where event = '$pageview' and timestamp >= now() - interval 90 day group by semaine order by semaine`);
  stats.weekly_trend = weekly.map(r => ({ week: r[0], visitors: r[1], pageviews: r[2] }));

  // 5. TOP PAGES
  console.log('  → Top pages...');
  const pages = await hogql(`select replaceRegexpAll(properties.$current_url, 'https://www.testciviquefrance.fr', '') as path, count(distinct person_id) as uv, count() as pv from events where event = '$pageview' and timestamp >= now() - interval 30 day and properties.$current_url like '%testciviquefrance.fr%' group by path order by pv desc limit 25`);
  stats.top_pages = pages.map(r => ({ path: r[0] || '/', visitors: r[1], pageviews: r[2] }));

  // 6. TRAFFIC SOURCES
  console.log('  → Sources de trafic...');
  const sources = await hogql(`select properties.$referrer as ref, count(distinct person_id) as uv, count() as pv from events where event = '$pageview' and timestamp >= now() - interval 30 day and properties.$referrer is not null and properties.$referrer != '' group by ref order by pv desc limit 15`);
  stats.traffic_sources = sources.map(r => {
    let ref = r[0];
    let category = 'other';
    if (ref === '$direct') category = 'direct';
    else if (ref.includes('google')) category = 'search';
    else if (ref.includes('bing') || ref.includes('yahoo') || ref.includes('ecosia')) category = 'search';
    else if (ref.includes('chatgpt') || ref.includes('perplexity')) category = 'ai';
    else if (ref.includes('instagram') || ref.includes('facebook') || ref.includes('tiktok')) category = 'social';
    else if (ref.includes('sendib') || ref.includes('brevo')) category = 'email';
    else if (ref.includes('testciviquefrance')) category = 'internal';
    return { referrer: ref, category, visitors: r[1], pageviews: r[2] };
  });

  // 7. DEVICES
  console.log('  → Appareils...');
  const devices = await hogql(`select properties.$device_type as device, count(distinct person_id) as users from events where event = '$pageview' and timestamp >= now() - interval 30 day group by device order by users desc`);
  stats.devices = devices.filter(r => r[0]).map(r => ({ type: r[0], users: r[1] }));

  // 8. BROWSERS
  const browsers = await hogql(`select properties.$browser as browser, count(distinct person_id) as users from events where event = '$pageview' and timestamp >= now() - interval 30 day group by browser order by users desc limit 10`);
  stats.browsers = browsers.filter(r => r[0]).map(r => ({ name: r[0], users: r[1] }));

  // 9. OS
  const os = await hogql(`select properties.$os as os, count(distinct person_id) as users from events where event = '$pageview' and timestamp >= now() - interval 30 day group by os order by users desc limit 10`);
  stats.operating_systems = os.filter(r => r[0]).map(r => ({ name: r[0], users: r[1] }));

  // 10. COUNTRIES
  console.log('  → Géographie...');
  const countries = await hogql(`select properties.$geoip_country_name as pays, count(distinct person_id) as users from events where event = '$pageview' and timestamp >= now() - interval 30 day group by pays order by users desc limit 15`);
  stats.countries = countries.filter(r => r[0]).map(r => ({ country: r[0], users: r[1] }));

  // Cities in France
  const cities = await hogql(`select properties.$geoip_city_name as city, count(distinct person_id) as users from events where event = '$pageview' and timestamp >= now() - interval 30 day and properties.$geoip_country_code = 'FR' group by city order by users desc limit 15`);
  stats.cities_france = cities.filter(r => r[0]).map(r => ({ city: r[0], users: r[1] }));

  // 11. FUNNEL
  console.log('  → Funnel de conversion...');
  const funnelPages = [
    ['/', 'Homepage'],
    ['/signup', 'Inscription'],
    ['/login', 'Login'],
    ['/onboarding/profil', 'Onboarding Profil'],
    ['/onboarding/quiz', 'Onboarding Quiz'],
    ['/onboarding/resultats', 'Résultats Quiz'],
    ['/onboarding/offres', 'Offres'],
    ['/tarifs', 'Tarifs'],
    ['/dashboard', 'Dashboard'],
    ['/dashboard/entrainement', 'Entraînement'],
    ['/dashboard/examens', 'Examens'],
    ['/dashboard/credits', 'Crédits'],
    ['/dashboard/flashcards', 'Flashcards'],
  ];
  stats.funnel = [];
  for (const [path, label] of funnelPages) {
    const like = path === '/' 
      ? `properties.$current_url = 'https://www.testciviquefrance.fr/' or properties.$current_url = 'https://www.testciviquefrance.fr'`
      : `properties.$current_url like '%${path}%'`;
    const r = await hogql(`select count(distinct person_id) as uv, count() as pv from events where event = '$pageview' and timestamp >= now() - interval 30 day and (${like})`);
    stats.funnel.push({ path, label, visitors: r[0][0], pageviews: r[0][1] });
  }

  // 12. RAGECLICKS
  console.log('  → Rageclicks...');
  const rage = await hogql(`select count() from events where event = '$rageclick' and timestamp >= now() - interval 30 day`);
  stats.rageclicks_30d = rage[0][0];
  const ragePages = await hogql(`select replaceRegexpAll(properties.$current_url, 'https://www.testciviquefrance.fr', '') as path, count() as cnt from events where event = '$rageclick' and timestamp >= now() - interval 30 day group by path order by cnt desc limit 10`);
  stats.rageclick_pages = ragePages.map(r => ({ path: r[0] || '/', count: r[1] }));

  // 13. SIGNUPS (identify events)
  console.log('  → Inscriptions...');
  const signups30 = await hogql(`select count(distinct person_id) from events where event = '$identify' and timestamp >= now() - interval 30 day`);
  const signups7 = await hogql(`select count(distinct person_id) from events where event = '$identify' and timestamp >= now() - interval 7 day`);
  stats.signups = { last_30d: signups30[0][0], last_7d: signups7[0][0] };

  // Daily signups
  const dailySignups = await hogql(`select toDate(timestamp) as jour, count(distinct person_id) as cnt from events where event = '$identify' and timestamp >= now() - interval 30 day group by jour order by jour`);
  stats.daily_signups = dailySignups.map(r => ({ date: r[0], count: r[1] }));

  // 14. HOURLY PATTERN
  console.log('  → Pattern horaire...');
  const hourly = await hogql(`select toHour(timestamp) as hour, count() as cnt from events where event = '$pageview' and timestamp >= now() - interval 30 day group by hour order by hour`);
  stats.hourly_pattern = hourly.map(r => ({ hour: r[0], pageviews: r[1] }));

  // 15. DAY OF WEEK
  const dow = await hogql(`select toDayOfWeek(timestamp) as dow, count(distinct person_id) as uv from events where event = '$pageview' and timestamp >= now() - interval 30 day group by dow order by dow`);
  const dayNames = ['', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  stats.day_of_week = dow.map(r => ({ day: dayNames[r[0]] || `Jour ${r[0]}`, visitors: r[1] }));

  // 16. RETURNING vs NEW 
  console.log('  → New vs Returning...');
  const newVsRet = await hogql(`select countIf(is_new = 1) as new_users, countIf(is_new = 0) as returning from (select person_id, if(min(timestamp) >= now() - interval 30 day, 1, 0) as is_new from events where event = '$pageview' and timestamp >= now() - interval 30 day group by person_id)`);
  stats.new_vs_returning = { new_users: newVsRet[0][0], returning_users: newVsRet[0][1] };

  // Meta
  stats.generated_at = new Date().toISOString();
  stats.project_id = PROJECT_ID;

  // Save
  const outputPath = join(__dirname, 'posthog-stats.json');
  writeFileSync(outputPath, JSON.stringify(stats, null, 2), 'utf8');
  console.log(`\n✅ Stats sauvegardées dans ${outputPath}`);
  console.log(`   ${Object.keys(stats).length} sections de données`);
}

main().catch(e => { console.error('❌ Erreur:', e.message); process.exit(1); });
