import { useState } from 'react'
import UButton from '@/components/ui/UButton'
import UHeading from '@/components/ui/UHeading'
import UPlaceholder from '@/components/ui/UPlaceholder'
import UCta from '@/components/ui/UCta'

const stats = [
  { value: '500+', label: 'De bénéficiaires' },
  { value: '100%', label: "D'insertion Professionnelle" },
  { value: '30+', label: 'Partenaires' },
]

interface Project {
  id: string
  title: string
  image?: string
  link: string
}

const projects: Project[] = [
  { id: 'regards-croises', title: 'Regards croisés', image: undefined, link: '/projets/regards-croises' },
  { id: 'parrainage', title: 'Parrainage', image: undefined, link: '/projets/parrainage' },
]

const featuredArticle = {
  title: "Titre de l'article",
  date: '12 juin',
  excerpt:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  image: undefined as string | undefined,
}

const partnersRow1 = [
  { name: "L'Oasis", logo: '/assets/partners/loasis.png' },
  { name: 'Malia', logo: '/assets/partners/malia.png' },
  { name: 'Fondation Guy Seb', logo: '/assets/partners/fondation-guy-seb.png' },
  { name: 'FormaSup Odyssée', logo: '/assets/partners/formasup-odyssee.png' },
  { name: 'Fondation Voltaire', logo: '/assets/partners/fondation-voltaire.png' },
  { name: '2 Minutes Max', logo: '/assets/partners/2-minutes-max.png' },
  { name: 'Générale Société', logo: '/assets/partners/generale-societe.png' },
  { name: 'AAA', logo: '/assets/partners/aaa-mark-black.png' },
  { name: 'Sir John Concept Store', logo: '/assets/partners/sir-john.png' },
  { name: 'Lillybelle', logo: '/assets/partners/lillybelle.png' },
]

const partnersRow2 = [
  { name: 'Ambassade de France au Bénin', logo: '/assets/partners/ambassade-france-benin.png' },
  { name: 'CPME 69', logo: '/assets/partners/cpme69.png' },
  { name: 'Métropole Grand Lyon', logo: '/assets/partners/metropole-grand-lyon.png' },
  { name: 'Ville de Lyon', logo: '/assets/partners/ville-de-lyon.png' },
  { name: 'AAA', logo: '/assets/partners/aaa-mark-gray.png' },
  { name: 'Bulltech', logo: '/assets/partners/bulltech.png' },
  { name: 'Seal Partner', logo: '/assets/partners/seal-partner.png' },
  { name: 'SSA Ecore', logo: '/assets/partners/ssa-ecore.png' },
  { name: 'Design Vebca', logo: '/assets/partners/design-vebca.png' },
]

const PARTNER_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M8.24999 4.49958H10.5L12.9675 2.02458C13.0372 1.95429 13.1202 1.89849 13.2116 1.86041C13.3029 1.82234 13.401 1.80273 13.5 1.80273C13.599 1.80273 13.697 1.82234 13.7884 1.86041C13.8798 1.89849 13.9628 1.95429 14.0325 2.02458L15.9675 3.96708C16.1072 4.1076 16.1856 4.29769 16.1856 4.49583C16.1856 4.69397 16.1072 4.88406 15.9675 5.02458L14.25 6.74958H8.24999V8.24958C8.24999 8.4485 8.17097 8.63926 8.03032 8.77991C7.88966 8.92057 7.6989 8.99958 7.49999 8.99958C7.30107 8.99958 7.11031 8.92057 6.96966 8.77991C6.829 8.63926 6.74999 8.4485 6.74999 8.24958V5.99958C6.74999 5.60176 6.90802 5.22023 7.18933 4.93892C7.47063 4.65762 7.85216 4.49958 8.24999 4.49958ZM3.74999 8.24958V11.2496L2.03249 12.9671C1.8928 13.1076 1.81439 13.2977 1.81439 13.4958C1.81439 13.694 1.8928 13.8841 2.03249 14.0246L3.96749 15.9671C4.03721 16.0374 4.12016 16.0932 4.21155 16.1313C4.30295 16.1693 4.40098 16.1889 4.49999 16.1889C4.599 16.1889 4.69702 16.1693 4.78842 16.1313C4.87981 16.0932 4.96276 16.0374 5.03249 15.9671L8.24999 12.7496H11.25C11.4489 12.7496 11.6397 12.6706 11.7803 12.5299C11.921 12.3893 12 12.1985 12 11.9996V11.2496H12.75C12.9489 11.2496 13.1397 11.1706 13.2803 11.0299C13.421 10.8893 13.5 10.6985 13.5 10.4996V9.74958H14.25C14.4489 9.74958 14.6397 9.67057 14.7803 9.52991C14.921 9.38926 15 9.1985 15 8.99958V8.24958H9.74999V8.99958C9.74999 9.39741 9.59195 9.77894 9.31065 10.0602C9.02934 10.3415 8.64781 10.4996 8.24999 10.4996H6.74999C6.35216 10.4996 5.97063 10.3415 5.68933 10.0602C5.40802 9.77894 5.24999 9.39741 5.24999 8.99958V6.74958L3.74999 8.24958Z" fill="white" />
  </svg>
)

const BackArrow = () => (
  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="#521800" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
)

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
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img src="/assets/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
          <div
            className="absolute inset-0 opacity-30"
            style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0, 0, 0, 0.7) 100%)' }}
          />
        </div>
        <div className="relative z-10 mx-auto" style={{ width: '85%' }}>
          <div className="flex items-end justify-between">
            <div className="flex flex-col items-start" style={{ width: '1100px', gap: '48px' }}>
              <h1 className="text-white" style={{ lineHeight: 1.25 }}>
                <span style={{ fontFamily: "Impact, 'Arial Black', sans-serif", fontSize: '120px', fontWeight: 400 }}>10</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '56px', fontWeight: 600 }}>
                  {' '}ans d'intelligence collective au service de la coopération.
                </span>
              </h1>
              <p className="text-white" style={{ width: '650px', fontFamily: 'Inter, sans-serif', fontSize: '24px', fontWeight: 600, lineHeight: 'normal' }}>
                Alliance Actions Afrique accompagne les populations défavorisées, enfants,
                adolescent(e)s, étudiant(e)s de la formation à l'insertion professionnelle au
                Bénin.
              </p>
              <div className="flex items-center" style={{ gap: '16px' }}>
                <UButton to="/partenariat" variant="primary">
                  Devenir partenaire {PARTNER_SVG}
                </UButton>
                <UButton to="/don" variant="white">Faire un don</UButton>
              </div>
            </div>

            {/* Partnership logos */}
            <div className="hidden xl:flex flex-col items-center" style={{ gap: '8px' }}>
              <div className="flex items-center">
                <img src="/figma-export/partner-0%3A418.png" className="object-cover rounded-full bg-white" style={{ width: 42, height: 42, position: 'relative', zIndex: 3 }} alt="" />
                <img src="/figma-export/partner-0%3A419.png" className="object-cover rounded-full bg-white" style={{ width: 42, height: 42, marginLeft: -10, position: 'relative', zIndex: 2 }} alt="" />
                <img src="/figma-export/partner-0%3A420.png" className="object-cover rounded-full bg-white" style={{ width: 42, height: 42, marginLeft: -10, position: 'relative', zIndex: 1 }} alt="" />
              </div>
              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '16px', fontWeight: 700, color: '#FFF', lineHeight: 'normal' }}>
                + 25 partenaires
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & STATS */}
      <section className="bg-white" style={{ padding: '60px 0' }}>
        <div className="flex items-center mx-auto" style={{ gap: '150px', width: '85%' }}>
          <p className="text-body-md text-dark" style={{ maxWidth: '360px' }}>
            Nos missions sont d'<strong>accompagner et financer des programmes d'éducation,
            développer des compétences professionnelles</strong> et <strong>soutenir l'esprit
            d'entreprendre</strong> au Bénin.
          </p>
          <div className="grid grid-cols-3 gap-8 flex-1">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-stat text-dark">{stat.value}</div>
                <div className="text-body-lg text-dark">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative bg-white" style={{ padding: '80px 0 80px 140px' }}>
        <div style={{ maxWidth: '600px' }}>
          <UHeading level={2} color="primary" className="mb-10">Qui sommes nous ?</UHeading>
          <p className="mb-10 text-body-md text-body" style={{ letterSpacing: '-0.32px' }}>
            Alliance Actions Afrique s'engage au Bénin à travers des réponses aux appels à
            projet, des conventions signées sur 3 ans et une participation à la fois humaine et
            financière aux projets. L'association entend développer des partenariats pérennes,
            tournés vers l'avenir.
          </p>
          <UButton to="/association" variant="primary">Découvrez l'association</UButton>
        </div>
        <img
          src="/assets/about-map.png"
          alt="Carte de l'Afrique, Bénin surligné"
          className="absolute top-1/2 -translate-y-1/2 right-0 object-cover"
          style={{ width: 593, height: 503, aspectRatio: '119/101', objectPosition: '-71.028px center' }}
        />
      </section>

      {/* PROJECTS (3-row stacked) */}
      <section className="bg-white" style={{ padding: '40px 0' }}>
        <div className="flex flex-col items-start mx-auto" style={{ gap: '40px', width: '85%' }}>
          {/* Row 1: title + arrows */}
          <div className="flex items-center justify-between w-full">
            <UHeading level={2} color="primary">Nos projets manquants</UHeading>
            <div className="inline-flex items-center rounded-xl border-2 border-primary overflow-hidden">
              <button type="button" className="w-10 h-9 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors" aria-label="Projet précédent" onClick={prevProject}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="w-px self-stretch bg-primary/30" />
              <button type="button" className="w-10 h-9 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors" aria-label="Projet suivant" onClick={nextProject}>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Row 2: full-width image */}
          {!projects[activeProject].image ? (
            <UPlaceholder ratio="1200/350" label={`${projects[activeProject].id}.jpg`} className="w-full" rounded={false} />
          ) : (
            <div className="w-full overflow-hidden" style={{ height: 350 }}>
              <img src={projects[activeProject].image} alt={projects[activeProject].title} className="w-full h-full object-cover" />
            </div>
          )}

          {/* Row 3: dots + title & CTA */}
          <div className="flex items-start justify-between w-full">
            <div className="flex items-center gap-2">
              {projects.map((project, i) => (
                <button
                  key={project.id}
                  type="button"
                  className={`rounded-full bg-dark transition-all ${i === activeProject ? 'w-2.5 h-2.5' : 'w-2 h-2'}`}
                  style={{ opacity: i === activeProject ? 1 : Math.max(0.2, 1 - Math.abs(i - activeProject) * 0.3) }}
                  aria-label={`Aller au projet ${i + 1}`}
                  onClick={() => setActiveProject(i)}
                />
              ))}
            </div>
            <div className="flex flex-col items-end" style={{ gap: '16px' }}>
              <UHeading level={3} color="dark">{projects[activeProject].title}</UHeading>
              <UButton to={projects[activeProject].link} variant="primary">Découvrir ce projet</UButton>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES (single featured) */}
      <section className="bg-white" style={{ padding: '40px 0' }}>
        <div className="flex flex-col items-start mx-auto" style={{ gap: '40px', width: '85%' }}>
          <UHeading level={2} color="primary">À la une :</UHeading>
          <div className="grid md:grid-cols-2 gap-8 items-center w-full">
            {!featuredArticle.image ? (
              <UPlaceholder ratio="574/258" label="article-featured.jpg" />
            ) : (
              <div className="rounded-card overflow-hidden" style={{ height: 350 }}>
                <img src={featuredArticle.image} alt={featuredArticle.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div>
              <UHeading level={3} color="dark" className="mb-2">{featuredArticle.title}</UHeading>
              <p className="mb-4 text-body-sm font-bold text-dark">Publié le {featuredArticle.date}</p>
              <p className="mb-6 text-body-md text-body">{featuredArticle.excerpt}</p>
              <UButton to="#" variant="primary">Lire l'article</UButton>
            </div>
          </div>
          <UButton to="/actualites" variant="text" className="!text-dark" style={{ color: '#521800' }}>
            <BackArrow />Voir les articles plus anciens
          </UButton>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-white" style={{ padding: '80px 0' }}>
        <div className="flex flex-col items-start mx-auto" style={{ gap: '80px', width: '85%' }}>
          <UHeading level={2} color="primary">Accompagnés par des visionnaires</UHeading>
          <div className="flex flex-col w-full" style={{ gap: '40px' }}>
            <div className="flex items-center justify-between w-full flex-wrap gap-y-6">
              {partnersRow1.map((partner) => (
                <img key={partner.logo} src={partner.logo} alt={partner.name} className="h-10 w-auto object-contain shrink-0 bg-gray-100 rounded p-1" />
              ))}
            </div>
            <div className="flex items-center justify-between w-full flex-wrap gap-y-6">
              {partnersRow2.map((partner) => (
                <img key={partner.logo} src={partner.logo} alt={partner.name} className="h-10 w-auto object-contain shrink-0 bg-gray-100 rounded p-1" />
              ))}
            </div>
          </div>
          <UButton to="/partenariat" variant="text" className="!text-dark" style={{ color: '#521800' }}>
            <BackArrow />Découvrir la liste complète de nos partenaires
          </UButton>
        </div>
      </section>

      {/* CTA */}
      <UCta
        title="Rejoignez-nous !"
        subtitle="Ou partagez notre vision commune en soutenant le développement et l'épanouissement professionnel de nos parrainés et des jeunes que nous accompagnons."
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
