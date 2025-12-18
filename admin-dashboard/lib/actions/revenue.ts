import { createAdminClient } from '@/lib/supabase/admin';
import { Achat } from '@/types';

export async function getRevenueStats() {
  const supabase = createAdminClient();

  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay());
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const endOfLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);

  const [
    { data: totalData },
    { data: todayData },
    { data: weekData },
    { data: monthData },
    { data: lastMonthData },
    { count: totalAchats },
    { count: achatsCompleted },
  ] = await Promise.all([
    supabase.from('achats').select('amount').eq('status', 'completed'),
    supabase.from('achats').select('amount').eq('status', 'completed')
      .gte('completed_at', startOfDay.toISOString()),
    supabase.from('achats').select('amount').eq('status', 'completed')
      .gte('completed_at', startOfWeek.toISOString()),
    supabase.from('achats').select('amount').eq('status', 'completed')
      .gte('completed_at', startOfMonth.toISOString()),
    supabase.from('achats').select('amount').eq('status', 'completed')
      .gte('completed_at', startOfLastMonth.toISOString())
      .lte('completed_at', endOfLastMonth.toISOString()),
    supabase.from('achats').select('*', { count: 'exact', head: true }),
    supabase.from('achats').select('*', { count: 'exact', head: true }).eq('status', 'completed'),
  ]);

  const sum = (data: { amount: number }[] | null) => 
    data?.reduce((s, a) => s + (a.amount || 0), 0) || 0;

  return {
    totalRevenue: sum(totalData),
    todayRevenue: sum(todayData),
    weekRevenue: sum(weekData),
    monthRevenue: sum(monthData),
    lastMonthRevenue: sum(lastMonthData),
    totalAchats: totalAchats || 0,
    achatsCompleted: achatsCompleted || 0,
  };
}

export async function getAchats(
  page: number = 1,
  limit: number = 20,
  status?: string
): Promise<{ achats: (Achat & { user_email?: string })[]; total: number }> {
  const supabase = createAdminClient();
  const offset = (page - 1) * limit;

  let query = supabase.from('achats').select('*', { count: 'exact' });

  if (status && status !== 'all') {
    query = query.eq('status', status);
  }

  const { data, count } = await query
    .order('created_at', { ascending: false })
    .range(offset, offset + limit - 1);

  if (!data) return { achats: [], total: 0 };

  // Recuperer les emails
  const userIds = [...new Set(data.map(a => a.user_id))];
  const { data: profiles } = await supabase
    .from('profiles')
    .select('id, email')
    .in('id', userIds);

  const emailMap = new Map(profiles?.map(p => [p.id, p.email]) || []);

  return {
    achats: data.map(a => ({ ...a, user_email: emailMap.get(a.user_id) || 'Inconnu' })),
    total: count || 0,
  };
}

export async function getRevenueByProduct() {
  const supabase = createAdminClient();

  const { data } = await supabase
    .from('achats')
    .select('product_type, amount')
    .eq('status', 'completed');

  if (!data) return [];

  const grouped = data.reduce((acc, a) => {
    const type = a.product_type;
    if (!acc[type]) {
      acc[type] = { count: 0, total: 0 };
    }
    acc[type].count++;
    acc[type].total += a.amount || 0;
    return acc;
  }, {} as Record<string, { count: number; total: number }>);

  const productLabels: Record<string, string> = {
    pack_standard: 'Pack Standard',
    pack_premium: 'Pack Premium',
    pack_examen: 'Pack Examen',
    unlock_level: 'Deblocage niveau',
    no_timer: 'Mode sans chrono',
    flashcards_2: 'Flashcards 2 themes',
    flashcards_5: 'Flashcards 5 themes',
  };

  return Object.entries(grouped).map(([type, stats]) => ({
    type,
    label: productLabels[type] || type,
    count: stats.count,
    total: stats.total,
    avgPrice: stats.count > 0 ? stats.total / stats.count : 0,
  })).sort((a, b) => b.total - a.total);
}

export async function getDailyRevenue(days: number = 30) {
  const supabase = createAdminClient();
  const data = [];

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const startOfDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const endOfDay = new Date(startOfDay);
    endOfDay.setDate(endOfDay.getDate() + 1);

    const { data: achats } = await supabase
      .from('achats')
      .select('amount')
      .eq('status', 'completed')
      .gte('completed_at', startOfDay.toISOString())
      .lt('completed_at', endOfDay.toISOString());

    const total = achats?.reduce((sum, a) => sum + (a.amount || 0), 0) || 0;
    const count = achats?.length || 0;

    data.push({
      date: startOfDay.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' }),
      amount: total,
      count,
    });
  }

  return data;
}
