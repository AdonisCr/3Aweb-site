import { Link } from "react-router-dom";
import UButton from "@/components/ui/UButton";
import UHeading from "@/components/ui/UHeading";
import UCta from "@/components/ui/UCta";

/** Remplacer par l'URL YouTube réelle dès qu'elle est disponible. */
const EVENT_VIDEO_URL = "https://www.youtube.com/";

const ASSETS = "/assets/projects/regards-croises";

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

export default function RegardsCroises() {
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
              Regards croisés
            </UHeading>
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="w-full">
        <div className="h-[240px] w-full overflow-hidden sm:h-[360px] lg:h-[500px]">
          <img
            src={`${ASSETS}/hero.jpg`}
            alt="Tables rondes Regards croisés"
            className="size-full object-cover"
          />
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-10 lg:py-16">
        <div className="mx-auto flex w-[92%] flex-col items-start justify-between gap-8 md:w-[85%] lg:flex-row lg:gap-12">
          <UButton
            to="/partenariat"
            variant="primary"
            className="shrink-0 !px-4 !py-2.5 text-[18px]"
          >
            Devenir partenaire
          </UButton>
          <div className="flex w-full max-w-[730px] flex-col gap-6 text-body-md tracking-[-0.32px] text-body sm:flex-row sm:gap-10">
            <p className="flex-1">
              Les Regards Croisés sont une rencontre annuelle organisée par
              Alliance Actions Afrique qui réunit experts, entrepreneurs,
              acteurs de terrain et décideurs autour d&apos;une thématique
              centrale liée au développement, à la formation et à
              l&apos;entrepreneuriat. Conçues comme des tables rondes
              d&apos;échanges, ces rencontres favorisent le partage
              d&apos;expériences, l&apos;apprentissage mutuel et la création de
              ponts entre les acteurs du Bénin et d&apos;autres pays, notamment
              la France.
            </p>
            <p className="flex-1">
              Plus qu&apos;un simple événement, Les Regards Croisés incarnent le
              rôle d&apos;Alliance Actions Afrique comme catalyseur de
              connexions : en facilitant le dialogue entre entreprises,
              institutions et jeunes porteurs de projets, l&apos;association se
              positionne comme un point de contact clé pour stimuler la
              coopération, susciter des opportunités concrètes et élargir les
              réseaux d&apos;engagement.
            </p>
          </div>
        </div>
      </section>

      {/* GALERIE */}
      <section className="bg-white py-10 lg:py-12">
        <div className="mx-auto flex w-[92%] flex-col gap-8 md:w-[85%] lg:gap-10">
          <UHeading level={2} color="primary">
            L&apos;événement en images
          </UHeading>

          <div className="flex flex-col gap-6 lg:flex-row lg:gap-9">
            <div className="flex w-full flex-col gap-6 lg:w-[28%] lg:gap-9">
              <div className="aspect-[333/304] overflow-hidden">
                <img
                  src={`${ASSETS}/g1.jpg`}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="aspect-[333/241] overflow-hidden">
                <img
                  src={`${ASSETS}/g2.jpg`}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="aspect-[333/371] overflow-hidden">
                <img
                  src={`${ASSETS}/g3.jpg`}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-6 lg:gap-8">
              <div className="flex flex-col gap-6 sm:flex-row lg:gap-9">
                <div className="aspect-[321/383] w-full overflow-hidden sm:w-[38%]">
                  <img
                    src={`${ASSETS}/g4.jpg`}
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
                <div className="aspect-[502/383] w-full overflow-hidden sm:flex-1">
                  <img
                    src={`${ASSETS}/g5.jpg`}
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
              </div>
              <div className="aspect-[858/371] w-full overflow-hidden">
                <img
                  src={`${ASSETS}/g6.jpg`}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-6 sm:flex-row lg:gap-9">
                <div className="aspect-[304/166] w-full overflow-hidden sm:w-[36%]">
                  <img
                    src={`${ASSETS}/g7.jpg`}
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
                <div className="aspect-[502/166] w-full overflow-hidden sm:flex-1">
                  <img
                    src={`${ASSETS}/g8.jpg`}
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="max-w-[900px] text-body-md tracking-[-0.32px] text-body">
            Organisé alternativement au Bénin et en France selon les éditions,
            l&apos;événement réunit des intervenants venus de différents
            horizons pour croiser leurs perspectives sur les défis et les
            opportunités du développement économique et social. Ces tables
            rondes donnent la parole à des chefs d&apos;entreprise, des jeunes
            porteurs de projets, des responsables de centres de formation et des
            décideurs, avec des débats ouverts sur des sujets actuels comme
            l&apos;intelligence artificielle appliquée à l&apos;emploi ou
            l&apos;accès à la formation. Découvrez les éditions précédentes sur
            notre chaîne YouTube :
          </p>

          <a
            href={EVENT_VIDEO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block aspect-video w-full overflow-hidden rounded-[10px]"
            aria-label="Voir la vidéo Regards croisés sur YouTube"
          >
            <img
              src={`${ASSETS}/hero.jpg`}
              alt="Vidéo Regards croisés"
              className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <span className="absolute inset-0 flex items-center justify-center">
              <YoutubePlay />
            </span>
          </a>
        </div>
      </section>

      {/* PROJET SUIVANT */}
      <section className="bg-white py-10 lg:py-16">
        <div className="mx-auto flex w-[92%] justify-center md:w-[85%]">
          <UButton
            to="/projets/parrainage"
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
