"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

interface HeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  showScrollIndicator?: boolean;
  variant?: "home" | "page";
}

export default function Hero({
  title = "Shaping the Future of Entertainment",
  subtitle = "NZINGA GROUP",
  description = "A premier entertainment conglomerate with divisions spanning music, film & television, talent management, and gaming. We're building the next generation of entertainment experiences.",
  primaryCta = { label: "Our Businesses", href: "/business/" },
  secondaryCta = { label: "About Nzinga", href: "/about/" },
  showScrollIndicator = true,
  variant = "home",
}: HeroProps) {
  const isHome = variant === "home";

  return (
    <section className={`relative ${isHome ? "min-h-screen" : "min-h-[60vh]"} flex items-center justify-center vignette`}>
      {/* Section Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-gradient-to-b from-accent/10 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-32">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs md:text-sm font-medium tracking-[0.3em] text-accent mb-6"
        >
          {subtitle}
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-heading-xl text-foreground mb-8"
        >
          <span className="text-gradient">{title}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href={primaryCta.href} className="btn-primary group">
            {primaryCta.label}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href={secondaryCta.href} className="btn-secondary">
            {secondaryCta.label}
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        {showScrollIndicator && isHome && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-foreground-muted"
            >
              <span className="text-xs tracking-wider uppercase">Scroll to Explore</span>
              <ChevronDown className="w-5 h-5 text-accent" />
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Corner Accents */}
      <div className="absolute top-20 left-6 md:left-12">
        <div className="w-16 h-16 border-l-2 border-t-2 border-accent/30" />
      </div>
      <div className="absolute bottom-20 right-6 md:right-12">
        <div className="w-16 h-16 border-r-2 border-b-2 border-accent/30" />
      </div>
    </section>
  );
}
