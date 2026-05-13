import type { NavLink, ContinentKey, PlatformStat, Feature, Step, Vendor } from '@/types'

// ─── Brand ────────────────────────────────────────────────────────────────────
export const BRAND = {
  name: 'Hagull',
  tagline: 'The Currency Exchange Marketplace',
  description:
    'A next-generation currency exchange marketplace for individuals and global businesses, offering fast, compliant, and low-fee trading across both fiat and crypto assets.',
  email: 'support@hagull.com',
  location: 'Delaware, United States of America',
  twitter: 'https://twitter.com/hagull',
  linkedin: 'https://linkedin.com/company/hagull',
  instagram: 'https://instagram.com/hagull',
  facebook: 'https://facebook.com/hagull',
} as const

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: 'Marketplace', href: '/markets' },
  { label: 'Resources', href: '/resources' },
  { label: 'Institutional', href: '/institutional' },
  {
    label: 'Company',
    href: '/company',
    children: [
      { label: 'About Us', href: '/about' },
      { label: 'Careers', href: '/careers' },
      { label: 'Blog', href: '/blog' },
      { label: 'Press', href: '/press' },
    ]
  },
]

export const FOOTER_LINKS = {
  product: [
    { label: 'Exchange', href: '/exchange' },
    { label: 'Vendors', href: '/register' },
    { label: 'Escrow', href: '/register' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Blog', href: '/blog' },
    { label: 'Press', href: '/press' },
  ],
  support: [
    { label: 'Help Center', href: '/help' },
    { label: 'FAQ', href: '/resources' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Status', href: '/status' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Cookie Policy', href: '/cookies' },
    { label: 'AML Policy', href: '/aml' },
  ],
} as const

// ─── Platform Stats ────────────────────────────────────────────────────────────
export const PLATFORM_STATS: PlatformStat[] = [
  { label: 'Trading Volume', value: '2.4', prefix: '$', suffix: 'B+', description: 'Monthly' },
  { label: 'Active Users', value: '180', suffix: 'K+', description: 'Worldwide' },
  { label: 'Currencies', value: '120', suffix: '+', description: 'Fiat & Crypto' },
  { label: 'Countries', value: '54', suffix: '+', description: 'Supported' },
]

// ─── Why Choose Us ────────────────────────────────────────────────────────────
export const FEATURES: Feature[] = [
  {
    icon: 'Scale',
    title: 'Competitive Rates',
    description:
      'Access the best exchange rates across global markets. Our marketplace model ensures prices stay competitive through vendor competition.',
  },
  {
    icon: 'Banknote',
    title: '120+ Currencies',
    description:
      'Trade fiat, crypto and stablecoins assets on one unified platform — from NGN to BTC, GBP to ETH, USD to USDT, all in one seamless experience.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Institutional Security',
    description:
      'End-to-end encryption, multi-factor authentication, and institutional-grade escrow protection on every transaction.',
  },
  {
    icon: 'Zap',
    title: 'Lightning Fast',
    description:
      'Settle trades in minutes, not days. Our streamlined process eliminates unnecessary friction from currency exchange.',
  },
  {
    icon: 'Users',
    title: 'Trusted Community',
    description:
      'Join a verified network of traders and businesses. Every vendor is KYC-verified and rated by real transaction history.',
  },
  {
    icon: 'Headphones',
    title: '24/7 Support',
    description:
      'Round-the-clock dedicated support via live chat, email, and phone. Our team resolves issues in under 2 hours.',
  },
]

// ─── How It Works ─────────────────────────────────────────────────────────────
export const STEPS: Step[] = [
  {
    step: 1,
    icon: 'Search',
    title: 'Search & Discover',
    description:
      'Browse hundreds of live vendor listings. Filter by currency, rate, amount, and success score to find the perfect match.',
  },
  {
    step: 2,
    icon: 'Scale',
    title: 'Evaluate & Compare',
    description:
      'Review detailed vendor profiles with verified ratings, transaction history, and real-time exchange rates.',
  },
  {
    step: 3,
    icon: 'MessageCircle',
    title: 'Negotiate via Chat',
    description:
      'Use our built-in encrypted messaging to negotiate rates directly with vendors — all within the platform.',
  },
  {
    step: 4,
    icon: 'Repeat',
    title: 'Transact Securely',
    description:
      'Complete the exchange under escrow protection. Funds are only released when both parties confirm the transaction.',
  },
]

// ─── Continents & Currencies ──────────────────────────────────────────────────
export const CONTINENTS: Record<ContinentKey, string[]> = {
  Africa: ['Nigeria', 'South Africa', 'Egypt', 'Morocco', 'Ghana', 'Kenya', 'Cameroon', 'Benin'],
  Asia: ['Japan', 'China', 'South Korea', 'India', 'Singapore', 'UAE'],
  Europe: ['United Kingdom', 'Switzerland', 'Sweden', 'Germany', 'France', 'Netherlands'],
  'North America': ['United States', 'Canada', 'Mexico'],
  'South America': ['Brazil', 'Argentina', 'Colombia', 'Chile'],
  Oceania: ['Australia', 'New Zealand'],
}

export const CRYPTO_ASSETS = [
  { src: '/Bitcoin.webp', alt: 'Bitcoin', symbol: 'BTC' },
  { src: '/Ethereum.webp', alt: 'Ethereum', symbol: 'ETH' },
  { src: '/binance.png', alt: 'BNB', symbol: 'BNB' },
  { src: '/Solana.png', alt: 'Solana', symbol: 'SOL' },
  { src: '/Tether.webp', alt: 'Tether', symbol: 'USDT' },
  { src: '/XRP.webp', alt: 'Ripple', symbol: 'XRP' },
  { src: '/USDC.png', alt: 'USDC', symbol: 'USDC' },
  { src: '/doge.png', alt: 'Dogecoin', symbol: 'DOGE' },
  { src: '/Cardano.png', alt: 'Cardano', symbol: 'ADA' },
  { src: '/chainlink.webp', alt: 'Chainlink', symbol: 'LINK' },
  { src: '/Litecoin.webp', alt: 'Litecoin', symbol: 'LTC' },
  { src: '/SHIBA.webp', alt: 'Shiba Inu', symbol: 'SHIB' },
] as const

// ─── Vendors (Mock Data) ───────────────────────────────────────────────────────
export const MOCK_VENDORS: Vendor[] = [
  {
    id: 'v1',
    name: 'Fdse237',
    username: 'fdse237',
    avatar: '/Bitcoin.webp',
    altText: 'Vendor Fdse237',
    isOnline: true,
    successRate: 100,
    tradesCompleted: 847,
    ratings: 4.9,
    badges: ['Top Seller', 'Verified'],
    rates: {
      USD: { success: '100%', sellingRate: '$180.00', min: '$105.89', max: '$210.89' },
      EUR: { success: '96%', sellingRate: '€175.00', min: '€98.50', max: '€199.00' },
      BTC: { success: '98%', sellingRate: '₿0.0012', min: '₿0.003', max: '₿0.010' },
      NGN: { success: '95%', sellingRate: '₦120,000', min: '₦95,000', max: '₦200,000' },
      ZAR: { success: '92%', sellingRate: 'R2900', min: 'R1800', max: 'R3900' },
      GBP: { success: '94%', sellingRate: '£148.00', min: '£85.00', max: '£165.00' },
      USDT: { success: '99%', sellingRate: '$179.50', min: '$100.00', max: '$210.00' },
    },
  },
  {
    id: 'v2',
    name: 'User296',
    username: 'user296',
    avatar: '/middle-aged-cheerful-dark-skinned-male-with-shining-smile.png',
    altText: 'Vendor User296',
    isOnline: true,
    successRate: 97,
    tradesCompleted: 432,
    ratings: 4.7,
    badges: ['Verified'],
    rates: {
      USD: { success: '97%', sellingRate: '$185.00', min: '$110.89', max: '$220.89' },
      EUR: { success: '94%', sellingRate: '€180.00', min: '€99.99', max: '€210.00' },
      BTC: { success: '96%', sellingRate: '₿0.0011', min: '₿0.0025', max: '₿0.009' },
      NGN: { success: '93%', sellingRate: '₦118,000', min: '₦98,000', max: '₦190,000' },
      ZAR: { success: '90%', sellingRate: 'R2700', min: 'R1750', max: 'R3650' },
      GBP: { success: '92%', sellingRate: '£152.00', min: '£90.00', max: '£170.00' },
      USDT: { success: '97%', sellingRate: '$184.50', min: '$110.00', max: '$220.00' },
    },
  },
  {
    id: 'v3',
    name: 'User282',
    username: 'user282',
    avatar: '/portrait-african-american-man 1.png',
    altText: 'Vendor User282',
    isOnline: false,
    successRate: 94,
    tradesCompleted: 219,
    ratings: 4.5,
    rates: {
      USD: { success: '94%', sellingRate: '$182.00', min: '$108.00', max: '$218.00' },
      EUR: { success: '92%', sellingRate: '€177.00', min: '€96.00', max: '€207.00' },
      BTC: { success: '93%', sellingRate: '₿0.0011', min: '₿0.0022', max: '₿0.008' },
      NGN: { success: '91%', sellingRate: '₦115,000', min: '₦92,000', max: '₦185,000' },
      ZAR: { success: '89%', sellingRate: 'R2650', min: 'R1700', max: 'R3500' },
      GBP: { success: '90%', sellingRate: '£149.00', min: '₦88.00', max: '£165.00' },
      USDT: { success: '94%', sellingRate: '$181.50', min: '$107.00', max: '$217.00' },
    },
  },
  {
    id: 'v4',
    name: 'User098',
    username: 'user098',
    avatar: '/close-up-shot.png',
    altText: 'Vendor User098',
    isOnline: true,
    successRate: 98,
    tradesCompleted: 1203,
    ratings: 4.8,
    badges: ['Pro Trader', 'Verified'],
    rates: {
      USD: { success: '98%', sellingRate: '$183.00', min: '$112.00', max: '$222.00' },
      EUR: { success: '96%', sellingRate: '€178.00', min: '€101.00', max: '€212.00' },
      BTC: { success: '97%', sellingRate: '₿0.0012', min: '₿0.003', max: '₿0.010' },
      NGN: { success: '95%', sellingRate: '₦119,000', min: '₦97,000', max: '₦195,000' },
      ZAR: { success: '93%', sellingRate: 'R2800', min: 'R1780', max: 'R3800' },
      GBP: { success: '95%', sellingRate: '£150.00', min: '£92.00', max: '£168.00' },
      USDT: { success: '98%', sellingRate: '$182.50', min: '$111.00', max: '$221.00' },
    },
  },
]

// ─── Typewriter Phrases ────────────────────────────────────────────────────────
export const HERO_PHRASES = ['Connect', 'Hagull', 'Trade', 'Exchange', 'Grow']

// ─── Currency Symbols ─────────────────────────────────────────────────────────
export const CURRENCY_LABELS: Record<string, string> = {
  USD: '$ USD',
  EUR: '€ EUR',
  BTC: '₿ BTC',
  NGN: '₦ NGN',
  ZAR: 'R ZAR',
  GBP: '£ GBP',
  USDT: '₮ USDT',
}
