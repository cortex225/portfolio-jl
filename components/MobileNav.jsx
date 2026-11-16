'use client'

import { useState } from 'react'
import { AlignJustify } from 'lucide-react'

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { Button } from './ui/button'
import Nav from './Nav'
import Logo from './Logo'
import Socials from './Socials'

const MobileNav = () => {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant='ghost' size='icon' aria-label='Open menu'>
          <AlignJustify aria-hidden='true' />
        </Button>
      </SheetTrigger>
      <SheetContent aria-describedby={undefined}>
        <SheetTitle className='sr-only'>Menu</SheetTitle>
        <div className='flex h-full flex-col items-center justify-between py-8'>
          <div className='flex flex-col items-center gap-y-32'>
            <Logo />
            <Nav
              containerStyles='flex flex-col items-center gap-y-8'
              linkStyles='text-2xl hover:text-primary aria-[current=page]:text-primary'
              onNavigate={() => setOpen(false)}
            />
          </div>
          <Socials
            containerStyles='flex gap-x-6'
            iconsStyles='text-3xl hover:text-primary'
          />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
