'use client'

import { track } from '@vercel/analytics'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export const CHECKOUT_URL = 'https://selar.com/digital_product'

export function CtaButton({ className, placement = 'section' }: { children?: React.ReactNode; className?: string; placement?: string }) {
  const id = placement === 'hero' ? 'primary-cta' : undefined
  return <a id={id} href={CHECKOUT_URL} onClick={() => track('cta_click', { placement })} className={cn('group inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-accent px-7 py-4 text-center text-base font-bold text-accent-foreground shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto', className)}>Start My 7-Day System <ArrowRight aria-hidden="true" className="size-5 transition-transform group-hover:translate-x-1" /></a>
}

export function MobileCta() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = document.getElementById('primary-cta')
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { threshold: 0 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div className={cn(
      'fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur transition-transform md:hidden',
      visible ? 'translate-y-0' : 'translate-y-full'
    )}>
      <div className="mx-auto flex max-w-md items-center justify-between gap-3">
        <div className="text-sm font-bold">
          ₦4,800 <span className="text-xs font-normal text-muted-foreground line-through">₦9,800</span>
        </div>
        <a 
          href={CHECKOUT_URL} 
          onClick={() => track('cta_click', { placement: 'mobile_sticky' })}
          className="rounded-lg bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground transition hover:bg-accent/90"
        >
          Get Access
        </a>
      </div>
    </div>
  )
}
