'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn'
import { OPEN_POSITIONS } from '@/constants/careers'
import { MapPin, Briefcase } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function OpenPositions() {
  const [teamFilter, setTeamFilter] = useState('All Teams')
  const [locationFilter, setLocationFilter] = useState('All Locations')

  // Derive unique filters
  const teams = ['All Teams', ...Array.from(new Set(OPEN_POSITIONS.map(p => p.department)))]
  const locations = ['All Locations', ...Array.from(new Set(OPEN_POSITIONS.map(p => p.location)))]

  const filteredPositions = OPEN_POSITIONS.filter(p => {
    const matchTeam = teamFilter === 'All Teams' || p.department === teamFilter
    const matchLoc = locationFilter === 'All Locations' || p.location === locationFilter
    return matchTeam && matchLoc
  })

  // Badge color mapping
  const badgeColors: Record<string, string> = {
    ENGINEERING: 'bg-emerald-100 text-emerald-700',
    LEGAL: 'bg-purple-100 text-purple-700',
    MARKETING: 'bg-orange-100 text-orange-700',
    OPERATIONS: 'bg-blue-100 text-blue-700',
  }

  return (
    <section id="open-positions" className="section-pad bg-section-subtle" aria-labelledby="positions-heading">
      <div className="container-fluid max-w-4xl">
        <FadeIn direction="up" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 id="positions-heading" className="text-3xl font-extrabold text-foreground tracking-tight mb-2">
              Open Positions
            </h2>
            <p className="text-sm text-muted-foreground">Current opportunities to make an impact.</p>
          </div>
          
          <div className="flex gap-3">
            <select 
              className="bg-white border border-border text-xs font-semibold px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-hagull-500"
              value={teamFilter}
              onChange={(e) => setTeamFilter(e.target.value)}
            >
              {teams.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <select 
              className="bg-white border border-border text-xs font-semibold px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-hagull-500"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              {locations.map(l => <option key={l} value={l}>{l}</option>)}
            </select>
          </div>
        </FadeIn>

        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredPositions.length > 0 ? (
              filteredPositions.map((pos) => (
                <motion.div
                  key={pos.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl border border-border p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:shadow-card transition-shadow"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-base font-bold text-foreground">{pos.title}</h3>
                      <span className={cn('text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider', badgeColors[pos.department] || 'bg-gray-100 text-gray-700')}>
                        {pos.department}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium">
                      <span className="flex items-center gap-1.5"><MapPin size={14} /> {pos.location}</span>
                      <span className="flex items-center gap-1.5"><Briefcase size={14} /> {pos.type}</span>
                    </div>
                  </div>
                  
                  <Link href={`/careers/${pos.id}`} className="px-6 py-2.5 bg-white border border-border rounded-lg text-xs font-bold hover:bg-hagull-50 hover:text-hagull-600 hover:border-hagull-200 transition-colors text-center">
                    Apply Now
                  </Link>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 bg-white rounded-xl border border-border border-dashed"
              >
                <p className="text-sm text-muted-foreground">No open positions found matching your filters.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <FadeIn direction="up" delay={0.2} className="text-center mt-16">
          <p className="text-xs text-muted-foreground mb-2">Don't see a role that fits?</p>
          <Link href="/careers/open-application" className="text-sm font-bold text-hagull-600 hover:underline underline-offset-4">
            Send us an open application
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
