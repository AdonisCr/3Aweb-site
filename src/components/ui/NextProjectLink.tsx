import { memo } from 'react'
import UButton from './UButton'

interface NextProjectLinkProps {
  to: string
  label?: string
}

export default memo(function NextProjectLink({ to, label = 'Découvrir le projet suivant' }: NextProjectLinkProps) {
  return (
    <section className="bg-white py-10 lg:py-16">
      <div className="mx-auto flex w-[92%] justify-center md:w-[85%]">
        <UButton to={to} variant="primary" className="!px-4 !py-2.5 text-[18px]">
          {label}
        </UButton>
      </div>
    </section>
  )
})
