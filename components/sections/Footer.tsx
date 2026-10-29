
const footerLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Le bar", href: "#univers" },
  { label: "Le restaurant", href: "#univers" },
  { label: "L'ambiance", href: "#ambiance" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <a href="#accueil" className="footer-brand">
          MY PUB
          <span>ROUEN · FRANCE</span>
        </a>

        <p>
          Un lieu pour se retrouver.
          <br />
          Des moments à partager.
        </p>

        <nav aria-label="Navigation de pied de page">
          {footerLinks.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} MY PUB</span>
        <span>ROUEN, FRANCE</span>
      </div>
    </footer>
  );
}
