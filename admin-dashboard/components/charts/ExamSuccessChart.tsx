'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface ExamSuccessChartProps {
  data: {
    date: string;
    reussis: number;
    echoues: number;
  }[];
}

export function ExamSuccessChart({ data }: ExamSuccessChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
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
        <Area
          type="monotone"
          dataKey="reussis"
          stackId="1"
          stroke="#10B981"
          fill="#10B981"
          fillOpacity={0.6}
          name="Reussis"
        />
        <Area
          type="monotone"
          dataKey="echoues"
          stackId="1"
          stroke="#EF4444"
          fill="#EF4444"
          fillOpacity={0.6}
          name="Echoues"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
