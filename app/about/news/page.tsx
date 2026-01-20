"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, ArrowRight } from "lucide-react";
import PageHeader from "@/components/page-header";
import { newsItems } from "@/lib/news-data";

export default function NewsPage() {
  return (
    <div className="page-transition">
      <PageHeader
        subtitle="STAY INFORMED"
        title="News & Updates"
        description="The latest announcements, partnerships, and developments from across Nzinga Group."
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

      {/* News List */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {newsItems.map((news, index) => (
              <motion.article
                key={news.id}
                id={news.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-8 scroll-mt-32"
              >
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {news.category}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-foreground-muted">
                    <Calendar className="w-4 h-4" />
                    <time>{news.date}</time>
                  </div>
                </div>

                <h2 className="font-serif text-2xl text-foreground mb-4">
                  {news.title}
                </h2>

                <p className="text-foreground-muted leading-relaxed mb-6">
                  {news.excerpt}
                </p>

                {/* Extended content based on the news item */}
                {news.slug === "the-melody-crowdfunding" && (
                  <div className="text-foreground-muted leading-relaxed space-y-4 mb-6">
                    <p>
                      Nzinga Pictures is thrilled to announce the launch of our crowdfunding 
                      campaign for &quot;The Melody,&quot; an exciting new drama series that explores 
                      the lives, struggles, and triumphs of musicians in the modern music industry.
                    </p>
                    <p>
                      This project represents our commitment to bringing diverse, compelling 
                      stories to audiences while embracing innovative approaches to content 
                      financing. We invite fans and supporters to be part of this journey 
                      and help bring &quot;The Melody&quot; to life.
                    </p>
                  </div>
                )}

                {news.slug === "royal-battlefield-partnership" && (
                  <div className="text-foreground-muted leading-relaxed space-y-4 mb-6">
                    <p>
                      Nzinga Group is excited to announce a strategic partnership with 
                      Royal BattleField, marking a significant milestone in our expansion 
                      into the gaming industry.
                    </p>
                    <p>
                      This collaboration will enable us to develop innovative gaming 
                      experiences and explore opportunities in esports, game development, 
                      and interactive entertainment. The partnership reflects our commitment 
                      to diversifying our entertainment portfolio and meeting audiences 
                      where they are.
                    </p>
                  </div>
                )}

                {news.slug === "management-agency-launch" && (
                  <div className="text-foreground-muted leading-relaxed space-y-4 mb-6">
                    <p>
                      We are proud to announce the expansion of the Nzinga brand with the 
                      launch of Nzinga Management, our dedicated talent management division.
                    </p>
                    <p>
                      Nzinga Management will focus on representing and developing careers 
                      for entertainers, athletes, and creative professionals. This addition 
                      strengthens our ability to support talent throughout their journey, 
                      from discovery to sustained success.
                    </p>
                    <p>
                      Visit <a href="https://nzingamgmt.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-light transition-colors">nzingamgmt.com</a> to 
                      learn more about our management services and roster.
                    </p>
                  </div>
                )}

                <div className="flex items-center gap-2 text-sm text-accent">
                  <span>Read Full Story</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
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
              Stay Updated
            </h2>
            <p className="text-foreground-muted mb-8 max-w-xl mx-auto">
              Follow us on social media to stay informed about the latest news, 
              announcements, and developments from Nzinga Group.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.instagram.com/nzingagrp/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Follow on Instagram
              </a>
              <a
                href="https://twitter.com/nzingagrp"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Follow on X
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
