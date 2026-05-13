'use client'

import { useState, useEffect } from 'react'
import { TERMS_SECTIONS } from '@/constants/terms'
import { cn } from '@/lib/utils'

export default function TermsSidebar() {
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

    TERMS_SECTIONS.forEach((section) => {
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
    <aside className="hidden lg:block w-56 shrink-0">
      <div className="sticky top-24 pt-4">
        <nav className="flex flex-col gap-1 relative border-l-2 border-border/60">
          {TERMS_SECTIONS.map((section) => {
            const isActive = activeSection === section.id
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={cn(
                  "relative px-4 py-2 text-xs font-semibold transition-all duration-200 text-left w-full",
                  isActive ? "text-hagull-600 bg-hagull-50/50 rounded-r-md" : "text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-r-md"
                )}
              >
                {isActive && (
                  <span className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-hagull-600" />
                )}
                {section.label}
              </button>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
