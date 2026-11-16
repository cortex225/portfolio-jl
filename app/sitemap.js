import { profile } from '@/data/profile'

export default function sitemap () {
  return ['', '/projects', '/contact'].map((path) => ({
    url: `${profile.siteUrl}${path}`,
    lastModified: new Date()
  }))
}
