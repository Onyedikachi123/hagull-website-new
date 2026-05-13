'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { FadeIn } from '@/components/animations/FadeIn'
import { CONTINENTS, CRYPTO_ASSETS } from '@/constants'
import type { ContinentKey } from '@/types'
import { cn } from '@/lib/utils'

// ─── Flag Card ─────────────────────────────────────────────────────────────────
function FlagCard({ country, flag }: { country: string; flag: string }) {
  return (
    <motion.button
      layout
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.85 }}
      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -3, scale: 1.05 }}
      className="flex flex-col items-center gap-2 p-3 rounded-xl border border-hagull-100 bg-white hover:border-hagull-300 hover:shadow-card transition-all duration-200 cursor-pointer focus-brand group"
      aria-label={`Trade ${country}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={flag}
        alt={`${country} flag`}
        width={48}
        height={30}
        className="rounded-md object-cover w-12 h-8 group-hover:scale-105 transition-transform duration-200"
        loading="lazy"
      />
      <span className="text-[10px] font-medium text-muted-foreground leading-none truncate max-w-[56px]">
        {country}
      </span>
    </motion.button>
  )
}

// ─── Skeleton ──────────────────────────────────────────────────────────────────
function FlagSkeleton() {
  return (
    <div className="flex flex-col items-center gap-2 p-3 rounded-xl border border-border bg-white">
      <div className="w-12 h-8 rounded-md bg-muted animate-shimmer" />
      <div className="w-10 h-2 rounded bg-muted animate-shimmer" />
    </div>
  )
}

// ─── Crypto Asset ──────────────────────────────────────────────────────────────
function CryptoCard({ src, alt, symbol }: { src: string; alt: string; symbol: string }) {
  return (
    <motion.div
      whileHover={{ y: -3, scale: 1.06 }}
      className="flex flex-col items-center gap-2 p-3.5 rounded-xl border border-border bg-white hover:border-hagull-300 hover:shadow-card transition-all duration-200 cursor-pointer"
    >
      <Image src={src} alt={alt} width={36} height={36} className="rounded-full" />
      <span className="text-[10px] font-semibold text-muted-foreground">{symbol}</span>
    </motion.div>
  )
}

// ─── Currency Market ───────────────────────────────────────────────────────────
export default function CurrencyMarket() {
  const [activeContinent, setActiveContinent] = useState<ContinentKey>('Africa')
  const [flags, setFlags] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)

  const fetchFlags = useCallback(async () => {
    setLoading(true)
    try {
      const allCountries = Object.values(CONTINENTS).flat()
      const results = await Promise.allSettled(
        allCountries.map((country) =>
          fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(country)}?fields=name,flags`)
            .then((r) => r.json())
        )
      )
      const flagMap: Record<string, string> = {}
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          const data = result.value
          if (Array.isArray(data) && data[0]?.flags?.png) {
            flagMap[data[0].name.common] = data[0].flags.png
          }
        }
      })
      setFlags(flagMap)
    } catch {
      // fail silently — UI degrades gracefully
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { fetchFlags() }, [fetchFlags])

  const continentKeys = Object.keys(CONTINENTS) as ContinentKey[]
  const currentCountries = CONTINENTS[activeContinent]

  return (
    <section className="section-pad bg-white" aria-labelledby="market-heading">
      <div className="container-fluid">
        {/* Header */}
        <FadeIn direction="up" className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-hagull-500 mb-3">
            Currency Listing
          </p>
          <h2
            id="market-heading"
            className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight"
          >
            Trade currencies from across the globe
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Fiat and crypto in one marketplace — 120+ currencies and growing.
          </p>
        </FadeIn>

        {/* Fiat section */}
        <div className="mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            Fiat Currencies
          </p>

          {/* Continent tabs */}
          <div
            className="flex flex-wrap gap-2 mb-8"
            role="tablist"
            aria-label="Select continent"
          >
            {continentKeys.map((continent) => (
              <button
                key={continent}
                role="tab"
                aria-selected={activeContinent === continent}
                aria-controls={`panel-${continent}`}
                onClick={() => setActiveContinent(continent)}
                className={cn(
                  'px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 focus-brand',
                  activeContinent === continent
                    ? 'bg-hagull-500 text-white shadow-glow/30'
                    : 'bg-muted text-muted-foreground hover:bg-hagull-50 hover:text-hagull-600'
                )}
              >
                {continent}
              </button>
            ))}
          </div>

          {/* Flags grid */}
          <div
            id={`panel-${activeContinent}`}
            role="tabpanel"
            aria-label={`${activeContinent} currencies`}
            className="min-h-[120px]"
          >
            {loading ? (
              <div className="flex flex-wrap gap-3">
                {Array.from({ length: 8 }).map((_, i) => <FlagSkeleton key={i} />)}
              </div>
            ) : (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeContinent}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-wrap gap-3"
                >
                  {currentCountries.map((country) =>
                    flags[country] ? (
                      <FlagCard key={country} country={country} flag={flags[country]} />
                    ) : (
                      <FlagSkeleton key={country} />
                    )
                  )}
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-14" />

        {/* Crypto section */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            Crypto Assets
          </p>
          <div className="flex flex-wrap gap-3">
            {CRYPTO_ASSETS.map(({ src, alt, symbol }) => (
              <CryptoCard key={symbol} src={src} alt={alt} symbol={symbol} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
