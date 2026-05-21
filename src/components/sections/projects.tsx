"use client"

import React from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowUpRight, ArrowRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "AetherMotionLab",
    category: "Motion Design AI",
    image: "https://scontent.ffsz1-2.fna.fbcdn.net/v/t1.15752-9/695937949_1002368386057583_6288348065998332572_n.png?stp=dst-png_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Qe1XWAyHxe0Q7kNvwFu7bBJ&_nc_oc=AdoiZ5Dqgz7jixKE2YOJ75w2_HQYks7yFYJYaVD93YsfcNXs0zFWIhYCmOgYg4Btj6M&_nc_zt=23&_nc_ht=scontent.ffsz1-2.fna&_nc_ss=7b6a8&oh=03_Q7cD5QEJ5Okxxyth39VxUgXLbGFK6VnoJgizZwLa3_gGOPhT7g&oe=6A35B07D",
    tags: ["Genkit", "GSAP", "SVG", "AI"],
    github: "https://github.com/tushig666/AetherMotionLab",
    link: "https://aether-motion-lab.vercel.app/"
  },
  {
    title: "VisionCraft AI",
    category: "AI Development",
    image: "https://scontent.ffsz1-2.fna.fbcdn.net/v/t1.15752-9/696427566_967571315894949_1277738291182965691_n.png?stp=dst-png_s960x960&_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_ohc=kvStiqg-S7gQ7kNvwHLxuBy&_nc_oc=AdpET2HlurraIVKB6LF8GkWVanAlPU7jhWY0jdaejd0Ey_dPEV3KxXDSLnQaYDygoq4&_nc_zt=23&_nc_ht=scontent.ffsz1-2.fna&_nc_ss=7b6a8&oh=03_Q7cD5QF0aISTesjwr2FBhEejXeLdVWNHWLVqtGppg85YUyZaJA&oe=6A35B8A4",
    tags: ["Vision AI", "React", "Tailwind"],
    github: "https://github.com/tushig666/VisionCraft-AI",
    link: "https://vision-craft-ai-neon.vercel.app/"
  },
  {
    title: "Mission Control",
    category: "AI Orchestration",
    image: "https://scontent.ffsz1-2.fna.fbcdn.net/v/t1.15752-9/679163846_2069814747218237_7517199737521831349_n.png?stp=dst-png_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=OCVWUWmUpUwQ7kNvwFujoe0&_nc_oc=Adrl-xizFcWfsSBSuQ6oA9r3oN3F8nPQ0TkE4AQyqUzxGu5FB2HKzn5k81QSwTlMhb0&_nc_zt=23&_nc_ht=scontent.ffsz1-2.fna&_nc_ss=7b6a8&oh=03_Q7cD5QHRNyyqbVZdY_yfRAs8P4PfbQAGwj_et1Sr89AsjVHFVg&oe=6A35CD5F",
    tags: ["Multi-Agent", "n8n", "Real-time"],
    github: "https://github.com/tushig666/Multi-Agent",
    link: "https://multi-agent-kappa.vercel.app/"
  },
  {
    title: "Nebula Market",
    category: "Fintech AI",
    image: "https://scontent.ffsz1-2.fna.fbcdn.net/v/t1.15752-9/696552885_1449551996946805_1611283742831038023_n.png?stp=dst-png_s960x960&_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_ohc=KNyCvPkI020Q7kNvwF2c0r3&_nc_oc=AdqRWJjDL9gn0TWpI5_tvbOdhL8f_7U7iJKs0sueXcI6j3PZIGbk5lS29c0h0NPpgcc&_nc_zt=23&_nc_ht=scontent.ffsz1-2.fna&_nc_ss=7b6a8&oh=03_Q7cD5QG4khM8DIdKhNjCy0ErM7hWX9EW3U4dkM2KSk12b4BqoA&oe=6A35D570",
    tags: ["Gemini", "Firebase", "Analytics"],
    github: "https://github.com/tushig666/Nebula-Market",
    link: "https://nebula-market-chi.vercel.app/"
  },
  {
    title: "StyleSphere",
    category: "Design Systems",
    image: "https://scontent.ffsz1-2.fna.fbcdn.net/v/t1.15752-9/696528898_26857463067195644_2072187621414442326_n.png?stp=dst-png_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=9f807c&_nc_ohc=S3oJCVGjOsYQ7kNvwFuuiS-&_nc_oc=AdrtKpQIj5lWY1cMqrevPUO0Kd4aahsL1_0UumZQm5pEdqlnC8pWanB4rZRbT08oTCY&_nc_zt=23&_nc_ht=scontent.ffsz1-2.fna&_nc_ss=7b6a8&oh=03_Q7cD5QGNCcfRGk0OkQiQrvaQZEi9Vwg5Lu3F_kHHyhps5CcvuA&oe=6A35DA41",
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
                  className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                  priority={idx < 3}
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
