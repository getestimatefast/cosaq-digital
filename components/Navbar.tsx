import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.06] bg-cosaq-background/78 backdrop-blur-xl">
      <nav className="container-shell flex min-h-20 flex-wrap items-center justify-between gap-x-5 gap-y-3 py-4 md:h-20 md:flex-nowrap md:py-0">
        <Link
          href="#home"
          aria-label="COSAQ Digital home"
          className="font-display text-lg font-semibold tracking-normal text-cosaq-white"
        >
          COSAQ Digital
        </Link>

        <div className="order-3 flex w-full items-center justify-between gap-4 overflow-x-auto text-nowrap md:order-none md:w-auto md:justify-center md:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-cosaq-muted transition hover:text-cosaq-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <ButtonLink href="#contact" className="min-h-10 px-4 text-xs sm:text-sm">
          Start a Project
        </ButtonLink>
      </nav>
    </header>
  );
}
