import UButton from "@/components/ui/UButton";
import CtaSection from "@/components/ui/CtaSection";
import PageTitle from '@/components/layout/PageTitle';

const LOGOS = "/assets/partners/Coloured";

const partnerSections = [
  {
    title: "Institutions & entreprises",
    logos: [
      { name: "L'Oasis", src: `${LOGOS}/image 28.png` },
      { name: "Seal Partner", src: `${LOGOS}/image 25.png` },
      { name: "Fondation", src: `${LOGOS}/image 30.png` },
      { name: "FormaSup Odyssée", src: `${LOGOS}/image 27.png` },
      { name: "Théâtre", src: `${LOGOS}/image 26.png` },
      { name: "2 Minutes Max", src: `${LOGOS}/image 29.png` },
      { name: "Mark H", src: `${LOGOS}/image 31.png` },
      { name: "Sir John Concept Store", src: `${LOGOS}/image 32.png` },
      { name: "Lillybelle", src: `${LOGOS}/image 33.png` },
    ],
  },
  {
    title: "Écoles & centres de formation",
    logos: [
      {
        name: "Africa Design School",
        src: `${LOGOS}/image 37.png`,
      },
      { name: "Epitech", src: `${LOGOS}/image 34.png` },
      { name: "Esperanza Joie", src: `${LOGOS}/image 36.png` },
      { name: "École 229", src: `${LOGOS}/image 35.png` },
    ],
  },
  {
    title: "Partenaires projets",
    logos: [
      { name: "Caritas Abomey", src: `${LOGOS}/image 38.png` },
      { name: "Epitech", src: `${LOGOS}/image 34.png` },
      { name: "Esperanza Joie", src: `${LOGOS}/image 36.png` },
      { name: "École 229", src: `${LOGOS}/image 35.png` },
      { name: "10 000 Codeurs", src: `${LOGOS}/image 39.png` },
    ],
  },
  {
    title: "Ils nous ont fait confiance",
    logos: [
      {
        name: "Ambassade de France au Bénin",
        src: `${LOGOS}/image 42.png`,
      },
      { name: "CPME 69", src: `${LOGOS}/image 41.png` },
      { name: "Ville de Lyon", src: `${LOGOS}/image 43.png` },
      {
        name: "Métropole Grand Lyon",
        src: `${LOGOS}/image 44.png`,
      },
      { name: "Société Générale", src: `${LOGOS}/image 40.png` },
    ],
  },
];

function SectionTitle({ title }: { title: string }) {
  return (
    <div
      className="flex w-full items-center gap-3 sm:gap-4 lg:gap-6"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="flex min-w-0 flex-1 items-center gap-1.5">
        <div className="h-px min-w-0 flex-1 bg-dark/25" />
        <span className="size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
      </div>
      <h2 className="shrink-0 text-center text-[18px] font-bold leading-tight text-dark sm:text-[20px] lg:text-[24px]">
        {title}
      </h2>
      <div className="flex min-w-0 flex-1 items-center gap-1.5">
        <span className="size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
        <div className="h-px min-w-0 flex-1 bg-dark/25" />
      </div>
    </div>
  );
}

export default function Partnership() {
  return (
    <div className="page pt-28">
      <PageTitle title="Partenaires &amp; sponsors" />

      <section className="w-full" data-aos="zoom-in" data-aos-duration="1200">
        <div className="h-[240px] w-full overflow-hidden sm:h-[360px] lg:h-[500px]">
          <img
            src="/assets/partnership/hero.webp"
            alt="Groupe de partenaires Alliance Actions Afrique"
            loading="lazy"
            decoding="async"
            className="size-full object-cover"
          />
        </div>
      </section>

      <section className="bg-white py-10 lg:py-20" data-aos="fade-up" data-aos-duration="800">
        <div className="mx-auto flex w-[92%] flex-col items-start gap-8 md:w-[85%] lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div data-aos="fade-up" data-aos-duration="800">
            <UButton to="/contact" variant="primary" className="w-full sm:w-auto">
              Devenir partenaire
            </UButton>
          </div>
          <p
            className="w-full max-w-[468px] text-body-md text-body"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            Les actions d&apos;Alliance Actions Afrique s&apos;appuient sur un
            réseau de partenaires engagés, issus du monde économique, éducatif,
            institutionnel et associatif. Entreprises, établissements de
            formation, porteurs de projets et institutions publiques
            contribuent, chacun à leur échelle, à la mise en oeuvre de projets
            durables au service de l&apos;éducation, de l&apos;entrepreneuriat
            et de l&apos;insertion professionnelle.
          </p>
        </div>
      </section>

      <section className="bg-white pb-10 lg:pb-16" data-aos="fade-up" data-aos-duration="800">
        <div className="mx-auto flex w-[92%] flex-col gap-12 md:w-[85%] lg:gap-16">
          {partnerSections.map((section, sectionIndex) => (
            <div
              key={section.title}
              className="flex flex-col items-center gap-8 lg:gap-10"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={sectionIndex * 100}
            >
              <SectionTitle title={section.title} />
              <div className="flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-4 sm:justify-start sm:gap-x-8 sm:gap-y-6 lg:gap-x-16">
                {section.logos.map((logo, logoIndex) => (
                  <img
                    key={`${section.title}-${logo.name}`}
                    src={logo.src}
                    alt={logo.name}
                    loading="lazy"
                    decoding="async"
                    className="h-14 w-auto cursor-pointer max-w-[180px] object-contain sm:h-20 lg:h-24 hover:grayscale-100 transition-all duration-300"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={logoIndex * 100}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaSection image="/assets/association/rejoignez-nous.webp" />
    </div>
  );
}
