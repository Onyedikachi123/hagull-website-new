'use client'

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn'
import { SECURITY_PILLARS } from '@/constants/institutional'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function SecurityPillars() {
  return (
    <section className="section-pad bg-white" aria-labelledby="pillars-heading">
      <div className="container-fluid">
        <FadeIn direction="up" className="max-w-3xl mb-16">
          <h2 id="pillars-heading" className="text-3xl font-extrabold text-foreground tracking-tight mb-4">
            Our Security Pillars
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            We implement multi-layered security protocols to ensure every transaction and piece of user data remains uncompromisingly protected.
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          staggerDelay={0.1}
        >
          {SECURITY_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <StaggerItem key={idx}>
                <div className="h-full bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-card transition-shadow duration-300 relative overflow-hidden group">
                  <div className="w-12 h-12 rounded-xl bg-hagull-50 flex items-center justify-center mb-6">
                    <Icon size={24} className="text-hagull-500" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-3">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {pillar.description.split('**').map((part, i) => i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part)}
                  </p>

                  {/* List Items */}
                  {pillar.listItems && (
                    <div className="grid grid-cols-2 gap-3 mt-6">
                      {pillar.listItems.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                          <CheckCircle2 size={14} className="text-emerald-500" />
                          {item}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Badges */}
                  {pillar.badges && (
                    <div className="flex gap-2 mt-6">
                      {pillar.badges.map((badge, i) => (
                        <span key={i} className="px-3 py-1 bg-muted text-xs font-bold text-muted-foreground rounded-md">
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Link */}
                  {pillar.link && (
                    <div className="mt-8">
                      <Link href={pillar.link.url} className="inline-flex items-center gap-2 text-xs font-bold text-hagull-600 hover:text-hagull-700 uppercase tracking-widest transition-colors">
                        {pillar.link.text}
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  )}

                  {/* Abstract shape decoration on the last card */}
                  {idx === 3 && (
                    <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                      <div className="w-40 h-40 border-8 border-hagull-600 rounded-full transform -rotate-45 scale-y-50" />
                    </div>
                  )}
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
