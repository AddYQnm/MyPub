"use client";

import { motion, useReducedMotion } from "motion/react";

export default function BilliardSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="grid overflow-hidden bg-[#080706] text-[#f0e8da] md:min-h-[650px] md:grid-cols-2">
      {/* PHOTO */}
      <motion.div
        className="relative min-h-[340px] overflow-hidden sm:min-h-[440px] md:min-h-full"
        initial={reduceMotion ? false : { opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <img
          src="/images/hero-billard.png"
          alt="Table de billard dans une ambiance tamisée"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      {/* TEXTE */}
      <motion.div
        className="flex flex-col items-center justify-center px-7 py-16 text-center sm:px-12 sm:py-20 md:px-10 lg:px-16"
        initial={reduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      >
        <p className="mb-7 text-[9px] uppercase tracking-[0.32em] text-[#b96b2d] sm:text-[10px]">
          L&apos;univers MY PUB
        </p>

        <h2 className="font-['Bodoni_Moda'] text-5xl font-normal uppercase leading-[0.95] tracking-[-0.045em] text-[#b96b2d] sm:text-6xl lg:text-7xl">
          Bien plus
          <span className="mt-2 block">qu&apos;un billard</span>
        </h2>

        <div
          aria-hidden="true"
          className="my-8 text-xl text-[#b96b2d]"
        >
          ✦
        </div>

        <div className="max-w-md space-y-4 text-[11px] leading-[1.9] text-[#f0e8da]/65 sm:text-xs sm:leading-7">
          <p>
            Retrouvez-vous autour de la table, lancez la partie et
            profitez d&apos;un moment hors du temps.
          </p>

          <p>
            Entre amis ou pour faire de nouvelles rencontres, MY PUB
            vous accueille dans une atmosphère chaleureuse où le jeu
            et la convivialité se retrouvent.
          </p>
        </div>

        <a
          href="#evenements"
          className="group mt-9 inline-flex items-center gap-4 border-b border-[#b96b2d]/60 pb-3 text-[9px] uppercase tracking-[0.22em] text-[#f0e8da]/80 transition-colors duration-300 hover:border-[#b96b2d] hover:text-[#b96b2d] sm:text-[10px]"
        >
          Découvrir nos événements
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            ↗
          </span>
        </a>
      </motion.div>
    </section>
  );
}
