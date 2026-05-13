'use client'

import { StaggerContainer, StaggerItem } from '@/components/animations/FadeIn'
import { HELP_CATEGORIES } from '@/constants/resources'
import Link from 'next/link'

export default function HelpCategories() {
  return (
    <section className="pb-16 bg-white">
      <div className="container-fluid max-w-5xl">
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {HELP_CATEGORIES.map((category, idx) => {
            const Icon = category.icon
            return (
              <StaggerItem key={idx}>
                <Link
                  href={`#${category.title.toLowerCase()}`}
                  className="block h-full bg-white rounded-2xl p-6 border border-border shadow-sm hover:shadow-card hover:border-hagull-200 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-hagull-50 flex items-center justify-center mb-5 group-hover:bg-hagull-100 transition-colors">
                    <Icon size={20} className="text-hagull-500" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </Link>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
