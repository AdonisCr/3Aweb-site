import DarkHero from '@/components/layout/DarkHero'
import UButton from '@/components/ui/UButton'
import USection from '@/components/ui/USection'
import UHeading from '@/components/ui/UHeading'
import UCta from '@/components/ui/UCta'
import PartnerIcon from '@/components/ui/PartnerIcon'

const categories = [
  { title: 'Institutions & entreprises', image: '/assets/partners-group-13-2385.png' },
  { title: 'Écoles & centres de formation', image: '/assets/partners-group-13-2401.png' },
  { title: 'Partenaires projets', image: '/assets/partners-group-13-2411.png' },
  { title: 'Ils nous ont fait confiance', image: '/assets/partners-group-13-2422.png' },
]

export default function ProjectPartenaires() {
  return (
    <div className="page pt-28">
      <DarkHero
        title="Tous nos partenaires"
        breadcrumbs={[
          { label: 'Partenaires & sponsors', to: '/partenariat' },
          { label: 'Tous nos partenaires' },
        ]}
      />

      <USection>
        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat.title}>
              <UHeading level={2} color="dark" className="mb-8">{cat.title}</UHeading>
              <div className="flex justify-center">
                <img src={cat.image} alt={cat.title} className="max-w-full h-auto max-h-[300px] object-contain" />
              </div>
            </div>
          ))}
        </div>
      </USection>

      <UCta
        title="Rejoignez-nous !"
        subtitle="Ou partagez notre vision commune en soutenant le développement et l'épanouissement professionnel de nos parrainés et des jeunes que nous accompagnons."
        actions={
          <>
            <UButton to="/partenariat" variant="primary">Devenir partenaire <PartnerIcon /></UButton>
            <UButton to="https://www.helloasso.com/associations/alliance-actions-afrique/formulaires/1" variant="white">Faire un don</UButton>
          </>
        }
      />
    </div>
  )
}
