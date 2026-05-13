'use client'

import { FadeIn } from '@/components/animations/FadeIn'
import Link from 'next/link'

export default function CompanyCTA() {
  return (
    <section className="py-24 bg-hagull-600 relative overflow-hidden" aria-labelledby="cta-heading">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-hagull-500 to-hagull-700 opacity-90" />
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-fluid max-w-3xl relative z-10 text-center">
        <FadeIn direction="up">
          <h2 id="cta-heading" className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
            Join the Revolution.
          </h2>
          <p className="text-base md:text-lg text-white/80 leading-relaxed mb-10 max-w-2xl mx-auto">
            We are always looking for visionary engineers, economists, and designers to help build the future of global exchange. Are you ready?
          </p>
          
          <Link
            href="/careers"
            className="inline-block px-8 py-4 bg-white text-hagull-600 font-bold text-sm rounded-xl shadow-glow hover:bg-hagull-50 transition-colors"
          >
            Explore Careers
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
