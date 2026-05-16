'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      className="relative w-full pt-24 md:pt-32 pb-16 md:pb-24 bg-white overflow-hidden"
      aria-label="Hero section"
    >
      <div className="container-fluid relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="max-w-3xl lg:max-w-none">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              Global P2P <span className="text-hagull-500">Infrastructure</span><br className="hidden sm:block" />for Every Currency
            </motion.h1>

            <motion.p
              className="text-base md:text-lg xl:text-xl text-muted-foreground leading-relaxed mb-8 pr-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Trade USD, EUR, GBP, NGN, BRL, and 50+ other fiat currencies directly for crypto and stablecoins. Secure, cross-border settlements powered by institutional-grade escrow.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/register"
                className="px-8 py-4 rounded-xl bg-accent-500 hover:bg-accent-600 text-white font-bold text-sm md:text-base shadow-lg hover:shadow-accent/40 transition-all duration-200"
              >
                Start Trading
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <motion.div
            className="relative w-full flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.div
              className="relative w-full max-w-[640px] xl:max-w-[720px] rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-border/50 bg-white"
              whileHover={{ y: -8, boxShadow: "0 30px 60px -15px rgba(0,0,0,0.2)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image
                src="/dashboard-hero.png"
                alt="Hagull Dashboard Interface"
                width={1400}
                height={1050}
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.02]"
                priority
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
