"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Instagram } from "lucide-react";
import PageHeader from "@/components/page-header";
import ContactForm from "@/components/contact-form";
import XIcon from "@/components/icons/x-icon";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "info@nzingagroup.com",
    href: "mailto:info@nzingagroup.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "United States",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@nzingagrp",
    href: "https://www.instagram.com/nzingagrp/",
  },
  {
    icon: XIcon,
    label: "X (Twitter)",
    handle: "@nzingagrp",
    href: "https://twitter.com/nzingagrp",
  },
  {
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
    label: "TikTok",
    handle: "@nzingagrp",
    href: "https://www.tiktok.com/@nzingagrp",
  },
];

export default function ContactPage() {
  return (
    <div className="page-transition">
      <PageHeader
        subtitle="GET IN TOUCH"
        title="Contact Us"
        description="Have a question, proposal, or just want to say hello? We'd love to hear from you."
      />

      {/* Contact Section */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <h2 className="font-serif text-2xl text-foreground mb-8">
                Let&apos;s Connect
              </h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground-muted mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-foreground hover:text-accent transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-4">Follow Us</h3>
                <div className="space-y-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-foreground-muted hover:text-accent transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-background-tertiary border border-border flex items-center justify-center group-hover:border-accent/50 transition-colors">
                        <social.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground group-hover:text-accent transition-colors">
                          {social.label}
                        </p>
                        <p className="text-xs text-foreground-muted">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Division-specific contacts */}
              <div className="mt-12">
                <h3 className="text-sm font-semibold text-foreground mb-4">Division Inquiries</h3>
                <div className="card p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground-muted">Music</span>
                    <span className="text-sm text-foreground">music@nzingagroup.com</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground-muted">Pictures & TV</span>
                    <span className="text-sm text-foreground">pictures@nzingagroup.com</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground-muted">Management</span>
                    <a
                      href="https://nzingamgmt.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent hover:text-accent-light transition-colors"
                    >
                      nzingamgmt.com
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground-muted">Gaming</span>
                    <span className="text-sm text-foreground">gaming@nzingagroup.com</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="card p-8 md:p-10">
                <h2 className="font-serif text-2xl text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-foreground-muted mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
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
              Common Questions
            </h2>
            <div className="text-left space-y-6 mb-8">
              <div>
                <h3 className="text-foreground font-medium mb-2">
                  How can I submit music or content for consideration?
                </h3>
                <p className="text-foreground-muted text-sm">
                  Please use the contact form above and select the appropriate subject. 
                  Include relevant links or attachments in your message.
                </p>
              </div>
              <div>
                <h3 className="text-foreground font-medium mb-2">
                  I&apos;m interested in talent representation. How do I apply?
                </h3>
                <p className="text-foreground-muted text-sm">
                  For management inquiries, please visit{" "}
                  <a
                    href="https://nzingamgmt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-light transition-colors"
                  >
                    nzingamgmt.com
                  </a>{" "}
                  or contact us through the form above.
                </p>
              </div>
              <div>
                <h3 className="text-foreground font-medium mb-2">
                  Are there job opportunities available?
                </h3>
                <p className="text-foreground-muted text-sm">
                  Check our{" "}
                  <a href="/careers/" className="text-accent hover:text-accent-light transition-colors">
                    Careers page
                  </a>{" "}
                  for current openings, or send your resume through the contact form.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
