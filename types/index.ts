// ─── Brand & Design ──────────────────────────────────────────────────────────
export type ColorVariant = 'primary' | 'accent' | 'muted' | 'destructive'
export type SizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'accent'

// ─── Navigation ───────────────────────────────────────────────────────────────
export interface NavLink {
  label: string
  href: string
  external?: boolean
  children?: NavLink[]
}

export interface NavSection {
  title: string
  links: NavLink[]
}

// ─── Currency & Finance ───────────────────────────────────────────────────────
export interface FiatCurrency {
  code: string
  name: string
  symbol: string
  flag?: string
  continent: ContinentKey
}

export interface CryptoCurrency {
  symbol: string
  name: string
  icon: string
  change24h?: number
  price?: number
}

export interface ExchangeRate {
  success: string
  sellingRate: string
  buyingRate?: string
  min: string
  max: string
}

export type CurrencyCode = 'USD' | 'EUR' | 'BTC' | 'NGN' | 'ZAR' | 'GBP' | 'USDT'

export type ContinentKey =
  | 'Africa'
  | 'Asia'
  | 'Europe'
  | 'North America'
  | 'South America'
  | 'Oceania'

// ─── Vendor ───────────────────────────────────────────────────────────────────
export interface VendorRate {
  success: string
  sellingRate: string
  min: string
  max: string
}

export interface Vendor {
  id: string
  name: string
  username: string
  avatar: string
  altText: string
  isOnline: boolean
  successRate: number
  tradesCompleted: number
  ratings: number
  rates: Record<CurrencyCode, VendorRate>
  badges?: string[]
}

// ─── Statistics ────────────────────────────────────────────────────────────────
export interface PlatformStat {
  label: string
  value: string
  suffix?: string
  prefix?: string
  description?: string
}

// ─── Features ─────────────────────────────────────────────────────────────────
export interface Feature {
  icon: string
  title: string
  description: string
  highlight?: boolean
}

export interface Step {
  step: number
  icon: string
  title: string
  description: string
}

// ─── API Layer ─────────────────────────────────────────────────────────────────
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  error?: string
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  total: number
  page: number
  limit: number
  hasMore: boolean
}

// ─── Error Handling ────────────────────────────────────────────────────────────
export interface AppError {
  code: string
  message: string
  details?: Record<string, unknown>
}

// ─── Component Props ───────────────────────────────────────────────────────────
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}
