
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "gold" | "outline" | "nav";
};

export default function Button({
  children,
  variant = "gold",
  className = "",
  ...props
}: ButtonProps) {
  const variantClass = {
    gold: "hero-discover",
    outline: "hero-discover",
    nav: "order-button",
  }[variant];

  return (
    <a
      {...props}
      className={`${variantClass} ${className}`.trim()}
    >
      {children}
    </a>
  );
}
