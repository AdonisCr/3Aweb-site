import { Link } from 'react-router-dom'
import USection from '@/components/ui/USection'
import UHeading from '@/components/ui/UHeading'
import CtaSection from '@/components/ui/CtaSection'
import PageTitle from '@/components/layout/PageTitle'
import { useSmartProjects } from '@/hooks/useSmartData'
import { sanitizeHtml } from '@/lib/sanitize'

const ROUTE_MAP: Record<string, string> = {
  'regards-croises': '/projets/regards-croises',
  'parrainage': '/projets/parrainage',
  'accompagnement-professionnel': '/projets/accompagnement-professionnel',
}

export default function Projects() {
  const { projects } = useSmartProjects(10)

  return (
    <div className="page pt-28">
      <PageTitle title="Nos projets phares" />

      <USection>
        <div className="space-y-16" data-aos="fade-up" data-aos-duration="800">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={ROUTE_MAP[project.slug] ?? `/projets/${project.slug}`}
              className="flex flex-col items-start gap-6 cursor-pointer group no-underline lg:flex-row lg:items-center lg:gap-12"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              <div
                className="w-full flex-1 rounded-card overflow-hidden lg:h-[300px]"
                data-aos="zoom-in"
                data-aos-duration="1200"
              >
                <img src={project.featuredImage?.node?.sourceUrl ?? '/assets/gallery-13-4246.webp'} alt={project.title} loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div
                className="w-full flex-1"
                data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                data-aos-duration="1500"
              >
                <div data-aos="fade-up" data-aos-duration="1200">
                  <UHeading level={2} color="dark" className="mb-4">{project.title}</UHeading>
                </div>
                <p className="mb-6 text-body-md text-body" dangerouslySetInnerHTML={{ __html: sanitizeHtml(project.excerpt ?? '') }} />
                <span className="inline-flex items-center text-primary font-semibold" data-aos="fade-up" data-aos-duration="800">
                  Découvrir
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </USection>

      <CtaSection donVariant="white" />
    </div>
  )
}
