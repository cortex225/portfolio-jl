'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

const links = [
  { path: '/', name: 'Home' },
  { path: '/projects', name: 'Projects' },
  { path: '/contact', name: 'Contact' }
]

const Nav = ({ containerStyles, linkStyles, underLineStyles, onNavigate }) => {
  const path = usePathname()
  return (
    <nav className={containerStyles} aria-label='Main'>
      {links.map((link) => {
        const active = link.path === path
        return (
          <Link
            key={link.path}
            href={link.path}
            className={linkStyles}
            aria-current={active ? 'page' : undefined}
            onClick={onNavigate}
          >
            {active && underLineStyles && (
              <motion.span
                initial={{ y: '-100%' }}
                animate={{ y: '0' }}
                transition={{ type: 'tween' }}
                layoutId='underline'
                className={underLineStyles}
              />
            )}
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav
