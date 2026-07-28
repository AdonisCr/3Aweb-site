import UButton from "@/components/ui/UButton";
import UHeading from "@/components/ui/UHeading";
import UCta from "@/components/ui/UCta";
import PartnerIcon from '@/components/ui/PartnerIcon';
import PageTitle from '@/components/layout/PageTitle';

/** Remplacer par l'URL YouTube réelle dès qu'elle est disponible. */
const EVENT_VIDEO_URL = "https://www.youtube.com/";

const ASSETS = "/assets/projects/regards-croises";

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
    <div className="page pt-28">
      <PageTitle title="Regards croisés" backTo="/projets" backLabel="Retour aux projets" />

      {/* HERO */}
      <section className="w-full" data-aos="zoom-in" data-aos-duration="1200">
        <div className="h-[240px] w-full overflow-hidden sm:h-[360px] lg:h-[500px]">
          <img
            src={`${ASSETS}/hero.jpg`}
            alt="Tables rondes Regards croisés"
            className="size-full object-cover"
          />
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-10 lg:py-16" data-aos="fade-up" data-aos-duration="3000">
        <div className="mx-auto flex w-[92%] flex-col items-start justify-between gap-8 md:w-[85%] lg:flex-row lg:gap-12">
          <div data-aos="fade-up" data-aos-duration="800">
            <UButton
              to="/partenariat"
              variant="primary"
              className="shrink-0 !px-4 !py-2.5 text-[18px]"
            >
              Devenir partenaire
            </UButton>
          </div>
          <div className="flex w-full max-w-[730px] flex-col gap-6 text-body-md tracking-[-0.32px] text-body sm:flex-row sm:gap-10">
            <p className="flex-1" data-aos="fade-right" data-aos-duration="1500">
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
      <section className="bg-white py-10 lg:py-12" data-aos="fade-up" data-aos-duration="3000">
        <div className="mx-auto flex w-[92%] flex-col gap-8 md:w-[85%] lg:gap-10">
          <div data-aos="fade-up" data-aos-duration="1200">
            <UHeading level={2} color="primary">
              L&apos;événement en images
            </UHeading>
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:gap-9">
            <div className="flex w-full flex-col gap-6 lg:w-[28%] lg:gap-9">
              <div className="aspect-[333/304] overflow-hidden" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
                <img
                  src={`${ASSETS}/g1.jpg`}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="aspect-[333/241] overflow-hidden" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                <img
                  src={`${ASSETS}/g2.jpg`}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="aspect-[333/371] overflow-hidden" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                <img
                  src={`${ASSETS}/g3.jpg`}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-6 lg:gap-8">
              <div className="flex flex-col gap-6 sm:flex-row lg:gap-9">
                <div className="aspect-[321/383] w-full overflow-hidden sm:w-[38%]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                  <img
                    src={`${ASSETS}/g4.jpg`}
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
                <div className="aspect-[502/383] w-full overflow-hidden sm:flex-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <img
                    src={`${ASSETS}/g5.jpg`}
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
              </div>
              <div className="aspect-[858/371] w-full overflow-hidden" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                <img
                  src={`${ASSETS}/g6.jpg`}
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-6 sm:flex-row lg:gap-9">
                <div className="aspect-[304/166] w-full overflow-hidden sm:w-[36%]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                  <img
                    src={`${ASSETS}/g7.jpg`}
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
                <div className="aspect-[502/166] w-full overflow-hidden sm:flex-1" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                  <img
                    src={`${ASSETS}/g8.jpg`}
                    alt=""
                    className="size-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="max-w-[900px] text-body-md tracking-[-0.32px] text-body" data-aos="fade-right" data-aos-duration="1500">
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
            data-aos="zoom-in"
            data-aos-duration="1200"
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
      <section className="bg-white py-10 lg:py-16" data-aos="fade-up" data-aos-duration="3000">
        <div className="mx-auto flex w-[92%] justify-center md:w-[85%]" data-aos="fade-up" data-aos-duration="800">
          <UButton
            to="/projets/parrainage"
            variant="primary"
            className="!px-4 !py-2.5 text-[18px]"
          >
            Découvrir le projet suivant
          </UButton>
        </div>
      </section>

      <div data-aos="fade-up" data-aos-duration="3000">
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
    </div>
  );
}
