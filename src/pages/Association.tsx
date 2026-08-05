import { useState } from 'react'
import UHeading from '@/components/ui/UHeading'
import CtaSection from '@/components/ui/CtaSection'
import YoutubeEmbed from '@/components/ui/YoutubeEmbed'
import UPlaceholder from '@/components/ui/UPlaceholder'
import PageTitle from '@/components/layout/PageTitle'
import { useSmartTeamMembers } from '@/hooks/useSmartData'
import { useGlobalSettings } from '@/hooks/useWordPress'
import { useAutoSlide } from '@/hooks/useAutoSlide'
import { safeHttpUrl } from '@/lib/safeUrl'

type TeamRegion = 'fr' | 'bj'

const values = [
  { id: 'v1', title: 'Solidarité', content: "Face aux obstacles d'accès à la formation, l'assistanat n'est pas une solution durable. La solidarité, elle, crée du lien et de l'autonomie.", image: '/assets/association/valeurs.webp' },
  { id: 'v2', title: 'Action', content: 'Faire de chaque engagement une action concrète au service des bénéficiaires.', image: '/assets/association/action.webp' },
  { id: 'v3', title: 'Proximité', content: 'Construire des relations humaines fondées sur l\'écoute et la confiance.', image: '/assets/association/proximite.webp' },
  { id: 'v4', title: 'Transparence', content: 'Garantir et installer une communication claire, honnête et responsable.', image: '/assets/association/transparence.webp' },
  { id: 'v5', title: 'Partage', content: 'Favoriser la transmission des connaissances, des expériences et des opportunités.', image: '/assets/association/partage.webp' },
]

export default function Association() {
  const {
    index: activeValue,
    goTo: goToValue,
  } = useAutoSlide({ length: values.length, intervalMs: 60000 })
  const [teamRegion, setTeamRegion] = useState<TeamRegion>('fr')
  const [teamPage, setTeamPage] = useState(0)
  const { missionVideoUrl } = useGlobalSettings()

  const { frMembers, bjMembers } = useSmartTeamMembers(20)

  const filteredTeam = teamRegion === 'fr' ? [...frMembers].reverse() : [...bjMembers].reverse()
  const teamPageSize = 4
  const teamPageCount = Math.max(1, Math.ceil(filteredTeam.length / teamPageSize))
  const visibleTeam = filteredTeam.slice(teamPage * teamPageSize, teamPage * teamPageSize + teamPageSize)
  const currentValue = values[activeValue]

  function setRegion(region: TeamRegion) {
    setTeamRegion(region)
    setTeamPage(0)
  }

  function prevTeam() {
    setTeamPage((prev) => (prev - 1 + teamPageCount) % teamPageCount)
  }

  function nextTeam() {
    setTeamPage((prev) => (prev + 1) % teamPageCount)
  }

  return (
    <div className="page pt-28">
      <PageTitle title="Qui sommes-nous ?" />

      {/* HERO IMAGE */}
      <section className="w-full" data-aos="zoom-in" data-aos-duration="1200">
        <div className="h-[240px] w-full overflow-hidden sm:h-[360px] lg:h-[500px]">
          <img
            src="/assets/association/hero.webp"
            alt="Enfants regardant le paysage au Bénin"
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
          />
        </div>
      </section>

      {/* NOTRE HISTOIRE */}
      <section
        className="bg-white py-10 lg:py-16"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="mx-auto flex w-[92%] flex-col items-start justify-between gap-10 md:w-[85%] lg:flex-row lg:gap-16">
          <div
            className="flex max-w-[564px] flex-col gap-8 lg:gap-10"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <div data-aos="fade-up" data-aos-duration="1200">
              <UHeading level={2} color="primary">
                Notre histoire
              </UHeading>
            </div>
            <div className="space-y-4 text-body-md tracking-[-0.32px] text-body">
              <p>
                Lors d&apos;un voyage solidaire au Bénin en 2015, Franca Sornin
                fonde Alliance Actions Afrique pour soutenir des projets locaux
                d&apos;éducation et d&apos;entrepreneuriat. L&apos;association
                agit en complément des politiques publiques afin de favoriser la
                création de richesse au Bénin, en accompagnant des talents issus
                de milieux défavorisés dans leur formation et leur insertion
                professionnelle.
              </p>
              <p>
                Portée par l&apos;engagement de Franca Sornin, directrice de
                l&apos;équipe France et vice-présidente de l&apos;équipe Bénin,
                Alliance Actions Afrique fédère de nombreuses initiatives
                individuelles. Elle s&apos;engage à travers des partenariats
                durables, fondés sur des conventions pluriannuelles et un
                soutien humain et financier aux projets, notamment au sein de
                l&apos;Université Esperanza à Cotonou.
              </p>
            </div>
          </div>
          <div
            className="w-full max-w-[352px] shrink-0 self-center lg:self-start"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <div className="aspect-[352/313] w-full overflow-hidden">
              <img
                src="/assets/association/histoire.webp"
                alt="Membres de l'association"
                loading="lazy"
                decoding="async"
                className="size-full cursor-pointer object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="mt-8 h-px w-full bg-gray-200 lg:mt-[62px]" />
          </div>
        </div>
      </section>

      {/* NOTRE MISSION */}
      <section
        className="bg-white py-10 lg:py-16"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="mx-auto flex w-[92%] flex-col gap-10 md:w-[85%] lg:gap-20">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-12">
            <div
              className="shrink-0"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <UHeading level={2} color="primary">
                Notre mission
              </UHeading>
            </div>
            <p
              className="max-w-[564px] text-left text-body-md tracking-[-0.32px] text-body lg:text-right"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              Les missions de Alliance Actions Afrique sont d&apos;
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
          </div>

          <div data-aos="zoom-in" data-aos-duration="1200">
            <YoutubeEmbed
              url={safeHttpUrl(missionVideoUrl, 'https://www.youtube.com/watch?v=e937-my0QNw')}
              title="Présentation Alliance Actions Afrique"
              poster="/assets/association/mission-video.webp"
              playIconSrc="/assets/association/youtube-icon.svg"
              playSrc="/assets/association/youtube-play.svg"
            />
          </div>
        </div>
      </section>

      {/* NOS VALEURS */}
      <section
        className="bg-white py-10 lg:py-20"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="mx-auto flex w-[92%] flex-col gap-8 md:w-[85%] lg:gap-10">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-12">
            <div
              className="shrink-0"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <UHeading level={2} color="primary">
                Nos valeurs
              </UHeading>
            </div>
            <p
              className="max-w-[453px] text-left text-body-md tracking-[-0.32px] text-body lg:text-right"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              Nos actions s&apos;inscrivent dans une vision durable du
              développement, portée par des valeurs qui guident chacune de nos
              décisions et de nos engagements sur le terrain.
            </p>
          </div>

          <div
            className="relative h-[200px] w-full overflow-hidden rounded-[15px] md:h-[319px]"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            {values.map((value, i) => (
              <img
                key={value.id}
                src={value.image}
                alt={value.title}
                className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ease-out ${
                  i === activeValue ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          <div
            className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="flex items-center gap-2">
              {values.map((value, i) => (
                <button
                  key={value.id}
                  type="button"
                  className={`rounded-full bg-dark transition-all ${i === activeValue ? "h-2.5 w-2.5" : "h-2 w-2"}`}
                  style={{
                    opacity:
                      i === activeValue
                        ? 1
                        : Math.max(0.2, 1 - Math.abs(i - activeValue) * 0.3),
                  }}
                  aria-label={`Aller à la valeur ${value.title}`}
                  onClick={() => goToValue(i)}
                />
              ))}
            </div>
            <div className="flex max-w-[339px] flex-col gap-4 text-left sm:items-end sm:text-right sm:gap-6">
              <UHeading
                level={2}
                color="dark"
                className="!text-[28px] transition-opacity duration-500 lg:!text-[32px]"
                key={currentValue.id}
              >
                {currentValue.title}
              </UHeading>
              <p
                className="text-body-md tracking-[-0.48px] text-black"
                key={`${currentValue.id}-content`}
              >
                {currentValue.content}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NOTRE ÉQUIPE */}
      <section
        className="bg-white py-10 lg:py-16"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="mx-auto flex w-[92%] flex-col gap-8 md:w-[85%] lg:gap-10">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-12">
            <div
              className="shrink-0"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <UHeading level={2} color="primary">
                Notre équipe
              </UHeading>
            </div>
            <p
              className="max-w-[453px] text-left text-body-md tracking-[-0.32px] text-body lg:text-right"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              Alliance Actions Afrique est portée par une équipe
              franco-béninoise engagée et réunie par une volonté commune
              d&apos;agir concrètement et durablement au service des talents
              locaux.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {visibleTeam.map((member, i) => (
              <div
                key={member.id}
                className="flex flex-col gap-3"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={i * 100}
              >
                {member.featuredImage?.node?.sourceUrl ? (
                  <div className="aspect-[253/318] w-full overflow-hidden rounded">
                    <img
                      src={member.featuredImage.node.sourceUrl}
                      alt={member.title}
                      loading="lazy"
                      decoding="async"
                      className="size-full cursor-pointer object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                ) : (
                  <UPlaceholder
                    ratio="253/318"
                    label="photo.webp"
                    className="w-full !rounded"
                  />
                )}
                <div className="flex flex-col gap-2">
                  <p className="text-heading-sm font-bold text-primary">
                    {member.title}
                  </p>
                  <div className="flex items-center justify-between gap-2">
                    <p className="shrink-0 text-body-md font-bold tracking-[-0.48px] text-body">
                      {member.teamMemberFields?.role ?? ""}
                    </p>
                    <div className="h-px min-w-0 flex-1 bg-gray-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="flex justify-center lg:justify-end"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="inline-flex items-center gap-4 rounded-lg border border-primary px-1.5 py-1.5">
              <button
                type="button"
                className="flex items-center justify-center rounded border border-primary p-1.5 text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="Membres précédents"
                onClick={prevTeam}
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

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  className={`transition-opacity ${teamRegion === "fr" ? "opacity-100" : "opacity-30"}`}
                  aria-label="Équipe France"
                  aria-pressed={teamRegion === "fr"}
                  onClick={() => setRegion("fr")}
                >
                  <img
                    src="/assets/association/flag-fr.svg"
                    alt=""
                    className="h-[11px] w-[15px]"
                  />
                </button>
                <button
                  type="button"
                  className={`transition-opacity ${teamRegion === "bj" ? "opacity-100" : "opacity-30"}`}
                  aria-label="Équipe Bénin"
                  aria-pressed={teamRegion === "bj"}
                  onClick={() => setRegion("bj")}
                >
                  <img
                    src="/assets/association/flag-bj.svg"
                    alt=""
                    className="h-[11px] w-[15px]"
                  />
                </button>
              </div>

              <button
                type="button"
                className="flex items-center justify-center rounded border border-primary p-1.5 text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="Membres suivants"
                onClick={nextTeam}
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
        </div>
      </section>

      {/* CTA */}
      <div data-aos="fade-up" data-aos-duration="800">
        <CtaSection image="/assets/association/rejoignez-nous.webp" />
      </div>
    </div>
  );
}
