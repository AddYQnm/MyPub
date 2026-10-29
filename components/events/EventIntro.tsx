"use client";

import { motion, useReducedMotion } from "motion/react";

const gallery = [
  {
    image: "/images/events/billard-1.jpg",
    alt: "Joueur en pleine partie de billard",
    caption: "Jouez pour le plaisir",
    width: "w-[250px] sm:w-[300px] lg:w-[320px]",
  },
  {
    image: "/images/events/billard-2.jpg",
    alt: "Boule et queue de billard sur le tapis",
    caption: "",
    width: "w-[250px] sm:w-[300px] lg:w-[320px]",
  },
  {
    image: "/images/events/billard-3.jpg",
    alt: "Espace billard dans une ambiance chaleureuse",
    caption: "Découvrez notre univers",
    width: "w-[310px] sm:w-[390px] lg:w-[430px]",
  },
  {
    image: "/images/events/billard-4.jpg",
    alt: "Préparation d'une partie de billard",
    caption: "",
    width: "w-[250px] sm:w-[300px] lg:w-[320px]",
  },
  {
    image: "/images/events/billard-5.jpg",
    alt: "Joueuse de billard dans une ambiance conviviale",
    caption: "",
    width: "w-[250px] sm:w-[300px] lg:w-[320px]",
  },
  {
    image: "/images/events/billard-6.jpg",
    alt: "Table de billard éclairée",
    caption: "Prolongez la soirée",
    width: "w-[250px] sm:w-[300px] lg:w-[320px]",
  },
];

export default function EventIntro() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="event-intro"
      className="overflow-hidden bg-[#080706] text-[#f0e8da]"
    >
      {/* INTRODUCTION */}
      <motion.div
        className="px-5 pb-10 pt-20 text-center sm:pb-12 sm:pt-24 lg:pb-14 lg:pt-28"
        initial={reduceMotion ? false : { opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Titre */}
        <h2 className="mx-auto font-['Bodoni_Moda'] text-[clamp(2.8rem,7vw,6.5rem)] font-normal uppercase leading-[0.88] tracking-[-0.055em] text-[#b96b2d]">
          <span className="block">Bien plus,</span>
          <span className="mt-2 block">qu&apos;un billard</span>
        </h2>

        {/* Ornement */}
        <div
          aria-hidden="true"
          className="my-8 text-xl font-light text-[#b96b2d] sm:my-9"
        >
          ✦
        </div>

        {/* Texte */}
        <div className="mx-auto max-w-[420px] space-y-3 text-[11px] leading-[1.65] text-[#e7ded3]/75 sm:max-w-[470px] sm:text-xs sm:leading-[1.8]">
          <p>
            Un lieu pensé pour ceux qui aiment se retrouver, partager une
            partie de billard et profiter d&apos;un moment hors du temps.
          </p>

          <p>
            Ici, le jeu rencontre une atmosphère chaleureuse, entre
            moments entre amis, défis improvisés et soirées qui se
            prolongent naturellement.
          </p>
        </div>
      </motion.div>

      {/* GALERIE PANORAMIQUE */}
      <motion.div
        role="region"
        aria-label="Galerie photos MY PUB"
        className="flex snap-x snap-mandatory gap-[5px] overflow-x-auto overscroll-x-contain px-0 pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.9 }}
      >
        {gallery.map((item, index) => (
          <figure
            key={item.image}
            className={`group min-w-0 flex-none snap-start ${item.width}`}
          >
            {/* Photo rectangulaire */}
            <div className="relative h-[210px] overflow-hidden bg-[#171310] sm:h-[245px] lg:h-[260px]">
              <img
                src={item.image}
                alt={item.alt}
                loading={index < 3 ? "eager" : "lazy"}
                draggable={false}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />

              <div className="pointer-events-none absolute inset-0 bg-black/[0.04] transition-colors duration-500 group-hover:bg-transparent" />
            </div>

            {/* Légende discrète */}
            <figcaption className="flex h-12 items-center px-3 text-[9px] tracking-wide text-[#d8cfc4]/65 sm:h-14 sm:px-4 sm:text-[10px]">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </motion.div>
    </section>
  );
}
