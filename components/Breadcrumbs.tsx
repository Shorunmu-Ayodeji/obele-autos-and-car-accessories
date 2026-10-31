interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-ink/60" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && <span className="mx-2 text-ink/40">/</span>}
          {index === items.length - 1 ? (
            <span className="text-ink/80 font-medium" aria-current="page">
              {item.label}
            </span>
          ) : (
            <a
              href={item.href}
              className="text-ink/60 hover:text-brand-light transition-colors"
            >
              {item.label}
            </a>
          )}
        </div>
      ))}
    </nav>
  );
}
