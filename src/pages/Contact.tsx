import { Link } from 'react-router-dom'
import UButton from '@/components/ui/UButton'
import UHeading from '@/components/ui/UHeading'
import UCta from '@/components/ui/UCta'

const PARTNER_SVG = (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M8.24999 4.49958H10.5L12.9675 2.02458C13.0372 1.95429 13.1202 1.89849 13.2116 1.86041C13.3029 1.82234 13.401 1.80273 13.5 1.80273C13.599 1.80273 13.697 1.82234 13.7884 1.86041C13.8798 1.89849 13.9628 1.95429 14.0325 2.02458L15.9675 3.96708C16.1072 4.1076 16.1856 4.29769 16.1856 4.49583C16.1856 4.69397 16.1072 4.88406 15.9675 5.02458L14.25 6.74958H8.24999V8.24958C8.24999 8.4485 8.17097 8.63926 8.03032 8.77991C7.88966 8.92057 7.6989 8.99958 7.49999 8.99958C7.30107 8.99958 7.11031 8.92057 6.96966 8.77991C6.829 8.63926 6.74999 8.4485 6.74999 8.24958V5.99958C6.74999 5.60176 6.90802 5.22023 7.18933 4.93892C7.47063 4.65762 7.85216 4.49958 8.24999 4.49958ZM3.74999 8.24958V11.2496L2.03249 12.9671C1.8928 13.1076 1.81439 13.2977 1.81439 13.4958C1.81439 13.694 1.8928 13.8841 2.03249 14.0246L3.96749 15.9671C4.03721 16.0374 4.12016 16.0932 4.21155 16.1313C4.30295 16.1693 4.40098 16.1889 4.49999 16.1889C4.599 16.1889 4.69702 16.1693 4.78842 16.1313C4.87981 16.0932 4.96276 16.0374 5.03249 15.9671L8.24999 12.7496H11.25C11.4489 12.7496 11.6397 12.6706 11.7803 12.5299C11.921 12.3893 12 12.1985 12 11.9996V11.2496H12.75C12.9489 11.2496 13.1397 11.1706 13.2803 11.0299C13.421 10.8893 13.5 10.6985 13.5 10.4996V9.74958H14.25C14.4489 9.74958 14.6397 9.67057 14.7803 9.52991C14.921 9.38926 15 9.1985 15 8.99958V8.24958H9.74999V8.99958C9.74999 9.39741 9.59195 9.77894 9.31065 10.0602C9.02934 10.3415 8.64781 10.4996 8.24999 10.4996H6.74999C6.35216 10.4996 5.97063 10.3415 5.68933 10.0602C5.40802 9.77894 5.24999 9.39741 5.24999 8.99958V6.74958L3.74999 8.24958Z" fill="white" />
  </svg>
)

const contactInfos = [
  {
    icon: '/assets/contact/icon-mail.svg',
    label: 'alliance.actions.afrique@gmail.com',
    href: 'mailto:alliance.actions.afrique@gmail.com',
    underline: true,
  },
  {
    icon: '/assets/contact/icon-phone.svg',
    label: '+33661802724',
    href: 'tel:+33661802724',
  },
  {
    icon: '/assets/contact/icon-chat.svg',
    label: '+22964684479',
    href: 'tel:+22964684479',
  },
  {
    icon: '/assets/contact/icon-location.svg',
    label: '12 rue des Capucins – 69001 Lyon',
  },
]

const inputClass =
  'h-[42px] w-full border-0 border-b border-black bg-transparent px-2.5 py-2.5 text-body-md text-dark outline-none transition-colors placeholder:text-dark/40 focus:border-primary'

export default function Contact() {
  return (
    <div className="page pt-20">
      {/* PAGE TITLE */}
      <section className="relative overflow-hidden bg-white py-10 lg:py-12">
        <img
          src="/assets/association/title-watermark.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 h-full w-auto max-w-[55%] object-contain object-right opacity-15"
        />
        <div className="relative z-10 mx-auto w-[92%] md:w-[85%]">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex shrink-0 items-center text-primary" aria-label="Retour à l'accueil">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <UHeading level={1} color="primary" className="!text-[28px] !leading-tight lg:!text-[36px] lg:!leading-[43.6px]">
              Gardons contact
            </UHeading>
          </div>
        </div>
      </section>

      {/* MAP + INFOS + FORM */}
      <section className="bg-white py-10 lg:py-16">
        <div className="mx-auto flex w-[92%] max-w-[1001px] flex-col items-center gap-[50px] md:w-[85%]">
          {/* Address card — Figma 980×296, map 405 + panel 575 */}
          <div className="flex w-full max-w-[980px] flex-col overflow-hidden rounded-[20px] shadow-[0px_4px_12.5px_rgba(0,0,0,0.25)] lg:flex-row lg:rounded-[50px]">
            <div className="h-[220px] w-full shrink-0 overflow-hidden lg:h-[296px] lg:w-[405px]">
              <img
                src="/assets/contact/map.jpg"
                alt="Localisation — 12 rue des Capucins, Lyon"
                className="size-full object-cover"
              />
            </div>

            <div className="relative flex h-auto min-h-[240px] w-full items-center overflow-hidden bg-[#351000] px-6 py-8 lg:h-[296px] lg:w-[575px] lg:px-10">
              <div className="relative z-10 flex w-full max-w-[440px] flex-col items-start justify-between gap-8 sm:flex-row sm:items-center lg:mx-auto">
                <img
                  src="/assets/contact/logo-white.svg"
                  alt="Alliance Actions Afrique"
                  className="h-[48px] w-auto object-contain lg:h-[59px] lg:w-[114px]"
                />
                <ul className="flex w-full max-w-[251px] flex-col gap-3.5">
                  {contactInfos.map((item) => (
                    <li key={item.label} className="flex items-center gap-3">
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

          {/* Form — Figma ~1001px, fields 460px, gap 73px */}
          <form
            className="flex w-full max-w-[1001px] flex-col items-end gap-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex w-full flex-col gap-10">
              <div className="flex w-full flex-col gap-10 lg:flex-row lg:gap-[73px]">
                <label className="flex w-full flex-col items-start lg:w-[460px]">
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
                <label className="flex w-full flex-col items-start lg:w-[460px]">
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

              <label className="flex w-full flex-col items-start">
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
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>

      <UCta
        title="Rejoignez-nous !"
        subtitle="Ou partagez notre vision commune en soutenant le développement et l'épanouissement professionnel de nos parrainés et des jeunes que nous accompagnons."
        image="/assets/home/rejoignez-nous.jpg"
        imageAlt="Poignée de main professionnelle"
        actions={
          <>
            <UButton to="/partenariat" variant="primary">Devenir partenaire {PARTNER_SVG}</UButton>
            <UButton to="/don" variant="dark">Faire un don</UButton>
          </>
        }
      />
    </div>
  )
}
