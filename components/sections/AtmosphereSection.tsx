
"use client";

import { motion, useReducedMotion } from "motion/react";

const photos = [
  {
    src: "/images/mypub/atmosphere-1.jpg",
    alt: "L'intérieur de MY PUB",
    className: "atmosphere-large",
  },
  {
    src: "/images/mypub/atmosphere-2.jpg",
    alt: "Un moment au bar",
    className: "",
  },
  {
    src: "/images/mypub/atmosphere-3.jpg",
    alt: "L'ambiance du lieu",
    className: "",
  },
];

export default function AtmosphereSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="atmosphere section-shell" id="ambiance">
      {/* En-tête */}
      <motion.div
        className="atmosphere-heading"
        initial={reduceMotion ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        <div>
          <motion.span
            className="section-eyebrow"
            initial={reduceMotion ? false : { opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.25em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            L&apos;EXPÉRIENCE MY PUB
          </motion.span>

          <h2>
            <motion.span
              className="block"
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Une ambiance
            </motion.span>

            <motion.em
              className="block"
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              à vivre.
            </motion.em>
          </h2>
        </div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Des instants simples, des soirées mémorables
          et le plaisir d&apos;être ensemble.
        </motion.p>
      </motion.div>

      {/* Galerie */}
      <div className="atmosphere-grid">
        {photos.map((photo, index) => (
          <motion.figure
            key={photo.src}
            className={`group relative overflow-hidden ${photo.className}`}
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 35,
                    clipPath: "inset(12% 0 0 0)",
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
              clipPath: "inset(0% 0 0 0)",
            }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 1,
              delay: reduceMotion ? 0 : index * 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <motion.img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-full w-full object-cover"
              initial={reduceMotion ? false : { scale: 1.12 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              whileHover={reduceMotion ? undefined : { scale: 1.045 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            {/* Voile subtil */}
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/0"
            />

            {/* Numéro */}
            <motion.span
              className="atmosphere-index"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: reduceMotion ? 0 : 0.35 + index * 0.18,
              }}
            >
              0{index + 1}
            </motion.span>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
