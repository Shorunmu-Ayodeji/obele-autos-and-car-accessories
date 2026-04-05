interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-slate-400" aria-label="Breadcrumb">
      {items.map((item, index) => (
        <div key={item.href} className="flex items-center">
          {index > 0 && <span className="mx-2 text-slate-600">/</span>}
          {index === items.length - 1 ? (
            <span className="text-slate-300 font-medium" aria-current="page">
              {item.label}
            </span>
          ) : (
            <a
              href={item.href}
              className="text-slate-400 hover:text-emerald-400 transition-colors"
            >
              {item.label}
            </a>
          )}
        </div>
      ))}
    </nav>
  );
}