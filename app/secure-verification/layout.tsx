import React from 'react'
import Link from 'next/link'
import { Headset } from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'Secure Verification | Hagull',
  description: 'Verify your identity to access your Hagull Exchange account safely.',
}

export default function SecureVerificationLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-hagull-600 hover:text-hagull-700 transition-colors">
            <Image
              src="/logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>
          <button
            type="button"
            className="p-2 text-gray-500 hover:text-hagull-600 hover:bg-hagull-50 rounded-full transition-colors"
            aria-label="Support Help"
          >
            <Headset className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Content Area - Centered */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center py-12">
        {children}
      </main>
    </div>
  )
}
