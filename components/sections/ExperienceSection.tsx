
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
  return (
    <section className="experience-editorial" id="apropos">
      <div className="experience-editorial-copy">
        <span className="experience-kicker">
          L'UNIVERS MY PUB
        </span>

        <h2>
          Une ode
          <br />
          aux bons
          <br />
          <em>moments.</em>
        </h2>

        <p>
          Des cocktails à savourer, des assiettes à partager
          et des soirées qui se prolongent.
          Bienvenue dans l'univers MY PUB.
        </p>

        <a className="experience-cta" href="#univers">
          DÉCOUVRIR MY PUB <span>↗</span>
        </a>

        <span className="experience-signature">
          MY PUB · ROUEN, FRANCE
        </span>
      </div>

      <div className="experience-editorial-visuals">
        {experienceItems.map((item, index) => (
          <article
            className={`experience-tile experience-tile-${index + 1}`}
            key={item.eyebrow}
          >
            <img
              src={item.image}
              alt={item.alt}
              loading="lazy"
            />

            <div className="experience-tile-shade" />

            <div className="experience-tile-copy">
              <span>{item.eyebrow}</span>
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
