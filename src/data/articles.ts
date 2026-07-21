export interface Article {
  slug: string
  title: string
  date: string
  excerpt: string
  image: string
  body: [string, string, string]
}

const LOREM =
  "Lorem ipsum dolor sit amet. Ut dolorum modi sit nihil autem rem autem delectus ea corporis quia ea veniam velit et doloribus sapiente. Sed aperiam molestiae sit veniam omnis et velit omnis et quisquam quos aut doloremque maxime cum obcaecati sint. Qui molestias fuga qui aperiam sunt aut quibusdam soluta hic dicta magnam sed repellat doloribus ut nobis dolorum et cupiditate magni. Quo dolor beatae rem repellendus excepturi qui obcaecati ipsam rem dolor explicabo."

export const articles: Article[] = [
  {
    slug: 'titre-de-l-article',
    title: "Titre de l'article",
    date: '12 juin',
    excerpt: LOREM.slice(0, 220) + '…',
    image: '/assets/news/article-1.jpg',
    body: [LOREM, LOREM, LOREM],
  },
  {
    slug: 'titre-de-l-article-2',
    title: "Titre de l'article",
    date: '12 juin',
    excerpt: LOREM.slice(0, 220) + '…',
    image: '/assets/news/article-2.jpg',
    body: [LOREM, LOREM, LOREM],
  },
  {
    slug: 'titre-de-l-article-3',
    title: "Titre de l'article",
    date: '12 juin',
    excerpt: LOREM.slice(0, 220) + '…',
    image: '/assets/news/article-3.jpg',
    body: [LOREM, LOREM, LOREM],
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getNextArticleSlug(slug: string): string {
  const index = articles.findIndex((a) => a.slug === slug)
  if (index < 0) return articles[0].slug
  return articles[(index + 1) % articles.length].slug
}

/** Remplacer par l'URL YouTube réelle dès qu'elle est disponible. */
export const YOUTUBE_10_ANS_URL = 'https://www.youtube.com/'
