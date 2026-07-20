import { Link } from "react-router-dom";
import UButton from "@/components/ui/UButton";
import UHeading from "@/components/ui/UHeading";
import UCta from "@/components/ui/UCta";

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

const LOGOS = "/assets/partnership/logos";

const partnerSections = [
  {
    title: "Institutions & entreprises",
    logos: [
      { name: "L'Oasis", src: `${LOGOS}/loasis.png` },
      { name: "Seal Partner", src: `${LOGOS}/seal.png` },
      { name: "Fondation", src: `${LOGOS}/fondation.png` },
      { name: "FormaSup Odyssée", src: `${LOGOS}/formasup-odyssee.png` },
      { name: "Théâtre", src: `${LOGOS}/theatre.png` },
      { name: "2 Minutes Max", src: `${LOGOS}/2-minutes-max.png` },
      { name: "Mark H", src: `${LOGOS}/mark-h.png` },
      { name: "Sir John Concept Store", src: `${LOGOS}/sir-john.png` },
      { name: "Lillybelle", src: `${LOGOS}/lillybelle.png` },
    ],
  },
  {
    title: "Écoles & centres de formation",
    logos: [
      {
        name: "Africa Design School",
        src: `${LOGOS}/africa-design-school.png`,
      },
      { name: "Epitech", src: `${LOGOS}/epitech.png` },
      { name: "Esperanza Joie", src: `${LOGOS}/esperanza.png` },
      { name: "École 229", src: `${LOGOS}/ecole-229.png` },
    ],
  },
  {
    title: "Partenaires projets",
    logos: [
      { name: "Caritas Abomey", src: `${LOGOS}/caritas-abomey.png` },
      { name: "Epitech", src: `${LOGOS}/epitech.png` },
      { name: "Esperanza Joie", src: `${LOGOS}/esperanza.png` },
      { name: "École 229", src: `${LOGOS}/ecole-229.png` },
      { name: "10 000 Codeurs", src: `${LOGOS}/10000-codeurs.png` },
    ],
  },
  {
    title: "Ils nous ont fait confiance",
    logos: [
      {
        name: "Ambassade de France au Bénin",
        src: `${LOGOS}/ambassade-france-benin.png`,
      },
      { name: "CPME 69", src: `${LOGOS}/cpme69.png` },
      { name: "Ville de Lyon", src: `${LOGOS}/ville-de-lyon.png` },
      {
        name: "Métropole Grand Lyon",
        src: `${LOGOS}/metropole-grand-lyon.png`,
      },
      { name: "Société Générale", src: `${LOGOS}/societe-generale.png` },
    ],
  },
];

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="flex w-full items-center gap-3 sm:gap-4 lg:gap-6">
      <div className="flex min-w-0 flex-1 items-center gap-1.5">
        <div className="h-px min-w-0 flex-1 bg-dark/25" />
        <span
          className="size-1.5 shrink-0 rounded-full bg-primary"
          aria-hidden
        />
      </div>
      <h2 className="shrink-0 text-center text-[18px] font-bold leading-tight text-dark sm:text-[20px] lg:text-[24px]">
        {title}
      </h2>
      <div className="flex min-w-0 flex-1 items-center gap-1.5">
        <span
          className="size-1.5 shrink-0 rounded-full bg-primary"
          aria-hidden
        />
        <div className="h-px min-w-0 flex-1 bg-dark/25" />
      </div>
    </div>
  );
}

export default function Partnership() {
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
              to="/"
              className="flex shrink-0 items-center text-primary"
              aria-label="Retour à l'accueil"
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
              Partenaires &amp; sponsors
            </UHeading>
          </div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <section className="w-full">
        <div className="h-[240px] w-full overflow-hidden sm:h-[360px] lg:h-[500px]">
          <img
            src="/assets/partnership/hero.jpg"
            alt="Groupe de partenaires Alliance Actions Afrique"
            className="size-full object-cover"
          />
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-10 lg:py-20">
        <div className="mx-auto flex w-[92%] flex-col items-start justify-between gap-8 md:w-[85%] lg:flex-row lg:items-start lg:gap-12">
          <UButton
            to="/partenariat"
            variant="primary"
            className="w-full sm:w-auto"
          >
            Devenir partenaire {PARTNER_SVG}
          </UButton>
          {/* className="max-w-[468px] text-justify text-left text-body-md tracking-[-0.32px] text-body lg:text-right" */}
          <p className="max-w-[468px] ">
            Les actions d&apos;Alliance Actions Afrique s&apos;appuient sur un
            réseau de partenaires engagés, issus du monde économique, éducatif,
            institutionnel et associatif. Entreprises, établissements de
            formation, porteurs de projets et institutions publiques
            contribuent, chacun à leur échelle, à la mise en œuvre de projets
            durables au service de l&apos;éducation, de l&apos;entrepreneuriat
            et de l&apos;insertion professionnelle.
          </p>
        </div>
      </section>

      {/* LOGO SECTIONS */}
      <section className="bg-white pb-10 lg:pb-16">
        <div className="mx-auto flex w-[92%] flex-col gap-12 md:w-[85%] lg:gap-16">
          {partnerSections.map((section) => (
            <div
              key={section.title}
              className="flex flex-col items-center gap-8 lg:gap-10"
            >
              <SectionTitle title={section.title} />
              <div className="flex w-full flex-wrap items-center justify-start gap-x-8 gap-y-6 sm:gap-x-12 lg:gap-x-16">
                {section.logos.map((logo) => (
                  <img
                    key={`${section.title}-${logo.name}`}
                    src={logo.src}
                    alt={logo.name}
                    className="h-14 w-auto max-w-[180px] object-contain sm:h-20 lg:h-24"
                  />
                ))}
              </div>
            </div>
          ))}
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
