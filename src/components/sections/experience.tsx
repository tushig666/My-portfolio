"use client"

import React from "react"
import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Award } from "lucide-react"

const timeline = [
  {
    year: "2024 - PRESENT",
    title: "Senior AI Engineer",
    company: "Future Lab",
    desc: "Leading development of generative UI systems and intelligent automation platforms.",
    icon: <Briefcase />
  },
  {
    year: "2022 - 2024",
    title: "Frontend Architect",
    company: "NeoTech Inc",
    desc: "Spearheaded the migration to Next.js 14 and implemented cinema-grade animation standards.",
    icon: <Briefcase />
  },
  {
    year: "2020 - 2022",
    title: "Interactive Developer",
    company: "Creative Studio",
    desc: "Focused on high-end interactive websites and 3D web experiences using Three.js.",
    icon: <Award />
  },
  {
    year: "2016 - 2020",
    title: "Computer Science Degree",
    company: "Tech University",
    desc: "Graduated with honors, focusing on software architecture and UI/UX engineering.",
    icon: <GraduationCap />
  }
]

export function Experience() {
  return (
    <section className="py-24 relative">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-20">
          <div className="text-secondary font-bold tracking-widest text-sm mb-4 uppercase">CHRONOLOGY</div>
          <h2 className="text-4xl md:text-7xl font-bold font-headline">CAREER <span className="text-secondary">TIMELINE.</span></h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent" />

          <div className="space-y-16">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Connector Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-secondary z-10 flex items-center justify-center shadow-[0_0_15px_rgba(51,255,204,0.5)]">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                </div>

                <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                  <div className="glass p-6 rounded-2xl border-white/5 hover:border-secondary/30 transition-all">
                    <div className="flex items-center gap-3 mb-4 md:justify-end lg:justify-start">
                      {idx % 2 !== 0 && <span className="text-secondary md:order-last">{item.icon}</span>}
                      {idx % 2 === 0 && <span className="text-secondary">{item.icon}</span>}
                      <span className="text-sm font-bold text-secondary tracking-widest">{item.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <div className="text-primary font-bold mb-4">{item.company}</div>
                    <p className="text-foreground/60 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}