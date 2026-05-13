import { FileText, Database, Shield, Cookie, Share2, UserCheck, Lock, RefreshCw } from 'lucide-react'

export const PRIVACY_SECTIONS = [
  { id: 'introduction', label: 'Introduction', icon: FileText },
  { id: 'data-collection', label: 'Data Collection', icon: Database },
  { id: 'use-of-information', label: 'Use of Information', icon: Shield },
  { id: 'cookies-tracking', label: 'Cookies & Tracking', icon: Cookie },
  { id: 'data-sharing', label: 'Data Sharing', icon: Share2 },
  { id: 'your-rights', label: 'Your Rights', icon: UserCheck },
  { id: 'security-measures', label: 'Security Measures', icon: Lock },
  { id: 'updates', label: 'Updates', icon: RefreshCw },
]
