'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { FadeIn } from '@/components/animations/FadeIn'
import { TRADING_FAQS } from '@/constants/resources'
import { cn } from '@/lib/utils'

export default function FAQAccordion() {
  // Open the first one by default as shown in the design
  const [openId, setOpenId] = useState<string | null>(TRADING_FAQS[0].id)

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="py-12 bg-white" aria-labelledby="faq-heading">
      <div className="container-fluid max-w-4xl">
        <FadeIn direction="up">
          <h2 id="faq-heading" className="text-2xl font-bold text-foreground mb-8">
            Trading Frequently Asked Questions
          </h2>
          
          <div className="space-y-3">
            {TRADING_FAQS.map((faq) => {
              const isOpen = openId === faq.id
              return (
                <div 
                  key={faq.id} 
                  className={cn(
                    "border rounded-xl overflow-hidden transition-colors duration-200",
                    isOpen ? "border-border bg-white" : "border-border/60 bg-white hover:border-border"
                  )}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-foreground pr-8">{faq.question}</span>
                    <ChevronDown 
                      size={18} 
                      className={cn(
                        "text-muted-foreground transition-transform duration-300 shrink-0",
                        isOpen ? "rotate-180" : ""
                      )} 
                    />
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      >
                        <div className="p-5 pt-0 text-sm text-muted-foreground leading-relaxed">
                          <p>{faq.answer}</p>
                          {faq.listItems && (
                            <ul className="list-disc pl-5 mt-3 space-y-1.5 text-sm">
                              {faq.listItems.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
