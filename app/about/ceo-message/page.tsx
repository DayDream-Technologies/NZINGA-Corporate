"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Quote, User } from "lucide-react";
import PageHeader from "@/components/page-header";

export default function CEOMessagePage() {
  return (
    <div className="page-transition">
      <PageHeader
        subtitle="LEADERSHIP"
        title="Message from the CEO"
        description="A word from our founder and CEO on the vision, journey, and future of Nzinga Group."
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

      {/* CEO Message */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            {/* CEO Photo Placeholder */}
            <div className="lg:col-span-1">
              <div className="card p-6 text-center sticky top-32">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <User className="w-16 h-16 text-accent/50" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-1">Leadership</h3>
                <p className="text-sm text-foreground-muted">Founder & CEO</p>
                <p className="text-xs text-accent mt-2">Nzinga Group</p>
              </div>
            </div>

            {/* Message Content */}
            <div className="lg:col-span-3">
              <div className="card p-8 md:p-12">
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mb-8">
                  <Quote className="w-6 h-6 text-accent" />
                </div>

                <div className="space-y-6 text-foreground-muted leading-relaxed">
                  <p className="text-lg text-foreground">
                    Welcome to Nzinga Group.
                  </p>

                  <p>
                    When we started this journey, we had a simple but ambitious vision: 
                    to create an entertainment company that truly makes a difference—for 
                    artists, for audiences, and for the industry as a whole. Today, as I 
                    look at how far we&apos;ve come, I&apos;m filled with gratitude and excitement 
                    for what lies ahead.
                  </p>

                  <p>
                    Nzinga Group was built on the belief that great entertainment has 
                    the power to inspire, connect, and transform. Whether it&apos;s a song 
                    that moves you, a film that changes your perspective, or a game that 
                    brings people together, we believe in the profound impact that quality 
                    content can have on people&apos;s lives.
                  </p>

                  <p>
                    Our growth from a single division to a diversified entertainment 
                    conglomerate spanning music, pictures, management, and gaming reflects 
                    our commitment to innovation and our ability to adapt to the ever-changing 
                    entertainment landscape. Each division brings unique strengths while 
                    sharing our core values of creativity, excellence, and integrity.
                  </p>

                  <p>
                    As we continue to expand and evolve, our focus remains on discovering 
                    and nurturing talent, producing content that resonates, and building 
                    partnerships that create mutual value. We&apos;re not just building a 
                    company; we&apos;re building a legacy.
                  </p>

                  <p>
                    To our artists, partners, team members, and supporters—thank you for 
                    believing in our vision. Together, we&apos;re shaping the future of 
                    entertainment, one project at a time.
                  </p>

                  <p>
                    The best is yet to come.
                  </p>

                  <div className="pt-8 border-t border-border">
                    <p className="text-foreground font-serif text-xl mb-2">
                      With gratitude,
                    </p>
                    <p className="text-accent">
                      The Nzinga Group Leadership
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Quote */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <blockquote className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed mb-8">
              &ldquo;Entertainment is more than business—it&apos;s about touching hearts, 
              inspiring minds, and creating moments that last a lifetime.&rdquo;
            </blockquote>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent-secondary mx-auto rounded-full" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
