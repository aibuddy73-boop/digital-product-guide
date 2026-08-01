import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Lato, Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
})

export const metadata: Metadata = {
  title: 'Stop Overthinking — The 7-Day Action System | Hustle Talk With Daniel',
  description:
    'Turn one idea into your first published digital product in 7 days using AI. A practical, honest execution system for Nigerian creators, workers, students and side-hustlers.',
  generator: 'v0.app',
  openGraph: {
    title: 'Stop Overthinking — Build and Launch in 7 Days',
    description: 'A practical AI-assisted action system for turning one useful idea into your first published digital product.',
    type: 'website',
    images: [{ url: '/images/social-share.png', width: 1200, height: 630, alt: 'Stop Overthinking by Hustle Talk With Daniel' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stop Overthinking — Build and Launch in 7 Days',
    description: 'Turn one useful idea into your first published digital product.',
    images: ['/images/social-share.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#2563eb',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${roboto.variable} ${lato.variable}`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
