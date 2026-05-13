'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { CheckCircle2 } from 'lucide-react'

export default function StatusPage() {
  const systems = [
    { name: 'Core Exchange Engine', status: 'Operational' },
    { name: 'P2P Escrow Services', status: 'Operational' },
    { name: 'REST API', status: 'Operational' },
    { name: 'WebSocket Feeds', status: 'Operational' },
    { name: 'Fiat Gateways', status: 'Operational' },
  ]

  return (
    <div className="bg-section-subtle min-h-screen flex flex-col">
      <Navbar />
      
      <main id="main-content" className="flex-1 pt-32 pb-24">
        <div className="container-fluid max-w-4xl">
          <div className="bg-emerald-500 rounded-2xl p-8 text-white shadow-glow mb-12 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-extrabold mb-2">All Systems Operational</h1>
              <p className="text-sm font-medium text-white/80">Last updated: Just now</p>
            </div>
            <div className="hidden sm:flex w-16 h-16 bg-white/20 rounded-full items-center justify-center backdrop-blur-md">
              <CheckCircle2 size={32} className="text-white" />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border bg-muted/30">
              <h2 className="text-lg font-bold text-foreground">System Status</h2>
            </div>
            <div className="divide-y divide-border">
              {systems.map((sys, i) => (
                <div key={i} className="p-6 flex items-center justify-between hover:bg-muted/30 transition-colors">
                  <span className="text-sm font-bold text-foreground">{sys.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold text-xs">Operational</span>
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
