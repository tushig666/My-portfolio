"use client"

import React, { useEffect, useState } from "react"
import { motion, useScroll, useSpring, useTransform, useMotionValue } from "framer-motion"

export function AtmosphericBackground() {
  const { scrollYProgress } = useScroll()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { damping: 50, stiffness: 200 })
  const springY = useSpring(mouseY, { damping: 50, stiffness: 200 })

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.3])
  const blurValue = useTransform(scrollYProgress, [0, 1], [40, 80])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#02040a]">
      {/* Base Noise/Texture */}
      <div className="absolute inset-0 opacity-[0.03] contrast-150 brightness-150" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />

      {/* Cyber Grid Layer */}
      <div className="absolute inset-0 cyber-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

      {/* Deep Atmospheric Haze Layer 1 */}
      <motion.div 
        className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 blur-[100px] animate-float-slow"
        style={{ opacity }}
      />

      {/* Deep Atmospheric Haze Layer 2 */}
      <motion.div 
        className="absolute bottom-[-10%] right-[-10%] w-[100%] h-[100%] bg-gradient-to-bl from-secondary/5 via-transparent to-primary/5 blur-[120px] animate-float-slow"
        style={{ animationDirection: 'reverse', animationDuration: '25s' }}
      />

      {/* Scroll-Aware Section Glow */}
      <motion.div 
        className="absolute w-[150vw] h-[100vh] rounded-full bg-primary/10 blur-[150px]"
        style={{
          top: useTransform(scrollYProgress, [0, 1], ["-20%", "60%"]),
          left: "-25%",
          opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 0.6, 0.6, 0.4]),
        }}
      />

      {/* Dynamic Cursor Energy Glow */}
      <motion.div 
        className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,5,255,0.15)_0%,rgba(89,0,255,0.05)_50%,transparent_100%)] blur-[80px]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Floating Fog Fields */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-pulse-soft" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] animate-pulse-soft" style={{ animationDelay: '2s' }} />
      </div>

      {/* Edge Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,0.9)]" />
    </div>
  )
}