import { Link } from 'react-router-dom'
import PageTitle from '@/components/layout/PageTitle'
import UButton from '@/components/ui/UButton'
import CtaSection from '@/components/ui/CtaSection'

const suggestions = [
  { label: 'Accueil', to: '/' },
  { label: 'Nos projets', to: '/projets' },
  { label: 'Actualités', to: '/actualites' },
  { label: 'Partenaires', to: '/partenariat' },
  { label: 'Contact', to: '/contact' },
]

export default function NotFound() {
  return (
    <div className="page pt-28">
      <PageTitle title="Page introuvable" />

      <section className="w-full py-16 lg:py-24">
        <div className="mx-auto flex w-[92%] flex-col items-center gap-10 text-center md:w-[85%]">
          <p className="text-[64px] font-bold leading-none text-primary lg:text-[96px]">404</p>

          <h2 className="text-[24px] font-bold leading-tight text-dark lg:text-[32px]">
            Cette page n&apos;existe pas ou a été déplacée
          </h2>

          <p className="max-w-[560px] text-body-md text-body">
            Le lien que vous avez suivi est peut-être erroné ou la page a été
            retirée. Voici quelques pages pour vous remettre sur la bonne voie.
          </p>

          <UButton to="/" variant="primary">
            Retour à l&apos;accueil
          </UButton>

          <nav aria-label="Pages suggérées" className="mt-2 flex flex-wrap items-center justify-center gap-3">
            {suggestions.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className="rounded-[5px] border border-dark/25 px-4 py-2 text-body-md text-dark transition-colors hover:border-primary hover:text-primary"
              >
                {s.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <CtaSection image="/assets/association/rejoignez-nous.webp" />
    </div>
  )
}
