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
      ?       'border border-ink/15 bg-ink/[0.04] text-ink/80 hover:border-ink/30 hover:bg-ink/[0.08]'
            : 'bg-gradient-to-r from-brand to-brand-light text-white shadow-[0_10px_30px_-10px_rgba(43,59,255,0.8)] hover:-translate-y-0.5 hover:shadow-[0_16px_38px_-10px_rgba(43,59,255,0.95)]';

  return (
    <a href={href} className={`${baseStyles} ${variantStyles} ${className || ''}`}>
      {children}
    </a>
  );
}
