import { useState } from 'react'
import { Link } from 'react-router-dom'
import UButton from '@/components/ui/UButton'
import UHeading from '@/components/ui/UHeading'
import UCta from '@/components/ui/UCta'
import UPlaceholder from '@/components/ui/UPlaceholder'

/** Remplacer par l'URL YouTube réelle dès qu'elle est disponible. */
const MISSION_VIDEO_URL = 'https://www.youtube.com/'

const values = [
  {
    title: 'Solidarité',
    desc: "Face aux obstacles d'accès à la formation, l'assistanat n'est pas une solution durable. La solidarité, elle, crée du lien et de l'autonomie.",
    image: '/assets/association/valeurs.jpg',
  },
  {
    title: 'Engagement',
    desc: "Nous agissons concrètement et durablement pour accompagner les talents locaux vers l'autonomie professionnelle.",
    image: '/assets/association/valeurs.jpg',
  },
  {
    title: 'Coopération',
    desc: 'Nous favorisons les échanges entre acteurs du Bénin et de France pour créer des ponts durables.',
    image: '/assets/association/valeurs.jpg',
  },
  {
    title: 'Éducation',
    desc: "L'éducation est au cœur de notre mission. Nous croyons en son pouvoir transformateur pour les communautés.",
    image: '/assets/association/valeurs.jpg',
  },
]

type TeamRegion = 'fr' | 'bj'

interface TeamMember {
  name: string
  role: string
  region: TeamRegion
  image?: string
}

const team: TeamMember[] = [
  { name: 'Franca Sornin', role: 'Directrice', region: 'fr' },
  { name: 'Membre', role: 'Président', region: 'fr' },
  { name: 'Membre', role: 'Trésorier', region: 'fr' },
  { name: 'Membre', role: 'Secrétaire', region: 'fr' },
  { name: 'Membre', role: 'Président', region: 'bj' },
  { name: 'Membre', role: 'Vice-président', region: 'bj' },
  { name: 'Membre', role: 'Trésorier', region: 'bj' },
  { name: 'Membre', role: 'Secrétaire', region: 'bj' },
]

const PARTNER_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M8.24999 4.49958H10.5L12.9675 2.02458C13.0372 1.95429 13.1202 1.89849 13.2116 1.86041C13.3029 1.82234 13.401 1.80273 13.5 1.80273C13.599 1.80273 13.697 1.82234 13.7884 1.86041C13.8798 1.89849 13.9628 1.95429 14.0325 2.02458L15.9675 3.96708C16.1072 4.1076 16.1856 4.29769 16.1856 4.49583C16.1856 4.69397 16.1072 4.88406 15.9675 5.02458L14.25 6.74958H8.24999V8.24958C8.24999 8.4485 8.17097 8.63926 8.03032 8.77991C7.88966 8.92057 7.6989 8.99958 7.49999 8.99958C7.30107 8.99958 7.11031 8.92057 6.96966 8.77991C6.829 8.63926 6.74999 8.4485 6.74999 8.24958V5.99958C6.74999 5.60176 6.90802 5.22023 7.18933 4.93892C7.47063 4.65762 7.85216 4.49958 8.24999 4.49958ZM3.74999 8.24958V11.2496L2.03249 12.9671C1.8928 13.1076 1.81439 13.2977 1.81439 13.4958C1.81439 13.694 1.8928 13.8841 2.03249 14.0246L3.96749 15.9671C4.03721 16.0374 4.12016 16.0932 4.21155 16.1313C4.30295 16.1693 4.40098 16.1889 4.49999 16.1889C4.599 16.1889 4.69702 16.1693 4.78842 16.1313C4.87981 16.0932 4.96276 16.0374 5.03249 15.9671L8.24999 12.7496H11.25C11.4489 12.7496 11.6397 12.6706 11.7803 12.5299C11.921 12.3893 12 12.1985 12 11.9996V11.2496H12.75C12.9489 11.2496 13.1397 11.1706 13.2803 11.0299C13.421 10.8893 13.5 10.6985 13.5 10.4996V9.74958H14.25C14.4489 9.74958 14.6397 9.67057 14.7803 9.52991C14.921 9.38926 15 9.1985 15 8.99958V8.24958H9.74999V8.99958C9.74999 9.39741 9.59195 9.77894 9.31065 10.0602C9.02934 10.3415 8.64781 10.4996 8.24999 10.4996H6.74999C6.35216 10.4996 5.97063 10.3415 5.68933 10.0602C5.40802 9.77894 5.24999 9.39741 5.24999 8.99958V6.74958L3.74999 8.24958Z" fill="white" />
  </svg>
)

export default function Association() {
  const [activeValue, setActiveValue] = useState(0)
  const [teamRegion, setTeamRegion] = useState<TeamRegion>('fr')
  const [teamPage, setTeamPage] = useState(0)

  const filteredTeam = team.filter((m) => m.region === teamRegion)
  const teamPageSize = 4
  const teamPageCount = Math.max(1, Math.ceil(filteredTeam.length / teamPageSize))
  const visibleTeam = filteredTeam.slice(teamPage * teamPageSize, teamPage * teamPageSize + teamPageSize)

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
    <div className="page pt-20">
      {/* PAGE TITLE */}
      <section className="relative overflow-hidden bg-white py-10 lg:py-12">
        <img
          src="/assets/association/title-watermark.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 h-full w-auto max-w-[55%] object-contain object-right opacity-15"
        />
        <div className="relative z-10 mx-auto w-[92%] md:w-[85%]">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex shrink-0 items-center text-primary" aria-label="Retour à l'accueil">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <UHeading level={1} color="primary" className="!text-[28px] !leading-tight lg:!text-[36px] lg:!leading-[43.6px]">
              Qui sommes-nous ?
            </UHeading>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="w-full">
        <div className="h-[240px] w-full overflow-hidden sm:h-[360px] lg:h-[500px]">
          <img
            src="/assets/association/hero.jpg"
            alt="Enfants regardant le paysage au Bénin"
            className="size-full object-cover"
          />
        </div>
      </section>

      {/* NOTRE HISTOIRE */}
      <section className="bg-white py-10 lg:py-16">
        <div className="mx-auto flex w-[92%] flex-col items-start justify-between gap-10 md:w-[85%] lg:flex-row lg:gap-16">
          <div className="flex max-w-[564px] flex-col gap-8 lg:gap-10">
            <UHeading level={2} color="primary">Notre histoire</UHeading>
            <div className="space-y-4 text-body-md tracking-[-0.32px] text-body">
              <p>
                Lors d&apos;un voyage solidaire au Bénin en 2015, Franca Sornin fonde Alliance Actions
                Afrique pour soutenir des projets locaux d&apos;éducation et d&apos;entrepreneuriat.
                L&apos;association agit en complément des politiques publiques afin de favoriser la
                création de richesse au Bénin, en accompagnant des talents issus de milieux
                défavorisés dans leur formation et leur insertion professionnelle.
              </p>
              <p>
                Portée par l&apos;engagement de Franca Sornin, directrice de l&apos;équipe France et
                vice-présidente de l&apos;équipe Bénin, Alliance Actions Afrique fédère de nombreuses
                initiatives individuelles. Elle s&apos;engage à travers des partenariats durables,
                fondés sur des conventions pluriannuelles et un soutien humain et financier aux
                projets, notamment au sein de l&apos;Université Esperanza à Cotonou.
              </p>
            </div>
          </div>
          <div className="w-full max-w-[352px] shrink-0 self-center lg:self-start">
            <div className="aspect-[352/313] w-full overflow-hidden">
              <img
                src="/assets/association/histoire.png"
                alt="Membres de l'association"
                className="size-full object-cover"
              />
            </div>
            <div className="mt-8 h-px w-full bg-gray-200 lg:mt-[62px]" />
          </div>
        </div>
      </section>

      {/* NOTRE MISSION */}
      <section className="bg-white py-10 lg:py-16">
        <div className="mx-auto flex w-[92%] flex-col gap-10 md:w-[85%] lg:gap-20">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-12">
            <UHeading level={2} color="primary" className="shrink-0">Notre mission</UHeading>
            <p className="max-w-[564px] text-left text-body-md tracking-[-0.32px] text-body lg:text-right">
              Les missions de Alliance Actions Afrique sont d&apos;
              <strong>accompagner et financer des programmes d&apos;éducation</strong>
              {', '}
              <strong>développer des compétences professionnelles</strong>
              {' et '}
              <strong>soutenir l&apos;esprit d&apos;entreprendre au Bénin.</strong>
            </p>
          </div>

          <a
            href={MISSION_VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-video w-full overflow-hidden rounded-[10px]"
            aria-label="Voir la vidéo de présentation sur YouTube"
          >
            <img
              src="/assets/association/mission-video.png"
              alt="Présentation Alliance Actions Afrique"
              className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="relative h-[45px] w-16 shrink-0">
                <img
                  src="/assets/association/youtube-icon.svg"
                  alt=""
                  aria-hidden
                  className="absolute inset-0 size-full"
                />
                <img
                  src="/assets/association/youtube-play.svg"
                  alt=""
                  aria-hidden
                  className="absolute left-[40%] top-[28%] h-[44%] w-[26%]"
                />
              </span>
            </span>
          </a>
        </div>
      </section>

      {/* NOS VALEURS */}
      <section className="bg-white py-10 lg:py-20">
        <div className="mx-auto flex w-[92%] flex-col gap-8 md:w-[85%] lg:gap-10">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-12">
            <UHeading level={2} color="primary" className="shrink-0">Nos valeurs</UHeading>
            <p className="max-w-[453px] text-left text-body-md tracking-[-0.32px] text-body lg:text-right">
              Nos actions s&apos;inscrivent dans une vision durable du développement, portée par des
              valeurs qui guident chacune de nos décisions et de nos engagements sur le terrain.
            </p>
          </div>

          <div className="h-[200px] w-full overflow-hidden rounded-[15px] md:h-[319px]">
            <img
              src={values[activeValue].image}
              alt={values[activeValue].title}
              className="size-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-center gap-2">
              {values.map((value, i) => (
                <button
                  key={value.title}
                  type="button"
                  className={`rounded-full bg-dark transition-all ${i === activeValue ? 'h-2.5 w-2.5' : 'h-2 w-2'}`}
                  style={{ opacity: i === activeValue ? 1 : Math.max(0.2, 1 - Math.abs(i - activeValue) * 0.3) }}
                  aria-label={`Aller à la valeur ${value.title}`}
                  onClick={() => setActiveValue(i)}
                />
              ))}
            </div>
            <div className="flex max-w-[339px] flex-col gap-4 text-left sm:items-end sm:text-right sm:gap-6">
              <UHeading level={2} color="dark" className="!text-[28px] lg:!text-[32px]">
                {values[activeValue].title}
              </UHeading>
              <p className="text-body-md tracking-[-0.48px] text-black">
                {values[activeValue].desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NOTRE ÉQUIPE */}
      <section className="bg-white py-10 lg:py-16">
        <div className="mx-auto flex w-[92%] flex-col gap-8 md:w-[85%] lg:gap-10">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-12">
            <UHeading level={2} color="primary" className="shrink-0">Notre équipe</UHeading>
            <p className="max-w-[453px] text-left text-body-md tracking-[-0.32px] text-body lg:text-right">
              Alliance Actions Afrique est portée par une équipe franco-béninoise engagée et réunie
              par une volonté commune d&apos;agir concrètement et durablement au service des talents
              locaux.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {visibleTeam.map((member, index) => (
              <div key={`${member.region}-${member.role}-${index}`} className="flex flex-col gap-3">
                {member.image ? (
                  <div className="aspect-[253/318] w-full overflow-hidden rounded">
                    <img src={member.image} alt={member.name} className="size-full object-cover" />
                  </div>
                ) : (
                  <UPlaceholder
                    ratio="253/318"
                    label="photo.jpg"
                    className="w-full !rounded"
                  />
                )}
                <div className="flex flex-col gap-2">
                  <p className="text-heading-sm font-bold text-primary">{member.name}</p>
                  <div className="flex items-center justify-between gap-2">
                    <p className="shrink-0 text-body-md font-bold tracking-[-0.48px] text-body">
                      {member.role}
                    </p>
                    <div className="h-px min-w-0 flex-1 bg-gray-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="inline-flex items-center gap-4 rounded-lg border border-primary px-1.5 py-1.5">
              <button
                type="button"
                className="flex items-center justify-center rounded border border-primary p-1.5 text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="Membres précédents"
                onClick={prevTeam}
              >
                <svg className="h-3 w-2" fill="none" viewBox="0 0 8 14" stroke="currentColor" strokeWidth={2}>
                  <path d="M7 1L1 7l6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  className={`transition-opacity ${teamRegion === 'fr' ? 'opacity-100' : 'opacity-30'}`}
                  aria-label="Équipe France"
                  aria-pressed={teamRegion === 'fr'}
                  onClick={() => setRegion('fr')}
                >
                  <img src="/assets/association/flag-fr.svg" alt="" className="h-[11px] w-[15px]" />
                </button>
                <button
                  type="button"
                  className={`transition-opacity ${teamRegion === 'bj' ? 'opacity-100' : 'opacity-30'}`}
                  aria-label="Équipe Bénin"
                  aria-pressed={teamRegion === 'bj'}
                  onClick={() => setRegion('bj')}
                >
                  <img src="/assets/association/flag-bj.svg" alt="" className="h-[11px] w-[15px]" />
                </button>
              </div>

              <button
                type="button"
                className="flex items-center justify-center rounded border border-primary p-1.5 text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="Membres suivants"
                onClick={nextTeam}
              >
                <svg className="h-3 w-2" fill="none" viewBox="0 0 8 14" stroke="currentColor" strokeWidth={2}>
                  <path d="M1 1l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <UCta
        title="Rejoignez-nous !"
        subtitle="Ou partagez notre vision commune en soutenant le développement et l'épanouissement professionnel de nos parrainés et des jeunes que nous accompagnons."
        image="/assets/association/rejoignez-nous.jpg"
        imageAlt="Poignée de main professionnelle"
        actions={
          <>
            <UButton to="/partenariat" variant="primary">Devenir partenaire {PARTNER_SVG}</UButton>
            <UButton to="/don" variant="dark">Faire un don</UButton>
          </>
        }
      />
    </div>
  )
}
