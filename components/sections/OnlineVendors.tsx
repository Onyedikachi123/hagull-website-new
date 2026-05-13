'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, ChevronRight, BadgeCheck } from 'lucide-react'
import { StaggerContainer, StaggerItem, FadeIn } from '@/components/animations/FadeIn'
import { useVendorStore } from '@/store'
import { MOCK_VENDORS, CURRENCY_LABELS } from '@/constants'
import type { Vendor, CurrencyCode } from '@/types'
import { cn } from '@/lib/utils'

const CURRENCY_OPTIONS: CurrencyCode[] = ['USD', 'EUR', 'GBP', 'NGN', 'BTC', 'USDT', 'ZAR']

// ─── Star Rating ──────────────────────────────────────────────────────────────
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={11}
          className={star <= Math.round(rating) ? 'text-accent-500 fill-accent-500' : 'text-muted-foreground/30'}
        />
      ))}
      <span className="ml-1 text-xs text-muted-foreground font-medium">{rating}</span>
    </div>
  )
}

// ─── Vendor Card ──────────────────────────────────────────────────────────────
function VendorCard({ vendor }: { vendor: Vendor }) {
  const { selectedCurrencies, setVendorCurrency } = useVendorStore()
  const selectedCurrency = (selectedCurrencies[vendor.id] ?? 'USD') as CurrencyCode
  const rate = vendor.rates[selectedCurrency]

  return (
    <div className="group bg-white rounded-2xl border border-border shadow-card hover:shadow-card-hover hover:border-hagull-200 transition-all duration-300 overflow-hidden flex flex-col">
      {/* Avatar area */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <Image
          src={vendor.avatar}
          alt={vendor.altText}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 25vw"
        />

        {/* Online indicator */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm">
          <span
            className={cn(
              'w-1.5 h-1.5 rounded-full',
              vendor.isOnline ? 'bg-emerald-400 animate-pulse' : 'bg-gray-400'
            )}
          />
          <span className="text-[10px] font-medium text-white">
            {vendor.isOnline ? 'Online' : 'Away'}
          </span>
        </div>

        {/* Badges */}
        {vendor.badges && vendor.badges.length > 0 && (
          <div className="absolute bottom-3 left-3 flex gap-1.5">
            {vendor.badges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-hagull-500/90 text-white text-[10px] font-semibold backdrop-blur-sm"
              >
                <BadgeCheck size={10} />
                {badge}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        {/* Name + rating row */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="font-semibold text-sm text-foreground">{vendor.name}</p>
            <StarRating rating={vendor.ratings} />
          </div>
          {/* Currency selector */}
          <select
            className="text-xs font-medium text-hagull-500 bg-hagull-50 border border-hagull-100 rounded-lg px-2 py-1 cursor-pointer focus-brand outline-none"
            value={selectedCurrency}
            onChange={(e) => setVendorCurrency(vendor.id, e.target.value)}
            aria-label={`Select currency for ${vendor.name}`}
          >
            {CURRENCY_OPTIONS.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
        </div>

        {/* Rate info */}
        <div className="flex-1 space-y-2 mb-4 text-xs">
          <div className="flex justify-between items-center py-1.5 border-b border-border">
            <span className="text-muted-foreground">Selling Rate</span>
            <span className="font-semibold text-foreground">{rate.sellingRate}</span>
          </div>
          <div className="flex justify-between items-center py-1.5 border-b border-border">
            <span className="text-muted-foreground">Min / Max</span>
            <span className="font-medium text-foreground">{rate.min} — {rate.max}</span>
          </div>
          <div className="flex justify-between items-center py-1.5">
            <span className="text-muted-foreground">Success Rate</span>
            <span className="font-semibold text-emerald-600">{vendor.successRate}%</span>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="/register"
          className="group/btn w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-hagull-500 hover:bg-hagull-600 text-white text-xs font-semibold transition-all duration-200 shadow-glow/20 hover:shadow-glow/40"
        >
          Trade with {vendor.name}
          <ChevronRight size={13} className="transition-transform duration-200 group-hover/btn:translate-x-0.5" />
        </Link>
      </div>
    </div>
  )
}

// ─── Online Vendors Section ────────────────────────────────────────────────────
export default function OnlineVendors() {
  return (
    <section className="section-pad bg-section-subtle" aria-labelledby="vendors-heading">
      <div className="container-fluid">
        {/* Header */}
        <FadeIn direction="up" className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-hagull-500 mb-3">
            Top Online Vendors
          </p>
          <h2
            id="vendors-heading"
            className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight"
          >
            Verified vendors, ready to trade
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Every vendor is KYC-verified with a public success score. Choose with confidence.
          </p>
        </FadeIn>

        {/* Cards */}
        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          staggerDelay={0.09}
        >
          {MOCK_VENDORS.map((vendor) => (
            <StaggerItem key={vendor.id}>
              <VendorCard vendor={vendor} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* View all */}
        <FadeIn direction="up" delay={0.3} className="mt-12 text-center">
          <Link
            href="/vendors"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-hagull-200 text-hagull-600 hover:bg-hagull-50 font-semibold text-sm transition-all duration-200 focus-brand"
          >
            View all vendors
            <ChevronRight size={15} />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
