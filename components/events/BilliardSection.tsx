"use client";

import { motion, useReducedMotion } from "motion/react";

export default function BilliardSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative grid overflow-hidden bg-[#6c122b] text-[#f4e9dc] md:min-h-[650px] md:grid-cols-[1.05fr_0.95fr]">
      {/* PHOTOGRAPHIE */}
      <motion.div
        className="group relative min-h-[360px] overflow-hidden sm:min-h-[460px] md:min-h-full"
        initial={reduceMotion ? false : { opacity: 0, x: -18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src="/images/billard/hero-billard.png"
          alt="Table de billard dans l'ambiance tamisée de MY PUB"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#151411]/45 via-transparent to-black/10" />

        {/* Légende photographique */}
        <div className="absolute bottom-7 left-7 flex items-center gap-3 sm:bottom-9 sm:left-9">
          <span className="h-px w-8 bg-[#c17a3d]" />
          <span className="text-[9px] uppercase tracking-[0.25em] text-[#f4e9dc]/90">
            MY PUB · Rouen
          </span>
        </div>
      </motion.div>

      {/* BLOC ÉDITORIAL */}
      <motion.div
        className="relative flex flex-col justify-center px-7 py-16 sm:px-12 sm:py-20 md:px-10 lg:px-[12%] lg:py-24"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.85,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Texture légère */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.09] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.4'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-8 bg-[#c17a3d]" />
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#f4e9dc]/75 sm:text-[10px]">
              Une autre façon de se retrouver
            </p>
          </div>

          <h2 className="font-['Bodoni_Moda'] text-[clamp(3.4rem,5.4vw,6rem)] font-normal leading-[0.88] tracking-[-0.055em] text-[#f4e9dc]">
            La partie
            <br />
            <span className="text-[#e4b88e]">vous attend.</span>
          </h2>

          <div className="my-8 h-px w-12 bg-[#c17a3d]" />

          <div className="max-w-md space-y-4 text-sm leading-7 text-[#f4e9dc]/85 sm:text-base sm:leading-8">
            <p>
              Une table, quelques billes et ce petit esprit de compétition
              qui transforme une soirée ordinaire.
            </p>

            <p>
              On vient pour jouer, on reste pour l'ambiance. À vous de
              choisir votre équipe, de lancer le défi et de faire durer
              le moment.
            </p>
          </div>

          <a
            href="#evenements"
            className="group mt-9 inline-flex w-fit items-center gap-5 border-b border-[#f4e9dc]/40 pb-3 text-[9px] uppercase tracking-[0.23em] text-[#f4e9dc] transition-colors duration-300 hover:border-[#e4b88e] hover:text-[#e4b88e] sm:text-[10px]"
          >
            Les rendez-vous à venir
            <span className="text-base text-[#e4b88e] transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>

        {/* Numéro éditorial */}
        <div className="relative mt-14 flex items-center gap-4 border-t border-[#f4e9dc]/20 pt-5">
          <span className="font-['Bodoni_Moda'] text-2xl text-[#e4b88e]">
            01
          </span>
          <span className="text-[9px] uppercase tracking-[0.24em] text-[#f4e9dc]/55">
            L'univers du billard
          </span>
        </div>
      </motion.div>
    </section>
  );
}