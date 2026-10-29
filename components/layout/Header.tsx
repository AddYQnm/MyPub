
import BrandLogo from "@/components/ui/BrandLogo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="top-nav">
      <BrandLogo compact />

      <Navigation />

      <div className="nav-switch" aria-label="Univers MY PUB">
        <a className="switch-active" href="#carte">
          Bar
        </a>
        <a href="#restauration">
          Restaurant
        </a>
      </div>

      <div className="nav-right">
        <a className="nav-menu" href="#carte">
          Menu <span className="square-icon">☷</span>
        </a>

        <a className="order-button" href="#contact">
          Nous trouver <span className="square-icon">↗</span>
        </a>
      </div>
    </header>
  );
}
