import Link from 'next/link'

import { Button } from '@/components/ui/button'

export default function NotFound () {
  return (
    <section className='container mx-auto flex min-h-[60vh] flex-col items-center justify-center py-24 text-center'>
      <p className='mb-4 text-sm font-semibold uppercase tracking-[4px] text-primary'>
        404
      </p>
      <h1 className='h2 mb-4'>This page doesn&apos;t exist</h1>
      <p className='subtitle'>The link may be old, or the address mistyped.</p>
      <Button asChild>
        <Link href='/'>Back to home</Link>
      </Button>
    </section>
  )
}
