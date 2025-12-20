interface CardProps {
  children: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: string;
  actions?: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export function Card({ children, title, subtitle, actions, className = '', noPadding = false }: CardProps) {
  return (
    <div className={`bg-white border border-gray-200 ${className}`}>
      {(title || actions) && (
        <div className="flex items-center justify-between px-4 lg:px-6 py-3 lg:py-4 border-b border-gray-200">
          <div className="min-w-0 flex-1">
            {title && <h3 className="font-semibold text-sm lg:text-base text-text-primary truncate">{title}</h3>}
            {subtitle && <p className="text-xs lg:text-sm text-text-muted mt-0.5 truncate">{subtitle}</p>}
          </div>
          {actions && <div className="flex items-center gap-2 flex-shrink-0 ml-2">{actions}</div>}
        </div>
      )}
      <div className={noPadding ? '' : 'p-4 lg:p-6'}>
        {children}
      </div>
    </div>
  );
}
