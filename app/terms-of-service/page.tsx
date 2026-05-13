import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import TermsSidebar from '@/components/sections/terms/TermsSidebar'
import TermsContent from '@/components/sections/terms/TermsContent'

export const metadata: Metadata = {
  title: 'Terms of Service | Hagull',
  description:
    'Please read these terms carefully before using the Hagull Exchange platform.',
}

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-section-subtle min-h-screen">
        <div className="container-fluid max-w-6xl pt-24">
          <div className="flex gap-12 relative">
            <TermsSidebar />
            <TermsContent />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
