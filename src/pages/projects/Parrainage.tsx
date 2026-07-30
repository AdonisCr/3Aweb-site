import UButton from "@/components/ui/UButton";
import UHeading from "@/components/ui/UHeading";
import CtaSection from "@/components/ui/CtaSection";
import NextProjectLink from "@/components/ui/NextProjectLink";
import PageTitle from '@/components/layout/PageTitle';

const DEVICE_VIDEO_URL = "https://www.youtube.com/";
const ASSETS = "/assets/projects/parrainage";

const testimonials = [
  { name: "Adonis Oussou", school: "École 229", image: `${ASSETS}/t2.webp`, videoUrl: DEVICE_VIDEO_URL },
  { name: "Yannick Akoto", school: "Epitech", image: `${ASSETS}/t3.webp`, videoUrl: DEVICE_VIDEO_URL },
  { name: "Hortense Azandosessi", school: "École 229", image: `${ASSETS}/t4.webp`, videoUrl: DEVICE_VIDEO_URL },
  { name: "Ruth Ahoueya", school: "École 229", image: `${ASSETS}/t5.webp`, videoUrl: DEVICE_VIDEO_URL },
];

function YoutubePlay() {
  return (
    <span className="relative h-[45px] w-16 shrink-0">
      <img src={`${ASSETS}/yt-red.svg`} alt="" aria-hidden className="absolute inset-0 size-full" />
      <img src={`${ASSETS}/yt-play.svg`} alt="" aria-hidden className="absolute left-[40%] top-[28%] h-[44%] w-[26%]" />
    </span>
  );
}

export default function Parrainage() {
  return (
    <div className="page pt-28">
      <PageTitle title="Parrainage" backTo="/projets" backLabel="Retour aux projets" />

      {/* HERO */}
      <section className="w-full" data-aos="zoom-in" data-aos-duration="1200">
        <div className="h-[240px] w-full overflow-hidden sm:h-[360px] lg:h-[500px]">
          <img src="/assets/home/projetmanq2.webp" alt="Programme de parrainage Alliance Actions Afrique" loading="lazy" decoding="async" className="size-full object-cover" />
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-10 lg:py-16" data-aos="fade-up" data-aos-duration="800">
        <div className="mx-auto flex w-[92%] flex-col items-start justify-between gap-8 md:w-[85%] lg:flex-row lg:gap-12">
          <div data-aos="fade-up" data-aos-duration="800">
            <UButton
              to="/contact"
              variant="primary"
              className="shrink-0 !px-4 !py-2.5 text-[18px]"
            >
              Parrainer un étudiant
            </UButton>
          </div>
          <div className="flex w-full max-w-[780px] flex-col gap-6 text-body-md tracking-[-0.32px] text-body sm:flex-row sm:gap-10">
            <p className="flex-1" data-aos="fade-right" data-aos-duration="1500">
              Le programme de parrainage d&apos;Alliance Actions Afrique repose
              sur une relation d&apos;engagement et de confiance entre un
              parrain et un étudiant accompagné par l&apos;association. Le
              parrain contribue au financement d&apos;une partie de la scolarité
              et des besoins éducatifs de l&apos;étudiant, tout en lui offrant
              un soutien moral, des conseils et un suivi dans son parcours.
            </p>
            <p className="flex-1" data-aos="fade-left" data-aos-duration="1500">
              Au-delà de l&apos;aide financière, le parrainage favorise un
              accompagnement dans la durée, centré sur la progression
              personnelle, académique et professionnelle de l&apos;étudiant.
              Cette relation permet de guider les bénéficiaires vers
              l&apos;autonomie, de renforcer leur confiance et de faciliter leur
              insertion professionnelle. Le parrainage incarne ainsi une
              solidarité active, fondée sur la transmission, l&apos;écoute et
              l&apos;engagement sur le long terme.
            </p>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="bg-white py-10 lg:py-12" data-aos="fade-up" data-aos-duration="800">
        <div className="mx-auto w-[92%] md:w-[85%]">
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-9">
            <div className="flex w-full flex-col gap-6 lg:w-[26%] lg:gap-9">
              <div className="aspect-square overflow-hidden" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
                <img
                  src={`${ASSETS}/g1.webp`}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover"
                />
              </div>
              <div className="aspect-[304/241] overflow-hidden" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <img
                  src={`${ASSETS}/g2.webp`}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-6 lg:gap-10">
              <div className="flex flex-col gap-6 sm:flex-row lg:gap-9">
                <div className="aspect-[321/371] w-full overflow-hidden sm:w-[38%]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                  <img
                    src={`${ASSETS}/g3.webp`}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover"
                  />
                </div>
                <div className="aspect-[502/371] w-full overflow-hidden sm:flex-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <img
                    src={`${ASSETS}/g4.webp`}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6 sm:flex-row lg:gap-9">
                <div className="aspect-[304/168] w-full overflow-hidden sm:w-[36%]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                  <img
                    src={`${ASSETS}/g5.webp`}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover"
                  />
                </div>
                <div className="aspect-[519/166] w-full overflow-hidden sm:flex-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                  <img
                    src={`${ASSETS}/g6.webp`}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISPOSITIF */}
      <section className="bg-white py-10 lg:py-12" data-aos="fade-up" data-aos-duration="800">
        <div className="mx-auto flex w-[92%] flex-col gap-8 md:w-[85%] lg:gap-10">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-12">
            <div className="shrink-0" data-aos="fade-up" data-aos-duration="1200">
              <UHeading level={2} color="primary">
                Le dispositif expliqué :
              </UHeading>
            </div>
            <p className="max-w-[453px] text-left text-body-md tracking-[-0.32px] text-body lg:text-right" data-aos="fade-left" data-aos-duration="1500">
              Découvrez en quoi consiste le programme de parrainage de Alliance
              Actions Afrique
            </p>
          </div>

          <a
            href={DEVICE_VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-video w-full overflow-hidden rounded-[10px]"
            aria-label="Voir la vidéo du dispositif de parrainage sur YouTube"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <img src={`${ASSETS}/t1.webp`} alt="Le dispositif de parrainage" loading="lazy" decoding="async" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
            <span className="absolute inset-0 flex items-center justify-center">
              <YoutubePlay />
            </span>
          </a>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="bg-white py-10 lg:py-12" data-aos="fade-up" data-aos-duration="800">
        <div className="mx-auto flex w-[92%] flex-col gap-8 md:w-[85%] lg:gap-10">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-12">
            <div className="shrink-0" data-aos="fade-up" data-aos-duration="1200">
              <UHeading level={2} color="primary">
                Témoignages de nos parrainés
              </UHeading>
            </div>
            <p className="max-w-[453px] text-left text-body-md tracking-[-0.32px] text-body lg:text-right" data-aos="fade-left" data-aos-duration="1500">
              Ils sont aujourd&apos;hui plusieurs étudiants dont les parcours
              ont été grandement influencés par Alliance Actions Afrique. Ils
              nous font part de leur expérience avec nous :
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {testimonials.map((t, i) => (
              <div key={t.name} className="flex flex-col gap-3.5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={i * 100}>
                <a
                  href={t.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-[253/318] w-full overflow-hidden rounded"
                  aria-label={`Voir le témoignage de ${t.name}`}
                >
                  <img src={t.image} alt={t.name} loading="lazy" decoding="async" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <YoutubePlay />
                  </span>
                </a>
                <div className="flex flex-col gap-2">
                  <p className="text-[20px] font-bold text-primary">{t.name}</p>
                  <div className="flex items-center justify-between gap-2">
                    <p className="shrink-0 text-body-md font-bold tracking-[-0.48px] text-body">{t.school}</p>
                    <div className="h-px min-w-0 flex-1 bg-gray-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJET SUIVANT */}
      <NextProjectLink to="/projets/accompagnement-professionnel" />

      <CtaSection />
    </div>
  );
}
