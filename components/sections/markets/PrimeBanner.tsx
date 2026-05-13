'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function PrimeBanner() {
  return (
    <div className="relative bg-surface-950 rounded-xl overflow-hidden p-6 aspect-square flex flex-col justify-end text-white shadow-sm border border-border">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-50 mix-blend-screen">
        <Image src="/globe.png" alt="Digital globe" fill className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-surface-950 via-surface-950/40 to-transparent" />
      
      <div className="relative z-10">
        <h3 className="text-2xl font-extrabold tracking-tight mb-2">Hagull Prime</h3>
        <p className="text-xs text-white/80 leading-relaxed mb-4">
          Unlock institutional liquidity and dedicated account management for high-volume traders.
        </p>
        <Link href="/prime" className="text-xs font-bold text-white underline hover:text-white/80 transition-colors">
          Learn More
        </Link>
      </div>
    </div>
  )
}
