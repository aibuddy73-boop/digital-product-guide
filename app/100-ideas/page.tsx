'use client'

import { ArrowRight, Check, FileText, Lightbulb, Sparkles, Target, Zap } from 'lucide-react'
import { track } from '@vercel/analytics'

const CHECKOUT_URL = 'https://selar.com/digital_product' // Update with actual 100-ideas Selar URL when ready

const categories = [
  'Ebooks & guides',
  'Templates & worksheets',
  'Prompt packs',
  'Mini-courses',
  'Printables',
  'Notion templates',
  'Checklists & planners',
  'Swipe files',
]

const features = [
  [Lightbulb, '100 validated ideas', 'Every idea is tested against real market demand — not random brainstorming.'],
  [Target, 'Organized by niche', 'Find ideas in your area of interest: health, business, parenting, tech, creativity, and more.'],
  [Sparkles, 'AI-creation friendly', 'Each idea includes a note on how to build it with free AI tools like ChatGPT.'],
  [Zap, '10-minute decision', 'Stop scrolling idea lists for hours. Pick one that fits you in a single focused session.'],
] as const

const faqs = [
  ['Is this the same as the 7-Day System?', 'No. The 7-Day System is a complete execution guide that walks you through building AND launching. This PDF is just the ideas list — perfect if you already know how to create but need inspiration for WHAT to create.'],
  ['Can I use free ChatGPT with these ideas?', 'Yes. Every idea is designed to be buildable with free AI tools. No paid subscriptions required.'],
  ['What format is it?', 'A downloadable PDF. Read it on any device — phone, tablet, or computer.'],
  ['What if I already bought the 7-Day System?', 'The 7-Day System includes the Idea Filter bonus which helps you pick from your OWN ideas. This list gives you 100 pre-validated ideas if you want external inspiration. They complement each other but don\'t overlap.'],
]

export default function HundredIdeasPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="/" className="font-serif text-lg font-black tracking-tight text-foreground">
            HUSTLE TALK <span className="text-primary">WITH DANIEL</span>
          </a>
          <a href="/#pricing" className="text-sm font-bold text-primary hover:underline">
            View 7-Day System
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="bg-secondary/60 px-5 py-14 md:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="inline-flex rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground">
              Digital product idea bank
            </p>
            <h1 className="mt-5 font-serif text-3xl font-black leading-tight text-foreground sm:text-4xl lg:text-5xl">
              100 Digital Product Ideas You Can Create With AI
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Stop wondering &quot;what should I create?&quot; — pick from 100 proven ideas organized by niche, validated against real demand, and designed to be built with free AI tools.
            </p>
            <div className="mt-8">
              <a
                href={CHECKOUT_URL}
                onClick={() => track('cta_click', { placement: '100-ideas-hero' })}
                className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-accent px-7 py-4 text-base font-bold text-accent-foreground shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Get 100 Ideas — ₦1,999 <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Instant PDF download · Works with free ChatGPT</p>
          </div>
        </section>

        {/* Categories */}
        <section className="px-5 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-serif text-2xl font-black sm:text-3xl">Ideas across 8+ categories</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <span key={cat} className="rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm font-medium text-foreground">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-secondary/30 px-5 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-serif text-2xl font-black sm:text-3xl">Why this list is different</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {features.map(([Icon, title, desc]) => (
                <div key={title} className="rounded-2xl border border-border bg-background p-6">
                  <Icon className="size-8 text-primary" />
                  <h3 className="mt-4 font-bold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sample ideas preview */}
        <section className="px-5 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-serif text-2xl font-black sm:text-3xl">Sneak peek: 5 of 100 ideas</h2>
            <div className="mt-8 space-y-4">
              {[
                'A "First 30 Days" checklist for new freelancers (PDF template)',
                'An AI-generated meal prep planner for busy professionals (Notion template)',
                'A social media caption swipe file for small business owners (50 fill-in-the-blank captions)',
                'A "Client Onboarding" email sequence template for service providers',
                'A budgeting tracker designed for Nigerian salary earners (Google Sheets)',
              ].map((idea, i) => (
                <div key={i} className="flex gap-4 rounded-xl border border-border bg-background p-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {i + 1}
                  </span>
                  <p className="text-sm font-medium text-foreground sm:text-base">{idea}</p>
                </div>
              ))}
              <div className="flex items-center gap-4 rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 p-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  …
                </span>
                <p className="text-sm font-bold text-primary sm:text-base">+ 95 more ideas inside the full PDF</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="bg-primary px-5 py-16 text-primary-foreground">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-black sm:text-4xl">Get all 100 ideas today</h2>
            <div className="mt-8 rounded-3xl bg-background p-8 text-foreground shadow-2xl">
              <div className="flex items-center justify-center gap-3">
                <FileText className="size-8 text-primary" />
                <div>
                  <p className="font-bold">100 Digital Product Ideas PDF</p>
                  <p className="text-sm text-muted-foreground">Instant download · Organized by niche · AI-friendly</p>
                </div>
              </div>
              <p className="mt-6 font-serif text-5xl font-black">₦1,999</p>
              <p className="mt-2 text-sm text-muted-foreground">One-time payment · No subscription</p>
              <a
                href={CHECKOUT_URL}
                onClick={() => track('cta_click', { placement: '100-ideas-pricing' })}
                className="group mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-accent px-7 py-4 text-base font-bold text-accent-foreground shadow-md transition hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
              >
                Get 100 Ideas Now <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="mt-4 text-xs text-muted-foreground">Secure checkout on Selar</p>
            </div>
          </div>
        </section>

        {/* Upsell to full system */}
        <section className="px-5 py-16">
          <div className="mx-auto max-w-3xl rounded-3xl border-2 border-accent/20 bg-accent/5 p-8 text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-accent">Want the complete system?</p>
            <h2 className="mt-3 font-serif text-2xl font-black text-foreground sm:text-3xl">
              Go from idea to published product in 7 days
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
              The 100 Ideas list tells you <strong className="text-foreground">what</strong> to build. The 7-Day System shows you <strong className="text-foreground">how</strong> to build and launch it — with daily checklists, AI prompts, and launch templates.
            </p>
            <ul className="mx-auto mt-6 flex max-w-sm flex-col gap-2 text-left">
              {['Complete 7-day execution guide', 'Idea Filter + Buyer Worksheet', 'AI Prompt Pack (50+ prompts)', 'Launch Content Templates', '30-Day Post-Launch Plan'].map((item) => (
                <li key={item} className="flex gap-3 text-sm">
                  <Check className="size-4 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/#pricing"
              onClick={() => track('100ideas_upsell', { target: '7-day-system' })}
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-accent-foreground transition hover:-translate-y-0.5 hover:shadow-md"
            >
              See the 7-Day System — ₦4,800 <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-secondary/60 px-5 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-serif text-2xl font-black sm:text-3xl">Questions</h2>
            <div className="mt-8 flex flex-col gap-3">
              {faqs.map(([q, a]) => (
                <details key={q} className="group rounded-2xl border border-border bg-background p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-foreground">
                    {q}
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-5 py-10 text-center">
        <p className="font-serif font-black">Hustle Talk With Daniel</p>
        <p className="mt-2 text-sm text-muted-foreground">Practical systems for turning knowledge into finished digital products.</p>
        <p className="mt-5 text-xs text-muted-foreground">© {new Date().getFullYear()} Hustle Talk With Daniel. No specific income or overnight results are promised.</p>
      </footer>
    </div>
  )
}
