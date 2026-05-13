import { Code2, Megaphone, Settings, Scale, HeartPulse, Building2, TrendingUp } from 'lucide-react'

export const DEPARTMENTS = [
  {
    icon: Code2,
    title: 'Engineering',
    description: 'Develop secure, high-throughput systems for institutional-grade peer-to-peer exchange across the continent.',
    openRoles: 12
  },
  {
    icon: Megaphone,
    title: 'Marketing',
    description: 'Craft the story of financial freedom and institutional reliability.',
    openRoles: 4
  },
  {
    icon: Settings,
    title: 'Operations',
    description: 'Ensuring seamless flow and peak performance across our infrastructure.',
    openRoles: 6
  },
  {
    icon: Scale,
    title: 'Legal & Compliance',
    description: 'Navigate the evolving regulatory landscape of digital finance with precision.',
    openRoles: 2
  }
]

export const CULTURE_BENEFITS = [
  {
    icon: Building2,
    title: 'Remote-First Flexibility',
    description: 'Work from anywhere in Africa or beyond. We value output over office hours.'
  },
  {
    icon: HeartPulse,
    title: 'Comprehensive Wellness',
    description: 'Full health coverage, mental health support, and annual wellness stipends.'
  },
  {
    icon: TrendingUp,
    title: 'Equity & Growth',
    description: 'Generous equity packages and an annual $2,500 learning budget for all staff.'
  }
]

export const OPEN_POSITIONS = [
  {
    id: 'p1',
    title: 'Senior Blockchain Engineer',
    department: 'ENGINEERING',
    location: 'Remote, Lagos',
    type: 'Full-time'
  },
  {
    id: 'p2',
    title: 'Compliance Officer',
    department: 'LEGAL',
    location: 'Nairobi, Kenya',
    type: 'Full-time'
  },
  {
    id: 'p3',
    title: 'Head of Growth',
    department: 'MARKETING',
    location: 'Remote, Global',
    type: 'Full-time'
  },
  {
    id: 'p4',
    title: 'P2P Operations Associate',
    department: 'OPERATIONS',
    location: 'Johannesburg',
    type: 'Full-time'
  }
]
