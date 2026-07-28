import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client/react'
import AOS from 'aos'
import { apolloClient } from '@/lib/client'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import ErrorBoundary from '@/components/ui/ErrorBoundary'

const Home = lazy(() => import('@/pages/Home'))
const Association = lazy(() => import('@/pages/Association'))
const Projects = lazy(() => import('@/pages/Projects'))
const RegardsCroises = lazy(() => import('@/pages/projects/RegardsCroises'))
const Parrainage = lazy(() => import('@/pages/projects/Parrainage'))
const AccompagnementProf = lazy(() => import('@/pages/projects/AccompagnementProf'))
const ProjectPartenaires = lazy(() => import('@/pages/projects/ProjectPartenaires'))
const Partnership = lazy(() => import('@/pages/Partnership'))
const News = lazy(() => import('@/pages/News'))
const ArticleDetail = lazy(() => import('@/pages/ArticleDetail'))
const Contact = lazy(() => import('@/pages/Contact'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
      easing: 'ease-out-cubic',
      offset: 80,
    })
    AOS.refresh()
  }, [pathname])

  return null
}

function AppLayout() {
  return (
    <div className="page min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner className="min-h-[60vh]" />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/association" element={<Association />} />
              <Route path="/projets" element={<Projects />} />
              <Route path="/projets/regards-croises" element={<RegardsCroises />} />
              <Route path="/projets/parrainage" element={<Parrainage />} />
              <Route path="/projets/accompagnement-professionnel" element={<AccompagnementProf />} />
              <Route path="/projets/partenaires" element={<ProjectPartenaires />} />
              <Route path="/partenariat" element={<Partnership />} />
              <Route path="/actualites" element={<News />} />
              <Route path="/actualites/:slug" element={<ArticleDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <ScrollToTop />
        <AppLayout />
      </BrowserRouter>
    </ApolloProvider>
  )
}
