import { memo } from 'react'
import UCta from './UCta'
import ActionButtons from './ActionButtons'

interface CtaSectionProps {
  title?: string
  subtitle?: string
  image?: string
  imageAlt?: string
  donVariant?: 'dark' | 'white'
}

export default memo(function CtaSection({
  title = 'Rejoignez-nous !',
  subtitle = "Ou partagez notre vision commune en soutenant le développement et l'épanouissement professionnel de nos parrainés et des jeunes que nous accompagnons.",
  image = '/assets/home/rejoignez-nous.jpg',
  imageAlt = 'Poignée de main professionnelle',
  donVariant = 'dark',
}: CtaSectionProps) {
  return (
    <UCta
      title={title}
      subtitle={subtitle}
      image={image}
      imageAlt={imageAlt}
      actions={
        <ActionButtons donVariant={donVariant} />
      }
    />
  )
})
