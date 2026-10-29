
import { navigationLinks } from "@/data/navigation";

export default function Navigation() {
  return (
    <nav className="nav-left" aria-label="Navigation principale">
      {navigationLinks.map(({ label, href }) => (
        <a href={href} key={href}>
          {label}
        </a>
      ))}
    </nav>
  );
}
