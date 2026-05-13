'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { FadeIn } from '@/components/animations/FadeIn'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="bg-section-subtle min-h-screen flex flex-col">
      <Navbar />
      
      <main id="main-content" className="flex-1 pt-32 pb-24">
        <div className="container-fluid max-w-6xl">
          <FadeIn direction="up" className="max-w-2xl mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you&apos;re looking to open an institutional account or need help with a transaction, our global support team is here to help 24/7.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white rounded-2xl p-8 border border-border shadow-sm h-full">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">First Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-transparent outline-none focus:ring-2 focus:ring-hagull-500 transition-shadow" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-border bg-transparent outline-none focus:ring-2 focus:ring-hagull-500 transition-shadow" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-transparent outline-none focus:ring-2 focus:ring-hagull-500 transition-shadow" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Message</label>
                    <textarea rows={5} className="w-full px-4 py-3 rounded-xl border border-border bg-transparent outline-none focus:ring-2 focus:ring-hagull-500 transition-shadow resize-none" placeholder="How can we help you today?"></textarea>
                  </div>

                  <button type="submit" className="w-full py-4 bg-hagull-600 hover:bg-hagull-700 text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 transition-colors">
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2} className="space-y-6">
              <div className="bg-surface-950 rounded-2xl p-8 border border-border shadow-sm text-white">
                <h3 className="text-xl font-bold mb-6">Global Headquarters</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-hagull-500 shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-sm mb-1">Delaware, USA</p>
                      <p className="text-xs text-white/70 leading-relaxed">1209 Orange Street<br/>Wilmington, New Castle<br/>Delaware 19801</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-hagull-500 shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-sm mb-1">Email Us</p>
                      <p className="text-xs text-white/70 leading-relaxed">support@hagull.com<br/>institutional@hagull.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-hagull-500 shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-sm mb-1">Call Us</p>
                      <p className="text-xs text-white/70 leading-relaxed">+1 (555) 123-4567<br/>Mon-Fri, 9am - 6pm EST</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
                <h3 className="text-lg font-bold text-foreground mb-2">Live Support</h3>
                <p className="text-sm text-muted-foreground mb-6">Our average response time is under 2 minutes for verified users.</p>
                <button className="w-full py-3 bg-muted hover:bg-muted/80 text-foreground font-bold text-sm rounded-xl transition-colors">
                  Open Live Chat
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
