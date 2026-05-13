'use client'

import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn'
import { CULTURE_BENEFITS } from '@/constants/careers'
import Image from 'next/image'

export default function Culture() {
  return (
    <section className="section-pad bg-white" aria-labelledby="culture-heading">
      <div className="container-fluid max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <FadeIn direction="right" delay={0.1}>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                <Image src="/join-img.png" alt="Office plants" fill className="object-cover" />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                <Image src="/chat.jpg" alt="Developer coding" fill className="object-cover" />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.3}>
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
                <Image src="/team.jpeg" alt="Team high-five" fill className="object-cover" />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.4}>
              <div className="relative aspect-[4/3] mt-auto rounded-2xl overflow-hidden bg-muted">
                <Image src="/first-aboutimg.png" alt="Developer working late" fill className="object-cover" />
              </div>
            </FadeIn>
          </div>

          {/* Right: Content */}
          <div>
            <FadeIn direction="left">
              <h2
                id="culture-heading"
                className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-6"
              >
                Culture built on transparency
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-10">
                We are a distributed team obsessed with engineering excellence and financial sovereignty. Our benefits are designed to support your life, not just your work.
              </p>
            </FadeIn>

            <StaggerContainer className="space-y-8" staggerDelay={0.15}>
              {CULTURE_BENEFITS.map((benefit, idx) => {
                const Icon = benefit.icon
                return (
                  <StaggerItem key={idx}>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-hagull-50 flex items-center justify-center shrink-0 mt-1">
                        <Icon size={18} className="text-hagull-500" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground mb-1.5">{benefit.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                )
              })}
            </StaggerContainer>
          </div>
          
        </div>
      </div>
    </section>
  )
}
