"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  href: string;
  index?: number;
}

export default function NewsCard({
  title,
  excerpt,
  date,
  category,
  href,
  index = 0,
}: NewsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href} className="block card p-6 h-full group">
        {/* Category Badge */}
        <span className="inline-block text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full mb-4">
          {category}
        </span>

        {/* Title */}
        <h3 className="font-serif text-lg md:text-xl text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-foreground-muted text-sm leading-relaxed mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
          <div className="flex items-center gap-2 text-xs text-foreground-muted">
            <Calendar className="w-3.5 h-3.5" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-foreground-muted group-hover:text-accent transition-colors">
            <span>Read More</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
