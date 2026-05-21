"use client"

import React, { useEffect, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 30, stiffness: 400 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable = target.closest('button, a, [role="button"]')
      setIsHovering(!!isClickable)
    }

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", handleHover)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleHover)
    }
  }, [cursorX, cursorY])

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      {/* Outer Halo */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-primary/30 mix-blend-screen flex items-center justify-center pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 2.2 : 1,
          backgroundColor: isHovering ? "rgba(0, 5, 255, 0.15)" : "rgba(0, 5, 255, 0)",
          borderColor: isHovering ? "rgba(0, 5, 255, 0.8)" : "rgba(0, 5, 255, 0.3)",
        }}
      >
        <motion.div 
          className="w-1 h-1 bg-primary rounded-full shadow-[0_0_10px_#0005FF]"
          animate={{ scale: isHovering ? 0 : 1 }}
        />
      </motion.div>

      {/* Inner Core Light */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full opacity-60 blur-[1px]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovering ? 0.5 : 1,
        }}
      />

      {/* Energy Bloom on Hover */}
      {isHovering && (
        <motion.div 
          className="fixed top-0 left-0 w-32 h-32 bg-primary/10 rounded-full blur-xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.5 }}
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      )}
    </div>
  )
}