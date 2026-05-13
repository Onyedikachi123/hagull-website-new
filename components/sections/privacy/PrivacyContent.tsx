'use client'

import { CheckCircle2, User, FileText, Lock, ShieldCheck, Database, Key } from 'lucide-react'
import Image from 'next/image'

export default function PrivacyContent() {
  return (
    <div className="flex-1 max-w-4xl pt-8 pb-24">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-2xl">
          This policy outlines how Hagull Exchange collects, uses, and protects your personal data to ensure a secure and transparent financial experience.
        </p>
        <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
          <FileText size={14} />
          LAST UPDATED: OCTOBER 24, 2024
        </div>
      </div>

      <div className="space-y-16">
        {/* 1. Introduction */}
        <section id="introduction" className="scroll-mt-32">
          <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4">
            <p>
              Welcome to Hagull Exchange. We are committed to protecting your privacy and ensuring that your personal data is handled in a safe and responsible manner. This Privacy Policy explains how we collect, use, and share information when you use our P2P exchange platform, mobile applications, and other services.
            </p>
            <p>
              As a provider of financial infrastructure, maintaining the trust of our users is our highest priority. By accessing or using Hagull Exchange, you agree to the practices described in this policy.
            </p>
          </div>
        </section>

        {/* 2. Data Collection */}
        <section id="data-collection" className="scroll-mt-32">
          <h2 className="text-2xl font-bold text-foreground mb-6">2. Data Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-5 bg-white border border-border rounded-xl shadow-sm">
              <div className="flex items-center gap-2 text-foreground font-bold mb-2">
                <User size={18} className="text-hagull-500" />
                Identity Data
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Full name, date of birth, nationality, and government-issued identification numbers for KYC compliance.
              </p>
            </div>
            <div className="p-5 bg-white border border-border rounded-xl shadow-sm">
              <div className="flex items-center gap-2 text-foreground font-bold mb-2">
                <FileText size={18} className="text-hagull-500" />
                Contact Information
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Email address, phone number, and physical billing address used for account management and security.
              </p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We also collect financial information (bank details for P2P transactions), technical data (IP addresses, device information), and usage data (how you interact with our platform).
          </p>
        </section>

        {/* 3. Use of Information */}
        <section id="use-of-information" className="scroll-mt-32">
          <h2 className="text-2xl font-bold text-foreground mb-4">3. Use of Information</h2>
          <ul className="space-y-3">
            {[
              'To facilitate peer-to-peer cryptocurrency exchanges and settle transactions.',
              'To verify your identity in compliance with Anti-Money Laundering (AML) regulations.',
              'To prevent fraud, unauthorized access, and other malicious activities.',
              'To provide technical support and improve the efficiency of our financial infrastructure.'
            ].map((item, idx) => (
              <li key={idx} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                <CheckCircle2 size={18} className="text-hagull-500 shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 4. Cookies & Tracking */}
        <section id="cookies-tracking" className="scroll-mt-32">
          <h2 className="text-2xl font-bold text-foreground mb-4">4. Cookies & Tracking</h2>
          <div className="bg-hagull-50 border border-hagull-100 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. This helps us maintain a stable and secure environment for your financial transactions.
              </p>
              <button className="px-5 py-2.5 bg-white border border-border text-foreground text-xs font-bold rounded-lg shadow-sm hover:bg-muted transition-colors">
                Manage Cookie Settings
              </button>
            </div>
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-border">
              <Database size={32} className="text-hagull-500" />
            </div>
          </div>
        </section>

        {/* 5. Data Sharing */}
        <section id="data-sharing" className="scroll-mt-32">
          <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Sharing</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Hagull Exchange does not sell your personal data. We only share information with third parties under the following circumstances:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="p-4 bg-white border border-border rounded-xl">
              <h4 className="text-xs font-bold text-foreground mb-2">Regulatory Bodies</h4>
              <p className="text-[10px] text-muted-foreground leading-relaxed">When legally required to comply with subpoenas, court orders, or government regulations.</p>
            </div>
            <div className="p-4 bg-white border border-border rounded-xl">
              <h4 className="text-xs font-bold text-foreground mb-2">Service Providers</h4>
              <p className="text-[10px] text-muted-foreground leading-relaxed">Trusted partners that assist in identity verification, data analysis, and security auditing.</p>
            </div>
            <div className="p-4 bg-white border border-border rounded-xl">
              <h4 className="text-xs font-bold text-foreground mb-2">Transaction Parties</h4>
              <p className="text-[10px] text-muted-foreground leading-relaxed">Minimal required data shared with other traders to complete a specific P2P transaction.</p>
            </div>
          </div>

          <div className="relative w-full h-32 md:h-40 rounded-2xl overflow-hidden shadow-card flex items-center px-8 bg-surface-950">
            <div className="absolute inset-0 opacity-40 mix-blend-screen">
              <Image src="/escrow.jpg" alt="Security server" fill className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-hagull-900/90 to-transparent" />
            <div className="relative z-10 text-white">
              <h3 className="text-lg md:text-2xl font-extrabold tracking-tight mb-2">Your Security, Our Priority.</h3>
              <p className="text-xs md:text-sm text-white/80 max-w-md">
                We utilize bank-grade encryption and multi-sig protocols to safeguard your personal and financial information at every step.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Your Rights */}
        <section id="your-rights" className="scroll-mt-32">
          <h2 className="text-2xl font-bold text-foreground mb-6">6. Your Rights</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-hagull-600 text-white flex items-center justify-center text-xs font-bold shrink-0">1</div>
              <div>
                <h4 className="text-sm font-bold text-foreground mb-1">Right to Access</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">You may request a copy of the personal information we hold about you at any time.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-hagull-600 text-white flex items-center justify-center text-xs font-bold shrink-0">2</div>
              <div>
                <h4 className="text-sm font-bold text-foreground mb-1">Right to Erasure</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">You can request that we delete your data, subject to local financial record-keeping laws.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-6 h-6 rounded-full bg-hagull-600 text-white flex items-center justify-center text-xs font-bold shrink-0">3</div>
              <div>
                <h4 className="text-sm font-bold text-foreground mb-1">Right to Correction</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">Inaccurate or incomplete personal information can be updated through your account settings.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Security Measures */}
        <section id="security-measures" className="scroll-mt-32">
          <h2 className="text-2xl font-bold text-foreground mb-4">7. Security Measures</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            Hagull Exchange employs rigorous security standards to protect your data, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white border border-border p-4 rounded-xl flex flex-col items-center justify-center gap-2 shadow-sm">
              <Lock size={20} className="text-hagull-500" />
              <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">AES-256 Encryption</span>
            </div>
            <div className="bg-white border border-border p-4 rounded-xl flex flex-col items-center justify-center gap-2 shadow-sm">
              <Key size={20} className="text-hagull-500" />
              <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">2FA Auth</span>
            </div>
            <div className="bg-white border border-border p-4 rounded-xl flex flex-col items-center justify-center gap-2 shadow-sm">
              <ShieldCheck size={20} className="text-hagull-500" />
              <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">Multi-Sig Cold Storage</span>
            </div>
            <div className="bg-white border border-border p-4 rounded-xl flex flex-col items-center justify-center gap-2 shadow-sm">
              <User size={20} className="text-hagull-500" />
              <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">Privacy Masking</span>
            </div>
          </div>
        </section>

        {/* 8. Updates */}
        <section id="updates" className="scroll-mt-32">
          <h2 className="text-2xl font-bold text-foreground mb-4">8. Updates</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any significant changes by posting the new Privacy Policy on our website and updating the "Last Updated" date.
          </p>
          
          <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg text-sm text-orange-800 italic">
            Contact our Data Protection Officer at <a href="mailto:privacy@hagull.exchange" className="font-bold underline hover:text-orange-900 transition-colors">privacy@hagull.exchange</a> for any inquiries regarding your data.
          </div>
        </section>
      </div>
    </div>
  )
}
