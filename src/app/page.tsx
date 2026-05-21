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
import { AtmosphericBackground } from "@/components/ui/atmospheric-background"

export default function Home() {
  return (
    <main className="relative bg-transparent min-h-screen">
      {/* Advanced Cinematic Lighting System */}
      <AtmosphericBackground />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <AIVision />
        <Contact />
      </div>
    </main>
  )
}