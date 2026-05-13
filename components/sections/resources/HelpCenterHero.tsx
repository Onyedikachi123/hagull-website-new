'use client'

import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'

export default function HelpCenterHero() {
  return (
    <section className="pt-32 pb-16 bg-white" aria-labelledby="help-heading">
      <div className="container-fluid max-w-3xl text-center">
        <FadeIn direction="up">
          <h1
            id="help-heading"
            className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6"
          >
            How can we help you today?
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 px-4">
            Find answers to common questions about managing your account, executing trades, and keeping your assets secure.
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 bg-white border border-border rounded-xl text-sm shadow-sm focus:ring-2 focus:ring-hagull-500 focus:border-hagull-500 outline-none transition-all"
              placeholder="Search for questions, topics, or keywords..."
            />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
