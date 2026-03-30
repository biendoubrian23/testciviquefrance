const insights = require('./posthog_insights.json');
const oldStats = require('./admin-dashboard/lib/posthog-stats.json');
const fs = require('fs');

// === DAU: Feb 15 - Mar 17 ===
const dau = insights.insights[0].result[0];
const pvRatio = oldStats.overview_30d.pageviews / oldStats.overview_30d.visitors;

const daily_trend = dau.days.map((day, i) => ({
  date: day.split('T')[0] || day,
  visitors: dau.data[i],
  pageviews: Math.round(dau.data[i] * pvRatio)
}));

// === WAU: 90 days ===
const wau = insights.insights[1].result[0];
const weekly_trend = wau.days.map((day, i) => ({
  week: day,
  visitors: wau.data[i],
  pageviews: Math.round(wau.data[i] * pvRatio)
}));

// === Recalculate overview ===
const sum30dVisitors = dau.data.reduce((a,b) => a+b, 0);
const last7d = dau.data.slice(-7);
const sum7dVisitors = last7d.reduce((a,b) => a+b, 0);
const last24h = dau.data[dau.data.length - 1];

// Lifecycle data
const lifecycle = insights.insights[3].result;
const newUsers = lifecycle.find(r => r.status === 'new');
const returningUsers = lifecycle.find(r => r.status === 'returning');
const resurrecting = lifecycle.find(r => r.status === 'resurrecting');

const totalNew = newUsers.data.reduce((a,b) => a+b, 0);
const totalReturning = returningUsers.data.reduce((a,b) => a+b, 0) + resurrecting.data.reduce((a,b) => a+b, 0);

// Referring domains
const refDomains = insights.insights[4].result;
const traffic_sources = refDomains.map(r => {
  const ref = r.breakdown_value || r.label;
  let category = 'other';
  if (!ref || ref === '$direct') category = 'direct';
  else if (ref.includes('google') || ref.includes('bing') || ref.includes('yahoo') || ref.includes('qwant') || ref.includes('ecosia')) category = 'search';
  else if (ref.includes('chatgpt') || ref.includes('perplexity') || ref.includes('openai') || ref.includes('claude')) category = 'ai';
  else if (ref.includes('instagram') || ref.includes('facebook') || ref.includes('twitter') || ref.includes('tiktok')) category = 'social';
  else if (ref.includes('testciviquefrance')) category = 'internal';
  else if (ref.includes('sendib') || ref.includes('brevo')) category = 'email';
  return {
    referrer: ref === '$direct' ? '$direct' : 'https://' + ref + '/',
    category,
    visitors: r.aggregated_value,
    pageviews: Math.round(r.aggregated_value * pvRatio)
  };
}).filter(s => s.visitors > 0);

// Build updated stats
const updatedStats = {
  ...oldStats,
  overview_30d: {
    pageviews: Math.round(sum30dVisitors * pvRatio),
    visitors: sum30dVisitors
  },
  overview_7d: {
    pageviews: Math.round(sum7dVisitors * pvRatio),
    visitors: sum7dVisitors
  },
  overview_24h: {
    pageviews: Math.round(last24h * pvRatio),
    visitors: last24h
  },
  daily_trend,
  weekly_trend,
  traffic_sources,
  new_vs_returning: {
    new_users: totalNew,
    returning_users: totalReturning
  },
  generated_at: '2026-03-17T15:16:11.000Z',
  data_note: 'Données mises à jour au 17 mars 2026 via PostHog Insights. Certaines métriques (devices, browsers, OS, countries, cities, sessions, rageclicks, signups, hourly, funnel) datent du 9 mars 2026.'
};

fs.writeFileSync('./admin-dashboard/lib/posthog-stats.json', JSON.stringify(updatedStats, null, 2));
console.log('Stats updated!');
console.log('30d visitors:', updatedStats.overview_30d.visitors);
console.log('30d PV:', updatedStats.overview_30d.pageviews);
console.log('7d visitors:', updatedStats.overview_7d.visitors);
console.log('New users:', totalNew, 'Returning:', totalReturning);
console.log('Traffic sources:', traffic_sources.length);
console.log('\nTraffic breakdown:');
traffic_sources.forEach(s => console.log(`  ${s.referrer}: ${s.visitors} (${s.category})`));
