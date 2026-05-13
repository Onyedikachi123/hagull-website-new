'use client'

import { FadeIn } from '@/components/animations/FadeIn'
import Link from 'next/link'

export default function SupportCTA() {
  return (
    <section className="pb-24 pt-12 bg-white" aria-labelledby="support-cta-heading">
      <div className="container-fluid max-w-4xl">
        <FadeIn direction="up">
          <div className="bg-hagull-600 rounded-3xl p-8 md:p-12 shadow-glow flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-hagull-500 to-hagull-700 opacity-90" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            
            <div className="relative z-10 max-w-lg">
              <h2 id="support-cta-heading" className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                Still have questions?
              </h2>
              <p className="text-sm text-white/80 leading-relaxed">
                Our dedicated support team is available 24/7 to assist you with any technical or account-related inquiries.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <Link 
                href="/support/contact" 
                className="px-6 py-3 bg-white text-hagull-600 font-bold text-sm rounded-xl hover:bg-hagull-50 transition-colors text-center shadow-sm"
              >
                Contact Support
              </Link>
              <button 
                className="px-6 py-3 bg-white/10 border border-white/20 text-white font-bold text-sm rounded-xl hover:bg-white/20 transition-colors text-center"
              >
                Live Chat
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
