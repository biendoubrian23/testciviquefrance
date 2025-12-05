export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'font-medium transition-colors duration-200';

  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm',
    secondary:
      'border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50',
    outline:
      'border border-primary-600 text-primary-600 hover:bg-primary-50',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
