
import { siteConfig } from "@/data/navigation";

type BrandLogoProps = {
  compact?: boolean;
};

export default function BrandLogo({
  compact = false,
}: BrandLogoProps) {
  return (
    <a
      href="#accueil"
      className={`mini-logo ${compact ? "mini-logo--compact" : ""}`}
      aria-label={`${siteConfig.name} — accueil`}
    >
      <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path
          d="M8 29 15 13 20 22 25 13 32 29M11 23H29M16 8H24M20 5V11"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle
          cx="20"
          cy="20"
          r="17"
          stroke="currentColor"
          strokeWidth=".7"
        />
      </svg>
    </a>
  );
}
