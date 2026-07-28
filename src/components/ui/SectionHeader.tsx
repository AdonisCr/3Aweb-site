import { memo } from 'react'
import UHeading from './UHeading'

interface SectionHeaderProps {
  title: string
  description?: string
  titleColor?: 'primary' | 'dark'
  className?: string
}

export default memo(function SectionHeader({ title, description, titleColor = 'primary', className = '' }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col items-start justify-between gap-4 lg:flex-row lg:gap-12 ${className}`}>
      <UHeading level={2} color={titleColor} className="shrink-0">{title}</UHeading>
      {description && (
        <p className="max-w-[453px] text-left text-body-md tracking-[-0.32px] text-body lg:text-right">
          {description}
        </p>
      )}
    </div>
  )
})
