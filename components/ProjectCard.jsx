import Image from 'next/image'
import { ArrowUpRight, Github } from 'lucide-react'

import { Card } from '@/components/ui/card'
import { Badge } from './ui/badge'

const ProjectCard = ({ project, priority = false }) => {
  return (
    <Card className='group flex h-full flex-col overflow-hidden'>
      <div className='relative aspect-[16/10] overflow-hidden border-b border-border bg-tertiary dark:bg-secondary/40'>
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          priority={priority}
          sizes='(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
          className={`object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-[1.02] ${project.imageDark ? 'dark:hidden' : ''}`}
        />
        {project.imageDark && (
          <Image
            src={project.imageDark}
            alt={project.imageAlt}
            fill
            sizes='(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
            className='hidden object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-[1.02] dark:block'
          />
        )}
        <Badge className='absolute left-5 top-4 text-sm font-medium uppercase'>
          {project.category}
        </Badge>
      </div>
      <div className='flex flex-1 flex-col px-8 py-6'>
        <h3 className='h4 mb-2'>{project.name}</h3>
        <p className='mb-4 text-lg text-muted-foreground'>{project.summary}</p>
        <ul className='mb-6 flex flex-wrap gap-2' aria-label='Tech stack'>
          {project.stack.map((tech) => (
            <li
              key={tech}
              className='rounded-full border border-border px-2.5 py-0.5 text-sm'
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className='mt-auto flex gap-x-6 text-base font-medium'>
          {project.live && (
            <a
              href={project.live}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-1 text-primary hover:underline'
            >
              Live site <ArrowUpRight size={18} aria-hidden='true' />
              <span className='sr-only'>(opens in a new tab)</span>
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-1 hover:text-primary hover:underline'
            >
              <Github size={18} aria-hidden='true' /> Source
              <span className='sr-only'>(opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </Card>
  )
}

export default ProjectCard
