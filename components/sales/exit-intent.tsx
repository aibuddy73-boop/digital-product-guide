'use client'

import { useState, useEffect, useCallback } from 'react'
import { X, Download } from 'lucide-react'
import { track } from '@vercel/analytics'

export function ExitIntent() {
  const [show, setShow] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && !show) {
      setShow(true)
      track('exit_intent_shown')
    }
  }, [show])

  useEffect(() => {
    // Desktop only, show once per session
    if (window.innerWidth < 768) return
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave)
    }, 5000) // Wait 5s before arming
    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [handleMouseLeave])

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
      track('exit_intent_submit', { email_provided: 'yes' })
      setSubmitted(true)
    } catch {
      // Fail silently — still show download
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" role="dialog" aria-modal="true">
      <div className="relative w-full max-w-md rounded-3xl bg-background p-7 shadow-2xl sm:p-9">
        <button
          onClick={() => setShow(false)}
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground transition hover:bg-secondary hover:text-foreground"
          aria-label="Close"
        >
          <X className="size-5" />
        </button>

        {!submitted ? (
          <>
            <div className="flex size-14 items-center justify-center rounded-full bg-primary/10">
              <Download className="size-7 text-primary" />
            </div>
            <h2 className="mt-5 font-serif text-2xl font-black text-foreground">Before you go —</h2>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Grab the <strong className="text-foreground">AI Side Hustle Starter Kit</strong> free. The exact framework for picking a profitable AI-powered side hustle.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-accent px-6 py-3 text-sm font-bold text-accent-foreground transition hover:-translate-y-0.5 hover:shadow-md disabled:opacity-50"
              >
                {loading ? 'Sending…' : 'Send it free'}
              </button>
            </form>
            <p className="mt-3 text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-accent/10">
              <Download className="size-7 text-accent" />
            </div>
            <h2 className="mt-5 font-serif text-2xl font-black text-foreground">It&apos;s yours!</h2>
            <p className="mt-3 text-base text-muted-foreground">Download your free AI Side Hustle Starter Kit below.</p>
            <a
              href="https://drive.google.com/file/d/1Xj8FhYVRTsHQ1d4uSwj_bWv9QdtlSSRw/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-accent-foreground transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <Download className="size-4" /> Download PDF
            </a>
            <button onClick={() => setShow(false)} className="mt-4 block w-full text-sm text-muted-foreground hover:text-foreground">
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
