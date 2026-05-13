'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CompanyHero() {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center bg-surface-950 overflow-hidden" aria-label="Company hero section">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 mix-blend-luminosity"
        style={{ backgroundImage: 'url(/bg.png)' }} 
      />
      <div className="absolute inset-0 bg-gradient-to-r from-surface-950/90 via-surface-950/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-transparent to-transparent" />

      <div className="container-fluid relative z-10 max-w-7xl">
        <div className="max-w-2xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 bg-hagull-500/20 border border-hagull-500/50 text-hagull-300 text-xs font-bold uppercase tracking-widest rounded-full mb-6 backdrop-blur-sm"
          >
            Our Purpose
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Building the World's Trust Infrastructure.
          </motion.h1>

          <motion.p
            className="text-base md:text-xl text-white/70 leading-relaxed mb-10 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hagull Exchange is pioneering the next generation of cross-border exchange, merging institutional-grade security with fluid digital accessibility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/careers"
              className="inline-block px-8 py-4 rounded-xl bg-hagull-600 hover:bg-hagull-500 text-white font-bold text-sm transition-colors shadow-glow"
            >
              View Career Openings
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
