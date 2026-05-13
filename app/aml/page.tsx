import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { FileText, ShieldAlert, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AML Policy | Hagull',
  description: 'Anti-Money Laundering (AML) and Know Your Customer (KYC) Policy for Hagull Exchange.',
}

export default function AMLPage() {
  return (
    <>
      <Navbar />
      <main className="bg-section-subtle min-h-screen pt-32 pb-24">
        <div className="container-fluid max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
              AML & KYC Policy
            </h1>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Last Updated: May 24, 2024. Hagull Exchange maintains strict compliance with global AML standards.
            </p>
          </div>

          <div className="space-y-12 bg-white rounded-2xl p-8 border border-border shadow-sm">
            <section>
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-4">
                <ShieldAlert className="text-hagull-600" />
                Anti-Money Laundering Commitment
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Hagull Exchange is committed to the highest standards of Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF) compliance. We require management and employees to adhere to these standards to prevent the use of our products and services for money laundering purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-4">
                <FileText className="text-hagull-600" />
                Know Your Customer (KYC)
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Our KYC procedures involve rigorous identity verification processes before users can engage in transactions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  Government-issued ID verification
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  Proof of residential address
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                  Real-time biometric facial scanning
                </li>
              </ul>
            </section>

            <section className="bg-hagull-50 rounded-xl p-6 border border-hagull-100">
              <h3 className="text-lg font-bold text-foreground mb-2">Suspicious Activity Reporting</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our proprietary monitoring algorithms continuously scan for unusual transaction patterns. Any suspected illicit activity is immediately flagged and reported to relevant financial intelligence units globally.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
