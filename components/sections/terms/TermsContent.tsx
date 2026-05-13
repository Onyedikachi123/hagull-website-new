'use client'

import { AlertCircle, XCircle, FileText, Lock, Users, ShieldAlert, Scale } from 'lucide-react'

export default function TermsContent() {
  return (
    <div className="flex-1 max-w-4xl pt-8 pb-24">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Last Updated: May 24, 2024. Please read these terms carefully before using the Hagull Exchange platform.
        </p>
      </div>

      <div className="space-y-16">
        {/* 1. Introduction */}
        <section id="introduction" className="scroll-mt-32">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-4">
            <Scale size={24} className="text-hagull-600" />
            1. Introduction
          </h2>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4">
            <p>
              Welcome to Hagull Exchange. These Terms of Service ("Terms") constitute a legally binding agreement between you ("User", "you", or "your") and Hagull Exchange ("Company", "we", "us", or "our") governing your access to and use of our peer-to-peer (P2P) exchange platform, website, and related services.
            </p>
            <p>
              By clicking "I Agree", creating an account, or accessing our services, you acknowledge that you have read, understood, and agreed to be bound by these Terms. If you do not agree, you must immediately cease all use of our services.
            </p>
          </div>
        </section>

        {/* 2. Definitions */}
        <section id="definitions" className="scroll-mt-32">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-6">
            <FileText size={24} className="text-hagull-600" />
            2. Definitions
          </h2>
          <div className="bg-hagull-50/50 border border-border rounded-2xl p-6 space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p><strong>"Platform"</strong> refers to the Hagull Exchange ecosystem, including the P2P marketplace and API interfaces.</p>
            <p><strong>"Digital Assets"</strong> refers to stablecoins, cryptocurrencies, or other digital representations of value supported by the Platform.</p>
            <p><strong>"P2P Transaction"</strong> refers to a direct exchange of assets between two users facilitated by our escrow system.</p>
          </div>
        </section>

        {/* 3. Eligibility */}
        <section id="eligibility" className="scroll-mt-32">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-4">
            <ShieldAlert size={24} className="text-hagull-600" />
            3. Eligibility
          </h2>
          <p className="text-sm text-muted-foreground mb-4">To be eligible to use Hagull Exchange, you must:</p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed">
            <li>Be at least 18 years of age or of legal age to form a binding contract under applicable law.</li>
            <li>Not have been previously suspended or removed from our services.</li>
            <li>Not be a resident of any restricted jurisdiction as identified by international regulatory bodies.</li>
            <li>Possess the full power and authority to enter into this agreement.</li>
          </ul>
        </section>

        {/* 4. Account Registration */}
        <section id="account-registration" className="scroll-mt-32">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-4">
            <Users size={24} className="text-hagull-600" />
            4. Account Registration
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">
            When you create an account, you must provide accurate and complete information. You are solely responsible for maintaining the confidentiality of your account credentials, including your private keys and 2FA settings.
          </p>
          <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded-r-lg text-sm text-cyan-800 flex items-start gap-3">
            <AlertCircle size={18} className="shrink-0 mt-0.5" />
            <p>Hagull Exchange will never ask for your password or private keys via email or social media. Beware of phishing attempts.</p>
          </div>
        </section>

        {/* 5. Services */}
        <section id="services" className="scroll-mt-32">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-6">
            <FileText size={24} className="text-hagull-600" />
            5. Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 bg-white border border-border rounded-xl shadow-sm">
              <h4 className="text-sm font-bold text-foreground mb-2">Escrow Protection</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                All P2P trades are secured by our institutional-grade escrow system, ensuring buyer and seller protection.
              </p>
            </div>
            <div className="p-6 bg-white border border-border rounded-xl shadow-sm">
              <h4 className="text-sm font-bold text-foreground mb-2">Institutional API</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Direct access for corporate partners to provide high-volume liquidity across emerging markets.
              </p>
            </div>
          </div>
        </section>

        {/* 6. User Conduct */}
        <section id="user-conduct" className="scroll-mt-32">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-4">
            <ShieldAlert size={24} className="text-hagull-600" />
            6. User Conduct
          </h2>
          <p className="text-sm text-muted-foreground mb-4">You agree not to engage in any of the following prohibited activities:</p>
          <ul className="space-y-3">
            <li className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <XCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
              Money laundering or terrorist financing.
            </li>
            <li className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <XCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
              Market manipulation or wash trading.
            </li>
            <li className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
              <XCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
              Circumventing platform security or API limits.
            </li>
          </ul>
        </section>

        {/* 7. Fees */}
        <section id="fees" className="scroll-mt-32">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-4">
            <FileText size={24} className="text-hagull-600" />
            7. Fees
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Hagull Exchange charges a transparent fee for every successful P2P transaction. Current fee structures are always available on the Fees page. We reserve the right to adjust fees with a 30-day notice.
          </p>
        </section>

        {/* 8. Intellectual Property */}
        <section id="intellectual-property" className="scroll-mt-32">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-4">
            <FileText size={24} className="text-hagull-600" />
            8. Intellectual Property
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            All content, trademarks, logos, and technology on the Platform are the property of Hagull Exchange. You may not reproduce, distribute, or create derivative works without our express written consent.
          </p>
        </section>

        {/* 9. Dispute Resolution */}
        <section id="dispute-resolution" className="scroll-mt-32">
          <h2 className="text-2xl font-bold text-foreground flex items-center gap-2 mb-4">
            <Scale size={24} className="text-hagull-600" />
            9. Dispute Resolution
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Any disputes arising from P2P transactions shall first be handled by our dedicated Dispute Resolution Team. If a resolution cannot be reached internally, arbitration will be conducted in accordance with the rules of the International Chamber of Commerce (ICC).
          </p>
        </section>
      </div>
    </div>
  )
}
