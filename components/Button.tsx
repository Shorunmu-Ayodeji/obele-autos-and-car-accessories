type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
};

export function Button({ href, children, variant = 'primary' }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-emerald-500/50';
  const variantStyles =
    variant === 'secondary'
      ? 'bg-slate-800 text-slate-200 hover:bg-slate-700'
      : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400';

  return (
    <a href={href} className={`${baseStyles} ${variantStyles}`}>
      {children}
    </a>
  );
}
