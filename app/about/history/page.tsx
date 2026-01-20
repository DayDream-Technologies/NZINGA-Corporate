"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import PageHeader from "@/components/page-header";
import Timeline from "@/components/timeline";

const timelineEvents = [
  {
    year: "2022",
    title: "Nzinga Group Founded",
    description: "The foundation of Nzinga Group was laid with a vision to create a diversified entertainment conglomerate that would shape the future of the industry.",
  },
  {
    year: "Oct 2022",
    title: "Launch of Nzinga Management",
    description: "Nzinga Management was established as our dedicated talent management division, expanding our ability to discover, develop, and represent exceptional talent.",
  },
  {
    year: "Dec 2022",
    title: "Royal BattleField Partnership",
    description: "A strategic partnership with Royal BattleField marked our entry into the gaming industry, opening new opportunities for interactive entertainment experiences.",
  },
  {
    year: "2023",
    title: "Pictures Division Expansion",
    description: "Nzinga Pictures expanded its production slate with several projects in development, including the \"Safety Patrol\" feature film concept.",
  },
  {
    year: "July 2023",
    title: "The Melody Crowdfunding",
    description: "Launched crowdfunding campaign for \"The Melody\" TV series, demonstrating our commitment to bringing diverse stories to audiences through innovative funding approaches.",
  },
  {
    year: "Present",
    title: "Continued Growth",
    description: "Today, Nzinga Group continues to expand across all divisions, forging new partnerships and developing groundbreaking content that pushes the boundaries of entertainment.",
  },
];

export default function HistoryPage() {
  return (
    <div className="page-transition">
      <PageHeader
        subtitle="OUR JOURNEY"
        title="Our History"
        description="From our founding vision to becoming a diversified entertainment conglomerate, explore the milestones that have shaped Nzinga Group."
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

      {/* Timeline Section */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto px-6">
          <Timeline events={timelineEvents} />
        </div>
      </section>

      {/* Future Vision */}
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
              Looking Ahead
            </h2>
            <p className="text-foreground-muted leading-relaxed mb-8">
              Our journey is just beginning. As we look to the future, we remain committed 
              to innovation, excellence, and the belief that entertainment has the power 
              to change the world. Stay tuned as we continue to write new chapters in 
              the Nzinga Group story.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/about/news/" className="btn-primary">
                Latest News
              </Link>
              <Link href="/careers/" className="btn-secondary">
                Join Our Journey
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
