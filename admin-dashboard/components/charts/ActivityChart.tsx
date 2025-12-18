'use client';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface ActivityChartProps {
  data: {
    date: string;
    users: number;
    sessions: number;
  }[];
}

export function ActivityChart({ data }: ActivityChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
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
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#fff',
            border: '1px solid #E5E7EB',
            borderRadius: 0,
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          }}
          labelStyle={{ color: '#111827', fontWeight: 600 }}
        />
        <Line
          type="monotone"
          dataKey="users"
          stroke="#2563EB"
          strokeWidth={2}
          dot={false}
          name="Utilisateurs actifs"
        />
        <Line
          type="monotone"
          dataKey="sessions"
          stroke="#10B981"
          strokeWidth={2}
          dot={false}
          name="Sessions"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
