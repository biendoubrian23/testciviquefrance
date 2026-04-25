'use client';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

interface RevenueChartProps {
  data: {
    date: string;
    amount: number;
    subscriptionAmount?: number;
    oneTimeAmount?: number;
  }[];
}

export function RevenueChart({ data }: RevenueChartProps) {
  const hasBreakdown = data.some(d => d.subscriptionAmount !== undefined);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
        <XAxis 
          dataKey="date" 
          tick={{ fontSize: 12, fill: '#6B7280' }}
          axisLine={{ stroke: '#E5E7EB' }}
          tickLine={false}
        />
        <YAxis 
          tick={{ fontSize: 12, fill: '#6B7280' }}
          axisLine={{ stroke: '#E5E7EB' }}
          tickLine={false}
          tickFormatter={(value) => `${value}€`}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#fff',
            border: '1px solid #E5E7EB',
            borderRadius: 0,
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          }}
          labelStyle={{ color: '#111827', fontWeight: 600 }}
          formatter={(value: number, name: string) => {
            const labels: Record<string, string> = {
              subscriptionAmount: 'Abonnements',
              oneTimeAmount: 'Achats ponctuels',
              amount: 'Revenus',
            };
            return [`${value.toFixed(2)}€`, labels[name] || name];
          }}
        />
        {hasBreakdown ? (
          <>
            <Legend formatter={(v) => v === 'subscriptionAmount' ? 'Abonnements' : 'Achats ponctuels'} />
            <Bar dataKey="subscriptionAmount" stackId="a" fill="#2563EB" radius={0} />
            <Bar dataKey="oneTimeAmount" stackId="a" fill="#7C3AED" radius={0} />
          </>
        ) : (
          <Bar dataKey="amount" fill="#2563EB" radius={0} />
        )}
      </BarChart>
    </ResponsiveContainer>
  );
}
