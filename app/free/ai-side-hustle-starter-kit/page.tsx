'use client'

import { useState } from 'react'
import { ArrowRight, Bot, Check, Clock3, Download, FileText, Gift, Lock, ShieldCheck, Sparkles, Users, Zap } from 'lucide-react'
import { track } from '@vercel/analytics'

const FREE_PDFS = [
  { name: 'AI Side Hustle Starter Kit', desc: 'The main framework — pick your profitable idea', url: 'https://drive.google.com/file/d/1Xj8FhYVRTsHQ1d4uSwj_bWv9QdtlSSRw/view?usp=sharing', primary: true },
  { name: '7 AI Prompts to Finish Your First eBook', desc: 'Copy-paste prompts that get you from blank page to draft', url: 'https://drive.google.com/file/d/1lXgbmbJQD_O0xnB6FOt6xN1yraqJHjzg/view?usp=sharing', primary: false },
  { name: '50 AI Prompts That Turn Ideas Into Products', desc: 'Research, outline, draft, and refine — all with free ChatGPT', url: 'https://drive.google.com/file/d/14O3b-63lxflXNOMl_VwwN53-dqCR9gbk/view?usp=sharing', primary: false },
]

export default function FreeStarterKit() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || loading) return
    setLoading(true)
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, slug: 'ai-side-hustle-starter-kit' }),
      })
      track('lead_magnet_submit', { slug: 'ai-side-hustle-starter-kit' })
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="/" className="font-serif text-lg font-black tracking-tight text-foreground">
            HUSTLE TALK <span className="text-primary">WITH DANIEL</span>
          </a>
          <a href="/#pricing" className="text-sm font-bold text-primary hover:underline">
            View 7-Day System →
          </a>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="overflow-hidden bg-secondary/60 px-5 py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            {/* Left — copy */}
            <div>
              <p className="inline-flex rounded-full bg-accent px-4 py-2 text-xs font-bold uppercase tracking-widest text-accent-foreground">
                Free download — no credit card
              </p>
              <h1 className="mt-5 font-serif text-3xl font-black leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                AI Side Hustle Starter Kit + 57 Bonus Prompts
              </h1>
              <p className="mt-5 max-w-xl text-base font-bold leading-relaxed text-foreground sm:text-lg">
                The exact framework for picking a profitable AI-powered side hustle — plus 57 ready-to-use prompts that do the heavy lifting for you.
              </p>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                Works even if you have no tech skills, no audience, and only 1-2 hours a day. Uses free ChatGPT — no paid tools required.
              </p>

              {/* What you get */}
              <div className="mt-8 space-y-3">
                <p className="text-sm font-bold uppercase tracking-wider text-primary">You&apos;ll get 3 PDFs free:</p>
                {[
                  ['AI Side Hustle Starter Kit', 'Framework for picking your profitable idea in one session'],
                  ['7 AI Prompts to Finish Your First eBook', 'Go from blank page to complete draft using free ChatGPT'],
                  ['50 AI Prompts for Digital Products', 'Research, outline, write, and refine — all prompted for you'],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-3">
                    <Check className="size-5 shrink-0 text-accent mt-0.5" />
                    <div>
                      <p className="text-sm font-bold text-foreground sm:text-base">{title}</p>
                      <p className="text-xs text-muted-foreground sm:text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust signals */}
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {([
                  [FileText, '3 PDF guides'],
                  [Bot, 'Free ChatGPT works'],
                  [Clock3, '5-min to start'],
                ] as const).map(([Icon, text]) => (
                  <div key={text} className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                    <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form or download */}
            <div className="rounded-3xl border-2 border-primary/20 bg-background p-7 shadow-2xl sm:p-8">
              {!submitted ? (
                <>
                  <div className="text-center">
                    <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10">
                      <Gift className="size-7 text-primary" />
                    </div>
                    <h2 className="mt-4 font-serif text-xl font-black text-foreground sm:text-2xl">Get instant access</h2>
                    <p className="mt-2 text-sm text-muted-foreground">Enter your email and download all 3 PDFs immediately.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
                    <input
                      type="email"
                      required
                      placeholder="Your best email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-border bg-secondary/30 px-4 py-4 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-4 text-base font-bold text-accent-foreground shadow-md transition hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50"
                    >
                      {loading ? 'Preparing your kit…' : 'Send Me The Free Kit'}
                      <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                  <div className="mt-5 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Lock className="size-3" /> No spam</span>
                    <span className="flex items-center gap-1"><ShieldCheck className="size-3" /> Unsubscribe anytime</span>
                  </div>
                </>
              ) : (
                <div className="text-center">
                  <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-accent/10">
                    <Download className="size-8 text-accent" />
                  </div>
                  <h2 className="mt-5 font-serif text-2xl font-black text-foreground">Your kit is ready! 🎉</h2>
                  <p className="mt-2 text-sm text-muted-foreground">Click each PDF below to download.</p>
                  <div className="mt-6 flex flex-col gap-3">
                    {FREE_PDFS.map((pdf) => (
                      <a
                        key={pdf.name}
                        href={pdf.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => track('free_pdf_download', { name: pdf.name })}
                        className={`flex items-start gap-3 rounded-xl border px-4 py-3.5 text-left transition hover:-translate-y-0.5 hover:shadow-md ${
                          pdf.primary
                            ? 'border-accent bg-accent text-accent-foreground'
                            : 'border-border bg-secondary/30 text-foreground hover:border-primary'
                        }`}
                      >
                        <Download className="size-4 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-bold">{pdf.name}</p>
                          <p className={`text-xs ${pdf.primary ? 'text-accent-foreground/80' : 'text-muted-foreground'}`}>{pdf.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Who this is for */}
        <section className="px-5 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-serif text-2xl font-black sm:text-3xl">This free kit is perfect for you if…</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'You want to make extra income online but don\'t know where to start',
                'You\'re curious about AI but haven\'t figured out how to monetize it',
                'You\'ve seen others launch digital products and thought "I could do that"',
                'You have skills or knowledge people would pay for — but haven\'t packaged it',
                'You\'re tired of scrolling "how to make money" content without acting on it',
                'You want something concrete to do THIS WEEK, not someday',
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-border bg-background p-4">
                  <Check className="size-5 shrink-0 text-primary mt-0.5" />
                  <p className="text-sm leading-relaxed text-foreground/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's inside each PDF */}
        <section className="bg-secondary/30 px-5 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-serif text-2xl font-black sm:text-3xl">What&apos;s inside your free kit</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {/* PDF 1 */}
              <div className="rounded-2xl border-2 border-primary/20 bg-background p-6 shadow-sm">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="size-6 text-primary" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-black">AI Side Hustle Starter Kit</h3>
                <ul className="mt-4 space-y-2">
                  {['The 5 most profitable AI side hustles in 2026', 'A framework for matching YOUR skills to the right model', 'Step-by-step first action plan (not theory)', 'What to avoid — common beginner traps'].map(item => (
                    <li key={item} className="flex gap-2 text-xs text-muted-foreground">
                      <Check className="size-3.5 shrink-0 text-primary mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* PDF 2 */}
              <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                <div className="flex size-12 items-center justify-center rounded-full bg-accent/10">
                  <FileText className="size-6 text-accent" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-black">7 AI Prompts for Your First eBook</h3>
                <ul className="mt-4 space-y-2">
                  {['Topic brainstorming prompt', 'Outline generation prompt', 'Chapter drafting prompt', 'Editing and rewrite prompt', 'Title and subtitle generator', 'Description copywriting prompt', 'Pricing research prompt'].map(item => (
                    <li key={item} className="flex gap-2 text-xs text-muted-foreground">
                      <Check className="size-3.5 shrink-0 text-accent mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* PDF 3 */}
              <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="size-6 text-primary" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-black">50 AI Product Prompts</h3>
                <ul className="mt-4 space-y-2">
                  {['Research & validation prompts', 'Content structuring prompts', 'First-draft writing prompts', 'Rewriting & polishing prompts', 'Marketing copy prompts', 'All work with free ChatGPT'].map(item => (
                    <li key={item} className="flex gap-2 text-xs text-muted-foreground">
                      <Check className="size-3.5 shrink-0 text-primary mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Social proof / credibility */}
        <section className="px-5 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <div className="flex items-center justify-center gap-3">
              <Users className="size-6 text-primary" />
              <h2 className="font-serif text-2xl font-black sm:text-3xl">From the creator</h2>
            </div>
            <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-border bg-secondary/30 p-6">
              <div className="flex items-center justify-center gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary text-xl font-black text-primary-foreground">D</div>
                <div className="text-left">
                  <p className="font-bold text-foreground">Daniel</p>
                  <p className="text-sm text-muted-foreground">IT Professional · Nigerian-born, based in Canada</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/90">
                I spent years stuck in &quot;research mode&quot; — watching tutorials, saving ideas, never finishing anything. These resources are the exact tools I used to finally break that cycle and publish my first digital product. I&apos;m giving them away free because I know what it feels like to be stuck at the starting line.
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA (repeat form for scrollers) */}
        <section className="bg-primary px-5 py-16 text-primary-foreground">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-2xl font-black sm:text-3xl">Ready to start? It&apos;s free.</h2>
            <p className="mx-auto mt-4 max-w-lg text-base text-primary-foreground/80">
              3 PDFs. 57 prompts. One email. Zero risk. You can unsubscribe the second after downloading if you want — no hard feelings.
            </p>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-xl border-0 bg-primary-foreground/10 px-4 py-4 text-base text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="group rounded-xl bg-accent px-6 py-4 text-base font-bold text-accent-foreground shadow-md transition hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50"
                >
                  {loading ? 'Sending…' : 'Get it free'}
                </button>
              </form>
            ) : (
              <div className="mt-8 rounded-2xl bg-background/10 p-6">
                <p className="text-lg font-bold">✓ Already downloaded! Check above for your PDFs.</p>
              </div>
            )}
          </div>
        </section>

        {/* Upsell — soft, after they've seen value */}
        <section className="px-5 py-16">
          <div className="mx-auto max-w-3xl rounded-3xl border-2 border-accent/20 bg-accent/5 p-8 text-center">
            <Sparkles className="mx-auto size-8 text-accent" />
            <h2 className="mt-4 font-serif text-2xl font-black text-foreground">Want the complete system?</h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
              The free kit shows you <strong className="text-foreground">what&apos;s possible</strong>. The 7-Day System gives you the <strong className="text-foreground">complete path</strong> — from idea selection to published product with daily checklists, launch templates, and a 30-day post-launch plan.
            </p>
            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="/#pricing"
                onClick={() => track('free_page_upsell', { target: '7-day-system' })}
                className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-accent-foreground transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Get the 7-Day System — ₦4,800 <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/100-ideas"
                onClick={() => track('free_page_upsell', { target: '100-ideas' })}
                className="text-sm font-bold text-primary hover:underline"
              >
                Or browse 100 Ideas — ₦1,999
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-5 py-10 text-center">
        <p className="font-serif font-black">Hustle Talk With Daniel</p>
        <p className="mt-2 text-sm text-muted-foreground">Practical systems for turning knowledge into finished digital products.</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm">
          <a href="/100-ideas" className="font-bold text-primary hover:underline">100 Ideas — ₦1,999</a>
          <span className="text-border">·</span>
          <a href="/#pricing" className="font-bold text-primary hover:underline">7-Day System — ₦4,800</a>
        </div>
        <p className="mt-5 text-xs text-muted-foreground">© {new Date().getFullYear()} Hustle Talk With Daniel. No specific income or overnight results are promised.</p>
      </footer>
    </div>
  )
}
