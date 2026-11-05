"use client";

import { motion, useReducedMotion } from "motion/react";

const events = [
  {
    number: "01",
    title: "Entre amis",
    description: "Se retrouver autour d'un verre et prolonger la soirée.",
    image: "/images/mypub/atmosphere-2.jpg",
    position: "md:col-span-1",
  },
  {
    number: "02",
    title: "Anniversaires",
    description: "Partager une occasion spéciale dans une ambiance conviviale.",
    image: "/images/mypub/visit-interior.jpg",
    position: "md:col-span-2",
  },
  {
    number: "03",
    title: "Des plats à partager",
    description:
      "Pour un moment gourmand et chaleureux entre amis ou en famille.",
    image: "/images/hero-mypub.jpg",
    position: "md:col-span-2",
  },
  {
    number: "04",
    title: "Réservations de groupe",
    description: "Rassemblez vos équipes autour d'un moment différent.",
    image: "/images/billard/hero-billard.png",
    position: "md:col-span-1",
  },
];

export default function EventCards() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="evenements"
      className="
        overflow-hidden
        bg-[#0b0a09]
        px-4
        py-20
        text-[#f0e8da]
        sm:px-6
        md:px-12
        md:py-28
      "
    >
      <div className="mx-auto max-w-7xl">
        {/* EN-TÊTE */}
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

          <h2
            className="
              font-['Bodoni_Moda']
              text-5xl
              font-normal
              leading-[0.98]
              tracking-[-0.04em]
              sm:text-6xl
              md:text-8xl
            "
          >
            Une bonne raison
            <br />
            <span className="italic text-[#c17a3d]">
              de se retrouver.
            </span>
          </h2>
        </motion.div>

        {/* GRILLE */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
          {events.map((event, index) => (
            <motion.article
              key={event.number}
              className={`
                group
                relative
                min-w-0
                overflow-hidden
                bg-[#201b17]
                ${event.position}
              `}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
            >
              <div className="relative h-[320px] overflow-hidden sm:h-[350px] md:h-[390px]">
                {/* IMAGE */}
                <img
                  src={event.image}
                  alt={event.title}
                  loading="lazy"
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/25
                    to-black/10
                  "
                />

                {/* NUMÉRO */}
                <span
                  className="
                    absolute
                    left-5
                    top-5
                    text-[10px]
                    tracking-[0.25em]
                    text-white/65
                  "
                >
                  {event.number}
                </span>

                {/* CONTENU */}
                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    p-5
                    sm:p-6
                  "
                >
                  <h3
                    className="
                      max-w-[90%]
                      font-['Bodoni_Moda']
                      text-3xl
                      font-normal
                      leading-[1]
                      sm:text-4xl
                    "
                  >
                    {event.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      max-w-sm
                      text-xs
                      leading-6
                      text-white/65
                      sm:text-sm
                    "
                  >
                    {event.description}
                  </p>

                  {/* CTA */}
                  <a
                    href="#contact"
                    className="
                      group/cta
                      mt-5
                      inline-flex
                      items-center
                      gap-3
                      border-b
                      border-[#c17a3d]/60
                      pb-2
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.18em]
                      text-[#f0e8da]
                      transition-colors
                      duration-300
                      hover:border-[#f0e8da]
                      hover:text-[#c17a3d]
                    "
                  >
                    <span>Nous contacter</span>

                    <span
                      className="
                        text-sm
                        text-[#c17a3d]
                        transition-transform
                        duration-300
                        group-hover/cta:-translate-y-0.5
                        group-hover/cta:translate-x-0.5
                      "
                    >
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