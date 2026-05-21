"use client"

import React from "react"
import { motion } from "framer-motion"
import { ChevronUp } from "lucide-react"
import { useLanguage } from "@/components/providers/language-provider"

export function Footer() {
  const { t } = useLanguage()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 relative border-t border-white/5 mt-24">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col gap-2">
            <div className="text-2xl font-headline font-bold text-primary neon-text tracking-tighter">NEOPULSE</div>
            <div className="text-xs font-code text-foreground/40 tracking-[0.3em] uppercase">{t.footer.design}</div>
          </div>

          <div className="flex gap-8">
            <a href="https://github.com/tushig666" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-foreground/40 hover:text-primary transition-colors tracking-widest uppercase">GitHub</a>
            <a href="#" className="text-xs font-bold text-foreground/40 hover:text-primary transition-colors tracking-widest uppercase">Twitter</a>
            <a href="#" className="text-xs font-bold text-foreground/40 hover:text-primary transition-colors tracking-widest uppercase">LinkedIn</a>
            <a href="#" className="text-xs font-bold text-foreground/40 hover:text-primary transition-colors tracking-widest uppercase">Instagram</a>
          </div>

          <button 
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all group"
          >
            <ChevronUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[10px] font-code text-foreground/20 flex gap-4">
            <span>{t.footer.core}</span>
            <span>{t.footer.uptime}</span>
            <span>{t.footer.latency}</span>
          </div>
          <div className="text-[10px] font-code text-foreground/20">
            {t.footer.replicated}: {new Date().toLocaleDateString()}
          </div>
        </div>
      </div>
    </footer>
  )
}
