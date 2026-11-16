import Link from 'next/link'
import { Download, Send } from 'lucide-react'
import { RiArrowDownSLine } from 'react-icons/ri'

import { Button } from './ui/button'
import DevImg from './DevImg'
import Socials from './Socials'
import BadgeSkills from './BadgeSkills'
import IconReact from './icons/IconReact'
import IconNextjs from './icons/IconNextjs'
import IconPostgresql from './icons/IconPostgresql'
import { profile } from '@/data/profile'

const Hero = () => {
  return (
    <section className='relative bg-hero bg-cover bg-bottom bg-no-repeat py-12 dark:bg-none xl:min-h-[84vh] xl:py-24 xl:pt-28'>
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8'>
          <div className='mx-auto flex max-w-[600px] flex-col justify-center text-center xl:mx-0 xl:text-left'>
            <p className='mb-4 text-sm font-semibold uppercase tracking-[4px] text-primary'>
              {profile.role}
            </p>
            <h1 className='h1 mb-4'>
              Hi, I&apos;m <span className='whitespace-nowrap'>Jean-Luc</span>{' '}
              Gouaho
            </h1>
            <p className='subtitle mx-auto max-w-[490px] xl:mx-0'>
              I build web apps end to end, from the database to the interface.
              Lately: a budgeting app on top of Plaid, a prospecting tool on
              Google Places and a recruiting platform for student athletes.
            </p>
            <div className='mx-auto mb-12 flex flex-col gap-3 md:flex-row xl:mx-0'>
              <Button asChild className='gap-x-2'>
                <Link href='/contact'>
                  Contact me <Send size={18} aria-hidden='true' />
                </Link>
              </Button>
              {profile.cv
                ? (
                  <Button asChild variant='secondary' className='gap-x-2'>
                    <a href={profile.cv} download>
                      Download CV <Download size={18} aria-hidden='true' />
                    </a>
                  </Button>
                  )
                : (
                  <Button asChild variant='secondary' className='gap-x-2'>
                    <Link href='/projects'>See my projects</Link>
                  </Button>
                  )}
            </div>
            <Socials
              containerStyles='mx-auto flex gap-x-6 xl:mx-0'
              iconsStyles='text-foreground text-[26px] hover:text-primary transition-colors'
            />
          </div>
          <div className='relative hidden xl:flex'>
            <BadgeSkills
              containerStyles='absolute top-[24%] -left-[2rem]'
              icon={<IconReact />}
              label='React'
            />
            <BadgeSkills
              containerStyles='absolute top-[80%] -left-[1rem]'
              icon={<IconNextjs />}
              label='Next.js'
            />
            <BadgeSkills
              containerStyles='absolute top-[55%] -right-8'
              icon={<IconPostgresql />}
              label='PostgreSQL'
            />
            <div className='absolute -right-2 -top-1 h-[500px] w-[500px] bg-hero_shape2_light bg-no-repeat dark:bg-hero_shape2_dark' />
            <DevImg
              containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom'
              imgSrc='/hero/jl-avatar.png'
              alt='Portrait of Jean-Luc Gouaho'
              priority
            />
          </div>
        </div>
        <div
          className='absolute bottom-12 left-1/2 hidden -translate-x-1/2 motion-safe:animate-bounce xl:flex'
          aria-hidden='true'
        >
          <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  )
}

export default Hero
