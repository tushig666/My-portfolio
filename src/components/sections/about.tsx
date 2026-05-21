"use client"

import React from "react"
import { motion } from "framer-motion"
import { Code2, Terminal, Cpu, Sparkles } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 text-primary font-bold tracking-widest text-sm mb-6 uppercase">
              <Terminal size={18} /> {t.about.sub}
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-headline mb-8">
              {t.about.title}
            </h2>
            <div className="space-y-6 text-foreground/70 text-lg">
              <p>{t.about.desc1}</p>
              <p>{t.about.desc2}</p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              {[
                { icon: <Cpu />, title: t.about.ai, desc: t.about.aiDesc },
                { icon: <Code2 />, title: t.about.ui, desc: t.about.uiDesc },
                { icon: <Sparkles />, title: t.about.exp, desc: t.about.expDesc },
                { icon: <Terminal />, title: t.about.sys, desc: t.about.sysDesc }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  className="p-4 rounded-xl glass border-primary/20 hover:border-primary/50 transition-colors group"
                  whileHover={{ y: -5 }}
                >
                  <div className="text-primary mb-3 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-foreground/50">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Terminal Window */}
            <div className="relative z-10 rounded-2xl overflow-hidden glass border-white/10 shadow-2xl">
              <div className="bg-white/5 px-6 py-4 border-b border-white/10 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] font-code text-white/30 uppercase tracking-widest">{t.about.terminal}</div>
              </div>
              <div className="p-8 font-code text-sm sm:text-base space-y-4">
                <div className="flex gap-3">
                  <span className="text-primary">{'>'}</span>
                  <span className="text-white">{t.about.init}</span>
                </div>
                <div className="text-secondary/80 ml-6">
                  {`{`}
                  <br />
                  &nbsp;&nbsp;name: "{t.about.profile.name}",
                  <br />
                  &nbsp;&nbsp;status: "{t.about.profile.status}",
                  <br />
                  &nbsp;&nbsp;location: "{t.about.profile.location}",
                  <br />
                  &nbsp;&nbsp;focus: [{t.about.profile.focus.map(f => `"${f}"`).join(", ")}]
                  <br />
                  {`}`}
                </div>
                <div className="flex gap-3">
                  <span className="text-primary">{'>'}</span>
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-[60px] rounded-full z-0" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-secondary/10 blur-[80px] rounded-full z-0" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
