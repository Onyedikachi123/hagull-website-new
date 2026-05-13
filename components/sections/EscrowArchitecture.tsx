'use client'

import { motion } from 'framer-motion'
import { FadeIn } from '@/components/animations/FadeIn'
import { Lock } from 'lucide-react'

const ESCROW_STEPS = [
  'Seller locks crypto in Hagull Transit',
  'Buyer sends fiat via local or international payment rails',
  'Seller verifies receipt, crypto releases instantly worldwide'
]

export default function EscrowArchitecture() {
  return (
    <section className="section-pad bg-surface-950 text-white overflow-hidden relative" aria-labelledby="escrow-heading">
      <div className="absolute inset-0 bg-hero-mesh opacity-20 pointer-events-none" />
      
      <div className="container-fluid max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <FadeIn direction="right">
            <h2 id="escrow-heading" className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              Water-Tight Escrow Architecture
            </h2>
            <p className="text-white/70 text-sm leading-relaxed mb-8">
              Our "Hagull Lock" protocol ensures that neither party is ever at risk, regardless of location. When a trade starts, assets are cryptographically locked in our global vault. They only leave when we confirm receipt of payment.
            </p>
            
            <div className="space-y-4">
              {ESCROW_STEPS.map((step, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl">
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-white">{idx + 1}</span>
                  </div>
                  <p className="text-sm font-medium text-white/90">{step}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Right Illustration */}
          <FadeIn direction="left" delay={0.2} className="relative h-[400px] flex items-center justify-center">
            <div className="relative w-64 h-64">
              {/* Outer circle */}
              <motion.div 
                className="absolute inset-0 rounded-full border border-white/10 border-dashed"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              {/* Inner circle */}
              <motion.div 
                className="absolute inset-8 rounded-full border border-white/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              />
              
              {/* Center Lock */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-hagull-500/20 border border-hagull-500/50 rounded-2xl flex items-center justify-center shadow-glow">
                  <Lock size={32} className="text-hagull-400" />
                </div>
              </div>

              {/* Orbiting nodes */}
              <motion.div 
                className="absolute top-0 left-1/2 -ml-3 w-6 h-6 bg-accent-500 rounded-full shadow-accent flex items-center justify-center"
                animate={{ 
                  rotate: [0, 360],
                  transformOrigin: '12px 128px'
                }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              >
                <span className="text-[8px] font-bold">₿</span>
              </motion.div>

              <motion.div 
                className="absolute bottom-12 right-0 w-5 h-5 bg-hagull-400 rounded-full shadow-glow flex items-center justify-center"
                animate={{ 
                  rotate: [360, 0],
                  transformOrigin: '-96px 10px'
                }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              >
                <span className="text-[8px] font-bold text-white">$</span>
              </motion.div>

            </div>
          </FadeIn>
          
        </div>
      </div>
    </section>
  )
}
