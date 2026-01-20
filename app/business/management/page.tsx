"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Users, CheckCircle, ExternalLink } from "lucide-react";
import PageHeader from "@/components/page-header";
import { getDivisionById } from "@/lib/business-data";

export default function ManagementPage() {
  const division = getDivisionById("management");

  if (!division) return null;

  return (
    <div className="page-transition">
      <PageHeader
        subtitle="NZINGA MANAGEMENT"
        title="Talent Management Services"
        description="Guiding careers and building legacies for entertainers, athletes, and creative professionals."
      />

      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 mb-12">
        <Link
          href="/business/"
          className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to All Businesses
        </Link>
      </div>

      {/* Main Content */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-20 h-20 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-8">
                <Users className="w-10 h-10 text-accent" />
              </div>

              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                About Nzinga Management
              </h2>

              <div className="space-y-4 text-foreground-muted leading-relaxed">
                <p>{division.fullDescription}</p>
                <p>
                  Our experienced management team provides personalized attention 
                  and strategic guidance to help our clients achieve their career goals 
                  while maintaining their artistic integrity.
                </p>
              </div>

              {/* External Link */}
              <div className="mt-8">
                <a
                  href="https://nzingamgmt.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex"
                >
                  Visit Nzinga Management
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="card p-8">
                <h3 className="font-serif text-xl text-foreground mb-6">Our Services</h3>
                <ul className="space-y-4">
                  {division.features.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground-muted">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-gradient" />

      {/* Roster Preview */}
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
              Our Talent Roster
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              We represent a diverse roster of talent across entertainment, sports, and creative industries.
            </p>
          </motion.div>

          {/* Placeholder Talent Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Users className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-1">Talent {i}</h3>
                <p className="text-xs text-foreground-muted">Category</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href="https://nzingamgmt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors"
            >
              <span>View Full Roster</span>
              <ExternalLink className="w-4 h-4" />
            </a>
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
              Looking for Representation?
            </h2>
            <p className="text-foreground-muted mb-8 max-w-xl mx-auto">
              Whether you&apos;re an established professional or emerging talent, 
              we&apos;d love to learn about your career goals and explore how we can help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://nzingamgmt.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit Management Site
                <ExternalLink className="w-4 h-4" />
              </a>
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
