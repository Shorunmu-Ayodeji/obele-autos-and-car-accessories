type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
};

export function Button({ href, children, variant = 'primary', className }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand/50';
  const variantStyles =
    variant === 'secondary'
      ? 'border border-brand/40 bg-brand/10 text-ink hover:bg-brand/20'
      : 'bg-brand text-white shadow-lg shadow-brand/30 hover:bg-brand-light';

  return (
    <a href={href} className={`${baseStyles} ${variantStyles} ${className || ''}`}>
      {children}
    </a>
  );
}
