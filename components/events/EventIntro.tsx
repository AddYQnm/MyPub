"use client";

import { motion, useReducedMotion } from "motion/react";

const gallery = [
  {
    image: "/images/events/billard-1.jpg",
    alt: "Joueur en pleine partie de billard",
    caption: "Jouez pour le plaisir",
  },
  {
    image: "/images/events/billard-2.jpg",
    alt: "Boule de billard sur le tapis",
    caption: "Visez juste",
  },
  {
    image: "/images/events/billard-3.jpg",
    alt: "Tables de billard dans une ambiance chaleureuse",
    caption: "Profitez du lieu",
  },
  {
    image: "/images/events/billard-4.jpg",
    alt: "Préparation d'une partie de billard",
    caption: "Relevez le défi",
  },
  {
    image: "/images/events/billard-5.jpg",
    alt: "Amis réunis autour d'une table de billard",
    caption: "Partagez le moment",
  },
  {
    image: "/images/events/billard-6.jpg",
    alt: "Table de billard éclairée",
    caption: "Prolongez la soirée",
  },
];

export default function EventIntro() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="event-intro"
      className="scroll-mt-10 overflow-hidden bg-[#0b0a09] text-[#f0e8da]"
    >
      {/* Texte central */}
      <motion.div
        className="mx-auto flex max-w-4xl flex-col items-center px-6 pb-16 pt-20 text-center md:pb-20 md:pt-28"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <p className="mb-6 text-[9px] uppercase tracking-[0.4em] text-[#c17a3d] md:text-[10px]">
          L&apos;esprit MY PUB
        </p>

        <h2 className="max-w-3xl font-serif text-5xl font-normal uppercase leading-[0.95] tracking-[-0.045em] text-[#c17a3d] sm:text-6xl md:text-8xl">
          Bien plus
          <br />
          qu&apos;un billard
        </h2>

        <span
          aria-hidden="true"
          className="my-7 text-xl text-[#c17a3d]"
        >
          ✳
        </span>

        <div className="max-w-md space-y-4 text-xs leading-6 text-white/65 md:text-sm md:leading-7">
          <p>
            Un lieu pour les passionnés de jeu, les amateurs de belles
            soirées et tous ceux qui aiment se retrouver autour d&apos;une table.
          </p>

          <p>
            Ici, les parties s&apos;enchaînent, les rencontres se créent et
            chaque moment devient une occasion de partager quelque chose.
          </p>
        </div>
      </motion.div>

      {/* Galerie de photos */}
      <motion.div
        className="grid grid-cols-2 gap-[5px] px-[5px] sm:grid-cols-3 lg:grid-cols-6"
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {gallery.map((item, index) => (
          <figure key={item.image} className="group min-w-0">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#201b17] sm:aspect-[3/4] lg:aspect-[2/3]">
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />
            </div>

            <figcaption className="flex min-h-12 items-center px-2 py-3 text-[9px] leading-4 text-white/60 sm:text-[10px]">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </motion.div>
    </section>
  );
}