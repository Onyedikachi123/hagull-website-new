import { User, ArrowLeftRight, ShieldCheck, Wallet } from 'lucide-react'

export const HELP_CATEGORIES = [
  {
    icon: User,
    title: 'Account',
    description: 'Verification, profile settings, and security.'
  },
  {
    icon: ArrowLeftRight,
    title: 'Trading',
    description: 'P2P orders, fees, and market operations.'
  },
  {
    icon: ShieldCheck,
    title: 'Security',
    description: 'Two-factor auth and anti-phishing tips.'
  },
  {
    icon: Wallet,
    title: 'Deposits',
    description: 'Funding your wallet and withdrawals.'
  }
]

export const TRADING_FAQS = [
  {
    id: 'faq-1',
    question: 'How do I start a P2P trade on Hagull Exchange?',
    answer: 'To start trading, navigate to the "Trade" section of the dashboard. Select your preferred currency pair and browse the active order book. Once you find a suitable offer, click "Buy" or "Sell" to initiate the secure escrow process.',
    listItems: [
      'Ensure your account is verified to Level 2.',
      'Check the seller\'s completion rate.',
      'Funds are held in escrow for your safety.'
    ]
  },
  {
    id: 'faq-2',
    question: 'What are the platform trading fees?',
    answer: 'Your first $1,000 in trading volume is fee-free. After that, we charge a highly competitive flat rate of 0.1% per transaction for makers and 0.2% for takers, regardless of the fiat currency being exchanged.'
  },
  {
    id: 'faq-3',
    question: 'How long does a typical transaction take?',
    answer: 'Most trades settle within 15 minutes. However, international bank transfers (like SEPA or SWIFT) may take up to 1-3 business days depending on the routing banks involved. Crypto releases happen instantly once fiat payment is confirmed.'
  },
  {
    id: 'faq-4',
    question: 'What if a seller doesn\'t release the assets?',
    answer: 'If a seller fails to release the assets after you have successfully transferred the fiat payment, you can open a dispute. Our 24/7 arbitration team will step in, review the payment proof, and manually release the cryptographically locked escrow funds to you.'
  },
  {
    id: 'faq-5',
    question: 'Which countries are supported for institutional exchange?',
    answer: 'Hagull supports institutional entities in over 120 countries. Core markets include the US, UK, EU, Nigeria, Brazil, Mexico, UAE, and South Africa. For a complete list or specific regulatory inquiries, please contact our Institutional Onboarding team.'
  }
]
