import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import GlobalReach from '@/components/sections/GlobalReach'
import TrustFeatures from '@/components/sections/TrustFeatures'
import HowItWorks from '@/components/sections/HowItWorks'
import GlobalMarketplace from '@/components/sections/GlobalMarketplace'
import EscrowArchitecture from '@/components/sections/EscrowArchitecture'
import Testimonials from '@/components/sections/Testimonials'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'Hagull — The Currency Exchange Marketplace',
  description:
    'Global P2P Infrastructure for Every Currency. Trade USD, EUR, GBP, NGN, BRL, and 50+ other fiat currencies directly for crypto and stablecoins.',
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <GlobalReach />
        <TrustFeatures />
        <HowItWorks />
        <GlobalMarketplace />
        <EscrowArchitecture />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
