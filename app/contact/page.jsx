import { HomeIcon, MailIcon, PhoneCall } from 'lucide-react'

import Form from '@/components/Form'
import Socials from '@/components/Socials'
import { profile } from '@/data/profile'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Contact',
  description: 'Get in touch with Jean-Luc Gouaho, full-stack developer in Quebec.',
  path: '/contact'
})

const contactItems = [
  {
    icon: <MailIcon size={18} aria-hidden='true' />,
    label: profile.email,
    href: `mailto:${profile.email}`
  },
  {
    icon: <PhoneCall size={18} aria-hidden='true' />,
    label: profile.phone,
    href: profile.phoneHref
  },
  {
    icon: <HomeIcon size={18} aria-hidden='true' />,
    label: profile.location
  }
]

function Contact () {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='mb-6 grid pt-12 xl:mb-24 xl:h-[480px] xl:grid-cols-2'>
          <div className='flex flex-col justify-center'>
            <div className='mb-4 flex items-center gap-x-4 text-lg text-primary'>
              <span className='h-[2px] w-[30px] bg-primary' aria-hidden='true' />
              Contact
            </div>
            <h1 className='h1 mb-8 max-w-md'>Get in touch</h1>
            <p className='subtitle max-w-[440px]'>
              A question about one of my projects, an opportunity, or
              something you&apos;re building: send a message or email me
              directly.
            </p>
          </div>
          <div
            className='hidden w-full bg-contact_illustration_light bg-contain bg-top bg-no-repeat dark:bg-contact_illustration_dark xl:flex'
            aria-hidden='true'
          />
        </div>
        <div className='mb-24 grid gap-12 xl:mb-32 xl:grid-cols-2'>
          <div className='flex flex-col gap-y-6 text-base xl:gap-y-10 xl:text-lg'>
            <ul className='flex flex-col gap-y-6 xl:gap-y-10'>
              {contactItems.map((item) => (
                <li key={item.label} className='flex items-center gap-x-8'>
                  <span className='text-primary'>{item.icon}</span>
                  {item.href
                    ? <a href={item.href} className='hover:text-primary hover:underline'>{item.label}</a>
                    : <span>{item.label}</span>}
                </li>
              ))}
            </ul>
            <Socials
              containerStyles='flex gap-x-6'
              iconsStyles='text-foreground text-[32px] hover:text-primary transition-colors'
            />
          </div>
          <Form />
        </div>
      </div>
    </section>
  )
}

export default Contact
