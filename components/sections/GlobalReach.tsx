'use client'

import { motion } from 'framer-motion'
import { StaggerContainer, StaggerItem, FadeIn } from '@/components/animations/FadeIn'
import { Globe } from 'lucide-react'

const FIAT_CURRENCIES = [
  { name: 'US Dollar', code: 'USD', flag: '🇺🇸' },
  { name: 'Euro', code: 'EUR', flag: '🇪🇺' },
  { name: 'Pound Sterling', code: 'GBP', flag: '🇬🇧' },
  { name: 'Nigerian Naira', code: 'NGN', flag: '🇳🇬' },
  { name: 'Brazilian Real', code: 'BRL', flag: '🇧🇷' },
  { name: 'Indian Rupee', code: 'INR', flag: '🇮🇳' },
  { name: 'Vietnamese Dong', code: 'VND', flag: '🇻🇳' },
  { name: 'Philippine Peso', code: 'PHP', flag: '🇵🇭' },
  { name: 'Kenyan Shilling', code: 'KES', flag: '🇰🇪' },
  { name: 'South African Rand', code: 'ZAR', flag: '🇿🇦' },
  { name: 'Mexican Peso', code: 'MXN', flag: '🇲🇽' },
]

const DIGITAL_ASSETS = [
  { name: 'Bitcoin', code: 'BTC', color: 'bg-[#F7931A]/10 text-[#F7931A]' },
  { name: 'Ethereum', code: 'ETH', color: 'bg-[#627EEA]/10 text-[#627EEA]' },
  { name: 'Solana', code: 'SOL', color: 'bg-[#14F195]/10 text-[#14F195]' },
  { name: 'Binance Coin', code: 'BNB', color: 'bg-[#F3BA2F]/10 text-[#F3BA2F]' },
  { name: 'XRP', code: 'XRP', color: 'bg-[#23292F]/10 text-[#23292F]' },
  { name: 'Polygon', code: 'MATIC', color: 'bg-[#8247E5]/10 text-[#8247E5]' },
  { name: 'Tether', code: 'USDT', color: 'bg-[#26A17B]/10 text-[#26A17B]' },
  { name: 'USD Coin', code: 'USDC', color: 'bg-[#2775CA]/10 text-[#2775CA]' },
  { name: 'Dai', code: 'DAI', color: 'bg-[#F4B731]/10 text-[#F4B731]' },
]

export default function GlobalReach() {
  return (
    <section className="section-pad bg-surface-bright" aria-labelledby="global-reach-heading">
      <div className="container-fluid max-w-6xl">
        <FadeIn direction="up" className="text-center max-w-2xl mx-auto mb-16">
          <h2
            id="global-reach-heading"
            className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight"
          >
            Worldwide Liquidity Network
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Bridge local financial systems with decentralized infrastructure in over 120 countries, enabling seamless P2P value exchange across fiat and digital assets.
          </p>
        </FadeIn>

        {/* Fiat Section */}
        <div className="mb-12">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-6 text-center">Supported Fiat Currencies</h3>
          <StaggerContainer
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            staggerDelay={0.05}
          >
            {FIAT_CURRENCIES.map((currency) => (
              <StaggerItem key={currency.code}>
                <motion.div 
                  className="flex flex-col items-center justify-center p-4 rounded-xl border border-border bg-white shadow-sm hover:border-[#006578]/30 transition-colors duration-300 group h-full"
                  whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0,101,120,0.1)" }}
                >
                  <span className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {currency.flag}
                  </span>
                  <span className="text-xs font-bold text-foreground text-center">
                    {currency.name}
                  </span>
                  <span className="text-[10px] font-medium text-muted-foreground mt-0.5">
                    {currency.code}
                  </span>
                </motion.div>
              </StaggerItem>
            ))}

            {/* Premium Globe Representation */}
            <StaggerItem key="global-trade">
              <motion.div 
                className="relative flex flex-col items-center justify-center p-4 rounded-xl border border-[#006578]/20 bg-gradient-to-b from-[#006578]/5 to-transparent transition-colors duration-300 group h-full overflow-hidden"
                whileHover={{ y: -4, borderColor: "rgba(0,101,120,0.4)" }}
              >
                <div className="absolute inset-0 bg-[#006578] opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl blur-2xl" />
                <motion.div 
                  className="mb-2 text-[#006578] relative z-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <Globe size={32} strokeWidth={1.5} />
                </motion.div>
                <span className="text-xs font-bold text-[#006578] text-center relative z-10">
                  Global Trade Network
                </span>
                <span className="text-[10px] font-medium text-[#006578]/70 mt-0.5 relative z-10">
                  40+ Countries Supported
                </span>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Digital Assets Section */}
        <div className="pt-8 border-t border-border/50">
          <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-6 text-center">Supported Digital Assets & Stablecoins</h3>
          <StaggerContainer
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            staggerDelay={0.05}
          >
            {DIGITAL_ASSETS.map((asset) => (
              <StaggerItem key={asset.code}>
                <motion.div 
                  className="flex items-center gap-3 p-4 rounded-xl border border-border bg-white shadow-sm hover:border-[#914d00]/30 transition-colors duration-300 group"
                  whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(145,77,0,0.1)" }}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold ${asset.color} group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                    {asset.code.substring(0, 3)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-foreground">
                      {asset.name}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">
                      {asset.code}
                    </span>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
