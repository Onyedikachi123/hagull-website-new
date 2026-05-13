import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import InstitutionalHero from '@/components/sections/institutional/InstitutionalHero'
import SecurityPillars from '@/components/sections/institutional/SecurityPillars'
import TransparencySection from '@/components/sections/institutional/TransparencySection'
import InstitutionalCTA from '@/components/sections/institutional/InstitutionalCTA'

export const metadata: Metadata = {
  title: 'Institutional Grade Security | Hagull',
  description:
    'Hagull Exchange is built on a foundation of rigorous regulatory adherence and advanced cryptographic security.',
}

export default function InstitutionalPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <InstitutionalHero />
        <SecurityPillars />
        <TransparencySection />
        <InstitutionalCTA />
      </main>
      <Footer />
    </>
  )
}
