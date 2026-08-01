import { memo } from 'react'
import UButton from './UButton'
import PartnerIcon from './PartnerIcon'

interface ActionButtonsProps {
  donVariant?: 'dark' | 'white'
  showPartnerIcon?: boolean
  className?: string
}

export default memo(function ActionButtons({
  donVariant = 'dark',
  showPartnerIcon = true,
  className = '',
}: ActionButtonsProps) {
  return (
    <div className={`flex flex-wrap items-center gap-6 ${className}`}>
      <UButton to="/devenir-partenaire" variant="primary">
        Devenir partenaire {showPartnerIcon && <PartnerIcon />}
      </UButton>
      <UButton
        to="https://www.helloasso.com/associations/alliance-actions-afrique/formulaires/1"
        variant={donVariant}
      >
        Faire un don
      </UButton>
    </div>
  )
})
