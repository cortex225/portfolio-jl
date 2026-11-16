import Image from 'next/image'
import { ArrowUpRight, Github } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { projects } from '@/data/projects'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Projects',
  description:
    'Budget Buddy, LeadMapper and PlayerConnect: what each one does, how it is built, and screenshots.',
  path: '/projects'
})

const ExternalLink = ({ href, children, className }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className={`inline-flex items-center gap-1 font-medium hover:underline ${className}`}
  >
    {children}
    <span className='sr-only'>(opens in a new tab)</span>
  </a>
)

const Projects = () => {
  return (
    <section className='min-h-screen pb-24 pt-12 xl:pb-36'>
      <div className='container mx-auto'>
        <h1 className='section-title mx-auto mb-4 text-center'>Projects</h1>
        <p className='subtitle mx-auto mb-16 max-w-[560px] text-center'>
          What each project does, how it is built, and what it looks like.
          Screenshots use demo data.
        </p>
        <div className='flex flex-col gap-24'>
          {projects.map((project, index) => (
            <article
              key={project.slug}
              aria-labelledby={`${project.slug}-title`}
            >
              <div className='mb-8 grid gap-8 lg:grid-cols-[2fr_3fr] lg:items-center'>
                <div>
                  <Badge className='mb-4 text-sm uppercase'>
                    {project.category}
                  </Badge>
                  <h2 id={`${project.slug}-title`} className='h2 mb-4'>
                    {project.name}
                  </h2>
                  <p className='mb-4 text-xl'>{project.summary}</p>
                  <p className='mb-6 text-lg text-muted-foreground'>
                    {project.description}
                  </p>
                  <ul
                    className='mb-6 flex flex-wrap gap-2'
                    aria-label='Tech stack'
                  >
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className='rounded-full border border-border px-3 py-1 text-sm'
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className='flex gap-x-6 text-lg'>
                    {project.live && (
                      <ExternalLink
                        href={project.live}
                        className='text-primary'
                      >
                        Live site <ArrowUpRight size={18} aria-hidden='true' />
                      </ExternalLink>
                    )}
                    {project.github
                      ? (
                        <ExternalLink
                          href={project.github}
                          className='hover:text-primary'
                        >
                          <Github size={18} aria-hidden='true' /> Source
                        </ExternalLink>
                        )
                      : (
                        <span className='text-muted-foreground'>
                          Private repository
                        </span>
                        )}
                  </div>
                </div>
                <div className='relative aspect-[16/10] overflow-hidden rounded-2xl border border-border shadow-lg'>
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    priority={index === 0}
                    sizes='(min-width: 1024px) 60vw, 100vw'
                    className={`object-cover object-top ${project.imageDark ? 'dark:hidden' : ''}`}
                  />
                  {project.imageDark && (
                    <Image
                      src={project.imageDark}
                      alt={project.imageAlt}
                      fill
                      sizes='(min-width: 1024px) 60vw, 100vw'
                      className='hidden object-cover object-top dark:block'
                    />
                  )}
                </div>
              </div>
              <ul className='grid gap-6 sm:grid-cols-[2fr_2fr_1fr]'>
                {project.gallery.map((shot) => (
                  <li
                    key={shot.src}
                    className={`relative overflow-hidden rounded-xl border border-border bg-tertiary dark:bg-secondary/40 ${shot.mobile ? 'aspect-[9/16] max-sm:mx-auto max-sm:w-2/3' : 'aspect-[16/10] sm:self-start'}`}
                  >
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes={
                        shot.mobile
                          ? '(min-width: 640px) 20vw, 66vw'
                          : '(min-width: 640px) 40vw, 100vw'
                      }
                      className='object-cover object-top'
                    />
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
