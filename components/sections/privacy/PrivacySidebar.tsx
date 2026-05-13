'use client'

import { useState, useEffect } from 'react'
import { PRIVACY_SECTIONS } from '@/constants/privacy'
import { cn } from '@/lib/utils'

export default function PrivacySidebar() {
  const [activeSection, setActiveSection] = useState('introduction')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)
        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id)
        }
      },
      { rootMargin: '-20% 0px -80% 0px' }
    )

    PRIVACY_SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-24 pt-4">
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-4 pl-4">
          Sections
        </p>
        <nav className="flex flex-col gap-1 relative border-l-2 border-border ml-4">
          {PRIVACY_SECTIONS.map((section) => {
            const isActive = activeSection === section.id
            const Icon = section.icon
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "relative flex items-center gap-3 px-4 py-2.5 text-sm font-semibold transition-all duration-200 text-left w-full",
                  isActive ? "text-hagull-600 bg-hagull-50 rounded-r-xl" : "text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-r-xl"
                )}
              >
                {/* Active Indicator Line */}
                {isActive && (
                  <span className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-hagull-600" />
                )}
                <Icon size={16} className={cn("shrink-0", isActive ? "text-hagull-600" : "text-muted-foreground")} />
                {section.label}
              </button>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
