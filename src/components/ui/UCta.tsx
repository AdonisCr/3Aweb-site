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
    <section className="bg-white py-12 lg:py-20">
      <div className="mx-auto w-[92%] md:w-[85%]">
        <div className="flex flex-col items-stretch gap-8 md:flex-row md:items-center md:justify-between md:gap-4">
          <div className="flex max-w-[600px] flex-1 flex-col items-start gap-6 lg:gap-8">
            <UHeading level={2} color="primary">{title || children}</UHeading>
            {subtitle && (
              <p className="text-body-md text-dark">{subtitle}</p>
            )}
            {actions && (
              <div className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-7">
                {actions}
              </div>
            )}
          </div>

          <div className="w-full flex-1 overflow-hidden rounded-card md:max-w-[636px]">
            {image ? (
              <img
                src={image}
                alt={imageAlt}
                loading="lazy"
                decoding="async"
                className="aspect-[636/385] w-full cursor-pointer object-cover transition-transform duration-500 hover:scale-110"
              />
            ) : (
              <UPlaceholder ratio="636/385" label="rejoignez-nous.png" className="w-full" />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
