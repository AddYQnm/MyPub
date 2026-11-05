
"use client";

import { motion, useReducedMotion } from "motion/react";
import Button from "@/components/ui/Button";

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="accueil"
      className="hero-screen relative isolate flex min-h-[100svh] flex-col items-center justify-between overflow-hidden bg-[#080706] px-6 py-12 text-[#f0e8da] sm:px-10"
    >
      {/* Lumière d'ambiance */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_45%,rgba(150,76,32,0.18),transparent_60%)]"
        initial={reduceMotion ? false : { opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Titre */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center">
        <h1 className="font-['Bodoni_Moda'] text-[clamp(4rem,12.5vw,11rem)] font-normal uppercase leading-[0.8] tracking-[-0.065em]">
          <motion.span
            className="block"
            initial={reduceMotion ? false : { opacity: 0, y: 35, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            Moments
          </motion.span>

          <motion.span
            className="mt-4 block text-[#c17a3d]"
            initial={reduceMotion ? false : { opacity: 0, y: 35, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.45 }}
          >
            That Stay
          </motion.span>
        </h1>

        <motion.div
          aria-hidden="true"
          className="mt-8 h-px bg-[#c17a3d]/70"
          initial={reduceMotion ? false : { width: 0 }}
          animate={{ width: 48 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        />
      </div>

      {/* Texte et bouton */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-7 pb-8 text-center"
        initial={reduceMotion ? false : { opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <p className="max-w-md text-xs leading-7 text-white/65 sm:text-sm">
          Un verre entre amis, une table à partager,
          <br className="hidden sm:block" />
          et l’envie de faire durer la soirée.
        </p>

        <Button href="#carte" variant="outline">
          DÉCOUVRIR MY PUB <span>↗</span>
        </Button>
      </motion.div>

      {/* Ligne de défilement */}
      <div
        className="absolute bottom-0 left-1/2 flex -translate-x-1/2 flex-col items-center"
        aria-hidden="true"
      >
        <div className="relative h-9 w-px overflow-hidden bg-white/15">
          <motion.div
            className="absolute top-0 h-4 w-px bg-[#c17a3d]"
            animate={reduceMotion ? undefined : { y: [0, 36, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </section>
  );
}
