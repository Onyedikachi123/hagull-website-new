'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

export default function CareersHero() {
  return (
    <section className="relative w-full pt-32 pb-20 bg-white overflow-hidden" aria-label="Careers hero section">
      <div className="container-fluid max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="max-w-xl">
            <motion.p
              className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              We Are Hiring
            </motion.p>
            
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Join the Future of <span className="text-hagull-500">Global Finance</span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Build the infrastructure for Africa's next generation of financial exchange. We are looking for visionaries, engineers, and strategists to redefine trust in P2P markets.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="#open-positions"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-hagull-500 hover:bg-hagull-600 text-white font-bold text-sm shadow-glow transition-all duration-300"
              >
                View Openings
                <ArrowDown size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Inner background to simulate the dark teal frame */}
            <div className="absolute inset-0 bg-hagull-900/10 mix-blend-multiply pointer-events-none z-10" />
            <div className="absolute inset-0 border-[16px] md:border-[24px] border-hagull-600/10 rounded-3xl z-20 pointer-events-none" />
            
            <Image
              src="/team.jpeg"
              alt="Hagull team at work"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
