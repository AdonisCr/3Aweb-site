import { Link } from 'react-router-dom'
import UHeading from '@/components/ui/UHeading'

interface PageTitleProps {
  title: string
  backTo?: string
  backLabel?: string
}

export default function PageTitle({ title, backTo = '/', backLabel = "Retour à l'accueil" }: PageTitleProps) {
  return (
    <section className="relative -mt-28 flex items-center overflow-hidden bg-white pt-28 min-h-[200px] lg:min-h-[280px]">
      <img
        src="/assets/association/Tree stamp.svg"
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 z-[60] h-auto w-[50%] mr-4 object-cover object-right sm:w-[60%] sm:mr-10 lg:w-[70%] lg:mr-[100px]"
      />
      <div className="relative z-0 mx-auto w-[92%] md:w-[85%]">
        <div className="flex items-center gap-4">
          <Link to={backTo} className="flex shrink-0 items-center text-primary" aria-label={backLabel}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <UHeading level={1} color="primary" className="!text-[28px] !leading-tight lg:!text-[36px] lg:!leading-[43.6px]">
            {title}
          </UHeading>
        </div>
      </div>
    </section>
  )
}
