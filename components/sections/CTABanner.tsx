'use client'

import Link from 'next/link'
import { FadeIn } from '@/components/animations/FadeIn'

export default function CTABanner() {
  return (
    <section
      className="section-pad bg-white"
      aria-labelledby="cta-heading"
    >
      <div className="container-fluid">
        <FadeIn direction="up">
          <div className="bg-hagull-600 rounded-[2rem] p-12 md:p-20 text-center relative overflow-hidden shadow-glow-lg">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-hagull-500 to-hagull-700 opacity-90" />
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2
                id="cta-heading"
                className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-6"
              >
                Start trading safely worldwide
              </h2>
              <p className="text-base md:text-lg text-white/90 mx-auto leading-relaxed mb-10">
                Join the premier financial infrastructure for global P2P exchange. Your first $1,000 in trades are fee-free.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/register"
                  className="px-8 py-4 rounded-xl bg-white text-hagull-600 font-bold text-sm shadow-md hover:bg-hagull-50 transition-colors duration-300"
                >
                  Create Account
                </Link>
                <Link
                  href="/markets"
                  className="px-8 py-4 rounded-xl border border-white text-white font-bold text-sm hover:bg-white/10 transition-colors duration-300"
                >
                  Explore Marketplace
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
