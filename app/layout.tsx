import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "COSAQ Digital | Modern Digital Solutions",
  description:
    "Modern websites and digital solutions designed to help businesses create trust, attract customers, and grow online.",
  metadataBase: new URL("https://cosaqdigital.com"),
  openGraph: {
    title: "COSAQ Digital | Modern Digital Solutions",
    description:
      "Modern websites and digital solutions designed to help businesses create trust, attract customers, and grow online.",
    url: "https://cosaqdigital.com",
    siteName: "COSAQ Digital",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
