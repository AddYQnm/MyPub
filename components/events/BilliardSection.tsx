
"use client";

import { motion, useReducedMotion } from "motion/react";

export default function BilliardSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="grid bg-[#1b1818] text-[#f0e8da] md:min-h-[650px] md:grid-cols-2">
      <motion.div
        className="relative min-h-[380px] overflow-hidden md:min-h-full"
        initial={reduceMotion ? false : { opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/images/hero-billard.png"
          alt="Table de billard dans une ambiance tamisée"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-black/15" />
      </motion.div>

      <motion.div
        className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-20"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-[#d18a9d]">
          À vous de jouer
        </p>

        <h2 className="font-serif text-5xl leading-tight md:text-6xl">
          L'expérience
          <br />
          <span className="italic text-[#d18a9d]">billard.</span>
        </h2>

        <p className="mt-7 max-w-md text-sm leading-8 text-white/65">
          Retrouvez-vous autour de la table, lancez la partie et profitez
          de l'atmosphère du lieu.
        </p>

        <a
          href="#evenements"
          className="group mt-9 inline-flex w-fit items-center gap-5 border border-[#6c122b] px-6 py-4 text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-[#6c122b]"
        >
          Découvrir nos événements
          <span className="transition-transform group-hover:translate-x-1">
            ↗
          </span>
        </a>
      </motion.div>
    </section>
  );
}
