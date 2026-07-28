import UHeading from '@/components/ui/UHeading'
import CtaSection from '@/components/ui/CtaSection'
import PageTitle from '@/components/layout/PageTitle'

const categories = [
  { title: 'Institutions & entreprises', image: '/assets/partners-group-13-2385.png' },
  { title: 'Écoles & centres de formation', image: '/assets/partners-group-13-2401.png' },
  { title: 'Partenaires projets', image: '/assets/partners-group-13-2411.png' },
  { title: 'Ils nous ont fait confiance', image: '/assets/partners-group-13-2422.png' },
]

export default function ProjectPartenaires() {
  return (
    <div className="page pt-28">
      <PageTitle title="Tous nos partenaires" backTo="/partenariat" backLabel="Partenaires & sponsors" />

      <section className="bg-white py-10 lg:py-16">
        <div className="mx-auto w-[92%] md:w-[85%]">
          <div className="space-y-12">
            {categories.map((cat) => (
              <div key={cat.title}>
                <UHeading level={2} color="dark" className="mb-8">{cat.title}</UHeading>
                <div className="flex justify-center">
                  <img src={cat.image} alt={cat.title} loading="lazy" decoding="async" className="max-w-full h-auto max-h-[300px] object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection donVariant="white" />
    </div>
  )
}
