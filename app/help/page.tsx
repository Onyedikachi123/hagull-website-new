import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Search, Book, MessageCircle, HelpCircle, FileText } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Help Center | Hagull',
  description: 'Get support and learn how to use Hagull Exchange.',
}

export default function HelpPage() {
  const categories = [
    { title: 'Getting Started', icon: <Book />, desc: 'Account setup and verification.' },
    { title: 'Trading & Escrow', icon: <Search />, desc: 'How to trade and use escrow.' },
    { title: 'Wallets & Funding', icon: <FileText />, desc: 'Deposits, withdrawals, and balances.' },
    { title: 'Security', icon: <HelpCircle />, desc: '2FA, passkeys, and account protection.' }
  ]

  return (
    <div className="bg-section-subtle min-h-screen flex flex-col">
      <Navbar />
      
      <main id="main-content" className="flex-1 pt-32 pb-24">
        <div className="bg-primary pt-16 pb-24 text-on-primary">
          <div className="container-fluid max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              How can we help you?
            </h1>
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline w-6 h-6" />
              <input 
                type="text" 
                placeholder="Search for articles, tutorials, and FAQs..." 
                className="w-full pl-14 pr-6 py-4 rounded-full border-none focus:ring-4 focus:ring-primary-container bg-surface-bright text-on-surface shadow-lg text-lg outline-none"
              />
            </div>
          </div>
        </div>

        <div className="container-fluid max-w-6xl -mt-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {categories.map((cat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md border border-border hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {cat.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{cat.title}</h3>
                <p className="text-sm text-muted-foreground">{cat.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl border border-border shadow-sm p-8 text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mx-auto mb-4">
              <MessageCircle size={32} />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Still need help?</h2>
            <p className="text-muted-foreground mb-6">
              Our support team is available 24/7 to help you with any issues you might face.
            </p>
            <Link href="/contact" className="inline-flex py-3 px-8 bg-secondary text-on-secondary font-bold rounded-xl hover:brightness-110 transition-all">
              Contact Support
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
