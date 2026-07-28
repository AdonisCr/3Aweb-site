import { memo } from 'react'
import { type ReactNode } from 'react'

interface UCardProps {
  image?: string
  alt?: string
  height?: string
  wrapperClass?: string
  children?: ReactNode
}

export default memo(function UCard({ image, alt = '', height = '300px', wrapperClass = '', children }: UCardProps) {
  return (
    <div className={`rounded-card overflow-hidden ${wrapperClass}`} style={{ height }}>
      {image && (
        <img src={image} alt={alt} loading="lazy" decoding="async" className="w-full h-full object-cover" />
      )}
      {children && <div className="p-6">{children}</div>}
    </div>
  )
})
