'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Landmark, Mail, ArrowRight } from 'lucide-react'

export default function ForgotPasswordPage() {
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
    <main className="min-h-screen flex items-center justify-center bg-surface-bright selection:bg-primary-container selection:text-on-primary-container p-4">
      <motion.div 
        className="w-full max-w-md bg-white rounded-2xl shadow-card border border-border p-8"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div variants={fadeIn} className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-xs">
            <Landmark className="text-primary w-8 h-8" />
            <span className="font-headline-sm text-primary">Hagull Exchange</span>
          </Link>
        </motion.div>

        <motion.header variants={fadeIn} className="mb-8 text-center">
          <h3 className="font-headline-md text-on-surface mb-xs">Reset Password</h3>
          <p className="font-body-sm text-on-surface-variant">Enter your email address and we&apos;ll send you instructions to reset your password.</p>
        </motion.header>

        <motion.form variants={fadeIn} className="space-y-6">
          <div className="space-y-xs">
            <label className="font-label-md text-outline" htmlFor="email">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-5 h-5" />
              <input 
                className="w-full pl-10 pr-4 py-3 bg-white border border-outline-variant rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all font-body-md text-on-surface outline-none" 
                id="email" 
                name="email" 
                placeholder="name@company.com" 
                type="email" 
                required
              />
            </div>
          </div>

          <button 
            className="w-full bg-secondary text-on-secondary font-headline-sm text-base py-4 rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-sm mt-4" 
            type="button"
            onClick={() => alert('Password reset link sent!')} 
          >
            Send Reset Link
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.form>

        <motion.footer variants={fadeIn} className="mt-8 text-center">
          <Link className="text-primary font-bold hover:underline font-body-sm flex items-center justify-center gap-2" href="/login">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Login
          </Link>
        </motion.footer>
      </motion.div>
    </main>
  )
}
