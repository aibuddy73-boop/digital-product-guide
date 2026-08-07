import Image from 'next/image'
import { Bot, Check, Clock3, FileText, ShieldCheck } from 'lucide-react'
import { CtaButton } from './cta-button'

const chips = ['Working a 9–5', 'Building a side hustle', 'A student with an idea', 'Tired of unfinished projects']
const trust = [[FileText, 'Step-by-step guide'], [Bot, 'Free ChatGPT works'], [Clock3, 'Built for busy people'], [ShieldCheck, '7-day action promise']] as const

export function SiteHeader() {
  return <header className="border-b border-border bg-background"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4"><a href="#top" className="font-serif text-lg font-black tracking-tight text-foreground">HUSTLE TALK <span className="text-primary">WITH DANIEL</span></a><a href="#pricing" className="text-sm font-bold text-primary hover:underline">View launch offer</a></div></header>
}

export function Hero() {
  return <section id="top" className="overflow-hidden bg-secondary/60 scroll-mt-20"><div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.08fr_.92fr] md:items-center md:px-8 md:py-20">
    <div>
      <p className="mb-5 inline-flex rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground">A practical 7-day execution system</p>
      <h1 className="max-w-3xl font-serif text-4xl font-black leading-[1.08] tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">Stop Collecting Ideas. Start Finishing Products. A 7-Day System That Forces You to Ship — Not Study.</h1>
      <p className="mt-6 max-w-2xl text-xl font-bold leading-relaxed text-foreground">No 40-hour course. No expensive tools. Just 7 daily action plans, AI prompts, and the exact checklist that got me from &quot;someday&quot; to published in one week.</p>
      <div className="mt-6 flex flex-wrap gap-2" aria-label="Made for"><span className="w-full text-sm font-bold text-foreground">This is for you if you&apos;re:</span>{chips.map(chip => <span key={chip} className="rounded-full border border-border bg-background px-3 py-2 text-sm font-medium text-foreground"><Check className="mr-1 inline size-4 text-primary" aria-hidden="true" />{chip}</span>)}</div>
      <div className="mt-8"><CtaButton placement="hero" /></div>
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">{trust.map(([Icon, text]) => <div key={text} className="flex items-center gap-2 text-xs font-bold text-muted-foreground"><Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />{text}</div>)}</div>
      <p className="mt-5 text-sm text-muted-foreground">Not ready to commit? <a href="/free/ai-side-hustle-starter-kit" className="font-bold text-primary hover:underline">Get the free AI Starter Kit first →</a></p>
    </div>
    <div className="relative mx-auto w-full max-w-lg pb-12"><Image src="/images/hero-daniel.png" alt="Daniel working at his desk" width={700} height={700} priority className="aspect-[4/5] w-full rounded-3xl object-cover shadow-xl" /><Image src="/images/product-cover.png" alt="Stop Overthinking digital guide cover" width={220} height={290} priority className="absolute -bottom-2 -left-3 w-28 rotate-[-4deg] rounded-lg shadow-2xl sm:w-36 md:w-44" /><div className="absolute right-2 top-2 rounded-xl bg-background px-3 py-2 shadow-lg sm:right-4 sm:top-4 sm:px-4 sm:py-3"><p className="text-[0.6rem] font-bold uppercase tracking-wider text-muted-foreground sm:text-xs">Your finish line</p><p className="font-serif text-base font-black text-primary sm:text-lg">Published in 7 days</p></div></div>
  </div></section>
}
