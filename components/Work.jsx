import Link from 'next/link'

import { Button } from './ui/button'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

const Work = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <div className='mx-auto mb-12 flex max-w-[640px] flex-col items-center text-center'>
          <h2 className='section-title mb-4'>Recent projects</h2>
          <p className='subtitle'>
            Three side projects built end to end, each around a real
            integration: bank data, Google Places, and recruiting rules for
            minors.
          </p>
        </div>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className='mt-12 flex justify-center'>
          <Button asChild variant='secondary'>
            <Link href='/projects'>Project details</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Work
