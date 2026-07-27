import { useState } from 'react'
import { Link } from "react-router-dom";
import UButton from '@/components/ui/UButton'
import UHeading from "@/components/ui/UHeading";
import UCta from '@/components/ui/UCta'

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
  { name: "Partner 4", logo: "/assets/partners/Coloured/image 28.png" },
  { name: "Partner 1", logo: "/assets/partners/Coloured/image 25.png" },
  { name: "Partner 6", logo: "/assets/partners/Coloured/image 30.png" },
  { name: "Partner 3", logo: "/assets/partners/Coloured/image 27.png" },
  { name: "Partner 2", logo: "/assets/partners/Coloured/image 26.png" },
  { name: "Partner 5", logo: "/assets/partners/Coloured/image 29.png" },
  { name: "Partner 16", logo: "/assets/partners/Coloured/image 40.png" },
  { name: "Partner 7", logo: "/assets/partners/Coloured/image 31.png" },
  { name: "Partner 8", logo: "/assets/partners/Coloured/image 32.png" },
  { name: "Partner 9", logo: "/assets/partners/Coloured/image 33.png" },
  { name: "Partner 14", logo: "/assets/partners/Coloured/image 38.png" },
];

const partnersRow2 = [
  { name: "Partner 18", logo: "/assets/partners/Coloured/image 42.png" },
  { name: "Partner 17", logo: "/assets/partners/Coloured/image 41.png" },
  { name: "Partner 20", logo: "/assets/partners/Coloured/image 44.png" },
  { name: "Partner 19", logo: "/assets/partners/Coloured/image 43.png" },
  { name: "Partner 21", logo: "/assets/partners/Coloured/image 31.png" },
  { name: "Partner 11", logo: "/assets/partners/Coloured/image 34.png" },
  { name: "Partner 10", logo: "/assets/partners/Coloured/image 35.png" },
  { name: "Partner 12", logo: "/assets/partners/Coloured/image 36.png" },
  { name: "Partner 13", logo: "/assets/partners/Coloured/image 37.png" },
  { name: "Partner 15", logo: "/assets/partners/Coloured/image 39.png" },
];

const PARTNER_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M8.24999 4.49958H10.5L12.9675 2.02458C13.0372 1.95429 13.1202 1.89849 13.2116 1.86041C13.3029 1.82234 13.401 1.80273 13.5 1.80273C13.599 1.80273 13.697 1.82234 13.7884 1.86041C13.8798 1.89849 13.9628 1.95429 14.0325 2.02458L15.9675 3.96708C16.1072 4.1076 16.1856 4.29769 16.1856 4.49583C16.1856 4.69397 16.1072 4.88406 15.9675 5.02458L14.25 6.74958H8.24999V8.24958C8.24999 8.4485 8.17097 8.63926 8.03032 8.77991C7.88966 8.92057 7.6989 8.99958 7.49999 8.99958C7.30107 8.99958 7.11031 8.92057 6.96966 8.77991C6.829 8.63926 6.74999 8.4485 6.74999 8.24958V5.99958C6.74999 5.60176 6.90802 5.22023 7.18933 4.93892C7.47063 4.65762 7.85216 4.49958 8.24999 4.49958ZM3.74999 8.24958V11.2496L2.03249 12.9671C1.8928 13.1076 1.81439 13.2977 1.81439 13.4958C1.81439 13.694 1.8928 13.8841 2.03249 14.0246L3.96749 15.9671C4.03721 16.0374 4.12016 16.0932 4.21155 16.1313C4.30295 16.1693 4.40098 16.1889 4.49999 16.1889C4.599 16.1889 4.69702 16.1693 4.78842 16.1313C4.87981 16.0932 4.96276 16.0374 5.03249 15.9671L8.24999 12.7496H11.25C11.4489 12.7496 11.6397 12.6706 11.7803 12.5299C11.921 12.3893 12 12.1985 12 11.9996V11.2496H12.75C12.9489 11.2496 13.1397 11.1706 13.2803 11.0299C13.421 10.8893 13.5 10.6985 13.5 10.4996V9.74958H14.25C14.4489 9.74958 14.6397 9.67057 14.7803 9.52991C14.921 9.38926 15 9.1985 15 8.99958V8.24958H9.74999V8.99958C9.74999 9.39741 9.59195 9.77894 9.31065 10.0602C9.02934 10.3415 8.64781 10.4996 8.24999 10.4996H6.74999C6.35216 10.4996 5.97063 10.3415 5.68933 10.0602C5.40802 9.77894 5.24999 9.39741 5.24999 8.99958V6.74958L3.74999 8.24958Z" fill="white" />
  </svg>
)

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

  function nextProject() {
    setActiveProject((prev) => (prev + 1) % projects.length)
  }

  function prevProject() {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <div className="page">
      {/* HERO */}
      <section className="relative flex min-h-[100svh] items-center lg:min-h-[814px]">
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
          <div className="flex items-end justify-between gap-8">
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
                  Devenir partenaire {PARTNER_SVG}
                </UButton>
                <UButton to="/don" variant="white">
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
        <div className="mx-auto flex w-[92%] flex-col items-start gap-10 md:w-[85%] lg:flex-row lg:items-center lg:gap-[150px]">
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

          <div className="relative h-[240px] overflow-visible rounded-2xl sm:h-[300px] md:h-[380px]">
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
          <div className="flex w-full flex-col items-stretch gap-8 lg:flex-row lg:items-center lg:gap-10">
            <div className="aspect-[637/283] w-full overflow-hidden rounded-lg bg-gray-100 lg:flex-1">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="size-full object-cover"
              />
            </div>
            <div className="flex w-full max-w-[510px] flex-col items-start gap-6 lg:gap-10">
              <div className="flex flex-col gap-2">
                <h3 className="text-[24px] font-bold text-primary lg:text-[32px]">
                  {featuredArticle.title}
                </h3>
                <p className="text-body-md font-bold text-dark">
                  Publié le {featuredArticle.date}
                </p>
              </div>
              <p className="text-body-md tracking-[-0.32px] text-body">
                {featuredArticle.excerpt}
              </p>
              <UButton to="/actualites/titre-de-l-article" variant="primary">
                Lire l&apos;article
              </UButton>
            </div>
          </div>
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
          <div className="flex w-full flex-col gap-10 lg:gap-4">
            <div className="flex w-full flex-wrap items-center justify-between gap-x-4 gap-y-6 mb-10">
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
          <UButton
            to="/partenariat"
            variant="text"
            className="!text-dark self-start"
          >
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
              Devenir partenaire {PARTNER_SVG}
            </UButton>
            <UButton to="/don" variant="dark">
              Faire un don
            </UButton>
          </>
        }
      />
    </div>
  );
}
