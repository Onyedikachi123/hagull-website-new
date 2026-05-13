import { UserCheck, Award, Shield, FileCheck, Lock, TrendingUp } from 'lucide-react'

export const SECURITY_PILLARS = [
  {
    icon: UserCheck,
    title: 'KYC/AML Policies',
    description: 'Our rigorous Know Your Customer (KYC) and Anti-Money Laundering (AML) frameworks are integrated into every touchpoint. We utilize automated identity verification and real-time transaction monitoring to prevent illicit activities and maintain a clean trading environment.',
    listItems: ['Identity Verification', 'Sanctions Screening', 'Risk Scoring', 'PEP Monitoring']
  },
  {
    icon: Award,
    title: 'Certifications',
    description: 'Adhering to global standards like **SOC 2 Type II** and **ISO 27001**, Hagull Exchange undergoes periodic external audits to validate our operational security controls.',
    badges: ['SOC 2', 'ISO 27001']
  },
  {
    icon: Shield,
    title: 'Data Protection',
    description: 'Our platform is designed with GDPR principles of privacy-by-design. We utilize end-to-end encryption for sensitive data and provide users with full transparency regarding data storage and residency.'
  },
  {
    icon: FileCheck,
    title: 'Regulatory Licenses',
    description: 'We operate as a licensed financial service provider in every jurisdiction we serve. Our compliance team works closely with central banks and regulatory bodies to ensure long-term stability and legal certainty.',
    link: { text: 'VIEW LEGAL DISCLOSURES', url: '/privacy' }
  }
]

export const TRANSPARENCY_FEATURES = [
  {
    icon: Lock,
    title: 'Cold Storage Custody',
    description: '98% of digital assets are kept in geographically distributed offline vaults, protected by multi-signature authorization protocols.'
  },
  {
    icon: TrendingUp,
    title: 'Proof of Reserves',
    description: 'We provide cryptographic proof of reserves, allowing any stakeholder to verify that exchange assets match user liabilities in real-time.'
  }
]
