import { type ReactNode } from 'react'

interface USectionProps {
  bg?: 'white' | 'light' | 'dark'
  containerClass?: string
  children: ReactNode
}

const bgClasses: Record<string, string> = {
  white: '',
  light: 'bg-gray-50',
  dark: 'bg-dark text-white',
}

export default function USection({ bg = 'white', containerClass = '', children }: USectionProps) {
  return (
    <section className={`py-10 lg:py-20 bg-white ${bgClasses[bg]}`}>
      <div className={`mx-auto w-[92%] md:w-[85%] ${containerClass}`}>
        {children}
      </div>
    </section>
  )
}
