import { Link } from 'react-router-dom'
import UButton from '@/components/ui/UButton'
import USection from '@/components/ui/USection'
import UHeading from '@/components/ui/UHeading'
import UCta from '@/components/ui/UCta'
import PartnerIcon from '@/components/ui/PartnerIcon'
import PageTitle from '@/components/layout/PageTitle'
import { useSmartProjects } from '@/hooks/useSmartData'

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
        <div className="space-y-16">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={ROUTE_MAP[project.slug] ?? `/projets/${project.slug}`}
              className="flex flex-col items-start gap-6 cursor-pointer group no-underline lg:flex-row lg:items-center lg:gap-12"
            >
              <div className="w-full flex-1 rounded-card overflow-hidden lg:h-[300px]">
                <img src={project.featuredImage?.node?.sourceUrl ?? '/assets/gallery-13-4246.jpg'} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="w-full flex-1">
                <UHeading level={2} color="dark" className="mb-4">{project.title}</UHeading>
                <p className="mb-6 text-body-md text-body" dangerouslySetInnerHTML={{ __html: project.excerpt }} />
                <span className="inline-flex items-center text-primary font-semibold">
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

      <UCta
        title="Rejoignez-nous !"
        subtitle="Ou partagez notre vision commune en soutenant le développement et l'épanouissement professionnel de nos parrainés et des jeunes que nous accompagnons."
        image="/assets/home/rejoignez-nous.jpg"
        imageAlt="Poignée de main professionnelle"
        actions={
          <>
            <UButton to="/partenariat" variant="primary">Devenir partenaire <PartnerIcon /></UButton>
            <UButton to="/don" variant="white">Faire un don</UButton>
          </>
        }
      />
    </div>
  )
}
