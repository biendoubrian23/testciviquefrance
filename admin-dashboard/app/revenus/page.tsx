import { Header } from '@/components/layout';
import { StatCard, Card, Badge } from '@/components/ui';
import { RevenueChart } from '@/components/charts';
import { getRevenueStats, getRevenueByProduct, getDailyRevenue } from '@/lib/actions/revenue';
import { CreditCard, TrendingUp, Calendar, DollarSign, ShoppingBag } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function RevenusPage() {
  const [stats, productStats, dailyRevenue] = await Promise.all([
    getRevenueStats(),
    getRevenueByProduct(),
    getDailyRevenue(30),
  ]);

  const monthGrowth = stats.lastMonthRevenue > 0
    ? Math.round(((stats.monthRevenue - stats.lastMonthRevenue) / stats.lastMonthRevenue) * 100)
    : 100;

  return (
    <div className="min-h-screen bg-background-light">
      <Header 
        title="Revenus" 
        subtitle="Suivi des revenus et performances commerciales"
      />

      <div className="p-8">
        {/* Stats principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <StatCard
            title="Revenus totaux"
            value={`${stats.totalRevenue.toFixed(2)} €`}
            icon={DollarSign}
            variant="success"
          />
          <StatCard
            title="Ce mois"
            value={`${stats.monthRevenue.toFixed(2)} €`}
            icon={Calendar}
            variant="primary"
            trend={{ 
              value: monthGrowth, 
              isPositive: monthGrowth >= 0 
            }}
          />
          <StatCard
            title="Cette semaine"
            value={`${stats.weekRevenue.toFixed(2)} €`}
            icon={TrendingUp}
          />
          <StatCard
            title="Aujourd'hui"
            value={`${stats.todayRevenue.toFixed(2)} €`}
            icon={CreditCard}
          />
          <StatCard
            title="Achats completes"
            value={stats.achatsCompleted}
            subtitle={`Sur ${stats.totalAchats} total`}
            icon={ShoppingBag}
          />
        </div>

        {/* Graphique des revenus */}
        <Card title="Evolution des revenus" subtitle="30 derniers jours" className="mb-8">
          <RevenueChart data={dailyRevenue} />
        </Card>

        {/* Revenus par produit */}
        <Card title="Revenus par produit" subtitle="Performance de chaque offre">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="table-header">
                  <th className="px-6 py-3 text-left">Produit</th>
                  <th className="px-6 py-3 text-center">Ventes</th>
                  <th className="px-6 py-3 text-right">Revenu total</th>
                  <th className="px-6 py-3 text-right">Prix moyen</th>
                  <th className="px-6 py-3 text-right">Part du CA</th>
                </tr>
              </thead>
              <tbody>
                {productStats.map((product) => {
                  const share = stats.totalRevenue > 0
                    ? Math.round((product.total / stats.totalRevenue) * 100)
                    : 0;
                  return (
                    <tr key={product.type} className="table-row">
                      <td className="px-6 py-4">
                        <span className="font-medium">{product.label}</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Badge variant="info">{product.count}</Badge>
                      </td>
                      <td className="px-6 py-4 text-right font-semibold">
                        {product.total.toFixed(2)} €
                      </td>
                      <td className="px-6 py-4 text-right text-text-muted">
                        {product.avgPrice.toFixed(2)} €
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <div className="w-16 h-2 bg-gray-200">
                            <div 
                              className="h-full bg-primary-600" 
                              style={{ width: `${share}%` }}
                            />
                          </div>
                          <span className="text-sm text-text-muted">{share}%</span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="bg-gray-50 font-semibold">
                  <td className="px-6 py-4">Total</td>
                  <td className="px-6 py-4 text-center">
                    {productStats.reduce((sum, p) => sum + p.count, 0)}
                  </td>
                  <td className="px-6 py-4 text-right">{stats.totalRevenue.toFixed(2)} €</td>
                  <td className="px-6 py-4 text-right">-</td>
                  <td className="px-6 py-4 text-right">100%</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
