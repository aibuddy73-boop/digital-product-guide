'use client'

import { track } from '@vercel/analytics'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export const CHECKOUT_URL = 'https://selar.co/yourproduct'

export function CtaButton({ className, placement = 'section' }: { children?: React.ReactNode; className?: string; placement?: string }) {
  return <a href={CHECKOUT_URL} onClick={() => track('cta_click', { placement })} className={cn('group inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-accent px-7 py-4 text-center text-base font-bold text-accent-foreground shadow-md transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:w-auto', className)}>Start My 7-Day System <ArrowRight aria-hidden="true" className="size-5 transition-transform group-hover:translate-x-1" /></a>
}

export function MobileCta() {
  return <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden"><CtaButton placement="mobile_sticky" className="min-h-12 w-full py-3" /></div>
}
