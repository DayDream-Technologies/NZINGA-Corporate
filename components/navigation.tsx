"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Music, Film, Users, Gamepad2, Target, MessageSquare, Clock, Newspaper, Building2 } from "lucide-react";
import clsx from "clsx";

const businessLinks = [
  { href: "/business/music/", label: "Music", icon: Music, description: "Artist development & label services" },
  { href: "/business/pictures/", label: "Pictures & TV", icon: Film, description: "Movies & television production" },
  { href: "/business/management/", label: "Management", icon: Users, description: "Talent management services" },
  { href: "/business/gaming/", label: "Gaming", icon: Gamepad2, description: "Interactive entertainment" },
];

const aboutLinks = [
  { href: "/about/purpose-values/", label: "Purpose & Values", icon: Target, description: "Our mission and core values" },
  { href: "/about/ceo-message/", label: "CEO Message", icon: MessageSquare, description: "A message from our leadership" },
  { href: "/about/history/", label: "History", icon: Clock, description: "Our journey through the years" },
  { href: "/about/news/", label: "News", icon: Newspaper, description: "Latest updates and announcements" },
  { href: "/about/affiliates/", label: "Affiliates", icon: Building2, description: "Our partner companies" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const handleDropdownEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/90 backdrop-blur-lg border-b border-border"
            : "bg-transparent"
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
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
                    stroke="url(#logoGradient)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M12 28V12h3l8 10.5V12h3v16h-3l-8-10.5V28h-3z"
                    fill="url(#logoGradient)"
                  />
                  <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="50%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#7dd3fc" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-serif font-bold text-foreground tracking-wide group-hover:text-accent transition-colors">
                  NZINGA
                </span>
                <span className="text-[10px] tracking-[0.3em] text-foreground-muted uppercase">
                  Group
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Business Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter("business")}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="flex items-center gap-1 text-foreground-muted hover:text-foreground transition-colors py-2">
                  <span className="text-sm font-medium tracking-wide">Business</span>
                  <ChevronDown className={clsx(
                    "w-4 h-4 transition-transform duration-200",
                    activeDropdown === "business" && "rotate-180"
                  )} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === "business" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                    >
                      <div className="bg-background-secondary/95 backdrop-blur-xl border border-accent/15 rounded-xl p-4 min-w-[320px] shadow-xl shadow-accent/5">
                        <div className="space-y-1">
                          {businessLinks.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group"
                            >
                              <link.icon className="w-5 h-5 text-accent mt-0.5" />
                              <div>
                                <span className="block text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                                  {link.label}
                                </span>
                                <span className="block text-xs text-foreground-muted mt-0.5">
                                  {link.description}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-3 pt-3 border-t border-border">
                          <Link
                            href="/business/"
                            className="text-xs text-accent hover:text-accent-light transition-colors"
                          >
                            View All Divisions →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* About Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter("about")}
                onMouseLeave={handleDropdownLeave}
              >
                <button className="flex items-center gap-1 text-foreground-muted hover:text-foreground transition-colors py-2">
                  <span className="text-sm font-medium tracking-wide">About</span>
                  <ChevronDown className={clsx(
                    "w-4 h-4 transition-transform duration-200",
                    activeDropdown === "about" && "rotate-180"
                  )} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === "about" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-2"
                    >
                      <div className="bg-background-secondary/95 backdrop-blur-xl border border-accent/15 rounded-xl p-4 min-w-[320px] shadow-xl shadow-accent/5">
                        <div className="space-y-1">
                          {aboutLinks.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/10 transition-colors group"
                            >
                              <link.icon className="w-5 h-5 text-accent mt-0.5" />
                              <div>
                                <span className="block text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                                  {link.label}
                                </span>
                                <span className="block text-xs text-foreground-muted mt-0.5">
                                  {link.description}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="mt-3 pt-3 border-t border-border">
                          <Link
                            href="/about/"
                            className="text-xs text-accent hover:text-accent-light transition-colors"
                          >
                            Learn More About Us →
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/careers/"
                className="text-sm font-medium tracking-wide text-foreground-muted hover:text-foreground transition-colors"
              >
                Careers
              </Link>

              <Link
                href="/sustainability/"
                className="text-sm font-medium tracking-wide text-foreground-muted hover:text-foreground transition-colors"
              >
                Sustainability
              </Link>

              <Link
                href="/contact/"
                className="btn-secondary text-xs py-2 px-4"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 bg-background z-[999] lg:hidden overflow-y-auto"
          >
            <div className="p-6 pt-24">
              {/* Close Button */}
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-2 text-foreground hover:text-accent transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Mobile Logo */}
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-6 left-6 flex items-center gap-2"
              >
                <span className="text-xl font-serif font-bold text-foreground">NZINGA</span>
                <span className="text-xs text-foreground-muted">Group</span>
              </Link>

              <div className="space-y-8">
                {/* Business Section */}
                <div>
                  <h3 className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">Business</h3>
                  <div className="space-y-3">
                    {businessLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 text-lg text-foreground-muted hover:text-foreground transition-colors"
                      >
                        <link.icon className="w-5 h-5 text-accent" />
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* About Section */}
                <div>
                  <h3 className="text-xs font-semibold text-accent uppercase tracking-wider mb-4">About</h3>
                  <div className="space-y-3">
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-3 text-lg text-foreground-muted hover:text-foreground transition-colors"
                      >
                        <link.icon className="w-5 h-5 text-accent" />
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Other Links */}
                <div className="space-y-3 pt-4 border-t border-border">
                  <Link
                    href="/careers/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg text-foreground-muted hover:text-foreground transition-colors"
                  >
                    Careers
                  </Link>
                  <Link
                    href="/sustainability/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg text-foreground-muted hover:text-foreground transition-colors"
                  >
                    Sustainability
                  </Link>
                  <Link
                    href="/contact/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg text-foreground-muted hover:text-foreground transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>

                {/* CTA */}
                <div className="pt-6">
                  <Link
                    href="/contact/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="btn-primary w-full text-center"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
