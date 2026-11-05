
"use client";

import { motion, useReducedMotion } from "motion/react";

const navigationLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Le bar", href: "#carte-bar" },
  { label: "Le restaurant", href: "#carte-restaurant" },
  { label: "L'ambiance", href: "#ambiance" },
  { label: "Contact", href: "https://mypub-rouen.com/contact" },
];

const informationLinks = [
{
  label: "Mentions légales",
  href: "/mentions-legales",
},
  {
    label: "Conditions générales d’utilisation",
    href: "/conditions",
  },
  {
    label: "Rouen Rive droite",
    href: "https://mypub-rouen.com/rouen-rive-droite/",
  },
  {
    label: "Rouen Rive gauche",
    href: "https://mypub-rouen.com/rouen-rive-gauche/",
  },
];

const contactLinks = [
  {
    label: "12 Place du Vieux Marché, 76000 Rouen",
    href: "https://maps.app.goo.gl/DnL8WvNSNpFSe6km9",
  },
  {
    label: "02 59 22 98 76",
    href: "tel:+33259229876",
  },
  {
    label: "Nous contacter",
    href: "https://mypub-rouen.com/contact",
  },
];

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080706] text-[#f0e8da]">
      {/* Lumière d'ambiance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-[#b96b2d]/[0.06] blur-[100px]"
      />

      <motion.div
        className="relative mx-auto max-w-[1600px] px-6 pb-8 pt-16 sm:px-10 sm:pt-20 lg:px-16 lg:pt-24"
        initial={reduceMotion ? false : { opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Partie supérieure */}
        <div className="grid gap-14 border-b border-white/10 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr] lg:gap-10 lg:pb-20">
          {/* Identité */}
          <div>
            <a
              href="#accueil"
              aria-label="MY PUB - Accueil"
              className="group inline-flex flex-col"
            >
              <span className="font-['Bodoni_Moda'] text-4xl tracking-[-0.04em] text-[#b96b2d] transition-colors duration-300 group-hover:text-[#d18a50] sm:text-5xl">
                MY PUB
              </span>

              <span className="mt-2 text-[9px] uppercase tracking-[0.32em] text-white/45">
                Rouen · France
              </span>
            </a>

            <p className="mt-7 max-w-xs text-sm leading-7 text-white/55">
              Un lieu pour se retrouver.
              <br />
              Des moments à partager.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h2 className="mb-6 text-[10px] uppercase tracking-[0.25em] text-[#b96b2d]">
              Navigation
            </h2>

            <nav
              aria-label="Navigation de pied de page"
              className="flex flex-col items-start gap-4"
            >
              {navigationLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.label}
                  className="group inline-flex items-center gap-2 text-sm text-white/65 transition-colors duration-300 hover:text-[#f0e8da]"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#b96b2d] opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    ↗
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* Informations */}
          <div>
            <h2 className="mb-6 text-[10px] uppercase tracking-[0.25em] text-[#b96b2d]">
              Informations
            </h2>

            <nav
              aria-label="Informations légales et établissements"
              className="flex flex-col items-start gap-4"
            >
              {informationLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.label}
                  className="text-sm leading-6 text-white/65 transition-colors duration-300 hover:text-[#f0e8da]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div id="contact">
            <h2 className="mb-6 text-[10px] uppercase tracking-[0.25em] text-[#b96b2d]">
              Nous contacter
            </h2>

            <div className="flex flex-col items-start gap-5">
              {contactLinks.map((link, index) => (
                <a
                  href={link.href}
                  key={link.label}
                  className="group flex items-start gap-3 text-sm leading-6 text-white/65 transition-colors duration-300 hover:text-[#f0e8da]"
                  {...(index === 0
                    ? {
                        target: "_blank",
                        rel: "noreferrer",
                      }
                    : {})}
                >
                  <span className="mt-1 text-xs text-[#b96b2d]">
                    {index === 0 ? "↗" : index === 1 ? "＋" : "→"}
                  </span>

                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Partie inférieure */}
        <div className="flex flex-col gap-4 pt-7 text-[9px] uppercase tracking-[0.15em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} MY PUB</span>

          <span>Rouen, France</span>

          <a
            href="#accueil"
            className="group inline-flex w-fit items-center gap-2 transition-colors hover:text-[#b96b2d]"
          >
            Retour en haut
            <span className="transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </span>
          </a>
        </div>
      </motion.div>
    </footer>
  );
}
