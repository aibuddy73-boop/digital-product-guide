'use client'

import { useState } from 'react'
import { ArrowRight, Check, Download, FileText, Sparkles } from 'lucide-react'
import { track } from '@vercel/analytics'

const benefits = [
  'Discover which AI-powered side hustles actually work in 2026',
  'Find your highest-potential idea without weeks of research',
  'Get a clear first-step action plan — not vague motivation',
]

const FREE_PDFS = [
  { name: 'AI Side Hustle Starter Kit', url: 'https://drive.google.com/file/d/1Xj8FhYVRTsHQ1d4uSwj_bWv9QdtlSSRw/view?usp=sharing', primary: true },
  { name: '7 AI Prompts That Help You Finish Your First eBook', url: 'https://drive.google.com/file/d/1lXgbmbJQD_O0xnB6FOt6xN1yraqJHjzg/view?usp=sharing', primary: false },
  { name: '50 AI Prompts That Turn Ideas Into Digital Products', url: 'https://drive.google.com/file/d/14O3b-63lxflXNOMl_VwwN53-dqCR9gbk/view?usp=sharing', primary: false },
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
            View 7-Day System
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-5 py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          {/* Left — copy */}
          <div>
            <p className="inline-flex rounded-full bg-accent px-4 py-2 text-xs font-bold uppercase tracking-widest text-accent-foreground">
              100% Free — No catch
            </p>
            <h1 className="mt-5 font-serif text-3xl font-black leading-tight text-foreground sm:text-4xl lg:text-5xl">
              AI Side Hustle Starter Kit
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              The exact framework for picking a profitable AI-powered side hustle — even if you have no tech skills, no audience, and limited time.
            </p>
            <ul className="mt-6 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex gap-3 text-sm sm:text-base">
                  <Check className="size-5 shrink-0 text-primary" />
                  <span className="text-foreground/90">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form or download */}
          <div className="rounded-3xl border-2 border-border bg-secondary/30 p-7 shadow-lg sm:p-8">
            {!submitted ? (
              <>
                <div className="flex items-center gap-3">
                  <FileText className="size-6 text-primary" />
                  <p className="font-bold text-foreground">Enter your email to get instant access</p>
                </div>
                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
                  <input
                    type="email"
                    required
                    placeholder="Your best email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground transition hover:-translate-y-0.5 hover:shadow-md disabled:opacity-50"
                  >
                    {loading ? 'Sending…' : 'Get My Free Starter Kit'}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  Free PDF. No spam. Unsubscribe anytime.
                </p>
              </>
            ) : (
              <div className="text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent/10">
                  <Download className="size-7 text-accent" />
                </div>
                <h2 className="mt-4 font-serif text-xl font-black">Your downloads are ready!</h2>
                <p className="mt-2 text-sm text-muted-foreground">Click below to download each PDF.</p>
                <div className="mt-6 flex flex-col gap-3">
                  {FREE_PDFS.map((pdf) => (
                    <a
                      key={pdf.name}
                      href={pdf.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => track('free_pdf_download', { name: pdf.name })}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:shadow-md ${
                        pdf.primary
                          ? 'border-accent bg-accent text-accent-foreground'
                          : 'border-border bg-background text-foreground hover:border-primary'
                      }`}
                    >
                      <Download className="size-4 shrink-0" />
                      {pdf.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Upsell after form */}
        <div className="mt-16 rounded-3xl border-2 border-accent/20 bg-accent/5 p-8 text-center">
          <Sparkles className="mx-auto size-8 text-accent" />
          <h2 className="mt-4 font-serif text-2xl font-black text-foreground">Ready to go further?</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
            The free kit gives you the starting point. The <strong className="text-foreground">7-Day System</strong> gives you the complete path — from idea to published product, step by step.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
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
              Or start with 100 Ideas — ₦1,999
            </a>
          </div>
        </div>
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
