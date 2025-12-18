type BadgeVariant = 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'primary' | 'danger' | 'default';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  success: 'badge-success',
  warning: 'badge-warning',
  error: 'badge-error',
  info: 'badge-info',
  neutral: 'badge-neutral',
  primary: 'badge-primary',
  danger: 'badge-error',
  default: 'badge-neutral',
};

export function Badge({ children, variant = 'neutral' }: BadgeProps) {
  return (
    <span className={`badge ${variantClasses[variant]}`}>
      {children}
    </span>
  );
}
