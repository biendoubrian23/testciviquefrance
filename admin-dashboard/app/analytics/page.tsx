'use client';

import { useMemo } from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import {
  TrendingUp, TrendingDown, Users, Eye, Clock, MousePointer,
  Globe, Smartphone, Monitor, Tablet, ArrowRight, AlertTriangle,
  CheckCircle, XCircle, Lightbulb, Target, Zap, BarChart3,
  UserPlus, Activity, MapPin, Calendar, RefreshCw,
} from 'lucide-react';
import statsData from '@/lib/posthog-stats.json';

// ─── Couleurs ────────────────────────────────────────────
const COLORS = {
  blue: '#3B82F6', indigo: '#6366F1', purple: '#8B5CF6',
  pink: '#EC4899', rose: '#F43F5E', orange: '#F97316',
  amber: '#F59E0B', emerald: '#10B981', teal: '#14B8A6',
  cyan: '#06B6D4', sky: '#0EA5E9', lime: '#84CC16',
};
const PIE_COLORS = [COLORS.blue, COLORS.indigo, COLORS.emerald, COLORS.amber, COLORS.pink, COLORS.teal, COLORS.purple, COLORS.orange];

// ─── Types ───────────────────────────────────────────────
type Verdict = 'good' | 'warning' | 'bad';

interface InsightItem {
  verdict: Verdict;
  title: string;
  detail: string;
  actions: string[];
}

// ─── Helpers ─────────────────────────────────────────────
function verdictIcon(v: Verdict) {
  if (v === 'good') return <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />;
  if (v === 'warning') return <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0" />;
  return <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />;
}
function verdictBg(v: Verdict) {
  if (v === 'good') return 'bg-emerald-50 border-emerald-200';
  if (v === 'warning') return 'bg-amber-50 border-amber-200';
  return 'bg-red-50 border-red-200';
}

function formatNumber(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}k`;
  return n.toString();
}

// ─── KPI Card ────────────────────────────────────────────
function KpiCard({ icon: Icon, label, value, sub, color, trend }: {
  icon: React.ComponentType<{ className?: string }>;
  label: string; value: string | number; sub?: string;
  color: string; trend?: { value: number; positive: boolean };
}) {
  return (
    <div className="bg-white border border-gray-200 p-5 hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-start justify-between">
        <div className={`w-11 h-11 flex items-center justify-center ${color}`}>
          <Icon className="w-5 h-5" />
        </div>
        {trend && (
          <span className={`text-xs font-semibold px-2 py-1 ${trend.positive ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
            {trend.positive ? '↑' : '↓'} {Math.abs(trend.value)}%
          </span>
        )}
      </div>
      <div className="mt-3">
        <p className="text-2xl font-bold text-gray-900">{typeof value === 'number' ? formatNumber(value) : value}</p>
        <p className="text-sm text-gray-500 mt-0.5">{label}</p>
        {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
      </div>
    </div>
  );
}

// ─── Insight Card ────────────────────────────────────────
function InsightCard({ insight }: { insight: InsightItem }) {
  return (
    <div className={`border p-4 ${verdictBg(insight.verdict)}`}>
      <div className="flex items-start gap-3">
        {verdictIcon(insight.verdict)}
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-gray-900 text-sm">{insight.title}</h4>
          <p className="text-sm text-gray-600 mt-1">{insight.detail}</p>
          {insight.actions.length > 0 && (
            <div className="mt-3 space-y-1.5">
              {insight.actions.map((a, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                  <Lightbulb className="w-3.5 h-3.5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span>{a}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Section wrapper ─────────────────────────────────────
function Section({ title, icon: Icon, children, color = 'text-blue-600 bg-blue-50' }: {
  title: string; icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode; color?: string;
}) {
  return (
    <div className="bg-white border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
        <div className={`w-8 h-8 flex items-center justify-center ${color}`}>
          <Icon className="w-4 h-4" />
        </div>
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════
// PAGE COMPONENT
// ═══════════════════════════════════════════════════════════
export default function AnalyticsPage() {
  const data = statsData;

  // Weekly trend calculation
  const weeklyTrend = useMemo(() => {
    const w = data.weekly_trend;
    if (w.length < 2) return 0;
    const last = w[w.length - 2]; // complete week
    const prev = w[w.length - 3];
    if (!prev || prev.visitors === 0) return 0;
    return Math.round(((last.visitors - prev.visitors) / prev.visitors) * 100);
  }, [data]);

  // Conversion rates
  const conversionSignupToProfile = useMemo(() => {
    const signup = data.funnel.find((f: { path: string }) => f.path === '/signup');
    const profil = data.funnel.find((f: { path: string }) => f.path === '/onboarding/profil');
    if (!signup || signup.visitors === 0) return 0;
    return Math.round((profil!.visitors / signup.visitors) * 100);
  }, [data]);

  const conversionProfileToDashboard = useMemo(() => {
    const profil = data.funnel.find((f: { path: string }) => f.path === '/onboarding/profil');
    const dashboard = data.funnel.find((f: { path: string }) => f.path === '/dashboard');
    if (!profil || profil.visitors === 0) return 0;
    return Math.round((dashboard!.visitors / profil.visitors) * 100);
  }, [data]);

  // Pages/visit
  const pagesPerVisit = useMemo(() => {
    return Math.round(data.overview_30d.pageviews / data.overview_30d.visitors * 10) / 10;
  }, [data]);

  // Mobile percentage
  const mobilePercent = useMemo(() => {
    const total = data.devices.reduce((s: number, d: { users: number }) => s + d.users, 0);
    const mobile = data.devices.find((d: { type: string }) => d.type === 'Mobile');
    return total > 0 ? Math.round((mobile?.users || 0) / total * 100) : 0;
  }, [data]);

  // ─── Insights Analysis ────────────────────────────────
  const insights: InsightItem[] = useMemo(() => {
    const items: InsightItem[] = [];

    // Traffic trend
    if (weeklyTrend < -10) {
      items.push({
        verdict: 'bad', title: `Trafic en baisse (${weeklyTrend}% cette semaine)`,
        detail: `Ton trafic chute semaine après semaine. Le pic était en janvier (618 visiteurs/semaine), maintenant ~${data.overview_7d.visitors}/semaine.`,
        actions: [
          'Publie 2-3 articles SEO par semaine sur des mots-clés longue traîne (ex: "questions examen civique 2026")',
          'Relance des campagnes Instagram avec des stories quiz interactives',
          'Crée du contenu optimisé pour ChatGPT/Perplexity — tes fichiers llms.txt marchent déjà',
          'Envoie une newsletter Brevo hebdomadaire aux utilisateurs inactifs',
        ],
      });
    } else if (weeklyTrend >= 0) {
      items.push({ verdict: 'good', title: `Trafic stable ou en hausse (+${weeklyTrend}%)`, detail: 'Bonne dynamique, continue comme ça.', actions: [] });
    }

    // Bounce rate
    if (data.session_30d.bounce_rate > 40) {
      items.push({
        verdict: 'bad', title: `Taux de rebond élevé (${data.session_30d.bounce_rate}%)`,
        detail: 'Plus de 40% des visiteurs quittent le site après une seule page.',
        actions: [
          'Ajoute un CTA visible au-dessus de la ligne de flottaison sur la homepage',
          'Ajoute des liens internes dans chaque article pour retenir les visiteurs',
          'Teste un pop-up d\'inscription au bout de 10 secondes',
        ],
      });
    } else if (data.session_30d.bounce_rate > 25) {
      items.push({ verdict: 'warning', title: `Taux de rebond moyen (${data.session_30d.bounce_rate}%)`, detail: 'Acceptable mais améliorable.', actions: ['Optimise les landing pages avec des CTA plus clairs'] });
    } else {
      items.push({ verdict: 'good', title: `Excellent taux de rebond (${data.session_30d.bounce_rate}%)`, detail: 'Les visiteurs explorent ton site !', actions: [] });
    }

    // Signup conversion
    if (conversionSignupToProfile < 50) {
      items.push({
        verdict: 'bad', title: `Conversion inscription → profil faible (${conversionSignupToProfile}%)`,
        detail: `Sur ${data.funnel.find((f: { path: string }) => f.path === '/signup')?.visitors} visiteurs de la page signup, seulement ${conversionSignupToProfile}% arrivent au profil.`,
        actions: [
          'Vérifie que l\'email de confirmation n\'arrive pas en spam',
          'Simplifie le formulaire d\'inscription (supprimer les champs inutiles)',
          'Ajoute l\'inscription Google en un clic bien visible',
          'Réduis le temps entre l\'inscription et l\'accès au contenu',
        ],
      });
    } else {
      items.push({ verdict: 'good', title: `Bonne conversion inscription (${conversionSignupToProfile}%)`, detail: 'Le processus d\'inscription fonctionne.', actions: [] });
    }

    // Session duration
    if (data.session_30d.avg_duration_minutes >= 5) {
      items.push({ verdict: 'good', title: `Sessions longues (${data.session_30d.avg_duration_minutes} min)`, detail: 'Les utilisateurs restent engagés sur le site.', actions: [] });
    } else if (data.session_30d.avg_duration_minutes >= 2) {
      items.push({ verdict: 'warning', title: `Sessions courtes (${data.session_30d.avg_duration_minutes} min)`, detail: 'Les sessions pourraient être plus longues.', actions: ['Ajoute du contenu interactif (quiz, flashcards) pour augmenter le temps passé'] });
    }

    // Rageclicks
    if (data.rageclicks_30d > 20) {
      items.push({ verdict: 'bad', title: `Beaucoup de rageclicks (${data.rageclicks_30d})`, detail: 'Les utilisateurs cliquent plusieurs fois par frustration.', actions: ['Regarde les session recordings sur PostHog pour identifier les éléments problématiques', 'Vérifie que tous les boutons sont cliquables et réactifs'] });
    } else if (data.rageclicks_30d > 0) {
      items.push({ verdict: 'warning', title: `${data.rageclicks_30d} rageclicks détectés`, detail: 'Quelques frustrations UX mineures.', actions: data.rageclick_pages.slice(0, 2).map((p: { path: string; count: number }) => `Vérifie l'UX sur ${p.path} (${p.count} rageclicks)`) });
    }

    // ChatGPT traffic
    const chatgptSource = data.traffic_sources.find((s: { referrer: string }) => s.referrer.includes('chatgpt'));
    if (chatgptSource) {
      items.push({
        verdict: 'good', title: `ChatGPT génère ${chatgptSource.pageviews} pageviews !`,
        detail: 'Le trafic IA est ta 2ème source. Tes fichiers llms.txt fonctionnent.',
        actions: [
          'Continue d\'optimiser llms.txt et llms-full.txt',
          'Utilise des termes que les gens cherchent dans ChatGPT dans tes titres d\'articles',
          'Ajoute un schema.org FAQ sur les pages clés pour mieux ranker dans l\'IA',
        ],
      });
    }

    // Mobile
    if (mobilePercent > 55) {
      items.push({
        verdict: 'warning', title: `${mobilePercent}% du trafic est mobile`,
        detail: 'La majorité de tes utilisateurs sont sur smartphone.',
        actions: [
          'Teste toutes les pages critiques sur mobile (signup, quiz, paiement)',
          'Assure-toi que les boutons font au moins 48px de hauteur',
          'Optimise le temps de chargement sur 3G avec Lighthouse',
        ],
      });
    }

    // New vs returning
    const retPct = Math.round(data.new_vs_returning.returning_users / (data.new_vs_returning.new_users + data.new_vs_returning.returning_users) * 100);
    if (retPct < 20) {
      items.push({
        verdict: 'bad', title: `Faible rétention (${retPct}% de retours)`,
        detail: 'Très peu d\'utilisateurs reviennent sur le site.',
        actions: [
          'Active les notifications push via le service worker PWA',
          'Envoie un email de rappel 3 jours après l\'inscription',
          'Crée un système de streak quotidien pour motiver les retours',
        ],
      });
    } else if (retPct < 40) {
      items.push({ verdict: 'warning', title: `Rétention moyenne (${retPct}% de retours)`, detail: 'Tu retiens une partie des utilisateurs.', actions: ['Envoie des emails de rappel personnalisés via Brevo'] });
    } else {
      items.push({ verdict: 'good', title: `Bonne rétention (${retPct}% de retours)`, detail: 'Les utilisateurs reviennent régulièrement.', actions: [] });
    }

    return items;
  }, [data, weeklyTrend, conversionSignupToProfile, mobilePercent]);

  // ─── Chart data transforms ────────────────────────────
  const dailyChart = data.daily_trend.map((d: { date: string; visitors: number; pageviews: number }) => ({
    ...d,
    date: d.date.slice(5), // MM-DD
  }));
  const weeklyChart = data.weekly_trend.map((w: { week: string; visitors: number; pageviews: number }) => ({
    ...w,
    week: w.week.slice(5),
  }));
  const funnelChart = data.funnel.map((f: { label: string; visitors: number; pageviews: number }) => ({
    name: f.label,
    visitors: f.visitors,
    pageviews: f.pageviews,
  }));
  const sourceCategories = useMemo(() => {
    const cats: Record<string, number> = {};
    data.traffic_sources.forEach((s: { category: string; pageviews: number }) => {
      cats[s.category] = (cats[s.category] || 0) + s.pageviews;
    });
    return Object.entries(cats).map(([name, value]) => ({ name, value })).sort((a, b) => b.value - a.value);
  }, [data]);

  const signupChart = data.daily_signups.map((d: { date: string; count: number }) => ({
    ...d, date: d.date.slice(5),
  }));

  return (
    <div className="p-4 lg:p-8 space-y-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            Analytics PostHog
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Dernière mise à jour : {new Date(data.generated_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <RefreshCw className="w-3.5 h-3.5" />
          Exécute <code className="bg-gray-100 px-1.5 py-0.5 font-mono">node lib/fetch-posthog-stats.mjs</code> pour actualiser
        </div>
      </div>

      {/* ═══ KPIs ═══ */}
      <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        <KpiCard icon={Eye} label="Pageviews (30j)" value={data.overview_30d.pageviews} color="bg-blue-100 text-blue-600" sub={`${data.overview_7d.pageviews} cette semaine`} />
        <KpiCard icon={Users} label="Visiteurs uniques (30j)" value={data.overview_30d.visitors} color="bg-indigo-100 text-indigo-600" trend={{ value: Math.abs(weeklyTrend), positive: weeklyTrend >= 0 }} sub={`${data.overview_24h.visitors} aujourd'hui`} />
        <KpiCard icon={UserPlus} label="Inscriptions (30j)" value={data.signups.last_30d} color="bg-emerald-100 text-emerald-600" sub={`${data.signups.last_7d} cette semaine`} />
        <KpiCard icon={Clock} label="Durée session" value={`${data.session_30d.avg_duration_minutes} min`} color="bg-amber-100 text-amber-600" sub={`${data.session_30d.avg_events_per_session} events/session`} />
        <KpiCard icon={MousePointer} label="Taux de rebond" value={`${data.session_30d.bounce_rate}%`} color={data.session_30d.bounce_rate > 40 ? 'bg-red-100 text-red-600' : 'bg-teal-100 text-teal-600'} sub={`${data.session_30d.total_sessions} sessions`} />
        <KpiCard icon={Activity} label="Pages/visite" value={pagesPerVisit} color="bg-purple-100 text-purple-600" sub={`${data.overview_30d.visitors} visiteurs`} />
      </div>

      {/* ═══ INSIGHTS & ACTIONS ═══ */}
      <Section title="Diagnostic & Actions d'amélioration" icon={Target} color="text-rose-600 bg-rose-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {insights.map((ins, i) => <InsightCard key={i} insight={ins} />)}
        </div>
      </Section>

      {/* ═══ TREND CHARTS ═══ */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Section title="Visiteurs & Pageviews (30 jours)" icon={TrendingUp} color="text-blue-600 bg-blue-50">
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={dailyChart}>
              <defs>
                <linearGradient id="gradVisitors" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={COLORS.blue} stopOpacity={0.3} />
                  <stop offset="100%" stopColor={COLORS.blue} stopOpacity={0} />
                </linearGradient>
                <linearGradient id="gradPageviews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={COLORS.indigo} stopOpacity={0.2} />
                  <stop offset="100%" stopColor={COLORS.indigo} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="date" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip contentStyle={{ borderRadius: 0, fontSize: 12 }} />
              <Legend />
              <Area type="monotone" dataKey="visitors" stroke={COLORS.blue} fill="url(#gradVisitors)" strokeWidth={2} name="Visiteurs" />
              <Area type="monotone" dataKey="pageviews" stroke={COLORS.indigo} fill="url(#gradPageviews)" strokeWidth={1.5} name="Pageviews" />
            </AreaChart>
          </ResponsiveContainer>
        </Section>

        <Section title="Tendance hebdomadaire (90 jours)" icon={Calendar} color="text-indigo-600 bg-indigo-50">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyChart}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="week" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip contentStyle={{ borderRadius: 0, fontSize: 12 }} />
              <Legend />
              <Bar dataKey="visitors" fill={COLORS.blue} name="Visiteurs" />
              <Bar dataKey="pageviews" fill={COLORS.indigo} name="Pageviews" opacity={0.6} />
            </BarChart>
          </ResponsiveContainer>
        </Section>
      </div>

      {/* ═══ FUNNEL ═══ */}
      <Section title="Funnel de conversion" icon={Target} color="text-emerald-600 bg-emerald-50">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={funnelChart} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis type="number" tick={{ fontSize: 11 }} />
            <YAxis dataKey="name" type="category" tick={{ fontSize: 11 }} width={120} />
            <Tooltip contentStyle={{ borderRadius: 0, fontSize: 12 }} />
            <Legend />
            <Bar dataKey="visitors" fill={COLORS.blue} name="Visiteurs uniques" />
            <Bar dataKey="pageviews" fill={COLORS.sky} name="Pageviews" opacity={0.5} />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {data.funnel.slice(0, 8).map((f: { path: string; label: string; visitors: number; pageviews: number }, i: number) => (
            <div key={i} className="text-center p-3 bg-gray-50 border border-gray-100">
              <p className="text-lg font-bold text-gray-900">{f.visitors}</p>
              <p className="text-xs text-gray-500">{f.label}</p>
              {i > 0 && i < 7 && (
                <p className="text-xs mt-1 font-medium text-blue-600">
                  {Math.round((f.visitors / data.funnel[i - 1].visitors) * 100)}% du précédent
                </p>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ SIGNUPS ═══ */}
      <Section title="Inscriptions quotidiennes" icon={UserPlus} color="text-emerald-600 bg-emerald-50">
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={signupChart}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="date" tick={{ fontSize: 11 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip contentStyle={{ borderRadius: 0, fontSize: 12 }} />
            <Bar dataKey="count" fill={COLORS.emerald} name="Inscriptions" />
          </BarChart>
        </ResponsiveContainer>
      </Section>

      {/* ═══ TRAFFIC SOURCES & DEVICES ═══ */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Sources */}
        <Section title="Sources de trafic" icon={Globe} color="text-sky-600 bg-sky-50">
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={sourceCategories} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false}>
                {sourceCategories.map((_: unknown, i: number) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-3 space-y-2">
            {data.traffic_sources.slice(0, 7).map((s: { referrer: string; category: string; pageviews: number; visitors: number }, i: number) => (
              <div key={i} className="flex items-center justify-between text-sm">
                <span className="text-gray-600 truncate flex-1">{s.referrer.replace('https://', '').replace('$direct', 'Direct')}</span>
                <span className="font-semibold text-gray-900 ml-2">{s.pageviews}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Devices + OS */}
        <Section title="Appareils & OS" icon={Smartphone} color="text-purple-600 bg-purple-50">
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Appareils</h4>
              <ResponsiveContainer width="100%" height={160}>
                <PieChart>
                  <Pie data={data.devices} dataKey="users" nameKey="type" cx="50%" cy="50%" outerRadius={60} label={({ type, percent }: { type: string; percent: number }) => `${type} ${(percent * 100).toFixed(0)}%`} labelLine={false}>
                    {data.devices.map((_: unknown, i: number) => <Cell key={i} fill={[COLORS.blue, COLORS.emerald, COLORS.amber][i]} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Systèmes</h4>
              {data.operating_systems.slice(0, 5).map((o: { name: string; users: number }, i: number) => {
                const max = data.operating_systems[0].users;
                return (
                  <div key={i} className="mb-2">
                    <div className="flex justify-between text-xs text-gray-600 mb-0.5">
                      <span>{o.name}</span><span>{o.users}</span>
                    </div>
                    <div className="h-2 bg-gray-100">
                      <div className="h-full bg-purple-400" style={{ width: `${(o.users / max) * 100}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* Browsers */}
        <Section title="Navigateurs" icon={Monitor} color="text-teal-600 bg-teal-50">
          <div className="space-y-3">
            {data.browsers.slice(0, 8).map((b: { name: string; users: number }, i: number) => {
              const max = data.browsers[0].users;
              const colors = [COLORS.blue, COLORS.teal, COLORS.indigo, COLORS.sky, COLORS.cyan, COLORS.emerald, COLORS.purple, COLORS.amber];
              return (
                <div key={i}>
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span className="font-medium">{b.name}</span>
                    <span className="font-semibold text-gray-900">{b.users}</span>
                  </div>
                  <div className="h-3 bg-gray-100">
                    <div className="h-full transition-all duration-500" style={{ width: `${(b.users / max) * 100}%`, backgroundColor: colors[i % colors.length] }} />
                  </div>
                </div>
              );
            })}
          </div>
        </Section>
      </div>

      {/* ═══ GEOGRAPHY ═══ */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Section title="Pays" icon={Globe} color="text-blue-600 bg-blue-50">
          <div className="space-y-2">
            {data.countries.map((c: { country: string; users: number }, i: number) => {
              const max = data.countries[0].users;
              return (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 w-32 truncate">{c.country}</span>
                  <div className="flex-1 h-3 bg-gray-100">
                    <div className="h-full bg-blue-400" style={{ width: `${(c.users / max) * 100}%` }} />
                  </div>
                  <span className="text-sm font-semibold text-gray-900 w-10 text-right">{c.users}</span>
                </div>
              );
            })}
          </div>
        </Section>

        <Section title="Villes (France)" icon={MapPin} color="text-rose-600 bg-rose-50">
          <div className="space-y-2">
            {data.cities_france.map((c: { city: string; users: number }, i: number) => {
              const max = data.cities_france[0].users;
              return (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 w-32 truncate">{c.city}</span>
                  <div className="flex-1 h-3 bg-gray-100">
                    <div className="h-full bg-rose-400" style={{ width: `${(c.users / max) * 100}%` }} />
                  </div>
                  <span className="text-sm font-semibold text-gray-900 w-10 text-right">{c.users}</span>
                </div>
              );
            })}
          </div>
        </Section>
      </div>

      {/* ═══ HOURLY & DAY OF WEEK ═══ */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Section title="Activité par heure" icon={Clock} color="text-amber-600 bg-amber-50">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data.hourly_pattern}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="hour" tick={{ fontSize: 11 }} label={{ value: 'Heure (UTC)', position: 'insideBottom', offset: -5, fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip contentStyle={{ borderRadius: 0, fontSize: 12 }} />
              <Bar dataKey="pageviews" name="Pageviews">
                {data.hourly_pattern.map((_: unknown, i: number) => {
                  const hour = data.hourly_pattern[i].hour;
                  const isPeak = hour >= 8 && hour <= 22;
                  return <Cell key={i} fill={isPeak ? COLORS.amber : '#E5E7EB'} />;
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Section>

        <Section title="Activité par jour" icon={Calendar} color="text-indigo-600 bg-indigo-50">
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data.day_of_week}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip contentStyle={{ borderRadius: 0, fontSize: 12 }} />
              <Bar dataKey="visitors" name="Visiteurs">
                {data.day_of_week.map((_: unknown, i: number) => (
                  <Cell key={i} fill={i < 5 ? COLORS.indigo : COLORS.pink} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Section>
      </div>

      {/* ═══ TOP PAGES ═══ */}
      <Section title="Top 25 pages" icon={Eye} color="text-cyan-600 bg-cyan-50">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 text-left">
                <th className="py-2 px-3 text-xs font-semibold text-gray-500 uppercase">#</th>
                <th className="py-2 px-3 text-xs font-semibold text-gray-500 uppercase">Page</th>
                <th className="py-2 px-3 text-xs font-semibold text-gray-500 uppercase text-right">Visiteurs</th>
                <th className="py-2 px-3 text-xs font-semibold text-gray-500 uppercase text-right">Pageviews</th>
                <th className="py-2 px-3 text-xs font-semibold text-gray-500 uppercase text-right">PV/UV</th>
              </tr>
            </thead>
            <tbody>
              {data.top_pages.map((p: { path: string; visitors: number; pageviews: number }, i: number) => (
                <tr key={i} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="py-2 px-3 text-gray-400 font-mono text-xs">{i + 1}</td>
                  <td className="py-2 px-3 font-medium text-gray-800 truncate max-w-md">{p.path || '/'}</td>
                  <td className="py-2 px-3 text-right font-semibold text-blue-600">{p.visitors}</td>
                  <td className="py-2 px-3 text-right text-gray-600">{p.pageviews}</td>
                  <td className="py-2 px-3 text-right text-gray-500">{p.visitors > 0 ? (p.pageviews / p.visitors).toFixed(1) : '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ═══ NEW vs RETURNING ═══ */}
      <Section title="Nouveaux vs Retours" icon={Users} color="text-emerald-600 bg-emerald-50">
        <div className="flex items-center gap-8">
          <ResponsiveContainer width={200} height={200}>
            <PieChart>
              <Pie data={[
                { name: 'Nouveaux', value: data.new_vs_returning.new_users },
                { name: 'Retours', value: data.new_vs_returning.returning_users },
              ]} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                <Cell fill={COLORS.blue} />
                <Cell fill={COLORS.emerald} />
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-blue-500" />
              <div>
                <p className="text-sm font-semibold text-gray-900">{data.new_vs_returning.new_users} nouveaux utilisateurs</p>
                <p className="text-xs text-gray-500">{Math.round(data.new_vs_returning.new_users / (data.new_vs_returning.new_users + data.new_vs_returning.returning_users) * 100)}%</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-emerald-500" />
              <div>
                <p className="text-sm font-semibold text-gray-900">{data.new_vs_returning.returning_users} utilisateurs de retour</p>
                <p className="text-xs text-gray-500">{Math.round(data.new_vs_returning.returning_users / (data.new_vs_returning.new_users + data.new_vs_returning.returning_users) * 100)}%</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══ RAGECLICKS ═══ */}
      {data.rageclicks_30d > 0 && (
        <Section title={`Rageclicks (${data.rageclicks_30d} en 30j)`} icon={Zap} color="text-red-600 bg-red-50">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {data.rageclick_pages.map((p: { path: string; count: number }, i: number) => (
              <div key={i} className="flex items-center justify-between p-3 bg-red-50 border border-red-100">
                <span className="text-sm text-gray-700 truncate flex-1">{p.path || '/'}</span>
                <span className="text-sm font-bold text-red-600 ml-2">{p.count}×</span>
              </div>
            ))}
          </div>
        </Section>
      )}
    </div>
  );
}
