'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import ThemeToggler from './ThemeToggler'
import Logo from './Logo'
import Nav from './Nav'
import MobileNav from './MobileNav'

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const background = scrolled
    ? 'py-4 bg-white shadow-lg dark:bg-secondary'
    : `py-6 ${pathname === '/' ? 'bg-[#fef9f5]' : 'bg-background'} dark:bg-background`

  return (
    <header className={`sticky top-0 z-30 transition-all ${background}`}>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between'>
          <Logo />
          <div className='flex items-center gap-x-6'>
            <Nav
              containerStyles='hidden xl:flex gap-x-8 items-center'
              linkStyles='relative hover:text-primary transition-colors'
              underLineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'
            />
            <ThemeToggler />
            <div className='xl:hidden'>
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
