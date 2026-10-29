
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/navigation";

export default function Hero() {
  return (
    <section className="hero-screen" id="accueil">
      <div className="hero-shade" aria-hidden="true" />

      <div className="hero-title-wrap">
        <span className="hero-side hero-side-left">
          AU CŒUR DE ROUEN
        </span>

        <h1>
          MOMENTS
          <br />
          <span>THAT STAY</span>
        </h1>

        <span className="hero-side hero-side-right">
          {siteConfig.name} · ROUEN
        </span>
      </div>

      <div className="hero-bottom">
        <p>
          Chez MY PUB, chaque moment est une occasion de se retrouver.
          <br />
          Un verre entre amis, une table à partager,
          <br />
          et l&apos;envie de faire durer la soirée.
        </p>

        <Button href="#carte" variant="outline">
          DÉCOUVRIR MY PUB <span>↗</span>
        </Button>
      </div>

      <div className="hero-scroll-line" aria-hidden="true" />
    </section>
  );
}
