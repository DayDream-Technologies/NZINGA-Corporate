"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";
import XIcon from "./icons/x-icon";

const divisions = [
  { href: "/business/music/", label: "Music" },
  { href: "/business/pictures/", label: "Pictures & TV" },
  { href: "/business/management/", label: "Management" },
  { href: "/business/gaming/", label: "Gaming" },
];

const aboutLinks = [
  { href: "/about/purpose-values/", label: "Purpose & Values" },
  { href: "/about/ceo-message/", label: "CEO Message" },
  { href: "/about/history/", label: "Our History" },
  { href: "/about/news/", label: "News" },
  { href: "/about/affiliates/", label: "Affiliates" },
];

const supportLinks = [
  { href: "/contact/", label: "Contact Us" },
  { href: "/careers/", label: "Careers" },
  { href: "/sustainability/", label: "Sustainability" },
];

const socialLinks = [
  { href: "https://www.instagram.com/nzingagrp/", label: "Instagram", icon: Instagram },
  { href: "https://twitter.com/nzingagrp", label: "X (Twitter)", icon: XIcon },
  { 
    href: "https://www.tiktok.com/@nzingagrp", 
    label: "TikTok", 
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    )
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-background-secondary border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <svg
                viewBox="0 0 40 40"
                className="w-10 h-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="2"
                  width="36"
                  height="36"
                  rx="4"
                  stroke="url(#footerLogoGradient)"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M12 28V12h3l8 10.5V12h3v16h-3l-8-10.5V28h-3z"
                  fill="url(#footerLogoGradient)"
                />
                <defs>
                  <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="50%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#7dd3fc" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-foreground">NZINGA</span>
                <span className="text-[10px] tracking-[0.3em] text-foreground-muted uppercase">Group</span>
              </div>
            </Link>
            <p className="text-foreground-muted text-sm leading-relaxed max-w-sm mb-8">
              Shaping the future of entertainment through innovation, creativity, and excellence 
              across music, film, television, talent management, and gaming.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-background-tertiary border border-border flex items-center justify-center text-foreground-muted hover:text-accent hover:border-accent/50 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Divisions Column */}
          <div>
            <h3 className="text-xs font-semibold text-accent uppercase tracking-wider mb-6">
              Our Businesses
            </h3>
            <ul className="space-y-3">
              {divisions.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-foreground transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div>
            <h3 className="text-xs font-semibold text-accent uppercase tracking-wider mb-6">
              About
            </h3>
            <ul className="space-y-3">
              {aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-foreground transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-xs font-semibold text-accent uppercase tracking-wider mb-6">
              Support
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground-muted hover:text-foreground transition-colors link-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="divider-gradient" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <p className="text-xs text-foreground-muted text-center">
          &copy; {currentYear} Nzinga Group. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
