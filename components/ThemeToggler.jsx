'use client'

import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

import { Button } from './ui/button'

const ThemeToggler = () => {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant='outline'
      size='icon'
      aria-label='Toggle dark mode'
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' aria-hidden='true' />
      <MoonIcon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' aria-hidden='true' />
    </Button>
  )
}

export default ThemeToggler
