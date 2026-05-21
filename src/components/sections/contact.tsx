"use client"

import React from "react"
import { motion } from "framer-motion"
import { Mail, MessageSquare, Send, Github, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-primary font-bold tracking-widest text-sm mb-4 uppercase">TRANSMISSION</div>
            <h2 className="text-4xl md:text-7xl font-bold font-headline mb-8">
              GET IN <span className="text-primary neon-text">TOUCH.</span>
            </h2>
            <p className="text-foreground/60 text-lg mb-12 max-w-lg">
              Whether you have a futuristic project idea or just want to discuss the future of AI, my neural gates are open.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center border-white/10 group-hover:border-primary/50 transition-all">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground/40 uppercase">Email Protocol</div>
                  <div className="text-xl font-bold text-white group-hover:text-primary transition-colors">tse.tushig@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center border-white/10 group-hover:border-secondary/50 transition-all">
                  <MessageSquare className="text-secondary" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground/40 uppercase">Discord Alias</div>
                  <div className="text-xl font-bold text-white group-hover:text-secondary transition-colors">tushig_tse#1337</div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-16">
              {[<Github />, <Instagram />, <Linkedin />].map((icon, i) => (
                <motion.a 
                  key={i}
                  href="#"
                  className="w-12 h-12 rounded-full glass flex items-center justify-center border-white/10 hover:border-primary hover:text-primary transition-all shadow-xl"
                  whileHover={{ y: -5, scale: 1.1 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-3xl border-white/5 relative group"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity animate-scanline" />
            
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-foreground/40 uppercase tracking-widest ml-1">Identity Name</label>
                <Input placeholder="Enter your name" className="bg-white/5 border-white/10 h-14 focus-visible:ring-primary focus-visible:border-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-foreground/40 uppercase tracking-widest ml-1">Secure Email</label>
                <Input type="email" placeholder="email@nexus.com" className="bg-white/5 border-white/10 h-14 focus-visible:ring-primary focus-visible:border-primary" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-foreground/40 uppercase tracking-widest ml-1">Encrypted Message</label>
                <Textarea placeholder="What's on your mind?" className="bg-white/5 border-white/10 min-h-[150px] focus-visible:ring-primary focus-visible:border-primary resize-none" />
              </div>
              <Button className="w-full h-16 bg-primary text-background font-bold text-lg rounded-xl hover:brightness-110 neon-glow transition-all active:scale-95">
                <div className="flex items-center gap-2">SEND TRANSMISSION <Send size={18} /></div>
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}