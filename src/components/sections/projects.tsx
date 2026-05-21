
"use client"

import React from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight, ArrowRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "AetherMotionLab",
    category: "Motion Design AI",
    image: "https://picsum.photos/seed/aether/800/600",
    tags: ["Genkit", "GSAP", "SVG", "AI"],
    github: "https://github.com/tushig666/AetherMotionLab",
    link: "https://aether-motion-lab.vercel.app/"
  },
  {
    title: "VisionCraft AI",
    category: "AI Development",
    image: "https://picsum.photos/seed/vision/800/600",
    tags: ["Vision AI", "React", "Tailwind"],
    github: "https://github.com/tushig666/VisionCraft-AI",
    link: "https://vision-craft-ai-neon.vercel.app/"
  },
  {
    title: "Mission Control",
    category: "AI Orchestration",
    image: "https://picsum.photos/seed/agents/800/600",
    tags: ["Multi-Agent", "n8n", "Real-time"],
    github: "https://github.com/tushig666/Multi-Agent",
    link: "https://multi-agent-kappa.vercel.app/"
  },
  {
    title: "Nebula Market",
    category: "Fintech AI",
    image: "https://picsum.photos/seed/nebula/800/600",
    tags: ["Gemini", "Firebase", "Analytics"],
    github: "https://github.com/tushig666/Nebula-Market",
    link: "https://nebula-market-chi.vercel.app/"
  },
  {
    title: "StyleSphere",
    category: "Design Systems",
    image: "https://picsum.photos/seed/style/800/600",
    tags: ["Design AI", "Tokens", "Zustand"],
    github: "https://github.com/tushig666/StyleSphere",
    link: "https://style-sphere-azure.vercel.app/"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-black/30">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="text-primary font-bold tracking-widest text-sm mb-4 uppercase">LAUNCH_LOGS</div>
            <h2 className="text-4xl md:text-7xl font-bold font-headline">SELECTED <span className="text-primary neon-text">MISSIONS.</span></h2>
          </div>
          <p className="text-foreground/50 max-w-sm mb-2">
            A curated collection of digital experiences built with performance, aesthetics, and intelligence at their core.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass border-white/5 group-hover:border-primary/50 transition-all">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                  data-ai-hint="futuristic interface dashboard"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform">
                  <div className="text-primary text-xs font-bold tracking-widest uppercase mb-2">{project.category}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                    {project.title}
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
                  </h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 text-[10px] font-bold rounded-full border border-white/10 bg-white/5 text-white/50 group-hover:text-white transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Top Actions */}
                <div className="absolute top-6 right-6 flex gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full glass border-white/10 hover:border-primary/50 hover:text-primary transition-colors"><Github size={18} /></a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full glass border-white/10 hover:border-primary/50 hover:text-primary transition-colors"><ExternalLink size={18} /></a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a href="https://github.com/tushig666" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-foreground/50 hover:text-primary font-bold tracking-widest text-sm transition-all group">
            DISCOVER ALL ARCHIVES <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
