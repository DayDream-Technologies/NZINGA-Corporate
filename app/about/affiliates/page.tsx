"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Users, Gamepad2, Building2 } from "lucide-react";
import PageHeader from "@/components/page-header";

const affiliates = [
  {
    name: "Nzinga Management",
    description: "Our dedicated talent management division representing entertainers, athletes, and creative professionals.",
    type: "Division",
    website: "https://nzingamgmt.com",
    icon: Users,
  },
  {
    name: "Royal BattleField",
    description: "Strategic gaming partner collaborating with Nzinga Gaming on interactive entertainment experiences.",
    type: "Partner",
    website: null,
    icon: Gamepad2,
  },
];

export default function AffiliatesPage() {
  return (
    <div className="page-transition">
      <PageHeader
        subtitle="OUR NETWORK"
        title="Affiliates & Partners"
        description="Explore the companies and organizations that are part of the Nzinga Group family."
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

      {/* Affiliates Grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {affiliates.map((affiliate, index) => (
              <motion.div
                key={affiliate.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-8 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-16 h-16 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <affiliate.icon className="w-8 h-8 text-accent" />
                  </div>
                  <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {affiliate.type}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-foreground mb-3">
                  {affiliate.name}
                </h3>
                <p className="text-foreground-muted leading-relaxed mb-6">
                  {affiliate.description}
                </p>

                {affiliate.website ? (
                  <a
                    href={affiliate.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <span className="text-foreground-muted text-sm">
                    Partnership Details Coming Soon
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-gradient" />

      {/* Partnership Info */}
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
              <Building2 className="w-8 h-8 text-accent" />
            </div>
            <h2 className="font-serif text-heading-md text-foreground mb-6">
              Growing Together
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto leading-relaxed">
              At Nzinga Group, we believe in the power of partnership. Our network of 
              affiliates and partners enables us to deliver comprehensive solutions across 
              the entertainment spectrum while maintaining excellence in each vertical.
            </p>
          </motion.div>
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
              Interested in Partnership?
            </h2>
            <p className="text-foreground-muted mb-8 max-w-xl mx-auto">
              We&apos;re always open to exploring strategic partnerships that align with 
              our mission and values. If you&apos;re interested in collaborating with 
              Nzinga Group, we&apos;d love to hear from you.
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
