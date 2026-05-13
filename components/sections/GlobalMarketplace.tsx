'use client'

import { motion } from 'framer-motion'
import { FadeIn } from '@/components/animations/FadeIn'
import { CheckCircle2, ShieldAlert } from 'lucide-react'
import Image from 'next/image'

export default function GlobalMarketplace() {
  return (
    <section className="section-pad bg-section-subtle" aria-labelledby="marketplace-heading">
      <div className="container-fluid max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Table */}
          <div className="lg:col-span-2 space-y-6">
            <FadeIn direction="up">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">Global Marketplace</h3>
                <div className="flex items-center gap-2 text-xs">
                  <button className="px-3 py-1 bg-white border border-border rounded-md font-medium text-muted-foreground shadow-sm">BUY</button>
                  <button className="px-3 py-1 bg-transparent text-muted-foreground font-medium">SELL</button>
                </div>
              </div>

              <div className="bg-white border border-border rounded-2xl overflow-hidden shadow-card">
                <table className="w-full text-sm text-left">
                  <thead className="bg-hagull-50/50 text-xs text-muted-foreground border-b border-border">
                    <tr>
                      <th className="px-4 py-3 font-medium">Advertiser</th>
                      <th className="px-4 py-3 font-medium">Price</th>
                      <th className="px-4 py-3 font-medium">Limit/Available</th>
                      <th className="px-4 py-3 font-medium text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-muted/30 transition-colors">
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-muted overflow-hidden">
                            <Image src="/Bitcoin.webp" alt="User avatar" width={32} height={32} />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">user_842 <CheckCircle2 size={12} className="inline text-emerald-500" /></p>
                            <p className="text-[10px] text-muted-foreground">4,500 orders | 99%</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 font-bold text-foreground">1.02 USD</td>
                      <td className="px-4 py-4 text-xs text-muted-foreground">
                        <p>Min: 50 USD</p>
                        <p>Max: 50,000 USD</p>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <button className="px-4 py-1.5 bg-hagull-500 hover:bg-hagull-600 text-white text-xs font-semibold rounded-lg transition-colors">
                          Chat with Vendor
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/30 transition-colors">
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-muted overflow-hidden">
                            <Image src="/Ethereum.webp" alt="User avatar" width={32} height={32} />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">node_X5 <CheckCircle2 size={12} className="inline text-emerald-500" /></p>
                            <p className="text-[10px] text-muted-foreground">1,240 orders | 100%</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 font-bold text-foreground">0.98 EUR</td>
                      <td className="px-4 py-4 text-xs text-muted-foreground">
                        <p>Min: 10 EUR</p>
                        <p>Max: 20,000 EUR</p>
                      </td>
                      <td className="px-4 py-4 text-right">
                        <button className="px-4 py-1.5 bg-hagull-500 hover:bg-hagull-600 text-white text-xs font-semibold rounded-lg transition-colors">
                          Chat with Vendor
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </FadeIn>
          </div>

          {/* Right Column - Balance & Chat */}
          <div className="space-y-6">
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-hagull-500 rounded-2xl p-6 text-white shadow-glow">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-xs font-semibold text-white/70 tracking-wider">GLOBAL BALANCE</p>
                  <ShieldAlert size={16} className="text-white/70" />
                </div>
                <h4 className="text-3xl font-bold mb-1">$12,450.82</h4>
                <p className="text-xs text-white/70 mb-6">Multicurrency Portfolio</p>
                <div className="flex gap-3">
                  <button className="flex-1 bg-white/20 hover:bg-white/30 text-white text-sm font-semibold py-2 rounded-xl transition-colors">Deposit</button>
                  <button className="flex-1 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold py-2 rounded-xl transition-colors">Withdraw</button>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white rounded-2xl border border-border shadow-card p-4">
                <div className="flex items-center gap-2 pb-3 border-b border-border mb-3">
                  <div className="w-6 h-6 rounded-full bg-muted overflow-hidden">
                    <Image src="/Bitcoin.webp" alt="User" width={24} height={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">Trade P2P3748271</p>
                    <p className="text-[9px] text-emerald-500">Online</p>
                  </div>
                </div>
                <div className="space-y-3 mb-4 text-xs">
                  <div className="bg-muted p-2.5 rounded-lg rounded-tl-none max-w-[85%]">
                    <p className="text-muted-foreground">Hello! Please send the payment to my international bank account.</p>
                  </div>
                  <div className="bg-hagull-500 text-white p-2.5 rounded-lg rounded-tr-none max-w-[85%] ml-auto">
                    <p>Sure, transferring now via SEPA. Will update shortly.</p>
                  </div>
                </div>
                <div className="relative">
                  <input type="text" placeholder="Type a message..." className="w-full bg-muted border-none rounded-xl text-xs py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-hagull-500" readOnly />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Bottom Section: AI Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 items-center">
          <FadeIn direction="up" delay={0.3}>
            <div className="bg-white rounded-2xl p-6 border border-border shadow-card relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-hagull-500" />
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-hagull-50 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-hagull-500" />
                </div>
                <h4 className="font-bold text-foreground text-sm">Hagull Smart Suggest</h4>
                <span className="text-[10px] text-muted-foreground ml-auto bg-muted px-2 py-0.5 rounded-full">Cloud Market Intelligence</span>
              </div>
              <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider mb-1">RECOMMENDED PRICE</p>
              <h2 className="text-3xl font-extrabold text-foreground mb-2">1.025 USD</h2>
              <p className="text-xs text-muted-foreground mb-6">Based on market liquidity and routing across 14 major global exchanges.</p>
              <div className="flex items-center justify-between bg-hagull-50 rounded-xl p-3">
                <p className="text-xs font-semibold text-foreground">Safety Score: <span className="text-emerald-500">Optimal</span></p>
                <button className="bg-hagull-500 hover:bg-hagull-600 text-white text-xs px-4 py-1.5 rounded-lg font-semibold transition-colors">Apply Pricing</button>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <h3 className="text-2xl font-bold text-foreground mb-4">Smarter Trading with AI Intelligence</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Stop guessing your rates. Our AI-driven pricing engine analyzes global liquidity and inter-exchange demand to suggest the most competitive prices, ensuring you never leave money on the table while maintaining rapid trade execution across borders.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle2 size={16} className="text-hagull-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-semibold text-foreground">Dynamic Spread Adjustments</h5>
                  <p className="text-xs text-muted-foreground">Stay profitable even during high-market volatility.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 size={16} className="text-hagull-500 shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-sm font-semibold text-foreground">Liquidity Anticipation</h5>
                  <p className="text-xs text-muted-foreground">Predict peak trading hours and be first-in-line to capture settlements.</p>
                </div>
              </li>
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
