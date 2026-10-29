
const venue = {
  address: "Adresse officielle à renseigner",
  hours: "Horaires à confirmer",
};

export default function VisitSection() {
  return (
    <section className="visit-editorial" id="contact">
      <div className="visit-editorial-image" aria-hidden="true" />

      <div className="visit-editorial-panel">
        <span className="visit-editorial-eyebrow">
          L&apos;INVITATION MY PUB
        </span>

        <h2>
          Passez la
          <br />
          <em>soirée</em>
          <br />
          avec nous.
        </h2>

        <p>
          Un lieu pour se retrouver, de bons moments
          à partager et le plaisir de prendre son temps.
        </p>

        <a
          className="visit-editorial-button"
          href="https://www.google.com/maps/search/?api=1&query=MY+PUB+Rouen"
          target="_blank"
          rel="noreferrer"
        >
          NOUS RENDRE VISITE <span>↗</span>
        </a>

        <div className="visit-editorial-info">
          <span>{venue.address}</span>
          <span>{venue.hours}</span>
        </div>
      </div>
    </section>
  );
}
