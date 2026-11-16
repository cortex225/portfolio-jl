import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri'
import { Mail } from 'lucide-react'

import { profile } from '@/data/profile'

const links = [
  {
    label: 'GitHub',
    icon: <RiGithubFill />,
    href: profile.github,
    external: true
  },
  {
    label: 'LinkedIn',
    icon: <RiLinkedinFill />,
    href: profile.linkedin,
    external: true
  },
  { label: 'Email', icon: <Mail />, href: `mailto:${profile.email}` }
]

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <ul className={containerStyles}>
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            aria-label={
              link.external ? `${link.label} (opens in a new tab)` : link.label
            }
            className={`block ${iconsStyles}`}
            {...(link.external
              ? { target: '_blank', rel: 'noopener noreferrer' }
              : {})}
          >
            <span aria-hidden='true'>{link.icon}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Socials
