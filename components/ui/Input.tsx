export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className = '',
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 border ${
          error ? 'border-error' : 'border-gray-300'
        } focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-200 ${className}`}
        {...props}
      />
      {error && <p className="mt-2 text-sm text-error">{error}</p>}
    </div>
  );
}
