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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-cosaq-background/62 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-2xl supports-[backdrop-filter]:bg-cosaq-background/52">
      <nav className="container-shell flex min-h-20 flex-wrap items-center justify-between gap-x-5 gap-y-3 py-4 md:h-20 md:flex-nowrap md:py-0">
        <Link
          href="#home"
          aria-label="COSAQ Digital home"
          className="group inline-flex items-center gap-3 font-display text-lg font-semibold tracking-normal text-cosaq-white"
        >
          <span className="grid h-9 w-9 place-items-center rounded-2xl border border-cosaq-blue/25 bg-cosaq-blue/10 text-sm text-cosaq-blue shadow-[0_16px_48px_rgba(10,132,255,0.12)] transition duration-300 group-hover:border-cosaq-blue/45 group-hover:bg-cosaq-blue/16">
            CD
          </span>
          <span>COSAQ Digital</span>
        </Link>

        <div className="order-3 flex w-full items-center justify-between gap-2 overflow-x-auto rounded-full border border-white/[0.07] bg-white/[0.035] p-1 text-nowrap md:order-none md:w-auto md:justify-center">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition duration-300 hover:bg-white/[0.07] hover:text-cosaq-white ${
                index === 0 ? "bg-white/[0.07] text-cosaq-white" : "text-cosaq-muted"
              }`}
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
