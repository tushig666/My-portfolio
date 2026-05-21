"use client"

import React from "react"
import { Navbar } from "@/components/layout/navbar"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Experience } from "@/components/sections/experience"
import { AIVision } from "@/components/sections/ai-vision"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="relative bg-background min-h-screen">
      <div className="relative">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <AIVision />
        <Contact />
      </div>

      {/* Persistent global background noise/texture */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03] contrast-150 brightness-150" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
    </main>
  )
}
