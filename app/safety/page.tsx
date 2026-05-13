import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Shield, Lock, FileKey, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Safety & Security | Hagull',
  description: 'Institutional-grade security protecting your assets and data.',
}

export default function SafetyPage() {
  const features = [
    {
      icon: <Lock size={32} />,
      title: 'End-to-End Encryption',
      desc: 'All communications and personal data are encrypted with AES-256 standard.'
    },
    {
      icon: <FileKey size={32} />,
      title: 'Multi-Signature Cold Storage',
      desc: '98% of digital assets are stored offline in geographically distributed vaults.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Escrow Protection',
      desc: 'Every trade is protected by smart-contract based escrow that holds assets securely.'
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Real-Time Auditing',
      desc: '24/7 automated risk engines monitor for suspicious behavior and prevent fraud.'
    }
  ]

  return (
    <div className="bg-section-subtle min-h-screen flex flex-col">
      <Navbar />
      
      <main id="main-content" className="flex-1 pt-32 pb-24">
        <div className="container-fluid max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-primary w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6">
              Security Above All Else
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We employ institutional-grade security architecture to ensure your assets and data remain protected against the most sophisticated threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {features.map((feat, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-border shadow-sm flex flex-col items-center text-center">
                <div className="text-primary mb-6">{feat.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feat.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-primary rounded-3xl p-12 text-on-primary text-center">
            <h2 className="text-3xl font-bold mb-6">Vulnerability Disclosure Program</h2>
            <p className="text-primary-fixed-dim max-w-2xl mx-auto mb-8">
              We believe in working with the security community. If you&apos;ve found a vulnerability, please report it to our security team. We offer bounties for responsibly disclosed issues.
            </p>
            <a href="mailto:security@hagull.com" className="inline-block py-3 px-8 bg-white text-primary font-bold rounded-xl hover:bg-surface-bright transition-colors">
              Report an Issue
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
