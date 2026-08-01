import { Link } from 'react-router-dom'
import PageTitle from '@/components/layout/PageTitle'

export default function PolitiqueConfidentialite() {
  return (
    <div className="page pt-28">
      <PageTitle title="Politique de confidentialité" />

      <section className="bg-white py-10 w-full lg:py-16" data-aos="fade-up" data-aos-duration="800">
        <div className="mx-auto flex w-[95%] max-w-[1000px] flex-col gap-10 md:w-[85%] lg:gap-12">
          <section className="flex flex-col gap-4">
            <h2 className="text-heading-md font-bold text-primary">
              Restrictions d&apos;utilisation – Propriété intellectuelle
            </h2>
            <p className="text-body-md tracking-[-0.32px] text-body leading-relaxed">
              L&apos;ensemble du site{' '}
              <a
                href="https://allianceactionsafrique.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:text-primary-hover"
              >
                https://allianceactionsafrique.com/
              </a>
              , ainsi que les textes et illustrations qui le composent, notamment graphiques,
              photographiques et multimédia sont la propriété d&apos;Alliance Actions Afrique ou sont
              utilisés par Alliance Actions Afrique avec l&apos;accord des titulaires des droits
              d&apos;auteur ou du droit sur les marques. A ce titre, ils sont protégés par la
              législation française, communautaire et internationale sur le droit de la propriété
              intellectuelle.
            </p>
            <p className="text-body-md tracking-[-0.32px] text-body leading-relaxed">
              En aucun cas, il n&apos;est autorisé de reproduire, de modifier, utiliser, réutiliser le
              contenu du site à des fins publiques ou commerciales, y compris les textes, images,
              supports sauf si Alliance Actions Afrique a donné son accord écrit au préalable.
            </p>
            <p className="text-body-md tracking-[-0.32px] text-body leading-relaxed">
              Toute reproduction ou utilisation du site https://allianceactionsafrique.com et/ou des
              éléments le composant à des fins non commerciales, et notamment pédagogiques, devra
              mentionner la source et le titulaire des droits de propriété afférents et respecter
              l&apos;intégrité des informations.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-heading-md font-bold text-primary">
              Responsabilité – absence de garanties
            </h2>
            <p className="text-body-md tracking-[-0.32px] text-body leading-relaxed">
              Les sites extérieurs à Alliance Actions Afrique ayant un lien hypertexte avec le présent
              site ne sont pas sous le contrôle d&apos;Alliance Actions Afrique qui décline par
              conséquent toute responsabilité quant à leur contenu. Alliance Actions Afrique décline
              également toute responsabilité en cas de difficulté d&apos;accès ou d&apos;interruption
              dans la connexion. En outre, Alliance Actions Afrique se réserve le droit, pour toutes
              raisons et à sa seule discrétion, de résilier, modifier, suspendre ou interrompre
              l&apos;accès à tout ou partie d&apos;https://allianceactionsafrique.com/, sans avis
              préalable.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-heading-md font-bold text-primary">
              Protection des données personnelles : Loi Informatique et Libertés
            </h2>
            <p className="text-body-md tracking-[-0.32px] text-body leading-relaxed">
              La présente Politique de protection des données à caractère personnel a pour objectif de
              définir les principes et lignes directrices mis en œuvre par Alliance Actions Afrique en
              matière de traitement des données à caractère personnel notamment des utilisateurs du
              site internet https://allianceactionsafrique.com/ Elle ne s&apos;applique pas aux
              traitements réalisés sur des sites ou applications de tiers pour lesquels Alliance
              Actions Afrique n&apos;est pas responsable de traitement.
            </p>
            <p className="text-body-md tracking-[-0.32px] text-body leading-relaxed">
              Conformément à la loi 78-17 du 6 janvier 1978 relative à l&apos;informatique, aux fichiers
              et aux libertés, vous disposez d&apos;un droit d&apos;accès, de modification, de
              suppression et de rectification des données vous concernant. Pour pouvoir exercer votre
              droit d&apos;accès, écrivez-nous à{' '}
              <Link to="/contact" className="text-primary underline underline-offset-2 hover:text-primary-hover">
                Nous contacter
              </Link>{' '}
              ou par courrier à Alliance Actions Afrique, 12 rue des Capucins – 69001- Lyon.
            </p>
            <p className="text-body-md tracking-[-0.32px] text-body leading-relaxed">
              Il vous serait également possible d&apos;effectuer une réclamation auprès la Commission
              Nationale de l&apos;Informatique et des Libertés (CNIL) :{' '}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:text-primary-hover"
              >
                www.cnil.fr
              </a>
              .
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-heading-md font-bold text-primary">
              L&apos;engagement d&apos;Alliance Actions Afrique
            </h2>
            <p className="text-body-md tracking-[-0.32px] text-body leading-relaxed">
              Conformément à la règlementation, l&apos;association Alliance Actions Afrique est
              juridiquement responsable du traitement de vos données et s&apos;engage en conséquence à
              prendre toutes les mesures nécessaires pour garantir leur sécurité et leur
              confidentialité en toutes circonstances.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-heading-md font-bold text-dark">
              Pourquoi collectons-nous vos données personnelles ?
            </h2>
            <p className="text-body-md tracking-[-0.32px] text-body leading-relaxed">
              Les données personnelles que nous collectons sur ce site, sur les supports numériques ou
              papier sont les suivantes :
            </p>
            <ul className="list-disc space-y-2 pl-6 text-body-md tracking-[-0.32px] text-body leading-relaxed">
              <li>
                Des données d&apos;identification : civilité, nom, prénom, date de naissance ou âge.
              </li>
              <li>
                Des données de contact : adresse postale, e-mail, numéro(s) de téléphone, préférence de
                contact.
              </li>
              <li>
                Des données de gestion : informations de contact, réclamations, demandes
                d&apos;information.
              </li>
            </ul>
            <p className="text-body-md tracking-[-0.32px] text-body leading-relaxed">
              Certaines données sont collectées automatiquement du fait de vos actions sur le site. En
              effet, s&apos;agissant du site Internet https://allianceactionsafrique.com/ la nature et
              la quantité de données personnelles que nous collectons dépendent de la manière dont vous
              les utilisez.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-heading-md font-bold text-dark">
              A quelles fins sont utilisées vos données ?
            </h2>
            <p className="text-body-md tracking-[-0.32px] text-body leading-relaxed">
              Les informations vous concernant servent exclusivement à :
            </p>
            <ul className="list-disc space-y-2 pl-6 text-body-md tracking-[-0.32px] text-body leading-relaxed">
              <li>
                Vous permettre de vous engager à nos côtés à travers des appels à votre générosité.
              </li>
              <li>
                Répondre à vos demandes d&apos;information sur notre mission, nos campagnes, nos
                projets, nos partenariats.
              </li>
              <li>
                Vous transmettre notre communication institutionnelle et externe (brochures,
                newsletter, etc.)
              </li>
              <li>
                Assurer la gestion de la relation donateur, bénévole et partenaire ainsi que celle des
                potentiels donateurs et partenaires ;
              </li>
              <li>
                Recueillir les données à des fins statistiques et d&apos;amélioration de la qualité de
                service.
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-heading-md font-bold text-dark">
              Quelles sont les personnes ayant accès à vos données ?
            </h2>
            <p className="text-body-md tracking-[-0.32px] text-body leading-relaxed">
              L&apos;accès à vos données personnelles est limité aux services d&apos;Alliance Actions
              Afrique et aux tiers mandatés par Alliance Actions Afrique pour mener à bien le
              traitement. Ces tiers sont scrupuleusement sélectionnés par Alliance Actions Afrique et
              contractuellement tenus de garantir des conditions de sécurité et de protection de vos
              données à caractère personnel telles que prévues par la réglementation française et
              européenne.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-heading-md font-bold text-dark">
              Combien de temps vos données sont-elles conservées ?
            </h2>
            <p className="text-body-md tracking-[-0.32px] text-body leading-relaxed">
              Nous conservons vos données personnelles pendant la durée strictement nécessaires aux
              finalités pour lesquelles elles sont collectées.
            </p>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-heading-md font-bold text-dark">
              Sur quels fondements juridiques repose le traitement de vos données ?
            </h2>
            <p className="text-body-md tracking-[-0.32px] text-body leading-relaxed">
              Le traitement de vos données personnelles est justifié par différents fondements
              juridiques (bases légales) en fonction de l&apos;usage que l&apos;association fait de vos
              données personnelles.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-left text-body-md text-body">
                <thead>
                  <tr className="border-b border-dark/20">
                    <th className="py-3 pr-4 font-bold text-dark">Finalité du traitement</th>
                    <th className="py-3 font-bold text-dark">Fondement juridique</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-dark/10 align-top">
                    <td className="py-3 pr-4">
                      Instruire les demandes et les questions des donateurs ou partenaires potentiels
                    </td>
                    <td className="py-3">
                      Intérêt légitime d&apos;Alliance Actions Afrique à proposer à ses donateurs un
                      espace dédié à répondre à toutes leurs questions et demandes
                    </td>
                  </tr>
                  <tr className="align-top">
                    <td className="py-3 pr-4">Envoi de newsletters et de courriers d&apos;appel à don</td>
                    <td className="py-3">Intérêt légitime / consentement selon le cas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-heading-md font-bold text-primary">
              Droits d&apos;auteur – droits de reproduction
            </h2>
            <p className="text-body-md tracking-[-0.32px] text-body leading-relaxed">
              L&apos;ensemble de ce site relève de la législation française et internationale sur le
              droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont
              réservés, y compris les représentations iconographiques et photographiques. La
              reproduction de tout ou partie de ce site sur un support quel qu&apos;il soit, est
              formellement interdite sauf autorisation expresse du responsable du site. La
              reproduction des textes sur un support papier est autorisée dans le cadre pédagogique,
              sous réserve du respect des trois conditions suivantes :
            </p>
            <ul className="list-disc space-y-2 pl-6 text-body-md tracking-[-0.32px] text-body leading-relaxed">
              <li>gratuité de la diffusion</li>
              <li>
                respect de l&apos;intégrité des documents reproduits (pas de modification ni
                altération)
              </li>
              <li>
                citation claire et lisible de la source sous la forme suivante : « Document issu du
                site Internet d&apos;Alliance Actions Afrique,{' '}
                {/* <a
                  href="https://allianceactionsafrique.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2 hover:text-primary-hover"
                >
                  https://allianceactionsafrique.com/
                </a> */}
                ».
              </li>
            </ul>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className="text-heading-md font-bold text-primary">Mentions légales</h2>
            <p className="text-body-md tracking-[-0.32px] text-body leading-relaxed">
              Mentions légales réglementées par la Loi n° 2004-575 du 21 juin 2004 pour la confiance
              dans l&apos;économie numérique.
            </p>
          </section>
        </div>
      </section>
    </div>
  )
}
