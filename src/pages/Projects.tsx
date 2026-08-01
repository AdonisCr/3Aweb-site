import UButton from '@/components/ui/UButton'
import UHeading from '@/components/ui/UHeading'
import CtaSection from '@/components/ui/CtaSection'
import PageTitle from '@/components/layout/PageTitle'
import { useSmartProjects } from '@/hooks/useSmartData'
import { sanitizeHtml } from '@/lib/sanitize'

const ROUTE_MAP: Record<string, string> = {
  'accompagnement-professionnel': '/projets/accompagnement-professionnel',
  'parrainage': '/projets/parrainage',
  'regards-croises': '/projets/regards-croises',
}

const FEATURED_ORDER = [
  'accompagnement-professionnel',
  'parrainage',
  'regards-croises',
] as const

const FALLBACK_COPY: Record<string, { title: string; excerpt: string; image: string }> = {
  'accompagnement-professionnel': {
    title: 'Accompagnement professionnel',
    excerpt:
      'Alliance Actions Afrique accompagne des jeunes en situation de vulnérabilité vers une réinsertion professionnelle durable, en partenariat avec des structures locales telles que le foyer Ibarreta ou Caritas Abomey. Ces collaborations permettent de répondre à des besoins concrets et identifiés sur le terrain, en lien étroit avec les acteurs sociaux qui accompagnent déjà ces jeunes au quotidien.',
    image: '/assets/projects/accompagnement/hero.webp',
  },
  parrainage: {
    title: 'Parrainage',
    excerpt:
      "Le programme de parrainage d'Alliance Actions Afrique repose sur une relation d'engagement et de confiance entre un parrain et un étudiant accompagné par l'association. Le parrain contribue au financement d'une partie de la scolarité et des besoins éducatifs de l'étudiant, tout en lui offrant un soutien moral, des conseils et un suivi dans son parcours.",
    image: '/assets/projects/parrainage/hero.webp',
  },
  'regards-croises': {
    title: 'Regards croisés',
    excerpt:
      "Les Regards Croisés sont une rencontre annuelle organisée par Alliance Actions Afrique qui réunit experts, entrepreneurs, acteurs de terrain et décideurs autour d'une thématique centrale liée au développement, à la formation et à l'entrepreneuriat. Conçues comme des tables rondes d'échanges, ces rencontres favorisent le partage d'expériences, l'apprentissage mutuel et la création de ponts entre les acteurs du Bénin et d'autres pays, notamment la France.",
    image: '/assets/projects/regards-croises/hero.webp',
  },
}

const INTRO_TEXT =
  "Parce que chaque besoin mérite une réponse concrète, Alliance Actions Afrique développe des projets qui favorisent l'accès à l'éducation, l'insertion professionnelle et le partage des connaissances. Pensés en lien avec les réalités du terrain, nos programmes accompagnent les jeunes à chaque étape de leur parcours et mobilisent un réseau d'acteurs engagés pour construire des opportunités durables."

export default function Projects() {
  const { projects } = useSmartProjects(10)

  const featured = FEATURED_ORDER.map((slug) => {
    const fromApi = projects.find((p) => p.slug === slug)
    const fallback = FALLBACK_COPY[slug]
    return {
      id: fromApi?.id ?? slug,
      slug,
      title: fromApi?.title || fallback.title,
      excerpt: fromApi?.excerpt?.replace(/<[^>]+>/g, '').trim()
        ? fromApi.excerpt
        : fallback.excerpt,
      image:
        fromApi?.featuredImage?.node?.sourceUrl ??
        fallback.image,
      to: ROUTE_MAP[slug],
    }
  })

  return (
    <div className="page pt-28">
      <PageTitle title="Projets phares" />

      {/* HERO */}
      <section className="w-full" data-aos="zoom-in" data-aos-duration="1200">
        <div className="h-[240px] w-full overflow-hidden sm:h-[360px] lg:h-[500px]">
          <img
            src="/assets/projects/hero.webp"
            alt="Projets Alliance Actions Afrique"
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
          />
        </div>
      </section>

      {/* INTRO */}
      <section
        className="bg-white py-10 lg:py-16"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="mx-auto flex w-[92%] flex-col items-start justify-between gap-8 md:w-[85%] lg:flex-row lg:gap-12">
          <div data-aos="fade-up" data-aos-duration="800">
            <UButton
              to="/devenir-partenaire"
              variant="primary"
              className="shrink-0 !px-4 !py-2.5 text-[18px]"
            >
              Devenir partenaire
            </UButton>
          </div>
          <p
            className="max-w-[468px] text-body-md tracking-[-0.32px] text-body"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            {INTRO_TEXT}
          </p>
        </div>
      </section>

      {/* PROJECTS LIST */}
      <section
        className="bg-white py-10 lg:py-12"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="mx-auto flex w-[92%] flex-col gap-16 md:w-[85%] lg:gap-[100px]">
          {featured.map((project, index) => {
            const imageRight = index % 2 === 1
            return (
              <article
                key={project.id}
                className={`flex flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:gap-10 ${
                  imageRight ? 'lg:flex-row-reverse' : ''
                }`}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={index * 100}
              >
                <div
                  className="w-full overflow-hidden rounded-[8px] lg:w-1/2"
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[600/256] w-full cursor-pointer object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div
                  className="flex w-full flex-col items-start gap-6 lg:w-1/2 lg:gap-10"
                  data-aos={imageRight ? 'fade-right' : 'fade-left'}
                  data-aos-duration="1500"
                >
                  <UHeading level={2} color="primary">
                    {project.title}
                  </UHeading>
                  <p
                    className="text-body-md tracking-[-0.32px] text-body"
                    dangerouslySetInnerHTML={{
                      __html: sanitizeHtml(project.excerpt),
                    }}
                  />
                  <UButton
                    to={project.to}
                    variant="primary"
                    className="!px-4 !py-2.5 text-[18px]"
                  >
                    Découvrir le projet
                  </UButton>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <CtaSection donVariant="white" />
    </div>
  )
}
