"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Github, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/components/providers/language-provider"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const navItems = [
    { name: t.nav.identity, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.vision, href: "#vision" },
    { name: t.nav.contact, href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ja' : 'en')
  }

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1 flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 glass px-3 py-1.5 rounded-full border-white/5 hover:border-primary/50 transition-all group"
            aria-label="Toggle Language"
          >
            <span className="text-xl leading-none">
              {language === 'en' ? '🇺🇸' : '🇯🇵'}
            </span>
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full shadow-[0_0_10px_#5900FF]" />
            </a>
          ))}
        </nav>

        <div className="flex-1 flex items-center justify-end gap-4">
          <div className="hidden sm:flex items-center gap-4 border-r border-white/10 pr-4 mr-2">
            <a href="https://github.com/tushig666" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Github size={18} /></a>
          </div>
          <motion.a
            href="#contact"
            className="hidden md:flex bg-primary text-background px-5 py-2 rounded-full font-bold text-sm neon-glow hover:brightness-110 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.nav.hire}
          </motion.a>
          
          <button 
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-xl font-headline font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  toggleLanguage();
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 mt-4 text-primary font-bold"
              >
                {language === 'en' ? '🇯🇵 SWITCH TO JAPANESE' : '🇺🇸 SWITCH TO ENGLISH'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
