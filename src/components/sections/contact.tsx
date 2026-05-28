"use client"

import React from "react"
import { motion } from "framer-motion"
import { Mail, Github, Instagram, ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"

const contacts = [
  {
    name: "GITHUB",
    link: "https://github.com/tushig666",
    icon: <Github size={24} />,
  },
  {
    name: "INSTAGRAM",
    link: "https://www.instagram.com/tse.tushig/",
    icon: <Instagram size={24} />,
  },
  {
    name: "GMAIL",
    link: "mailto:tsetushig@gmail.com",
    icon: <Mail size={24} />,
  }
]

export function Contact() {
  const { t, language } = useLanguage()

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <div className="text-primary font-bold tracking-widest text-sm mb-4 uppercase">{t.contact.sub}</div>
          <h2 className="text-4xl md:text-7xl font-bold font-headline">
            {language === 'en' ? (
              <>GET IN <span className="text-primary neon-text">TOUCH.</span></>
            ) : (
              <><span className="text-primary neon-text">お問い合わせ。</span></>
            )}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contacts.map((contact, idx) => (
            <motion.a
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative block"
            >
              <div className="glass p-8 rounded-2xl border-white/5 hover:border-primary/50 transition-all text-center h-full flex flex-col items-center justify-center gap-4 group-hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-300">
                  {contact.icon}
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-1">{contact.name}</div>
                </div>
                <ArrowUpRight className="absolute top-6 right-6 opacity-0 group-hover:opacity-40 transition-opacity" size={20} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
