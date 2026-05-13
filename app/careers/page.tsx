import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CareersHero from '@/components/sections/careers/CareersHero'
import Departments from '@/components/sections/careers/Departments'
import Culture from '@/components/sections/careers/Culture'
import OpenPositions from '@/components/sections/careers/OpenPositions'

export const metadata: Metadata = {
  title: 'Careers | Hagull',
  description:
    'Join the future of global finance. Build the infrastructure for Africa\'s next generation of financial exchange. We are looking for visionaries, engineers, and strategists.',
}

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <CareersHero />
        <Departments />
        <Culture />
        <OpenPositions />
      </main>
      <Footer />
    </>
  )
}
