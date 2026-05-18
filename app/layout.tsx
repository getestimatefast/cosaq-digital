import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const googleTagId = "G-6JCYQTH2XQ";

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
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${googleTagId}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
