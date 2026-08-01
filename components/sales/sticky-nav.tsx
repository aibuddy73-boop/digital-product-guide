'use client'

import { useEffect, useState } from 'react'

const links = [['story', 'Story'], ['inside', "What’s Inside"], ['audience', "Who It’s For"], ['pricing', 'Pricing'], ['faq', 'FAQ']]

export function StickyNav() {
  const [active, setActive] = useState('story')
  useEffect(() => {
    const sections = links.map(([id]) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: '-35% 0px -55%' })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])
  return <nav aria-label="Page sections" className="sticky top-0 z-40 hidden border-y border-border bg-background/95 backdrop-blur md:block"><div className="mx-auto flex max-w-5xl items-center justify-center gap-1 px-6">{links.map(([id, label]) => <a key={id} href={`#${id}`} className={`border-b-2 px-5 py-4 text-sm font-bold transition ${active === id ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}>{label}</a>)}</div></nav>
}
