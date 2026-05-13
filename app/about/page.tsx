import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Landmark, Shield, Users, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us | Hagull',
  description: 'Learn about Hagull, the next-generation currency exchange marketplace.',
}

export default function AboutPage() {
  const values = [
    {
      icon: <Globe className="w-6 h-6 text-hagull-600" />,
      title: 'Global Access',
      description: 'Breaking down borders to provide universal access to currency exchange and digital assets.'
    },
    {
      icon: <Shield className="w-6 h-6 text-hagull-600" />,
      title: 'Institutional Trust',
      description: 'Uncompromising security standards and strict regulatory compliance.'
    },
    {
      icon: <Users className="w-6 h-6 text-hagull-600" />,
      title: 'Community First',
      description: 'Built for and driven by our global community of traders and businesses.'
    },
    {
      icon: <Landmark className="w-6 h-6 text-hagull-600" />,
      title: 'Financial Sovereignty',
      description: 'Empowering individuals to take control of their wealth.'
    }
  ]

  return (
    <div className="bg-section-subtle min-h-screen flex flex-col">
      <Navbar />
      
      <main id="main-content" className="flex-1 pt-32 pb-24">
        <div className="container-fluid max-w-6xl">
          <div className="mb-16 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6">
              Our Mission
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Hagull, we are building the infrastructure for the next generation of global exchange. We believe that exchanging value across borders should be as simple, secure, and instant as sending a message.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 border border-border shadow-sm mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">The Hagull Story</h2>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Founded in 2024, Hagull emerged from a simple realization: the traditional currency exchange market is fundamentally broken. High fees, slow settlement times, and lack of transparency have cost global businesses and individuals billions.
                  </p>
                  <p>
                    We set out to build a platform that combines the speed of crypto rails with the reliability of traditional finance. Today, Hagull serves hundreds of thousands of users across 54+ countries, facilitating over $2.4B in monthly volume.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted rounded-xl p-6 text-center">
                  <div className="text-3xl font-extrabold text-hagull-600 mb-1">$2.4B+</div>
                  <div className="text-xs font-bold text-muted-foreground uppercase">Monthly Vol</div>
                </div>
                <div className="bg-muted rounded-xl p-6 text-center">
                  <div className="text-3xl font-extrabold text-hagull-600 mb-1">180K+</div>
                  <div className="text-xs font-bold text-muted-foreground uppercase">Active Users</div>
                </div>
                <div className="bg-muted rounded-xl p-6 text-center">
                  <div className="text-3xl font-extrabold text-hagull-600 mb-1">54+</div>
                  <div className="text-xs font-bold text-muted-foreground uppercase">Countries</div>
                </div>
                <div className="bg-muted rounded-xl p-6 text-center">
                  <div className="text-3xl font-extrabold text-hagull-600 mb-1">120+</div>
                  <div className="text-xs font-bold text-muted-foreground uppercase">Currencies</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((val, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    {val.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{val.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{val.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
