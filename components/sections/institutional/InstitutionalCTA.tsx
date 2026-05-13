'use client'

import { FadeIn } from '@/components/animations/FadeIn'
import Link from 'next/link'

export default function InstitutionalCTA() {
  return (
    <section className="py-24 bg-white text-center" aria-labelledby="cta-heading">
      <div className="container-fluid max-w-3xl">
        <FadeIn direction="up">
          <h2 id="cta-heading" className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
            Ready to Trade with Confidence?
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-10">
            Join thousands of institutional and retail traders who trust Hagull for their digital asset exchange needs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/register" 
              className="px-8 py-3 bg-hagull-600 hover:bg-hagull-700 text-white font-bold text-sm rounded-xl shadow-md transition-colors w-full sm:w-auto"
            >
              Create Account
            </Link>
            <Link 
              href="/contact-sales" 
              className="px-8 py-3 bg-white border border-border text-foreground font-bold text-sm rounded-xl hover:bg-muted transition-colors w-full sm:w-auto shadow-sm"
            >
              Contact Sales
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
