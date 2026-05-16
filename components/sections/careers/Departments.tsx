'use client'

import { ArrowRight } from 'lucide-react'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn'
import { DEPARTMENTS } from '@/constants/careers'
import Link from 'next/link'

export default function Departments() {
  return (
    <section className="section-pad bg-section-subtle" aria-labelledby="departments-heading">
      <div className="container-fluid">
        <FadeIn direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <h2
            id="departments-heading"
            className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4"
          >
            Explore our departments
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Find the right team for your expertise and passion.
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {DEPARTMENTS.map((dept, idx) => {
            const Icon = dept.icon
            return (
              <StaggerItem 
                key={idx}
                className={idx === 3 ? "lg:col-span-2" : ""}
              >
                <Link 
                  href="#open-positions"
                  className="block h-full bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-card-hover transition-all duration-300 group relative"
                >
                  <div className="w-12 h-12 rounded-xl bg-hagull-50 flex items-center justify-center mb-6">
                    <Icon size={22} className="text-hagull-500" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">{dept.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-12">
                    {dept.description}
                  </p>
                  
                  <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-xs font-bold text-foreground group-hover:text-hagull-500 transition-colors">
                    <span>{dept.openRoles} open roles</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
