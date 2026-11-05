import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "Objet",
    content: (
      <>
        <p>
          Les présentes Conditions Générales d’Utilisation ont pour objet de
          définir les règles d’accès et d’utilisation du site internet de MY
          PUB, accessible à l’adresse mypub-rouen.com.
        </p>

        <p>
          Le site présente notamment l’établissement MY PUB, ses services, son
          univers, ses activités, ses événements ainsi que les différents
          moyens de contacter l’établissement.
        </p>

        <p>
          L’accès et l’utilisation du site impliquent l’acceptation des
          présentes conditions par l’utilisateur.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "Accès au site",
    content: (
      <>
        <p>
          Le site est accessible gratuitement à tout utilisateur disposant
          d’un accès à Internet.
        </p>

        <p>
          MY PUB s’efforce de maintenir le site accessible et de fournir des
          informations fiables et actualisées. Toutefois, l’accès au site
          peut être temporairement interrompu notamment pour des raisons de
          maintenance, de mise à jour ou de contraintes techniques.
        </p>

        <p>
          MY PUB ne peut être tenue responsable des interruptions ou
          dysfonctionnements indépendants de sa volonté.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Informations présentées",
    content: (
      <>
        <p>
          Les informations présentes sur le site sont communiquées à titre
          informatif et peuvent évoluer en fonction de l’activité de
          l’établissement.
        </p>

        <p>
          Les horaires, prestations, événements, tarifs, disponibilités,
          menus et autres informations pratiques sont susceptibles d’être
          modifiés.
        </p>

        <p>
          Pour toute information précise concernant une réservation, un
          événement ou une prestation, l’utilisateur est invité à contacter
          directement MY PUB.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Réservations",
    content: (
      <>
        <p>
          Certaines prestations proposées par MY PUB peuvent être accessibles
          sur réservation.
        </p>

        <p>
          Une demande effectuée via le site ou par tout autre moyen de contact
          ne vaut pas nécessairement confirmation définitive de la
          réservation.
        </p>

        <p>
          Les modalités applicables à chaque réservation peuvent dépendre de
          la prestation concernée, de la date, du nombre de personnes et des
          conditions communiquées par l’établissement au moment de la demande.
        </p>

        <p>
          En cas de doute, l’utilisateur doit se rapprocher directement de
          MY PUB afin de confirmer les conditions applicables à sa réservation.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Comportement des utilisateurs",
    content: (
      <>
        <p>
          L’utilisateur s’engage à utiliser le site de manière loyale,
          responsable et conforme aux lois et règlements en vigueur.
        </p>

        <p>
          Il est notamment interdit d’utiliser le site à des fins
          frauduleuses, de tenter d’en perturber le fonctionnement ou
          d’accéder sans autorisation à des données, systèmes ou espaces qui
          ne lui sont pas destinés.
        </p>

        <p>
          Toute utilisation susceptible de porter atteinte au fonctionnement
          du site, à MY PUB ou à des tiers pourra donner lieu aux mesures
          appropriées.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Propriété intellectuelle",
    content: (
      <>
        <p>
          L’ensemble des éléments présents sur le site, notamment les textes,
          photographies, images, logos, éléments graphiques, vidéos et
          contenus éditoriaux, est protégé par les dispositions relatives à
          la propriété intellectuelle.
        </p>

        <p>
          Sauf autorisation préalable et expresse, toute reproduction,
          représentation, modification, adaptation ou exploitation, totale ou
          partielle, des contenus du site est interdite.
        </p>

        <p>
          Le nom, le logo et l’identité visuelle de MY PUB ne peuvent être
          utilisés sans autorisation préalable.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Liens externes",
    content: (
      <>
        <p>
          Le site peut contenir des liens vers des sites ou services
          appartenant à des tiers.
        </p>

        <p>
          Ces liens sont proposés pour faciliter l’accès à certaines
          informations ou services. MY PUB ne contrôle pas nécessairement le
          contenu de ces sites et ne peut être tenue responsable de leur
          disponibilité ou de leurs pratiques.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Données personnelles",
    content: (
      <>
        <p>
          Certaines fonctionnalités du site peuvent conduire l’utilisateur à
          communiquer des données personnelles, notamment lorsqu’il contacte
          MY PUB.
        </p>

        <p>
          Les données personnelles sont traitées conformément à la
          réglementation applicable en matière de protection des données,
          notamment au Règlement Général sur la Protection des Données
          (RGPD).
        </p>

        <p>
          Pour connaître les modalités précises de traitement de vos données,
          nous vous invitons à consulter la politique de confidentialité
          applicable au site.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "Responsabilité",
    content: (
      <>
        <p>
          MY PUB met en œuvre des moyens raisonnables afin d’assurer
          l’exactitude et la disponibilité des informations publiées sur le
          site.
        </p>

        <p>
          Toutefois, MY PUB ne garantit pas que l’ensemble des informations
          soit exempt d’erreurs, complet ou constamment à jour.
        </p>

        <p>
          L’utilisateur demeure responsable de l’utilisation qu’il fait des
          informations disponibles sur le site.
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "Modification des conditions",
    content: (
      <>
        <p>
          MY PUB peut modifier les présentes Conditions Générales
          d’Utilisation afin de tenir compte de l’évolution du site, de son
          activité ou de la réglementation applicable.
        </p>

        <p>
          La version publiée sur le site est celle applicable à compter de sa
          mise en ligne.
        </p>
      </>
    ),
  },
  {
    number: "11",
    title: "Droit applicable",
    content: (
      <>
        <p>
          Les présentes conditions sont soumises au droit français.
        </p>

        <p>
          En cas de différend, les parties sont invitées à rechercher
          prioritairement une solution amiable avant toute démarche
          contentieuse, sous réserve des dispositions légales applicables.
        </p>
      </>
    ),
  },
];

export default function ConditionsGeneralesUtilisationPage() {
  return (
    <main className="min-h-screen bg-[#0b0a09] text-[#f0e8da]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#741633] px-6 pb-24 pt-32 sm:px-10 md:px-16 lg:px-24 lg:pb-32 lg:pt-40">
        {/* Ligne décorative */}
        <div className="absolute left-0 top-0 h-full w-px bg-[#c17a3d]/40" />

        {/* Accent */}
        <div className="absolute right-[8%] top-20 hidden h-px w-32 bg-[#c17a3d] md:block" />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-8 text-[9px] uppercase tracking-[0.4em] text-[#c17a3d] md:text-[10px]">
            Informations
          </p>

          <h1 className="max-w-5xl font-['Bodoni_Moda'] text-5xl font-normal leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-8xl lg:text-[9rem]">
            Conditions
            <br />
            <span className="italic text-[#f0e8da]/80">
              générales.
            </span>
          </h1>

          <div className="mt-12 flex max-w-xl items-start gap-5 border-l border-[#c17a3d] pl-5">
            <p className="text-xs leading-6 text-[#f0e8da]/70 sm:text-sm sm:leading-7">
              Les règles d’utilisation du site MY PUB et les informations
              relatives à son fonctionnement.
            </p>
          </div>
        </div>
      </section>

      {/* CONTENU */}
      <section className="px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-24">
        <div className="mx-auto max-w-6xl">

          {/* INTRO */}
          <div className="mb-20 grid gap-10 border-b border-[#f0e8da]/10 pb-16 md:grid-cols-[180px_1fr]">
            <div>
              <span className="text-[9px] uppercase tracking-[0.35em] text-[#c17a3d]">
                MY PUB
              </span>
            </div>

            <div className="max-w-3xl">
              <h2 className="font-['Bodoni_Moda'] text-3xl font-normal leading-tight sm:text-4xl">
                Un site pensé pour vous guider.
              </h2>

              <p className="mt-6 text-sm leading-7 text-[#f0e8da]/65">
                Ces conditions définissent les principales règles applicables
                à l’utilisation du site internet de MY PUB.
              </p>
            </div>
          </div>

          {/* SECTIONS */}
          <div>
            {sections.map((section) => (
              <section
                key={section.number}
                className="
                  grid gap-8
                  border-b border-[#f0e8da]/10
                  py-12
                  md:grid-cols-[140px_260px_1fr]
                  md:gap-10
                  md:py-16
                "
              >
                {/* NUMÉRO */}
                <div>
                  <span className="font-['Bodoni_Moda'] text-4xl font-normal text-[#c17a3d]/80">
                    {section.number}
                  </span>
                </div>

                {/* TITRE */}
                <div>
                  <h2 className="font-['Bodoni_Moda'] text-2xl font-normal leading-tight sm:text-3xl">
                    {section.title}
                  </h2>
                </div>

                {/* TEXTE */}
                <div className="max-w-2xl space-y-5 text-xs leading-7 text-[#f0e8da]/60 sm:text-sm sm:leading-7">
                  {section.content}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-[#741633] px-6 py-20 sm:px-10 md:px-16 md:py-28 lg:px-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-end">

          <div>
            <p className="mb-5 text-[9px] uppercase tracking-[0.35em] text-[#c17a3d]">
              Une question ?
            </p>

            <h2 className="max-w-xl font-['Bodoni_Moda'] text-4xl font-normal leading-tight sm:text-5xl md:text-6xl">
              Parlons-en
              <br />
              <span className="italic">directement.</span>
            </h2>
          </div>

          <div className="md:justify-self-end">
            <p className="mb-6 max-w-sm text-xs leading-6 text-[#f0e8da]/65 sm:text-sm">
              Pour toute question concernant les conditions d’utilisation,
              les réservations ou les services proposés par MY PUB.
            </p>

            <a
              href="/contact"
              className="
                group
                inline-flex
                items-center
                gap-4
                border-b
                border-[#c17a3d]
                pb-3
                text-[9px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-[#f0e8da]
                transition-colors
                duration-300
                hover:text-[#c17a3d]
              "
            >
              <span>Nous contacter</span>

              <span
                aria-hidden="true"
                className="
                  text-base
                  text-[#c17a3d]
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              >
                ↗
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#f0e8da]/10 bg-[#0b0a09] px-6 py-8 sm:px-10 md:px-16 lg:px-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-[9px] uppercase tracking-[0.2em] text-[#f0e8da]/40 sm:flex-row sm:items-center sm:justify-between">

          <p>
  © 2026 MY PUB — Rouen
</p>

          <div className="flex flex-wrap gap-6">
            <Link
              href="/"
              className="transition-colors hover:text-[#c17a3d]"
            >
              Accueil
            </Link>

            <Link
              href="/mentions-legales"
              className="transition-colors hover:text-[#c17a3d]"
            >
              Mentions légales
            </Link>

            <Link
              href="/conditions-generales-utilisation"
              className="text-[#c17a3d]"
            >
              Conditions
            </Link>
          </div>

        </div>
      </footer>
    </main>
  );
}
