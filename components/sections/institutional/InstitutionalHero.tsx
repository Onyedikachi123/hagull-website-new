'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Lock } from 'lucide-react'
import Image from 'next/image'

export default function InstitutionalHero() {
  return (
    <section className="relative pt-32 pb-24 bg-section-subtle overflow-hidden" aria-labelledby="hero-heading">
      <div className="container-fluid relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="max-w-2xl">
            <motion.p
              className="text-xs font-bold uppercase tracking-widest text-hagull-600 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Institutional Grade Security
            </motion.p>
            
            <motion.h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Compliance & Security
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hagull Exchange is built on a foundation of rigorous regulatory adherence and advanced cryptographic security. We provide the infrastructure necessary for safe, transparent, and non-speculative digital asset exchange across Africa.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-white text-sm font-semibold text-foreground shadow-sm">
                <ShieldCheck size={16} className="text-hagull-500" />
                Fully Regulated
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-white text-sm font-semibold text-foreground shadow-sm">
                <Lock size={16} className="text-hagull-500" />
                AES-256 Encryption
              </div>
            </motion.div>
          </div>

          <motion.div
            className="relative w-full aspect-video md:aspect-square flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[120%] aspect-square rounded-full bg-white/50 blur-3xl border border-white/20 shadow-2xl hidden md:block" />
            <div className="relative w-full h-full max-w-[500px] rounded-2xl md:rounded-full overflow-hidden border border-border/50 shadow-glow bg-muted">
              <Image 
                src="/escrow.jpg" 
                alt="Microchip circuit board" 
                fill 
                className="object-cover opacity-80 mix-blend-multiply"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
