'use client'

import { P2P_MERCHANTS } from '@/constants/markets'
import { ChevronDown, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export default function P2PTable() {
  return (
    <div className="bg-white border border-border rounded-xl shadow-sm overflow-hidden flex flex-col">
      <div className="p-6 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-foreground">P2P Marketplace</h2>
        </div>
        <div className="flex bg-muted/50 p-1 rounded-lg">
          <button className="px-4 py-1.5 text-xs font-bold bg-white text-foreground rounded shadow-sm">Buy</button>
          <button className="px-4 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors">Sell</button>
          <button className="px-4 py-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors">Convert</button>
        </div>
      </div>

      <div className="p-6 bg-section-subtle border-b border-border flex flex-wrap gap-4 items-end">
        <div className="flex-1 min-w-[140px]">
          <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Currency</label>
          <div className="relative">
            <select className="w-full appearance-none bg-white border border-border text-sm font-semibold px-4 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-hagull-500">
              <option>USD - US Dollar</option>
              <option>NGN - Nigerian Naira</option>
              <option>EUR - Euro</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          </div>
          <p className="text-[10px] text-muted-foreground mt-1.5">Supporting 50+ global fiat currencies</p>
        </div>
        <div className="flex-1 min-w-[140px]">
          <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Payment Method</label>
          <div className="relative">
            <select className="w-full appearance-none bg-white border border-border text-sm font-semibold px-4 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-hagull-500">
              <option>All Payments</option>
              <option>Bank Transfer</option>
              <option>Wise</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          </div>
        </div>
        <div className="flex-1 min-w-[140px]">
          <label className="block text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-1.5">Region</label>
          <div className="relative">
            <select className="w-full appearance-none bg-white border border-border text-sm font-semibold px-4 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-hagull-500">
              <option>Worldwide</option>
              <option>North America</option>
              <option>Africa</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          </div>
        </div>
        <div>
          <button className="px-6 py-2.5 bg-hagull-600 hover:bg-hagull-700 text-white font-bold text-sm rounded-lg shadow-sm transition-colors flex items-center gap-2">
            Apply Filters
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border">
              <th className="px-6 py-4 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Advertiser</th>
              <th className="px-6 py-4 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Price</th>
              <th className="px-6 py-4 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Limit/Available</th>
              <th className="px-6 py-4 text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Payment</th>
              <th className="px-6 py-4 text-[10px] font-bold text-muted-foreground uppercase tracking-wider text-right">Trade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {P2P_MERCHANTS.map((merch) => (
              <tr key={merch.id} className="hover:bg-muted/30 transition-colors">
                <td className="px-6 py-5">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-hagull-600 border-b border-hagull-600/30 w-fit pb-0.5 mb-1 cursor-pointer">{merch.name}</span>
                    <span className="text-[10px] text-muted-foreground">{merch.orders} | {merch.completion}</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex flex-col">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-extrabold text-foreground">{merch.price}</span>
                      <span className="text-sm font-bold text-foreground">{merch.currency}</span>
                    </div>
                    <span className="text-[10px] text-muted-foreground">{merch.rate}</span>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex flex-col gap-1 text-[11px]">
                    <div className="flex items-center gap-1">
                      <span className="text-muted-foreground">Available:</span>
                      <span className="font-bold text-foreground">{merch.available}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-muted-foreground">Limit:</span>
                      <span className="font-bold text-foreground">{merch.limit}</span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5">
                  <div className="flex flex-wrap gap-2">
                    {merch.paymentMethods.map((method, i) => (
                      <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 text-[10px] font-bold rounded">
                        {method}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-5 text-right">
                  <Link href="/register">
                    <button className="inline-flex items-center justify-center px-4 py-2 bg-hagull-600 hover:bg-hagull-700 text-white font-bold text-xs rounded-lg shadow-sm transition-colors w-full max-w-[140px]">
                      Hagull
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 border-t border-border text-center bg-section-subtle">
        <Link href="#" className="text-xs font-bold text-hagull-600 hover:text-hagull-700 transition-colors">
          View All Merchants
        </Link>
      </div>
    </div>
  )
}
