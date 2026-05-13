import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HelpCenterHero from '@/components/sections/resources/HelpCenterHero'
import HelpCategories from '@/components/sections/resources/HelpCategories'
import FAQAccordion from '@/components/sections/resources/FAQAccordion'
import SupportCTA from '@/components/sections/resources/SupportCTA'

export const metadata: Metadata = {
  title: 'Resources & Help Center | Hagull',
  description:
    'Find answers to common questions about managing your account, executing trades, and keeping your assets secure on Hagull.',
}

export default function ResourcesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HelpCenterHero />
        <HelpCategories />
        <FAQAccordion />
        <SupportCTA />
      </main>
      <Footer />
    </>
  )
}
