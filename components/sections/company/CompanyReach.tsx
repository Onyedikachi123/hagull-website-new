'use client'

import { FadeIn } from '@/components/animations/FadeIn'
import Image from 'next/image'

export default function CompanyReach() {
  return (
    <section className="py-24 bg-section-subtle" aria-labelledby="reach-heading">
      <div className="container-fluid max-w-5xl">
        <FadeIn direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <h2 id="reach-heading" className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
            Our Global Reach
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Connecting disparate financial ecosystems through a single, unified protocol of trust and transparency.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="relative w-full aspect-[2/1] rounded-3xl overflow-hidden bg-white border border-border shadow-card">
            {/* The Map */}
            <div 
              className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-40 mix-blend-multiply"
              style={{ backgroundImage: 'url(/globe.png)' }}
            />
            
            {/* Example Tags (Positioned roughly over London and Singapore) */}
            <div className="absolute top-[40%] left-[45%] -translate-x-1/2 -translate-y-1/2 bg-white border border-border rounded-lg p-2 shadow-lg flex flex-col items-center">
              <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mb-1">London</span>
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active
              </span>
            </div>

            <div className="absolute top-[55%] left-[75%] -translate-x-1/2 -translate-y-1/2 bg-white border border-border rounded-lg p-2 shadow-lg flex flex-col items-center">
              <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Singapore</span>
              <span className="text-xs font-bold text-emerald-600 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Active
              </span>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  )
}
