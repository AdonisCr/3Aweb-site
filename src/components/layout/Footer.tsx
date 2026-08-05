const address = '12 rue des Capucins — 69001 Lyon'
const siteDomain = 'www.allianceactionsafrique.com'
const publicationDirector = 'Franca Sornin'

const hosting = {
  name: 'Siteground',
  url: 'https://www.siteground.com',
  urlLabel: 'www.siteground.com',
  email: 'contact@siteground.com',
}

function MailIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function FaxIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a1 1 0 001-1v-4a1 1 0 00-1-1H9a1 1 0 00-1 1v4a1 1 0 001 1zm8-14V3a1 1 0 00-1-1H7a1 1 0 00-1 1v4h12z" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.5 31.5 0 000 12a31.5 31.5 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.5 31.5 0 0024 12a31.5 31.5 0 00-.5-5.8zM9.8 15.5v-7l6.3 3.5-6.3 3.5z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 11-.01-4.12 2.06 2.06 0 01.01 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.23 0z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.69 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.41-10.85a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
    </svg>
  )
}

const socialLinks = [
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@3aallianceactionsafrique367',
    Icon: YoutubeIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/alliance-actions-afrique',
    Icon: LinkedInIcon,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/allianceactionsafrique',
    Icon: InstagramIcon,
  },
]

const contactItems = [
  { value: 'alliance.actions.afrique@gmail.com', href: 'mailto:alliance.actions.afrique@gmail.com', Icon: MailIcon },
  { value: '+33 6 61 80 27 24', href: 'tel:+33661802724', Icon: PhoneIcon },
  { value: '+229 64 68 44 79', href: 'tel:+22964684479', Icon: FaxIcon },
  { value: address, href: undefined, Icon: PinIcon },
]

const references = [
  { label: 'Lillybelle' },
  { label: 'FormaSup ARL' },
  { label: 'Société Générale du Bénin' },
  { label: 'Sir John' },
  { label: 'metropolegrandlyon.com', href: 'https://metropolegrandlyon.com' },
  { label: 'bj.ambafrance.org', href: 'https://bj.ambafrance.org' },
  { label: 'if-benin.com', href: 'https://if-benin.com' },
  { label: 'resacoop.org', href: 'https://resacoop.org' },
  { label: 'cpme.fr', href: 'https://www.cpme.fr' },
  { label: 'campusfrance.org', href: 'https://www.campusfrance.org' },
  { label: 'Projet Voltaire', href: 'https://www.projet-voltaire.fr' },
]

const partnerProjects = [
  { label: 'Esperanza-Benin.org', href: 'https://esperanza-benin.org' },
  { label: 'ECOLE 229', href: '#' },
  { label: 'Caritas.org', href: 'https://caritas.org' },
  { label: 'Epitech Bénin', href: '#' },
  { label: 'Africa Design School', href: '#' },
]

const mentions = [
  { label: 'bj.ambafrance.org', href: 'https://bj.ambafrance.org' },
  { label: 'mag.attestationlegale.fr', href: 'https://mag.attestationlegale.fr' },
  { label: 'lillybelle.eu', href: 'https://lillybelle.eu' },
]

export default function Footer() {
  return (
    <footer className="relative text-white pt-16 pb-10 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="/assets/footer-bg.webp" alt="" loading="lazy" decoding="async" className="w-full h-full object-cover" />
      </div>

      {/* Foreground group image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img src="/assets/footer-group.webp" alt="" loading="lazy" decoding="async" className="h-full w-auto object-contain" style={{ filter: 'brightness(1.4) opacity(0.5)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-[92%] md:w-[85%]">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-14">
          <div className="flex flex-col items-start gap-4">
            <a href="/" className="inline-block">
              <img src="/assets/logo.webp" alt="Alliance Actions Afrique" loading="lazy" decoding="async" className="h-20 w-auto object-contain" />
            </a>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex size-10 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          <ul className="space-y-3">
            {contactItems.map((item) => (
              <li key={item.value} className="flex items-center gap-3">
                <span className="text-primary shrink-0"><item.Icon /></span>
                {item.href ? (
                  <a href={item.href} className="text-body-md text-white underline underline-offset-2 hover:text-primary">
                    {item.value}
                  </a>
                ) : (
                  <span className="text-body-md text-white">{item.value}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14 pt-10 border-t-2 border-white/40">
          {/* Références */}
          <div>
            <h4 className="mb-4 text-body-md font-bold text-white">Références:</h4>
            <ul className="space-y-2">
              {references.map((ref) => (
                <li key={ref.label} className="text-body-sm text-white/90 list-disc list-inside">
                  {ref.href ? (
                    <a href={ref.href} target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-primary">
                      {ref.label}
                    </a>
                  ) : (
                    <span>{ref.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Partenaires projets */}
          <div>
            <h4 className="mb-4 text-body-md font-bold text-white">Partenaires projets:</h4>
            <ul className="space-y-2">
              {partnerProjects.map((p) => (
                <li key={p.label} className="text-body-sm list-disc list-inside">
                  <a href={p.href} target="_blank" rel="noopener" className="text-white/90 underline underline-offset-2 hover:text-primary">
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ils nous mentionnent */}
          <div>
            <h4 className="mb-4 text-body-md font-bold text-white">Ils nous mentionnent:</h4>
            <ul className="space-y-2">
              {mentions.map((m) => (
                <li key={m.label} className="text-body-sm list-disc list-inside">
                  <a href={m.href} target="_blank" rel="noopener" className="text-white/90 underline underline-offset-2 hover:text-primary">
                    {m.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Mentions légales */}
          <div>
            <h4 className="mb-4 text-body-md font-bold text-white">Mentions légales</h4>
            <div className="space-y-4 text-body-sm text-white/90 leading-relaxed">
              <p>
                <span className="text-primary font-bold">Propriétaire du site</span> : Le site{' '}
                <a href={`https://${siteDomain}`} className="underline underline-offset-2 hover:text-primary">{siteDomain}</a>{' '}
                est la propriété d'Alliance Actions Afrique, Association loi 1901, reconnue d'intérêt
                général, dont le siège social est situé au {address}
              </p>
              <p>
                <span className="text-primary font-bold">Directeur de publication</span>: {publicationDirector}
              </p>
              <p>
                <span className="text-primary font-bold">Hébergement</span>: {hosting.name} (
                <a href={hosting.url} target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-primary">{hosting.urlLabel}</a>
                —{' '}
                <a href={`mailto:${hosting.email}`} className="underline underline-offset-2 hover:text-primary">{hosting.email}</a>
                )
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 text-right">
          <a href="/politique-de-confidentialite" className="text-body-sm text-white underline underline-offset-2 hover:text-primary">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </footer>
  )
}
