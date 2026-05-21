"use client"

import React from "react"
import { motion } from "framer-motion"
import { Cpu, Zap, Layers, Globe, Database, Smartphone } from "lucide-react"

const skillCategories = [
  {
    title: "Core Stack",
    icon: <Layers className="text-primary" />,
    skills: ["React", "Next.js", "TypeScript", "Node.js"]
  },
  {
    title: "AI & Intelligence",
    icon: <Cpu className="text-secondary" />,
    skills: ["OpenAI APIs", "Generative AI", "Python", "Automation"]
  },
  {
    title: "Experience",
    icon: <Zap className="text-primary" />,
    skills: ["Framer Motion", "GSAP", "Three.js", "TailwindCSS"]
  },
  {
    title: "Architecture",
    icon: <Globe className="text-secondary" />,
    skills: ["PostgreSQL", "REST APIs", "Git/GitHub", "Scalability"]
  }
]

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-7xl font-headline font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            TECH <span className="text-primary neon-text">ARSENAL</span>
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_#00DAFF]"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative p-8 rounded-2xl glass border-white/5 hover:border-primary/30 transition-all h-full">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                  {React.cloneElement(category.icon as React.ReactElement, { size: 48 })}
                </div>
                
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white font-headline">{category.title}</h3>
                </div>

                <ul className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground/60 group-hover:text-foreground transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_5px_#00DAFF]" />
                      <span className="font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>

                {/* Decorative scanning line */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-scanline" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}