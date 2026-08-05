import { Navigate, useParams } from 'react-router-dom'
import UButton from '@/components/ui/UButton'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import CtaSection from '@/components/ui/CtaSection'
import { useSmartPost, useSmartPosts } from '@/hooks/useSmartData'
import { sanitizeHtml } from '@/lib/sanitize'
import { formatDate } from '@/lib/formatDate'
import PageTitle from '@/components/layout/PageTitle'

export default function ArticleDetail() {
  const { slug = '' } = useParams<{ slug: string }>()
  const { post: article, loading } = useSmartPost(slug)
  const { posts } = useSmartPosts(50)

  if (loading) {
    return (
      <div className="page pt-20 flex items-center justify-center" style={{ minHeight: '60vh' }}>
        <LoadingSpinner />
      </div>
    )
  }

  if (!article) {
    return <Navigate to="/actualites" replace />
  }

  const currentIndex = posts.findIndex((p) => p.slug === slug)
  const nextArticle = posts[(currentIndex + 1) % posts.length]

  return (
    <div className="page pt-28">
      <PageTitle title={article.title} backTo="/actualites" backLabel="Retour aux actualités" />

      <section className="bg-white py-10 lg:py-16">
        <div className="mx-auto flex w-[92%] flex-col gap-12 md:w-[85%] lg:gap-20">
          <p className="text-body-sm font-bold text-dark">
            Publié le {formatDate(article.date)}
          </p>

          <div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-[80px] xl:gap-[127px]">
            <div className="w-full flex-1 overflow-hidden rounded-[10px]">
              {article.featuredImage?.node?.sourceUrl ? (
                <img
                  src={article.featuredImage.node.sourceUrl}
                  alt={article.title}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[778/453] w-full cursor-pointer object-cover transition-transform duration-500 hover:scale-110"
                />
              ) : (
                <div className="aspect-[778/453] w-full bg-gray-100 flex items-center justify-center text-muted text-sm">Image non disponible</div>
              )}
            </div>
            <div className="w-full max-w-none text-body-md tracking-[-0.32px] text-body lg:max-w-[337px] lg:shrink-0">
              <p dangerouslySetInnerHTML={{ __html: sanitizeHtml(article.excerpt) }} />
            </div>
          </div>

          {article.content && (
            <div
              className="prose prose-lg max-w-none text-body-md text-body"
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(article.content) }}
            />
          )}

          <div className="flex justify-end">
            <UButton
              to={`/actualites/${nextArticle.slug}`}
              variant="primary"
              className="shrink-0 !px-4 !py-2.5 text-[18px]"
            >
              Article suivant
            </UButton>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  )
}
