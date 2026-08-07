import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free: AI Side Hustle Starter Kit + 57 Prompts | Hustle Talk With Daniel',
  description:
    'Download 3 free PDFs: the AI Side Hustle Starter Kit, 7 prompts to finish your first eBook, and 50 prompts that turn ideas into digital products. No paid tools required — works with free ChatGPT.',
  openGraph: {
    title: 'Free: AI Side Hustle Starter Kit + 57 Prompts',
    description: 'The exact framework for picking a profitable AI-powered side hustle. 3 free PDFs, 57 prompts. No catch.',
    type: 'website',
    images: [{ url: '/images/social-share.png', width: 1200, height: 630, alt: 'AI Side Hustle Starter Kit by Hustle Talk With Daniel' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free: AI Side Hustle Starter Kit + 57 Prompts',
    description: 'Pick your profitable AI side hustle in one session. 3 free PDFs, 57 ready-to-use prompts. No paid tools needed.',
    images: ['/images/social-share.png'],
  },
}

export default function FreeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
