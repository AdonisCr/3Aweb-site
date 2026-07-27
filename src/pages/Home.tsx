import { useState } from 'react'
import { Link } from "react-router-dom";
import UButton from '@/components/ui/UButton'
import UHeading from "@/components/ui/UHeading";
import UCta from '@/components/ui/UCta'
import PartnerIcon from '@/components/ui/PartnerIcon'
import { useSmartPosts } from '@/hooks/useSmartData'

const stats = [
  { value: '500+', label: 'De bénéficiaires' },
  { value: '100%', label: "D'insertion Professionnelle" },
  { value: '30+', label: 'Partenaires' },
]

interface Project {
  id: string;
  title: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: "accompagnement",
    title: "Accompagnement professionnel",
    image: "/assets/home/accomp-pro.png",
    link: "/projets/accompagnement-professionnel",
  },
  {
    id: "regards-croises",
    title: "Regards croisés",
    image: "/assets/home/projetmanq1.png",
    link: "/projets/regards-croises",
  },
  {
    id: "parrainage",
    title: "Parrainage",
    image: "/assets/home/projetmanq2.png",
    link: "/projets/parrainage",
  },
];

const featuredArticle = {
  title: "Titre de l'article",
  date: "12 juin",
  excerpt:
    "Lorem ipsum dolor sit amet. Ut dolorum modi sit nihil autem rem autem delectus ea corporis quia ea veniam velit et doloribus sapiente. Sed aperiam molestiae sit veniam omnis et velit omnis et quisquam quos aut doloremque maxime cum obcaecati sint. Qui molestias fuga qui aperiam sunt aut quibusdam soluta hic dicta magnam sed repellat doloribus ut nobis dolorum et cupiditate magni. Quo dolor beatae rem repellendus excepturi qui obcaecati ipsam rem dolor explicabo.",
  image: "/assets/home/article-featured.png",
};

const partnersRow1 = [
  { name: "Partner 1", logo: "/assets/home/partners/p01.png" },
  { name: "Partner 2", logo: "/assets/home/partners/p02.png" },
  { name: "Partner 3", logo: "/assets/home/partners/p03.png" },
  { name: "Partner 4", logo: "/assets/home/partners/p04.png" },
  { name: "Partner 5", logo: "/assets/home/partners/p05.png" },
  { name: "Partner 6", logo: "/assets/home/partners/p06.png" },
  { name: "Partner 7", logo: "/assets/home/partners/p07.png" },
  { name: "Partner 8", logo: "/assets/home/partners/p08.png" },
  { name: "Partner 9", logo: "/assets/home/partners/p09.png" },
  { name: "Partner 10", logo: "/assets/home/partners/p10.png" },
  { name: "Partner 11", logo: "/assets/home/partners/p11.png" },
];

const partnersRow2 = [
  { name: "Partner 12", logo: "/assets/home/partners/p00.png" },
  { name: "Partner 13", logo: "/assets/home/partners/p12.png" },
  { name: "Partner 14", logo: "/assets/home/partners/p13.png" },
  { name: "Partner 15", logo: "/assets/home/partners/p14.png" },
  { name: "Partner 16", logo: "/assets/home/partners/p15.png" },
  { name: "Partner 17", logo: "/assets/home/partners/p16.png" },
  { name: "Partner 18", logo: "/assets/home/partners/p17.png" },
  { name: "Partner 19", logo: "/assets/home/partners/p18.png" },
  { name: "Partner 20", logo: "/assets/home/partners/p19.png" },
  { name: "Partner 21", logo: "/assets/home/partners/p20.png" },
];

const BackArrow = () => (
  <svg
    className="mr-2 h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#521800"
    strokeWidth={2.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 12H5M12 19l-7-7 7-7"
    />
  </svg>
);

export default function Home() {
  const [activeProject, setActiveProject] = useState(0)
  const { posts } = useSmartPosts(3)
  const featuredPost = posts[0]

  function nextProject() {
    setActiveProject((prev) => (prev + 1) % projects.length)
  }

  function prevProject() {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className="page">
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center">
        <div className="absolute inset-0">
          <img
            src="/assets/home/hero-bg.jpg"
            alt=""
            className="size-full object-cover"
          />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.7) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto w-[92%] py-28 md:w-[85%] lg:py-0">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
            <div className="flex max-w-[875px] flex-col items-start gap-8 lg:gap-12">
              <h1 className="text-white" style={{ lineHeight: 1.25 }}>
                <span className="font-impact text-[48px] font-normal sm:text-[64px] lg:text-[96px]">
                  10 ans
                </span>{" "}
                <span className="text-[24px] font-semibold sm:text-[32px] lg:text-[45px]">
                  d&apos;intelligence collective au service de la coopération.
                </span>
              </h1>
              <p className="max-w-[518px] text-[16px] font-semibold text-white sm:text-[18px] lg:text-[20px]">
                Alliance Actions Afrique accompagne les populations
                défavorisées, enfants, adolescent(e)s, étudiant(e)s de la
                formation à l&apos;insertion professionnelle au Bénin.
              </p>
              <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
                <UButton to="/partenariat" variant="primary">
                  Devenir partenaire <PartnerIcon />
                </UButton>
                <UButton to="https://www.helloasso.com/associations/alliance-actions-afrique/formulaires/1" variant="white">
                  Faire un don
                </UButton>
              </div>
            </div>

            <Link
              to="/partenariat"
              className="hidden flex-col items-center gap-3 xl:flex"
            >
              <div className="flex items-center">
                <img
                  src="/assets/home/partner-avatar-1.png"
                  alt=""
                  className="relative z-[3] size-[42px] rounded-full bg-white object-cover"
                />
                <img
                  src="/assets/home/partner-avatar-2.png"
                  alt=""
                  className="relative z-[2] -ml-2.5 size-[42px] rounded-full bg-white object-cover"
                />
                <img
                  src="/assets/home/partner-avatar-3.png"
                  alt=""
                  className="relative z-[1] -ml-2.5 size-[42px] rounded-full bg-white object-cover"
                />
              </div>
              <span className="text-[16px] font-bold text-white">
                + 25 partenaires
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION & STATS */}
      <section className="bg-white py-10 lg:py-[60px]">
        <div className="mx-auto flex w-[92%] flex-col items-start gap-10 md:w-[85%] lg:flex-row lg:items-center lg:gap-16">
          <p className="max-w-[416px] text-body-md text-dark">
            Nos missions sont d&apos;
            <strong>
              accompagner et financer des programmes d&apos;éducation
            </strong>
            {", "}
            <strong>développer des compétences professionnelles</strong>
            {" et "}
            <strong>
              soutenir l&apos;esprit d&apos;entreprendre au Bénin.
            </strong>
          </p>
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5 lg:flex-1">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center gap-4 text-center lg:gap-6"
              >
                <div className="text-stat text-dark">{stat.value}</div>
                <div className="text-body-lg text-dark">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative overflow-hidden bg-white py-10 lg:py-16">
        <div className="mx-auto flex w-[92%] flex-col items-start gap-10 md:w-[85%] lg:flex-row lg:items-center lg:justify-between lg:gap-20">
          <div className="flex max-w-[441px] flex-col items-start gap-8 lg:gap-10">
            <UHeading level={2} color="primary">
              Qui sommes nous ?
            </UHeading>
            <p className="text-body-md tracking-[-0.32px] text-body">
              Alliance Actions Afrique s&apos;engage au Bénin à travers des
              réponses aux appels à projet, des conventions signées sur 3 ans et
              une participation à la fois humaine et financière aux projets.
              L&apos;association entend développer des partenariats pérennes,
              tournés vers l&apos;avenir.
            </p>
            <UButton to="/association" variant="primary">
              Découvrir l&apos;association
            </UButton>
          </div>
          <div className="w-full max-w-[593px] shrink-0 lg:w-[45%]">
            <img
              src="/assets/home/africa-map.png"
              alt="Carte de l'Afrique, Bénin surligné"
              className="h-auto w-full object-contain object-bottom"
            />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-white py-10 lg:py-16">
        <div className="mx-auto flex w-[92%] flex-col gap-8 md:w-[85%] lg:gap-10">
          <div className="flex items-center justify-between gap-4">
            <UHeading level={2} color="primary">
              Nos projets marquants
            </UHeading>
            <div className="inline-flex items-center gap-4 rounded-lg border border-primary px-1.5 py-1.5">
              <button
                type="button"
                className="flex items-center justify-center rounded border border-primary p-1.5 text-primary transition-colors hover:bg-primary hover:text-white"
                aria-label="Projet précédent"
                onClick={prevProject}
              >
                <svg
                  className="h-3 w-2"
                  fill="none"
                  viewBox="0 0 8 14"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    d="M7 1L1 7l6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="flex items-center justify-center rounded border border-primary p-1.5 text-primary transition-colors hover:bg-primary hover:text-white"
                aria-label="Projet suivant"
                onClick={nextProject}
              >
                <svg
                  className="h-3 w-2"
                  fill="none"
                  viewBox="0 0 8 14"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    d="M1 1l6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative h-[240px] overflow-hidden rounded-2xl sm:h-[300px] md:h-[380px]">
            <img
              src={projects[activeProject].image}
              alt={projects[activeProject].title}
              className="size-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center gap-2">
              {projects.map((project, i) => (
                <button
                  key={project.id}
                  type="button"
                  className={`rounded-full bg-dark transition-all ${i === activeProject ? "h-2.5 w-2.5" : "h-2 w-2"}`}
                  style={{
                    opacity:
                      i === activeProject
                        ? 1
                        : Math.max(0.2, 1 - Math.abs(i - activeProject) * 0.3),
                  }}
                  aria-label={`Aller au projet ${project.title}`}
                  onClick={() => setActiveProject(i)}
                />
              ))}
            </div>
            <div className="flex flex-col items-start gap-4 sm:items-end sm:gap-6">
              <UHeading
                level={2}
                color="dark"
                className="!text-[24px] lg:!text-[32px]"
              >
                {projects[activeProject].title}
              </UHeading>
              <UButton to={projects[activeProject].link} variant="primary">
                Découvrir ce projet
              </UButton>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="bg-white py-10 lg:py-16">
        <div className="mx-auto flex w-[92%] flex-col gap-8 md:w-[85%] lg:gap-10">
          <UHeading level={2} color="primary">
            À la une :
          </UHeading>
          {featuredPost && (
            <div className="flex w-full flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:gap-10">
              <div className="aspect-[637/283] w-full overflow-hidden rounded-lg bg-gray-100 lg:flex-1">
                <img
                  src={featuredPost.featuredImage?.node?.sourceUrl ?? "/assets/home/article-featured.png"}
                  alt={featuredPost.title}
                  className="size-full object-cover"
                />
              </div>
              <div className="flex w-full max-w-[510px] flex-col items-start gap-6 lg:gap-10">
                <div className="flex flex-col gap-2">
                  <h3 className="text-[24px] font-bold text-primary lg:text-[32px]">
                    {featuredPost.title}
                  </h3>
                  <p className="text-body-md font-bold text-dark">
                    Publié le {featuredPost.date}
                  </p>
                </div>
                <p className="text-body-md tracking-[-0.32px] text-body">
                  {featuredPost.excerpt}
                </p>
                <UButton to={`/actualites/${featuredPost.slug}`} variant="primary">
                  Lire l&apos;article
                </UButton>
              </div>
            </div>
          )}
          <UButton to="/actualites" variant="text" className="!text-dark">
            <BackArrow />
            Voir tous les articles
          </UButton>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-white py-10 lg:py-20">
        <div className="mx-auto flex w-[92%] flex-col gap-10 md:w-[85%] lg:gap-20">
          <UHeading level={2} color="primary">
            Accompagnés par des visionnaires
          </UHeading>
          <div className="flex w-full flex-col gap-6 lg:gap-4">
            <div className="flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-6">
              {partnersRow1.map((partner) => (
                <img
                  key={partner.logo}
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 w-auto max-w-[120px] shrink-0 object-contain sm:h-12 lg:h-14"
                />
              ))}
            </div>
            <div className="flex w-full flex-wrap items-center justify-between gap-x-6 gap-y-6">
              {partnersRow2.map((partner) => (
                <img
                  key={partner.logo}
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 w-auto max-w-[140px] shrink-0 object-contain sm:h-12 lg:h-14"
                />
              ))}
            </div>
          </div>
          <UButton to="/partenariat" variant="text" className="!text-dark">
            <BackArrow />
            Découvrir la liste complète de nos partenaires
          </UButton>
        </div>
      </section>

      {/* CTA */}
      <UCta
        title="Rejoignez-nous !"
        subtitle="Ou partagez notre vision commune en soutenant le développement et l'épanouissement professionnel de nos parrainés et des jeunes que nous accompagnons."
        image="/assets/home/rejoignez-nous.jpg"
        imageAlt="Poignée de main professionnelle"
        actions={
          <>
            <UButton to="/partenariat" variant="primary">
              Devenir partenaire <PartnerIcon />
            </UButton>
            <UButton to="https://www.helloasso.com/associations/alliance-actions-afrique/formulaires/1" variant="dark">
              Faire un don
            </UButton>
          </>
        }
      />
    </div>
  );
}
