import { type ReactNode } from 'react'
import UHeading from './UHeading'
import UPlaceholder from './UPlaceholder'

interface UCtaProps {
  title?: string
  subtitle?: string
  actions?: ReactNode
  image?: string
  imageAlt?: string
  children?: ReactNode
}

export default function UCta({ title, subtitle, actions, image, imageAlt = '', children }: UCtaProps) {
  return (
    <section className="bg-white" style={{ padding: '80px 0' }}>
      <div className="mx-auto" style={{ width: '85%' }}>
        <div className="flex items-center justify-between" style={{ gap: '16px' }}>
          {/* Left: title + subtitle + actions */}
          <div className="flex-1 flex flex-col items-start" style={{ gap: '32px', maxWidth: '600px' }}>
            <UHeading level={2} color="primary">{title || children}</UHeading>
            {subtitle && (
              <p className="text-body-md text-dark">{subtitle}</p>
            )}
            {actions && (
              <div className="flex items-center" style={{ gap: '16px' }}>
                {actions}
              </div>
            )}
          </div>

          {/* Right: image */}
          <div className="hidden md:block flex-1" style={{ maxWidth: '636px' }}>
            {image ? (
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-auto object-cover rounded-card"
                style={{ aspectRatio: '636 / 385' }}
              />
            ) : (
              <UPlaceholder ratio="636/385" label="rejoignez-nous.png" />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
