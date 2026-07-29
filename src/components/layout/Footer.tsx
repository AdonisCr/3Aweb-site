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
          <a href="/" className="inline-block">
            <img src="/assets/logo.webp" alt="Alliance Actions Afrique" loading="lazy" decoding="async" className="h-20 w-auto object-contain" />
          </a>
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
