"use client";

import { motion } from "framer-motion";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent/20 md:-translate-x-1/2" />

      <div className="space-y-12 md:space-y-24">
        {events.map((event, index) => (
          <motion.div
            key={event.year}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 bg-accent rounded-full shadow-lg shadow-accent/50 z-10" />

            {/* Year - Desktop */}
            <div className={`hidden md:block w-1/2 ${index % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
              <span className="font-serif text-3xl text-accent">{event.year}</span>
            </div>

            {/* Content */}
            <div className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
              {/* Year - Mobile */}
              <span className="md:hidden font-serif text-xl text-accent mb-2 block">{event.year}</span>
              
              <div className="card p-6">
                <h3 className="font-serif text-xl text-foreground mb-3">{event.title}</h3>
                <p className="text-foreground-muted text-sm leading-relaxed">{event.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
