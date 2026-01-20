"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/page-header";
import BusinessCard from "@/components/business-card";
import { businessDivisions } from "@/lib/business-data";

export default function BusinessPage() {
  return (
    <div className="page-transition">
      <PageHeader
        subtitle="OUR BUSINESSES"
        title="Entertainment Redefined"
        description="Explore our four dynamic divisions, each driving innovation and excellence in their respective fields of entertainment."
      />

      {/* Business Divisions Grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
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
        </div>
      </section>

      {/* Divider */}
      <div className="divider-gradient" />

      {/* Overview Section */}
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
              A Unified Vision for Entertainment
            </h2>
            <p className="text-foreground-muted leading-relaxed mb-6">
              At Nzinga Group, our business divisions work both independently and 
              collaboratively to create synergies across the entertainment landscape. 
              From discovering musical talent to producing groundbreaking content, 
              managing careers to developing interactive experiences, we&apos;re building 
              an integrated entertainment ecosystem.
            </p>
            <p className="text-foreground-muted leading-relaxed">
              Each division brings unique expertise while sharing our core values of 
              creativity, excellence, and innovation. Together, we&apos;re shaping the 
              future of how audiences experience entertainment.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
