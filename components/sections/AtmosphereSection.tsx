
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
  return (
    <section className="atmosphere section-shell" id="ambiance">
      <div className="atmosphere-heading">
        <div>
          <span className="section-eyebrow">
            L&apos;EXPÉRIENCE MY PUB
          </span>
          <h2>
            Une ambiance
            <br />
            <em>à vivre.</em>
          </h2>
        </div>

        <p>
          Des instants simples, des soirées mémorables
          et le plaisir d&apos;être ensemble.
        </p>
      </div>

      <div className="atmosphere-grid">
        {photos.map((photo, index) => (
          <figure
            key={photo.src}
            className={photo.className}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
            />
            <span className="atmosphere-index">
              0{index + 1}
            </span>
          </figure>
        ))}
      </div>
    </section>
  );
}
