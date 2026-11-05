
"use client";

import { motion, useReducedMotion } from "motion/react";

const worlds = [
  {
    number: "01",
    title: "Le Bar",
    description:
      "Un verre, des retrouvailles et le plaisir de prolonger la soirée.",
    image: "/images/mypub/visit-interior.jpg",
    href: "#carte-bar",
    label: "DÉCOUVRIR LE BAR",
  },
  {
    number: "02",
    title: "Le Restaurant",
    description:
      "Une table à partager, des saveurs à découvrir et le temps de profiter.",
    image: "/images/mypub/visit-restaurant.jpg",
    href: "#carte-restaurant",
    label: "DÉCOUVRIR LE RESTAURANT",
  },
];

export default function WorldsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="worlds" id="univers">
      <motion.div
        className="worlds-heading"
        initial={reduceMotion ? false : { opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <span className="section-eyebrow">
          DEUX UNIVERS, UN MÊME ESPRIT
        </span>

        <h2>
          À chacun <em>son moment.</em>
        </h2>
      </motion.div>

      <div className="worlds-grid">
        {worlds.map((world, index) => (
          <motion.a
            href={world.href}
            aria-label={`${world.label} : ${world.title}`}
            className="world-card group relative block overflow-hidden"
            key={world.number}
            initial={
              reduceMotion ? false : { opacity: 0, y: 30 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: reduceMotion ? 0 : index * 0.15,
              ease: "easeOut",
            }}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            whileTap={reduceMotion ? undefined : { scale: 0.99 }}
          >
            <motion.img
              src={world.image}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
              whileHover={
                reduceMotion ? undefined : { scale: 1.05 }
              }
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            <div className="world-overlay transition-opacity duration-500 group-hover:opacity-80" />

            

            <div className="world-content">
              <h3>{world.title}</h3>

              <p>{world.description}</p>

              <span className="world-link">
                {world.label}
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
