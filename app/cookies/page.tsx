import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Cookie, Shield, Eye } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cookie Policy | Hagull',
  description: 'Learn how Hagull Exchange uses cookies and similar technologies.',
}

export default function CookiesPage() {
  return (
    <>
      <Navbar />
      <main className="bg-section-subtle min-h-screen pt-32 pb-24">
        <div className="container-fluid max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
              Cookie Policy
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Last Updated: May 24, 2024. How we use cookies to improve your exchange experience.
            </p>
          </div>

          <div className="space-y-12 bg-white rounded-2xl p-8 border border-border shadow-sm">
            <section>
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-4">
                <Cookie className="text-hagull-600" />
                What Are Cookies?
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Cookies are small text files placed on your device when you visit our platform. They help us remember your preferences, secure your account sessions, and analyze platform performance to provide a better trading experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-4">
                <Shield className="text-hagull-600" />
                Types of Cookies We Use
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="p-4 bg-muted rounded-xl border border-border">
                  <h4 className="font-bold text-sm text-foreground mb-2">Essential Cookies</h4>
                  <p className="text-xs text-muted-foreground">Required for authentication, security, and the core operation of the trading engine. Cannot be disabled.</p>
                </div>
                <div className="p-4 bg-muted rounded-xl border border-border">
                  <h4 className="font-bold text-sm text-foreground mb-2">Performance Cookies</h4>
                  <p className="text-xs text-muted-foreground">Help us understand how users interact with the platform so we can optimize load times and routing.</p>
                </div>
                <div className="p-4 bg-muted rounded-xl border border-border">
                  <h4 className="font-bold text-sm text-foreground mb-2">Functional Cookies</h4>
                  <p className="text-xs text-muted-foreground">Remember your region, currency preferences, and theme settings (dark/light mode).</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-4">
                <Eye className="text-hagull-600" />
                Managing Your Preferences
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You have the right to decide whether to accept or reject non-essential cookies. You can exercise your preferences directly within your browser settings or via our dedicated privacy control panel in your account dashboard.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
