import { Outfit } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: "jlgouaho's portfolio",
  description: 'Modern & Minimalist portfolio'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={outfit.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          {children}
          <SpeedInsights />
          <Analytics />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
