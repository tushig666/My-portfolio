"use client"

import React from "react"
import { motion } from "framer-motion"

export function AIVision() {
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
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-headline leading-[1.1] tracking-tighter">
              Creating interfaces that do more than <span className="text-primary neon-text italic">function</span> — experiences that move, react, evolve, and <span className="text-secondary neon-text">feel alive.</span>
            </h2>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
