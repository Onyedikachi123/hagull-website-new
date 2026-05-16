import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import MarketStats from '@/components/sections/markets/MarketStats'
import P2PTable from '@/components/sections/markets/P2PTable'
import QuickTrade from '@/components/sections/markets/QuickTrade'
import ActiveTrades from '@/components/sections/markets/ActiveTrades'
import PrimeBanner from '@/components/sections/markets/PrimeBanner'

export const metadata: Metadata = {
  title: 'P2P Marketplace | Hagull',
  description:
    'Trade digital assets securely on the Hagull Exchange P2P Marketplace with institutional liquidity and zero trading fees.',
}

export default function MarketsPage() {
  return (
    <div className="bg-section-subtle min-h-screen flex flex-col">
      <Navbar />
      
      <main id="main-content" className="flex-1 pt-24 pb-20">
        <div className="container-fluid">
          
          <MarketStats />

          <div className="flex flex-col xl:flex-row gap-6">
            {/* Left Column (P2P Table) */}
            <div className="flex-1">
              <P2PTable />
            </div>

            {/* Right Column (Widgets) */}
            <div className="w-full xl:w-[380px] shrink-0 space-y-6">
              <QuickTrade />
              <ActiveTrades />
              <PrimeBanner />
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
