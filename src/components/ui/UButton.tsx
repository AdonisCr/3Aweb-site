import { type ReactNode, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'

interface UButtonProps {
  children: ReactNode
  variant?: 'primary' | 'white' | 'dark' | 'text' | 'outline'
  to?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
  style?: CSSProperties
  onClick?: () => void
}

const variantClasses: Record<string, string> = {
  primary: 'bg-primary text-white hover:bg-primary-hover',
  white: 'bg-white text-dark hover:bg-gray-100',
  dark: 'bg-dark text-white hover:opacity-90',
  text: 'text-primary font-bold hover:opacity-80 p-0',
  outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
}

const sizeClasses: Record<string, string> = {
  sm: 'px-3 py-2 text-body-sm',
  md: 'px-6 py-4 text-body-lg',
  lg: 'px-8 py-5 text-body-lg',
}

export default function UButton({
  children,
  variant = 'primary',
  to,
  size = 'md',
  className = '',
  style,
  onClick,
}: UButtonProps) {
  const classes = `inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-btn whitespace-nowrap ${variantClasses[variant]} ${variant !== 'text' ? sizeClasses[size] : ''} ${className}`

  if (to) {
    if (to.startsWith('http') || to.startsWith('mailto:') || to.startsWith('tel:')) {
      return (
        <a href={to} className={classes} style={style} onClick={onClick} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }
    return (
      <Link to={to} className={classes} style={style} onClick={onClick}>
        {children}
      </Link>
    )
  }

  return (
    <button type="button" className={classes} style={style} onClick={onClick}>
      {children}
    </button>
  )
}
