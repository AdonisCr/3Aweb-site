import UButton from "@/components/ui/UButton";
import UCta from "@/components/ui/UCta";
import PartnerIcon from '@/components/ui/PartnerIcon';
import PageTitle from '@/components/layout/PageTitle';

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
    <div className="page pt-28">
      <PageTitle title="Partenaires &amp; sponsors" />

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
        <div className="mx-auto flex w-[92%] flex-col items-start gap-8 md:w-[85%] lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <UButton
            to="/partenariat"
            variant="primary"
            className="w-full sm:w-auto"
          >
            Devenir partenaire <PartnerIcon />
          </UButton>
          <p className="w-full max-w-[468px] text-body-md text-body">
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
              Devenir partenaire <PartnerIcon />
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
