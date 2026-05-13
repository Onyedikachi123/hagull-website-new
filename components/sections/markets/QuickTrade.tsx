'use client'

import { ArrowUpDown } from 'lucide-react'

export default function QuickTrade() {
  return (
    <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-bold text-foreground mb-4">Quick Trade</h3>
      
      <div className="space-y-2 relative">
        {/* You Pay */}
        <div>
          <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1.5">You Pay</label>
          <div className="flex bg-white border border-border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-hagull-500 transition-all">
            <input 
              type="text" 
              placeholder="0.00" 
              className="w-full px-4 py-3 text-lg font-bold text-foreground outline-none bg-transparent"
              defaultValue="0.00"
            />
            <div className="bg-muted px-4 py-3 flex items-center justify-center border-l border-border shrink-0 min-w-[80px]">
              <span className="text-sm font-bold text-foreground">USD</span>
            </div>
          </div>
        </div>

        {/* Swap Button */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[45%] z-10">
          <button className="w-8 h-8 rounded-full bg-white border border-border shadow-sm flex items-center justify-center hover:bg-muted transition-colors text-hagull-600">
            <ArrowUpDown size={14} />
          </button>
        </div>

        {/* You Receive */}
        <div className="pt-2">
          <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1.5">You Receive</label>
          <div className="flex bg-white border border-border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-hagull-500 transition-all">
            <input 
              type="text" 
              placeholder="0.00" 
              className="w-full px-4 py-3 text-lg font-bold text-foreground outline-none bg-transparent"
              defaultValue="0.00"
            />
            <div className="bg-muted px-4 py-3 flex items-center justify-center border-l border-border shrink-0 min-w-[80px]">
              <span className="text-sm font-bold text-foreground">USDT</span>
            </div>
          </div>
        </div>
      </div>

      <button className="w-full mt-6 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm rounded-lg shadow-sm transition-colors">
        Execute Trade
      </button>

      <p className="text-center text-[10px] text-muted-foreground uppercase tracking-wider font-semibold mt-4">
        1 USDT ≈ 1.02 USD • Zero Trading Fees
      </p>
    </div>
  )
}
