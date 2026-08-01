import { useState, useRef, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useScroll } from '@/hooks/useScroll'
import PartnerIcon from '@/components/ui/PartnerIcon'

interface NavItem {
  label: string
  to: string
  children?: { label: string; to: string }[]
}

const navLinks: NavItem[] = [
  {
    label: "L'association",
    to: '/association',
    children: [
      { label: 'Qui sommes-nous', to: '/association' },
      { label: 'Nos partenaires', to: '/partenariat' },
    ],
  },
  {
    label: 'Projets phares',
    to: '/projets',
    children: [
      { label: 'Regards croisés', to: '/projets/regards-croises' },
      { label: 'Parrainage', to: '/projets/parrainage' },
      { label: 'Accompagnement professionnel', to: '/projets/accompagnement-professionnel' },
    ],
  },
  { label: 'Actualités', to: '/actualites' },
  { label: 'Contact', to: '/contact' },
]

const leftLinks = navLinks.slice(0, 2)
const rightLinks = navLinks.slice(2)

export default function NavBar() {
  const { scrolled } = useScroll(50)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const showTransparent = !scrolled
  const isHeroStyle = isHome && !scrolled
  const linkFontSize = 'text-[15px] xl:text-[18px]'

  function isActive(path: string) {
    if (path === '/projets') return location.pathname.startsWith('/projets')
    if (path === '/association') {
      return location.pathname === '/association' || location.pathname === '/partenariat'
    }
    return location.pathname === path
  }

  const openMenu = useCallback((label: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setOpenDropdown(label)
  }, [])

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => {
      setOpenDropdown(null)
      closeTimer.current = null
    }, 150)
  }, [])

  function renderDropdown(link: NavItem) {
    if (!link.children) return null
    if (openDropdown !== link.label) return null
    return (
      <div
        className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[220px] z-50"
        onMouseEnter={() => openMenu(link.label)}
        onMouseLeave={scheduleClose}
      >
        {link.children.map((child) => (
          <Link
            key={child.to}
            to={child.to}
            className="block px-4 py-2.5 text-body-md text-dark hover:bg-gray-50 hover:text-primary transition-colors"
            onClick={() => setOpenDropdown(null)}
          >
            {child.label}
          </Link>
        ))}
      </div>
    )
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,box-shadow] duration-200 ${
        showTransparent && isHome ? 'bg-transparent'
        : showTransparent ? 'bg-white/50 backdrop-blur-md'
        : 'bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm'
      }`}
    >
      <div className="mx-auto h-20 md:h-24 lg:h-28" style={{ width: '85%' }}>

        {/* ========== HERO LAYOUT (home, not scrolled) — desktop ========== */}
        {isHeroStyle && (
          <div className="hidden lg:flex items-center justify-center h-full lg:gap-12">
            <nav className="inline-flex items-center lg:gap-14">
              {leftLinks.map((link) => (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => link.children && openMenu(link.label)}
                  onMouseLeave={scheduleClose}
                >
                  <Link
                    to={link.to}
                    className={`whitespace-nowrap transition-colors duration-200 text-white hover:text-primary inline-flex items-center gap-1 ${isActive(link.to) ? 'text-primary' : ''} ${linkFontSize}`}
                  >
                    {link.label}
                    {link.children && (
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  {renderDropdown(link)}
                </div>
              ))}
            </nav>

            <Link to="/" className="shrink-0 mx-8 lg:mx-12">
              <img src="/assets/logo.webp" alt="Alliance Actions Afrique" className="h-12 lg:h-14 w-auto object-contain" />
            </Link>

            <nav className="inline-flex items-center lg:gap-12">
              {rightLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`whitespace-nowrap transition-colors duration-200 text-white hover:text-primary ${isActive(link.to) ? 'text-primary' : ''} ${linkFontSize}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}

        {/* ========== INNER PAGES LAYOUT (not hero) — desktop ========== */}
        {!isHeroStyle && (
          <div className="hidden lg:flex items-center justify-between h-full">
            <div className="flex items-center" style={{ gap: '64px' }}>
              <Link to="/" className="shrink-0">
                <img src="/assets/logo-dark.webp" alt="Alliance Actions Afrique" className="h-12 lg:h-14 w-auto object-contain" />
              </Link>
              <nav className="inline-flex items-center" style={{ gap: '64px' }}>
                {navLinks.map((link) => (
                  <div
                    key={link.to}
                    className="relative"
                    onMouseEnter={() => link.children && openMenu(link.label)}
                    onMouseLeave={scheduleClose}
                  >
                    <Link
                      to={link.to}
                      className={`whitespace-nowrap transition-colors duration-200 inline-flex items-center gap-1 ${isActive(link.to) ? 'text-primary' : 'text-muted hover:text-primary'} ${linkFontSize}`}
                    >
                      {link.label}
                      {link.children && (
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>
                    {renderDropdown(link)}
                  </div>
                ))}
              </nav>
            </div>
            <Link
              to="/devenir-partenaire"
              className="relative z-[70] inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-[15px] font-semibold text-white hover:bg-primary/90 transition-colors"
            >
              Devenir partenaire <PartnerIcon />
            </Link>
          </div>
        )}

        {/* ========== MOBILE (shared) ========== */}
        <div className="lg:hidden flex items-center justify-between h-full">
          <Link to="/" className="shrink-0">
            <img src={isHeroStyle ? '/assets/logo.webp' : '/assets/logo-dark.webp'} alt="Alliance Actions Afrique" className="h-10 md:h-12 w-auto object-contain" />
          </Link>
          <button className="p-2" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <svg className={`w-6 h-6 ${isHeroStyle ? 'text-white' : 'text-dark'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className={`w-6 h-6 ${isHeroStyle ? 'text-white' : 'text-dark'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* ========== MOBILE MENU ========== */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.to}>
                <Link
                  to={link.to}
                  className={`block py-3 font-semibold transition-colors text-body-md ${isActive(link.to) ? 'text-primary' : 'text-dark'}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && link.children.map((child) => (
                  <Link
                    key={child.to}
                    to={child.to}
                    className={`block py-2 pl-4 text-body-sm transition-colors ${isActive(child.to) ? 'text-primary' : 'text-muted'}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              to="/devenir-partenaire"
              className="flex items-center justify-center gap-2 mt-4 w-full rounded-lg bg-primary px-5 py-3 text-[15px] font-semibold text-white hover:bg-primary/90 transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Devenir partenaire <PartnerIcon />
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
