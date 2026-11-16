import Socials from './Socials'
import { profile } from '@/data/profile'

export const Footer = () => {
  return (
    <footer className='bg-secondary py-12'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-between'>
          <Socials
            containerStyles='flex gap-x-6 mb-4'
            iconsStyles='text-white/80 text-[20px] hover:text-primary transition-colors'
          />
          <p className='text-sm text-white/70'>
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
