"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Target, Eye, Heart, Lightbulb, Shield, Users } from "lucide-react";
import PageHeader from "@/components/page-header";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We constantly push boundaries and embrace new ideas to stay ahead in the ever-evolving entertainment landscape.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Our love for entertainment drives everything we do, from discovering talent to producing content that resonates.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We conduct our business with honesty, transparency, and ethical standards that earn trust from partners and audiences.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and partnership to achieve extraordinary results across our divisions.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for the highest quality in every project, setting standards that define industry best practices.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "We look beyond today to anticipate tomorrow's opportunities and position ourselves for long-term success.",
  },
];

export default function PurposeValuesPage() {
  return (
    <div className="page-transition">
      <PageHeader
        subtitle="OUR FOUNDATION"
        title="Purpose & Values"
        description="The principles that guide our decisions, shape our culture, and define who we are as an organization."
      />

      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 mb-12">
        <Link
          href="/about/"
          className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to About
        </Link>
      </div>

      {/* Mission Section */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h2 className="font-serif text-2xl text-foreground mb-4">Our Mission</h2>
              <p className="text-foreground-muted leading-relaxed">
                To shape the future of entertainment by discovering, developing, and 
                amplifying exceptional talent and groundbreaking content that inspires 
                and connects people worldwide.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card p-8"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h2 className="font-serif text-2xl text-foreground mb-4">Our Vision</h2>
              <p className="text-foreground-muted leading-relaxed">
                To be the world&apos;s most innovative and influential entertainment 
                conglomerate, known for nurturing talent, creating impactful content, 
                and leading the evolution of how audiences experience entertainment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-gradient" />

      {/* Core Values Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-heading-md text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              These values are the foundation of our culture and guide every decision we make.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-8 group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose Statement */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-12 text-center corner-accent"
          >
            <h2 className="font-serif text-2xl text-foreground mb-6">
              Our Purpose
            </h2>
            <p className="text-lg text-foreground-muted leading-relaxed mb-8">
              At Nzinga Group, we believe entertainment has the power to transform lives, 
              bridge cultures, and create lasting memories. Our purpose is to harness that 
              power by bringing together the best talent, the most compelling stories, and 
              the most innovative experiences—all while building a company that our team, 
              partners, and audiences can be proud of.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-secondary mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
