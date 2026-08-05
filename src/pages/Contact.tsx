import CtaSection from '@/components/ui/CtaSection'
import PageTitle from '@/components/layout/PageTitle'
import { useSmartContact } from '@/hooks/useSmartData'
import { sanitizeMailto, sanitizeTel } from '@/lib/safeUrl'

const inputClass =
  'h-[42px] w-full border-0 border-b border-black bg-transparent px-2.5 py-2.5 text-body-md text-dark outline-none transition-colors placeholder:text-dark/40 focus:border-primary'

export default function Contact() {
  const { contact } = useSmartContact()

  const contactInfos = [
    {
      icon: '/assets/contact/icon-mail.svg',
      label: contact.email ?? 'alliance.actions.afrique@gmail.com',
      href: sanitizeMailto(contact.email, 'mailto:alliance.actions.afrique@gmail.com'),
      underline: true,
    },
    {
      icon: '/assets/contact/icon-phone.svg',
      label: contact.phoneFr ?? '+33 6 61 80 27 24',
      href: sanitizeTel(contact.phoneFr, 'tel:+33661802724'),
    },
    {
      icon: '/assets/contact/icon-chat.svg',
      label: contact.phoneBj ?? '+229 64 68 44 79',
      href: sanitizeTel(contact.phoneBj, 'tel:+22964684479'),
    },
    {
      icon: '/assets/contact/icon-location.svg',
      label: contact.address ?? '12 rue des Capucins — 69001 Lyon',
    },
  ]
  return (
    <div className="page pt-28">
      <PageTitle title="Gardons contact" />

      {/* MAP + INFOS + FORM */}
      <section className="bg-white py-10 lg:py-16 overflow-hidden" data-aos="fade-up">
        <div className="mx-auto flex w-[92%] max-w-[1001px] flex-col items-center gap-[50px] md:w-[85%]">
          {/* Address card */}
            <div
              className="relative flex min-h-[240px] w-full items-center overflow-hidden rounded-l-[12px] shadow-[0px_4px_12.5px_rgba(0,0,0,0.25)] bg-cover bg-center bg-no-repeat lg:flex-row lg:rounded-l-[24px]"
              style={{ backgroundImage: 'url(/assets/contact/bg.webp)' }}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div
                className="h-[220px] w-full overflow-hidden sm:h-[296px] lg:w-[40%]"
                data-aos="zoom-in"
                data-aos-duration="1200"
              >
                <img
                  src="/assets/contact/map.webp"
                  alt="Localisation — 12 rue des Capucins, Lyon"
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover"
                />
              </div>

              <div
                className="relative flex min-h-[240px] w-full items-center overflow-hidden px-6 py-8 sm:px-10 sm:py-10 lg:w-[60%]"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <div className="relative z-10 flex w-full flex-col items-start justify-between gap-8 sm:flex-row sm:items-center lg:mx-auto lg:max-w-[440px]">
                  <img
                    src="/assets/contact/logo.webp"
                    alt="Alliance Actions Afrique"
                    className="h-[50px] w-auto object-contain lg:h-[64px]"
                  />
                  <ul className="flex w-full flex-col gap-3.5 sm:max-w-[251px]">
                    {contactInfos.map((item, i) => (
                      <li
                        key={item.label}
                        className="flex items-center gap-3"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay={i * 100}
                      >
                        <span className="flex size-4 shrink-0 items-center justify-center overflow-hidden">
                          <img
                            src={item.icon}
                            alt=""
                            aria-hidden
                            className="size-full object-contain brightness-0 invert"
                          />
                        </span>
                        {item.href ? (
                          <a
                            href={item.href}
                            className={`text-[14px] leading-normal text-white ${item.underline ? 'underline underline-offset-2' : ''}`}
                          >
                            {item.label}
                          </a>
                        ) : (
                          <span className="text-[14px] leading-normal text-white">{item.label}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          <form
            className="flex w-full max-w-[1001px] flex-col items-end gap-10"
            onSubmit={(e) => e.preventDefault()}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="flex w-full flex-col gap-10">
              <div className="flex w-full flex-col gap-10 lg:flex-row lg:gap-[73px]">
                <label
                  className="flex w-full flex-col items-start lg:w-1/2"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="0"
                >
                  <span className="px-2.5 py-2.5 text-body-md font-medium text-dark">
                    Nom, prénom et poste*
                  </span>
                  <input
                    type="text"
                    name="identity"
                    required
                    className={inputClass}
                    aria-label="Nom, prénom et poste"
                  />
                </label>
                <label
                  className="flex w-full flex-col items-start lg:w-1/2"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  <span className="px-2.5 py-2.5 text-body-md font-medium text-dark">
                    Adresse mail*
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    className={inputClass}
                    aria-label="Adresse mail"
                  />
                </label>
              </div>

              <label
                className="flex w-full flex-col items-start"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <span className="px-2.5 py-2.5 text-body-md font-medium text-dark">Message*</span>
                <textarea
                  name="message"
                  required
                  className="min-h-[148px] w-full resize-none border-0 border-b border-black bg-transparent px-2.5 py-2.5 text-body-md text-dark outline-none transition-colors focus:border-primary"
                  aria-label="Message"
                />
              </label>
            </div>

            <button
              type="submit"
              className="inline-flex h-[42px] w-[194px] items-center justify-center rounded-[5px] bg-primary px-4 py-2.5 text-[18px] font-semibold text-white transition-colors hover:bg-primary-hover"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>

      <div data-aos="fade-up">
        <CtaSection />
      </div>
    </div>
  )
}
