'use client'

import { ACTIVE_TRADES } from '@/constants/markets'
import { User } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function ActiveTrades() {
  return (
    <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <h3 className="text-lg font-bold text-foreground">Active Trades</h3>
        <div className="w-5 h-5 rounded-full bg-hagull-600 text-white flex items-center justify-center text-[10px] font-bold">
          2
        </div>
      </div>

      <div className="space-y-3">
        {ACTIVE_TRADES.map((trade) => (
          <div key={trade.id} className="bg-section-subtle border border-border rounded-xl p-4">
            <div className="flex justify-between items-start mb-2">
              <div className="flex gap-1.5 items-center">
                <span className={cn("text-xs font-bold", trade.type === 'Buy' ? "text-emerald-600" : "text-red-500")}>
                  {trade.type}
                </span>
                <span className="text-xs font-bold text-foreground">{trade.asset}</span>
              </div>
              <span className={cn("text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider", trade.statusColor)}>
                {trade.status}
              </span>
            </div>
            
            <div className="mb-2">
              <span className="text-lg font-extrabold text-foreground">{trade.amount}</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <User size={12} />
              <span>{trade.partner}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center">
        <Link href="#" className="text-xs font-bold text-muted-foreground hover:text-foreground transition-colors">
          View Trade History
        </Link>
      </div>
    </div>
  )
}
