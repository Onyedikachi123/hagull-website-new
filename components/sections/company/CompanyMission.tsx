'use client'

import { FadeIn } from '@/components/animations/FadeIn'
import Image from 'next/image'

export default function CompanyMission() {
  return (
    <section className="section-pad bg-white" aria-labelledby="mission-heading">
      <div className="container-fluid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Image */}
          <FadeIn direction="right">
            <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-2xl bg-surface-950">
              <Image 
                src="/escrow.jpg" 
                alt="Technology abstract" 
                fill 
                className="object-cover opacity-80 mix-blend-screen"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </FadeIn>

          {/* Right Content */}
          <FadeIn direction="left">
            <h2 id="mission-heading" className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-6">
              Democratizing Global Finance
            </h2>
            <div className="space-y-6 text-base text-muted-foreground leading-relaxed mb-10">
              <p>
                Our mission is to eliminate the barriers of traditional finance through a revolutionary combination of AI-driven risk management and blockchain-based escrow. We believe trust should be a fundamental utility, not a premium service.
              </p>
              <p>
                By leveraging tectonic stability in our infrastructure, we eliminate fraud and friction, allowing capital to flow across borders as seamlessly as information.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-border pt-8">
              <div>
                <p className="text-4xl font-extrabold text-hagull-600 mb-2">0%</p>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Fraud Rate on Verified Escrow</p>
              </div>
              <div>
                <p className="text-4xl font-extrabold text-hagull-600 mb-2">180+</p>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Markets Supported Globally</p>
              </div>
            </div>
          </FadeIn>
          
        </div>
      </div>
    </section>
  )
}
