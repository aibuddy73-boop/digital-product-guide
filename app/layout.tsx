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
  alternates: {
    canonical: 'https://digital-product-guide-tau.vercel.app/',
  },
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Stop Overthinking: The 7-Day Action System",
              "description": "Turn one idea into your first published digital product in 7 days using AI. A practical, honest execution system for Nigerian creators, workers, students and side-hustlers.",
              "brand": { "@type": "Organization", "name": "Hustle Talk With Daniel" },
              "offers": {
                "@type": "Offer",
                "url": "https://digital-product-guide-tau.vercel.app/",
                "priceCurrency": "NGN",
                "price": "4800",
                "availability": "https://schema.org/InStock"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {"@type":"Question","name":"Can I use the free version of ChatGPT?","acceptedAnswer":{"@type":"Answer","text":"Yes. The prompts and workflow work with free ChatGPT. A paid AI plan is not required."}},
                {"@type":"Question","name":"What if I cannot complete it in exactly seven consecutive days?","acceptedAnswer":{"@type":"Answer","text":"Use the seven days as focused work sessions. If life interrupts, pause and continue with the next day rather than quitting."}},
                {"@type":"Question","name":"Do I need business or technical experience?","acceptedAnswer":{"@type":"Answer","text":"No. The system is designed for beginners and explains each action in plain language."}},
                {"@type":"Question","name":"What kind of digital product can I create?","acceptedAnswer":{"@type":"Answer","text":"An ebook, guide, checklist, template, workbook, mini-course outline, or another simple knowledge-based product."}},
                {"@type":"Question","name":"Will this guarantee that I make money?","acceptedAnswer":{"@type":"Answer","text":"No. Income depends on your offer, audience, execution and market. The guide gives you a process for creating and launching, not an income guarantee."}},
                {"@type":"Question","name":"What format do I get?","acceptedAnswer":{"@type":"Answer","text":"A downloadable PDF you can read on any phone, tablet, or computer. If you prefer an e-reader format like EPUB, free tools like Calibre can convert the PDF in seconds."}},
                {"@type":"Question","name":"How will I receive the guide?","acceptedAnswer":{"@type":"Answer","text":"After a successful purchase through Selar, your digital files are delivered through the checkout platform."}},
                {"@type":"Question","name":"Can I use this outside Nigeria?","acceptedAnswer":{"@type":"Answer","text":"Yes. The principles work internationally. Selar may show locally available payment options based on your location."}},
                {"@type":"Question","name":"Is payment secure?","acceptedAnswer":{"@type":"Answer","text":"Checkout is handled by Selar. This page does not collect or store your payment card details."}},
                {"@type":"Question","name":"What if I get stuck?","acceptedAnswer":{"@type":"Answer","text":"Return to the checklist for the current day, complete the smallest next action, and use the included prompts to work through the block."}}
              ]
            })
          }}
        />
      </head>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
