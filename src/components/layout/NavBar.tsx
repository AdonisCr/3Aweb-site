import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useScroll } from '@/hooks/useScroll'
import UButton from '@/components/ui/UButton'

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
  { label: 'Projets phares', to: '/projets' },
  { label: 'Actualités', to: '/actualites' },
  { label: 'Contact', to: '/contact' },
]

const leftLinks = navLinks.slice(0, 2)
const rightLinks = navLinks.slice(2)

const PARTNER_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M8.24999 4.49958H10.5L12.9675 2.02458C13.0372 1.95429 13.1202 1.89849 13.2116 1.86041C13.3029 1.82234 13.401 1.80273 13.5 1.80273C13.599 1.80273 13.697 1.82234 13.7884 1.86041C13.8798 1.89849 13.9628 1.95429 14.0325 2.02458L15.9675 3.96708C16.1072 4.1076 16.1856 4.29769 16.1856 4.49583C16.1856 4.69397 16.1072 4.88406 15.9675 5.02458L14.25 6.74958H8.24999V8.24958C8.24999 8.4485 8.17097 8.63926 8.03032 8.77991C7.88966 8.92057 7.6989 8.99958 7.49999 8.99958C7.30107 8.99958 7.11031 8.92057 6.96966 8.77991C6.829 8.63926 6.74999 8.4485 6.74999 8.24958V5.99958C6.74999 5.60176 6.90802 5.22023 7.18933 4.93892C7.47063 4.65762 7.85216 4.49958 8.24999 4.49958ZM3.74999 8.24958V11.2496L2.03249 12.9671C1.8928 13.1076 1.81439 13.2977 1.81439 13.4958C1.81439 13.694 1.8928 13.8841 2.03249 14.0246L3.96749 15.9671C4.03721 16.0374 4.12016 16.0932 4.21155 16.1313C4.30295 16.1693 4.40098 16.1889 4.49999 16.1889C4.599 16.1889 4.69702 16.1693 4.78842 16.1313C4.87981 16.0932 4.96276 16.0374 5.03249 15.9671L8.24999 12.7496H11.25C11.4489 12.7496 11.6397 12.6706 11.7803 12.5299C11.921 12.3893 12 12.1985 12 11.9996V11.2496H12.75C12.9489 11.2496 13.1397 11.1706 13.2803 11.0299C13.421 10.8893 13.5 10.6985 13.5 10.4996V9.74958H14.25C14.4489 9.74958 14.6397 9.67057 14.7803 9.52991C14.921 9.38926 15 9.1985 15 8.99958V8.24958H9.74999V8.99958C9.74999 9.39741 9.59195 9.77894 9.31065 10.0602C9.02934 10.3415 8.64781 10.4996 8.24999 10.4996H6.74999C6.35216 10.4996 5.97063 10.3415 5.68933 10.0602C5.40802 9.77894 5.24999 9.39741 5.24999 8.99958V6.74958L3.74999 8.24958Z" fill="white" />
  </svg>
)

export default function NavBar() {
  const { scrolled } = useScroll(50)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const isHeroStyle = isHome && !scrolled
  const linkFontSize = 'text-[15px] xl:text-[18px]'

  function isActive(path: string) {
    return location.pathname === path
  }

  function renderDropdown(link: NavItem) {
    if (!link.children) return null
    if (openDropdown !== link.label) return null
    return (
      <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[200px]">
        {link.children.map((child) => (
          <a
            key={child.to}
            href={child.to}
            className="block px-4 py-2 text-body-md text-dark hover:bg-gray-50 hover:text-primary transition-colors"
          >
            {child.label}
          </a>
        ))}
      </div>
    )
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHeroStyle ? 'bg-transparent' : 'bg-white border-b border-gray-100 shadow-sm'}`}
    >
      <div className="mx-auto h-20" style={{ width: '85%' }}>

        {/* HERO LAYOUT (home, not scrolled) — only on lg+ */}
        {isHeroStyle && (
          <div className="hidden lg:flex items-center justify-center h-full lg:gap-12">
            <nav className="inline-flex items-center lg:gap-14">
              {leftLinks.map((link) => (
                <div
                  key={link.to}
                  className="relative"
                  onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <a
                    href={link.to}
                    className={`whitespace-nowrap transition-colors duration-200 text-white hover:text-primary inline-flex items-center gap-1 ${isActive(link.to) ? 'text-primary' : ''} ${linkFontSize}`}
                  >
                    {link.label}
                    {link.children && (
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </a>
                  {renderDropdown(link)}
                </div>
              ))}
            </nav>

            <a href="/" className="shrink-0 mx-8 lg:mx-12">
              <img src="/assets/logo.png" alt="Alliance Actions Afrique" className="h-12 lg:h-14 w-auto object-contain" />
            </a>

            <nav className="inline-flex items-center lg:gap-12">
              {rightLinks.map((link) => (
                <a
                  key={link.to}
                  href={link.to}
                  className={`whitespace-nowrap transition-colors duration-200 text-white hover:text-primary ${isActive(link.to) ? 'text-primary' : ''} ${linkFontSize}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}

        {/* INNER PAGES LAYOUT (not hero) — only on lg+ */}
        {!isHeroStyle && (
          <div className="hidden lg:flex items-center justify-between h-full">
            <div className="flex items-center" style={{ gap: '64px' }}>
              <a href="/" className="shrink-0">
                <img src="/assets/logo-dark.png" alt="Alliance Actions Afrique" className="h-12 lg:h-14 w-auto object-contain" />
              </a>
              <nav className="inline-flex items-center" style={{ gap: '64px' }}>
                {navLinks.map((link) => (
                  <div
                    key={link.to}
                    className="relative"
                    onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <a
                      href={link.to}
                      className={`whitespace-nowrap transition-colors duration-200 inline-flex items-center gap-1 ${isActive(link.to) ? 'text-primary' : 'text-muted hover:text-primary'} ${linkFontSize}`}
                    >
                      {link.label}
                      {link.children && (
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </a>
                    {renderDropdown(link)}
                  </div>
                ))}
              </nav>
            </div>
            <UButton to="/partenariat" variant="primary">
              Devenir partenaire {PARTNER_SVG}
            </UButton>
          </div>
        )}

        {/* MOBILE (shared) */}
        <div className="lg:hidden flex items-center justify-between h-full">
          <a href="/" className="shrink-0">
            <img src="/assets/logo.png" alt="Alliance Actions Afrique" className="h-10 md:h-12 w-auto object-contain" />
          </a>
          <button className="p-2" aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <svg className={`w-6 h-6 ${isHeroStyle ? 'text-white' : 'text-black'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className={`w-6 h-6 ${isHeroStyle ? 'text-white' : 'text-black'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <div key={link.to}>
                <a
                  href={link.to}
                  className={`block py-2 font-semibold transition-colors text-body-md ${isActive(link.to) ? 'text-primary' : 'text-muted'}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
                {link.children && link.children.map((child) => (
                  <a
                    key={child.to}
                    href={child.to}
                    className={`block py-1 pl-4 text-body-sm transition-colors ${isActive(child.to) ? 'text-primary' : 'text-muted'}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {child.label}
                  </a>
                ))}
              </div>
            ))}
            <UButton to="/partenariat" variant="primary" className="block text-center mt-4 w-full">
              Devenir partenaire {PARTNER_SVG}
            </UButton>
          </div>
        </div>
      )}
    </header>
  )
}
