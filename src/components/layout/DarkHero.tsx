import { type ReactNode } from 'react'
import UHeading from '@/components/ui/UHeading'
import UBreadcrumb from './Breadcrumb'

interface BreadcrumbItem {
  label: string
  to?: string
}

interface DarkHeroProps {
  title: string
  breadcrumbs?: BreadcrumbItem[]
  description?: string
  cta?: ReactNode
}

export default function DarkHero({ title, breadcrumbs = [], description, cta }: DarkHeroProps) {
  return (
    <section className="relative py-20 bg-dark">
      <div className="mx-auto w-[92%] md:w-[85%]">
        {breadcrumbs.length > 0 && <div className="mb-4"><UBreadcrumb items={breadcrumbs} /></div>}
        <UHeading level={1} color="primary">{title}</UHeading>
        {description && (
          <p className="mt-4 max-w-[800px] text-body-md text-white">{description}</p>
        )}
        {cta && <div className="mt-8">{cta}</div>}
      </div>
    </section>
  )
}
