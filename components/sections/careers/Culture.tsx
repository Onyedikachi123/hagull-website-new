'use client'

import { motion } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn'
import { CULTURE_BENEFITS } from '@/constants/careers'
import Image from 'next/image'

export default function Culture() {
  return (
    <section className="section-pad bg-white" aria-labelledby="culture-heading">
      <div className="container-fluid">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Premium Image Composition */}
          <div className="relative w-full h-[500px] lg:h-[650px] hidden md:block group">
            {/* Main Feature Image */}
            <FadeIn direction="right" delay={0.1} className="absolute top-0 left-0 w-[85%] h-[400px] lg:h-[480px] rounded-[32px] overflow-hidden shadow-2xl z-10 border border-black/5 dark:border-white/10 transition-transform duration-700 ease-out group-hover:-translate-y-2">
              <Image 
                src="/careers-team-collaboration.png" 
                alt="Diverse engineering team collaborating in premium modern office" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
            </FadeIn>
            
            {/* Secondary Image - Bottom Right Overlay */}
            <FadeIn direction="up" delay={0.3} className="absolute bottom-4 lg:bottom-10 right-0 w-[60%] h-[260px] lg:h-[320px] rounded-[24px] overflow-hidden shadow-2xl z-20 border-8 border-white dark:border-background transition-transform duration-700 ease-out group-hover:-translate-y-4 group-hover:-translate-x-2">
              <Image 
                src="/team.jpeg" 
                alt="Startup excellence and global team" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                sizes="(max-width: 768px) 100vw, 30vw"
              />
            </FadeIn>

            {/* Accent Graphic/Shape */}
            <FadeIn direction="left" delay={0.2} className="absolute top-12 right-0 w-32 h-32 bg-hagull-100 dark:bg-hagull-900/40 rounded-full blur-3xl -z-10" />
            <FadeIn direction="left" delay={0.4} className="absolute bottom-20 left-10 w-40 h-40 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl -z-10" />
          </div>

          {/* Mobile Image Grid (Optimized for small screens) */}
          <div className="flex flex-col gap-4 md:hidden">
            <FadeIn direction="up" delay={0.1} className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-border/50">
              <Image 
                src="/careers-team-collaboration.png" 
                alt="Ambitious engineering team collaborating" 
                fill 
                className="object-cover" 
                sizes="100vw"
                priority
              />
            </FadeIn>
            <div className="grid grid-cols-2 gap-4">
              <FadeIn direction="up" delay={0.2} className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
                <Image src="/team.jpeg" alt="Startup excellence" fill className="object-cover" sizes="50vw" />
              </FadeIn>
              <FadeIn direction="up" delay={0.3} className="relative aspect-square rounded-2xl overflow-hidden shadow-md">
                <Image src="/join-img.png" alt="Modern workspace" fill className="object-cover" sizes="50vw" />
              </FadeIn>
            </div>
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
