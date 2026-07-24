export default function ErrorMessage({
  message = 'Une erreur est survenue lors du chargement des données.',
  className = '',
}: {
  message?: string
  className?: string
}) {
  return (
    <div className={`rounded-card bg-red-50 p-6 text-center ${className}`}>
      <p className="text-body-md text-red-600">{message}</p>
    </div>
  )
}
