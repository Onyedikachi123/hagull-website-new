'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Landmark,
  ShieldCheck,
  Headset,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Shield
} from 'lucide-react'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <main className="min-h-screen flex flex-col lg:flex-row bg-[#f6fafc] font-sans selection:bg-[#006578]/20">
      {/* Left Section: Branding & Illustration */}
      <section className="hidden lg:flex lg:w-[38%] xl:w-[33%] bg-[#006578] relative flex-col justify-between p-8 xl:p-12 overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
          <svg fill="none" height="500" viewBox="0 0 500 500" width="500" xmlns="http://www.w3.org/2000/svg">
            <circle cx="250" cy="250" r="220" stroke="white" strokeDasharray="10 20" strokeWidth="1" />
            <circle cx="250" cy="250" r="160" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col">
          <motion.div
            className="flex items-center gap-3 mb-12"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <Landmark className="text-white w-7 h-7" />
            <span className="text-white text-[15px] tracking-wide">Hagull Exchange</span>
          </motion.div>

          <motion.div
            className="flex-1 flex flex-col max-w-[360px]"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.p variants={fadeIn} className="text-white text-[15px] mb-5 font-medium tracking-wide">
              Institutional Trust in P2P Trading.
            </motion.p>
            <motion.p variants={fadeIn} className="text-[#6dd4f0] text-[15px] leading-relaxed mb-12 font-medium">
              Experience the gold standard of secure escrow services. Trade crypto directly with others with the precision of a high-frequency trading floor.
            </motion.p>

            <div className="space-y-8">
              <motion.div variants={fadeIn} className="flex items-start gap-4">
                <div className="w-[42px] h-[42px] rounded-xl bg-[#008097] flex items-center justify-center shrink-0">
                  <ShieldCheck className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-[13px] mb-1">Tier-1 Escrow Protocol</h4>
                  <p className="text-[#6dd4f0] text-[13px] leading-relaxed pr-4">Assets are secured in multi-signature cold storage during trades.</p>
                </div>
              </motion.div>

              <motion.div variants={fadeIn} className="flex items-start gap-4">
                <div className="w-[42px] h-[42px] rounded-xl bg-[#008097] flex items-center justify-center shrink-0">
                  <Headset className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium text-[13px] mb-1">24/7 Arbitration</h4>
                  <p className="text-[#6dd4f0] text-[13px] leading-relaxed pr-4">Dedicated trade officers ready to resolve disputes within minutes.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Side Illustration/Image */}
        <motion.div
          className="mt-16 relative z-10 w-full aspect-[1.5/1] overflow-hidden rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image
            alt="Secure Digital Interface"
            className="object-cover"
            src="/dashboard-hero.png"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </motion.div>
      </section>

      {/* Right Section: Signup Form */}
      <section className="flex-1 bg-[#f6fafc] flex items-center justify-center p-6 md:p-12 relative min-h-screen lg:min-h-0">
        {/* Contextual Success Indicator */}
        <motion.div
          className="absolute top-8 right-8 bg-[#e8eff2] border border-[#dce5e9] py-3.5 px-4 rounded-xl shadow-sm items-center gap-3.5 hidden lg:flex z-50"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.5, type: 'spring' }}
        >
          <div className="w-9 h-9 rounded-lg bg-[#006578] flex items-center justify-center shrink-0 shadow-sm">
            <Shield className="text-white w-4 h-4" fill="currentColor" />
          </div>
          <div>
            <p className="text-[11px] text-[#006578] tracking-widest font-medium mb-0.5">SECURITY STATUS</p>
            <p className="text-[13px] text-[#171c1e] font-medium leading-none">AES-256 Encrypted Connection</p>
          </div>
        </motion.div>

        <motion.div
          className="w-full max-w-[440px]"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Mobile Logo */}
          <motion.div variants={fadeIn} className="lg:hidden flex items-center gap-3 mb-10">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 shrink-0 focus-brand"
              aria-label="Hagull — Home"
            >
              <div className="relative w-[110px] h-[32px]">
                <Image
                  src="/logo.png"
                  alt="Hagull"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </motion.div>

          <motion.header variants={fadeIn} className="mb-8">
            <h2 className="text-[17px] font-medium text-[#171c1e] mb-1.5">Create Account</h2>
            <p className="text-[14px] text-[#3e484c]">Join the global network of professional traders.</p>
          </motion.header>

          <motion.form variants={fadeIn} className="space-y-5">
            {/* Email Input Group */}
            <div className="space-y-2">
              <label className="text-[14px] text-[#6e797d]" htmlFor="email">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6e797d] w-4 h-4" />
                <input
                  className="w-full pl-10 pr-4 py-3 bg-white border border-[#bdc8cd] rounded-md focus:ring-1 focus:ring-[#006578] focus:border-[#006578] transition-all text-[14px] text-[#171c1e] outline-none shadow-sm placeholder:text-[#6e797d]"
                  id="email"
                  name="email"
                  placeholder="name@company.com"
                  type="email"
                  required
                />
              </div>
            </div>

            {/* Phone Input Group */}
            <div className="space-y-2">
              <label className="text-[14px] text-[#6e797d]" htmlFor="phone">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6e797d] w-4 h-4" />
                <input
                  className="w-full pl-10 pr-4 py-3 bg-white border border-[#bdc8cd] rounded-md focus:ring-1 focus:ring-[#006578] focus:border-[#006578] transition-all text-[14px] text-[#171c1e] outline-none shadow-sm placeholder:text-[#6e797d]"
                  id="phone"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  type="tel"
                  required
                />
              </div>
            </div>

            {/* Password Input Group */}
            <div className="space-y-2">
              <label className="text-[14px] text-[#6e797d]" htmlFor="password">Secure Password</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#6e797d] w-4 h-4" />
                <input
                  className="w-full pl-10 pr-12 py-3 bg-white border border-[#bdc8cd] rounded-md focus:ring-1 focus:ring-[#006578] focus:border-[#006578] transition-all text-[14px] text-[#171c1e] outline-none shadow-sm placeholder:text-[#6e797d]"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  type={showPassword ? 'text' : 'password'}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6e797d] hover:text-[#171c1e] transition-colors p-1"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-[18px] h-[18px]" /> : <Eye className="w-[18px] h-[18px]" />}
                </button>
              </div>
              <p className="text-[10px] text-[#8e999d] mt-1.5">
                Min. 8 characters with 1 special symbol.
              </p>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-2.5 pt-2 pb-1">
              <div className="flex items-center h-5 mt-[2px]">
                <input
                  className="w-[14px] h-[14px] rounded-[3px] border-[#bdc8cd] text-[#006578] focus:ring-[#006578] bg-white transition-all shadow-sm"
                  id="terms"
                  type="checkbox"
                  required
                />
              </div>
              <label className="text-[13px] text-[#171c1e] leading-snug" htmlFor="terms">
                I agree to the <Link className="text-[#006578] font-medium hover:underline" href="/terms-of-service">Terms of Service</Link> and <Link className="text-[#006578] font-medium hover:underline" href="/aml">Escrow Policy</Link>.
              </label>
            </div>

            {/* Primary CTA */}
            <button
              className="w-full bg-[#914d00] text-white text-[15px] font-medium py-3.5 rounded-md shadow-[0_4px_14px_rgba(145,77,0,0.25)] hover:bg-[#a65800] active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-4"
              type="button"
              onClick={() => window.location.href = '/exchange'}
            >
              Create Account
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Alternative Social Signup */}
            <div className="relative py-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#bdc8cd]/60"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-[#f6fafc] px-4 text-[12px] text-[#6e797d]">OR REGISTER WITH</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-[#bdc8cd] rounded-md hover:bg-[#f0f4f6] transition-all shadow-sm active:scale-[0.98]"
                type="button"
              >
                <div className="relative w-4 h-4 flex items-center justify-center">
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                </div>
                <span className="text-[14px] font-medium text-[#171c1e]">Google</span>
              </button>
              <button
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-[#bdc8cd] rounded-md hover:bg-[#f0f4f6] transition-all shadow-sm active:scale-[0.98]"
                type="button"
              >
                <Lock className="w-[18px] h-[18px] text-[#171c1e]" />
                <span className="text-[14px] font-medium text-[#171c1e]">Passkey</span>
              </button>
            </div>
          </motion.form>

          <motion.footer variants={fadeIn} className="mt-12 text-center">
            <p className="text-[14px] text-[#3e484c]">
              Already have an account?
              <Link className="text-[#006578] font-medium hover:underline" href="#">
                Log in to Exchange
              </Link>
            </p>
          </motion.footer>
        </motion.div>
      </section>
    </main>
  )
}
