'use client'

import { ArrowRight, Gift, Sparkles } from 'lucide-react'
import { track } from '@vercel/analytics'

export function CrossSell() {
  return (
    <section className="px-5 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Downsell — cheaper product */}
          <div className="rounded-3xl border-2 border-accent/30 bg-accent/5 p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <Sparkles className="size-6 text-accent" aria-hidden="true" />
              <p className="text-sm font-bold uppercase tracking-widest text-accent">Not ready for the full system?</p>
            </div>
            <h3 className="mt-4 font-serif text-xl font-black leading-tight text-foreground sm:text-2xl">
              Start with 100 Digital Product Ideas
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              100 proven, AI-friendly product ideas organized by niche. Find your first idea in 10 minutes — no guesswork needed. Just <strong className="text-foreground">₦1,999</strong>.
            </p>
            <a
              href="/100-ideas"
              onClick={() => track('crosssell_click', { target: '100-ideas' })}
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-accent-foreground transition hover:-translate-y-0.5 hover:shadow-md"
            >
              See the 100 Ideas <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Free lead magnet */}
          <div className="rounded-3xl border-2 border-primary/20 bg-primary/5 p-7 sm:p-8">
            <div className="flex items-center gap-3">
              <Gift className="size-6 text-primary" aria-hidden="true" />
              <p className="text-sm font-bold uppercase tracking-widest text-primary">Want something free first?</p>
            </div>
            <h3 className="mt-4 font-serif text-xl font-black leading-tight text-foreground sm:text-2xl">
              AI Side Hustle Starter Kit
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              A free PDF with the exact framework for picking a profitable AI-powered side hustle. No email required — just download and start.
            </p>
            <a
              href="/free/ai-side-hustle-starter-kit"
              onClick={() => track('crosssell_click', { target: 'free-starter-kit' })}
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Get the Free Kit <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
