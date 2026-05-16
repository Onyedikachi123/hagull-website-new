'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { PLATFORM_STATS } from '@/constants'

// ─── Animated Counter ─────────────────────────────────────────────────────────
function AnimatedNumber({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (!inView) return
    const start = Date.now()
    const tick = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target, duration])

  return <span ref={ref}>{value}</span>
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────
export default function StatsBar() {
  return (
    <section
      className="relative bg-hagull-500 overflow-hidden"
      aria-label="Platform statistics"
    >
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="relative container-fluid py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 lg:gap-0 lg:divide-x lg:divide-white/20">
          {PLATFORM_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center lg:px-8 first:pl-0 last:pr-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <p className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {stat.prefix}
                <AnimatedNumber target={parseFloat(stat.value)} />
                {stat.value.includes('.') && '.'}
                {stat.suffix}
              </p>
              <p className="mt-1.5 text-sm font-medium text-white/70">{stat.label}</p>
              {stat.description && (
                <p className="text-xs text-white/45 mt-0.5">{stat.description}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
