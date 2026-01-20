"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

interface BusinessCardProps {
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  href: string;
  index?: number;
  externalLink?: string;
}

export default function BusinessCard({
  name,
  tagline,
  description,
  icon: Icon,
  href,
  index = 0,
  externalLink,
}: BusinessCardProps) {
  const cardContent = (
    <>
      {/* Icon */}
      <div className="w-16 h-16 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
        <Icon className="w-8 h-8 text-accent" />
      </div>

      {/* Content */}
      <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2 group-hover:text-accent transition-colors">
        {name}
      </h3>
      <p className="text-sm text-accent mb-4">{tagline}</p>
      <p className="text-foreground-muted text-sm leading-relaxed mb-6">
        {description}
      </p>

      {/* Link */}
      <div className="flex items-center gap-2 text-sm text-foreground-muted group-hover:text-accent transition-colors">
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        {externalLink && (
          <span className="text-xs text-foreground-muted/50">(External)</span>
        )}
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {externalLink ? (
        <a
          href={externalLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block card p-8 h-full group"
        >
          {cardContent}
        </a>
      ) : (
        <Link href={href} className="block card p-8 h-full group">
          {cardContent}
        </Link>
      )}
    </motion.div>
  );
}
