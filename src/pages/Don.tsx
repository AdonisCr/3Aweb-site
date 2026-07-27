import { useState } from 'react'
import DarkHero from '@/components/layout/DarkHero'
import UButton from '@/components/ui/UButton'
import USection from '@/components/ui/USection'
import UHeading from '@/components/ui/UHeading'

const donationOptions = [
  { amount: 30, desc: 'Finance 3 mois de fournitures scolaires' },
  { amount: 50, desc: 'Finance 1 mois de formation professionnelle' },
  { amount: 100, desc: "Finance le matériel pédagogique d'un étudiant" },
]

export default function Don() {
  const [selected, setSelected] = useState(50)

  return (
    <div className="page pt-28">
      <DarkHero title="Faire un don" breadcrumbs={[{ label: "Accueil", to: "/" }, { label: "Faire un don" }]} />

      <USection>
        <div className="max-w-[800px] mx-auto text-center">
          <UHeading level={2} color="dark" className="mb-6">Soutenez notre mission</UHeading>
          <p className="mb-12 text-body-md text-dark">
            Votre don permet de financer directement les programmes d'éducation, de formation et
            d'insertion professionnelle au Bénin. Chaque contribution compte pour transformer des
            vies.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12" role="radiogroup" aria-label="Choix du montant du don">
            {donationOptions.map((option) => (
              <div
                key={option.amount}
                role="radio"
                aria-checked={selected === option.amount}
                tabIndex={0}
                className={`p-6 rounded-card border-2 cursor-pointer transition-all text-center focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  selected === option.amount
                    ? 'border-primary bg-primary/5'
                    : 'border-gray-200 hover:border-primary/50'
                }`}
                onClick={() => setSelected(option.amount)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelected(option.amount)
                  }
                }}
              >
                <div className="text-[32px] font-bold text-primary">{option.amount} €</div>
                <p className="mt-2 text-body-sm text-body">{option.desc}</p>
              </div>
            ))}
          </div>

          <UButton to="#" variant="primary" className="mb-8">Faire un don de {selected}€</UButton>

          <p className="text-body-sm text-muted">
            Tous les dons ouvrent droit à une réduction d'impôt de 66% dans la limite de 20% du
            revenu imposable.
          </p>
        </div>
      </USection>
    </div>
  )
}
