"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Music, CheckCircle } from "lucide-react";
import PageHeader from "@/components/page-header";
import { getDivisionById } from "@/lib/business-data";

export default function MusicPage() {
  const division = getDivisionById("music");

  if (!division) return null;

  return (
    <div className="page-transition">
      <PageHeader
        subtitle="NZINGA MUSIC"
        title="Artist Development & Label Services"
        description="Empowering artists to reach their full potential through comprehensive label services and global distribution."
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
                <Music className="w-10 h-10 text-accent" />
              </div>

              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                About Nzinga Music
              </h2>

              <div className="space-y-4 text-foreground-muted leading-relaxed">
                <p>{division.fullDescription}</p>
                <p>
                  We believe in nurturing talent from the ground up, providing artists 
                  with the resources, guidance, and platform they need to succeed in 
                  today&apos;s competitive music industry.
                </p>
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

      {/* Featured Section */}
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
              Featured Artists
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Discover the talented artists we work with across various genres.
            </p>
          </motion.div>

          {/* Placeholder Artist Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-6 text-center"
              >
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Music className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">Artist {i}</h3>
                <p className="text-sm text-foreground-muted">Coming Soon</p>
              </motion.div>
            ))}
          </div>
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
              Ready to Share Your Music?
            </h2>
            <p className="text-foreground-muted mb-8 max-w-xl mx-auto">
              We&apos;re always looking for exceptional talent. If you&apos;re an artist 
              looking to take your career to the next level, we&apos;d love to hear from you.
            </p>
            <Link href="/contact/" className="btn-primary">
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
