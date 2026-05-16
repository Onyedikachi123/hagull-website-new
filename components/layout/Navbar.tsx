'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight, ChevronDown, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS } from '@/constants'

// ─── Scroll hook ──────────────────────────────────────────────────────────────
function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold)
    handler()
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [threshold])
  return scrolled
}

// ─── Mobile Menu ──────────────────────────────────────────────────────────────
const mobileMenuVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.22, ease: [0.25, 0.1, 0.25, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.97,
    transition: { duration: 0.18, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

const menuItemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.06, duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
}

// ─── Navbar Component ─────────────────────────────────────────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrolled = useScrolled()
  const pathname = usePathname()

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  // Close mobile menu on route change
  useEffect(() => { closeMobile() }, [pathname, closeMobile])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled || pathname !== '/'
            ? 'bg-white/90 dark:bg-surface-950/90 backdrop-blur-xl border-b border-border shadow-sm'
            : 'bg-transparent',
        )}
        role="banner"
      >
        <nav
          className="container-fluid flex items-center justify-between h-16 md:h-18"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0 focus-brand"
            aria-label="Hagull — Home"
          >
            <div className="relative w-[110px] h-[32px]">
              <Image
                src="/logo.png"
                alt="Hagull"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {NAV_LINKS.map(({ label, href, children }) => (
              <li key={href} className="relative group">
                {children ? (
                  <>
                    <Link
                      href={href}
                      className={cn(
                        'relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 focus-brand flex items-center gap-1.5',
                        isActive(href) || children.some(c => isActive(c.href))
                          ? 'text-hagull-500'
                          : 'text-black hover:text-hagull-600 hover:bg-black/5',
                      )}
                      aria-current={isActive(href) || children.some(c => isActive(c.href)) ? 'page' : undefined}
                    >
                      {label}
                      <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                      {(isActive(href) || children.some(c => isActive(c.href))) && (
                        <motion.div
                          layoutId="nav-indicator"
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-hagull-500"
                        />
                      )}
                    </Link>
                    <div className="absolute top-full left-0 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50 min-w-[200px]">
                      <div className="bg-white dark:bg-surface-900 border border-border shadow-xl rounded-xl overflow-hidden p-2">
                        {children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              'block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors duration-200',
                              isActive(child.href)
                                ? 'text-hagull-500 bg-hagull-50 dark:bg-hagull-900/20'
                                : 'text-black hover:text-hagull-600 hover:bg-muted'
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={href}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 focus-brand',
                      isActive(href)
                        ? 'text-hagull-500'
                        : 'text-black hover:text-hagull-600 hover:bg-black/5',
                    )}
                    aria-current={isActive(href) ? 'page' : undefined}
                  >
                    {label}
                    {isActive(href) && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-hagull-500"
                      />
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/login"
              className={cn(
                'px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 focus-brand',
                'text-black hover:text-hagull-600 hover:bg-black/5',
              )}
            >
              Log in
            </Link>
            <Link
              href="/register"
              className="group flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold rounded-xl bg-hagull-500 hover:bg-hagull-600 text-white shadow-glow/40 hover:shadow-glow transition-all duration-200 focus-brand"
            >
              Get Started
              <ChevronRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              'lg:hidden p-2.5 rounded-xl transition-colors duration-200 focus-brand',
              scrolled
                ? 'text-foreground hover:bg-muted'
                : 'text-foreground hover:bg-black/5',
            )}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={closeMobile}
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              key="mobile-menu"
              id="mobile-menu"
              role="dialog"
              aria-label="Navigation menu"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-16 md:top-[72px] left-4 right-4 z-50 rounded-2xl bg-white/98 dark:bg-surface-900/98 backdrop-blur-2xl border border-border shadow-2xl lg:hidden overflow-hidden"
            >
              <div className="p-4">
                {/* Nav Links */}
                <ul className="space-y-1 mb-4" role="list">
                  {NAV_LINKS.map(({ label, href, children }, i) => (
                    <motion.li key={href} custom={i} variants={menuItemVariants} initial="hidden" animate="visible" className="flex flex-col">
                      {children ? (
                        <>
                          <Link
                            href={href}
                            className={cn(
                              'flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-xl transition-colors duration-200',
                              isActive(href) || children.some(c => isActive(c.href))
                                ? 'text-hagull-500 bg-hagull-50 dark:bg-hagull-900/20'
                                : 'text-black hover:text-hagull-600 hover:bg-muted',
                            )}
                            aria-current={isActive(href) || children.some(c => isActive(c.href)) ? 'page' : undefined}
                            onClick={closeMobile}
                          >
                            {label}
                            <ChevronRight size={16} className="text-muted-foreground" />
                          </Link>
                          <div className="flex flex-col ml-4 border-l-2 border-border/50 pl-2 mt-1 space-y-1">
                            {children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={cn(
                                  'flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium rounded-xl transition-colors duration-200',
                                  isActive(child.href)
                                    ? 'text-hagull-500 bg-hagull-50 dark:bg-hagull-900/20'
                                    : 'text-black hover:text-hagull-600 hover:bg-muted',
                                )}
                                onClick={closeMobile}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </>
                      ) : (
                        <Link
                          href={href}
                          className={cn(
                            'flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-xl transition-colors duration-200',
                            isActive(href)
                              ? 'text-hagull-500 bg-hagull-50 dark:bg-hagull-900/20'
                              : 'text-black hover:text-hagull-600 hover:bg-muted',
                          )}
                          aria-current={isActive(href) ? 'page' : undefined}
                          onClick={closeMobile}
                        >
                          {label}
                          <ChevronRight size={16} className="text-muted-foreground" />
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="border-t border-border my-3" />

                {/* CTA Buttons */}
                <div className="space-y-2">
                  <Link
                    href="/login"
                    className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium rounded-xl border border-border text-foreground hover:bg-muted transition-colors duration-200"
                    onClick={closeMobile}
                  >
                    Log in
                  </Link>
                  <Link
                    href="/register"
                    className="flex items-center justify-center gap-1.5 w-full px-4 py-3 text-sm font-semibold rounded-xl bg-hagull-500 hover:bg-hagull-600 text-white transition-colors duration-200"
                    onClick={closeMobile}
                  >
                    Get Started Free
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
