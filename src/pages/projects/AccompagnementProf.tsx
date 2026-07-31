import UButton from '@/components/ui/UButton'
import CtaSection from '@/components/ui/CtaSection'
import NextProjectLink from '@/components/ui/NextProjectLink'
import PageTitle from '@/components/layout/PageTitle'

const ASSETS = '/assets/projects/accompagnement'

export default function AccompagnementProf() {
  return (
    <div className="page pt-28">
      <PageTitle title="Accompagnement professionnel" backTo="/projets" backLabel="Retour aux projets" />

      {/* HERO */}
      <section className="w-full" data-aos="zoom-in" data-aos-duration="1200">
        <div className="h-[240px] w-full overflow-hidden sm:h-[360px] lg:h-[500px]">
          <img src={`${ASSETS}/hero.webp`} alt="Accompagnement professionnel des jeunes" loading="lazy" decoding="async" className="size-full object-cover" />
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-10 lg:py-16" data-aos="fade-up" data-aos-duration="800">
        <div className="mx-auto flex w-[92%] flex-col items-start justify-between gap-8 md:w-[85%] lg:flex-row lg:gap-12">
          <div data-aos="fade-up" data-aos-duration="800">
            <UButton to="https://www.helloasso.com/associations/alliance-actions-afrique/formulaires/1" variant="primary" className="shrink-0 !px-4 !py-2.5 text-[18px]">
              Nous soutenir avec un don
            </UButton>
          </div>
          <div className="flex w-full max-w-[780px] flex-col gap-6 text-body-md tracking-[-0.32px] text-body sm:flex-row sm:gap-10">
            <p className="flex-1" data-aos="fade-right" data-aos-duration="1500">
              Alliance Actions Afrique accompagne des jeunes en situation de vulnérabilité vers une
              réinsertion professionnelle durable, en partenariat avec des structures locales telles que
              le foyer Ibarreta ou Caritas Abomey. Ces collaborations permettent de répondre à des besoins
              concrets et identifiés sur le terrain, en lien étroit avec les acteurs sociaux qui
              accompagnent déjà ces jeunes au quotidien.
            </p>
            <p className="flex-1" data-aos="fade-left" data-aos-duration="1500">
              L&apos;association intervient à travers des dons, des investissements ciblés et un soutien
              matériel et éducatif visant à faciliter l&apos;accès à la formation, au développement de
              compétences et à l&apos;insertion dans le monde professionnel. En s&apos;appuyant sur des
              partenariats de confiance, Alliance Actions Afrique agit pour offrir de nouvelles
              perspectives à ces jeunes et favoriser leur autonomie à long terme.
            </p>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="bg-white py-10 lg:py-16" data-aos="fade-up" data-aos-duration="800">
        <div className="mx-auto w-[92%] md:w-[85%]">
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-9">
            <div className="flex w-full flex-col gap-6 lg:w-[28%] lg:gap-9">
              {[1,2,3].map((n) => (
                <div key={n} className={`overflow-hidden ${n === 1 ? 'aspect-[316/304]' : n === 2 ? 'aspect-[316/241]' : 'aspect-[316/371]'}`} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={`${(n - 1) * 100}`}>
                  <img src={`${ASSETS}/g${n}.webp`} alt="" loading="lazy" decoding="async" className="size-full cursor-pointer object-cover transition-transform duration-500 hover:scale-110" />
                </div>
              ))}
            </div>
            <div className="flex flex-1 flex-col gap-6 lg:gap-8">
              <div className="flex flex-col gap-6 sm:flex-row lg:gap-9">
                <div className="aspect-[321/383] w-full overflow-hidden sm:w-[38%]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                  <img src={`${ASSETS}/g4.webp`} alt="" loading="lazy" decoding="async" className="size-full cursor-pointer object-cover transition-transform duration-500 hover:scale-110" />
                </div>
                <div className="aspect-[502/383] w-full overflow-hidden sm:flex-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <img src={`${ASSETS}/g5.webp`} alt="" loading="lazy" decoding="async" className="size-full cursor-pointer object-cover transition-transform duration-500 hover:scale-110" />
                </div>
              </div>
              <div className="aspect-[858/371] w-full overflow-hidden" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                <img src={`${ASSETS}/g6.webp`} alt="" loading="lazy" decoding="async" className="size-full cursor-pointer object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="flex flex-col gap-6 sm:flex-row lg:gap-[52px]">
                <div className="aspect-[304/166] w-full overflow-hidden sm:w-[36%]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                  <img src={`${ASSETS}/g7.webp`} alt="" loading="lazy" decoding="async" className="size-full cursor-pointer object-cover transition-transform duration-500 hover:scale-110" />
                </div>
                <div className="aspect-[502/166] w-full overflow-hidden sm:flex-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                  <img src={`${ASSETS}/g8.webp`} alt="" loading="lazy" decoding="async" className="size-full cursor-pointer object-cover transition-transform duration-500 hover:scale-110" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJET SUIVANT */}
      <NextProjectLink to="/projets/regards-croises" />

      <CtaSection />
    </div>
  )
}
