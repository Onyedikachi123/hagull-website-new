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
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-surface-bright selection:bg-primary-container selection:text-on-primary-container">
      {/* Left Section: Branding & Illustration */}
      <section className="hidden lg:flex lg:col-span-4 bg-[#006578] relative flex-col justify-between p-8 xl:p-12 overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
          <svg fill="none" height="400" viewBox="0 0 400 400" width="400" xmlns="http://www.w3.org/2000/svg">
            <circle cx="200" cy="200" r="180" stroke="white" strokeDasharray="10 20" strokeWidth="1" />
            <circle cx="200" cy="200" r="120" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>
        
        <motion.div 
          className="relative z-10 flex items-center gap-2 mb-12"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <Landmark className="text-white w-6 h-6" />
          <h1 className="text-white text-base font-medium">Hagull Exchange</h1>
        </motion.div>

        <motion.div 
          className="relative z-10 flex-1 flex flex-col justify-center max-w-sm"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p variants={fadeIn} className="text-white text-sm mb-4">
            Institutional Trust in P2P Trading.
          </motion.p>
          <motion.p variants={fadeIn} className="text-[#6dd4f0] text-sm leading-relaxed mb-12">
            Experience the gold standard of secure escrow services. Trade crypto directly with others with the precision of a high-frequency trading floor.
          </motion.p>

          <div className="space-y-8">
            <motion.div variants={fadeIn} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#008097] flex items-center justify-center shrink-0">
                <ShieldCheck className="text-white w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white text-sm mb-1">Tier-1 Escrow Protocol</h4>
                <p className="text-[#6dd4f0] text-xs leading-relaxed">Assets are secured in multi-signature cold storage during trades.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#008097] flex items-center justify-center shrink-0">
                <Headset className="text-white w-5 h-5" />
              </div>
              <div>
                <h4 className="text-white text-sm mb-1">24/7 Arbitration</h4>
                <p className="text-[#6dd4f0] text-xs leading-relaxed">Dedicated trade officers ready to resolve disputes within minutes.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Side Illustration/Image */}
        <motion.div 
          className="mt-12 relative z-10 w-full aspect-[16/9] overflow-hidden rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image 
            alt="Secure Digital Interface" 
            className="object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZd0dfbIcZuDeNLymLAZ-bj0_Zxh14of9QeQbLHtCMpTgRTyRH_N1tlkfMhiVc6Tnxl1OqWuBa8xVQ3gTyrZoJ_oEnlcnx3DBEqh5tir6oo8NX_W7l-qjOKWBJNnNNP7WiddVHyvUk4dP3YMY6juFz8TNKramDKHRQJVFdV64cMjAmpibeo8kZo3N3_GvIHkyUD2rHBXNwCmQpQZuDHSMz2x_e6lxViI75epjxyHVkb1CBoVNCrnQ6jlsJrpWIV2QZ4P1uJSb_6tt9" 
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
      </section>

      {/* Right Section: Signup Form */}
      <section className="lg:col-span-8 bg-[#f6fafc] flex items-center justify-center p-6 md:p-12 relative">
        <motion.div 
          className="w-full max-w-[400px]"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Mobile Logo */}
          <motion.div variants={fadeIn} className="lg:hidden flex justify-center mb-8">
            <div className="flex items-center gap-2">
              <Landmark className="text-[#006578] w-6 h-6" />
              <span className="text-base font-medium text-[#006578]">Hagull Exchange</span>
            </div>
          </motion.div>

          <motion.header variants={fadeIn} className="mb-8">
            <h3 className="text-[1.125rem] font-medium text-[#171c1e] mb-1">Create Account</h3>
            <p className="text-[0.875rem] text-[#3e484c]">Join the global network of professional traders.</p>
          </motion.header>

          <motion.form variants={fadeIn} className="space-y-5">
            {/* Email Input Group */}
            <div className="space-y-1.5">
              <label className="text-[0.875rem] text-[#6e797d]" htmlFor="email">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6e797d] w-4 h-4" />
                <input 
                  className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#bdc8cd] rounded-md focus:ring-1 focus:ring-[#006578] focus:border-[#006578] transition-all text-[0.875rem] text-[#171c1e] outline-none" 
                  id="email" 
                  name="email" 
                  placeholder="name@company.com" 
                  type="email" 
                  required
                />
              </div>
            </div>

            {/* Phone Input Group */}
            <div className="space-y-1.5">
              <label className="text-[0.875rem] text-[#6e797d]" htmlFor="phone">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6e797d] w-4 h-4" />
                <input 
                  className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#bdc8cd] rounded-md focus:ring-1 focus:ring-[#006578] focus:border-[#006578] transition-all text-[0.875rem] text-[#171c1e] outline-none" 
                  id="phone" 
                  name="phone" 
                  placeholder="+1 (555) 000-0000" 
                  type="tel" 
                  required
                />
              </div>
            </div>

            {/* Password Input Group */}
            <div className="space-y-1.5">
              <label className="text-[0.875rem] text-[#6e797d]" htmlFor="password">Secure Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6e797d] w-4 h-4" />
                <input 
                  className="w-full pl-9 pr-10 py-2.5 bg-white border border-[#bdc8cd] rounded-md focus:ring-1 focus:ring-[#006578] focus:border-[#006578] transition-all text-[0.875rem] text-[#171c1e] outline-none" 
                  id="password" 
                  name="password" 
                  placeholder="••••••••" 
                  type={showPassword ? 'text' : 'password'} 
                  required
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6e797d] hover:text-[#171c1e] transition-colors" 
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-[0.625rem] text-[#6e797d] mt-1">Min. 8 characters with 1 special symbol.</p>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-start gap-2 pt-2 pb-1">
              <input 
                className="mt-0.5 h-3.5 w-3.5 rounded-sm border-[#bdc8cd] text-[#006578] focus:ring-[#006578]" 
                id="terms" 
                type="checkbox" 
                required
              />
              <label className="text-[0.875rem] text-[#3e484c] leading-tight" htmlFor="terms">
                I agree to the <Link className="text-[#006578] hover:underline" href="/terms-of-service">Terms of Service</Link> and <Link className="text-[#006578] hover:underline" href="/aml">Escrow Policy</Link>.
              </label>
            </div>

            {/* Primary CTA */}
            <button 
              className="w-full bg-[#914d00] text-white text-[0.9375rem] font-medium py-3 rounded-md shadow-md hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-2" 
              type="button"
              onClick={() => window.location.href = '/exchange'} // Simulating redirect for now
            >
              Create Account
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Alternative Social Signup */}
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#bdc8cd]/50"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-[#f6fafc] px-3 text-[0.6875rem] tracking-wider font-medium text-[#6e797d]">OR REGISTER WITH</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button 
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-[#bdc8cd] rounded-md hover:bg-[#eaeef0] transition-colors" 
                type="button"
              >
                <div className="relative w-4 h-4">
                  <Image 
                    alt="Google" 
                    className="object-contain" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX_6XFA5nwMCkfIhmWBfV7xWx7PHyzGufgR59m0PAb_28Bu7qfpBDR99Es2ThZrdJJmpxQVA2T6wqxUT65bvj07YJV2Mayj1iGKdxJ0KJLoFYmvhZzCOWeIwARB13b-pF_ZTXzR2CF7wkDZZa7CJA5eoupxEsrxs1F-MHo7jLdGUiEOEOUgA3rYQPUo9YLXoQaskb0JAXpGZ6PFJastPejEL6u-FXNSfNmrqzW4AMQIrjrr4vTqeVqua4uxJ5vSpzL2AGx0LiezJ6H" 
                    fill
                    sizes="16px"
                  />
                </div>
                <span className="text-[0.875rem] text-[#3e484c]">Google</span>
              </button>
              <button 
                className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-[#bdc8cd] rounded-md hover:bg-[#eaeef0] transition-colors" 
                type="button"
              >
                <svg className="w-4 h-4 text-[#3e484c]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path>
                </svg>
                <span className="text-[0.875rem] text-[#3e484c]">Passkey</span>
              </button>
            </div>
          </motion.form>

          <motion.footer variants={fadeIn} className="mt-8 text-center">
            <p className="text-[0.875rem] text-[#3e484c]">
              Already have an account?{' '}
              <Link className="text-[#006578] font-medium hover:underline" href="/login">
                Log in to Exchange
              </Link>
            </p>
          </motion.footer>
        </motion.div>

        {/* Contextual Success Indicator (Subtle Toast) */}
        <motion.div 
          className="absolute top-6 right-6 bg-[#eaeef0] border border-[#bdc8cd] p-3 rounded-lg shadow-lg items-center gap-3 hidden lg:flex z-50"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5, type: 'spring' }}
        >
          <div className="w-8 h-8 rounded-md bg-[#006578] flex items-center justify-center shrink-0">
            <Shield className="text-white w-4 h-4" fill="currentColor" />
          </div>
          <div>
            <p className="text-[0.625rem] text-[#006578] uppercase tracking-wider font-semibold mb-0.5">Security Status</p>
            <p className="text-[0.75rem] text-[#171c1e] font-medium leading-none">AES-256 Encrypted Connection</p>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
