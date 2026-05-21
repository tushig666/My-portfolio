
"use client"

import React, { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Github, Mail, ChevronDown } from "lucide-react"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  
  const profileImage = PlaceHolderImages.find(img => img.id === 'profile')?.imageUrl || ""

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" ref={containerRef}>
      {/* Background Particles/Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,5,255,0.05),transparent_70%)]" />
        <div className="absolute inset-0 cyber-grid [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_90%)] opacity-30" />
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 text-center lg:text-left">
          
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              SYSTEM STATUS: ONLINE
            </motion.div>

            <motion.h1
              style={{ y: y1 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-7xl lg:text-8xl font-headline font-bold leading-tight mb-6 tracking-tighter whitespace-nowrap"
            >
              <span className="text-primary neon-text">TSE</span>{" "}
              <span className="text-white">TUSHIG</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-lg md:text-xl lg:text-2xl text-foreground/60 max-w-2xl font-medium tracking-wide mb-12 font-headline"
            >
              FRONTEND ARCHITECT & <span className="text-secondary">AI BUILDER</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6"
            >
              <a href="#projects" className="group relative px-8 py-4 bg-primary text-background font-bold rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95 neon-glow">
                <span className="relative z-10 flex items-center gap-2">
                  VIEW PROJECTS <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
              </a>
              
              <a href="#contact" className="group relative px-8 py-4 border border-white/10 hover:border-primary/50 text-foreground font-bold rounded-lg overflow-hidden transition-all hover:scale-105 active:scale-95 glass">
                CONTACT ME
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 group flex-shrink-0"
          >
            {/* Pulsing Aura */}
            <div className="absolute inset-[-6px] rounded-full bg-primary/30 blur-md group-hover:bg-primary/50 transition-all animate-pulse" />
            
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/50 shadow-[0_0_20px_rgba(0,5,255,0.5)] z-10" />
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 glass p-1.5">
              <Image
                src={profileImage}
                alt="Tushig Tse"
                fill
                className="object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Sidebar Socials */}
      <motion.div 
        className="fixed left-8 bottom-12 hidden lg:flex flex-col gap-6 z-40"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
      >
        <div className="w-[1px] h-24 bg-white/10 mx-auto" />
        <a href="https://github.com/tushig666" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-all hover:-translate-y-1"><Github size={20} /></a>
        <a href="mailto:tsetushig@gmail.com" className="hover:text-primary transition-all hover:-translate-y-1"><Mail size={20} /></a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/30 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] tracking-[0.3em] font-bold uppercase">Initialize Scroll</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  )
}
