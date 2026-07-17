import { type ReactNode } from 'react'

interface UHeadingProps {
  level?: 1 | 2 | 3 | 4
  color?: 'primary' | 'dark' | 'white' | 'muted'
  children: ReactNode
  className?: string
}

const sizeMap: Record<number, string> = {
  1: 'text-[36px] leading-[43.6px]',
  2: 'text-[32px] leading-[38.7px]',
  3: 'text-heading-md',
  4: 'text-heading-sm',
}

const colorMap: Record<string, string> = {
  primary: 'text-primary',
  dark: 'text-dark',
  white: 'text-white',
  muted: 'text-muted',
}

export default function UHeading({
  level = 2,
  color = 'dark',
  children,
  className = '',
}: UHeadingProps) {
  const classes = `font-bold ${sizeMap[level]} ${colorMap[color]} ${className}`

  if (level === 1) return <h1 className={classes}>{children}</h1>
  if (level === 2) return <h2 className={classes}>{children}</h2>
  if (level === 3) return <h3 className={classes}>{children}</h3>
  return <h4 className={classes}>{children}</h4>
}
