'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, Bot, UserCheck } from 'lucide-react'
import { StaggerContainer, StaggerItem, FadeIn } from '@/components/animations/FadeIn'

const TRUST_FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Escrow Protection',
    description:
      'Funds are held in secure escrow until both parties confirm completion, ensuring zero-risk trading worldwide.',
  },
  {
    icon: Bot,
    title: 'AI Fraud Detection',
    description:
      'Our proprietary AI monitors global patterns in real-time to flag and prevent fraudulent behavior before it happens.',
  },
  {
    icon: UserCheck,
    title: 'Verified Users',
    description:
      'Multi-level KYC and reputation systems ensure you only trade with high-integrity partners across the globe.',
  },
]

export default function TrustFeatures() {
  return (
    <section className="section-pad bg-section-subtle" aria-labelledby="trust-features-heading">
      <div className="container-fluid max-w-6xl">
        <FadeIn direction="up" className="text-center max-w-2xl mx-auto mb-14">
          <h2
            id="trust-features-heading"
            className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight"
          >
            Built on Institutional Trust
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Industry-leading security for international markets and global investors.
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          staggerDelay={0.1}
        >
          {TRUST_FEATURES.map((feature, i) => {
            const Icon = feature.icon
            return (
              <StaggerItem key={i}>
                <div className="bg-white rounded-2xl p-8 border border-border shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-xl bg-hagull-50 flex items-center justify-center mb-6">
                    <Icon size={24} className="text-hagull-500" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* Stats Row */}
        <FadeIn direction="up" delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-12 text-center divide-x divide-border">
            <div className="pl-0 pr-12">
              <p className="text-3xl font-extrabold text-foreground tracking-tight">99.9%</p>
              <p className="text-xs font-semibold text-hagull-500 uppercase tracking-widest mt-1">
                Success Rate
              </p>
            </div>
            <div className="px-12">
              <p className="text-3xl font-extrabold text-foreground tracking-tight">5M+</p>
              <p className="text-xs font-semibold text-hagull-500 uppercase tracking-widest mt-1">
                Trades Monthly
              </p>
            </div>
            <div className="px-12">
              <p className="text-3xl font-extrabold text-foreground tracking-tight">50+</p>
              <p className="text-xs font-semibold text-hagull-500 uppercase tracking-widest mt-1">
                Fiat Currencies
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
