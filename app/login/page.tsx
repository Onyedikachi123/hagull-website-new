'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Landmark, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react'

export default function LoginPage() {
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
            Welcome back.
          </motion.p>
          <motion.p variants={fadeIn} className="text-[#6dd4f0] text-sm leading-relaxed mb-12">
            Access your secure institutional wallet, manage your escrow transactions, and trade with zero friction.
          </motion.p>
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

      {/* Right Section: Login Form */}
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
            <h3 className="text-[1.125rem] font-medium text-[#171c1e] mb-1">Log In</h3>
            <p className="text-[0.875rem] text-[#3e484c]">Enter your credentials to access your account.</p>
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

            {/* Password Input Group */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label className="text-[0.875rem] text-[#6e797d]" htmlFor="password">Secure Password</label>
                <Link href="/forgot-password" className="text-[0.875rem] text-[#006578] hover:underline">Forgot password?</Link>
              </div>
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
            </div>

            {/* Primary CTA */}
            <button 
              className="w-full bg-[#914d00] text-white text-[0.9375rem] font-medium py-3 rounded-md shadow-md hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 mt-4" 
              type="button"
              onClick={() => window.location.href = '/exchange'} // Simulating redirect
            >
              Sign In
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Alternative Social Signup */}
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#bdc8cd]/50"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-[#f6fafc] px-3 text-[0.6875rem] tracking-wider font-medium text-[#6e797d]">OR CONTINUE WITH</span>
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
              Don&apos;t have an account?{' '}
              <Link className="text-[#006578] font-medium hover:underline" href="/register">
                Create an Account
              </Link>
            </p>
          </motion.footer>
        </motion.div>
      </section>
    </main>
  )
}
