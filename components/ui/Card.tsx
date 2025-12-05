export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export default function Card({
  children,
  hover = false,
  className = '',
  ...props
}: CardProps) {
  const baseClasses = 'bg-white border border-gray-200 shadow-sm p-6';
  const hoverClasses = hover ? 'hover:shadow-md transition-shadow duration-200' : '';
  const classes = `${baseClasses} ${hoverClasses} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
