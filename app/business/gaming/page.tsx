"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Gamepad2, CheckCircle, Zap, Trophy, Users, Sparkles } from "lucide-react";
import PageHeader from "@/components/page-header";
import { getDivisionById } from "@/lib/business-data";

export default function GamingPage() {
  const division = getDivisionById("gaming");

  if (!division) return null;

  const initiatives = [
    {
      icon: Trophy,
      title: "Esports Initiatives",
      description: "Building competitive gaming programs and supporting emerging esports talent.",
    },
    {
      icon: Zap,
      title: "Royal BattleField Partnership",
      description: "Strategic collaboration to create innovative gaming experiences.",
    },
    {
      icon: Users,
      title: "Creator Support",
      description: "Programs to help gaming content creators grow their audience and brand.",
    },
    {
      icon: Sparkles,
      title: "Game Development",
      description: "Developing original gaming titles and interactive entertainment experiences.",
    },
  ];

  return (
    <div className="page-transition">
      <PageHeader
        subtitle="NZINGA GAMING"
        title="Interactive Entertainment"
        description="Building the next generation of gaming experiences through innovative development and strategic partnerships."
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
                <Gamepad2 className="w-10 h-10 text-accent" />
              </div>

              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                About Nzinga Gaming
              </h2>

              <div className="space-y-4 text-foreground-muted leading-relaxed">
                <p>{division.fullDescription}</p>
                <p>
                  Gaming represents the fastest-growing segment of entertainment, 
                  and Nzinga Gaming is positioned at the forefront of this evolution, 
                  bringing our entertainment expertise to the interactive space.
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
                <h3 className="font-serif text-xl text-foreground mb-6">Our Focus Areas</h3>
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

      {/* Initiatives Section */}
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
              Our Initiatives
            </h2>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              Explore the key areas where Nzinga Gaming is making an impact.
            </p>
          </motion.div>

          {/* Initiative Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {initiatives.map((initiative, i) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-8 group"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <initiative.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
                  {initiative.title}
                </h3>
                <p className="text-foreground-muted text-sm">
                  {initiative.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Highlight */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card p-12 text-center border-accent/30 glow-pulse"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Trophy className="w-8 h-8 text-accent" />
            </div>
            <h2 className="font-serif text-2xl text-foreground mb-4">
              Royal BattleField Partnership
            </h2>
            <p className="text-foreground-muted mb-6 max-w-xl mx-auto">
              In December 2022, we announced our strategic partnership with Royal BattleField, 
              marking a significant milestone in our gaming division&apos;s growth and opening 
              new opportunities for innovative gaming experiences.
            </p>
            <span className="text-xs text-accent">Announced December 3, 2022</span>
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
              Partner With Us
            </h2>
            <p className="text-foreground-muted mb-8 max-w-xl mx-auto">
              Whether you&apos;re a game developer, esports organization, or content creator, 
              we&apos;re interested in exploring partnership opportunities.
            </p>
            <Link href="/contact/" className="btn-primary">
              Let&apos;s Talk Gaming
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
