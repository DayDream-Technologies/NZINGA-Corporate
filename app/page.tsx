"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Quote, Music, Film, Users, Gamepad2 } from "lucide-react";
import Hero from "@/components/hero";
import BusinessCard from "@/components/business-card";
import NewsCard from "@/components/news-card";
import StatsCounter from "@/components/stats-counter";
import { businessDivisions } from "@/lib/business-data";
import { getLatestNews } from "@/lib/news-data";

const recentHighlights = [
  {
    division: "Nzinga Music",
    icon: Music,
    color: "from-cyan-500 to-blue-500",
    highlights: [
      { title: "New Artist Signing", description: "Welcomed emerging R&B sensation to our roster" },
      { title: "Studio Sessions", description: "Recording new tracks with Grammy-nominated producers" },
      { title: "Distribution Deal", description: "Expanded global distribution to 150+ platforms" },
    ],
  },
  {
    division: "Nzinga Pictures",
    icon: Film,
    color: "from-purple-500 to-pink-500",
    highlights: [
      { title: "Safety Patrol", description: "Action-comedy feature film in active development" },
      { title: "The Melody Series", description: "Crowdfunding campaign surpassing initial goals" },
      { title: "New Writers Room", description: "Assembled team for upcoming drama series" },
    ],
  },
  {
    division: "Nzinga Management",
    icon: Users,
    color: "from-amber-500 to-orange-500",
    highlights: [
      { title: "Brand Partnerships", description: "Secured major endorsement deals for talent" },
      { title: "Roster Expansion", description: "Added new entertainers and content creators" },
      { title: "Tour Coordination", description: "Planning upcoming live performance series" },
    ],
  },
  {
    division: "Nzinga Gaming",
    icon: Gamepad2,
    color: "from-green-500 to-emerald-500",
    highlights: [
      { title: "Royal BattleField Collab", description: "Joint game development project underway" },
      { title: "Esports Initiative", description: "Launching competitive gaming program" },
      { title: "Creator Program", description: "Supporting gaming content creators" },
    ],
  },
];

export default function Home() {
  const latestNews = getLatestNews(3);

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <Hero />

      {/* Business Divisions Section */}
      <section className="relative py-24 md:py-32 section-glow">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-xs md:text-sm font-medium tracking-[0.3em] text-accent mb-4">
              OUR BUSINESSES
            </p>
            <h2 className="font-serif text-heading-lg text-foreground mb-6">
              Four Pillars of Entertainment
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Nzinga Group operates across multiple entertainment verticals, each dedicated 
              to excellence and innovation in their respective fields.
            </p>
          </motion.div>

          {/* Business Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {businessDivisions.map((division, index) => (
              <BusinessCard
                key={division.id}
                name={division.name}
                tagline={division.tagline}
                description={division.description}
                icon={division.icon}
                href={division.href}
                index={index}
                externalLink={division.externalLink}
              />
            ))}
          </div>

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/business/"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors group"
            >
              <span>View All Divisions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-gradient" />

      {/* Recent Highlights Section */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-xs md:text-sm font-medium tracking-[0.3em] text-accent mb-4">
              ACROSS OUR DIVISIONS
            </p>
            <h2 className="font-serif text-heading-lg text-foreground mb-6">
              Recent Highlights
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              A glimpse into the latest activities and achievements from each of our 
              entertainment divisions.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {recentHighlights.map((division, divIndex) => (
              <motion.div
                key={division.division}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: divIndex * 0.1 }}
                className="card p-6 md:p-8 group"
              >
                {/* Division Header */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${division.color} flex items-center justify-center`}>
                    <division.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-foreground group-hover:text-accent transition-colors">
                      {division.division}
                    </h3>
                    <p className="text-xs text-foreground-muted">Recent Activity</p>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-4">
                  {division.highlights.map((highlight, hIndex) => (
                    <motion.div
                      key={highlight.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: divIndex * 0.1 + hIndex * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-medium text-foreground mb-1">
                          {highlight.title}
                        </h4>
                        <p className="text-xs text-foreground-muted leading-relaxed">
                          {highlight.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* View More Link */}
                <div className="mt-6 pt-4 border-t border-border">
                  <Link
                    href={
                      division.division === "Nzinga Music" ? "/business/music/" :
                      division.division === "Nzinga Pictures" ? "/business/pictures/" :
                      division.division === "Nzinga Management" ? "/business/management/" :
                      "/business/gaming/"
                    }
                    className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-accent transition-colors group/link"
                  >
                    <span>View Division</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-gradient" />

      {/* Latest News Section */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <p className="text-xs md:text-sm font-medium tracking-[0.3em] text-accent mb-4">
              LATEST NEWS
            </p>
            <h2 className="font-serif text-heading-lg text-foreground mb-6">
              Updates & Announcements
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Stay informed about the latest developments, partnerships, and milestones 
              across Nzinga Group.
            </p>
          </motion.div>

          {/* News Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestNews.map((news, index) => (
              <NewsCard
                key={news.id}
                title={news.title}
                excerpt={news.excerpt}
                date={news.date}
                category={news.category}
                href={`/about/news/#${news.slug}`}
                index={index}
              />
            ))}
          </div>

          {/* View All Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              href="/about/news/"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors group"
            >
              <span>View All News</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-gradient" />

      {/* About Preview / Mission Section */}
      <section className="relative py-24 md:py-32 section-glow overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Quote Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <Quote className="w-8 h-8 text-accent" />
            </div>

            {/* Quote */}
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-8">
              &ldquo;Our mission is to shape the future of entertainment by discovering, 
              developing, and amplifying exceptional talent and groundbreaking content 
              that inspires and connects people worldwide.&rdquo;
            </blockquote>

            {/* Attribution */}
            <p className="text-foreground-muted mb-8">
              <span className="text-accent">— The Nzinga Group Vision</span>
            </p>

            {/* CTA */}
            <Link href="/about/purpose-values/" className="btn-secondary">
              Discover Our Purpose
            </Link>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-accent-secondary/5 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Stats Counter Section */}
      <StatsCounter />

      {/* Divider */}
      <div className="divider-gradient" />

      {/* CTA Section */}
      <section className="relative py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card p-12 md:p-16 text-center corner-accent"
          >
            <p className="text-xs md:text-sm font-medium tracking-[0.3em] text-accent mb-4">
              JOIN OUR TEAM
            </p>
            <h2 className="font-serif text-heading-md text-foreground mb-6">
              Shape the Future With Us
            </h2>
            <p className="text-foreground-muted max-w-xl mx-auto mb-8">
              We&apos;re always looking for passionate, creative individuals to join our 
              growing team. Explore opportunities across our entertainment divisions.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/careers/" className="btn-primary">
                View Careers
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/contact/" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
