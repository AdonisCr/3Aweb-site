import { Link } from 'react-router-dom'
import UButton from '@/components/ui/UButton'
import USection from '@/components/ui/USection'
import UHeading from '@/components/ui/UHeading'
import UCta from '@/components/ui/UCta'
import PartnerIcon from '@/components/ui/PartnerIcon'
import PageTitle from '@/components/layout/PageTitle'

const projects = [
  {
    id: 'regards-croises',
    title: 'Regards croisés',
    desc: "Ce projet vise à faciliter et à valoriser la compréhension mutuelle entre les cultures française et béninoise en mettant en lumière des initiatives et des acteurs qui œuvrent pour le développement.",
    image: '/assets/gallery-13-4246.jpg',
    route: '/projets/regards-croises',
  },
  {
    id: 'parrainage',
    title: 'Le parrainage',
    desc: "Le programme de parrainage connecte les étudiants béninois avec des professionnels français pour des échanges réguliers, du mentorat et un soutien personnalisé vers l'autonomie.",
    image: '/assets/gallery-13-4250.jpg',
    route: '/projets/parrainage',
  },
  {
    id: 'partenaires',
    title: 'Partenaires',
    desc: "Alliance Actions Afrique s'appuie sur un réseau solide de partenaires institutionnels, privés et associatifs pour financer et pérenniser ses projets d'éducation et d'insertion.",
    image: '/assets/hero-bg.jpg',
    route: '/partenariat',
  },
]

export default function Projects() {
  return (
    <div className="page pt-28">
      <PageTitle title="Nos projets phares" />

      <USection>
        <div className="space-y-16">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={project.route}
              className="flex flex-col items-start gap-6 cursor-pointer group no-underline lg:flex-row lg:items-center lg:gap-12"
            >
              <div className="w-full flex-1 rounded-card overflow-hidden lg:h-[300px]">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="w-full flex-1">
                <UHeading level={2} color="dark" className="mb-4">{project.title}</UHeading>
                <p className="mb-6 text-body-md text-body">{project.desc}</p>
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
