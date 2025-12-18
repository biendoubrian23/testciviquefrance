'use client';

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';

interface CategoryDistributionProps {
  data: {
    name: string;
    value: number;
    color: string;
  }[];
}

export function CategoryDistribution({ data }: CategoryDistributionProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: '#fff',
            border: '1px solid #E5E7EB',
            borderRadius: 0,
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          }}
          formatter={(value: number) => [value, 'Questions']}
        />
        <Legend 
          verticalAlign="bottom" 
          height={36}
          formatter={(value) => <span className="text-sm text-text-secondary">{value}</span>}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
