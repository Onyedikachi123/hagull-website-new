import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CompanyHero from '@/components/sections/company/CompanyHero'
import CompanyMission from '@/components/sections/company/CompanyMission'
import CompanyReach from '@/components/sections/company/CompanyReach'
import CompanyFoundations from '@/components/sections/company/CompanyFoundations'
import CompanyLeadership from '@/components/sections/company/CompanyLeadership'
import CompanyCTA from '@/components/sections/company/CompanyCTA'

export const metadata: Metadata = {
  title: 'Company | Hagull',
  description:
    'Hagull Exchange is pioneering the next generation of cross-border exchange, merging institutional-grade security with fluid digital accessibility.',
}

export default function CompanyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <CompanyHero />
        <CompanyMission />
        <CompanyReach />
        <CompanyFoundations />
        <CompanyLeadership />
        <CompanyCTA />
      </main>
      <Footer />
    </>
  )
}
