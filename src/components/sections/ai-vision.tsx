"use client"

import React from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/providers/language-provider"

export function AIVision() {
  const { t } = useLanguage()

  // Professionally style Japanese vs English highlighting
  const renderVisionText = () => {
    if (t.vision.text.includes("Creating interfaces")) {
      return (
        <>
          <span className="text-primary neon-text">Creating interfaces</span> that do more than <span className="text-primary neon-text italic">function</span> — experiences that move, react, evolve, and <span className="text-primary neon-text">feel alive.</span>
        </>
      )
    }
    // Japanese version
    return (
      <>
        <span className="text-primary neon-text">機能を超えた</span>インターフェースの創造 — 動き、反応し、進化し、<span className="text-primary neon-text">生命を感じさせる</span>体験。
      </>
    )
  }

  return (
    <section id="vision" className="py-24 relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-primary/5 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      
      <div className="container px-6 mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="text-primary font-bold tracking-[0.3em] text-sm mb-8 uppercase">{t.vision.sub}</div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline leading-[1.1] tracking-tighter text-white">
              {renderVisionText()}
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
