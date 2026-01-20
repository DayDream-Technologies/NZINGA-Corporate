import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ParticleBackground from "@/components/particle-background";
import GradientOrbs from "@/components/gradient-orbs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nzinga Group | Shaping the Future of Entertainment",
  description: "Nzinga Group is a premier entertainment conglomerate with divisions in Music, Pictures & TV, Talent Management, and Gaming. Discover our vision for the future of entertainment.",
  keywords: ["entertainment", "music", "movies", "tv", "gaming", "talent management", "Nzinga Group"],
  authors: [{ name: "Nzinga Group" }],
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Nzinga Group | Shaping the Future of Entertainment",
    description: "A premier entertainment conglomerate with divisions in Music, Pictures & TV, Talent Management, and Gaming.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nzinga Group | Shaping the Future of Entertainment",
    description: "A premier entertainment conglomerate with divisions in Music, Pictures & TV, Talent Management, and Gaming.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} antialiased side-lines`}>
        {/* Background Effects */}
        <div className="grid-background" />
        <GradientOrbs />
        <ParticleBackground />
        
        {/* Navigation */}
        <Navigation />
        
        {/* Main Content */}
        <main className="relative z-10">
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
