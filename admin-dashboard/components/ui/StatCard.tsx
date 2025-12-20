import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
  action?: {
    icon: LucideIcon;
    onClick: () => void;
    loading?: boolean;
    tooltip?: string;
  };
}

const variantStyles = {
  default: 'border-gray-200',
  primary: 'border-l-4 border-l-primary-600 border-gray-200',
  success: 'border-l-4 border-l-success border-gray-200',
  warning: 'border-l-4 border-l-warning border-gray-200',
  error: 'border-l-4 border-l-error border-gray-200',
  info: 'border-l-4 border-l-blue-500 border-gray-200',
};

const iconStyles = {
  default: 'bg-gray-100 text-gray-600',
  primary: 'bg-primary-100 text-primary-600',
  success: 'bg-green-100 text-green-600',
  warning: 'bg-yellow-100 text-yellow-600',
  error: 'bg-red-100 text-red-600',
  info: 'bg-blue-100 text-blue-600',
};

export function StatCard({ title, value, subtitle, icon: Icon, trend, variant = 'default', action }: StatCardProps) {
  return (
    <div className={`stat-card p-4 lg:p-6 ${variantStyles[variant]}`}>
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <p className="text-xs lg:text-sm font-medium text-text-muted truncate">{title}</p>
            {action && (
              <button 
                onClick={action.onClick}
                className="p-1 hover:bg-gray-100 rounded transition-colors flex-shrink-0"
                title={action.tooltip || 'Actualiser'}
                disabled={action.loading}
              >
                <action.icon className={`w-3 h-3 lg:w-4 lg:h-4 text-gray-500 hover:text-primary-600 ${action.loading ? 'animate-spin' : ''}`} />
              </button>
            )}
          </div>
          <p className="text-xl lg:text-2xl font-semibold text-text-primary truncate">{value}</p>
          {subtitle && (
            <p className="text-xs lg:text-sm text-text-muted mt-1 truncate">{subtitle}</p>
          )}
          {trend && (
            <div className={`flex items-center gap-1 mt-2 text-xs lg:text-sm ${trend.isPositive ? 'text-success' : 'text-error'}`}>
              <span>{trend.isPositive ? '+' : ''}{trend.value}%</span>
              <span className="text-text-muted hidden sm:inline">vs mois dernier</span>
            </div>
          )}
        </div>
        {Icon && (
          <div className={`w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center flex-shrink-0 ${iconStyles[variant]}`}>
            <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
          </div>
        )}
      </div>
    </div>
  );
}
