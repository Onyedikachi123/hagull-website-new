'use client'

import { TOP_MARKETS } from '@/constants/markets'
import { ArrowRight, Bitcoin } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function MarketStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {TOP_MARKETS.map((market, idx) => (
        <div key={idx} className="bg-white border border-border rounded-xl p-4 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              {market.pair.includes('BTC') ? (
                <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                  <Bitcoin size={12} className="text-orange-500" />
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full bg-hagull-100 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-hagull-600">{market.pair.charAt(0)}</span>
                </div>
              )}
              <span className="text-xs font-bold text-foreground">{market.pair}</span>
            </div>
            <span className={cn("text-xs font-bold", market.isPositive ? "text-emerald-500" : "text-red-500")}>
              {market.change}
            </span>
          </div>
          
          <div className="mt-4">
            <span className="text-2xl font-extrabold tracking-tight text-foreground">{market.price}</span>
          </div>

          {/* Simple simulated sparkline */}
          <div className="absolute bottom-4 right-4 w-16 h-8 opacity-50">
            <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible">
              <path 
                d={market.isPositive ? "M0,20 Q20,30 40,10 T80,5 T100,0" : "M0,5 Q20,0 40,20 T80,25 T100,30"} 
                fill="none" 
                stroke={market.isPositive ? "#10b981" : "#ef4444"} 
                strokeWidth="3" 
                strokeLinecap="round"
                className="group-hover:stroke-[4px] transition-all"
              />
            </svg>
          </div>
        </div>
      ))}

      {/* Institutional Flow Card */}
      <div className="bg-hagull-600 rounded-xl p-5 shadow-glow flex flex-col justify-between h-32 relative overflow-hidden group hover:bg-hagull-700 transition-colors cursor-pointer">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        <div className="relative z-10">
          <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-1">Global Index</p>
          <h3 className="text-xl font-extrabold text-white">Institutional Flow</h3>
        </div>
        <div className="relative z-10 flex items-center gap-2 text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
          View full exchange
          <ArrowRight size={14} />
        </div>
      </div>
    </div>
  )
}
