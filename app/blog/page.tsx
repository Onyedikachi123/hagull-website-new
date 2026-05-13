'use client'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { FadeIn, StaggerContainer, StaggerItem } from '@/components/animations/FadeIn'
import Link from 'next/link'

export default function BlogPage() {
  const posts = [
    { title: 'The Future of P2P Exchange in Emerging Markets', date: 'May 12, 2024', category: 'Industry' },
    { title: 'Understanding Hagull\'s Escrow Architecture', date: 'May 8, 2024', category: 'Engineering' },
    { title: 'Hagull Surpasses $2B Monthly Volume', date: 'April 28, 2024', category: 'Company' },
    { title: 'New Fiat Gateways Added for Southeast Asia', date: 'April 15, 2024', category: 'Product Update' },
    { title: 'Security Best Practices for OTC Traders', date: 'April 2, 2024', category: 'Security' },
    { title: 'Navigating Regulatory Compliance in Crypto', date: 'March 18, 2024', category: 'Policy' },
  ]

  return (
    <div className="bg-section-subtle min-h-screen flex flex-col">
      <Navbar />
      
      <main id="main-content" className="flex-1 pt-32 pb-24">
        <div className="container-fluid max-w-6xl">
          <FadeIn direction="up" className="mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
              Hagull Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Insights, product updates, and industry analysis from the team building the future of global exchange.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <StaggerItem key={i}>
                <Link href="#" className="block h-full group">
                  <div className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-card transition-all h-full flex flex-col">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-hagull-600 mb-4">
                      {post.category}
                    </div>
                    <h2 className="text-xl font-bold text-foreground mb-4 group-hover:text-hagull-600 transition-colors">
                      {post.title}
                    </h2>
                    <div className="mt-auto pt-6 flex items-center justify-between border-t border-border/50">
                      <span className="text-xs text-muted-foreground font-medium">{post.date}</span>
                      <span className="text-xs font-bold text-hagull-600 group-hover:translate-x-1 transition-transform">Read Article →</span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </main>

      <Footer />
    </div>
  )
}
