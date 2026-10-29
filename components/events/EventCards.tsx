"use client";

import { motion, useReducedMotion } from "motion/react";

const events = [
  {
    number: "01",
    title: "Entre amis",
    description: "Se retrouver autour d'une partie et prolonger la soirée.",
    image: "/images/hero-billard.png",
    position: "md:col-span-1",
  },
  {
    number: "02",
    title: "Anniversaires",
    description: "Partager une occasion spéciale dans une ambiance conviviale.",
    image: "/images/hero-billard.png",
    position: "md:col-span-2",
  },
  {
    number: "03",
    title: "Événements privés",
    description: "Parlons ensemble de votre projet et de vos envies.",
    image: "/images/hero-billard.png",
    position: "md:col-span-2",
  },
  {
    number: "04",
    title: "Événements d'entreprise",
    description: "Rassemblez vos équipes autour d'un moment différent.",
    image: "/images/hero-billard.png",
    position: "md:col-span-1",
  },
];

export default function EventCards() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="evenements"
      className="overflow-hidden bg-[#0b0a09] px-4 py-20 text-[#f0e8da] sm:px-6 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* En-tête */}
        <motion.div
          className="mb-12 max-w-3xl md:mb-16"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 text-[9px] uppercase tracking-[0.35em] text-[#c17a3d] md:text-[10px]">
            Vos occasions
          </p>

          <h2 className="font-['Bodoni_Moda'] text-5xl font-normal leading-[0.98] tracking-[-0.04em] sm:text-6xl md:text-8xl">
            Une bonne raison
            <br />
            <span className="italic text-[#c17a3d]">
              de se retrouver.
            </span>
          </h2>
        </motion.div>

        {/* Grille asymétrique */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
          {events.map((event, index) => (
            <motion.article
              key={event.number}
              className={`group relative min-w-0 overflow-hidden bg-[#201b17] ${event.position}`}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
            >
              <div className="relative h-[280px] overflow-hidden sm:h-[320px] md:h-[350px]">
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/10 transition-opacity duration-500 group-hover:from-black/75" />

                <span className="absolute left-5 top-5 text-[10px] tracking-[0.25em] text-white/75">
                  {event.number}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className="font-['Bodoni_Moda'] text-3xl font-normal leading-tight sm:text-4xl">
                    {event.title}
                  </h3>

                  <p className="mt-2 max-w-sm text-xs leading-6 text-white/75 sm:text-sm">
                    {event.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-5 inline-flex min-h-10 items-center justify-center bg-[#f0e8da] px-5 py-2 text-[10px] font-medium tracking-wide text-[#151411] transition-colors duration-300 hover:bg-[#c17a3d] hover:text-white"
                  >
                    Nous contacter
                    <span className="ml-3" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}