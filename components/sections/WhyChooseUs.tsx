import {
  Scale, Banknote, ShieldCheck, Zap, Users, Headphones,
} from 'lucide-react'
import { StaggerContainer, StaggerItem, FadeIn } from '@/components/animations/FadeIn'
import { FEATURES } from '@/constants'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Scale, Banknote, ShieldCheck, Zap, Users, Headphones,
}

export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-white" aria-labelledby="why-heading">
      <div className="container-fluid">
        {/* Section header */}
        <FadeIn direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-hagull-500 mb-3">
            Why Choose Hagull
          </p>
          <h2
            id="why-heading"
            className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight"
          >
            Built for traders who demand{' '}
            <span className="text-gradient-primary">more</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Our platform combines the security of institutional finance with the
            flexibility of a modern marketplace — giving you the best of both worlds.
          </p>
        </FadeIn>

        {/* Feature cards */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon]
            return (
              <StaggerItem key={feature.title}>
                <div className="group h-full bg-white border border-border rounded-2xl p-7 card-hover shadow-card hover:border-hagull-200 transition-all duration-300">
                  {/* Icon */}
                  <div className="mb-5 w-12 h-12 rounded-xl bg-hagull-50 flex items-center justify-center group-hover:bg-hagull-100 transition-colors duration-300">
                    {Icon && <Icon size={22} className="text-hagull-500" />}
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover accent line */}
                  <div className="mt-5 h-0.5 w-0 bg-hagull-500 rounded-full group-hover:w-12 transition-all duration-300 ease-out" />
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
