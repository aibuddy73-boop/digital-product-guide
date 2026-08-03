import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-background px-5 py-4">
        <div className="mx-auto max-w-3xl">
          <a href="/" className="font-serif text-lg font-black tracking-tight text-foreground">
            HUSTLE TALK <span className="text-primary">WITH DANIEL</span>
          </a>
        </div>
      </header>

      <main className="px-5 py-12">
        <div className="mx-auto max-w-3xl">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="flex size-20 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="size-12 text-primary" />
            </div>
          </div>

          {/* Main Message */}
          <div className="mt-8 text-center">
            <h1 className="font-serif text-3xl font-black sm:text-4xl">You made the right call.</h1>
          </div>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/90">
            <p>
              Most people keep waiting until they feel ready. Until the idea is perfect. Until they know just a little more.
            </p>
            <p>
              You already know enough. What you needed was a system that forces you to stop preparing and start shipping. That is exactly what you just got.
            </p>
            <p>
              The guide is ready below. Every bonus is included. Everything you need to go from scattered idea to published product in seven focused days.
            </p>
            <p className="font-bold">Let&apos;s get you moving.</p>
          </div>

          {/* Download Section */}
          <div className="mt-12">
            <h2 className="text-center font-serif text-2xl font-black">Download Your Files</h2>
            
            <div className="mt-8 rounded-3xl border-2 border-primary bg-primary/5 p-8 text-center">
              <p className="text-xl font-bold text-foreground">Your download links have been sent to your email</p>
              <p className="mt-4 text-muted-foreground">
                Check your inbox (and spam folder) for an email from Selar with your download links. 
                The email was sent immediately after your payment was confirmed.
              </p>
              <div className="mt-6 rounded-xl bg-background p-6">
                <p className="text-sm font-bold text-foreground">Can&apos;t find the email?</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Check your spam/junk folder, or contact support with your order confirmation.
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <details className="group rounded-xl border border-border bg-background p-6">
                <summary className="cursor-pointer font-bold text-foreground">📦 What&apos;s Included in Your Package</summary>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />
                    Stop Overthinking — The 7-Day Action System (Main Guide)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />
                    Idea Filter + Buyer Worksheet
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />
                    AI Digital Product Prompt Pack
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />
                    First Launch Content Pack
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-primary" />
                    First 30 Days After Launch Plan
                  </li>
                </ul>
              </details>
            </div>

            <div className="mt-6 space-y-2 text-center text-sm text-muted-foreground">
              <p className="font-bold">Once you download your files, save them to your phone or computer.</p>
            </div>
          </div>

          {/* Start Here Section */}
          <div className="mt-16 rounded-3xl bg-secondary p-8 sm:p-10">
            <h2 className="font-serif text-2xl font-black">Start Here — Your Next 24 Hours</h2>
            
            <div className="mt-6 space-y-4">
              <div className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">1</div>
                <div>
                  <p className="font-bold">Tonight:</p>
                  <p className="text-muted-foreground">Open the guide. Read the Day 1 section only.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">2</div>
                <div>
                  <p className="font-bold">Before bed:</p>
                  <p className="text-muted-foreground">Run the Idea Filter on one idea you already have. Write down the single useful result it gives someone.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">3</div>
                <div>
                  <p className="font-bold">Tomorrow morning:</p>
                  <p className="text-muted-foreground">Begin Day 1 properly. Choose the idea and stop second-guessing it. Day 2 (defining your buyer) comes next, not tonight.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Message */}
          <div className="mt-12 space-y-5 text-center text-lg leading-relaxed text-foreground/90">
            <p>
              The difference between people who finish and people who don&apos;t is not talent or knowledge. It is showing up for seven days and following the daily action even when it feels uncomfortable.
            </p>
            <p className="font-bold">You paid for the system. Now trust the system.</p>
            <p className="mt-8 font-serif text-xl font-black">Daniel</p>
          </div>
        </div>
      </main>

      <footer className="border-t border-border px-5 py-10 text-center">
        <p className="font-serif font-black">Hustle Talk With Daniel</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Practical systems for turning knowledge into finished digital products.
        </p>
      </footer>
    </div>
  )
}
