'use client'

import { motion } from 'framer-motion'
import { StaggerContainer, StaggerItem, FadeIn } from '@/components/animations/FadeIn'
import { Quote } from 'lucide-react'
import Image from 'next/image'

const TESTIMONIALS = [
  {
    quote: "Hagull has completely changed how I source liquidity for my international business. The AI pricing is spot on across different currencies and I've never had an issue.",
    author: "Julian R.",
    role: "Crypto Fund Manager",
    avatar: "/portrait-african-american-man 1.png"
  },
  {
    quote: "The most efficient P2P platform I've used. Cross-border verification was simple and the interface is far more advanced than traditional global exchanges.",
    author: "Sarah M.",
    role: "Retail Investor",
    avatar: "/close-up-shot.png"
  },
  {
    quote: "Institutional-grade support. When I had a complex payment dispute across regions, their customer service team resolved it in under 15 minutes. Truly impressive.",
    author: "Marcus S.",
    role: "OTC Desk Lead",
    avatar: "/middle-aged-cheerful-dark-skinned-male-with-shining-smile.png"
  }
]

export default function Testimonials() {
  return (
    <section className="section-pad bg-white" aria-labelledby="testimonials-heading">
      <div className="container-fluid">
        <FadeIn direction="up" className="text-center max-w-2xl mx-auto mb-14">
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight"
          >
            Trusted by 500,000+ Traders
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Hear from those who trade with confidence in over 120 countries.
          </p>
        </FadeIn>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          staggerDelay={0.1}
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <StaggerItem key={i}>
              <div className="bg-white border border-border rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 h-full flex flex-col relative">
                <Quote className="absolute top-6 right-6 text-muted-foreground/20" size={32} />
                <p className="text-sm text-foreground leading-relaxed flex-1 italic mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted overflow-hidden relative">
                    <Image src={testimonial.avatar} alt={testimonial.author} fill className="object-cover" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">{testimonial.author}</p>
                    <p className="text-[10px] text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
