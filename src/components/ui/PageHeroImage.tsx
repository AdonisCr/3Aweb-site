import { memo } from 'react'

interface PageHeroImageProps {
  src: string
  alt: string
  className?: string
}

export default memo(function PageHeroImage({ src, alt, className = '' }: PageHeroImageProps) {
  return (
    <section className={`w-full ${className}`}>
      <div className="h-[240px] w-full overflow-hidden sm:h-[360px] lg:h-[500px]">
        <img src={src} alt={alt} loading="lazy" decoding="async" className="size-full object-cover" />
      </div>
    </section>
  )
})
