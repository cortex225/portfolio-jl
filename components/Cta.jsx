import Link from 'next/link'

import { Button } from './ui/button'

const Cta = () => {
  return (
    <section className='bg-tertiary py-24 dark:bg-secondary/40'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center'>
          <h2 className='h2 mb-4 max-w-xl text-center'>
            Want to talk about a project?
          </h2>
          <p className='subtitle max-w-xl text-center'>
            Tell me what you&apos;re working on and what you need.
          </p>
          <Button asChild>
            <Link href='/contact'>Get in touch</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Cta
