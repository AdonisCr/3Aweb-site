interface UPlaceholderProps {
  ratio?: string
  label?: string
  squareSize?: number
  rounded?: boolean
  className?: string
}

export default function UPlaceholder({
  ratio = '4/3',
  label,
  squareSize = 24,
  rounded = true,
  className = '',
}: UPlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden bg-gray-100 ${rounded ? 'rounded-card' : ''} ${className}`}
      style={{
        aspectRatio: ratio,
        backgroundImage: 'repeating-conic-gradient(#e5e7eb 0% 25%, #f3f4f6 0% 50%)',
        backgroundSize: `${squareSize}px ${squareSize}px`,
      }}
    >
      {label && (
        <span className="absolute inset-0 flex items-center justify-center text-body-sm font-mono text-gray-400 px-2 text-center">
          {label}
        </span>
      )}
    </div>
  )
}
