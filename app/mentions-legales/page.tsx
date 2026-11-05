import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import Link from "next/link";

const legalSections = [
  {
    number: "01",
    title: "Édition du site",
    content: (
      <>
        <p>
          Le présent site, accessible à l’adresse{" "}
          <a
            href="https://mypub-rouen.com/"
            target="_blank"
            rel="noreferrer"
          >
            mypub-rouen.com
          </a>
          , est édité par :
        </p>

        <div className="mt-7 border-l border-[#c17a3d]/50 pl-5">
          <p className="font-medium text-[#f0e8da]">
            Mindset Marketing
          </p>

          <p className="mt-3">
            Société au capital de 15 000 euros, inscrite au R.C.S. de
            Paris sous le numéro <strong>921 575 163</strong>.
          </p>

          <p className="mt-2">
            Siège social : 47 BD DE COURCELLES, 75008 PARIS.
          </p>

          <p className="mt-2">
            Représentée par <strong>Bastien Beranger</strong>, dûment
            habilité.
          </p>

          <p className="mt-2">
            Numéro individuel de TVA : <strong>FR73921575163</strong>.
          </p>
        </div>
      </>
    ),
  },
  {
    number: "02",
    title: "Hébergement",
    content: (
      <>
        <p>
          Le site est hébergé par la société :
        </p>

        <div className="mt-6 border-l border-[#c17a3d]/50 pl-5">
          <p className="font-medium text-[#f0e8da]">
            Webstrator
          </p>

          <p className="mt-3">
            141 avenue de Lavaur
            <br />
            81100 Castres
          </p>

          <a
            href="mailto:contact@webstrator.com"
            className="
              mt-4
              inline-block
              text-[#c17a3d]
              transition-colors
              hover:text-[#f0e8da]
            "
          >
            contact@webstrator.com
          </a>
        </div>
      </>
    ),
  },
  {
    number: "03",
    title: "Direction de la publication",
    content: (
      <p>
        La directrice de la publication du site est{" "}
        <strong>Myriam FLAHAUT</strong>.
      </p>
    ),
  },
  {
    number: "04",
    title: "Nous contacter",
    content: (
      <>
        <p>
          Pour toute demande concernant MY PUB ou le présent site,
          vous pouvez nous contacter directement.
        </p>

        <div className="mt-7 space-y-4">
          <a
            href="tel:+33259229876"
            className="
              group
              flex
              w-fit
              items-center
              gap-4
              text-[#f0e8da]
              transition-colors
              hover:text-[#c17a3d]
            "
          >
            <span className="text-[10px] uppercase tracking-[0.18em] text-[#c17a3d]">
              Téléphone
            </span>

            <span>02 59 22 98 76</span>
          </a>

          <a
            href="mailto:contact@mypub-rouen.com"
            className="
              group
              flex
              w-fit
              flex-wrap
              items-center
              gap-4
              text-[#f0e8da]
              transition-colors
              hover:text-[#c17a3d]
            "
          >
            <span className="text-[10px] uppercase tracking-[0.18em] text-[#c17a3d]">
              Email
            </span>

            <span>contact@mypub-rouen.com</span>
          </a>
        </div>
      </>
    ),
  },
  {
    number: "05",
    title: "Données personnelles",
    content: (
      <>
        <p>
          Le traitement de vos données à caractère personnel est régi
          par notre Charte du respect de la vie privée, conformément
          au Règlement Général sur la Protection des Données
          2016/679 du 27 avril 2016 (« RGPD »).
        </p>

        <p className="mt-5">
          Les modalités détaillées relatives à la collecte, au
          traitement et à la conservation des données personnelles
          sont présentées dans la politique de confidentialité du
          site.
        </p>
      </>
    ),
  },
];

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0b0a09] text-[#f0e8da]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section
        className="
          relative
          min-h-[72vh]
          overflow-hidden
          bg-[#741633]
          px-6
          pb-16
          pt-24
          sm:px-8
          md:min-h-[78vh]
          md:px-12
          md:pt-28
          lg:px-16
        "
      >
        <Header />

        {/* Cercles graphiques */}
        <div
          className="
            pointer-events-none
            absolute
            -right-[20%]
            -top-[35%]
            h-[80vw]
            w-[80vw]
            max-h-[1000px]
            max-w-[1000px]
            rounded-full
            border
            border-[#c17a3d]/20
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-[35%]
            left-[20%]
            h-[55vw]
            w-[55vw]
            max-h-[750px]
            max-w-[750px]
            rounded-full
            border
            border-[#f0e8da]/10
          "
        />

        {/* Grain */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.035]
            mix-blend-overlay
          "
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[65vh] max-w-[1440px] flex-col justify-end">
          {/* Label */}
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-10 bg-[#c9a56b]" />

            <p className="text-[9px] uppercase tracking-[0.3em] text-[#f0e8da]/70">
              MY PUB — ROUEN
            </p>
          </div>

          {/* Titre */}
          <div className="grid items-end gap-10 lg:grid-cols-[1fr_300px]">
            <h1
              className="
                font-[var(--font-bodoni)]
                text-[clamp(3.5rem,10vw,9rem)]
                font-normal
                leading-[0.82]
                tracking-[-0.055em]
              "
            >
              Mentions
              <br />
              <span className="italic text-[#c9a56b]">
                légales.
              </span>
            </h1>

            <p className="max-w-xs pb-2 text-xs leading-6 text-[#f0e8da]/60 md:text-sm">
              Informations relatives à l’édition, à l’hébergement
              et à l’utilisation du site MY PUB.
            </p>
          </div>

          {/* Ligne basse */}
          <div
            className="
              mt-16
              flex
              items-center
              justify-between
              border-t
              border-[#f0e8da]/15
              pt-5
            "
          >
            <span className="text-[9px] uppercase tracking-[0.25em] text-[#f0e8da]/40">
              Informations juridiques
            </span>

            <span className="text-[9px] tracking-[0.2em] text-[#c9a56b]">
              01 — 05
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTENU
      ========================================================= */}
      <section className="bg-[#0b0a09] px-6 py-20 sm:px-8 md:px-12 md:py-28 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-16 lg:grid-cols-[280px_1fr] lg:gap-24">
            {/* COLONNE GAUCHE */}
            <aside className="lg:sticky lg:top-10 lg:self-start">
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-[#c17a3d]" />

                <span className="text-[9px] uppercase tracking-[0.28em] text-[#c17a3d]">
                  Legal
                </span>
              </div>

              <h2
                className="
                  mt-6
                  max-w-xs
                  font-[var(--font-bodoni)]
                  text-4xl
                  font-normal
                  leading-[0.95]
                  tracking-[-0.03em]
                  md:text-5xl
                "
              >
                Informations
                <br />
                <span className="italic text-[#c17a3d]">
                  officielles.
                </span>
              </h2>

              <p className="mt-6 max-w-xs text-xs leading-6 text-[#f0e8da]/35">
                Les informations légales relatives au site
                mypub-rouen.com.
              </p>
            </aside>

            {/* SECTIONS */}
            <div className="max-w-3xl">
              {legalSections.map((section) => (
                <article
                  key={section.number}
                  className="
                    border-t
                    border-[#f0e8da]/12
                    py-10
                    first:pt-0
                    md:py-12
                  "
                >
                  <div className="grid gap-6 md:grid-cols-[70px_1fr] md:gap-8">
                    {/* NUMERO */}
                    <span className="pt-1 text-[9px] tracking-[0.2em] text-[#c17a3d]">
                      {section.number}
                    </span>

                    {/* CONTENU */}
                    <div>
                      <h3
                        className="
                          font-[var(--font-bodoni)]
                          text-3xl
                          font-normal
                          leading-tight
                          tracking-[-0.02em]
                          md:text-4xl
                        "
                      >
                        {section.title}
                      </h3>

                      <div
                        className="
                          mt-6
                          text-[13px]
                          leading-7
                          text-[#f0e8da]/60
                          md:text-sm
                          [&_a]:text-[#c17a3d]
                          [&_a:hover]:text-[#f0e8da]
                          [&_strong]:font-medium
                          [&_strong]:text-[#f0e8da]
                        "
                      >
                        {section.content}
                      </div>
                    </div>
                  </div>
                </article>
              ))}

              {/* ADRESSE */}
              <div
                className="
                  mt-8
                  border-t
                  border-[#f0e8da]/12
                  pt-10
                  md:pt-12
                "
              >
                <div className="grid gap-6 md:grid-cols-[70px_1fr] md:gap-8">
                  <span className="pt-1 text-[9px] tracking-[0.2em] text-[#c17a3d]">
                    06
                  </span>

                  <div>
                    <h3 className="font-[var(--font-bodoni)] text-3xl md:text-4xl">
                      MY PUB
                    </h3>

                    <p className="mt-6 text-sm leading-7 text-[#f0e8da]/60">
                      12 Place du Vieux Marché
                      <br />
                      76000 Rouen
                    </p>

                    <a
                      href="https://www.google.com/maps/search/?api=1&query=12+Place+du+Vieux+Marché+76000+Rouen"
                      target="_blank"
                      rel="noreferrer"
                      className="
                        mt-6
                        inline-flex
                        items-center
                        gap-3
                        border-b
                        border-[#c17a3d]/50
                        pb-2
                        text-[10px]
                        uppercase
                        tracking-[0.18em]
                        text-[#c17a3d]
                        transition-colors
                        hover:border-[#f0e8da]
                        hover:text-[#f0e8da]
                      "
                    >
                      Voir l&apos;adresse
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* NOTE */}
              <div className="mt-12 border border-[#c17a3d]/20 bg-[#141210] p-6 md:p-8">
                <div className="flex gap-4">
                  <span className="mt-1 text-[#c17a3d]">
                    ✦
                  </span>

                  <p className="text-xs leading-6 text-[#f0e8da]/40">
                    Ces informations correspondent aux mentions
                    légales actuellement publiées pour MY PUB. Toute
                    modification de l’exploitant, de l’hébergeur ou
                    des coordonnées devra être répercutée sur cette
                    page.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <footer className="border-t border-[#f0e8da]/10 bg-[#0b0a09] px-6 py-8 sm:px-8 md:px-12 lg:px-16">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="
              group
              inline-flex
              items-center
              gap-3
              text-[9px]
              uppercase
              tracking-[0.2em]
              text-[#f0e8da]/50
              transition-colors
              hover:text-[#f0e8da]
            "
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>

            Retour au site
          </Link>

          <p className="text-[9px] uppercase tracking-[0.16em] text-[#f0e8da]/30">
            Site conçu par{" "}
            <a
              href="https://devop360-neon.vercel.app/services"
              target="_blank"
              rel="noreferrer"
              className="
                text-[#c17a3d]
                transition-colors
                hover:text-[#f0e8da]
              "
            >
              DevOp360
            </a>
          </p>
        </div>
      </footer>
    </main>
  );
}