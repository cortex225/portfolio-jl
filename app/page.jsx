import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Work from '@/components/Work'
import Cta from '@/components/Cta'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  description:
    'Jean-Luc Gouaho, full-stack developer in Quebec. React, Next.js, .NET and PostgreSQL. Projects: Budget Buddy, LeadMapper, PlayerConnect.',
  path: '/'
})

export default function Home () {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Work />
      <Cta />
    </>
  )
}
