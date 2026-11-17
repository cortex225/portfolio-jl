// Single source for the projects shown on the home page and on /projects.
// Screenshots live in public/work/<slug>/. `github` is null for private repos.

export const projects = [
  {
    slug: 'budget-buddy',
    name: 'Budget Buddy',
    category: 'Web app',
    summary:
      'Personal budgeting built around one question: how much can I actually spend until my next paycheck?',
    description:
      'Links bank accounts through Plaid, then shows money left until payday, planned vs actual spending, card debt and savings goals. Each paycheck comes with an ordered plan: bills, envelopes, debt, then free spending.',
    stack: ['React', 'Vite', 'Vercel Functions', 'Neon Postgres', 'Plaid'],
    image: '/work/budget-buddy/desktop-01-accueil-clair.png',
    imageDark: '/work/budget-buddy/desktop-01-accueil-sombre.png',
    imageAlt:
      'Budget Buddy dashboard: money available until payday, paycheck plan and spending pace',
    gallery: [
      {
        src: '/work/budget-buddy/desktop-03-plan-prevu-vs-reel-clair.png',
        alt: 'Planned vs actual spending by category'
      },
      {
        src: '/work/budget-buddy/desktop-06-objectifs-clair.png',
        alt: 'Savings goals with progress'
      },
      {
        src: '/work/budget-buddy/mobile-01-accueil-clair.png',
        alt: 'Mobile home screen',
        mobile: true
      }
    ],
    live: 'https://budget-buddy.jlgouaho.com',
    github: null
  },
  {
    slug: 'leadmapper',
    name: 'LeadMapper',
    category: 'Web app',
    summary:
      'Prospecting tool for web designers: finds local businesses without a website and ranks them.',
    description:
      'Searches Google Places by trade and city, scores each business out of 100 (no website, rating, review volume, sector) and tracks outreach from "to contact" to "signed". The Google key stays on the server.',
    stack: ['React', 'TypeScript', 'Express', 'Leaflet', 'Google Places API'],
    image: '/work/leadmapper/desktop-02-resultats.png',
    imageAlt:
      'LeadMapper results for barbers in Montreal: scored list, map and business details',
    gallery: [
      {
        src: '/work/leadmapper/desktop-03-filtres.png',
        alt: 'High-priority businesses without a website in Quebec City'
      },
      { src: '/work/leadmapper/desktop-01-accueil.png', alt: 'Search screen' },
      {
        src: '/work/leadmapper/mobile-04-fiche.png',
        alt: 'Business details on mobile with score breakdown',
        mobile: true
      }
    ],
    live: 'https://lead-mapper.jlgouaho.com',
    github: 'https://github.com/cortex225/LeadMapper'
  },
  {
    slug: 'playerconnect',
    name: 'PlayerConnect',
    category: 'Mobile-first PWA',
    summary:
      'Athlete profiles for high school, CEGEP and university recruiting in Quebec.',
    description:
      'Athletes publish stats, videos and their game schedule; recruiters compare profiles and message them. Minors only receive messages from recruiters a parent approved, and messages asking for contact details are blocked. Installable as a PWA with offline support.',
    stack: [
      'Next.js 15',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Better Auth',
      'Stripe'
    ],
    image: '/work/playerconnect/desktop-01-accueil-clair.png',
    imageDark: '/work/playerconnect/desktop-01-accueil-sombre.png',
    imageAlt:
      'PlayerConnect landing page with an athlete card and recent game ratings',
    gallery: [
      {
        src: '/work/playerconnect/desktop-02-athlete-fiche-clair.png',
        alt: 'Athlete profile with ranking and game ratings'
      },
      {
        src: '/work/playerconnect/desktop-03-recruteur-accueil-clair.png',
        alt: 'Recruiter home with followed athletes'
      },
      {
        src: '/work/playerconnect/mobile-06-recruteur-recherche-clair.png',
        alt: 'Athlete search on mobile',
        mobile: true
      }
    ],
    live: 'https://player-connect.jlgouaho.com',
    github: 'https://github.com/cortex225/playerConnect'
  }
]
