import { Link } from "react-router-dom";
import UButton from "@/components/ui/UButton";
import UHeading from "@/components/ui/UHeading";
import UCta from "@/components/ui/UCta";

/** Remplacer par l'URL YouTube réelle dès qu'elle est disponible. */
const DEVICE_VIDEO_URL = "https://www.youtube.com/";

const ASSETS = "/assets/projects/parrainage";

const PARTNER_SVG = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <path
      d="M8.24999 4.49958H10.5L12.9675 2.02458C13.0372 1.95429 13.1202 1.89849 13.2116 1.86041C13.3029 1.82234 13.401 1.80273 13.5 1.80273C13.599 1.80273 13.697 1.82234 13.7884 1.86041C13.8798 1.89849 13.9628 1.95429 14.0325 2.02458L15.9675 3.96708C16.1072 4.1076 16.1856 4.29769 16.1856 4.49583C16.1856 4.69397 16.1072 4.88406 15.9675 5.02458L14.25 6.74958H8.24999V8.24958C8.24999 8.4485 8.17097 8.63926 8.03032 8.77991C7.88966 8.92057 7.6989 8.99958 7.49999 8.99958C7.30107 8.99958 7.11031 8.92057 6.96966 8.77991C6.829 8.63926 6.74999 8.4485 6.74999 8.24958V5.99958C6.74999 5.60176 6.90802 5.22023 7.18933 4.93892C7.47063 4.65762 7.85216 4.49958 8.24999 4.49958ZM3.74999 8.24958V11.2496L2.03249 12.9671C1.8928 13.1076 1.81439 13.2977 1.81439 13.4958C1.81439 13.694 1.8928 13.8841 2.03249 14.0246L3.96749 15.9671C4.03721 16.0374 4.12016 16.0932 4.21155 16.1313C4.30295 16.1693 4.40098 16.1889 4.49999 16.1889C4.599 16.1889 4.69702 16.1693 4.78842 16.1313C4.87981 16.0932 4.96276 16.0374 5.03249 15.9671L8.24999 12.7496H11.25C11.4489 12.7496 11.6397 12.6706 11.7803 12.5299C11.921 12.3893 12 12.1985 12 11.9996V11.2496H12.75C12.9489 11.2496 13.1397 11.1706 13.2803 11.0299C13.421 10.8893 13.5 10.6985 13.5 10.4996V9.74958H14.25C14.4489 9.74958 14.6397 9.67057 14.7803 9.52991C14.921 9.38926 15 9.1985 15 8.99958V8.24958H9.74999V8.99958C9.74999 9.39741 9.59195 9.77894 9.31065 10.0602C9.02934 10.3415 8.64781 10.4996 8.24999 10.4996H6.74999C6.35216 10.4996 5.97063 10.3415 5.68933 10.0602C5.40802 9.77894 5.24999 9.39741 5.24999 8.99958V6.74958L3.74999 8.24958Z"
      fill="white"
    />
  </svg>
);

const testimonials = [
  {
    name: "Adonis Oussou",
    school: "École 229",
    image: `${ASSETS}/t2.jpg`,
    videoUrl: DEVICE_VIDEO_URL,
  },
  {
    name: "Yannick Akoto",
    school: "Epitech",
    image: `${ASSETS}/t3.jpg`,
    videoUrl: DEVICE_VIDEO_URL,
  },
  {
    name: "Hortense Azandosessi",
    school: "École 229",
    image: `${ASSETS}/t4.jpg`,
    videoUrl: DEVICE_VIDEO_URL,
  },
  {
    name: "Ruth Ahoueya",
    school: "École 229",
    image: `${ASSETS}/t5.png`,
    videoUrl: DEVICE_VIDEO_URL,
  },
];

function YoutubePlay() {
  return (
    <span className="relative h-[45px] w-16 shrink-0">
      <img
        src={`${ASSETS}/yt-red.svg`}
        alt=""
        aria-hidden
        className="absolute inset-0 size-full"
      />
      <img
        src={`${ASSETS}/yt-play.svg`}
        alt=""
        aria-hidden
        className="absolute left-[40%] top-[28%] h-[44%] w-[26%]"
      />
    </span>
  );
}

export default function Parrainage() {
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
            <Link
              to="/projets"
              className="flex shrink-0 items-center text-primary"
              aria-label="Retour aux projets"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M19 12H5M12 19l-7-7 7-7"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <UHeading
              level={1}
              color="primary"
              className="!text-[28px] !leading-tight lg:!text-[36px] lg:!leading-[43.6px]"
            >
              Parrainage
            </UHeading>
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="w-full">
        <div className="h-[240px] w-full overflow-hidden sm:h-[360px] lg:h-[500px]">
          <img
            src={`${ASSETS}/hero.jpg`}
            alt="Programme de parrainage Alliance Actions Afrique"
            className="size-full object-cover"
          />
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-10 lg:py-16">
        <div className="mx-auto flex w-[92%] flex-col items-start justify-between gap-8 md:w-[85%] lg:flex-row lg:gap-12">
          <UButton
            to="/contact"
            variant="primary"
            className="shrink-0 !px-4 !py-2.5 text-[18px]"
          >
            Parrainer un étudiant
          </UButton>
          <div className="flex w-full max-w-[780px] flex-col gap-6 text-body-md tracking-[-0.32px] text-body sm:flex-row sm:gap-10">
            <p className="flex-1">
              Le programme de parrainage d&apos;Alliance Actions Afrique repose
              sur une relation d&apos;engagement et de confiance entre un
              parrain et un étudiant accompagné par l&apos;association. Le
              parrain contribue au financement d&apos;une partie de la scolarité
              et des besoins éducatifs de l&apos;étudiant, tout en lui offrant
              un soutien moral, des conseils et un suivi dans son parcours.
            </p>
            <p className="flex-1">
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
      <section className="bg-white py-10 lg:py-12">
        <div className="mx-auto w-[92%] md:w-[85%]">
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-9">
            <div className="flex w-full flex-col gap-6 lg:w-[26%] lg:gap-9">
              <div className="aspect-square overflow-hidden">
                <img
                  src={`${ASSETS}/g1.jpg`}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="aspect-[304/241] overflow-hidden">
                <img
                  src={`${ASSETS}/g2.jpg`}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-6 lg:gap-10">
              <div className="flex flex-col gap-6 sm:flex-row lg:gap-9">
                <div className="aspect-[321/371] w-full overflow-hidden sm:w-[38%]">
                  <img
                    src={`${ASSETS}/g3.jpg`}
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
                <div className="aspect-[502/371] w-full overflow-hidden sm:flex-1">
                  <img
                    src={`${ASSETS}/g4.jpg`}
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-6 sm:flex-row lg:gap-9">
                <div className="aspect-[304/168] w-full overflow-hidden sm:w-[36%]">
                  <img
                    src={`${ASSETS}/g5.jpg`}
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
                <div className="aspect-[519/166] w-full overflow-hidden sm:flex-1">
                  <img
                    src={`${ASSETS}/g6.jpg`}
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISPOSITIF */}
      <section className="bg-white py-10 lg:py-12">
        <div className="mx-auto flex w-[92%] flex-col gap-8 md:w-[85%] lg:gap-10">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-12">
            <UHeading level={2} color="primary" className="shrink-0">
              Le dispositif expliqué :
            </UHeading>
            <p className="max-w-[453px] text-left text-body-md tracking-[-0.32px] text-body lg:text-right">
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
          >
            <img
              src={`${ASSETS}/t1.jpg`}
              alt="Le dispositif de parrainage"
              className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <YoutubePlay />
            </span>
          </a>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="bg-white py-10 lg:py-12">
        <div className="mx-auto flex w-[92%] flex-col gap-8 md:w-[85%] lg:gap-10">
          <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-12">
            <UHeading level={2} color="primary" className="shrink-0">
              Témoignages de nos parrainés
            </UHeading>
            <p className="max-w-[453px] text-left text-body-md tracking-[-0.32px] text-body lg:text-right">
              Ils sont aujourd&apos;hui plusieurs étudiants dont les parcours
              ont été grandement influencés par Alliance Actions Afrique. Ils
              nous font part de leur expérience avec nous :
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="flex flex-col gap-3.5">
                <a
                  href={t.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block aspect-[253/318] w-full overflow-hidden rounded"
                  aria-label={`Voir le témoignage de ${t.name}`}
                >
                  <img
                    src={t.image}
                    alt={t.name}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/10">
                    <YoutubePlay />
                  </span>
                </a>
                <div className="flex flex-col gap-2">
                  <p className="text-[20px] font-bold text-primary">{t.name}</p>
                  <div className="flex items-center justify-between gap-2">
                    <p className="shrink-0 text-body-md font-bold tracking-[-0.48px] text-body">
                      {t.school}
                    </p>
                    <div className="h-px min-w-0 flex-1 bg-gray-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJET SUIVANT */}
      <section className="bg-white py-10 lg:py-16">
        <div className="mx-auto flex w-[92%] justify-center md:w-[85%]">
          <UButton
            to="/projets/accompagnement-professionnel"
            variant="primary"
            className="!px-4 !py-2.5 text-[18px]"
          >
            Découvrir le projet suivant
          </UButton>
        </div>
      </section>

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
