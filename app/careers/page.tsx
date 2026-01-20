"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Briefcase, Users, Heart, Zap, Globe, GraduationCap, Coffee, Sparkles } from "lucide-react";
import PageHeader from "@/components/page-header";

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health coverage and wellness programs to support your well-being.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Opportunities for professional growth, training, and career advancement.",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Flexible work arrangements and policies that respect your personal time.",
  },
  {
    icon: Globe,
    title: "Diverse Environment",
    description: "An inclusive workplace that celebrates diversity and different perspectives.",
  },
];

const openPositions = [
  {
    title: "Creative Producer",
    department: "Pictures & TV",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "A&R Coordinator",
    department: "Music",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Social Media Manager",
    department: "Corporate",
    location: "Remote",
    type: "Full-time",
  },
  {
    title: "Business Development Associate",
    department: "Gaming",
    location: "Remote",
    type: "Full-time",
  },
];

export default function CareersPage() {
  return (
    <div className="page-transition">
      <PageHeader
        subtitle="JOIN OUR TEAM"
        title="Careers at Nzinga Group"
        description="Build your career with a company that's shaping the future of entertainment. We're always looking for passionate, creative individuals to join our team."
      />

      {/* Culture Section */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-16 h-16 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-accent" />
              </div>

              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                Our Culture
              </h2>

              <div className="space-y-4 text-foreground-muted leading-relaxed">
                <p>
                  At Nzinga Group, we believe that great work happens when talented 
                  people come together in an environment that fosters creativity, 
                  collaboration, and growth. Our culture is built on mutual respect, 
                  open communication, and a shared passion for entertainment.
                </p>
                <p>
                  We&apos;re a team of dreamers, innovators, and doers who believe in 
                  the power of entertainment to inspire and connect. Whether you&apos;re 
                  working in music, pictures, management, or gaming, you&apos;ll be part 
                  of something bigger—a mission to shape the future of how people 
                  experience entertainment.
                </p>
              </div>
            </motion.div>

            {/* Values Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Zap, label: "Innovation" },
                { icon: Heart, label: "Passion" },
                { icon: Users, label: "Teamwork" },
                { icon: Sparkles, label: "Excellence" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="card p-6 text-center"
                >
                  <div className="w-12 h-12 mx-auto rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-gradient" />

      {/* Benefits Section */}
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
              Why Work With Us
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              We invest in our team because we know that our success depends on theirs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 text-center group"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-foreground-muted">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-gradient" />

      {/* Open Positions Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-6">
              <Briefcase className="w-8 h-8 text-accent" />
            </div>
            <h2 className="font-serif text-heading-md text-foreground mb-6">
              Open Positions
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Explore current opportunities across our divisions.
            </p>
          </motion.div>

          {/* Positions List */}
          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 group hover:border-accent/40 transition-colors"
              >
                <div>
                  <h3 className="font-serif text-lg text-foreground group-hover:text-accent transition-colors">
                    {position.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-2">
                    <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded">
                      {position.department}
                    </span>
                    <span className="text-xs text-foreground-muted">
                      {position.location}
                    </span>
                    <span className="text-xs text-foreground-muted">
                      {position.type}
                    </span>
                  </div>
                </div>
                <Link
                  href="/contact/"
                  className="text-sm text-accent hover:text-accent-light transition-colors whitespace-nowrap"
                >
                  Apply Now →
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center text-foreground-muted text-sm mt-8"
          >
            Don&apos;t see a position that fits? <Link href="/contact/" className="text-accent hover:text-accent-light transition-colors">Send us your resume</Link> anyway—we&apos;re always interested in exceptional talent.
          </motion.p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-12 text-center corner-accent"
          >
            <h2 className="font-serif text-2xl text-foreground mb-4">
              Ready to Join Us?
            </h2>
            <p className="text-foreground-muted mb-8 max-w-xl mx-auto">
              Take the first step toward a career in entertainment. We can&apos;t wait 
              to hear from you and learn about what you can bring to our team.
            </p>
            <Link href="/contact/" className="btn-primary">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
