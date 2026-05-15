import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const variantClasses =
    variant === "primary"
      ? "border-cosaq-blue/70 bg-cosaq-blue text-white shadow-[0_18px_48px_rgba(10,132,255,0.24)] hover:bg-[#2f98ff]"
      : "border-white/10 bg-white/[0.04] text-cosaq-white hover:border-white/18 hover:bg-white/[0.07]";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-12 items-center justify-center rounded-full border px-5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cosaq-blue/60 focus:ring-offset-2 focus:ring-offset-cosaq-background sm:px-6 ${variantClasses} ${className}`}
    >
      {children}
    </Link>
  );
}
