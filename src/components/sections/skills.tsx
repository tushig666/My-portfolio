
"use client"

import React from "react"
import { motion } from "framer-motion"
import { 
  Layers, 
  Globe, 
  Database, 
  Code2, 
  Terminal, 
  Palette, 
  BrainCircuit, 
  Server, 
  Zap, 
  GitBranch, 
  Share2, 
  Cloud 
} from "lucide-react"

const skills = [
  { name: "React", label: "Frontend", icon: <Layers size={18} /> },
  { name: "Next.js", label: "Framework", icon: <Globe size={18} /> },
  { name: "TypeScript", label: "Language", icon: <Code2 size={18} /> },
  { name: "Python", label: "Backend/AI", icon: <Terminal size={18} /> },
  { name: "TailwindCSS", label: "Design", icon: <Palette size={18} /> },
  { name: "PostgreSQL", label: "Database", icon: <Database size={18} /> },
  { name: "OpenAI API", label: "AI", icon: <BrainCircuit size={18} /> },
  { name: "Node.js", label: "Backend", icon: <Server size={18} /> },
  { name: "Framer Motion", label: "Animation", icon: <Zap size={18} /> },
  { name: "Git", label: "Tooling", icon: <GitBranch size={18} /> },
  { name: "REST APIs", label: "Integration", icon: <Share2 size={18} /> },
  { name: "Cloud Native", label: "DevOps", icon: <Cloud size={18} /> }
]

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-[0.3em] text-sm mb-4 uppercase"
          >
            SYSTEM_CAPABILITIES
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-6xl font-headline font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            TECH <span className="text-primary neon-text">ARSENAL.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 max-w-6xl mx-auto">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group"
            >
              <div className="relative p-4 rounded-xl glass border-white/5 hover:border-primary/30 transition-all flex flex-col items-start gap-3 h-full">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-primary group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                
                <div>
                  <div className="text-[9px] font-bold text-primary tracking-widest uppercase mb-1 opacity-70 group-hover:opacity-100 transition-opacity">
                    {skill.label}
                  </div>
                  <h3 className="text-sm font-bold text-white font-headline tracking-tight">{skill.name}</h3>
                </div>

                {/* Decorative scanning line */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
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
