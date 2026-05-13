'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn'
import Link from 'next/link'
import { ExternalLink, Download } from 'lucide-react'

export default function PressPage() {
  const pressReleases = [
    { title: 'Hagull Secures $50M Series B to Expand Global P2P Infrastructure', date: 'January 15, 2024', source: 'TechCrunch' },
    { title: 'New ISO 27001 Certification Validates Hagull Security Posture', date: 'November 22, 2023', source: 'CoinDesk' },
    { title: 'Hagull Appoints Former SEC Director as Chief Compliance Officer', date: 'September 10, 2023', source: 'Bloomberg' },
    { title: 'P2P Exchange Volume in Africa Driven by New Hagull Corridors', date: 'July 5, 2023', source: 'Reuters' },
  ]

  return (
    <div className="bg-section-subtle min-h-screen flex flex-col">
      <Navbar />
      
      <main id="main-content" className="flex-1 pt-32 pb-24">
        <div className="container-fluid max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <FadeIn direction="up">
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
                Press Room
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Official press releases, media mentions, and downloadable assets for Hagull Exchange.
              </p>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <button className="flex items-center gap-2 px-6 py-3 bg-white border border-border text-foreground font-bold text-sm rounded-xl hover:bg-muted transition-colors shadow-sm">
                <Download size={16} />
                Download Media Kit
              </button>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pressReleases.map((press, i) => (
              <StaggerItem key={i}>
                <Link href="#" className="block h-full group">
                  <div className="bg-white border border-border rounded-2xl p-8 shadow-sm hover:shadow-card transition-all h-full flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <span className="px-3 py-1 bg-muted text-xs font-bold text-muted-foreground rounded-md uppercase tracking-wider">
                        {press.source}
                      </span>
                      <ExternalLink size={16} className="text-muted-foreground group-hover:text-hagull-600 transition-colors" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground mb-6 group-hover:text-hagull-600 transition-colors">
                      {press.title}
                    </h2>
                    <div className="mt-auto pt-6 border-t border-border/50">
                      <span className="text-xs text-muted-foreground font-medium">{press.date}</span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </main>

      <Footer />
    </div>
  )
}
