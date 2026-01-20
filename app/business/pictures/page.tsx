"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Film, CheckCircle, Play } from "lucide-react";
import PageHeader from "@/components/page-header";
import { getDivisionById } from "@/lib/business-data";

export default function PicturesPage() {
  const division = getDivisionById("pictures");

  if (!division) return null;

  const projects = [
    {
      title: "Safety Patrol",
      type: "Feature Film",
      status: "In Development",
      description: "An exciting new action-comedy that follows an unlikely team of security guards.",
    },
    {
      title: "The Melody",
      type: "TV Series",
      status: "Crowdfunding",
      description: "A compelling drama series exploring the lives of musicians in the modern music industry.",
    },
    {
      title: "Untitled Project",
      type: "Documentary",
      status: "Pre-Production",
      description: "A documentary exploring the evolution of entertainment in the digital age.",
    },
  ];

  return (
    <div className="page-transition">
      <PageHeader
        subtitle="NZINGA PICTURES"
        title="Movies & Television Production"
        description="Creating compelling stories for film and television that captivate audiences and push creative boundaries."
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
                <Film className="w-10 h-10 text-accent" />
              </div>

              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                About Nzinga Pictures
              </h2>

              <div className="space-y-4 text-foreground-muted leading-relaxed">
                <p>{division.fullDescription}</p>
                <p>
                  Our team brings together experienced producers, directors, and creative 
                  talent to deliver high-quality content that resonates with audiences worldwide.
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

      {/* Projects Section */}
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
              Current Projects
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Explore our current and upcoming productions across film and television.
            </p>
          </motion.div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-6 group"
              >
                {/* Placeholder Image */}
                <div className="aspect-video mb-4 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center overflow-hidden">
                  <Play className="w-12 h-12 text-accent/50 group-hover:text-accent transition-colors" />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                    {project.type}
                  </span>
                  <span className="text-xs text-foreground-muted">{project.status}</span>
                </div>

                <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground-muted">
                  {project.description}
                </p>
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
              Have a Project in Mind?
            </h2>
            <p className="text-foreground-muted mb-8 max-w-xl mx-auto">
              We&apos;re always interested in compelling stories and creative partnerships. 
              Let&apos;s discuss how we can bring your vision to life.
            </p>
            <Link href="/contact/" className="btn-primary">
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
