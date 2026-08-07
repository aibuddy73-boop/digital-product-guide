'use client'

import { ArrowRight, Bot, Check, ChevronDown, Clock3, FileText, Lightbulb, Lock, ShieldCheck, Sparkles, Target, Users, Zap } from 'lucide-react'
import { track } from '@vercel/analytics'

// TODO: Update with the actual Selar URL for the 100 Ideas product
const CHECKOUT_URL = 'https://selar.com/digital_product'

const categories = [
  ['📚', 'Ebooks & Guides'],
  ['📋', 'Templates & Worksheets'],
  ['🤖', 'AI Prompt Packs'],
  ['🎓', 'Mini-Courses'],
  ['🖨️', 'Printables'],
  ['📝', 'Notion Templates'],
  ['✅', 'Checklists & Planners'],
  ['📁', 'Swipe Files'],
  ['💡', 'Coaching Frameworks'],
  ['🎨', 'Creative Assets'],
]

const sampleIdeas = [
  { niche: 'Freelancing', idea: '"First 30 Days" checklist for new freelancers', format: 'PDF Template' },
  { niche: 'Health', idea: 'AI-generated meal prep planner for busy professionals', format: 'Notion Template' },
  { niche: 'Business', idea: 'Social media caption swipe file — 50 fill-in-the-blank captions', format: 'Swipe File' },
  { niche: 'Service Providers', idea: 'Client onboarding email sequence template', format: 'Email Templates' },
  { niche: 'Finance (Nigeria)', idea: 'Budgeting tracker designed for Nigerian salary earners', format: 'Google Sheets' },
  { niche: 'Parenting', idea: 'Baby milestone tracker + photo journal prompts', format: 'Printable PDF' },
  { niche: 'Tech', idea: '"Learn to code in 30 days" daily challenge workbook', format: 'Ebook' },
  { niche: 'Creativity', idea: '100 content ideas for Instagram Reels in any niche', format: 'Swipe File' },
]

const faqs: [string, string][] = [
  ['Is this the same as the 7-Day System?', 'No. The 7-Day System is a complete step-by-step execution guide that walks you through building AND launching a product in 7 days. This PDF is just the ideas — perfect if you know how to create but need inspiration for WHAT to create. They complement each other: use this list to pick your idea, then use the 7-Day System to build it.'],
  ['Can I use free ChatGPT with these ideas?', 'Yes. Every idea is designed to be buildable with free AI tools. No paid subscriptions required. Each idea includes a note on which AI approach works best.'],
  ['What if I already bought the 7-Day System?', 'The 7-Day System includes the Idea Filter bonus which helps you pick from your OWN ideas. This list gives you 100 pre-validated EXTERNAL ideas. If you\'re stuck on "what should I create," this gives you the answer immediately.'],
  ['What format is the PDF?', 'A clean, organized PDF you can read on any device — phone, tablet, or computer. Ideas are grouped by category with brief notes on target audience, format, and AI creation tips.'],
  ['Is this just a random brainstorm list?', 'No. Every idea was validated against real market demand — meaning people are already buying similar products. These aren\'t wishful thinking; they\'re proven formats in proven niches.'],
  ['Can I use these ideas if I\'m not in Nigeria?', 'Absolutely. While some ideas reference Nigerian contexts (like salary budgeting), 90%+ of the ideas work internationally. Digital products are global by nature.'],
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
            View 7-Day System →
          </a>
        </div>
      </header>

      <main>
        {/* ═══════════ HERO ═══════════ */}
        <section className="overflow-hidden bg-secondary/60 px-5 py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="inline-flex rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground">
                Skip the brainstorming — just pick one
              </p>
              <h1 className="mt-5 font-serif text-3xl font-black leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                100 Digital Product Ideas You Can Create With AI
              </h1>
              <p className="mt-5 max-w-xl text-base font-bold leading-relaxed text-foreground sm:text-lg">
                Stop wondering &quot;what should I create?&quot; — pick from 100 validated ideas, organized by niche, and build your first product this week.
              </p>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                Every idea is tested against real market demand. Each one includes the target audience, recommended format, and how to build it with free AI tools.
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

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {([
                  [FileText, '100 ideas'],
                  [Bot, 'Free AI tools'],
                  [Target, '10+ niches'],
                  [Clock3, '10-min to pick'],
                ] as const).map(([Icon, text]) => (
                  <div key={text} className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                    <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                    {text}
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm text-muted-foreground">
                Want a free taste first? <a href="/free/ai-side-hustle-starter-kit" className="font-bold text-primary hover:underline">Get the free Starter Kit →</a>
              </p>
            </div>

            {/* Right — product preview card */}
            <div className="relative mx-auto w-full max-w-sm">
              <div className="rounded-3xl border-2 border-primary/20 bg-background p-8 shadow-2xl">
                <div className="flex size-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Lightbulb className="size-8 text-primary" />
                </div>
                <h3 className="mt-5 font-serif text-xl font-black">Inside the PDF</h3>
                <ul className="mt-5 space-y-3">
                  {[
                    '100 validated product ideas',
                    'Organized by 10+ niches',
                    'Target audience for each idea',
                    'Recommended format (ebook, template, etc.)',
                    'AI creation tips per idea',
                    'Difficulty rating (beginner → advanced)',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm">
                      <Check className="size-4 shrink-0 text-primary mt-0.5" />
                      <span className="text-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-xl bg-accent/10 p-4 text-center">
                  <p className="text-sm text-muted-foreground">One-time payment</p>
                  <p className="font-serif text-3xl font-black text-foreground">₦1,999</p>
                  <p className="text-xs text-muted-foreground">Instant PDF download</p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -right-2 -top-3 rounded-full bg-accent px-4 py-2 text-xs font-bold text-accent-foreground shadow-lg">
                Bestseller
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ THE PROBLEM ═══════════ */}
        <section className="px-5 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-serif text-2xl font-black sm:text-3xl">The biggest reason people never start</h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/90">
              <p>
                It&apos;s not laziness. It&apos;s not a lack of skill. It&apos;s the <strong className="text-accent">paralysis of &quot;what should I make?&quot;</strong>
              </p>
              <div className="rounded-xl border-l-4 border-accent bg-secondary/50 p-5">
                <p className="italic text-muted-foreground">
                  &quot;I know I could create a digital product… but I&apos;ve spent weeks trying to figure out the right idea. Nothing feels original enough, profitable enough, or easy enough to start.&quot;
                </p>
              </div>
              <p>
                Sound familiar? You&apos;re not alone. <strong>The idea stage is where 80% of aspiring creators get permanently stuck.</strong> Not because good ideas don&apos;t exist — but because there are too many options and no way to tell which ones actually sell.
              </p>
              <p>
                This list solves that problem in <strong className="text-accent">10 minutes</strong>. Scan the categories. Find your niche. Pick an idea that matches your skills. Done. No more brainstorming, no more second-guessing, no more &quot;I&apos;ll figure it out eventually.&quot;
              </p>
            </div>
          </div>
        </section>

        {/* ═══════════ CATEGORIES ═══════════ */}
        <section className="bg-secondary/30 px-5 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-primary">Organized for fast decisions</p>
              <h2 className="mt-3 font-serif text-2xl font-black sm:text-3xl">Ideas across 10+ categories</h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
                Every idea is grouped by format so you can jump straight to what fits your skills.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {categories.map(([emoji, name]) => (
                <div key={name} className="flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground transition hover:border-primary hover:shadow-sm">
                  <span className="text-lg">{emoji}</span>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ SAMPLE IDEAS (SNEAK PEEK) ═══════════ */}
        <section className="px-5 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-primary">Sneak peek</p>
              <h2 className="mt-3 font-serif text-2xl font-black sm:text-3xl">8 of 100 ideas inside</h2>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {sampleIdeas.map((item, i) => (
                <div key={i} className="flex gap-4 rounded-xl border border-border bg-background p-4 transition hover:border-primary hover:shadow-sm">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-foreground">{item.idea}</p>
                    <div className="mt-1.5 flex flex-wrap gap-2">
                      <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">{item.niche}</span>
                      <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">{item.format}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-4 rounded-xl border-2 border-dashed border-primary/30 bg-primary/5 p-5 text-center">
              <Sparkles className="mx-auto size-6 text-primary" />
              <p className="text-sm font-bold text-primary sm:text-base">+ 92 more validated ideas inside the full PDF</p>
            </div>
          </div>
        </section>

        {/* ═══════════ WHY THIS LIST IS DIFFERENT ═══════════ */}
        <section className="bg-secondary/30 px-5 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-primary">Not another random list</p>
              <h2 className="mt-3 font-serif text-2xl font-black sm:text-3xl">Why these ideas actually work</h2>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {([
                [Target, 'Market-validated', 'Every idea is based on what people are already buying — not random brainstorming.'],
                [Bot, 'AI-build friendly', 'Each idea includes tips on creating it with free ChatGPT. No paid tools needed.'],
                [Users, 'Audience defined', 'Each idea tells you exactly who would buy it — no guessing your market.'],
                [Zap, 'Beginner-ready', 'Difficulty ratings help you pick ideas that match your current skill level.'],
              ] as const).map(([Icon, title, desc]) => (
                <div key={title} className="rounded-2xl border border-border bg-background p-6 transition hover:-translate-y-1 hover:shadow-lg">
                  <Icon className="size-8 text-primary" />
                  <h3 className="mt-4 text-base font-black text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ WHO IT'S FOR ═══════════ */}
        <section className="px-5 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-serif text-2xl font-black sm:text-3xl">This is for you if…</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'You\'ve been stuck on "what to create" for weeks or months',
                'You want a side income but don\'t know what product to build',
                'You have skills people would pay for — but haven\'t packaged them yet',
                'You want ideas you can build with FREE AI tools, not expensive software',
                'You\'re looking for something you can start and finish THIS WEEK',
                'You want proven formats, not experiments that might fail',
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-xl border border-border bg-background p-4">
                  <Check className="size-5 shrink-0 text-accent mt-0.5" />
                  <p className="text-sm leading-relaxed text-foreground/90">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ PRICING ═══════════ */}
        <section id="pricing" className="scroll-mt-24 bg-primary px-5 py-20 text-primary-foreground">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-widest text-primary-foreground/70">One payment, instant access</p>
              <h2 className="mt-3 font-serif text-3xl font-black sm:text-4xl">Get all 100 ideas today</h2>
            </div>
            <div className="mt-10 overflow-hidden rounded-3xl bg-background text-foreground shadow-2xl">
              <div className="p-7 sm:p-10">
                <ul className="flex flex-col gap-4">
                  {[
                    ['100 validated digital product ideas', ''],
                    ['Organized across 10+ categories', ''],
                    ['Target audience for each idea', ''],
                    ['AI creation tips per idea', ''],
                    ['Difficulty ratings (beginner → advanced)', ''],
                    ['Recommended format & pricing suggestions', ''],
                  ].map(([name]) => (
                    <li key={name} className="flex items-center gap-4 border-b border-border pb-4">
                      <Check className="size-5 shrink-0 text-primary" />
                      <span className="font-bold">{name}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 text-center">
                  <p className="font-serif text-5xl font-black sm:text-6xl">₦1,999</p>
                  <p className="mt-2 text-sm text-muted-foreground">One-time payment · Instant PDF download</p>
                  <div className="mt-7">
                    <a
                      href={CHECKOUT_URL}
                      onClick={() => track('cta_click', { placement: '100-ideas-pricing' })}
                      className="group inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-accent px-7 py-4 text-base font-bold text-accent-foreground shadow-md transition hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
                    >
                      Get 100 Ideas Now <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                  <div className="mt-5 flex items-center justify-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Lock className="size-3" /> Secure checkout</span>
                    <span className="flex items-center gap-1"><ShieldCheck className="size-3" /> Instant delivery</span>
                  </div>
                </div>
              </div>
              <div className="bg-accent px-6 py-4 text-center">
                <p className="font-bold text-accent-foreground">Less than the cost of one coffee date — and it could be the start of your first ₦50,000+ month.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ COMPARISON (vs doing nothing) ═══════════ */}
        <section className="px-5 py-16">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-serif text-2xl font-black sm:text-3xl">Two paths from here</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border-2 border-border bg-secondary/20 p-6">
                <h3 className="text-lg font-black text-muted-foreground">Without this list</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    'Spend another week brainstorming',
                    'Second-guess every idea',
                    'Watch more "what to sell online" videos',
                    'End up with nothing published — again',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="shrink-0 text-destructive">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-accent/30 bg-accent/5 p-6">
                <h3 className="text-lg font-black text-foreground">With this list</h3>
                <ul className="mt-4 space-y-3">
                  {[
                    'Pick a validated idea in 10 minutes',
                    'Know exactly who will buy it',
                    'Start creating TODAY with free AI tools',
                    'Have a product live within days, not months',
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-foreground">
                      <span className="shrink-0 text-accent font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════ UPSELL TO 7-DAY SYSTEM ═══════════ */}
        <section className="bg-secondary/30 px-5 py-16">
          <div className="mx-auto max-w-3xl rounded-3xl border-2 border-primary/20 bg-background p-8 text-center shadow-lg">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Go from idea to launched product</p>
            <h2 className="mt-3 font-serif text-2xl font-black text-foreground sm:text-3xl">
              Want the complete execution system?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
              This list tells you <strong className="text-foreground">what</strong> to build. The 7-Day System shows you <strong className="text-foreground">how</strong> — with daily checklists, AI prompts, launch templates, and a 30-day post-launch plan. Everything you need to go from &quot;I picked an idea&quot; to &quot;it&apos;s live and selling.&quot;
            </p>
            <ul className="mx-auto mt-6 flex max-w-sm flex-col gap-2 text-left">
              {['Complete 7-day execution guide', 'Idea Filter + Buyer Worksheet', 'AI Prompt Pack (50+ prompts)', 'Launch Content Templates', '30-Day Post-Launch Plan'].map((item) => (
                <li key={item} className="flex gap-3 text-sm">
                  <Check className="size-4 shrink-0 text-primary" />
                  <span className="text-foreground/90">{item}</span>
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

        {/* ═══════════ FAQ ═══════════ */}
        <section className="px-5 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-serif text-2xl font-black sm:text-3xl">Questions before you buy</h2>
            <div className="mt-8 flex flex-col gap-3">
              {faqs.map(([q, a]) => (
                <details key={q} className="group rounded-2xl border border-border bg-background p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-foreground">
                    {q}
                    <ChevronDown className="size-5 shrink-0 transition group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════ FINAL CTA ═══════════ */}
        <section className="px-5 py-16 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-serif text-2xl font-black text-foreground sm:text-3xl">
              Stop brainstorming. Start building.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
              100 ideas. 10+ niches. Every one validated against real demand. Pick yours in 10 minutes and start creating today.
            </p>
            <div className="mt-8">
              <a
                href={CHECKOUT_URL}
                onClick={() => track('cta_click', { placement: '100-ideas-closing' })}
                className="group inline-flex min-h-14 items-center justify-center gap-2 rounded-xl bg-accent px-7 py-4 text-base font-bold text-accent-foreground shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Get 100 Ideas — ₦1,999 <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Secure checkout on Selar · Instant PDF download</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border px-5 py-10 text-center">
        <p className="font-serif font-black">Hustle Talk With Daniel</p>
        <p className="mt-2 text-sm text-muted-foreground">Practical systems for turning knowledge into finished digital products.</p>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm">
          <a href="/free/ai-side-hustle-starter-kit" className="font-bold text-primary hover:underline">Free Starter Kit</a>
          <span className="text-border">·</span>
          <a href="/#pricing" className="font-bold text-primary hover:underline">7-Day System — ₦4,800</a>
        </div>
        <p className="mt-5 text-xs text-muted-foreground">© {new Date().getFullYear()} Hustle Talk With Daniel. No specific income or overnight results are promised.</p>
      </footer>
    </div>
  )
}
