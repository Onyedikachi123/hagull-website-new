'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Shield, Mail, Smartphone, Info } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { OtpInput } from '@/components/ui/OtpInput'

export default function MultiStepVerificationPage() {
  const router = useRouter()
  const [emailOtp, setEmailOtp] = useState('')
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

  const handleContinue = () => {
    // Basic validation or routing
    if (emailOtp.length === 4) {
      router.push('/secure-verification/phone')
    }
  }

  return (
    <div className="w-full max-w-[500px] flex flex-col items-center pb-20">
      {/* Verification Icon */}
      {/* <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      className="w-16 h-16 bg-[#cbf3f9] rounded-2xl flex items-center justify-center mb-6 shadow-sm"
      >
 
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
        className="w-full bg-white border border-gray-200 rounded-[20px] shadow-sm p-3 sm:p-8 mb-8"
      >
        {/* Step 1: Email */}
        <div className="mb-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-6">
            <div className="flex items-center gap-2 text-[#005E6B] font-bold text-[11px] sm:text-xs tracking-widest uppercase min-w-0">
              <Mail className="w-4 h-4 shrink-0" />
              <span className="truncate">STEP 1: EMAIL VERIFICATION</span>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-800 break-all sm:break-normal">m***e@domain.com</span>
          </div>

          <div className="mb-3">
            <OtpInput value={emailOtp} onChange={setEmailOtp} length={4} />
          </div>

          <button
            type="button"
            onClick={handleContinue}
            disabled={emailOtp.length < 4}
            className="w-full bg-[#005E6B] hover:bg-[#004d58] disabled:opacity-50 disabled:hover:bg-[#005E6B] text-white font-medium h-12 rounded-[10px] transition-all focus:outline-none focus:ring-2 focus:ring-[#005E6B] focus:ring-offset-2 tracking-wide uppercase text-sm sm:text-[15px]"
          >
            CONTINUE TO STEP 2
          </button>
        </div>

        {/* Step 2: SMS (Disabled State) */}
        <div className=" opacity-40 pointer-events-none">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-6">
            <div className="flex items-center gap-2 text-[#005E6B] font-bold text-[11px] sm:text-xs tracking-widest uppercase min-w-0">
              <Smartphone className="w-4 h-4 shrink-0" />
              <span className="truncate">STEP 2: SMS VERIFICATION</span>
            </div>
            <span className="text-xs sm:text-sm font-semibold text-gray-800 whitespace-nowrap">+1 ••• ••• 42</span>
          </div>

          <OtpInput value="" onChange={() => { }} length={4} disabled />
        </div>

        {/* Notice Box */}
        <div className="bg-[#f0f9fa] border border-[#d0eef2] rounded-xl p-4 sm:p-5">
          <h4 className="text-[13px] sm:text-sm font-bold text-gray-900 mb-1.5">Notice</h4>
          <p className="text-xs sm:text-[13px] text-gray-700 leading-relaxed">
            Email verification is required to access your account. Phone verification is required before you can initiate trades or chats.
          </p>
        </div>

        {/* Timer & Resend */}
        <div className="border-t border-gray-100 pt-5 sm:pt-6 text-center">
          <p className="text-sm sm:text-[15px] text-gray-600 mb-2 sm:mb-2.5">
            Didn't receive codes? <span className="font-bold text-[#005E6B]">{formatTime(timeLeft)}</span>
          </p>
          <button
            disabled={timeLeft > 0}
            className="text-xs sm:text-[13px] font-bold text-[#80b8c0] tracking-widest uppercase transition-colors disabled:opacity-50 disabled:cursor-not-allowed hover:text-[#005E6B]"
          >
            RESEND OTPS
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
