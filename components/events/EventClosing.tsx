"use client";

import { motion, useReducedMotion } from "motion/react";

export default function EventClosing() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative flex min-h-[75vh] items-end overflow-hidden bg-[#151411] text-[#f0e8da] md:min-h-[90vh]"
      aria-label="L'expérience MY PUB"
    >
      {/* Image de fond */}
      <motion.div
        className="absolute inset-0"
        initial={reduceMotion ? false : { scale: 1.06 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <img
          src="/images/events/my-pub-club.jpg"
          alt="L'ambiance chaleureuse du MY PUB"
          className="h-full w-full object-cover object-center"
          loading="lazy"
        />
      </motion.div>

      {/* Voile sombre pour conserver une ambiance cinématographique */}
      <div className="absolute inset-0 bg-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/20" />

      {/* Texte en bas à droite */}
      <motion.div
        className="relative z-10 ml-auto w-full max-w-xl px-6 pb-12 sm:px-10 md:px-16 md:pb-16"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.9,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p className="mb-4 text-[9px] uppercase tracking-[0.35em] text-[#c17a3d] md:text-[10px]">
          L'expérience MY PUB
        </p>

        <h2 className="font-['Bodoni_Moda'] text-4xl font-normal leading-tight sm:text-5xl md:text-6xl">
          Bien plus qu'une partie.
        </h2>

        <p className="mt-5 max-w-md text-xs leading-6 text-white/75 sm:text-sm sm:leading-7">
          Du jeu, des rencontres et une atmosphère unique. Chez MY PUB,
          chaque visite devient un moment à part.
        </p>

        <a
          href="#evenements"
          className="mt-7 inline-flex items-center gap-4 border-b border-[#c17a3d]/70 pb-2 text-[10px] uppercase tracking-[0.2em] transition-colors hover:text-[#c17a3d]"
        >
          Vivez l'expérience
          <span aria-hidden="true">↗</span>
        </a>
      </motion.div>
    </section>
  );
}