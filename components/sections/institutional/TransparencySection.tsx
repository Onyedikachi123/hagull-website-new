'use client'

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn'
import { TRANSPARENCY_FEATURES } from '@/constants/institutional'
import Image from 'next/image'

export default function TransparencySection() {
  return (
    <section className="section-pad bg-section-subtle" aria-labelledby="transparency-heading">
      <div className="container-fluid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <FadeIn direction="up">
              <h2 id="transparency-heading" className="text-2xl font-bold text-foreground mb-8">
                Transparency by Design
              </h2>
            </FadeIn>

            <StaggerContainer className="space-y-8" staggerDelay={0.1}>
              {TRANSPARENCY_FEATURES.map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <StaggerItem key={idx}>
                    <div className="flex gap-4">
                      <div className="mt-1 shrink-0">
                        <Icon size={20} className="text-hagull-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground mb-2">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>

          <FadeIn direction="left" delay={0.2} className="relative w-full aspect-[4/3] max-w-lg mx-auto">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-surface-950 flex items-center justify-center border border-border/10">
              <Image
                src="/global.png"
                alt="Global Transparency"
                fill
                className="object-cover opacity-60 mix-blend-screen"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-hagull-900/60 to-transparent" />

              {/* Floating Audit Card */}
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md border border-white/20 p-5 rounded-xl shadow-card w-48">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Audit Status</p>
                <p className="text-base font-extrabold text-foreground mb-4">COMPLIANT</p>
                <p className="text-[10px] text-muted-foreground leading-tight">
                  Last external audit:<br />Oct 2024
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  )
}
