'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Shield, Info, AlertTriangle } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { OtpInput } from '@/components/ui/OtpInput'

export default function PhoneVerificationPage() {
  const router = useRouter()
  const [phoneOtp, setPhoneOtp] = useState('')
  const [timeLeft, setTimeLeft] = useState(114) // 01:54

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timerId)
    }
  }, [timeLeft])

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  const handleConfirm = () => {
    // Submit action
    if (phoneOtp.length === 4) {
      router.push('/dashboard') // Or wherever it leads
    }
  }

  const handleSkip = () => {
    // Skip action
    router.push('/dashboard')
  }

  return (
    <div className="w-full max-w-[500px] flex flex-col items-center pb-20">
      {/* Verification Icon */}
      {/* <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-16 h-16 bg-[#cbf3f9] rounded-2xl flex items-center justify-center mb-6 shadow-sm"
      >
        <Shield className="w-8 h-8 text-[#005E6B]" />
      </motion.div> */}

      {/* Heading */}
      <motion.h6
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-1xl sm:text-2xl md:text-[30px] font-bold text-gray-900 mb-2 md:mb-4 text-center tracking-tight leading-tight"
      >
        Secure Verification
      </motion.h6>

      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="text-gray-600 text-center mb-3 sm:mb-10 text-sm sm:text-base md:text-lg px-2 max-w-[400px] leading-relaxed"
      >
        To protect your assets, please enter the one-time passwords sent to your registered devices.
      </motion.p>

      {/* Main Verification Card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full bg-white border border-gray-200 rounded-[20px] shadow-sm p-5 sm:p-8 mb-8"
      >

        <h2 className="text-xl sm:text-[22px] font-bold text-gray-900 text-center mb-2">Step 2: Phone Verification</h2>
        <p className="text-sm sm:text-[15px] text-gray-600 text-center mb-8 px-2">
          Enter the 4-digit code sent to <span className="whitespace-nowrap">+1 ••• ••• 42</span>
        </p>

        <div className="mb-8 flex justify-center w-full">
          <OtpInput value={phoneOtp} onChange={setPhoneOtp} length={4} />
        </div>

        {/* Warning Alert */}
        <div className="bg-[#fef2f2] border border-[#fecaca] rounded-xl p-4 sm:p-5 mb-8 flex gap-3 items-start">
          <AlertTriangle className="w-5 h-5 text-[#ef4444] shrink-0 mt-0.5" />
          <p className="text-xs sm:text-[13px] text-[#b91c1c] leading-relaxed">
            You can skip this for now to browse, but you must verify your phone number before you can buy, sell, or message vendors.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4 mb-8">
          <button
            type="button"
            onClick={handleConfirm}
            disabled={phoneOtp.length < 4}
            className="w-full bg-[#005E6B] hover:bg-[#004d58] disabled:opacity-50 disabled:hover:bg-[#005E6B] text-white font-medium h-12 rounded-[10px] transition-all focus:outline-none focus:ring-2 focus:ring-[#005E6B] focus:ring-offset-2 text-sm sm:text-[15px]"
          >
            Confirm
          </button>

          <button
            type="button"
            onClick={handleSkip}
            className="w-full text-[#005E6B] font-semibold h-12 rounded-[10px] hover:bg-[#f0f9fa] transition-colors focus:outline-none focus:ring-2 focus:ring-[#005E6B] focus:ring-offset-2 tracking-widest uppercase text-xs sm:text-[13px]"
          >
            SKIP FOR NOW
          </button>
        </div>

        {/* Timer & Resend */}
        <div className="border-t border-gray-100 pt-5 sm:pt-6 text-center">
          <p className="text-sm sm:text-[15px] text-gray-600 mb-2 sm:mb-2.5">
            Didn't receive code? <span className="font-bold text-[#005E6B]">{formatTime(timeLeft)}</span>
          </p>
          <button
            disabled={timeLeft > 0}
            className="text-xs sm:text-[13px] font-bold text-[#80b8c0] tracking-widest uppercase transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:text-[#005E6B]"
          >
            RESEND OTP
          </button>
        </div>
      </motion.div>

      {/* Security Info Cards */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-10 sm:mb-12"
      >
        <div className="bg-[#f1f5f9] rounded-xl p-3 sm:p-4 flex items-start gap-3 min-w-0">
          <Shield className="w-4 h-4 text-[#005E6B] mt-0.5 shrink-0" />
          <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed font-medium min-w-0">
            Encrypted session. Your data is protected by AES-256 standards.
          </p>
        </div>
        <div className="bg-[#f1f5f9] rounded-xl p-3 sm:p-4 flex items-start gap-3 min-w-0">
          <Info className="w-4 h-4 text-[#005E6B] mt-0.5 shrink-0" />
          <p className="text-[11px] sm:text-xs text-gray-600 leading-relaxed font-medium min-w-0">
            Verification is required for all P2P withdrawals and trade releases.
          </p>
        </div>
      </motion.div>

      {/* Floating Bottom Asset */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-20 h-20 relative animate-float drop-shadow-xl"
      >
        <Image
          src="/security-chip.png"
          alt="Security Processor Chip"
          fill
          className="object-contain"
        />
      </motion.div>
    </div>
  )
}
