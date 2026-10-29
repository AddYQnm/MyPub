
"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function EventHero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[600px] w-full overflow-hidden bg-[#151411] text-[#f0e8da]"
    >
      <motion.div
        className="absolute inset-0"
        style={reduceMotion ? undefined : { y: imageY, scale: imageScale }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/Billard.png')" }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/35" />

     

      <motion.div
  className="absolute inset-x-0 top-10 z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center md:top-14"
  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1,
    delay: 0.2,
    ease: [0.22, 1, 0.36, 1],
  }}
>
  <p className="mb-3 text-[9px] uppercase tracking-[0.35em] text-white/80 md:text-[10px]">
    Rouen · France
  </p>

  <h1 className="font-serif text-6xl font-normal leading-[0.85] tracking-[-0.06em] text-[#c17a3d] sm:text-7xl md:text-9xl">
    MY PUB
  </h1>

  <p className="mt-5 max-w-sm text-xs leading-6 text-white/85 md:text-sm">
    Le billard, les rencontres et les soirées qui se prolongent.
  </p>
</motion.div>

      <div className="absolute bottom-7 left-6 z-10 text-[9px] uppercase tracking-[0.25em] text-white/65 md:bottom-10 md:left-12">
        Faites place au jeu
      </div>

      <a
        href="#event-intro"
        aria-label="Découvrir les événements"
        className="absolute bottom-7 right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-[#151411] md:bottom-10 md:right-12"
      >
        ↓
      </a>
    </section>
  );
}
