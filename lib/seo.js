// Per-page metadata. Next merges metadata shallowly, so each page sets its own
// canonical URL and Open Graph block instead of inheriting the home page's.
const ogImage = { url: '/work/budget-buddy/desktop-01-accueil-clair.png', width: 2880, height: 1800 }

export function pageMetadata ({ title, description, path }) {
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: 'Jean-Luc Gouaho',
      url: path,
      title: title ? `${title} - Jean-Luc Gouaho` : 'Jean-Luc Gouaho - Full-stack developer',
      description,
      images: [ogImage]
    }
  }
}
