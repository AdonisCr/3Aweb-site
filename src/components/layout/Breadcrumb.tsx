interface BreadcrumbItem {
  label: string
  to?: string
}

interface UBreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function UBreadcrumb({ items }: UBreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-body-sm">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && (
            <span className="text-primary">
              <svg className="w-4 h-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          )}
          {item.to ? (
            <a href={item.to} className="font-bold text-primary hover:underline">
              {item.label}
            </a>
          ) : (
            <span className="font-bold text-white">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
