import { Navigate, useParams } from 'react-router-dom'
import UButton from '@/components/ui/UButton'
import UCta from '@/components/ui/UCta'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import PartnerIcon from '@/components/ui/PartnerIcon'
import { useSmartPosts } from '@/hooks/useSmartData'
import { sanitizeHtml } from '@/lib/sanitize'
import PageTitle from '@/components/layout/PageTitle'

export default function ArticleDetail() {
  const { slug = '' } = useParams<{ slug: string }>()
  const { posts, loading } = useSmartPosts(50)

  if (loading) {
    return (
      <div className="page pt-20 flex items-center justify-center" style={{ minHeight: '60vh' }}>
        <LoadingSpinner />
      </div>
    )
  }

  const article = posts.find((p) => p.slug === slug)

  if (!article) {
    return <Navigate to="/actualites" replace />
  }

  const currentIndex = posts.findIndex((p) => p.slug === slug)
  const nextArticle = posts[(currentIndex + 1) % posts.length]

  return (
    <div className="page pt-28">
      <PageTitle title={article.title} backTo="/actualites" backLabel="Retour aux actualités" />

      {/* ARTICLE CONTENT */}
      <section className="bg-white py-10 lg:py-16">
        <div className="mx-auto flex w-[92%] flex-col gap-12 md:w-[85%] lg:gap-20">
          {/* Date */}
          <p className="text-body-sm font-bold text-dark">
            Publié le {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          {/* Image + premier paragraphe */}
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-[80px] xl:gap-[127px]">
            <div className="w-full flex-1 overflow-hidden rounded-[10px]">
              {article.featuredImage?.node?.sourceUrl ? (
                <img
                  src={article.featuredImage.node.sourceUrl}
                  alt={article.title}
                  className="aspect-[778/453] w-full object-cover"
                />
              ) : (
                <div className="aspect-[778/453] w-full bg-gray-100 flex items-center justify-center text-muted text-sm">Image non disponible</div>
              )}
            </div>
            <div className="w-full max-w-[337px] shrink-0 text-body-md tracking-[-0.32px] text-body">
              <p dangerouslySetInnerHTML={{ __html: sanitizeHtml(article.excerpt) }} />
            </div>
          </div>

          {/* Contenu complet */}
          {article.content && (
            <div
              className="prose prose-lg max-w-none text-body-md text-body"
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(article.content) }}
            />
          )}

          {/* Article suivant */}
          <div className="flex justify-end">
            <UButton
              to={`/actualites/${nextArticle.slug}`}
              variant="primary"
              className="shrink-0 !w-[194px] !px-4 !py-2.5 text-[18px]"
            >
              Article suivant
            </UButton>
          </div>
        </div>
      </section>

      <UCta
        title="Rejoignez-nous !"
        subtitle="Ou partagez notre vision commune en soutenant le développement et l'épanouissement professionnel de nos parrainés et des jeunes que nous accompagnons."
        image="/assets/home/rejoignez-nous.jpg"
        imageAlt="Poignée de main professionnelle"
        actions={
          <>
            <UButton to="/partenariat" variant="primary">Devenir partenaire <PartnerIcon /></UButton>
            <UButton to="/don" variant="dark">Faire un don</UButton>
          </>
        }
      />
    </div>
  )
}
