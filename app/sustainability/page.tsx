"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Leaf, Globe, Users, Heart, Lightbulb, Target } from "lucide-react";
import PageHeader from "@/components/page-header";

const commitments = [
  {
    icon: Leaf,
    title: "Environmental Responsibility",
    description: "Minimizing our environmental footprint through sustainable practices in our productions and operations.",
  },
  {
    icon: Users,
    title: "Diversity & Inclusion",
    description: "Building a diverse workforce and ensuring representation both in front of and behind the camera.",
  },
  {
    icon: Heart,
    title: "Community Impact",
    description: "Giving back to communities through partnerships, programs, and initiatives that make a difference.",
  },
  {
    icon: Globe,
    title: "Ethical Business Practices",
    description: "Conducting business with integrity, transparency, and respect for all stakeholders.",
  },
];

const initiatives = [
  {
    title: "Diverse Storytelling",
    description: "We're committed to telling stories that represent diverse voices, perspectives, and experiences across all our productions.",
  },
  {
    title: "Talent Development",
    description: "Creating opportunities for emerging talent from underrepresented backgrounds in the entertainment industry.",
  },
  {
    title: "Sustainable Production",
    description: "Implementing eco-friendly practices in our productions to reduce waste and carbon emissions.",
  },
  {
    title: "Community Partnerships",
    description: "Partnering with organizations that share our commitment to making a positive impact in communities.",
  },
];

export default function SustainabilityPage() {
  return (
    <div className="page-transition">
      <PageHeader
        subtitle="OUR RESPONSIBILITY"
        title="Sustainability & Impact"
        description="At Nzinga Group, we believe that entertainment companies have a responsibility to create positive change. Here's how we're working toward a more sustainable and equitable future."
      />

      {/* Introduction */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-8">
              <Target className="w-8 h-8 text-accent" />
            </div>
            <p className="text-lg text-foreground-muted leading-relaxed">
              As an entertainment company, we recognize our unique position to influence 
              culture and drive positive change. We&apos;re committed to using our platform 
              to promote sustainability, diversity, and social responsibility—both in 
              the content we create and in how we operate as a business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-gradient" />

      {/* Commitments Section */}
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
              Our Commitments
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              The pillars that guide our approach to sustainability and social responsibility.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-8 group"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <commitment.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {commitment.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  {commitment.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-gradient" />

      {/* Initiatives Section */}
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
              <Lightbulb className="w-8 h-8 text-accent" />
            </div>
            <h2 className="font-serif text-heading-md text-foreground mb-6">
              Current Initiatives
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Actions we&apos;re taking today to build a better tomorrow.
            </p>
          </motion.div>

          <div className="space-y-6">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6 flex gap-6"
              >
                <div className="w-2 bg-gradient-to-b from-accent to-accent-secondary rounded-full flex-shrink-0" />
                <div>
                  <h3 className="font-serif text-lg text-foreground mb-2">
                    {initiative.title}
                  </h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {initiative.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Statement */}
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
              Our Vision for the Future
            </h2>
            <p className="text-foreground-muted leading-relaxed mb-8">
              We envision an entertainment industry that reflects and celebrates the 
              diversity of our world, operates sustainably, and uses its influence to 
              drive positive social change. While we know there&apos;s still work to be done, 
              we&apos;re committed to continuous improvement and leading by example.
            </p>
            <Link href="/contact/" className="btn-primary">
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
