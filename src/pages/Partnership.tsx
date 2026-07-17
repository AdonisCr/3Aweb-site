import DarkHero from '@/components/layout/DarkHero'
import UButton from '@/components/ui/UButton'
import USection from '@/components/ui/USection'
import UHeading from '@/components/ui/UHeading'
import UCta from '@/components/ui/UCta'

const PARTNER_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M8.24999 4.49958H10.5L12.9675 2.02458C13.0372 1.95429 13.1202 1.89849 13.2116 1.86041C13.3029 1.82234 13.401 1.80273 13.5 1.80273C13.599 1.80273 13.697 1.82234 13.7884 1.86041C13.8798 1.89849 13.9628 1.95429 14.0325 2.02458L15.9675 3.96708C16.1072 4.1076 16.1856 4.29769 16.1856 4.49583C16.1856 4.69397 16.1072 4.88406 15.9675 5.02458L14.25 6.74958H8.24999V8.24958C8.24999 8.4485 8.17097 8.63926 8.03032 8.77991C7.88966 8.92057 7.6989 8.99958 7.49999 8.99958C7.30107 8.99958 7.11031 8.92057 6.96966 8.77991C6.829 8.63926 6.74999 8.4485 6.74999 8.24958V5.99958C6.74999 5.60176 6.90802 5.22023 7.18933 4.93892C7.47063 4.65762 7.85216 4.49958 8.24999 4.49958ZM3.74999 8.24958V11.2496L2.03249 12.9671C1.8928 13.1076 1.81439 13.2977 1.81439 13.4958C1.81439 13.694 1.8928 13.8841 2.03249 14.0246L3.96749 15.9671C4.03721 16.0374 4.12016 16.0932 4.21155 16.1313C4.30295 16.1693 4.40098 16.1889 4.49999 16.1889C4.599 16.1889 4.69702 16.1693 4.78842 16.1313C4.87981 16.0932 4.96276 16.0374 5.03249 15.9671L8.24999 12.7496H11.25C11.4489 12.7496 11.6397 12.6706 11.7803 12.5299C11.921 12.3893 12 12.1985 12 11.9996V11.2496H12.75C12.9489 11.2496 13.1397 11.1706 13.2803 11.0299C13.421 10.8893 13.5 10.6985 13.5 10.4996V9.74958H14.25C14.4489 9.74958 14.6397 9.67057 14.7803 9.52991C14.921 9.38926 15 9.1985 15 8.99958V8.24958H9.74999V8.99958C9.74999 9.39741 9.59195 9.77894 9.31065 10.0602C9.02934 10.3415 8.64781 10.4996 8.24999 10.4996H6.74999C6.35216 10.4996 5.97063 10.3415 5.68933 10.0602C5.40802 9.77894 5.24999 9.39741 5.24999 8.99958V6.74958L3.74999 8.24958Z" fill="white" />
  </svg>
)

export default function Partnership() {
  return (
    <div className="page">
      <DarkHero
        title="Partenaires & sponsors"
        description="Les actions d'Alliance Actions Afrique s'appuient sur un réseau de partenaires engagés, issus du monde économique, éducatif, institutionnel et associatif."
        cta={<UButton to="/partenariat" variant="primary">Devenir partenaire {PARTNER_SVG}</UButton>}
      />

      <USection>
        <UHeading level={2} color="dark" className="mb-10">Institutions & entreprises</UHeading>
        <div className="flex justify-center">
          <img src="/assets/partners-group-13-2385.png" alt="Institutions & entreprises" className="max-w-full h-auto max-h-[300px] object-contain" />
        </div>
      </USection>

      <USection>
        <UHeading level={2} color="dark" className="mb-10">Écoles & centres de formation</UHeading>
        <div className="flex justify-center">
          <img src="/assets/partners-group-13-2401.png" alt="Écoles & centres de formation" className="max-w-full h-auto max-h-[300px] object-contain" />
        </div>
      </USection>

      <USection>
        <UHeading level={2} color="dark" className="mb-10">Partenaires projets</UHeading>
        <div className="flex justify-center">
          <img src="/assets/partners-group-13-2411.png" alt="Partenaires projets" className="max-w-full h-auto max-h-[300px] object-contain" />
        </div>
      </USection>

      <USection>
        <UHeading level={2} color="dark" className="mb-10">Ils nous ont fait confiance</UHeading>
        <div className="flex justify-center">
          <img src="/assets/partners-group-13-2422.png" alt="Ils nous ont fait confiance" className="max-w-full h-auto max-h-[300px] object-contain" />
        </div>
      </USection>

      <UCta
        title="Rejoignez-nous !"
        subtitle="Ou partagez notre vision commune en soutenant le développement et l'épanouissement professionnel de nos parrainés et des jeunes que nous accompagnons."
        actions={
          <>
            <UButton to="/partenariat" variant="primary">Devenir partenaire {PARTNER_SVG}</UButton>
            <UButton to="/don" variant="white">Faire un don</UButton>
          </>
        }
      />
    </div>
  )
}
