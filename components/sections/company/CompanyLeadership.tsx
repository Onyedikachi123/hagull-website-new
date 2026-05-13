'use client'

import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn'
import { LEADERSHIP_TEAM } from '@/constants/company'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function CompanyLeadership() {
  return (
    <section className="section-pad bg-section-subtle" aria-labelledby="leadership-heading">
      <div className="container-fluid max-w-6xl">
        <FadeIn direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <h2 id="leadership-heading" className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight mb-4">
              Guided by Vision
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Our advisory board and executive leaders bring together decades of experience from central banks, leading tech firms, and global law practices.
            </p>
          </div>
          
          <Link href="/about" className="group flex items-center gap-2 text-sm font-bold text-hagull-600 hover:text-hagull-700 transition-colors">
            Meet All Advisors
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.1}
        >
          {LEADERSHIP_TEAM.map((leader, idx) => (
            <StaggerItem key={idx}>
              <div className="group">
                <div className="relative w-full aspect-[3/4] mb-4 rounded-2xl overflow-hidden bg-muted">
                  <Image 
                    src={leader.image} 
                    alt={leader.name} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-base font-bold text-foreground">{leader.name}</h3>
                <p className="text-xs text-muted-foreground">{leader.role}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
