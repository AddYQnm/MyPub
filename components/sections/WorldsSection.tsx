
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
  return (
    <section className="worlds" id="univers">
      <div className="worlds-heading">
        <span className="section-eyebrow">
          DEUX UNIVERS, UN MÊME ESPRIT
        </span>

        <h2>
          À chacun <em>son moment.</em>
        </h2>
      </div>

      <div className="worlds-grid">
        {worlds.map((world) => (
          <article className="world-card" key={world.number}>
            <img
              src={world.image}
              alt={world.title + " chez MY PUB"}
              loading="lazy"
            />

            <div className="world-overlay" />

            <span className="world-number">
              {world.number}
            </span>

            <div className="world-content">
              <h3>{world.title}</h3>
              <p>{world.description}</p>

              <a href={world.href} className="world-link">
                {world.label} <span>↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
