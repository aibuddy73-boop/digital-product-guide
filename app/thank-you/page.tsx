import { CheckCircle2, Download, ExternalLink, FileText, Rocket, Target, Bot, Calendar, Megaphone } from 'lucide-react'

export default function ThankYouPage() {
  // Google Drive download links - Replace these with your actual links
  const downloads = {
    mainGuide: 'https://drive.google.com/file/d/YOUR_FILE_ID_1/view?usp=sharing',
    ideaFilter: 'https://drive.google.com/file/d/YOUR_FILE_ID_2/view?usp=sharing',
    aiPrompts: 'https://drive.google.com/file/d/YOUR_FILE_ID_3/view?usp=sharing',
    launchContent: 'https://drive.google.com/file/d/YOUR_FILE_ID_4/view?usp=sharing',
    thirtyDayPlan: 'https://drive.google.com/file/d/YOUR_FILE_ID_5/view?usp=sharing',
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur-sm px-5 py-4 sticky top-0 z-50">
        <div className="mx-auto max-w-4xl">
          <a href="/" className="font-serif text-lg font-black tracking-tight text-foreground">
            HUSTLE TALK <span className="text-primary">WITH DANIEL</span>
          </a>
          <p className="mt-1 text-xs text-muted-foreground">Practical systems for finished digital products</p>
        </div>
      </header>

      <main className="px-5 py-12">
        <div className="mx-auto max-w-4xl">
          
          {/* Success Banner */}
          <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary">
                <CheckCircle2 className="size-7 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold uppercase tracking-wider text-primary">Payment confirmed</p>
                <h1 className="mt-2 font-serif text-2xl font-black sm:text-3xl">📦 Order confirmed</h1>
              </div>
            </div>
          </div>

          {/* Main Message */}
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/90">
            <h2 className="font-serif text-3xl font-black sm:text-4xl">You made the right call.</h2>
            <p>
              Most people wait until they feel ready, until the idea is perfect, until they know just a little more. You already know enough. What you needed was a system that forces you to stop preparing and start shipping — and that&apos;s exactly what&apos;s waiting for you below.
            </p>
          </div>

          {/* Email Backup Notice */}
          <div className="mt-8 rounded-xl border border-border bg-background p-6">
            <div className="flex gap-4">
              <div className="text-2xl">✉️</div>
              <div>
                <p className="font-bold text-foreground">Your download links are also in your inbox.</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Selar emailed every file the moment your payment cleared — check spam or promotions if you don&apos;t see it. Still missing? Reply to that email and we&apos;ll sort it out.
                </p>
              </div>
            </div>
          </div>

          {/* Download Section Header */}
          <div className="mt-12 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-primary">What&apos;s included in your package</p>
            <h2 className="mt-2 font-serif text-2xl font-black">5 files, everything you need</h2>
          </div>

          {/* Download Cards */}
          <div className="mt-8 space-y-4">
            
            {/* Main Guide - Featured */}
            <a
              href={downloads.mainGuide}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border-2 border-primary bg-primary/5 p-6 transition hover:border-primary hover:bg-primary/10 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <FileText className="size-7" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary">Main guide</p>
                  <h3 className="mt-1 font-serif text-xl font-black">Stop Overthinking — The 7-Day Action System</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Your day-by-day playbook from scattered idea to published, sellable product.
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-primary-foreground transition group-hover:translate-x-1">
                  <Download className="size-4" />
                  <span className="hidden sm:inline">Download</span>
                </div>
              </div>
            </a>

            {/* Bonus 1 */}
            <a
              href={downloads.ideaFilter}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-border bg-background p-6 transition hover:border-primary hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                  <Target className="size-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Bonus tool</p>
                  <h3 className="mt-1 text-lg font-black">Idea Filter + Buyer Worksheet</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Pressure-test your idea and get clear on exactly who&apos;s buying it.
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2 text-sm font-bold text-primary transition group-hover:translate-x-1">
                  <span>Open</span>
                  <ExternalLink className="size-4" />
                </div>
              </div>
            </a>

            {/* Bonus 2 */}
            <a
              href={downloads.aiPrompts}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-border bg-background p-6 transition hover:border-primary hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                  <Bot className="size-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Bonus resource</p>
                  <h3 className="mt-1 text-lg font-black">AI Digital Product Prompt Pack</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Copy-paste prompts that turn AI into your fastest production teammate.
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2 text-sm font-bold text-primary transition group-hover:translate-x-1">
                  <span>Download</span>
                  <ExternalLink className="size-4" />
                </div>
              </div>
            </a>

            {/* Bonus 3 */}
            <a
              href={downloads.launchContent}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-border bg-background p-6 transition hover:border-primary hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                  <Megaphone className="size-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Bonus resource</p>
                  <h3 className="mt-1 text-lg font-black">First Launch Content Pack</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Captions, emails and posts ready to adapt — launch week without the scramble.
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2 text-sm font-bold text-primary transition group-hover:translate-x-1">
                  <span>Download</span>
                  <ExternalLink className="size-4" />
                </div>
              </div>
            </a>

            {/* Bonus 4 */}
            <a
              href={downloads.thirtyDayPlan}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-border bg-background p-6 transition hover:border-primary hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                  <Calendar className="size-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Bonus tool</p>
                  <h3 className="mt-1 text-lg font-black">First 30 Days After Launch Plan</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    A day-by-day tracker so momentum doesn&apos;t stall after you hit publish.
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2 text-sm font-bold text-primary transition group-hover:translate-x-1">
                  <span>Open</span>
                  <ExternalLink className="size-4" />
                </div>
              </div>
            </a>

          </div>

          {/* Next Steps Section */}
          <div className="mt-16 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 p-8 sm:p-10">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-primary">Before you close this tab</p>
              <h2 className="mt-2 font-serif text-2xl font-black">Your next 24 hours</h2>
            </div>
            
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary font-serif text-xl font-black text-primary-foreground">
                  1
                </div>
                <div className="flex-1 pt-2">
                  <p className="font-bold text-foreground">Tonight</p>
                  <p className="mt-1 text-muted-foreground">
                    Open the guide and read the Day 1 section only. Nothing else, yet.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary font-serif text-xl font-black text-primary-foreground">
                  2
                </div>
                <div className="flex-1 pt-2">
                  <p className="font-bold text-foreground">Before bed</p>
                  <p className="mt-1 text-muted-foreground">
                    Run the Idea Filter on one idea you already have. Write down the single useful result it gives someone.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary font-serif text-xl font-black text-primary-foreground">
                  3
                </div>
                <div className="flex-1 pt-2">
                  <p className="font-bold text-foreground">Tomorrow morning</p>
                  <p className="mt-1 text-muted-foreground">
                    Begin Day 1 properly. Choose the idea and stop second-guessing it. Day 2 comes next, not tonight.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Message */}
          <div className="mt-12 space-y-6 text-center">
            <p className="text-lg leading-relaxed text-foreground/90">
              The difference between people who finish and people who don&apos;t isn&apos;t talent or knowledge — it&apos;s showing up for seven days and following the daily action, even when it&apos;s uncomfortable. You paid for the system. Now trust the system.
            </p>
            
            <div className="pt-6">
              <p className="font-serif text-2xl font-black text-foreground">Daniel</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Hustle Talk With Daniel — turning knowledge into finished digital products
              </p>
              <a 
                href="mailto:support@hustletalkwithdaniel.com" 
                className="mt-4 inline-block text-sm font-bold text-primary hover:underline"
              >
                Need help? Contact support →
              </a>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-border bg-secondary/30 px-5 py-10 text-center">
        <p className="font-serif font-black text-foreground">Hustle Talk With Daniel</p>
        <p className="mt-2 text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved. No specific income or overnight results are promised.
        </p>
      </footer>
    </div>
  )
}
