import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import Home from '@/pages/Home'
import Association from '@/pages/Association'
import Projects from '@/pages/Projects'
import RegardsCroises from '@/pages/projects/RegardsCroises'
import Parrainage from '@/pages/projects/Parrainage'
import AccompagnementProf from '@/pages/projects/AccompagnementProf'
import ProjectPartenaires from '@/pages/projects/ProjectPartenaires'
import Partnership from '@/pages/Partnership'
import News from '@/pages/News'
import ArticleDetail from '@/pages/ArticleDetail'
import Contact from '@/pages/Contact'
import Don from '@/pages/Don'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppLayout() {
  return (
    <div className="page min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
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
          <Route path="/don" element={<Don />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppLayout />
    </BrowserRouter>
  )
}
