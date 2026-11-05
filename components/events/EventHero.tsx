
"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

export default function EventHero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.08]);

  return (
    <section
      ref={heroRef}
      className="relative isolate h-[100svh] min-h-[680px] w-full overflow-hidden bg-[#0b0a09] text-[#f4e9dc]"
    >
      {/* IMAGE */}
      <motion.div
        className="absolute -inset-[5%] will-change-transform"
        style={
          reduceMotion
            ? undefined
            : {
                y: imageY,
                scale: imageScale,
              }
        }
        initial={reduceMotion ? false : { scale: 1.08 }}
        animate={{ scale: reduceMotion ? 1 : 1.02 }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/Billard.png')",
          }}
        />
      </motion.div>

      {/* CONTRASTE */}
      <div className="absolute inset-0 bg-[#180b10]/25" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/55" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/20" />

      {/* VIGNETTE */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(8,6,6,0.48)_100%)]" />

      {/* GRAIN */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E\")",
        }}
      />

      {/* CADRE */}
      <div className="pointer-events-none absolute inset-5 border border-[#f4e9dc]/15 sm:inset-7 md:inset-9" />

      {/* TITRE CENTRAL */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6">
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={reduceMotion ? false : { opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mb-7 h-px w-10 bg-[#c17a3d]"
          />

          <div className="overflow-hidden px-2 py-3">
            <motion.h1
              initial={reduceMotion ? false : { y: "110%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.25,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="font-['Bodoni_Moda'] text-[clamp(4.8rem,14vw,13rem)] font-normal uppercase leading-[0.72] tracking-[-0.075em] text-[#f4e9dc]"
            >
              Billard
            </motion.h1>
          </div>

          <motion.span
            initial={reduceMotion ? false : { opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 h-px w-16 bg-[#c17a3d]"
          />
        </div>
      </div>
    </section>
  );
}
