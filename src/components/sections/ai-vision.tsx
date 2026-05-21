"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, BrainCircuit, Rocket } from "lucide-react"
import { type GenerateFuturisticProjectVisionOutput } from "@/ai/flows/generate-futuristic-project-vision"

export function AIVision() {
  const [vision] = useState<GenerateFuturisticProjectVisionOutput | null>(null)

  return (
    <section id="vision" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-[10px] font-bold tracking-widest mb-6">
              <BrainCircuit size={14} /> AI_REASONING_ENGINE_v2.5
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6">
              CO-CREATING THE <span className="text-primary neon-text">FUTURE.</span>
            </h2>
            <p className="text-foreground/60 text-lg">
              My custom AI models are designed to architect cinematic, futuristic visions for any complex digital infrastructure instantly.
            </p>
          </div>

          <AnimatePresence mode="wait">
            {vision && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                className="glass p-8 md:p-12 rounded-3xl border-primary/30 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Rocket size={120} className="text-primary" />
                </div>

                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <div className="text-primary font-bold tracking-[0.2em] text-xs mb-2 uppercase">MISSION NAME: {vision.projectName}</div>
                    <h3 className="text-3xl font-bold text-white mb-2 font-headline italic">{vision.tagline}</h3>
                    <p className="text-foreground/70 leading-relaxed mb-8">{vision.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-primary font-bold text-sm mb-4 flex items-center gap-2">
                          <Sparkles size={16} /> CORE_FEATURES
                        </h4>
                        <ul className="space-y-3">
                          {vision.coreFeatures.map((f, i) => (
                            <li key={i} className="text-sm text-foreground/50 flex items-start gap-2">
                              <span className="text-primary mt-1">▹</span> {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-secondary font-bold text-sm mb-4 flex items-center gap-2">
                          <BrainCircuit size={16} /> TECH_STACK
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {vision.keyTechnologies.map((t, i) => (
                            <span key={i} className="px-2 py-1 text-[10px] font-bold border border-secondary/30 bg-secondary/5 text-secondary rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="text-xs font-bold text-foreground/40 mb-2 uppercase tracking-widest">Potential Impact Analysis</div>
                  <p className="text-foreground/80 font-medium italic">"{vision.potentialImpact}"</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}