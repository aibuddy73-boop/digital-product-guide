import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '100 Digital Product Ideas You Can Create With AI — ₦1,999 | Hustle Talk With Daniel',
  description:
    'Stop wondering "what should I create?" 100 validated digital product ideas organized by niche. Every idea includes target audience, format, and AI creation tips. Works with free ChatGPT.',
  openGraph: {
    title: '100 Digital Product Ideas You Can Create With AI',
    description: 'Pick a validated product idea in 10 minutes. 100 ideas across 10+ niches, organized for fast decisions. Just ₦1,999.',
    type: 'website',
    images: [{ url: '/images/social-share.png', width: 1200, height: 630, alt: '100 Digital Product Ideas by Hustle Talk With Daniel' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '100 Digital Product Ideas You Can Create With AI',
    description: 'Stop brainstorming. Start building. 100 validated ideas organized by niche. ₦1,999 on Selar.',
    images: ['/images/social-share.png'],
  },
}

export default function IdeasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
