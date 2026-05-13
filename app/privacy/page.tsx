import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import PrivacySidebar from '@/components/sections/privacy/PrivacySidebar'
import PrivacyContent from '@/components/sections/privacy/PrivacyContent'

export const metadata: Metadata = {
  title: 'Privacy Policy | Hagull',
  description:
    'This policy outlines how Hagull Exchange collects, uses, and protects your personal data to ensure a secure and transparent financial experience.',
}

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bg-section-subtle min-h-screen">
        <div className="container-fluid max-w-6xl pt-24">
          <div className="flex gap-12 relative">
            <PrivacySidebar />
            <PrivacyContent />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
