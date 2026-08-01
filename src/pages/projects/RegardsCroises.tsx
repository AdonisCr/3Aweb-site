import UButton from "@/components/ui/UButton";
import UHeading from "@/components/ui/UHeading";
import CtaSection from "@/components/ui/CtaSection";
import YoutubeEmbed from "@/components/ui/YoutubeEmbed";
import NextProjectLink from "@/components/ui/NextProjectLink";
import PageTitle from '@/components/layout/PageTitle';

const ASSETS = "/assets/projects/regards-croises";

const ZOOM_IMG = "size-full cursor-pointer object-cover transition-transform duration-500 hover:scale-110";

export default function RegardsCroises() {
  return (
    <div className="page pt-28">
      <PageTitle
        title="Regards croisés"
        backTo="/projets"
        backLabel="Retour aux projets"
      />

      {/* HERO */}
      <section className="w-full" data-aos="zoom-in" data-aos-duration="1200">
        <div className="h-[240px] w-full overflow-hidden sm:h-[360px] lg:h-[500px]">
          <img
            src={`${ASSETS}/hero.webp`}
            alt="Tables rondes Regards croisés"
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
          <div className="flex w-full max-w-[730px] flex-col gap-6 text-body-md tracking-[-0.32px] text-body sm:flex-row sm:gap-10">
            <p
              className="flex-1"
              data-aos="fade-right"
              data-aos-duration="1500"
            >
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
            <p className="flex-1" data-aos="fade-left" data-aos-duration="1500">
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
      <section
        className="bg-white py-10 lg:py-12"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="mx-auto flex w-[92%] flex-col gap-8 md:w-[85%] lg:gap-10">
          <div data-aos="fade-up" data-aos-duration="1200">
            <UHeading level={2} color="primary">
              L&apos;événement en images
            </UHeading>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:gap-9">
            <div className="flex w-full flex-col gap-6 lg:w-[28%] lg:gap-9">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className={`overflow-hidden ${n === 1 ? "aspect-[333/304]" : n === 2 ? "aspect-[333/241]" : "aspect-[333/371]"}`}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={`${(n - 1) * 100}`}
                >
                  <img
                    src={`${ASSETS}/g${n}.webp`}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className={ZOOM_IMG}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-1 flex-col gap-6 lg:gap-8">
              <div className="flex flex-col gap-6 sm:flex-row lg:gap-9">
                <div
                  className="aspect-[321/383] w-full overflow-hidden sm:w-[38%]"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  <img
                    src={`${ASSETS}/g4.webp`}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className={ZOOM_IMG}
                  />
                </div>
                <div
                  className="aspect-[502/383] w-full overflow-hidden sm:flex-1"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <img
                    src={`${ASSETS}/g5.webp`}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className={ZOOM_IMG}
                  />
                </div>
              </div>
              <div
                className="aspect-[858/371] w-full overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="300"
              >
                <img
                  src={`${ASSETS}/g6.webp`}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className={ZOOM_IMG}
                />
              </div>
              <div className="flex flex-col gap-6 sm:flex-row lg:gap-9">
                <div
                  className="aspect-[304/166] w-full overflow-hidden sm:w-[36%]"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <img
                    src={`${ASSETS}/g7.webp`}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className={ZOOM_IMG}
                  />
                </div>
                <div
                  className="aspect-[502/166] w-full overflow-hidden sm:flex-1"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <img
                    src={`${ASSETS}/g8.webp`}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className={ZOOM_IMG}
                  />
                </div>
              </div>
            </div>
          </div>

          <p
            className="max-w-[900px] text-body-md tracking-[-0.32px] text-body"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
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

          <div data-aos="zoom-in" data-aos-duration="1200">
            <YoutubeEmbed
              url="https://youtu.be/AUpwpp6zIoY"
              title="Vidéo Regards croisés"
              poster={`${ASSETS}/hero.webp`}
              playIconSrc={`${ASSETS}/yt-red.svg`}
              playSrc={`${ASSETS}/yt-play.svg`}
            />
          </div>
        </div>
      </section>

      {/* PROJET SUIVANT */}
      <NextProjectLink to="/projets/parrainage" />

      <CtaSection />
    </div>
  );
}
