import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header
      className="
        absolute inset-x-0 top-0 z-50
        flex h-12 items-center
        justify-between
        px-4
        text-[#f3ecdf]
        sm:px-6
        lg:px-8
      "
    >
      {/* LOGO → ACCUEIL */}
      <a
        href="/"
        className="relative flex h-8 w-22.5 items-center"
        aria-label="MY PUB - Accueil"
      >
        <Image
          src="/images/logo.png"
          alt="MY PUB"
          fill
          priority
          className="object-contain object-left"
        />
      </a>

      {/* NAVIGATION */}
      <div className="hidden md:flex">
        <Navigation />
      </div>

      {/* ACTIONS */}
      <div className="flex items-center gap-5">

        {/* MENU */}
        <a
          href="#carte"
          className="
            group hidden items-center gap-2
            text-[8px] font-medium uppercase
            tracking-[0.12em]
            text-[#f3ecdf]
            transition-colors duration-300
            hover:text-[#c9a56b]
            sm:flex
          "
        >
          <span>Menu</span>

          <span
            className="
              grid h-5 w-5 place-items-center
              bg-[#c9a56b]
              text-[10px] text-[#211b13]
              transition-transform duration-300
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
            "
          >
            ↗
          </span>
        </a>

        {/* NOUS TROUVER */}
        <a
          href="#contact"
          className="
            group flex items-center gap-2
            text-[8px] font-medium uppercase
            tracking-[0.12em]
            text-[#f3ecdf]
            transition-colors duration-300
            hover:text-[#c9a56b]
          "
        >
          <span>Nous trouver</span>

          <span
            className="
              grid h-5 w-5 place-items-center
              bg-[#c9a56b]
              text-[10px] text-[#211b13]
              transition-transform duration-300
              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
            "
          >
            ↗
          </span>
        </a>
      </div>
    </header>
  );
}