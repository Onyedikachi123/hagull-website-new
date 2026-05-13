import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: {
    default: 'Hagull — The Currency Exchange Marketplace',
    template: '%s | Hagull',
  },
  description:
    'A next-generation currency exchange marketplace for individuals and global businesses. Fast, compliant, low-fee trading across fiat and crypto — secured with institutional-grade escrow and AI-powered chat.',
  keywords: [
    'currency exchange',
    'forex marketplace',
    'crypto trading',
    'fiat exchange',
    'escrow',
    'Hagull',
    'international payments',
    'P2P exchange',
  ],
  authors: [{ name: 'Hagull', url: 'https://hagull.com' }],
  creator: 'Hagull',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://hagull.com',
    siteName: 'Hagull',
    title: 'Hagull — The Currency Exchange Marketplace',
    description:
      'Fast, compliant, low-fee fiat and crypto trading with institutional-grade security.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hagull — The Currency Exchange Marketplace',
    description:
      'Fast, compliant, low-fee fiat and crypto trading with institutional-grade security.',
    creator: '@hagull',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  )
}
