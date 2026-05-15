import Link from "next/link";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] py-10">
      <div className="container-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-semibold">COSAQ Digital</p>
          <p className="mt-2 text-sm text-cosaq-muted">
            Modern digital solutions for growing businesses.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-cosaq-muted">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>

        <p className="text-sm text-cosaq-muted">
          © 2026 COSAQ Digital. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
