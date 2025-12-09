import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface AccessibleButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  ariaLabel?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

/**
 * Composant bouton/lien accessible avec support ARIA complet
 */
export default function AccessibleButton({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  icon,
  ariaLabel,
  disabled = false,
  type = 'button',
  className = '',
}: AccessibleButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-300',
    secondary: 'bg-gray-900 text-white hover:bg-gray-800 focus:ring-gray-300',
    outline: 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white focus:ring-gray-300',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        aria-disabled={disabled}
      >
        {children}
        {icon && <span className="ml-2" aria-hidden="true">{icon}</span>}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
      {icon && <span className="ml-2" aria-hidden="true">{icon}</span>}
    </button>
  );
}
