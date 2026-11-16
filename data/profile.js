// Personal details used across the site. Edit here, not in components.

export const profile = {
  name: 'Jean-Luc Gouaho',
  role: 'Full-stack developer',
  location: 'Quebec, Canada',
  email: 'jlgouaho@gmail.com',
  phone: '+1 450-521-1098',
  phoneHref: 'tel:+14505211098',
  github: 'https://github.com/cortex225',
  linkedin: 'https://www.linkedin.com/in/jlgouaho',
  siteUrl: 'https://portfolio-jl.vercel.app',
  // Path of the CV in public/, or null to hide the download button.
  cv: null,
  // First professional developer role, used to compute years of experience.
  careerStart: new Date('2022-04-01')
}

export function yearsOfExperience (now = new Date()) {
  const ms = now.getTime() - profile.careerStart.getTime()
  return Math.max(1, Math.floor(ms / (365.25 * 24 * 60 * 60 * 1000)))
}

export const experience = [
  {
    company: 'Royal Broker Solutions',
    role: 'Web Developer',
    period: 'Aug 2022 - Present'
  },
  {
    company: 'Royal Broker Solutions',
    role: 'Web Developer Intern',
    period: 'Apr 2022 - Aug 2022'
  },
  {
    company: 'Rogers Communications',
    role: 'Sales Specialist',
    period: 'Nov 2021 - Apr 2022'
  },
  {
    company: 'Best Buy',
    role: 'Customer Service',
    period: 'Oct 2020 - Nov 2021'
  }
]

export const education = [
  {
    school: 'Cégep de Granby',
    degree: 'DEC in Computer Science and Management',
    period: 'Granby, QC - 2024'
  },
  {
    school: 'Collège Le Figuier',
    degree: 'High school diploma',
    period: "Abidjan, Côte d'Ivoire - 2017"
  }
]

export const skills = [
  {
    group: 'Frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Vue.js',
      'Tailwind CSS'
    ]
  },
  {
    group: 'Backend',
    items: [
      'C#',
      '.NET',
      'Node.js',
      'Express',
      'Prisma',
      'SQL',
      'PostgreSQL',
      'NoSQL'
    ]
  },
  {
    group: 'Cloud & DevOps',
    items: ['Docker', 'Vercel', 'Azure', 'AWS', 'Git']
  },
  {
    group: 'Tools & methods',
    items: [
      'VS Code',
      'Rider',
      'Figma',
      'Notion',
      'Agile / Scrum',
      'WordPress'
    ]
  }
]

export const languages = [
  { name: 'French', level: 'Native' },
  { name: 'English', level: 'Professional' }
]
