'use client'

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn'
import { COMPANY_FOUNDATIONS } from '@/constants/company'

export default function CompanyFoundations() {
  return (
    <section className="section-pad bg-white" aria-labelledby="foundations-heading">
      <div className="container-fluid">
        <FadeIn direction="up" className="text-center mb-16">
          <h2 id="foundations-heading" className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Foundations of Excellence
          </h2>
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {COMPANY_FOUNDATIONS.map((foundation, idx) => {
            const Icon = foundation.icon
            return (
              <StaggerItem key={idx}>
                <div className="h-full bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-card transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-hagull-50 flex items-center justify-center mb-6">
                    <Icon size={24} className="text-hagull-500" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{foundation.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {foundation.description}
                  </p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
