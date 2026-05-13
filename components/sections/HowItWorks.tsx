'use client'

import { motion } from 'framer-motion'
import { StaggerContainer, StaggerItem, FadeIn } from '@/components/animations/FadeIn'

const NEW_STEPS = [
  { step: 1, title: 'Sign Up', description: 'Create your verified account in minutes' },
  { step: 2, title: 'Browse', description: 'Find the best offers in the global marketplace' },
  { step: 3, title: 'Chat', description: 'Communicate securely with your partner' },
  { step: 4, title: 'Escrow', description: 'Enter a safe, escrow-backed trade' },
  { step: 5, title: 'Payment', description: 'Complete your local fiat payment' },
  { step: 6, title: 'Release', description: 'Funds are released to your wallet' },
]

export default function HowItWorks() {
  return (
    <section className="section-pad bg-white" aria-labelledby="how-heading">
      <div className="container-fluid max-w-7xl">
        <FadeIn direction="up" className="text-center mx-auto mb-20">
          <h2
            id="how-heading"
            className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight"
          >
            Simple. Secure. Systematic.
          </h2>
        </FadeIn>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-6 left-0 right-0 h-[1px] bg-border border-t border-dashed border-border hidden md:block" />

          <StaggerContainer
            className="grid grid-cols-2 md:grid-cols-6 gap-6 relative z-10"
            staggerDelay={0.1}
          >
            {NEW_STEPS.map((step) => (
              <StaggerItem key={step.step}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center mb-6 shadow-sm">
                    <span className="text-sm font-semibold text-muted-foreground">{step.step}</span>
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed max-w-[140px]">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
