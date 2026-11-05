
"use client";

import { motion, useReducedMotion } from "motion/react";

const gallery = [
  {
    image: "/images/billard/billard-1.jpg",
    alt: "Joueur en pleine partie de billard",
    caption: "01",
    width: "w-[280px] sm:w-[340px] lg:w-[390px]",
  },
  {
    image: "/images/billard/billard-2.jpg",
    alt: "Boule et queue de billard sur le tapis",
    caption: "02",
    width: "w-[280px] sm:w-[340px] lg:w-[390px]",
  },
  {
    image: "/images/billard/billard-3.jpg",
    alt: "Espace billard dans une ambiance chaleureuse",
    caption: "03",
    width: "w-[340px] sm:w-[430px] lg:w-[500px]",
  },
  {
    image: "/images/billard/billard-4.jpg",
    alt: "Préparation d'une partie de billard",
    caption: "04",
    width: "w-[280px] sm:w-[340px] lg:w-[390px]",
  },
  {
    image: "/images/billard/billard-5.jpg",
    alt: "Joueuse de billard dans une ambiance conviviale",
    caption: "05",
    width: "w-[280px] sm:w-[340px] lg:w-[390px]",
  },
  {
    image: "/images/billard/billard-6.jpg",
    alt: "Table de billard éclairée",
    caption: "06",
    width: "w-[280px] sm:w-[340px] lg:w-[390px]",
  },
];

export default function EventIntro() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="event-intro"
      className="overflow-hidden bg-[#0b0a09] text-[#f4e9dc]"
    >
      {/* INTRODUCTION */}
      <motion.div
        className="relative overflow-hidden bg-[#6c122b] px-6 py-24 sm:px-10 md:px-16 md:py-32 lg:px-[9%] lg:py-40"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Grain */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.1] mix-blend-soft-light"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.4'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
            {/* TITRE */}
            <div className="lg:col-span-7">
              <motion.p
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-7 text-[9px] uppercase tracking-[0.32em] text-[#f4e9dc]/65"
              >
                L&apos;esprit du billard
              </motion.p>

              <div className="overflow-hidden">
                <motion.h2
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: "100%",
                        }
                  }
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="font-['Bodoni_Moda'] text-[clamp(4rem,8vw,8.5rem)] font-normal leading-[0.82] tracking-[-0.065em]"
                >
                  Le plaisir
                  <br />
                  <span className="italic text-[#e4b88e]">
                    du jeu.
                  </span>
                </motion.h2>
              </div>
            </div>

            {/* TEXTE */}
            <motion.div
              className="max-w-md lg:col-span-4 lg:col-start-9"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
            >
              <p className="text-sm leading-7 text-[#f4e9dc]/80 sm:text-base sm:leading-8">
                Une table, quelques billes et le plaisir de prendre son
                temps. Au MY PUB, le billard se joue comme on aime :
                entre amis, autour d&apos;un verre et dans une ambiance qui
                invite à rester.
              </p>

              <div className="mt-8 h-px w-14 bg-[#c17a3d]" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* GALERIE */}
      <div className="bg-[#0b0a09] py-20 md:py-28">
        <div className="mb-10 px-6 sm:px-10 lg:px-[9%]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-['Bodoni_Moda'] text-2xl italic text-[#c17a3d] sm:text-3xl">
              Quelques instants.
            </p>
          </motion.div>
        </div>

        <motion.div
          role="region"
          aria-label="Galerie photos du billard chez MY PUB"
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain px-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-10 lg:px-[9%]"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          {gallery.map((item, index) => (
            <motion.figure
              key={item.image}
              className={`group flex-none snap-start ${item.width}`}
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 20,
                    }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
                delay: reduceMotion ? 0 : index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#201b17]">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading={index < 2 ? "eager" : "lazy"}
                  draggable={false}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60" />

                <span className="absolute bottom-4 left-4 font-['Bodoni_Moda'] text-sm italic text-[#f4e9dc]/80">
                  {item.caption}
                </span>
              </div>
            </motion.figure>
          ))}
        </motion.div>

        {/* INDICATION MOBILE */}
        <div className="mt-8 flex items-center justify-center gap-3 text-[9px] uppercase tracking-[0.22em] text-[#f4e9dc]/35 sm:hidden">
          <span className="text-[#c17a3d]">←</span>
          Faites défiler
          <span className="text-[#c17a3d]">→</span>
        </div>
      </div>
    </section>
  );
}
