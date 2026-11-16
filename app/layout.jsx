import { Outfit } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import { profile } from '@/data/profile'

const outfit = Outfit({ subsets: ['latin'], display: 'swap' })

const siteDescription =
  'Jean-Luc Gouaho, full-stack developer in Quebec. React, Next.js, .NET and PostgreSQL. Projects: Budget Buddy, LeadMapper, PlayerConnect.'

// Rebuild pages daily so the footer year and years of experience stay current.
export const revalidate = 86400

export const metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: 'Jean-Luc Gouaho - Full-stack developer',
    template: '%s - Jean-Luc Gouaho'
  },
  description: siteDescription,
  twitter: { card: 'summary_large_image' }
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
          <a
            href='#main'
            className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground'
          >
            Skip to content
          </a>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
