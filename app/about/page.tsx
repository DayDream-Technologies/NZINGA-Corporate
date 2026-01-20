"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Target, MessageSquare, Clock, Newspaper, Building2 } from "lucide-react";
import PageHeader from "@/components/page-header";

const aboutSections = [
  {
    href: "/about/purpose-values/",
    title: "Purpose & Values",
    description: "Discover our mission, vision, and the core values that guide everything we do.",
    icon: Target,
  },
  {
    href: "/about/ceo-message/",
    title: "CEO Message",
    description: "A message from our leadership on our vision for the future of entertainment.",
    icon: MessageSquare,
  },
  {
    href: "/about/history/",
    title: "Our History",
    description: "Explore our journey from inception to becoming a diversified entertainment group.",
    icon: Clock,
  },
  {
    href: "/about/news/",
    title: "News & Updates",
    description: "Stay informed with the latest announcements and developments across Nzinga Group.",
    icon: Newspaper,
  },
  {
    href: "/about/affiliates/",
    title: "Affiliates",
    description: "Learn about our partner companies and affiliated organizations.",
    icon: Building2,
  },
];

export default function AboutPage() {
  return (
    <div className="page-transition">
      <PageHeader
        subtitle="ABOUT US"
        title="Who We Are"
        description="Nzinga Group is a premier entertainment conglomerate dedicated to shaping the future of entertainment across music, film, television, talent management, and gaming."
      />

      {/* About Sections Grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutSections.map((section, index) => (
              <motion.div
                key={section.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={section.href} className="block card p-8 h-full group">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <section.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                    {section.title}
                  </h3>
                  <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                    {section.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-accent">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-gradient" />

      {/* Company Overview */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="font-serif text-heading-md text-foreground mb-8">
              Entertainment, Reimagined
            </h2>
            <div className="space-y-6 text-foreground-muted leading-relaxed">
              <p>
                Founded with a vision to reshape the entertainment landscape, Nzinga Group 
                has grown into a diversified entertainment conglomerate with presence across 
                multiple verticals. Our divisions work both independently and collaboratively 
                to discover, develop, and deliver exceptional content and experiences to 
                audiences worldwide.
              </p>
              <p>
                From nurturing musical talent to producing compelling film and television 
                content, from managing careers of entertainers and athletes to pioneering 
                in the gaming space, we are committed to excellence and innovation in 
                everything we do.
              </p>
              <p>
                At the heart of our success is our commitment to creativity, integrity, 
                and the belief that great entertainment has the power to inspire, connect, 
                and transform lives.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
