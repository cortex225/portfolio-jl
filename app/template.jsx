'use client'

import { MotionConfig } from 'framer-motion'

import useScrollProgress from '@/hooks/useScrollProgress'

// No page fade-in: content is visible on first paint and without JavaScript.
const Template = ({ children }) => {
  const completion = useScrollProgress()
  return (
    <MotionConfig reducedMotion='user'>
      <main id='main'>{children}</main>
      <span
        aria-hidden='true'
        style={{ transform: `translateY(${completion - 100}%)` }}
        className='fixed bottom-0 right-0 top-0 z-50 w-1 bg-primary transition-transform duration-300'
      />
    </MotionConfig>
  )
}

export default Template
