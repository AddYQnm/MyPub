
"use client";

import { motion, useReducedMotion } from "motion/react";

const experienceItems = [
  {
    eyebrow: "COCKTAILS",
    title: "L'art de se retrouver.",
    image: "/images/mypub/cocktails.jpg",
    alt: "Cocktails servis au bar MY PUB",
  },
  {
    eyebrow: "À PARTAGER",
    title: "Le plaisir d'être ensemble.",
    image: "/images/mypub/plats.jpg",
    alt: "Plats à partager chez MY PUB",
  },
];

export default function ExperienceSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="experience-editorial" id="apropos">
      {/* Texte */}
      <motion.div
        className="experience-editorial-copy"
        initial={reduceMotion ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.span
          className="experience-kicker"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          L&apos;UNIVERS MY PUB
        </motion.span>

        <h2>
          <motion.span
            className="block"
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Une ode
          </motion.span>

          <motion.span
            className="block"
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            aux bons
          </motion.span>

          <motion.em
            className="block"
            initial={reduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            moments.
          </motion.em>
        </h2>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Des cocktails à savourer, des assiettes à partager
          et des soirées qui se prolongent.
          Bienvenue dans l&apos;univers MY PUB.
        </motion.p>

        <motion.a
          className="experience-cta group"
          href="#univers"
          whileHover={reduceMotion ? undefined : { x: 4 }}
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
        >
          DÉCOUVRIR MY PUB
          <motion.span
            className="inline-block"
            animate={
              reduceMotion
                ? undefined
                : { x: [0, 3, 0] }
            }
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ↗
          </motion.span>
        </motion.a>

        <motion.span
          className="experience-signature"
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          MY PUB · ROUEN, FRANCE
        </motion.span>
      </motion.div>

      {/* Images */}
      <div className="experience-editorial-visuals">
        {experienceItems.map((item, index) => (
          <motion.article
            className={`experience-tile experience-tile-${index + 1}`}
            key={item.eyebrow}
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 35,
                    clipPath: "inset(10% 0 0 0)",
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
              clipPath: "inset(0% 0 0 0)",
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              delay: reduceMotion ? 0 : index * 0.2,
              ease: "easeOut",
            }}
          >
            <motion.img
              src={item.image}
              alt={item.alt}
              loading="lazy"
              whileHover={reduceMotion ? undefined : { scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />

            <div className="experience-tile-shade" />

            <motion.div
              className="experience-tile-copy"
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: reduceMotion ? 0 : 0.35 + index * 0.2,
              }}
            >
              <span>{item.eyebrow}</span>
              <h3>{item.title}</h3>
            </motion.div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
