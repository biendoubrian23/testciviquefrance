interface ProgressBarProps {
  value: number;
  max?: number;
  label?: string;
  showPercentage?: boolean;
  variant?: 'default' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
}

const variantColors = {
  default: 'bg-primary-600',
  success: 'bg-success',
  warning: 'bg-warning',
  error: 'bg-error',
};

const sizeClasses = {
  sm: 'h-1',
  md: 'h-2',
  lg: 'h-3',
};

export function ProgressBar({ 
  value, 
  max = 100, 
  label, 
  showPercentage = false,
  variant = 'default',
  size = 'md'
}: ProgressBarProps) {
  const percentage = Math.min(Math.round((value / max) * 100), 100);

  return (
    <div className="w-full">
      {(label || showPercentage) && (
        <div className="flex justify-between mb-1">
          {label && <span className="text-sm text-text-muted">{label}</span>}
          {showPercentage && <span className="text-sm font-medium text-text-primary">{percentage}%</span>}
        </div>
      )}
      <div className={`w-full bg-gray-200 ${sizeClasses[size]}`}>
        <div
          className={`${sizeClasses[size]} ${variantColors[variant]} transition-all duration-300`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
