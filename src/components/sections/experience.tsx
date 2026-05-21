"use client"

import React from "react"
import { motion } from "framer-motion"
import { Cpu, Zap, Rocket, Layers } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"

export function Experience() {
  const { t } = useLanguage()

  const icons = [<Rocket />, <Cpu />, <Layers />, <Zap />]

  return (
    <section className="py-24 relative">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-20">
          <div className="text-secondary font-bold tracking-widest text-sm mb-4 uppercase">{t.experience.sub}</div>
          <h2 className="text-4xl md:text-7xl font-bold font-headline">CAREER <span className="text-secondary">TIMELINE.</span></h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent" />

          <div className="space-y-16">
            {t.experience.items.map((item, idx) => (
              <motion.div
                key={idx}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-2 border-secondary z-10 flex items-center justify-center shadow-[0_0_15px_rgba(89,0,255,0.5)]">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                </div>

                <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                  <div className="glass p-6 rounded-2xl border-white/5 hover:border-secondary/30 transition-all">
                    <div className={`flex items-center gap-3 mb-4 ${idx % 2 !== 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      {idx % 2 !== 0 && <span className="text-secondary md:order-last">{icons[idx]}</span>}
                      {idx % 2 === 0 && <span className="text-secondary">{icons[idx]}</span>}
                      <span className="text-sm font-bold text-secondary tracking-widest">{item.year}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <div className="text-primary font-bold mb-4">{item.company}</div>
                    <p className="text-foreground/60 leading-relaxed text-sm whitespace-pre-line">{item.desc}</p>
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
